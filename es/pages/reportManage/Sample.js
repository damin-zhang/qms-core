// 样件
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function Sample() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.sample,
    pageModel: 'sample'
  });
}

export default Sample;