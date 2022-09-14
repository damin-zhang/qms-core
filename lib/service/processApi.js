"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activationProcess = activationProcess;
exports.getBpmnNode = getBpmnNode;
exports.getProcdefProcess = getProcdefProcess;
exports.getProcessReverseList = getProcessReverseList;
exports.handleProcess = handleProcess;
exports.processBind = processBind;
exports.processBindMenu = processBindMenu;
exports.processDelete = processDelete;
exports.processDeleteMenu = processDeleteMenu;
exports.processDeleteProcess = processDeleteProcess;
exports.processGetAllMeta = processGetAllMeta;
exports.processGetEndProcess = processGetEndProcess;
exports.processGetEndProcessSearch = processGetEndProcessSearch;
exports.processGetMenu = processGetMenu;
exports.processGetProcessNode = processGetProcessNode;
exports.processGetRunProcess = processGetRunProcess;
exports.processGetRunProcessSearch = processGetRunProcessSearch;
exports.processQueryImg = processQueryImg;
exports.processQueryMenu = processQueryMenu;
exports.processRevoke = processRevoke;
exports.processSearchMeta = processSearchMeta;
exports.processState = processState;
exports.processTransact = processTransact;
exports.processUpdate = processUpdate;
exports.processUpdateMenu = processUpdateMenu;
exports.processgGetMetaField = processgGetMetaField;
exports.queryProcessNode = queryProcessNode;
exports.queryProcessNodeForm = queryProcessNodeForm;
exports.rebuttable = rebuttable;
exports.rejectTo = rejectTo;
exports.searchProcdefProcess = searchProcdefProcess;
exports.taskGetMyProcess = taskGetMyProcess;
exports.taskGetMyProcessSearch = taskGetMyProcessSearch;
exports.taskGetTaskDone = taskGetTaskDone;
exports.taskGetTaskDoneSearch = taskGetTaskDoneSearch;
exports.taskGetTaskToDo = taskGetTaskToDo;
exports.taskGetTaskToDoSearch = taskGetTaskToDoSearch;
exports.taskTransfer = taskTransfer;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: camunda和流程相关API汇总
 */
var rootPath = '/api/camunda';
/**
 * @description: 流程实例查询
 */

function getProcdefProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getProcdefProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 流程实例激活
 */


function activationProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/process/activation/") + params.id, {
    method: 'POST'
  });
}
/**
 * @description: 获取所有业务对象
 */


function processGetAllMeta(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getAllMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取业务对象字段
 */


function processgGetMetaField(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getMetaField?objectNo=").concat(params), {
    method: 'GET'
  });
}
/**
 * @description: 绑定业务对象
 */


function processBind(params) {
  return (0, _request.default)("".concat(rootPath, "/process/bind"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 禁用或启动业务对象绑定流程
 */


function processState(params) {
  return (0, _request.default)("".concat(rootPath, "/process/modify/state"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象绑定流程
 */


function processDelete(params) {
  return (0, _request.default)("".concat(rootPath, "/process/delete/meta/") + params.id, {
    method: 'POST'
  });
}
/**
 * @description: 流程绑定业务对象修改
 */


function processUpdate(params) {
  return (0, _request.default)("".concat(rootPath, "/process/update/meta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 搜索业务对象
 */


function processSearchMeta(params) {
  return (0, _request.default)("".concat(rootPath, "/process/searchMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 根据对象标识获取行事件 /process/getMenu
 */


function processGetMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getMenu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询行事件与流程节点绑定 /process/query/menu
 */


function processQueryMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/process/query/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 新建事件 /process/bind/menu
 */


function processBindMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/process/bind/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改事件 /process/update/menu
 */


function processUpdateMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/process/update/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:删除事件 /process/delete/menu
 */


function processDeleteMenu(params) {
  return (0, _request.default)("".concat(rootPath, "/process/delete/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 根据流程id获取节点 /process/getProcessNode
 */


function processGetProcessNode(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getProcessNode"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看流程图
 */


function processQueryImg(params) {
  return (0, _request.default)("".concat(rootPath, "/process/xml"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看流程图高亮节点
 */


function getBpmnNode(params) {
  return (0, _request.default)("".concat(rootPath, "/process/bpmn"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看流程图节点信息
 */


function getProcessReverseList(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getTaskInformation"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看运行中的流程
 */


function processGetRunProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getRunProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看已结束的流程
 */


function processGetEndProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getEndProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:删除已结束的流程
 */


function processDeleteProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/process/deleteProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询待办流程
 */


function taskGetTaskToDoSearch(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/getTaskToDoSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:搜索已办流程
 */


function taskGetTaskDoneSearch(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/getTaskDoneSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:搜索我的流程
 */


function taskGetMyProcessSearch(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/getMyProcessSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 搜索运行中的流程
 */


function processGetRunProcessSearch(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getRunProcessSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询已结束的流程
 */


function processGetEndProcessSearch(params) {
  return (0, _request.default)("".concat(rootPath, "/process/getEndProcessSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询待办流程
 */


function taskGetTaskToDo(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/getTaskToDo"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:办理流程
 */


function processTransact(_ref) {
  var taskId = _ref.taskId;
  return (0, _request.default)("".concat(rootPath, "/act/task/describe/") + taskId, {
    method: 'POST',
    body: JSON.stringify({
      taskId: taskId
    })
  });
}
/**
 * @description:查询已办流程
 */


function taskGetTaskDone(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/getTaskDone"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询我的流程
 */


function taskGetMyProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/getMyProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询我的流程
 */


function searchProcdefProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/process/searchProcdefProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询流程节点数据
 */


function queryProcessNode(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/hisActIns"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询流程节点表单
 */


function queryProcessNodeForm(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/hisActIns/form"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:提交保存
 */


function handleProcess(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/handle/").concat(params.taskId), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:驳回至
 */


function rejectTo(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/rejectTo/").concat(params.taskId, "/").concat(params.activeId), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询可驳回节点
 */


function rebuttable(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/rebuttable"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:任务委托
 */


function taskTransfer(params) {
  return (0, _request.default)("".concat(rootPath, "/act/task/taskTransfer/").concat(params.taskId), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:终止流程
 */


function processRevoke(params) {
  return (0, _request.default)("".concat(rootPath, "/process/endProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}