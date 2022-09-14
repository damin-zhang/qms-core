function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Radio } from 'antd';
import TableWithBtn from '../../common/table/TableWithBtn';
import ServiceConfigForm from './ServiceConfigForm';
import { confirm } from '../../../utils/utils';
import language from '@/locale/language';
var common = language.common,
    _language$systemPlatf = language.systemPlatform.ServiceConfig,
    button = _language$systemPlatf.button,
    fields = _language$systemPlatf.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'no',
  width: 100
}, {
  title: fields.NAME,
  dataIndex: 'name',
  width: 100
}, {
  title: fields.CONFIG_VALUE,
  dataIndex: 'config_value',
  width: 150,
  align: 'center'
}, {
  title: fields.IS_DYNAMIC,
  dataIndex: 'is_dynamic',
  width: 80,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Radio, {
      checked: text
    });
  }
}, {
  title: fields.CUSER,
  dataIndex: 'cuser',
  width: 80
}, {
  title: fields.CTIME,
  dataIndex: 'ctime',
  width: 100
}, {
  title: fields.MUSER,
  dataIndex: 'muser',
  width: 80
}, {
  title: fields.MTIME,
  dataIndex: 'mtime',
  width: 100
}];

var Index = function Index(_ref) {
  var dataList1 = _ref.dataList1,
      dispatch = _ref.dispatch,
      _ref$selectedRows = _ref.selectedRows1,
      selectedRows1 = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      selectedRowKeys1 = _ref.selectedRowKeys1,
      namespace = _ref.namespace,
      visible1 = _ref.visible1,
      record = _ref.record;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        record: record,
        visible1: !visible1
      }
    });
  };

  useEffect(function () {
    dispatch({
      type: 'serviceConfig/queryItem',
      payload: {
        activeKey: '0'
      }
    });
  }, [1]);

  var onSelectChange = function onSelectChange(selectedRowKeys1, selectedRows1) {
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        selectedRowKeys1: selectedRowKeys1,
        selectedRows1: selectedRows1
      }
    });
  };

  var del = function del(systemConfigs) {
    return function () {
      dispatch({
        type: 'serviceConfig/delSystemconfig',
        payload: {
          systemConfigs: systemConfigs
        }
      });
    };
  };

  var btns = [{
    name: button.create,
    func: function func() {
      toogleModal();
    }
  }, {
    name: button.update,
    disabled: !(selectedRows1[0] && selectedRows1.length === 1),
    func: function func() {
      toogleModal(selectedRows1[0]);
    }
  }, {
    name: button.del,
    disabled: !selectedRows1[0],
    func: function func() {
      confirm({
        title: common.confirm + button.del,
        onOk: del(selectedRows1)
      });
    }
  }];
  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys1
  };
  var tableProp = {
    dataList: dataList1,
    columns: columns,
    btns: btns,
    rowKey: 'id',
    rowSelection: rowSelection
  };
  var formProps = {
    record: record,
    visible: visible1,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), /*#__PURE__*/React.createElement(ServiceConfigForm, formProps));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

export default connect(mapStateToProps)(Index);