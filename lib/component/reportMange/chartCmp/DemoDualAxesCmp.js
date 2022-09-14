"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _charts = require("@ant-design/charts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DemoDualAxesCmp = function DemoDualAxesCmp(_ref) {
  var data = _ref.data,
      xField = _ref.xField,
      yField = _ref.yField,
      columnColor = _ref.columnColor,
      lineColor = _ref.lineColor,
      seriesField = _ref.seriesField,
      tooltipField = _ref.tooltipField,
      model = _ref.model,
      clickEvent = _ref.clickEvent;
  var config = {};

  if (data) {
    config = {
      data: [data, data],
      xField: xField,
      yField: yField,
      geometryOptions: [// 柱体属性
      {
        geometry: 'column',
        color: lineColor,
        isGroup: true,
        seriesField: seriesField,
        columnWidthRatio: 0.5,
        dodgePadding: 1
      }, // 折线属性
      {
        geometry: 'line',
        seriesField: seriesField,
        lineStyle: {
          lineWidth: 2,
          smooth: true
        },
        color: lineColor,
        smooth: false,
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2
          }
        }
      }],
      yAxis: {
        value: {
          tickCount: 6,
          min: 0,
          line: {
            style: {
              stroke: '#0A122E'
            }
          },
          style: {
            fill: '#fff'
          },
          title: {
            text: model,
            style: {
              fontSize: 16,
              fill: '#fff'
            }
          }
        },
        num: {
          title: {
            text: '来料数',
            textAlign: 'left',
            style: {
              fontSize: 16,
              fill: '#fff'
            } // rotate:0,

          }
        },
        iqNum: {
          title: {
            text: '检验数',
            textAlign: 'left',
            style: {
              fontSize: 16,
              fill: '#fff'
            } // rotate:0,

          }
        }
      },
      xAxis: {
        label: {
          autoRotate: true,
          autoHide: false,
          autoEllipsis: false
        }
      },
      meta: {
        value: {
          formatter: function formatter(datum) {
            return datum * 100 + '%';
          }
        }
      },
      tooltip: {
        customContent: function customContent(title, data) {
          if (data.length && tooltipField.length) {
            data = data.slice(data.length / 2);
            return "<div style='margin:10px'>\n                      <div style='margin:10px'>".concat(title, "</div>\n                      ").concat(data.map(function (item, index) {
              return tooltipField.map(function (i) {
                return "<div style='color:".concat(item.color, "'>\n                            <div>").concat(item.data.larType, " ").concat(i.title, "\uFF1A").concat(item.data[i.valField], "</div>\n                          </div>");
              });
            }), "\n                  </div>");
          }
        }
      }
    };
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_charts.DualAxes, _extends({
    style: {
      width: '90%',
      height: '85%',
      margin: 'auto'
    }
  }, config, {
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
  })));
};

var _default = DemoDualAxesCmp;
exports.default = _default;