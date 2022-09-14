/*
 * @Description: 信息总线-消息监听
 */
import React from 'react';
import { connect } from 'dva';
import TableWithBtn from '../../common/table/TableWithBtn';
import MqListenerForm from './MqListenerForm';
import { confirm } from '../../../utils/utils';
import language from '@/locale/language';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.mqLines.mqListener.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 200
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fields.ENNAME,
  dataIndex: 'QUEUES',
  width: 200
}];

var MqListener = function MqListener(_ref) {
  var dispatch = _ref.dispatch,
      mqListener = _ref.mqListener;
  var visible = mqListener.visible,
      record = mqListener.record,
      selectedRows = mqListener.selectedRows,
      selectedRowKeys = mqListener.selectedRowKeys,
      dataList = mqListener.dataList,
      namespace = mqListener.namespace,
      PID = mqListener.PID,
      enable = mqListener.enable;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'mqListener/packet',
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

  var btns = [{
    name: buttons.create,
    disabled: !enable,
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
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'mqListener/packet',
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
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    fieldList: dataList,
    PID: PID
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps), /*#__PURE__*/React.createElement(MqListenerForm, formProps));
};

function mapStateToProps(_ref3) {
  var mqListener = _ref3.mqListener;
  return {
    mqListener: mqListener
  };
}

export default connect(mapStateToProps)(MqListener);