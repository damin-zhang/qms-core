function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 选择全部字段
 */
import React, { useState, useEffect } from 'react';
import TableWithBtn from '../../common/table/TableWithBtn';
import Modal from '../../common/drag/DragModal';
import { isEnglish } from '../../../utils/utils';
import language from '@/locale/language';
import { Select } from 'antd';
import { queryObjFields, queryObject, queryItemPGR } from '../../../service/metaApi';
var common = language.common,
    _language$configPlatf = language.configPlatform.tableConfig,
    title = _language$configPlatf.title,
    fieldsProperty = _language$configPlatf.fieldsProperty;
var Option = Select.Option;
var columns = [{
  title: fieldsProperty.fields.NO,
  dataIndex: 'NO',
  width: 200
}, {
  title: fieldsProperty.fields.NAME,
  dataIndex: 'NAME'
}];

var SelectData = function SelectData(_ref) {
  var visible = _ref.visible,
      onCancel = _ref.onCancel,
      onSelect = _ref.onSelect;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      keys = _useState2[0],
      setKeys = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dataList = _useState6[0],
      setDataList = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      objectNoList = _useState8[0],
      setObjectNoList = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      tableName = _useState10[0],
      setTableName = _useState10[1];

  useEffect(function () {
    if (visible) {
      queryObject({
        tn: 1,
        condition: "type IN(0,1)"
      }).then(function (res) {
        if (res) {
          setObjectNoList(res.dataList);
        }
      });
    }
  }, [visible]);

  var Ok = function Ok() {
    if (rows[0]) onSelect(rows, tableName);
    onCancel();
  };

  var onChange = function onChange(value, option) {
    setTableName(option.key);
    queryItemPGR({
      tn: 11,
      tableName: value
    }).then(function (res) {
      setDataList(res.dataList);
    });
  };

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      setKeys(selectedRowKeys);
      setRows(selectedRows);
    },
    selectedRowKeys: keys
  };
  var props = {
    dataList: dataList,
    columns: columns,
    rowSelection: rowSelection
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: common.select,
    visible: visible,
    onOk: Ok,
    onCancel: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-y",
    style: {
      height: 500
    }
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    style: {
      marginBottom: '8px'
    },
    placeholder: common.select + '' + title,
    optionFilterProp: "children",
    onChange: onChange,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, objectNoList.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.TABLENAME,
      key: item.META.TABLENAME
    }, isEnglish ? item.META.ENNAME : item.META.NAME);
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/React.createElement(TableWithBtn, props))));
};

export default SelectData;