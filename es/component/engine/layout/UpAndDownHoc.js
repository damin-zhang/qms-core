/*
 * @Description: 上下布局 faceType: 2
 */
import React, { Children } from 'react';
import { Button, Tabs, Drawer, Tooltip, Collapse } from 'antd';
import * as Icon from '@ant-design/icons';
import { ReactSVG } from 'react-svg';
import { CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Resizable } from 're-resizable';
import DragCmp from '../../common/drag/DragCmp';
import EnterInput from '../relationPage/EnterInput';
import styles from './layout.less';
import './index.css';
import language from '@/locale/language';
var _language$enterInput = language.enterInput,
    input_tab = _language$enterInput.input_tab,
    _language$enterInput$ = _language$enterInput.tooltip,
    expand_drawer = _language$enterInput$.expand_drawer,
    collapse_drawer = _language$enterInput$.collapse_drawer;
var TabPane = Tabs.TabPane;
var Panel = Collapse.Panel;

var svgDir = require.context('../../../assets/icon/');

export default (function (engine) {
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

      var InputCmp = /*#__PURE__*/React.createElement(Tabs, {
        tabBarExtraContent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
          size: "small",
          className: "extra-btn",
          icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
          onClick: function onClick() {
            return closeTab(1);
          }
        }))
      }, /*#__PURE__*/React.createElement(TabPane, {
        tab: input_tab,
        key: "1"
      }, /*#__PURE__*/React.createElement(EnterInput, {
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

        return item.icon && (newIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
          className: "layoutThirdIcons",
          src: svgDir("./".concat(newIcon, ".svg"))
        }) : IconView && /*#__PURE__*/React.createElement(IconView, null));
      };

      var getHeader = function getHeader(item, index) {
        return /*#__PURE__*/React.createElement("h3", {
          style: {
            display: 'inline-block',
            fontWeight: 700,
            marginRight: '6px'
          }
        }, item.icon && getIcon(item), item.caption);
      };

      return /*#__PURE__*/React.createElement(React.Fragment, null, engine.relationType === 3 ? /*#__PURE__*/React.createElement("div", {
        className: "flex-y"
      }, /*#__PURE__*/React.createElement(DragCmp, {
        enable: {
          bottom: true
        },
        showTab: showTab && !fullScreen
      }, /*#__PURE__*/React.createElement(WrappedComponent, props)), showTab && !fullScreen && /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-y"
      }, TILED ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
        onClick: closeTab,
        style: {
          position: 'absolute',
          right: '10px',
          top: '0',
          zIndex: 1000
        }
      }), /*#__PURE__*/React.createElement(Collapse, {
        defaultActiveKey: expandKey
      }, panes.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Panel, {
          header: getHeader(item, index),
          key: item.key
        }, item.Cmp);
      }))) : /*#__PURE__*/React.createElement(Tabs, {
        defaultActiveKey: panes[0].key,
        tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
          size: "small",
          className: "extra-btn",
          icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
          onClick: closeTab
        }),
        className: "selectedBackground"
      }, panes.map(function (item) {
        return /*#__PURE__*/React.createElement(TabPane, {
          tab: /*#__PURE__*/React.createElement(React.Fragment, null, item.icon && getIcon(item), item.caption),
          key: item.key
        }, item.Cmp);
      }))), visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Resizable, {
        className: styles.resizable,
        size: drawerSize,
        maxWidth: offsetWidth_80,
        minWidth: offsetWidth_1,
        onResizeStop: onResizeStop,
        onResizeStart: onResizeStart
      }, drawerSize.width === offsetWidth_1 ? /*#__PURE__*/React.createElement(Tooltip, {
        title: expand_drawer
      }, /*#__PURE__*/React.createElement(CaretLeftOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_80);
        },
        className: styles.expandIcon
      })) : /*#__PURE__*/React.createElement(Tooltip, {
        title: collapse_drawer
      }, /*#__PURE__*/React.createElement(CaretRightOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_1);
        },
        className: styles.shrinkIcon
      })), /*#__PURE__*/React.createElement(Drawer, {
        className: styles.drawer,
        style: {
          position: 'absolute'
        },
        getContainer: false,
        closable: false,
        visible: visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1),
        mask: false
      }, InputCmp)))) : /*#__PURE__*/React.createElement("div", {
        className: params && (params.classTabPosition === 'left' || params.classTabPosition === 'right') ? 'tabAround' : 'flex-y'
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(WrappedComponent, props)), /*#__PURE__*/React.createElement(Drawer, {
        visible: showTab && !fullScreen,
        width: "80%",
        closable: false,
        placement: "right",
        onClose: closeTab,
        zIndex: 999
      }, showTab && !fullScreen && /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-y",
        style: {
          width: '100%',
          height: '100%'
        }
      }, TILED ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
        onClick: closeTab,
        style: {
          position: 'absolute',
          right: '10px',
          top: '0',
          zIndex: 1000
        }
      }), /*#__PURE__*/React.createElement(Collapse, {
        defaultActiveKey: expandKey
      }, panes.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Panel, {
          header: getHeader(item, index),
          key: item.key
        }, item.Cmp);
      }))) : /*#__PURE__*/React.createElement(Tabs, {
        defaultActiveKey: panes[0].key,
        tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
          size: "small",
          className: "extra-btn",
          icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
          onClick: closeTab
        }),
        className: "selectedBackground"
      }, panes.map(function (item) {
        return /*#__PURE__*/React.createElement(TabPane, {
          tab: /*#__PURE__*/React.createElement(React.Fragment, null, item.icon && getIcon(item), item.caption),
          key: item.key
        }, item.Cmp);
      })))), visibleEnterInputPage && visibleEnterInputPage == true && selectedRows[0] && (selectedRows[0].TSTATE === 0 || selectedRows[0].TSTATE === 1) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Resizable, {
        className: styles.resizable,
        size: drawerSize,
        maxWidth: offsetWidth_80,
        minWidth: offsetWidth_1,
        onResizeStop: onResizeStop,
        onResizeStart: onResizeStart
      }, drawerSize.width === offsetWidth_1 ? /*#__PURE__*/React.createElement(Tooltip, {
        title: expand_drawer
      }, /*#__PURE__*/React.createElement(CaretLeftOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_80);
        },
        className: styles.expandIcon
      })) : /*#__PURE__*/React.createElement(Tooltip, {
        title: collapse_drawer
      }, /*#__PURE__*/React.createElement(CaretRightOutlined, {
        onClick: function onClick() {
          return changeDrawerWidth(offsetWidth_1);
        },
        className: styles.shrinkIcon
      })), /*#__PURE__*/React.createElement(Drawer, {
        className: styles.drawer,
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
});