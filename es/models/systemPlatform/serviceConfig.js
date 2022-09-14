function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { systemUpdateAuthcode, systemCreateAuthcode, systemDelAuthcode, systemAuthcodeQuery, createSystemMail, updateSystemMail, deleteSystemMail, createSystemconfig, updateSystemconfig, deleteSystemconfig, systemQuery, systemMailQuery } from '../../service/systemApi';
import { polltaskQuery, createPolltask, updatePolltask, deletePolltask, startPollTask as _startPollTask, stopPollTask as _stopPollTask, restartPollTask as _restartPollTask } from '../../service/communicationApi';
export default {
  namespace: 'serviceConfig',
  state: {
    dataList: [],
    selectedRowKeys: [],
    selectedRows: [],
    namespace: 'serviceConfig',
    record: {}
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  effects: {
    queryItem: /*#__PURE__*/_regeneratorRuntime().mark(function queryItem(_ref2, _ref3) {
      var activeKey, call, put, data, _payload;

      return _regeneratorRuntime().wrap(function queryItem$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              activeKey = _ref2.payload.activeKey;
              call = _ref3.call, put = _ref3.put;

              if (!(activeKey === '0')) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return call(systemQuery, {
                tableName: 'sys_config'
              });

            case 5:
              data = _context.sent;
              _context.next = 24;
              break;

            case 8:
              if (!(activeKey === '1')) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return call(systemMailQuery, {
                tableName: 'smail'
              });

            case 11:
              data = _context.sent;
              _context.next = 24;
              break;

            case 14:
              if (!(activeKey === '2')) {
                _context.next = 20;
                break;
              }

              _context.next = 17;
              return call(polltaskQuery, {
                tableName: 'SPOLLTASK'
              });

            case 17:
              data = _context.sent;
              _context.next = 24;
              break;

            case 20:
              if (!(activeKey === '3')) {
                _context.next = 24;
                break;
              }

              _context.next = 23;
              return call(systemAuthcodeQuery, {
                tableName: 'AUTHCODE'
              });

            case 23:
              data = _context.sent;

            case 24:
              if (!data) {
                _context.next = 27;
                break;
              }

              _context.next = 27;
              return put({
                type: "packet",
                payload: (_payload = {}, _defineProperty(_payload, "dataList".concat(Number(activeKey) + 1), data.dataList || []), _defineProperty(_payload, "activeKey", activeKey), _payload)
              });

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, queryItem);
    }),
    edit: /*#__PURE__*/_regeneratorRuntime().mark(function edit(_ref4, _ref5) {
      var _ref4$payload, values, record, call, put, data;

      return _regeneratorRuntime().wrap(function edit$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref4$payload = _ref4.payload, values = _ref4$payload.values, record = _ref4$payload.record;
              call = _ref5.call, put = _ref5.put;

              if (!record.id) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return call(systemUpdateAuthcode, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return call(systemCreateAuthcode, values);

            case 10:
              data = _context2.sent;

            case 11:
              if (!data) {
                _context2.next = 19;
                break;
              }

              _context2.next = 14;
              return put({
                type: "packet",
                payload: {
                  visible4: false
                }
              });

            case 14:
              _context2.next = 16;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '3'
                }
              });

            case 16:
              if (!record.id) {
                _context2.next = 19;
                break;
              }

              _context2.next = 19;
              return put({
                type: 'packet',
                payload: {
                  selectedRows4: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, edit);
    }),
    del: /*#__PURE__*/_regeneratorRuntime().mark(function del(_ref6, _ref7) {
      var authCodes, call, put, data;
      return _regeneratorRuntime().wrap(function del$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              authCodes = _ref6.payload.authCodes;
              call = _ref7.call, put = _ref7.put;
              _context3.next = 4;
              return call(systemDelAuthcode, {
                authCodes: authCodes
              });

            case 4:
              data = _context3.sent;

              if (!data) {
                _context3.next = 10;
                break;
              }

              _context3.next = 8;
              return put({
                type: "packet",
                payload: {
                  selectedRows4: [],
                  selectedRowKeys4: []
                }
              });

            case 8:
              _context3.next = 10;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '3'
                }
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, del);
    }),
    editMail: /*#__PURE__*/_regeneratorRuntime().mark(function editMail(_ref8, _ref9) {
      var _ref8$payload, values, record, call, put, data;

      return _regeneratorRuntime().wrap(function editMail$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref8$payload = _ref8.payload, values = _ref8$payload.values, record = _ref8$payload.record;
              call = _ref9.call, put = _ref9.put;

              if (!record.id) {
                _context4.next = 8;
                break;
              }

              _context4.next = 5;
              return call(updateSystemMail, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context4.sent;
              _context4.next = 11;
              break;

            case 8:
              _context4.next = 10;
              return call(createSystemMail, values);

            case 10:
              data = _context4.sent;

            case 11:
              if (!data) {
                _context4.next = 19;
                break;
              }

              _context4.next = 14;
              return put({
                type: "packet",
                payload: {
                  visible2: false
                }
              });

            case 14:
              _context4.next = 16;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '1'
                }
              });

            case 16:
              if (!record.id) {
                _context4.next = 19;
                break;
              }

              _context4.next = 19;
              return put({
                type: 'packet',
                payload: {
                  selectedRows2: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, editMail);
    }),
    delMail: /*#__PURE__*/_regeneratorRuntime().mark(function delMail(_ref10, _ref11) {
      var mails, call, put, data;
      return _regeneratorRuntime().wrap(function delMail$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              mails = _ref10.payload.mails;
              call = _ref11.call, put = _ref11.put;
              _context5.next = 4;
              return call(deleteSystemMail, {
                mails: mails
              });

            case 4:
              data = _context5.sent;
              _context5.next = 7;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '1'
                }
              });

            case 7:
              if (!data) {
                _context5.next = 12;
                break;
              }

              _context5.next = 10;
              return put({
                type: "packet",
                payload: {
                  selectedRowKeys2: [],
                  selectedRows2: []
                }
              });

            case 10:
              _context5.next = 12;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '1'
                }
              });

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, delMail);
    }),
    editPollTast: /*#__PURE__*/_regeneratorRuntime().mark(function editPollTast(_ref12, _ref13) {
      var _ref12$payload, values, record, call, put, data;

      return _regeneratorRuntime().wrap(function editPollTast$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref12$payload = _ref12.payload, values = _ref12$payload.values, record = _ref12$payload.record;
              call = _ref13.call, put = _ref13.put;

              if (!record.id) {
                _context6.next = 8;
                break;
              }

              _context6.next = 5;
              return call(updatePolltask, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context6.sent;
              _context6.next = 11;
              break;

            case 8:
              _context6.next = 10;
              return call(createPolltask, values);

            case 10:
              data = _context6.sent;

            case 11:
              if (!data) {
                _context6.next = 19;
                break;
              }

              _context6.next = 14;
              return put({
                type: "packet",
                payload: {
                  visible3: false
                }
              });

            case 14:
              _context6.next = 16;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '2'
                }
              });

            case 16:
              if (!record.id) {
                _context6.next = 19;
                break;
              }

              _context6.next = 19;
              return put({
                type: 'packet',
                payload: {
                  selectedRows3: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 19:
            case "end":
              return _context6.stop();
          }
        }
      }, editPollTast);
    }),
    delPollTast: /*#__PURE__*/_regeneratorRuntime().mark(function delPollTast(_ref14, _ref15) {
      var pollTasks, call, put, data;
      return _regeneratorRuntime().wrap(function delPollTast$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              pollTasks = _ref14.payload.pollTasks;
              call = _ref15.call, put = _ref15.put;
              _context7.next = 4;
              return call(deletePolltask, {
                pollTasks: pollTasks
              });

            case 4:
              data = _context7.sent;

              if (!data) {
                _context7.next = 10;
                break;
              }

              _context7.next = 8;
              return put({
                type: "packet",
                payload: {
                  selectedRows3: [],
                  selectedRowKeys3: []
                }
              });

            case 8:
              _context7.next = 10;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '2'
                }
              });

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, delPollTast);
    }),
    startPollTask: /*#__PURE__*/_regeneratorRuntime().mark(function startPollTask(_ref16, _ref17) {
      var id, call, put, data;
      return _regeneratorRuntime().wrap(function startPollTask$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              id = _ref16.payload.id;
              call = _ref17.call, put = _ref17.put;
              _context8.next = 4;
              return call(_startPollTask, {
                id: id
              });

            case 4:
              data = _context8.sent;

              if (!data) {
                _context8.next = 8;
                break;
              }

              _context8.next = 8;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '2'
                }
              });

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, startPollTask);
    }),
    stopPollTask: /*#__PURE__*/_regeneratorRuntime().mark(function stopPollTask(_ref18, _ref19) {
      var id, call, put, data;
      return _regeneratorRuntime().wrap(function stopPollTask$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              id = _ref18.payload.id;
              call = _ref19.call, put = _ref19.put;
              _context9.next = 4;
              return call(_stopPollTask, {
                id: id
              });

            case 4:
              data = _context9.sent;

              if (!data) {
                _context9.next = 8;
                break;
              }

              _context9.next = 8;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '2'
                }
              });

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, stopPollTask);
    }),
    restartPollTask: /*#__PURE__*/_regeneratorRuntime().mark(function restartPollTask(_ref20, _ref21) {
      var id, call, put, data;
      return _regeneratorRuntime().wrap(function restartPollTask$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              id = _ref20.payload.id;
              call = _ref21.call, put = _ref21.put;
              _context10.next = 4;
              return call(_restartPollTask, {
                id: id
              });

            case 4:
              data = _context10.sent;

              if (!data) {
                _context10.next = 8;
                break;
              }

              _context10.next = 8;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '2'
                }
              });

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, restartPollTask);
    }),
    editSystemconfig: /*#__PURE__*/_regeneratorRuntime().mark(function editSystemconfig(_ref22, _ref23) {
      var _ref22$payload, values, record, call, put, data;

      return _regeneratorRuntime().wrap(function editSystemconfig$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref22$payload = _ref22.payload, values = _ref22$payload.values, record = _ref22$payload.record;
              call = _ref23.call, put = _ref23.put;

              if (!record.id) {
                _context11.next = 8;
                break;
              }

              _context11.next = 5;
              return call(updateSystemconfig, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context11.sent;
              _context11.next = 11;
              break;

            case 8:
              _context11.next = 10;
              return call(createSystemconfig, values);

            case 10:
              data = _context11.sent;

            case 11:
              if (!data) {
                _context11.next = 19;
                break;
              }

              _context11.next = 14;
              return put({
                type: "packet",
                payload: {
                  visible1: false
                }
              });

            case 14:
              _context11.next = 16;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '0'
                }
              });

            case 16:
              if (!record.id) {
                _context11.next = 19;
                break;
              }

              _context11.next = 19;
              return put({
                type: 'packet',
                payload: {
                  selectedRows1: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 19:
            case "end":
              return _context11.stop();
          }
        }
      }, editSystemconfig);
    }),
    delSystemconfig: /*#__PURE__*/_regeneratorRuntime().mark(function delSystemconfig(_ref24, _ref25) {
      var systemConfigs, call, put, data;
      return _regeneratorRuntime().wrap(function delSystemconfig$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              systemConfigs = _ref24.payload.systemConfigs;
              call = _ref25.call, put = _ref25.put;
              _context12.next = 4;
              return call(deleteSystemconfig, {
                systemConfigs: systemConfigs
              });

            case 4:
              data = _context12.sent;

              if (!data) {
                _context12.next = 10;
                break;
              }

              _context12.next = 8;
              return put({
                type: "packet",
                payload: {
                  selectedRows1: [],
                  selectedRowKeys1: []
                }
              });

            case 8:
              _context12.next = 10;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '0'
                }
              });

            case 10:
            case "end":
              return _context12.stop();
          }
        }
      }, delSystemconfig);
    })
  }
};