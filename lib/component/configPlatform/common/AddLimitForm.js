"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

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

var Option = _antd.Select.Option;
var fields1 = _language.default.configPlatform.tableConfig.objectProperty.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;

var AddLimitForm = function AddLimitForm(_ref) {
  var objectDataList = _ref.objectDataList,
      form = _ref.form,
      record = _ref.record;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      limitList = _useState2[0],
      setLimitList = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldsList = _useState4[0],
      setFieldsList = _useState4[1];

  (0, _react.useEffect)(function () {
    if (objectDataList.length) setFieldsList(objectDataList.filter(function (i) {
      return i.FIELDNAME !== record.FIELDNAME;
    }));
  }, [objectDataList]);

  var _onChange = function onChange(value, index) {
    setLimitList(form.getFieldValue('limitValues'));
  };

  var fieldChange = function fieldChange(value) {// setFieldsList(fieldsList.filter((i) => i.FIELDNAME !== value))
  };

  var minChange = function minChange(value) {
    setLimitList(form.getFieldValue('limitValues'));
  };

  var maxChange = function maxChange(value) {
    setLimitList(form.getFieldValue('limitValues'));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, "\u7EA6\u675F"), /*#__PURE__*/_react.default.createElement(List, {
    name: ['limitValues'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        // className='ant-form-inline'
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: fields1.LIMITTYPE,
        name: [field.name, 'LIMITTYPE'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, fields1.LIMITTYPE] // initialValue={fields1.REQUIRED}

      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        onChange: function onChange(value) {
          return _onChange(value, index);
        }
      }, /*#__PURE__*/_react.default.createElement(Option, {
        value: fields1.REQUIRED
      }, fields1.REQUIRED), /*#__PURE__*/_react.default.createElement(Option, {
        value: fields1.RANGE
      }, fields1.RANGE))), /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: fields1.OPTIONFIELD,
        name: [field.name, 'OPTIONFIELD'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, fields1.OPTIONFIELD]
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        onChange: fieldChange
      }, fieldsList && fieldsList.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: item.FIELDNAME,
          value: item.NAME
        }, item.NAME);
      }))), limitList.length && limitList[index] && limitList[index].LIMITTYPE && limitList[index].LIMITTYPE === '值范围' ? /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: fields1.RANGE,
        fieldKey: [field.fieldKey, fields1.RANGE]
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          display: 'flex'
        }
      }, /*#__PURE__*/_react.default.createElement(Item, {
        name: [field.name, 'RANGEMin'],
        rules: [{
          required: true
        }],
        style: {
          width: 80,
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
        placeholder: "\u6700\u5C0F\u503C",
        onChange: minChange,
        max: limitList.length && limitList[index] && limitList[index].RANGEMax
      })), "-", /*#__PURE__*/_react.default.createElement(Item, {
        name: [field.name, 'RANGEMax'],
        rules: [{
          required: true
        }],
        style: {
          width: 80,
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
        placeholder: "\u6700\u5927\u503C",
        onChange: maxChange,
        min: limitList.length && limitList[index] && limitList[index].RANGEMin
      })))) : '', index > -1 && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '98%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), fields1.ADDLIMIT));
  }));
};

var _default = AddLimitForm;
exports.default = _default;