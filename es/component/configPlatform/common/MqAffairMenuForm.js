var _excluded = ["dispatch", "record"];

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
 * @Description: mq事务表单
 */
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import SearchInput from '../../common/search/SearchInput';
import DragModal from '../../common/drag/DragModal';
import LocaleNameForm from './LocaleNameForm';
import { connect } from 'dva';
import { wtypeMap, reqParamMap, mqMtypeMap } from '../../../utils/mapParams';
import { isEnglish } from '../../../utils/utils';
import language from '@/locale/language';
import { queryObject } from '../../../service/metaApi';
var edit = language.common.edit,
    fields = language.configPlatform.mqAffair.fields;
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
var layout2 = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';

var MqAffairMenuForm = function MqAffairMenuForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      mqLinesList = _useState2[0],
      setList = _useState2[1];

  if (record.ID) {
    if (typeof record.REQPARAM === 'string') record.REQPARAM = (record.REQPARAM || '').split(';');
  }

  useEffect(function () {
    queryObject({
      tableName: 'META_MQ_LINES'
    }).then(function (res) {
      if (res) setList(res.dataList);
    });
  }, [record]);

  var onFinish = function onFinish(values) {
    values.REQPARAM = (values.REQPARAM || []).join(';');
    dispatch({
      type: 'selectData/edit',
      payload: {
        values: values,
        record: record
      }
    });
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
    title: edit + ' ' + fields.IMPLCLASS,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "mqAffairMenu",
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
    name: "MTYPE",
    label: fields.MTYPE
  }, /*#__PURE__*/React.createElement(Select, null, mqMtypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Item, {
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
  }))), /*#__PURE__*/React.createElement(Item, {
    name: "CHANNELNAME",
    label: fields.CHANNELNAME
  }, /*#__PURE__*/React.createElement(Select, null, mqLinesList.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.TABLENAME,
      key: item.ID
    }, isEnglish ? item.META.ENNAME : item.META.NAME);
  }))), /*#__PURE__*/React.createElement(Item, _extends({
    name: "MCONTENT",
    className: "whole-line",
    label: fields.MCONTENT
  }, layout2, {
    rules: [{
      required: true
    }]
  }), /*#__PURE__*/React.createElement(Input.TextArea, null)), /*#__PURE__*/React.createElement(Item, _extends({
    name: "REQPARAM",
    label: fields.REQPARAM,
    className: "whole-line"
  }, layout2), /*#__PURE__*/React.createElement(Checkbox.Group, {
    options: reqParamMap
  })), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(MqAffairMenuForm);