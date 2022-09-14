/*
 * @Descripttion: 系统日志
 */
import React from 'react';
import { connect } from 'dva';
import SystemLogCmp from '../../component/systemPlatform/systemLog/SystemLogCmp';
import language from '@/locale/language';
var tableColumns = language.systemPlatform.systemLog.tableColumns;
var columns = [{
  title: tableColumns.OBJTN,
  dataIndex: 'objTn',
  width: 100
}, {
  title: tableColumns.OBJNAME,
  dataIndex: 'objName',
  width: 100
}, {
  title: tableColumns.OBJID,
  dataIndex: 'objId',
  width: 120
}, {
  title: tableColumns.ACTION,
  dataIndex: 'ACTION',
  width: 100
}, {
  title: tableColumns.DETAILS,
  dataIndex: 'details',
  width: 250
}, {
  title: tableColumns.IP,
  dataIndex: 'ip',
  width: 100
}, {
  title: tableColumns.CTIME,
  dataIndex: 'ctime',
  width: 130
}, {
  title: tableColumns.CUSER,
  dataIndex: 'cuser',
  width: 80
}];
var pageFieldList = [];
columns.forEach(function (item) {
  if (item.dataIndex === 'DETAILS') {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextArea',
      editParams: JSON.stringify({
        rowHeight: 8
      })
    });
  } else {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextBox'
    });
  }
});

var SystemLog = function SystemLog(_ref) {
  var dispatch = _ref.dispatch,
      systemLog = _ref.systemLog;
  var dataList = systemLog.dataList,
      record = systemLog.record,
      selectedRowKey = systemLog.selectedRowKey,
      visible = systemLog.visible,
      socket = systemLog.socket,
      serviceLog = systemLog.serviceLog;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'systemLog/toogleModal',
      payload: {
        record: record
      }
    });
  };

  var onSelect = function onSelect(selectedKeys, e) {
    var dataRef = e.node.props.dataRef;
    dispatch({
      type: "systemLog/packet",
      payload: {
        selectedRowKey: [dataRef.key],
        selectedRows: [dataRef]
      }
    });

    if (dataRef.key === '1-6') {
      // showLoading()
      // 向websocket发送消息
      sendSocketMessage(true);
    } else {
      if (dataRef.action) {
        dispatch({
          type: "systemLog/queryWithAction",
          payload: {
            action: dataRef.action
          }
        });
      }
    }
  }; // 向websocket发送消息


  var sendSocketMessage = function sendSocketMessage(open) {
    var pollTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
    var logStartRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

    if (socket) {
      var params = {
        open: open,
        pollTime: pollTime,
        logStartRow: logStartRow
      };
      socket.sendMessage('@R_LOG' + JSON.stringify(params));
    }
  };

  var onRow = function onRow(record) {
    return {
      onDoubleClick: function onDoubleClick() {
        toogleModal(record);
      }
    };
  };

  var props = {
    dataList: dataList,
    columns: columns,
    record: record,
    toogleModal: toogleModal,
    visible: visible,
    onSelect: onSelect,
    onRow: onRow,
    selectedRowKey: selectedRowKey,
    pageFieldList: pageFieldList,
    sendSocketMessage: sendSocketMessage,
    serviceLog: serviceLog
  };
  return /*#__PURE__*/React.createElement(SystemLogCmp, props);
};

function mapStateToProps(_ref2) {
  var systemLog = _ref2.systemLog;
  return {
    systemLog: systemLog
  };
}

export default connect(mapStateToProps)(SystemLog);