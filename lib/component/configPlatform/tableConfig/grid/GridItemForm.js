"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _DragModal = _interopRequireDefault(require("../../../common/drag/DragModal"));

var _LocaleNameForm = _interopRequireDefault(require("../../common/LocaleNameForm"));

var _dva = require("dva");

var _language = _interopRequireDefault(require("@/locale/language"));

var _mapParams = require("../../../../utils/mapParams");

var _SearchInput = _interopRequireDefault(require("../../../common/search/SearchInput"));

var _excluded = ["dispatch", "record", "namespace", "rootId", "pCONTROLAUTH", "PID"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var edit = _language.default.common.edit,
    _language$configPlatf = _language.default.configPlatform.tableConfig.objectGrid,
    fields = _language$configPlatf.fields,
    objectTitle = _language$configPlatf.objectTitle;
var Item = _antd.Form.Item;
var Option = _antd.Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var layout2 = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';

var GridItemForm = function GridItemForm(_ref) {
  var dispatch = _ref.dispatch,
      _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      namespace = _ref.namespace,
      rootId = _ref.rootId,
      pCONTROLAUTH = _ref.pCONTROLAUTH,
      PID = _ref.PID,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    values.OBJECTID = record.OBJECTID;
    if (record.GTYPE === 2) values.PARAMS = typeof values.PARAMS === 'string' ? JSON.stringify(values.PARAMS) : values.PARAMS;
    dispatch({
      type: 'commonConfig/editRootItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        rootId: rootId,
        PID: PID
      }
    });
  };

  var selectAUTHCODE = function selectAUTHCODE() {
    dispatch({
      type: 'selectData/queryAuthcode',
      payload: {
        type: 'authCode',
        onSelect: function onSelect(rows) {
          form.setFieldsValue({
            AUTHCODE: rows[0].NO
          });
        }
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({
    title: edit + ' ' + objectTitle,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "gridObject",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "FIELDNAME",
    label: fields.FIELDNAME,
    rules: [{
      required: true,
      pattern: record.GTYPE === 0 ? pattern : null
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: record.GTYPE === 1
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "WIDTH",
    label: fields.WIDTH
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    step: 5
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "ALIGN",
    label: fields.ALIGN
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, _mapParams.alignMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), record.GTYPE === 0 && /*#__PURE__*/_react.default.createElement(Item, {
    name: "SUPSORT",
    label: fields.SUPSORT,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "EDITABLE",
    label: fields.EDITABLE,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "APPDISPLAY",
    label: fields.appDisplay,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "COPYABLE",
    label: fields.COPYABLE,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "GTYPE",
    label: fields.GTYPE
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: true
  }, _mapParams.gTypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), pCONTROLAUTH ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: 'AUTHCODE',
    label: fields.AUTHCODE,
    onClick: selectAUTHCODE,
    allowClear: true
  })) : null, record.GTYPE === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: ['PARAMS', 'valueScript'],
    label: fields.valueScript,
    rules: [{
      required: true
    }],
    className: "whole-line"
  }, layout2), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    autoSize: {
      minRows: 2,
      maxRows: 10
    }
  })), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: ['PARAMS', 'colorScript'],
    label: fields.colorScript,
    className: "whole-line"
  }, layout2), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    autoSize: {
      minRows: 2,
      maxRows: 10
    }
  }))), /*#__PURE__*/_react.default.createElement(_LocaleNameForm.default, null)));
};

var _default = (0, _dva.connect)()(GridItemForm);

exports.default = _default;