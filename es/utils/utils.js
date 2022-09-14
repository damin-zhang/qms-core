function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";

/*
 * @Description: 工具
 */
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import generatorModel from './generatorModel';
import { getDvaApp } from 'umi';
import language from '@/locale/language';
import { Base64 } from 'js-base64';
var _language$common = language.common,
    value_cannot_repeat = _language$common.value_cannot_repeat,
    ok = _language$common.ok,
    cancel = _language$common.cancel,
    confirm_deletion = _language$common.confirm_deletion,
    confirm_execution = _language$common.confirm_execution; // 返回语言是否为英文, 根据语言渲染内容

export var isEnglish = localStorage.getItem('AcceptLanguage') === 'en';
/**
 * @description 获取中英文标题
 * @param {*} object 对象参数包含以下参数之一
 *    caption,
 *    name,
 *    NAME,
 *    enName,
 *    ENNAME,
 *    eName,
 *    ENAME
 *
 * @returns 返回中英文标题caption的值
 */

export var getCaption = function getCaption(object) {
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
 * @description: 遍历生成tree树结构
 */

export var ergodicRoot = function ergodicRoot() {
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

export var systemErgodicRoot = function systemErgodicRoot() {
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
}; // 将tree转化成平铺数组

export var flattenTree = function flattenTree(tree) {
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
}; //生成表格的key和index

export function generatorTableKeyByIndex() {
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
} //生成表格的key和index

export var generatorTableKey = function generatorTableKey() {
  var dataList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var newDataList = JSON.parse(JSON.stringify(dataList));
  if (!newDataList || !newDataList[0]) return [];
  newDataList.map(function (item, index) {
    return item.key = item.ID || item.id || index, item.index = index;
  });
  return newDataList;
}; // 判断model是否存在(create为false时不新建，默认为true)

export var judgeModel = function judgeModel(namespace) {
  var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var dva = getDvaApp(); //1. 判断是否已注册model

  var result = dva._models.some(function (model) {
    return model.namespace === namespace;
  });

  if (!result && create) {
    //2. 没有注册，则注册model
    var model = generatorModel(namespace);
    dva.model(model);
    process.env.NODE_ENV === 'development' && console.log(dva._models);
  }

  return result;
}; // 移除已注册model

export var removeModel = function removeModel(namespace) {
  var dva = getDvaApp(); //1. 判断是否已注册model

  var result = dva._models.some(function (model) {
    return model.namespace === namespace;
  });

  if (result) {
    dva.unmodel(namespace);
    process.env.NODE_ENV === 'development' && console.log(dva._models);
  }

  return result;
}; // 执行删除操作弹出的确认弹窗

export var confirm = function confirm(_ref) {
  var onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? confirm_execution + '？' : _ref$title,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? ok : _ref$okText,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? cancel : _ref$cancelText,
      content = _ref.content,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? null : _ref$footer;
  Modal.confirm({
    title: title,
    icon: /*#__PURE__*/React.createElement(ExclamationCircleOutlined, null),
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
export var warnConfirm = function warnConfirm(_ref2) {
  var onOk = _ref2.onOk,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? confirm_execution + '？' : _ref2$title,
      _ref2$okText = _ref2.okText,
      okText = _ref2$okText === void 0 ? ok : _ref2$okText,
      content = _ref2.content;
  Modal.warning({
    title: title,
    icon: /*#__PURE__*/React.createElement(ExclamationCircleOutlined, null),
    centered: true,
    okText: okText,
    content: content,
    onOk: onOk,
    mask: true
  });
}; // 执行删除操作弹出的确认弹窗

export var showConfirm = function showConfirm(_onOk) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : confirm_deletion + '?';
  var okText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ok;
  var cancelText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : cancel;
  Modal.confirm({
    title: title,
    centered: true,
    okText: okText,
    cancelText: cancelText,
    onOk: function onOk() {
      _onOk();
    }
  });
}; // 字段名不能重复

export var checkRepeat = function checkRepeat(value, name) {
  var dataList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var ID = arguments.length > 3 ? arguments[3] : undefined;
  if (ID) return Promise.resolve();
  var hasRepeat = dataList.some(function (item) {
    return item[name] === value;
  });
  if (!hasRepeat) return Promise.resolve();
  return Promise.reject(value_cannot_repeat);
}; // 显示加载中

export var showLoading = function showLoading() {
  var dva = getDvaApp();

  dva._store.dispatch({
    type: "tab/packet",
    payload: {
      loading: true
    }
  });
};
export var hideLoading = function hideLoading() {
  var dva = getDvaApp();

  dva._store.dispatch({
    type: "tab/packet",
    payload: {
      loading: false
    }
  });
}; // 格式化，添加

export var formatFillString = function formatFillString(num, len) {
  var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (String(num).length > len) return num;
  return (Array(len).join(str) + num).slice(-len);
}; //字符串转base64

export var encodeBase64 = function encodeBase64(str) {
  return Base64.encode(str);
};
export var isNumber = function isNumber(val) {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数

  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数

  if (regPos.test(val) || regNeg.test(val)) return true;
  return false;
}; //rgb颜色随机

export var rgbRandom = function rgbRandom() {
  var r = Math.floor(Math.random() * 120 + 80);
  var g = Math.floor(Math.random() * 120 + 80);
  var b = Math.floor(Math.random() * 120 + 80);
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  return rgb;
}; // 获取url参数

export var getUrlParams = function getUrlParams(url) {
  var urlParamsStr = url.split('?')[1];
  if (!urlParamsStr) return;
  var urlParamsArr = urlParamsStr.split('&');
  var urlParamsObj = {};
  urlParamsArr.forEach(function (item) {
    var itemArr = item.split('=');
    urlParamsObj[itemArr[0]] = itemArr[1];
  });
  return urlParamsObj;
}; // 传入Menu ID 返回 PathName

export var getPath = function getPath(menuId) {
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
 * 防抖函数
 * @param {Function} fn callback
 * @param {Number} delay 时间
 * @param {*} immediate 立即执行
 * @returns
 */

export var debounce = function debounce(fn, delay, immediate) {
  var timer = null;
  immediate = immediate || false;
  return function (v) {
    //清除上一次延时器
    timer && clearTimeout(timer); // 是否立即执行

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
 * 节流函数
 * @param {Function} fn callback
 * @param {Number} delay 时间
 * @returns
 */

export var throttle = function throttle(fn, delay) {
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
}; // 将对象的Key转换为小写

var transLowerKey = function transLowerKey(obj) {
  for (var key in obj) {
    obj[key.toLowerCase()] = obj[key];
    delete obj[key];
  }

  return obj;
}; // 解构META参数的方法


export var parseMeta = function parseMeta(dataList) {
  var toLowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!dataList) return;
  return dataList.map(function (item) {
    // 导航菜单的PID为Number类型, 通用树结构解析不了, 需转换成String
    if (item.PID !== undefined && item.PID === 0) item.PID = '0';

    if (item.meta !== undefined) {
      if (typeof item.META === 'string') {
        item.meta = JSON.parse(item.meta);
      } // 第二个参数为True将META对象里的KEY转换为小写


      if (toLowerCase) {
        item.meta = transLowerKey(item.meta);
      }

      item = _objectSpread(_objectSpread({}, item), item.meta);
    } else if (item.META !== undefined) {
      if (typeof item.META === 'string') {
        item.META = JSON.parse(item.META);
      } // 第二个参数为True将META对象里的KEY转换为小写


      if (toLowerCase) {
        item.META = transLowerKey(item.META);
      }

      item = _objectSpread(_objectSpread({}, item), item.META);
    }

    return item;
  });
}; // 解构多层包含META数据结构

export var parseTreeMeta = function parseTreeMeta(data) {
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
}; // 为对象驼峰命名的key赋值

export var camelCaseObjectAssignment = function camelCaseObjectAssignment(dataList, AssignmentKeyList) {
  if (!dataList) return;
  return dataList.map(function (item) {
    AssignmentKeyList.forEach(function (key) {
      item[key] = item[key.toUpperCase()] instanceof Object ? JSON.parse(JSON.stringify(item[key.toUpperCase()])) : item[key.toUpperCase()];
    });
    return item;
  });
}; // 装配Path列表

export var setPathList = function setPathList() {
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
export var getNumPrecision = function getNumPrecision() {
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
}; // 判断表单是否修改

export var isUpdate = function isUpdate(record, values) {
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
export var replaceLinkSql = function replaceLinkSql(record, sql, objectAData) {
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
}; // 添加水印

export var TpWatermark = function TpWatermark(watermark) {
  var H = watermark.lineHeight || 240; //  水印行高

  var W = watermark.width || 200; // => 水印宽度

  var R = watermark.rotatingDegree || -16; //  => 旋转度数（可为负值）

  var C = watermark.fontColor || '#d3cfcf'; // => 水印字体颜色

  var S = watermark.fontSize || 20; //  => 水印字体的大小

  var O = watermark.transparency || 0.5; // => 水印透明度（0~1之间取值）

  var text = watermark.text || ''; // 判断水印是否存在，如果存在，那么不执行

  if (document.getElementById('tp-watermark') != null) {
    return;
  }

  var TpLine = parseInt(String((document.body.clientWidth - 200) / W)) * 2; // 一行显示几列

  var StrLine = '';

  for (var i = 0; i < TpLine; i++) {
    StrLine += "<span style=\"display: inline-block; line-height:".concat(H, "px; width:").concat(W, "px; text-align: center; transform:rotate(").concat(R, "deg); color:").concat(C, "; font-size:").concat(S, "px; opacity:").concat(O, ";\">").concat(text, "</span>");
  }

  var DivLine = document.createElement('div');
  DivLine.innerHTML = StrLine;
  var TpColumn = parseInt(String(document.body.clientHeight / H)) * 2; // 一列显示几行

  var StrColumn = '';

  for (var _i = 0; _i < TpColumn; _i++) {
    StrColumn += "<div style=\"white-space: nowrap;\">".concat(DivLine.innerHTML, "</div>");
  }

  var DivLayer = document.createElement('div');
  DivLayer.innerHTML = StrColumn;
  DivLayer.id = 'tp-watermark'; // 给水印盒子添加类名

  DivLayer.style.position = 'fixed';
  DivLayer.style.top = '-40px'; // 整体水印距离顶部距离

  DivLayer.style.left = '-150px'; // 改变整体水印的left值

  DivLayer.style.zIndex = '99999'; // 水印页面层级

  DivLayer.style.pointerEvents = 'none';
  DivLayer.style.padding = '40px 150px';
  var main = document.getElementsByTagName('main')[0];
  main && main.appendChild(DivLayer); // 到页面中
}; // 移除水印

export var removeWatermark = function removeWatermark() {
  // 判断水印是否存在，如果存在，那么不执行
  if (document.getElementById('tp-watermark') === null) {
    return;
  }

  var main = document.getElementsByTagName('main')[0];
  main && main.removeChild(document.getElementById('tp-watermark')); // /移除
}; // 导出表格

export var exportTab = function exportTab(tabCols, tabData, title) {
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
          }); //解决中文乱码问题

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
}; // 获取随机颜色

export var getRenderColor = function getRenderColor() {
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
}; //将base64类型转成blob类型

export var base64ToBlob = function base64ToBlob(code) {
  var parts = code.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]); // 解码base64得到二进制字符串

  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength); // 创建8位无符号整数值的类型化数组

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i); // 数组接收二进制字符串
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
};