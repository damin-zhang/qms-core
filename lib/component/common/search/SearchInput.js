"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var ICON = _interopRequireWildcard(require("@ant-design/icons"));

require("./index.css");

var _reactSvg = require("react-svg");

var _excluded = ["disabled", "onClick", "name", "label", "rules", "canInput", "icon", "iconColor", "allowClear"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var svgDir = require.context('../../../assets/icon/');

var _default = function _default(_ref) {
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

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      NewIcon = _useState2[0],
      setIcon = _useState2[1];

  (0, _react.useEffect)(function () {
    icon && setIcon(ICON["".concat(icon, "Outlined")]);
  }, [icon]);
  var thirdIcon = null;

  if (icon && icon.indexOf('third-') != -1) {
    //???????????????????????????icons
    thirdIcon = icon.substring(6); //?????????????????????????????????
  }

  return /*#__PURE__*/_react.default.createElement(_antd.Form.Item, _extends({
    name: name,
    label: label,
    rules: rules
  }, rest), /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: disabled || !canInput,
    defaultValue: rest.defaultValue ? rest.defaultValue : null,
    addonAfter: /*#__PURE__*/_react.default.createElement(_antd.Button, {
      style: {
        height: '32px'
      },
      disabled: onClick ? false : true,
      type: "primary",
      onClick: onClick,
      icon: /*#__PURE__*/_react.default.createElement(ICON.PlusOutlined, null)
    }),
    prefix: icon && (thirdIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
      style: {
        fill: iconColor || '#000'
      },
      className: "editorFieldThirdIcons",
      src: svgDir("./".concat(thirdIcon, ".svg"))
    }) : NewIcon && /*#__PURE__*/_react.default.createElement(NewIcon, {
      style: {
        color: iconColor || '#000'
      }
    })),
    allowClear: allowClear,
    className: allowClear ? 'inputAllowClear' : ''
  }));
};

exports.default = _default;