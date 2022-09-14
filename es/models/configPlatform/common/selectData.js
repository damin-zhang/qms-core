function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["onSelect", "condition", "type", "objectId", "other", "rData", "preview", "objectTypes", "page", "pageSize"];

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import { queryProcedures, queryProceduresParams } from '../../../service/api';
import { queryObject, queryAllObject, queryItem, searchObject, queryGridModel, queryMetaAuthcode, searchAllObject, getMetaScriptData } from '../../../service/metaApi';
import { commonApi } from '../../../service/applicationApi';
import language from '@/locale/language';
import { Tooltip, Checkbox } from 'antd';
import { setAntdColumns, setColumn } from '../../../utils/columnUtil';
import { implclassMap } from '../../../utils/mapParams';
import { parseMeta } from '../../../utils/utils';
import { queryRelationPropertyQueryApi } from '../../../utils/queryTabConfigRelationApi';
import { commonSingleQuery, commonSingleQueryNoPaging } from '../../../service/queryDataApi';
var _language$configPlatf = language.configPlatform,
    _language$configPlatf2 = _language$configPlatf.tableConfig,
    fields = _language$configPlatf2.fields,
    fieldsProperty = _language$configPlatf2.fieldsProperty,
    objectMenu = _language$configPlatf2.objectMenu,
    relationship = _language$configPlatf.relationship,
    queryView = _language$configPlatf.queryView,
    roleUser = language.userManage.roleManage.roleUser,
    JsScriptFields = language.JsScriptFields;
var objectNo_columns = [// { title: fields.OBJECTNO, dataIndex: 'OBJECTNO', width: 200, render: text => <Tooltip title={text}>{text}</Tooltip> },
{
  title: fields.TABLENAME,
  dataIndex: 'TABLENAME',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}];
var viewNo_columns = [{
  title: fields.VIEWNO,
  dataIndex: 'NO',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.VIEWNAME,
  dataIndex: 'NAME',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: fields.OBJECTNO,
  dataIndex: 'OBJECTNO',
  width: 200,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}];
var field_columns = [{
  title: fieldsProperty.fields.FIELDNAME,
  dataIndex: 'FIELDNAME',
  width: 200
}, {
  title: fieldsProperty.fields.NAME,
  dataIndex: 'NAME'
}];
var relationShip_columns = [{
  title: relationship.fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: relationship.fields.NAME,
  dataIndex: 'NAME',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: relationship.fields.RELATIONOBJECT,
  dataIndex: 'RELATIONOBJECT',
  width: 100
}, {
  title: relationship.fields.OBJECTA,
  dataIndex: 'OBJECTA',
  width: 100
}, {
  title: relationship.fields.OBJECTB,
  dataIndex: 'OBJECTB',
  width: 150
}, {
  title: relationship.fields.POBJECT,
  dataIndex: 'POBJECT'
}];
var queryView_columns = [{
  title: queryView.fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: queryView.fields.NAME,
  dataIndex: 'NAME',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: queryView.fields.OBJECTNO,
  dataIndex: 'OBJECTNO',
  width: 100
}, {
  title: queryView.fields.WCONDITION,
  dataIndex: 'WCONDITION',
  width: 100
}, {
  title: queryView.fields.AONTROLAUTH,
  dataIndex: 'AONTROLAUTH',
  width: 150,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: queryView.fields.COPYABLE,
  dataIndex: 'COPYABLE',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}];
var procedures_columns = [{
  title: queryView.fields.NAME,
  dataIndex: 'Name',
  width: 150
}, {
  title: objectMenu.fields.COMMENT,
  dataIndex: 'Comment'
}];
var user_columns = [{
  title: roleUser.fields.NAME,
  dataIndex: 'NAME',
  width: 100
}, {
  title: roleUser.fields.SUNAME,
  dataIndex: 'SUNAME',
  width: 200
}, {
  title: roleUser.fields.ONDUTY,
  dataIndex: 'ONDUTY',
  width: 80,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: roleUser.fields.WKCONTEXT,
  dataIndex: 'WKCONTEXT',
  width: 80,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: roleUser.fields.REMARK,
  dataIndex: 'REMARK',
  width: 150
}];
var authCode_columns = [{
  title: fieldsProperty.fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: fieldsProperty.fields.NAME,
  dataIndex: 'NAME',
  width: 200
}, {
  title: fieldsProperty.fields.REMARK,
  dataIndex: 'REMARK',
  width: 200
}];
var process_columns = [{
  title: JsScriptFields.tableName,
  dataIndex: 'TABLENAME',
  width: 150
}, {
  title: JsScriptFields.chineseName,
  dataIndex: 'NAME'
}];
var script_columns = [{
  title: JsScriptFields.no,
  dataIndex: 'no',
  width: 100
}, {
  title: JsScriptFields.name,
  dataIndex: 'name',
  width: 100
}, {
  title: JsScriptFields.rType,
  dataIndex: 'rType',
  width: 100,
  render: function render(h) {
    return h === '0' ? 'Boolean' : 'Object';
  }
}, {
  title: JsScriptFields.remark,
  dataIndex: 'remark',
  width: 120
}, {
  title: JsScriptFields.content,
  dataIndex: 'scriptValue',
  width: 200
}];
var paramsMap = {
  objectNo: {
    tn: 1,
    queryAPI: queryAllObject,
    searchApi: searchAllObject,
    columns: objectNo_columns
  },
  viewNo: {
    tn: 3,
    queryAPI: queryObject,
    columns: viewNo_columns
  },
  field: {
    tn: 11,
    queryAPI: queryItem,
    columns: field_columns
  },
  relationship: {
    tn: 2,
    queryAPI: queryObject,
    columns: relationShip_columns
  },
  queryView: {
    tn: 3,
    queryAPI: queryObject,
    columns: queryView_columns
  },
  classView: {
    tn: 4,
    queryAPI: queryObject,
    columns: queryView_columns
  },
  procedures: {
    queryAPI: queryProcedures,
    columns: procedures_columns
  },
  user: {
    queryAPI: commonApi,
    columns: user_columns
  },
  authCode: {
    columns: authCode_columns
  },
  process: {
    queryAPI: queryAllObject,
    searchApi: searchAllObject,
    columns: process_columns
  },
  script: {
    queryAPI: getMetaScriptData,
    searchApi: getMetaScriptData,
    columns: script_columns
  }
};
export default {
  namespace: 'selectData',
  state: {
    dataList: [],
    selectedRowKeys: [],
    selectedRows: [],
    record: {},
    page: 1,
    pageNumber: 20,
    total: 0
  },
  //同步
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  //异步
  effects: {
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref2, _ref3) {
      var payload, call, put, onSelect, condition, type, objectId, _payload$other, other, rData, preview, objectTypes, page, pageSize, rest, _paramsMap$type, tn, queryAPI, columns, data, _data, dataList;

      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref2.payload;
              call = _ref3.call, put = _ref3.put;
              onSelect = payload.onSelect, condition = payload.condition, type = payload.type, objectId = payload.objectId, _payload$other = payload.other, other = _payload$other === void 0 ? {} : _payload$other, rData = payload.rData, preview = payload.preview, objectTypes = payload.objectTypes, page = payload.page, pageSize = payload.pageSize, rest = _objectWithoutProperties(payload, _excluded);
              _paramsMap$type = paramsMap[type], tn = _paramsMap$type.tn, queryAPI = _paramsMap$type.queryAPI, columns = _paramsMap$type.columns;
              if (payload.tn) tn = payload.tn;

              if (!(tn === 1)) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return call(queryAPI, {
                tn: tn,
                condition: condition,
                page: 1,
                pageSize: 20,
                paging: true
              });

            case 8:
              data = _context.sent;
              _context.next = 26;
              break;

            case 11:
              if (!(type === 'process')) {
                _context.next = 17;
                break;
              }

              _context.next = 14;
              return call(queryAPI, {
                page: 1,
                pageSize: 20
              });

            case 14:
              data = _context.sent;
              _context.next = 26;
              break;

            case 17:
              if (!(type === 'script')) {
                _context.next = 23;
                break;
              }

              _context.next = 20;
              return call(queryAPI, {
                page: 1,
                pageSize: 20
              });

            case 20:
              data = _context.sent;
              _context.next = 26;
              break;

            case 23:
              _context.next = 25;
              return call(queryAPI, _objectSpread(_objectSpread({
                tn: tn,
                condition: condition,
                objectId: objectId
              }, rest), {}, {
                rData: type === 'field' ? null : rData
              }), queryRelationPropertyQueryApi(tn, objectTypes));

            case 25:
              data = _context.sent;

            case 26:
              if (!data) {
                _context.next = 33;
                break;
              }

              _data = data, dataList = _data.dataList;
              dataList = parseMeta(dataList);

              if (rData && type !== 'user' && !preview) {
                dataList = dataList.filter(function (item) {
                  var isRepeat = false;
                  rData.forEach(function (i) {
                    if (i.FIELDNAME === item.FIELDNAME) isRepeat = true;
                  });
                  return !isRepeat;
                });
              }

              if (preview) {
                dataList = rData.map(function (item) {
                  var obj = {};
                  dataList.forEach(function (i) {
                    if (i.FIELDNAME === item.FIELDNAME) return obj = _objectSpread({
                      WLINE: item.WLINE,
                      PID: item.PID
                    }, i);
                    if (item.NAME && !item.FIELDNAME) return obj = _objectSpread({}, item);
                  });
                  return obj;
                });
              }

              _context.next = 33;
              return put({
                type: 'packet',
                payload: _objectSpread({
                  dataList: dataList,
                  previewVisible: !preview ? false : true,
                  visible: preview ? false : true,
                  onSelect: onSelect,
                  columns: columns,
                  type: type,
                  objectId: objectId,
                  showTab: false,
                  total: data.total || 0,
                  page: page,
                  pageSize: pageSize,
                  payload: payload
                }, other)
              });

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    queryAuthcode: /*#__PURE__*/_regeneratorRuntime().mark(function queryAuthcode(_ref4, _ref5) {
      var payload, call, put, onSelect, type, columns, data, dataList;
      return _regeneratorRuntime().wrap(function queryAuthcode$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref4.payload;
              call = _ref5.call, put = _ref5.put;
              onSelect = payload.onSelect, type = payload.type;
              columns = paramsMap[type].columns;
              _context2.next = 6;
              return call(queryMetaAuthcode);

            case 6:
              data = _context2.sent;

              if (!data) {
                _context2.next = 11;
                break;
              }

              dataList = data.dataList;
              _context2.next = 11;
              return put({
                type: 'packet',
                payload: {
                  dataList: dataList,
                  visible: true,
                  onSelect: onSelect,
                  columns: columns,
                  type: type,
                  showTab: false
                }
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, queryAuthcode);
    }),
    search: /*#__PURE__*/_regeneratorRuntime().mark(function search(_ref6, _ref7) {
      var payload, call, put, select, queryWord, type, condition, _paramsMap$type2, tn, searchApi, data, dataList;

      return _regeneratorRuntime().wrap(function search$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref6.payload;
              call = _ref7.call, put = _ref7.put, select = _ref7.select;
              queryWord = payload.queryWord, type = payload.type, condition = payload.condition; // console.log(payload)

              _paramsMap$type2 = paramsMap[type], tn = _paramsMap$type2.tn, searchApi = _paramsMap$type2.searchApi; // console.log(tn, type, condition)
              // 选择数据表单搜索在此处

              _context3.next = 6;
              return call(searchApi, {
                keyWord: queryWord,
                condition: condition,
                paging: true,
                page: 1,
                pageSize: 20
              });

            case 6:
              data = _context3.sent;
              dataList = parseMeta(data.dataList);

              if (!data) {
                _context3.next = 11;
                break;
              }

              _context3.next = 11;
              return put({
                type: "packet",
                payload: {
                  dataList: dataList,
                  page: 1,
                  pageSize: 20,
                  isSearch: true,
                  total: data.total
                }
              });

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, search);
    }),
    searchAuthCode: /*#__PURE__*/_regeneratorRuntime().mark(function searchAuthCode(_ref8, _ref9) {
      var payload, call, put, queryWord, data;
      return _regeneratorRuntime().wrap(function searchAuthCode$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref8.payload;
              call = _ref9.call, put = _ref9.put;
              queryWord = payload.queryWord;
              _context4.next = 5;
              return call(commonApi, {
                implclass: implclassMap.searchSingleData,
                queryWord: queryWord,
                objectNo: 'AUTHCODE'
              });

            case 5:
              data = _context4.sent;

              if (!data) {
                _context4.next = 9;
                break;
              }

              _context4.next = 9;
              return put({
                type: "packet",
                payload: {
                  dataList: data.dataList
                }
              });

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, searchAuthCode);
    }),
    searchProcess: /*#__PURE__*/_regeneratorRuntime().mark(function searchProcess(_ref10, _ref11) {
      var payload, call, put, keyWord, page, pageSize, data;
      return _regeneratorRuntime().wrap(function searchProcess$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              payload = _ref10.payload;
              call = _ref11.call, put = _ref11.put;
              keyWord = payload.keyWord, page = payload.page, pageSize = payload.pageSize;
              _context5.next = 5;
              return call(searchObject, {
                tn: 1,
                keyWord: keyWord,
                paging: true,
                page: page,
                pageSize: pageSize
              });

            case 5:
              data = _context5.sent;

              if (!data) {
                _context5.next = 9;
                break;
              }

              _context5.next = 9;
              return put({
                type: "packet",
                payload: {
                  dataList: parseMeta(data.dataList),
                  total: data.total,
                  isSearch: keyWord ? true : false
                }
              });

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, searchProcess);
    }),
    queryParams: /*#__PURE__*/_regeneratorRuntime().mark(function queryParams(_ref12, _ref13) {
      var name, call, put, data, _data$dataList, dataList;

      return _regeneratorRuntime().wrap(function queryParams$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              name = _ref12.payload.name;
              call = _ref13.call, put = _ref13.put;
              _context6.next = 4;
              return call(queryProceduresParams, name);

            case 4:
              data = _context6.sent;

              if (!data) {
                _context6.next = 9;
                break;
              }

              _data$dataList = data.dataList, dataList = _data$dataList === void 0 ? [] : _data$dataList;
              _context6.next = 9;
              return put({
                type: 'packet',
                payload: {
                  dataList2: dataList
                }
              });

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, queryParams);
    }),
    queryModalData: /*#__PURE__*/_regeneratorRuntime().mark(function queryModalData(_ref14, _ref15) {
      var payload, call, put, tableName, objectGridNo, condition, onSelect, _payload$current, current, _payload$pageSize, pageSize, data, data2;

      return _regeneratorRuntime().wrap(function queryModalData$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              payload = _ref14.payload;
              call = _ref15.call, put = _ref15.put;
              tableName = payload.tableName, objectGridNo = payload.objectGridNo, condition = payload.condition, onSelect = payload.onSelect, _payload$current = payload.current, current = _payload$current === void 0 ? 1 : _payload$current, _payload$pageSize = payload.pageSize, pageSize = _payload$pageSize === void 0 ? 20 : _payload$pageSize;
              _context7.next = 5;
              return call(queryGridModel, {
                tableName: tableName,
                objectGridNo: objectGridNo
              });

            case 5:
              data = _context7.sent;
              _context7.next = 8;
              return call(commonSingleQuery, {
                page: current,
                pageSize: pageSize,
                tableName: tableName,
                objectGridNo: objectGridNo,
                condition: condition
              });

            case 8:
              data2 = _context7.sent;

              if (!(data && data2)) {
                _context7.next = 12;
                break;
              }

              _context7.next = 12;
              return put({
                type: 'packet',
                payload: {
                  columns: setAntdColumns(data.gridFieldList, 'selectData', {
                    total: data2.total,
                    page: current,
                    pageNumber: pageSize,
                    pageSize: pageSize
                  }),
                  dataList: data2.dataList,
                  selectedRowKeys: [],
                  selectedRows: [],
                  onSelect: onSelect,
                  visible: true,
                  total: data2.total,
                  page: current,
                  pageNumber: pageSize
                }
              });

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, queryModalData);
    })
  }
};