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

var ReportFooter = function ReportFooter(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? [] : _ref$footer,
      _ref$hData = _ref.hData,
      hData = _ref$hData === void 0 ? {} : _ref$hData;
  if (!footer.length) return null;
  footer = (0, _utils.parseMeta)(footer);
  var len = footer.length;
  return /*#__PURE__*/_react.default.createElement("table", {
    width: "100%",
    className: "inspection-header"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, footer.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("td", {
      key: index,
      className: "title",
      style: {
        width: "".concat(1 / len * 100, "%")
      }
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  })), /*#__PURE__*/_react.default.createElement("tr", null, footer.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.EDITPARAMS && item.EDITPARAMS.values ? /*#__PURE__*/_react.default.createElement("td", {
      className: "content",
      style: {
        width: "".concat(1 / len * 100, "%")
      }
    }, item.EDITPARAMS.values.filter(function (i) {
      return i.key === hData[item.FIELDNAME] || i.name === hData[item.FIELDNAME];
    }).length ? item.EDITPARAMS.values.filter(function (i) {
      return i.key === hData[item.FIELDNAME] || i.name === hData[item.FIELDNAME];
    })[0].name : hData[item.FIELDNAME]) : /*#__PURE__*/_react.default.createElement("td", {
      style: {
        width: "".concat(1 / len * 100, "%")
      },
      className: "content"
    }, hData[item.FIELDNAME]));
  }))));
};

var _default = ReportFooter;
exports.default = _default;