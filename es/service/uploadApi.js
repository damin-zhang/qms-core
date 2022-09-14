var _excluded = ["file", "tableName", "record"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 业务对象Meta相关API汇总
 */
import request from './request';
var rootPath = 'api/file/base';
/**
 * @description: 异步上传文件
 * @param {type}: file | file[]
 */

export function uploadFileAsync(_ref) {
  var file = _ref.file,
      tableName = _ref.tableName,
      record = _ref.record,
      otherParams = _objectWithoutProperties(_ref, _excluded);

  var formData = new FormData();

  if (file && file instanceof File) {
    formData.append('file', file);
  }

  if (file && file instanceof Array) {
    file.forEach(function (object) {
      return formData.append('file', object);
    });
  }

  for (var key in otherParams) {
    formData.append([key], otherParams[key]);
  } // const index = file.name.lastIndexOf('.')
  // const type = '.' + file.name.substr(index + 1)


  formData.append('objectNo', tableName); // formData.append('fType', type)

  formData.append('hData', JSON.stringify(record));
  return request("".concat(rootPath, "/upload"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 同步上传图片
 * @param {type}: file | file[]
 */

export function uploadImageSync(_ref2) {
  var file = _ref2.file,
      tableName = _ref2.tableName;
  var formData = new FormData();

  if (file && file instanceof File) {
    formData.append('file', file);
  }

  if (file && file instanceof Array) {
    file.forEach(function (object) {
      return formData.append('file', object);
    });
  }

  var index = file.name.lastIndexOf('.');
  var type = '.' + file.name.substr(index + 1);
  formData.append('objectNo', tableName);
  formData.append('fType', type);
  return request("".concat(rootPath, "/sync/upload"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 浏览图片返回Base64
 * @param {type}: file | file[]
 */

export function getImgFileData(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/browseImage"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 下载文件
 * @param {type}: { objectNo, hData: Object[] }
 */

export function downloadFiles(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/download"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 上传测量设备文件
 * @param {type}: { file, itemId<String> }
 */

export function uploadRjFile(_ref3) {
  var file = _ref3.file,
      itemId = _ref3.itemId,
      objectNo = _ref3.objectNo;
  var formData = new FormData();

  if (file && file instanceof File) {
    formData.append('file', file);
  }

  if (file && file instanceof Array) {
    file.forEach(function (object) {
      return formData.append('file', object);
    });
  }

  formData.append('itemId', itemId);
  formData.append('objectNo', objectNo);
  return request("".concat(rootPath, "/rj/upload"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 正向导出Pdf
 * @param {type}: { objectNo, hData: Object[] }
 */

export function exportPdf(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/report/downloadSLMReportPdf1"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 正向导出Excel
 * @param {type}: { objectNo, hData: Object[] }
 */

export function exportExcel(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/report/downloadSLMReportExcel1"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: ROHS导出Excel
 * @param {type}: { objectNo, hData: Object[] }
 */

export function RohsExportExcel(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/report/downloadRohsCheckedListExcel"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description: 周期-质检报告导出Pdf
 * @param {type}: { objectNo, hData: Object[] }
 */

export function periodExportPdf(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/report/downloadPeriodReportPdf"), {
    method: 'POST',
    body: formData
  });
}
/**
 * @description:  周期-质检报告导出Excel
 * @param {type}: { objectNo, hData: Object[] }
 */

export function periodExportExcel(params) {
  var formData = new FormData();
  formData.append('values', JSON.stringify(params));
  return request("".concat(rootPath, "/report/downloadPeriodReportExcel"), {
    method: 'POST',
    body: formData
  });
}