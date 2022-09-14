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
 * @Description: 业务对象-表格
 */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import { Checkbox, Tag, message, Typography, Form } from 'antd';
import TableWithBtn from '../../../common/table/TableWithBtn';
import GridForm from './GridForm';
import GridSetForm from './GridSetForm';
import GridItemForm from './GridItemForm';
import GridPreview from './GridPreview';
import { confirm, isEnglish } from '../../../../utils/utils';
import { gridTypeMap, alignMap, gTypeMap, colorMap, gridOperation } from '../../../../utils/mapParams';
import { gridTypeMap as enGridTypeMap, alignMap as enAlignMap, gTypeMap as enGTypeMap } from '../../../../utils/EnMapParams';
import language from '@/locale/language';
import DragCmp from '../../../common/drag/DragCmp';
import DragSortForm from '../../common/DragSortForm';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    index = _language$configPlatf.index,
    _language$configPlatf2 = _language$configPlatf.tableConfig,
    _language$configPlatf3 = _language$configPlatf2.objectGrid,
    fields = _language$configPlatf3.fields,
    buttons1 = _language$configPlatf3.buttons,
    fields1 = _language$configPlatf2.fieldsProperty.fields;

var Grid = function Grid(_ref) {
  var dispatch = _ref.dispatch,
      grid = _ref.grid,
      isModeling = _ref.isModeling,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var visible = grid.visible,
      record = grid.record,
      selectedRows = grid.selectedRows,
      selectedRowKeys = grid.selectedRowKeys,
      dataList = grid.dataList,
      namespace = grid.namespace,
      PID = grid.PID,
      objectDataList = grid.objectDataList,
      objectSelectedRowKeys = grid.objectSelectedRowKeys,
      _grid$objectSelectedR = grid.objectSelectedRows,
      objectSelectedRows = _grid$objectSelectedR === void 0 ? [] : _grid$objectSelectedR,
      objectRecord = grid.objectRecord,
      objectVisible = grid.objectVisible,
      tableVisible = grid.tableVisible,
      enable = grid.enable,
      pCONTROLAUTH = grid.pCONTROLAUTH,
      _grid$dragSortFormVis = grid.dragSortFormVisible,
      dragSortFormVisible = _grid$dragSortFormVis === void 0 ? false : _grid$dragSortFormVis,
      setVisible = grid.setVisible,
      requestType = grid.requestType,
      objectNO = grid.objectNO;
  var newDataList = objectDataList.map(function (item) {
    return {
      title: item.NAME,
      dataIndex: item.FIELDNAME,
      width: item.WIDTH,
      state: item.STATE,
      align: item.ALIGN,
      gtype: item.GTYPE,
      render: function render(text) {
        return text ? text : 1;
      }
    };
  });

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID,
      OBJECTID = _ref2.OBJECTID;

  var _ref3 = objectSelectedRows[0] || {},
      objectID = _ref3.ID,
      GTYPE = _ref3.GTYPE;

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
  var addFlag = objectSelectedRows.length ? objectSelectedRows.length === 1 && GTYPE === 4 ? true : false : true;
  var objectTypes = sessionStorage.getItem('tableConfigObjectType');

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      TYPE: 1,
      DEFAULTC: false,
      gridOperation: [0]
    };
    dispatch({
      type: 'grid/packet',
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

  var columns = [{
    title: fields.DEFAULTC,
    dataIndex: 'DEFAULTC',
    width: 50,
    align: 'center',
    render: function render(text) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: text
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
    title: fields.TYPE,
    dataIndex: 'TYPE',
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, isEnglish ? enGridTypeMap[text].name : gridTypeMap[text].name);
    }
  }, {
    title: '是否显示工具栏',
    dataIndex: 'noTableToolbar',
    width: 100,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.noTableToolbar,
        onChange: eidtRow({
          text: record.noTableToolbar,
          record: record,
          field: 'noTableToolbar',
          gridNO: true
        })
      });
    }
  }, {
    title: '表格操作',
    dataIndex: 'gridOperation',
    render: function render(text, record) {
      if (!record.gridOperation) return;
      var str = '';

      if (text.length) {
        for (var i = 0; i < text.length; i++) {
          if (i !== text.length - 1) {
            str += gridOperation[text[i]].name + '，';
          } else str += gridOperation[text[i]].name;
        }
      } else str = '明细';

      return /*#__PURE__*/React.createElement("span", null, str);
    }
  }];
  var objectColumns = [{
    title: index,
    dataIndex: 'rowkey',
    width: 40,
    editable: false
  }, {
    title: fields.FIELDNAME,
    dataIndex: 'FIELDNAME',
    width: 150,
    editable: false
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 150,
    valueType: 'text',
    formItemProps: {
      rules: [{
        required: true
      }]
    }
  }, {
    title: fields.ENNAME,
    dataIndex: 'ENNAME',
    width: 150,
    valueType: 'text'
  }, {
    title: fields.WIDTH,
    dataIndex: 'WIDTH',
    width: 100,
    valueType: 'digit'
  }, {
    title: fields.ALIGN,
    dataIndex: 'ALIGN',
    width: 100,
    valueType: 'select',
    valueEnum: {
      left: {
        text: fields1.left,
        ALIGN: 'left'
      },
      center: {
        text: fields1.center,
        ALIGN: 'center'
      },
      right: {
        text: fields1.right,
        ALIGN: 'right'
      }
    } // render(text) {
    //   let fType = isEnglish
    //     ? enAlignMap.find((item) => item.value === text)
    //     : alignMap.find((item) => item.value === text);
    //   return fType ? fType.name : text;
    // },

  }, {
    title: fields.GTYPE,
    dataIndex: 'GTYPE',
    width: 60,
    render: function render(text) {
      var fType = isEnglish ? enGTypeMap.find(function (item) {
        return item.value === text;
      }) : gTypeMap.find(function (item) {
        return item.value === text;
      });
      return fType ? text ? /*#__PURE__*/React.createElement(Tag, {
        color: colorMap[text]
      }, fType.name) : fType.name : text;
    },
    editable: false
  }, {
    title: fields.SUPSORT,
    dataIndex: 'SUPSORT',
    align: 'center',
    width: 100,
    render: function render(_, record) {
      var text = record.SUPSORT;
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.SUPSORT,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'SUPSORT'
        })
      });
    },
    editable: false
  }, {
    title: fields.EDITABLE,
    dataIndex: 'EDITABLE',
    align: 'center',
    render: function render(_, record) {
      var text = record.EDITABLE;
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.EDITABLE,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'EDITABLE'
        })
      });
    },
    editable: false
  }, {
    title: fields.COPYABLE,
    dataIndex: 'COPYABLE',
    align: 'center',
    render: function render(_, record) {
      var text = record.COPYABLE;
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: record.COPYABLE,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'COPYABLE'
        })
      });
    }
  }, // {
  //   title: fields.appDisplay,
  //   dataIndex: 'APPDISPLAY',
  //   align: 'center',
  //   render: text => <Checkbox checked={text} />
  // },
  {
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

  var eidtRow = function eidtRow(_ref4) {
    var text = _ref4.text,
        record = _ref4.record,
        field = _ref4.field,
        gridNO = _ref4.gridNO;
    return function () {
      if (activeTab !== '2') {
        message.warn('不是设计中的对象');
        return;
      }

      var values = record.META;
      values[field] = !text;

      if (gridNO) {
        dispatch({
          type: 'commonConfig/editItem',
          payload: {
            values: values,
            record: record,
            namespace: namespace,
            PID: PID
          }
        });
      } else {
        dispatch({
          type: 'commonConfig/editRootItem',
          payload: {
            values: values,
            record: record,
            namespace: namespace,
            rootId: ID,
            PID: PID
          }
        });
      }
    };
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'grid/packet',
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

  var toogleItemModal = function toogleItemModal() {
    var objectRecord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var PARAMS = objectRecord.PARAMS,
        GTYPE = objectRecord.GTYPE;
    dispatch({
      type: 'grid/packet',
      payload: {
        objectRecord: _objectSpread(_objectSpread({}, objectRecord), {}, {
          PARAMS: GTYPE === 2 ? PARAMS || {} : null
        }),
        objectVisible: !objectVisible
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'grid/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible
      }
    });
  };

  var preview = function preview() {
    var objectRecord = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var PARAMS = objectRecord.PARAMS,
        GTYPE = objectRecord.GTYPE;
    dispatch({
      type: 'grid/packet',
      payload: {
        objectRecord: _objectSpread(_objectSpread({}, objectRecord), {}, {
          PARAMS: GTYPE === 2 ? PARAMS || {} : null
        }),
        tableVisible: !tableVisible
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

  var addField = function addField(GTYPE) {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'field',
        objectId: PID,
        rData: objectDataList,
        objectTypes: objectTypes,
        onSelect: function onSelect(rows) {
          var values = rows.map(function (item) {
            var FIELDNAME = item.FIELDNAME,
                NAME = item.NAME,
                ENNAME = item.ENNAME,
                ID = item.ID;
            return {
              FIELDNAME: FIELDNAME,
              NAME: NAME,
              OBJECTID: OBJECTID,
              EDITABLE: 1,
              WIDTH: 100,
              ALIGN: 'left',
              GTYPE: GTYPE,
              ENNAME: ENNAME,
              SUPSORT: true,
              fieldId: ID
            };
          });
          dispatch({
            type: 'commonConfig/editRootItem',
            payload: {
              values: values,
              rootId: ID,
              namespace: namespace,
              rootPid: addFlag ? objectSelectedRows.length ? objectID : 0 : null
            }
          });
        }
      }
    });
  };

  var setNewIndex = function setNewIndex() {
    var values = {
      FIELDNAME: '{INDEX}',
      NAME: '序号',
      ENNAME: 'index',
      ITEMID: null,
      EDITABLE: 1,
      WIDTH: 40,
      ALIGN: 'left',
      GTYPE: 1
    };
    dispatch({
      type: 'commonConfig/editRootItem',
      payload: {
        values: values,
        record: values,
        namespace: namespace,
        rootId: ID,
        PID: PID,
        rootPid: addFlag ? objectSelectedRows.length ? objectID : 0 : null
      }
    });
  };

  var toogleSetModal = function toogleSetModal(objectRecord, requestType) {
    dispatch({
      type: 'grid/packet',
      payload: {
        objectRecord: objectRecord,
        setVisible: !setVisible,
        requestType: requestType
      }
    });
  };

  var objectBtns = [{
    name: buttons.add,
    disabled: !(enable && activeTab === '2' && ID),
    btns: [{
      name: buttons1.add_normal_field,
      disabled: !addFlag,
      func: function func() {
        addField(0);
      }
    }, {
      name: buttons1.add_index_field,
      disabled: !addFlag,
      func: function func() {
        setNewIndex();
      }
    }, {
      name: buttons1.add_script_field,
      disabled: !addFlag,
      func: function func() {
        toogleItemModal({
          OBJECTID: OBJECTID,
          EDITABLE: 1,
          WIDTH: 100,
          ALIGN: 'left',
          GTYPE: 2,
          PARAMS: {
            valueScript: "//\u53C2\u6570: record(\u5F53\u524D\u884C\u6570\u636E), userName(\u7528\u6237\u540D) \n//\u793A\u4F8B\n return record.FIELDNAME",
            colorScript: "//\u53C2\u6570: record(\u5F53\u524D\u884C\u6570\u636E), userName(\u7528\u6237\u540D) \n//\u793A\u4F8B\n\n                let color = 'red'\n                if(userName === 'hjh') color = 'green'\n                return color"
          }
        });
      }
    }, {
      name: buttons1.add_URL_field,
      disabled: !addFlag,
      func: function func() {
        addField(3);
      }
    }, {
      name: '字段组',
      disabled: !addFlag,
      func: function func() {
        toogleSetModal(objectSelectedRows[0], 'add');
      }
    }]
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && objectID && ID && objectSelectedRows.length === 1),
    func: function func() {
      if (GTYPE === 4) {
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
    name: buttons.reorder,
    disabled: !(isModeling && ID && objectDataList),
    func: function func() {
      toogleModalDragSort();
    }
  }, {
    name: buttons.preview,
    disabled: !(ID && objectDataList),
    func: function func() {
      preview(objectDataList);
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
    dataList: ID ? objectDataList : [],
    rowSelection: {
      onChange: function onChange(objectSelectedRowKeys, objectSelectedRows) {
        dispatch({
          type: 'grid/packet',
          payload: {
            objectSelectedRows: objectSelectedRows,
            objectSelectedRowKeys: objectSelectedRowKeys
          }
        });
      },
      selectedRowKeys: objectSelectedRowKeys
    },
    btns: objectBtns,
    namespace: namespace,
    listType: 1,
    canDrag: enable,
    afterDragFunc: function afterDragFunc() {
      onSelectChange(selectedRowKeys, selectedRows);
    },
    isTree: true,
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
    isTree: true,
    canDrag: enable,
    namespace: namespace,
    listType: 1,
    ID: ID,
    isWho: 'grid',
    columns: objectColumns,
    onClose: toogleModalDragSort,
    objectTypes: objectType
  };
  var objectPreview = {
    tableVisible: !tableVisible,
    columns: newDataList,
    dataList: objectDataList,
    preview: preview,
    rowSelection: {
      onChange: function onChange(objectSelectedRowKeys, objectSelectedRows) {
        dispatch({
          type: 'grid/packet',
          tableVisible: !tableVisible,
          payload: {
            objectSelectedRows: objectSelectedRows,
            objectSelectedRowKeys: objectSelectedRowKeys
          }
        });
      },
      selectedRowKeys: objectSelectedRowKeys
    },
    height: '450px',
    visible: tableVisible
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    PID: PID,
    dataList: dataList,
    objectNO: objectNO
  };
  var objectFormProps = {
    record: objectRecord,
    visible: objectVisible,
    onCancel: toogleItemModal,
    namespace: namespace,
    rootId: ID,
    pCONTROLAUTH: pCONTROLAUTH,
    PID: PID
  };
  var setFormProps = {
    record: objectRecord,
    visible: setVisible,
    onCancel: toogleSetModal,
    namespace: namespace,
    rootId: ID,
    OBJECTID: OBJECTID,
    pCONTROLAUTH: pCONTROLAUTH,
    PID: PID,
    requestType: requestType
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
      height: '100%',
      marginTop: '5px'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    form: form,
    component: false
  }, /*#__PURE__*/React.createElement(TableWithBtn, objectProps))), /*#__PURE__*/React.createElement(GridForm, formProps), /*#__PURE__*/React.createElement(GridItemForm, objectFormProps), /*#__PURE__*/React.createElement(GridSetForm, setFormProps), /*#__PURE__*/React.createElement(GridPreview, objectPreview), /*#__PURE__*/React.createElement(DragSortForm, dragProps));
};

function mapStateToProps(_ref5) {
  var grid = _ref5.grid,
      isModeling = _ref5.user.isModeling;
  return {
    grid: grid,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(Grid);