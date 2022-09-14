"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _TableWithBtn = _interopRequireDefault(require("../../../common/table/TableWithBtn"));

var _RelatedEventsForm = _interopRequireDefault(require("./RelatedEventsForm"));

var _mapParams = require("../../../../utils/mapParams");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 业务对象-关联事件
 */
var _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.tableConfig.relatedEvents.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 200
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fields.TYPE,
  dataIndex: 'TYPE',
  width: 100,
  render: function render(text) {
    var fType = _mapParams.relatedEventsMap.find(function (item) {
      return item.value === text;
    });

    return fType ? fType.name : text;
  }
}, {
  title: fields.PARAMS,
  dataIndex: 'PARAMS',
  render: function render(text) {
    return JSON.stringify(text);
  }
}];

var Field = function Field(_ref) {
  var dispatch = _ref.dispatch,
      relatedEvents = _ref.relatedEvents,
      activeTab = _ref.activeTab;
  var visible = relatedEvents.visible,
      record = relatedEvents.record,
      selectedRows = relatedEvents.selectedRows,
      selectedRowKeys = relatedEvents.selectedRowKeys,
      dataList = relatedEvents.dataList,
      namespace = relatedEvents.namespace,
      PID = relatedEvents.PID,
      enable = relatedEvents.enable,
      noFooter = relatedEvents.noFooter,
      OBJECTNO = relatedEvents.OBJECTNO,
      objectNO = relatedEvents.objectNO;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    // let PARAMS = JSON.parse(record.PARAMS || '{}')
    // const { RELEVANCENO } = PARAMS
    // if (!RELEVANCENO || RELEVANCENO.length === 0) {
    //   PARAMS.RELEVANCENO = ['']
    // }
    dispatch({
      type: 'relatedEvents/packet',
      payload: {
        record: record,
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var btns = [{
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && ID),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'relatedEvents/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns,
    rightClick: toogleModal
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    PID: PID,
    noFooter: noFooter,
    OBJECTNO: OBJECTNO,
    objectNO: objectNO
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps), /*#__PURE__*/_react.default.createElement(_RelatedEventsForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var relatedEvents = _ref3.relatedEvents;
  return {
    relatedEvents: relatedEvents
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Field);

exports.default = _default;