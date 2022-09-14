var _excluded = ["dispatch", "record", "dataList", "visible"];

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
 * @Description: 业务菜单表单
 */
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Checkbox, Divider, Typography } from 'antd';
import SearchInput from '../../common/search/SearchInput';
import DragModal from '../../common/drag/DragModal';
import LocaleNameForm from '../common/LocaleNameForm';
import { connect } from 'dva';
import { wtypeMap, reqParamMap1, reqParamMap2, reqParamMap3, reqParamMap4, IMPLTYPEMap, libraryMTYPEMap } from '../../../utils/mapParams';
import language from '@/locale/language';
import { checkRepeat } from '../../../utils/utils';
import ReportParams from '../tableConfig/menu/ReportParams';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig,
    fieldRemark = _language$configPlatf.fieldsProperty.fields,
    fields = _language$configPlatf.objectMenu.fields;
var Option = Select.Option;
var Item = Form.Item;
var Text = Typography.Text;
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

var BusinessMenuForm = function BusinessMenuForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      dataList = _ref.dataList,
      visible = _ref.visible,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      WTYPE = _useState2[0],
      setWTYPE = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      IMPLTYPE = _useState4[0],
      setIMPLTYPE = _useState4[1];

  useEffect(function () {
    var WTYPE = record.WTYPE,
        IMPLTYPE = record.IMPLTYPE;

    if (visible) {
      setWTYPE(WTYPE);
      setIMPLTYPE(IMPLTYPE);
    }
  }, [visible, record]);

  var onFinish = function onFinish(values) {
    values.REQPARAM = (values.REQPARAM || []).join(';');
    if (IMPLTYPE === 2) values.IMPLCLASS = 'proce.CallDataBaseProcedureEvent';
    dispatch({
      type: 'selectMenu/edit',
      payload: {
        values: values,
        record: record
      }
    });
  };

  var selectProcedures = function selectProcedures() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'procedures',
        onSelect: function onSelect(rows) {
          var NAME = rows[0].NAME;
          form.setFieldsValue({
            PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, {
              procedures: NAME
            })
          });
        }
      }
    });
  };

  var onValuesChange = function onValuesChange(_ref2) {
    var WTYPE = _ref2.WTYPE,
        IMPLTYPE = _ref2.IMPLTYPE;
    if (WTYPE) setWTYPE(WTYPE);
    if (IMPLTYPE) setIMPLTYPE(IMPLTYPE);
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

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit,
    form: form,
    visible: visible
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "businessMenu",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout, {
    onValuesChange: onValuesChange
  }), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern,
      validator: function validator(_, value) {
        return checkRepeat(value, 'NO', dataList, record.ID);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(SearchInput, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), /*#__PURE__*/React.createElement(Item, {
    name: "MTYPE",
    label: fields.MTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, libraryMTYPEMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: "REMARK",
    label: fieldRemark.REMARK
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Divider, null, fields.modal_params), /*#__PURE__*/React.createElement(Item, {
    name: "WTYPE",
    label: fields.WTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, wtypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Divider, null, fields.impl_params), WTYPE !== 'report' && /*#__PURE__*/React.createElement(React.Fragment, null, WTYPE !== 'detailForm' && WTYPE !== 'detailRelationPage' && /*#__PURE__*/React.createElement(Item, {
    name: "IMPLTYPE",
    label: fields.IMPLTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, IMPLTYPEMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), (IMPLTYPE === 1 || IMPLTYPE === 3) && /*#__PURE__*/React.createElement(Item, {
    name: "IMPLCLASS",
    label: IMPLTYPE === 3 ? fields.RESTFUL : fields.IMPLCLASS,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), IMPLTYPE === 2 && /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'procedures'],
    rules: [{
      required: true
    }],
    label: fields.procedures,
    onClick: selectProcedures
  }), /*#__PURE__*/React.createElement(Item, _extends({
    name: "REQPARAM",
    label: fields.REQPARAM,
    className: "whole-line"
  }, layout2), /*#__PURE__*/React.createElement(Checkbox.Group, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.main_object_params, ":"), reqParamMap1.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.parent_object_params, ":"), reqParamMap2.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.class_page_params, ":"), reqParamMap3.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.other_params, ":"), reqParamMap4.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  })))), WTYPE === 'report' && /*#__PURE__*/React.createElement(ReportParams, null), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(BusinessMenuForm);