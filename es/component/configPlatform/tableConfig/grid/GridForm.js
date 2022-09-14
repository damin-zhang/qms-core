var _excluded = ["dispatch", "record", "namespace", "PID", "dataList", "objectNO"];

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
 * @Description: 表格页表单
 */
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Checkbox, Divider } from 'antd';
import DragModal from '../../../common/drag/DragModal';
import LocaleNameForm from '../../common/LocaleNameForm';
import { connect } from 'dva';
import language from '@/locale/language';
import { gridTypeMap, gridOperation } from '../../../../utils/mapParams';
import { gridTypeMap as enGridTypeMap } from '../../../../utils/EnMapParams';
import { checkRepeat, isEnglish, parseMeta } from '../../../../utils/utils';
import SearchInput from '../../../common/search/SearchInput';
import { queryItemPGR } from '../../../../service/metaApi';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.objectGrid,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
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
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';

var GridForm = function GridForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      namespace = _ref.namespace,
      PID = _ref.PID,
      dataList = _ref.dataList,
      objectNO = _ref.objectNO,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      tableType = _useState2[0],
      setTableType = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      gridList = _useState4[0],
      setGridList = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      fieldAList = _useState6[0],
      setFieldAList = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      fieldBList = _useState8[0],
      setFieldBList = _useState8[1];

  useEffect(function () {
    if (record.ID) {
      setTableType(record.TYPE);
    } else record.TYPE = 1;
  }, [record]);

  var onFinish = function onFinish(values) {
    dispatch({
      type: 'commonConfig/editItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        PID: PID
      }
    });
  };

  var selectObject = function selectObject() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          var TABLENAME = rows[0].TABLENAME;
          form.setFieldsValue({
            itemTableName: TABLENAME
          });
          queryItemPGR({
            tn: 11,
            tableName: TABLENAME
          }).then(function (res) {
            if (res) setFieldBList(res.dataList);
          });
          queryItemPGR({
            tn: 13,
            tableName: TABLENAME
          }).then(function (res) {
            if (res) setGridList(parseMeta(res.dataList));
          });
        }
      }
    });
  };

  useEffect(function () {
    if (tableType === 2) {
      queryItemPGR({
        tn: 11,
        tableName: objectNO
      }).then(function (res) {
        if (res) setFieldAList(res.dataList);
      });
    }
  }, [tableType]);

  var typeChange = function typeChange(val) {
    setTableType(val);
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "grid",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "DEFAULTC",
    label: fields.DEFAULTC,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }, {
      validator: function validator(_, value) {
        return checkRepeat(value, 'NO', dataList, record.ID);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "TYPE",
    label: fields.TYPE
  }, /*#__PURE__*/React.createElement(Select, {
    onChange: typeChange
  }, isEnglish ? enGridTypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : gridTypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: "gridOperation",
    label: '表格操作',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    mode: "multiple"
  }, gridOperation.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), tableType === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: 'itemTableName',
    label: '嵌套对象',
    onClick: selectObject,
    rules: [{
      required: true
    }]
  }), /*#__PURE__*/React.createElement(Item, {
    name: "itemGridNO",
    label: '嵌套表格',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, (gridList || []).map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: "controlField",
    label: '控制字段',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (fieldAList || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.ID
    }, item.META.NAME);
  }))), /*#__PURE__*/React.createElement(Divider, null, '嵌套关系'), /*#__PURE__*/React.createElement(Item, {
    label: "\u4E3B\u5BF9\u8C61\u5B57\u6BB5",
    name: 'fieldA',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (fieldAList || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.ID
    }, item.META.NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    label: "\u5D4C\u5957\u5BF9\u8C61\u5B57\u6BB5",
    name: 'fieldB',
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (fieldBList || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.ID
    }, item.META.NAME);
  })))), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(GridForm);