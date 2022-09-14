import React from 'react';

var reportManagement = function reportManagement() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    title: 'item',
    id: "application",
    src: "/api/application/jmreport/list",
    frameborder: "0"
  }));
};

export default reportManagement;