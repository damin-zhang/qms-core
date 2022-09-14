"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customWindow = void 0;
var customWindow = [{
  NO: 'controlChartSPC',
  COMPONENT: require('../component/engine/customWindow/ControlChartSPC').default
}, {
  NO: 'RohsQualityInspectionEntry',
  COMPONENT: require('../component/engine/customWindow/RohsInspectionEntry').default
}, {
  NO: 'RohsReport',
  COMPONENT: require('../component/engine/customWindow/RohsReport').default
}, {
  NO: 'reverseRualityReport',
  COMPONENT: require('../component/engine/customWindow/ReverseRualityReport').default
}, {
  NO: 'periodQualityInspectionEntry',
  COMPONENT: require('../component/engine/customWindow/PeriodInspectionEntry').default
}, {
  NO: 'periodQualityReport',
  COMPONENT: require('../component/engine/customWindow/PeriodQualityReport').default
}];
exports.customWindow = customWindow;