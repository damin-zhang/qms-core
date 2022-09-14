import React from 'react';
import { connect } from 'dva';
import ProcessActivityPngCmp from '../../../component/activiti/activitiCommon/ProcessActivityPngCmp';

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
  return /*#__PURE__*/React.createElement(ProcessActivityPngCmp, props);
};

function mapStateToProps(_ref2) {
  var processActivityPng = _ref2.processActivityPng;
  return {
    processActivityPng: processActivityPng
  };
}

export default connect(mapStateToProps)(ProcessActivityPng);