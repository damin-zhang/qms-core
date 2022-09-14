"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ActProcess = _interopRequireDefault(require("../../../pages/activiti/ProcessManage/ActProcess"));

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartProcessCmp = function StartProcessCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      pagination = _ref.pagination,
      changePicture = _ref.changePicture,
      visible = _ref.visible,
      pictureUrl = _ref.pictureUrl;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Table, {
    bordered: true,
    dataSource: list,
    columns: columns,
    size: "small",
    pagination: pagination
  }), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: "\u6D41\u7A0B\u8BBE\u8BA1\u56FE",
    onCancel: changePicture,
    visible: visible
  }, /*#__PURE__*/_react.default.createElement("iframe", {
    title: "op",
    src: pictureUrl,
    frameBorder: "0",
    scrolling: "no",
    style: {
      width: '100%',
      height: 300,
      border: 0
    }
  })), /*#__PURE__*/_react.default.createElement(_ActProcess.default, null));
};

var _default = StartProcessCmp;
exports.default = _default;