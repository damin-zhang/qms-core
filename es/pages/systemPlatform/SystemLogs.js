function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'dva';
import LogManageCmp from '../../component/systemPlatform/logManage/logManageCmp';
var treeData = [{
  title: '登录系统',
  key: '1-1-1',
  action: 'LOGIN'
}, {
  title: '退出系统',
  key: '1-1-2',
  action: 'LOGOUT'
}];

var SystemLog = function SystemLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/React.createElement(LogManageCmp, pops);
};

function mapStateToProps(_ref) {
  var logManage = _ref.logManage;
  return _objectSpread({}, logManage);
}

export default connect(mapStateToProps)(SystemLog);