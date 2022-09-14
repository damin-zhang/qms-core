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

var _SearchInput = _interopRequireDefault(require("../../common/search/SearchInput"));

var _metaApi = require("../../../service/metaApi");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../utils/utils");

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

var fields1 = _language.default.configPlatform.navMenu.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;

var ObjectSelector = function ObjectSelector(_ref) {
  var dispatch = _ref.dispatch,
      form = _ref.form,
      objectNo = _ref.objectNo,
      TYPE = _ref.TYPE;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      sfieldList = _useState2[0],
      setSfieldList = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tfieldList = _useState4[0],
      setTfieldList = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      fieldList = _useState6[0],
      setFieldList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      templateCode = _useState8[0],
      setTemplate = _useState8[1];

  (0, _react.useEffect)(function () {
    var _form$getFieldValue = form.getFieldValue('PARAMS'),
        checkProObjectNo = _form$getFieldValue.checkProObjectNo,
        checkResultObjectNo = _form$getFieldValue.checkResultObjectNo;

    if (checkProObjectNo) {
      (0, _metaApi.queryItemPGR)({
        tn: 11,
        tableName: checkProObjectNo
      }).then(function (res) {
        setSfieldList((0, _utils.parseMeta)(res.dataList));
      });
    }

    if (checkResultObjectNo) {
      (0, _metaApi.queryItemPGR)({
        tn: 11,
        tableName: checkResultObjectNo
      }).then(function (res) {
        setTfieldList((0, _utils.parseMeta)(res.dataList));
      });
    }

    queryFields(objectNo, 0);
    queryTemplateCode();
  }, [form]); // 查询字段列表

  var queryFields = function queryFields(objectNo, type) {
    (0, _metaApi.queryItemPGR)({
      tn: 11,
      tableName: objectNo
    }).then(function (res) {
      setFieldList((0, _utils.parseMeta)(res.dataList).filter(function (item) {
        return item.TYPE > 0;
      }));
    });
  }; // 查询模板编号


  var queryTemplateCode = function queryTemplateCode() {
    (0, _metaApi.queryTemplateNo)({
      tableName: objectNo,
      TYPE: TYPE
    }).then(function (res) {
      setTemplate(res.dataList);
    });
  };

  var selectRelationshipNo = function selectRelationshipNo(no, no2, aFieldName) {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'relationship',
          condition: "objectA='".concat(aFieldName ? form.getFieldValue(['PARAMS', aFieldName]) : objectNo, "'"),
          onSelect: function onSelect(rows) {
            var _objectSpread2;

            var PARAMS = form.getFieldValue('PARAMS') || {};
            form.setFieldsValue({
              PARAMS: _objectSpread(_objectSpread({}, PARAMS), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, no, rows[0].OBJECTB), _defineProperty(_objectSpread2, no2, rows[0].NO), _objectSpread2))
            });
            (0, _metaApi.queryItemPGR)({
              tn: 11,
              tableName: rows[0].OBJECTB
            }).then(function (res) {
              if (res) {
                var dataList = (0, _utils.parseMeta)(res.dataList);
                no === 'checkProObjectNo' ? setSfieldList(dataList) : setTfieldList(dataList);
              }
            });
          }
        }
      });
    };
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'checkProRelationShipNo'],
    label: fields1.checkProRelationShipNo,
    rules: [{
      required: true
    }],
    onClick: selectRelationshipNo('checkProObjectNo', 'checkProRelationShipNo')
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'checkProObjectNo'],
    label: fields1.checkProObjectNo
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'checkResultRelationShipNo'],
    label: fields1.checkResultRelationShipNo,
    rules: [{
      required: true
    }],
    onClick: selectRelationshipNo('checkResultObjectNo', 'checkResultRelationShipNo', 'checkProObjectNo')
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'checkResultObjectNo'],
    label: fields1.checkResultObjectNo
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'currentTemplate'],
    label: "\u56FA\u5B9A\u6A21\u677F"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'templateNo'],
    label: "\u6A21\u677F\u7F16\u53F7",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, templateCode.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: item.NO
    }, item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'templateField'],
    label: "\u6A21\u677F\u5B57\u6BB5",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (fieldList || []).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.FIELDNAME,
      key: item.ID
    }, item.NAME);
  }))));
};

var _default = (0, _dva.connect)()(ObjectSelector);

exports.default = _default;