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

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'commonConfig',
  state: {},
  reducers: {},
  effects: {
    // 主对象
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref, _ref2) {
      var _ref$payload, payload, call, put, select, namespace, _payload$current, current, _payload$pageSize, pageSize, _payload$paging, paging, objectType, activeTab, _yield$select, tableName, tn, data, dataList;

      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$payload = _ref.payload, payload = _ref$payload === void 0 ? {} : _ref$payload;
              call = _ref2.call, put = _ref2.put, select = _ref2.select;
              namespace = payload.namespace, _payload$current = payload.current, current = _payload$current === void 0 ? 1 : _payload$current, _payload$pageSize = payload.pageSize, pageSize = _payload$pageSize === void 0 ? 20 : _payload$pageSize, _payload$paging = payload.paging, paging = _payload$paging === void 0 ? true : _payload$paging, objectType = payload.objectType, activeTab = payload.activeTab;
              _context.next = 5;
              return select(function (state) {
                return state[namespace];
              });

            case 5:
              _yield$select = _context.sent;
              tableName = _yield$select.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);

              if (!(objectType === 'workObject')) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return call(_metaApi.queryWorkObject, {
                tn: tn,
                paging: paging,
                page: current,
                pageSize: pageSize
              });

            case 11:
              data = _context.sent;
              _context.next = 17;
              break;

            case 14:
              _context.next = 16;
              return call(_metaApi.queryObject, {
                tn: tn,
                paging: paging,
                page: current,
                pageSize: pageSize
              });

            case 16:
              data = _context.sent;

            case 17:
              dataList = data.dataList.map(function (item) {
                return _objectSpread(_objectSpread({}, item), item.META);
              });

              if (!data) {
                _context.next = 21;
                break;
              }

              _context.next = 21;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList,
                  total: data.total,
                  activeTab: activeTab || (objectType ? '2' : '1'),
                  page: current,
                  pageNumber: pageSize
                }
              });

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    search: /*#__PURE__*/_regeneratorRuntime().mark(function search(_ref3, _ref4) {
      var _ref3$payload, payload, call, put, select, objectType, queryWord, namespace, _payload$pageNumber, pageNumber, _payload$rowNumber, rowNumber, _yield$select2, tableName, tn, data, dataList;

      return _regeneratorRuntime().wrap(function search$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref3$payload = _ref3.payload, payload = _ref3$payload === void 0 ? {} : _ref3$payload;
              call = _ref4.call, put = _ref4.put, select = _ref4.select;
              objectType = payload.objectType, queryWord = payload.queryWord, namespace = payload.namespace, _payload$pageNumber = payload.pageNumber, pageNumber = _payload$pageNumber === void 0 ? 1 : _payload$pageNumber, _payload$rowNumber = payload.rowNumber, rowNumber = _payload$rowNumber === void 0 ? 20 : _payload$rowNumber;
              _context2.next = 5;
              return select(function (state) {
                return state[namespace];
              });

            case 5:
              _yield$select2 = _context2.sent;
              tableName = _yield$select2.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName); // console.log(objectType)

              _context2.next = 10;
              return call(objectType === 'workObject' ? _metaApi.searchWorkObject : _metaApi.searchObject, {
                tn: tn,
                keyWord: queryWord,
                paging: true,
                page: pageNumber,
                pageSize: rowNumber
              });

            case 10:
              data = _context2.sent;
              dataList = (0, _utils.parseMeta)(data.dataList);

              if (!data) {
                _context2.next = 15;
                break;
              }

              _context2.next = 15;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList,
                  showTab: false
                }
              });

            case 15:
              if (!data) {
                _context2.next = 18;
                break;
              }

              _context2.next = 18;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList,
                  showTab: false,
                  isSearch: queryWord ? true : false,
                  paging: {
                    showPaging: true
                  },
                  total: data.total,
                  page: pageNumber,
                  pageNumber: rowNumber
                }
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, search);
    }),
    edit: /*#__PURE__*/_regeneratorRuntime().mark(function edit(_ref5, _ref6) {
      var _ref5$payload, values, record, namespace, activeTab, call, put, select, _yield$select3, tableName, tn, data, requestType, _requestType;

      return _regeneratorRuntime().wrap(function edit$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref5$payload = _ref5.payload, values = _ref5$payload.values, record = _ref5$payload.record, namespace = _ref5$payload.namespace, activeTab = _ref5$payload.activeTab;
              call = _ref6.call, put = _ref6.put, select = _ref6.select;
              _context3.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select3 = _context3.sent;
              tableName = _yield$select3.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);

              if (!record.ID) {
                _context3.next = 22;
                break;
              }

              requestType = 'update';
              _context3.t0 = tn;
              _context3.next = _context3.t0 === 2 ? 12 : _context3.t0 === 4 ? 14 : 16;
              break;

            case 12:
              requestType = 'updateRelationShip';
              return _context3.abrupt("break", 17);

            case 14:
              requestType = 'updateClassView';
              return _context3.abrupt("break", 17);

            case 16:
              return _context3.abrupt("break", 17);

            case 17:
              _context3.next = 19;
              return call(_metaApi.editObject, {
                id: record.ID,
                meta: values,
                tn: tn,
                state: record.STATE
              }, (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 19:
              data = _context3.sent;
              _context3.next = 34;
              break;

            case 22:
              _requestType = 'create';
              _context3.t1 = tn;
              _context3.next = _context3.t1 === 2 ? 26 : _context3.t1 === 4 ? 28 : 30;
              break;

            case 26:
              _requestType = 'createRelationShip';
              return _context3.abrupt("break", 31);

            case 28:
              _requestType = 'createClassView';
              return _context3.abrupt("break", 31);

            case 30:
              return _context3.abrupt("break", 31);

            case 31:
              _context3.next = 33;
              return call(_metaApi.addObject, {
                tableName: tableName,
                meta: _objectSpread(_objectSpread({}, values), {}, {
                  VER: 0
                })
              }, (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), _requestType);

            case 33:
              data = _context3.sent;

            case 34:
              if (!data) {
                _context3.next = 43;
                break;
              }

              _antd.message.info(data.hint);

              _context3.next = 38;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  visible: false
                },
                objectType: 'workObject'
              });

            case 38:
              _context3.next = 40;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace,
                  objectType: 'workObject',
                  activeTab: activeTab
                }
              });

            case 40:
              if (!record.ID) {
                _context3.next = 43;
                break;
              }

              _context3.next = 43;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  activeTab: '2',
                  selectedRows: [_objectSpread(_objectSpread({}, record), values)],
                  showTab: false
                }
              });

            case 43:
            case "end":
              return _context3.stop();
          }
        }
      }, edit);
    }),
    del: /*#__PURE__*/_regeneratorRuntime().mark(function del(_ref7, _ref8) {
      var _ref7$payload, rows, namespace, activeTab, call, put, select, _yield$select4, tableName, condition, tn, requestType, data;

      return _regeneratorRuntime().wrap(function del$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref7$payload = _ref7.payload, rows = _ref7$payload.rows, namespace = _ref7$payload.namespace, activeTab = _ref7$payload.activeTab;
              call = _ref8.call, put = _ref8.put, select = _ref8.select;
              _context4.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select4 = _context4.sent;
              tableName = _yield$select4.tableName;
              condition = _yield$select4.condition;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              requestType = 'delete';
              _context4.t0 = tn;
              _context4.next = _context4.t0 === 2 ? 12 : _context4.t0 === 4 ? 14 : 16;
              break;

            case 12:
              requestType = 'deleteRelationShip';
              return _context4.abrupt("break", 17);

            case 14:
              requestType = 'deleteClassView';
              return _context4.abrupt("break", 17);

            case 16:
              return _context4.abrupt("break", 17);

            case 17:
              _context4.next = 19;
              return call(_metaApi.delObject, {
                id: rows[0].ID,
                tn: tn,
                state: rows[0].STATE
              }, (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 19:
              data = _context4.sent;

              if (!data) {
                _context4.next = 26;
                break;
              }

              _antd.message.info(data.hint);

              _context4.next = 24;
              return put({
                type: 'query',
                payload: {
                  condition: condition,
                  namespace: namespace,
                  objectType: 'workObject',
                  activeTab: activeTab
                }
              });

            case 24:
              _context4.next = 26;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false
                }
              });

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, del);
    }),
    upgrade: /*#__PURE__*/_regeneratorRuntime().mark(function upgrade(_ref9, _ref10) {
      var _ref9$payload, row, namespace, call, put, select, _yield$select5, tableName, tn, requestType, data;

      return _regeneratorRuntime().wrap(function upgrade$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref9$payload = _ref9.payload, row = _ref9$payload.row, namespace = _ref9$payload.namespace;
              call = _ref10.call, put = _ref10.put, select = _ref10.select;
              _context5.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select5 = _context5.sent;
              tableName = _yield$select5.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              requestType = 'openUpdate';
              _context5.next = 10;
              return call(_metaApi.upgradeObject, {
                id: row.ID,
                tableName: tableName
              }, (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 10:
              data = _context5.sent;

              if (!data) {
                _context5.next = 17;
                break;
              }

              _antd.message.info(data.hint);

              _context5.next = 15;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  showTab: false
                }
              });

            case 15:
              _context5.next = 17;
              return put({
                type: 'query',
                payload: {
                  type: 'workObject',
                  namespace: namespace,
                  objectType: 'workObject',
                  activeTab: '2'
                }
              });

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, upgrade);
    }),
    cancelUpgrade: /*#__PURE__*/_regeneratorRuntime().mark(function cancelUpgrade(_ref11, _ref12) {
      var _ref11$payload, rows, namespace, call, put, select, _yield$select6, tableName, data;

      return _regeneratorRuntime().wrap(function cancelUpgrade$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref11$payload = _ref11.payload, rows = _ref11$payload.rows, namespace = _ref11$payload.namespace;
              call = _ref12.call, put = _ref12.put, select = _ref12.select;
              _context6.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select6 = _context6.sent;
              tableName = _yield$select6.tableName;
              _context6.next = 8;
              return call(_metaApi.cancelUpgradeObject, {
                id: rows[0].ID,
                tableName: tableName
              });

            case 8:
              data = _context6.sent;

              if (!data) {
                _context6.next = 15;
                break;
              }

              _antd.message.info(data.hint);

              _context6.next = 13;
              return put({
                type: 'query',
                payload: {
                  activeTab: '2',
                  type: 'workObject',
                  namespace: namespace,
                  objectType: 'workObject'
                }
              });

            case 13:
              _context6.next = 15;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  showTab: false
                }
              });

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, cancelUpgrade);
    }),
    synchro: /*#__PURE__*/_regeneratorRuntime().mark(function synchro(_ref13, _ref14) {
      var _ref13$payload, row, namespace, call, put, select, _yield$select7, tableName, data;

      return _regeneratorRuntime().wrap(function synchro$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _ref13$payload = _ref13.payload, row = _ref13$payload.row, namespace = _ref13$payload.namespace;
              call = _ref14.call, put = _ref14.put, select = _ref14.select;
              _context7.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select7 = _context7.sent;
              tableName = _yield$select7.tableName;
              _context7.next = 8;
              return call(_metaApi.synchroObject, {
                tableName: tableName,
                data: row,
                objectID: row.ID
              });

            case 8:
              data = _context7.sent;

              if (!data) {
                _context7.next = 15;
                break;
              }

              _antd.message.info(data.hint);

              _context7.next = 13;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace,
                  objectType: 'workObject',
                  activeTab: '2'
                }
              });

            case 13:
              _context7.next = 15;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false
                }
              });

            case 15:
            case "end":
              return _context7.stop();
          }
        }
      }, synchro);
    }),
    refresh: /*#__PURE__*/_regeneratorRuntime().mark(function refresh(_ref15, _ref16) {
      var _ref15$payload, row, namespace, call, put, select, _yield$select8, tableName, data;

      return _regeneratorRuntime().wrap(function refresh$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _ref15$payload = _ref15.payload, row = _ref15$payload.row, namespace = _ref15$payload.namespace;
              call = _ref16.call, put = _ref16.put, select = _ref16.select;
              _context8.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select8 = _context8.sent;
              tableName = _yield$select8.tableName;
              _context8.next = 8;
              return call(_metaApi.refreshMeta, {
                tableName: tableName,
                data: row,
                objectID: row.ID
              });

            case 8:
              data = _context8.sent;

              if (data) {
                _antd.message.info(data.hint); // yield put({ type: 'query', payload: { namespace, objectType: 'workObject', activeTab: '2' } })
                // yield put({ type: `${namespace}/packet`, payload: { selectedRows: [], selectedRowKeys: [], showTab: false } })

              }

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      }, refresh);
    }),
    copy: /*#__PURE__*/_regeneratorRuntime().mark(function copy(_ref17, _ref18) {
      var _ref17$payload, row, namespace, STATE, call, put, select, _yield$select9, tableName, data;

      return _regeneratorRuntime().wrap(function copy$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _ref17$payload = _ref17.payload, row = _ref17$payload.row, namespace = _ref17$payload.namespace, STATE = _ref17$payload.STATE;
              call = _ref18.call, put = _ref18.put, select = _ref18.select;
              _context9.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select9 = _context9.sent;
              tableName = _yield$select9.tableName;
              _context9.next = 8;
              return call(_metaApi.copyObject, {
                tableName: tableName,
                data: row,
                STATE: STATE
              });

            case 8:
              data = _context9.sent;

              if (!data) {
                _context9.next = 17;
                break;
              }

              _antd.message.info(data.hint);

              _context9.next = 13;
              return put({
                type: 'query',
                payload: {
                  condition: "state IN(0,2)",
                  namespace: namespace
                }
              });

            case 13:
              _context9.next = 15;
              return put({
                type: 'query',
                payload: {
                  type: 'workObject',
                  namespace: namespace
                }
              });

            case 15:
              _context9.next = 17;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false
                }
              });

            case 17:
            case "end":
              return _context9.stop();
          }
        }
      }, copy);
    }),
    changeFile: /*#__PURE__*/_regeneratorRuntime().mark(function changeFile(_ref19, _ref20) {
      var _ref19$payload, row, namespace, call, put, data;

      return _regeneratorRuntime().wrap(function changeFile$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _ref19$payload = _ref19.payload, row = _ref19$payload.row, namespace = _ref19$payload.namespace;
              call = _ref20.call, put = _ref20.put;
              _context10.next = 4;
              return call(_metaApi.changeFile, row);

            case 4:
              data = _context10.sent;

              if (!data) {
                _context10.next = 11;
                break;
              }

              _antd.message.info(data.hint);

              _context10.next = 9;
              return put({
                type: 'query',
                payload: {
                  type: 'workObject',
                  namespace: namespace,
                  objectType: 'workObject'
                }
              });

            case 9:
              _context10.next = 11;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false
                }
              });

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, changeFile);
    }),
    // 关联对象: 字段/菜单/属性页等
    queryItem: /*#__PURE__*/_regeneratorRuntime().mark(function queryItem(_ref21, _ref22) {
      var _ref21$payload, PID, namespace, enable, _ref21$payload$other, other, objectType, objectANamespace, STATE, call, put, select, _yield$select10, tableName, tn, path, data, dataList;

      return _regeneratorRuntime().wrap(function queryItem$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref21$payload = _ref21.payload, PID = _ref21$payload.PID, namespace = _ref21$payload.namespace, enable = _ref21$payload.enable, _ref21$payload$other = _ref21$payload.other, other = _ref21$payload$other === void 0 ? {} : _ref21$payload$other, objectType = _ref21$payload.objectType, objectANamespace = _ref21$payload.objectANamespace, STATE = _ref21$payload.STATE;
              call = _ref22.call, put = _ref22.put, select = _ref22.select;
              _context11.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select10 = _context11.sent;
              tableName = _yield$select10.tableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              path = (0, _queryTabConfigRelationApi.queryRelationPropertyQueryApi)(tn, objectType);
              if (objectANamespace === 'navMenu') path = '/metaNavigation/getNavigationMenu';
              _context11.next = 11;
              return call(tableName === 'META_OBJECT_GRID_FIELD' ? _metaApi.queryGlobalField : _metaApi.queryItem, {
                tn: tn,
                objectId: PID
              }, path);

            case 11:
              data = _context11.sent;

              if (!data) {
                _context11.next = 16;
                break;
              }

              dataList = (0, _utils.parseMeta)(data.dataList);
              _context11.next = 16;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: _objectSpread(_objectSpread({
                  dataList: dataList,
                  PID: PID,
                  enable: enable
                }, other), {}, {
                  isRequest: true,
                  parentState: STATE
                })
              });

            case 16:
            case "end":
              return _context11.stop();
          }
        }
      }, queryItem);
    }),
    editItem: /*#__PURE__*/_regeneratorRuntime().mark(function editItem(_ref23, _ref24) {
      var _ref23$payload, values, record, selectedRows, namespace, PID, OBJECTID, STATE, objectANamespace, parentState, call, put, select, _yield$select11, tableName, enable, tn, data, requestType;

      return _regeneratorRuntime().wrap(function editItem$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _ref23$payload = _ref23.payload, values = _ref23$payload.values, record = _ref23$payload.record, selectedRows = _ref23$payload.selectedRows, namespace = _ref23$payload.namespace, PID = _ref23$payload.PID, OBJECTID = _ref23$payload.OBJECTID, STATE = _ref23$payload.STATE, objectANamespace = _ref23$payload.objectANamespace, parentState = _ref23$payload.parentState;
              call = _ref24.call, put = _ref24.put, select = _ref24.select;
              _context12.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select11 = _context12.sent;
              tableName = _yield$select11.tableName;
              enable = _yield$select11.enable;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              requestType = '';

              if (!record.ID) {
                _context12.next = 27;
                break;
              }

              _context12.t0 = tn;
              _context12.next = _context12.t0 === 14 ? 13 : _context12.t0 === 16 ? 15 : _context12.t0 === 41 ? 17 : 19;
              break;

            case 13:
              requestType = 'updateRelationInfo';
              return _context12.abrupt("break", 21);

            case 15:
              requestType = 'updateRelationShip';
              return _context12.abrupt("break", 21);

            case 17:
              requestType = 'updateMetaClassViewNode';
              return _context12.abrupt("break", 21);

            case 19:
              requestType = 'update';
              return _context12.abrupt("break", 21);

            case 21:
              /* 
                第一个参数: 调用请求接口
                第二个参数: metaObjectParameters 返回相关修改接口的请求参数
                第三个参数: 传入第二级请求路径
                第四个参数: 传入创建方法拼接请求路径
              */
              if (objectANamespace === 'navMenu') requestType = 'updateNavigationMenu';
              _context12.next = 24;
              return call(_metaApi.editItem, (0, _queryTabConfigRelationApi.metaObjectParameters)(tn, {
                values: values,
                record: record,
                namespace: namespace,
                PID: PID,
                parentState: parentState
              }, requestType), objectANamespace === 'navMenu' ? '/metaNavigation' : (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 24:
              data = _context12.sent;
              _context12.next = 45;
              break;

            case 27:
              if (!Array.isArray(values)) {
                values = [values];
              } // 部分创建接口不同, 通过表映射区分


              _context12.t1 = tn;
              _context12.next = _context12.t1 === 11 ? 31 : _context12.t1 === 13 ? 33 : _context12.t1 === 14 ? 35 : _context12.t1 === 41 ? 37 : 39;
              break;

            case 31:
              requestType = values.hasOwnProperty('id') ? 'createCommonField' : 'create';
              return _context12.abrupt("break", 41);

            case 33:
              requestType = 'createSingle';
              return _context12.abrupt("break", 41);

            case 35:
              requestType = 'createRelationInfo';
              return _context12.abrupt("break", 41);

            case 37:
              requestType = 'createNode';
              return _context12.abrupt("break", 41);

            case 39:
              requestType = 'create';
              return _context12.abrupt("break", 41);

            case 41:
              if (objectANamespace === 'navMenu') requestType = 'createNavigationMenu';
              /* 
                第一个参数: 调用请求接口
                第二个参数: metaObjectParameters 返回相关创建接口的请求参数
                第三个参数: 传入第二级请求路径
                第四个参数: 传入创建方法拼接请求路径
              */

              _context12.next = 44;
              return call(_metaApi.addItem, (0, _queryTabConfigRelationApi.metaObjectParameters)(tn, {
                values: values,
                record: record,
                namespace: namespace,
                PID: PID,
                OBJECTID: OBJECTID,
                STATE: STATE,
                parentState: parentState
              }, requestType), objectANamespace === 'navMenu' ? '/metaNavigation' : (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 44:
              data = _context12.sent;

            case 45:
              if (!data) {
                _context12.next = 59;
                break;
              }

              _antd.message.info(data.hint);

              _context12.next = 49;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  visible: false
                }
              });

            case 49:
              _context12.next = 51;
              return put({
                type: 'queryItem',
                payload: {
                  PID: namespace === 'viewStructure' ? OBJECTID : PID,
                  namespace: namespace,
                  enable: enable,
                  objectType: 'workObject',
                  objectANamespace: objectANamespace
                }
              });

            case 51:
              data = _context12.sent;

              if (!record.ID) {
                _context12.next = 55;
                break;
              }

              _context12.next = 55;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 55:
              if (!(values[0] && values[0].ABTYPE)) {
                _context12.next = 59;
                break;
              }

              if (selectedRows[0].children) {
                selectedRows[0].children.push(values[0]);
              } else selectedRows[0].children = values;

              _context12.next = 59;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [_objectSpread({}, selectedRows[0])]
                }
              });

            case 59:
            case "end":
              return _context12.stop();
          }
        }
      }, editItem);
    }),
    delItem: /*#__PURE__*/_regeneratorRuntime().mark(function delItem(_ref25, _ref26) {
      var _ref25$payload, rows, namespace, PID, objectANamespace, call, put, select, _yield$select12, tableName, enable, tn, requestType, data;

      return _regeneratorRuntime().wrap(function delItem$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _ref25$payload = _ref25.payload, rows = _ref25$payload.rows, namespace = _ref25$payload.namespace, PID = _ref25$payload.PID, objectANamespace = _ref25$payload.objectANamespace;
              call = _ref26.call, put = _ref26.put, select = _ref26.select;
              _context13.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select12 = _context13.sent;
              tableName = _yield$select12.tableName;
              enable = _yield$select12.enable;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName); // console.log(tn, rows, namespace)

              requestType = 'delete'; // 部分创建接口不同, 通过表映射区分

              _context13.t0 = tn;
              _context13.next = _context13.t0 === 14 ? 12 : _context13.t0 === 41 ? 14 : 16;
              break;

            case 12:
              requestType = 'deleteRelationInfo';
              return _context13.abrupt("break", 17);

            case 14:
              requestType = 'deleteNode';
              return _context13.abrupt("break", 17);

            case 16:
              return _context13.abrupt("break", 17);

            case 17:
              if (objectANamespace === 'navMenu') requestType = 'deleteNavigationMenu';
              /* 
                  第一个参数: 调用请求接口
                  第二个参数: metaObjectParameters 返回相关创建接口的请求参数
                  第三个参数: 传入第二级请求路径
                  第四个参数: 传入创建方法拼接请求路径
                */

              _context13.next = 20;
              return call(_metaApi.delItem, (0, _queryTabConfigRelationApi.metaObjectParameters)(tn, {
                rows: rows,
                namespace: namespace,
                PID: PID,
                requestType: requestType
              }, requestType), objectANamespace === 'navMenu' ? '/metaNavigation' : (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 20:
              data = _context13.sent;

              if (!data) {
                _context13.next = 27;
                break;
              }

              _antd.message.info(data.hint);

              _context13.next = 25;
              return put({
                type: 'queryItem',
                payload: {
                  PID: PID,
                  namespace: namespace,
                  enable: enable,
                  objectType: 'workObject',
                  objectANamespace: objectANamespace
                }
              });

            case 25:
              _context13.next = 27;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  selectedRows: [],
                  objectDataList: [],
                  selectedRowKeys: []
                }
              });

            case 27:
            case "end":
              return _context13.stop();
          }
        }
      }, delItem);
    }),
    // 第三级关联对象: 属性页字段/表格页字段/关联页页签等
    queryRootItem: /*#__PURE__*/_regeneratorRuntime().mark(function queryRootItem(_ref27, _ref28) {
      var _ref27$payload, rootId, namespace, objectType, call, put, select, _yield$select13, objectTableName, tn, data, objectDataList;

      return _regeneratorRuntime().wrap(function queryRootItem$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _ref27$payload = _ref27.payload, rootId = _ref27$payload.rootId, namespace = _ref27$payload.namespace, objectType = _ref27$payload.objectType;
              call = _ref28.call, put = _ref28.put, select = _ref28.select;
              _context14.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select13 = _context14.sent;
              objectTableName = _yield$select13.objectTableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(objectTableName);
              _context14.next = 9;
              return call(_metaApi.queryItem, {
                tn: tn,
                rootId: rootId
              }, (0, _queryTabConfigRelationApi.queryRelationPropertyQueryApi)(tn, objectType));

            case 9:
              data = _context14.sent;

              if (!data) {
                _context14.next = 15;
                break;
              }

              objectDataList = (0, _utils.parseMeta)(data.dataList);

              if (tn === 131) {
                objectDataList = objectDataList.map(function (item) {
                  item.PID = item.PID === 0 ? '0' : item.PID;
                  return item;
                });
              }

              _context14.next = 15;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  objectDataList: objectDataList
                }
              });

            case 15:
            case "end":
              return _context14.stop();
          }
        }
      }, _metaApi.queryRootItem);
    }),
    editRootItem: /*#__PURE__*/_regeneratorRuntime().mark(function editRootItem(_ref29, _ref30) {
      var _ref29$payload, values, record, namespace, rootId, PID, rootPid, call, put, select, _yield$select14, objectTableName, tn, data, requestType, _requestType2;

      return _regeneratorRuntime().wrap(function editRootItem$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _ref29$payload = _ref29.payload, values = _ref29$payload.values, record = _ref29$payload.record, namespace = _ref29$payload.namespace, rootId = _ref29$payload.rootId, PID = _ref29$payload.PID, rootPid = _ref29$payload.rootPid;
              call = _ref30.call, put = _ref30.put, select = _ref30.select;
              _context15.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select14 = _context15.sent;
              objectTableName = _yield$select14.objectTableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(objectTableName); // console.log(values, record, namespace, rootId, tn)

              if (!(record && record.ID)) {
                _context15.next = 20;
                break;
              }

              // 部分修改接口不同, 通过表映射区分
              requestType = 'update';
              _context15.t0 = tn;
              _context15.next = _context15.t0 === 141 ? 12 : 14;
              break;

            case 12:
              requestType = 'updateMetaObjectRelationTab';
              return _context15.abrupt("break", 15);

            case 14:
              return _context15.abrupt("break", 15);

            case 15:
              _context15.next = 17;
              return call(_metaApi.editRootItem, (0, _queryTabConfigRelationApi.metaObjectParameters)(tn, {
                values: values,
                record: record,
                namespace: namespace,
                rootId: rootId,
                rootPid: rootPid
              }, requestType), (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 17:
              data = _context15.sent;
              _context15.next = 32;
              break;

            case 20:
              // 部分新增接口不同, 通过表映射区分
              _requestType2 = 'create';
              _context15.t1 = tn;
              _context15.next = _context15.t1 === 131 ? 24 : _context15.t1 === 141 ? 26 : 28;
              break;

            case 24:
              _requestType2 = 'createSingle';
              return _context15.abrupt("break", 29);

            case 26:
              _requestType2 = 'createMetaObjectRelationTab';
              return _context15.abrupt("break", 29);

            case 28:
              return _context15.abrupt("break", 29);

            case 29:
              _context15.next = 31;
              return call(_metaApi.addRootItem, (0, _queryTabConfigRelationApi.metaObjectParameters)(tn, {
                values: values,
                record: record,
                namespace: namespace,
                rootId: rootId,
                PID: PID,
                rootPid: rootPid
              }, _requestType2), (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), _requestType2);

            case 31:
              data = _context15.sent;

            case 32:
              if (!data) {
                _context15.next = 41;
                break;
              }

              _antd.message.info(data.hint);

              _context15.next = 36;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  objectVisible: false,
                  setVisible: false
                }
              });

            case 36:
              _context15.next = 38;
              return put({
                type: 'queryRootItem',
                payload: {
                  rootId: rootId,
                  namespace: namespace,
                  objectType: 'workObject'
                }
              });

            case 38:
              if (!(record && record.ID)) {
                _context15.next = 41;
                break;
              }

              _context15.next = 41;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  objectSelectedRows: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 41:
            case "end":
              return _context15.stop();
          }
        }
      }, editRootItem);
    }),
    delRootItem: /*#__PURE__*/_regeneratorRuntime().mark(function delRootItem(_ref31, _ref32) {
      var _ref31$payload, rows, namespace, rootId, call, put, select, _yield$select15, tableName, tn, requestType, data;

      return _regeneratorRuntime().wrap(function delRootItem$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _ref31$payload = _ref31.payload, rows = _ref31$payload.rows, namespace = _ref31$payload.namespace, rootId = _ref31$payload.rootId;
              call = _ref32.call, put = _ref32.put, select = _ref32.select;
              _context16.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select15 = _context16.sent;
              tableName = _yield$select15.objectTableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              requestType = 'delete';
              _context16.t0 = tn;
              _context16.next = _context16.t0 === 141 ? 11 : 13;
              break;

            case 11:
              requestType = 'deleteMetaObjectRelationTab';
              return _context16.abrupt("break", 14);

            case 13:
              return _context16.abrupt("break", 14);

            case 14:
              _context16.next = 16;
              return call(_metaApi.delRootItem, (0, _queryTabConfigRelationApi.metaObjectParameters)(tn, {
                rows: rows,
                namespace: namespace,
                rootId: rootId
              }, requestType), (0, _queryTabConfigRelationApi.queryRelationPropertySecondPath)(tn), requestType);

            case 16:
              data = _context16.sent;

              if (!data) {
                _context16.next = 23;
                break;
              }

              _antd.message.info(data.hint);

              _context16.next = 21;
              return put({
                type: 'queryRootItem',
                payload: {
                  rootId: rootId,
                  namespace: namespace,
                  objectType: 'workObject'
                }
              });

            case 21:
              _context16.next = 23;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  objectSelectedRows: [],
                  objectSelectedRowKeys: []
                }
              });

            case 23:
            case "end":
              return _context16.stop();
          }
        }
      }, delRootItem);
    }),
    reorderItem: /*#__PURE__*/_regeneratorRuntime().mark(function reorderItem(_ref33, _ref34) {
      var _ref33$payload, namespace, hData, PID, objectTypes, objectANamespace, call, put, select, _yield$select16, tableName, enable, tn, data;

      return _regeneratorRuntime().wrap(function reorderItem$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _ref33$payload = _ref33.payload, namespace = _ref33$payload.namespace, hData = _ref33$payload.hData, PID = _ref33$payload.PID, objectTypes = _ref33$payload.objectTypes, objectANamespace = _ref33$payload.objectANamespace;
              call = _ref34.call, put = _ref34.put, select = _ref34.select;
              _context17.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select16 = _context17.sent;
              tableName = _yield$select16.tableName;
              enable = _yield$select16.enable;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              _context17.next = 10;
              return call(_metaApi.reorder, {
                tn: tn,
                hData: hData
              });

            case 10:
              data = _context17.sent;

              if (!data) {
                _context17.next = 15;
                break;
              }

              _antd.message.info(data.hint);

              _context17.next = 15;
              return put({
                type: 'queryItem',
                payload: {
                  PID: PID,
                  namespace: namespace,
                  enable: enable,
                  objectType: objectTypes,
                  objectANamespace: objectANamespace
                }
              });

            case 15:
            case "end":
              return _context17.stop();
          }
        }
      }, reorderItem);
    }),
    reorderRootItem: /*#__PURE__*/_regeneratorRuntime().mark(function reorderRootItem(_ref35, _ref36) {
      var _ref35$payload, namespace, hData, rootId, objectTypes, call, put, select, _yield$select17, tableName, tn, data;

      return _regeneratorRuntime().wrap(function reorderRootItem$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _ref35$payload = _ref35.payload, namespace = _ref35$payload.namespace, hData = _ref35$payload.hData, rootId = _ref35$payload.rootId, objectTypes = _ref35$payload.objectTypes;
              call = _ref36.call, put = _ref36.put, select = _ref36.select;
              _context18.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _yield$select17 = _context18.sent;
              tableName = _yield$select17.objectTableName;
              tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
              _context18.next = 9;
              return call(_metaApi.reorder, {
                tn: tn,
                hData: hData
              });

            case 9:
              data = _context18.sent;

              if (!data) {
                _context18.next = 14;
                break;
              }

              _antd.message.info(data.hint);

              _context18.next = 14;
              return put({
                type: 'queryRootItem',
                payload: {
                  rootId: rootId,
                  namespace: namespace,
                  objectType: objectTypes
                }
              });

            case 14:
            case "end":
              return _context18.stop();
          }
        }
      }, reorderRootItem);
    })
  }
};
exports.default = _default;