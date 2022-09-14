function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";

/*
 * @Description: 变更历史
 */
import { useState } from 'react';
import Table from '../../common/table/ParseTable';
import { Tooltip, Button } from 'antd';
import DragModal from '../../common/drag/DragModal';
import PropertyForm from '../property/PropertyForm';
import language from '@/locale/language';
var _language$changeHisto = language.changeHistory,
    title = _language$changeHisto.title,
    fields = _language$changeHisto.fields,
    common = language.common;
var columns = [{
  title: fields.ACTION,
  dataIndex: 'ACTION',
  width: 100
}, {
  title: fields.cuser,
  dataIndex: 'cuser',
  width: 100
}, {
  title: fields.ctime,
  dataIndex: 'ctime',
  width: 150
}, {
  title: fields.DETAILS,
  dataIndex: 'DETAILS',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}];
var pageFieldList = [];
columns.forEach(function (item) {
  if (item.dataIndex === 'DETAILS') {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextArea',
      editParams: JSON.stringify({
        rowHeight: 8
      })
    });
  } else {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextBox'
    });
  }
});
export default (function (WrappedComponent) {
  return function (props) {
    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = useState(null),
        _useState4 = _slicedToArray(_useState3, 2),
        record = _useState4[0],
        setRecord = _useState4[1];

    var dataList = props.model.dataList;

    var onRow = function onRow(record) {
      return {
        onDoubleClick: function onDoubleClick() {
          setRecord(record);
          setVisible(true);
        }
      };
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/React.createElement(WrappedComponent, props), /*#__PURE__*/React.createElement(Table, {
      dataList: dataList,
      columns: columns,
      onRow: onRow
    }), /*#__PURE__*/React.createElement(DragModal, {
      title: title,
      visible: visible,
      footer: /*#__PURE__*/React.createElement(Button, {
        key: "submit",
        type: "primary",
        onClick: function onClick() {
          return setVisible(false);
        }
      }, common.close),
      onCancel: function onCancel() {
        return setVisible(false);
      }
    }, /*#__PURE__*/React.createElement(PropertyForm, {
      record: record,
      pageFieldList: pageFieldList
    })));
  };
});