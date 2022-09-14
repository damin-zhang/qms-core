"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _utils = require("./utils");

var _utils2 = require("../../utils/utils");

var _queryDataApi = require("../../service/queryDataApi");

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LSDCmp(_ref) {
  var _ref$pageType = _ref.pageType,
      pageType = _ref$pageType === void 0 ? 'Ozone' : _ref$pageType;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList = _useState2[0],
      setDataList = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      tbodyHeight = _useState4[0],
      setTbodyHeight = _useState4[1]; // antd table body 高度


  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      fullScreen = _useState8[0],
      setFullScreen = _useState8[1]; // 全屏状态


  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      timer = _useState10[0],
      setTimer = _useState10[1]; // 定时器


  var container = (0, _react.useRef)(); // 页面容器

  (0, _react.useEffect)(function () {
    request();
  }, []);
  (0, _react.useEffect)(function () {
    var containerHeight = container.current.offsetHeight;
    var titleHeight = container.current.querySelector('h1').offsetHeight;
    var theadHeight = container.current.querySelector('.ant-table-thead').offsetHeight;
    var tbody = container.current.querySelector('.ant-table-body');
    var tableContainer = container.current.querySelector('.ant-table-wrapper');
    tableContainer.style.height = containerHeight - titleHeight + 'px';
    tbody.style.height = containerHeight - titleHeight - theadHeight + 'px';
    setTbodyHeight(containerHeight - titleHeight - theadHeight);
    initScroll();
    return function () {
      clearInterval(timer);
    };
  }, [dataList]);

  var request = function request(callback) {
    setLoading(true);
    (0, _queryDataApi.commonSingleQueryNoPaging)({
      condition: "DEL=0 AND D_STATE='A' AND PID='0' AND TYPE='0' AND MATERIAL_CN='".concat(pageType, "'"),
      objectGridNo: 'default',
      sortFields: [{
        field: 'EMERGENCY_L',
        sort: 'DESC'
      }],
      tableName: 'SLM_IQC'
    }).then(function (data) {
      if (data?.flag) {
        setDataList(data.dataList);
      }

      setLoading(false);
      if (callback) callback();
    });
  };

  var initScroll = function initScroll() {
    var tableBody = container.current.querySelector('.ant-table-body');
    var tbody = container.current.querySelector('.ant-table-tbody');
    tableBody.scrollTop = 0; // 内容高度大于容器高度才滚动

    if (tbody.offsetHeight > tableBody.offsetHeight) {
      var _timer = setInterval(function () {
        tableBody.scrollTop += 1.6;

        if (Math.ceil(tableBody.scrollTop) >= parseFloat(tableBody.scrollHeight - tableBody.offsetHeight)) {
          clearInterval(_timer);
          setTimeout(function () {
            request(function () {});
          }, 1000);
        }
      }, 100);

      setTimer(_timer);
    }
  };

  var clickFullScreen = function clickFullScreen() {
    var ele = container.current;

    if (!fullScreen) {
      if (ele.requestFullscreen) {
        ele.requestFullscreen();
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
      } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
      } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
      }

      container.current.style.position = 'fixed';
      container.current.style.left = '0';
      container.current.style.top = '0';
    } else {
      if (document.exitFullScreen) {
        document.exitFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      container.current.style.position = 'relative';
      container.current.style.left = '';
      container.current.style.top = '';
    }

    setFullScreen(!fullScreen);
    request();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "LSD",
    ref: container,
    style: {
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      background: '#fff'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: clickFullScreen,
    style: {
      position: 'absolute',
      top: '0',
      right: '5px',
      fontSize: '24px',
      cursor: 'pointer'
    }
  }, fullScreen ? /*#__PURE__*/_react.default.createElement(_icons.FullscreenExitOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.FullscreenOutlined, null)), /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      position: 'absolute',
      right: '50px',
      top: '40px',
      fontSize: 22,
      fontWeight: 600,
      color: '#d9363e'
    }
  }, "\u603B\u8BA1\uFF1A", dataList.length), /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      textAlign: 'center',
      fontSize: 42,
      color: '#1890ff',
      letterSpacing: '2px',
      fontWeight: 700,
      margin: 0,
      padding: '10px 0'
    }
  }, _utils2.isEnglish ? "".concat(pageType, " product incoming inspection form") : "".concat(pageType, " \u4EA7\u54C1\u6765\u6599\u62A5\u68C0\u5355")), /*#__PURE__*/_react.default.createElement(_antd.Table, {
    loading: loading,
    columns: _utils.flygtColumns,
    dataSource: dataList,
    pagination: false,
    scroll: {
      y: tbodyHeight
    },
    key: "ORDER_CODE"
  })));
}

var _default = LSDCmp;
exports.default = _default;