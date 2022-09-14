"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _charts = require("@ant-design/charts");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var viewFields = _language.default.viewFields;

var UnlineDualAxesCmp = function UnlineDualAxesCmp(_ref) {
  var data = _ref.data,
      xField = _ref.xField,
      yField = _ref.yField,
      columnColor = _ref.columnColor,
      lineColor = _ref.lineColor,
      seriesField = _ref.seriesField,
      model = _ref.model,
      pageModel = _ref.pageModel,
      pageTitle = _ref.pageTitle,
      tooltipField = _ref.tooltipField;
  var config = {};

  if (data) {
    var firstList = [];

    if (pageModel === 'sample') {
      data.map(function (item) {
        firstList.push(_objectSpread(_objectSpread({}, item), {}, {
          type: tooltipField[0].title,
          plan: item.plan
        }));
        firstList.push(_objectSpread(_objectSpread({}, item), {}, {
          type: tooltipField[1].title,
          plan: item.value
        }));
      });
    } else {
      data.map(function (item) {
        firstList.push(_objectSpread(_objectSpread({}, item), {}, {
          type: tooltipField[0].title,
          num: item.num
        }));
        firstList.push(_objectSpread(_objectSpread({}, item), {}, {
          type: tooltipField[1].title,
          num: item.qualified
        }));
      });
    }

    config = {
      data: [firstList, firstList],
      xField: xField,
      yField: yField,
      geometryOptions: [// 柱体属性
      {
        geometry: 'column',
        color: columnColor,
        isGroup: true,
        seriesField: 'type'
      }, // 折线属性
      {
        geometry: 'line',
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
            text: pageTitle,
            style: {
              fontSize: 16,
              fill: '#fff'
            }
          }
        },
        // num: {
        //   title: {
        //     text:tooltipField[0].title,
        //     textAlign: 'left',
        //     style: {
        //       fontSize: 16,
        //       fill: '#fff',
        //     },
        //     // rotate:0,
        //   },
        // },
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
      tooltip: {
        // formatter: (datum) => {
        //   if (datum.type) {
        //     return { name: datum.type, value: datum.num };
        //   } else if (datum.value) {
        //     return { name: '及时率', value: datum.value * 100 + '%' };
        //   }
        // },
        customContent: function customContent(title, data) {
          var newData = [];

          if (data.length && tooltipField.length) {
            data.map(function (item) {
              if (newData.name !== item.name) {
                newData.push(item);
              }
            });
            newData = newData.filter(function (item) {
              return item.name !== '样件检验完成周期' && item.name !== 'Sample Inspection Completion Cycle';
            });
            return "<div style='margin:10px'>\n                      <div style='margin:10px'>".concat(title, "</div>\n                      ").concat(newData.map(function (item, index) {
              if (tooltipField[index].valField === 'value' && pageModel !== 'DPPM' && pageModel !== 'sample') {
                return "<div style='color:".concat(item.color, "'>\n                            <div>").concat(item.name, "\uFF1A").concat((item.data[tooltipField[index].valField] * 100).toFixed(2) + '%', "</div>\n                          </div>");
              } else {
                return "<div style='color:".concat(item.color, "'>\n                            <div>").concat(item.name, "\uFF1A").concat(item.data[tooltipField[index].valField], "</div>\n                          </div>");
              }
            }), "\n                  </div>");
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

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_charts.DualAxes, _extends({
    style: {
      width: '90%',
      height: '85%',
      margin: 'auto'
    }
  }, config, {
    onReady: onReadyColumn
  })));
};

var _default = UnlineDualAxesCmp;
exports.default = _default;