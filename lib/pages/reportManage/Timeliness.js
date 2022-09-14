"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReportPage = _interopRequireDefault(require("./ReportPage"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 检验及时率页面 */
var viewFields = _language.default.viewFields;

function trAllMaterial() {
  return /*#__PURE__*/_react.default.createElement(_ReportPage.default, {
    pageTitle: viewFields.InspectionTimeliness,
    pageModel: 'timeliness'
  });
}

var _default = trAllMaterial;
exports.default = _default;