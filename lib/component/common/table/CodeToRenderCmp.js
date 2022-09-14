"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 代码块渲染组件 */
var CodeToRenderCmp = function CodeToRenderCmp(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "codeToRender"
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    style: {
      whiteSpace: 'pre-wrap'
    }
  }, props)));
};

var _default = CodeToRenderCmp;
exports.default = _default;