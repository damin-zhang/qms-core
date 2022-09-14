import React from 'react';
import LogManageCmp from '../../component/systemPlatform/logManage/logManageCmp';
var treeData = [{
  title: '其它',
  key: '1-5',
  action: 'OTHER'
}];

var SystemLog = function SystemLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/React.createElement(LogManageCmp, pops);
};

export default SystemLog;