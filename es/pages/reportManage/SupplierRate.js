// 供应商达标
import React from 'react';
import ReportPage from './ReportPage';
import language from '@/locale/language';
var viewFields = language.viewFields;

function SupplierRate() {
  return /*#__PURE__*/React.createElement(ReportPage, {
    pageTitle: viewFields.supplierRate,
    pageModel: 'supplierRate'
  });
}

export default SupplierRate;