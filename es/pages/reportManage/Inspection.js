// 样件抽检批次比例
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function Inspection() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.inspection,
    pageModel: 'inspection'
  });
}

export default Inspection;