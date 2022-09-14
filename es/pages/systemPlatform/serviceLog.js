import React from 'react';
import LogManageCmp from '../../component/systemPlatform/logManage/logManageCmp';
var treeData = [{
  title: '服务日志',
  key: '1-6',
  action: 'SERVICElog'
}];

var ServiceLog = function ServiceLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/React.createElement(LogManageCmp, pops);
};

export default ServiceLog;