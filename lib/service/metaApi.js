"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addItem = addItem;
exports.addMenu = addMenu;
exports.addObject = addObject;
exports.addRootItem = addRootItem;
exports.cancelUpgradeObject = cancelUpgradeObject;
exports.changeFile = changeFile;
exports.changeLanguage = changeLanguage;
exports.closeModel = closeModel;
exports.copyObject = copyObject;
exports.creatCommField = creatCommField;
exports.createJsScript = createJsScript;
exports.delCommField = delCommField;
exports.delItem = delItem;
exports.delObject = delObject;
exports.delRootItem = delRootItem;
exports.deleteJsScript = deleteJsScript;
exports.editItem = editItem;
exports.editNavMenuObjectParams = editNavMenuObjectParams;
exports.editObject = editObject;
exports.editRootItem = editRootItem;
exports.getMetaScriptData = getMetaScriptData;
exports.getQueryViewModel = getQueryViewModel;
exports.getTemplateMetaData = getTemplateMetaData;
exports.inspectionItem = inspectionItem;
exports.inspectionModelClient = inspectionModelClient;
exports.inspectionModelQuery = inspectionModelQuery;
exports.migrateModelData = migrateModelData;
exports.moveMenu = moveMenu;
exports.moveNodeData = moveNodeData;
exports.moveRow = moveRow;
exports.openModel = openModel;
exports.queryAllObject = queryAllObject;
exports.queryAutoClassModel = queryAutoClassModel;
exports.queryClassModel = queryClassModel;
exports.queryGlobalField = queryGlobalField;
exports.queryGridModel = queryGridModel;
exports.queryItem = queryItem;
exports.queryItemPGR = queryItemPGR;
exports.queryMenu = queryMenu;
exports.queryMetaAuthcode = queryMetaAuthcode;
exports.queryObjFields = queryObjFields;
exports.queryObject = queryObject;
exports.queryPropertyModel = queryPropertyModel;
exports.queryRelationModel = queryRelationModel;
exports.queryRootItem = queryRootItem;
exports.querySingleModel = querySingleModel;
exports.queryTemplateNo = queryTemplateNo;
exports.queryWorkObject = queryWorkObject;
exports.refreshAutoClassTree = refreshAutoClassTree;
exports.refreshMeta = refreshMeta;
exports.reorder = reorder;
exports.searchAllObject = searchAllObject;
exports.searchMenuLibrary = searchMenuLibrary;
exports.searchObject = searchObject;
exports.searchWorkObject = searchWorkObject;
exports.synchroAllObject = synchroAllObject;
exports.synchroObject = synchroObject;
exports.synchroSpeed = synchroSpeed;
exports.todoTaskMetaToWbeClient = todoTaskMetaToWbeClient;
exports.updateCommField = updateCommField;
exports.updateJsScript = updateJsScript;
exports.upgradeObject = upgradeObject;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 业务对象Meta相关API汇总
 */
var rootPath = 'api/meta';
var modelPath = '/metaTemplate/';
/**
 * @description: 开启建模
 */

function openModel() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)('/api/meta/base/open', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 关闭建模
 */


function closeModel() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)('/api/meta/base/close', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 切换语言
 */


function changeLanguage(params) {
  return (0, _request.default)('/api/meta/language/switch', {
    method: 'POST',
    body: JSON.stringify(params)
  });
} // 业务对象相关接口

/**
 * @description: 查询业务对象
 * @param {type}: tableName/condition
 * @return: dataList
 */


function queryObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/packet?queryParam=").concat(params));
}
/**
 * @description: 查询全部业务对象
 * @param {type}: tableName/condition
 * @return: dataList
 */


function queryAllObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryAllObject?queryParam=").concat(params));
}
/**
 * @description: 搜索全部业务对象
 * @param {type}: tableName/condition
 * @return: dataList
 */


function searchAllObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/searchObject?queryParam=").concat(params));
}
/**
 * @description: 搜索业务对象
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function searchObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryKeyWord?queryParam=").concat(params));
}
/**
 * @description: 搜索模型菜单
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function searchMenuLibrary(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaMenuLibrary/searchMetaMenuLibrary?queryParam=").concat(params));
}
/**
 * @description: 查询未同步和变更中的对象
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function queryWorkObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryWork?queryParam=").concat(params));
}
/**
 * @description: 搜索未同步和变更中的对象
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function searchWorkObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryWorkKeyWord?queryParam=").concat(params));
}
/**
 * @description: 根据业务对象标识查询字段
 * @param {type}: TableName
 * @return: []
 */


function queryObjFields(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectField/getMetaObjectFieldByTab?queryParam=").concat(params));
}
/**
 * @description: 新增业务对象
 * @param {type} data[]/tableName
 */


function addObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改业务对象
 * @param {type} data[]/tableName
 */


function editObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改导航菜单业务对象配置参数
 * @param {type} data[]/tableName
 */


function editNavMenuObjectParams(params) {
  return (0, _request.default)("".concat(rootPath, "/metaNavigation/updateParams"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 升版业务对象
 * @param {type} data{}/tableName
 */


function upgradeObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 取消升版业务对象
 * @param {type} data{}/tableName
 */


function cancelUpgradeObject(params) {
  return (0, _request.default)("".concat(rootPath, "/base/cancelUpgrade"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 同步业务对象
 * @param {type} data{}/tableName
 */


function synchroObject(params) {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/single"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 同步所有业务对象
 */


function synchroAllObject() {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/all"), {
    method: 'POST'
  });
}
/**
 * @description: 获取已同步业务对象列表
 */


function synchroSpeed() {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/speed"), {
    method: 'POST'
  });
}
/**
 * @description: 刷新建模
 * @param {type} data{}/tableName
 */


function refreshMeta(params) {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/refreshMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象
 * @param {type} data[]/tableName
 */


function delObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 复制业务对象
 * @param {type} data[]/tableName
 */


function copyObject(params) {
  return (0, _request.default)("".concat(rootPath, "/base/copy"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 转换业务对象为文件对象
 * @param {type} data[]/tableName
 */


function changeFile(params) {
  return (0, _request.default)("".concat(rootPath, "/base/transformToFileObject"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/condition: `itemId='${PID}'`
 * @return: dataList
 */


function queryItem(params, path) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath).concat(path, "?queryParam=").concat(params));
}
/**
 * @description: 查询全局表格字段
 * @param {type}: tableName/condition: `itemId='${PID}'`
 * @return: dataList
 */


function queryGlobalField(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/selectGlobalGridField?queryParam=").concat(params));
}
/**
 * @description: 根据标识和表名查询关联页和属性页
 * @param {type}: tableName/itemNo
 * @return: dataList
 */


function queryItemPGR(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectField/getObjectByTab?queryParam=").concat(params));
}
/**
 * @description: 新增业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/uData/data
 * params: metaObjectParameters方法返回
 * secondPath: /metaObjectField
 * requestType: create
 */


function addItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/uData/data
 */


function editItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 业务对象关联数据：新增常用字段
 * @param {type}: meta
 */


function creatCommField(params) {
  return (0, _request.default)("".concat(rootPath, "/commonField/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 业务对象关联数据：修改常用字段
 * @param {type}: fieldId /meta
 */


function updateCommField(params) {
  return (0, _request.default)("".concat(rootPath, "/commonField/update"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象常用字段
 * @param {type}: fieldId
 */


function delCommField(params) {
  return (0, _request.default)("".concat(rootPath, "/commonField/delete"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/data[]/state
 */


function delItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询第三级关联数据：属性页字段/表格页字段/关联页等
 * @param {type}: tableName/condition: `rootId=${PID}`
 * @return: dataList
 */


function queryRootItem(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/selectByCondition?queryParam=").concat(params));
}
/**
 * @description: 新增业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/PID/fk:'itemId'/data
 */


function addRootItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/uData/data
 */


function editRootItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象关联数据：字段/菜单/属性页等
 * @param {type}: tableName/data[]/state
 */


function delRootItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重新排序
 * @param {type}: tableName/hData[]
 */


function reorder(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectMenu/sort"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询单对象建模
 * @param {type} faceType/pageId/objectNo/itemGridNo
 */


function querySingleModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询分类视图建模
 * @param {type} faceType: 4
 */


function queryClassModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getClassNodeMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询自动分类视图建模
 * @param {type} faceType: 5
 */


function queryAutoClassModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getClassViewMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:刷新自动分类视图树
 * @param {type} faceType: 5
 */


function refreshAutoClassTree(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/refreshClassViewTreeNodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询属性页建模
 */


function queryPropertyModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/getObjectFormData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询关联页建模
 */


function queryRelationModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/relationPageData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取查询视图模型
 */


function getQueryViewModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/queryViewData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 恢复历史建模
 */


function migrateModelData() {
  return (0, _request.default)("".concat(rootPath, "/migrateHistoricalMeta"), {
    method: 'POST'
  });
} // 导航菜单相关接口

/**
 * @description: 查询导航菜单
 * @param {type}: tableName
 * @return: dataList
 */


function queryMenu(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaNavigation/getMetaNavigation?queryParam=").concat(params));
}
/**
 * @description: 新增导航菜单
 * @param {type} data/tableName
 */


function addMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/metaNavigation/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询表格建模
 * @param {type} itemNO/itemGridNo
 */


function queryGridModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/gridData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 表格拖拽排序
 */


function moveRow(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/moveUpOrDown"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 树形表格拖拽排序
 */


function moveMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/moveMenu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导航菜单转移节点
 */


function moveNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelation/changeNode"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导航菜单转移节点
 */


function queryMetaAuthcode() {
  return (0, _request.default)("".concat(rootPath, "/metaObjectMenu/authCode"), {
    method: 'POST'
  });
}
/**
 * @description: 待办任务导航模块页
 */


function todoTaskMetaToWbeClient(params) {
  var formData = new FormData();
  formData.append('queryParam', JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/page/model"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 检验模板接口:查询
 */


function inspectionModelQuery(_ref) {
  var modelPath = _ref.modelPath,
      values = _ref.values;
  values = encodeURIComponent(JSON.stringify(values));
  return (0, _request.default)("".concat(rootPath, "/").concat(modelPath, "/query?queryParam=").concat(values));
}
/**
 * @description: 检验模板接口:新建，修改，删除
 */


function inspectionModelClient(_ref2) {
  var values = _ref2.values,
      type = _ref2.type;
  return (0, _request.default)("".concat(rootPath).concat(modelPath).concat(type), {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
/**
 * @description: 检验模板header,body,footer接口:新建，修改，删除，排序
 */


function inspectionItem(_ref3) {
  var values = _ref3.values,
      modelPath = _ref3.modelPath,
      type = _ref3.type;
  return (0, _request.default)("".concat(rootPath, "/").concat(modelPath, "/").concat(type), {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
/* @description: 查询检验模板
 * @param {type}: tableName
 * @return: dataList
 */


function queryTemplateNo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaTemplate/queryMetaTemplateNo?queryParam=").concat(params));
}
/**
 * @description: 查询检验模板建模
 * @param {type}: templateNo
 * @return: dataList
 */


function getTemplateMetaData(params) {
  return (0, _request.default)("".concat(rootPath, "/metaTemplate/showInsTemplate"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询检验模板建模
 * @param {type}: {page, pageSize, keyWord}
 * @return: dataList
 */


function getMetaScriptData(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaScript/queryMetaScript?queryParam=").concat(params));
}
/**
 * @description: 新建JS脚本
 * @param {type}: {no, name, rType, remark, scriptValue}
 * @return: flag
 */


function createJsScript(params) {
  return (0, _request.default)("".concat(rootPath, "/metaScript/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改JS脚本
 * @param {type}: {no, name, rType, remark, scriptValue}
 * @return: flag
 */


function updateJsScript(params) {
  return (0, _request.default)("".concat(rootPath, "/metaScript/update"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除JS脚本
 * @param {type}: {}
 * @return: flag
 */


function deleteJsScript(params) {
  return (0, _request.default)("".concat(rootPath, "/metaScript/delete"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}