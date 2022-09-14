"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _umi = require("umi");

var _utils = require("../../../utils/utils");

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

function ChartAllForm(_ref) {
  var onFinish = _ref.onFinish,
      back = _ref.back,
      form = _ref.form,
      pageTitle = _ref.pageTitle,
      supplierOptions = _ref.supplierOptions,
      FREQUENCY = _ref.FREQUENCY,
      isPerf = _ref.isPerf;

  var _useState = (0, _react.useState)('YYYY'),
      _useState2 = _slicedToArray(_useState, 2),
      dateFormat = _useState2[0],
      setDateFormat = _useState2[1];

  var _useState3 = (0, _react.useState)('月'),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var Option = _antd.Select.Option;
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

  var toMeasure = function toMeasure() {
    var menuData = (0, _utils.parseMeta)(JSON.parse(localStorage.getItem('menuData')));
    var parms = menuData.filter(function (item) {
      return item.NO === 'FOLLOW_ACTION_IQC';
    }) || [];
    var dva = (0, _umi.getDvaApp)();
    var payload = parms[0];

    dva._store.dispatch({
      type: 'tab/queryConfig',
      payload: payload
    });
  };

  var supplierLabel = /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u4F9B\u5E94\u5546:");

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
      display: 'flex',
      justifyContent: 'right'
    }
  }, back && /*#__PURE__*/_react.default.createElement(_icons.LeftCircleOutlined, {
    style: {
      margin: '8px',
      fontSize: '25px',
      color: '#fff'
    },
    onClick: back
  }), pageTitle === '来料' && /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: toMeasure,
    style: {
      height: '32px',
      margin: '5px'
    }
  }, "\u63AA\u65BD"), isPerf && /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    label: supplierLabel,
    name: "SUPPLIER_NAME",
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.AutoComplete, {
    allowClear: true,
    options: supplierOptions,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      color: '#fff',
      width: '320px'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      margin: '10px 10px'
    }
  }, "\u65F6\u95F4\uFF1A"), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "FREQUENCY",
    key: 0,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    style: {
      width: '80px'
    },
    placeholder: "\u9009\u62E9",
    onChange: choice
  }, /*#__PURE__*/_react.default.createElement(Option, {
    key: '周'
  }, "\u5468"), /*#__PURE__*/_react.default.createElement(Option, {
    key: '月'
  }, "\u6708"), /*#__PURE__*/_react.default.createElement(Option, {
    key: '年'
  }, "\u5E74"))), type !== '年' && /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "QUERY_TIME",
    key: 1,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
    picker: type === '周' || type === 'week' ? 'month' : 'year',
    format: type === '周' || type === 'week' ? 'YYYY-MM' : 'YYYY'
  })))), /*#__PURE__*/_react.default.createElement(_antd.Button, {
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

var _default = ChartAllForm;
exports.default = _default;