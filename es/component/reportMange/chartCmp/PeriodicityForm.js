function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 周期性检验/car关闭率表单组件
import React, { useState, useEffect } from 'react';
import { Form, Button, Select, DatePicker, Input, AutoComplete, Tooltip } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import language from '@/locale/language';
import '../index.css';
var viewFields = language.viewFields;
var Option = Select.Option;
var RangePicker = DatePicker.RangePicker;
var ngDateFormat = 'YYYY-MM-DD';

function PeriodicityForm(_ref) {
  var onFinish = _ref.onFinish,
      back = _ref.back,
      form = _ref.form,
      classNameOptions = _ref.classNameOptions,
      brandOptions = _ref.brandOptions,
      SQEOptions = _ref.SQEOptions,
      testPersonOptions = _ref.testPersonOptions,
      isNg = _ref.isNg,
      model = _ref.model,
      FREQUENCY = _ref.FREQUENCY,
      materialCN = _ref.materialCN,
      materialSeries = _ref.materialSeries,
      supplierName = _ref.supplierName;

  var _useState = useState('YYYY'),
      _useState2 = _slicedToArray(_useState, 2),
      dateFormat = _useState2[0],
      setDateFormat = _useState2[1];

  var _useState3 = useState('月'),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  useEffect(function () {
    setType(FREQUENCY);
  }, [FREQUENCY]);

  var choice = function choice(val) {
    setType(val);
    if (val === '周') setDateFormat('YYYY-MM');
    if (val === '月') setDateFormat('YYYY');
  };

  var formFinish = function formFinish(value) {
    onFinish(value, dateFormat);
  };

  var materialCNLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u7269\u6599\u5927\u7C7B\u540D\u79F0:");
  var materialLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u7269\u6599\u5C0F\u7C7B\u540D\u79F0:");
  var supplierCodeLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u4F9B\u5E94\u5546\u4EE3\u7801\u540D\u79F0:");
  var supplierNameLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u4F9B\u5E94\u5546\u540D\u79F0:");
  var materialSeriesLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u7269\u6599\u7CFB\u5217:");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'right'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    name: "property",
    onFinish: formFinish,
    form: form,
    layout: "inline",
    className: "periodicity",
    style: {
      width: '100%',
      margin: '5px'
    }
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: materialCNLabel,
    name: "MATERIAL_CN",
    style: {
      width: '15%'
    }
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, materialCN && materialCN.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item.MATERIAL_CN
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item.MATERIAL_CN
    }, item.MATERIAL_CN));
  }))), /*#__PURE__*/React.createElement(Form.Item, {
    label: supplierNameLabel,
    name: "SUPPLIER_NAME",
    style: {
      width: '15%'
    }
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, supplierName && supplierName.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item.SUPPLIER_NAME
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item.SUPPLIER_NAME
    }, item.SUPPLIER_NAME));
  }))), /*#__PURE__*/React.createElement(Form.Item, {
    label: materialSeriesLabel,
    name: "MATERIAL_SERIES",
    style: {
      width: '15%'
    }
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, materialSeries && materialSeries.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item.MATERIAL_SERIES
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item.MATERIAL_SERIES
    }, item.MATERIAL_SERIES));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      color: '#fff',
      width: '25%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 0 10px 10px'
    }
  }, "\u65F6\u95F4\uFF1A"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "FREQUENCY",
    key: 0,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: '80px'
    },
    placeholder: "\u9009\u62E9",
    onChange: choice
  }, /*#__PURE__*/React.createElement(Option, {
    key: '周'
  }, "\u5468"), /*#__PURE__*/React.createElement(Option, {
    key: '月'
  }, "\u6708"), /*#__PURE__*/React.createElement(Option, {
    key: '年'
  }, "\u5E74"))), type !== '年' && /*#__PURE__*/React.createElement(Form.Item, {
    name: "QUERY_TIME",
    key: 1,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(DatePicker, {
    picker: type === '周' || type === 'week' ? 'month' : 'year',
    format: type === '周' || type === 'week' ? 'YYYY-MM' : 'YYYY'
  })))), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return form.submit();
    },
    style: {
      height: '32px',
      margin: '5px'
    }
  }, viewFields.query));
}

export default PeriodicityForm;