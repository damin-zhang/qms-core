"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _TableWithBtn = _interopRequireDefault(require("../../component/common/table/TableWithBtn"));

var _MqAffairForm = _interopRequireDefault(require("../../component/configPlatform/mqAffair/MqAffairForm"));

var _mapParams = require("../../utils/mapParams");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Descripttion: 消息事务
 */
var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.mqAffair.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fields.CHANNELNAME,
  dataIndex: 'CHANNELNAME',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.REQPARAM,
  dataIndex: 'MTYPE',
  render: function render(text) {
    var fType = _mapParams.mqMtypeMap.find(function (item) {
      return item.value === text;
    });

    return fType ? fType.name : text;
  }
}];

var MqAffair = function MqAffair(_ref) {
  var dispatch = _ref.dispatch,
      mqAffair = _ref.mqAffair,
      isModeling = _ref.isModeling;
  var dataList = mqAffair.dataList,
      visible = mqAffair.visible,
      selectedRowKeys = mqAffair.selectedRowKeys,
      selectedRows = mqAffair.selectedRows,
      namespace = mqAffair.namespace,
      record = mqAffair.record;

  var _ref2 = selectedRows[0] || {},
      STATE = _ref2.STATE,
      EFFECTIVE = _ref2.EFFECTIVE;

  var enable = isModeling && (STATE === 2 || STATE === 0);

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'mqAffair/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'mqAffair/packet',
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

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/del',
        payload: {
          rows: rows,
          namespace: namespace
        }
      });
    };
  };

  var showObject = function showObject(condition) {
    dispatch({
      type: 'commonConfig/query',
      payload: {
        condition: condition,
        namespace: namespace
      }
    });
  };

  var synchro = function synchro(row) {
    return function () {
      dispatch({
        type: 'commonConfig/synchro',
        payload: {
          row: row,
          namespace: namespace
        }
      });
    };
  };

  var btns = [{
    name: buttons.select_show_obj,
    btns: [{
      name: buttons.show_synced_obj,
      func: function func() {
        showObject("state IN('F')");
      }
    }, {
      name: buttons.show_design_obj,
      disabled: !isModeling,
      func: function func() {
        showObject("state IN(0,2)");
      }
    }]
  }, {
    name: buttons.create,
    disabled: !isModeling,
    func: function func() {
      toogleModal(0);
    }
  }, {
    name: buttons.update,
    disabled: !enable,
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: STATE === 2 ? buttons.cancel_upgrade : buttons.delete,
    disabled: !enable,
    func: function func() {
      (0, _utils.confirm)({
        title: STATE === 2 ? buttons.cancel_upgrade : common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: buttons.synchro_model,
    disabled: !(enable || STATE === 1 && !EFFECTIVE),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.synchro_model,
        onOk: synchro(selectedRows[0])
      });
    }
  }];

  var onSearch = function onSearch(queryWord) {
    dispatch({
      type: 'commonConfig/search',
      payload: {
        queryWord: queryWord,
        namespace: namespace
      }
    });
  };

  var tableProps = {
    dataList: dataList,
    columns: columns,
    btns: btns,
    rowSelection: rowSelection,
    onSearch: onSearch
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps), /*#__PURE__*/_react.default.createElement(_MqAffairForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var mqAffair = _ref3.mqAffair,
      isModeling = _ref3.user.isModeling;
  return {
    mqAffair: mqAffair,
    isModeling: isModeling
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(MqAffair);

exports.default = _default;