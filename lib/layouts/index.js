"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _dayjs = _interopRequireDefault(require("dayjs"));

require("dayjs/locale/zh-cn");

var _en_US = _interopRequireDefault(require("antd/es/locale/en_US"));

var _zh_CN = _interopRequireDefault(require("antd/es/locale/zh_CN"));

var _header = _interopRequireDefault(require("./header/header"));

var _menu = _interopRequireDefault(require("./menu/menu"));

var _Authorized = _interopRequireDefault(require("../component/authorized/Authorized"));

var _webSocket = _interopRequireDefault(require("./websocket/webSocket"));

var _index = _interopRequireDefault(require("./index.css"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _tab = _interopRequireDefault(require("./tab/tab"));

var _reactRouterDom = require("react-router-dom");

var _utils = require("../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Description: 布局
 */
//是否登录验证组件
_dayjs.default.locale('zh-cn');

var Content = _antd.Layout.Content;

var Index = function Index() {
  var validateMessages = {
    required: "".concat(_language.default.common.is_required),
    pattern: {
      mismatch: "".concat(_language.default.common.incorrect_format)
    },
    string: {
      max: "".concat(_language.default.common.max_len, ": ") + '${max}'
    }
  };
  (0, _react.useEffect)(function () {
    var watermark = localStorage.getItem('watermark');

    if (watermark) {
      var watermarkText = JSON.parse(watermark);
      watermarkText && watermarkText.text && (0, _utils.TpWatermark)(watermarkText);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_antd.ConfigProvider, {
    form: {
      validateMessages: validateMessages
    },
    locale: localStorage.getItem('AcceptLanguage') === 'en-US' ? _en_US.default : _zh_CN.default
  }, /*#__PURE__*/_react.default.createElement(_antd.Layout, {
    className: _index.default.root
  }, /*#__PURE__*/_react.default.createElement(_header.default, null), /*#__PURE__*/_react.default.createElement(_antd.Layout, {
    className: _index.default.main
  }, /*#__PURE__*/_react.default.createElement(_menu.default, null), /*#__PURE__*/_react.default.createElement(Content, {
    className: "content ant-layout-has-sider"
  }, /*#__PURE__*/_react.default.createElement(_tab.default, null)))), /*#__PURE__*/_react.default.createElement(_webSocket.default, null));
};

var _default = (0, _Authorized.default)(Index);

exports.default = _default;