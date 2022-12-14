"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkSql = checkSql;
exports.codeCreate = codeCreate;
exports.collectNav = collectNav;
exports.common = common;
exports.commonApiAxios = commonApiAxios;
exports.commonQuery = commonQuery;
exports.dbQuery = dbQuery;
exports.deptUserInfo = deptUserInfo;
exports.editUserPassword = editUserPassword;
exports.exportDepart = exportDepart;
exports.exportInformation = exportInformation;
exports.exportOrganization = exportOrganization;
exports.get = get;
exports.getInitSetUPS = getInitSetUPS;
exports.post = post;
exports.queryProcedures = queryProcedures;
exports.queryProceduresParams = queryProceduresParams;
exports.queryReport = queryReport;
exports.queryReportConfig = queryReportConfig;
exports.queryUserInfo = queryUserInfo;
exports.queryWaringData = queryWaringData;
exports.queryWebsocketIP = queryWebsocketIP;
exports.resetUserPassword = resetUserPassword;
exports.restful = restful;
exports.saveRoleAuthCode = saveRoleAuthCode;
exports.sendNotice = sendNotice;
exports.unCollectNav = unCollectNav;

var _request = _interopRequireWildcard(require("./request"));

var _excluded = ["file", "path"],
    _excluded2 = ["file", "path"],
    _excluded3 = ["file", "path"],
    _excluded4 = ["file"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * ??????POST??????
 * @param path-??????API??????
 * @param payload-????????????
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
}
/**
 * ??????GET??????
 * @param path-??????API??????
 * @param payload-????????????
 * @returns {Object}
 */


function get(path) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var userName = localStorage.getItem('userName');
  payload.userName = userName;
  var pl = JSON.stringify(payload);
  pl = encodeURIComponent(pl);
  var queryParam = "?queryParam=".concat(pl);
  return (0, _request.default)('api' + path + queryParam);
}
/**
 * ????????????
 * @param path-??????API??????
 * @param payload-????????????
 * @returns {Object}
 */


function common() {
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
  return (0, _request.default)('api/dcm/access', {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: ??????????????????
 */


function queryUserInfo(params) {
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("api/user/getInfo?queryParam=".concat(params));
}
/**
 * @description: ??????????????????
 */


function editUserPassword(params) {
  return (0, _request.default)('api/user/modifiyUPS', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 */


function resetUserPassword(params) {
  return (0, _request.default)('api/user/resetUPS', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function getInitSetUPS() {
  return (0, _request.default)('api/user/initSetUPS', {
    method: 'POST'
  });
}
/**
 * @description: ??????????????????
 * @param {type} data/tableName
 */


function collectNav(navigation) {
  return (0, _request.default)('api/navigation/user/common/' + navigation, {
    method: 'POST'
  });
}
/**
 * @description: ????????????????????????
 * @param {type} data/tableName
 */


function unCollectNav(navigation) {
  return (0, _request.default)('api/navigation/user/uncommon/' + navigation, {
    method: 'POST'
  });
} // ????????????????????????


function commonQuery(_ref) {
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


  return (0, _request.default)(path, {
    method: 'POST',
    body: JSON.stringify({
      tableName: rest.tableName
    })
  });
}

function codeCreate(_ref2) {
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
  return (0, _request.default)(path, {
    method: 'POST',
    body: formData
  });
}

function commonApiAxios(_ref3) {
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
  return (0, _request.axiosRequest)(path, {
    method: 'POST',
    data: formData
  });
}
/**
 * @description: ????????????restful??????
 * @param {type} implclass
 */


function restful(_ref4, url) {
  var file = _ref4.file,
      rest = _objectWithoutProperties(_ref4, _excluded4);

  var formData = new FormData();
  formData.append('file', file);
  formData.append('values', JSON.stringify(rest));
  return (0, _request.default)("api/".concat(url), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: ??????rdp??????
 */


function queryReport(reportIp) {
  return (0, _request.default)(reportIp);
}

function queryReportConfig(configNo) {
  return (0, _request.default)('api/serverip/getRdpServerHost?configNo=' + configNo);
} /////////////////////////////////////////


function queryWebsocketIP(configNo) {
  return (0, _request.default)('api/serverip/getWebSocketServerHost?configNo=' + configNo);
}
/**
 * @description: ????????????????????????
 */


function queryProcedures() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  params = encodeURIComponent(JSON.stringify(params));
  return (0, _request.default)("api/meta/proce/getProcedures?queryParam=".concat(params));
}
/**
 * @description: ????????????????????????
 */


function queryProceduresParams(name) {
  return (0, _request.default)("api/meta/proce/getPrams?queryParam=".concat(encodeURIComponent(name)));
}
/**
 * @description: ??????????????????
 */


function queryWaringData() {
  return (0, _request.default)("api/src/getWorkCenterWarningData");
}
/**
 * @description: ????????????sql??????
 */


function checkSql(params) {
  return (0, _request.default)('api/queryView/checkSql', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????sql??????????????????????????????
 */


function dbQuery(params) {
  return (0, _request.default)('api/meta/platform/db/query', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????
 */


function saveRoleAuthCode(params) {
  return (0, _request.default)('api/auth/confirm', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????
 */


function sendNotice(params) {
  return (0, _request.default)('api/system/msg/sendMsg', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 */


function deptUserInfo(params) {
  return (0, _request.default)('api/user/queryDept', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 */


function exportDepart(params) {
  return (0, _request.default)('api/user/exportByDepart/' + params.state, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????
 */


function exportInformation(params) {
  return (0, _request.default)('api/user/exportByPerson/' + params.state, {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????
 */


function exportOrganization(params) {
  return (0, _request.default)('api/user/exportOrganization', {
    method: 'POST',
    body: JSON.stringify(params)
  });
}