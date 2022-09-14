"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _PropertyForm = _interopRequireDefault(require("../../engine/property/PropertyForm"));

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _ParseTable = _interopRequireDefault(require("../../common/table/ParseTable"));

var _VirtualTree = _interopRequireDefault(require("../../common/tree/VirtualTree"));

var _utils = require("../../../utils/utils");

var _index = _interopRequireDefault(require("./index.less"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$systemPlatf = _language.default.systemPlatform.systemLog.serviceLog,
    auto_refresh_interval_time = _language$systemPlatf.auto_refresh_interval_time,
    show_data_rows = _language$systemPlatf.show_data_rows,
    manual_refresh = _language$systemPlatf.manual_refresh,
    stop_refresh = _language$systemPlatf.stop_refresh,
    filter_logs = _language$systemPlatf.filter_logs,
    log_valid_time = _language$systemPlatf.log_valid_time,
    automatic_database_backup_interval = _language$systemPlatf.automatic_database_backup_interval,
    manual_backup = _language$systemPlatf.manual_backup,
    detailed_information = _language$systemPlatf.detailed_information;
var TreeNode = _antd.Tree.TreeNode;
var Option = _antd.Select.Option;
var Item = _antd.Form.Item;
var treeData = [{
  title: '事件查看器',
  key: '1',
  action: 'Event viewer',
  children: [{
    title: '系统日志',
    key: '1-1',
    action: 'S',
    children: [{
      title: '登录系统',
      key: '1-1-1',
      action: 'LOGIN'
    }, {
      title: '退出系统',
      key: '1-1-2',
      action: 'LOGOUT'
    }]
  }, {
    title: '数据日志',
    action: 'D',
    key: '1-2',
    children: [{
      title: '新建',
      key: '1-2-1',
      action: 'NEW'
    }, {
      title: '修改',
      key: '1-2-2',
      action: 'MODIFY'
    }, {
      title: '删除',
      key: '1-2-3',
      action: 'DELETE'
    }]
  }, {
    title: '文件日志',
    action: 'F',
    key: '1-3',
    children: [{
      title: '上传',
      key: '1-3-1',
      action: 'UPLOAD'
    }, {
      title: '下载',
      key: '1-3-2',
      action: 'DOWNLOAD'
    }, {
      title: '浏览',
      key: '1-3-3',
      action: 'BROWSE'
    }]
  }, {
    title: '备份日志',
    action: 'B',
    key: '1-4'
  }, {
    title: '其它',
    key: '1-5',
    action: 'OTHER'
  }, {
    title: '服务日志',
    key: '1-6',
    action: 'SERVICElog'
  }]
}];

var renderTreeNodes = function renderTreeNodes(data) {
  return data.map(function (item) {
    var titlePro = localStorage.getItem('AcceptLanguage') === 'en-US';
    var title = item.title;
    var action = item.action;

    if (item.children) {
      return /*#__PURE__*/_react.default.createElement(TreeNode, {
        title: titlePro ? action ? action : title : title,
        key: item.key,
        dataRef: item
      }, renderTreeNodes(item.children));
    }

    return /*#__PURE__*/_react.default.createElement(TreeNode, {
      title: titlePro ? action ? action : title : title,
      key: item.key,
      dataRef: item
    });
  });
};

var SystemLogCmp = function SystemLogCmp(_ref) {
  var toogleModal = _ref.toogleModal,
      dataList = _ref.dataList,
      columns = _ref.columns,
      onSelect = _ref.onSelect,
      onRow = _ref.onRow,
      selectedRowKey = _ref.selectedRowKey,
      visible = _ref.visible,
      record = _ref.record,
      pageFieldList = _ref.pageFieldList,
      sendSocketMessage = _ref.sendSocketMessage,
      serviceLog = _ref.serviceLog;

  var _useState = (0, _react.useState)(15),
      _useState2 = _slicedToArray(_useState, 2),
      intervalTime = _useState2[0],
      setIntervalTime = _useState2[1];

  var _useState3 = (0, _react.useState)(200),
      _useState4 = _slicedToArray(_useState3, 2),
      rowCount = _useState4[0],
      setRowCount = _useState4[1];

  var systemLogRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (serviceLog && systemLogRef.current) {
      (0, _utils.hideLoading)(); // 滚动服务日志到最底部

      systemLogRef.current.scrollTop = systemLogRef.current.scrollHeight;
    }
  }, [serviceLog]);

  var onValidTimeChange = function onValidTimeChange(date, dateString) {// console.log(date, dateString)
  };

  var onBackupTimeChange = function onBackupTimeChange(date, dateString) {// console.log(date, dateString)
  };

  var onClick = function onClick() {}; // 自动刷新间隔时间


  var refreshIntervalTime = function refreshIntervalTime() {
    sendSocketMessage(true, intervalTime, rowCount);
  };

  var onChangeIntervalTime = function onChangeIntervalTime(event) {
    setIntervalTime(event);
  }; // 选择展示数据行


  var onSelectRowCount = function onSelectRowCount(value) {
    setRowCount(value);
    sendSocketMessage(true, intervalTime, value);
  }; // 手动刷新


  var onClickManualRefresh = function onClickManualRefresh() {
    // showLoading()
    sendSocketMessage(true);
  }; // 停止刷新


  var onClickStopRefresh = function onClickStopRefresh() {
    sendSocketMessage(false);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.pageSystemLog
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      right: true
    },
    showTab: true,
    width: "15%"
  }, /*#__PURE__*/_react.default.createElement(_VirtualTree.default, {
    defaultExpandAll: true,
    onSelect: onSelect,
    selectedKeys: selectedRowKey,
    data: renderTreeNodes(treeData)
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.main
  }, selectedRowKey && selectedRowKey[0] && selectedRowKey[0] === '1-6' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    layout: "inline"
  }, /*#__PURE__*/_react.default.createElement(Item, {
    label: auto_refresh_interval_time,
    labelCol: {
      span: 17
    },
    wrapperCol: {
      span: 7
    },
    style: {
      width: 230
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    min: 5,
    value: intervalTime,
    onPressEnter: refreshIntervalTime,
    onChange: onChangeIntervalTime
  })), /*#__PURE__*/_react.default.createElement(Item, {
    label: show_data_rows,
    labelCol: {
      span: 12
    },
    wrapperCol: {
      span: 12
    },
    style: {
      width: 200,
      marginLeft: '16px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    defaultValue: 200,
    onSelect: onSelectRowCount
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 100
  }, "100"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 200
  }, "200"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 300
  }, "300"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 400
  }, "400"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 500
  }, "500"))), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: onClickManualRefresh,
    style: {
      marginLeft: '16px'
    },
    type: "primary"
  }, manual_refresh), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: onClickStopRefresh,
    style: {
      marginLeft: '16px'
    },
    type: "primary"
  }, stop_refresh)), serviceLog && /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.serviceLog,
    ref: systemLogRef,
    dangerouslySetInnerHTML: {
      __html: serviceLog
    }
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '8px',
      display: 'flex'
    }
  }, filter_logs, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
    onChange: onValidTimeChange,
    placeholder: log_valid_time
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft: '25px'
    }
  }, automatic_database_backup_interval), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    min: 1,
    onChange: onBackupTimeChange
  }))), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: onClick,
    style: {
      marginLeft: '25px'
    },
    type: "primary"
  }, manual_backup)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      flexGrow: '1',
      height: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement(_ParseTable.default, {
    dataList: dataList,
    columns: columns,
    onRow: onRow,
    rightClick: toogleModal
  })))), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: detailed_information,
    width: 700,
    visible: visible,
    onOk: toogleModal,
    onCancel: toogleModal
  }, /*#__PURE__*/_react.default.createElement(_PropertyForm.default, {
    columns: 1,
    pageFieldList: pageFieldList,
    initVal: record,
    rType: "systemLog"
  })));
};

var _default = SystemLogCmp;
exports.default = _default;