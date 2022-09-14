"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _tab = _interopRequireDefault(require("./tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.HashRouter, null, /*#__PURE__*/_react.default.createElement(_tab.default, null));
};

exports.default = _default;