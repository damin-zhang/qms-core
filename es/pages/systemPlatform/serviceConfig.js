function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import language from '@/locale/language';
import ServiceConfigcmp from '../../component/systemPlatform/serviceConfig/ServiceConfigcmp';
import SystemMail from '../../component/systemPlatform/systemMail/SystemMail';
import PollTask from '../../component/systemPlatform/PollTask/PollTask';
import AuthCodeMange from '../../component/systemPlatform/authCode/AuthCodeMange';
var TabPane = Tabs.TabPane;
var _language$systemPlatf = language.systemPlatform,
    ServiceConfig = _language$systemPlatf.ServiceConfig,
    systemMailbox = _language$systemPlatf.systemMailbox,
    PollingTransact = _language$systemPlatf.PollingTransact,
    authCode = _language$systemPlatf.authCode;

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      _ref$activeKey = _ref.activeKey,
      activeKey = _ref$activeKey === void 0 ? '0' : _ref$activeKey;
  var initialPanes = [{
    title: ServiceConfig.title2,
    content: /*#__PURE__*/React.createElement(ServiceConfigcmp, null)
  }, {
    title: systemMailbox.title,
    content: /*#__PURE__*/React.createElement(SystemMail, null)
  }, {
    title: PollingTransact.title,
    content: /*#__PURE__*/React.createElement(PollTask, null)
  }, {
    title: authCode.title,
    content: /*#__PURE__*/React.createElement(AuthCodeMange, null)
  }];

  var onChanges = function onChanges(activeKey) {
    dispatch({
      type: 'serviceConfig/queryItem',
      payload: {
        activeKey: activeKey
      }
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
    activeKey: activeKey,
    onChange: onChanges
  }, initialPanes.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item.title,
      key: index
    }, item.content);
  })));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

export default connect(mapStateToProps)(Index);