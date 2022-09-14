"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _PropertyHoc = _interopRequireDefault(require("./property/PropertyHoc"));

var _Engine = _interopRequireDefault(require("./Engine"));

var _ChangeHistoryHoc = _interopRequireDefault(require("./relationPage/ChangeHistoryHoc"));

var _InputHoc = _interopRequireDefault(require("./relationPage/InputHoc"));

var _customRelationPage = _interopRequireDefault(require("./relationPage/customRelationPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _default(engine) {
  var namespace = engine.namespace,
      rType = engine.rType,
      params = engine.params,
      objectGrid = engine.objectGrid;

  var Cmp = function Cmp() {
    return /*#__PURE__*/_react.default.createElement("div", null);
  };

  switch (rType) {
    case 'relationproperty':
      Cmp = (0, _PropertyHoc.default)(engine)(Cmp);
      break;

    case 'relationpage':
    case 'classRelationpage':
      engine.faceType = 2;
      engine.relationType = 3;
      Cmp = (0, _Engine.default)(engine);
      break;

    case 'relationqueryview':
      var _ref = params || {},
          _ref$outreach = _ref.outreach,
          outreach = _ref$outreach === void 0 ? [] : _ref$outreach;

      outreach.sort(function (a, b) {
        return a.index - b.index;
      });
      var gridFieldList = JSON.parse(JSON.stringify(objectGrid.gridFieldList));
      outreach.forEach(function (item) {
        item.isOutreach = true;
        gridFieldList.splice(item.index - 1, 0, item);
      });
      Cmp = (0, _Engine.default)(_objectSpread(_objectSpread({}, engine), {}, {
        faceType: 2,
        objectGrid: _objectSpread(_objectSpread({}, objectGrid), {}, {
          gridFieldList: gridFieldList
        })
      }));
      break;

    case 'changeHistory':
      Cmp = (0, _ChangeHistoryHoc.default)(Cmp);
      break;

    case 'input':
    case 'output':
      Cmp = (0, _InputHoc.default)(engine)(Cmp);
      break;

    case 'processDetail':
      Cmp = (0, _customRelationPage.default)(engine)(Cmp);
      break;

    default:
  }

  function mapStateToProps(state) {
    return {
      model: state[namespace]
    };
  }

  return (0, _dva.connect)(mapStateToProps)(Cmp);
}