"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _PollTaskForm = _interopRequireDefault(require("./PollTaskForm"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$systemPlatf = _language.default.systemPlatform.PollingTransact,
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
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
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
          cmp = '5秒';
          break;

        case '*/10 * * * * ?':
          cmp = '10秒';
          break;

        case '*/30 * * * * ?':
          cmp = '30秒';
          break;

        case '*/60 * * * * ?':
          cmp = '60秒';
          break;

        case '1 * * * ?':
          cmp = '1分';
          break;

        case '0 0 0 * * ?':
          cmp = '每天0点';
          break;

        case '0 0 0/1 * * ?':
          cmp = '每天整点';
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
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
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
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        style: {
          marginLeft: 5
        },
        size: "small",
        disabled: record.enable,
        onClick: function onClick() {
          return (0, _utils.showConfirm)(function () {
            return startPollTask(record.id);
          }, '确定要启动吗？');
        }
      }, buttons.start), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        style: {
          marginLeft: 5
        },
        size: "small",
        disabled: !record.enable,
        onClick: function onClick() {
          return (0, _utils.showConfirm)(function () {
            return stopPollTask(record.id);
          }, '确定要停止吗？');
        }
      }, buttons.stop), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        style: {
          marginLeft: 5
        },
        size: "small",
        disabled: !record.enable,
        onClick: function onClick() {
          return (0, _utils.showConfirm)(function () {
            return restartPollTask(record.id);
          }, '确定要重启吗？');
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
      (0, _utils.confirm)({
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), /*#__PURE__*/_react.default.createElement(_PollTaskForm.default, formProps));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;