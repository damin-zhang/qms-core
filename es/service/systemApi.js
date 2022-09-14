var _excluded = ["file", "path"],
    _excluded2 = ["file", "path"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: api汇总
 */
import request, { axiosRequest } from './request';
/**
 * @description: 获取系统信息
 */

export function getSystemInfo() {
  return request('/systems.json');
}
var rootPath = '/api/system';

function systemPath(url) {
  return rootPath + url;
}
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
} // 用户相关接口

/**
 * @description: 登录
 * @param {type}：userName/userPassword
 * @return: 用户信息和菜单
 */

export function login(params) {
  return request(systemPath('/login'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: OA跳转强制登录
 * @param {type}：userName/token
 * @return: 用户信息和菜单
 */

export function oAlogin(params) {
  return request(systemPath('/rjOAlogin'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 登出
 */

export function logout() {
  return request(systemPath('/logout'), {
    method: 'POST',
    body: JSON.stringify({
      userName: localStorage.getItem('userName')
    })
  });
}
/**
 * @description: 获取Token
 */

export function accessToken(params) {
  var formData = new FormData();
  formData.append('formdata', JSON.stringify(params));
  return request(systemPath('/oauth2/accessToken'), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 收藏/取消收藏常用导航 /navigation/followOrUnFollow
 * @param {type} data/tableName
 */

export function collectNav(navigationId) {
  return request(systemPath('/navigation/followOrUnFollow/') + navigationId, {
    method: 'POST'
  });
} // /**
//  * @description: 取消收藏常用导航
//  * @param {type} data/tableName
//  */
// export function unCollectNav(navigation) {
//   return request('api/system/navigation/followOrUnFollow/' + navigation, {
//     method: 'POST',
//   })
// }

/**
 * @description: 查询用户信息
 */

export function queryUserInfo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return request(systemPath('/user/getInfo'));
}
/**
 * @description: 编辑用户信息
 */

export function editUserInfo(_ref) {
  var values = _ref.values,
      userID = _ref.userID;
  return request(systemPath('/user/modifyInfo'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      userID: userID
    }))
  });
}
/**
 * @description: 编辑用户密码
 */

export function editUserPassword(params) {
  return request(systemPath('/user/modifyUPS'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重置用户密码
 */

export function resetUserPassword(data) {
  return request(systemPath('/user/resetUPS'), {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
/**
 * @description: 用户密码限定设置
 */

export function getInitSetUPS() {
  return request(systemPath('/user/initSetUPS'), {
    method: 'POST'
  });
}
/**
 * @description: 系统平台通用查询
 */

export function commonQuery(_ref2) {
  var file = _ref2.file,
      _ref2$path = _ref2.path,
      path = _ref2$path === void 0 ? 'api/system/common/query' : _ref2$path,
      rest = _objectWithoutProperties(_ref2, _excluded);

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
/**
 * @description: 编码查询
 */

export function codeQuery(_ref3) {
  var rest = _extends({}, _ref3);

  return request(systemPath('/code/query'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建编码规范
 */

export function codeCreate(_ref4) {
  var values = _ref4.values;
  return request(systemPath('/code/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改编码规范
 */

export function codeUpdate(_ref5) {
  var values = _ref5.values,
      id = _ref5.id;
  return request(systemPath('/code/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除编码规范
 */

export function codeDelete(params) {
  return request(systemPath('/code/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统配置查询
 */

export function systemQuery(_ref6) {
  var rest = _extends({}, _ref6);

  return request(systemPath('/system/query'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建系统配置
 */

export function createSystemconfig(params) {
  return request(systemPath('/system/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改系统配置
 */

export function updateSystemconfig(_ref7) {
  var values = _ref7.values,
      id = _ref7.id;
  return request(systemPath('/system/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除系统配置
 */

export function deleteSystemconfig(params) {
  return request(systemPath('/system/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统平台下授权码查询
 */

export function systemAuthcodeQuery(params) {
  return request(systemPath('/authcode/queryAll'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统平台下新建授权码
 */

export function systemCreateAuthcode(params) {
  return request(systemPath('/authcode/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统平台下修改授权码
 */

export function systemUpdateAuthcode(_ref8) {
  var values = _ref8.values,
      id = _ref8.id;
  return request(systemPath('/authcode/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 系统平台下删除授权码
 */

export function systemDelAuthcode(params) {
  return request(systemPath('/authcode/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统邮箱查询
 */

export function systemMailQuery(_ref9) {
  var rest = _extends({}, _ref9);

  return request(systemPath('/systemMail/query'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建系统邮箱
 */

export function createSystemMail(params) {
  return request(systemPath('/systemMail/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改系统邮箱
 */

export function updateSystemMail(_ref10) {
  var values = _ref10.values,
      id = _ref10.id;
  return request(systemPath('/systemMail/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除系统邮箱
 */

export function deleteSystemMail(params) {
  return request(systemPath('/systemMail/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 轮询事务查询
 */

export function polltaskQuery(_ref11) {
  var rest = _extends({}, _ref11);

  return request(systemPath('/polltask/query'), {
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
  return request(systemPath('/polltask/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改轮询事务
 */

export function updatePolltask(_ref12) {
  var values = _ref12.values,
      id = _ref12.id;
  return request(systemPath('/polltask/update'), {
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
  return request(systemPath('/polltask/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:搜索用户
 */

export function searchPersonnel(params) {
  return request(systemPath('/user/queryKeyWord'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 用户查询
 */

export function spersonnelQuery(params) {
  return request(systemPath('/user/query'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 员工用户查询
 */

export function queryStaffUser(id) {
  return request(systemPath('/user/querySingle'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 查询用户角色 /role/query/roleByUserId
 */

export function queryUserRole(userId) {
  return request(systemPath('/role/query/roleByUserId'), {
    method: 'POST',
    body: JSON.stringify(userId)
  });
}
/**
 * @description: 给员工用户添加角色  /role/remove/roles
 */

export function addStaffUserRole(params) {
  return request(systemPath('/role/remove/roles'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
export function userAllowMeta(params) {
  return request(systemPath('/user/allowMeta'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
export function commonApiAxios(_ref13) {
  var file = _ref13.file,
      _ref13$path = _ref13.path,
      path = _ref13$path === void 0 ? 'api/dcm/access' : _ref13$path,
      rest = _objectWithoutProperties(_ref13, _excluded2);

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
 * @description: 查询员工信息
 */

export function deptUserInfo(params) {
  return request(systemPath('/user/queryDept'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 新建员工
 */

export function createStaff(_ref14) {
  var values = _ref14.values;
  return request(systemPath('/personnel/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 人事调整 /personnel/changeNode
 */

export function personnelChangeNode(params) {
  return request(systemPath('/user/changeNode'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改员工信息
 */

export function updateStaff(_ref15) {
  var values = _ref15.values,
      id = _ref15.id;
  return request(systemPath('/personnel/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除员工
 */

export function deleteStaff(_ref16) {
  var users = _ref16.users;
  return request(systemPath('/user/delete'), {
    method: 'POST',
    body: JSON.stringify({
      users: users
    })
  });
}
/**
 * @description: 新建员工用户
 */

export function createStaffUser(_ref17) {
  var values = _ref17.values;
  return request(systemPath('/user/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改员工用户
 */

export function updateStaffUser(_ref18) {
  var values = _ref18.values,
      id = _ref18.id;
  return request(systemPath('/user/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除员工用户
 */

export function deleteStaffUser(id) {
  return request(systemPath('/user/delete'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 禁用用户
 */

export function disableStaffUser(param) {
  return request(systemPath('/user/disabled'), {
    method: 'POST',
    body: JSON.stringify(param)
  });
}
/**
 * @description: 查询部门
 */

export function deptQuery() {
  return request(systemPath('/dept/query'), {
    method: 'POST',
    body: ''
  });
}
/**
 * @description: 新建部门
 */

export function createDept(_ref19) {
  var values = _ref19.values;
  return request(systemPath('/dept/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改部门
 */

export function updateDept(_ref20) {
  var values = _ref20.values,
      id = _ref20.id;
  return request(systemPath('/dept/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除部门
 */

export function deleteDept(_ref21) {
  var hData = _ref21.hData;
  return request(systemPath('/dept/delete'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, hData))
  });
}
/**
 * @description: 获取用户编辑器
 */

export function deptGetUserEditor() {
  return request(systemPath('/dept/getUserEditor'), {
    method: 'GET'
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
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request('api/application/exportData/export', {
    method: 'POST',
    body: formData
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
/**
 * @description: 部门组织调整
 */

export function deptChangeNode(params) {
  return request(systemPath('/dept/changeNode'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 角色查询
 */

export function roleQuery(_ref22) {
  var rest = _extends({}, _ref22);

  return request(systemPath('/role/query/role'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建角色
 */

export function createRole(_ref23) {
  var values = _ref23.values;
  return request(systemPath('/role/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改角色
 */

export function updateRole(_ref24) {
  var values = _ref24.values,
      id = _ref24.id;
  return request(systemPath('/role/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除角色
 */

export function deleteRole(id) {
  return request(systemPath('/role/delete'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 权限查询
 */

export function queryPermissions(id) {
  return request(systemPath('/role/query/permissions'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 权限授权
 */

export function roleAuthorization(values) {
  return request(systemPath('/role/authorization'), {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
/**
 * @description: 角色下的用户查询
 */

export function queryRoleUser(roleId, objectA, objectB) {
  return request(systemPath('/role/query/users'), {
    method: 'POST',
    body: JSON.stringify(roleId, objectA, objectB)
  });
}
/**
 * @description: 角色用户员工查询
 */

export function queryAddRoleUser(params) {
  return request(systemPath('/role/query/AddRelation'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:添加角色用户
 */

export function addRoleUser(_ref25) {
  var users = _ref25.users,
      roleId = _ref25.roleId;
  return request(systemPath('/role/add/users'), {
    method: 'POST',
    body: JSON.stringify({
      users: users,
      roleId: roleId
    })
  });
}
/**
 * @description: 移除角色下的用户
 */

export function deleteRoleUser(_ref26) {
  var users = _ref26.users,
      roleId = _ref26.roleId;
  return request(systemPath('/role/remove/users'), {
    method: 'POST',
    body: JSON.stringify({
      users: users,
      roleId: roleId
    })
  });
}
/**
 * @description: 查询角色对应的授权码
 */

export function queryRoleAuthCode(roleId) {
  return request(systemPath('/role/getRoleAuthCode'), {
    method: 'POST',
    body: JSON.stringify(roleId)
  });
}
/**
 * @description: 查询所有的授权码
 */

export function queryAllAuthCode(params) {
  return request(systemPath('/role/getAllAuthCode'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:添加角色授权码
 */

export function addRoleAuthCode(params) {
  return request(systemPath('/role/confirm'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:修改角色授权码
 */

export function updateRoleAuthCode(params) {
  return request(systemPath('/role/authCode/update'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:移除角色授权码
 */

export function deleteRoleAuthCode(params) {
  return request(systemPath('/role/authCode/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:获取OA系统登录地址
 */

export function getOaLoginLocation() {
  return request(systemPath('/login/sso/getLoginUrl'));
}
/**
 * @description:获取OA系统跳转地址
 */

export function getOaLoginForwardLocation() {
  return request(systemPath('/login/sso/getLoginForwardUrl'));
}
/**
 * @description:OA登录获取用户名
 */

export function getOaUser(_ref27) {
  var ticket = _ref27.ticket;
  return request(systemPath("/login/sso/getUserInfo?ticket=".concat(ticket)));
}