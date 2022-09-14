function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

/*
 * @Description: 搜索框
 */
import { Input } from 'antd';
import language from '@/locale/language';
var common = language.common;
var Search = Input.Search;
export default (function (props) {
  return /*#__PURE__*/React.createElement(Search, _extends({
    style: {
      marginBottom: '5px',
      flexGrow: 1
    },
    placeholder: common.search
  }, props, {
    enterButton: true
  }));
});