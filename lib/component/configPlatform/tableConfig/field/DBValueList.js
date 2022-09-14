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

var _metaApi = require("../../../../service/metaApi");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var fields1 = _language.default.configPlatform.tableConfig.fieldsProperty.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;
var layout2 = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

var ObjectSelector = function ObjectSelector(_ref) {
  var form = _ref.form,
      fieldList = _ref.fieldList;
  (0, _react.useEffect)(function () {
    var EDITPARAMS = form.getFieldValue('EDITPARAMS') || {};
    var _EDITPARAMS$mapFields = EDITPARAMS.mapFields,
        mapFields = _EDITPARAMS$mapFields === void 0 ? [] : _EDITPARAMS$mapFields;

    if (!mapFields || mapFields.length === 0) {
      form.setFieldsValue({
        EDITPARAMS: {
          mapFields: [{
            sfield: '',
            tfield: ''
          }]
        }
      });
    }
  }, [form]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'canInput'],
    label: fields1.canInput,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'multiple'],
    label: fields1.multiple,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: ['EDITPARAMS', 'sql'],
    label: fields1.sql,
    className: "whole-line"
  }, layout2), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, null)), /*#__PURE__*/_react.default.createElement(List, {
    name: ['EDITPARAMS', 'mapFields'],
    style: {
      width: '100%'
    }
  }, function (fields) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.tfield,
        name: [field.name, 'tfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '目标字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        } // onSearch={val => {
        //   let EDITPARAMS = form.getFieldValue('EDITPARAMS')
        //   const { mapFields = [] } = EDITPARAMS
        //   if (val) {
        //     if (!mapFields[index]) mapFields[index] = {}
        //     mapFields[index].tfield = val
        //     form.setFieldsValue({ EDITPARAMS: { ...EDITPARAMS, mapFields } })
        //   }
        // }}
        ,
        onChange: function onChange(val, item) {
          var EDITPARAMS = form.getFieldValue('EDITPARAMS');
          var _EDITPARAMS$mapFields2 = EDITPARAMS.mapFields,
              mapFields = _EDITPARAMS$mapFields2 === void 0 ? [] : _EDITPARAMS$mapFields2;

          if (val) {
            if (!mapFields[index]) mapFields[index] = {};
            mapFields[index].tfield = val;
            mapFields[index].sfield = item.children;
            form.setFieldsValue({
              EDITPARAMS: _objectSpread(_objectSpread({}, EDITPARAMS), {}, {
                mapFields: mapFields
              })
            });
          }
        }
      }, fieldList.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item.FIELDNAME,
          key: item.ID
        }, item.NAME);
      }))), /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.nfield,
        name: [field.name, 'sfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '列名']
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
        disabled: true
      })));
    }));
  }));
};

var _default = (0, _dva.connect)()(ObjectSelector);

exports.default = _default;