"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _language = _interopRequireDefault(require("@/locale/language"));

var _excluded = ["dispatch", "record"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var edit = _language.default.common.edit,
    _language$userManage$ = _language.default.userManage.staffManage,
    title2 = _language$userManage$.title2,
    fields = _language$userManage$.fields;
var Item = _antd.Form.Item;
var Option = _antd.Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var PropertyForm = function PropertyForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "property",
    layout: "inline"
  }, restProps, {
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "no",
    label: fields.SUNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "suName",
    label: fields.SUNAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "tel",
    label: fields.SUTEL
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "sax",
    label: fields.SAX
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 1
  }, "\u7537"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 0
  }, "\u5973"))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "inTime",
    label: fields.INTIME
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "idCard",
    label: fields.IDCARD
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "mail",
    label: fields.MAIL
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "mailPassword",
    label: fields.MAILPASSWORD
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Password, {
    autoComplete: "nope",
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "opState",
    label: fields.OPSTATE,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    disabled: true
  })));
};

var _default = (0, _dva.connect)()(PropertyForm);

exports.default = _default;