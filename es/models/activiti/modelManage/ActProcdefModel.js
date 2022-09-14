function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as commonService from '../../../service/api';
import { commonSingleQuery } from '../../../service/queryDataApi';
import { searchProcdefProcess as _searchProcdefProcess, getProcdefProcess, activationProcess, processBind, processState, processDelete, processUpdate, processQueryImg } from '../../../service/processApi';
import { message } from 'antd';
export default {
  namespace: 'ProcessInstance',
  state: {
    pictureUrl: ''
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    } // dynamicPng(state, { payload: { pictureUrl } }) {
    //   state.visible = !state.visible
    //   state.pictureUrl = pictureUrl
    //   return { ...state }
    // }

  },
  effects: {
    //查询流程
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref2, _ref3) {
      var page, pageSize, call, put, data;
      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _ref2.page, pageSize = _ref2.pageSize;
              call = _ref3.call, put = _ref3.put;
              _context.next = 4;
              return call(getProcdefProcess, {
                page: page ? page : 1,
                pageSize: pageSize ? pageSize : 20
              });

            case 4:
              data = _context.sent;

              if (!data.flag) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return put({
                type: 'packet',
                payload: {
                  list: data.dataList,
                  total: data.total,
                  page: page ? page : 1,
                  pageNumber: pageSize ? pageSize : 20
                }
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    queryImg: /*#__PURE__*/_regeneratorRuntime().mark(function queryImg(_ref4, _ref5) {
      var _ref4$payload, id, visible, visiblePng, call, put, data, xmlStr;

      return _regeneratorRuntime().wrap(function queryImg$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref4$payload = _ref4.payload, id = _ref4$payload.id, visible = _ref4$payload.visible, visiblePng = _ref4$payload.visiblePng;
              call = _ref5.call, put = _ref5.put;
              _context2.next = 4;
              return call(processQueryImg, {
                processDefinitionId: id
              });

            case 4:
              data = _context2.sent;

              if (!data.flag) {
                _context2.next = 11;
                break;
              }

              xmlStr = data.dataList.bpmn20Xml.bpmn20Xml;
              _context2.next = 9;
              return put({
                type: 'packet',
                payload: {
                  xmlStr: xmlStr,
                  visible: visible,
                  visiblePng: visiblePng
                }
              });

            case 9:
              _context2.next = 12;
              break;

            case 11:
              message.error(data.hint);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, queryImg);
    }),
    editBind: /*#__PURE__*/_regeneratorRuntime().mark(function editBind(_ref6, _ref7) {
      var _ref6$payload, values, record, recordB, call, put, data, selectedRowKey;

      return _regeneratorRuntime().wrap(function editBind$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6$payload = _ref6.payload, values = _ref6$payload.values, record = _ref6$payload.record, recordB = _ref6$payload.recordB;
              call = _ref7.call, put = _ref7.put;

              if (!(record && record.ID)) {
                _context3.next = 9;
                break;
              }

              values.id = record.ID;
              _context3.next = 6;
              return call(processUpdate, _objectSpread({}, values));

            case 6:
              data = _context3.sent;
              _context3.next = 13;
              break;

            case 9:
              values.processId = recordB.processId;
              _context3.next = 12;
              return call(processBind, _objectSpread({}, values));

            case 12:
              data = _context3.sent;

            case 13:
              if (!data.flag) {
                _context3.next = 23;
                break;
              }

              if (!(record && record.ID)) {
                _context3.next = 17;
                break;
              }

              _context3.next = 17;
              return put({
                type: 'packet',
                payload: {
                  selectedRows1: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 17:
              selectedRowKey = recordB.processId;
              _context3.next = 20;
              return put({
                type: 'getRelItem',
                payload: {
                  selectedRowKey: selectedRowKey
                }
              });

            case 20:
              _context3.next = 22;
              return put({
                type: 'packet',
                payload: {
                  visible2: false
                }
              });

            case 22:
              message.success(data.hint);

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, editBind);
    }),
    disabled: /*#__PURE__*/_regeneratorRuntime().mark(function disabled(_ref8, _ref9) {
      var _ref8$payload, selectedRows1, state, call, put, selectedRowKey, data;

      return _regeneratorRuntime().wrap(function disabled$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref8$payload = _ref8.payload, selectedRows1 = _ref8$payload.selectedRows1, state = _ref8$payload.state;
              call = _ref9.call, put = _ref9.put;
              _context4.next = 4;
              return call(processState, {
                id: selectedRows1[0].ID,
                state: state
              });

            case 4:
              data = _context4.sent;

              if (!data.flag) {
                _context4.next = 12;
                break;
              }

              selectedRowKey = selectedRows1[0].PROCDEF_ID;
              selectedRows1[0].STATE = state;
              _context4.next = 10;
              return put({
                type: 'packet',
                payload: {
                  selectedRows1: selectedRows1
                }
              });

            case 10:
              _context4.next = 12;
              return put({
                type: 'getRelItem',
                payload: {
                  selectedRowKey: selectedRowKey
                }
              });

            case 12:
              message.success(data.hint);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, disabled);
    }),
    delObject: /*#__PURE__*/_regeneratorRuntime().mark(function delObject(_ref10, _ref11) {
      var selectedRows1, call, put, selectedRowKey, data;
      return _regeneratorRuntime().wrap(function delObject$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              selectedRows1 = _ref10.payload.selectedRows1;
              call = _ref11.call, put = _ref11.put;
              _context5.next = 4;
              return call(processDelete, {
                id: selectedRows1[0].ID
              });

            case 4:
              data = _context5.sent;

              if (!data.flag) {
                _context5.next = 11;
                break;
              }

              selectedRowKey = selectedRows1[0].PROCDEF_ID;
              _context5.next = 9;
              return put({
                type: 'packet',
                payload: {
                  selectedRows1: [],
                  selectedRowKeys1: []
                }
              });

            case 9:
              _context5.next = 11;
              return put({
                type: 'getRelItem',
                payload: {
                  selectedRowKey: selectedRowKey
                }
              });

            case 11:
              message.success(data.hint);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, delObject);
    }),
    getRelItem: /*#__PURE__*/_regeneratorRuntime().mark(function getRelItem(_ref12, _ref13) {
      var selectedRowKey, call, put, noticeValues, noticeList;
      return _regeneratorRuntime().wrap(function getRelItem$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              selectedRowKey = _ref12.payload.selectedRowKey;
              call = _ref13.call, put = _ref13.put;
              noticeValues = {
                condition: "PROCDEF_ID = '".concat(selectedRowKey, "' AND DEL = 0"),
                tableName: 'ACT_PROCESSMANAGE_OBJECT',
                page: 1,
                pageSize: 20
              };
              _context6.next = 5;
              return call(commonSingleQuery, noticeValues);

            case 5:
              noticeList = _context6.sent;
              _context6.next = 8;
              return put({
                type: 'packet',
                payload: {
                  dataList1: noticeList.dataList
                }
              });

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, getRelItem);
    }),
    //挂起流程
    suspension: /*#__PURE__*/_regeneratorRuntime().mark(function suspension(_ref14, _ref15) {
      var id, call, put, data;
      return _regeneratorRuntime().wrap(function suspension$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              id = _ref14.payload.id;
              call = _ref15.call, put = _ref15.put;
              _context7.next = 4;
              return call(commonService.post, "/application/process/suspension/".concat(id));

            case 4:
              data = _context7.sent;

              if (!data.flag) {
                _context7.next = 11;
                break;
              }

              _context7.next = 8;
              return put({
                type: 'query'
              });

            case 8:
              message.success(data.hint);
              _context7.next = 12;
              break;

            case 11:
              message.error(data.hint);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, suspension);
    }),
    //激活流程
    activation: /*#__PURE__*/_regeneratorRuntime().mark(function activation(_ref16, _ref17) {
      var id, call, put, data;
      return _regeneratorRuntime().wrap(function activation$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              id = _ref16.payload.id;
              call = _ref17.call, put = _ref17.put;
              _context8.next = 4;
              return call(activationProcess, {
                id: id
              });

            case 4:
              data = _context8.sent;

              if (!data.flag) {
                _context8.next = 11;
                break;
              }

              _context8.next = 8;
              return put({
                type: 'query',
                payload: {
                  page: 1,
                  pageSize: 20
                }
              });

            case 8:
              message.success(data.hint);
              _context8.next = 12;
              break;

            case 11:
              message.error(data.hint);

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, activation);
    }),
    //删除模型
    del: /*#__PURE__*/_regeneratorRuntime().mark(function del(_ref18, _ref19) {
      var deploymentId, call, put, data;
      return _regeneratorRuntime().wrap(function del$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              deploymentId = _ref18.payload.deploymentId;
              call = _ref19.call, put = _ref19.put;
              _context9.next = 4;
              return call(commonService.post, "/application/process/deleteByDeploymentId/".concat(deploymentId));

            case 4:
              data = _context9.sent;

              if (!data.flag) {
                _context9.next = 11;
                break;
              }

              _context9.next = 8;
              return put({
                type: 'query'
              });

            case 8:
              message.success(data.hint);
              _context9.next = 12;
              break;

            case 11:
              message.error(data.hint);

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, del);
    }),
    searchProcdefProcess: /*#__PURE__*/_regeneratorRuntime().mark(function searchProcdefProcess(_ref20, _ref21) {
      var _ref20$payload, keyWord, page, pageSize, call, put, data;

      return _regeneratorRuntime().wrap(function searchProcdefProcess$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _ref20$payload = _ref20.payload, keyWord = _ref20$payload.keyWord, page = _ref20$payload.page, pageSize = _ref20$payload.pageSize;
              call = _ref21.call, put = _ref21.put;
              _context10.next = 4;
              return call(_searchProcdefProcess, {
                keyWord: keyWord,
                page: page,
                pageSize: pageSize
              });

            case 4:
              data = _context10.sent;
              _context10.next = 7;
              return put({
                type: "packet",
                payload: {
                  dataListProcessList: data.dataList || [],
                  total: data.total,
                  isSearch: keyWord ? true : false
                }
              });

            case 7:
            case "end":
              return _context10.stop();
          }
        }
      }, searchProcdefProcess);
    })
  },
  subscriptions: {
    setup: function setup(_ref22) {
      var dispatch = _ref22.dispatch,
          history = _ref22.history;
      history.listen(function (location) {
        var index = location.pathname.indexOf('_');
        var id = location.pathname.substr(index);

        switch (location.pathname) {
          case "/act/activiti/modelManage/ActProcdef".concat(id):
            dispatch({
              type: 'query',
              payload: {}
            });
            break;

          default:
        }
      });
    }
  }
};