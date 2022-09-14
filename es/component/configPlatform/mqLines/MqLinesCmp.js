/*
 * @Description: 信息总线组件
 */
import React from 'react';
import { Button, Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import DragCmp from '../../common/drag/DragCmp';
import TableWithBtn from '../../common/table/TableWithBtn';
import MqLinesForm from './MqLinesForm';
import MqListener from './MqListener';
import language from '@/locale/language';
var mqListener = language.configPlatform.mqLines.mqListener;
var TabPane = Tabs.TabPane;
var tabCmp = [{
  name: mqListener.title,
  cmp: /*#__PURE__*/React.createElement(MqListener, null)
}];

var MqLinesCmp = function MqLinesCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(DragCmp, {
    enable: {
      bottom: true
    },
    showTab: showTab
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp)), showTab && /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/React.createElement(Tabs, {
    onChange: changePane,
    activeKey: activeKey,
    tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
      onClick: closeTab
    })
  }, tabCmp.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item.name,
      key: "".concat(index)
    }, item.cmp);
  }))), /*#__PURE__*/React.createElement(MqLinesForm, formProps));
};

export default MqLinesCmp;