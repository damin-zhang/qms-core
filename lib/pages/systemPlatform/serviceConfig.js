"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _language = _interopRequireDefault(require("@/locale/language"));

var _ServiceConfigcmp = _interopRequireDefault(require("../../component/systemPlatform/serviceConfig/ServiceConfigcmp"));

var _SystemMail = _interopRequireDefault(require("../../component/systemPlatform/systemMail/SystemMail"));

var _PollTask = _interopRequireDefault(require("../../component/systemPlatform/PollTask/PollTask"));

var _AuthCodeMange = _interopRequireDefault(require("../../component/systemPlatform/authCode/AuthCodeMange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabPane = _antd.Tabs.TabPane;
var _language$systemPlatf = _language.default.systemPlatform,
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
    content: /*#__PURE__*/_react.default.createElement(_ServiceConfigcmp.default, null)
  }, {
    title: systemMailbox.title,
    content: /*#__PURE__*/_react.default.createElement(_SystemMail.default, null)
  }, {
    title: PollingTransact.title,
    content: /*#__PURE__*/_react.default.createElement(_PollTask.default, null)
  }, {
    title: authCode.title,
    content: /*#__PURE__*/_react.default.createElement(_AuthCodeMange.default, null)
  }];

  var onChanges = function onChanges(activeKey) {
    dispatch({
      type: 'serviceConfig/queryItem',
      payload: {
        activeKey: activeKey
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    activeKey: activeKey,
    onChange: onChanges
  }, initialPanes.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: item.title,
      key: index
    }, item.content);
  })));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;