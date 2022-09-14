"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _ModelForm = _interopRequireDefault(require("./ModelForm"));

var _HeaderModel = _interopRequireDefault(require("./HeaderModel"));

var _BodyModel = _interopRequireDefault(require("./BodyModel"));

var _FooterModel = _interopRequireDefault(require("./FooterModel"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defectForm = _language.default.enterInput.defectForm;
var TabPane = _antd.Tabs.TabPane;

var InspectionModelCmp = function InspectionModelCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      selectedRows = _ref.selectedRows;
  var tabCmp = [{
    name: 'header',
    cmp: /*#__PURE__*/_react.default.createElement(_HeaderModel.default, {
      objectRows: selectedRows
    })
  }, {
    name: 'body',
    cmp: /*#__PURE__*/_react.default.createElement(_BodyModel.default, {
      objectRows: selectedRows
    })
  }, {
    name: defectForm,
    cmp: /*#__PURE__*/_react.default.createElement(_FooterModel.default, {
      objectRows: selectedRows
    })
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, _extends({}, tableProp, {
    paging: false
  })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    visible: showTab,
    height: "80%",
    closable: false,
    placement: "bottom",
    onClose: closeTab,
    zIndex: 999
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-x",
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
  })))), /*#__PURE__*/_react.default.createElement(_ModelForm.default, formProps));
};

var _default = InspectionModelCmp;
exports.default = _default;