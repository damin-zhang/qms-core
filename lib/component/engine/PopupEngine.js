"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _PropertyHoc = _interopRequireDefault(require("./property/PropertyHoc"));

var _ModalHoc = _interopRequireDefault(require("./modal/ModalHoc"));

var _TableHoc = _interopRequireDefault(require("./table/TableHoc"));

var _BatchEditHoc = _interopRequireDefault(require("./property/BatchEditHoc"));

var _ReportHoc = _interopRequireDefault(require("./layout/ReportHoc"));

var _DataImportHoc = _interopRequireDefault(require("./property/DataImportHoc"));

var _UpAndDownHoc = _interopRequireDefault(require("./layout/UpAndDownHoc"));

var _BatchEdit = _interopRequireDefault(require("./batchEdit/BatchEdit"));

var _DrawerHoc = _interopRequireDefault(require("./modal/DrawerHoc"));

var _Enter = _interopRequireDefault(require("./loadInpectionEnter/Enter"));

var _Report = _interopRequireDefault(require("./inspectionReport/Report"));

var _CustomDrawer = _interopRequireDefault(require("../engine/modal/CustomDrawer"));

var _CustomWindow = _interopRequireDefault(require("./customWindow/CustomWindow"));

var _ExternalFile = _interopRequireDefault(require("../common/externalFile/ExternalFile"));

var _DetailRelationPage = _interopRequireDefault(require("./relationPage/DetailRelationPage"));

var _SpcControlChart = _interopRequireDefault(require("./spcControlChart/SpcControlChart"));

var _ImagePreview = _interopRequireDefault(require("./imagePreview/ImagePreview"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common;

function _default(engine) {
  var wType = engine.wType,
      caption = engine.caption,
      namespace = engine.namespace,
      params = engine.params;
  var width, height, placement;

  var Cmp = function Cmp() {
    return /*#__PURE__*/_react.default.createElement("div", null);
  };

  switch (wType) {
    case 'objectPropertyPage':
    case 'otherObjectPropertyPage':
    case 'classNodeObjectPropertyNo':
    case 'batchMaintain':
    case 'objectColumnPage':
    case 'detailForm':
      width = engine.width;
      Cmp = (0, _PropertyHoc.default)(engine)(Cmp);
      break;

    case 'batchEdit':
      width = '70%';
      Cmp = (0, _BatchEditHoc.default)(engine)(Cmp);
      break;

    case 'queryObjectView':
      height = 500;
      width = '60%';
      Cmp = (0, _TableHoc.default)(engine)(Cmp);
      break;

    case 'report':
      width = '80%';
      height = '500px';
      params = params || {};
      Cmp = (0, _ReportHoc.default)(_objectSpread(_objectSpread({
        title: caption
      }, params), engine));
      break;

    case 'dataImport':
      Cmp = (0, _DataImportHoc.default)(engine)(Cmp);
      break;

    case 'linkPage':
      width = '100%';
      placement = 'right';
      Cmp = (0, _TableHoc.default)(engine)(Cmp);
      Cmp = (0, _UpAndDownHoc.default)(engine)(Cmp);
      break;

    case 'LoadQualityInspectionEntry':
      width = '100%';
      placement = 'right';
      Cmp = (0, _Enter.default)(engine)(Cmp);
      break;

    case 'QualityInspectionReport':
      width = '100%';
      placement = 'right';
      Cmp = (0, _Report.default)(engine)(Cmp);
      break;

    case 'customWindow':
      width = '100%';
      Cmp = (0, _CustomWindow.default)(engine)(Cmp);
      break;

    case 'browseFiles':
      width = '70%';
      height = '600px';
      Cmp = (0, _CustomWindow.default)(engine)(Cmp);
      break;

    case 'ExternalFile':
      width = '500px';
      height = '200px';
      Cmp = (0, _ExternalFile.default)(engine)(Cmp);
      break;

    case 'detailRelationPage':
      width = '60%';
      height = 'calc(100vh - 134px)';
      Cmp = (0, _DetailRelationPage.default)(engine)(Cmp);
      break;

    case 'spcControlChart':
      Cmp = (0, _SpcControlChart.default)(engine)(Cmp);
      break;

    case 'imagePreview':
      width = '28%';
      Cmp = (0, _ImagePreview.default)(engine)(Cmp);
      break;

    default:
      width = 400;

      Cmp = function Cmp() {
        return /*#__PURE__*/_react.default.createElement("p", null, "".concat(common.makeSure).concat(caption, " ?"));
      };

  } // 最后包裹弹窗


  if (wType === 'QualityInspectionEntry' || wType === 'linkPage') {
    /* 质检录入为抽屉, 特殊处理; 后期可配置弹窗类型为抽屉或是Modal */
    Cmp = (0, _DrawerHoc.default)(_objectSpread(_objectSpread({}, engine), {}, {
      placement: placement,
      height: height,
      width: width
    }))(Cmp);
  } else if (wType === 'LoadQualityInspectionEntry' || wType === 'QualityInspectionReport') {
    Cmp = (0, _DrawerHoc.default)(_objectSpread(_objectSpread({}, engine), {}, {
      placement: placement,
      height: height,
      width: width
    }))(Cmp);
  } else if (wType === 'customWindow') {
    Cmp = (0, _CustomDrawer.default)(_objectSpread(_objectSpread({}, engine), {}, {
      height: height,
      width: width
    }))(Cmp);
  } else {
    Cmp = (0, _ModalHoc.default)(_objectSpread(_objectSpread({}, engine), {}, {
      height: height,
      width: width
    }))(Cmp);
  }

  function mapStateToProps(state) {
    return {
      model: state[namespace]
    };
  }

  return (0, _dva.connect)(mapStateToProps)(Cmp);
}