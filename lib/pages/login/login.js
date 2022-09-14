"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _dva = require("dva");

var _systemApi = require("../../service/systemApi");

var _utils = require("../../utils/utils");

var _index = _interopRequireDefault(require("./index.css"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _request = _interopRequireDefault(require("../../service/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$login = _language.default.login,
    title = _language$login.title,
    inputJobNumber = _language$login.inputJobNumber,
    inputPassword = _language$login.inputPassword;
var Item = _antd.Form.Item;

var Login = function Login(_ref) {
  var dispatch = _ref.dispatch,
      loading = _ref.loading;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      loginInfo = _useState2[0],
      setLoginInfo = _useState2[1];

  (0, _react.useEffect)(function () {
    (0, _request.default)('/systems.json').then(function (res) {
      setLoginInfo(res.loginInfo);
      document.getElementsByTagName('title')[0].innerText = res.loginInfo.title;
      localStorage['system'] = JSON.stringify(res);
    });
  }, []);

  var onFinish = function onFinish(values) {
    /* 若localStorage中没有AcceptLanguage则设置 */
    if (!localStorage.getItem('AcceptLanguage')) localStorage['AcceptLanguage'] = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2);
    localStorage.setItem('userName', values.userName);
    (0, _systemApi.accessToken)({
      userName: values.userName
    }).then(function (res) {
      if (res) {
        if (res.accessToken) {
          values.userPassword = (0, _utils.encodeBase64)(res.accessToken + (0, _utils.encodeBase64)(values.userPassword) + res.accessToken);
          dispatch({
            type: 'login/login',
            payload: {
              values: values
            },
            callback: function callback() {
              values.force = true;
              dispatch({
                type: 'login/login',
                payload: {
                  values: values
                }
              });
            }
          });
        }
      }
    }).catch(function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.main
  }, /*#__PURE__*/_react.default.createElement("img", {
    width: "100%",
    height: "100%",
    src: require('../../assets/loginBg.png')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.loginLogo
  }, /*#__PURE__*/_react.default.createElement("img", {
    width: "100%",
    src: require('../../assets/logo.png')
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.loginTitle
  }, loginInfo.loginTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.loginSubtitle
  }, loginInfo.loginEnTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.avatarLoginForm
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.loginAvatar
  }, /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
    size: 100,
    src: localStorage.getItem('avatar'),
    icon: /*#__PURE__*/_react.default.createElement(_icons.UserOutlined, null)
  })), /*#__PURE__*/_react.default.createElement(_antd.Form, {
    name: "login",
    initialValues: {
      remember: true,
      userName: localStorage.userName
    },
    onFinish: onFinish,
    className: _index.default.loginForm
  }, /*#__PURE__*/_react.default.createElement(Item, {
    name: "userName",
    rules: [{
      required: true,
      message: inputJobNumber
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    className: _index.default.loginInputStyle,
    size: "large",
    prefix: /*#__PURE__*/_react.default.createElement(_icons.UserOutlined, null),
    placeholder: inputJobNumber
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "userPassword",
    rules: [{
      required: true,
      message: inputPassword
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Password, {
    className: _index.default.loginInputStyle,
    size: "large",
    prefix: /*#__PURE__*/_react.default.createElement(_icons.LockOutlined, null),
    type: "password",
    placeholder: inputPassword
  })), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    className: _index.default.loginInputStyle,
    block: true,
    size: "large",
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, title)))), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.footer
  }, loginInfo.copyRight, /*#__PURE__*/_react.default.createElement("br", null), loginInfo.copyRightEn));
};

function mapStateToProps(_ref2) {
  var loading = _ref2.loading;
  return {
    loading: loading.global
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Login);

exports.default = _default;