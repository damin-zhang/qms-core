"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _antd = require("antd");

var _reactSvg = require("react-svg");

require("./index.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 左右布局 faceType: 3
 */
var TabPane = _antd.Tabs.TabPane;

var svgDir = require.context('../../../assets/icon/');

var _default = function _default(WrappedComponent) {
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

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props)), showTab && /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
      visible: showTab,
      width: "80%",
      closable: false,
      placement: "right",
      onClose: closeTab,
      zIndex: 999
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-grow-x",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
      defaultActiveKey: panes[0].key,
      tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null),
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

      return /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.icon && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
          className: "layoutThirdIcons",
          src: svgDir("./".concat(newIcon, ".svg"))
        }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null)), item.caption),
        key: item.key
      }, item.Cmp);
    })))));
  };
};

exports.default = _default;