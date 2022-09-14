/*
 * @Description: 单页面布局 faceType: 1
 */
import React from 'react';
export default (function (WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "hide-full"
    }, /*#__PURE__*/React.createElement(WrappedComponent, props));
  };
});