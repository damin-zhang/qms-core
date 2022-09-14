function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'dva';
import LogManageCmp from '../../component/systemPlatform/logManage/logManageCmp';
var treeData = [{
  title: '新建',
  key: '1-2-1',
  action: 'NEW'
}, {
  title: '修改',
  key: '1-2-2',
  action: 'MODIFY'
}, {
  title: '删除',
  key: '1-2-3',
  action: 'DELETE'
}];

var OperationLog = function OperationLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/React.createElement(LogManageCmp, pops);
};

function mapStateToProps(_ref) {
  var logManage = _ref.logManage;
  return _objectSpread({}, logManage);
}

export default connect(mapStateToProps)(OperationLog);