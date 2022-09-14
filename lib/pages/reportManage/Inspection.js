"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReportPage = _interopRequireDefault(require("./ReportPage"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 样件抽检批次比例
var viewFields = _language.default.viewFields;

function Inspection() {
  return /*#__PURE__*/_react.default.createElement(_ReportPage.default, {
    pageTitle: viewFields.inspection,
    pageModel: 'inspection'
  });
}

var _default = Inspection;
exports.default = _default;