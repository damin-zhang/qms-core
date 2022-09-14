"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _NoticeCmp = _interopRequireDefault(require("../../component/notice/NoticeCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Notice = function Notice(_ref) {
  var dispatch = _ref.dispatch,
      notice = _ref.notice,
      theme = _ref.theme,
      userName = _ref.userName;
  var _notice$allList = notice.allList,
      allList = _notice$allList === void 0 ? [] : _notice$allList,
      _notice$NoticeModelCm = notice.NoticeModelCmp,
      NoticeModelCmp = _notice$NoticeModelCm === void 0 ? function () {
    return /*#__PURE__*/_react.default.createElement("div", null);
  } : _notice$NoticeModelCm,
      _notice$visible = notice.visible,
      visible = _notice$visible === void 0 ? true : _notice$visible,
      _notice$selectedRowKe = notice.selectedRowKeys,
      selectedRowKeys = _notice$selectedRowKe === void 0 ? [] : _notice$selectedRowKe;

  var props = _objectSpread({
    allList: allList,
    // toDoList,
    dispatch: dispatch,
    theme: theme,
    NoticeModelCmp: NoticeModelCmp,
    selectedRowKeys: selectedRowKeys,
    visible: visible,
    userName: userName
  }, notice);

  return /*#__PURE__*/_react.default.createElement(_NoticeCmp.default, props);
}; //将model中state转为props


function mapStateToProps(_ref2) {
  var notice = _ref2.notice;
  return {
    notice: notice
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Notice);

exports.default = _default;