"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReportCmp = _interopRequireDefault(require("./ReportCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 装配质检报告页面
 */
var Report = function Report(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/_react.default.createElement(_ReportCmp.default, {
        engine: engine,
        props: props
      });
    };
  };
};

var _default = Report;
exports.default = _default;