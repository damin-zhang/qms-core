import React from 'react';
import { ergodicRoot, isEnglish, parseMeta } from '../../../utils/utils';
import './inspectionHeader.css';
import language from '@/locale/language';
var inspection = language.enterInput.inspection;

var ReportFooter = function ReportFooter(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? [] : _ref$footer,
      _ref$hData = _ref.hData,
      hData = _ref$hData === void 0 ? {} : _ref$hData;
  if (!footer.length) return null;
  footer = parseMeta(footer);
  var len = footer.length;
  return /*#__PURE__*/React.createElement("table", {
    width: "100%",
    className: "inspection-header"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, footer.map(function (item, index) {
    return /*#__PURE__*/React.createElement("td", {
      key: index,
      className: "title",
      style: {
        width: "".concat(1 / len * 100, "%")
      }
    }, isEnglish ? item.ENNAME : item.NAME);
  })), /*#__PURE__*/React.createElement("tr", null, footer.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, item.EDITPARAMS && item.EDITPARAMS.values ? /*#__PURE__*/React.createElement("td", {
      className: "content",
      style: {
        width: "".concat(1 / len * 100, "%")
      }
    }, item.EDITPARAMS.values.filter(function (i) {
      return i.key === hData[item.FIELDNAME] || i.name === hData[item.FIELDNAME];
    }).length ? item.EDITPARAMS.values.filter(function (i) {
      return i.key === hData[item.FIELDNAME] || i.name === hData[item.FIELDNAME];
    })[0].name : hData[item.FIELDNAME]) : /*#__PURE__*/React.createElement("td", {
      style: {
        width: "".concat(1 / len * 100, "%")
      },
      className: "content"
    }, hData[item.FIELDNAME]));
  }))));
};

export default ReportFooter;