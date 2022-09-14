function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { CheckCircleOutlined, PauseCircleOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import WorkflowTaskManagementCmp from '../../../component/activiti/activitiCommon/WorkflowTaskManagementCmp';
import ProcessOpinion from './ProcessOpinion';
import { generatorTableKeyByIndex, isEnglish, ergodicRoot } from '../../../utils/utils';
import language from '@/locale/language';
import { Tooltip } from 'antd';
var _language$activiti$pr = language.activiti.processState,
    fields = _language$activiti$pr.fields,
    buttons = _language$activiti$pr.buttons;

var WorkflowTaskManagement = function WorkflowTaskManagement(_ref) {
  var dispatch = _ref.dispatch,
      workflowTaskManagement = _ref.workflowTaskManagement;
  var _workflowTaskManageme = workflowTaskManagement.Act,
      Act = _workflowTaskManageme === void 0 ? function () {
    return /*#__PURE__*/React.createElement("div", null);
  } : _workflowTaskManageme,
      _workflowTaskManageme2 = workflowTaskManagement.processReverseList,
      processReverseList = _workflowTaskManageme2 === void 0 ? [] : _workflowTaskManageme2,
      _workflowTaskManageme3 = workflowTaskManagement.list,
      list = _workflowTaskManageme3 === void 0 ? [] : _workflowTaskManageme3,
      _workflowTaskManageme4 = workflowTaskManagement.isShowButtons,
      isShowButtons = _workflowTaskManageme4 === void 0 ? false : _workflowTaskManageme4,
      taskId = workflowTaskManagement.taskId,
      processInstanceId = workflowTaskManagement.processInstanceId,
      userVisible = workflowTaskManagement.userVisible,
      _workflowTaskManageme5 = workflowTaskManagement.userTreeList,
      userTreeList = _workflowTaskManageme5 === void 0 ? [] : _workflowTaskManageme5,
      _workflowTaskManageme6 = workflowTaskManagement.selectedRowKey,
      selectedRowKey = _workflowTaskManageme6 === void 0 ? [] : _workflowTaskManageme6,
      _workflowTaskManageme7 = workflowTaskManagement.selectedRows,
      selectedRows = _workflowTaskManageme7 === void 0 ? [] : _workflowTaskManageme7,
      _workflowTaskManageme8 = workflowTaskManagement.selectedRowKey1,
      selectedRowKey1 = _workflowTaskManageme8 === void 0 ? [] : _workflowTaskManageme8,
      _workflowTaskManageme9 = workflowTaskManagement.selectedRows1,
      selectedRows1 = _workflowTaskManageme9 === void 0 ? [] : _workflowTaskManageme9,
      _workflowTaskManageme10 = workflowTaskManagement.expandedRowKeys,
      expandedRowKeys = _workflowTaskManageme10 === void 0 ? [] : _workflowTaskManageme10,
      _workflowTaskManageme11 = workflowTaskManagement.userList,
      userList = _workflowTaskManageme11 === void 0 ? [] : _workflowTaskManageme11,
      _workflowTaskManageme12 = workflowTaskManagement.activities,
      activities = _workflowTaskManageme12 === void 0 ? [] : _workflowTaskManageme12,
      visibleConclusion = workflowTaskManagement.visibleConclusion,
      currentLink = workflowTaskManagement.currentLink,
      transtactList = workflowTaskManagement.transtactList;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearValue = _useState2[1];

  var processColumns = [{
    title: fields.index,
    dataIndex: 'index',
    width: '40px'
  }, {
    title: fields.actName,
    dataIndex: 'actName',
    render: function render(text, record, index) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        title: text
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, index === 0 || record.subOpinions ? /*#__PURE__*/React.createElement(CheckCircleOutlined, {
        style: {
          color: 'green',
          marginRight: '9px'
        }
      }) : /*#__PURE__*/React.createElement(PauseCircleOutlined, {
        style: {
          color: 'red',
          marginRight: '9px'
        }
      }), text));
    }
  }, {
    title: fields.assignee,
    dataIndex: 'assignee'
  }, {
    title: fields.startTime,
    dataIndex: 'startTime'
  }, {
    title: fields.endTime,
    dataIndex: 'endTime'
  }, {
    title: fields.conclusion,
    dataIndex: 'conclusion',
    render: function render(text, record) {
      var ops;

      if (record.subOpinions) {
        var arr = record.subOpinions.split('|');
        ops = arr[0];
      }

      var Conclu = function Conclu() {
        var con;

        if (ops && ops[0] === 'Y') {
          con = /*#__PURE__*/React.createElement(CheckOutlined, null);
        } else if (ops && ops[0] === 'N') {
          con = /*#__PURE__*/React.createElement(CloseOutlined, null);
        } else con = /*#__PURE__*/React.createElement("span", null, ops);

        return con;
      };

      return /*#__PURE__*/React.createElement(Conclu, null);
    }
  }, {
    title: fields.subOpinions,
    dataIndex: 'subOpinions',
    render: function render(text, record) {
      var ops;

      if (record.subOpinions) {
        var arr = record.subOpinions.split('|');
        ops = arr[1];
      }

      return ops;
    }
  }, {
    title: fields.duration,
    dataIndex: 'duration'
  }];

  var renders = function renders(text, record, index) {
    if (searchValue === '' || text.toUpperCase().indexOf(searchValue.toUpperCase()) < 0) {
      return /*#__PURE__*/React.createElement("span", null, text);
    }

    var i = text.toUpperCase().indexOf(searchValue.toUpperCase());
    var beforeStr = text.substr(0, i);
    var center = text.substr(i, searchValue.length);
    var afterStr = text.substr(i + searchValue.length);
    return /*#__PURE__*/React.createElement("span", null, beforeStr, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#FA2A45',
        fontWeight: 800
      }
    }, center), afterStr);
  };

  var columns = [{
    title: fields.name,
    dataIndex: 'NAME',
    render: function render(text, record, index) {
      return renders(text, record, index);
    }
  }];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      transact = _useState4[0],
      setTransact = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      rootID = _useState6[0],
      setRootID = _useState6[1];

  useEffect(function () {
    if (userList.length) {
      setRootID(userList.filter(function (item) {
        return item.PID === '0';
      })[0].ID);
    }
  }, [userList]);
  processReverseList = generatorTableKeyByIndex(processReverseList);

  if (processReverseList.length && selectedRowKey1.length === 0) {
    var row = currentLink ? processReverseList.filter(function (item) {
      return item.actName === currentLink && !item.subOpinions;
    }) : [processReverseList[processReverseList.length - 1]];
    selectedRowKey1 = row.length ? [row[0].id] : [];
    selectedRows1 = row;
  }

  var toogleModalC = function toogleModalC() {
    dispatch({
      type: 'workflowTaskManagement/packet',
      payload: {
        visibleConclusion: !visibleConclusion
      }
    });
  }; //同意


  var agree = function agree() {
    setTransact(true); //弹窗标题

    var title = isEnglish ? 'transactionSuggest' : '办理建议'; //后端请求路径

    var url = "/camunda/act/task/handle/".concat(taskId); //前端刷新页面请求

    var refreshUrl = 'TodoProcess/query';
    dispatch({
      type: 'workflowTaskManagement/processTransact',
      payload: {
        taskId: taskId,
        processInstanceId: processInstanceId,
        title: title,
        url: url,
        refreshUrl: refreshUrl,
        visibleConclusion: visibleConclusion
      }
    });
  }; //驳回


  var reject = function reject() {
    toogleModalC();
    setTransact(false);
    var rejectTo = true; //弹窗标题

    var title = isEnglish ? 'rejectCause' : '驳回原因'; //后端请求路径

    var url = "/application/act/task/reject/".concat(taskId); //前端刷新页面请求

    var refreshUrl = 'TodoProcess/query';
    dispatch({
      type: 'processOpinion/show',
      payload: {
        processInstanceId: processInstanceId,
        title: title,
        url: url,
        refreshUrl: refreshUrl,
        rejectTo: rejectTo
      }
    });
  }; //驳回至


  var rejectTo = function rejectTo(_ref2) {
    var key = _ref2.key;
    //弹窗标题
    var title = isEnglish ? 'rejectCause' : '驳回原因'; //后端请求路径

    var url = "/act/task/rejectTo/".concat(taskId, "/").concat(key); //前端刷新页面请求

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
  }; //获取可驳回的节点集


  var getActivities = function getActivities() {
    dispatch({
      type: 'workflowTaskManagement/getActivities',
      payload: {
        taskId: taskId
      }
    });
  }; // 任务转办


  var onOk = function onOk() {
    dispatch({
      type: 'workflowTaskManagement/taskTransfer',
      payload: {
        taskId: taskId,
        name: selectedRows[0].NAME
      }
    });
  };

  var showUsers = function showUsers() {
    dispatch({
      type: 'workflowTaskManagement/showUsers'
    });
  };

  var toogleUser = function toogleUser() {
    dispatch({
      type: 'workflowTaskManagement/toogleUser'
    });
  };

  var selectChange = function selectChange(selectedRowKey, selectedRows) {
    dispatch({
      type: 'workflowTaskManagement/onSelectChange',
      payload: {
        selectedRowKey: selectedRowKey,
        selectedRows: selectedRows
      }
    });
  };

  var onExpandedRowsChange = function onExpandedRowsChange(expandedRowKeys) {
    dispatch({
      type: 'workflowTaskManagement/onExpandedRowsChange',
      payload: expandedRowKeys
    });
  };

  var getParentkeys = function getParentkeys(key, tree) {
    var parentKey;

    for (var i = 0; i < tree.length; i++) {
      var node = tree[i];

      if (node.children) {
        if (node.children.some(function (item) {
          return item.ID === key;
        })) {
          parentKey = node.ID;
        } else if (getParentkeys(key, node.children)) {
          parentKey = getParentkeys(key, node.children);
        }
      }
    }

    return parentKey;
  };

  var onSearchUser = function onSearchUser(queryWord) {
    if (!queryWord) return;
    setSearValue(queryWord);
    var expandedRowKeys = [];
    var list = userList.filter(function (i) {
      return i.NAME.indexOf(queryWord) > -1;
    });
    var rootList = ergodicRoot(userList);
    list.forEach(function (j) {
      expandedRowKeys = expandedRowKeys.concat(getParentkeys(j.ID, rootList));
    });

    for (var i = 0; i < 10; i++) {
      if (expandedRowKeys.length && expandedRowKeys.indexOf('PID') < 0) {
        userList.map(function (item) {
          expandedRowKeys.map(function (item1) {
            if (item.ID === item1) {
              !expandedRowKeys.includes(item.PID) && expandedRowKeys.push(item.PID);
            }
          });
        });
      }
    }

    dispatch({
      type: 'workflowTaskManagement/onExpandedRowsChange',
      payload: [rootID].concat(_toConsumableArray(new Set(expandedRowKeys)))
    });
  };

  var onRow = function onRow(selectedRowKey1, selectedRows1) {
    return function () {
      dispatch({
        type: 'workflowTaskManagement/packet',
        payload: {
          selectedRowKey1: [selectedRowKey1],
          selectedRows1: [selectedRows1]
        }
      });
    };
  };

  var onSelectChange1 = function onSelectChange1(selectedRowKey1, selectedRows1) {
    dispatch({
      type: 'workflowTaskManagement/packet',
      payload: {
        selectedRowKey1: selectedRowKey1,
        selectedRows1: selectedRows1
      }
    });
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange1,
    selectedRowKeys: selectedRowKey1
  };
  var props = {
    dispatch: dispatch,
    onRow: onRow,
    rowSelection: rowSelection,
    Act: Act,
    processReverseList: processReverseList,
    processColumns: processColumns,
    columns: columns,
    isShowButtons: isShowButtons,
    agree: agree,
    reject: reject,
    rejectTo: rejectTo,
    getActivities: getActivities,
    showUsers: showUsers,
    userVisible: userVisible,
    toogleUser: toogleUser,
    userTreeList: userTreeList,
    selectChange: selectChange,
    selectedRowKey: selectedRowKey,
    selectedRows: selectedRows,
    selectedRowKey1: selectedRowKey1,
    selectedRows1: selectedRows1,
    onOk: onOk,
    expandedRowKeys: expandedRowKeys,
    onExpandedRowsChange: onExpandedRowsChange,
    onSearchUser: onSearchUser,
    activities: activities,
    currentLink: currentLink
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WorkflowTaskManagementCmp, props), /*#__PURE__*/React.createElement(ProcessOpinion, {
    list: list,
    transact: transact,
    visible: visibleConclusion,
    cancel: toogleModalC,
    currentLink: currentLink,
    transtactList: transtactList,
    taskId: taskId
  }));
};

function mapStateToProps(_ref3) {
  var workflowTaskManagement = _ref3.workflowTaskManagement;
  return {
    workflowTaskManagement: workflowTaskManagement
  };
}

export default connect(mapStateToProps)(WorkflowTaskManagement);