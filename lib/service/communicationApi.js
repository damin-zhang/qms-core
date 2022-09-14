"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPolltask = createPolltask;
exports.deletePolltask = deletePolltask;
exports.finishTodoTask = finishTodoTask;
exports.getNotice = getNotice;
exports.getSenderMail = getSenderMail;
exports.polltaskQuery = polltaskQuery;
exports.restartPollTask = restartPollTask;
exports.sendMail = sendMail;
exports.sendNotice = sendNotice;
exports.startPollTask = startPollTask;
exports.stopPollTask = stopPollTask;
exports.taskTodo = taskTodo;
exports.updateNotice = updateNotice;
exports.updatePolltask = updatePolltask;

var _api = require("./api");

var _request = _interopRequireWildcard(require("./request"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var rootPath = 'api/auxiliary/base';

function communicationPath(url) {
  return rootPath + url;
}
/**
 * @description: 消息通知
 */


function getNotice(status, type) {
  var params = {
    status: status,
    type: type
  };
  var path = '/auxiliary/base/cs/get/notice';
  return (0, _api.get)(path, params);
}
/**
 * @description: 标记消息已读
 */


function updateNotice(params) {
  return (0, _request.default)(communicationPath('/cs/update/notice'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 发送消息
 */


function sendNotice(params) {
  return (0, _request.default)(communicationPath('/cs/send/notice'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取发送人邮箱服务
 */


function getSenderMail() {
  var path = communicationPath('/cs/get/senderMail');
  return (0, _request.default)(path);
}
/**
 * @description: 发送邮件
 */


function sendMail(params) {
  return (0, _request.default)(communicationPath('/cs/send/mail'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 获取待办任务
 */


function taskTodo(params) {
  var path = '/auxiliary/base/taskTodo/query';
  return (0, _api.get)(path, params);
}
/**
 * @description: 更改待办任务状态
 */


function finishTodoTask(params) {
  return (0, _request.default)(communicationPath('/taskTodo/change/status'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 轮询事务查询
 */


function polltaskQuery(_ref) {
  var rest = _extends({}, _ref);

  return (0, _request.default)('api/auxiliary/poll/query', {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建轮询事务
 */


function createPolltask(params) {
  return (0, _request.default)('api/auxiliary/poll/create', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改轮询事务
 */


function updatePolltask(_ref2) {
  var values = _ref2.values,
      id = _ref2.id;
  return (0, _request.default)('api/auxiliary/poll/update', {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除轮询事务
 */


function deletePolltask(params) {
  return (0, _request.default)('api/auxiliary/poll/delete', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 启动轮询事务
 */


function startPollTask(params) {
  return (0, _request.default)('api/auxiliary/poll/start/' + params.id, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 停止轮询事务
 */


function stopPollTask(params) {
  return (0, _request.default)('api/auxiliary/poll/stop/' + params.id, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重启轮询事务
 */


function restartPollTask(params) {
  return (0, _request.default)('api/auxiliary/poll/restart/' + params.id, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}