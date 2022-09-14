var _excluded = ["dispatch", "record", "namespace", "rootId", "pCONTROLAUTH", "objectDataList"];

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
 * @Description: 属性页字段表单
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Checkbox } from 'antd';
import DragModal from '../../../common/drag/DragModal';
import LocaleNameForm from '../../common/LocaleNameForm';
import { connect } from 'dva';
import language from '@/locale/language';
import SearchInput from '../../../common/search/SearchInput';
import AddLimitForm from '../../common/AddLimitForm';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.objectProperty,
    fields = _language$configPlatf.fields,
    objectTitle = _language$configPlatf.objectTitle;
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

var PropertyItemForm = function PropertyItemForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      namespace = _ref.namespace,
      rootId = _ref.rootId,
      pCONTROLAUTH = _ref.pCONTROLAUTH,
      objectDataList = _ref.objectDataList,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(record ? record.CONTROLAUTH : false),
      _useState2 = _slicedToArray(_useState, 2),
      CONTROLAUTH = _useState2[0],
      setCONTROLAUTH = _useState2[1];

  useEffect(function () {
    if (record) {
      var _CONTROLAUTH = record.CONTROLAUTH;
      setCONTROLAUTH(_CONTROLAUTH);
    }
  }, [record, CONTROLAUTH]);

  var onFinish = function onFinish(values) {
    dispatch({
      type: 'commonConfig/editRootItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        rootId: rootId
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

  var onChange = function onChange(e) {
    setCONTROLAUTH(e.target.checked);
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + objectTitle,
    form: form
  }, restProps, {
    width: 900,
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "propertyItem",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "FIELDNAME",
    label: fields.FIELDNAME,
    rules: [{
      required: true,
      pattern: pattern
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "EDITABLE",
    label: fields.EDITABLE,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "WLINE",
    label: fields.WLINE,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "allowFormNull",
    label: fields.allowFormNull,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "PATTERN",
    label: fields.PATTERN
  }, /*#__PURE__*/React.createElement(Input, null)), pCONTROLAUTH ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: 'AUTHCODE',
    label: fields.AUTHCODE,
    onClick: selectAUTHCODE,
    allowClear: true
  })) : null, record && record.PID !== '0' && /*#__PURE__*/React.createElement(AddLimitForm, {
    objectDataList: objectDataList,
    form: form,
    record: record
  }), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(PropertyItemForm);