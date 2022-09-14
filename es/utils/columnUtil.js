function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from "react";

/*
 * @Description: 生成表头
 */
import { Checkbox, Rate, Tooltip, Button, Tag, Upload, Form, Input, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { getDvaApp } from 'umi';
import language from '@/locale/language';
import { ergodicRoot, isEnglish } from './utils';
import { hideLoading, showLoading, replaceLinkSql } from './utils';
import { uploadRjFile } from '../service/uploadApi';
import * as Icon from '@ant-design/icons';
import { ReactSVG } from 'react-svg';
import './index.css';
var fixed_column = language.table.fixed_column;

var svgDir = require.context('../assets/icon/');

var clickLink = function clickLink(linkParams, text, objectANamespace, record, fieldName, showSubPage) {
  linkParams = linkParams || {};
  var _linkParams = linkParams,
      linkType = _linkParams.linkType,
      aLink = _linkParams.aLink,
      condition = _linkParams.condition;

  if (linkType === 1) {
    var URL = aLink;
    var fields = URL.match(/[^${}]+(?=\})/g);
    URL = fields ? replaceLinkSql(record, URL) : URL;
    window.open(URL);
  } else if (linkType === 4) {
    showSubPage([record]);
  } else {
    getDvaApp()._store.dispatch({
      type: "popup/loadPopup",
      payload: {
        linkParams: linkParams,
        clickedMenu: {
          id: text,
          caption: text,
          wType: linkType === 3 ? 'ExternalFile' : 'linkPage',
          fieldName: fieldName,
          condition: condition
        },
        objectANamespace: objectANamespace,
        record: record
      }
    });
  }
};

var clickURL = function clickURL(text) {
  window.open(text);
};

var _beforeUpload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file, record) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            showLoading();
            _context.next = 3;
            return uploadRjFile({
              file: file,
              itemId: record.InspectionItem.ID,
              objectNo: 'IQC_LIA'
            });

          case 3:
            res = _context.sent;

            if (res && res.flag === true) {
              message.success('上传成功');
              hideLoading();
            } else {
              message.success('上传失败');
              hideLoading();
            }

            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function beforeUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // antd table


export var setColumn = function setColumn() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  return columns.map(function (item) {
    var caption = item.caption,
        no = item.no,
        align = item.align,
        editParams = item.editParams,
        editor = item.editor,
        width = item.width,
        supLink = item.supLink,
        linkParams = item.linkParams,
        gType = item.gType,
        params = item.params,
        name = item.name,
        enName = item.enName,
        isOutreach = item.isOutreach,
        supSort = item.supSort;
    if (gType === 1) no = 'index';

    if (isOutreach) {
      caption = /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red'
        }
      }, isEnglish ? enName : name);
    }

    return {
      title: caption,
      dataIndex: no,
      align: align,
      width: Number("".concat(width || 100)),
      sorter: supSort && gType === 0 ? function (a, b) {
        return a[no] < b[no] ? -1 : 1;
      } : null,
      render: function render(text, record, index) {
        if (gType === 1) return index + 1;

        if (gType === 2) {
          try {
            var _localStorage = localStorage,
                userName = _localStorage.userName;

            var _JSON$parse = JSON.parse(params || '{}'),
                valueScript = _JSON$parse.valueScript,
                colorScript = _JSON$parse.colorScript;

            var value = eval("(function fun(record, userName){".concat(valueScript, "})"))(record, userName);
            var color = eval("(function fun(record, userName){".concat(colorScript, "})"))(record, userName);
            return color ? /*#__PURE__*/React.createElement(Tag, {
              color: color
            }, value) : value;
          } catch (err) {
            console.log(err);
            return 'JS脚本异常';
          }
        } else if (gType === 3) {
          return /*#__PURE__*/React.createElement(Button, {
            type: "link",
            size: "small",
            onClick: function onClick(e) {
              e.preventDefault();
              clickURL(text);
            }
          }, text);
        } else {
          var Cmp;

          if (editor === 'MapValueList' || editor === 'ValueList' || editor === 'RadioEditor' || editor === 'CheckEditor') {
            var num = -1;

            var _JSON$parse2 = JSON.parse(editParams || '{}'),
                _JSON$parse2$values = _JSON$parse2.values,
                values = _JSON$parse2$values === void 0 ? [] : _JSON$parse2$values;

            if (editor === 'MapValueList') {
              num = values.findIndex(function (item) {
                return item.key === text;
              });
            } else {
              num = values.findIndex(function (item) {
                return item.name === text;
              });
            }

            if (num !== -1) {
              var _values$num = values[num],
                  _color = _values$num.color,
                  _name = _values$num.name;
              Cmp = _color ? /*#__PURE__*/React.createElement(Tag, {
                color: _color
              }, _name) : _name;
            } else {
              Cmp = text;
            }
          } else if (editor === 'CheckBox') {
            Cmp = /*#__PURE__*/React.createElement(Checkbox, {
              checked: Boolean(text)
            });
          } else if (editor === 'Rate') {
            Cmp = /*#__PURE__*/React.createElement(Rate, {
              value: text,
              disabled: true
            });
          } else if (editor === 'DateTime') {
            var _JSON$parse3 = JSON.parse(editParams || '{}'),
                format = _JSON$parse3.format;

            Cmp = text ? text.slice(0, format.length) : text;
          } else {
            Cmp = /*#__PURE__*/React.createElement(Tooltip, {
              title: text,
              placement: "topLeft",
              destroyTooltipOnHide: true
            }, text);
          }

          if (supLink) {
            Cmp = /*#__PURE__*/React.createElement(Button, {
              type: "link",
              size: "small",
              onClick: function onClick(e) {
                e.preventDefault();
                clickLink(linkParams, text, namespace);
              }
            }, Cmp);
          }

          return Cmp;
        }
      }
    };
  });
}; // baseTable

export var setColumns = function setColumns() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  var lockColumns = arguments.length > 2 ? arguments[2] : undefined;
  var finallyColumns = columns.map(function (item) {
    var caption = item.caption,
        no = item.no,
        align = item.align,
        editParams = item.editParams,
        editor = item.editor,
        width = item.width,
        supLink = item.supLink,
        linkParams = item.linkParams,
        gType = item.gType,
        params = item.params,
        name = item.name,
        enName = item.enName,
        isOutreach = item.isOutreach,
        supSort = item.supSort,
        frozen = item.frozen;
    if (gType === 1) no = 'index';

    if (isOutreach) {
      caption = /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, isEnglish ? enName : name);
    }

    return {
      title: caption,
      dataKey: no,
      dataIndex: no,
      align: align,
      width: Number("".concat(width || 100)),
      key: no,
      resizable: true,
      sortable: supSort && gType === 0 ? true : false,
      frozen: frozen,
      headerRenderer: function headerRenderer() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tooltip, {
          title: fixed_column
        }, /*#__PURE__*/React.createElement(LockOutlined, {
          className: "tableIconLock",
          onClick: function onClick() {
            return lockColumns(finallyColumns, no);
          }
        })), caption);
      },
      cellRenderer: function cellRenderer(_ref2) {
        var text = _ref2.cellData,
            record = _ref2.rowData,
            index = _ref2.rowIndex;
        if (gType === 1) return index + 1;

        if (gType === 2) {
          try {
            var _localStorage2 = localStorage,
                userName = _localStorage2.userName;

            var _JSON$parse4 = JSON.parse(params || '{}'),
                valueScript = _JSON$parse4.valueScript,
                colorScript = _JSON$parse4.colorScript;

            var value = eval("(function fun(record, userName){".concat(valueScript, "})"))(record, userName);
            var color = eval("(function fun(record, userName){".concat(colorScript, "})"))(record, userName);
            return color ? /*#__PURE__*/React.createElement(Tag, {
              color: color
            }, value) : value;
          } catch (err) {
            console.log(err);
            return 'JS脚本异常';
          }
        } else if (gType === 3) {
          return (
            /*#__PURE__*/
            // <Button
            //   type='link'
            //   size='small'
            //   onClick={e => {
            //     e.preventDefault()
            //     clickURL(text)
            //   }}
            //   style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
            // >
            React.createElement(Button, {
              type: "link",
              onClick: function onClick(e) {
                e.preventDefault();
                clickURL(text);
              },
              style: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }
            }, text) // </Button>

          );
        } else {
          var Cmp;

          if (editor === 'MapValueList' || editor === 'ValueList' || editor === 'RadioEditor' || editor === 'CheckEditor') {
            var num = -1;

            var _JSON$parse5 = JSON.parse(editParams || '{}'),
                _JSON$parse5$values = _JSON$parse5.values,
                values = _JSON$parse5$values === void 0 ? [] : _JSON$parse5$values;

            if (editor === 'MapValueList') {
              num = values.findIndex(function (item) {
                return item.key === text;
              });
            } else {
              num = values.findIndex(function (item) {
                return item.name === text;
              });
            }

            if (num !== -1) {
              var _values$num2 = values[num],
                  _color2 = _values$num2.color,
                  _name2 = _values$num2.name;
              Cmp = _color2 ? /*#__PURE__*/React.createElement(Tag, {
                color: _color2
              }, _name2) : _name2;
            } else {
              Cmp = text;
            }
          } else if (editor === 'CheckBox') {
            Cmp = /*#__PURE__*/React.createElement(Checkbox, {
              checked: Boolean(text)
            });
          } else if (editor === 'Rate') {
            Cmp = /*#__PURE__*/React.createElement(Rate, {
              value: text,
              disabled: true
            });
          } else if (editor === 'DateTime') {
            var _JSON$parse6 = JSON.parse(editParams || '{}'),
                format = _JSON$parse6.format;

            Cmp = /*#__PURE__*/React.createElement("span", {
              style: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }
            }, text ? text.slice(0, format.length) : text);
          } else {
            Cmp = /*#__PURE__*/React.createElement(Tooltip, {
              title: text
            }, /*#__PURE__*/React.createElement("span", {
              style: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }
            }, text));
          }

          if (supLink) {
            Cmp =
            /*#__PURE__*/
            // <Button
            //   type='link'
            //   size='small'
            //   onClick={e => {
            //     e.preventDefault()
            //     clickLink(linkParams, text, namespace, record)
            //   }}
            //   style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis' }}
            // >
            React.createElement(Button, {
              type: "link",
              onClick: function onClick(e) {
                e.preventDefault();
                clickLink(linkParams, text, namespace, record);
              },
              style: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }
            }, Cmp) // </Button>
            ;
          }

          return Cmp;
        }
      }
    };
  });
  return finallyColumns;
};
/* Antd Table */

export var setAntdColumns = function setAntdColumns() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  var model = arguments.length > 2 ? arguments[2] : undefined;
  var lockColumns = arguments.length > 3 ? arguments[3] : undefined;
  var isModeling = sessionStorage.getItem('isModeling');
  var finallyColumns = columns.map(function (item) {
    var caption = item.caption,
        no = item.no,
        align = item.align,
        editParams = item.editParams,
        editor = item.editor,
        width = item.width,
        supLink = item.supLink,
        linkParams = item.linkParams,
        gType = item.gType,
        fType = item.fType,
        params = item.params,
        name = item.name,
        enName = item.enName,
        isOutreach = item.isOutreach,
        supSort = item.supSort,
        frozen = item.frozen,
        fieldName = item.fieldName;
    if (gType === 1) no = 'index';

    if (isOutreach) {
      caption = /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, isEnglish ? enName : name);
    }

    var sorter = false;

    if (supSort && gType === 0) {
      switch (fType) {
        case 'INT':
          sorter = {
            compare: function compare(a, b) {
              return a[fieldName] - b[fieldName];
            }
          };
          break;

        case 'VARCHAR':
          sorter = {
            compare: function compare(a, b) {
              return a && a[fieldName] && b && b[fieldName] ? a[fieldName].localeCompare(b[fieldName]) : false;
            }
          };
          break;

        case 'DATETIME':
          sorter = {
            compare: function compare(a, b) {
              return a && a[fieldName] && b && b[fieldName] ? a[fieldName].localeCompare(b[fieldName]) : false;
            }
          };
          break;

        default:
          break;
      }
    }

    return {
      title: function title() {
        return /*#__PURE__*/React.createElement(Tooltip, {
          title: isEnglish ? isModeling ? "".concat(fieldName, ":").concat(enName) : enName : caption ? isModeling ? "".concat(fieldName, "\uFF1A").concat(caption) : caption : isModeling ? "".concat(fieldName, "\uFF1A").concat(name) : name
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, caption || isEnglish ? enName : name));
      },
      dataKey: no || fieldName,
      showSorterTooltip: false,
      dataIndex: fieldName || no,
      align: align,
      width: Number("".concat(width || 100)),
      key: no || fieldName,
      resizable: true,
      sortable: supSort && gType === 0 ? true : false,
      sorter: sorter,
      fixed: gType === 1 ? 'left' : frozen,
      render: function render(text, record, index) {
        if (gType === 1) return model.page && model.pageSize ? model.page * model.pageSize - model.pageSize + index + 1 : index + 1;

        if (gType === 2) {
          try {
            var _localStorage3 = localStorage,
                userName = _localStorage3.userName;

            var _ref3 = params || {},
                valueScript = _ref3.valueScript,
                colorScript = _ref3.colorScript;

            var value = eval("(function fun(record, userName){".concat(valueScript, "})"))(record, userName);
            var color = eval("(function fun(record, userName){".concat(colorScript, "})"))(record, userName);
            return color ? /*#__PURE__*/React.createElement(Tag, {
              color: color
            }, value) : value;
          } catch (err) {
            console.log(err);
            return 'JS脚本异常';
          }
        } else if (gType === 3) {
          return /*#__PURE__*/React.createElement(Button, {
            type: "link",
            onClick: function onClick(e) {
              e.preventDefault();
              clickURL(text);
            }
          }, text);
        } else {
          var Cmp;

          if (editor === 'MapValueList' || editor === 'ValueList' || editor === 'RadioEditor' || editor === 'CheckEditor') {
            var num = -1;

            var _ref4 = editParams || {},
                _ref4$values = _ref4.values,
                values = _ref4$values === void 0 ? [] : _ref4$values;

            if (editor === 'MapValueList') {
              num = values.findIndex(function (item) {
                return item.key === text;
              });
            } else {
              num = values.findIndex(function (item) {
                return item.name === text;
              });
            }

            if (num !== -1) {
              var _values$num3 = values[num],
                  _color3 = _values$num3.color,
                  _name3 = _values$num3.name;
              Cmp = _color3 ? /*#__PURE__*/React.createElement(Tag, {
                color: _color3
              }, _name3) : getDataStateCmp(_name3, record);
            } else {
              Cmp = getDataStateCmp(text, record);
            }
          } else if (editor === 'CheckBox') {
            Cmp = /*#__PURE__*/React.createElement(Checkbox, {
              checked: Boolean(text)
            });
          } else if (editor === 'Rate') {
            Cmp = /*#__PURE__*/React.createElement(Rate, {
              value: text,
              disabled: true
            });
          } else if (editor === 'DateTime') {
            var _ref5 = editParams || {},
                format = _ref5.format;

            Cmp = /*#__PURE__*/React.createElement(Tooltip, {
              title: text ? text.slice(0, format.length) : text
            }, /*#__PURE__*/React.createElement("span", {
              style: {
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: "".concat(getDataStateColor(record))
              }
            }, text ? text.slice(0, format.length) : text));
          } else if (editor === 'ImageEditor') {
            if (text) {
              var fileNameList = JSON.parse(text).map(function (item) {
                return item && item.fileName || null;
              });
              text = JSON.stringify(fileNameList);
            }

            Cmp = getDataStateCmp(text, record);
          } // 处理表格中用户选择器字段只显示名称
          else if (editor === 'UserSelector') {
            if (text) {
              text = text.substr(text.indexOf(':') + 1);
              Cmp = /*#__PURE__*/React.createElement(Tooltip, {
                title: text
              }, text);
            }
          } else if (editor === 'UsersSelector') {
            if (text) {
              var arr = text && text.split(',');
              arr = arr.map(function (item, index) {
                return item.substr(arr[index].indexOf(':') + 1);
              }) || [];
              text = arr.join(',') || '';
              Cmp = /*#__PURE__*/React.createElement(Tooltip, {
                title: text
              }, text);
            }
          } else {
            Cmp = getDataStateCmp(text, record);
          }

          if (supLink) {
            Cmp = /*#__PURE__*/React.createElement(Button, {
              type: "link",
              onClick: function onClick(e) {
                e.preventDefault();
                clickLink(linkParams, text, namespace, record, fieldName);
              }
            }, Cmp);
          }

          return Cmp;
        }
      }
    };
  });
  return finallyColumns;
};

var getDataStateCmp = function getDataStateCmp(text, record, icon, newIcon, IconView, supLink) {
  var newText = null;

  if (text.props && text.props.copyable) {
    newText = text.props.children;
  } else {
    newText = text;
  }

  return record.STATE ? /*#__PURE__*/React.createElement(Tooltip, {
    title: newText,
    placement: "topLeft",
    destroyTooltipOnHide: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "".concat(getDataStateColor(record)),
      textDecoration: supLink && 'underline'
    }
  }, text)) : /*#__PURE__*/React.createElement(Tooltip, {
    title: newText,
    placement: "topLeft",
    destroyTooltipOnHide: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textDecoration: supLink && 'underline'
    }
  }, icon && newIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
    style: {
      fill: '#000'
    },
    className: "columThirdIcon",
    src: svgDir("./".concat(newIcon, ".svg"))
  }) : IconView && /*#__PURE__*/React.createElement(IconView, {
    style: {
      marginRight: '5px'
    }
  }), text));
};

var getDataStateColor = function getDataStateColor(record) {
  var color = 'black';
  var state = record.STATE;

  if (state === null) {
    return color;
  }

  switch (state) {
    case 1 || '1':
      color = 'orchid';
      break;

    case 2 || '2':
      color = 'blue';
      break;

    case 3 || '3':
      color = 'red';
      break;

    case 4 || '4':
      color = 'gray';
      break;

    default:
  }

  return color;
}; // 兼容以前写的适应antd table 的columns


export var setOldColumns = function setOldColumns(columns) {
  return columns.map(function (item) {
    var title = item.title,
        dataIndex = item.dataIndex,
        _item$width = item.width,
        width = _item$width === void 0 ? 100 : _item$width,
        align = item.align,
        render = item.render,
        headerRenderer = item.headerRenderer,
        frozen = item.frozen,
        fixed = item.fixed,
        editable = item.editable,
        valueType = item.valueType,
        valueEnum = item.valueEnum,
        formItemProps = item.formItemProps;
    return {
      title: title,
      dataKey: dataIndex,
      dataIndex: dataIndex,
      width: width,
      align: align,
      key: dataIndex,
      resizable: true,
      headerRenderer: headerRenderer,
      frozen: frozen,
      fixed: fixed,
      editable: editable,
      valueType: valueType,
      valueEnum: valueEnum,
      formItemProps: formItemProps,
      // renderText: render || (dataIndex === 'index' ? (t, r, index) => index + 1 : (text) => text),
      render: render || (dataIndex === 'index' ? function (t, r, index) {
        return index + 1;
      } : function (text) {
        return /*#__PURE__*/React.createElement(Tooltip, {
          title: text,
          placement: "topLeft"
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            display: 'block',
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }, text));
      })
    };
  });
};
/* 装配质检录入页面表格列 */

export var setInspectionColumns = function setInspectionColumns(_ref6) {
  var dataList = _ref6.dataList,
      tableHead = _ref6.tableHead,
      tableHead2 = _ref6.tableHead2,
      DefectCode = _ref6.DefectCode,
      onInputPressEnter = _ref6.onInputPressEnter,
      onInputFocus = _ref6.onInputFocus,
      inputKeyboardEvents = _ref6.inputKeyboardEvents,
      commonInputPressEnter = _ref6.commonInputPressEnter,
      onInputBlur = _ref6.onInputBlur,
      onDefectTypeChange = _ref6.onDefectTypeChange,
      checkResultChange = _ref6.checkResultChange,
      formDisabled = _ref6.formDisabled;

  /* 获取检验列表最大检验项 */
  var maxInspectionQty = Math.max.apply(Math, dataList.map(function (item) {
    return !isNaN(Number(item.InspectionItem.TV)) && item.InspectionItem.SQ;
  }));
  /* 装配常规表格列 */

  var columns = tableHead.map(function (item, index) {
    return _objectSpread(_objectSpread({
      align: 'center'
    }, item), {}, {
      width: item.width || 100,
      render: item.render ? item.render : item.input ? function (text, record, i) {
        var initValue = record.InspectionItem[item.dataIndex];
        var _record$InspectionIte = record.InspectionItem,
            USL = _record$InspectionIte.USL,
            LSL = _record$InspectionIte.LSL;
        var TRClass = "";
        if (item.dataIndex === 'TR') TRClass += "inspection-result";
        if (initValue === 'OK') TRClass += " ok";
        if (initValue === 'NG') TRClass += " ng";
        return item.dataIndex === 'TR' ? /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID,
          className: TRClass + " TR-".concat(record.InspectionItem.ID) + " resultSel"
        }, /*#__PURE__*/React.createElement(Select, {
          id: 'inspectionForm_' + record.InspectionItem.ID + '_InspectionItem_TR',
          onChange: function onChange(value) {
            return checkResultChange(value, record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          disabled: formDisabled || (USL || LSL ? !isNaN(Number(USL)) || !isNaN(Number(LSL)) : false)
        }, /*#__PURE__*/React.createElement(Select.Option, {
          value: "OK",
          className: TRClass
        }, "OK"), /*#__PURE__*/React.createElement(Select.Option, {
          value: "NG",
          className: TRClass
        }, "NG"))) : item.dataIndex === 'DEFECT_TYPE' ? /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Select, {
          showSearch: true,
          allowClear: true,
          bordered: false,
          dropdownStyle: {
            minWidth: 500
          },
          onChange: function onChange(value) {
            onDefectTypeChange(value, record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          disabled: formDisabled || record.InspectionItem.TR !== 'NG'
        }, /*#__PURE__*/React.createElement(Select.Option, {
          disabled: true,
          className: "selectOptionHeader",
          values: [undefined],
          value: [undefined]
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOption defect-option"
        }, /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u4EE3\u7801"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u4EE3\u7801")), /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u7C7B\u578B"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u7C7B\u578B")), /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u503C"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u503C")), /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u63CF\u8FF0"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u63CF\u8FF0")))), DefectCode.map(function (item) {
          return /*#__PURE__*/React.createElement(Select.Option, {
            value: [item.DEFECT_CODE, item.DEFECT_TYPE, item.DEFECT_VALUE, item.DEFECT_DESCRIPTION],
            key: item.DEFECT_CODE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOption defect-option"
          }, /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_CODE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_CODE)), /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_TYPE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_TYPE)), /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_VALUE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_VALUE)), /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_DESCRIPTION
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_DESCRIPTION))));
        }))) : item.dataIndex === 'REMARK' ? /*#__PURE__*/React.createElement(Tooltip, {
          title: record.InspectionItem.REMARK
        }, /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Input.TextArea, {
          type: "text",
          style: {
            textAlign: 'left'
          },
          autoSize: {
            minRows: 3,
            maxRows: 5
          },
          onPressEnter: function onPressEnter(e) {
            return commonInputPressEnter(e, record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          onFocus: function onFocus() {
            return onInputFocus(record, i);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          disabled: formDisabled
        }))) : item.dataIndex === 'file' ? /*#__PURE__*/React.createElement(Upload, {
          beforeUpload: function beforeUpload(file) {
            return _beforeUpload(file, record);
          },
          showUploadList: false,
          itemRender: function itemRender() {
            return /*#__PURE__*/React.createElement(React.Fragment, null);
          },
          maxCount: 1,
          disabled: formDisabled,
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Button, {
          disabled: formDisabled,
          icon: /*#__PURE__*/React.createElement(UploadOutlined, null)
        }, "\u4E0A\u4F20\u9644\u4EF6")) : /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Input, {
          type: "text",
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            return commonInputPressEnter(e, record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          onFocus: function onFocus() {
            return onInputFocus(record, i);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          className: TRClass,
          disabled: formDisabled || item.dataIndex === 'TR' && (USL || LSL ? !isNaN(Number(USL)) || !isNaN(Number(LSL)) : false) || item.dataIndex === 'DEFECT_VALUE'
        }));
      } : function (text, record) {
        return /*#__PURE__*/React.createElement("div", {
          className: "ant-table-cell-width",
          key: record.InspectionItem.ID
        }, record.InspectionItem[item.dataIndex]);
      }
    });
  });
  /* 装配检验值列表 */

  var _loop = function _loop(i) {
    columns.push({
      title: i + 1,
      dataIndex: 'InspectionItemResult',
      align: 'center',
      width: 80,
      render: function render(text, record, index) {
        var _record$InspectionIte3 = record.InspectionItem,
            USL = _record$InspectionIte3.USL,
            LSL = _record$InspectionIte3.LSL;
        var inputClass = text && text[i] && text && text[i]['TR'] === 'NG' ? "checkItem-".concat(i, "-").concat(index, " ng-cell") : "checkItem-".concat(i, "-").concat(index);
        return record.InspectionItem.SQ > i && (USL || LSL ? !isNaN(Number(USL)) || !isNaN(Number(LSL)) : false) ? /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItemResult', i],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Input, {
          type: "text",
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            return onInputPressEnter(e, record, [i, index]);
          },
          onFocus: function onFocus() {
            return onInputFocus(record, index, text && text[i]);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItemResult', i], index);
          },
          onKeyUp: function onKeyUp(key) {
            return inputKeyboardEvents(key, record, [i, index]);
          },
          id: "checkItem-".concat(i, "-").concat(index),
          className: inputClass,
          disabled: formDisabled
        })) : /*#__PURE__*/React.createElement("div", {
          className: "null-element",
          key: record.InspectionItem.ID
        });
      }
    });
  };

  for (var i = 0; i < maxInspectionQty; i++) {
    _loop(i);
  }

  var columns2 = tableHead2.map(function (item, index) {
    return _objectSpread(_objectSpread({
      align: 'center'
    }, item), {}, {
      width: item.width || 100,
      render: item.render ? item.render : item.input ? function (text, record, i) {
        var initValue = record.InspectionItem[item.dataIndex];
        var _record$InspectionIte2 = record.InspectionItem,
            USL = _record$InspectionIte2.USL,
            LSL = _record$InspectionIte2.LSL;
        var TRClass = "";
        if (item.dataIndex === 'TR') TRClass += "inspection-result";
        if (initValue === 'OK') TRClass += " ok";
        if (initValue === 'NG') TRClass += " ng";
        return item.dataIndex === 'DEFECT_TYPE' ? /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Select, {
          showSearch: true,
          allowClear: true,
          bordered: true,
          dropdownClassName: "defect-select-dropdown",
          onChange: function onChange(value, options) {
            onDefectTypeChange(JSON.parse(value), record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          disabled: formDisabled || record.InspectionItem.TR !== 'NG'
        }, /*#__PURE__*/React.createElement(Select.Option, {
          disabled: true,
          className: "selectOptionHeader",
          values: [undefined],
          value: [undefined]
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOption defect-option"
        }, /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u4EE3\u7801"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u4EE3\u7801")), /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u7C7B\u578B"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u7C7B\u578B")), /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u503C"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u503C")), /*#__PURE__*/React.createElement(Tooltip, {
          title: "\u7F3A\u9677\u63CF\u8FF0"
        }, /*#__PURE__*/React.createElement("div", {
          className: "selectOptionObject"
        }, "\u7F3A\u9677\u63CF\u8FF0")))), DefectCode.map(function (item) {
          return /*#__PURE__*/React.createElement(Select.Option, {
            value: JSON.stringify([item.DEFECT_CODE, item.DEFECT_TYPE, item.DEFECT_VALUE, item.DEFECT_DESCRIPTION]),
            key: item.DEFECT_CODE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOption defect-option"
          }, /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_CODE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_CODE)), /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_TYPE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_TYPE)), /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_VALUE
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_VALUE)), /*#__PURE__*/React.createElement(Tooltip, {
            title: item.DEFECT_DESCRIPTION
          }, /*#__PURE__*/React.createElement("div", {
            className: "selectOptionObject"
          }, item.DEFECT_DESCRIPTION))));
        }))) : item.dataIndex === 'DEFECT_DESCRIPTION' ? /*#__PURE__*/React.createElement(Tooltip, {
          title: record.InspectionItem.DEFECT_DESCRIPTION
        }, /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Input.TextArea, {
          type: "text",
          style: {
            textAlign: 'left'
          },
          autoSize: {
            minRows: 3,
            maxRows: 5
          },
          onPressEnter: function onPressEnter(e) {
            return commonInputPressEnter(e, record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          onFocus: function onFocus() {
            return onInputFocus(record, i);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          className: TRClass,
          disabled: formDisabled || record.InspectionItem.TR !== 'NG'
        }))) : /*#__PURE__*/React.createElement(Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItem', item.dataIndex],
          key: record.InspectionItem.ID
        }, /*#__PURE__*/React.createElement(Input, {
          type: "text",
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            return commonInputPressEnter(e, record, [record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          onFocus: function onFocus() {
            return onInputFocus(record, i);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItem', item.dataIndex], i);
          },
          className: TRClass,
          disabled: formDisabled || item.dataIndex === 'TR' && (USL || LSL ? !isNaN(Number(USL)) || !isNaN(Number(LSL)) : false) || item.dataIndex === 'DEFECT_VALUE'
        }));
      } : function (text, record) {
        return /*#__PURE__*/React.createElement("div", {
          className: "ant-table-cell-width",
          key: record.InspectionItem.ID
        }, record.InspectionItem[item.dataIndex]);
      }
    });
  });
  columns.push.apply(columns, _toConsumableArray(columns2));
  return columns;
}; // 多级表头

export var setMultipleColumns = function setMultipleColumns() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var namespace = arguments.length > 1 ? arguments[1] : undefined;
  var model = arguments.length > 2 ? arguments[2] : undefined;
  var lockColumns = arguments.length > 3 ? arguments[3] : undefined;
  var isTree = arguments.length > 4 ? arguments[4] : undefined;
  var showSubPage = arguments.length > 5 ? arguments[5] : undefined;
  var gridFiledList = ergodicRoot(columns.map(function (item) {
    item.pId = item.pId || '0';
    return item;
  }), '0', 'pId', 'id');

  var getColumns = function getColumns(gridFiledList) {
    var columns = gridFiledList.map(function (item) {
      var gType = item.gType,
          children = item.children,
          caption = item.caption,
          name = item.name,
          enName = item.enName,
          BG_COLOR = item.BG_COLOR,
          fieldName = item.fieldName;
      var columnItem = {};

      if (gType && gType === 4) {
        columnItem.title = function () {
          return /*#__PURE__*/React.createElement(Tooltip, {
            title: caption || isEnglish ? enName || fieldName : name
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              maxWidth: '100%',
              height: '100%',
              overflow: 'hidden',
              lineHeight: '38px',
              textOverflow: 'ellipsis',
              background: BG_COLOR
            }
          }, caption || isEnglish ? enName || fieldName : name));
        };

        if (children && children.length) columnItem.children = getColumns(children);
      } else {
        columnItem = gridColumnItem(item, namespace, model, isTree, showSubPage);
      }

      return columnItem;
    });
    return columns;
  };

  return getColumns(gridFiledList);
};

var gridColumnItem = function gridColumnItem(item, namespace, model, isTree, showSubPage) {
  var isModeling = sessionStorage.getItem('isModeling');
  var caption = item.caption,
      no = item.no,
      align = item.align,
      editParams = item.editParams,
      editor = item.editor,
      width = item.width,
      supLink = item.supLink,
      linkParams = item.linkParams,
      gType = item.gType,
      fType = item.fType,
      params = item.params,
      name = item.name,
      enName = item.enName,
      isOutreach = item.isOutreach,
      supSort = item.supSort,
      frozen = item.frozen,
      fieldName = item.fieldName,
      COPYABLE = item.COPYABLE;
  if (gType === 1) fieldName = isTree ? 'rowkey' : 'index';

  if (isOutreach) {
    caption = /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'red',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, isEnglish ? enName : name);
  }

  var sorter = false;

  if (supSort && gType === 0) {
    switch (fType) {
      case 'INT':
        sorter = {
          compare: function compare(a, b) {
            return a[fieldName] - b[fieldName];
          }
        };
        break;

      case 'VARCHAR':
        sorter = {
          compare: function compare(a, b) {
            return a && a[fieldName] && b && b[fieldName] ? a[fieldName].localeCompare(b[fieldName]) : false;
          }
        };
        break;

      case 'DATETIME':
        sorter = {
          compare: function compare(a, b) {
            return a && a[fieldName] && b && b[fieldName] ? a[fieldName].localeCompare(b[fieldName]) : false;
          }
        };
        break;

      default:
        break;
    }
  }

  return {
    title: function title() {
      return /*#__PURE__*/React.createElement(Tooltip, {
        title: isEnglish ? isModeling ? "".concat(fieldName, ":").concat(enName) : enName || fieldName : caption ? isModeling ? "".concat(fieldName, "\uFF1A").concat(caption) : caption : isModeling ? "".concat(fieldName, "\uFF1A").concat(name) : name
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, caption || isEnglish ? enName : name));
    },
    dataKey: fieldName || no,
    showSorterTooltip: false,
    dataIndex: fieldName || no,
    align: align,
    width: Number("".concat(width || 100)),
    key: fieldName || no,
    resizable: true,
    sortable: supSort && gType === 0 ? true : false,
    sorter: sorter,
    copyable: COPYABLE ? true : false,
    fixed: gType === 1 ? 'left' : frozen,
    render: function render(text, record, index) {
      if (gType === 1) return isTree ? text : model.page && model.pageSize ? model.page * model.pageSize - model.pageSize + index + 1 : index + 1;

      if (gType === 2) {
        try {
          var _localStorage4 = localStorage,
              userName = _localStorage4.userName;

          var _ref7 = params || {},
              valueScript = _ref7.valueScript,
              colorScript = _ref7.colorScript;

          var value = eval("(function fun(record, userName){".concat(valueScript, "})"))(record, userName);
          var color = eval("(function fun(record, userName){".concat(colorScript, "})"))(record, userName);
          return color ? /*#__PURE__*/React.createElement(Tag, {
            color: color
          }, value) : value;
        } catch (err) {
          console.log(err);
          return 'JS脚本异常';
        }
      } else if (gType === 3) {
        if (COPYABLE) {
          text = text.props.children;
        }

        return /*#__PURE__*/React.createElement(Button, {
          type: "link",
          onClick: function onClick(e) {
            e.preventDefault();
            clickURL(text);
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            textDecoration: 'underline'
          }
        }, text));
      } else {
        var Cmp;

        if (editor === 'MapValueList' || editor === 'ValueList' || editor === 'RadioEditor' || editor === 'CheckEditor') {
          var num = -1;

          var _ref8 = editParams || {},
              _ref8$values = _ref8.values,
              values = _ref8$values === void 0 ? [] : _ref8$values;

          var newIcon = null;
          var IconView = null;
          values.map(function (item) {
            if (item.icon) {
              if (item.icon.indexOf('third-') != -1) {
                //筛选第三方图标库的icons
                newIcon = item.icon.substring(6); //将第三方图标库标识去掉
              } else {
                item.icon = item.icon.substring(0, 1).toUpperCase() + item.icon.substring(1, item.icon.length);
                IconView = Icon["".concat(item.icon, "Outlined")];
              }
            }
          });

          if (editor === 'MapValueList') {
            if (COPYABLE) {
              text = text.props.children;
            }

            num = values.findIndex(function (item) {
              return item.key === text;
            });
          } else {
            if (COPYABLE) {
              text = text.props.children;
            }

            num = values.findIndex(function (item) {
              return item.name === text;
            });
          }

          if (num !== -1) {
            var _values$num4 = values[num],
                _color4 = _values$num4.color,
                _name4 = _values$num4.name,
                icon = _values$num4.icon;
            Cmp = _color4 ? /*#__PURE__*/React.createElement(Tag, {
              color: _color4
            }, icon && newIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
              style: {
                fill: '#fff'
              },
              className: "columThirdIcon",
              src: svgDir("./".concat(newIcon, ".svg"))
            }) : IconView && /*#__PURE__*/React.createElement(IconView, {
              style: {
                marginRight: '5px'
              }
            }), _name4) : getDataStateCmp(_name4, record, icon, newIcon, IconView);
          } else {
            Cmp = getDataStateCmp(text, record);
          }
        } else if (editor === 'CheckBox') {
          if (COPYABLE) {
            text = text.props.children;
          }

          Cmp = /*#__PURE__*/React.createElement(Checkbox, {
            checked: Boolean(text)
          });
        } else if (editor === 'Rate') {
          if (COPYABLE) {
            text = text.props.children;
          }

          Cmp = /*#__PURE__*/React.createElement(Rate, {
            value: text,
            disabled: true
          });
        } else if (editor === 'DateTime') {
          var _ref9 = editParams || {},
              format = _ref9.format;

          var newText = null;

          if (COPYABLE) {
            newText = text.props.children;
          } else {
            newText = text;
          }

          Cmp = /*#__PURE__*/React.createElement(Tooltip, {
            title: text ? newText.slice(0, format.length) : text
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: "".concat(getDataStateColor(record))
            }
          }, text ? newText.slice(0, format.length) : text));
        } else if (editor === 'ImageEditor') {
          if (COPYABLE) {
            text = text.props.children;
          }

          if (record[fieldName]) {
            var fileNameList = JSON.parse(text).map(function (item) {
              return item && item.fileName || null;
            });
            text = JSON.stringify(fileNameList);
          }

          Cmp = getDataStateCmp(text, record);
        } // 处理表格中用户选择器字段只显示名称
        else if (editor === 'UserSelector') {
          if (COPYABLE) {
            text = text.props.children;
          }

          if (text) {
            text = text.substr(text.indexOf(':') + 1);
            Cmp = getDataStateCmp(text, record);
          }
        } else if (editor === 'UsersSelector') {
          if (COPYABLE) {
            text = text.props.children;
          }

          if (text) {
            var arr = text && text.split(',');
            arr = arr.map(function (item, index) {
              return item.substr(arr[index].indexOf(':') + 1);
            }) || [];
            text = arr.join(',') || '';
            Cmp = getDataStateCmp(text, record);
          }
        } else {
          Cmp = getDataStateCmp(text, record, supLink);
        }

        if (supLink) {
          Cmp = /*#__PURE__*/React.createElement(Button, {
            type: "link",
            onClick: function onClick(e) {
              e.preventDefault();
              clickLink(linkParams, text, namespace, record, fieldName, showSubPage);
            },
            style: {
              width: '100%'
            }
          }, Cmp);
        }

        return Cmp;
      }
    }
  };
};