var _excluded = ["record", "dispatch", "namespace"];

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
 * @Description: 字段表单
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox, Divider, InputNumber } from 'antd';
import { connect } from 'dva';
import DragModal from '../../common/drag/DragModal';
import SearchInput from '../../common/search/SearchInput';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.fieldsProperty,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title,
    inspection = language.enterInput.inspection;
var Option = Select.Option;
var Item = Form.Item;
var TextArea = Input.TextArea;
var pattern = '^[A-Z][A-Z0-9_]*$';
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var FieldForm = function FieldForm(_ref) {
  var record = _ref.record,
      dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    if (record.ID) values.id = record.ID;
    dispatch({
      type: 'qualityInspectionTemplate/edit',
      payload: {
        values: values,
        namespace: namespace,
        record: record,
        type: record.ID ? 'update' : 'create'
      }
    });
  };

  var selectData = function selectData(name) {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          form.setFieldsValue(_defineProperty({}, name, rows[0].TABLENAME));
        }
      }
    });
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    },
    width: 900
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "field",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: inspection.templateID,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "NAME",
    label: inspection.templateName
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(SearchInput, {
    name: "TABLEA",
    label: inspection.inspectionOrderCalculator,
    rules: [{
      required: true
    }],
    onClick: function onClick() {
      return selectData('TABLEA');
    }
  }), /*#__PURE__*/React.createElement(SearchInput, {
    name: "TABLEB",
    label: inspection.inspectionProjectCalculator,
    rules: [{
      required: true
    }],
    onClick: function onClick() {
      return selectData('TABLEB');
    }
  }), /*#__PURE__*/React.createElement(SearchInput, {
    name: "TABLEC",
    label: inspection.testResultCalculator,
    rules: [{
      required: true
    }],
    onClick: function onClick() {
      return selectData('TABLEC');
    }
  }), /*#__PURE__*/React.createElement(Item, {
    name: "ENABLE",
    label: inspection.isTakeEffect,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "COUNTTYPECANINPUT",
    label: inspection.COUNTTYPECANINPUT,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "PNCANINPUT",
    label: inspection.PNCANINPUT,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "TYPE",
    label: inspection.templateType
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: true
  }, /*#__PURE__*/React.createElement(Option, {
    value: 1,
    key: 1
  }, inspection.reportTemplate), /*#__PURE__*/React.createElement(Option, {
    value: 0,
    key: 0
  }, inspection.inspectionTemplate))), /*#__PURE__*/React.createElement(Item, {
    name: "TABLE_NO",
    label: inspection.tableNO
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "REVISE_VAR",
    label: inspection.revision
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "SCRIPT",
    label: inspection.scriptCalculate
  }, /*#__PURE__*/React.createElement(TextArea, null))));
};

export default connect()(FieldForm);