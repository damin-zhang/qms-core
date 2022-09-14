"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _customWindow = require("../../../utils/customWindow");

var _BrowseFiles = _interopRequireDefault(require("../relationPage/BrowseFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description:定制组件
 */
var CustomWindow = function CustomWindow(engine) {
  return function (WrappedComponent) {
    var _engine$clickedMenu = engine.clickedMenu,
        no = _engine$clickedMenu.no,
        wType = _engine$clickedMenu.wType;

    var Cmp = function Cmp() {
      return /*#__PURE__*/_react.default.createElement("div", null);
    };

    if (no) {
      Cmp = _customWindow.customWindow.find(function (item) {
        return item.NO === no;
      });
    }

    if (Cmp) {
      Cmp = Cmp.COMPONENT;
    }

    return function (props) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props), wType && wType === 'browseFiles' ? /*#__PURE__*/_react.default.createElement(_BrowseFiles.default, {
        props: props,
        engine: engine
      }) : Cmp ? /*#__PURE__*/_react.default.createElement(Cmp, {
        engine: engine,
        props: props
      }) : /*#__PURE__*/_react.default.createElement("div", {
        style: {
          textAlign: 'center',
          fontSize: '18px'
        }
      }, "\u6CA1\u6709\u627E\u5230\u9875\u9762!"));
    };
  };
};

var _default = CustomWindow;
exports.default = _default;