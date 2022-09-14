"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _charts = require("@ant-design/charts");

var _moment = _interopRequireDefault(require("moment"));

var _scale = require("@antv/scale");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var dateFormat = 'YYYY-MM-DD HH:mm:ss';
var RangePicker = _antd.DatePicker.RangePicker;

var ControlChartSPC = function ControlChartSPC(_ref) {
  var dispatch = _ref.dispatch,
      USL_CL_LCL = _ref.USL_CL_LCL,
      dataList = _ref.dataList,
      USL_LSL = _ref.USL_LSL,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      USL_LCL = _ref.USL_LCL,
      list = _ref.list;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _values$objectNo = values.objectNo,
      objectNo = _values$objectNo === void 0 ? {} : _values$objectNo,
      hData = values.hData,
      implClass = values.implClass,
      objectAData = values.objectAData;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList2 = _useState2[0],
      setDataList2 = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      list2 = _useState4[0],
      setList2 = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      fieldList = _useState6[0],
      setFieldList = _useState6[1];

  (0, _react.useEffect)(function () {
    if (dataList) {
      var newList = dataList.map(function (item) {
        return {
          F: item.MEAN_VALUE
        };
      });
      setDataList2(newList);
    }
  }, [dataList]);
  (0, _react.useEffect)(function () {
    if (hData && hData.length) {
      var infoList = {};

      if (objectAData) {
        infoList.SUPPLIER_BRAND = '供应商品牌：' + objectAData.SUPPLIER_BRAND;
        infoList.SUPPLIER_NAME = '供应商品牌代码：' + objectAData.SUPPLIER_BRAND_CODE;
        infoList.MATERIAL_CODE = '物料编码：' + objectAData.MATERIAL_CODE;
        infoList.CDOIT = '检验项目' + objectAData.CDOIT;
      } else {
        infoList.SUPPLIER_BRAND = '供应商品牌：' + hData[0].SUPPLIER_BRAND;
        infoList.SUPPLIER_NAME = '供应商名称：' + hData[0].SUPPLIER_NAME;
        infoList.MATERIAL_CODE = '物料编码：' + hData[0].MATERIAL_CODE;
        infoList.CDOIT = '检验项目' + hData[0].CDOIT;
      }

      setFieldList(infoList);
    }
  }, [hData]);
  (0, _react.useEffect)(function () {
    if (list) {
      var newList = list.map(function (item) {
        return {
          R: item.TV
        };
      });
      setList2(newList);
    }
  }, [list]);
  var config = {};
  var configS = {};

  if (USL_LCL) {
    var listMax = Math.max.apply(Math, dataList.map(function (o) {
      return o.TV;
    }));
    var listMin = Math.min.apply(Math, dataList.map(function (o) {
      return o.TV;
    }));
    var min = USL_LCL[USL_LCL.length - 1];
    var max = USL_LCL[0];
    configS = {
      data: [list, list2],
      height: 240,
      appendPadding: 16,
      xField: 'NO',
      yField: ['TV', 'R'],
      tooltip: {
        title: 'NO',
        formatter: function formatter(datum) {
          return {
            name: '测试值',
            value: datum.TV
          };
        }
      },
      yAxis: {
        TV: {
          tickCount: 7,
          min: listMin < min ? listMin : min,
          max: listMax > max ? listMax : max,
          line: {
            style: {
              stroke: '#0A122E'
            }
          },
          title: {
            text: '标准差',
            textAlign: 'left',
            fontWeight: 600,
            textStyle: {
              fontWeight: '600'
            }
          }
        },
        R: {
          tickCount: 3,
          min: listMin < min ? listMin : min,
          max: listMax > max ? listMax : max,
          line: {
            style: {
              stroke: '#0A122E'
            }
          }
        }
      },
      geometryOptions: [{
        geometry: 'line',
        color: '#000',
        point: {
          shape: 'circle',
          size: 3,
          style: {
            stroke: '#000',
            fill: '#000'
          }
        }
      }, {
        geometry: 'line',
        color: '#425842'
      }],
      legend: false,
      annotations: {
        TV: [{
          type: 'line',
          top: true,
          start: ['min', USL_LCL[6]],
          end: ['max', USL_LCL[6]],
          text: {
            content: 'LCL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#032378'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', USL_LCL[3]],
          end: ['max', USL_LCL[3]],
          text: {
            content: 'CL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#032378'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', USL_LCL[0]],
          end: ['max', USL_LCL[0]],
          text: {
            content: 'UCL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#032378'
          }
        } // {
        //   type: 'regionFilter',
        //   start: ['min', USL_CL_LCL[3]],
        //   end: ['max', 'min'],
        //   color: '#F4664A',
        // },
        ]
      }
    };
  }

  if (USL_CL_LCL && dataList) {
    var dataMax = Math.max.apply(Math, dataList.map(function (o) {
      return o.MEAN_VALUE;
    }));
    var dataMin = Math.min.apply(Math, dataList.map(function (o) {
      return o.MEAN_VALUE;
    }));
    var _min = USL_CL_LCL[USL_CL_LCL.length - 1];
    var _max = USL_CL_LCL[0];
    config = {
      data: [dataList, dataList2],
      height: 240,
      appendPadding: 16,
      xField: 'INDEX',
      yField: ['MEAN_VALUE', 'F'],
      tooltip: {
        title: 'NO',
        formatter: function formatter(datum) {
          return {
            name: '均值',
            value: datum.MEAN_VALUE
          };
        }
      },
      yAxis: {
        MEAN_VALUE: {
          tickCount: 7,
          min: dataMin < _min ? dataMin : _min,
          max: dataMax > _max ? dataMax : _max,
          line: {
            style: {
              stroke: '#0A122E'
            }
          },
          title: {
            text: '均值',
            textAlign: 'left',
            textStyle: {
              fontSize: 20
            }
          }
        },
        F: {
          tickCount: 3,
          min: USL_CL_LCL[USL_CL_LCL.length - 1],
          max: USL_CL_LCL[0],
          line: {
            style: {
              stroke: '#0A122E'
            }
          }
        }
      },
      geometryOptions: [{
        geometry: 'line',
        color: '#000',
        point: {
          shape: 'circle',
          size: 3,
          style: {
            stroke: '#000',
            fill: '#000',
            zIndex: 100
          }
        }
      }, {
        geometry: 'line',
        color: '#425842'
      }],
      legend: false,
      annotations: {
        MEAN_VALUE: [{
          type: 'line',
          top: true,
          start: ['min', USL_CL_LCL[6]],
          end: ['max', USL_CL_LCL[6]],
          text: {
            content: 'LCL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#032378'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', USL_LSL[0]],
          end: ['max', USL_LSL[0]],
          text: {
            position: 'start',
            content: 'USL',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: 'yellow'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', USL_LSL[1]],
          end: ['max', USL_LSL[1]],
          text: {
            position: 'start',
            content: 'LSL',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: 'yellow'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', USL_CL_LCL[3]],
          end: ['max', USL_CL_LCL[3]],
          text: {
            content: 'CL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#032378'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', USL_CL_LCL[0]],
          end: ['max', USL_CL_LCL[0]],
          text: {
            content: 'UCL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#032378',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#032378'
          }
        }, {
          type: 'regionFilter',
          start: ['min', USL_LSL[0]],
          end: ['max', 'max'],
          color: '#F4664A'
        }, {
          type: 'regionFilter',
          start: ['min', USL_LSL[1]],
          end: ['max', 'min'],
          color: '#F4664A'
        }]
      }
    };
  }

  var onReadyColumn = function onReadyColumn(plot) {
    var hoverData = {};
    plot.on('plot:click', function (ev) {
      dispatch({
        type: 'controlChartSPC/queryControlChart',
        payload: {
          hData: [hoverData],
          implClass: 'spc.QueryInspectItemStandardDeviationEvent',
          objectNo: 'SPC_DATA'
        }
      });
    });
    plot.on('tooltip:change', function (ev) {
      hoverData = ev.data.items[0].data;
    });
  };

  var onFinish = function onFinish(value) {
    if (value.keyWord) {
      value.keyWord = [(0, _moment.default)(values.keyWord[0]).format(dateFormat), (0, _moment.default)(values.keyWord[1]).format(dateFormat)];
      delete value.keyWord;
    }

    dispatch({
      type: 'controlChartSPC/controlChartSPC',
      payload: {
        values: {
          value: value,
          hData: hData,
          implClass: implClass,
          objectNo: objectNo
        }
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'left',
      marginBottom: 6
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginRight: 30,
      fontWeight: 'bold'
    }
  }, fieldList.SUPPLIER_BRAND, ' '), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginRight: 30,
      fontWeight: 'bold'
    }
  }, fieldList.SUPPLIER_NAME), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginRight: 30,
      fontWeight: 'bold'
    }
  }, fieldList.MATERIAL_CODE), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginRight: 30,
      fontWeight: 'bold'
    }
  }, fieldList.CDOIT)), /*#__PURE__*/_react.default.createElement(_antd.Form, {
    onFinish: onFinish,
    form: form,
    layout: "inline",
    style: {
      height: '48px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "keyWord",
    format: dateFormat
  }, /*#__PURE__*/_react.default.createElement(RangePicker, {
    format: dateFormat,
    showTime: {
      hideDisabledOptions: true
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      paddingLeft: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    style: {
      padding: '0 10px'
    },
    type: "primary",
    htmlType: "submit"
  }, "\u67E5\u8BE2")), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    style: {
      padding: '0 10px'
    },
    onClick: function onClick() {
      form.resetFields();
    }
  }, "\u91CD\u7F6E"))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 'calc(100% - 50px)'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: '#BFFFBF',
      marginBottom: '20px'
    }
  }, USL_CL_LCL && /*#__PURE__*/_react.default.createElement(_charts.DualAxes, _extends({}, config, {
    onReady: onReadyColumn
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: '#BFFFBF'
    }
  }, USL_LCL && /*#__PURE__*/_react.default.createElement(_charts.DualAxes, configS))));
};

function mapStateToProps(_ref2) {
  var controlChartSPC = _ref2.controlChartSPC;
  return _objectSpread({}, controlChartSPC);
}

var _default = (0, _dva.connect)(mapStateToProps)(ControlChartSPC);

exports.default = _default;