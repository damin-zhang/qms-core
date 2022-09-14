/*
 * @Description: 第三方页面
 */
import React from 'react';
export default (function (_ref) {
  var HyperlinkUrl = _ref.HyperlinkUrl;
  return function (WrappedComponent) {
    return function (_ref2) {
      var model = _ref2.model;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement("iframe", {
        width: "100%",
        height: "100%",
        title: '质检报告',
        id: "embedThreePartyPage",
        src: "".concat(HyperlinkUrl),
        frameBorder: '0'
      }));
    };
  };
});