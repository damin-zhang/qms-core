import React from 'react';
import LogManageCmp from '../../component/systemPlatform/logManage/logManageCmp';
var treeData = [{
  title: '上传',
  key: '1-3-1',
  action: 'UPLOAD'
}, {
  title: '下载',
  key: '1-3-2',
  action: 'DOWNLOAD'
}, {
  title: '浏览',
  key: '1-3-3',
  action: 'BROWSE'
}];

var FielLog = function FielLog() {
  var pops = {
    treeData: treeData
  };
  return /*#__PURE__*/React.createElement(LogManageCmp, pops);
};

export default FielLog;