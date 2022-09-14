function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { Form, Select, DatePicker, Button, AutoComplete } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { getDvaApp } from 'umi';
import { parseMeta } from '../../../utils/utils';
import language from '@/locale/language';
var viewFields = language.viewFields;

function ChartAllForm(_ref) {
  var onFinish = _ref.onFinish,
      back = _ref.back,
      form = _ref.form,
      pageTitle = _ref.pageTitle,
      supplierOptions = _ref.supplierOptions,
      FREQUENCY = _ref.FREQUENCY,
      isPerf = _ref.isPerf;

  var _useState = useState('YYYY'),
      _useState2 = _slicedToArray(_useState, 2),
      dateFormat = _useState2[0],
      setDateFormat = _useState2[1];

  var _useState3 = useState('月'),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var Option = Select.Option;
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

  var toMeasure = function toMeasure() {
    var menuData = parseMeta(JSON.parse(localStorage.getItem('menuData')));
    var parms = menuData.filter(function (item) {
      return item.NO === 'FOLLOW_ACTION_IQC';
    }) || [];
    var dva = getDvaApp();
    var payload = parms[0];

    dva._store.dispatch({
      type: 'tab/queryConfig',
      payload: payload
    });
  };

  var supplierLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u4F9B\u5E94\u5546:");
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
      display: 'flex',
      justifyContent: 'right'
    }
  }, back && /*#__PURE__*/React.createElement(LeftCircleOutlined, {
    style: {
      margin: '8px',
      fontSize: '25px',
      color: '#fff'
    },
    onClick: back
  }), pageTitle === '来料' && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: toMeasure,
    style: {
      height: '32px',
      margin: '5px'
    }
  }, "\u63AA\u65BD"), isPerf && /*#__PURE__*/React.createElement(Form.Item, {
    label: supplierLabel,
    name: "SUPPLIER_NAME",
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    options: supplierOptions,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      color: '#fff',
      width: '320px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 10px'
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

export default ChartAllForm;