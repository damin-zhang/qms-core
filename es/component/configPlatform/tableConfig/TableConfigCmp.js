function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * @Description: 业务对象组件
 */
import React from 'react';
import { Button, Tabs, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import DragCmp from '../../common/drag/DragCmp';
import TableWithBtn from '../../common/table/TableWithBtn'; // 带按钮的表格组件，方便布局

import TableConfigForm from './TableConfigForm'; //业务对象表单

import Field from './field/Field';
import Menu from './menu/Menu';
import Property from './property/Property';
import Grid from './grid/Grid';
import Relation from './relation/Relation'; //关联页

import RelatedEvents from './relatedEvents/RelatedEvents'; //关联事件

import DblclickEvent from './dblclick/DblclickEvent'; //双击

import language from '@/locale/language';
var _language$configPlatf = language.configPlatform.tableConfig,
    fieldsProperty = _language$configPlatf.fieldsProperty,
    objectMenu = _language$configPlatf.objectMenu,
    objectProperty = _language$configPlatf.objectProperty,
    objectGrid = _language$configPlatf.objectGrid,
    objectRelationPage = _language$configPlatf.objectRelationPage,
    relatedEvents = _language$configPlatf.relatedEvents,
    dblclick = _language$configPlatf.dblclick;
var TabPane = Tabs.TabPane;

var TableConfigCmp = function TableConfigCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      paging = _ref.paging,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var selectedRows = tableProp.selectedRows;

  var _ref2 = selectedRows.length > 0 && selectedRows[0].META || {},
      TYPE = _ref2.TYPE;

  var tabCmp = [{
    name: fieldsProperty.title,
    cmp: /*#__PURE__*/React.createElement(Field, {
      activeTab: activeTab
    })
  }, {
    name: objectMenu.title,
    cmp: /*#__PURE__*/React.createElement(Menu, {
      objectANamespace: "tableConfig",
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: objectProperty.title,
    cmp: /*#__PURE__*/React.createElement(Property, {
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: objectGrid.title,
    cmp: /*#__PURE__*/React.createElement(Grid, {
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: objectRelationPage.title,
    cmp: /*#__PURE__*/React.createElement(Relation, {
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: relatedEvents.title,
    cmp: /*#__PURE__*/React.createElement(RelatedEvents, {
      activeTab: activeTab
    })
  }, {
    name: dblclick.title,
    cmp: /*#__PURE__*/React.createElement(DblclickEvent, {
      objectANamespace: "tableConfig",
      activeTab: activeTab,
      objectType: objectType
    })
  }];

  var showTabsByType = function showTabsByType() {
    var showTabCmp = [];

    switch (TYPE) {
      case 2:
        showTabCmp = [tabCmp[0]];
        break;

      case 3:
        showTabCmp = [tabCmp[0], tabCmp[1], tabCmp[2]];
        break;

      default:
        showTabCmp = tabCmp;
        break;
    }

    return showTabCmp.map(function (item, index) {
      return /*#__PURE__*/React.createElement(TabPane, {
        tab: item.name,
        key: "".concat(index)
      }, item.cmp);
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
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
    className: "flex-grow-x",
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
  }, showTabsByType()))), /*#__PURE__*/React.createElement(TableConfigForm, formProps));
};

export default TableConfigCmp;