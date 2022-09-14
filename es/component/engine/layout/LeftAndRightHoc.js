import React from "react";

/*
 * @Description: 左右布局 faceType: 3
 */
import DragCmp from '../../common/drag/DragCmp';
import * as Icon from '@ant-design/icons';
import { Button, Tabs, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ReactSVG } from 'react-svg';
import './index.css';
var TabPane = Tabs.TabPane;

var svgDir = require.context('../../../assets/icon/');

export default (function (WrappedComponent) {
  return function (props) {
    var _props$model = props.model,
        showTab = _props$model.showTab,
        panes = _props$model.panes,
        namespace = _props$model.namespace;

    var closeTab = function closeTab() {
      props.dispatch({
        type: "".concat(namespace, "/packet"),
        payload: {
          showTab: false
        }
      });
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(WrappedComponent, props)), showTab && /*#__PURE__*/React.createElement(Drawer, {
      visible: showTab,
      width: "80%",
      closable: false,
      placement: "right",
      onClose: closeTab,
      zIndex: 999
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-grow-x",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      defaultActiveKey: panes[0].key,
      tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
        onClick: closeTab
      }),
      className: "selectedBackground"
    }, panes.map(function (item) {
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

      return /*#__PURE__*/React.createElement(TabPane, {
        tab: /*#__PURE__*/React.createElement(React.Fragment, null, item.icon && (newIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
          className: "layoutThirdIcons",
          src: svgDir("./".concat(newIcon, ".svg"))
        }) : IconView && /*#__PURE__*/React.createElement(IconView, null)), item.caption),
        key: item.key
      }, item.Cmp);
    })))));
  };
});