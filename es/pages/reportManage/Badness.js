// 到货不良批次率不良率
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function Badness() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.rejectRatio,
    pageModel: 'badness'
  });
}

export default Badness;