function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// 水波图图表组件
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

var LiquidCmp = function LiquidCmp(_ref) {
  var data = _ref.data,
      xField = _ref.xField,
      yField = _ref.yField;
  var config = {};

  if (data) {
    config = {
      percent: data[0].value,
      outline: {
        border: 4,
        distance: 8
      },
      wave: {
        length: 128
      }
    };
  }

  return /*#__PURE__*/React.createElement(Liquid, _extends({
    style: {
      width: '94%',
      height: '85%',
      margin: 'auto'
    }
  }, config));
};

export default LiquidCmp;