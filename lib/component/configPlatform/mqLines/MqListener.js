"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _MqListenerForm = _interopRequireDefault(require("./MqListenerForm"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 信息总线-消息监听
 */
var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.mqLines.mqListener.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 200
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fields.ENNAME,
  dataIndex: 'QUEUES',
  width: 200
}];

var MqListener = function MqListener(_ref) {
  var dispatch = _ref.dispatch,
      mqListener = _ref.mqListener;
  var visible = mqListener.visible,
      record = mqListener.record,
      selectedRows = mqListener.selectedRows,
      selectedRowKeys = mqListener.selectedRowKeys,
      dataList = mqListener.dataList,
      namespace = mqListener.namespace,
      PID = mqListener.PID,
      enable = mqListener.enable;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'mqListener/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/delItem',
        payload: {
          rows: rows,
          namespace: namespace,
          PID: PID
        }
      });
    };
  };

  var btns = [{
    name: buttons.create,
    disabled: !enable,
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.update,
    disabled: !(enable && ID),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && ID),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'mqListener/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    fieldList: dataList,
    PID: PID
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps), /*#__PURE__*/_react.default.createElement(_MqListenerForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var mqListener = _ref3.mqListener;
  return {
    mqListener: mqListener
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(MqListener);

exports.default = _default;