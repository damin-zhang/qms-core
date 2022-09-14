var _excluded = ["disabled", "onClick", "name", "label", "rules", "canInput"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";

/*
 * @Description: 带加号的select
 */
import { Input, Form, Button, Select, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
export default (function (_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      name = _ref.name,
      label = _ref.label,
      rules = _ref.rules,
      _ref$canInput = _ref.canInput,
      canInput = _ref$canInput === void 0 ? true : _ref$canInput,
      rest = _objectWithoutProperties(_ref, _excluded);

  var onInputKeyDown = function onInputKeyDown(e) {
    if (e.key !== 'Backspace') message.warn('不支持自由输入');
  };

  var onChange = function onChange(val) {// console.log(val)
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: rest.className ? 'calc(100% - 38px)' : '100%'
    }
  }, /*#__PURE__*/React.createElement(Form.Item, _extends({
    name: name,
    label: label,
    rules: rules
  }, rest, {
    style: {
      width: 'calc(100% - 38px)'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    mode: "tags",
    disabled: disabled || !canInput,
    dropdownStyle: {
      display: 'none'
    },
    defaultValue: rest.defaultValue && rest.defaultValue // onChange={onChange}
    // onFocus={()=>{ return message.warn('不支持自由输入')}}
    // onInputKeyDown={onInputKeyDown}

  })), /*#__PURE__*/React.createElement(Button, {
    disabled: disabled,
    type: "primary",
    onClick: onClick,
    icon: /*#__PURE__*/React.createElement(PlusOutlined, null),
    style: {
      height: '32px'
    }
  }))));
});