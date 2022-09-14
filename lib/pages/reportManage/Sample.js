"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReportPage = _interopRequireDefault(require("./ReportPage"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 样件
var viewFields = _language.default.viewFields;

function Sample() {
  return /*#__PURE__*/_react.default.createElement(_ReportPage.default, {
    pageTitle: viewFields.sample,
    pageModel: 'sample'
  });
}

var _default = Sample;
exports.default = _default;