/*
 * @Description: 装配质检报告页面
 */
import React from 'react';
import ReportCmp from './ReportCmp';

var Report = function Report(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/React.createElement(ReportCmp, {
        engine: engine,
        props: props
      });
    };
  };
};

export default Report;