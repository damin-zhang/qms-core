"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _icons = require("@ant-design/icons");

var _ParseTable = _interopRequireDefault(require("../../common/table/ParseTable"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$activiti$pr = _language.default.activiti.processState,
    fields = _language$activiti$pr.fields,
    buttons = _language$activiti$pr.buttons;
var Search = _antd.Input.Search;
var Item = _antd.Form.Item;

var WorkflowTaskManagementCmp = function WorkflowTaskManagementCmp(_ref) {
  var rowSelection = _ref.rowSelection,
      processColumns = _ref.processColumns,
      columns = _ref.columns,
      processReverseList = _ref.processReverseList,
      isShowButtons = _ref.isShowButtons,
      agree = _ref.agree,
      reject = _ref.reject,
      rejectTo = _ref.rejectTo,
      getActivities = _ref.getActivities,
      showUsers = _ref.showUsers,
      userVisible = _ref.userVisible,
      toogleUser = _ref.toogleUser,
      userTreeList = _ref.userTreeList,
      selectChange = _ref.selectChange,
      selectedRowKey = _ref.selectedRowKey,
      onOk = _ref.onOk,
      expandedRowKeys = _ref.expandedRowKeys,
      _ref$selectedRowKey = _ref.selectedRowKey1,
      selectedRowKey1 = _ref$selectedRowKey === void 0 ? [] : _ref$selectedRowKey,
      _ref$selectedRows = _ref.selectedRows1,
      selectedRows1 = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      onExpandedRowsChange = _ref.onExpandedRowsChange,
      onSearchUser = _ref.onSearchUser,
      activities = _ref.activities,
      Act = _ref.Act,
      onRow = _ref.onRow,
      currentLink = _ref.currentLink;
  var layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var pageFieldList = [];
  processColumns.forEach(function (item) {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextBox'
    });
  });
  var tabCol = processColumns.filter(function (item) {
    return item.dataIndex !== 'startTime' && item.dataIndex !== 'endTime' && item.dataIndex !== 'duration';
  });
  var propTable = {
    columns: tabCol,
    dataList: processReverseList,
    rowSelection: rowSelection
  };
  (0, _react.useEffect)(function () {
    if (selectedRows1 && selectedRows1[0]) {
      selectedRows1[0].index = selectedRows1[0].index + 1;

      if (selectedRows1[0].subOpinions) {
        var arr = selectedRows1[0].subOpinions.split('|');
        selectedRows1[0].conclusion = arr[0];
        selectedRows1[0].subOpinions = arr[1];
      } else selectedRows1[0].conclusion = '';

      form.setFieldsValue(selectedRows1[0]);
    }
  }, [selectedRows1, form]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      right: true
    },
    showTab: true
  }, isShowButtons ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '115px',
      backgroundColor: '#FDFB91',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, /*#__PURE__*/_react.default.createElement("h4", {
    style: {
      fontWeight: 'bold'
    }
  }, "\u6B63\u5728\u529E\u7406")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    style: {
      marginLeft: 5,
      backgroundColor: '#3ca2e0',
      color: '#FFFFFF'
    },
    onClick: function onClick() {
      return agree();
    }
  }, buttons.transaction), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    style: {
      marginLeft: 5,
      backgroundColor: '#de6764',
      color: '#FFFFFF'
    },
    onClick: function onClick() {
      return reject();
    }
  }, buttons.reject), /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    style: {
      marginLeft: 5,
      backgroundColor: '#de6764',
      color: '#FFFFFF'
    },
    overlay: /*#__PURE__*/_react.default.createElement(_antd.Menu, {
      onClick: rejectTo
    }, activities.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: item.ID
      }, item.NAME);
    })),
    trigger: 'click',
    onClick: getActivities
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, null, buttons.backTo, " ", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    style: {
      marginLeft: 5,
      backgroundColor: '#5BA276',
      color: '#FFFFFF'
    },
    onClick: function onClick() {
      return showUsers();
    }
  }, buttons.turnOver)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'center',
      lineHeight: '30px'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: '15px',
      color: '#343334'
    }
  }, "\u5F53\u524D\u6267\u884C\u73AF\u8282\uFF1A"), /*#__PURE__*/_react.default.createElement("span", null, currentLink))) : null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: isShowButtons ? 'calc(100% - 140px)' : '100%'
    }
  }, isShowButtons && /*#__PURE__*/_react.default.createElement(_antd.Divider, null, "\u5386\u53F2\u8282\u70B9"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '36%',
      overflowY: 'auto'
    },
    enable: {
      bottom: true
    },
    showTab: selectedRows1 && selectedRows1.length === 1 ? true : false
  }, /*#__PURE__*/_react.default.createElement(_ParseTable.default, propTable)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      borderTop: '2px dashed #BBBFC3',
      height: 'calc(54% - 26px)',
      overflow: 'scroll'
    }
  }, selectedRows1 && selectedRows1.length === 1 && /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    layout: "block",
    form: form
  }, layout), pageFieldList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Item, {
      name: item.no,
      label: item.caption,
      key: item.no
    }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
      style: {
        border: 0
      }
    }));
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-x"
  }, /*#__PURE__*/_react.default.createElement(Act, null)), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: fields.userSelector,
    visible: userVisible,
    onCancel: toogleUser,
    okText: buttons.turnTo,
    onOk: onOk // height={'calc(100vh - 92px)'}

  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '34px'
    }
  }, /*#__PURE__*/_react.default.createElement(Search, {
    width: "100%",
    onSearch: onSearchUser,
    enterButton: true
  })), /*#__PURE__*/_react.default.createElement(_antd.Table, {
    size: "small",
    bordered: true,
    columns: columns,
    dataSource: userTreeList,
    pagination: false,
    style: {
      height: 400
    },
    scroll: {
      y: 350
    },
    expandedRowKeys: expandedRowKeys,
    onExpandedRowsChange: onExpandedRowsChange,
    onRow: onRow,
    rowSelection: {
      type: 'radio',
      onChange: selectChange,
      selectedRowKeys: selectedRowKey,
      getCheckboxProps: function getCheckboxProps(record) {
        return {
          disabled: !record.isUser,
          name: record.name
        };
      }
    }
  })));
};

var _default = WorkflowTaskManagementCmp;
exports.default = _default;