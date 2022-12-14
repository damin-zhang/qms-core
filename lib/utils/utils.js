"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatorTableKey = exports.formatFillString = exports.flattenTree = exports.exportTab = exports.ergodicRoot = exports.encodeBase64 = exports.debounce = exports.confirm = exports.checkRepeat = exports.camelCaseObjectAssignment = exports.base64ToBlob = exports.TpWatermark = void 0;
exports.generatorTableKeyByIndex = generatorTableKeyByIndex;
exports.warnConfirm = exports.throttle = exports.systemErgodicRoot = exports.showLoading = exports.showConfirm = exports.setPathList = exports.rgbRandom = exports.replaceLinkSql = exports.removeWatermark = exports.removeModel = exports.parseTreeMeta = exports.parseMeta = exports.judgeModel = exports.isUpdate = exports.isNumber = exports.isEnglish = exports.hideLoading = exports.getUrlParams = exports.getRenderColor = exports.getPath = exports.getNumPrecision = exports.getCaption = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _generatorModel = _interopRequireDefault(require("./generatorModel"));

var _umi = require("umi");

var _language = _interopRequireDefault(require("@/locale/language"));

var _jsBase = require("js-base64");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _language$common = _language.default.common,
    value_cannot_repeat = _language$common.value_cannot_repeat,
    ok = _language$common.ok,
    cancel = _language$common.cancel,
    confirm_deletion = _language$common.confirm_deletion,
    confirm_execution = _language$common.confirm_execution; // ???????????????????????????, ????????????????????????

var isEnglish = localStorage.getItem('AcceptLanguage') === 'en';
/**
 * @description ?????????????????????
 * @param {*} object ????????????????????????????????????
 *    caption,
 *    name,
 *    NAME,
 *    enName,
 *    ENNAME,
 *    eName,
 *    ENAME
 *
 * @returns ?????????????????????caption??????
 */

exports.isEnglish = isEnglish;

var getCaption = function getCaption(object) {
  var caption = object.caption,
      name = object.name,
      NAME = object.NAME,
      enName = object.enName,
      ENNAME = object.ENNAME,
      eName = object.eName,
      ENAME = object.ENAME;
  if (caption) return caption;
  var cp = isEnglish ? enName || ENNAME || eName || ENAME : name || NAME;
  return cp ? cp : 'undefined';
};
/**
 * @description: ????????????tree?????????
 */


exports.getCaption = getCaption;

var ergodicRoot = function ergodicRoot() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var ship = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PID';
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ID';
  return arr.filter(function (item) {
    return item && item[ship] === rootId;
  }).map(function (item, index) {
    item.rowkey = index + 1;
    var level = ergodicChildren(arr, item, ship, id);

    if (level && level.length > 0) {
      item.children = level;
    }

    return item;
  });
};

exports.ergodicRoot = ergodicRoot;

var ergodicChildren = function ergodicChildren() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var pItem = arguments.length > 1 ? arguments[1] : undefined;
  var ship = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PID';
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ID';
  var pRowkey = pItem.rowkey;
  return arr.filter(function (item) {
    return item[ship] === pItem[id];
  }).map(function (item, index) {
    item.rowkey = pRowkey + '-' + (index + 1);
    var level = ergodicChildren(arr.filter(function (item) {
      return item && item[ship] !== pItem[id];
    }), item, ship, id);

    if (level && level.length > 0) {
      item.children = level;
    }

    return item;
  });
};

var systemErgodicRoot = function systemErgodicRoot() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var ship = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'pid';
  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
  return arr.filter(function (item) {
    return item && item[ship] === rootId;
  }).map(function (a) {
    var meta = a.META;
    return arr.some(function (item) {
      return item[ship] === a[id];
    }) ? _objectSpread(_objectSpread(_objectSpread({}, meta), a), {}, {
      children: systemErgodicRoot(arr.filter(function (item) {
        return item && item[ship] !== rootId;
      }), a[id], ship, id)
    }) : _objectSpread(_objectSpread({}, a), meta);
  });
}; // ???tree?????????????????????


exports.systemErgodicRoot = systemErgodicRoot;

var flattenTree = function flattenTree(tree) {
  var arr = [];

  var expanded = function expanded(datas) {
    if (datas && datas.length > 0) {
      datas.forEach(function (e) {
        arr.push(e);
        expanded(e.children);
      });
    }
  };

  expanded(tree);
  return arr;
}; //???????????????key???index


exports.flattenTree = flattenTree;

function generatorTableKeyByIndex() {
  var dataList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!dataList) {
    return [];
  }

  dataList.map(function (item, index) {
    item.key = index;
    item.index = index;
    return item;
  });
  return dataList;
} //???????????????key???index


var generatorTableKey = function generatorTableKey() {
  var dataList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var newDataList = JSON.parse(JSON.stringify(dataList));
  if (!newDataList || !newDataList[0]) return [];
  newDataList.map(function (item, index) {
    return item.key = item.ID || item.id || index, item.index = index;
  });
  return newDataList;
}; // ??????model????????????(create???false????????????????????????true)


exports.generatorTableKey = generatorTableKey;

var judgeModel = function judgeModel(namespace) {
  var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dva = (0, _umi.getDvaApp)(); //1. ?????????????????????model

  var result = dva._models.some(function (model) {
    return model.namespace === namespace;
  });

  if (!result && create) {
    //2. ????????????????????????model
    var model = (0, _generatorModel.default)(namespace);
    dva.model(model);
    process.env.NODE_ENV === 'development' && console.log(dva._models);
  }

  return result;
}; // ???????????????model


exports.judgeModel = judgeModel;

var removeModel = function removeModel(namespace) {
  var dva = (0, _umi.getDvaApp)(); //1. ?????????????????????model

  var result = dva._models.some(function (model) {
    return model.namespace === namespace;
  });

  if (result) {
    dva.unmodel(namespace);
    process.env.NODE_ENV === 'development' && console.log(dva._models);
  }

  return result;
}; // ???????????????????????????????????????


exports.removeModel = removeModel;

var confirm = function confirm(_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? confirm_execution + '???' : _ref$title,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? ok : _ref$okText,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? cancel : _ref$cancelText,
      content = _ref.content,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? null : _ref$footer;

  _antd.Modal.confirm({
    title: title,
    icon: /*#__PURE__*/_react.default.createElement(_icons.ExclamationCircleOutlined, null),
    centered: true,
    okText: okText,
    cancelText: cancelText,
    content: content,
    onOk: onOk,
    onCancel: onCancel,
    mask: true,
    footer: footer
  });
};

exports.confirm = confirm;

var warnConfirm = function warnConfirm(_ref2) {
  var onOk = _ref2.onOk,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? confirm_execution + '???' : _ref2$title,
      _ref2$okText = _ref2.okText,
      okText = _ref2$okText === void 0 ? ok : _ref2$okText,
      content = _ref2.content;

  _antd.Modal.warning({
    title: title,
    icon: /*#__PURE__*/_react.default.createElement(_icons.ExclamationCircleOutlined, null),
    centered: true,
    okText: okText,
    content: content,
    onOk: onOk,
    mask: true
  });
}; // ???????????????????????????????????????


exports.warnConfirm = warnConfirm;

var showConfirm = function showConfirm(_onOk) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : confirm_deletion + '?';
  var okText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ok;
  var cancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cancel;

  _antd.Modal.confirm({
    title: title,
    centered: true,
    okText: okText,
    cancelText: cancelText,
    onOk: function onOk() {
      _onOk();
    }
  });
}; // ?????????????????????


exports.showConfirm = showConfirm;

var checkRepeat = function checkRepeat(value, name) {
  var dataList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var ID = arguments.length > 3 ? arguments[3] : undefined;
  if (ID) return Promise.resolve();
  var hasRepeat = dataList.some(function (item) {
    return item[name] === value;
  });
  if (!hasRepeat) return Promise.resolve();
  return Promise.reject(value_cannot_repeat);
}; // ???????????????


exports.checkRepeat = checkRepeat;

var showLoading = function showLoading() {
  var dva = (0, _umi.getDvaApp)();

  dva._store.dispatch({
    type: "tab/packet",
    payload: {
      loading: true
    }
  });
};

exports.showLoading = showLoading;

var hideLoading = function hideLoading() {
  var dva = (0, _umi.getDvaApp)();

  dva._store.dispatch({
    type: "tab/packet",
    payload: {
      loading: false
    }
  });
}; // ??????????????????


exports.hideLoading = hideLoading;

var formatFillString = function formatFillString(num, len) {
  var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (String(num).length > len) return num;
  return (Array(len).join(str) + num).slice(-len);
}; //????????????base64


exports.formatFillString = formatFillString;

var encodeBase64 = function encodeBase64(str) {
  return _jsBase.Base64.encode(str);
};

exports.encodeBase64 = encodeBase64;

var isNumber = function isNumber(val) {
  var regPos = /^\d+(\.\d+)?$/; //???????????????

  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //????????????

  if (regPos.test(val) || regNeg.test(val)) return true;
  return false;
}; //rgb????????????


exports.isNumber = isNumber;

var rgbRandom = function rgbRandom() {
  var r = Math.floor(Math.random() * 120 + 80);
  var g = Math.floor(Math.random() * 120 + 80);
  var b = Math.floor(Math.random() * 120 + 80);
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  return rgb;
}; // ??????url??????


exports.rgbRandom = rgbRandom;

var getUrlParams = function getUrlParams(url) {
  var urlParamsStr = url.split('?')[1];
  if (!urlParamsStr) return;
  var urlParamsArr = urlParamsStr.split('&');
  var urlParamsObj = {};
  urlParamsArr.forEach(function (item) {
    var itemArr = item.split('=');
    urlParamsObj[itemArr[0]] = itemArr[1];
  });
  return urlParamsObj;
}; // ??????Menu ID ?????? PathName


exports.getUrlParams = getUrlParams;

var getPath = function getPath(menuId) {
  if (!localStorage['pathList']) return '';
  var pathList = JSON.parse(localStorage['pathList']);
  var pathname = '/';

  for (var i = 0, length = pathList.length; i < length; i++) {
    if (pathList[i].ID === menuId) {
      pathname = pathList[i].pathname;
      break;
    }
  }

  return pathname;
};
/**
 * ????????????
 * @param {Function} fn callback
 * @param {Number} delay ??????
 * @param {*} immediate ????????????
 * @returns
 */


exports.getPath = getPath;

var debounce = function debounce(fn, delay, immediate) {
  var timer = null;
  immediate = immediate || false;
  return function (v) {
    //????????????????????????
    timer && clearTimeout(timer); // ??????????????????

    if (immediate) {
      var callbackNow = !timer;
      timer = setTimeout(function () {
        timer = null;
      }, delay);
      callbackNow && fn(v);
    } else {
      timer = setTimeout(function () {
        fn(v);
      }, delay);
    }
  };
};
/**
 * ????????????
 * @param {Function} fn callback
 * @param {Number} delay ??????
 * @returns
 */


exports.debounce = debounce;

var throttle = function throttle(fn, delay) {
  var lastTime = Date.now();
  return function () {
    var context = this;
    var args = arguments;
    var curTime = Date.now();

    if (curTime - lastTime >= delay) {
      fn.apply(context, args);
      lastTime = curTime;
    }
  };
}; // ????????????Key???????????????


exports.throttle = throttle;

var transLowerKey = function transLowerKey(obj) {
  for (var key in obj) {
    obj[key.toLowerCase()] = obj[key];
    delete obj[key];
  }

  return obj;
}; // ??????META???????????????


var parseMeta = function parseMeta(dataList) {
  var toLowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!dataList) return;
  return dataList.map(function (item) {
    // ???????????????PID???Number??????, ???????????????????????????, ????????????String
    if (item.PID !== undefined && item.PID === 0) item.PID = '0';

    if (item.meta !== undefined) {
      if (typeof item.META === 'string') {
        item.meta = JSON.parse(item.meta);
      } // ??????????????????True???META????????????KEY???????????????


      if (toLowerCase) {
        item.meta = transLowerKey(item.meta);
      }

      item = _objectSpread(_objectSpread({}, item), item.meta);
    } else if (item.META !== undefined) {
      if (typeof item.META === 'string') {
        item.META = JSON.parse(item.META);
      } // ??????????????????True???META????????????KEY???????????????


      if (toLowerCase) {
        item.META = transLowerKey(item.META);
      }

      item = _objectSpread(_objectSpread({}, item), item.META);
    }

    return item;
  });
}; // ??????????????????META????????????


exports.parseMeta = parseMeta;

var parseTreeMeta = function parseTreeMeta(data) {
  if (data.META !== undefined) {
    data.META = data.MEATA || {};
    data = _objectSpread(_objectSpread({}, data), data.META);
  } else if (data.meta !== undefined) {
    data.meta = data.meta || {};
    data = _objectSpread(_objectSpread({}, data), data.meta);
  }

  Object.keys(data).forEach(function (key) {
    if (data[key] instanceof Array) {
      var toLowerCase = true;
      data[key] = parseMeta(data[key], toLowerCase);
    } else if (data[key] instanceof Object) {
      data[key] = parseTreeMeta(data[key]);
    }
  });
  return data;
}; // ????????????????????????key??????


exports.parseTreeMeta = parseTreeMeta;

var camelCaseObjectAssignment = function camelCaseObjectAssignment(dataList, AssignmentKeyList) {
  if (!dataList) return;
  return dataList.map(function (item) {
    AssignmentKeyList.forEach(function (key) {
      item[key] = item[key.toUpperCase()] instanceof Object ? JSON.parse(JSON.stringify(item[key.toUpperCase()])) : item[key.toUpperCase()];
    });
    return item;
  });
}; // ??????Path??????


exports.camelCaseObjectAssignment = camelCaseObjectAssignment;

var setPathList = function setPathList() {
  var menuList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var pathList = [];

  var ergodicTreePath = function ergodicTreePath(arr, parentPath) {
    arr.forEach(function (item) {
      if (item.children) {
        ergodicTreePath(item.children, parentPath ? "".concat(parentPath, "/").concat(item.NO || item.META.NO) : "/".concat(item.NO || item.META.NO));
      } else {
        pathList.push({
          ID: item.ID,
          pathname: parentPath ? "".concat(parentPath, "/").concat(item.NO || item.META.NO) : "/".concat(item.NO || item.META.NO)
        });
      }
    });
  };

  ergodicTreePath(menuList);
  return pathList;
};

exports.setPathList = setPathList;

var getNumPrecision = function getNumPrecision() {
  var precision = 0;

  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  list.forEach(function (num) {
    // console.log(num)
    if (num && num.toString().indexOf('.') !== -1) {
      var p = num.toString().split('.')[1].length;
      if (p > precision) precision = p;
    }
  });
  return precision;
}; // ????????????????????????


exports.getNumPrecision = getNumPrecision;

var isUpdate = function isUpdate(record, values) {
  var flag = false;

  if (record instanceof Array) {
    if (record.length) {
      for (var key in values) {
        if (values[key] !== record[0][key]) {
          flag = true;
        }
      }
    } else {
      for (var _key2 in values) {
        if (values[_key2] !== undefined) {
          flag = true;
          break;
        } else flag = false;
      }
    }
  } else {
    for (var _key3 in values) {
      if (values[_key3] !== record[_key3]) {
        flag = true;
      }
    }
  }

  return flag;
};

exports.isUpdate = isUpdate;

var replaceLinkSql = function replaceLinkSql(record, sql, objectAData) {
  return sql.split('${').map(function (item) {
    var replaceArray = item.split("}");

    if (replaceArray[0].indexOf('OBJECTA.') === 0) {
      replaceArray.splice(0, 1, objectAData[replaceArray[0].slice(6)]);
    } else {
      var value = record[replaceArray[0]];

      if (value) {
        replaceArray.splice(0, 1, value);
      }
    }

    return replaceArray.join('');
  }).reduce(function (total, value) {
    return total += value;
  });
}; // ????????????


exports.replaceLinkSql = replaceLinkSql;

var TpWatermark = function TpWatermark(watermark) {
  var H = watermark.lineHeight || 240; //  ????????????

  var W = watermark.width || 200; // => ????????????

  var R = watermark.rotatingDegree || -16; //  => ??????????????????????????????

  var C = watermark.fontColor || '#d3cfcf'; // => ??????????????????

  var S = watermark.fontSize || 20; //  => ?????????????????????

  var O = watermark.transparency || 0.5; // => ??????????????????0~1???????????????

  var text = watermark.text || ''; // ?????????????????????????????????????????????????????????

  if (document.getElementById('tp-watermark') != null) {
    return;
  }

  var TpLine = parseInt(String((document.body.clientWidth - 200) / W)) * 2; // ??????????????????

  var StrLine = '';

  for (var i = 0; i < TpLine; i++) {
    StrLine += "<span style=\"display: inline-block; line-height:".concat(H, "px; width:").concat(W, "px; text-align: center; transform:rotate(").concat(R, "deg); color:").concat(C, "; font-size:").concat(S, "px; opacity:").concat(O, ";\">").concat(text, "</span>");
  }

  var DivLine = document.createElement('div');
  DivLine.innerHTML = StrLine;
  var TpColumn = parseInt(String(document.body.clientHeight / H)) * 2; // ??????????????????

  var StrColumn = '';

  for (var _i = 0; _i < TpColumn; _i++) {
    StrColumn += "<div style=\"white-space: nowrap;\">".concat(DivLine.innerHTML, "</div>");
  }

  var DivLayer = document.createElement('div');
  DivLayer.innerHTML = StrColumn;
  DivLayer.id = 'tp-watermark'; // ???????????????????????????

  DivLayer.style.position = 'fixed';
  DivLayer.style.top = '-40px'; // ??????????????????????????????

  DivLayer.style.left = '-150px'; // ?????????????????????left???

  DivLayer.style.zIndex = '99999'; // ??????????????????

  DivLayer.style.pointerEvents = 'none';
  DivLayer.style.padding = '40px 150px';
  var main = document.getElementsByTagName('main')[0];
  main && main.appendChild(DivLayer); // ????????????
}; // ????????????


exports.TpWatermark = TpWatermark;

var removeWatermark = function removeWatermark() {
  // ?????????????????????????????????????????????????????????
  if (document.getElementById('tp-watermark') === null) {
    return;
  }

  var main = document.getElementsByTagName('main')[0];
  main && main.removeChild(document.getElementById('tp-watermark')); // /??????
}; // ????????????


exports.removeWatermark = removeWatermark;

var exportTab = function exportTab(tabCols, tabData, title) {
  return function () {
    var dataLen = tabData.length;
    var fieldLen = tabCols.length;

    if (dataLen < 1) {
      confirm({
        title: "\u6682\u65E0\u53EF\u5BFC\u51FA\u7684\u6570\u636E\u3002"
      });
    } else {
      confirm({
        title: "\u786E\u8BA4\u5BFC\u51FA\"".concat(title, "\"\u5417"),
        onOk: function onOk() {
          var noList = [];
          var result = '';

          for (var i = 0; i < fieldLen; i++) {
            var _tabCols$i = tabCols[i],
                _title = _tabCols$i.title,
                dataIndex = _tabCols$i.dataIndex;
            var caption = _title;
            result += "\"".concat(caption, "\",");
            noList.push(dataIndex);
          }

          result += "\n";

          for (var _i2 = 0; _i2 < dataLen; _i2++) {
            for (var j = 0; j < fieldLen; j++) {
              var item = '';

              if (noList[j] === 'index') {
                item = _i2 + 1;
              } else {
                item = tabData[_i2][noList[j]];
              }

              var str = item || item === 0 ? item + '' : '';
              str && (str = str.replace(/[\r\n\t]/g, ''));
              result += "\"".concat(str || '', "\",");
            }

            result += "\n";
          }

          var blob = new Blob([result], {
            type: 'text/plain;charset=utf-8'
          }); //????????????????????????

          blob = new Blob([String.fromCharCode(0xfeff), blob], {
            type: blob.type
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = "".concat(title, "_").concat(dateToFormat(new Date()), ".csv");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
    }
  };
}; // ??????????????????


exports.exportTab = exportTab;

var getRenderColor = function getRenderColor() {
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  var str = '#';

  for (var i = 1; i <= 6; i++) {
    var getRandom = function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var num = arr[getRandom(0, arr.length - 1)];
    str += num;
  }

  return str;
}; //???base64????????????blob??????


exports.getRenderColor = getRenderColor;

var base64ToBlob = function base64ToBlob(code) {
  var parts = code.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]); // ??????base64????????????????????????

  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength); // ??????8???????????????????????????????????????

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i); // ??????????????????????????????
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
};

exports.base64ToBlob = base64ToBlob;