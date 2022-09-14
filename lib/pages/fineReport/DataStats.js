"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataStats = function DataStats() {
  var href = window.location.href;
  var src = href.split('//')[1].split(':')[0];
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    src: "http://".concat(src, ":8080/webroot/decision/view/report?viewlet=\u6570\u636E\u9762\u677F1.frm"),
    width: "100%",
    height: "100%",
    title: "report"
  }));
};

var _default = DataStats;
exports.default = _default;