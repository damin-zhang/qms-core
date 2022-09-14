/*
 * @Description:定制组件
 */
import React from 'react';
import { customWindow } from '../../../utils/customWindow';
import BrowseFiles from '../relationPage/BrowseFiles';

var CustomWindow = function CustomWindow(engine) {
  return function (WrappedComponent) {
    var _engine$clickedMenu = engine.clickedMenu,
        no = _engine$clickedMenu.no,
        wType = _engine$clickedMenu.wType;

    var Cmp = function Cmp() {
      return /*#__PURE__*/React.createElement("div", null);
    };

    if (no) {
      Cmp = customWindow.find(function (item) {
        return item.NO === no;
      });
    }

    if (Cmp) {
      Cmp = Cmp.COMPONENT;
    }

    return function (props) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(WrappedComponent, props), wType && wType === 'browseFiles' ? /*#__PURE__*/React.createElement(BrowseFiles, {
        props: props,
        engine: engine
      }) : Cmp ? /*#__PURE__*/React.createElement(Cmp, {
        engine: engine,
        props: props
      }) : /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          fontSize: '18px'
        }
      }, "\u6CA1\u6709\u627E\u5230\u9875\u9762!"));
    };
  };
};

export default CustomWindow;