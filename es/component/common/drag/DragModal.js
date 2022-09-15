var _excluded = ["children", "width", "visible", "form", "height", "noFooter", "namespace", "title", "mask", "zIndex", "peptideFormPadding", "okText", "aboutUs"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 可拖动，全屏的弹窗
 */
import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { getDvaApp } from 'umi';
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import styles from './index.less';
import language from '@/locale/language';
import { Modal } from 'antd';
import classNames from 'classnames';
var _language$common = language.common,
    ok = _language$common.ok,
    cancel = _language$common.cancel,
    Aboutus = language.copyright.Aboutus;

var DragModal = function DragModal(_ref) {
  var children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 800 : _ref$width,
      visible = _ref.visible,
      form = _ref.form,
      height = _ref.height,
      noFooter = _ref.noFooter,
      namespace = _ref.namespace,
      title = _ref.title,
      _ref$mask = _ref.mask,
      mask = _ref$mask === void 0 ? false : _ref$mask,
      zIndex = _ref.zIndex,
      peptideFormPadding = _ref.peptideFormPadding,
      okText = _ref.okText,
      aboutUs = _ref.aboutUs,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var draggleRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFull = _useState2[0],
      setFull = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      transformStyle = _useState6[0],
      setTransformStyle = _useState6[1];

  var _useState7 = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      bounds = _useState8[0],
      setBounds = _useState8[1];

  useEffect(function () {
    if (visible) setFull(false);
    if (visible && form) form.resetFields();
    return function () {
      if (namespace) {
        var dva = getDvaApp();

        dva._store.dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            isFull: false
          }
        });
      }
    };
  }, [visible, form]);
  useEffect(function () {
    if (!draggleRef.current) return;

    if (isFull) {
      setDisabled(true);
      setTransformStyle(draggleRef.current.style.transform);
      draggleRef.current.style.transform = 'translate(0px,0px)';
    } else {
      draggleRef.current.style.transform = transformStyle;
      setDisabled(false);
    }
  }, [isFull]);
  var clientHeight = document.documentElement.clientHeight;
  var props = {};
  if (noFooter) props = {
    footer: null
  };

  var onClickFullScreenButton = function onClickFullScreenButton() {
    setFull(!isFull);

    if (namespace) {
      var dva = getDvaApp();

      dva._store.dispatch({
        type: "".concat(namespace, "/packet"),
        payload: {
          isFull: !isFull
        }
      });
    }
  };

  var _onStart = function onStart(_event, uiData) {
    var _window$document$docu = window.document.documentElement,
        clientWidth = _window$document$docu.clientWidth,
        clientHeight = _window$document$docu.clientHeight;
    var targetRect = draggleRef.current && draggleRef.current.getBoundingClientRect();

    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, visible && /*#__PURE__*/React.createElement(Modal, _extends({
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: styles.dragTitle,
      onMouseOver: function onMouseOver() {
        if (disabled) {
          setDisabled(false);
        }
      },
      onMouseOut: function onMouseOut() {
        setDisabled(true);
      },
      onFocus: function onFocus() {},
      onBlur: function onBlur() {} // end

    }, /*#__PURE__*/React.createElement("div", {
      className: "handle-drag"
    }, title)), aboutUs ? /*#__PURE__*/React.createElement(React.Fragment, null) : /*#__PURE__*/React.createElement("div", {
      onClick: onClickFullScreenButton,
      className: "".concat(styles.fullButton, " ant-modal-close")
    }, isFull ? /*#__PURE__*/React.createElement(FullscreenExitOutlined, null) : /*#__PURE__*/React.createElement(FullscreenOutlined, null))),
    modalRender: function modalRender(modal) {
      return /*#__PURE__*/React.createElement(Draggable, {
        disabled: disabled,
        bounds: bounds,
        onStart: function onStart(event, uiData) {
          return _onStart(event, uiData);
        },
        handle: ".handle-drag"
      }, /*#__PURE__*/React.createElement("div", {
        ref: draggleRef
      }, modal));
    },
    className: classNames(['dragModal-' + namespace, title === Aboutus ? styles.AboutUs : '', noFooter ? 'no-footer' : 'has-footer', peptideFormPadding ? 'peptideFormPadding' : '']),
    destroyOnClose: true,
    centered: true,
    maskClosable: false,
    forceRender: true,
    visible: visible,
    cancelText: cancel,
    okText: okText || ok,
    width: isFull ? '100%' : width,
    mask: mask
  }, restProps, props, {
    zIndex: zIndex || 1000,
    style: {
      maxWidth: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: isFull ? noFooter ? clientHeight - 65 : clientHeight - 119 : height,
      height: height
    }
  }, children)));
};

export default DragModal;