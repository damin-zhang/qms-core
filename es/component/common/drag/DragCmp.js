function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 可拉伸组件
 */
import React, { useState, useEffect } from 'react';
import { Resizable } from 're-resizable';
import classNames from 'classnames';
import styles from './index.less';

var DragCmp = function DragCmp(_ref) {
  var _classNames;

  var enable = _ref.enable,
      children = _ref.children,
      showTab = _ref.showTab,
      width = _ref.width,
      height = _ref.height,
      _ref$isFixed = _ref.isFixed,
      isFixed = _ref$isFixed === void 0 ? false : _ref$isFixed;
  var bottom = enable.bottom,
      right = enable.right;

  var _useState = useState({
    width: '100%',
    height: '100%'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  useEffect(function () {
    var offsetHeight = document.body.offsetHeight;
    bottom ? setSize({
      width: '100%',
      height: showTab ? isFixed ? height || '80%' : height || offsetHeight / 2.3 : '100%'
    }) : setSize({
      height: '100%',
      width: showTab ? width || '30%' : '100%'
    });
  }, [showTab, bottom, width, height]);

  var scrollRowIntoView = function scrollRowIntoView(dom) {
    // 将选中行至于视野中
    var scrollContainer = dom.getElementsByClassName('BaseTable__body')[0];

    if (scrollContainer) {
      var selectedRowContainer = scrollContainer.getElementsByClassName('row-selected')[0];

      if (selectedRowContainer) {
        scrollContainer.scrollTop = selectedRowContainer.offsetTop;
      }
    }
  };

  var onResizeStop = function onResizeStop(e, direction, ref, d) {
    if (!isFixed) {
      var offsetHeight = document.body.offsetHeight;
      var offsetY = e.clientY;
      var offsetWidth = document.body.offsetWidth;
      var offsetX = e.clientX;
      right ? size.height += d.height : size.width += d.width;
      bottom ? size.height += d.height : size.width += d.width; // 拖动到距离底部至少160

      if (bottom && offsetHeight - offsetY < 160) {
        size.height = 100 - 160 / offsetY * 100 + '%';
      } // 拖动到距离右边至少260


      if (right && offsetWidth - offsetX < 260) {
        size.width = 100 - 260 / offsetX * 100 + '%';
      } // 拖动到左边的距离至少260


      if (right && offsetWidth - (offsetWidth - offsetX) - 212 < 260) {
        size.width = 260;
      }

      setSize(size);
      sessionStorage.removeItem('onResize');
    }
  };

  var onResizeStart = function onResizeStart() {
    if (!isFixed) {
      sessionStorage.setItem('onResize', true);
    }
  };

  return /*#__PURE__*/React.createElement(Resizable, {
    size: size,
    onResizeStop: onResizeStop,
    onResizeStart: onResizeStart,
    enable: showTab ? enable : null,
    minHeight: "120",
    minWidth: "2%",
    maxWidth: showTab && !bottom && right ? '98%' : '100%',
    className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(styles.borderBottom), showTab && bottom), _defineProperty(_classNames, "".concat(styles.borderRight), showTab && right), _classNames))
  }, /*#__PURE__*/React.createElement("div", {
    className: "hide-full"
  }, children));
};

export default DragCmp;