import React from 'react';

var DataStats = function DataStats() {
  var href = window.location.href;
  var src = href.split('//')[1].split(':')[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "http://".concat(src, ":8080/webroot/decision/view/report?viewlet=\u6570\u636E\u9762\u677F1.frm"),
    width: "100%",
    height: "100%",
    title: "report"
  }));
};

export default DataStats;