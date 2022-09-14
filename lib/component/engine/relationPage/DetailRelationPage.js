"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 明细关联页布局
var TabPane = _antd.Tabs.TabPane;

var _default = function _default(engine) {
  return function (WrappedComponent) {
    return function (props) {
      var panes = props.model.panes;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
        defaultActiveKey: panes[0] && panes[0].key
      }, panes.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(TabPane, {
          tab: item.caption,
          key: item.key
        }, item.Cmp);
      })));
    };
  };
};

exports.default = _default;