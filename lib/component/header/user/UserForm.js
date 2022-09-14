"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _dva = require("dva");

var _language = _interopRequireDefault(require("@/locale/language"));

var _PasswordForm = _interopRequireDefault(require("./PasswordForm"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _utils = require("../../../utils/utils");

var _excluded = ["dispatch", "record", "employeeName", "initSetUPS"];

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _language$common = _language.default.common,
    edit = _language$common.edit,
    save = _language$common.save,
    close = _language$common.close,
    _language$header$user = _language.default.header.user,
    fields = _language$header$user.fields,
    user_center = _language$header$user.user_center,
    change_password = _language$header$user.change_password,
    yh_info = _language$header$user.yh_info;
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

var UserForm = function UserForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      employeeName = _ref.employeeName,
      initSetUPS = _ref.initSetUPS,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible2 = _useState2[0],
      setVisible2 = _useState2[1];

  var visible = restProps.visible,
      onCancel = restProps.onCancel;
  var disabled = employeeName === 'admin' ? true : false;
  (0, _react.useEffect)(function () {
    if (record) {
      form.setFieldsValue(record);
    }
  }, [record, form]);

  var onFinish = function onFinish(values) {
    var isChange = (0, _utils.isUpdate)(record, values);
    isChange && dispatch({
      type: 'user/editUser',
      payload: {
        values: values,
        record: record
      }
    });
    onCancel();
  };

  var toogleModal = function toogleModal() {
    dispatch({
      type: 'user/getInitSetUPS'
    });
    setVisible2(!visible2);
  };

  var footer = [];
  footer.push( /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: toogleModal
  }, change_password), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "default",
    onClick: onCancel
  }, close), employeeName !== 'admin' && /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      form.submit();
    }
  }, save))));
  return /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    title: user_center,
    form: form,
    footer: footer,
    placement: 'right',
    visible: visible,
    onClose: onCancel,
    width: '70%'
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "user",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.avatar), /*#__PURE__*/_react.default.createElement(Item, {
    name: "avatar",
    label: fields.avatar
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, form)), /*#__PURE__*/_react.default.createElement(_antd.Divider, null, yh_info), /*#__PURE__*/_react.default.createElement(Item, {
    name: "employeeNo",
    label: fields.employeeNo
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "employeeName",
    label: fields.employeeName
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "userName",
    label: fields.userName
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "tel",
    label: fields.tel
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "mail",
    label: fields.mail
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "sax",
    label: fields.sax
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: '1'
  }, fields.man), /*#__PURE__*/_react.default.createElement(Option, {
    value: '0'
  }, fields.women))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "age",
    label: fields.age
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    min: 0,
    max: 100,
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "inTime",
    label: fields.INTIME
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "idCard",
    label: fields.idCard
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "wkSate",
    label: fields.wkSate
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: "ON"
  }, "\u5728\u5C97"), /*#__PURE__*/_react.default.createElement(Option, {
    value: "LE"
  }, "\u79BB\u5C97"), /*#__PURE__*/_react.default.createElement(Option, {
    value: "TR"
  }, "\u51FA\u5DEE"))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "userRemark",
    label: fields.employeeRemark
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.depart), /*#__PURE__*/_react.default.createElement(Item, {
    name: "departMentNo",
    label: fields.departMentNo
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, _defineProperty({
    disabled: true
  }, "disabled", true))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "departMentName",
    label: fields.departMentName
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  }))), /*#__PURE__*/_react.default.createElement(_PasswordForm.default, {
    visible: visible2,
    onCancel: toogleModal,
    initSetUPS: initSetUPS
  }));
};

var _default = (0, _dva.connect)()(UserForm);

exports.default = _default;