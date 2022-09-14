"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _ParseTable = _interopRequireDefault(require("./ParseTable"));

var _Search = _interopRequireDefault(require("../search/Search"));

var _SearchOpen = _interopRequireDefault(require("../search/SearchOpen"));

var _excluded = ["onSearch", "btns", "height", "disabled", "collapsed", "onSearchOpen", "record", "paging"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Item = _antd.Menu.Item;

var TableWithBtn = function TableWithBtn(props) {
  var onSearch = props.onSearch,
      _props$btns = props.btns,
      btns = _props$btns === void 0 ? [] : _props$btns,
      _props$height = props.height,
      height = _props$height === void 0 ? '100%' : _props$height,
      disabled = props.disabled,
      collapsed = props.collapsed,
      onSearchOpen = props.onSearchOpen,
      record = props.record,
      paging = props.paging,
      restProps = _objectWithoutProperties(props, _excluded);

  var hasBtn = onSearch || onSearchOpen || btns.length ? true : false;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y",
    style: {
      height: height
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      width: 'calc(100% - 96px)',
      minHeight: 33
    }
  }, btns.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: index
    }, item.btns ? /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
      disabled: item.disabled,
      trigger: ['click'],
      overlay: /*#__PURE__*/_react.default.createElement(_antd.Menu, null, item.btns.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(Item, {
          key: index,
          disabled: item.disabled,
          onClick: item.func
        }, item.name);
      }))
    }, /*#__PURE__*/_react.default.createElement(_antd.Button, null, item.name, " ", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null))) : item.title && item.title !== '' ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: item.title
    }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: item.func,
      type: "primary",
      key: item.name,
      disabled: item.disabled,
      icon: item.icon ? item.icon : null,
      style: item.icon && {
        minWidth: 32
      }
    }, item.name)) : /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: item.func,
      type: "primary",
      key: item.name,
      disabled: item.disabled,
      icon: item.icon ? item.icon : null,
      style: item.icon && {
        minWidth: 32
      }
    }, item.name));
  }), onSearchOpen && /*#__PURE__*/_react.default.createElement(_SearchOpen.default, {
    onSearch: onSearchOpen
  }), onSearch && /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: onSearch,
    disabled: disabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/_react.default.createElement(_ParseTable.default, _extends({
    paging: paging,
    hasBtn: hasBtn
  }, restProps, {
    className: "ant-list"
  }))));
};

var _default = TableWithBtn;
exports.default = _default;