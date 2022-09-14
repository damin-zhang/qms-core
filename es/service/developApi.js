var _excluded = ["file", "path"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import request from './request';
export function develop(_ref) {
  var file = _ref.file,
      path = _ref.path,
      rest = _objectWithoutProperties(_ref, _excluded);

  var url = path.slice(0, 1) === '/' ? path : '/' + path;
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
  return request('api' + url, {
    method: 'POST',
    body: formData
  }).then(function (res) {
    if (res && res.RedirectURL) {
      window.open(res.RedirectURL);
    }

    return res;
  });
}