"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImagePreviewCmp = _interopRequireDefault(require("./ImagePreviewCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 图片预览
 */
var _default = function _default(engine) {
  return function () {
    return function (props) {
      var model = props.model;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_ImagePreviewCmp.default, model));
    };
  };
};

exports.default = _default;