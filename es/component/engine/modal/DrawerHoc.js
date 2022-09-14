function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 抽屉高阶组件
 */
import React, { useRef, useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { isEnglish } from '../../../utils/utils';

var DrawerHoc = function DrawerHoc(engine) {
  return function (WrappedComponent) {
    var ChildCmp = function ChildCmp(props) {
      var _engine$width = engine.width,
          width = _engine$width === void 0 ? '100%' : _engine$width,
          _engine$height = engine.height,
          height = _engine$height === void 0 ? '100%' : _engine$height,
          placement = engine.placement,
          name = engine.name,
          enName = engine.enName,
          namespace = engine.namespace,
          menuId = engine.menuId,
          wType = engine.wType,
          objectANamespace = engine.objectANamespace,
          _engine$clickedMenu = engine.clickedMenu,
          clickedMenu = _engine$clickedMenu === void 0 ? {} : _engine$clickedMenu;
      var caption = engine.caption;
      caption = caption ? caption : isEnglish ? enName : name || 'undefined';
      var model = props.model,
          dispatch = props.dispatch;

      var onCancel = function onCancel() {
        var payload = _defineProperty({}, menuId, false);

        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: payload
        });
      };

      return /*#__PURE__*/React.createElement(Drawer, {
        title: caption,
        placement: placement,
        onClose: onCancel,
        visible: model[menuId],
        width: width,
        height: height,
        destroyOnClose: true
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(WrappedComponent, props)));
    };

    return ChildCmp;
  };
};

export default DrawerHoc;