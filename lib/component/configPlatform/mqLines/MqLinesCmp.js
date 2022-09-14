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

var _MqLinesForm = _interopRequireDefault(require("./MqLinesForm"));

var _MqListener = _interopRequireDefault(require("./MqListener"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 信息总线组件
 */
var mqListener = _language.default.configPlatform.mqLines.mqListener;
var TabPane = _antd.Tabs.TabPane;
var tabCmp = [{
  name: mqListener.title,
  cmp: /*#__PURE__*/_react.default.createElement(_MqListener.default, null)
}];

var MqLinesCmp = function MqLinesCmp(_ref) {
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
  }))), /*#__PURE__*/_react.default.createElement(_MqLinesForm.default, formProps));
};

var _default = MqLinesCmp;
exports.default = _default;