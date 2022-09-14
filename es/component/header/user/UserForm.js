var _excluded = ["dispatch", "record", "employeeName", "initSetUPS"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 用户信息表单
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Divider, Select, Button, Drawer } from 'antd';
import { connect } from 'dva';
import language from '@/locale/language';
import PasswordForm from './PasswordForm';
import Avatars from './Avatar';
import { isUpdate } from '../../../utils/utils';
var _language$common = language.common,
    edit = _language$common.edit,
    save = _language$common.save,
    close = _language$common.close,
    _language$header$user = language.header.user,
    fields = _language$header$user.fields,
    user_center = _language$header$user.user_center,
    change_password = _language$header$user.change_password,
    yh_info = _language$header$user.yh_info;
var Item = Form.Item;
var Option = Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var UserForm = function UserForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      employeeName = _ref.employeeName,
      initSetUPS = _ref.initSetUPS,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible2 = _useState2[0],
      setVisible2 = _useState2[1];

  var visible = restProps.visible,
      onCancel = restProps.onCancel;
  var disabled = employeeName === 'admin' ? true : false;
  useEffect(function () {
    if (record) {
      form.setFieldsValue(record);
    }
  }, [record, form]);

  var onFinish = function onFinish(values) {
    var isChange = isUpdate(record, values);
    isChange && dispatch({
      type: 'user/editUser',
      payload: {
        values: values,
        record: record
      }
    });
    onCancel();
  };

  var toogleModal = function toogleModal() {
    dispatch({
      type: 'user/getInitSetUPS'
    });
    setVisible2(!visible2);
  };

  var footer = [];
  footer.push( /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: toogleModal
  }, change_password), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "default",
    onClick: onCancel
  }, close), employeeName !== 'admin' && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      form.submit();
    }
  }, save))));
  return /*#__PURE__*/React.createElement(Drawer, {
    title: user_center,
    form: form,
    footer: footer,
    placement: 'right',
    visible: visible,
    onClose: onCancel,
    width: '70%'
  }, /*#__PURE__*/React.createElement(Form, _extends({
    name: "user",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Divider, null, fields.avatar), /*#__PURE__*/React.createElement(Item, {
    name: "avatar",
    label: fields.avatar
  }, /*#__PURE__*/React.createElement(Avatars, form)), /*#__PURE__*/React.createElement(Divider, null, yh_info), /*#__PURE__*/React.createElement(Item, {
    name: "employeeNo",
    label: fields.employeeNo
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "employeeName",
    label: fields.employeeName
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "userName",
    label: fields.userName
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "tel",
    label: fields.tel
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled
  })), /*#__PURE__*/React.createElement(Item, {
    name: "mail",
    label: fields.mail
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled
  })), /*#__PURE__*/React.createElement(Item, {
    name: "sax",
    label: fields.sax
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Option, {
    value: '1'
  }, fields.man), /*#__PURE__*/React.createElement(Option, {
    value: '0'
  }, fields.women))), /*#__PURE__*/React.createElement(Item, {
    name: "age",
    label: fields.age
  }, /*#__PURE__*/React.createElement(InputNumber, {
    min: 0,
    max: 100,
    disabled: disabled
  })), /*#__PURE__*/React.createElement(Item, {
    name: "inTime",
    label: fields.INTIME
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "idCard",
    label: fields.idCard
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled
  })), /*#__PURE__*/React.createElement(Item, {
    name: "wkSate",
    label: fields.wkSate
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Option, {
    value: "ON"
  }, "\u5728\u5C97"), /*#__PURE__*/React.createElement(Option, {
    value: "LE"
  }, "\u79BB\u5C97"), /*#__PURE__*/React.createElement(Option, {
    value: "TR"
  }, "\u51FA\u5DEE"))), /*#__PURE__*/React.createElement(Item, {
    name: "userRemark",
    label: fields.employeeRemark
  }, /*#__PURE__*/React.createElement(Input.TextArea, {
    disabled: disabled
  })), /*#__PURE__*/React.createElement(Divider, null, fields.depart), /*#__PURE__*/React.createElement(Item, {
    name: "departMentNo",
    label: fields.departMentNo
  }, /*#__PURE__*/React.createElement(Input, _defineProperty({
    disabled: true
  }, "disabled", true))), /*#__PURE__*/React.createElement(Item, {
    name: "departMentName",
    label: fields.departMentName
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  }))), /*#__PURE__*/React.createElement(PasswordForm, {
    visible: visible2,
    onCancel: toogleModal,
    initSetUPS: initSetUPS
  }));
};

export default connect()(UserForm);