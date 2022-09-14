"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonLikeQuery = commonLikeQuery;
exports.commonSingleQuery = commonSingleQuery;
exports.commonSingleQueryNoPaging = commonSingleQueryNoPaging;
exports.objectSelectorQuery = objectSelectorQuery;
exports.queryAutoClassObjectData = queryAutoClassObjectData;
exports.queryCalendarViewAllData = queryCalendarViewAllData;
exports.queryClassObjectData = queryClassObjectData;
exports.queryContextMenu = queryContextMenu;
exports.queryCustomNavigationTotal = queryCustomNavigationTotal;
exports.queryDataClassFieldTotal = queryDataClassFieldTotal;
exports.queryInputData = queryInputData;
exports.queryNavigationTotal = queryNavigationTotal;
exports.queryOutputData = queryOutputData;
exports.queryProcessDetailData = queryProcessDetailData;
exports.queryRelationViewSubPageModel = queryRelationViewSubPageModel;
exports.querySubPageModel = querySubPageModel;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 配置页面相关接口
 */
var rootPath = '/api/query';
/**
 * @description: 配置页面通用查询接口
 * @param {type} implclass
 */

function commonSingleQuery(parameters) {
  return (0, _request.default)("".concat(rootPath, "/single/query"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 配置页面通用查询接口, 不分页
 * @param {type} implclass
 */


function commonSingleQueryNoPaging(parameters) {
  return (0, _request.default)("".concat(rootPath, "/single/query/noPage"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 查询子页面数据
 */


function querySubPageModel(params) {
  return (0, _request.default)("".concat(rootPath, "/relation/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询关联视图子页面数据
 */


function queryRelationViewSubPageModel(params) {
  return (0, _request.default)("".concat(rootPath, "/single/query/relViews"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询分类视图节点树对应数据
 */


function queryClassObjectData(params) {
  return (0, _request.default)("".concat(rootPath, "/single/query/nodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询右键菜单数据
 */


function queryContextMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/single/query/nodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 配置页面通用查询接口
 * @param {type} implclass
 */


function commonLikeQuery(parameters) {
  return (0, _request.default)("".concat(rootPath, "/like/query"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 查询自动分类视图节点树对应数据
 */


function queryAutoClassObjectData(params) {
  return (0, _request.default)("".concat(rootPath, "/classView/getData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 任务输入查询
 */


function queryInputData(params) {
  return (0, _request.default)("".concat(rootPath, "/task/queryInPutData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 任务输入查询
 */


function queryOutputData(params) {
  return (0, _request.default)("".concat(rootPath, "/task/queryOutPutData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:日历视图查询
 */


function queryCalendarViewAllData(params) {
  return (0, _request.default)("".concat(rootPath, "/calendar/getAllData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 流程明细查询
 */


function queryProcessDetailData(params) {
  return (0, _request.default)("".concat(rootPath, "/relation/process"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 对象选择器查询接单
 */


function objectSelectorQuery(parameters) {
  return (0, _request.default)("".concat(rootPath, "/like/queryReference"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 分区字段对应数量
 */


function queryDataClassFieldTotal(parameters) {
  return (0, _request.default)("".concat(rootPath, "/total/queryDataClassFieldTotal"), {
    method: 'POST',
    body: JSON.stringify(parameters)
  });
}
/**
 * @description: 根据导航ID返回业务数据数量
 */


function queryNavigationTotal(params) {
  return (0, _request.default)("".concat(rootPath, "/total/queryNavigation"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 定制页面根据导航ID返回业务数据数量
 */


function queryCustomNavigationTotal(params) {
  return (0, _request.default)("".concat(rootPath, "/total/queryCustomNavigation"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}