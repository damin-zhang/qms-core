"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var common = _language.default.common;
var Search = _antd.Input.Search;

var _default = function _default(props) {
  return /*#__PURE__*/_react.default.createElement(Search, _extends({
    style: {
      marginBottom: '5px',
      flexGrow: 1
    },
    placeholder: common.search
  }, props, {
    enterButton: true
  }));
};

exports.default = _default;