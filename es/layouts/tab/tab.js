/*
 * @Description: 布局-页签
 */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Tabs, Spin, Dropdown, Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import { ReactSVG } from 'react-svg';
import ActStartProcess from '../../pages/activiti/ProcessManage/ActStartProcess';
import SelectData from '../../component/configPlatform/common/SelectData';
import AssignRole from '../../pages/systemPlatform/AssignRole';
import styles from './tab.css';
import './tabStyle.css';
import language from '@/locale/language';
import { isEnglish } from '../../utils/utils';
import classNames from 'classnames';
var tab_context_menu = language.common.tab_context_menu;

var svgDir = require.context('.././../assets/icon/');

var TabPane = Tabs.TabPane;
var Item = Menu.Item;
var arr = ['close_current_tags', 'close_other_tags', 'close_all_tags'];

var TabCmp = function TabCmp(_ref) {
  var dispatch = _ref.dispatch,
      loading = _ref.loading,
      tab = _ref.tab;
  var panes = tab.panes,
      activeKey = tab.activeKey,
      contextMenuKey = tab.contextMenuKey,
      modals = tab.modals;
  var _localStorage = localStorage,
      menuData = _localStorage.menuData;

  try {
    menuData = JSON.parse(menuData || '[]');
  } catch (err) {
    menuData = [];
  }

  if (!loading) loading = tab.loading;

  var onEdit = function onEdit(key, type) {
    dispatch({
      type: 'tab/closeTab',
      payload: {
        type: type,
        key: key
      }
    });
  };

  var onChange = function onChange(activeKey) {
    var navList = menuData.filter(function (item) {
      return item.META && item.META.isStatistics;
    }) || [];
    navList = navList.filter(function (item) {
      return item.PID !== 'collect';
    });

    if (navList.length) {
      var pageIds = [];
      navList.map(function (item) {
        return pageIds.push(item.ID);
      });
      dispatch({
        type: 'user/queryNavigationTotal',
        payload: {
          pageIds: pageIds
        }
      });
    }

    dispatch({
      type: 'tab/packet',
      payload: {
        activeKey: activeKey
      }
    });
  };

  useEffect(function () {
    var selectKey = panes.find(function (item) {
      return activeKey === item.key;
    }) || {};

    if (activeKey !== 'Home' && selectKey.record && selectKey.record.ID) {
      dispatch({
        type: 'user/packet',
        payload: {
          selectedKeys: [selectKey.record.ID.toString()]
        }
      });
    } else dispatch({
      type: 'user/packet',
      payload: {
        selectedKeys: []
      }
    });
  }, [activeKey, panes]);
  var menu = /*#__PURE__*/React.createElement(Menu, null, arr.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Item, {
      key: item,
      onClick: function onClick() {
        return onEdit(contextMenuKey, index);
      }
    }, tab_context_menu[item]);
  }));
  var menu2 = /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Item, {
    onClick: function onClick() {
      return onEdit(contextMenuKey, 1);
    }
  }, tab_context_menu['close_other_tags']));

  var _onVisibleChange = function onVisibleChange(key) {
    dispatch({
      type: 'tab/packet',
      payload: {
        contextMenuKey: key
      }
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
    onChange: onChange,
    onEdit: onEdit,
    activeKey: activeKey,
    type: "editable-card",
    hideAdd: true,
    className: classNames([styles.tabs, 'selectedBackground'])
  }, panes.map(function (item) {
    var newIcon = null;
    var IconView = null;

    if (item.icon) {
      if (item.icon.indexOf('third-') != -1) {
        //筛选第三方图标库的icons
        newIcon = item.icon.substring(6); //将第三方图标库标识去掉
      } else {
        item.icon = item.icon.substring(0, 1).toUpperCase() + item.icon.substring(1, item.icon.length);
        IconView = Icon["".concat(item.icon, "Outlined")];
      }
    }

    return /*#__PURE__*/React.createElement(TabPane, {
      tab: /*#__PURE__*/React.createElement(Dropdown, {
        overlay: item.key !== 'Home' ? menu : menu2,
        trigger: ['contextMenu'],
        onVisibleChange: function onVisibleChange(visible) {
          if (visible) _onVisibleChange(item.key);
        }
      }, /*#__PURE__*/React.createElement("span", null, item.icon && (newIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
        className: "thirdIcons",
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/React.createElement(IconView, null)), item.caption ? item.caption : isEnglish ? item.record.ENNAME : item.record.NAME)),
      key: item.key,
      className: styles.tabPane,
      closable: item.closable
    }, item.Cmp);
  })), loading && /*#__PURE__*/React.createElement(Spin, {
    spinning: loading,
    delay: 100,
    className: styles.spin
  }), modals.map(function (item) {
    return item.Cmp;
  }), /*#__PURE__*/React.createElement(ActStartProcess, null), /*#__PURE__*/React.createElement(AssignRole, null), /*#__PURE__*/React.createElement(SelectData, null));
};

function mapStateToProps(_ref2) {
  var tab = _ref2.tab,
      loading = _ref2.loading,
      user = _ref2.user;
  return {
    loading: loading.global,
    tab: tab,
    user: user
  };
}

export default connect(mapStateToProps)(TabCmp);