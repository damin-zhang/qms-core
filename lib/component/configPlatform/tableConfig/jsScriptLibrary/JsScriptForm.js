"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _DragModal = _interopRequireDefault(require("../../../../component/common/drag/DragModal"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _excluded = ["dispatch", "record", "dataList"];

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

// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/mode-javascript'; // 引入mode
// import 'ace-builds/src-noconflict/theme-chaos'; // 主题样式
// import 'ace-builds/src-noconflict/ext-language_tools'; // 代码联想
// import 'ace-builds/webpack-resolver';
// ace.config.set("modePath", "Scripts/Ace");
// ace.config.set("workerPath", "Scripts/Ace");
// ace.config.set("themePath", "Scripts/Ace");
// // import ace from 'ace-builds';
// ace.config.setModuleUrl('ace/mode/javascript_worker',require('file-loader?esMoudle=false!ace-builds/src-noconflict/worker-javascript.js'))
// ace.config.setModuleUrl('ace/theme/chaos',require('file-loader?esMoudle=false!ace-builds/src-noconflict/theme-chaos.js'))
// ace.config.setModuleUrl('ace/ext/language_tools',require('file-loader?esMoudle=false!ace-builds/src-noconflict/ext-language_tools.js'))
// ace.config.setModuleUrl('ace/snippets/javascript',require('file-loader?esMoudle=false!ace-builds/src-noconflict/snippets/javascript.js'))
// ace.config.setModuleUrl('ace/mode/json_worker',require('file-loader?esMoudle=false!ace-builds/src-noconflict/worker-json.js'))
var JsScriptFields = _language.default.JsScriptFields;
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
var Item = _antd.Form.Item;
var scriptInitValue = "/*\n* @description: JS\u811A\u672C\u4F7F\u7528\u63CF\u8FF0\n* @param (record, selectedRows, userName, employeeName): (\u5F53\u524D\u9009\u4E2D\u884C\u6570\u636E\u5355\u6761, \u5F53\u524D\u9009\u4E2D\u884C\u6570\u636E\u591A\u6761, \u7528\u6237\u540D, \u59D3\u540D)\n* @return: \u8FD4\u56DE\u503C\u4E3Aboolean\u7C7B\u578B\n* @tips: \u4E0E\u5224\u65AD\u7B26: &&, \u6216\u5224\u65AD\u7B26: ||, \u975E\u5224\u65AD\u7B26 !==, \u975E\u7A7A\u5224\u65AD\u7B26 ??, \u7B49\u4E0E\u7B26 === \n*/\n\n// \u793A\u4F8B \u5224\u65AD\u884C\u6570\u636ENO\u7B49\u4E8E1006, \u76F8\u7B49\u8FD4\u56DEtrue, \u4E0D\u76F8\u7B49\u8FD4\u56DEfalse\n\nreturn record.NO === '1006'";

var JsScriptForm = function JsScriptForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      dataList = _ref.dataList,
      restProps = _objectWithoutProperties(_ref, _excluded);

  record.scriptValue = record.scriptValue || scriptInitValue;
  record.rType = record.rType || '0';

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _Form$useForm3 = _antd.Form.useForm(),
      _Form$useForm4 = _slicedToArray(_Form$useForm3, 1),
      testForm = _Form$useForm4[0];

  var onFinish = function onFinish(values) {
    dispatch({
      type: 'jsScriptLibrary/edit',
      payload: {
        values: values,
        record: record,
        dataList: dataList
      }
    });
  };

  (0, _react.useEffect)(function () {
    form.setFieldsValue(record);
    testForm.resetFields();
  }, [record]);

  var testScript = function testScript() {
    var scriptValue = form.getFieldValue('scriptValue');
    var record = testForm.getFieldValue('record');
    var result = '';

    try {
      result = eval("(record,selectedRows,userName,employeeName)=>{".concat(record).concat(scriptValue, "}"))({}, [], localStorage.userName, localStorage.employeeName);
    } catch (error) {
      result = "\u811A\u672C\u8FD0\u884C\u9519\u8BEF:\n ".concat(error.name, " ").concat(error.message);
    }

    testForm.setFieldsValue({
      inputValue: result
    });
  };

  var onChange = function onChange(value) {// console.log(value);
  };

  return /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({
    title: JsScriptFields.title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    },
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "jsScript",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "no",
    label: JsScriptFields.no,
    rules: [{
      required: true,
      pattern: '^[A-Z][A-Z0-9_]*$'
    }, {
      type: 'string',
      max: 50
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: record.no
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "name",
    label: JsScriptFields.name
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "rType",
    label: JsScriptFields.rType,
    initialValue: "0",
    required: true
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: "0",
    value: "0"
  }, "Boolean"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
    key: "1",
    value: "1"
  }, "Object"))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "remark",
    label: JsScriptFields.remark
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, null)), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: "scriptValue",
    label: JsScriptFields.scriptValue,
    className: "whole-line",
    required: true
  }, layout2), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    rows: 8
  }))), /*#__PURE__*/_react.default.createElement(_antd.Divider, null, JsScriptFields.scriptTest), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    form: testForm,
    layout: "inline"
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "record",
    label: JsScriptFields.record
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "inputValue",
    label: JsScriptFields.runResult
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    disabled: true
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    onClick: testScript
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary"
  }, JsScriptFields.runScript)));
};

var _default = JsScriptForm;
exports.default = _default;