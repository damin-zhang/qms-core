"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = require("../../service/api");

var _systemApi = require("../../service/systemApi");

var _applicationApi = require("../../service/applicationApi");

var _mapParams = require("../../utils/mapParams");

var _antd = require("antd");

var _excluded = ["onCancel"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'StaffManage',
  state: {
    dataList: [],
    selectedRowKeys: [],
    selectedRows: [],
    namespace: 'StaffManage',
    record: {}
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  effects: {
    // 主对象
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref2, _ref3) {
      var call, put, data;
      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _objectDestructuringEmpty(_ref2);

              call = _ref3.call, put = _ref3.put;
              _context.next = 4;
              return call(_systemApi.deptQuery);

            case 4:
              data = _context.sent;

              if (!data) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return put({
                type: "packet",
                payload: {
                  dataList: data.dataList || []
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
              return call(_systemApi.updateDept, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return call(_systemApi.createDept, {
                values: values
              });

            case 10:
              data = _context2.sent;

            case 11:
              if (!data) {
                _context2.next = 20;
                break;
              }

              _antd.message.info(data.hint);

              _context2.next = 15;
              return put({
                type: "packet",
                payload: {
                  visible: false
                }
              });

            case 15:
              _context2.next = 17;
              return put({
                type: 'query'
              });

            case 17:
              if (!record.ID) {
                _context2.next = 20;
                break;
              }

              _context2.next = 20;
              return put({
                type: "packet",
                payload: {
                  selectedRows: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, edit);
    }),
    queryStaff: /*#__PURE__*/_regeneratorRuntime().mark(function queryStaff(_ref6, _ref7) {
      var _ref6$payload, deptId, page, pageSize, call, put, data;

      return _regeneratorRuntime().wrap(function queryStaff$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6$payload = _ref6.payload, deptId = _ref6$payload.deptId, page = _ref6$payload.page, pageSize = _ref6$payload.pageSize;
              call = _ref7.call, put = _ref7.put;
              _context3.next = 4;
              return call(_systemApi.spersonnelQuery, {
                deptId: deptId,
                page: page,
                pageSize: pageSize
              });

            case 4:
              data = _context3.sent;

              if (!data) {
                _context3.next = 8;
                break;
              }

              _context3.next = 8;
              return put({
                type: "packet",
                payload: {
                  dataList1: data.dataList || [],
                  staffDataList: [],
                  total: data.total,
                  page: page,
                  pageNumber: pageSize
                }
              });

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, queryStaff);
    }),
    editStaff: /*#__PURE__*/_regeneratorRuntime().mark(function editStaff(_ref8, _ref9) {
      var _ref8$payload, selectedRows, values, record, onCancel, call, put, data, deptId;

      return _regeneratorRuntime().wrap(function editStaff$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref8$payload = _ref8.payload, selectedRows = _ref8$payload.selectedRows, values = _ref8$payload.values, record = _ref8$payload.record, onCancel = _ref8$payload.onCancel;
              call = _ref9.call, put = _ref9.put;

              if (!(record.id && record.deptId)) {
                _context4.next = 8;
                break;
              }

              _context4.next = 5;
              return call(_systemApi.updateStaffUser, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context4.sent;
              _context4.next = 12;
              break;

            case 8:
              values.deptId = record.deptId;
              _context4.next = 11;
              return call(_systemApi.createStaffUser, {
                values: values
              });

            case 11:
              data = _context4.sent;

            case 12:
              if (!(data && data.hint === 'OK')) {
                _context4.next = 20;
                break;
              }

              deptId = record.deptId ? record.deptId : values.deptId;
              _context4.next = 16;
              return put({
                type: 'queryStaff',
                payload: {
                  deptId: selectedRows[0].pid === '0' ? 0 : deptId,
                  page: 1,
                  pageSize: 20
                }
              });

            case 16:
              if (!record.id) {
                _context4.next = 19;
                break;
              }

              _context4.next = 19;
              return put({
                type: "packet",
                payload: {
                  selectedRows1: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 19:
              if (onCancel) onCancel();

            case 20:
              _antd.message.info(data.hint);

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, editStaff);
    }),
    queryStaffUser: /*#__PURE__*/_regeneratorRuntime().mark(function queryStaffUser(_ref10, _ref11) {
      var condition, call, put, data;
      return _regeneratorRuntime().wrap(function queryStaffUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              condition = _ref10.payload.condition;
              call = _ref11.call, put = _ref11.put;
              _context5.next = 4;
              return call(_systemApi.queryStaffUser, {
                id: condition
              });

            case 4:
              data = _context5.sent;

              if (!data) {
                _context5.next = 8;
                break;
              }

              _context5.next = 8;
              return put({
                type: "packet",
                payload: {
                  dataList2: data.dataList || []
                }
              });

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, queryStaffUser);
    }),
    editStaffUser: /*#__PURE__*/_regeneratorRuntime().mark(function editStaffUser(_ref12, _ref13) {
      var _ref12$payload, values, record, call, put, data;

      return _regeneratorRuntime().wrap(function editStaffUser$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref12$payload = _ref12.payload, values = _ref12$payload.values, record = _ref12$payload.record;
              call = _ref13.call, put = _ref13.put;
              values.name = values.sName;
              delete values.sName;

              if (!record.id) {
                _context6.next = 10;
                break;
              }

              _context6.next = 7;
              return call(_systemApi.updateStaffUser, {
                values: values,
                id: record.uid
              });

            case 7:
              data = _context6.sent;
              _context6.next = 13;
              break;

            case 10:
              _context6.next = 12;
              return call(_systemApi.createStaffUser, {
                values: values
              });

            case 12:
              data = _context6.sent;

            case 13:
              if (!data) {
                _context6.next = 23;
                break;
              }

              // console.log(record)
              record.id = record.id ? record.id : record.SPERSONNELID;

              _antd.message.info(data.hint);

              _context6.next = 18;
              return put({
                type: "packet",
                payload: {
                  visible2: false
                }
              });

            case 18:
              _context6.next = 20;
              return put({
                type: 'queryStaffUser',
                payload: {
                  condition: record.id
                }
              });

            case 20:
              if (!record.ID) {
                _context6.next = 23;
                break;
              }

              _context6.next = 23;
              return put({
                type: "packet",
                payload: {
                  selectedRows2: [_objectSpread(_objectSpread({}, record), values)]
                }
              });

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, editStaffUser);
    }),
    del: /*#__PURE__*/_regeneratorRuntime().mark(function del(_ref14, _ref15) {
      var hData, call, put, data;
      return _regeneratorRuntime().wrap(function del$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              hData = _ref14.payload.hData;
              call = _ref15.call, put = _ref15.put;
              _context7.next = 4;
              return call(_systemApi.deleteDept, {
                hData: hData[0]
              });

            case 4:
              data = _context7.sent;

              if (!data) {
                _context7.next = 11;
                break;
              }

              _antd.message.info(data.hint);

              _context7.next = 9;
              return put({
                type: 'query'
              });

            case 9:
              _context7.next = 11;
              return put({
                type: "packet",
                payload: {
                  selectedRows: [],
                  selectedRowKeys: [],
                  showTab: false,
                  selectedRowKeys1: [],
                  selectedRows1: []
                }
              });

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, del);
    }),
    delStaff: /*#__PURE__*/_regeneratorRuntime().mark(function delStaff(_ref16, _ref17) {
      var _ref16$payload, selectedRows, hData, call, put, data;

      return _regeneratorRuntime().wrap(function delStaff$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _ref16$payload = _ref16.payload, selectedRows = _ref16$payload.selectedRows, hData = _ref16$payload.hData;
              call = _ref17.call, put = _ref17.put;
              _context8.next = 4;
              return call(_systemApi.deleteStaff, {
                users: hData
              });

            case 4:
              data = _context8.sent;

              if (!data) {
                _context8.next = 11;
                break;
              }

              _antd.message.info(data.hint);

              _context8.next = 9;
              return put({
                type: "packet",
                payload: {
                  selectedRows1: [],
                  selectedRowKeys1: [],
                  showTab: false
                }
              });

            case 9:
              _context8.next = 11;
              return put({
                type: 'queryStaff',
                payload: {
                  deptId: selectedRows[0].pid === '0' ? 0 : hData[0].deptId,
                  page: 1,
                  pageSize: 20
                }
              });

            case 11:
            case "end":
              return _context8.stop();
          }
        }
      }, delStaff);
    }),
    delStaffUser: /*#__PURE__*/_regeneratorRuntime().mark(function delStaffUser(_ref18, _ref19) {
      var hData, call, put, data;
      return _regeneratorRuntime().wrap(function delStaffUser$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              hData = _ref18.payload.hData;
              call = _ref19.call, put = _ref19.put;
              _context9.next = 4;
              return call(_systemApi.deleteStaffUser, {
                id: hData[0].uid
              });

            case 4:
              data = _context9.sent;

              if (!data) {
                _context9.next = 11;
                break;
              }

              _antd.message.info(data.hint);

              _context9.next = 9;
              return put({
                type: 'queryStaffUser',
                payload: {
                  condition: hData[0].id
                }
              });

            case 9:
              _context9.next = 11;
              return put({
                type: "packet",
                payload: {
                  selectedRows2: [],
                  selectedRowKeys2: []
                }
              });

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, delStaffUser);
    }),
    createWorkEnv: /*#__PURE__*/_regeneratorRuntime().mark(function createWorkEnv(_ref20, _ref21) {
      var hData, call, put, data;
      return _regeneratorRuntime().wrap(function createWorkEnv$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              hData = _ref20.payload.hData;
              call = _ref21.call, put = _ref21.put;
              _context10.next = 4;
              return call(_applicationApi.commonApi, {
                objectNo: 'SUSER',
                hData: hData,
                implclass: _mapParams.implclassMap.createUserEnv
              });

            case 4:
              data = _context10.sent;

              if (!data) {
                _context10.next = 11;
                break;
              }

              _antd.message.info(data.hint);

              _context10.next = 9;
              return put({
                type: 'queryStaffUser',
                payload: {
                  condition: hData[0].id
                }
              });

            case 9:
              _context10.next = 11;
              return put({
                type: "packet",
                payload: {
                  selectedRows2: hData
                }
              });

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, createWorkEnv);
    }),
    assignModelAuth: /*#__PURE__*/_regeneratorRuntime().mark(function assignModelAuth(_ref22, _ref23) {
      var _ref22$payload, selectedRows, users, metaState, call, put, userIds, data;

      return _regeneratorRuntime().wrap(function assignModelAuth$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref22$payload = _ref22.payload, selectedRows = _ref22$payload.selectedRows, users = _ref22$payload.users, metaState = _ref22$payload.metaState;
              call = _ref23.call, put = _ref23.put;
              userIds = [];
              userIds.push(users[0].id);
              _context11.next = 6;
              return call(_systemApi.userAllowMeta, {
                userIds: userIds,
                metaState: metaState
              });

            case 6:
              data = _context11.sent;

              if (!data.flag) {
                _context11.next = 14;
                break;
              }

              _antd.message.info(data.hint);

              users[0].allowMeta = metaState;
              _context11.next = 12;
              return put({
                type: 'queryStaff',
                payload: {
                  deptId: selectedRows[0].pid === '0' ? 0 : selectedRows[0].id,
                  page: 1,
                  pageSize: 20
                }
              });

            case 12:
              _context11.next = 14;
              return put({
                type: "packet",
                payload: {
                  selectedRows1: users
                }
              });

            case 14:
            case "end":
              return _context11.stop();
          }
        }
      }, assignModelAuth);
    }),
    resetUserPassword: /*#__PURE__*/_regeneratorRuntime().mark(function resetUserPassword(_ref24, _ref25) {
      var data, call, result;
      return _regeneratorRuntime().wrap(function resetUserPassword$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              data = _ref24.payload.data;
              call = _ref25.call;
              _context12.next = 4;
              return call(_systemApi.resetUserPassword, {
                data: data
              });

            case 4:
              result = _context12.sent;

              if (result) {
                _antd.message.success(result.hint);
              }

            case 6:
            case "end":
              return _context12.stop();
          }
        }
      }, resetUserPassword);
    }),
    disableUser: /*#__PURE__*/_regeneratorRuntime().mark(function disableUser(_ref26, _ref27) {
      var _ref26$payload, selectedRows, hData, disabled, call, put, userIds, data;

      return _regeneratorRuntime().wrap(function disableUser$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _ref26$payload = _ref26.payload, selectedRows = _ref26$payload.selectedRows, hData = _ref26$payload.hData, disabled = _ref26$payload.disabled;
              call = _ref27.call, put = _ref27.put;
              userIds = [];
              userIds.push(hData[0].id);
              _context13.next = 6;
              return call(_systemApi.disableStaffUser, {
                userIds: userIds,
                disabled: disabled
              });

            case 6:
              data = _context13.sent;

              if (!data.flag) {
                _context13.next = 14;
                break;
              }

              _antd.message.info(data.hint);

              hData[0].disabled = disabled;
              _context13.next = 12;
              return put({
                type: 'queryStaff',
                payload: {
                  deptId: selectedRows[0].pid === '0' ? 0 : selectedRows[0].id,
                  page: 1,
                  pageSize: 20
                }
              });

            case 12:
              _context13.next = 14;
              return put({
                type: "packet",
                payload: {
                  selectedRows1: hData
                }
              });

            case 14:
            case "end":
              return _context13.stop();
          }
        }
      }, disableUser);
    }),
    // 员工管理迁移数据
    moveNodeData: /*#__PURE__*/_regeneratorRuntime().mark(function moveNodeData(_ref28, _ref29) {
      var _ref28$payload, onCancel, rest, call, put, hData, users, selectedRows, data;

      return _regeneratorRuntime().wrap(function moveNodeData$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _ref28$payload = _ref28.payload, onCancel = _ref28$payload.onCancel, rest = _objectWithoutProperties(_ref28$payload, _excluded);
              call = _ref29.call, put = _ref29.put;
              hData = rest.hData, users = rest.users, selectedRows = rest.selectedRows;
              _context14.next = 5;
              return call(_systemApi.personnelChangeNode, {
                users: users,
                deptId: hData.id
              });

            case 5:
              data = _context14.sent;

              if (!data) {
                _context14.next = 10;
                break;
              }

              onCancel();
              _context14.next = 10;
              return put({
                type: 'queryStaff',
                payload: {
                  deptId: selectedRows[0].pid === '0' ? 0 : selectedRows[0].id,
                  page: 1,
                  pageSize: 20
                }
              });

            case 10:
            case "end":
              return _context14.stop();
          }
        }
      }, moveNodeData);
    }),
    // 搜索全部员工数据
    searchAllStaffData: /*#__PURE__*/_regeneratorRuntime().mark(function searchAllStaffData(_ref30, _ref31) {
      var _ref30$payload, keyWord, page, pageSize, deptId, call, put, data;

      return _regeneratorRuntime().wrap(function searchAllStaffData$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _ref30$payload = _ref30.payload, keyWord = _ref30$payload.keyWord, page = _ref30$payload.page, pageSize = _ref30$payload.pageSize, deptId = _ref30$payload.deptId;
              call = _ref31.call, put = _ref31.put;
              _context15.next = 4;
              return call(_systemApi.searchPersonnel, {
                keyWord: keyWord,
                page: page,
                pageSize: pageSize,
                deptId: deptId
              });

            case 4:
              data = _context15.sent;

              if (!data) {
                _context15.next = 8;
                break;
              }

              _context15.next = 8;
              return put({
                type: "packet",
                payload: {
                  dataList1: data.dataList || [],
                  total: data.total,
                  isSearch: keyWord ? true : false
                }
              });

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, searchAllStaffData);
    }),
    // 获取员工部门数据
    deptUserInfo: /*#__PURE__*/_regeneratorRuntime().mark(function deptUserInfo(_ref32, _ref33) {
      var _ref32$payload, deptId, visible3, call, put, data;

      return _regeneratorRuntime().wrap(function deptUserInfo$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _ref32$payload = _ref32.payload, deptId = _ref32$payload.deptId, visible3 = _ref32$payload.visible3;
              call = _ref33.call, put = _ref33.put;
              _context16.next = 4;
              return call(_systemApi.deptUserInfo, {
                deptId: deptId
              });

            case 4:
              data = _context16.sent;

              if (!data) {
                _context16.next = 8;
                break;
              }

              _context16.next = 8;
              return put({
                type: "packet",
                payload: {
                  selectedRows2: data,
                  visible3: visible3
                }
              });

            case 8:
            case "end":
              return _context16.stop();
          }
        }
      }, deptUserInfo);
    }),
    exportDepart: /*#__PURE__*/_regeneratorRuntime().mark(function exportDepart(_ref34, _ref35) {
      var _ref34$payload, hData, state, call, data;

      return _regeneratorRuntime().wrap(function exportDepart$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _ref34$payload = _ref34.payload, hData = _ref34$payload.hData, state = _ref34$payload.state;
              call = _ref35.call;
              _context17.next = 4;
              return call(_api.exportDepart, {
                hData: hData,
                state: state
              });

            case 4:
              data = _context17.sent;

              if (data) {}

            case 6:
            case "end":
              return _context17.stop();
          }
        }
      }, exportDepart);
    }),
    exportInformation: /*#__PURE__*/_regeneratorRuntime().mark(function exportInformation(_ref36, _ref37) {
      var _ref36$payload, hData, state, call, data;

      return _regeneratorRuntime().wrap(function exportInformation$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _ref36$payload = _ref36.payload, hData = _ref36$payload.hData, state = _ref36$payload.state;
              call = _ref37.call;
              _context18.next = 4;
              return call(_systemApi.exportInformation, {
                tableName: 'SUSER',
                condition: ' DEL=0 ',
                objectGridNo: 'default',
                deptId: hData[0].pid === '0' ? 0 : hData[0].id,
                disabled: state
              });

            case 4:
              data = _context18.sent;

              if (data) {}

            case 6:
            case "end":
              return _context18.stop();
          }
        }
      }, exportInformation);
    }),
    exportOrganization: /*#__PURE__*/_regeneratorRuntime().mark(function exportOrganization(_ref38, _ref39) {
      var payload, call, data;
      return _regeneratorRuntime().wrap(function exportOrganization$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              payload = _ref38.payload;
              call = _ref39.call;
              _context19.next = 4;
              return call(_api.exportOrganization);

            case 4:
              data = _context19.sent;

              if (data) {// console.log(data)
              }

            case 6:
            case "end":
              return _context19.stop();
          }
        }
      }, exportOrganization);
    })
  }
};
exports.default = _default;