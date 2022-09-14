/*
 * @Description: 装配质检录入页面
 */
import React from 'react';
import EnterCmp from './EnterCmp';

var Enter = function Enter(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/React.createElement(EnterCmp, {
        engine: engine,
        props: props
      });
    };
  };
};

export default Enter;