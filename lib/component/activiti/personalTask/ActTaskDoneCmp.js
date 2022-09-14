"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _ProcessActinst = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActinst"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _ProcessActivityPng = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActivityPng"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttons = _language.default.activiti.processState.buttons;

var ActTaskDoneCmp = function ActTaskDoneCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      rowSelection = _ref.rowSelection,
      visibleDonePro = _ref.visibleDonePro,
      closeDonePro = _ref.closeDonePro,
      onSearch = _ref.onSearch,
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
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), visibleDonePro && /*#__PURE__*/_react.default.createElement(_ProcessActivityPng.default, {
    visible: visibleDonePro,
    onCancel: closeDonePro
  }), /*#__PURE__*/_react.default.createElement(_ProcessActinst.default, null));
};

var _default = ActTaskDoneCmp;
exports.default = _default;