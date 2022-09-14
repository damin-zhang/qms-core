"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 多语言名称表单
 */
var fields = _language.default.configPlatform.tableConfig.fields;
var Item = _antd.Form.Item;

var LocaleNameForm = function LocaleNameForm() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.multiLanguage), /*#__PURE__*/_react.default.createElement(Item, {
    name: "NAME",
    label: fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "ENNAME",
    label: fields.ENNAME
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)));
};

var _default = LocaleNameForm;
exports.default = _default;