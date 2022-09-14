var _excluded = ["dispatch", "fieldList", "onOk", "fieldSelectedRowKeys", "fieldSelectedRows", "namespace"];

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
 * @Description: 业务对象-字段
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Checkbox, Tooltip, Tag } from 'antd';
import TableWithBtn from '../../common/table/TableWithBtn';
import DragModal from '../../common/drag/DragModal';
import { isEnglish } from '../../../utils/utils';
import { editorMap, ftypeMap } from '../../../utils/mapParams';
import { editorMap as enEditorMap, ftypeMap as enFtypeMap } from '../../../utils/EnMapParams';
import language from '@/locale/language';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    index = _language$configPlatf.index,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.tableConfig.fieldsProperty,
    fields = _language$configPlatf2.fields,
    buttons1 = _language$configPlatf2.buttons;

var Field = function Field(_ref) {
  var dispatch = _ref.dispatch,
      fieldList = _ref.fieldList,
      onOk = _ref.onOk,
      fieldSelectedRowKeys = _ref.fieldSelectedRowKeys,
      fieldSelectedRows = _ref.fieldSelectedRows,
      namespace = _ref.namespace,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList = _useState2[0],
      setDataList = _useState2[1];

  var columns = [{
    title: '序号',
    dataIndex: 'index',
    width: 50
  }, {
    title: fields.FIELDNAME,
    dataIndex: 'FIELDNAME',
    width: 200
  }, {
    title: fields.NAME,
    dataIndex: isEnglish ? 'ENNAME' : 'NAME',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Tag, {
        color: record.TYPE ? 'blue' : '#F86F80'
      }, text);
    }
  }, {
    title: fields.ENNAME,
    dataIndex: 'ENNAME',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Tag, {
        color: record.TYPE ? 'blue' : '#F86F80'
      }, text);
    }
  }, {
    title: fields.FTYPE,
    dataIndex: 'FTYPE',
    width: 100,
    render: function render(text) {
      var fType = isEnglish ? enFtypeMap.find(function (item) {
        return item.value === text;
      }) : ftypeMap.find(function (item) {
        return item.value === text;
      });
      return fType ? /*#__PURE__*/React.createElement(Tooltip, null, fType.name) : /*#__PURE__*/React.createElement(Tooltip, null, text);
    }
  }, {
    title: fields.FLENGTH,
    dataIndex: 'FLENGTH',
    width: 100
  }, {
    title: fields.ACCURACY,
    dataIndex: 'ACCURACY',
    width: 50
  }, {
    title: fields.ONLY,
    dataIndex: 'ONLY',
    width: 100,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.ONLY
      });
    }
  }, {
    title: fields.ALLOWNULL,
    dataIndex: 'ALLOWNULL',
    width: 100,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.ALLOWNULL
      });
    }
  }, {
    title: fields.SUPQUERY,
    dataIndex: 'SUPQUERY',
    width: 100,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.SUPQUERY
      });
    }
  }, {
    title: fields.DEFAULTV,
    dataIndex: 'DEFAULTV',
    width: 80
  }, {
    title: fields.EDITOR,
    dataIndex: 'EDITOR',
    width: 150,
    render: function render(text) {
      var fType = isEnglish ? enEditorMap.find(function (item) {
        return item.value === text;
      }) : editorMap.find(function (item) {
        return item.value === text;
      });
      return fType ? fType.name : text;
    }
  }];
  useEffect(function () {
    if (fieldList && fieldList.length) setDataList(fieldList);
  }, [fieldList]);

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: "".concat(namespace, "/packet"),
      payload: {
        fieldSelectedRowKeys: selectedRowKeys,
        fieldSelectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: fieldSelectedRowKeys
  };

  var onSearch = function onSearch(value) {
    if (value) {
      var list = fieldList.filter(function (item) {
        return item.FIELDNAME.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.NAME.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.ENNAME && item.ENNAME.toUpperCase().indexOf(value.toUpperCase()) >= 0;
      });
      setDataList(list);
    } else {
      setDataList(fieldList);
    }
  };

  var tableProps = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    onSearch: onSearch
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/React.createElement(DragModal, _extends({
    title: common.select
  }, restProps, {
    height: 500,
    onOk: onOk(fieldSelectedRows)
  }), /*#__PURE__*/React.createElement(TableWithBtn, tableProps)));
};

export default connect()(Field);