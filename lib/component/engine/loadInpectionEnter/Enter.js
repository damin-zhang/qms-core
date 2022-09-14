"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _EnterCmp = _interopRequireDefault(require("./EnterCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 装配质检录入页面
 */
var Enter = function Enter(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/_react.default.createElement(_EnterCmp.default, {
        engine: engine,
        props: props
      });
    };
  };
};

var _default = Enter;
exports.default = _default;