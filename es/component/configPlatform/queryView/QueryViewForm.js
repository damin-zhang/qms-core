var _excluded = ["record", "dispatch", "namespace"];

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
 * @Description: 查询视图表单
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Checkbox, Select } from 'antd';
import { connect } from 'dva';
import DragModal from '../../common/drag/DragModal';
import SearchInput from '../../common/search/SearchInput';
import LocaleNameForm from '../common/LocaleNameForm';
import language from '@/locale/language';
import { queryItemPGR } from '../../../service/metaApi';
import OutreachField from './OutreachField';
import { queryModelMap } from '../../../utils/queryTabConfigRelationApi';
import { parseMeta } from '../../../utils/utils';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.queryView,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Item = Form.Item;
var Option = Select.Option;
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

var QueryViewForm = function QueryViewForm(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      gridList = _useState2[0],
      setGridList = _useState2[1];

  useEffect(function () {
    var ID = record.ID,
        OBJECTNO = record.OBJECTNO;

    if (ID) {
      getGridList(OBJECTNO);
    }
  }, [record, form]);

  var onFinish = function onFinish(values) {
    values.PARAMS = JSON.stringify(values.PARAMS);
    dispatch({
      type: 'commonConfig/edit',
      payload: {
        values: values,
        record: record,
        namespace: namespace
      }
    });
  };

  var getGridList = function getGridList(objectNo) {
    queryItemPGR({
      tn: queryModelMap('META_OBJECT_GRID'),
      tableName: objectNo
    }).then(function (res) {
      if (res) setGridList(parseMeta(res.dataList));
    });
  };

  var selectData = function selectData() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        condition: "JSON_VALUE(B.META,'$.TYPE') IN (0, 1)",
        onSelect: function onSelect(rows) {
          form.setFieldsValue({
            OBJECTNO: rows[0].TABLENAME
          });
          getGridList(rows[0].TABLENAME);
        }
      }
    });
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    },
    width: 850
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "queryView",
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
    }, {
      type: 'string',
      max: 50
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(SearchInput, {
    name: "OBJECTNO",
    label: fields.OBJECTNO,
    rules: [{
      required: true
    }],
    onClick: selectData
  }), /*#__PURE__*/React.createElement(Item, {
    name: "GRIDNO",
    label: fields.GRIDNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, gridList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), /*#__PURE__*/React.createElement(Item, _extends({
    name: "WCONDITION",
    label: fields.WCONDITION
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/React.createElement(Input.TextArea, null)), /*#__PURE__*/React.createElement(OutreachField, {
    form: form
  }), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(QueryViewForm);