function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useRef, useState } from 'react';
import zhCN from 'x-data-spreadsheet/src/locale/zh-cn';
import Spreadsheet from 'x-data-spreadsheet';
Spreadsheet.locale('zh-cn', zhCN);

var sheetTemplate = function sheetTemplate() {
  var excelRef = useRef(null);

  var _useState = useState([{
    name: '测试sheet1',
    rows: {
      0: {
        cells: {
          0: {
            text: 'ABC'
          },
          1: {
            text: '哈哈哈'
          }
        }
      },
      1: {
        cells: {
          0: {
            text: '这是第二行A2'
          },
          1: {
            text: '哈哈哈'
          }
        }
      }
    }
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      excelData = _useState2[0],
      setExcelData = _useState2[1];

  useEffect(function () {
    console.log(excelRef.current);
    var s = new Spreadsheet(excelRef.current, {
      view: {
        height: function height() {
          return excelRef.current && excelRef.current.clientHeight;
        },
        width: function width() {
          return excelRef.current && excelRef.current.clientWidth;
        }
      }
    });
    s.loadData(excelData);
    s.change(function (data) {
      console.log(s.getData());
      console.log(data);
      setExcelData(data);
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "sheetTemplate"), /*#__PURE__*/React.createElement("div", {
    ref: excelRef,
    style: {
      width: '100%',
      height: 'calc(100% - 33px)'
    }
  }));
};

export default sheetTemplate;