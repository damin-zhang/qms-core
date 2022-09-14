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
 * @Description: 业务对象-字段
 */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import { Checkbox, Tooltip, Tag, Tabs, message } from 'antd';
import TableWithBtn from '../../common/table/TableWithBtn';
import FieldList from './FieldList';
import { confirm, isEnglish, parseMeta, showLoading } from '../../../utils/utils';
import { editorMap, ftypeMap } from '../../../utils/mapParams';
import { editorMap as enEditorMap, ftypeMap as enFtypeMap } from '../../../utils/EnMapParams';
import { queryItemPGR, queryObjFields } from '../../../service/metaApi';
import DragSortForm from '../common/DragSortForm';
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
      _ref$objectRows = _ref.objectRows,
      objectRows = _ref$objectRows === void 0 ? [] : _ref$objectRows,
      footerModel = _ref.footerModel;
  var selectedRows = footerModel.selectedRows,
      selectedRowKeys = footerModel.selectedRowKeys,
      dataList = footerModel.dataList,
      namespace = footerModel.namespace,
      dragSortFormVisible = footerModel.dragSortFormVisible,
      fieldSelectedRowKeys = footerModel.fieldSelectedRowKeys,
      fieldSelectedRows = footerModel.fieldSelectedRows,
      sortList = footerModel.sortList;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldVisible = _useState4[0],
      setFieldVisible = _useState4[1];

  var _ref2 = objectRows[0] || {},
      ID = _ref2.ID,
      TABLEA = _ref2.TABLEA;

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
    title: '整行',
    dataIndex: 'WLINE',
    width: 100,
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.META.WLINE,
        onChange: eidtRow({
          text: text,
          record: record.META,
          id: record.ID,
          field: 'WLINE'
        })
      });
    }
  }, {
    title: '是否生效',
    dataIndex: 'ENABLE',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.ENABLE,
        onChange: eidtRow({
          text: text,
          record: record.META,
          id: record.ID,
          field: 'ENABLE',
          ENABLE: !text
        })
      });
    }
  }, {
    title: '可编辑',
    dataIndex: 'EDITABLE',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.META.EDITABLE,
        onChange: eidtRow({
          text: text,
          record: record.META,
          id: record.ID,
          field: 'EDITABLE'
        })
      });
    }
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

  var eidtRow = function eidtRow(_ref3) {
    var text = _ref3.text,
        record = _ref3.record,
        id = _ref3.id,
        field = _ref3.field,
        ENABLE = _ref3.ENABLE;
    return function () {
      if (field !== 'ENABLE') {
        record = _objectSpread(_objectSpread({}, record), {}, _defineProperty({}, field, text));
        record[field] = text ? false : true;
      }

      dispatch({
        type: 'qualityInspectionTemplate/editItem',
        payload: {
          meta: record,
          id: id,
          type: 'update',
          objectId: ID,
          namespace: namespace,
          activeKey: '2',
          ENABLE: ENABLE
        }
      });
    };
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'qualityInspectionTemplate/editItem',
        payload: {
          rows: rows,
          namespace: namespace,
          objectId: ID,
          id: rows.ID,
          type: 'delete',
          activeKey: '2'
        }
      });
    };
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'footerModel/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible,
        sortList: dataList
      }
    });
  };

  var sort = function sort(list) {
    list = list.map(function (item, index) {
      return {
        SORT: (index + 1) * 10,
        ID: item.ID
      };
    });
    dispatch({
      type: 'qualityInspectionTemplate/sort',
      payload: {
        meta: list,
        namespace: namespace,
        objectId: ID,
        activeKey: '2',
        tableName: 'footer'
      }
    });
  };

  var onOk = function onOk() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function () {
      if (!rows.length) {
        message.warn('请先选择数据');
        return;
      }

      var flag = false;

      if (dataList.length) {
        rows.map(function (item) {
          dataList.some(function (el) {
            if (item.FIELDNAME === el.FIELDNAME) {
              flag = true;
              return message.warn("\u4E0D\u80FD\u91CD\u590D\u6DFB\u52A0\u5B57\u6BB5\uFF1A".concat(item.FIELDNAME));
            }
          });
        });
      }

      if (flag) return;
      var meta = [];
      meta = rows.map(function (item) {
        return _objectSpread({}, item.META);
      });
      dispatch({
        type: 'qualityInspectionTemplate/editItem',
        payload: {
          meta: meta,
          objectId: ID,
          type: 'create',
          namespace: namespace,
          activeKey: '2',
          onCancel: function onCancel() {
            return setFieldVisible(false);
          }
        }
      });
    };
  };

  var btns = [{
    name: '添加',
    func: function func() {
      showLoading();
      queryItemPGR({
        tn: 11,
        tableName: TABLEA
      }).then(function (res) {
        if (res && res.flag) {
          setFieldList(parseMeta(res.dataList));
          setFieldVisible(true);
          dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              fieldSelectedRowKeys: [],
              fieldSelectedRows: []
            }
          });
        }
      });
    }
  }, {
    name: buttons.delete,
    disabled: !selectedRows.length,
    func: function func() {
      confirm({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: '排序',
    disabled: !dataList.length,
    func: function func() {
      toogleModalDragSort();
    }
  }, {
    name: '复制',
    disabled: !selectedRows.length,
    func: function func() {
      copyData(JSON.stringify(selectedRows));
    }
  }, {
    name: '粘贴',
    func: function func() {
      var text = document.getElementById('textarea');

      if (text && text.value) {
        var meta = [];
        meta = JSON.parse(text.value).map(function (item) {
          return _objectSpread({}, item.META);
        });
        dispatch({
          type: 'qualityInspectionTemplate/editItem',
          payload: {
            meta: meta,
            objectId: ID,
            type: 'create',
            namespace: namespace,
            activeKey: '2'
          }
        });
      } else message.warn('请先复制');
    }
  }];

  var copyData = function copyData(data) {
    if (data === '') {
      message.error('单元格数据为空', 1);
    } else {
      var text = document.getElementById('textarea');

      if (text) {
        document.body.removeChild(text);
      }

      var textareaDom = document.createElement('textarea');
      textareaDom.value = data;
      document.body.appendChild(textareaDom);
      textareaDom.select();
      document.execCommand('Copy');
      textareaDom.setAttribute('id', 'textarea');
      textareaDom.style.display = 'none';
      message.success('复制成功', 1);
    }
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'footerModel/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    columns: columns,
    btns: btns,
    dataList: dataList,
    rowSelection: rowSelection
  };
  var fieldProps = {
    visible: fieldVisible,
    fieldList: fieldList,
    namespace: namespace,
    fieldSelectedRowKeys: fieldSelectedRowKeys,
    fieldSelectedRows: fieldSelectedRows,
    onCancel: function onCancel() {
      return setFieldVisible(false);
    },
    onOk: onOk
  };
  var dragProps = {
    visible: dragSortFormVisible,
    dataList: sortList,
    namespace: namespace,
    inspectionSort: sort,
    columns: columns,
    onClose: toogleModalDragSort
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps), /*#__PURE__*/React.createElement(FieldList, fieldProps), /*#__PURE__*/React.createElement(DragSortForm, dragProps));
};

function mapStateToProps(_ref4) {
  var footerModel = _ref4.footerModel;
  return {
    footerModel: footerModel
  };
}

export default connect(mapStateToProps)(Field);