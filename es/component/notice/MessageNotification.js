var _excluded = ["dispatch", "dataList", "noticeVisible", "selectedRows", "selectedRowKeys", "popupVisible"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useState } from 'react';
import language from '@/locale/language';
import TableWithBtn from '../common/table/TableWithBtn';
import DragCmp from '../common/drag/DragCmp';
import BraftEditor from 'braft-editor';
import SearchInput from '../common/search/SearchInput';
import { Button, Form, Input, Checkbox } from 'antd';
var Item = Form.Item;
var index = language.common.index,
    Aboutus = language.copyright.Aboutus,
    notice = language.header.user.notice;

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
      return /*#__PURE__*/React.createElement(Checkbox, {
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

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _localStorage = localStorage,
      employeeName = _localStorage.employeeName;
  var smessage = selectedRows && selectedRows.length ? selectedRows[0].sMessage : '';
  useEffect(function () {
    if (selectedRows && selectedRows.length === 1) {
      form.setFieldsValue({
        senderId: selectedRows[0].senderId,
        title: selectedRows[0].title,
        sMessage: BraftEditor.createEditorState(smessage),
        userName: employeeName
      });
    }
  }, [selectedRows, dataList, form, smessage, employeeName]);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(DragCmp, {
    title: "\u6D88\u606F\u901A\u77E5",
    enable: {
      right: true
    },
    width: "30%",
    showTab: selectedRowKeys.length === 1 ? true : false
  }, /*#__PURE__*/React.createElement(TableWithBtn, restProps)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    labelCol: {
      span: 3
    },
    form: form
  }, /*#__PURE__*/React.createElement(SearchInput, {
    name: "userName",
    label: notice.receiver
  }), /*#__PURE__*/React.createElement(Item, {
    name: "title",
    label: notice.title,
    required: true
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "sMessage",
    label: notice.content
  }, /*#__PURE__*/React.createElement(BraftEditor, {
    contentStyle: {
      height: 200
    },
    maxLength: 20000,
    style: {
      border: '1px solid #d9d9d9',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Item, {
    name: "senderId",
    label: notice.sender
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })))));
};

export default MessageNotification;