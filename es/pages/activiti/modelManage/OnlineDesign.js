import React from 'react';
import { connect } from 'dva'; // import data from '../../../../public/modeler.html'

var OnlineDesign = function OnlineDesign(_ref) {
  var dispatch = _ref.dispatch,
      onlineDesign = _ref.onlineDesign;
  var id = onlineDesign.id;
  return /*#__PURE__*/React.createElement("iframe", {
    width: "100%",
    height: "100%",
    title: '在线设计' // srcDoc={data}
    ,
    src: "/activiti-explorer/modeler.html?modelId=" + id,
    frameborder: "0"
  });
};

function mapStateToProps(_ref2) {
  var onlineDesign = _ref2.onlineDesign;
  return {
    onlineDesign: onlineDesign
  };
}

export default connect(mapStateToProps)(OnlineDesign);