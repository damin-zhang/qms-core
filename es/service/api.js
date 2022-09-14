var _excluded = ["file", "path"],
    _excluded2 = ["file", "path"],
    _excluded3 = ["file", "path"],
    _excluded4 = ["file"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: api汇总
 */
import request, { axiosRequest } from './request';
/**
 * 通用POST请求
 * @param path-请求API路径
 * @param payload-请求参数
 * @returns {Object}
 */

export function post(path) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userName = localStorage.getItem('userName');
  payload.userName = userName;
  return request('api' + path, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
/**
 * 通用GET请求
 * @param path-请求API路径
 * @param payload-请求参数
 * @returns {Object}
 */

export function get(path) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userName = localStorage.getItem('userName');
  payload.userName = userName;
  var pl = JSON.stringify(payload);
  pl = encodeURIComponent(pl);
  var queryParam = "?queryParam=".concat(pl);
  return request('api' + path + queryParam);
}
/**
 * 通用请求
 * @param path-请求API路径
 * @param payload-请求参数
 * @returns {Object}
 */

export function common() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var userName = localStorage.getItem('userName');
  var formData = new FormData();
  var file = payload.file;

  if (file && file instanceof File) {
    formData.append('file', file);
    delete payload.file;
  }

  payload.userName = userName;
  formData.append('values', JSON.stringify(payload));
  return request('api/dcm/access', {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 查询用户信息
 */

export function queryUserInfo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request("api/user/getInfo?queryParam=".concat(params));
}
/**
 * @description: 编辑用户密码
 */

export function editUserPassword(params) {
  return request('api/user/modifiyUPS', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重置用户密码
 */

export function resetUserPassword(params) {
  return request('api/user/resetUPS', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 用户密码限定设置
 */

export function getInitSetUPS() {
  return request('api/user/initSetUPS', {
    method: 'POST'
  });
}
/**
 * @description: 收藏常用导航
 * @param {type} data/tableName
 */

export function collectNav(navigation) {
  return request('api/navigation/user/common/' + navigation, {
    method: 'POST'
  });
}
/**
 * @description: 取消收藏常用导航
 * @param {type} data/tableName
 */

export function unCollectNav(navigation) {
  return request('api/navigation/user/uncommon/' + navigation, {
    method: 'POST'
  });
} // 配置页面相关接口

export function commonQuery(_ref) {
  var file = _ref.file,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? 'api/system/common/query' : _ref$path,
      rest = _objectWithoutProperties(_ref, _excluded);

  // const formData = new FormData()
  if (file && file instanceof File) {
    formData.append('file', file);
  }

  if (file && file instanceof Array) {
    file.forEach(function (object) {
      return formData.append('file', object);
    });
  } // formData.append('tableName', rest.tableName)


  return request(path, {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
export function codeCreate(_ref2) {
  var file = _ref2.file,
      _ref2$path = _ref2.path,
      path = _ref2$path === void 0 ? 'api/system/code/create' : _ref2$path,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  var formData = new FormData();

  if (file && file instanceof File) {
    formData.append('file', file);
  }

  if (file && file instanceof Array) {
    file.forEach(function (object) {
      return formData.append('file', object);
    });
  }

  formData.append('values', JSON.stringify(rest));
  return request(path, {
    method: 'POST',
    body: formData
  });
}
export function commonApiAxios(_ref3) {
  var file = _ref3.file,
      _ref3$path = _ref3.path,
      path = _ref3$path === void 0 ? 'api/dcm/access' : _ref3$path,
      rest = _objectWithoutProperties(_ref3, _excluded3);

  var formData = new FormData();

  if (file && file instanceof File) {
    formData.append('file', file);
  }

  if (file && file instanceof Array) {
    file.forEach(function (object) {
      return formData.append('file', object);
    });
  }

  formData.append('values', JSON.stringify(rest));
  return axiosRequest(path, {
    method: 'POST',
    data: formData
  });
}
/**
 * @description: 配置页面restful接口
 * @param {type} implclass
 */

export function restful(_ref4, url) {
  var file = _ref4.file,
      rest = _objectWithoutProperties(_ref4, _excluded4);

  var formData = new FormData();
  formData.append('file', file);
  formData.append('values', JSON.stringify(rest));
  return request("api/".concat(url), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 查询rdp报表
 */

export function queryReport(reportIp) {
  return request(reportIp);
}
export function queryReportConfig(configNo) {
  return request('api/serverip/getRdpServerHost?configNo=' + configNo);
} /////////////////////////////////////////

export function queryWebsocketIP(configNo) {
  return request('api/serverip/getWebSocketServerHost?configNo=' + configNo);
}
/**
 * @description: 查询存储过程名称
 */

export function queryProcedures() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  params = encodeURIComponent(JSON.stringify(params));
  return request("api/meta/proce/getProcedures?queryParam=".concat(params));
}
/**
 * @description: 查询存储过程参数
 */

export function queryProceduresParams(name) {
  return request("api/meta/proce/getPrams?queryParam=".concat(encodeURIComponent(name)));
}
/**
 * @description: 查询报警信息
 */

export function queryWaringData() {
  return request("api/src/getWorkCenterWarningData");
}
/**
 * @description: 查询视图sql检查
 */

export function checkSql(params) {
  return request('api/queryView/checkSql', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 数据库执行sql语句，返回表格和数据
 */

export function dbQuery(params) {
  return request('api/meta/platform/db/query', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 保存模块对应的授权码组
 */

export function saveRoleAuthCode(params) {
  return request('api/auth/confirm', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 发送消息
 */

export function sendNotice(params) {
  return request('api/system/msg/sendMsg', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询员工信息
 */

export function deptUserInfo(params) {
  return request('api/user/queryDept', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导出部门员工
 */

export function exportDepart(params) {
  return request('api/user/exportByDepart/' + params.state, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导出选中员工信息
 */

export function exportInformation(params) {
  return request('api/user/exportByPerson/' + params.state, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导出组织架构
 */

export function exportOrganization(params) {
  return request('api/user/exportOrganization', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}