function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import { connect } from 'dva';
import ProcessActinstCmp from '../../../component/activiti/activitiCommon/ProcessActinstCmp';
import { generatorTableKeyByIndex } from '../../../utils/utils';
import ProcessOpinion from './ProcessOpinion';

var ProcessActinst = function ProcessActinst(_ref) {
  var dispatch = _ref.dispatch,
      processActinst = _ref.processActinst;
  var _processActinst$engin = processActinst.engine,
      engine = _processActinst$engin === void 0 ? [] : _processActinst$engin,
      _processActinst$list = processActinst.list,
      list = _processActinst$list === void 0 ? [] : _processActinst$list,
      _processActinst$proce = processActinst.processReverseList,
      processReverseList = _processActinst$proce === void 0 ? [] : _processActinst$proce,
      visible = processActinst.visible,
      title = processActinst.title,
      _processActinst$isSho = processActinst.isShowButtons,
      isShowButtons = _processActinst$isSho === void 0 ? false : _processActinst$isSho,
      taskId = processActinst.taskId,
      processInstanceId = processActinst.processInstanceId,
      userVisible = processActinst.userVisible,
      _processActinst$userT = processActinst.userTreeList,
      userTreeList = _processActinst$userT === void 0 ? [] : _processActinst$userT,
      _processActinst$selec = processActinst.selectedRowKey,
      selectedRowKey = _processActinst$selec === void 0 ? [] : _processActinst$selec,
      _processActinst$selec2 = processActinst.selectedRows,
      selectedRows = _processActinst$selec2 === void 0 ? [] : _processActinst$selec2,
      _processActinst$expan = processActinst.expandedRowKeys,
      expandedRowKeys = _processActinst$expan === void 0 ? [] : _processActinst$expan,
      _processActinst$userL = processActinst.userList,
      userList = _processActinst$userL === void 0 ? [] : _processActinst$userL;
  var processColumns = [{
    title: '执行环节',
    dataIndex: 'actName'
  }, {
    title: '执行人',
    dataIndex: 'assignee'
  }, {
    title: '开始时间',
    dataIndex: 'startTime'
  }, {
    title: '结束时间',
    dataIndex: 'endTime'
  }, {
    title: '提交意见',
    dataIndex: 'subOpinions'
  }, {
    title: '任务历时',
    dataIndex: 'duration'
  }];
  processReverseList = generatorTableKeyByIndex(processReverseList); //关闭模态框

  var onCancel = function onCancel() {
    dispatch({
      type: 'processActinst/onCancel'
    });
  }; //同意


  var agree = function agree() {
    //弹窗标题
    var title = '办理建议'; //后端请求路径

    var url = "/act/task/handle/".concat(taskId); //前端刷新页面请求

    var refreshUrl = 'TodoProcess/query';
    dispatch({
      type: 'processOpinion/show',
      payload: {
        processInstanceId: processInstanceId,
        title: title,
        url: url,
        refreshUrl: refreshUrl
      }
    });
  }; //驳回


  var reject = function reject() {
    //弹窗标题
    var title = '驳回原因'; //后端请求路径

    var url = "/act/task/reject/".concat(taskId); //前端刷新页面请求

    var refreshUrl = 'TodoProcess/query';
    dispatch({
      type: 'processOpinion/show',
      payload: {
        processInstanceId: processInstanceId,
        title: title,
        url: url,
        refreshUrl: refreshUrl
      }
    });
  }; // 任务转办


  var onOk = function onOk() {
    dispatch({
      type: 'processActinst/taskTransfer',
      payload: {
        taskId: taskId,
        name: selectedRows[0].NAME
      }
    });
  };

  var showUsers = function showUsers() {
    dispatch({
      type: 'processActinst/showUsers'
    });
  };

  var toogleUser = function toogleUser() {
    dispatch({
      type: 'processActinst/toogleUser'
    });
  };

  var selectChange = function selectChange(selectedRowKey, selectedRows) {
    dispatch({
      type: 'processActinst/onSelectChange',
      payload: {
        selectedRowKey: selectedRowKey,
        selectedRows: selectedRows
      }
    });
  };

  var onExpandedRowsChange = function onExpandedRowsChange(expandedRowKeys) {
    dispatch({
      type: 'processActinst/onExpandedRowsChange',
      payload: expandedRowKeys
    });
  };

  var getParentkeys = function getParentkeys(arr, pid) {
    var temp = [];

    var forFn = function forFn(arr, pid) {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (item.id === pid) {
          temp.push(item.id);
          forFn(arr, item.pid);
        }
      }
    };

    forFn(arr, pid);
    return temp;
  };

  var onSearchUser = function onSearchUser(queryWord) {
    var expandedRowKeys = [];
    var list = userList.filter(function (i) {
      return i.name.indexOf(queryWord) > -1;
    });
    list.forEach(function (j) {
      expandedRowKeys = expandedRowKeys.concat(getParentkeys(userList, j.id));
    });
    dispatch({
      type: 'processActinst/onExpandedRowsChange',
      payload: _toConsumableArray(new Set(expandedRowKeys))
    });
  };

  var props = {
    dispatch: dispatch,
    processInstanceId: processInstanceId,
    engine: engine,
    list: list,
    processReverseList: processReverseList,
    visible: visible,
    onCancel: onCancel,
    processColumns: processColumns,
    title: title,
    isShowButtons: isShowButtons,
    agree: agree,
    reject: reject,
    showUsers: showUsers,
    userVisible: userVisible,
    toogleUser: toogleUser,
    userTreeList: userTreeList,
    selectChange: selectChange,
    selectedRowKey: selectedRowKey,
    selectedRows: selectedRows,
    onOk: onOk,
    expandedRowKeys: expandedRowKeys,
    onExpandedRowsChange: onExpandedRowsChange,
    onSearchUser: onSearchUser
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProcessActinstCmp, props), /*#__PURE__*/React.createElement(ProcessOpinion, {
    list: list
  }));
};

function mapStateToProps(_ref2) {
  var processActinst = _ref2.processActinst;
  return {
    processActinst: processActinst
  };
}

export default connect(mapStateToProps)(ProcessActinst);