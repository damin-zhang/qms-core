"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProcessActinst = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActinst"));

var _ProcessActivityPng = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActivityPng"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttons = _language.default.activiti.processState.buttons;

var ActRunProcessCmp = function ActRunProcessCmp(_ref) {
  var list = _ref.list,
      paging = _ref.paging,
      columns = _ref.columns,
      visibleEndPro = _ref.visibleEndPro,
      closeEndPro = _ref.closeEndPro,
      onSearch = _ref.onSearch;
  var propTable = {
    columns: columns,
    dataList: list,
    paging: paging,
    onSearch: onSearch
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, propTable), visibleEndPro && /*#__PURE__*/_react.default.createElement(_ProcessActivityPng.default, {
    visible: visibleEndPro,
    onCancel: closeEndPro
  }), /*#__PURE__*/_react.default.createElement(_ProcessActinst.default, null));
};

var _default = ActRunProcessCmp;
exports.default = _default;