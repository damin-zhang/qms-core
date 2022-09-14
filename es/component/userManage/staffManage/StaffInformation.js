var _excluded = ["dispatch", "record"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 员工表单
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Checkbox, DatePicker } from 'antd';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$userManage$ = language.userManage.staffManage,
    title2 = _language$userManage$.title2,
    fields = _language$userManage$.fields;
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

var PropertyForm = function PropertyForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Form, _extends({
    name: "property",
    layout: "inline"
  }, restProps, {
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "no",
    label: fields.SUNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "suName",
    label: fields.SUNAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "tel",
    label: fields.SUTEL
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "sax",
    label: fields.SAX
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: true
  }, /*#__PURE__*/React.createElement(Option, {
    value: 1
  }, "\u7537"), /*#__PURE__*/React.createElement(Option, {
    value: 0
  }, "\u5973"))), /*#__PURE__*/React.createElement(Item, {
    name: "inTime",
    label: fields.INTIME
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "idCard",
    label: fields.IDCARD
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "mail",
    label: fields.MAIL
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "mailPassword",
    label: fields.MAILPASSWORD
  }, /*#__PURE__*/React.createElement(Input.Password, {
    autoComplete: "nope",
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "opState",
    label: fields.OPSTATE,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    disabled: true
  })));
};

export default connect()(PropertyForm);