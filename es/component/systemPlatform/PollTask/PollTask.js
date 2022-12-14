function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'dva';
import { Checkbox, Button } from 'antd';
import TableWithBtn from '../../common/table/TableWithBtn';
import PollTaskForm from './PollTaskForm';
import { showConfirm, confirm } from '../../../utils/utils';
import language from '@/locale/language';
var common = language.common,
    _language$systemPlatf = language.systemPlatform.PollingTransact,
    buttons = _language$systemPlatf.buttons,
    fields = _language$systemPlatf.fields;

var Index = function Index(_ref) {
  var dataList3 = _ref.dataList3,
      dispatch = _ref.dispatch,
      _ref$selectedRows = _ref.selectedRows3,
      selectedRows3 = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      selectedRowKeys3 = _ref.selectedRowKeys3,
      namespace = _ref.namespace,
      visible3 = _ref.visible3,
      record = _ref.record;
  var columns = [{
    title: fields.TASKNAME,
    dataIndex: 'name',
    width: 80,
    align: 'center'
  }, {
    title: fields.TASKREALIZATION,
    dataIndex: 'implClass',
    width: 80,
    align: 'center'
  }, {
    title: fields.ISENABLE,
    dataIndex: 'enable',
    width: 80,
    align: 'center',
    render: function render(text) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: text
      });
    }
  }, {
    title: fields.POLLINGTIME,
    dataIndex: 'pollTime',
    width: 80,
    align: 'center',
    render: function render(text) {
      var cmp;

      switch (text) {
        case '*/5 * * * * ?':
          cmp = '5???';
          break;

        case '*/10 * * * * ?':
          cmp = '10???';
          break;

        case '*/30 * * * * ?':
          cmp = '30???';
          break;

        case '*/60 * * * * ?':
          cmp = '60???';
          break;

        case '1 * * * ?':
          cmp = '1???';
          break;

        case '0 0 0 * * ?':
          cmp = '??????0???';
          break;

        case '0 0 0/1 * * ?':
          cmp = '????????????';
          break;

        default:
          cmp = text;
          break;
      }

      return cmp;
    }
  }, {
    title: fields.POLLINGPARAMETERS,
    dataIndex: 'arg',
    width: 80,
    align: 'center'
  }, {
    title: fields.OUTTIME,
    dataIndex: 'outTime',
    width: 80,
    align: 'center'
  }, {
    title: fields.DEFAULTSTART,
    dataIndex: 'selfStart',
    width: 80,
    align: 'center',
    render: function render(text) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: text
      });
    }
  }, {
    title: fields.REMARK,
    dataIndex: 'remark',
    width: 100,
    align: 'center'
  }, {
    title: fields.CREATEPERSON,
    dataIndex: 'cuser',
    align: 'center'
  }, {
    title: fields.STARTTIME,
    dataIndex: 'startTime',
    width: 100,
    align: 'center'
  }, {
    title: fields.OPERATION,
    width: 240,
    align: 'center',
    frozen: 'right',
    fixed: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        style: {
          marginLeft: 5
        },
        size: "small",
        disabled: record.enable,
        onClick: function onClick() {
          return showConfirm(function () {
            return startPollTask(record.id);
          }, '?????????????????????');
        }
      }, buttons.start), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        style: {
          marginLeft: 5
        },
        size: "small",
        disabled: !record.enable,
        onClick: function onClick() {
          return showConfirm(function () {
            return stopPollTask(record.id);
          }, '?????????????????????');
        }
      }, buttons.stop), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        style: {
          marginLeft: 5
        },
        size: "small",
        disabled: !record.enable,
        onClick: function onClick() {
          return showConfirm(function () {
            return restartPollTask(record.id);
          }, '?????????????????????');
        }
      }, buttons.restart));
    }
  }];

  var startPollTask = function startPollTask(id) {
    dispatch({
      type: 'serviceConfig/startPollTask',
      payload: {
        id: id
      }
    });
  };

  var stopPollTask = function stopPollTask(id) {
    dispatch({
      type: 'serviceConfig/stopPollTask',
      payload: {
        id: id
      }
    });
  };

  var restartPollTask = function restartPollTask(id) {
    dispatch({
      type: 'serviceConfig/restartPollTask',
      payload: {
        id: id
      }
    });
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        record: record,
        visible3: !visible3
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys3, selectedRows3) {
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        selectedRowKeys3: selectedRowKeys3,
        selectedRows3: selectedRows3
      }
    });
  };

  var del = function del(pollTasks) {
    return function () {
      dispatch({
        type: 'serviceConfig/delPollTast',
        payload: {
          pollTasks: pollTasks
        }
      });
    };
  };

  var delEnable = function delEnable() {
    var enable = true;

    if (selectedRows3.length) {
      selectedRows3.some(function (item) {
        enable = item.enable;

        if (enable) {
          return enable;
        }
      });
    }

    return enable;
  };

  var btns = [{
    name: buttons.create,
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.update,
    disabled: !(selectedRows3.length === 1 && !selectedRows3[0].enable),
    func: function func() {
      toogleModal(selectedRows3[0]);
    }
  }, {
    name: buttons.del,
    disabled: delEnable(),
    func: function func() {
      confirm({
        title: common.confirm + buttons.del,
        onOk: del(selectedRows3)
      });
    }
  }];
  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys3
  };
  var tableProp = {
    dataList: dataList3,
    columns: columns,
    btns: btns,
    rowKey: 'id',
    rowSelection: rowSelection
  };
  var formProps = {
    record: record,
    visible: visible3,
    namespace: namespace
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), /*#__PURE__*/React.createElement(PollTaskForm, formProps));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

export default connect(mapStateToProps)(Index);