var _excluded = ["dispatch", "record", "selectedRows"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 员工表单
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Checkbox, DatePicker } from 'antd';
import DragModal from '../../common/drag/DragModal';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$userManage$ = language.userManage.staffManage,
    staffUser = _language$userManage$.staffUser,
    title2 = _language$userManage$.title2,
    fields = _language$userManage$.fields;
var Item = Form.Item;
var Option = Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var PropertyForm = function PropertyForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      selectedRows = _ref.selectedRows,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    // console.log(values,record);
    var inTime = values.inTime;
    if (inTime) values.inTime = inTime.format('YYYY-MM-DD');
    dispatch({
      type: 'StaffManage/editStaff',
      payload: {
        selectedRows: selectedRows,
        values: values,
        record: record
      }
    });
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title2,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "property",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "no",
    label: fields.SUNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "suName",
    label: fields.SUNAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "name",
    label: staffUser.fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "tel",
    label: fields.SUTEL
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "sax",
    label: fields.SAX
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
    value: 1
  }, "\u7537"), /*#__PURE__*/React.createElement(Option, {
    value: 0
  }, "\u5973"))), /*#__PURE__*/React.createElement(Item, {
    name: "inTime",
    label: fields.INTIME
  }, /*#__PURE__*/React.createElement(DatePicker, {
    format: "YYYY-MM-DD"
  })), /*#__PURE__*/React.createElement(Item, {
    name: "idCard",
    label: fields.IDCARD
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "mail",
    label: fields.MAIL
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "mailPassword",
    label: fields.MAILPASSWORD
  }, /*#__PURE__*/React.createElement(Input.Password, {
    autoComplete: "nope"
  })), /*#__PURE__*/React.createElement(Item, {
    name: "opState",
    label: fields.OPSTATE,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "remark",
    label: staffUser.fields.REMARK
  }, /*#__PURE__*/React.createElement(Input, null))));
};

export default connect()(PropertyForm);