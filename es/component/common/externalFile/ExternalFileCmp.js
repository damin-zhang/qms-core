function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { PLMFileQuery } from '../../../service/applicationApi';
import TableWithBtn from '../table/TableWithBtn';
import { hideLoading, replaceLinkSql, showLoading } from '../../../utils/utils';
var list = [{
  FILETYPE: 'AutoCAD图纸',
  NAME: 'rgs691040337-A0.dwg',
  URL: 'http://192.168.58.121:8891/plm-file/RDS001/0020_6ED82CDF506744678CA1D5F06DC3AD83/R02220/IndustryDoc_TZ0103190375_F396E6E205EA45B399E2DF5312DFD953.dwg'
}, {
  FILETYPE: 'PDF 文件',
  NAME: 'rgs691040337-A0.pdf',
  URL: 'http://192.168.58.121:8891/plm-file/RDS001/0020_6ED82CDF506744678CA1D5F06DC3AD83/R02220/IndustryDoc_TZ0103190375_FD1C1CAB9C844AD799CBF9104B468465.pdf'
}];

var ExternalFileCmp = function ExternalFileCmp(_ref) {
  var engine = _ref.engine,
      model = _ref.model;
  var record = model.record,
      objectANamespace = model.objectANamespace,
      _model$clickedMenu = model.clickedMenu,
      id = _model$clickedMenu.id,
      fieldName = _model$clickedMenu.fieldName,
      condition = _model$clickedMenu.condition;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList = _useState2[0],
      setDataList = _useState2[1];

  var columns = [{
    title: '文件名',
    dataIndex: 'NAME',
    width: 80
  }, {
    title: '文件类型',
    dataIndex: 'FILETYPE',
    width: 100
  }, {
    title: 'URL',
    dataIndex: 'URL',
    render: function render(text) {
      return /*#__PURE__*/React.createElement(Button, {
        type: "link",
        size: "small",
        onClick: function onClick(e) {
          e.preventDefault();
          clickURL(text);
        }
      }, text);
    }
  }];
  useEffect(function () {
    var _PLMFileQuery;

    if (dataList.length) return;
    var fields = condition.match(/[^${}]+(?=\})/g);
    showLoading();
    PLMFileQuery((_PLMFileQuery = {
      ID: record.ID
    }, _defineProperty(_PLMFileQuery, fieldName, record[fieldName]), _defineProperty(_PLMFileQuery, "condition", fields ? replaceLinkSql(record, condition) : condition), _PLMFileQuery)).then(function (res) {
      if (res && res.flag === true) {
        setDataList(res.dataList);
      } else {
        hideLoading();
      }
    });
  }, [record, fieldName]);

  var clickURL = function clickURL(text) {
    window.open(text);
  };

  var propTable = {
    dataList: list,
    columns: columns
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableWithBtn, propTable));
};

export default ExternalFileCmp;