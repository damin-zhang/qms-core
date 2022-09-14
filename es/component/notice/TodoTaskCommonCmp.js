var _excluded = ["onRow", "rowSelection", "selectedRowKey", "noticeList", "relationTabs", "dispatch"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect } from 'react';
import { Layout, Tabs, Button, message } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import DragCmp from '../common/drag/DragCmp';
import Table from '../common/table/ParseTable';
import { showLoading } from '../../utils/utils';
import { todoTaskTabs, implclassMap } from '../../utils/mapParams';
import { commonApi } from '../../service/applicationApi';
import { finishTodoTask } from '../../service/communicationApi';
import styles from './index.css';
import stylesLess from './index.less';
import language from '@/locale/language';
var _language$todoTask = language.todoTask,
    fields = _language$todoTask.fields,
    buttons = _language$todoTask.buttons,
    select_the_data_first = language.message.todo.select_the_data_first;
var Content = Layout.Content;
var TabPane = Tabs.TabPane;

var TodoTaskCommonCmp = function TodoTaskCommonCmp(_ref) {
  var onRow = _ref.onRow,
      rowSelection = _ref.rowSelection,
      selectedRowKey = _ref.selectedRowKey,
      noticeList = _ref.noticeList,
      relationTabs = _ref.relationTabs,
      dispatch = _ref.dispatch,
      UpcomingTasks = _objectWithoutProperties(_ref, _excluded);

  var showTab = UpcomingTasks.showTab,
      selectedRows = UpcomingTasks.selectedRows,
      panes = UpcomingTasks.panes,
      activeKey = UpcomingTasks.activeKey,
      activeKeyTodoTask = UpcomingTasks.activeKeyTodoTask;
  var columns = [{
    title: fields.TITLE,
    dataIndex: 'title',
    ellipsis: true,
    width: 200
  }, {
    title: fields.SMESSAGE,
    dataIndex: 'sMessage',
    ellipsis: true,
    width: 200
  }, {
    title: fields.SENDER,
    dataIndex: 'userName',
    ellipsis: true,
    width: 70
  }, {
    title: fields.TYPE,
    dataIndex: 'type',
    ellipsis: true,
    width: 70
  }, {
    title: fields.NO,
    dataIndex: 'no',
    ellipsis: true,
    width: 70
  }, {
    title: fields.CTIME,
    dataIndex: 'cTime',
    ellipsis: true,
    width: 140
  }];

  var changePage = function changePage() {
    dispatch({
      type: 'UpcomingTasks/query',
      payload: {}
    });
  };

  var pagination = {
    total: noticeList.length,
    pageSize: 30,
    changePage: changePage
  };
  useEffect(function () {
    if (activeKey) {
      for (var i = 0; i < panes.length; i++) {
        if (panes[i].key === activeKey) {
          selectedRows && selectedRows.length && dispatch({
            type: 'UpcomingTasks/addTab',
            payload: _objectSpread(_objectSpread({}, panes[i]), {}, {
              selectedRow: selectedRows[0]
            })
          });
          return;
        }
      }
    }
  }, [UpcomingTasks, activeKey, dispatch, panes, selectedRows]);

  var onChange = function onChange(activeKey) {
    dispatch({
      type: 'UpcomingTasks/update',
      payload: {
        activeKey: activeKey
      }
    });
  };

  var onChangeTodoTaskTab = function onChangeTodoTaskTab(activeKey) {
    // 点击待办任务的tab请求相应类型的数据
    dispatch({
      type: 'UpcomingTasks/query',
      payload: {
        activeKeyTodoTask: activeKey
      }
    });
    dispatch({
      type: 'UpcomingTasks/update',
      payload: {
        showTab: false,
        activeKeyTodoTask: activeKey
      }
    });
  }; // 开始执行


  var handleBeginExecution = function handleBeginExecution() {
    if (selectedRows && selectedRows.length) {
      var params = {
        objectNo: 'TASK_TODO',
        implclass: implclassMap.startTodoAction,
        hData: selectedRows
      };
      showLoading();
      commonApi(params).then(function (res) {
        if (res) {
          dispatch({
            type: 'UpcomingTasks/query',
            payload: {
              activeKeyTodoTask: '1',
              filterTodoTask: true,
              selectedRows: selectedRows
            }
          });
          dispatch({
            type: 'UpcomingTasks/update',
            payload: {
              showTab: false,
              activeKeyTodoTask: '1'
            }
          });
          dispatch({
            type: 'UpcomingTasks/query',
            payload: {
              webSocket: true
            }
          });
        }
      }).catch(function (err) {});
    } else {
      message.warn(select_the_data_first);
    }
  }; // 任务完成


  var handleMissionCompleted = function handleMissionCompleted() {
    if (selectedRows && selectedRows.length) {
      showLoading();
      finishTodoTask(selectedRows).then(function (res) {
        if (res) {
          dispatch({
            type: 'UpcomingTasks/query',
            payload: {
              activeKeyTodoTask: activeKeyTodoTask
            }
          });
          dispatch({
            type: 'UpcomingTasks/update',
            payload: {
              showTab: false
            }
          });
        }
      }).catch(function (err) {});
    } else {
      message.warn(select_the_data_first);
    }
  }; // 关闭


  var closeTabPane = function closeTabPane() {
    dispatch({
      type: 'UpcomingTasks/update',
      payload: {
        activeKey: ''
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabPosition: "bottom",
    activeKey: activeKeyTodoTask,
    onChange: onChangeTodoTaskTab,
    className: stylesLess.todoTaskTab
  }, todoTaskTabs.map(function (item) {
    return /*#__PURE__*/React.createElement(TabPane, {
      style: {
        display: 'flex'
      },
      tab: /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: parseInt(activeKeyTodoTask) === item.value ? '#fff' : item.color
        }
      }, item.name),
      key: item.value
    }, /*#__PURE__*/React.createElement(DragCmp, {
      enable: {
        right: true
      },
      showTab: showTab && activeKey
    }, /*#__PURE__*/React.createElement(DragCmp, {
      enable: {
        bottom: true
      },
      showTab: showTab,
      isFixed: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-y"
    }, item.value === 0 && /*#__PURE__*/React.createElement(Button, {
      style: {
        width: 'calc(100% - 96px)'
      },
      type: "primary",
      disabled: !(noticeList && noticeList.length),
      onClick: handleBeginExecution
    }, buttons.begin_execution), /*#__PURE__*/React.createElement("div", {
      className: "flex-grow-y"
    }, /*#__PURE__*/React.createElement(Table, {
      bordered: true,
      paging: pagination,
      onRow: onRow,
      rowSelection: rowSelection,
      columns: columns,
      dataList: noticeList,
      buttons: /*#__PURE__*/React.createElement("div", null, item.value !== 2 && /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        disabled: !(noticeList && noticeList.length),
        onClick: handleMissionCompleted
      }, buttons.mission_completed))
    })))), showTab && /*#__PURE__*/React.createElement("div", {
      className: styles.todoContent
    }, selectedRows && selectedRows.length > 0 && selectedRows[0].sMessage)), showTab && activeKey && /*#__PURE__*/React.createElement(Content, {
      className: styles.content
    }, /*#__PURE__*/React.createElement(Tabs, {
      className: styles.tabs,
      activeKey: activeKey,
      onChange: onChange,
      tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
        size: "small",
        className: "close-tab",
        icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
        onClick: closeTabPane
      })
    }, panes.map(function (item) {
      return /*#__PURE__*/React.createElement(TabPane, {
        tab: item.caption,
        key: item.key,
        className: styles.tabPane
      }, item.Cmp);
    }))));
  })));
};

export default TodoTaskCommonCmp;