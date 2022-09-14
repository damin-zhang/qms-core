/*
 * @Description: 图片预览
 */
import React from 'react';
import ImagePreviewCmp from './ImagePreviewCmp';
export default (function (engine) {
  return function () {
    return function (props) {
      var model = props.model;
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(ImagePreviewCmp, model));
    };
  };
});