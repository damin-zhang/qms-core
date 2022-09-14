function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// 单柱线
import React from 'react';
import { DualAxes } from '@ant-design/charts';
import { numberToFixed } from './../../../utils/utils';
import language from '@/locale/language';
var viewFields = language.viewFields;

var DualAxesCmp = function DualAxesCmp(_ref) {
  var data = _ref.data,
      xField = _ref.xField,
      yField = _ref.yField,
      columnColor = _ref.columnColor,
      lineColor = _ref.lineColor,
      model = _ref.model,
      pageModel = _ref.pageModel,
      pageTitle = _ref.pageTitle;
  var config = {};

  if (data) {
    config = {
      data: [data, data],
      xField: xField,
      yField: yField,
      geometryOptions: [// 柱体属性
      {
        geometry: 'column',
        color: columnColor,
        intervalPadding: 26
      }, // 折线属性
      {
        geometry: 'line',
        color: lineColor,
        lineStyle: {
          lineWidth: 2,
          smooth: true
        },
        smooth: true,
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
            text: pageTitle,
            style: {
              fontSize: 16,
              fill: '#fff'
            }
          }
        },
        num: {
          title: {
            text: viewFields.incomingBatches,
            textAlign: 'left',
            style: {
              fontSize: 16,
              fill: '#fff'
            } // rotate:0,

          }
        },
        plan: {
          title: {
            text: viewFields.PlanTime,
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
          alias: pageTitle,
          formatter: function formatter(datum) {
            if (pageModel === 'sample') {
              return datum;
            } else {
              return datum * 100 + '%';
            }
          }
        },
        num: {
          alias: viewFields.incomingBatches,
          formatter: function formatter(datum) {
            return datum;
          }
        },
        plan: {
          alias: viewFields.PlanTime,
          formatter: function formatter(datum) {
            return datum;
          }
        }
      },
      // legend: false,
      tooltip: {
        customContent: function customContent(title, data) {
          if (data.length) {
            if (pageModel === 'sample') {
              return "<div style='margin:10px'>\n                      <div>".concat(title, "</div>\n                      <div style='margin:10px'>\n                        <div>").concat(viewFields.incomingBatches, "\uFF1A").concat(data[0].data.plan, "</div>\n                      </div>\n                      <div >\n                        <div> ").concat(model, "\uFF1A").concat(data[0].data.value.toFixed(2), "</div>\n                      </div>\n                    </div>");
            } else {
              return "<div style='margin:10px'>\n                      <div>".concat(title, "</div>\n                      <div style='color:").concat(data[0].color, ";margin:10px'>\n                        <div> ").concat(viewFields.incomingBatches, "\uFF1A").concat(data[0].data.num, "</div>\n                      </div>\n                      <div style='color:").concat(data[0].color, "'>\n                        <div> ").concat(model, "\uFF1A").concat((data[0].data.value * 100).toFixed(2) + '%', "</div>\n                      </div>\n                    </div>");
            }
          }
        }
      }
    };
  }

  var onReadyColumn = function onReadyColumn(plot) {
    plot.on('element:click', function (args) {
      console.log(args);
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DualAxes, _extends({
    style: {
      width: '90%',
      height: '85%',
      margin: 'auto'
    }
  }, config, {
    onReady: onReadyColumn
  })));
};

export default DualAxesCmp;