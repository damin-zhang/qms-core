"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LSDCmp = _interopRequireDefault(require("./LSDCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AC() {
  return /*#__PURE__*/_react.default.createElement(_LSDCmp.default, {
    pageType: "AC"
  });
}

var _default = AC;
exports.default = _default;