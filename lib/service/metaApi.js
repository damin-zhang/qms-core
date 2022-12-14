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
 * @Description: ????????????Meta??????API??????
 */
var rootPath = 'api/meta';
var modelPath = '/metaTemplate/';
/**
 * @description: ????????????
 */

function openModel() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)('/api/meta/base/open', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????
 */


function closeModel() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _request.default)('/api/meta/base/close', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????
 */


function changeLanguage(params) {
  return (0, _request.default)('/api/meta/language/switch', {
    method: 'POST',
    body: JSON.stringify(params)
  });
} // ????????????????????????

/**
 * @description: ??????????????????
 * @param {type}: tableName/condition
 * @return: dataList
 */


function queryObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/packet?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????
 * @param {type}: tableName/condition
 * @return: dataList
 */


function queryAllObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryAllObject?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????
 * @param {type}: tableName/condition
 * @return: dataList
 */


function searchAllObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/searchObject?queryParam=").concat(params));
}
/**
 * @description: ??????????????????
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function searchObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryKeyWord?queryParam=").concat(params));
}
/**
 * @description: ??????????????????
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function searchMenuLibrary(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaMenuLibrary/searchMetaMenuLibrary?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????????????????
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function queryWorkObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryWork?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????????????????
 * @param {type}: tableName/queryWord
 * @return: dataList
 */


function searchWorkObject(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObject/queryWorkKeyWord?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????????????????
 * @param {type}: TableName
 * @return: []
 */


function queryObjFields(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectField/getMetaObjectFieldByTab?queryParam=").concat(params));
}
/**
 * @description: ??????????????????
 * @param {type} data[]/tableName
 */


function addObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 * @param {type} data[]/tableName
 */


function editObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????????????????
 * @param {type} data[]/tableName
 */


function editNavMenuObjectParams(params) {
  return (0, _request.default)("".concat(rootPath, "/metaNavigation/updateParams"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 * @param {type} data{}/tableName
 */


function upgradeObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 * @param {type} data{}/tableName
 */


function cancelUpgradeObject(params) {
  return (0, _request.default)("".concat(rootPath, "/base/cancelUpgrade"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 * @param {type} data{}/tableName
 */


function synchroObject(params) {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/single"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function synchroAllObject() {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/all"), {
    method: 'POST'
  });
}
/**
 * @description: ?????????????????????????????????
 */


function synchroSpeed() {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/speed"), {
    method: 'POST'
  });
}
/**
 * @description: ????????????
 * @param {type} data{}/tableName
 */


function refreshMeta(params) {
  return (0, _request.default)("".concat(rootPath, "/metaSynchronous/refreshMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 * @param {type} data[]/tableName
 */


function delObject(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 * @param {type} data[]/tableName
 */


function copyObject(params) {
  return (0, _request.default)("".concat(rootPath, "/base/copy"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????
 * @param {type} data[]/tableName
 */


function changeFile(params) {
  return (0, _request.default)("".concat(rootPath, "/base/transformToFileObject"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/condition: `itemId='${PID}'`
 * @return: dataList
 */


function queryItem(params, path) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath).concat(path, "?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????
 * @param {type}: tableName/condition: `itemId='${PID}'`
 * @return: dataList
 */


function queryGlobalField(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/selectGlobalGridField?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????????????????????????????
 * @param {type}: tableName/itemNo
 * @return: dataList
 */


function queryItemPGR(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectField/getObjectByTab?queryParam=").concat(params));
}
/**
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/uData/data
 * params: metaObjectParameters????????????
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
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/uData/data
 */


function editItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????????????????
 * @param {type}: meta
 */


function creatCommField(params) {
  return (0, _request.default)("".concat(rootPath, "/commonField/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????????????????
 * @param {type}: fieldId /meta
 */


function updateCommField(params) {
  return (0, _request.default)("".concat(rootPath, "/commonField/update"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????
 * @param {type}: fieldId
 */


function delCommField(params) {
  return (0, _request.default)("".concat(rootPath, "/commonField/delete"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/data[]/state
 */


function delItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????????????????/???????????????/????????????
 * @param {type}: tableName/condition: `rootId=${PID}`
 * @return: dataList
 */


function queryRootItem(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/selectByCondition?queryParam=").concat(params));
}
/**
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/PID/fk:'itemId'/data
 */


function addRootItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/uData/data
 */


function editRootItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????/??????/????????????
 * @param {type}: tableName/data[]/state
 */


function delRootItem(params, secondPath, requestType) {
  return (0, _request.default)("".concat(rootPath).concat(secondPath, "/").concat(requestType), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????
 * @param {type}: tableName/hData[]
 */


function reorder(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectMenu/sort"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????
 * @param {type} faceType/pageId/objectNo/itemGridNo
 */


function querySingleModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 * @param {type} faceType: 4
 */


function queryClassModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getClassNodeMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????
 * @param {type} faceType: 5
 */


function queryAutoClassModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getClassViewMetaData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:???????????????????????????
 * @param {type} faceType: 5
 */


function refreshAutoClassTree(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/refreshClassViewTreeNodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????
 */


function queryPropertyModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/getObjectFormData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????
 */


function queryRelationModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/relationPageData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function getQueryViewModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/queryViewData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 */


function migrateModelData() {
  return (0, _request.default)("".concat(rootPath, "/migrateHistoricalMeta"), {
    method: 'POST'
  });
} // ????????????????????????

/**
 * @description: ??????????????????
 * @param {type}: tableName
 * @return: dataList
 */


function queryMenu(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaNavigation/getMetaNavigation?queryParam=").concat(params));
}
/**
 * @description: ??????????????????
 * @param {type} data/tableName
 */


function addMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/metaNavigation/create"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 * @param {type} itemNO/itemGridNo
 */


function queryGridModel(params) {
  return (0, _request.default)("".concat(rootPath, "/metaToWbeClient/getMeta/gridData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 */


function moveRow(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/moveUpOrDown"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function moveMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelationInfo/moveMenu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function moveNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/metaObjectRelation/changeNode"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function queryMetaAuthcode() {
  return (0, _request.default)("".concat(rootPath, "/metaObjectMenu/authCode"), {
    method: 'POST'
  });
}
/**
 * @description: ???????????????????????????
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
 * @description: ??????????????????:??????
 */


function inspectionModelQuery(_ref) {
  var modelPath = _ref.modelPath,
      values = _ref.values;
  values = encodeURIComponent(JSON.stringify(values));
  return (0, _request.default)("".concat(rootPath, "/").concat(modelPath, "/query?queryParam=").concat(values));
}
/**
 * @description: ??????????????????:????????????????????????
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
 * @description: ????????????header,body,footer??????:?????????????????????????????????
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
/* @description: ??????????????????
 * @param {type}: tableName
 * @return: dataList
 */


function queryTemplateNo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaTemplate/queryMetaTemplateNo?queryParam=").concat(params));
}
/**
 * @description: ????????????????????????
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
 * @description: ????????????????????????
 * @param {type}: {page, pageSize, keyWord}
 * @return: dataList
 */


function getMetaScriptData(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("".concat(rootPath, "/metaScript/queryMetaScript?queryParam=").concat(params));
}
/**
 * @description: ??????JS??????
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
 * @description: ??????JS??????
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
 * @description: ??????JS??????
 * @param {type}: {}
 * @return: flag
 */


function deleteJsScript(params) {
  return (0, _request.default)("".concat(rootPath, "/metaScript/delete"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}