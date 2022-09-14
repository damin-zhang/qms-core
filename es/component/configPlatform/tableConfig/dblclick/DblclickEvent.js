function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 业务对象-双击事件
 */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import TableWithBtn from '../../../common/table/TableWithBtn';
import MenuForm from '../menu/MenuForm';
import { confirm, isEnglish } from '../../../../utils/utils';
import { eventTypeMap } from '../../../../utils/mapParams';
import { eventTypeMap as enMenuTypeMap } from '../../../../utils/EnMapParams';
import DragSortForm from '../../common/DragSortForm';
import language from '@/locale/language';
import OtherMenus from '../menu/OtherMenus';
import { Tooltip, Checkbox } from 'antd';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.tableConfig.objectMenu,
    fields = _language$configPlatf2.fields,
    menuBtns = _language$configPlatf2.buttons;

var DblclickEvent = function DblclickEvent(_ref) {
  var dispatch = _ref.dispatch,
      dblclickEvent = _ref.dblclickEvent,
      tabKey = _ref.tabKey,
      objectANamespace = _ref.objectANamespace,
      isModeling = _ref.isModeling,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var visible = dblclickEvent.visible,
      record = dblclickEvent.record,
      selectedRows = dblclickEvent.selectedRows,
      selectedRowKeys = dblclickEvent.selectedRowKeys,
      dataList = dblclickEvent.dataList,
      namespace = dblclickEvent.namespace,
      PID = dblclickEvent.PID,
      enable = dblclickEvent.enable,
      OBJECTNO = dblclickEvent.OBJECTNO,
      noFooter = dblclickEvent.noFooter,
      OBJECTA = dblclickEvent.OBJECTA,
      visible2 = dblclickEvent.visible2,
      _dblclickEvent$dragSo = dblclickEvent.dragSortFormVisible,
      dragSortFormVisible = _dblclickEvent$dragSo === void 0 ? false : _dblclickEvent$dragSo,
      objectNO = dblclickEvent.objectNO,
      pCONTROLAUTH = dblclickEvent.pCONTROLAUTH;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID,
      MTYPE = _ref2.MTYPE,
      ABTYPE = _ref2.ABTYPE,
      children = _ref2.children;

  var hasBeforeAct = false;
  var hasAfterAct = false;

  if (children) {
    hasBeforeAct = children.some(function (item) {
      return item.ABTYPE === 'before';
    });
    hasAfterAct = children.some(function (item) {
      return item.ABTYPE === 'after';
    });
  }

  var columns = [{
    title: fields.NO,
    dataIndex: 'NO',
    width: 200
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 200
  }, {
    title: fields.TYPE,
    dataIndex: 'MTYPE',
    width: 100,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, isEnglish ? enMenuTypeMap[text].name : eventTypeMap[text].name);
    }
  }, {
    title: fields.AUTHCODE,
    dataIndex: 'AUTHCODE'
  }, {
    title: fields.PARAM,
    dataIndex: 'PARAMS',
    render: function render(text) {
      var _ref3 = text || {},
          otherMenus = _ref3.otherMenus;

      return otherMenus ? /*#__PURE__*/React.createElement(Tooltip, {
        title: JSON.stringify(otherMenus)
      }, JSON.stringify(otherMenus)) : '';
    }
  }];
  useEffect(function () {
    if (selectedRows.length > 0) {
      var seletedRow = selectedRows[0];
      selectedRows[0].children = dataList.filter(function (row) {
        return row.PID === seletedRow.ID;
      });
    }
  }, [dataList]);

  var toogleModal = function toogleModal(record, noFooter) {
    dispatch({
      type: 'dblclickEvent/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          REQPARAM: (record.REQPARAM || '').split(';'),
          PARAMS: record.PARAMS || {},
          PID: record.PID || ID || '0',
          ABTYPE: record.ABTYPE || ABTYPE
        }),
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var toogleModal2 = function toogleModal2() {
    dispatch({
      type: 'dblclickEvent/packet',
      payload: {
        visible2: !visible2
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'dblclickEvent/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible
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
          PID: PID,
          objectANamespace: objectANamespace
        }
      });
    };
  };

  var reorder = function reorder() {
    dispatch({
      type: 'commonConfig/reorderItem',
      payload: {
        hData: dataList,
        namespace: namespace,
        PID: PID
      }
    });
  };

  var btns = [{
    name: menuBtns.create_menu_object,
    disabled: !(enable && dataList && dataList.length === 0),
    func: function func() {
      toogleModal({
        MTYPE: 0,
        OBJECTNO: OBJECTNO,
        IMPLTYPE: 1
      });
    }
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && ID && selectedRows.length === 1) || ABTYPE && activeTab !== '2' && MTYPE === 1 && selectedRows.length === 1,
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && activeTab === '2' && ID),
    func: function func() {
      var df = false;
      selectedRows.forEach(function (element) {
        if (element.MTYPE === 1 && element.children) df = true;
      });
      confirm({
        title: common.confirm + buttons.delete,
        content: df ? common.delTip : '',
        onOk: del(selectedRows)
      });
    }
  }];
  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      dispatch({
        type: 'dblclickEvent/packet',
        payload: {
          selectedRowKeys: selectedRowKeys,
          selectedRows: selectedRows
        }
      });
    },
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    dblclickRows: dataList,
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns,
    isTree: true,
    rightClick: toogleModal,
    namespace: namespace,
    canDrag: enable,
    afterDragFunc: function afterDragFunc() {
      dispatch({
        type: 'commonConfig/queryItem',
        payload: {
          PID: PID,
          namespace: namespace,
          enable: true,
          other: {
            OBJECTNO: OBJECTNO
          },
          objectANamespace: objectANamespace,
          objectType: sessionStorage['tableConfigObjectType']
        }
      });
    }
  };
  var formProps = {
    record: record,
    visible: objectANamespace === tabKey && visible,
    onCancel: toogleModal,
    namespace: namespace,
    PID: PID,
    dataList: dataList,
    noFooter: noFooter,
    OBJECTA: OBJECTA,
    visible2: visible2,
    selectedRow: selectedRows[0],
    objectANamespace: objectANamespace,
    pCONTROLAUTH: pCONTROLAUTH,
    objectNO: objectNO
  };
  var formProps2 = {
    dispatch: dispatch,
    selectedRow: selectedRows[0],
    visible: objectANamespace === tabKey && visible2,
    onCancel: toogleModal2,
    OBJECTNO: OBJECTNO,
    namespace: namespace,
    PID: PID
  };
  var formProps3 = {
    dataList: dataList,
    isTree: true,
    selectedRow: selectedRows[0],
    visible: objectANamespace === tabKey && dragSortFormVisible,
    objectANamespace: objectANamespace,
    OBJECTNO: OBJECTNO,
    namespace: namespace,
    PID: PID,
    isWho: 'menu',
    columns: columns,
    onClose: toogleModalDragSort,
    objectTypes: objectType
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps), /*#__PURE__*/React.createElement(OtherMenus, formProps2), /*#__PURE__*/React.createElement(MenuForm, _extends({}, formProps, {
    getContainer: document.getElementById('root')
  })), /*#__PURE__*/React.createElement(DragSortForm, formProps3));
};

function mapStateToProps(_ref4) {
  var dblclickEvent = _ref4.dblclickEvent,
      tab = _ref4.tab,
      isModeling = _ref4.user.isModeling;
  return {
    dblclickEvent: dblclickEvent,
    tabKey: tab.activeKey,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(DblclickEvent);