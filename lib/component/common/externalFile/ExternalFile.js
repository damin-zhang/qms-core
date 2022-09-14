"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ExternalFileCmp = _interopRequireDefault(require("./ExternalFileCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ExternalFile = function ExternalFile(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(WrappedComponent, props), /*#__PURE__*/_react.default.createElement(_ExternalFileCmp.default, _extends({
        engine: engine
      }, props)));
    };
  };
};

var _default = ExternalFile;
exports.default = _default;