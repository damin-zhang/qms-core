"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ProcessActinst = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActinst"));

var _ProcessActivityPng = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessActivityPng"));

var _ProcessOpinion = _interopRequireDefault(require("../../../pages/activiti/activitiCommon/ProcessOpinion"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttons = _language.default.activiti.processState.buttons;

var ActRunProcessCmp = function ActRunProcessCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      paging = _ref.paging,
      visibleRunPro = _ref.visibleRunPro,
      closeRunPro = _ref.closeRunPro,
      visibleCancellation = _ref.visibleCancellation,
      cancellationModel = _ref.cancellationModel,
      onSearch = _ref.onSearch,
      visibleDetails = _ref.visibleDetails,
      dispatch = _ref.dispatch,
      PBList = _ref.PBList,
      PNList = _ref.PNList;
  var propTable = {
    columns: columns,
    dataList: list,
    paging: paging,
    onSearch: onSearch
  };
  var detailProps = {
    hData: list,
    visible: visibleDetails,
    PBList: PBList,
    PNList: PNList,
    dispatch: dispatch
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, propTable), visibleRunPro && /*#__PURE__*/_react.default.createElement(_ProcessActivityPng.default, {
    visible: visibleRunPro,
    onCancel: closeRunPro
  }), /*#__PURE__*/_react.default.createElement(_ProcessOpinion.default, {
    visible: visibleCancellation,
    cancel: cancellationModel
  }));
};

var _default = ActRunProcessCmp;
exports.default = _default;