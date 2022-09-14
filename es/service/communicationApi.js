function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * @Description: 通讯api汇总
 */
import { get } from './api';
import request, { axiosRequest } from './request';
var rootPath = 'api/auxiliary/base';

function communicationPath(url) {
  return rootPath + url;
}
/**
 * @description: 消息通知
 */


export function getNotice(status, type) {
  var params = {
    status: status,
    type: type
  };
  var path = '/auxiliary/base/cs/get/notice';
  return get(path, params);
}
/**
 * @description: 标记消息已读
 */

export function updateNotice(params) {
  return request(communicationPath('/cs/update/notice'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 发送消息
 */

export function sendNotice(params) {
  return request(communicationPath('/cs/send/notice'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取发送人邮箱服务
 */

export function getSenderMail() {
  var path = communicationPath('/cs/get/senderMail');
  return request(path);
}
/**
 * @description: 发送邮件
 */

export function sendMail(params) {
  return request(communicationPath('/cs/send/mail'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取待办任务
 */

export function taskTodo(params) {
  var path = '/auxiliary/base/taskTodo/query';
  return get(path, params);
}
/**
 * @description: 更改待办任务状态
 */

export function finishTodoTask(params) {
  return request(communicationPath('/taskTodo/change/status'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 轮询事务查询
 */

export function polltaskQuery(_ref) {
  var rest = _extends({}, _ref);

  return request('api/auxiliary/poll/query', {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建轮询事务
 */

export function createPolltask(params) {
  return request('api/auxiliary/poll/create', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改轮询事务
 */

export function updatePolltask(_ref2) {
  var values = _ref2.values,
      id = _ref2.id;
  return request('api/auxiliary/poll/update', {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除轮询事务
 */

export function deletePolltask(params) {
  return request('api/auxiliary/poll/delete', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 启动轮询事务
 */

export function startPollTask(params) {
  return request('api/auxiliary/poll/start/' + params.id, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 停止轮询事务
 */

export function stopPollTask(params) {
  return request('api/auxiliary/poll/stop/' + params.id, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重启轮询事务
 */

export function restartPollTask(params) {
  return request('api/auxiliary/poll/restart/' + params.id, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}