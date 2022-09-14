function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
// 单柱体图表组件
import { Column } from '@ant-design/charts';

var ColumnCmp = function ColumnCmp(_ref) {
  var data = _ref.data,
      xField = _ref.xField,
      yField = _ref.yField;
  var config = {};

  if (data) {
    config = {
      data: data,
      xField: xField,
      yField: yField,
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle',
        // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: '#FFFFFF',
          opacity: 0.6
        }
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false
        }
      },
      meta: _defineProperty({
        name: {
          alias: 'IQC'
        }
      }, yField, {
        alias: '及时率',
        formatter: function formatter(datum) {
          return datum * 100 + '%';
        }
      })
    };
  }

  return /*#__PURE__*/React.createElement(Column, _extends({
    style: {
      width: '94%',
      height: '85%',
      margin: 'auto'
    }
  }, config));
};

export default ColumnCmp;