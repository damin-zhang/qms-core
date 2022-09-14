"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

require("../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCmp = function TableCmp(_ref) {
  var dataList = _ref.dataList,
      columns = _ref.columns;
  return /*#__PURE__*/_react.default.createElement(_antd.Table, {
    size: "small",
    dataSource: dataList,
    columns: columns,
    pagination: false,
    bordered: true,
    className: "report-table-style"
  });
};

var _default = TableCmp;
exports.default = _default;