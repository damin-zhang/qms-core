/* 流程实例 */
import React from 'react';
import { connect } from 'dva';
import { showConfirm, generatorTableKey } from '../../../utils/utils';
import { dateToFormat } from '../../../utils/dataToFormat';
import ActProcdefCmp from '../../../component/activiti/modelManage/ActProcdefCmp';
import { Button } from 'antd';
import language from '@/locale/language';
var common = language.common,
    _language$activiti$Pr = language.activiti.Process_instance,
    fields = _language$activiti$Pr.fields,
    buttons = _language$activiti$Pr.buttons;

var ActProcdef = function ActProcdef(_ref) {
  var dispatch = _ref.dispatch,
      ProcessInstance = _ref.ProcessInstance;
  var _ProcessInstance$list = ProcessInstance.list,
      list = _ProcessInstance$list === void 0 ? [] : _ProcessInstance$list,
      visible = ProcessInstance.visible,
      visible1 = ProcessInstance.visible1,
      xmlStr = ProcessInstance.xmlStr,
      selectedRows = ProcessInstance.selectedRows,
      selectedRowKey = ProcessInstance.selectedRowKey,
      dataList1 = ProcessInstance.dataList1,
      page = ProcessInstance.page,
      pageNumber = ProcessInstance.pageNumber;
  var columns = [{
    title: common.index,
    dataIndex: 'index',
    align: 'left',
    width: 50,
    render: function render(text) {
      return text + 1 + (page - 1) * pageNumber;
    }
  }, {
    title: fields.processNo,
    dataIndex: 'ID'
  }, {
    title: fields.processName,
    dataIndex: 'processName'
  }, {
    title: fields.processVersion,
    width: 80,
    dataIndex: 'VERSION',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("span", null, "V:", record.VERSION);
    }
  }, {
    title: fields.processPng,
    dataIndex: 'PNG',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          padding: '0 6px',
          borderRadius: '2px',
          color: '#1890ff',
          backgroundColor: 'rgb(231 238 239)',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          showPicture(record.ID);
        }
      }, fields.processPng);
    }
  }, {
    title: fields.deployTime,
    dataIndex: 'DEPLOYTIME'
  }, {
    title: fields.operation,
    width: 200,
    align: 'center',
    frozen: 'right',
    fixed: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("div", null, record.SUSPENSIONSTATE ? /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          return showConfirm(function () {
            return activation(record.ID);
          }, fields.activiTip);
        }
      }, buttons.activation) : /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          return showConfirm(function () {
            return suspension(record.ID);
          }, fields.suspenTip);
        }
      }, buttons.suspension), /*#__PURE__*/React.createElement(Button, {
        style: {
          marginLeft: '5px'
        },
        type: "primary",
        danger: true,
        onClick: function onClick() {
          return showConfirm(function () {
            return del(record.DEPLOYMENTID);
          }, fields.delTip);
        }
      }, buttons.delete), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        style: {
          marginLeft: '5px'
        },
        onClick: toogleModal1(record.ID, {
          processId: record.ID
        })
      }, buttons.bind));
    }
  }];
  list = generatorTableKey(list);
  list.map(function (item) {
    item.DEPLOYTIME = dateToFormat(item.DEPLOYTIME);
  }); //挂起流程

  var suspension = function suspension(id) {
    dispatch({
      type: 'ProcessInstance/suspension',
      payload: {
        id: id
      }
    });
  }; //激活流程


  var activation = function activation(id) {
    dispatch({
      type: 'ProcessInstance/activation',
      payload: {
        id: id
      }
    });
  }; //删除


  var del = function del(deploymentId) {
    dispatch({
      type: 'ProcessInstance/del',
      payload: {
        deploymentId: deploymentId
      }
    });
  }; //查看流程图
  // const showPicture = id => {
  //   let url = `api/application/process/dynamicPng/${id}`
  //   changePicture(url)
  // }
  // const changePicture = pictureUrl => {
  //   dispatch({
  //     type: 'ProcessInstance/dynamicPng',
  //     payload: { pictureUrl }
  //   })
  // }


  var showPicture = function showPicture(id) {
    dispatch({
      type: 'ProcessInstance/queryImg',
      payload: {
        id: id,
        visible: !visible
      }
    });
  }; //总条数


  var pagination = {
    showTotal: function showTotal(total) {
      return "\u5171 ".concat(total, " \u6761");
    },
    //每页条数
    pageSize: 10
  };

  var toogleModal1 = function toogleModal1(selectedRowKey) {
    var record = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function () {
      dispatch({
        type: 'ProcessInstance/getRelItem',
        payload: {
          selectedRowKey: selectedRowKey
        }
      });
      dispatch({
        type: 'ProcessInstance/packet',
        payload: {
          visible1: !visible1,
          recordB: record
        }
      });
    };
  };

  var onClose = function onClose() {
    dispatch({
      type: 'ProcessInstance/packet',
      payload: {
        visible1: !visible1,
        selectedRows1: [],
        selectedRowKeys1: []
      }
    });
  };

  var onCancel = function onCancel() {
    dispatch({
      type: 'ProcessInstance/packet',
      payload: {
        visible: !visible
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKey, selectedRows) {
    dispatch({
      type: 'ProcessInstance/packet',
      payload: {
        selectedRowKey: selectedRowKey,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKey
  };
  var props = {
    list: list,
    pagination: pagination,
    columns: columns,
    visible: visible,
    xmlStr: xmlStr,
    rowSelection: rowSelection,
    onClose: onClose,
    onCancel: onCancel,
    showPicture: showPicture,
    selectedRows: selectedRows
  };
  return /*#__PURE__*/React.createElement(ActProcdefCmp, props);
};

function mapStateToProps(_ref2) {
  var ProcessInstance = _ref2.ProcessInstance;
  return {
    ProcessInstance: ProcessInstance
  };
}

export default connect(mapStateToProps)(ActProcdef);