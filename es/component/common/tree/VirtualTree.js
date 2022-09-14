var _excluded = ["data", "height", "width", "onExpandAllNodes"];

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
 * @Description: 虚拟滚动树
 */
import React, { useState, Fragment } from 'react';
import { Tree, Button, Tooltip } from 'antd';
import AutoSizer from 'react-virtualized-auto-sizer';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import language from '../../../locale/language';
var _language$common = language.common,
    expandAllNodes = _language$common.expandAllNodes,
    collapseAllNodes = _language$common.collapseAllNodes;
export default (function (_ref) {
  var data = _ref.data,
      height = _ref.height,
      width = _ref.width,
      onExpandAllNodes = _ref.onExpandAllNodes,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      down = _useState2[0],
      setDown = _useState2[1];

  var onClick = function onClick() {
    onExpandAllNodes(!down);
    setDown(!down);
  };

  return /*#__PURE__*/React.createElement(AutoSizer, {
    style: {
      width: width || '100%',
      height: height || '100%',
      position: 'relative'
    }
  }, function (_ref2) {
    var height = _ref2.height;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Tree, _extends({
      height: height
    }, rest), data), onExpandAllNodes && /*#__PURE__*/React.createElement(Tooltip, {
      title: !down ? expandAllNodes : collapseAllNodes
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onClick,
      type: "link",
      icon: !down ? /*#__PURE__*/React.createElement(DownOutlined, null) : /*#__PURE__*/React.createElement(UpOutlined, null),
      style: {
        position: 'absolute',
        right: 0,
        top: 0
      }
    })));
  });
});