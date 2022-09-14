"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _metaApi = require("../../../service/metaApi");

var _antd = require("antd");

var _utils = require("../../../utils/utils");

var _queryTabConfigRelationApi = require("../../../utils/queryTabConfigRelationApi");

var _excluded = ["namespace", "onCancel"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'navMenu',
  state: {
    dataList: [],
    selectedRowKeys: [],
    selectedRows: [],
    tableName: 'META_NAVIGATION',
    namespace: 'navMenu',
    activeKey: '0',
    record: {}
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    clearPacket: function clearPacket(state, _ref2) {
      var payload = _ref2.payload;
      return _objectSpread({}, payload);
    }
  },
  effects: {
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref3, _ref4) {
      var _ref3$payload, payload, call, put, select, namespace, _payload$other, other, _yield$select, tableName, tn, data, dataList, newDataList;

      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref3$payload = _ref3.payload, payload = _ref3$payload === void 0 ? {} : _ref3$payload;
              call = _ref4.call, put = _ref4.put, select = _ref4.select;
              namespace = payload.namespace, _payload$other = payload.other, other = _payload$other === void 0 ? {} : _payload$other;
              _context.next = 5;
              return select(function (state) {
                return state[namespace];
              });

            case 5:
              _yield$select = _context.sent;
              tableName = _yield$select.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              _context.next = 10;
              return call(_metaApi.queryMenu, {
                tn: tn
              });

            case 10:
              data = _context.sent;

              if (!data) {
                _context.next = 16;
                break;
              }

              dataList = data.dataList;
              newDataList = (0, _utils.parseMeta)(dataList);
              _context.next = 16;
              return put({
                type: "packet",
                payload: _objectSpread({
                  dataList: newDataList
                }, other)
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    edit: /*#__PURE__*/_regeneratorRuntime().mark(function edit(_ref5, _ref6) {
      var _ref5$payload, values, record, namespace, PID, call, put, select, _yield$select2, tableName, tn, data;

      return _regeneratorRuntime().wrap(function edit$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref5$payload = _ref5.payload, values = _ref5$payload.values, record = _ref5$payload.record, namespace = _ref5$payload.namespace, PID = _ref5$payload.PID;
              call = _ref6.call, put = _ref6.put, select = _ref6.select;
              _context2.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select2 = _context2.sent;
              tableName = _yield$select2.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName); // console.log(values, record, tn)

              if (!record.ID) {
                _context2.next = 13;
                break;
              }

              _context2.next = 10;
              return call(_metaApi.editObject, {
                id: record.ID,
                meta: values
              }, (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), 'update');

            case 10:
              data = _context2.sent;
              _context2.next = 16;
              break;

            case 13:
              _context2.next = 15;
              return call(_metaApi.addMenu, {
                faceType: values.FACETYPE,
                meta: values,
                pid: PID
              });

            case 15:
              data = _context2.sent;

            case 16:
              if (!data) {
                _context2.next = 23;
                break;
              }

              _antd.message.info(data.hint);

              _context2.next = 20;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace,
                  other: {
                    visible: false
                  }
                }
              });

            case 20:
              if (!record.ID) {
                _context2.next = 23;
                break;
              }

              _context2.next = 23;
              return put({
                type: "packet",
                payload: {
                  selectedRows: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, edit);
    }),
    editParams: /*#__PURE__*/_regeneratorRuntime().mark(function editParams(_ref7, _ref8) {
      var _ref7$payload, values, record, namespace, PID, call, put, select, data;

      return _regeneratorRuntime().wrap(function editParams$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref7$payload = _ref7.payload, values = _ref7$payload.values, record = _ref7$payload.record, namespace = _ref7$payload.namespace, PID = _ref7$payload.PID;
              call = _ref8.call, put = _ref8.put, select = _ref8.select;

              if (!record.ID) {
                _context3.next = 6;
                break;
              }

              _context3.next = 5;
              return call(_metaApi.editNavMenuObjectParams, {
                id: record.ID,
                params: values.PARAMS
              });

            case 5:
              data = _context3.sent;

            case 6:
              if (!data) {
                _context3.next = 13;
                break;
              }

              _antd.message.info(data.hint);

              _context3.next = 10;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace,
                  other: {
                    visible: false
                  }
                }
              });

            case 10:
              if (!record.ID) {
                _context3.next = 13;
                break;
              }

              _context3.next = 13;
              return put({
                type: "packet",
                payload: {
                  selectedRows: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, editParams);
    }),
    del: /*#__PURE__*/_regeneratorRuntime().mark(function del(_ref9, _ref10) {
      var _ref9$payload, rows, namespace, call, put, select, _yield$select3, tableName, tn, data;

      return _regeneratorRuntime().wrap(function del$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref9$payload = _ref9.payload, rows = _ref9$payload.rows, namespace = _ref9$payload.namespace;
              call = _ref10.call, put = _ref10.put, select = _ref10.select;
              _context4.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select3 = _context4.sent;
              tableName = _yield$select3.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName); // console.log(tn, tableName, rows)

              _context4.next = 9;
              return call(_metaApi.delObject, {
                id: rows[0].ID,
                state: rows[0].STATE
              }, (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), 'delete');

            case 9:
              data = _context4.sent;

              if (!data) {
                _context4.next = 16;
                break;
              }

              _antd.message.info(data.hint);

              _context4.next = 14;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace
                }
              });

            case 14:
              _context4.next = 16;
              return put({
                type: "packet",
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false
                }
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, del);
    }),
    synchro: /*#__PURE__*/_regeneratorRuntime().mark(function synchro(_ref11, _ref12) {
      var _ref11$payload, row, namespace, call, put, select, _yield$select4, tableName, condition, data;

      return _regeneratorRuntime().wrap(function synchro$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref11$payload = _ref11.payload, row = _ref11$payload.row, namespace = _ref11$payload.namespace;
              call = _ref12.call, put = _ref12.put, select = _ref12.select;
              _context5.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select4 = _context5.sent;
              tableName = _yield$select4.tableName;
              condition = _yield$select4.condition;
              _context5.next = 9;
              return call(_metaApi.synchroObject, {
                tableName: tableName,
                data: row,
                objectID: row.ID,
                condition: condition
              });

            case 9:
              data = _context5.sent;

              if (!data) {
                _context5.next = 16;
                break;
              }

              _antd.message.info(data.hint);

              _context5.next = 14;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace,
                  objectType: 'workObject'
                }
              });

            case 14:
              _context5.next = 16;
              return put({
                type: "packet",
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false
                }
              });

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, synchro);
    }),
    reorder: /*#__PURE__*/_regeneratorRuntime().mark(function reorder(_ref13, _ref14) {
      var _ref13$payload, namespace, hData, call, put, select, _yield$select5, tableName, tn, data;

      return _regeneratorRuntime().wrap(function reorder$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref13$payload = _ref13.payload, namespace = _ref13$payload.namespace, hData = _ref13$payload.hData;
              call = _ref14.call, put = _ref14.put, select = _ref14.select;
              _context6.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select5 = _context6.sent;
              tableName = _yield$select5.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              _context6.next = 9;
              return call(_metaApi.reorder, {
                tn: tn,
                hData: hData
              });

            case 9:
              data = _context6.sent;

              if (!data) {
                _context6.next = 14;
                break;
              }

              _antd.message.info(data.hint);

              _context6.next = 14;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace
                }
              });

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, reorder);
    }),
    // 导航菜单迁移节点数据
    moveNodeData: /*#__PURE__*/_regeneratorRuntime().mark(function moveNodeData(_ref15, _ref16) {
      var _ref15$payload, namespace, onCancel, rest, call, put, select, tableName, data, pid, selectedRows, tn, datas;

      return _regeneratorRuntime().wrap(function moveNodeData$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _ref15$payload = _ref15.payload, namespace = _ref15$payload.namespace, onCancel = _ref15$payload.onCancel, rest = _objectWithoutProperties(_ref15$payload, _excluded);
              call = _ref16.call, put = _ref16.put, select = _ref16.select;
              tableName = rest.tableName, data = rest.data, pid = rest.pid, selectedRows = rest.selectedRows;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              selectedRows[0].PID = pid;
              _context7.next = 7;
              return call(_metaApi.moveNodeData, {
                tn: tn,
                data: data,
                pid: pid
              });

            case 7:
              datas = _context7.sent;

              if (!datas) {
                _context7.next = 13;
                break;
              }

              _context7.next = 11;
              return put({
                type: 'query',
                payload: {
                  namespace: 'navMenu'
                }
              });

            case 11:
              _context7.next = 13;
              return put({
                type: 'packet',
                payload: {
                  selectedRows: selectedRows
                }
              });

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, moveNodeData);
    })
  }
};
exports.default = _default;