function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 登录
 */
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import { accessToken } from '../../service/systemApi';
import { encodeBase64 } from '../../utils/utils';
import styles from './index.css';
import language from '@/locale/language';
import request from '../../service/request';
var _language$login = language.login,
    title = _language$login.title,
    inputJobNumber = _language$login.inputJobNumber,
    inputPassword = _language$login.inputPassword;
var Item = Form.Item;

var Login = function Login(_ref) {
  var dispatch = _ref.dispatch,
      loading = _ref.loading;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      loginInfo = _useState2[0],
      setLoginInfo = _useState2[1];

  useEffect(function () {
    request('/systems.json').then(function (res) {
      setLoginInfo(res.loginInfo);
      document.getElementsByTagName('title')[0].innerText = res.loginInfo.title;
      localStorage['system'] = JSON.stringify(res);
    });
  }, []);

  var onFinish = function onFinish(values) {
    /* 若localStorage中没有AcceptLanguage则设置 */
    if (!localStorage.getItem('AcceptLanguage')) localStorage['AcceptLanguage'] = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2);
    localStorage.setItem('userName', values.userName);
    accessToken({
      userName: values.userName
    }).then(function (res) {
      if (res) {
        if (res.accessToken) {
          values.userPassword = encodeBase64(res.accessToken + encodeBase64(values.userPassword) + res.accessToken);
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

  return /*#__PURE__*/React.createElement("div", {
    className: styles.main
  }, /*#__PURE__*/React.createElement("img", {
    width: "100%",
    height: "100%",
    src: require('../../assets/loginBg.png')
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.loginLogo
  }, /*#__PURE__*/React.createElement("img", {
    width: "100%",
    src: require('../../assets/logo.png')
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.loginTitle
  }, loginInfo.loginTitle), /*#__PURE__*/React.createElement("div", {
    className: styles.loginSubtitle
  }, loginInfo.loginEnTitle), /*#__PURE__*/React.createElement("div", {
    className: styles.avatarLoginForm
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.loginAvatar
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 100,
    src: localStorage.getItem('avatar'),
    icon: /*#__PURE__*/React.createElement(UserOutlined, null)
  })), /*#__PURE__*/React.createElement(Form, {
    name: "login",
    initialValues: {
      remember: true,
      userName: localStorage.userName
    },
    onFinish: onFinish,
    className: styles.loginForm
  }, /*#__PURE__*/React.createElement(Item, {
    name: "userName",
    rules: [{
      required: true,
      message: inputJobNumber
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    className: styles.loginInputStyle,
    size: "large",
    prefix: /*#__PURE__*/React.createElement(UserOutlined, null),
    placeholder: inputJobNumber
  })), /*#__PURE__*/React.createElement(Item, {
    name: "userPassword",
    rules: [{
      required: true,
      message: inputPassword
    }]
  }, /*#__PURE__*/React.createElement(Input.Password, {
    className: styles.loginInputStyle,
    size: "large",
    prefix: /*#__PURE__*/React.createElement(LockOutlined, null),
    type: "password",
    placeholder: inputPassword
  })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
    className: styles.loginInputStyle,
    block: true,
    size: "large",
    type: "primary",
    htmlType: "submit",
    loading: loading
  }, title)))), /*#__PURE__*/React.createElement("div", {
    className: styles.footer
  }, loginInfo.copyRight, /*#__PURE__*/React.createElement("br", null), loginInfo.copyRightEn));
};

function mapStateToProps(_ref2) {
  var loading = _ref2.loading;
  return {
    loading: loading.global
  };
}

export default connect(mapStateToProps)(Login);