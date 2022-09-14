"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _utils = require("../../../utils/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      caption = caption ? caption : _utils.isEnglish ? enName : name || 'undefined';
      var model = props.model,
          dispatch = props.dispatch;

      var onCancel = function onCancel() {
        var payload = _defineProperty({}, menuId, false);

        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: payload
        });
      };

      return /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
        title: caption,
        placement: placement,
        onClose: onCancel,
        visible: model[menuId],
        width: width,
        height: height,
        destroyOnClose: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100%',
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props)));
    };

    return ChildCmp;
  };
};

var _default = DrawerHoc;
exports.default = _default;