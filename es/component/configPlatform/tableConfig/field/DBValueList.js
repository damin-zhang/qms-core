function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * @Description: DB值列表编辑器
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import { queryObjFields } from '../../../../service/metaApi';
import language from '@/locale/language';
var fields1 = language.configPlatform.tableConfig.fieldsProperty.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;
var layout2 = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

var ObjectSelector = function ObjectSelector(_ref) {
  var form = _ref.form,
      fieldList = _ref.fieldList;
  useEffect(function () {
    var EDITPARAMS = form.getFieldValue('EDITPARAMS') || {};
    var _EDITPARAMS$mapFields = EDITPARAMS.mapFields,
        mapFields = _EDITPARAMS$mapFields === void 0 ? [] : _EDITPARAMS$mapFields;

    if (!mapFields || mapFields.length === 0) {
      form.setFieldsValue({
        EDITPARAMS: {
          mapFields: [{
            sfield: '',
            tfield: ''
          }]
        }
      });
    }
  }, [form]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: ['EDITPARAMS', 'canInput'],
    label: fields1.canInput,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: ['EDITPARAMS', 'multiple'],
    label: fields1.multiple,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, _extends({
    name: ['EDITPARAMS', 'sql'],
    label: fields1.sql,
    className: "whole-line"
  }, layout2), /*#__PURE__*/React.createElement(Input.TextArea, null)), /*#__PURE__*/React.createElement(List, {
    name: ['EDITPARAMS', 'mapFields'],
    style: {
      width: '100%'
    }
  }, function (fields) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        label: fields1.tfield,
        name: [field.name, 'tfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '目标字段']
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        } // onSearch={val => {
        //   let EDITPARAMS = form.getFieldValue('EDITPARAMS')
        //   const { mapFields = [] } = EDITPARAMS
        //   if (val) {
        //     if (!mapFields[index]) mapFields[index] = {}
        //     mapFields[index].tfield = val
        //     form.setFieldsValue({ EDITPARAMS: { ...EDITPARAMS, mapFields } })
        //   }
        // }}
        ,
        onChange: function onChange(val, item) {
          var EDITPARAMS = form.getFieldValue('EDITPARAMS');
          var _EDITPARAMS$mapFields2 = EDITPARAMS.mapFields,
              mapFields = _EDITPARAMS$mapFields2 === void 0 ? [] : _EDITPARAMS$mapFields2;

          if (val) {
            if (!mapFields[index]) mapFields[index] = {};
            mapFields[index].tfield = val;
            mapFields[index].sfield = item.children;
            form.setFieldsValue({
              EDITPARAMS: _objectSpread(_objectSpread({}, EDITPARAMS), {}, {
                mapFields: mapFields
              })
            });
          }
        }
      }, fieldList.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.FIELDNAME,
          key: item.ID
        }, item.NAME);
      }))), /*#__PURE__*/React.createElement(Item, {
        label: fields1.nfield,
        name: [field.name, 'sfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '列名']
      }, /*#__PURE__*/React.createElement(Input, {
        disabled: true
      })));
    }));
  }));
};

export default connect()(ObjectSelector);