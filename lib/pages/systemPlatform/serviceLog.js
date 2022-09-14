"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logManageCmp = _interopRequireDefault(require("../../component/systemPlatform/logManage/logManageCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var treeData = [{
  title: '服务日志',
  key: '1-6',
  action: 'SERVICElog'
}];

var ServiceLog = function ServiceLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/_react.default.createElement(_logManageCmp.default, pops);
};

var _default = ServiceLog;
exports.default = _default;