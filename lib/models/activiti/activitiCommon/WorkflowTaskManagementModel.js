"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var commonService = _interopRequireWildcard(require("../../../service/api"));

var _systemApi = require("../../../service/systemApi");

var _processApi = require("../../../service/processApi");

var _utils = require("../../../utils/utils");

var _antd = require("antd");

var _Engine = _interopRequireDefault(require("../../../component/engine/Engine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * 工作流任务办理界面
 */
var _default = {
  namespace: 'workflowTaskManagement',
  state: {
    userVisible: false
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    processReverseList: function processReverseList(state, _ref2) {
      var _ref2$payload = _ref2.payload,
          Act = _ref2$payload.Act,
          list = _ref2$payload.list,
          _processReverseList = _ref2$payload.processReverseList,
          isShowButtons = _ref2$payload.isShowButtons,
          taskId = _ref2$payload.taskId,
          processInstanceId = _ref2$payload.processInstanceId,
          activities = _ref2$payload.activities,
          currentLink = _ref2$payload.currentLink;
      return _objectSpread(_objectSpread({}, state), {}, {
        Act: Act,
        list: list,
        processReverseList: _processReverseList,
        isShowButtons: isShowButtons,
        taskId: taskId,
        processInstanceId: processInstanceId,
        activities: activities,
        currentLink: currentLink
      });
    },
    activitiesList: function activitiesList(state, _ref3) {
      var activities = _ref3.payload.activities;
      return _objectSpread(_objectSpread({}, state), {}, {
        activities: activities
      });
    },
    showUser: function showUser(state, _ref4) {
      var _ref4$payload = _ref4.payload,
          userList = _ref4$payload.userList,
          userTreeList = _ref4$payload.userTreeList,
          expandedRowKeys = _ref4$payload.expandedRowKeys;
      state.userVisible = !state.userVisible;
      return _objectSpread(_objectSpread({}, state), {}, {
        userList: userList,
        userTreeList: userTreeList,
        expandedRowKeys: expandedRowKeys
      });
    },
    toogleUser: function toogleUser(state) {
      var userVisible = !state.userVisible;
      return _objectSpread(_objectSpread({}, state), {}, {
        userVisible: userVisible
      });
    },
    onExpandedRowsChange: function onExpandedRowsChange(state, _ref5) {
      var expandedRowKeys = _ref5.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        expandedRowKeys: expandedRowKeys
      });
    },
    onSelectChange: function onSelectChange(state, _ref6) {
      var _ref6$payload = _ref6.payload,
          selectedRowKey = _ref6$payload.selectedRowKey,
          selectedRows = _ref6$payload.selectedRows;
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedRowKey: selectedRowKey,
        selectedRows: selectedRows
      });
    }
  },
  effects: {
    getActinst: /*#__PURE__*/_regeneratorRuntime().mark(function getActinst(_ref7, _ref8) {
      var _ref7$payload, taskId, processInstanceId, isShowButtons, currentLink, objectNo, call, put, allList, pList, engine, namespace, Act, data;

      return _regeneratorRuntime().wrap(function getActinst$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref7$payload = _ref7.payload, taskId = _ref7$payload.taskId, processInstanceId = _ref7$payload.processInstanceId, isShowButtons = _ref7$payload.isShowButtons, currentLink = _ref7$payload.currentLink, objectNo = _ref7$payload.objectNo;
              call = _ref8.call, put = _ref8.put;
              _context.next = 4;
              return put({
                type: 'tab/addTab',
                payload: {
                  namespace: 'workflowTaskManagement',
                  record: {
                    ENNAME: 'Process Details',
                    META: {
                      ENNAME: 'Process Details',
                      NAME: '流程详情'
                    },
                    NAME: '流程详情'
                  }
                }
              });

            case 4:
              _context.next = 6;
              return call(commonService.post, '/meta/metaToWbeClient/getMetaData/act', {
                objectNo: objectNo,
                objectGridNo: 'default',
                objectRelationPageNo: 'default',
                objectPropertyNo: 'default',
                faceType: 2
              });

            case 6:
              allList = _context.sent;
              _context.next = 9;
              return call(commonService.post, '/application/process/getProcessSubList', {
                processInstanceId: processInstanceId
              });

            case 9:
              pList = _context.sent;

              if (!pList) {
                _context.next = 13;
                break;
              }

              _context.next = 13;
              return put({
                type: "packet",
                payload: {
                  selectedRowKey1: [],
                  selectedRows1: []
                }
              });

            case 13:
              //组装页面
              engine = allList;
              namespace = 'activiti';
              engine.condition = "dsno = ".concat(processInstanceId);
              engine.namespace = namespace;
              (0, _utils.judgeModel)(namespace);
              _context.next = 20;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: pList.dataList,
                  namespace: namespace
                }
              });

            case 20:
              Act = (0, _Engine.default)(engine); //获取流程流转信息

              _context.next = 23;
              return call(commonService.post, '/application/process/getProcessReverseList', {
                processInstanceId: processInstanceId
              });

            case 23:
              data = _context.sent;
              _context.next = 26;
              return put({
                type: 'processReverseList',
                payload: {
                  Act: Act,
                  list: pList.dataList,
                  processReverseList: data.dataList,
                  isShowButtons: isShowButtons,
                  taskId: taskId,
                  processInstanceId: processInstanceId,
                  currentLink: currentLink
                }
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, getActinst);
    }),
    getActivities: /*#__PURE__*/_regeneratorRuntime().mark(function getActivities(_ref9, _ref10) {
      var taskId, call, put, activities;
      return _regeneratorRuntime().wrap(function getActivities$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              taskId = _ref9.payload.taskId;
              call = _ref10.call, put = _ref10.put;
              _context2.next = 4;
              return call(commonService.post, '/application/act/task/rebuttable', {
                taskId: taskId
              });

            case 4:
              activities = _context2.sent;
              _context2.next = 7;
              return put({
                type: 'activitiesList',
                payload: {
                  activities: activities.dataList
                }
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, getActivities);
    }),
    showUsers: /*#__PURE__*/_regeneratorRuntime().mark(function showUsers(_ref11, _ref12) {
      var call, put, data, userTreeList, expandedRowKeys, getTreeUserListKeys;
      return _regeneratorRuntime().wrap(function showUsers$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _objectDestructuringEmpty(_ref11);

              call = _ref12.call, put = _ref12.put;
              _context3.next = 4;
              return call(_systemApi.deptGetUserEditor, {});

            case 4:
              data = _context3.sent;

              if (!data.flag) {
                _context3.next = 14;
                break;
              }

              userTreeList = (0, _utils.ergodicRoot)((0, _utils.generatorTableKey)(data.dataList));
              expandedRowKeys = [];

              getTreeUserListKeys = function getTreeUserListKeys(list) {
                list.forEach(function (i) {
                  expandedRowKeys.push(i.key);

                  if (i.children && i.children.length) {
                    getTreeUserListKeys(i.children);
                  }
                });
              };

              getTreeUserListKeys(userTreeList);
              _context3.next = 12;
              return put({
                type: 'showUser',
                payload: {
                  userList: data.dataList,
                  userTreeList: userTreeList,
                  expandedRowKeys: expandedRowKeys
                }
              });

            case 12:
              _context3.next = 15;
              break;

            case 14:
              _antd.message.error(data.msg);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, showUsers);
    }),
    taskTransfer: /*#__PURE__*/_regeneratorRuntime().mark(function taskTransfer(_ref13, _ref14) {
      var _ref13$payload, taskId, name, call, put, data;

      return _regeneratorRuntime().wrap(function taskTransfer$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref13$payload = _ref13.payload, taskId = _ref13$payload.taskId, name = _ref13$payload.name;
              call = _ref14.call, put = _ref14.put;
              _context4.next = 4;
              return call(commonService.post, "/application/act/task/taskTransfer/".concat(taskId), {
                name: name
              });

            case 4:
              data = _context4.sent;

              if (!data.flag) {
                _context4.next = 17;
                break;
              }

              _antd.message.success(data.hint);

              _context4.next = 9;
              return put({
                type: 'toogleUser'
              });

            case 9:
              _context4.next = 11;
              return put({
                type: 'onCancel'
              });

            case 11:
              _context4.next = 13;
              return put({
                type: 'TodoProcess/query',
                payload: {}
              });

            case 13:
              _context4.next = 15;
              return put({
                type: 'tab/closeTab',
                payload: {
                  key: 'workflowTaskManagement',
                  type: 'remove'
                }
              });

            case 15:
              _context4.next = 18;
              break;

            case 17:
              _antd.message.error(data.hint);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, taskTransfer);
    }),
    processTransact: /*#__PURE__*/_regeneratorRuntime().mark(function processTransact(_ref15, _ref16) {
      var _ref15$payload, taskId, processInstanceId, title, url, refreshUrl, visibleConclusion, call, put, data;

      return _regeneratorRuntime().wrap(function processTransact$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref15$payload = _ref15.payload, taskId = _ref15$payload.taskId, processInstanceId = _ref15$payload.processInstanceId, title = _ref15$payload.title, url = _ref15$payload.url, refreshUrl = _ref15$payload.refreshUrl, visibleConclusion = _ref15$payload.visibleConclusion;
              call = _ref16.call, put = _ref16.put;
              _context5.next = 4;
              return call(_processApi.processTransact, {
                taskId: taskId
              });

            case 4:
              data = _context5.sent;

              if (!(data && data.dataList && data.dataList.length)) {
                _context5.next = 10;
                break;
              }

              _context5.next = 8;
              return put({
                type: 'packet',
                payload: {
                  visibleConclusion: !visibleConclusion,
                  transtactList: data.dataList
                }
              });

            case 8:
              _context5.next = 12;
              break;

            case 10:
              _context5.next = 12;
              return put({
                type: 'packet',
                payload: {
                  visibleConclusion: !visibleConclusion,
                  transtactList: []
                }
              });

            case 12:
              _context5.next = 14;
              return put({
                type: 'processOpinion/show',
                payload: {
                  processInstanceId: processInstanceId,
                  title: title,
                  url: url,
                  refreshUrl: refreshUrl
                }
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, processTransact);
    })
  },
  subscriptions: {}
};
exports.default = _default;