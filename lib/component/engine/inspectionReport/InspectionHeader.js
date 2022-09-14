"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../utils/utils");

require("./inspectionHeader.css");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inspection = _language.default.enterInput.inspection;

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
  header = (0, _utils.ergodicRoot)((0, _utils.parseMeta)(header), '0', 'PID', 'ID');
  return /*#__PURE__*/_react.default.createElement("table", {
    width: "100%",
    className: "inspection-header"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setHeaderDisplay(!headerDisplay);
    }
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    width: "25%",
    className: "logo",
    colSpan: 2,
    rowSpan: 2
  }), /*#__PURE__*/_react.default.createElement("th", {
    width: "50%",
    colSpan: 4,
    rowSpan: 2,
    style: {
      fontSize: 18
    }
  }, data.NAME), /*#__PURE__*/_react.default.createElement("th", null, inspection.tableNO), /*#__PURE__*/_react.default.createElement("th", null, data.TABLE_NO)), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, inspection.revision), /*#__PURE__*/_react.default.createElement("th", null, data.REVISE_VAR))), /*#__PURE__*/_react.default.createElement("tbody", {
    style: {
      visibility: headerDisplay ? 'visible' : 'collapse'
    }
  }, header.map(function (item, index) {
    if (item.DIRECTION) {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, item.children && item.children.map(function (i) {
        return i.EDITPARAMS && i.EDITPARAMS.mapFields ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", {
          className: "title",
          colSpan: i.TITLE_COLSPAN || 1
        }, _utils.isEnglish ? i.ENNAME : i.NAME), /*#__PURE__*/_react.default.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        }).length ? i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        })[0].sfield : hData[i.FIELDNAME])) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", {
          className: "title",
          colSpan: i.TITLE_COLSPAN || 1
        }, _utils.isEnglish ? i.ENNAME : i.NAME), /*#__PURE__*/_react.default.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, hData[i.FIELDNAME]));
      }));
    } else {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("tr", {
        key: index
      }, item.children && item.children.map(function (i) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", {
          className: "title",
          colSpan: i.TITLE_COLSPAN || 1
        }, _utils.isEnglish ? i.ENNAME : i.NAME));
      })), /*#__PURE__*/_react.default.createElement("tr", null, item.children && item.children.map(function (i) {
        return i.EDITPARAMS && i.EDITPARAMS.mapFields ? /*#__PURE__*/_react.default.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        }).length ? i.EDITPARAMS.mapFields.filter(function (item) {
          return item.tfield === hData[i.FIELDNAME];
        })[0].sfield : hData[i.FIELDNAME]) : /*#__PURE__*/_react.default.createElement("td", {
          className: "content",
          colSpan: i.CONTENT_COLSPAN || 1
        }, hData[i.FIELDNAME]);
      })));
    }
  })));
};

var _default = InspectionHeader;
exports.default = _default;