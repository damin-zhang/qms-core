"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 第三方页面
 */
var _default = function _default(_ref) {
  var HyperlinkUrl = _ref.HyperlinkUrl;
  return function (WrappedComponent) {
    return function (_ref2) {
      var model = _ref2.model;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement("iframe", {
        width: "100%",
        height: "100%",
        title: '质检报告',
        id: "embedThreePartyPage",
        src: "".concat(HyperlinkUrl),
        frameBorder: '0'
      }));
    };
  };
};

exports.default = _default;