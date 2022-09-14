"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _ProcessActivityPngCmp = _interopRequireDefault(require("../../../component/activiti/activitiCommon/ProcessActivityPngCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProcessActivityPng = function ProcessActivityPng(_ref) {
  var visible = _ref.visible,
      onCancel = _ref.onCancel,
      processActivityPng = _ref.processActivityPng;
  var xmlStr = processActivityPng.xmlStr,
      highLine = processActivityPng.highLine,
      highPoint = processActivityPng.highPoint,
      outDo = processActivityPng.outDo,
      waitingToDo = processActivityPng.waitingToDo,
      processInstanceId = processActivityPng.processInstanceId; //关闭模态框
  // const onCancel = () => {
  //   dispatch({
  //     type: 'processActivityPng/onCancel'
  //   })
  // }

  var props = {
    visible: visible,
    onCancel: onCancel,
    xmlStr: xmlStr,
    highLine: highLine,
    highPoint: highPoint,
    outDo: outDo,
    waitingToDo: waitingToDo,
    processInstanceId: processInstanceId
  };
  return /*#__PURE__*/_react.default.createElement(_ProcessActivityPngCmp.default, props);
};

function mapStateToProps(_ref2) {
  var processActivityPng = _ref2.processActivityPng;
  return {
    processActivityPng: processActivityPng
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(ProcessActivityPng);

exports.default = _default;