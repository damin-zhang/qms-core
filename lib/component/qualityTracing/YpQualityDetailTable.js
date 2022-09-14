"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _TableColumns = require("../../pages/qualityTracing/TableColumns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YpQualityDetailTable = function YpQualityDetailTable(_ref) {
  var dataList = _ref.dataList;
  return /*#__PURE__*/_react.default.createElement(_antd.Table, {
    columns: _TableColumns.printTraceCols,
    dataSource: dataList,
    pagination: false
  });
};

var _default = YpQualityDetailTable;
exports.default = _default;