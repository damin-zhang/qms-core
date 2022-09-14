"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _GlobalTableForm = _interopRequireDefault(require("./GlobalTableForm"));

var _GlobalField = _interopRequireDefault(require("./GlobalField"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 全局表格组件
 */
var globalField = _language.default.configPlatform.globalTable.globalField;
var TabPane = _antd.Tabs.TabPane;
var tabCmp = [{
  name: globalField.title,
  cmp: /*#__PURE__*/_react.default.createElement(_GlobalField.default, null)
}];

var AutoClassCmp = function AutoClassCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      bottom: true
    },
    showTab: showTab
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp)), showTab && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    onChange: changePane,
    activeKey: activeKey,
    tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
      onClick: closeTab
    })
  }, tabCmp.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: item.name,
      key: "".concat(index)
    }, item.cmp);
  }))), /*#__PURE__*/_react.default.createElement(_GlobalTableForm.default, formProps));
};

var _default = AutoClassCmp;
exports.default = _default;