/*
 
 * @Description: 全局表格
 */
import React from 'react';
import { connect } from 'dva';
import GlobalTableCmp from '../../component/configPlatform/globalTable/GlobalTableCmp';
import { Tooltip } from 'antd';
import { stateMap, gridTypeMap } from '../../utils/mapParams';
import { stateMap as enStateMap, gridTypeMap as enGridTypeMap } from '../../utils/EnMapParams';
import { confirm, isEnglish } from '../../utils/utils';
import language from '@/locale/language';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.globalTable.fields;
var tab_namespace = ['globalField'];
var columns = [{
  title: fields.STATE,
  dataIndex: 'STATE',
  width: 80,
  render: function render(text) {
    return isEnglish ? enStateMap[text] : stateMap[text];
  }
}, {
  title: fields.NO,
  dataIndex: 'NO',
  width: 150,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.TYPE,
  dataIndex: 'TYPE',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/React.createElement("span", null, isEnglish ? enGridTypeMap[text].name : gridTypeMap[text].name);
  }
}, {
  title: fields.REMARK,
  dataIndex: 'REMARK'
}];

var QueryView = function QueryView(_ref) {
  var globalTable = _ref.globalTable,
      dispatch = _ref.dispatch,
      isModeling = _ref.isModeling;
  var dataList = globalTable.dataList,
      visible = globalTable.visible,
      selectedRowKeys = globalTable.selectedRowKeys,
      selectedRows = globalTable.selectedRows,
      activeKey = globalTable.activeKey,
      namespace = globalTable.namespace,
      showTab = globalTable.showTab,
      record = globalTable.record,
      noFooter = globalTable.noFooter;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var enable = isModeling;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    dispatch({
      type: 'globalTable/packet',
      payload: {
        record: record,
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    dispatch({
      type: 'globalTable/packet',
      payload: {
        activeKey: activeKey
      }
    });
    dispatch({
      type: 'commonConfig/queryItem',
      payload: {
        PID: rows.ID,
        namespace: tab_namespace[activeKey],
        enable: isModeling,
        other: {
          selectedRows: [],
          PID: rows.ID
        },
        objectType: sessionStorage['tableConfigObjectType']
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'globalTable/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        showTab: true
      }
    });
    changePane(activeKey, selectedRows[0]);
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'globalTable/packet',
      payload: {
        showTab: false
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/del',
        payload: {
          rows: rows,
          namespace: namespace
        }
      });
    };
  };

  var synchro = function synchro(row) {
    return function () {
      dispatch({
        type: 'commonConfig/synchro',
        payload: {
          row: row,
          namespace: namespace
        }
      });
    };
  };

  var showObject = function showObject(condition) {
    dispatch({
      type: 'commonConfig/query',
      payload: {
        condition: condition,
        namespace: namespace
      }
    });
  };

  var btns = [{
    name: buttons.select_show_obj,
    btns: [{
      name: buttons.show_synced_obj,
      func: function func() {
        showObject("state IN('F')");
      }
    }, {
      name: buttons.show_design_obj,
      disabled: !isModeling,
      func: function func() {
        showObject("state IN(0,2)");
      }
    }]
  }, {
    name: buttons.create,
    disabled: !isModeling,
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.update,
    disabled: !(enable && ID),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && ID),
    func: function func() {
      confirm({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: buttons.synchro_model,
    disabled: !(enable && ID),
    func: function func() {
      confirm({
        title: common.confirm + buttons.synchro_model,
        onOk: synchro(selectedRows[0])
      });
    }
  }];

  var onSearch = function onSearch(queryWord) {
    dispatch({
      type: 'commonConfig/search',
      payload: {
        queryWord: queryWord,
        namespace: namespace
      }
    });
  };

  var props = {
    tableProp: {
      dataList: dataList,
      columns: columns,
      btns: btns,
      rowSelection: rowSelection,
      onSearch: onSearch,
      rightClick: toogleModal
    },
    formProps: {
      record: record,
      visible: visible,
      onCancel: toogleModal,
      namespace: namespace,
      noFooter: noFooter
    },
    changePane: changePane,
    closeTab: closeTab,
    showTab: showTab,
    activeKey: activeKey
  };
  return /*#__PURE__*/React.createElement(GlobalTableCmp, props);
};

function mapStateToProps(_ref3) {
  var globalTable = _ref3.globalTable,
      isModeling = _ref3.user.isModeling;
  return {
    globalTable: globalTable,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(QueryView);