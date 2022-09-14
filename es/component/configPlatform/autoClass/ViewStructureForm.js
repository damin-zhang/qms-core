function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 视图结构树表单
 */
import React, { useEffect, useState } from 'react';
import { Form, Input, Checkbox, Button, Select } from 'antd';
import { connect } from 'dva';
import SearchInput from '../../common/search/SearchInput';
import LocaleNameForm from '../common/LocaleNameForm';
import language from '@/locale/language';
var common = language.common,
    fields = language.configPlatform.autoClass.viewStructure.fields;
var Item = Form.Item;
var Option = Select.Option;
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

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      focusDom = _useState2[0],
      setFocusDom = _useState2[1];

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    disabled: !enable,
    style: {
      marginLeft: '5px'
    },
    onClick: function onClick() {
      return form.submit();
    },
    type: "primary"
  }, common.save), /*#__PURE__*/React.createElement(Select, {
    defaultValue: "\u9009\u62E9\u53D8\u91CF",
    onSelect: onSelect
  }, variableMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  })), /*#__PURE__*/React.createElement(Form, _extends({
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(SearchInput, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), /*#__PURE__*/React.createElement(Item, {
    name: "SUMMARY",
    label: fields.SUMMARY,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "LOADDATASET",
    label: fields.LOADDATASET,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, _extends({
    name: "NODECONDITION",
    label: fields.NODECONDITION
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/React.createElement(Input.TextArea, {
    onFocus: onFocus
  })), /*#__PURE__*/React.createElement(Item, _extends({
    name: "DATACONDITION",
    label: fields.DATACONDITION
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/React.createElement(Input.TextArea, {
    onFocus: onFocus
  })), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(ViewStructureForm);