/* 代码块渲染组件 */
import { Space } from 'antd';
import React from 'react';
import './index.css';

var CodeToRenderCmp = function CodeToRenderCmp(_ref) {
  var props = _ref.props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "codeToRender"
  }, /*#__PURE__*/React.createElement(Space, {
    style: {
      whiteSpace: 'pre-wrap'
    }
  }, props)));
};

export default CodeToRenderCmp;