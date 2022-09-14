/*
 * @Description: camunda和流程相关API汇总
 */
import request from './request';
var rootPath = '/api/camunda';
/**
 * @description: 流程实例查询
 */

export function getProcdefProcess(params) {
  return request("".concat(rootPath, "/process/getProcdefProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 流程实例激活
 */

export function activationProcess(params) {
  return request("".concat(rootPath, "/process/activation/") + params.id, {
    method: 'POST'
  });
}
/**
 * @description: 获取所有业务对象
 */

export function processGetAllMeta(params) {
  return request("".concat(rootPath, "/process/getAllMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取业务对象字段
 */

export function processgGetMetaField(params) {
  return request("".concat(rootPath, "/process/getMetaField?objectNo=").concat(params), {
    method: 'GET'
  });
}
/**
 * @description: 绑定业务对象
 */

export function processBind(params) {
  return request("".concat(rootPath, "/process/bind"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 禁用或启动业务对象绑定流程
 */

export function processState(params) {
  return request("".concat(rootPath, "/process/modify/state"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除业务对象绑定流程
 */

export function processDelete(params) {
  return request("".concat(rootPath, "/process/delete/meta/") + params.id, {
    method: 'POST'
  });
}
/**
 * @description: 流程绑定业务对象修改
 */

export function processUpdate(params) {
  return request("".concat(rootPath, "/process/update/meta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 搜索业务对象
 */

export function processSearchMeta(params) {
  return request("".concat(rootPath, "/process/searchMeta"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 根据对象标识获取行事件 /process/getMenu
 */

export function processGetMenu(params) {
  return request("".concat(rootPath, "/process/getMenu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询行事件与流程节点绑定 /process/query/menu
 */

export function processQueryMenu(params) {
  return request("".concat(rootPath, "/process/query/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 新建事件 /process/bind/menu
 */

export function processBindMenu(params) {
  return request("".concat(rootPath, "/process/bind/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改事件 /process/update/menu
 */

export function processUpdateMenu(params) {
  return request("".concat(rootPath, "/process/update/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:删除事件 /process/delete/menu
 */

export function processDeleteMenu(params) {
  return request("".concat(rootPath, "/process/delete/menu"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 根据流程id获取节点 /process/getProcessNode
 */

export function processGetProcessNode(params) {
  return request("".concat(rootPath, "/process/getProcessNode"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看流程图
 */

export function processQueryImg(params) {
  return request("".concat(rootPath, "/process/xml"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看流程图高亮节点
 */

export function getBpmnNode(params) {
  return request("".concat(rootPath, "/process/bpmn"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看流程图节点信息
 */

export function getProcessReverseList(params) {
  return request("".concat(rootPath, "/process/getTaskInformation"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看运行中的流程
 */

export function processGetRunProcess(params) {
  return request("".concat(rootPath, "/process/getRunProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查看已结束的流程
 */

export function processGetEndProcess(params) {
  return request("".concat(rootPath, "/process/getEndProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:删除已结束的流程
 */

export function processDeleteProcess(params) {
  return request("".concat(rootPath, "/process/deleteProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询待办流程
 */

export function taskGetTaskToDoSearch(params) {
  return request("".concat(rootPath, "/act/task/getTaskToDoSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:搜索已办流程
 */

export function taskGetTaskDoneSearch(params) {
  return request("".concat(rootPath, "/act/task/getTaskDoneSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:搜索我的流程
 */

export function taskGetMyProcessSearch(params) {
  return request("".concat(rootPath, "/act/task/getMyProcessSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 搜索运行中的流程
 */

export function processGetRunProcessSearch(params) {
  return request("".concat(rootPath, "/process/getRunProcessSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询已结束的流程
 */

export function processGetEndProcessSearch(params) {
  return request("".concat(rootPath, "/process/getEndProcessSearch"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询待办流程
 */

export function taskGetTaskToDo(params) {
  return request("".concat(rootPath, "/act/task/getTaskToDo"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:办理流程
 */

export function processTransact(_ref) {
  var taskId = _ref.taskId;
  return request("".concat(rootPath, "/act/task/describe/") + taskId, {
    method: 'POST',
    body: JSON.stringify({
      taskId: taskId
    })
  });
}
/**
 * @description:查询已办流程
 */

export function taskGetTaskDone(params) {
  return request("".concat(rootPath, "/act/task/getTaskDone"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询我的流程
 */

export function taskGetMyProcess(params) {
  return request("".concat(rootPath, "/act/task/getMyProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询我的流程
 */

export function searchProcdefProcess(params) {
  return request("".concat(rootPath, "/process/searchProcdefProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询流程节点数据
 */

export function queryProcessNode(params) {
  return request("".concat(rootPath, "/act/task/hisActIns"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询流程节点表单
 */

export function queryProcessNodeForm(params) {
  return request("".concat(rootPath, "/act/task/hisActIns/form"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:提交保存
 */

export function handleProcess(params) {
  return request("".concat(rootPath, "/act/task/handle/").concat(params.taskId), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:驳回至
 */

export function rejectTo(params) {
  return request("".concat(rootPath, "/act/task/rejectTo/").concat(params.taskId, "/").concat(params.activeId), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:查询可驳回节点
 */

export function rebuttable(params) {
  return request("".concat(rootPath, "/act/task/rebuttable"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:任务委托
 */

export function taskTransfer(params) {
  return request("".concat(rootPath, "/act/task/taskTransfer/").concat(params.taskId), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:终止流程
 */

export function processRevoke(params) {
  return request("".concat(rootPath, "/process/endProcess"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}