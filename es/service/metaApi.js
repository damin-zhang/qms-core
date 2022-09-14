/*
 * @Description: 业务对象Meta相关API汇总
 */
import request from './request';
var rootPath = 'api/meta';
var modelPath = '/metaTemplate/';
/**
 * @description: 开启建模
 */

export function openModel() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return request('/api/meta/base/open', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 关闭建模
 */

export function closeModel() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return request('/api/meta/base/close', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 切换语言
 */

export function changeLanguage(params) {
  return request('/api/meta/language/switch', {
    method: 'POST',
    body: JSON.stringify(params)
  });
} // 业务对象相关接口

/**
 * @description: 查询业务对象
 * @param {type}: tableName/condition
 * @return: dataList
 */

export function queryObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObject/packet?queryParam=").concat(params));
}
/**
 * @description: 查询全部业务对象
 * @param {type}: tableName/condition
 * @return: dataList
 */

export function queryAllObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObject/queryAllObject?queryParam=").concat(params));
}
/**
 * @description: 搜索全部业务对象
 * @param {type}: tableName/condition
 * @return: dataList
 */

export function searchAllObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObject/searchObject?queryParam=").concat(params));
}
/**
 * @description: 搜索业务对象
 * @param {type}: tableName/queryWord
 * @return: dataList
 */

export function searchObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObject/queryKeyWord?queryParam=").concat(params));
}
/**
 * @description: 搜索模型菜单
 * @param {type}: tableName/queryWord
 * @return: dataList
 */

export function searchMenuLibrary(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaMenuLibrary/searchMetaMenuLibrary?queryParam=").concat(params));
}
/**
 * @description: 查询未同步和变更中的对象
 * @param {type}: tableName/queryWord
 * @return: dataList
 */

export function queryWorkObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObject/queryWork?queryParam=").concat(params));
}
/**
 * @description: 搜索未同步和变更中的对象
 * @param {type}: tableName/queryWord
 * @return: dataList
 */

export function searchWorkObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObject/queryWorkKeyWord?queryParam=").concat(params));
}
/**
 * @description: 根据业务对象标识查询字段
 * @param {type}: TableName
 * @return: []
 */

export function queryObjFields(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObjectField/getMetaObjectFieldByTab?queryParam=").concat(params));
}
/**
 * @description: 新增业务对象
 * @param {type} data[]/tableName
 */

export function addObject(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改业务对象
 * @param {type} data[]/tableName
 */

export function editObject(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改导航菜单业务对象配置参数
 * @param {type} data[]/tableName
 */

export function editNavMenuObjectParams(params) {
  return request("".concat(rootPath, "/metaNavigation/updateParams"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 升版业务对象
 * @param {type} data{}/tableName
 */

export function upgradeObject(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 取消升版业务对象
 * @param {type} data{}/tableName
 */

export function cancelUpgradeObject(params) {
  return request("".concat(rootPath, "/base/cancelUpgrade"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 同步业务对象
 * @param {type} data{}/tableName
 */

export function synchroObject(params) {
  return request("".concat(rootPath, "/metaSynchronous/single"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 同步所有业务对象
 */

export function synchroAllObject() {
  return request("".concat(rootPath, "/metaSynchronous/all"), {
    method: 'POST'
  });
}
/**
 * @description: 获取已同步业务对象列表
 */

export function synchroSpeed() {
  return request("".concat(rootPath, "/metaSynchronous/speed"), {
    method: 'POST'
  });
}
/**
 * @description: 刷新建模
 * @param {type} data{}/tableName
 */

export function refreshMeta(params) {
  return request("".concat(rootPath, "/metaSynchronous/refreshMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象
 * @param {type} data[]/tableName
 */

export function delObject(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 复制业务对象
 * @param {type} data[]/tableName
 */

export function copyObject(params) {
  return request("".concat(rootPath, "/base/copy"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 转换业务对象为文件对象
 * @param {type} data[]/tableName
 */

export function changeFile(params) {
  return request("".concat(rootPath, "/base/transformToFileObject"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/condition: `itemId='${PID}'`
 * @return: dataList
 */

export function queryItem(params, path) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath).concat(path, "?queryParam=").concat(params));
}
/**
 * @description: 查询全局表格字段
 * @param {type}: tableName/condition: `itemId='${PID}'`
 * @return: dataList
 */

export function queryGlobalField(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObjectRelationInfo/selectGlobalGridField?queryParam=").concat(params));
}
/**
 * @description: 根据标识和表名查询关联页和属性页
 * @param {type}: tableName/itemNo
 * @return: dataList
 */

export function queryItemPGR(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObjectField/getObjectByTab?queryParam=").concat(params));
}
/**
 * @description: 新增业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/uData/data
 * params: metaObjectParameters方法返回
 * secondPath: /metaObjectField
 * requestType: create
 */

export function addItem(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/uData/data
 */

export function editItem(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 业务对象关联数据：新增常用字段
 * @param {type}: meta
 */

export function creatCommField(params) {
  return request("".concat(rootPath, "/commonField/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 业务对象关联数据：修改常用字段
 * @param {type}: fieldId /meta
 */

export function updateCommField(params) {
  return request("".concat(rootPath, "/commonField/update"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象常用字段
 * @param {type}: fieldId
 */

export function delCommField(params) {
  return request("".concat(rootPath, "/commonField/delete"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/data[]/state
 */

export function delItem(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询第三级关联数据：属性页字段/表格页字段/关联页等
 * @param {type}: tableName/condition: `rootId=${PID}`
 * @return: dataList
 */

export function queryRootItem(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaObjectRelationInfo/selectByCondition?queryParam=").concat(params));
}
/**
 * @description: 新增业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/PID/fk:'itemId'/data
 */

export function addRootItem(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/uData/data
 */

export function editRootItem(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/data[]/state
 */

export function delRootItem(params, secondPath, requestType) {
  return request("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重新排序
 * @param {type}: tableName/hData[]
 */

export function reorder(params) {
  return request("".concat(rootPath, "/metaObjectMenu/sort"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询单对象建模
 * @param {type} faceType/pageId/objectNo/itemGridNo
 */

export function querySingleModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询分类视图建模
 * @param {type} faceType: 4
 */

export function queryClassModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getClassNodeMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询自动分类视图建模
 * @param {type} faceType: 5
 */

export function queryAutoClassModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getClassViewMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:刷新自动分类视图树
 * @param {type} faceType: 5
 */

export function refreshAutoClassTree(params) {
  return request("".concat(rootPath, "/metaToWbeClient/refreshClassViewTreeNodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询属性页建模
 */

export function queryPropertyModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getMeta/getObjectFormData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询关联页建模
 */

export function queryRelationModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getMeta/relationPageData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取查询视图模型
 */

export function getQueryViewModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getMeta/queryViewData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 恢复历史建模
 */

export function migrateModelData() {
  return request("".concat(rootPath, "/migrateHistoricalMeta"), {
    method: 'POST'
  });
} // 导航菜单相关接口

/**
 * @description: 查询导航菜单
 * @param {type}: tableName
 * @return: dataList
 */

export function queryMenu(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaNavigation/getMetaNavigation?queryParam=").concat(params));
}
/**
 * @description: 新增导航菜单
 * @param {type} data/tableName
 */

export function addMenu(params) {
  return request("".concat(rootPath, "/metaNavigation/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询表格建模
 * @param {type} itemNO/itemGridNo
 */

export function queryGridModel(params) {
  return request("".concat(rootPath, "/metaToWbeClient/getMeta/gridData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 表格拖拽排序
 */

export function moveRow(params) {
  return request("".concat(rootPath, "/metaObjectRelationInfo/moveUpOrDown"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 树形表格拖拽排序
 */

export function moveMenu(params) {
  return request("".concat(rootPath, "/metaObjectRelationInfo/moveMenu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导航菜单转移节点
 */

export function moveNodeData(params) {
  return request("".concat(rootPath, "/metaObjectRelation/changeNode"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导航菜单转移节点
 */

export function queryMetaAuthcode() {
  return request("".concat(rootPath, "/metaObjectMenu/authCode"), {
    method: 'POST'
  });
}
/**
 * @description: 待办任务导航模块页
 */

export function todoTaskMetaToWbeClient(params) {
  var formData = new FormData();
  formData.append('queryParam', JSON.stringify(params));
  return request("".concat(rootPath, "/metaToWbeClient/page/model"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 检验模板接口:查询
 */

export function inspectionModelQuery(_ref) {
  var modelPath = _ref.modelPath,
      values = _ref.values;
  values = encodeURIComponent(JSON.stringify(values));
  return request("".concat(rootPath, "/").concat(modelPath, "/query?queryParam=").concat(values));
}
/**
 * @description: 检验模板接口:新建，修改，删除
 */

export function inspectionModelClient(_ref2) {
  var values = _ref2.values,
      type = _ref2.type;
  return request("".concat(rootPath).concat(modelPath).concat(type), {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
/**
 * @description: 检验模板header,body,footer接口:新建，修改，删除，排序
 */

export function inspectionItem(_ref3) {
  var values = _ref3.values,
      modelPath = _ref3.modelPath,
      type = _ref3.type;
  return request("".concat(rootPath, "/").concat(modelPath, "/").concat(type), {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
/* @description: 查询检验模板
 * @param {type}: tableName
 * @return: dataList
 */

export function queryTemplateNo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaTemplate/queryMetaTemplateNo?queryParam=").concat(params));
}
/**
 * @description: 查询检验模板建模
 * @param {type}: templateNo
 * @return: dataList
 */

export function getTemplateMetaData(params) {
  return request("".concat(rootPath, "/metaTemplate/showInsTemplate"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询检验模板建模
 * @param {type}: {page, pageSize, keyWord}
 * @return: dataList
 */

export function getMetaScriptData(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("".concat(rootPath, "/metaScript/queryMetaScript?queryParam=").concat(params));
}
/**
 * @description: 新建JS脚本
 * @param {type}: {no, name, rType, remark, scriptValue}
 * @return: flag
 */

export function createJsScript(params) {
  return request("".concat(rootPath, "/metaScript/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改JS脚本
 * @param {type}: {no, name, rType, remark, scriptValue}
 * @return: flag
 */

export function updateJsScript(params) {
  return request("".concat(rootPath, "/metaScript/update"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除JS脚本
 * @param {type}: {}
 * @return: flag
 */

export function deleteJsScript(params) {
  return request("".concat(rootPath, "/metaScript/delete"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}