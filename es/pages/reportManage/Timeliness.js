/* 检验及时率页面 */
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function trAllMaterial() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.InspectionTimeliness,
    pageModel: 'timeliness'
  });
}

export default trAllMaterial;