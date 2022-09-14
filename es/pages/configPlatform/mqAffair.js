/*
 * @Descripttion: 消息事务
 */
import React from 'react';
import { connect } from 'dva';
import { Tooltip } from 'antd';
import TableWithBtn from '../../component/common/table/TableWithBtn';
import MqAffairForm from '../../component/configPlatform/mqAffair/MqAffairForm';
import { mqMtypeMap } from '../../utils/mapParams';
import language from '@/locale/language';
import { confirm } from '../../utils/utils';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.mqAffair.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fields.CHANNELNAME,
  dataIndex: 'CHANNELNAME',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.REQPARAM,
  dataIndex: 'MTYPE',
  render: function render(text) {
    var fType = mqMtypeMap.find(function (item) {
      return item.value === text;
    });
    return fType ? fType.name : text;
  }
}];

var MqAffair = function MqAffair(_ref) {
  var dispatch = _ref.dispatch,
      mqAffair = _ref.mqAffair,
      isModeling = _ref.isModeling;
  var dataList = mqAffair.dataList,
      visible = mqAffair.visible,
      selectedRowKeys = mqAffair.selectedRowKeys,
      selectedRows = mqAffair.selectedRows,
      namespace = mqAffair.namespace,
      record = mqAffair.record;

  var _ref2 = selectedRows[0] || {},
      STATE = _ref2.STATE,
      EFFECTIVE = _ref2.EFFECTIVE;

  var enable = isModeling && (STATE === 2 || STATE === 0);

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'mqAffair/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'mqAffair/packet',
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

  var showObject = function showObject(condition) {
    dispatch({
      type: 'commonConfig/query',
      payload: {
        condition: condition,
        namespace: namespace
      }
    });
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
      toogleModal(0);
    }
  }, {
    name: buttons.update,
    disabled: !enable,
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: STATE === 2 ? buttons.cancel_upgrade : buttons.delete,
    disabled: !enable,
    func: function func() {
      confirm({
        title: STATE === 2 ? buttons.cancel_upgrade : common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: buttons.synchro_model,
    disabled: !(enable || STATE === 1 && !EFFECTIVE),
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

  var tableProps = {
    dataList: dataList,
    columns: columns,
    btns: btns,
    rowSelection: rowSelection,
    onSearch: onSearch
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps), /*#__PURE__*/React.createElement(MqAffairForm, formProps));
};

function mapStateToProps(_ref3) {
  var mqAffair = _ref3.mqAffair,
      isModeling = _ref3.user.isModeling;
  return {
    mqAffair: mqAffair,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(MqAffair);