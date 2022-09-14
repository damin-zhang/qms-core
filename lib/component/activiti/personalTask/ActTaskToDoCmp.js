"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _ProcessActivityPng = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActivityPng"));

var _ProcessActinst = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActinst"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttons = _language.default.activiti.processState.buttons;

var ActTaskToDoCmp = function ActTaskToDoCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      rowSelection = _ref.rowSelection,
      onSearch = _ref.onSearch,
      visibleToDoPro = _ref.visibleToDoPro,
      closeToDoPro = _ref.closeToDoPro,
      paging = _ref.paging;
  var tableProp = {
    columns: columns,
    dataList: list,
    rowSelection: rowSelection,
    onSearch: onSearch,
    paging: paging
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), /*#__PURE__*/_react.default.createElement(_ProcessActinst.default, null), visibleToDoPro && /*#__PURE__*/_react.default.createElement(_ProcessActivityPng.default, {
    visible: visibleToDoPro,
    onCancel: closeToDoPro
  }));
};

var _default = ActTaskToDoCmp;
exports.default = _default;