var _excluded = ["dispatch", "onCancel", "initSetUPS"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 密码表单
 */
import React, { useState } from 'react';
import { Form, Input, message, Drawer, Button } from 'antd';
import { connect } from 'dva';
import DragModal from '../../common/drag/DragModal';
import { isNumber, encodeBase64 } from '../../../utils/utils';
import { accessToken } from '../../../service/systemApi';
import language from '@/locale/language';
var common = language.common,
    _language$header = language.header,
    _language$header$user = _language$header.user,
    fields = _language$header$user.fields,
    change_password = _language$header$user.change_password,
    change_password_info1 = _language$header$user.change_password_info1,
    change_password_info2 = _language$header$user.change_password_info2,
    _language$header$mess = _language$header.message,
    password_cannot_number = _language$header$mess.password_cannot_number,
    length_out_of_range = _language$header$mess.length_out_of_range,
    contains_numbers_english = _language$header$mess.contains_numbers_english,
    contains_special_characters = _language$header$mess.contains_special_characters;
var patternSpecialCharacters = /[!@#$%^&*]/;
var patternLetterNumber = /^(?![^a-zA-Z]+$)(?!\D+$)/;
var Item = Form.Item;
var Password = Input.Password;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var PasswordForm = function PasswordForm(_ref) {
  var dispatch = _ref.dispatch,
      onCancel = _ref.onCancel,
      initSetUPS = _ref.initSetUPS,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var visible = restProps.visible;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    var newPassword = values.newPassword,
        newPassword2 = values.newPassword2,
        password = values.password;

    if (newPassword2 !== newPassword) {
      message.error(change_password_info1);
    } else if (newPassword === password) {
      message.error(change_password_info2);
    } else if (isNumber(newPassword)) {
      message.warn(password_cannot_number);
    } else {
      accessToken({
        userName: localStorage.getItem('userName')
      }).then(function (res) {
        if (res) {
          if (res.accessToken) {
            dispatch({
              type: 'user/editPassword',
              payload: {
                values: {
                  newPassword: encodeBase64(res.accessToken + encodeBase64(newPassword) + res.accessToken),
                  password: encodeBase64(res.accessToken + encodeBase64(password) + res.accessToken)
                },
                onCancel: onCancel
              }
            });
          }
        }
      });
    }
  };

  var matchRule = function matchRule(value) {
    if (initSetUPS) {
      var safetyLevel = initSetUPS.safetyLevel,
          maxLength = initSetUPS.maxLength,
          minLength = initSetUPS.minLength; // 长度校验

      if (value.length < minLength || value.length > maxLength) return Promise.reject(length_out_of_range + ' [' + minLength + ',' + maxLength + ']'); // 格式校验

      if (safetyLevel === 1 || safetyLevel === 2) {
        if (!patternLetterNumber.test(value)) {
          return Promise.reject(contains_numbers_english);
        }

        if (safetyLevel === 2 && !patternSpecialCharacters.test(value)) {
          return Promise.reject(contains_special_characters + ' [!@#$%^&*]');
        }
      }

      return Promise.resolve();
    }
  };

  var footer = [];
  footer.push( /*#__PURE__*/React.createElement("div", {
    style: {
      float: 'right'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "default",
    onClick: onCancel
  }, common.cancel), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      form.submit();
    }
  }, common.ok)));
  return /*#__PURE__*/React.createElement(Drawer, _extends({
    width: '50%',
    title: change_password,
    form: form,
    footer: footer
  }, restProps, {
    onClose: onCancel,
    visible: visible,
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "password",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "password",
    label: fields.password,
    rules: [{
      required: true
    }],
    className: "whole-line"
  }, /*#__PURE__*/React.createElement(Password, {
    autoComplete: "new-password"
  })), /*#__PURE__*/React.createElement(Item, {
    name: "newPassword",
    label: fields.newPassword,
    rules: [{
      required: true
    }, {
      validator: function validator(_, value) {
        return matchRule(value);
      }
    }],
    className: "whole-line"
  }, /*#__PURE__*/React.createElement(Password, {
    autoComplete: "new-password"
  })), /*#__PURE__*/React.createElement(Item, {
    name: "newPassword2",
    label: fields.newPassword2,
    rules: [{
      required: true
    }, {
      validator: function validator(_, value) {
        return matchRule(value);
      }
    }],
    className: "whole-line"
  }, /*#__PURE__*/React.createElement(Password, {
    autoComplete: "new-password"
  }))));
};

export default connect()(PasswordForm);