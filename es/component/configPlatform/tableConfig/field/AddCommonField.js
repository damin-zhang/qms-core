function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 业务对象-字段-添加常用字段
 */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Checkbox, Tooltip } from 'antd';
import TableWithBtn from '../../../common/table/TableWithBtn';
import FieldForm from './FieldForm';
import { confirm, isEnglish } from '../../../../utils/utils';
import { editorMap, ftypeMap } from '../../../../utils/mapParams';
import { editorMap as enEditorMap, ftypeMap as enFtypeMap } from '../../../../utils/EnMapParams';
import language from '@/locale/language';
import DragModal from '../../../common/drag/DragModal';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.tableConfig.fieldsProperty,
    fields = _language$configPlatf2.fields,
    buttons1 = _language$configPlatf2.buttons;
var columns = [{
  title: common.index,
  dataIndex: 'index',
  width: 50,
  render: function render(text) {
    return text + 1;
  }
}, {
  title: fields.FIELDNAME,
  dataIndex: 'FIELDNAME',
  width: 200
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
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
    return fType ? fType.name : text;
  }
}, {
  title: fields.FLENGTH,
  dataIndex: 'FLENGTH',
  width: 50
}, {
  title: fields.ACCURACY,
  dataIndex: 'ACCURACY',
  width: 50
}, {
  title: fields.ONLY,
  dataIndex: 'ONLY',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: fields.ALLOWNULL,
  dataIndex: 'ALLOWNULL',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
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
}, {
  title: fields.TYPE,
  dataIndex: 'TYPE',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement("span", null, text ? '业务字段' : '系统字段');
  }
}, {
  title: fields.REMARK,
  dataIndex: 'REMARK'
}];

var AddCommonField = function AddCommonField(_ref) {
  var dispatch = _ref.dispatch,
      addCommonField = _ref.addCommonField,
      fieldList = _ref.fieldList;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList1 = _useState2[0],
      setDataList1 = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      dataList2 = _useState4[0],
      setDataList2 = _useState4[1];

  var visible = addCommonField.visible,
      record = addCommonField.record,
      selectedRows = addCommonField.selectedRows,
      selectedRowKeys = addCommonField.selectedRowKeys,
      dataList = addCommonField.dataList,
      namespace = addCommonField.namespace,
      modalVisible = addCommonField.modalVisible,
      PID = addCommonField.PID;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  useEffect(function () {
    if (dataList.length) {
      setDataList1(dataList.map(function (item) {
        return _objectSpread(_objectSpread({}, item), item.META);
      }));
      setDataList2(dataList.map(function (item) {
        return _objectSpread(_objectSpread({}, item), item.META);
      }));
    }
  }, [dataList]);

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      TYPE: 1
    };
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    dispatch({
      type: 'addCommonField/packet',
      payload: {
        record: _objectSpread({
          FTYPE: 'VARCHAR',
          EDITOR: 'TextBox',
          ONLY: false,
          ALLOWNULL: true,
          SUPQUERY: false,
          FLENGTH: 50
        }, record),
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var del = function del(rows) {
    return function () {
      var fieldIds = [];
      var field1 = rows.map(function (item) {
        fieldIds.push({
          fieldId: item.ID
        });
      });
      dispatch({
        type: 'addCommonField/del',
        payload: {
          fieldIds: fieldIds
        }
      });
    };
  };

  var btns = [{
    name: buttons.create,
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.update,
    disabled: !(ID && selectedRows.length === 1),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !ID,
    func: function func() {
      confirm({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    selectedRows.forEach(function (item) {
      item.STATE = 0;
    });
    dispatch({
      type: 'addCommonField/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var onCancel = function onCancel() {
    dispatch({
      type: 'addCommonField/packet',
      payload: {
        modalVisible: false
      }
    });
  };

  var onSearch = function onSearch(queryWord) {
    if (queryWord) {
      var data = dataList2.filter(function (item) {
        return item.FIELDNAME.toUpperCase().indexOf(queryWord.toUpperCase()) >= 0 || item.NAME.toUpperCase().indexOf(queryWord.toUpperCase()) >= 0;
      });
      setDataList1(data);
    } else {
      setDataList1(dataList2);
    }
  };

  var onOk = function onOk() {
    if (ID) {
      var values = [];
      selectedRows.forEach(function (item) {
        var NO = item.NO,
            FIELDNAME = item.FIELDNAME,
            FTYPE = item.FTYPE,
            NAME = item.NAME,
            FLENGTH = item.FLENGTH,
            ALLOWNULL = item.ALLOWNULL,
            ACCURACY = item.ACCURACY,
            ONLY = item.ONLY,
            SUPQUERY = item.SUPQUERY,
            TYPE = item.TYPE,
            EDITOR = item.EDITOR,
            REMARK = item.REMARK,
            EDITPARAMS = item.EDITPARAMS;
        values.push(item.META);
      });
      values.forEach(function (item) {
        dispatch({
          type: 'commonConfig/editItem',
          payload: {
            values: item,
            record: {},
            namespace: 'field',
            PID: PID
          }
        });
      });
    }

    onCancel();
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    columns: columns,
    dataList: dataList1,
    rowSelection: rowSelection,
    btns: btns,
    rightClick: toogleModal,
    onSearch: onSearch
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    fieldList: fieldList,
    isCommon: true
  };
  return /*#__PURE__*/React.createElement(DragModal, {
    visible: modalVisible,
    title: common.edit + buttons1.add_common_field,
    onCancel: onCancel,
    onOk: onOk,
    height: 500,
    width: "80%"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps), /*#__PURE__*/React.createElement(FieldForm, formProps));
};

function mapStateToProps(_ref3) {
  var addCommonField = _ref3.addCommonField;
  return {
    addCommonField: addCommonField
  };
}

export default connect(mapStateToProps)(AddCommonField);