function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 原材料批次追溯明细页
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Drawer, Divider, Table, Collapse } from 'antd';
import QualityDetail from './QualityDetailForm';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { checkingInfo, supplierInfo, receivingInfo, purchaseInfo } from './DetailHeadInfo';
import { hideLoading } from '../../utils/utils';

var TraceabilityDetailCmp = function TraceabilityDetailCmp(_ref) {
  var visible = _ref.visible,
      dispatch = _ref.dispatch,
      _ref$detailList = _ref.detailList,
      detailList = _ref$detailList === void 0 ? {} : _ref$detailList;
  var checkData = detailList.checkData,
      supplierData = detailList.supplierData,
      receivingList = detailList.receivingList,
      purorderList = detailList.purorderList;

  var _useState = useState([1, 2, 3, 4]),
      _useState2 = _slicedToArray(_useState, 2),
      isShow = _useState2[0],
      setIsShow = _useState2[1];

  useEffect(function () {
    setIsShow(['1', '2', '3', '4']);
    hideLoading();
  }, [visible]);
  var Panel = Collapse.Panel;

  var onClose = function onClose() {
    dispatch({
      type: 'traceabilityDetailCmp/packet',
      payload: {
        BatchNodeDetail: false
      }
    });
  };

  var checkHeader = /*#__PURE__*/React.createElement(Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u68C0\u9A8C\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 1;
  }) ? /*#__PURE__*/React.createElement(DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));
  var supplierHeader = /*#__PURE__*/React.createElement(Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u4F9B\u5E94\u5546\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 2;
  }) ? /*#__PURE__*/React.createElement(DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));
  var purchaseHeader = /*#__PURE__*/React.createElement(Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u91C7\u8D2D\u8BA2\u5355\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 3;
  }) ? /*#__PURE__*/React.createElement(DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));
  var receiveHeader = /*#__PURE__*/React.createElement(Divider, {
    className: "quality",
    style: {
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'inline-block',
      fontWeight: 700,
      color: '#096dd9',
      marginRight: '6px'
    }
  }, "\u6536\u8D27\u5355\u4FE1\u606F"), isShow.some(function (item) {
    return Number(item) === 4;
  }) ? /*#__PURE__*/React.createElement(DownOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }) : /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      color: '#096dd9',
      width: '10px'
    }
  }));

  var checkChange = function checkChange(key) {
    setIsShow(key);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Drawer, {
    title: "\u539F\u6750\u6599\u6279\u6B21\u660E\u7EC6",
    placement: "right",
    onClose: onClose,
    visible: visible,
    width: "100%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/React.createElement(Collapse, {
    activeKey: isShow,
    bordered: false,
    onChange: checkChange
  }, /*#__PURE__*/React.createElement(Panel, {
    header: checkHeader,
    key: 1,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: checkingInfo,
    dataSource: checkData,
    pagination: false,
    bordered: true,
    size: "small"
  })), /*#__PURE__*/React.createElement(Panel, {
    header: supplierHeader,
    key: 2,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/React.createElement(QualityDetail, {
    data: supplierInfo,
    init: supplierData,
    color: "#69B2EF"
  })), /*#__PURE__*/React.createElement(Panel, {
    header: purchaseHeader,
    key: 3,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/React.createElement(QualityDetail, {
    data: purchaseInfo,
    init: purorderList,
    color: "#69B2EF"
  })), /*#__PURE__*/React.createElement(Panel, {
    header: receiveHeader,
    key: 4,
    showArrow: false,
    style: {
      border: '0px',
      margin: '20px 0'
    },
    className: "colHead"
  }, /*#__PURE__*/React.createElement(QualityDetail, {
    data: receivingInfo,
    init: receivingList,
    color: "#69B2EF"
  }))))));
};

function mapStateToProps(_ref2) {
  var traceabilityDetailCmp = _ref2.traceabilityDetailCmp;
  return _objectSpread({}, traceabilityDetailCmp);
}

export default connect(mapStateToProps)(TraceabilityDetailCmp);