"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessToken = accessToken;
exports.addRoleAuthCode = addRoleAuthCode;
exports.addRoleUser = addRoleUser;
exports.addStaffUserRole = addStaffUserRole;
exports.codeCreate = codeCreate;
exports.codeDelete = codeDelete;
exports.codeQuery = codeQuery;
exports.codeUpdate = codeUpdate;
exports.collectNav = collectNav;
exports.commonApiAxios = commonApiAxios;
exports.commonQuery = commonQuery;
exports.createDept = createDept;
exports.createPolltask = createPolltask;
exports.createRole = createRole;
exports.createStaff = createStaff;
exports.createStaffUser = createStaffUser;
exports.createSystemMail = createSystemMail;
exports.createSystemconfig = createSystemconfig;
exports.deleteDept = deleteDept;
exports.deletePolltask = deletePolltask;
exports.deleteRole = deleteRole;
exports.deleteRoleAuthCode = deleteRoleAuthCode;
exports.deleteRoleUser = deleteRoleUser;
exports.deleteStaff = deleteStaff;
exports.deleteStaffUser = deleteStaffUser;
exports.deleteSystemMail = deleteSystemMail;
exports.deleteSystemconfig = deleteSystemconfig;
exports.deptChangeNode = deptChangeNode;
exports.deptGetUserEditor = deptGetUserEditor;
exports.deptQuery = deptQuery;
exports.deptUserInfo = deptUserInfo;
exports.disableStaffUser = disableStaffUser;
exports.editUserInfo = editUserInfo;
exports.editUserPassword = editUserPassword;
exports.exportDepart = exportDepart;
exports.exportInformation = exportInformation;
exports.exportOrganization = exportOrganization;
exports.getInitSetUPS = getInitSetUPS;
exports.getOaLoginForwardLocation = getOaLoginForwardLocation;
exports.getOaLoginLocation = getOaLoginLocation;
exports.getOaUser = getOaUser;
exports.getSystemInfo = getSystemInfo;
exports.login = login;
exports.logout = logout;
exports.oAlogin = oAlogin;
exports.personnelChangeNode = personnelChangeNode;
exports.polltaskQuery = polltaskQuery;
exports.post = post;
exports.queryAddRoleUser = queryAddRoleUser;
exports.queryAllAuthCode = queryAllAuthCode;
exports.queryPermissions = queryPermissions;
exports.queryRoleAuthCode = queryRoleAuthCode;
exports.queryRoleUser = queryRoleUser;
exports.queryStaffUser = queryStaffUser;
exports.queryUserInfo = queryUserInfo;
exports.queryUserRole = queryUserRole;
exports.resetUserPassword = resetUserPassword;
exports.roleAuthorization = roleAuthorization;
exports.roleQuery = roleQuery;
exports.searchPersonnel = searchPersonnel;
exports.spersonnelQuery = spersonnelQuery;
exports.systemAuthcodeQuery = systemAuthcodeQuery;
exports.systemCreateAuthcode = systemCreateAuthcode;
exports.systemDelAuthcode = systemDelAuthcode;
exports.systemMailQuery = systemMailQuery;
exports.systemQuery = systemQuery;
exports.systemUpdateAuthcode = systemUpdateAuthcode;
exports.updateDept = updateDept;
exports.updatePolltask = updatePolltask;
exports.updateRole = updateRole;
exports.updateRoleAuthCode = updateRoleAuthCode;
exports.updateStaff = updateStaff;
exports.updateStaffUser = updateStaffUser;
exports.updateSystemMail = updateSystemMail;
exports.updateSystemconfig = updateSystemconfig;
exports.userAllowMeta = userAllowMeta;

var _request = _interopRequireWildcard(require("./request"));

var _excluded = ["file", "path"],
    _excluded2 = ["file", "path"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @description: 获取系统信息
 */
function getSystemInfo() {
  return (0, _request.default)('/systems.json');
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


function post(path) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userName = localStorage.getItem('userName');
  payload.userName = userName;
  return (0, _request.default)('api' + path, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
} // 用户相关接口

/**
 * @description: 登录
 * @param {type}：userName/userPassword
 * @return: 用户信息和菜单
 */


function login(params) {
  return (0, _request.default)(systemPath('/login'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: OA跳转强制登录
 * @param {type}：userName/token
 * @return: 用户信息和菜单
 */


function oAlogin(params) {
  return (0, _request.default)(systemPath('/rjOAlogin'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 登出
 */


function logout() {
  return (0, _request.default)(systemPath('/logout'), {
    method: 'POST',
    body: JSON.stringify({
      userName: localStorage.getItem('userName')
    })
  });
}
/**
 * @description: 获取Token
 */


function accessToken(params) {
  var formData = new FormData();
  formData.append('formdata', JSON.stringify(params));
  return (0, _request.default)(systemPath('/oauth2/accessToken'), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 收藏/取消收藏常用导航 /navigation/followOrUnFollow
 * @param {type} data/tableName
 */


function collectNav(navigationId) {
  return (0, _request.default)(systemPath('/navigation/followOrUnFollow/') + navigationId, {
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


function queryUserInfo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)(systemPath('/user/getInfo'));
}
/**
 * @description: 编辑用户信息
 */


function editUserInfo(_ref) {
  var values = _ref.values,
      userID = _ref.userID;
  return (0, _request.default)(systemPath('/user/modifyInfo'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      userID: userID
    }))
  });
}
/**
 * @description: 编辑用户密码
 */


function editUserPassword(params) {
  return (0, _request.default)(systemPath('/user/modifyUPS'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 重置用户密码
 */


function resetUserPassword(data) {
  return (0, _request.default)(systemPath('/user/resetUPS'), {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
/**
 * @description: 用户密码限定设置
 */


function getInitSetUPS() {
  return (0, _request.default)(systemPath('/user/initSetUPS'), {
    method: 'POST'
  });
}
/**
 * @description: 系统平台通用查询
 */


function commonQuery(_ref2) {
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


  return (0, _request.default)(path, {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 编码查询
 */


function codeQuery(_ref3) {
  var rest = _extends({}, _ref3);

  return (0, _request.default)(systemPath('/code/query'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建编码规范
 */


function codeCreate(_ref4) {
  var values = _ref4.values;
  return (0, _request.default)(systemPath('/code/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改编码规范
 */


function codeUpdate(_ref5) {
  var values = _ref5.values,
      id = _ref5.id;
  return (0, _request.default)(systemPath('/code/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除编码规范
 */


function codeDelete(params) {
  return (0, _request.default)(systemPath('/code/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统配置查询
 */


function systemQuery(_ref6) {
  var rest = _extends({}, _ref6);

  return (0, _request.default)(systemPath('/system/query'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建系统配置
 */


function createSystemconfig(params) {
  return (0, _request.default)(systemPath('/system/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改系统配置
 */


function updateSystemconfig(_ref7) {
  var values = _ref7.values,
      id = _ref7.id;
  return (0, _request.default)(systemPath('/system/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除系统配置
 */


function deleteSystemconfig(params) {
  return (0, _request.default)(systemPath('/system/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统平台下授权码查询
 */


function systemAuthcodeQuery(params) {
  return (0, _request.default)(systemPath('/authcode/queryAll'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统平台下新建授权码
 */


function systemCreateAuthcode(params) {
  return (0, _request.default)(systemPath('/authcode/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统平台下修改授权码
 */


function systemUpdateAuthcode(_ref8) {
  var values = _ref8.values,
      id = _ref8.id;
  return (0, _request.default)(systemPath('/authcode/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 系统平台下删除授权码
 */


function systemDelAuthcode(params) {
  return (0, _request.default)(systemPath('/authcode/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 系统邮箱查询
 */


function systemMailQuery(_ref9) {
  var rest = _extends({}, _ref9);

  return (0, _request.default)(systemPath('/systemMail/query'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建系统邮箱
 */


function createSystemMail(params) {
  return (0, _request.default)(systemPath('/systemMail/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改系统邮箱
 */


function updateSystemMail(_ref10) {
  var values = _ref10.values,
      id = _ref10.id;
  return (0, _request.default)(systemPath('/systemMail/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除系统邮箱
 */


function deleteSystemMail(params) {
  return (0, _request.default)(systemPath('/systemMail/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 轮询事务查询
 */


function polltaskQuery(_ref11) {
  var rest = _extends({}, _ref11);

  return (0, _request.default)(systemPath('/polltask/query'), {
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
  return (0, _request.default)(systemPath('/polltask/create'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改轮询事务
 */


function updatePolltask(_ref12) {
  var values = _ref12.values,
      id = _ref12.id;
  return (0, _request.default)(systemPath('/polltask/update'), {
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
  return (0, _request.default)(systemPath('/polltask/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:搜索用户
 */


function searchPersonnel(params) {
  return (0, _request.default)(systemPath('/user/queryKeyWord'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 用户查询
 */


function spersonnelQuery(params) {
  return (0, _request.default)(systemPath('/user/query'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 员工用户查询
 */


function queryStaffUser(id) {
  return (0, _request.default)(systemPath('/user/querySingle'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 查询用户角色 /role/query/roleByUserId
 */


function queryUserRole(userId) {
  return (0, _request.default)(systemPath('/role/query/roleByUserId'), {
    method: 'POST',
    body: JSON.stringify(userId)
  });
}
/**
 * @description: 给员工用户添加角色  /role/remove/roles
 */


function addStaffUserRole(params) {
  return (0, _request.default)(systemPath('/role/remove/roles'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}

function userAllowMeta(params) {
  return (0, _request.default)(systemPath('/user/allowMeta'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}

function commonApiAxios(_ref13) {
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
  return (0, _request.axiosRequest)(path, {
    method: 'POST',
    data: formData
  });
}
/**
 * @description: 查询员工信息
 */


function deptUserInfo(params) {
  return (0, _request.default)(systemPath('/user/queryDept'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 新建员工
 */


function createStaff(_ref14) {
  var values = _ref14.values;
  return (0, _request.default)(systemPath('/personnel/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 人事调整 /personnel/changeNode
 */


function personnelChangeNode(params) {
  return (0, _request.default)(systemPath('/user/changeNode'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改员工信息
 */


function updateStaff(_ref15) {
  var values = _ref15.values,
      id = _ref15.id;
  return (0, _request.default)(systemPath('/personnel/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除员工
 */


function deleteStaff(_ref16) {
  var users = _ref16.users;
  return (0, _request.default)(systemPath('/user/delete'), {
    method: 'POST',
    body: JSON.stringify({
      users: users
    })
  });
}
/**
 * @description: 新建员工用户
 */


function createStaffUser(_ref17) {
  var values = _ref17.values;
  return (0, _request.default)(systemPath('/user/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改员工用户
 */


function updateStaffUser(_ref18) {
  var values = _ref18.values,
      id = _ref18.id;
  return (0, _request.default)(systemPath('/user/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除员工用户
 */


function deleteStaffUser(id) {
  return (0, _request.default)(systemPath('/user/delete'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 禁用用户
 */


function disableStaffUser(param) {
  return (0, _request.default)(systemPath('/user/disabled'), {
    method: 'POST',
    body: JSON.stringify(param)
  });
}
/**
 * @description: 查询部门
 */


function deptQuery() {
  return (0, _request.default)(systemPath('/dept/query'), {
    method: 'POST',
    body: ''
  });
}
/**
 * @description: 新建部门
 */


function createDept(_ref19) {
  var values = _ref19.values;
  return (0, _request.default)(systemPath('/dept/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改部门
 */


function updateDept(_ref20) {
  var values = _ref20.values,
      id = _ref20.id;
  return (0, _request.default)(systemPath('/dept/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除部门
 */


function deleteDept(_ref21) {
  var hData = _ref21.hData;
  return (0, _request.default)(systemPath('/dept/delete'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, hData))
  });
}
/**
 * @description: 获取用户编辑器
 */


function deptGetUserEditor() {
  return (0, _request.default)(systemPath('/dept/getUserEditor'), {
    method: 'GET'
  });
}
/**
 * @description: 导出部门员工
 */


function exportDepart(params) {
  return (0, _request.default)('api/user/exportByDepart/' + params.state, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 导出选中员工信息
 */


function exportInformation(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return (0, _request.default)('api/application/exportData/export', {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 导出组织架构
 */


function exportOrganization(params) {
  return (0, _request.default)('api/user/exportOrganization', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 部门组织调整
 */


function deptChangeNode(params) {
  return (0, _request.default)(systemPath('/dept/changeNode'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 角色查询
 */


function roleQuery(_ref22) {
  var rest = _extends({}, _ref22);

  return (0, _request.default)(systemPath('/role/query/role'), {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}
/**
 * @description: 新建角色
 */


function createRole(_ref23) {
  var values = _ref23.values;
  return (0, _request.default)(systemPath('/role/create'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread({}, values))
  });
}
/**
 * @description: 修改角色
 */


function updateRole(_ref24) {
  var values = _ref24.values,
      id = _ref24.id;
  return (0, _request.default)(systemPath('/role/update'), {
    method: 'POST',
    body: JSON.stringify(_objectSpread(_objectSpread({}, values), {}, {
      id: id
    }))
  });
}
/**
 * @description: 删除角色
 */


function deleteRole(id) {
  return (0, _request.default)(systemPath('/role/delete'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 权限查询
 */


function queryPermissions(id) {
  return (0, _request.default)(systemPath('/role/query/permissions'), {
    method: 'POST',
    body: JSON.stringify(id)
  });
}
/**
 * @description: 权限授权
 */


function roleAuthorization(values) {
  return (0, _request.default)(systemPath('/role/authorization'), {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
/**
 * @description: 角色下的用户查询
 */


function queryRoleUser(roleId, objectA, objectB) {
  return (0, _request.default)(systemPath('/role/query/users'), {
    method: 'POST',
    body: JSON.stringify(roleId, objectA, objectB)
  });
}
/**
 * @description: 角色用户员工查询
 */


function queryAddRoleUser(params) {
  return (0, _request.default)(systemPath('/role/query/AddRelation'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:添加角色用户
 */


function addRoleUser(_ref25) {
  var users = _ref25.users,
      roleId = _ref25.roleId;
  return (0, _request.default)(systemPath('/role/add/users'), {
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


function deleteRoleUser(_ref26) {
  var users = _ref26.users,
      roleId = _ref26.roleId;
  return (0, _request.default)(systemPath('/role/remove/users'), {
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


function queryRoleAuthCode(roleId) {
  return (0, _request.default)(systemPath('/role/getRoleAuthCode'), {
    method: 'POST',
    body: JSON.stringify(roleId)
  });
}
/**
 * @description: 查询所有的授权码
 */


function queryAllAuthCode(params) {
  return (0, _request.default)(systemPath('/role/getAllAuthCode'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:添加角色授权码
 */


function addRoleAuthCode(params) {
  return (0, _request.default)(systemPath('/role/confirm'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:修改角色授权码
 */


function updateRoleAuthCode(params) {
  return (0, _request.default)(systemPath('/role/authCode/update'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:移除角色授权码
 */


function deleteRoleAuthCode(params) {
  return (0, _request.default)(systemPath('/role/authCode/delete'), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:获取OA系统登录地址
 */


function getOaLoginLocation() {
  return (0, _request.default)(systemPath('/login/sso/getLoginUrl'));
}
/**
 * @description:获取OA系统跳转地址
 */


function getOaLoginForwardLocation() {
  return (0, _request.default)(systemPath('/login/sso/getLoginForwardUrl'));
}
/**
 * @description:OA登录获取用户名
 */


function getOaUser(_ref27) {
  var ticket = _ref27.ticket;
  return (0, _request.default)(systemPath("/login/sso/getUserInfo?ticket=".concat(ticket)));
}