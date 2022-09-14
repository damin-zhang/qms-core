//  抽检数量比例
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function InspectionNum() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.inspectionNum,
    pageModel: 'inspectionNum'
  });
}

export default InspectionNum;