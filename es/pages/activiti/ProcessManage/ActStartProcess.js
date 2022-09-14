import React from 'react';
import { connect } from 'dva';
import { dateToFormat } from '../../../utils/dataToFormat';
import ActStartProcessCmp from '../../../component/activiti/processManage/ActStartProcessCmp';
import { Button } from 'antd';
import { generatorTableKey } from '../../../utils/utils';

var ActStartProcess = function ActStartProcess(_ref) {
  var dispatch = _ref.dispatch,
      actStartProcess = _ref.actStartProcess;
  var _actStartProcess$list = actStartProcess.list,
      list = _actStartProcess$list === void 0 ? [] : _actStartProcess$list,
      visible = actStartProcess.visible,
      actVisible = actStartProcess.actVisible,
      pictureUrl = actStartProcess.pictureUrl,
      selectedRows = actStartProcess.selectedRows;
  var columns = [{
    title: '流程标识',
    dataIndex: 'ID'
  }, {
    title: '流程名称',
    dataIndex: 'NAME'
  }, {
    title: '流程版本',
    dataIndex: 'VERSION',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("span", null, "V:", record.VERSION);
    }
  }, {
    title: '流程图',
    dataIndex: 'PNG',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          showPicture(record.ID);
        },
        size: "small"
      }, record.PNG));
    }
  }, {
    title: '部署时间',
    dataIndex: 'DEPLOYTIME'
  }, {
    title: '操作',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Button, {
        style: {
          marginLeft: 5
        },
        size: "small",
        onClick: function onClick() {
          return start(record.ID);
        }
      }, "\u542F\u52A8");
    }
  }];
  list = generatorTableKey(list);
  list.map(function (item) {
    item.deployTime = dateToFormat(item.deployTime);
  }); //查看流程图

  var showPicture = function showPicture(id) {
    var url = "api/act/process/dynamicPng/".concat(id);
    changePicture(url);
  };

  var changePicture = function changePicture(pictureUrl) {
    dispatch({
      type: 'actStartProcess/dynamicPng',
      payload: {
        pictureUrl: pictureUrl
      }
    });
  }; //启动流程


  var start = function start(id) {
    dispatch({
      type: 'actStartProcess/startProcess',
      payload: {
        id: id,
        selectedRows: selectedRows
      }
    });
  }; //流程图modal的关闭


  function Cancel() {
    dispatch({
      type: 'actStartProcess/Cancel'
    });
  } //流程modal的关闭


  function actCancel() {
    dispatch({
      type: 'actStartProcess/actCancel'
    });
  } //总条数


  var pagination = {
    showTotal: function showTotal(total) {
      return "\u5171 ".concat(total, " \u6761");
    },
    //每页条数
    pageSize: 10
  };
  var props = {
    list: list,
    pagination: pagination,
    columns: columns,
    visible: visible,
    pictureUrl: pictureUrl,
    changePicture: changePicture,
    Cancel: Cancel,
    actVisible: actVisible,
    actCancel: actCancel
  };
  return /*#__PURE__*/React.createElement(ActStartProcessCmp, props);
};

function mapStateToProps(_ref2) {
  var actStartProcess = _ref2.actStartProcess;
  return {
    actStartProcess: actStartProcess
  };
}

export default connect(mapStateToProps)(ActStartProcess);