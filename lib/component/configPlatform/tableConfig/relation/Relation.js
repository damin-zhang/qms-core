"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _DragCmp = _interopRequireDefault(require("../../../common/drag/DragCmp"));

var _TableWithBtn = _interopRequireDefault(require("../../../common/table/TableWithBtn"));

var _RelationForm = _interopRequireDefault(require("./RelationForm"));

var _RelationItemForm = _interopRequireDefault(require("./RelationItemForm"));

var _utils = require("../../../../utils/utils");

var _mapParams = require("../../../../utils/mapParams");

var _DragSortForm = _interopRequireDefault(require("../../common/DragSortForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 业务对象-关联信息
 */
var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.tableConfig.objectRelationPage.fields;

var Relation = function Relation(_ref) {
  var dispatch = _ref.dispatch,
      relation = _ref.relation,
      isModeling = _ref.isModeling,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var visible = relation.visible,
      record = relation.record,
      selectedRows = relation.selectedRows,
      selectedRowKeys = relation.selectedRowKeys,
      dataList = relation.dataList,
      namespace = relation.namespace,
      PID = relation.PID,
      objectDataList = relation.objectDataList,
      objectSelectedRowKeys = relation.objectSelectedRowKeys,
      objectSelectedRows = relation.objectSelectedRows,
      objectRecord = relation.objectRecord,
      objectVisible = relation.objectVisible,
      enable = relation.enable,
      objectNO = relation.objectNO,
      noFooter = relation.noFooter,
      pCONTROLAUTH = relation.pCONTROLAUTH,
      _relation$dragSortFor = relation.dragSortFormVisible,
      dragSortFormVisible = _relation$dragSortFor === void 0 ? false : _relation$dragSortFor;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID,
      OBJECTID = _ref2.OBJECTID,
      TILED = _ref2.TILED;

  var _ref3 = objectSelectedRows[0] || {},
      objectID = _ref3.ID;

  var eidtRow = function eidtRow(_ref4) {
    var text = _ref4.text,
        record = _ref4.record,
        field = _ref4.field,
        item = _ref4.item;
    return function () {
      var values = record.META;
      values[field] = text === 1 || text === true ? false : true;
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
  };

  var eidtExpand = function eidtExpand(text, record) {
    return function () {
      var values = record;
      values.EXPAND = false;
      values.EXPAND = text === 1 || text === true ? false : true;
      dispatch({
        type: 'commonConfig/editRootItem',
        payload: {
          values: values,
          record: record,
          namespace: namespace,
          rootId: record.ROOTID
        }
      });
    };
  };

  var columns = [{
    title: fields.DEFAULTC,
    dataIndex: 'DEFAULTC',
    width: 50,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
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
    dataIndex: 'NAME'
  }, {
    title: fields.TILED,
    dataIndex: 'TILED',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.TILED,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'TILED'
        })
      });
    }
  }];

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      TYPE: 1,
      DEFAULTC: false
    };
    dispatch({
      type: 'relation/packet',
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

  var objectColumns = [{
    title: fields.objectNo,
    dataIndex: 'NO',
    width: 150
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 150
  }, {
    title: fields.RTYPE,
    dataIndex: 'RTYPE',
    width: 100,
    render: function render(text) {
      var fType = _mapParams.rTypeMap.find(function (item) {
        return item.value === text;
      });

      return fType ? fType.name : text;
    }
  }, {
    title: fields.AUTHCODE,
    dataIndex: 'AUTHCODE'
  }, {
    title: fields.EXPAND,
    dataIndex: 'EXPAND',
    align: 'center',
    render: function render(text, expandRecord) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: expandRecord.EXPAND,
        onChange: eidtExpand(text, expandRecord),
        disabled: !TILED
      });
    }
  }];
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
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'relation/packet',
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
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    dispatch({
      type: 'relation/packet',
      payload: {
        objectRecord: objectRecord,
        objectVisible: !objectVisible,
        noFooter: noFooter
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'relation/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible
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

  var reorder = function reorder() {
    dispatch({
      type: 'commonConfig/reorderRootItem',
      payload: {
        hData: objectDataList,
        namespace: namespace,
        rootId: ID
      }
    });
  };

  var objectBtns = [{
    name: buttons.create,
    disabled: !(enable && activeTab === '2' && ID),
    func: function func() {
      toogleItemModal({
        OBJECTID: OBJECTID
      });
    }
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && objectID && ID && objectSelectedRows.length === 1),
    func: function func() {
      toogleItemModal(objectSelectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && activeTab === '2' && objectID && ID),
    func: function func() {
      (0, _utils.confirm)({
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
          type: 'relation/packet',
          payload: {
            objectSelectedRows: objectSelectedRows,
            objectSelectedRowKeys: objectSelectedRowKeys
          }
        });
      },
      selectedRowKeys: objectSelectedRowKeys
    },
    btns: objectBtns,
    canDrag: enable,
    namespace: namespace,
    listType: 1,
    rightClick: toogleItemModal,
    afterDragFunc: function afterDragFunc() {
      onSelectChange(selectedRowKeys, selectedRows);
    }
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
    OBJECTNO: objectNO,
    noFooter: noFooter,
    pCONTROLAUTH: pCONTROLAUTH
  };
  var dragProps = {
    visible: dragSortFormVisible,
    dataList: ID ? objectDataList : [],
    isTree: false,
    canDrag: enable,
    namespace: namespace,
    listType: 1,
    ID: ID,
    isWho: 'relation',
    columns: objectColumns,
    onClose: toogleModalDragSort,
    objectTypes: objectType
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      bottom: true
    },
    showTab: true,
    height: "30%"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, props)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      marginTop: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, objectProps)), /*#__PURE__*/_react.default.createElement(_RelationForm.default, formProps), /*#__PURE__*/_react.default.createElement(_RelationItemForm.default, objectFormProps), /*#__PURE__*/_react.default.createElement(_DragSortForm.default, dragProps));
};

function mapStateToProps(_ref5) {
  var relation = _ref5.relation,
      isModeling = _ref5.user.isModeling;
  return {
    relation: relation,
    isModeling: isModeling
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Relation);

exports.default = _default;