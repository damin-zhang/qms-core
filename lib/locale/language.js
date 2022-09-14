"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zhCN = _interopRequireDefault(require("./zh-CN"));

var _enUS = _interopRequireDefault(require("./en-US"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 根据用户选择输出对应语言文件
 */

/* 首次进入页面设置语言 */
if (!localStorage.getItem('AcceptLanguage')) {
  localStorage['AcceptLanguage'] = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2);
}

var _default = localStorage.getItem('AcceptLanguage') === 'en' ? _enUS.default : _zhCN.default;

exports.default = _default;