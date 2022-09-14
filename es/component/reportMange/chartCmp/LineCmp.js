function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Line } from '@ant-design/charts';
import { list } from '../larReport/mock';

var LineCmp = function LineCmp(_ref) {
  var allDate = _ref.allDate,
      FREQUENCY = _ref.FREQUENCY,
      clickEvent = _ref.clickEvent,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;

  if (allDate) {
    config = _objectSpread({
      padding: 'auto',
      forceFit: true,
      data: allDate,
      xField: FREQUENCY,
      yField: 'value',
      seriesField: 'larType',
      xAxis: {
        line: {
          style: {
            stroke: '#073C82'
          }
        },
        label: {
          style: {
            stroke: '#fff'
          }
        }
      },
      yAxis: {
        grid: {
          line: {
            style: {
              stroke: '#073C82',
              lineWidth: 1,
              lineDash: [3, 5]
            }
          }
        }
      },
      // yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
      color: ['#7030A0', '#4472C3', '#AE5952'],
      legend: {
        layout: 'horizontal',
        position: 'top'
      },
      responsive: true
    }, config);
  }

  return /*#__PURE__*/React.createElement(Line, _extends({}, config, {
    onReady: function onReady(plot) {
      if (clickEvent) {
        plot.on('plot:click', function (evt) {
          var x = evt.x,
              y = evt.y;
          var xField = plot.options.xField;
          var tooltipData = plot.chart.getTooltipItems({
            x: x,
            y: y
          });
          clickEvent(tooltipData);
        });
      }
    }
  }));
};

export default LineCmp;