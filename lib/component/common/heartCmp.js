"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heart = function Heart(_ref) {
  var item = _ref.item,
      toogleCollect = _ref.toogleCollect;
  return /*#__PURE__*/_react.default.createElement(_icons.HeartFilled, {
    style: {
      marginRight: '5px',
      color: 'red'
    },
    onClick: function onClick(e) {
      return toogleCollect(e, item);
    }
  });
};

var _default = Heart;
exports.default = _default;