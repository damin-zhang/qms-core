// spc控制图
import React from 'react';
import SpcControlChartCmp from './SpcControlChartCmp';
export default (function (engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(WrappedComponent, props), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SpcControlChartCmp, props)));
    };
  };
});