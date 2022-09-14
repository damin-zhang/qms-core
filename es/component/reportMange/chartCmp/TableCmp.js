import { Table } from 'antd';
import React from 'react';
import '../index.css';

var TableCmp = function TableCmp(_ref) {
  var dataList = _ref.dataList,
      columns = _ref.columns;
  return /*#__PURE__*/React.createElement(Table, {
    size: "small",
    dataSource: dataList,
    columns: columns,
    pagination: false,
    bordered: true,
    className: "report-table-style"
  });
};

export default TableCmp;