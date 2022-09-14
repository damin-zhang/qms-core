import React from 'react';
import { Table } from 'antd';
import { printTraceCols } from '../../pages/qualityTracing/TableColumns';

var YpQualityDetailTable = function YpQualityDetailTable(_ref) {
  var dataList = _ref.dataList;
  return /*#__PURE__*/React.createElement(Table, {
    columns: printTraceCols,
    dataSource: dataList,
    pagination: false
  });
};

export default YpQualityDetailTable;