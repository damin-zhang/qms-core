/*
 * @Description: 多语言名称表单
 */
import React from 'react';
import { Form, Input, Divider } from 'antd';
import language from '@/locale/language';
var fields = language.configPlatform.tableConfig.fields;
var Item = Form.Item;

var LocaleNameForm = function LocaleNameForm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null, fields.multiLanguage), /*#__PURE__*/React.createElement(Item, {
    name: "NAME",
    label: fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "ENNAME",
    label: fields.ENNAME
  }, /*#__PURE__*/React.createElement(Input, null)));
};

export default LocaleNameForm;