"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _metaApi = require("../../../service/metaApi");

var _antd = require("antd");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'qualityInspectionTemplate',
  state: {
    dataList: []
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  effects: {
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref2, _ref3) {
      var _ref2$payload, namespace, _ref2$payload$page, page, _ref2$payload$pageSiz, pageSize, _ref2$payload$paging, paging, call, put, data;

      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2$payload = _ref2.payload, namespace = _ref2$payload.namespace, _ref2$payload$page = _ref2$payload.page, page = _ref2$payload$page === void 0 ? 1 : _ref2$payload$page, _ref2$payload$pageSiz = _ref2$payload.pageSize, pageSize = _ref2$payload$pageSiz === void 0 ? 20 : _ref2$payload$pageSiz, _ref2$payload$paging = _ref2$payload.paging, paging = _ref2$payload$paging === void 0 ? false : _ref2$payload$paging;
              call = _ref3.call, put = _ref3.put;
              _context.next = 4;
              return call(_metaApi.inspectionModelQuery, {
                modelPath: 'metaTemplate',
                values: {
                  page: page,
                  pageSize: pageSize,
                  paging: paging,
                  TYPE: namespace === 'reportModel' ? 1 : 0
                }
              });

            case 4:
              data = _context.sent;

              if (!data.flag) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: data.dataList,
                  selectedRowKeys: [],
                  selectedRows: []
                }
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    edit: /*#__PURE__*/_regeneratorRuntime().mark(function edit(_ref4, _ref5) {
      var _ref4$payload, values, namespace, record, type, call, put, data;

      return _regeneratorRuntime().wrap(function edit$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref4$payload = _ref4.payload, values = _ref4$payload.values, namespace = _ref4$payload.namespace, record = _ref4$payload.record, type = _ref4$payload.type;
              call = _ref5.call, put = _ref5.put;
              _context2.next = 4;
              return call(_metaApi.inspectionModelClient, {
                values: values,
                type: type
              });

            case 4:
              data = _context2.sent;

              if (!data.flag) {
                _context2.next = 13;
                break;
              }

              _context2.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  visible: false
                }
              });

            case 8:
              _context2.next = 10;
              return put({
                type: 'query',
                payload: {
                  namespace: namespace,
                  page: 1,
                  pageSize: 20,
                  paging: false
                }
              });

            case 10:
              _antd.message.success(data.hint);

              _context2.next = 14;
              break;

            case 13:
              _antd.message.error(data.hint);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, edit);
    }),
    queryItem: /*#__PURE__*/_regeneratorRuntime().mark(function queryItem(_ref6, _ref7) {
      var _ref6$payload, activeKey, namespace, objectId, call, put, modelPath, data, dataList;

      return _regeneratorRuntime().wrap(function queryItem$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6$payload = _ref6.payload, activeKey = _ref6$payload.activeKey, namespace = _ref6$payload.namespace, objectId = _ref6$payload.objectId;
              call = _ref7.call, put = _ref7.put;
              modelPath = activeKey === '0' ? 'metaTemplateHeader' : activeKey === '1' ? 'metaTemplateBody' : activeKey === '2' ? 'metaTemplateFooter' : null;
              _context3.next = 5;
              return call(_metaApi.inspectionModelQuery, {
                values: {
                  page: 1,
                  pageSize: 20,
                  paging: false,
                  objectId: objectId
                },
                modelPath: modelPath
              });

            case 5:
              data = _context3.sent;

              if (!data.flag) {
                _context3.next = 10;
                break;
              }

              dataList = data.dataList.map(function (item) {
                if (item.META !== undefined) {
                  if (typeof item.META === 'string') {
                    item.META = JSON.parse(item.META);
                  }

                  delete item.META.ENABLE;
                  item.ENABLE = item.ENABLE || false;

                  if (activeKey === '0') {
                    item.PID = item.PID === 0 ? item.PID.toString() : item.PID;
                  }

                  if (activeKey === '1') {
                    item.META.WIDTH = item.META.WIDTH || 100;
                    item.META.ALIGN = item.META.ALIGN || 'center';
                    item.META.WRAP = item.META.WRAP || false;
                  }

                  if (activeKey === '1' || activeKey === '2') {
                    item.META.EDITABLE = item.META.EDITABLE || 0;
                  }

                  item = _objectSpread(_objectSpread({}, item), item.META);
                }

                return item;
              });
              _context3.next = 10;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList || [],
                  sortList: dataList || [],
                  selectedRowKeys: [],
                  selectedRows: []
                }
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, queryItem);
    }),
    editItem: /*#__PURE__*/_regeneratorRuntime().mark(function editItem(_ref8, _ref9) {
      var _ref8$payload, meta, rows, objectId, id, namespace, type, activeKey, onCancel, ENABLE, PID, call, put, values, modelPath, data;

      return _regeneratorRuntime().wrap(function editItem$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref8$payload = _ref8.payload, meta = _ref8$payload.meta, rows = _ref8$payload.rows, objectId = _ref8$payload.objectId, id = _ref8$payload.id, namespace = _ref8$payload.namespace, type = _ref8$payload.type, activeKey = _ref8$payload.activeKey, onCancel = _ref8$payload.onCancel, ENABLE = _ref8$payload.ENABLE, PID = _ref8$payload.PID;
              call = _ref9.call, put = _ref9.put;
              values = type === 'delete' ? rows : {
                meta: meta,
                ENABLE: ENABLE,
                PID: PID,
                objectId: objectId,
                id: id
              };
              modelPath = activeKey === '0' ? 'metaTemplateHeader' : activeKey === '1' ? 'metaTemplateBody' : activeKey === '2' ? 'metaTemplateFooter' : null;
              _context4.next = 6;
              return call(_metaApi.inspectionItem, {
                values: values,
                modelPath: modelPath,
                type: type
              });

            case 6:
              data = _context4.sent;

              if (!data.flag) {
                _context4.next = 14;
                break;
              }

              _context4.next = 10;
              return put({
                type: 'queryItem',
                payload: {
                  activeKey: activeKey,
                  namespace: namespace,
                  objectId: objectId
                }
              });

            case 10:
              onCancel && onCancel();

              _antd.message.success(data.hint);

              _context4.next = 15;
              break;

            case 14:
              _antd.message.error(data.hint);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, editItem);
    }),
    sort: /*#__PURE__*/_regeneratorRuntime().mark(function sort(_ref10, _ref11) {
      var _ref10$payload, meta, activeKey, objectId, tableName, namespace, call, put, data;

      return _regeneratorRuntime().wrap(function sort$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref10$payload = _ref10.payload, meta = _ref10$payload.meta, activeKey = _ref10$payload.activeKey, objectId = _ref10$payload.objectId, tableName = _ref10$payload.tableName, namespace = _ref10$payload.namespace;
              call = _ref11.call, put = _ref11.put;
              _context5.next = 4;
              return call(_metaApi.inspectionItem, {
                values: {
                  meta: meta,
                  tableName: tableName
                },
                modelPath: 'metaTemplate',
                type: 'sort'
              });

            case 4:
              data = _context5.sent;

              if (!data.flag) {
                _context5.next = 13;
                break;
              }

              _context5.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dragSortFormVisible: false
                }
              });

            case 8:
              _context5.next = 10;
              return put({
                type: 'queryItem',
                payload: {
                  activeKey: activeKey,
                  namespace: namespace,
                  objectId: objectId
                }
              });

            case 10:
              _antd.message.success(data.hint);

              _context5.next = 14;
              break;

            case 13:
              _antd.message.error(data.hint);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, sort);
    })
  }
};
exports.default = _default;