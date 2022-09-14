var _excluded = ["record", "dispatch", "namespace", "objectId", "id", "onCancel", "PID"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 字段表单
 */
import React, { useEffect } from 'react';
import { Form, Input, Select, InputNumber } from 'antd';
import { connect } from 'dva';
import DragModal from '../../common/drag/DragModal';
import LocaleNameForm from '../common/LocaleNameForm';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.fieldsProperty,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Option = Select.Option;
var Item = Form.Item;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var HeardForm = function HeardForm(_ref) {
  var record = _ref.record,
      dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      objectId = _ref.objectId,
      id = _ref.id,
      onCancel = _ref.onCancel,
      PID = _ref.PID,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  useEffect(function () {}, []);

  var onFinish = function onFinish(values) {
    values = _objectSpread(_objectSpread({}, record), values);
    dispatch({
      type: 'qualityInspectionTemplate/editItem',
      payload: {
        meta: values,
        record: record,
        namespace: namespace,
        type: 'update',
        objectId: objectId,
        id: id,
        activeKey: '0',
        onCancel: onCancel
      }
    });
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onCancel: onCancel,
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "field",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), PID !== '0' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: "TITLE_COLSPAN",
    label: '标题列数',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(InputNumber, {
    step: 1,
    min: 1,
    max: 8
  })), /*#__PURE__*/React.createElement(Item, {
    name: "CONTENT_COLSPAN",
    label: '内容列数',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(InputNumber, {
    step: 1,
    min: 1,
    max: 8
  }))), PID === '0' && /*#__PURE__*/React.createElement(Item, {
    name: "DIRECTION",
    label: '方向'
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
    value: 1,
    key: 1
  }, "\u6A2A\u5411"), /*#__PURE__*/React.createElement(Option, {
    value: 0,
    key: 2
  }, "\u7EB5\u5411"))), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(HeardForm);