"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reportManagement = function reportManagement() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("iframe", {
    width: "100%",
    height: "100%",
    title: 'item',
    id: "application",
    src: "/api/application/jmreport/list",
    frameborder: "0"
  }));
};

var _default = reportManagement;
exports.default = _default;