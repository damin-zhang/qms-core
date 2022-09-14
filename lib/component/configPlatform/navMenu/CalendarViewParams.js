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

var _queryTabConfigRelationApi = require("../../../utils/queryTabConfigRelationApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      form = _ref.form,
      objectNo = _ref.objectNo,
      ID = _ref.ID;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  (0, _react.useEffect)(function () {
    if (objectNo) {
      getFieldList(objectNo);
    }

    var PARAMS = form.getFieldValue('PARAMS');
    var _PARAMS$contentFields = PARAMS.contentFields,
        contentFields = _PARAMS$contentFields === void 0 ? [] : _PARAMS$contentFields;

    if (!contentFields || contentFields.length === 0) {
      form.setFieldsValue({
        PARAMS: {
          contentFields: [{
            contentField: ''
          }]
        }
      });
    }
  }, [objectNo, form]);

  var getFieldList = function getFieldList(tableName) {
    var tn = 11;
    (0, _metaApi.queryItemPGR)({
      tn: tn,
      tableName: tableName,
      objectId: ID
    }).then(function (res) {
      if (res && res.dataList) setFieldList((0, _utils.parseMeta)(res.dataList));
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-inline",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'sTimeField'],
    label: fields1.startTimeField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'DateTime';
  }) || []).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'eTimeField'],
    label: fields1.endTimeField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'DateTime';
  }) || []).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'typeField'],
    label: fields1.typeField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'ValueList' || item.EDITOR === 'MapValueList' || item.EDITOR === 'RadioEditor';
  }) || []).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'statisticsField'],
    label: fields1.statisticsField,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(List, {
    name: ['PARAMS', 'contentFields'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: 'calc(100% - 14px)'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.contentField,
        name: [field.name, 'contentField'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '显示字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, (fieldList || []).map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item.META.FIELDNAME,
          key: item.META.FIELDNAME
        }, _utils.isEnglish ? item.ENNAME : item.NAME);
      }))), index > 0 && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      style: {
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), fields1.add_content_field)));
  }));
};

var _default = (0, _dva.connect)()(Index);

exports.default = _default;