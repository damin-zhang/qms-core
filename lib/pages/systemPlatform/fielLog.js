"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logManageCmp = _interopRequireDefault(require("../../component/systemPlatform/logManage/logManageCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var treeData = [{
  title: '上传',
  key: '1-3-1',
  action: 'UPLOAD'
}, {
  title: '下载',
  key: '1-3-2',
  action: 'DOWNLOAD'
}, {
  title: '浏览',
  key: '1-3-3',
  action: 'BROWSE'
}];

var FielLog = function FielLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/_react.default.createElement(_logManageCmp.default, pops);
};

var _default = FielLog;
exports.default = _default;