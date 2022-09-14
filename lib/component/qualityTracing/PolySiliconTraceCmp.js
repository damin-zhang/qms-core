"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _QualityDetailForm = _interopRequireDefault(require("./QualityDetailForm"));

var _icons = require("@ant-design/icons");

var _DetailHeadInfo = require("./DetailHeadInfo");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PolySiliconTraceCmp = function PolySiliconTraceCmp(_ref) {
  var visible = _ref.visible,
      dispatch = _ref.dispatch,
      _ref$detailList = _ref.detailList,
      detailList = _ref$detailList === void 0 ? {} : _ref$detailList;
  var yxtraceAftercureQueryList = detailList.yxtraceAftercureQueryList,
      yxtraceReceiveMaterialQueryList = detailList.yxtraceReceiveMaterialQueryList,
      yxtraceRestoreQueryList = detailList.yxtraceRestoreQueryList;

  var _useState = (0, _react.useState)([1, 2, 3, 4]),
      _useState2 = _slicedToArray(_useState, 2),
      isShow = _useState2[0],
      setIsShow = _useState2[1];

  (0, _react.useEffect)(function () {
    setIsShow(['1', '2', '3', '4']);
  }, [visible]);
  var Panel = _antd.Collapse.Panel;

  var onClose = function onClose() {
    dispatch({
      type: 'polySiliconTraceCmp/packet',
      payload: {
        BatchNodeDetail: false
      }
    });
  };

  var aftercureHeader = /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u540E\u5904\u7406\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 1;
  }) ? /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));

  var restoreHeader = /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u8FD8\u539F\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 2;
  }) ? /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));

  var receiveHeader = /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u6750\u6599\u9886\u7528\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 3;
  }) ? /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));

  var rawMaterialHeader = /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u539F\u6750\u6599\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 3;
  }) ? /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));

  var checkChange = function checkChange(key) {
    setIsShow(key);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    title: "\u591A\u6676\u7845\u4EA7\u54C1\u6279\u6B21\u660E\u7EC6",
    placement: "right",
    onClose: onClose,
    visible: visible,
    width: "100%"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Collapse, {
    activeKey: isShow,
    bordered: false,
    onChange: checkChange
  }, /*#__PURE__*/_react.default.createElement(Panel, {
    header: aftercureHeader,
    key: 1,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
    columns: _DetailHeadInfo.aftercureInfo,
    dataSource: yxtraceAftercureQueryList,
    pagination: false,
    bordered: true,
    size: "small",
    style: {
      overflow: 'scroll'
    }
  })), /*#__PURE__*/_react.default.createElement(Panel, {
    header: restoreHeader,
    key: 2,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
    columns: _DetailHeadInfo.restoreInfo,
    dataSource: yxtraceRestoreQueryList,
    pagination: false,
    bordered: true,
    size: "small",
    style: {
      overflow: 'scroll'
    }
  })), /*#__PURE__*/_react.default.createElement(Panel, {
    header: receiveHeader,
    key: 3,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/_react.default.createElement(_QualityDetailForm.default, {
    data: _DetailHeadInfo.receiveInfo,
    init: yxtraceReceiveMaterialQueryList,
    color: "#69B2EF"
  })), /*#__PURE__*/_react.default.createElement(Panel, {
    header: rawMaterialHeader,
    key: 4,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/_react.default.createElement(_QualityDetailForm.default, {
    data: _DetailHeadInfo.rawMaterialInfo,
    init: yxtraceRestoreQueryList,
    color: "#69B2EF"
  }))))));
};

function mapStateToProps(_ref2) {
  var polySiliconTraceCmp = _ref2.polySiliconTraceCmp;
  return _objectSpread({}, polySiliconTraceCmp);
}

var _default = (0, _dva.connect)(mapStateToProps)(PolySiliconTraceCmp);

exports.default = _default;