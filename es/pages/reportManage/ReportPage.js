function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 报表组件
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import ReportPageCmp from '../../component/reportMange/chartPageCmp/ReportPageCmp';
import { viewsSearch, viewsTimeliness, viewsBadness, viewsSupplierDPPM, viewsSample, viewsInspection, viewsInspectionNum, viewsSupplierRate } from '../../service/reportApi';
import ReportForm from '../../component/reportMange/chartPageCmp/ReportForm';
import moment from 'moment';
import { showLoading } from '../../utils/utils';
import dayjs from 'dayjs';
import language from '@/locale/language';
var viewFields = language.viewFields;
var requestApi = {
  timeliness: viewsTimeliness,
  badness: viewsBadness,
  sample: viewsSample,
  DPPM: viewsSupplierDPPM,
  inspection: viewsInspection,
  inspectionNum: viewsInspectionNum,
  supplierRate: viewsSupplierRate
};

var ReportPage = function ReportPage(_ref) {
  var _ref$model = _ref.model,
      model = _ref$model === void 0 ? viewFields.timeliness : _ref$model,
      pageTitle = _ref.pageTitle,
      pageModel = _ref.pageModel;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var api = requestApi[pageModel];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      materialCN = _useState2[0],
      setMaterialCN = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      materialSeries = _useState4[0],
      setMaterialSeries = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      supplierName = _useState6[0],
      setSupplierName = _useState6[1];

  var sectionDateFormat = 'YYYY-MM-DD';
  var xField = pageModel === 'sample' ? '物料名称' : pageModel === 'supplierRate' ? 'supplier' : '';

  var _useState7 = useState({
    allData: [],
    tableData: [],
    model: model,
    pageModel: pageModel,
    pageTitle: pageTitle,
    xField: xField
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      propData = _useState8[0],
      setPropData = _useState8[1];

  useEffect(function () {
    var val = {
      FREQUENCY: '月',
      QUERY_TIME: moment(new Date().toString()).format('YYYY')
    };
    form.setFieldsValue(_objectSpread({}, val));

    if (pageModel === 'sample' || pageModel === 'supplierRate') {
      val = {
        START_TIME: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
        END_TIME: moment(new Date().toString()).format('YYYY-MM-DD')
      };
      form.setFieldsValue({
        TIME: [moment(val.START_TIME, sectionDateFormat), moment(val.END_TIME, sectionDateFormat)]
      });
    }

    showLoading();
    api(val).then(function (res) {
      if (res) {
        setPropData({
          allData: res && res.all.filter(function (item) {
            return item.larType.indexOf('标准件') < 0 && item.larType.indexOf('定制件') < 0 && item;
          }) || [],
          tableData: res && res.form.filter(function (item) {
            return item.title.indexOf('标准件') < 0 && item.title.indexOf('定制件') < 0 && item;
          }) || [],
          model: model,
          pageTitle: pageTitle,
          pageModel: pageModel,
          xField: xField,
          FREQUENCY: val.FREQUENCY === '周' ? 'week' : val.FREQUENCY === '月' ? 'month' : val.FREQUENCY === '年' ? 'year' : val.FREQUENCY === 'TIME' ? 'TIME' : null,
          TIME: val.QUERY_TIME
        });
      }
    });
    form.setFieldsValue({
      FREQUENCY: '月',
      QUERY_TIME: moment(new Date().toString(), 'YYYY')
    });
    viewsSearch({
      KEY: 'MATERIAL_CN'
    }).then(function (data) {
      if (data) {
        setMaterialCN(data.dataList);
      }
    });
    viewsSearch({
      KEY: 'SUPPLIER_NAME'
    }).then(function (data) {
      if (data) {
        setSupplierName(data.dataList);
      }
    });
    viewsSearch({
      KEY: 'MATERIAL_SERIES'
    }).then(function (data) {
      if (data) {
        setMaterialSeries(data.dataList);
      }
    });
  }, [1]);

  var onFinish = function onFinish(value, dateFormat) {
    if (value.QUERY_TIME) value.QUERY_TIME = moment(value.QUERY_TIME).format(dateFormat);

    if (value.TIME) {
      value.START_TIME = moment(value.TIME[0]).format(sectionDateFormat);
      value.END_TIME = moment(value.TIME[1]).format(sectionDateFormat);
      delete value.TIME;
    }

    showLoading();
    api(value).then(function (res) {
      if (res) {
        setPropData({
          allData: res && res.all.filter(function (item) {
            return item.larType.indexOf('标准件') < 0 && item.larType.indexOf('定制件') < 0 && item;
          }) || [],
          tableData: res && res.form.filter(function (item) {
            return item.title.indexOf('标准件') < 0 && item.title.indexOf('定制件') < 0 && item;
          }) || [],
          model: model,
          pageModel: pageModel,
          pageTitle: pageTitle,
          xField: xField,
          FREQUENCY: value.FREQUENCY === '周' ? 'week' : value.FREQUENCY === '月' ? 'month' : value.FREQUENCY === '年' ? 'year' : value.FREQUENCY === 'TIME' ? 'TIME' : null,
          TIME: value.QUERY_TIME
        });
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#002060',
      textAlign: 'center',
      height: '100%',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(ReportForm, {
    onFinish: onFinish,
    form: form,
    FREQUENCY: propData.FREQUENCY,
    materialCN: materialCN,
    materialSeries: materialSeries,
    supplierName: supplierName,
    pageModel: pageModel
  }), /*#__PURE__*/React.createElement(ReportPageCmp, propData));
};

export default ReportPage;