"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _antd.Tabs.TabPane;

var apiDocument = function apiDocument() {
  var apiList = ['system', 'meta', 'log', 'file', 'query', 'application', 'auxiliary'];

  var reloadPage = function reloadPage(item) {
    document.getElementById("".concat(item, "_swagger")).contentWindow.location.reload();
  };

  return /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    defaultActiveKey: "0"
  }, apiList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: item,
      key: index
    }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      onClick: function onClick() {
        return reloadPage(item);
      }
    }, "\u5237\u65B0\u9875\u9762"), /*#__PURE__*/_react.default.createElement("iframe", {
      width: "100%",
      height: "100%",
      title: item,
      id: "".concat(item, "_swagger"),
      src: "/api/".concat(item, "/swagger-ui.html"),
      frameborder: "0"
    }));
  }));
};

var _default = apiDocument;
exports.default = _default;