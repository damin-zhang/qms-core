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

var _applicationApi = require("../../../service/applicationApi");

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      UCL_CL_LCL = _ref.UCL_CL_LCL,
      dataList = _ref.dataList,
      USL_LSL = _ref.USL_LSL,
      cUCL_cLCL = _ref.cUCL_cLCL,
      model = _ref.model;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList2 = _useState2[0],
      setDataList2 = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list2 = _useState6[0],
      setList2 = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      USL_LCL = _useState8[0],
      setUSL_LCL = _useState8[1];

  var _useState9 = (0, _react.useState)(240),
      _useState10 = _slicedToArray(_useState9, 2),
      meanHeight = _useState10[0],
      setMeanHeight = _useState10[1];

  var _useState11 = (0, _react.useState)(240),
      _useState12 = _slicedToArray(_useState11, 2),
      standardHeight = _useState12[0],
      setStandardHeight = _useState12[1];

  var config = {};
  var standardDeviation = {};
  var clickedMenu = model.clickedMenu,
      namespace = model.namespace,
      isFull = model.isFull;
  var implClass = clickedMenu.implClass,
      objectNo = clickedMenu.objectNo,
      hData = clickedMenu.values.hData;
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
    if (list) {
      var newList = list.map(function (item) {
        return {
          R: item.TV
        };
      });
      setList2(newList);
    }
  }, [list]);

  if (UCL_CL_LCL && dataList) {
    var dataMax = Math.max.apply(Math, dataList.map(function (o) {
      return o.MEAN_VALUE;
    }));
    if (cUCL_cLCL[0] > dataMax) dataMax = cUCL_cLCL[0];
    var dataMin = Math.min.apply(Math, dataList.map(function (o) {
      return o.MEAN_VALUE;
    }));
    if (cUCL_cLCL[2] < dataMin) dataMin = cUCL_cLCL[2];
    var min = UCL_CL_LCL[UCL_CL_LCL.length - 1];
    var max = UCL_CL_LCL[0];
    config = {
      data: [dataList, dataList2],
      appendPadding: [16, 36, 16],
      xField: 'INDEX',
      yField: ['MEAN_VALUE', 'F'],
      grid: false,
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
          tickCount: 10,
          min: dataMin < min ? dataMin : min,
          max: dataMax > max ? dataMax : max,
          line: {
            style: {
              stroke: '#0A122E'
            }
          },
          label: {
            formatter: function formatter(datum) {
              return parseFloat(datum).toFixed(4);
            }
          }
        },
        F: false
      },
      meta: {
        MEAN_VALUE: {
          sync: 'F'
        },
        F: {
          sync: true
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
        MEAN_VALUE: [// {
        //   type: 'line',
        //   top: true,
        //   start: ['min', USL_LSL[0]],
        //   end: ['max', USL_LSL[0]],
        //   text: {
        //     position: 'start',
        //     content: 'USL',
        //     autoRotate: false,
        //     style: {
        //       fontSize: 18,
        //       fontWeight: 500,
        //       fill: '#032378',
        //       textAlign: 'start',
        //       textBaseline: 'right',
        //     },
        //   },
        //   style: {
        //     stroke: 'yellow',
        //   },
        // },
        // {
        //   type: 'line',
        //   top: true,
        //   start: ['min', USL_LSL[1]],
        //   end: ['max', USL_LSL[1]],
        //   text: {
        //     position: 'start',
        //     content: 'LSL',
        //     autoRotate: false,
        //     style: {
        //       fontSize: 18,
        //       fontWeight: 500,
        //       fill: '#032378',
        //       textAlign: 'start',
        //       textBaseline: 'right',
        //     },
        //   },
        //   style: {
        //     stroke: 'yellow',
        //   },
        // },
        {
          type: 'line',
          top: true,
          start: ['min', UCL_CL_LCL[6]],
          end: ['max', UCL_CL_LCL[6]],
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
          start: ['min', UCL_CL_LCL[3]],
          end: ['max', UCL_CL_LCL[3]],
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
          start: ['min', UCL_CL_LCL[0]],
          end: ['max', UCL_CL_LCL[0]],
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
          type: 'line',
          top: true,
          start: ['min', cUCL_cLCL[0]],
          end: ['max', cUCL_cLCL[0]],
          text: {
            content: 'cUCL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#F77C21',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#F77C21'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', cUCL_cLCL[1]],
          end: ['max', cUCL_cLCL[1]],
          style: {
            stroke: '#F77C21'
          }
        }, {
          type: 'line',
          top: true,
          start: ['min', cUCL_cLCL[2]],
          end: ['max', cUCL_cLCL[2]],
          text: {
            content: 'cLCL',
            position: 'end',
            autoRotate: false,
            style: {
              fontSize: 18,
              fontWeight: 500,
              fill: '#F77C21',
              textAlign: 'start',
              textBaseline: 'right'
            }
          },
          style: {
            stroke: '#F77C21'
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

  if (USL_LCL) {
    var listMax = Math.max.apply(Math, dataList.map(function (o) {
      return o.TV;
    }));
    var listMin = Math.min.apply(Math, dataList.map(function (o) {
      return o.TV;
    }));
    var _min = USL_LCL[USL_LCL.length - 1];
    var _max = USL_LCL[0];
    standardDeviation = {
      data: [list, list2],
      padding: [16, 36, 16],
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
          min: listMin < _min ? listMin : _min,
          max: listMax > _max ? listMax : _max,
          line: {
            style: {
              stroke: '#0A122E'
            }
          }
        },
        R: false
      },
      meta: {
        TV: {
          sync: 'R'
        },
        R: {
          sync: true
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
        }]
      }
    };
  }

  var dragModal = document.querySelector(".dragModal-".concat(namespace));
  (0, _react.useEffect)(function () {
    var val = {
      objectNo: objectNo,
      implClass: implClass,
      hData: hData
    };
    (0, _utils.showLoading)();
    (0, _applicationApi.commonApi)(val).then(function (data) {
      if (data) {
        dispatch({
          type: 'spcControlChart/spcMeanValue',
          payload: {
            data: data
          }
        });
      }
    });

    if (isFull && dragModal) {
      if (USL_LCL) {
        setMeanHeight((dragModal.offsetHeight - 80 - 102 - 64 - 50) / 2);
        setStandardHeight((dragModal.offsetHeight - 102 - 80 - 64 - 50) / 2);
      } else if (UCL_CL_LCL) {
        setMeanHeight(dragModal.offsetHeight - 80 - 102 - 60);
      }
    } else {
      if (USL_LCL) {
        setMeanHeight(240);
        setStandardHeight(240);
      } else if (UCL_CL_LCL) {
        setMeanHeight(240);
      }
    }
  }, [isFull]);
  (0, _react.useEffect)(function () {
    if (isFull && dragModal) {
      if (USL_LCL) {
        var val = {
          objectNo: objectNo,
          implClass: implClass,
          hData: hData
        };
        (0, _utils.showLoading)();
        (0, _applicationApi.commonApi)(val).then(function (data) {
          if (data) {
            dispatch({
              type: 'spcControlChart/spcMeanValue',
              payload: {
                data: data
              }
            });
          }
        });
        setMeanHeight((dragModal.offsetHeight - 80 - 102 - 64 - 50) / 2);
        setStandardHeight((dragModal.offsetHeight - 102 - 80 - 64 - 50) / 2);
      } else if (UCL_CL_LCL) {
        setMeanHeight(dragModal.offsetHeight - 80 - 102 - 60);
      }
    } else {
      if (USL_LCL) {
        setMeanHeight(240);
        setStandardHeight(240);
      } else if (UCL_CL_LCL) {
        setMeanHeight(240);
      }
    }
  }, [USL_LCL]);

  var onReadyColumn = function onReadyColumn(plot) {
    var hoverData = {};
    plot.on('plot:click', function (ev) {
      var val = {
        hData: [hoverData],
        implClass: 'slm.spc.QueryInspectItemStandardDeviationEvent',
        objectNo: 'SLM_SPC_DATA'
      };
      (0, _utils.showLoading)();
      (0, _applicationApi.commonApi)(val).then(function (res) {
        if (res && res.flag) {
          var _dataList = res.dataList,
              USL_CL_LCL = res.USL_CL_LCL;

          var data = _dataList.map(function (item, index) {
            return _objectSpread(_objectSpread({}, item), {}, {
              TV: Number(item.TV)
            });
          });

          setList(data);
          setUSL_LCL(USL_CL_LCL);
        }

        (0, _utils.hideLoading)();
      });
    });
    plot.on('tooltip:change', function (ev) {
      hoverData = ev.data.items[0].data;
    });
  };

  var onFinish = function onFinish(value) {
    if (value.keyWord) {
      value.keyWord = [(0, _moment.default)(value.keyWord[0]).format(dateFormat), (0, _moment.default)(value.keyWord[1]).format(dateFormat)];
    }

    var val = _objectSpread(_objectSpread({}, value), {}, {
      hData: hData,
      implClass: implClass,
      objectNo: objectNo
    });

    (0, _utils.showLoading)();
    (0, _applicationApi.commonApi)(val).then(function (data) {
      if (data && data.flag) {
        dispatch({
          type: 'spcControlChart/spcMeanValue',
          payload: {
            data: data
          }
        });
      }

      (0, _utils.hideLoading)();
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      background: '#E9F5F8'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'left',
      padding: '16px 10px 0px',
      border: '1px solid #4EB1F3'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '25%'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, _utils.isEnglish ? 'Supplier Code' : '供应商代码'), " \uFF1A", ' ', /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#3FA5E9'
    }
  }, hData[0].SUPPLIER_CODE || '')), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '25%'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, _utils.isEnglish ? 'Supplier Name' : '供应商名称'), "\uFF1A", ' ', /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#3FA5E9'
    }
  }, hData[0].SUPPLIER_NAME)), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '25%'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, _utils.isEnglish ? 'Material Code' : '物料编码'), "\uFF1A", ' ', /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#3FA5E9'
    }
  }, hData[0].MATERIAL_CODE)), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '25%'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, _utils.isEnglish ? 'Inspection Item' : '检验项目'), "\uFF1A", ' ', /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: '#3FA5E9'
    }
  }, hData[0].CDOIT)), /*#__PURE__*/_react.default.createElement(_antd.Form, {
    onFinish: onFinish,
    form: form,
    layout: "inline",
    style: {
      marginTop: '14px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "keyWord",
    format: dateFormat
  }, /*#__PURE__*/_react.default.createElement(RangePicker, {
    format: dateFormat,
    showTime: {
      hideDisabledOptions: true
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
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
  }, "\u91CD\u7F6E")))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 'calc(100% - 102px)'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '16px',
      background: '#BFFFBF'
    }
  }, UCL_CL_LCL && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontWeight: 'bold',
      color: '#032378'
    }
  }, _utils.isEnglish ? 'Mean Value' : '均值')), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "".concat(meanHeight, "px"),
      background: ''
    }
  }, /*#__PURE__*/_react.default.createElement(_charts.DualAxes, _extends({}, config, {
    onReady: onReadyColumn
  }))))), USL_LCL && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: '#BFFFBF'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontWeight: 'bold',
      color: '#1F3D87'
    }
  }, _utils.isEnglish ? 'Standard Deviation' : '标准差')), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "".concat(standardHeight, "px")
    }
  }, /*#__PURE__*/_react.default.createElement(_charts.DualAxes, standardDeviation)))));
};

function mapStateToProps(_ref2) {
  var spcControlChart = _ref2.spcControlChart;
  return _objectSpread({}, spcControlChart);
}

var _default = (0, _dva.connect)(mapStateToProps)(ControlChartSPC);

exports.default = _default;