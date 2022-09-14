"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _TableWithBtn = _interopRequireDefault(require("../common/table/TableWithBtn"));

var _DragCmp = _interopRequireDefault(require("../common/drag/DragCmp"));

var _braftEditor = _interopRequireDefault(require("braft-editor"));

var _SearchInput = _interopRequireDefault(require("../common/search/SearchInput"));

var _antd = require("antd");

var _excluded = ["dispatch", "dataList", "noticeVisible", "selectedRows", "selectedRowKeys", "popupVisible"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Item = _antd.Form.Item;
var index = _language.default.common.index,
    Aboutus = _language.default.copyright.Aboutus,
    notice = _language.default.header.user.notice;

var MessageNotification = function MessageNotification(_ref) {
  var dispatch = _ref.dispatch,
      dataList = _ref.dataList,
      noticeVisible = _ref.noticeVisible,
      selectedRows = _ref.selectedRows,
      selectedRowKeys = _ref.selectedRowKeys,
      popupVisible = _ref.popupVisible,
      notices = _objectWithoutProperties(_ref, _excluded);

  var rowSelection = {
    type: 'checkbox',
    onChange: function onChange(objectSelectedRowKeys, objectSelectedRows) {
      dispatch({
        type: 'notice/packet',
        payload: {
          selectedRowKeys: objectSelectedRowKeys,
          selectedRows: objectSelectedRows
        }
      });
    },
    selectedRowKeys: selectedRowKeys
  };
  var columns = [{
    title: index,
    width: 43,
    dataIndex: 'index',
    render: function render(index) {
      return index + 1;
    }
  }, {
    title: notice.readState,
    width: 45,
    dataIndex: 'status',
    render: function render(status) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: status
      });
    }
  }, {
    title: notice.title,
    width: 150,
    dataIndex: 'title'
  }, {
    title: notice.sender,
    width: 60,
    dataIndex: 'senderId'
  }, {
    title: notice.senderTime,
    width: 150,
    dataIndex: 'cTime'
  }];
  var restProps = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection
  };

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _localStorage = localStorage,
      employeeName = _localStorage.employeeName;
  var smessage = selectedRows && selectedRows.length ? selectedRows[0].sMessage : '';
  (0, _react.useEffect)(function () {
    if (selectedRows && selectedRows.length === 1) {
      form.setFieldsValue({
        senderId: selectedRows[0].senderId,
        title: selectedRows[0].title,
        sMessage: _braftEditor.default.createEditorState(smessage),
        userName: employeeName
      });
    }
  }, [selectedRows, dataList, form, smessage, employeeName]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    title: "\u6D88\u606F\u901A\u77E5",
    enable: {
      right: true
    },
    width: "30%",
    showTab: selectedRowKeys.length === 1 ? true : false
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, restProps)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    labelCol: {
      span: 3
    },
    form: form
  }, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: "userName",
    label: notice.receiver
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: "title",
    label: notice.title,
    required: true
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "sMessage",
    label: notice.content
  }, /*#__PURE__*/_react.default.createElement(_braftEditor.default, {
    contentStyle: {
      height: 200
    },
    maxLength: 20000,
    style: {
      border: '1px solid #d9d9d9',
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "senderId",
    label: notice.sender
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })))));
};

var _default = MessageNotification;
exports.default = _default;