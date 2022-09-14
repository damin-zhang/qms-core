"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SpcControlChartCmp = _interopRequireDefault(require("./SpcControlChartCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// spc控制图
var _default = function _default(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_SpcControlChartCmp.default, props)));
    };
  };
};

exports.default = _default;