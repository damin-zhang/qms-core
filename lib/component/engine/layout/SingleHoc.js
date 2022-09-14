"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 单页面布局 faceType: 1
 */
var _default = function _default(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "hide-full"
    }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props));
  };
};

exports.default = _default;