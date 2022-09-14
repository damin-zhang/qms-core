function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["width", "height", "columns", "data", "paging", "showPagination", "children", "rowEventHandlers", "rowSelection", "canDrag", "showSubPage", "operationColmun", "showDetails", "selectionColumnProps", "dataLength", "handleSelectedData", "model", "engine"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/*
 * @Description: 基于Antd-table封装的table
 */

/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { BlockOutlined, EyeOutlined } from '@ant-design/icons';
import { normalizeColumns } from 'react-base-table/lib/utils';
import { getDvaApp } from 'umi';
import AntdPagination from './AntdPagination';
import { isEnglish } from '../../../utils/utils';

var AntdTable = /*#__PURE__*/function (_PureComponent) {
  _inherits(AntdTable, _PureComponent);

  var _super = _createSuper(AntdTable);

  function AntdTable() {
    var _this;

    _classCallCheck(this, AntdTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isLoading: false
    };

    _this.setLoading = function (stateBoolean) {
      _this.setState({
        isLoading: stateBoolean
      });
    };

    return _this;
  }

  _createClass(AntdTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          columns = _this$props.columns,
          data = _this$props.data,
          paging = _this$props.paging,
          _this$props$showPagin = _this$props.showPagination,
          showPagination = _this$props$showPagin === void 0 ? false : _this$props$showPagin,
          children = _this$props.children,
          rowEventHandlers = _this$props.rowEventHandlers,
          rowSelection = _this$props.rowSelection,
          canDrag = _this$props.canDrag,
          showSubPage = _this$props.showSubPage,
          operationColmun = _this$props.operationColmun,
          showDetails = _this$props.showDetails,
          selectionColumnProps = _this$props.selectionColumnProps,
          dataLength = _this$props.dataLength,
          handleSelectedData = _this$props.handleSelectedData,
          model = _this$props.model,
          engine = _this$props.engine,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var showPaging = paging ? paging.showPaging : false; // you'd better memoize this operation

      var _columns = columns || normalizeColumns(children);

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
          title: isEnglish ? 'Operation' : '操作',
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

        if (showDetails) {
          var _operationColmun = _objectSpread(_objectSpread({
            title: isEnglish ? 'Operation' : '操作',
            width: showSubPage ? 100 : 50,
            flexShrink: 0,
            resizable: false,
            fixed: 'right',
            align: 'center',
            render: function render(text, record) {
              return /*#__PURE__*/React.createElement("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-around'
                }
              }, showSubPage && /*#__PURE__*/React.createElement("a", {
                style: {
                  padding: '0 7px',
                  borderRadius: '2px',
                  backgroundColor: 'rgb(24, 144, 255)',
                  color: '#fff'
                },
                className: "ant-dropdown-link",
                onClick: function onClick() {
                  showSubPage([record]);
                }
              }, /*#__PURE__*/React.createElement(BlockOutlined, null), isEnglish ? 'Relation' : '关联'), /*#__PURE__*/React.createElement("a", {
                style: {
                  padding: '0 7px',
                  borderRadius: '2px',
                  backgroundColor: 'rgb(231 238 239)'
                },
                className: "ant-dropdown-link",
                onClick: showDetails
              }, /*#__PURE__*/React.createElement(EyeOutlined, null), isEnglish ? 'Detail' : '明细'));
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

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, _extends({
        columns: _columns,
        dataSource: data,
        loading: this.state.isLoading,
        size: "small",
        scroll: {
          x: width || '100%',
          y: height || '100%'
        },
        ellipsis: true,
        rowSelection: _objectSpread({}, selectionColumn)
      }, rest, {
        hideOnSinglePage: true,
        pagination: showPagination,
        className: showPaging ? "".concat(this.props.className || 'ant-list', " manual-paging") : showPagination ? "".concat(this.props.className, " auto-paging") : "".concat(this.props.className, " no-paging"),
        onRow: function onRow(record) {
          return {
            onClick: function onClick(e) {
              rowEventHandlers.onClick({
                rowData: record,
                event: e
              });
            },
            onDoubleClick: function onDoubleClick() {
              var dva = getDvaApp();

              if (model && (model.tableName === 'IQC_PENDING_ORDER' || model.tableName === 'IQC_ESSENTIAL_INFORMA' || model.tableName === 'IQC_SAIF')) {
                /* 调用质检录入弹窗 */
                var payload = {
                  objectANamespace: model.namespace,
                  clickedMenu: {
                    wType: 'QualityInspectionEntry',
                    objectNo: model.tableName,
                    caption: isEnglish ? 'Quality inspection entry' : '质检录入',
                    values: {
                      hData: model.selectedRows,
                      dataList: model.dataList
                    },
                    params: {
                      checkProObjectNo: 'IQC_INSPECTION_ITEMS',
                      checkProRelationShipNo: 'REL_IQC_ESSENTIAL',
                      checkResultObjectNo: 'IQC_DETECTION_VALUE',
                      checkResultRelationShipNo: 'REL_IQC_SUPP'
                    }
                  }
                };

                dva._store.dispatch({
                  type: "popup/loadPopup",
                  payload: payload
                });
              } else if (engine && engine.tableName === 'PERIOD_PENDING_ORDER') {
                var values = {
                  hData: model.selectedRows,
                  rData: model.dataList
                };
                var menu = {};

                if (engine.pageId === 2671690135389268 || engine.pageId === 1910251150932733) {
                  //周期质检报告双击
                  menu = engine.objectMenus.filter(function (item) {
                    return item.no === 'periodQualityReport';
                  })[0] || {};
                } else if ( //周期质检录入双击
                engine.pageId === 1455020092263946 || engine.pageId === 2423141948661079 || engine.pageId === 2278250804894817 || engine.pageId === 1372392004134313 || engine.pageId === 2565260052755828 || engine.pageId === 1923311509348189) {
                  menu = engine.objectMenus.filter(function (item) {
                    return item.no === 'periodQualityInspectionEntry';
                  })[0] || {};
                }

                menu.values = values;
                menu.objectNo = engine.tableName;
                menu.id && dva._store.dispatch({
                  type: "popup/loadPopup",
                  payload: {
                    objectANamespace: engine.namespace,
                    clickedMenu: menu
                  }
                });
              } else if (engine && engine.tableName === 'IQC_FICL') {
                var _values = {
                  hData: model.selectedRows,
                  rData: model.dataList
                };

                if (engine.pageId === 2645320115485282 || engine.pageId === 1731671696841422) {
                  var _menu = engine.objectMenus.filter(function (item) {
                    if (item.wType === 'QualityInspectionReport') {
                      return item;
                    }
                  })[0] || {};

                  _values.objectNo = engine.tableName;
                  _values.implClass = _menu.implClass;
                  _menu.id && dva._store.dispatch({
                    type: 'PlmFileDownload/qualityInspectionReport',
                    payload: {
                      values: _values,
                      objectANamespace: engine.namespace
                    }
                  });
                } else if (engine.pageId === 1312111853084658 || engine.pageId === 2486440769416208) {
                  var _menu2 = engine.objectMenus.filter(function (item) {
                    return item.no === 'reverseRualityReport';
                  })[0] || {};

                  _menu2.values = _values;
                  _menu2.objectNo = engine.tableName;
                  _menu2.id && dva._store.dispatch({
                    type: "popup/loadPopup",
                    payload: {
                      objectANamespace: engine.namespace,
                      clickedMenu: _menu2
                    }
                  });
                }
              }
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
        }
      })), /*#__PURE__*/React.createElement(AntdPagination, {
        paging: _objectSpread({}, paging),
        setLoading: this.setLoading
      }));
    }
  }]);

  return AntdTable;
}(PureComponent);

export default AntdTable;