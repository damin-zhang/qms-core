"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _systemApi = require("../../service/systemApi");

var _antd = require("antd");

var _utils = require("../../utils/utils");

var _excluded = ["selectedRowKeys", "selectedRows", "dataList", "showTab"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'RoleManage',
  state: {
    dataList: [],
    selectedRowKeys: [],
    selectedRows: [],
    namespace: 'RoleManage',
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
              return call(_systemApi.roleQuery, {
                tableName: 'srole'
              });

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
              return call(_systemApi.updateRole, {
                values: values,
                id: record.id
              });

            case 5:
              data = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return call(_systemApi.createRole, {
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
              if (!record.id) {
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
    del: /*#__PURE__*/_regeneratorRuntime().mark(function del(_ref6, _ref7) {
      var hData, call, put, data;
      return _regeneratorRuntime().wrap(function del$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              hData = _ref6.payload.hData;
              call = _ref7.call, put = _ref7.put;
              _context3.next = 4;
              return call(_systemApi.deleteRole, {
                id: hData[0].id
              });

            case 4:
              data = _context3.sent;

              if (!data) {
                _context3.next = 11;
                break;
              }

              _antd.message.info(data.hint);

              _context3.next = 9;
              return put({
                type: 'query'
              });

            case 9:
              _context3.next = 11;
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
              return _context3.stop();
          }
        }
      }, del);
    }),
    queryItem: /*#__PURE__*/_regeneratorRuntime().mark(function queryItem(_ref8, _ref9) {
      var _ref8$payload, objectAData, activeKey, call, put, data, _payload;

      return _regeneratorRuntime().wrap(function queryItem$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref8$payload = _ref8.payload, objectAData = _ref8$payload.objectAData, activeKey = _ref8$payload.activeKey;
              call = _ref9.call, put = _ref9.put;

              if (!(activeKey === '2')) {
                _context4.next = 8;
                break;
              }

              _context4.next = 5;
              return call(_systemApi.queryRoleAuthCode, {
                roleId: objectAData.id
              });

            case 5:
              data = _context4.sent;
              _context4.next = 18;
              break;

            case 8:
              if (!(activeKey === '0')) {
                _context4.next = 15;
                break;
              }

              _context4.next = 11;
              return call(_systemApi.queryPermissions, {
                id: objectAData.id
              });

            case 11:
              data = _context4.sent;

              if (data) {
                data.dataList[0] = (0, _utils.parseMeta)(data.dataList[0]).map(function (item) {
                  item.caption = _utils.isEnglish ? item.ENNAME : item.NAME;
                  item.appDisplay = item.APPDISPLAY;
                  item.icon = item.ICON;
                  item.level = item.LEVEL;
                  item.no = item.NO;
                  return item;
                });
              }

              _context4.next = 18;
              break;

            case 15:
              _context4.next = 17;
              return call(_systemApi.queryRoleUser, {
                objectA: 'srole',
                objectB: 'suser',
                roleId: objectAData.id
              });

            case 17:
              data = _context4.sent;

            case 18:
              if (!data) {
                _context4.next = 21;
                break;
              }

              _context4.next = 21;
              return put({
                type: "packet",
                payload: (_payload = {}, _defineProperty(_payload, "dataList".concat(Number(activeKey) + 1), data.dataList || []), _defineProperty(_payload, "activeKey", activeKey), _payload)
              });

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, queryItem);
    }),
    queryAddRoleUser: /*#__PURE__*/_regeneratorRuntime().mark(function queryAddRoleUser(_ref10, _ref11) {
      var _ref10$payload, roleId, visible3, page, pageSize, call, put, data;

      return _regeneratorRuntime().wrap(function queryAddRoleUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref10$payload = _ref10.payload, roleId = _ref10$payload.roleId, visible3 = _ref10$payload.visible3, page = _ref10$payload.page, pageSize = _ref10$payload.pageSize;
              call = _ref11.call, put = _ref11.put;
              _context5.next = 4;
              return call(_systemApi.queryAddRoleUser, {
                roleId: roleId,
                queryFields: 'ID,NAME,SUNAME',
                page: page,
                pageSize: pageSize
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
                  dataList2_1: data.dataList || [],
                  visible3: visible3,
                  total: data.total,
                  page: page,
                  pageNumber: pageSize,
                  selectedRows2_1: [],
                  selectedRowKeys2_1: []
                }
              });

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, queryAddRoleUser);
    }),
    addRoleUser: /*#__PURE__*/_regeneratorRuntime().mark(function addRoleUser(_ref12, _ref13) {
      var _ref12$payload, hData, objectAData, call, put, select, data, _yield$select, _yield$select$dataLis, dataList2;

      return _regeneratorRuntime().wrap(function addRoleUser$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref12$payload = _ref12.payload, hData = _ref12$payload.hData, objectAData = _ref12$payload.objectAData;
              call = _ref13.call, put = _ref13.put, select = _ref13.select;
              _context6.next = 4;
              return call(_systemApi.addRoleUser, {
                roleId: objectAData.id,
                users: hData
              });

            case 4:
              data = _context6.sent;

              if (!data) {
                _context6.next = 13;
                break;
              }

              _context6.next = 8;
              return select(function (state) {
                return state.RoleManage;
              });

            case 8:
              _yield$select = _context6.sent;
              _yield$select$dataLis = _yield$select.dataList2;
              dataList2 = _yield$select$dataLis === void 0 ? [] : _yield$select$dataLis;
              _context6.next = 13;
              return put({
                type: "queryItem",
                payload: {
                  activeKey: '1',
                  objectAData: objectAData
                }
              });

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, addRoleUser);
    }),
    removeRoleUser: /*#__PURE__*/_regeneratorRuntime().mark(function removeRoleUser(_ref14, _ref15) {
      var _ref14$payload, hData, objectAData, call, put, select, data, _yield$select2, _yield$select2$dataLi, dataList2;

      return _regeneratorRuntime().wrap(function removeRoleUser$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _ref14$payload = _ref14.payload, hData = _ref14$payload.hData, objectAData = _ref14$payload.objectAData;
              call = _ref15.call, put = _ref15.put, select = _ref15.select;
              _context7.next = 4;
              return call(_systemApi.deleteRoleUser, {
                users: hData,
                roleId: objectAData.id
              });

            case 4:
              data = _context7.sent;

              if (!data) {
                _context7.next = 14;
                break;
              }

              _context7.next = 8;
              return select(function (state) {
                return state.RoleManage;
              });

            case 8:
              _yield$select2 = _context7.sent;
              _yield$select2$dataLi = _yield$select2.dataList2;
              dataList2 = _yield$select2$dataLi === void 0 ? [] : _yield$select2$dataLi;
              dataList2.splice(hData[0].index, hData.length);
              _context7.next = 14;
              return put({
                type: "packet",
                payload: {
                  dataList2: dataList2,
                  selectedRows2: [],
                  selectedRowKeys2: []
                }
              });

            case 14:
            case "end":
              return _context7.stop();
          }
        }
      }, removeRoleUser);
    }),
    searchAllUsers: /*#__PURE__*/_regeneratorRuntime().mark(function searchAllUsers(_ref16, _ref17) {
      var _ref16$payload, keyWord, page, pageSize, roleId, call, put, data;

      return _regeneratorRuntime().wrap(function searchAllUsers$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _ref16$payload = _ref16.payload, keyWord = _ref16$payload.keyWord, page = _ref16$payload.page, pageSize = _ref16$payload.pageSize, roleId = _ref16$payload.roleId;
              call = _ref17.call, put = _ref17.put;
              _context8.next = 4;
              return call(_systemApi.queryAddRoleUser, {
                keyWord: keyWord,
                page: page,
                pageSize: pageSize,
                roleId: roleId
              });

            case 4:
              data = _context8.sent;

              if (!data) {
                _context8.next = 8;
                break;
              }

              _context8.next = 8;
              return put({
                type: "packet",
                payload: {
                  dataList2_1: data.dataList || [],
                  total: data.total,
                  isSearch: keyWord ? true : false
                }
              });

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, searchAllUsers);
    }),
    queryAllAuthCode: /*#__PURE__*/_regeneratorRuntime().mark(function queryAllAuthCode(_ref18, _ref19) {
      var roleId, callback, call, data;
      return _regeneratorRuntime().wrap(function queryAllAuthCode$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              roleId = _ref18.payload.roleId, callback = _ref18.callback;
              call = _ref19.call;
              _context9.next = 4;
              return call(_systemApi.queryAllAuthCode, {
                roleId: roleId
              });

            case 4:
              data = _context9.sent;

              if (data) {
                if (callback && typeof callback === 'function') {
                  callback(data.dataList || []);
                }
              }

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      }, queryAllAuthCode);
    }),
    addRoleAuthCode: /*#__PURE__*/_regeneratorRuntime().mark(function addRoleAuthCode(_ref20, _ref21) {
      var _ref20$payload, objectAData, hData, call, put, data;

      return _regeneratorRuntime().wrap(function addRoleAuthCode$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _ref20$payload = _ref20.payload, objectAData = _ref20$payload.objectAData, hData = _ref20$payload.hData;
              call = _ref21.call, put = _ref21.put;
              _context10.next = 4;
              return call(_systemApi.addRoleAuthCode, {
                roleId: objectAData.id,
                hData: hData
              });

            case 4:
              data = _context10.sent;

              if (!data) {
                _context10.next = 9;
                break;
              }

              _antd.message.info(data.hint);

              _context10.next = 9;
              return put({
                type: "queryItem",
                payload: {
                  objectAData: objectAData,
                  activeKey: '2'
                }
              });

            case 9:
            case "end":
              return _context10.stop();
          }
        }
      }, addRoleAuthCode);
    }),
    updateAuthCode: /*#__PURE__*/_regeneratorRuntime().mark(function updateAuthCode(_ref22, _ref23) {
      var _ref22$payload, value, hData, call, put, select, data, _yield$select3, objectAData;

      return _regeneratorRuntime().wrap(function updateAuthCode$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref22$payload = _ref22.payload, value = _ref22$payload.value, hData = _ref22$payload.hData;
              call = _ref23.call, put = _ref23.put, select = _ref23.select;
              _context11.next = 4;
              return call(_systemApi.updateRoleAuthCode, {
                ETIME: value.ETIME,
                hData: hData
              });

            case 4:
              data = _context11.sent;

              if (!data) {
                _context11.next = 15;
                break;
              }

              _antd.message.info(data.hint);

              _context11.next = 9;
              return select(function (state) {
                return state.RoleManage;
              });

            case 9:
              _yield$select3 = _context11.sent;
              objectAData = _yield$select3.objectAData;
              _context11.next = 13;
              return put({
                type: "packet",
                payload: {
                  selectedRows3: hData
                }
              });

            case 13:
              _context11.next = 15;
              return put({
                type: "queryItem",
                payload: {
                  objectAData: objectAData,
                  activeKey: '2'
                }
              });

            case 15:
            case "end":
              return _context11.stop();
          }
        }
      }, updateAuthCode);
    }),
    delAuthCode: /*#__PURE__*/_regeneratorRuntime().mark(function delAuthCode(_ref24, _ref25) {
      var hData, call, put, select, data, _yield$select4, objectAData;

      return _regeneratorRuntime().wrap(function delAuthCode$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              hData = _ref24.payload.hData;
              call = _ref25.call, put = _ref25.put, select = _ref25.select;
              _context12.next = 4;
              return call(_systemApi.deleteRoleAuthCode, {
                hData: hData
              });

            case 4:
              data = _context12.sent;

              if (!data) {
                _context12.next = 15;
                break;
              }

              _antd.message.info(data.hint);

              _context12.next = 9;
              return select(function (state) {
                return state.RoleManage;
              });

            case 9:
              _yield$select4 = _context12.sent;
              objectAData = _yield$select4.objectAData;
              _context12.next = 13;
              return put({
                type: "packet",
                payload: {
                  selectedRows3: [],
                  selectedRowKeys3: []
                }
              });

            case 13:
              _context12.next = 15;
              return put({
                type: "queryItem",
                payload: {
                  objectAData: objectAData,
                  activeKey: '2'
                }
              });

            case 15:
            case "end":
              return _context12.stop();
          }
        }
      }, delAuthCode);
    }),
    save: /*#__PURE__*/_regeneratorRuntime().mark(function save(_ref26, _ref27) {
      var _ref26$payload, values, namespace, callback, call, put, select, data, hint, objectAData, _yield$select5, selectedRowKeys, selectedRows, _yield$select5$dataLi, oldDataList, showTab, rest, dataList, doSth;

      return _regeneratorRuntime().wrap(function save$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _ref26$payload = _ref26.payload, values = _ref26$payload.values, namespace = _ref26$payload.namespace, callback = _ref26.callback;
              call = _ref27.call, put = _ref27.put, select = _ref27.select;

              if (values.implType === 3) {
                values.path = values.implclass;
                delete values.implclass;
              }

              _context13.next = 5;
              return call(_systemApi.roleAuthorization, values);

            case 5:
              data = _context13.sent;

              if (!data) {
                _context13.next = 26;
                break;
              }

              hint = data.hint;
              objectAData = values.objectAData;

              _antd.message.info(hint);

              _context13.next = 12;
              return put({
                type: "queryItem",
                payload: {
                  objectAData: objectAData,
                  activeKey: '0'
                }
              });

            case 12:
              _context13.next = 14;
              return select(function (state) {
                return state[namespace];
              });

            case 14:
              _yield$select5 = _context13.sent;
              selectedRowKeys = _yield$select5.selectedRowKeys;
              selectedRows = _yield$select5.selectedRows;
              _yield$select5$dataLi = _yield$select5.dataList;
              oldDataList = _yield$select5$dataLi === void 0 ? [] : _yield$select5$dataLi;
              showTab = _yield$select5.showTab;
              rest = _objectWithoutProperties(_yield$select5, _excluded);
              dataList = JSON.parse(JSON.stringify(oldDataList));
              doSth = true;

              if (!doSth) {
                _context13.next = 26;
                break;
              }

              _context13.next = 26;
              return put({
                type: "packet",
                payload: {
                  dataList: (0, _utils.generatorTableKey)(dataList),
                  selectedRowKeys: selectedRowKeys,
                  selectedRows: selectedRows,
                  showTab: showTab
                }
              });

            case 26:
            case "end":
              return _context13.stop();
          }
        }
      }, save);
    })
  }
};
exports.default = _default;