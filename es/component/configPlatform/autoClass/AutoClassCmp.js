function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * @Description: 查询视图组件
 */
import React from 'react';
import { Button, Tabs, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import DragCmp from '../../common/drag/DragCmp';
import TableWithBtn from '../../common/table/TableWithBtn';
import AutoClassForm from './AutoClassForm';
import Menu from '../tableConfig/menu/Menu';
import ViewStructureCmp from './ViewStructureCmp';
import language from '@/locale/language';
var _language$configPlatf = language.configPlatform,
    objectMenu = _language$configPlatf.tableConfig.objectMenu,
    viewStructure = _language$configPlatf.autoClass.viewStructure;
var TabPane = Tabs.TabPane;

var QueryViewCmp = function QueryViewCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      paging = _ref.paging,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var tabCmp = [{
    name: viewStructure.title,
    cmp: /*#__PURE__*/React.createElement(ViewStructureCmp, {
      activeTab: activeTab
    })
  }, {
    name: objectMenu.title,
    cmp: /*#__PURE__*/React.createElement(Menu, {
      objectANamespace: "autoClass",
      activeTab: activeTab,
      objectType: objectType
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(TableWithBtn, _extends({}, tableProp, {
    paging: paging
  })), /*#__PURE__*/React.createElement(Drawer, {
    visible: showTab,
    height: "80%",
    closable: false,
    placement: "bottom",
    onClose: closeTab,
    zIndex: 999
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-y",
    style: {
      width: '100%',
      height: '100%'
    }
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
  })))), /*#__PURE__*/React.createElement(AutoClassForm, formProps));
};

export default QueryViewCmp;