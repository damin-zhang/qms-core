import React from 'react';
import { Tabs, Button } from 'antd';
var TabPane = Tabs.TabPane;

var druidMonitor = function druidMonitor() {
  var apiList = ['system', 'meta', 'log', 'file', 'query', 'application', 'auxiliary'];

  var reloadPage = function reloadPage(item) {
    document.getElementById("".concat(item, "_druid")).contentWindow.location.reload();
  };

  return /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: "0"
  }, apiList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item,
      key: index
    }, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: function onClick() {
        return reloadPage(item);
      }
    }, "\u5237\u65B0\u9875\u9762"), /*#__PURE__*/React.createElement("iframe", {
      width: "100%",
      height: "100%",
      title: item,
      id: "".concat(item, "_druid"),
      src: "/api/".concat(item, "/druid/index.html"),
      frameborder: "0"
    }));
  }));
};

export default druidMonitor;