"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _dva = require("dva");

var _jsBase = require("js-base64");

var _api = require("../../../../service/api");

var _metaApi = require("../../../../service/metaApi");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fields1 = _language.default.configPlatform.tableConfig.objectMenu.fields,
    configure_report = _language.default.message.report.configure_report;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;

var ObjectSelector = function ObjectSelector(_ref) {
  var PARAMS = _ref.PARAMS,
      OBJECTNO = _ref.OBJECTNO,
      form = _ref.form;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      sfieldList = _useState2[0],
      setSfieldList = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      reportList = _useState4[0],
      setReportList = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDynamic = _useState6[0],
      setIsDynamic = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      reportConfig = _useState8[0],
      setReportConfig = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      bddpReportConfig = _useState10[0],
      setBddpReportConfig = _useState10[1];

  (0, _react.useEffect)(function () {
    var _ref2 = PARAMS || {},
        isDynamic = _ref2.isDynamic;

    getReportConfig('allReportFile');
    getReportConfig('bddpReportFile');

    if (OBJECTNO) {
      setIsDynamic(isDynamic);
      queryFields(OBJECTNO);
    }

    if (!PARAMS && form) {
      form.setFieldsValue({
        PARAMS: {
          values: [{
            name: ''
          }]
        }
      });
    }
  }, [PARAMS, OBJECTNO, form]);
  (0, _react.useEffect)(function () {
    var _ref3 = PARAMS || {},
        isBddp = _ref3.isBddp;

    if (reportConfig || bddpReportConfig) {
      isBddpChange({
        target: {
          checked: isBddp ? true : false
        }
      });
    }
  }, [PARAMS, reportConfig, bddpReportConfig]);

  var queryFields = function queryFields(objectNo) {
    (0, _metaApi.queryObjFields)({
      objectNo: objectNo
    }).then(function (res) {
      setSfieldList(res.dataList);
    });
  }; // 获取报表配置


  var getReportConfig = function getReportConfig(configNo) {// queryReportConfig(configNo).then(res => {
    //   if (res) {
    //     let config = JSON.parse(Base64.decode(res.dataList))
    //     if (!config.CONFIG_VALUE) {
    //       message.warn(configure_report)
    //     }
    //     configNo === 'allReportFile'
    //       ? setReportConfig(JSON.parse(Base64.decode(res.dataList)))
    //       : setBddpReportConfig(JSON.parse(Base64.decode(res.dataList)))
    //   }
    // })
  }; // 【大屏报表】改变调用


  var isBddpChange = function isBddpChange(_ref4) {
    var checked = _ref4.target.checked;
    var reportIp = checked ? bddpReportConfig.CONFIG_VALUE : reportConfig.CONFIG_VALUE;
    reportIp && (0, _api.queryReport)(reportIp).then(function (data) {
      if (data) {
        if (checked) {
          var res = data.res;
          res = res && res.map(function (item) {
            return {
              name: item.bdname,
              uuid: item.name
            };
          });
          setReportList(res);
        } else {
          var list = data.page.list; // let { list } = data

          setReportList(list);
        }
      }
    });
  };

  var isDynamicChange = function isDynamicChange(e) {
    var checked = e.target.checked;
    setIsDynamic(checked);

    var _form$getFieldValue = form.getFieldValue(),
        PARAMS = _form$getFieldValue.PARAMS;

    var value = PARAMS.value;

    if (checked) {
      if (!value || value.length <= 0) {
        form.setFieldsValue({
          PARAMS: {
            values: [{
              name: ''
            }]
          }
        });
      }
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'isBddp'],
    label: fields1.isBddp,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: isBddpChange
  })), form && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'isDynamic'],
    label: fields1.isDynamic,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: isDynamicChange
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'reportName'],
    label: fields1.reportName,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    onSearch: function onSearch(val) {
      var PARAMS = form.getFieldValue('PARAMS');

      if (val) {
        form.setFieldsValue({
          PARAMS: _objectSpread(_objectSpread({}, PARAMS), {}, {
            reportId: val
          })
        });
      }
    },
    onChange: function onChange(val, item) {
      form.setFieldsValue({
        PARAMS: {
          reportId: item.key
        }
      });
    }
  }, (reportList || []).map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: item.uuid,
      value: item.name
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'reportId'],
    label: fields1.reportId,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(List, {
    name: ['PARAMS', 'values'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref5) {
    var add = _ref5.add,
        remove = _ref5.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.name,
        name: [field.name, 'name'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '源字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, (sfieldList || []).map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item.NO,
          key: item.ID
        }, item.NAME);
      }))), !isDynamic && /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.key,
        name: [field.name, 'key'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '目标字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: !isDynamic ? '100%' : '50%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      style: {
        width: '100px',
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), "add")));
  })));
};

var _default = (0, _dva.connect)()(ObjectSelector);

exports.default = _default;