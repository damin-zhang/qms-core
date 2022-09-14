"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _DragCmp = _interopRequireDefault(require("../common/drag/DragCmp"));

var _ParseTable = _interopRequireDefault(require("../common/table/ParseTable"));

var _utils = require("../../utils/utils");

var _mapParams = require("../../utils/mapParams");

var _applicationApi = require("../../service/applicationApi");

var _communicationApi = require("../../service/communicationApi");

var _index = _interopRequireDefault(require("./index.css"));

var _index2 = _interopRequireDefault(require("./index.less"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _excluded = ["onRow", "rowSelection", "selectedRowKey", "noticeList", "relationTabs", "dispatch"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _language$todoTask = _language.default.todoTask,
    fields = _language$todoTask.fields,
    buttons = _language$todoTask.buttons,
    select_the_data_first = _language.default.message.todo.select_the_data_first;
var Content = _antd.Layout.Content;
var TabPane = _antd.Tabs.TabPane;

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
  (0, _react.useEffect)(function () {
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
        implclass: _mapParams.implclassMap.startTodoAction,
        hData: selectedRows
      };
      (0, _utils.showLoading)();
      (0, _applicationApi.commonApi)(params).then(function (res) {
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
      _antd.message.warn(select_the_data_first);
    }
  }; // 任务完成


  var handleMissionCompleted = function handleMissionCompleted() {
    if (selectedRows && selectedRows.length) {
      (0, _utils.showLoading)();
      (0, _communicationApi.finishTodoTask)(selectedRows).then(function (res) {
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
      _antd.message.warn(select_the_data_first);
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    tabPosition: "bottom",
    activeKey: activeKeyTodoTask,
    onChange: onChangeTodoTaskTab,
    className: _index2.default.todoTaskTab
  }, _mapParams.todoTaskTabs.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      style: {
        display: 'flex'
      },
      tab: /*#__PURE__*/_react.default.createElement("div", {
        style: {
          backgroundColor: parseInt(activeKeyTodoTask) === item.value ? '#fff' : item.color
        }
      }, item.name),
      key: item.value
    }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
      enable: {
        right: true
      },
      showTab: showTab && activeKey
    }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
      enable: {
        bottom: true
      },
      showTab: showTab,
      isFixed: true
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-y"
    }, item.value === 0 && /*#__PURE__*/_react.default.createElement(_antd.Button, {
      style: {
        width: 'calc(100% - 96px)'
      },
      type: "primary",
      disabled: !(noticeList && noticeList.length),
      onClick: handleBeginExecution
    }, buttons.begin_execution), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-grow-y"
    }, /*#__PURE__*/_react.default.createElement(_ParseTable.default, {
      bordered: true,
      paging: pagination,
      onRow: onRow,
      rowSelection: rowSelection,
      columns: columns,
      dataList: noticeList,
      buttons: /*#__PURE__*/_react.default.createElement("div", null, item.value !== 2 && /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        disabled: !(noticeList && noticeList.length),
        onClick: handleMissionCompleted
      }, buttons.mission_completed))
    })))), showTab && /*#__PURE__*/_react.default.createElement("div", {
      className: _index.default.todoContent
    }, selectedRows && selectedRows.length > 0 && selectedRows[0].sMessage)), showTab && activeKey && /*#__PURE__*/_react.default.createElement(Content, {
      className: _index.default.content
    }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
      className: _index.default.tabs,
      activeKey: activeKey,
      onChange: onChange,
      tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        className: "close-tab",
        icon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
        onClick: closeTabPane
      })
    }, panes.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: item.caption,
        key: item.key,
        className: _index.default.tabPane
      }, item.Cmp);
    }))));
  })));
};

var _default = TodoTaskCommonCmp;
exports.default = _default;