import React from 'react';
import { connect } from 'dva';
import { dateToFormat } from '../../../utils/dataToFormat';
import StartProcessCmp from '../../../component/activiti/processManage/StartProcessCmp';
import { Button } from 'antd';
import { generatorTableKey } from '../../../utils/utils';

var StartProcess = function StartProcess(_ref) {
  var dispatch = _ref.dispatch,
      startProcess = _ref.startProcess;
  var _startProcess$list = startProcess.list,
      list = _startProcess$list === void 0 ? [] : _startProcess$list,
      visible = startProcess.visible,
      pictureUrl = startProcess.pictureUrl;
  var columns = [{
    title: '流程标识',
    dataIndex: 'id'
  }, {
    title: '流程名称',
    dataIndex: 'NAME'
  }, {
    title: '流程版本',
    dataIndex: 'version',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("span", null, "V:", record.version);
    }
  }, {
    title: '流程图',
    dataIndex: 'png',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          showPicture(record.id);
        },
        size: "small"
      }, record.png));
    }
  }, {
    title: '部署时间',
    dataIndex: 'deployTime'
  }, {
    title: '操作',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Button, {
        style: {
          marginLeft: 5
        },
        size: "small",
        onClick: function onClick() {
          return openStartProcess(record.id);
        }
      }, "\u542F\u52A8");
    }
  }];
  list = generatorTableKey(list);
  list.map(function (item) {
    item.deployTime = dateToFormat(item.deployTime);
  }); //查看流程图

  var showPicture = function showPicture(id) {
    var url = "api/application/process/dynamicPng/".concat(id);
    changePicture(url);
  };

  var changePicture = function changePicture(pictureUrl) {
    dispatch({
      type: 'startProcess/dynamicPng',
      payload: {
        pictureUrl: pictureUrl
      }
    });
  }; //启动流程


  var openStartProcess = function openStartProcess(id) {
    dispatch({
      type: 'actProcess/show',
      payload: {
        procdefId: id
      }
    });
  }; //流程图modal的关闭


  function Cancel() {
    dispatch({
      type: 'startProcess/Cancel'
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
    Cancel: Cancel
  };
  return /*#__PURE__*/React.createElement(StartProcessCmp, props);
};

function mapStateToProps(_ref2) {
  var startProcess = _ref2.startProcess;
  return {
    startProcess: startProcess
  };
}

export default connect(mapStateToProps)(StartProcess);