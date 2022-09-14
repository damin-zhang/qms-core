"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

require("../index.css");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var viewFields = _language.default.viewFields;
var Option = _antd.Select.Option;
var RangePicker = _antd.DatePicker.RangePicker;
var sectionDateFormat = 'YYYY-MM-DD';

function ReportForm(_ref) {
  var onFinish = _ref.onFinish,
      form = _ref.form,
      FREQUENCY = _ref.FREQUENCY,
      materialCN = _ref.materialCN,
      materialSeries = _ref.materialSeries,
      supplierName = _ref.supplierName,
      pageModel = _ref.pageModel;

  var _useState = (0, _react.useState)('YYYY'),
      _useState2 = _slicedToArray(_useState, 2),
      dateFormat = _useState2[0],
      setDateFormat = _useState2[1];

  var _useState3 = (0, _react.useState)('月'),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  (0, _react.useEffect)(function () {
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

  var materialCNLabel = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.materialCN, ":");

  var materialLabel = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.materialSN, ":");

  var supplierNameLabel = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.supplierName, ":");

  var materialSeriesLabel = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.materialSeries, ":");

  var timeLabel = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, viewFields.timeQuantum, ":");

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    name: "property",
    onFinish: formFinish,
    form: form,
    layout: "inline",
    className: "periodicity",
    style: {
      width: '100%',
      margin: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: materialCNLabel,
    name: "MATERIAL_CN",
    style: {
      width: '21%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, materialCN && materialCN.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: index,
      value: item.MATERIAL_CN
    }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: item.MATERIAL_CN
    }, item.MATERIAL_CN));
  }))), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: supplierNameLabel,
    name: "SUPPLIER_NAME",
    style: {
      width: '21%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, supplierName && supplierName.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: index,
      value: item.SUPPLIER_NAME
    }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: item.SUPPLIER_NAME
    }, item.SUPPLIER_NAME));
  }))), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: materialSeriesLabel,
    name: "MATERIAL_SERIES",
    style: {
      width: '21%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, materialSeries && materialSeries.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: index,
      value: item.MATERIAL_SERIES
    }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: item.MATERIAL_SERIES
    }, item.MATERIAL_SERIES));
  }))), pageModel !== 'sample' && pageModel !== 'supplierRate' && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      color: '#fff',
      width: '37%'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '5px 0 10px 10px'
    }
  }, viewFields.time, "\uFF1A"), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "FREQUENCY",
    key: 0,
    rules: [{
      required: true
    }],
    style: {
      width: '22 %'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    placeholder: viewFields.choice,
    onChange: choice
  }, /*#__PURE__*/_react.default.createElement(Option, {
    key: '周'
  }, viewFields.week), /*#__PURE__*/_react.default.createElement(Option, {
    key: '月'
  }, viewFields.month), /*#__PURE__*/_react.default.createElement(Option, {
    key: '年'
  }, viewFields.year), (pageModel === 'DPPM' || pageModel === 'inspection' || pageModel === 'inspectionNum') && /*#__PURE__*/_react.default.createElement(Option, {
    key: 'TIME'
  }, viewFields.timeQuantum))), type !== '年' && type !== 'TIME' && /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "QUERY_TIME",
    key: 1,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
    picker: type === '周' || type === 'week' ? 'month' : 'year',
    format: type === '周' || type === 'week' ? 'YYYY-MM' : 'YYYY'
  })), type === 'TIME' && /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "TIME",
    format: sectionDateFormat,
    style: {
      width: '65%'
    },
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(RangePicker, {
    format: sectionDateFormat
  }))), (pageModel === 'sample' || pageModel === 'supplierRate') && /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "TIME",
    label: timeLabel,
    format: sectionDateFormat,
    style: {
      width: '34%'
    },
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(RangePicker, {
    format: sectionDateFormat
  }))), /*#__PURE__*/_react.default.createElement(_antd.Button, {
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

var _default = ReportForm;
exports.default = _default;