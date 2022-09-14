"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewsBadness = viewsBadness;
exports.viewsInspection = viewsInspection;
exports.viewsInspectionNum = viewsInspectionNum;
exports.viewsSample = viewsSample;
exports.viewsSearch = viewsSearch;
exports.viewsSupplierDPPM = viewsSupplierDPPM;
exports.viewsSupplierRate = viewsSupplierRate;
exports.viewsTimeliness = viewsTimeliness;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 配置页面相关接口
 */
var rootPath = 'api/query';
/**
 * @description: 配置页面通用查询接口
 * @param {type} implclass
 */

/**
 * @description: 报表字段查询
 */

function viewsSearch(params) {
  return (0, _request.default)("".concat(rootPath, "/views/search"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 检验及时率
 */


function viewsTimeliness(params) {
  return (0, _request.default)("".concat(rootPath, "/views/timeliness"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 不良率
 */


function viewsBadness(params) {
  return (0, _request.default)("".concat(rootPath, "/views/badness"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 样件
 */


function viewsSample(params) {
  return (0, _request.default)("".concat(rootPath, "/views/sample"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 抽检批次比例
 */


function viewsInspection(params) {
  return (0, _request.default)("".concat(rootPath, "/views/inspection"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 抽检数量比例
 */


function viewsInspectionNum(params) {
  return (0, _request.default)("".concat(rootPath, "/views/inspection/num"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 供应商达标率
 */


function viewsSupplierRate(params) {
  return (0, _request.default)("".concat(rootPath, "/views/supplier/rate"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 供应商DPPM
 */


function viewsSupplierDPPM(params) {
  return (0, _request.default)("".concat(rootPath, "/views/supplier/ppm"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}