"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import data from '../../../../public/modeler.html'
var OnlineDesign = function OnlineDesign(_ref) {
  var dispatch = _ref.dispatch,
      onlineDesign = _ref.onlineDesign;
  var id = onlineDesign.id;
  return /*#__PURE__*/_react.default.createElement("iframe", {
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

var _default = (0, _dva.connect)(mapStateToProps)(OnlineDesign);

exports.default = _default;