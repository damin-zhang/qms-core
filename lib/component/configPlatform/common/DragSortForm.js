"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _language = _interopRequireDefault(require("../../../locale/language"));

var _utils = require("../../../utils/utils");

var _reactSortableHoc = require("react-sortable-hoc");

var _arrayMove = require("array-move");

var _excluded = ["className", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.navMenu.fields;

var renders = function renders(text) {
  var DragHandle = (0, _reactSortableHoc.sortableHandle)(function () {
    return /*#__PURE__*/_react.default.createElement(_icons.MenuOutlined, {
      style: {
        cursor: 'grab',
        color: '#999',
        marginRight: '8px'
      }
    });
  });
  return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(DragHandle, null), text);
};

var DragSortForm = function DragSortForm(_ref) {
  var dispatch = _ref.dispatch,
      isTree = _ref.isTree,
      namespace = _ref.namespace,
      visible = _ref.visible,
      dataList = _ref.dataList,
      isWho = _ref.isWho,
      PID = _ref.PID,
      ID = _ref.ID,
      businessSelectedRows = _ref.businessSelectedRows,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      onClose = _ref.onClose,
      objectANamespace = _ref.objectANamespace,
      objectTypes = _ref.objectTypes,
      inspectionSort = _ref.inspectionSort;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      originalArr = _useState2[0],
      setOriginalArr = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      newArr = _useState4[0],
      setNewArr = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      flag = _useState6[0],
      setFlag = _useState6[1];

  if (columns[0].dataIndex === 'index' || columns[0].dataIndex === 'rowkey') {
    columns[1].render = function (text, record, index) {
      return renders(text, record, index);
    };
  } else {
    columns[0].render = function (text, record, index) {
      return renders(text, record, index);
    };
  }

  (0, _react.useEffect)(function () {
    if (originalArr.length > 0) return;
    setOriginalArr(dataList);
  }, [dataList, originalArr]);
  var SortableItem = (0, _reactSortableHoc.sortableElement)(function (props) {
    return /*#__PURE__*/_react.default.createElement("tr", props);
  });
  var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (props) {
    return /*#__PURE__*/_react.default.createElement("tbody", props);
  });

  var onSortEnd = function onSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;

    if (oldIndex !== newIndex) {
      var newData = (0, _arrayMove.arrayMoveImmutable)([].concat(dataList), oldIndex, newIndex).filter(function (el) {
        return !!el;
      });
      setFlag(true);

      if (isWho === 'navMenu' || isWho === 'menu') {
        var newdatas = newData.filter(function (item) {
          return item.PID === dataList[oldIndex].PID;
        });
        dragSort(isWho, newdatas);
        setNewArr((0, _utils.ergodicRoot)(newData));
      } else {
        dragSort(isWho, newData);
      }
    }
  };

  var DraggableContainer = function DraggableContainer(props) {
    return /*#__PURE__*/_react.default.createElement(SortableContainer, _extends({
      useDragHandle: true,
      disableAutoscroll: true,
      helperClass: "row-dragging",
      onSortEnd: onSortEnd
    }, props));
  };

  var DraggableBodyRow = function DraggableBodyRow(_ref3) {
    var className = _ref3.className,
        style = _ref3.style,
        restProps = _objectWithoutProperties(_ref3, _excluded);

    var index = dataList.findIndex(function (x) {
      return x.ID === restProps['data-row-key'];
    });
    return /*#__PURE__*/_react.default.createElement(SortableItem, _extends({
      index: index
    }, restProps));
  };

  var synchro = function synchro(row) {
    return function () {
      dispatch({
        type: 'navMenu/synchro',
        payload: {
          row: row,
          namespace: namespace
        }
      });
      setFlag(false);
    };
  };

  var synchro2 = function synchro2(row) {
    return function () {
      dispatch({
        type: 'commonConfig/refresh',
        payload: {
          row: row,
          namespace: namespace
        }
      });
      setFlag(false);
    };
  };

  var dragSort = function dragSort(isWho, sortData) {
    if (isWho === 'navMenu') {
      dispatch({
        type: 'navMenu/reorder',
        payload: {
          hData: sortData,
          namespace: namespace
        }
      });
    } else if (isWho === 'menu') {
      dispatch({
        type: 'commonConfig/reorderItem',
        payload: {
          hData: sortData,
          namespace: namespace,
          PID: PID,
          objectTypes: objectTypes,
          objectANamespace: objectANamespace
        }
      });
    } else if (isWho === 'property' || isWho === 'grid' || isWho === 'relation') {
      dispatch({
        type: 'commonConfig/reorderRootItem',
        payload: {
          hData: sortData,
          namespace: namespace,
          rootId: ID,
          objectTypes: objectTypes
        }
      });
    } else if (!isWho) {
      dispatch({
        type: "".concat(namespace, "/packet"),
        payload: {
          sortList: sortData
        }
      });
    }
  };

  var onCancel = function onCancel() {
    if (flag && isWho) {
      dragSort(isWho, originalArr);
    } else {
      onClose();
    }

    setFlag(false);
  };

  var onCancels = function onCancels() {
    if (flag && isWho) {
      dragSort(isWho, originalArr);
      onClose();
    } else {
      onClose();
    }

    setFlag(false);
  };

  var onOks = function onOks() {
    if (flag) {
      if (!objectTypes && isWho === 'navMenu') {
        (0, _utils.confirm)({
          title: fields.synchro_drag_sort,
          onOk: synchro(newArr)
        });
      } else if (objectTypes === 'commonObject') {
        (0, _utils.confirm)({
          title: fields.synchro_drag_sort,
          onOk: synchro2(businessSelectedRows[0])
        });
      } else if (!isWho) {
        inspectionSort(dataList);
        setFlag(false);
      } else onClose();
    } else {
      onClose();
    }
  };

  var dragprops = {
    dataList: dataList,
    columns: columns,
    isTree: isTree,
    defaultExpandedRowKeys: [1],
    components: {
      body: {
        wrapper: DraggableContainer,
        row: DraggableBodyRow
      }
    },
    expandIconColumnIndex: 3
  };
  return /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    visible: visible,
    onCancel: onCancels,
    height: 500,
    width: 950,
    title: buttons.reorder,
    footer: [/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: onCancel
    }, flag && isWho ? common.recover : common.cancel), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      onClick: onOks,
      disabled: !flag
    }, common.ok))]
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, dragprops));
};

function mapStateToProps(_ref4) {
  var navMenu = _ref4.navMenu,
      menu = _ref4.menu,
      tableConfig = _ref4.tableConfig;
  return {
    navMenu: navMenu,
    menu: menu,
    businessSelectedRows: tableConfig.selectedRows
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(DragSortForm);

exports.default = _default;