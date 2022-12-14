"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

var _reactWindow = require("react-window");

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

var VirtualTable = function VirtualTable(props) {
  var columns = props.columns,
      scroll = props.scroll;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tableWidth = _useState2[0],
      setTableWidth = _useState2[1];

  var widthColumnCount = columns.filter(function (_ref) {
    var width = _ref.width;
    return !width;
  }).length;
  var mergedColumns = columns.map(function (column) {
    if (column.width) {
      return column;
    }

    return _objectSpread(_objectSpread({}, column), {}, {
      width: Math.floor(tableWidth / widthColumnCount)
    });
  });
  var gridRef = (0, _react.useRef)();

  var _useState3 = (0, _react.useState)(function () {
    var obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: function get() {
        if (gridRef.current) {
          return gridRef.current && gridRef.current.state && gridRef.current.state.scrollLeft;
        }

        return null;
      },
      set: function set(scrollLeft) {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft: scrollLeft
          });
        }
      }
    });
    return obj;
  }),
      _useState4 = _slicedToArray(_useState3, 1),
      connectObject = _useState4[0];

  var resetVirtualGrid = function resetVirtualGrid() {
    console.log(gridRef);
    console.log(gridRef.current);
    if (!gridRef.current) return;
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true
    });
  };

  (0, _react.useEffect)(function () {
    return resetVirtualGrid;
  }, [tableWidth]);

  var renderVirtualList = function renderVirtualList(rawData, _ref2) {
    var scrollbarSize = _ref2.scrollbarSize,
        ref = _ref2.ref,
        _onScroll = _ref2.onScroll;
    ref.current = connectObject;
    var totalHeight = rawData.length * 53;
    return /*#__PURE__*/_react.default.createElement(_reactWindow.VariableSizeGrid, {
      ref: gridRef,
      className: "virtual-grid",
      columnCount: mergedColumns.length,
      columnWidth: function columnWidth(index) {
        var width = mergedColumns[index].width;
        return totalHeight > scroll.y && index === mergedColumns.length - 1 ? width - scrollbarSize - 1 : width;
      },
      height: scroll.y,
      rowCount: rawData.length,
      rowHeight: function rowHeight() {
        return 53;
      },
      width: tableWidth,
      onScroll: function onScroll(_ref3) {
        var scrollLeft = _ref3.scrollLeft;

        _onScroll({
          scrollLeft: scrollLeft
        });
      }
    }, function (_ref4) {
      var columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex,
          style = _ref4.style;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('virtual-table-cell', {
          'virtual-table-cell-last': columnIndex === mergedColumns.length - 1
        }),
        style: style
      }, rawData[rowIndex][mergedColumns[columnIndex].dataIndex]);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_rcResizeObserver.default, {
    onResize: function onResize(_ref5) {
      var width = _ref5.width;
      setTableWidth(width);
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Table, _extends({}, props, {
    className: "virtual-table",
    columns: mergedColumns,
    pagination: false,
    components: {
      body: renderVirtualList
    }
  })));
};

var _default = VirtualTable;
exports.default = _default;