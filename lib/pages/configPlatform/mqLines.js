"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../utils/utils");

var _MqLinesCmp = _interopRequireDefault(require("../../component/configPlatform/mqLines/MqLinesCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Descripttion: 信息总线
 */
var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.mqLines.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fields.REMARK,
  dataIndex: 'REMARK'
}];
var tab_namespace = ['mqListener'];

var MqLines = function MqLines(_ref) {
  var dispatch = _ref.dispatch,
      mqLines = _ref.mqLines,
      isModeling = _ref.isModeling;
  var dataList = mqLines.dataList,
      visible = mqLines.visible,
      selectedRowKeys = mqLines.selectedRowKeys,
      selectedRows = mqLines.selectedRows,
      namespace = mqLines.namespace,
      record = mqLines.record,
      activeKey = mqLines.activeKey,
      showTab = mqLines.showTab;

  var _ref2 = selectedRows[0] || {},
      STATE = _ref2.STATE,
      EFFECTIVE = _ref2.EFFECTIVE;

  var enable = isModeling && (STATE === 2 || STATE === 0);

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'mqLines/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'mqLines/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        showTab: true
      }
    });
    changePane(activeKey, selectedRows[0]);
  };

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    var STATE = rows.STATE;
    dispatch({
      type: 'mqLines/packet',
      payload: {
        activeKey: activeKey
      }
    });
    dispatch({
      type: 'commonConfig/queryItem',
      payload: {
        PID: rows.ID,
        namespace: tab_namespace[activeKey],
        enable: isModeling && (STATE === 2 || STATE === 0),
        other: {
          selectedRows: []
        },
        objectType: sessionStorage['tableConfigObjectType']
      }
    });
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'mqLines/packet',
      payload: {
        showTab: false
      }
    });
  };

  var rowSelection = {
    type: 'radio',
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

  var props = {
    tableProp: {
      dataList: dataList,
      columns: columns,
      btns: btns,
      rowSelection: rowSelection,
      onSearch: onSearch
    },
    formProps: {
      record: record,
      visible: visible,
      onCancel: toogleModal,
      namespace: namespace
    },
    changePane: changePane,
    closeTab: closeTab,
    showTab: showTab,
    activeKey: activeKey
  };
  return /*#__PURE__*/_react.default.createElement(_MqLinesCmp.default, props);
};

function mapStateToProps(_ref3) {
  var mqLines = _ref3.mqLines,
      isModeling = _ref3.user.isModeling;
  return {
    mqLines: mqLines,
    isModeling: isModeling
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(MqLines);

exports.default = _default;