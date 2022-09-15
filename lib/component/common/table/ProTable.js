"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _proTable = _interopRequireDefault(require("@ant-design/pro-table"));

var _icons = require("@ant-design/icons");

var _utils = require("react-base-table/lib/utils");

var _umi = require("umi");

var _language = _interopRequireDefault(require("@/locale/language"));

var _AntdPagination = _interopRequireDefault(require("./AntdPagination"));

var _utils2 = require("../../../utils/utils");

var _buttonFunc = require("../../../utils/buttonFunc");

var _classnames = _interopRequireDefault(require("classnames"));

var _antd = require("antd");

var _mapParams = require("../../../utils/mapParams");

var _EnMapParams = require("../../../utils/EnMapParams");

var _excluded = ["width", "height", "columns", "data", "paging", "showPagination", "children", "rowEventHandlers", "rowSelection", "canDrag", "showSubPage", "operationColmun", "showDetails", "selectionColumnProps", "dataLength", "handleSelectedData", "model", "engine", "hasBtn", "isLoading", "setLoading", "getProcessList", "editable"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fields = _language.default.configPlatform.navMenu.fields;
var Item = _antd.Menu.Item;

var AntdProTable = function AntdProTable(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      columnsStateMap = _useState2[0],
      setColumnsStateMap = _useState2[1];

  var _useState3 = (0, _react.useState)('100%'),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollY = _useState4[0],
      setScrollY = _useState4[1];

  var width = props.width,
      height = props.height,
      columns = props.columns,
      data = props.data,
      paging = props.paging,
      _props$showPagination = props.showPagination,
      showPagination = _props$showPagination === void 0 ? false : _props$showPagination,
      children = props.children,
      rowEventHandlers = props.rowEventHandlers,
      rowSelection = props.rowSelection,
      canDrag = props.canDrag,
      showSubPage = props.showSubPage,
      operationColmun = props.operationColmun,
      showDetails = props.showDetails,
      selectionColumnProps = props.selectionColumnProps,
      dataLength = props.dataLength,
      handleSelectedData = props.handleSelectedData,
      _props$model = props.model,
      model = _props$model === void 0 ? {} : _props$model,
      _props$engine = props.engine,
      engine = _props$engine === void 0 ? {} : _props$engine,
      hasBtn = props.hasBtn,
      isLoading = props.isLoading,
      setLoading = props.setLoading,
      getProcessList = props.getProcessList,
      editable = props.editable,
      rest = _objectWithoutProperties(props, _excluded);

  var pageNo = engine.pageNo,
      tableName = engine.tableName,
      objectGrid = engine.objectGrid,
      namespace = engine.namespace;
  var objectAPageNo = model.objectAPageNo,
      objectNo = model.objectNo,
      params = model.params,
      condition = model.condition,
      sortFields = model.sortFields;
  if (engine && engine.objectGrid && engine.objectGrid.noTableToolbar) rest.toolBarRender = false;
  /* 表格列超出20列隐藏显示 */

  (0, _react.useEffect)(function () {
    var key = showSubPage ? pageNo : objectAPageNo + objectNo;
    var columns = localStorage.getItem(key); // 是否有缓存

    if (columns) {
      var _columnsStateMap = JSON.parse(columns);

      setColumnsStateMap(_columnsStateMap);
    } else if (props.columns.length > 20) {
      var _columnsStateMap2 = {};

      for (var i = 20; i < props.columns.length; i++) {
        _columnsStateMap2[props.columns[i].dataIndex] = {
          show: false
        };
      }

      setColumnsStateMap(_columnsStateMap2);
    }
  }, [model]);
  (0, _react.useEffect)(function () {
    if (model && model.modelData) {
      var ref = model.namespace;
      var tableHeight = document.querySelector(".".concat(ref)).offsetHeight;
      var tableHeadHeight = document.querySelector(".".concat(ref, " .ant-table-header")).offsetHeight;
      var tableBody = document.querySelector(".".concat(ref, " .ant-table-body"));
      tableBody.style.height = tableHeight - tableHeadHeight + 'px';
      setScrollY(tableHeight - tableHeadHeight);
    }
  }, [model]);
  var showPaging = paging ? paging.showPaging : false;
  var showSystemSubarea = params ? params.systemSubarea : false;
  var newState = _utils2.isEnglish ? _EnMapParams.state : _mapParams.state; // you'd better memoize this operation

  var _columns = columns || (0, _utils.normalizeColumns)(children);

  var selectionColumn = null;

  if (rowSelection && rowSelection.onChange) {
    var frozenProps = null;

    if (!canDrag) {
      frozenProps = {
        fixed: 'left'
      };
    }

    var type = rowSelection.type,
        lodding = rowSelection.lodding,
        selectedRowKeys = rowSelection.selectedRowKeys;
    selectionColumn = lodding === false ? _objectSpread(_objectSpread({
      title: _utils2.isEnglish ? 'Operation' : '操作',
      columnWidth: 80
    }, frozenProps), {}, {
      render: function render() {
        return operationColmun;
      }
    }, rowSelection) : _objectSpread(_objectSpread({
      type: type === 'radio' ? 'radio' : 'checkbox',
      columnWidth: 40,
      width: 40
    }, frozenProps), {}, {
      getCheckboxProps: function getCheckboxProps(record) {
        return {// disabled: record.children && record.children.length !== 0  // 如果选中的数据有children，禁用复选框
        };
      }
    }, rowSelection);
    var _objectGrid = engine.objectGrid;

    if (_objectGrid && _objectGrid.gridOperation && _objectGrid.gridOperation.length) {
      var len = _objectGrid.gridOperation.length;
      var R = _objectGrid.gridOperation.some(function (item) {
        return item === 1;
      }) && showSubPage;

      var P = _objectGrid.gridOperation.some(function (item) {
        return item === 2;
      });

      if (R || showDetails || P) {
        var _operationColmun = _objectSpread(_objectSpread({
          title: _utils2.isEnglish ? 'Operation' : '操作',
          width: _objectGrid.gridOperation.some(function (item) {
            return item === 1;
          }) ? showSubPage ? 65 * len : 65 * len - 50 : 65 * len,
          flexShrink: 0,
          resizable: false,
          fixed: 'right',
          align: 'center',
          render: function render(text, record) {
            return /*#__PURE__*/_react.default.createElement("div", {
              style: {
                display: 'flex',
                justifyContent: 'space-around'
              }
            }, R && /*#__PURE__*/_react.default.createElement("a", {
              style: {
                padding: '0 7px',
                borderRadius: '2px',
                backgroundColor: 'rgb(24, 144, 255)',
                color: '#fff',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word'
              },
              className: "ant-dropdown-link",
              onClick: function onClick() {
                showSubPage([record]);
              }
            }, _utils2.isEnglish ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
              title: "Relation"
            }, len <= 1 ? 'Relation' : 'R') : '关联'), showDetails && /*#__PURE__*/_react.default.createElement("a", {
              style: {
                padding: '0 7px',
                borderRadius: '2px',
                backgroundColor: 'rgb(24, 144, 255)',
                color: '#fff',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word'
              },
              className: "ant-dropdown-link",
              onClick: showDetails
            }, _utils2.isEnglish ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
              title: "Detail"
            }, len <= 1 ? 'Detail' : 'D') : '明细'), P && /*#__PURE__*/_react.default.createElement("a", {
              style: {
                padding: '0 7px',
                borderRadius: '2px',
                backgroundColor: 'rgb(24, 144, 255)',
                color: '#fff',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-word'
              },
              className: "ant-dropdown-link",
              onClick: function onClick() {
                return getProcessList(record);
              }
            }, _utils2.isEnglish ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
              title: "The Process Of History"
            }, 'TPOH') : '流程历史'));
          }
        }, selectionColumnProps), {}, {
          key: '__operation__',
          rowKey: props.rowKey,
          selectedRowKeys: selectedRowKeys,
          dataLength: dataLength,
          onKeyUp: handleSelectedData
        });

        _columns = [].concat(_toConsumableArray(_columns), [_operationColmun]);
      }
    }
  }

  var columnChange = function columnChange(map, ColumnsState) {
    // 缓存表格列
    setColumnsStateMap(map);
    var key = showSubPage ? pageNo : objectAPageNo + objectNo;
    localStorage.setItem(key, JSON.stringify(map));
  }; //【系统分区】为true时，根据【状态】值类筛选数据


  var changeState = function changeState(state) {
    return function () {
      var dva = (0, _umi.getDvaApp)();

      dva._store.dispatch({
        type: 'common/querySingleData',
        payload: {
          namespace: namespace,
          tableName: tableName,
          objectGridNo: objectGrid.no,
          condition: condition ? condition + " AND STATE=" + state : " STATE=" + state,
          sortFields: sortFields
        }
      });
    };
  }; //【系统分区】下拉选项


  var menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    selectable: true
  }, newState.map(function (item, index) {
    var itemKey = index;
    return /*#__PURE__*/_react.default.createElement(Item, {
      key: itemKey,
      value: item.value,
      onClick: changeState(itemKey)
    }, item.name);
  }));

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_proTable.default, _extends({
    editable: editable,
    search: false,
    tableAlertRender: false,
    columns: _columns,
    dataSource: data,
    loading: isLoading,
    defaultSize: "small",
    scroll: {
      x: width || '100%',
      y: height || scrollY
    },
    ellipsis: true,
    rowSelection: _objectSpread({}, selectionColumn)
  }, rest, {
    hideOnSinglePage: true,
    pagination: showPagination,
    columnsState: {
      value: columnsStateMap,
      onChange: columnChange
    },
    className: (0, _classnames.default)([showPaging ? "".concat(props.className || 'ant-list', " manual-paging ").concat(engine && engine.supQuery || engine.pageMenus && engine.pageMenus.length || engine.relationMenuList || hasBtn ? 'has-btn' : 'has-btn') : showPagination ? "".concat(props.className, " auto-paging ").concat(engine && engine.supQuery || engine.pageMenus && engine.pageMenus.length || engine.relationMenuList || hasBtn ? 'has-btn' : 'has-btn') : "".concat(props.className, " no-paging ").concat(engine && engine.supQuery || engine.pageMenus && engine.pageMenus.length || engine.relationMenuList || hasBtn ? 'has-btn' : 'has-btn'), model && model.modelData ? model.namespace : null]),
    onRow: function onRow(record) {
      return {
        onClick: function onClick(e) {
          rowEventHandlers.onClick({
            rowData: record,
            event: e
          });
        },
        onDoubleClick: function onDoubleClick() {
          if (!model || !model.modelData) return;
          var objectShortcutsMenus = model.modelData.objectShortcutsMenus;
          objectShortcutsMenus && objectShortcutsMenus.length && (0, _buttonFunc.clickBtn)(objectShortcutsMenus[0], engine, model);
        },
        onContextMenu: function onContextMenu(e) {
          rowEventHandlers.onContextMenu({
            rowData: record,
            event: e
          });
        },
        onKeyUp: function onKeyUp(e) {
          rowEventHandlers.onKeyUp({
            event: e
          });
        }
      };
    },
    toolbar: {
      className: showSystemSubarea && 'systemSubareaCss',
      actions: [showSystemSubarea && /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: fields.systemSubarea
      }, /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
        key: "menu",
        overlay: menu
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        key: "key",
        type: "primary"
      }, /*#__PURE__*/_react.default.createElement(_icons.AppstoreOutlined, null))))]
    }
  })), /*#__PURE__*/_react.default.createElement(_AntdPagination.default, {
    paging: _objectSpread({}, paging),
    setLoading: setLoading
  }));
};

var _default = AntdProTable;
exports.default = _default;