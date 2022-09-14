"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _dva = require("dva");

var _SearchInput = _interopRequireDefault(require("../../common/search/SearchInput"));

var _LocaleNameForm = _interopRequireDefault(require("../common/LocaleNameForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    fields = _language.default.configPlatform.autoClass.viewStructure.fields;
var Item = _antd.Form.Item;
var Option = _antd.Select.Option;
var variableMap = [{
  name: '节点数据',
  value: '%CLASSVIEWTREENODEVALUE%'
}, {
  name: '父节点数据',
  value: '%PARENT.CLASSVIEWTREENODEVALUE%'
}, {
  name: '系统用户',
  value: '%SYSTEMUSER%'
}, {
  name: '对象字段',
  value: '%OBJECT.%'
}];
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';
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

var ViewStructureForm = function ViewStructureForm(_ref) {
  var record = _ref.record,
      dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      enable = _ref.enable,
      PID = _ref.PID;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      focusDom = _useState2[0],
      setFocusDom = _useState2[1];

  (0, _react.useEffect)(function () {
    form.resetFields();
  }, [record, form]);

  var onFinish = function onFinish(values) {
    dispatch({
      type: 'commonConfig/editItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        PID: PID,
        OBJECTID: PID
      }
    });
  };

  var onSelect = function onSelect(value) {
    if (focusDom) {
      var setFieldsValue = form.setFieldsValue,
          getFieldValue = form.getFieldValue;
      var value1 = getFieldValue(focusDom);
      value1 = value1 ? value1 : '';
      setFieldsValue(_defineProperty({}, focusDom, value1 + value));
    }
  };

  var onFocus = function onFocus(e) {
    setFocusDom(e.target.id);
  };

  var selectIcon = function selectIcon() {
    dispatch({
      type: 'selectData/packet',
      payload: {
        type: 'icon',
        visible: true,
        onSelect: function onSelect(ICON) {
          form.setFieldsValue({
            ICON: ICON
          });
        }
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    disabled: !enable,
    style: {
      marginLeft: '5px'
    },
    onClick: function onClick() {
      return form.submit();
    },
    type: "primary"
  }, common.save), /*#__PURE__*/_react.default.createElement(_antd.Select, {
    defaultValue: "\u9009\u62E9\u53D8\u91CF",
    onSelect: onSelect
  }, variableMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  })), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: "SUMMARY",
    label: fields.SUMMARY,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "LOADDATASET",
    label: fields.LOADDATASET,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: "NODECONDITION",
    label: fields.NODECONDITION
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    onFocus: onFocus
  })), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: "DATACONDITION",
    label: fields.DATACONDITION
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    onFocus: onFocus
  })), /*#__PURE__*/_react.default.createElement(_LocaleNameForm.default, null)));
};

var _default = (0, _dva.connect)()(ViewStructureForm);

exports.default = _default;