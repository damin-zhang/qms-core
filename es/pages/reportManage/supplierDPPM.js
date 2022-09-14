// 供应商的DPPM
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function supplierDPPM() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.dppm,
    pageModel: 'DPPM'
  });
}

export default supplierDPPM;