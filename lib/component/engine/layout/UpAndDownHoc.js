"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactSvg = require("react-svg");

var _reResizable = require("re-resizable");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _EnterInput = _interopRequireDefault(require("../relationPage/EnterInput"));

var _layout = _interopRequireDefault(require("./layout.less"));

require("./index.css");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Description: 上下布局 faceType: 2
 */
var _language$enterInput = _language.default.enterInput,
    input_tab = _language$enterInput.input_tab,
    _language$enterInput$ = _language$enterInput.tooltip,
    expand_drawer = _language$enterInput$.expand_drawer,
    collapse_drawer = _language$enterInput$.collapse_drawer;
var TabPane = _antd.Tabs.TabPane;
var Panel = _antd.Collapse.Panel;

var svgDir = require.context('../../../assets/icon/');

var _default = function _default(engine) {
  return function (WrappedComponent) {
    return function (props) {
      var offsetWidth_1 = document.body.offsetWidth * 1 / 100;
      var offsetWidth_80 = document.body.offsetWidth * 80 / 100;
      var _props$model = props.model,
          showTab = _props$model.showTab,
          panes = _props$model.panes,
          namespace = _props$model.namespace,
          selectedRows = _props$model.selectedRows,
          objectNo = _props$model.objectNo,
          tableName = _props$model.tableName,
          fullScreen = _props$model.fullScreen,
          params = _props$model.params,
          visibleEnterInputPage = _props$model.visibleEnterInputPage,
          _props$model$drawerSi = _props$model.drawerSize,
          drawerSize = _props$model$drawerSi === void 0 ? {
        width: offsetWidth_80,
        height: '100%'
      } : _props$model$drawerSi;
      var TILED = panes && panes.length && panes[0].TILED;
      var expandKey = [];
      panes && panes.length && panes.map(function (item) {
        if (item.EXPAND) expandKey.push(item.key);
      });

      var closeTab = function closeTab(type) {
        if (type && type === 1) {
          props.dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              showTab: showTab,
              fullScreen: fullScreen,
              visibleEnterInputPage: false,
              drawerSize: {
                width: offsetWidth_80,
                height: '100%'
              }
            }
          });
        } else {
          props.dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              showTab: false,
              fullScreen: false
            }
          });
        }
      };

      var fullInput = function fullInput() {
        props.dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            showTab: !showTab
          }
        });
      };

      var InputCmp = /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
        tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
          size: "small",
          className: "extra-btn",
          icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null),
          onClick: function onClick() {
            return closeTab(1);
          }
        }))
      }, /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: input_tab,
        key: "1"
      }, /*#__PURE__*/_react.default.createElement(_EnterInput.default, {
        selectedRows: selectedRows,
        objectNo: tableName,
        engine: engine,
        model: props.model,
        params: params
      })));

      var onResizeStop = function onResizeStop(e, direction, ref, d) {
        drawerSize.width += d.width;
        props.dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            drawerSize: drawerSize
          }
        });
        sessionStorage.removeItem('onResize');
      };

      var onResizeStart = function onResizeStart() {
        sessionStorage.setItem('onResize', true);
      };

      var changeDrawerWidth = function changeDrawerWidth(width) {
        var size = {
          width: width,
          height: '100%'
        };
        props.dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            drawerSize: size
          }
        });
      };

      var getIcon = function getIcon(item) {
        var newIcon = null;
        var IconView = null;

        if (item.icon) {
          if (item.icon.indexOf('third-') != -1) {
            //筛选第三方图标库的icons
            newIcon = item.icon.substring(6); //将第三方图标库标识去掉
          } else {
            item.icon = item.icon.substring(0, 1).toUpperCase() + item.icon.substring(1, item.icon.length);
            IconView = Icon["".concat(item.icon, "Outlined")];
          }
        }

        return item.icon && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
          className: "layoutThirdIcons",
          src: svgDir("./".concat(newIcon, ".svg"))
        }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null));
      };

      var getHeader = function getHeader(item, index) {
        return /*#__PURE__*/_react.default.createElement("h3", {
          style: {
            display: 'inline-block',
            fontWeight: 700,
            marginRight: '6px'
          }
        }, item.icon && getIcon(item), item.caption);
      };

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, engine.relationType === 3 ? /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-y"
      }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
        enable: {
          bottom: true
        },
        showTab: showTab && !fullScreen
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props)), showTab && !fullScreen && /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-y"
      }, TILED ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null),
        onClick: closeTab,
        style: {
          position: 'absolute',
          right: '10px',
          top: '0',
          zIndex: 1000
        }
      }), /*#__PURE__*/_react.default.createElement(_antd.Collapse, {
        defaultActiveKey: expandKey
      }, panes.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(Panel, {
          header: getHeader(item, index),
          key: item.key
        }, item.Cmp);
      }))) : /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
        defaultActiveKey: panes[0].key,
        tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
          size: "small",
          className: "extra-btn",
          icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null),
          onClick: closeTab
        }),
        className: "selectedBackground"
      }, panes.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(TabPane, {
          tab: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.icon && getIcon(item), item.caption),
          key: item.key
        }, item.Cmp);
      }))), visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reResizable.Resizable, {
        className: _layout.default.resizable,
        size: drawerSize,
        maxWidth: offsetWidth_80,
        minWidth: offsetWidth_1,
        onResizeStop: onResizeStop,
        onResizeStart: onResizeStart
      }, drawerSize.width === offsetWidth_1 ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: expand_drawer
      }, /*#__PURE__*/_react.default.createElement(Icon.CaretLeftOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_80);
        },
        className: _layout.default.expandIcon
      })) : /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: collapse_drawer
      }, /*#__PURE__*/_react.default.createElement(Icon.CaretRightOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_1);
        },
        className: _layout.default.shrinkIcon
      })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
        className: _layout.default.drawer,
        style: {
          position: 'absolute'
        },
        getContainer: false,
        closable: false,
        visible: visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1),
        mask: false
      }, InputCmp)))) : /*#__PURE__*/_react.default.createElement("div", {
        className: params && (params.classTabPosition === 'left' || params.classTabPosition === 'right') ? 'tabAround' : 'flex-y'
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props)), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
        visible: showTab && !fullScreen,
        width: "80%",
        closable: false,
        placement: "right",
        onClose: closeTab,
        zIndex: 999
      }, showTab && !fullScreen && /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-y",
        style: {
          width: '100%',
          height: '100%'
        }
      }, TILED ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null),
        onClick: closeTab,
        style: {
          position: 'absolute',
          right: '10px',
          top: '0',
          zIndex: 1000
        }
      }), /*#__PURE__*/_react.default.createElement(_antd.Collapse, {
        defaultActiveKey: expandKey
      }, panes.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(Panel, {
          header: getHeader(item, index),
          key: item.key
        }, item.Cmp);
      }))) : /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
        defaultActiveKey: panes[0].key,
        tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
          size: "small",
          className: "extra-btn",
          icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null),
          onClick: closeTab
        }),
        className: "selectedBackground"
      }, panes.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(TabPane, {
          tab: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.icon && getIcon(item), item.caption),
          key: item.key
        }, item.Cmp);
      })))), visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reResizable.Resizable, {
        className: _layout.default.resizable,
        size: drawerSize,
        maxWidth: offsetWidth_80,
        minWidth: offsetWidth_1,
        onResizeStop: onResizeStop,
        onResizeStart: onResizeStart
      }, drawerSize.width === offsetWidth_1 ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: expand_drawer
      }, /*#__PURE__*/_react.default.createElement(Icon.CaretLeftOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_80);
        },
        className: _layout.default.expandIcon
      })) : /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: collapse_drawer
      }, /*#__PURE__*/_react.default.createElement(Icon.CaretRightOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_1);
        },
        className: _layout.default.shrinkIcon
      })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
        className: _layout.default.drawer,
        style: {
          position: 'absolute'
        },
        getContainer: false,
        closable: false,
        visible: visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1),
        mask: false
      }, InputCmp)))));
    };
  };
};

exports.default = _default;