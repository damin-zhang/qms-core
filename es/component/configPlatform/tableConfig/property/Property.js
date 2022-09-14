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
import { Checkbox, message, Typography, Form } from 'antd';
import TableWithBtn from '../../../common/table/TableWithBtn';
import PropertyForm from './PropertyForm';
import PropertyItemForm from './PropertyItemForm';
import PropertySetForm from './PropertySetForm';
import { confirm, isEnglish, parseMeta } from '../../../../utils/utils';
import Preview from '../../common/Preview';
import language from '@/locale/language';
import DragCmp from '../../../common/drag/DragCmp';
import DragSortForm from '../../common/DragSortForm';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    index = _language$configPlatf.index,
    _language$configPlatf2 = _language$configPlatf.tableConfig,
    _language$configPlatf3 = _language$configPlatf2.objectProperty,
    fields = _language$configPlatf3.fields,
    create_collection = _language$configPlatf3.buttons.create_collection,
    fields1 = _language$configPlatf2.fieldsProperty.fields;
var formLayout = {
  vertical: '垂直',
  inline: '水平'
};

var Property = function Property(_ref) {
  var dispatch = _ref.dispatch,
      property = _ref.property,
      isModeling = _ref.isModeling,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var navMenu = property.navMenu,
      visible = property.visible,
      previewVisible = property.previewVisible,
      record = property.record,
      selectedRows = property.selectedRows,
      selectedRowKeys = property.selectedRowKeys,
      dataList = property.dataList,
      namespace = property.namespace,
      PID = property.PID,
      objectDataList = property.objectDataList,
      objectSelectedRowKeys = property.objectSelectedRowKeys,
      objectSelectedRows = property.objectSelectedRows,
      objectRecord = property.objectRecord,
      objectVisible = property.objectVisible,
      enable = property.enable,
      setVisible = property.setVisible,
      pCONTROLAUTH = property.pCONTROLAUTH,
      _property$dragSortFor = property.dragSortFormVisible,
      dragSortFormVisible = _property$dragSortFor === void 0 ? false : _property$dragSortFor;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID,
      OBJECTID = _ref2.OBJECTID,
      PEPTIDE = _ref2.PEPTIDE,
      COLUMNS = _ref2.COLUMNS,
      WIDTH = _ref2.WIDTH;

  var _ref3 = objectSelectedRows[0] || {},
      objectID = _ref3.ID,
      objectPID = _ref3.PID;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      editingKey = _useState2[0],
      setEditingKey = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      editableKeys = _useState4[0],
      setEditableRowKeys = _useState4[1];

  var pattern = '^[A-Z][A-Z0-9_]*$';
  var objectTypes = sessionStorage.getItem('tableConfigObjectType');

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      TYPE: 1
    };
    dispatch({
      type: 'property/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/delItem',
        payload: {
          rows: rows,
          namespace: namespace,
          PID: PID
        }
      });
    };
  };

  var eidtRow = function eidtRow(_ref4) {
    var text = _ref4.text,
        record = _ref4.record,
        field = _ref4.field,
        item = _ref4.item;
    return function () {
      if (activeTab !== '2') {
        message.warn('不是设计中的对象');
        return;
      }

      if (field === 'tiled' && !record.PEPTIDE) {
        message.warn('form表单没有分组');
        return;
      }

      var values = record.META;

      if (field === 'PEPTIDE' && record.PEPTIDE) {
        values.tiled = false;
      }

      values[field] = text === 1 || text === true ? false : true;

      if (item) {
        dispatch({
          type: 'commonConfig/editRootItem',
          payload: {
            values: values,
            record: record,
            namespace: namespace,
            rootId: ID
          }
        });
      } else {
        dispatch({
          type: 'commonConfig/editItem',
          payload: {
            values: values,
            record: record,
            namespace: namespace,
            PID: PID
          }
        });
      }
    };
  };

  var columns = [{
    title: fields.DEFAULTC,
    dataIndex: 'DEFAULTC',
    width: 50,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.DEFAULTC,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'DEFAULTC'
        })
      });
    }
  }, {
    title: fields.NO,
    dataIndex: 'NO',
    width: 100
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 120
  }, {
    title: fields.COLUMNS,
    dataIndex: 'COLUMNS',
    width: 100
  }, {
    title: fields.WIDTH,
    dataIndex: 'WIDTH',
    width: 100
  }, {
    title: fields.PEPTIDE,
    dataIndex: 'PEPTIDE',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.PEPTIDE,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'PEPTIDE'
        })
      });
    }
  }, {
    title: fields.TILED,
    dataIndex: 'tiled',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.tiled,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'tiled'
        })
      });
    }
  }, {
    title: fields.changeControl,
    dataIndex: 'changeControl',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.changeControl,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'changeControl'
        })
      });
    }
  }, {
    title: fields.FORMLAYOUT,
    dataIndex: 'formLayout',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("span", null, formLayout[text] || formLayout['inline']);
    }
  }];
  var objectColumns = [{
    title: index,
    dataIndex: PEPTIDE ? 'rowkey' : 'index',
    width: 80,
    align: 'left',
    editable: false
  }, {
    title: fields.FIELDNAME,
    dataIndex: 'FIELDNAME',
    width: 100,
    editable: false
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 150,
    align: 'center'
  }, {
    title: fields.ENNAME,
    dataIndex: 'ENNAME',
    width: 150
  }, {
    title: fields.EDITABLE,
    dataIndex: 'EDITABLE',
    width: 100,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.EDITABLE,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'EDITABLE',
          item: true
        })
      });
    },
    editable: false
  }, {
    title: fields.WLINE,
    dataIndex: 'WLINE',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.WLINE,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'WLINE',
          item: true
        })
      });
    },
    editable: false
  }, {
    title: fields.allowFormNull,
    dataIndex: 'allowFormNull',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.allowFormNull,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'allowFormNull',
          item: true
        })
      });
    },
    editable: false
  }, {
    title: fields.AUTHCODE,
    dataIndex: 'AUTHCODE',
    editable: false
  }, {
    title: fields1.operation,
    dataIndex: 'operation',
    width: 85,
    fixed: 'right',
    editable: false,
    align: 'center',
    render: function render(_, row, index, action) {
      return editingKey === row.key ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Typography.Link, {
        onClick: function onClick() {
          return onSave(row.key, row, action);
        },
        style: {
          marginRight: 8
        }
      }, fields1.save), /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          action === null || action === void 0 ? void 0 : action.cancelEditable(row.key);
          setEditingKey('');
        }
      }, fields1.cancel)) : /*#__PURE__*/React.createElement(Typography.Link, {
        disabled: editingKey !== '' || activeTab !== '2',
        onClick: function onClick() {
          action === null || action === void 0 ? void 0 : action.startEditable(row.key);
          setEditingKey(row.key);
        }
      }, fields1.edit);
    }
  }]; // //保存修改

  var onSave = function onSave(key, record, action) {
    var newValues = form.getFieldValue(key);
    setEditingKey('');
    action === null || action === void 0 ? void 0 : action.cancelEditable(key);

    if (activeTab !== '2') {
      message.warn('不是设计中的对象');
      return;
    }

    var values = _objectSpread(_objectSpread({}, record.META), newValues);

    values.OBJECTID = record.OBJECTID;
    if (record.GTYPE === 2) values.PARAMS = typeof values.PARAMS === 'string' ? JSON.stringify(values.PARAMS) : values.PARAMS;
    dispatch({
      type: 'commonConfig/editRootItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        rootId: record.ROOTID,
        PID: PID
      }
    });
  };

  var btns = [{
    name: buttons.create,
    disabled: !(enable && activeTab === '2'),
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && ID),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && activeTab === '2' && ID),
    func: function func() {
      confirm({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'property/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        objectSelectedRows: [],
        objectSelectedRowKeys: []
      }
    });
    dispatch({
      type: 'commonConfig/queryRootItem',
      payload: {
        namespace: namespace,
        rootId: selectedRows[0].ID,
        objectType: sessionStorage['tableConfigObjectType']
      }
    });
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };

  var toogleItemModal = function toogleItemModal(objectRecord) {
    dispatch({
      type: 'property/packet',
      payload: {
        objectRecord: objectRecord,
        objectVisible: !objectVisible
      }
    });
  };

  var delItem = function delItem(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/delRootItem',
        payload: {
          rows: rows,
          namespace: namespace,
          rootId: ID
        }
      });
    };
  };

  var toogleSetModal = function toogleSetModal(objectRecord) {
    dispatch({
      type: 'property/packet',
      payload: {
        objectRecord: objectRecord,
        setVisible: !setVisible
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'property/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible
      }
    });
  };

  var addField = function addField() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'field',
        objectId: PID,
        rData: objectDataList,
        objectTypes: objectTypes,
        onSelect: function onSelect(rows) {
          var PID = PEPTIDE ? objectID : null;
          var values = rows.map(function (item) {
            var FIELDNAME = item.FIELDNAME,
                NAME = item.NAME,
                DEFAULTV = item.DEFAULTV,
                ID = item.ID,
                ENNAME = item.ENNAME;
            return {
              FIELDNAME: FIELDNAME,
              NAME: NAME,
              ENNAME: ENNAME,
              DEFAULTV: DEFAULTV,
              OBJECTID: OBJECTID,
              EDITABLE: 1,
              WLINE: false,
              PID: PID,
              fieldId: ID
            };
          });
          dispatch({
            type: 'commonConfig/editRootItem',
            payload: {
              values: values,
              rootId: ID,
              namespace: namespace
            }
          });
        }
      }
    });
  };

  var preview = function preview() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'field',
        objectId: PID,
        rData: objectDataList,
        preview: true,
        objectTypes: objectTypes
      }
    });
  };

  var objectBtns = [{
    name: buttons.add,
    disabled: !(enable && activeTab === '2' && ID && (PEPTIDE && objectPID === '0' || !PEPTIDE)),
    func: function func() {
      addField();
    }
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && objectID && ID && objectSelectedRows.length === 1),
    func: function func() {
      if (objectPID === '0') {
        toogleSetModal(objectSelectedRows[0]);
      } else {
        toogleItemModal(objectSelectedRows[0]);
      }
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && activeTab === '2' && objectID && ID),
    func: function func() {
      confirm({
        title: common.confirm + buttons.delete,
        onOk: delItem(objectSelectedRows)
      });
    }
  }, {
    name: create_collection,
    disabled: !(enable && activeTab === '2' && PEPTIDE),
    func: function func() {
      toogleSetModal(objectSelectedRows[0]);
    }
  }, {
    name: buttons.reorder,
    disabled: !(isModeling && ID && objectDataList),
    func: function func() {
      toogleModalDragSort();
    }
  }, {
    name: buttons.preview,
    disabled: !(ID && objectDataList),
    func: function func() {
      preview();
    }
  }];
  var props = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns
  };
  var objectProps = {
    columns: objectColumns,
    dataList: ID ? objectDataList.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        allowFormNull: item.allowFormNull === undefined ? true : item.allowFormNull
      }); //form表单值默认允许为空
    }) : [],
    rowSelection: {
      onChange: function onChange(objectSelectedRowKeys, objectSelectedRows) {
        dispatch({
          type: 'property/packet',
          payload: {
            objectSelectedRows: objectSelectedRows,
            objectSelectedRowKeys: objectSelectedRowKeys
          }
        });
      },
      selectedRowKeys: objectSelectedRowKeys
    },
    btns: objectBtns,
    isTree: PEPTIDE,
    canDrag: enable,
    namespace: namespace,
    listType: 1,
    afterDragFunc: function afterDragFunc() {
      onSelectChange(selectedRowKeys, selectedRows);
    },
    expandIconColumnIndex: 3,
    // 表格可编辑参数配置
    editable: {
      form: form,
      editableKeys: editableKeys,
      onSave: onSave,
      onChange: setEditableRowKeys,
      actionRender: function actionRender(row, config, dom) {
        return [dom.save, dom.cancel];
      }
    }
  };
  var dragProps = {
    visible: dragSortFormVisible,
    dataList: ID ? objectDataList : [],
    isTree: PEPTIDE,
    canDrag: enable,
    namespace: namespace,
    listType: 1,
    ID: ID,
    isWho: 'property',
    columns: objectColumns,
    onClose: toogleModalDragSort,
    objectTypes: objectType
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    PID: PID,
    dataList: dataList
  };
  var objectFormProps = {
    record: objectRecord,
    visible: objectVisible,
    onCancel: toogleItemModal,
    namespace: namespace,
    rootId: ID,
    pCONTROLAUTH: pCONTROLAUTH,
    objectDataList: objectDataList
  };
  var setFormProps = {
    record: objectRecord,
    visible: setVisible,
    onCancel: toogleSetModal,
    namespace: namespace,
    rootId: ID,
    OBJECTID: OBJECTID,
    pCONTROLAUTH: pCONTROLAUTH
  };
  var previewFrom = {
    columns: COLUMNS,
    peptide: PEPTIDE,
    labelLen: ((WIDTH || 700) - 60) / COLUMNS * 0.4 - 20
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(DragCmp, {
    enable: {
      bottom: true
    },
    showTab: true,
    height: "30%"
  }, /*#__PURE__*/React.createElement(TableWithBtn, props)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '5px',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(TableWithBtn, objectProps))), /*#__PURE__*/React.createElement(PropertyForm, formProps), /*#__PURE__*/React.createElement(PropertyItemForm, objectFormProps), /*#__PURE__*/React.createElement(PropertySetForm, setFormProps), /*#__PURE__*/React.createElement(Preview, {
    previewFrom: previewFrom
  }), /*#__PURE__*/React.createElement(DragSortForm, dragProps));
};

function mapStateToProps(_ref5) {
  var property = _ref5.property,
      navMenu = _ref5.navMenu,
      isModeling = _ref5.user.isModeling;
  return {
    property: property,
    navMenu: navMenu,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(Property);