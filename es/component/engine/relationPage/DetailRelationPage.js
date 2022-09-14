// 明细关联页布局
import React from 'react';
import { Tabs } from 'antd';
var TabPane = Tabs.TabPane;
export default (function (engine) {
  return function (WrappedComponent) {
    return function (props) {
      var panes = props.model.panes;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(Tabs, {
        defaultActiveKey: panes[0] && panes[0].key
      }, panes.map(function (item) {
        return /*#__PURE__*/React.createElement(TabPane, {
          tab: item.caption,
          key: item.key
        }, item.Cmp);
      })));
    };
  };
});