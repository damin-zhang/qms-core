import React from 'react';
import { ergodicRoot, isEnglish, parseMeta } from '../../../utils/utils';
import './inspectionHeader.css';
import language from '@/locale/language';
var inspection = language.enterInput.inspection;

var InspectionHeader = function InspectionHeader(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? [] : _ref$header,
      _ref$hData = _ref.hData,
      hData = _ref$hData === void 0 ? {} : _ref$hData,
      headerDisplay = _ref.headerDisplay,
      setHeaderDisplay = _ref.setHeaderDisplay;
  if (!header.length) return null;
  header = ergodicRoot(parseMeta(header), '0', 'PID', 'ID');
  return /*#__PURE__*/React.createElement("table", {
    width: "100%",
    className: "inspection-header"
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setHeaderDisplay(!headerDisplay);
    }
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    width: "25%",
    className: "logo",
    colSpan: 2,
    rowSpan: 2
  }), /*#__PURE__*/React.createElement("th", {
    width: "50%",
    colSpan: 4,
    rowSpan: 2,
    style: {
      fontSize: 18
    }
  }, data.NAME), /*#__PURE__*/React.createElement("th", null, inspection.tableNO), /*#__PURE__*/React.createElement("th", null, data.TABLE_NO)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, inspection.revision), /*#__PURE__*/React.createElement("th", null, data.REVISE_VAR))), /*#__PURE__*/React.createElement("tbody", {
    style: {
      visibility: headerDisplay ? 'visible' : 'collapse'
    }
  }, header.map(function (item, index) {
    if (item.DIRECTION) {
      return /*#__PURE__*/React.createElement("tr", {
        key: index
      }, item.children && item.children.map(function (i) {
        return i.EDITPARAMS && i.EDITPARAMS.mapFields ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
          className: "title",
          colSpan: i.TITLE_COLSPAN || 1
        }, isEnglish ? i.ENNAME : i.NAME), /*#__PURE__*/React.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        }).length ? i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        })[0].sfield : hData[i.FIELDNAME])) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
          className: "title",
          colSpan: i.TITLE_COLSPAN || 1
        }, isEnglish ? i.ENNAME : i.NAME), /*#__PURE__*/React.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, hData[i.FIELDNAME]));
      }));
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
        key: index
      }, item.children && item.children.map(function (i) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
          className: "title",
          colSpan: i.TITLE_COLSPAN || 1
        }, isEnglish ? i.ENNAME : i.NAME));
      })), /*#__PURE__*/React.createElement("tr", null, item.children && item.children.map(function (i) {
        return i.EDITPARAMS && i.EDITPARAMS.mapFields ? /*#__PURE__*/React.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        }).length ? i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        })[0].sfield : hData[i.FIELDNAME]) : /*#__PURE__*/React.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, hData[i.FIELDNAME]);
      })));
    }
  })));
};

export default InspectionHeader;