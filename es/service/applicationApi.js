var _excluded = ["file", "path"],
    _excluded2 = ["file", "path"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 业务对象Meta相关API汇总
 */
import request from './request';
var rootPath = 'api/application';
/**
 * @description: 配置页面通用接口
 * @param {type} implclass
 */

export function commonApi(_ref) {
  var file = _ref.file,
      _ref$path = _ref.path,
      path = _ref$path === void 0 ? "".concat(rootPath, "/hkdt/event") : _ref$path,
      rest = _objectWithoutProperties(_ref, _excluded);

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
  }).then(function (res) {
    if (res && res.RedirectURL) {
      window.open(res.RedirectURL);
    }

    return res;
  });
}
/**
 * @description: 通用数据导出
 * @param {type}
 */

export function commonExportData(_ref2) {
  var file = _ref2.file,
      _ref2$path = _ref2.path,
      path = _ref2$path === void 0 ? "".concat(rootPath, "/exportData/universalExport") : _ref2$path,
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
} // 查询编辑器参数接口

/**
 * @description: 查询编辑器参数
 */

export function queryEditorData(params) {
  return request("".concat(rootPath, "/editor/getEditorData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 查询取码树参数
 */

export function queryCodeData(params) {
  return request("".concat(rootPath, "/editor/getCodeData"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 验证关联页和主对象disabled
 */

export function queryMenuEnable(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/menu/menuEnableAuth"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 流程设计查询
 */

export function modelsFlowList(params) {
  return request("".concat(rootPath, "/models/flowList"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 新建模型
 */

export function modelsNewFlowModel(params) {
  return request("".concat(rootPath, "/models/newFlowModel"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 修改模型
 */

export function modelsUpdateModel(params) {
  return request("".concat(rootPath, "/models/updateModel"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 搜索模型名称 /models/search
 */

export function modelsSearch(params) {
  return request("".concat(rootPath, "/models/search"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 删除模型
 */

export function modelsFlowDelete(params) {
  return request("".concat(rootPath, "/models/flowDelete?id=").concat(params.id), {
    method: 'POST'
  });
}
/**
 * @description: 部署模型
 */

export function modelsDeploy(params) {
  return request("".concat(rootPath, "/models/deploy?id=").concat(params.id), {
    method: 'POST'
  });
}
export function modelsDeployList() {
  var userName = localStorage.getItem('userName');
  return request("".concat(rootPath, "/models/deployList?id=").concat(userName), {
    method: 'GET'
  });
}
/**
 * @description:PLM文件下载
 */

export function plmFileDownload(params) {
  return request("api/".concat(params.implClass), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:PLM文件查询
 */

export function PLMFileQuery(params) {
  return request("".concat(rootPath, "/plm_interface/getPLMFile"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}