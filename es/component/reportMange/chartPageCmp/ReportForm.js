function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 报表表单组件
import React, { useState, useEffect } from 'react';
import { Form, Button, Select, DatePicker, Input, AutoComplete, Tooltip } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import '../index.css';
import language from '@/locale/language';
var viewFields = language.viewFields;
var Option = Select.Option;
var RangePicker = DatePicker.RangePicker;
var sectionDateFormat = 'YYYY-MM-DD';

function ReportForm(_ref) {
  var onFinish = _ref.onFinish,
      form = _ref.form,
      FREQUENCY = _ref.FREQUENCY,
      materialCN = _ref.materialCN,
      materialSeries = _ref.materialSeries,
      supplierName = _ref.supplierName,
      pageModel = _ref.pageModel;

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
  }, viewFields.materialCN, ":");
  var materialLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.materialSN, ":");
  var supplierNameLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.supplierName, ":");
  var materialSeriesLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.materialSeries, ":");
  var timeLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.timeQuantum, ":");
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
      width: '21%'
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
      width: '21%'
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
      width: '21%'
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
  }))), pageModel !== 'sample' && pageModel !== 'supplierRate' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      color: '#fff',
      width: '37%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '5px 0 10px 10px'
    }
  }, viewFields.time, "\uFF1A"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "FREQUENCY",
    key: 0,
    rules: [{
      required: true
    }],
    style: {
      width: '22 %'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: viewFields.choice,
    onChange: choice
  }, /*#__PURE__*/React.createElement(Option, {
    key: '周'
  }, viewFields.week), /*#__PURE__*/React.createElement(Option, {
    key: '月'
  }, viewFields.month), /*#__PURE__*/React.createElement(Option, {
    key: '年'
  }, viewFields.year), (pageModel === 'DPPM' || pageModel === 'inspection' || pageModel === 'inspectionNum') && /*#__PURE__*/React.createElement(Option, {
    key: 'TIME'
  }, viewFields.timeQuantum))), type !== '年' && type !== 'TIME' && /*#__PURE__*/React.createElement(Form.Item, {
    name: "QUERY_TIME",
    key: 1,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(DatePicker, {
    picker: type === '周' || type === 'week' ? 'month' : 'year',
    format: type === '周' || type === 'week' ? 'YYYY-MM' : 'YYYY'
  })), type === 'TIME' && /*#__PURE__*/React.createElement(Form.Item, {
    name: "TIME",
    format: sectionDateFormat,
    style: {
      width: '65%'
    },
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(RangePicker, {
    format: sectionDateFormat
  }))), (pageModel === 'sample' || pageModel === 'supplierRate') && /*#__PURE__*/React.createElement(Form.Item, {
    name: "TIME",
    label: timeLabel,
    format: sectionDateFormat,
    style: {
      width: '34%'
    },
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(RangePicker, {
    format: sectionDateFormat
  }))), /*#__PURE__*/React.createElement(Button, {
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

export default ReportForm;