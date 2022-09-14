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

var _AutoClassForm = _interopRequireDefault(require("./AutoClassForm"));

var _Menu = _interopRequireDefault(require("../tableConfig/menu/Menu"));

var _ViewStructureCmp = _interopRequireDefault(require("./ViewStructureCmp"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _language$configPlatf = _language.default.configPlatform,
    objectMenu = _language$configPlatf.tableConfig.objectMenu,
    viewStructure = _language$configPlatf.autoClass.viewStructure;
var TabPane = _antd.Tabs.TabPane;

var QueryViewCmp = function QueryViewCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      paging = _ref.paging,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var tabCmp = [{
    name: viewStructure.title,
    cmp: /*#__PURE__*/_react.default.createElement(_ViewStructureCmp.default, {
      activeTab: activeTab
    })
  }, {
    name: objectMenu.title,
    cmp: /*#__PURE__*/_react.default.createElement(_Menu.default, {
      objectANamespace: "autoClass",
      activeTab: activeTab,
      objectType: objectType
    })
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, _extends({}, tableProp, {
    paging: paging
  })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    visible: showTab,
    height: "80%",
    closable: false,
    placement: "bottom",
    onClose: closeTab,
    zIndex: 999
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-y",
    style: {
      width: '100%',
      height: '100%'
    }
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
  })))), /*#__PURE__*/_react.default.createElement(_AutoClassForm.default, formProps));
};

var _default = QueryViewCmp;
exports.default = _default;