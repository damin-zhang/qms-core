var _excluded = ["caption", "key"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 配置平台通用tabs切换组件
 */
import React, { useEffect } from 'react';
import { Tabs } from 'antd';
var TabPane = Tabs.TabPane;

var TabsTable = function TabsTable(_ref) {
  var namespace = _ref.namespace,
      tabsProps = _ref.tabsProps,
      activeTab = _ref.activeTab,
      tableProps = _ref.tableProps,
      dispatch = _ref.dispatch,
      showObject = _ref.showObject,
      setObjectType = _ref.setObjectType,
      Cmp = _ref.Cmp;

  var tabsOnchange = function tabsOnchange(activeKey) {
    dispatch({
      type: "".concat(namespace, "/packet"),
      payload: {
        showTab: false,
        selectedRows: [],
        selectedRowKeys: []
      }
    });

    switch (activeKey) {
      case '1':
        setObjectType('commonObject');
        sessionStorage['tableConfigObjectType'] = 'commonObject';
        showObject(undefined, undefined, activeKey);
        break;

      case '2':
        setObjectType('workObject');
        sessionStorage['tableConfigObjectType'] = 'workObject';
        showObject('state IN(0,2)', 'workObject', activeKey);
        break;

      case '3':
        setObjectType('commonObject');
        sessionStorage['tableConfigObjectType'] = 'commonObject';
        showObject('sobject=1', undefined, activeKey);
        break;

      default:
        break;
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '40px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: tabsProps[0].key,
    onChange: tabsOnchange,
    activeKey: activeTab
  }, tabsProps.map(function (tab) {
    var caption = tab.caption,
        key = tab.key,
        rest = _objectWithoutProperties(tab, _excluded);

    return /*#__PURE__*/React.createElement(TabPane, _extends({
      tab: caption,
      key: key
    }, rest));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100% - 40px)'
    }
  }, /*#__PURE__*/React.createElement(Cmp, tableProps)));
};

export default TabsTable;