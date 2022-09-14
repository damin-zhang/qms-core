function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["key", "index", "children"],
    _excluded2 = ["columns", "children", "selectionColumnProps", "rowSelection", "canDrag", "dataLength", "handleSelectedData", "operationColmun", "showDetails", "dataTotal"],
    _excluded3 = ["width", "height", "columns"];

var _templateObject, _templateObject2;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * @Description: 基于react-base-table封装的table
 */
import React, { PureComponent } from 'react';
import { getDvaApp } from 'umi';
import styled from 'styled-components';
import BaseTable from 'react-base-table';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import 'react-base-table/styles.css';
import { cloneArray, callOrReturn, normalizeColumns } from 'react-base-table/lib/utils';
import AutoResizer from 'react-base-table/lib/AutoResizer';
import PropTypes from 'prop-types';
import { flattenTree, showLoading, hideLoading } from '../../../utils/utils';
import { hideContextMenu } from '../../../utils/contextMenuFunc';
import { Checkbox, Radio, message } from 'antd';
var StyledTable = styled(BaseTable)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .row-selected {\n    color: #333;\n    font-weight: bold;\n    background-color: #cee7fb;\n  }\n  .BaseTable__header-row {\n    // background: #fffff0;\n  }\n  .BaseTable__header-cell-text {\n    white-space: nowrap;\n  }\n  .BaseTable__row-cell {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .BaseTable__row-cell > span {\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .BaseTable__table-frozen-right .BaseTable__header-cell:last-child {\n    padding: 0;\n  }\n  .BaseTable__table .BaseTable__body {\n    ::-webkit-scrollbar {\n      -webkit-appearance: none;\n      background-color: #e3e3e3;\n    }\n\n    ::-webkit-scrollbar:vertical {\n      width: 12px;\n      background-color: #e3e3e3;\n    }\n\n    ::-webkit-scrollbar:horizontal {\n      height: 12px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      border-radius: 10px;\n      border: 2px solid #e3e3e3;\n      background-color: #999;\n\n      &:hover {\n        background-color: #666;\n      }\n    }\n\n    ::-webkit-resizer {\n      display: none;\n    }\n  }\n"])));
var DraggableContainer = sortableContainer(function (_ref) {
  var children = _ref.children;
  return children;
});
var DraggableElement = sortableElement(function (_ref2) {
  var children = _ref2.children;
  return children;
});
var DraggableHandle = sortableHandle(function (_ref3) {
  var children = _ref3.children;
  return children;
});
var Handle = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: none;\n  width: 7.5px;\n  height: 100%;\n\n  &::before {\n    content: '';\n    border-left: 4px dotted #ccc;\n    display: block;\n    height: 20px;\n    margin: 5px 3px;\n  }\n\n  &:hover::before {\n    border-color: #888;\n  }\n"])));

var Row = function Row(_ref4) {
  var key = _ref4.key,
      index = _ref4.index,
      children = _ref4.children,
      rest = _objectWithoutProperties(_ref4, _excluded);

  return /*#__PURE__*/React.createElement(DraggableElement, {
    key: key,
    index: index
  }, /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement(DraggableHandle, null, /*#__PURE__*/React.createElement(Handle, null)), children));
};

var SelectionCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectionCell, _PureComponent);

  var _super = _createSuper(SelectionCell);

  function SelectionCell() {
    var _this;

    _classCallCheck(this, SelectionCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this._handleChange = function (e) {
      var _this$props = _this.props,
          rowData = _this$props.rowData,
          rowIndex = _this$props.rowIndex,
          column = _this$props.column;
      var onChange = column.onChange;
      onChange({
        selected: e.target.checked,
        rowData: rowData,
        rowIndex: rowIndex
      });
    };

    _this._handleClick = function (e) {
      e.stopPropagation();
    };

    return _this;
  }

  _createClass(SelectionCell, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          rowData = _this$props2.rowData,
          column = _this$props2.column;
      var _column$selectedRowKe = column.selectedRowKeys,
          selectedRowKeys = _column$selectedRowKe === void 0 ? [] : _column$selectedRowKe,
          rowKey = column.rowKey;
      var checked = selectedRowKeys.length > 0 && selectedRowKeys.includes(rowData[rowKey]);
      return /*#__PURE__*/React.createElement(Checkbox, {
        disabled: rowData.children,
        checked: checked,
        onClick: this._handleClick,
        onChange: this._handleChange
      });
    }
  }]);

  return SelectionCell;
}(PureComponent);

var RadioSelectionCell = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RadioSelectionCell, _React$PureComponent);

  var _super2 = _createSuper(RadioSelectionCell);

  function RadioSelectionCell() {
    var _this2;

    _classCallCheck(this, RadioSelectionCell);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _this2._handleChange = function (e) {
      var _this2$props = _this2.props,
          rowData = _this2$props.rowData,
          rowIndex = _this2$props.rowIndex,
          column = _this2$props.column;
      var onChange = column.onChange;
      onChange({
        selected: e.target.checked,
        rowData: rowData,
        rowIndex: rowIndex
      });
    };

    _this2._handleClick = function (e) {
      e.stopPropagation();
    };

    return _this2;
  }

  _createClass(RadioSelectionCell, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          rowData = _this$props3.rowData,
          column = _this$props3.column;
      var _column$selectedRowKe2 = column.selectedRowKeys,
          selectedRowKeys = _column$selectedRowKe2 === void 0 ? [] : _column$selectedRowKe2,
          rowKey = column.rowKey;
      var checked = selectedRowKeys.length > 0 && selectedRowKeys.includes(rowData[rowKey]);
      return /*#__PURE__*/React.createElement(Radio, {
        checked: checked,
        onChange: this._handleChange,
        onClick: this._handleClick
      });
    }
  }]);

  return RadioSelectionCell;
}(React.PureComponent);

var SelectionHeader = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(SelectionHeader, _React$PureComponent2);

  var _super3 = _createSuper(SelectionHeader);

  function SelectionHeader() {
    var _this3;

    _classCallCheck(this, SelectionHeader);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _this3._handleChange = function (e) {
      var column = _this3.props.column;
      var onChange = column.onChange,
          dataLength = column.dataLength;
      dataLength > 0 && onChange({
        selectedAll: e.target.checked
      });
    };

    _this3.handleKeyUp = function (e) {
      // 当键盘按下ctrl+c时，复制选中行数据
      if (e.ctrlKey && e.keyCode === 67) {
        var data = _this3.props.column.onKeyUp();

        if (data === '') {
          message.error('请选择需要复制的数据', 1);
        } else {
          var textareaDom = document.createElement('textarea');
          textareaDom.value = data;
          document.body.appendChild(textareaDom);
          textareaDom.select();
          document.execCommand('Copy');
          document.body.removeChild(textareaDom);
          message.success('复制成功', 1);
        }
      }
    };

    return _this3;
  }

  _createClass(SelectionHeader, [{
    key: "render",
    value: function render() {
      var column = this.props.column;
      var _column$selectedRowKe3 = column.selectedRowKeys,
          selectedRowKeys = _column$selectedRowKe3 === void 0 ? [] : _column$selectedRowKe3,
          dataLength = column.dataLength;
      var checked = dataLength && selectedRowKeys.length === dataLength;
      return /*#__PURE__*/React.createElement("div", {
        onKeyUp: this.handleKeyUp
      }, /*#__PURE__*/React.createElement(Checkbox, {
        checked: checked,
        indeterminate: selectedRowKeys.length > 0 && !checked,
        onChange: this._handleChange
      }));
    }
  }]);

  return SelectionHeader;
}(React.PureComponent);

var SelectableTable = /*#__PURE__*/function (_React$PureComponent3) {
  _inherits(SelectableTable, _React$PureComponent3);

  var _super4 = _createSuper(SelectableTable);

  function SelectableTable(props) {
    var _this4;

    _classCallCheck(this, SelectableTable);

    _this4 = _super4.call(this, props);

    _this4.getSelectedRows = function (data, selectedRowKeys, rowKey) {
      var selectedRows = [];
      data.forEach(function (item) {
        if (selectedRowKeys.includes(item[rowKey])) {
          selectedRows.push(item);
        } else {
          if (item.children) {
            selectedRows = selectedRows.concat(_this4.getSelectedRows(item.children, selectedRowKeys, rowKey));
          }
        }
      });
      return selectedRows;
    };

    _this4._handleSelectChange = function (_ref5) {
      var selected = _ref5.selected,
          rowData = _ref5.rowData,
          selectedAll = _ref5.selectedAll;
      var _this4$props = _this4.props,
          _this4$props$rowSelec = _this4$props.rowSelection,
          rowSelection = _this4$props$rowSelec === void 0 ? {} : _this4$props$rowSelec,
          rowKey = _this4$props.rowKey,
          data = _this4$props.data;
      var type = rowSelection.type,
          onChange = rowSelection.onChange;
      var selectedRowKeys;
      var selectedRows;

      if (selectedAll) {
        selectedRows = data[0].hasOwnProperty('PID') ? flattenTree(data) : cloneArray(data);
        selectedRowKeys = selectedRows.map(function (item) {
          return item[rowKey];
        });
      } else if (selectedAll === false && type !== 'radio' && type !== 'checkbox') {
        selectedRows = [];
        selectedRowKeys = [];
      } else if (selectedAll === false && type === 'checkbox') {
        selectedRows = [];
        selectedRowKeys = [];
      } else {
        var key = rowData[rowKey];

        if (type === 'radio') {
          selectedRowKeys = [key];
          selectedRows = [rowData];
        } else {
          selectedRowKeys = _toConsumableArray(rowSelection.selectedRowKeys);

          if (selected) {
            if (!selectedRowKeys.includes(key)) {
              selectedRowKeys.push(key);
              selectedRows = _this4.getSelectedRows(data, selectedRowKeys, rowKey);
            }
          } else {
            var index = selectedRowKeys.indexOf(key);

            if (index > -1) {
              selectedRowKeys.splice(index, 1);
              selectedRows = _this4.getSelectedRows(data, selectedRowKeys, rowKey);
            }
          }
        }
      }

      if (onChange && typeof onChange === 'function') {
        onChange(selectedRowKeys, selectedRows);
      }
    };

    _this4._rowClassName = function (_ref6) {
      var rowData = _ref6.rowData,
          rowIndex = _ref6.rowIndex;
      var _this4$props2 = _this4.props,
          rowClassName = _this4$props2.rowClassName,
          rowKey = _this4$props2.rowKey,
          _this4$props2$rowSele = _this4$props2.rowSelection,
          rowSelection = _this4$props2$rowSele === void 0 ? {} : _this4$props2$rowSele;
      var _rowSelection$selecte = rowSelection.selectedRowKeys,
          selectedRowKeys = _rowSelection$selecte === void 0 ? [] : _rowSelection$selecte; // const { selectedRowKeys } = this.state

      var rowClass = rowClassName ? callOrReturn(rowClassName, {
        rowData: rowData,
        rowIndex: rowIndex
      }) : '';
      var key = rowData[rowKey];
      return [rowClass, selectedRowKeys.length > 0 && selectedRowKeys.includes(key) && 'row-selected'].filter(Boolean).concat(' ');
    };

    _this4.table = React.createRef();

    _this4.getContainer = function () {
      return _this4.table.current.getDOMNode().querySelector('.BaseTable__body');
    };

    _this4.getHelperContainer = function () {
      return _this4.table.current.getDOMNode().querySelector('.BaseTable__table');
    };

    _this4.rowProps = function (args) {
      // don't forget to passing the incoming rowProps
      var extraProps = callOrReturn(_this4.props.rowProps);
      return _objectSpread(_objectSpread({}, extraProps), {}, {
        tagName: Row,
        index: args.rowData.index
      });
    };

    _this4.handleSortEnd = function (_ref7) {
      var oldIndex = _ref7.oldIndex,
          newIndex = _ref7.newIndex;

      if (oldIndex !== newIndex) {
        _this4.props.moveRow(oldIndex, newIndex);
      }
    };

    _this4.func = function (_ref8) {
      var rowIndex = _ref8.rowIndex,
          rowData = _ref8.rowData,
          dataKey = _ref8.dataKey,
          dataLength = _ref8.dataLength,
          data = _ref8.data;
      var span = 1;

      if ((rowIndex === 0 || rowIndex > 0 && rowData[dataKey] !== data[rowIndex - 1][dataKey]) && rowIndex <= dataLength - 2) {
        for (var i = rowIndex; i < dataLength; i++) {
          if (data[i + 1] && rowData[dataKey] === data[i + 1][dataKey]) {
            span++;
          } else {
            return span;
          }
        }
      }

      return span;
    };

    _this4.rowRenderer = function (_ref9) {
      var rowData = _ref9.rowData,
          rowIndex = _ref9.rowIndex,
          cells = _ref9.cells,
          columns = _ref9.columns;
      var rowSpanIndex = 1;
      var _this4$props3 = _this4.props,
          data = _this4$props3.data,
          dataLength = _this4$props3.dataLength;
      var dataKey = columns[1].dataKey;

      var rowSpan = _this4.func({
        rowData: rowData,
        rowIndex: rowIndex,
        dataKey: dataKey,
        dataLength: dataLength,
        data: data
      });

      if (rowSpan > 1) {
        var cell = cells[rowSpanIndex];

        var style = _objectSpread(_objectSpread({}, cell.props.style), {}, {
          // backgroundColor: 'lightgray',
          backgroundColor: '#fff',
          borderLeft: '1px solid #eeeeee',
          borderRight: '1px solid #eeeeee',
          height: rowSpan * 30 - 1,
          alignSelf: 'flex-start',
          zIndex: 1
        });

        cells[rowSpanIndex] = React.cloneElement(cell, {
          style: style
        });
      }

      return cells;
    };

    var _selectedRowKeys = props.selectedRowKeys,
        defaultSelectedRowKeys = props.defaultSelectedRowKeys,
        expandedRowKeys = props.expandedRowKeys,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys;
    _this4.state = {
      selectedRowKeys: (_selectedRowKeys !== undefined ? _selectedRowKeys : defaultSelectedRowKeys) || [],
      selectedRows: [],
      expandedRowKeys: (expandedRowKeys !== undefined ? expandedRowKeys : defaultExpandedRowKeys) || []
    };
    return _this4;
  }

  _createClass(SelectableTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this5 = this;

      var model = this.props.model;

      if (model) {
        var selectedRows = model.selectedRows;
        var rowIndex = selectedRows && selectedRows.length && selectedRows[0].index;

        if (rowIndex) {
          showLoading();
          setTimeout(function () {
            _this5.table.current.table.scrollToRow(rowIndex, 'start');

            hideLoading();
          }, 100);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      hideContextMenu();
    }
    /**
     * Set `selectedRowKeys` manually.
     * This method is available only if `selectedRowKeys` is uncontrolled.
     *
     * @param {array} selectedRowKeys
     */

  }, {
    key: "setSelectedRowKeys",
    value: function setSelectedRowKeys(selectedRowKeys) {
      // if `selectedRowKeys` is controlled
      if (this.props.selectedRowKeys !== undefined) return;
      this.setState({
        selectedRowKeys: cloneArray(selectedRowKeys)
      });
    }
    /**
     * See BaseTable#setExpandedRowKeys
     */

  }, {
    key: "setExpandedRowKeys",
    value: function setExpandedRowKeys(expandedRowKeys) {
      // if `expandedRowKeys` is controlled
      if (this.props.expandedRowKeys !== undefined) return;
      this.setState({
        expandedRowKeys: cloneArray(expandedRowKeys)
      });
    }
    /* some other custom methods and proxy methods */

    /**
     * Remove rowKeys from inner state  manually, it's useful to purge dirty state after rows removed.
     * This method is available only if `selectedRowKeys` or `expandedRowKeys` is uncontrolled.
     *
     * @param {array} rowKeys
     */

  }, {
    key: "removeRowKeysFromState",
    value: function removeRowKeysFromState(rowKeys) {
      if (!Array.isArray(rowKeys)) return;
      var state = {};

      if (this.props.selectedRowKeys === undefined && this.state.selectedRowKeys.length > 0) {
        state.selectedRowKeys = this.state.selectedRowKeys.filter(function (key) {
          return !rowKeys.includes(key);
        });
      }

      if (this.props.expandedRowKeys === undefined && this.state.expandedRowKeys.length > 0) {
        state.expandedRowKeys = this.state.expandedRowKeys.filter(function (key) {
          return !rowKeys.includes(key);
        });
      }

      if (state.selectedRowKeys || state.expandedRowKeys) {
        this.setState(state);
      }
    } // 获取选中行

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          columns = _this$props4.columns,
          children = _this$props4.children,
          selectionColumnProps = _this$props4.selectionColumnProps,
          rowSelection = _this$props4.rowSelection,
          canDrag = _this$props4.canDrag,
          dataLength = _this$props4.dataLength,
          handleSelectedData = _this$props4.handleSelectedData,
          operationColmun = _this$props4.operationColmun,
          showDetails = _this$props4.showDetails,
          dataTotal = _this$props4.dataTotal,
          rest = _objectWithoutProperties(_this$props4, _excluded2); // you'd better memoize this operation


      var _columns = columns || normalizeColumns(children);

      if (rowSelection && rowSelection.onChange) {
        var frozenProps = null;

        if (!canDrag) {
          frozenProps = {
            frozen: 'left'
          };
        }

        var type = rowSelection.type,
            lodding = rowSelection.lodding,
            selectedRowKeys = rowSelection.selectedRowKeys; // console.log(_columns)

        var selectionColumn = lodding === false ? _objectSpread(_objectSpread(_objectSpread({
          width: 80,
          flexShrink: 0,
          resizable: false
        }, frozenProps), {}, {
          // frozen: Column.FrozenDirection.LEFT,
          cellRenderer: function cellRenderer() {
            return operationColmun;
          },
          headerRenderer: function headerRenderer() {
            return '操作';
          }
        }, selectionColumnProps), {}, {
          key: '__selection__',
          rowKey: this.props.rowKey,
          selectedRowKeys: selectedRowKeys,
          dataLength: dataLength,
          onChange: this._handleSelectChange,
          onKeyUp: handleSelectedData
        }) : _objectSpread(_objectSpread(_objectSpread({
          width: 40,
          flexShrink: 0,
          resizable: false
        }, frozenProps), {}, {
          // frozen: Column.FrozenDirection.LEFT,
          cellRenderer: type !== 'radio' ? SelectionCell : RadioSelectionCell,
          headerRenderer: type !== 'radio' ? SelectionHeader : null
        }, selectionColumnProps), {}, {
          key: '__selection__',
          rowKey: this.props.rowKey,
          selectedRowKeys: selectedRowKeys,
          dataLength: dataLength,
          onChange: this._handleSelectChange,
          onKeyUp: handleSelectedData
        });
        _columns = [selectionColumn].concat(_toConsumableArray(_columns));

        if (showDetails) {
          var _operationColmun = _objectSpread(_objectSpread({
            width: 50,
            flexShrink: 0,
            resizable: false,
            frozen: 'right',
            cellRenderer: function cellRenderer() {
              return /*#__PURE__*/React.createElement("a", {
                style: {
                  padding: '0 7px',
                  borderRadius: '2px',
                  backgroundColor: 'rgb(231 238 239)'
                },
                className: "ant-dropdown-link",
                onClick: showDetails
              }, "\u660E\u7EC6");
            },
            headerRenderer: function headerRenderer() {
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  position: 'relative',
                  width: '100%',
                  paddingRight: (dataTotal + '').length === 1 ? '10px' : '',
                  paddingBottom: dataTotal === 0 ? 0 : '15px',
                  fontSize: '12px',
                  textAlign: 'right'
                },
                className: "totalHeader"
              }, /*#__PURE__*/React.createElement("span", {
                style: {
                  color: 'rgba(0, 0, 0, 0.65)'
                }
              }, "total"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", null));
            }
          }, selectionColumnProps), {}, {
            key: '__operation__',
            rowKey: this.props.rowKey,
            selectedRowKeys: selectedRowKeys,
            dataLength: dataLength,
            onChange: this._handleSelectChange,
            onKeyUp: handleSelectedData
          });

          _columns = [].concat(_toConsumableArray(_columns), [_operationColmun]);
        }
      }

      var other = {}; // if (!this.props.expandColumnKey) {
      //   // 不是树结构
      //   other = { rowRenderer: this.rowRenderer, overscanRowCount: dataLength }
      // }

      return canDrag ? /*#__PURE__*/React.createElement(DraggableContainer, {
        useDragHandle: true,
        getContainer: this.getContainer,
        helperContainer: this.getHelperContainer,
        onSortEnd: this.handleSortEnd
      }, /*#__PURE__*/React.createElement(StyledTable, _extends({}, rest, {
        columns: _columns,
        rowClassName: this._rowClassName,
        ref: this.table,
        rowProps: this.rowProps
      }))) : /*#__PURE__*/React.createElement(StyledTable, _extends({}, rest, {
        columns: _columns,
        ref: this.table,
        rowClassName: this._rowClassName
      }, other));
    }
  }]);

  return SelectableTable;
}(React.PureComponent);

SelectableTable.defaultProps = _objectSpread(_objectSpread({}, BaseTable.defaultProps), {}, {
  columns: [],
  data: []
}); // 自定义props，其余props参考react-base-table

SelectableTable.propTypes = {
  dataLength: PropTypes.number,
  // 平铺数据的总条数，用于判断表头的选择框展示状态
  rowSelection: PropTypes.exact({
    type: PropTypes.oneOf(['radio', 'checkbox']),
    onChange: PropTypes.func,
    selectedRowKeys: PropTypes.array
  }),
  canDrag: PropTypes.bool,
  // 是否可拖拽表格行
  moveRow: PropTypes.func // 拖拽表格行之后触发事件

};
export default (function (_ref10) {
  var width = _ref10.width,
      height = _ref10.height,
      columns = _ref10.columns,
      restProps = _objectWithoutProperties(_ref10, _excluded3);

  return /*#__PURE__*/React.createElement(AutoResizer, null, function (_ref11) {
    var fullWidth = _ref11.width,
        fullHeight = _ref11.height;
    var colLength = columns.length;
    var columnsTotalWidth = columns.reduce(function (total, item) {
      return total + item.width;
    }, 0);
    if (colLength > 0 && fullWidth - 40 > columnsTotalWidth) columns[colLength - 1].width = fullWidth - 40 - columnsTotalWidth + columns[colLength - 1].width;
    return /*#__PURE__*/React.createElement(SelectableTable, _extends({
      width: width || fullWidth,
      height: height || fullHeight,
      columns: columns,
      fixed: true
    }, restProps, {
      rowHeight: 30,
      headerHeight: 39,
      onEndReachedThreshold: 50
    }));
  });
});