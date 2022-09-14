function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";

/*
 * @Description: 弹窗渲染
 */
import { connect } from 'dva';
import PropertyHoc from './property/PropertyHoc';
import ModalHoc from './modal/ModalHoc';
import TableHoc from './table/TableHoc';
import BatchEditHoc from './property/BatchEditHoc';
import ReportHoc from './layout/ReportHoc';
import DataImportHoc from './property/DataImportHoc';
import UpAndDownHoc from './layout/UpAndDownHoc';
import BatchEdit from './batchEdit/BatchEdit';
import DrawerHoc from './modal/DrawerHoc';
import LoadEnter from './loadInpectionEnter/Enter';
import Report from './inspectionReport/Report';
import CustomDrawer from '../engine/modal/CustomDrawer';
import CustomWindow from './customWindow/CustomWindow';
import ExternalFile from '../common/externalFile/ExternalFile';
import DetailRelationPage from './relationPage/DetailRelationPage';
import SpcControlChart from './spcControlChart/SpcControlChart';
import ImagePreview from './imagePreview/ImagePreview';
import language from '@/locale/language';
var common = language.common;
export default function (engine) {
  var wType = engine.wType,
      caption = engine.caption,
      namespace = engine.namespace,
      params = engine.params;
  var width, height, placement;

  var Cmp = function Cmp() {
    return /*#__PURE__*/React.createElement("div", null);
  };

  switch (wType) {
    case 'objectPropertyPage':
    case 'otherObjectPropertyPage':
    case 'classNodeObjectPropertyNo':
    case 'batchMaintain':
    case 'objectColumnPage':
    case 'detailForm':
      width = engine.width;
      Cmp = PropertyHoc(engine)(Cmp);
      break;

    case 'batchEdit':
      width = '70%';
      Cmp = BatchEditHoc(engine)(Cmp);
      break;

    case 'queryObjectView':
      height = 500;
      width = '60%';
      Cmp = TableHoc(engine)(Cmp);
      break;

    case 'report':
      width = '80%';
      height = '500px';
      params = params || {};
      Cmp = ReportHoc(_objectSpread(_objectSpread({
        title: caption
      }, params), engine));
      break;

    case 'dataImport':
      Cmp = DataImportHoc(engine)(Cmp);
      break;

    case 'linkPage':
      width = '100%';
      placement = 'right';
      Cmp = TableHoc(engine)(Cmp);
      Cmp = UpAndDownHoc(engine)(Cmp);
      break;

    case 'LoadQualityInspectionEntry':
      width = '100%';
      placement = 'right';
      Cmp = LoadEnter(engine)(Cmp);
      break;

    case 'QualityInspectionReport':
      width = '100%';
      placement = 'right';
      Cmp = Report(engine)(Cmp);
      break;

    case 'customWindow':
      width = '100%';
      Cmp = CustomWindow(engine)(Cmp);
      break;

    case 'browseFiles':
      width = '70%';
      height = '600px';
      Cmp = CustomWindow(engine)(Cmp);
      break;

    case 'ExternalFile':
      width = '500px';
      height = '200px';
      Cmp = ExternalFile(engine)(Cmp);
      break;

    case 'detailRelationPage':
      width = '60%';
      height = 'calc(100vh - 134px)';
      Cmp = DetailRelationPage(engine)(Cmp);
      break;

    case 'spcControlChart':
      Cmp = SpcControlChart(engine)(Cmp);
      break;

    case 'imagePreview':
      width = '28%';
      Cmp = ImagePreview(engine)(Cmp);
      break;

    default:
      width = 400;

      Cmp = function Cmp() {
        return /*#__PURE__*/React.createElement("p", null, "".concat(common.makeSure).concat(caption, " ?"));
      };

  } // 最后包裹弹窗


  if (wType === 'QualityInspectionEntry' || wType === 'linkPage') {
    /* 质检录入为抽屉, 特殊处理; 后期可配置弹窗类型为抽屉或是Modal */
    Cmp = DrawerHoc(_objectSpread(_objectSpread({}, engine), {}, {
      placement: placement,
      height: height,
      width: width
    }))(Cmp);
  } else if (wType === 'LoadQualityInspectionEntry' || wType === 'QualityInspectionReport') {
    Cmp = DrawerHoc(_objectSpread(_objectSpread({}, engine), {}, {
      placement: placement,
      height: height,
      width: width
    }))(Cmp);
  } else if (wType === 'customWindow') {
    Cmp = CustomDrawer(_objectSpread(_objectSpread({}, engine), {}, {
      height: height,
      width: width
    }))(Cmp);
  } else {
    Cmp = ModalHoc(_objectSpread(_objectSpread({}, engine), {}, {
      height: height,
      width: width
    }))(Cmp);
  }

  function mapStateToProps(state) {
    return {
      model: state[namespace]
    };
  }

  return connect(mapStateToProps)(Cmp);
}