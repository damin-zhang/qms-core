"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _logManageCmp = _interopRequireDefault(require("../../component/systemPlatform/logManage/logManageCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  return /*#__PURE__*/_react.default.createElement(_logManageCmp.default, pops);
};

function mapStateToProps(_ref) {
  var logManage = _ref.logManage;
  return _objectSpread({}, logManage);
}

var _default = (0, _dva.connect)(mapStateToProps)(SystemLog);

exports.default = _default;