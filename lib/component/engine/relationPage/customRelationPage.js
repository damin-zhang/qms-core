"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProcessDetail = _interopRequireDefault(require("./ProcessDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 关联页流程明细
var _default = function _default(engine) {
  return function (customRelationPage) {
    var Cmp = function Cmp(_ref) {
      var _ref$model = _ref.model,
          model = _ref$model === void 0 ? {} : _ref$model;
      var dataList = model.dataList;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProcessDetail.default, {
        dataList: dataList
      }));
    };

    return Cmp;
  };
};

exports.default = _default;