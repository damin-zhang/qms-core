function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'dva';
import { Checkbox } from 'antd';
import TableWithBtn from '../../common/table/TableWithBtn';
import AuthCodeForm from './AuthCodeForm';
import { confirm } from '../../../utils/utils';
import language from '@/locale/language';
var common = language.common,
    _language$systemPlatf = language.systemPlatform.authCode,
    button1 = _language$systemPlatf.button1,
    field1 = _language$systemPlatf.field1;
var columns = [{
  title: field1.AUTHCODE,
  dataIndex: 'no',
  width: 100,
  align: 'center'
}, {
  title: field1.AUTHDESCRIBE,
  dataIndex: 'remark',
  width: 100,
  align: 'center'
}, {
  title: field1.AUTHSCOPE,
  dataIndex: 'name',
  width: 100,
  align: 'center'
}, {
  title: field1.CUSER,
  dataIndex: 'cuser',
  width: 120,
  align: 'center'
}, {
  title: field1.CTIME,
  dataIndex: 'ctime',
  width: 100,
  align: 'center'
}, {
  title: field1.STATE,
  dataIndex: 'state',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}];

var Index = function Index(_ref) {
  var dataList4 = _ref.dataList4,
      dispatch = _ref.dispatch,
      _ref$selectedRows = _ref.selectedRows4,
      selectedRows4 = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      selectedRowKeys4 = _ref.selectedRowKeys4,
      namespace = _ref.namespace,
      visible4 = _ref.visible4,
      record = _ref.record;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        record: record,
        visible4: !visible4
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys4, selectedRows4) {
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        selectedRowKeys4: selectedRowKeys4,
        selectedRows4: selectedRows4
      }
    });
  };

  var del = function del(authCodes) {
    return function () {
      dispatch({
        type: 'serviceConfig/del',
        payload: {
          authCodes: authCodes
        }
      });
    };
  };

  var btns = [{
    name: button1.createAuth,
    func: function func() {
      toogleModal();
    }
  }, {
    name: button1.updateAuth,
    disabled: !(selectedRows4[0] && selectedRows4.length === 1),
    func: function func() {
      toogleModal(selectedRows4[0]);
    }
  }, {
    name: button1.delAuth,
    disabled: !selectedRows4[0],
    func: function func() {
      confirm({
        title: common.confirm + button1.delAuth,
        onOk: del(selectedRows4)
      });
    }
  }];
  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys4
  };
  var tableProp = {
    dataList: dataList4,
    columns: columns,
    btns: btns,
    rowKey: 'id',
    rowSelection: rowSelection
  };
  var formProps = {
    record: record,
    visible: visible4,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), /*#__PURE__*/React.createElement(AuthCodeForm, formProps));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

export default connect(mapStateToProps)(Index);