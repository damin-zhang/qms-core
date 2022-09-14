/*
 * @Description: 配置页面相关接口
 */
import request from './request';
var rootPath = '/api/query';
/**
 * @description: 配置页面通用查询接口
 * @param {type} implclass
 */

export function commonSingleQuery(parameters) {
  return request("".concat(rootPath, "/single/query"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 配置页面通用查询接口, 不分页
 * @param {type} implclass
 */

export function commonSingleQueryNoPaging(parameters) {
  return request("".concat(rootPath, "/single/query/noPage"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 查询子页面数据
 */

export function querySubPageModel(params) {
  return request("".concat(rootPath, "/relation/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询关联视图子页面数据
 */

export function queryRelationViewSubPageModel(params) {
  return request("".concat(rootPath, "/single/query/relViews"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询分类视图节点树对应数据
 */

export function queryClassObjectData(params) {
  return request("".concat(rootPath, "/single/query/nodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询右键菜单数据
 */

export function queryContextMenu(params) {
  return request("".concat(rootPath, "/single/query/nodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 配置页面通用查询接口
 * @param {type} implclass
 */

export function commonLikeQuery(parameters) {
  return request("".concat(rootPath, "/like/query"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 查询自动分类视图节点树对应数据
 */

export function queryAutoClassObjectData(params) {
  return request("".concat(rootPath, "/classView/getData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 任务输入查询
 */

export function queryInputData(params) {
  return request("".concat(rootPath, "/task/queryInPutData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 任务输入查询
 */

export function queryOutputData(params) {
  return request("".concat(rootPath, "/task/queryOutPutData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:日历视图查询
 */

export function queryCalendarViewAllData(params) {
  return request("".concat(rootPath, "/calendar/getAllData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 流程明细查询
 */

export function queryProcessDetailData(params) {
  return request("".concat(rootPath, "/relation/process"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 对象选择器查询接单
 */

export function objectSelectorQuery(parameters) {
  return request("".concat(rootPath, "/like/queryReference"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 分区字段对应数量
 */

export function queryDataClassFieldTotal(parameters) {
  return request("".concat(rootPath, "/total/queryDataClassFieldTotal"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 根据导航ID返回业务数据数量
 */

export function queryNavigationTotal(params) {
  return request("".concat(rootPath, "/total/queryNavigation"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 定制页面根据导航ID返回业务数据数量
 */

export function queryCustomNavigationTotal(params) {
  return request("".concat(rootPath, "/total/queryCustomNavigation"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}