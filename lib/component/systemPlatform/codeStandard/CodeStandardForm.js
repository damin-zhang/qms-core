"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _dva = require("dva");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _excluded = ["dispatch", "record", "createType", "objectList"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _language$systemPlatf = _language.default.systemPlatform.codeStandard,
    fields = _language$systemPlatf.fields,
    title = _language$systemPlatf.title,
    msg3 = _language$systemPlatf.msg3,
    msg4 = _language$systemPlatf.msg4,
    msg5 = _language$systemPlatf.msg5;
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

var CodeStandardForm = function CodeStandardForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      createType = _ref.createType,
      objectList = _ref.objectList,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(val) {
    //保存和更新数据
    var values = {};
    val.pid = record.pid;

    if (record.id != null) {
      //修改
      delete record.children;

      if (!val.code_segment === record.dataType) {
        val.maxcode = '';
      }
    }

    var objectPropertyPageNo = 'group';
    var dataType = 0;

    if (val.hasOwnProperty('prefix')) {
      objectPropertyPageNo = 'prefix';
      dataType = 1;
    }

    if (val.hasOwnProperty('code_segment')) {
      objectPropertyPageNo = 'code';
      dataType = 2;
    }

    values.objectPropertyPageNo = objectPropertyPageNo;
    val.dataType = dataType;
    values = val;
    dispatch({
      type: 'CodeStandard/edit',
      payload: {
        values: values,
        record: record
      }
    });
  };

  var newList = objectList.filter(function (item) {
    return item.META.TYPE === 0 || item.META.TYPE === 1;
  });

  var checkRule = function checkRule(value) {
    var _form$getFieldsValue = form.getFieldsValue(['code_segment', 'startCode', 'endCode']),
        code_segment = _form$getFieldsValue.code_segment,
        startCode = _form$getFieldsValue.startCode,
        endCode = _form$getFieldsValue.endCode;

    if (!code_segment) return Promise.reject(msg3);
    if (value.length > Number(code_segment)) return Promise.reject(msg4);
    if (Number(startCode) > Number(endCode)) return Promise.reject(msg5);
    return Promise.resolve();
  };

  return /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({
    title: title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "codeStandard",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "name",
    label: fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "object",
    label: fields.OBJECT,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    style: {
      width: '100%'
    },
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, newList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.META.TABLENAME,
      key: item.ID
    }, item.META.NAME);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "eName",
    label: fields.ENAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), createType === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: "prefix",
    label: fields.PREFIX,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "connector",
    label: fields.CONNECTOR
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "type",
    label: fields.TYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 'block_code',
    key: 0
  }, "\u5206\u7EC4\u7801"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 'classification_code',
    key: 1
  }, "\u5206\u7C7B\u7801"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 'pipeline_code',
    key: 2
  }, "\u6D41\u6C34\u7801"))), createType === 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: "code_segment",
    label: fields.CODE_SEGMENT
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    min: 1
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "startCode",
    label: fields.STARTCODE,
    rules: [{
      required: true,
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "endCode",
    label: fields.ENDCODE,
    rules: [{
      required: true,
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)))));
};

var _default = (0, _dva.connect)()(CodeStandardForm);

exports.default = _default;