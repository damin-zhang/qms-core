var _excluded = ["dispatch", "record", "namespace", "rootId", "OBJECTID", "PID", "requestType"];

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
 * @Description: 属性页字段集合表单
 */
import React, { useState } from 'react';
import { Form, Input } from 'antd';
import DragModal from '../../../common/drag/DragModal';
import LocaleNameForm from '../../common/LocaleNameForm';
import { SketchPicker } from 'react-color';
import { connect } from 'dva';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.objectProperty,
    fields = _language$configPlatf.fields,
    setTitle = _language$configPlatf.setTitle;
var Item = Form.Item;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';

var GridSetForm = function GridSetForm(_ref) {
  var dispatch = _ref.dispatch,
      _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      namespace = _ref.namespace,
      rootId = _ref.rootId,
      OBJECTID = _ref.OBJECTID,
      PID = _ref.PID,
      requestType = _ref.requestType,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState('#fff'),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      colorVisible = _useState4[0],
      setColorVisible = _useState4[1];

  var onFinish = function onFinish(values) {
    values.OBJECTID = OBJECTID;
    values.GTYPE = 4;
    values.FIELDNAME = values.NO || record.FIELDNAME;
    dispatch({
      type: 'commonConfig/editRootItem',
      payload: {
        values: values,
        record: requestType ? {} : record,
        namespace: namespace,
        rootId: rootId,
        PID: PID,
        rootPid: record.ID ? record.ID : 0
      }
    });
  };

  var openColorPicker = function openColorPicker() {
    setColorVisible(true);
  };

  var handleChangeComplete = function handleChangeComplete(color) {
    setBgColor(color.hex);
  };

  var chooseColor = function chooseColor() {
    form.setFieldsValue({
      BG_COLOR: bgColor
    });
    setColorVisible(false);
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + '字段组',
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "propertySet",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: requestType ? {} : record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    label: '背景色配置',
    name: "BG_COLOR"
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      backgroundColor: bgColor,
      opacity: '0.7'
    },
    onClick: openColorPicker
  })), /*#__PURE__*/React.createElement(LocaleNameForm, null)), /*#__PURE__*/React.createElement(DragModal, {
    width: "auto",
    visible: colorVisible,
    onCancel: function onCancel() {
      return setColorVisible(false);
    },
    onOk: chooseColor,
    title: "\u9009\u62E9\u989C\u8272"
  }, /*#__PURE__*/React.createElement(SketchPicker, {
    onChangeComplete: handleChangeComplete,
    color: bgColor,
    width: 300
  })));
};

export default connect()(GridSetForm);