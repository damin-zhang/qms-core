var _excluded = ["disabled", "onClick", "name", "label", "rules", "canInput", "icon", "iconColor", "allowClear"];

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
 * @Description: 带加号的输入框
 */
import React, { useState, useEffect } from 'react';
import { Input, Form, Button } from 'antd';
import * as ICON from '@ant-design/icons';
import './index.css';
import { ReactSVG } from 'react-svg';

var svgDir = require.context('../../../assets/icon/');

export default (function (_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick,
      name = _ref.name,
      label = _ref.label,
      rules = _ref.rules,
      canInput = _ref.canInput,
      icon = _ref.icon,
      iconColor = _ref.iconColor,
      allowClear = _ref.allowClear,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      NewIcon = _useState2[0],
      setIcon = _useState2[1];

  useEffect(function () {
    icon && setIcon(ICON["".concat(icon, "Outlined")]);
  }, [icon]);
  var thirdIcon = null;

  if (icon && icon.indexOf('third-') != -1) {
    //筛选第三方图标库的icons
    thirdIcon = icon.substring(6); //将第三方图标库标识去掉
  }

  return /*#__PURE__*/React.createElement(Form.Item, _extends({
    name: name,
    label: label,
    rules: rules
  }, rest), /*#__PURE__*/React.createElement(Input, {
    disabled: disabled || !canInput,
    defaultValue: rest.defaultValue ? rest.defaultValue : null,
    addonAfter: /*#__PURE__*/React.createElement(Button, {
      style: {
        height: '32px'
      },
      disabled: onClick ? false : true,
      type: "primary",
      onClick: onClick,
      icon: /*#__PURE__*/React.createElement(ICON.PlusOutlined, null)
    }),
    prefix: icon && (thirdIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
      style: {
        fill: iconColor || '#000'
      },
      className: "editorFieldThirdIcons",
      src: svgDir("./".concat(thirdIcon, ".svg"))
    }) : NewIcon && /*#__PURE__*/React.createElement(NewIcon, {
      style: {
        color: iconColor || '#000'
      }
    })),
    allowClear: allowClear,
    className: allowClear ? 'inputAllowClear' : ''
  }));
});