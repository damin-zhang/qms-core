function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Button, Tabs, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import TableWithBtn from '../../common/table/TableWithBtn';
import InspectionForm from './ModelForm';
import HeaderModel from './HeaderModel';
import BodyModel from './BodyModel';
import FooterModel from './FooterModel';
import language from '@/locale/language';
var defectForm = language.enterInput.defectForm;
var TabPane = Tabs.TabPane;

var InspectionModelCmp = function InspectionModelCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      selectedRows = _ref.selectedRows;
  var tabCmp = [{
    name: 'header',
    cmp: /*#__PURE__*/React.createElement(HeaderModel, {
      objectRows: selectedRows
    })
  }, {
    name: 'body',
    cmp: /*#__PURE__*/React.createElement(BodyModel, {
      objectRows: selectedRows
    })
  }, {
    name: defectForm,
    cmp: /*#__PURE__*/React.createElement(FooterModel, {
      objectRows: selectedRows
    })
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableWithBtn, _extends({}, tableProp, {
    paging: false
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
  }, tabCmp.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item.name,
      key: "".concat(index)
    }, item.cmp);
  })))), /*#__PURE__*/React.createElement(InspectionForm, formProps));
};

export default InspectionModelCmp;