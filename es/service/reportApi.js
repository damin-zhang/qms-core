/*
 * @Description: 配置页面相关接口
 */
import request from './request';
var rootPath = 'api/query';
/**
 * @description: 配置页面通用查询接口
 * @param {type} implclass
 */

/**
 * @description: 报表字段查询
 */

export function viewsSearch(params) {
  return request("".concat(rootPath, "/views/search"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 检验及时率
 */

export function viewsTimeliness(params) {
  return request("".concat(rootPath, "/views/timeliness"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 不良率
 */

export function viewsBadness(params) {
  return request("".concat(rootPath, "/views/badness"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 样件
 */

export function viewsSample(params) {
  return request("".concat(rootPath, "/views/sample"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 抽检批次比例
 */

export function viewsInspection(params) {
  return request("".concat(rootPath, "/views/inspection"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 抽检数量比例
 */

export function viewsInspectionNum(params) {
  return request("".concat(rootPath, "/views/inspection/num"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 供应商达标率
 */

export function viewsSupplierRate(params) {
  return request("".concat(rootPath, "/views/supplier/rate"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 供应商DPPM
 */

export function viewsSupplierDPPM(params) {
  return request("".concat(rootPath, "/views/supplier/ppm"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}