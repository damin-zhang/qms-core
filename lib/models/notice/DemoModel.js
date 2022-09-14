"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var commonService = _interopRequireWildcard(require("../../service/api"));

var _communicationApi = require("../../service/communicationApi");

var _metaApi = require("../../service/metaApi");

var _customPage = require("../../utils/customPage");

var _Engine = _interopRequireDefault(require("../../component/engine/Engine"));

var _ReportHoc = _interopRequireDefault(require("../../component/engine/layout/ReportHoc"));

var _utils = require("../../utils/utils");

var _mapParams = require("../../utils/mapParams");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'UpcomingTasks',
  state: {
    activeKeyTodoTask: '0'
  },
  reducers: {
    relationTabs: function relationTabs(state, _ref) {
      var _relationTabs = _ref.payload.relationTabs;
      return _objectSpread(_objectSpread({}, state), {}, {
        relationTabs: _relationTabs
      });
    },
    selection: function selection(state, _ref2) {
      var _ref2$payload = _ref2.payload,
          selectedRowKey = _ref2$payload.selectedRowKey,
          selectedRows = _ref2$payload.selectedRows;
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedRowKey: selectedRowKey,
        selectedRows: selectedRows
      });
    },
    noticeList: function noticeList(state, _ref3) {
      var _noticeList = _ref3.payload.noticeList;
      return _objectSpread(_objectSpread({}, state), {}, {
        noticeList: _noticeList
      });
    },
    update: function update(state, _ref4) {
      var payload = _ref4.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  effects: {
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref5, _ref6) {
      var _ref5$payload, _ref5$payload$activeK, activeKeyTodoTask, webSocket, id, selectedRows, _ref5$payload$filterT, filterTodoTask, call, put, values, noticeList;

      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref5$payload = _ref5.payload, _ref5$payload$activeK = _ref5$payload.activeKeyTodoTask, activeKeyTodoTask = _ref5$payload$activeK === void 0 ? 0 : _ref5$payload$activeK, webSocket = _ref5$payload.webSocket, id = _ref5$payload.id, selectedRows = _ref5$payload.selectedRows, _ref5$payload$filterT = _ref5$payload.filterTodoTask, filterTodoTask = _ref5$payload$filterT === void 0 ? false : _ref5$payload$filterT;
              call = _ref6.call, put = _ref6.put;
              values = {
                status: activeKeyTodoTask
              };
              _context.next = 5;
              return call(_communicationApi.taskTodo, values);

            case 5:
              noticeList = _context.sent;

              if (!id) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return put({
                type: 'selection',
                payload: {
                  selectedRowKey: [id],
                  selectedRows: selectedRows
                }
              });

            case 9:
              if (!webSocket) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return put({
                type: 'notice/packet',
                payload: {
                  toDoList: noticeList.dataList
                }
              });

            case 12:
              _context.next = 16;
              break;

            case 14:
              _context.next = 16;
              return put({
                type: 'noticeList',
                payload: {
                  noticeList: noticeList.dataList
                }
              });

            case 16:
              if (!filterTodoTask) {
                _context.next = 19;
                break;
              }

              _context.next = 19;
              return put({
                type: 'notice/packet',
                payload: {
                  filterTodoTaskList: selectedRows
                }
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    loadPage: /*#__PURE__*/_regeneratorRuntime().mark(function loadPage(_ref7, _ref8) {
      var payload, call, put, MODELSINFO, panes;
      return _regeneratorRuntime().wrap(function loadPage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref7.payload;
              call = _ref8.call, put = _ref8.put;
              MODELSINFO = payload.MODELSINFO;
              panes = []; // console.log('MODELSINFO', MODELSINFO)

              MODELSINFO.forEach(function (item) {
                var Cmp = null;
                var record = item;
                var faceType = item.faceType;
                var _item$navigation = item.navigation,
                    ICON = _item$navigation.ICON,
                    PARAMS = _item$navigation.PARAMS;

                var modelData = _objectSpread({}, item);

                var namespace = 'todo-' + item.navigation.id;
                var CAPTION = item.navigation.CAPTION;

                if (faceType === 6) {
                  var _JSON$parse = JSON.parse(PARAMS || {}),
                      url = _JSON$parse.url,
                      isBddp = _JSON$parse.isBddp,
                      reportId = _JSON$parse.reportId,
                      reportIP = _JSON$parse.reportIP;

                  Cmp = (0, _ReportHoc.default)({
                    title: CAPTION,
                    url: url,
                    isBddp: isBddp,
                    reportId: reportId,
                    reportIP: reportIP
                  });
                } else if (faceType === 7) {
                  var params = JSON.parse(PARAMS || {});
                  Cmp = (0, _Engine.default)(_objectSpread(_objectSpread({}, modelData), {}, {
                    params: params,
                    namespace: namespace,
                    CAPTION: CAPTION
                  }));
                } else if (faceType) {
                  Cmp = (0, _Engine.default)(_objectSpread(_objectSpread({}, modelData), {}, {
                    namespace: namespace,
                    CAPTION: CAPTION
                  }));
                } else {
                  var page = _customPage.customPage.find(function (item) {
                    return item.NO === namespace;
                  });

                  if (!page) return _objectSpread({}, item);
                  Cmp = page.COMPONENT;
                  CAPTION = page.CAPTION;
                }

                var pane = {
                  caption: CAPTION,
                  icon: ICON,
                  Cmp: /*#__PURE__*/_react.default.createElement(Cmp, null),
                  key: namespace,
                  record: record
                };
                panes.push(pane);
                (0, _utils.judgeModel)(namespace);
              });
              _context2.next = 7;
              return put({
                type: 'update',
                payload: {
                  panes: panes,
                  activeKey: MODELSINFO.length ? panes[0].key : ''
                }
              });

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, loadPage);
    }),
    addTab: /*#__PURE__*/_regeneratorRuntime().mark(function addTab(_ref9, _ref10) {
      var payload, call, put, _payload$record, PARAMS, faceType, SUPQUERY, key, tableName, objectGridNo, objectNo, classNodeObjectNo, navigation, taskTodoId, id, no, namespace, modelData, data, META, pageNo;

      return _regeneratorRuntime().wrap(function addTab$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref9.payload;
              call = _ref10.call, put = _ref10.put;
              _payload$record = payload.record, PARAMS = _payload$record.PARAMS, faceType = _payload$record.faceType, SUPQUERY = _payload$record.SUPQUERY, key = _payload$record.key, tableName = _payload$record.tableName, objectGridNo = _payload$record.objectGridNo, objectNo = _payload$record.objectNo, classNodeObjectNo = _payload$record.classNodeObjectNo, navigation = _payload$record.navigation;
              taskTodoId = payload.selectedRow.id;
              id = payload.record.navigation.id;
              no = payload.record.objectGrid.no; // PARAMS = JSON.parse(PARAMS)
              // console.log(payload);

              namespace = 'todo-' + id;
              modelData = _objectSpread({
                supQuery: SUPQUERY,
                pageId: id
              }, payload); // 查询数据

              data = {
                selectedRowKeys: [],
                selectedRows: [],
                showTab: false,
                // condition,
                params: PARAMS,
                namespace: namespace,
                // objectNo,
                tableName: tableName // sortFields

              };

              if (!(faceType === 4)) {
                _context3.next = 19;
                break;
              }

              data.objectNo = classNodeObjectNo;
              _context3.next = 13;
              return put({
                type: 'common/queryClassNodeData',
                payload: {
                  objectNo: objectNo,
                  tableName: tableName,
                  namespace: namespace,
                  classNodeObjectNo: classNodeObjectNo
                }
              });

            case 13:
              if (!modelData.objectMeta) {
                _context3.next = 17;
                break;
              }

              data.objectBNameSpace = namespace + "-0";
              _context3.next = 17;
              return put({
                type: 'popup/loadSubpage',
                payload: {
                  objectmRelationPage: [{
                    relationPageSign: _objectSpread(_objectSpread({}, modelData.objectMeta), {}, {
                      PARAMS: PARAMS
                    }),
                    rType: 'classRelationpage',
                    id: modelData.objectMeta.objectID,
                    supQuery: SUPQUERY,
                    objectNo: objectNo,
                    tableName: tableName
                  }],
                  objectANamespace: namespace,
                  objectA: objectNo || tableName
                }
              });

            case 17:
              _context3.next = 35;
              break;

            case 19:
              if (!(faceType === 5)) {
                _context3.next = 25;
                break;
              }

              if (!modelData.classViewNodeList) {
                _context3.next = 23;
                break;
              }

              _context3.next = 23;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  treeData: modelData.classViewNodeList,
                  dataList: []
                }
              });

            case 23:
              _context3.next = 35;
              break;

            case 25:
              if (!(faceType === 7)) {
                _context3.next = 30;
                break;
              }

              _context3.next = 28;
              return put({
                type: 'common/queryCalendarViewAllData',
                payload: {
                  objectNo: objectNo,
                  otherParam: _objectSpread({}, PARAMS),
                  namespace: namespace
                }
              });

            case 28:
              _context3.next = 35;
              break;

            case 30:
              if (!(faceType !== 22)) {
                _context3.next = 35;
                break;
              }

              META = JSON.parse(navigation.META);
              pageNo = META.NO;
              _context3.next = 35;
              return put({
                type: 'common/querySingleData',
                payload: {
                  namespace: namespace,
                  pageSize: 20,
                  objectGridNo: no,
                  tableName: tableName,
                  objectNo: objectNo,
                  condition: "EXISTS (SELECT 1 FROM TASK_TODO_SHIP WHERE DEL=0 AND ITEMNO='".concat(tableName, "' AND PAGENO='").concat(pageNo, "' AND TASKTODOID='").concat(taskTodoId, "' AND OBJID=").concat(tableName, ".ID)")
                }
              });

            case 35:
              _context3.next = 37;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: data
              });

            case 37:
            case "end":
              return _context3.stop();
          }
        }
      }, addTab);
    }),
    // 获取待办任务tab建模数据
    getModel: /*#__PURE__*/_regeneratorRuntime().mark(function getModel(_ref11, _ref12) {
      var selectedRows, call, put, data, modelDataList;
      return _regeneratorRuntime().wrap(function getModel$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              selectedRows = _ref11.payload.selectedRows;
              call = _ref12.call, put = _ref12.put;
              _context4.next = 4;
              return call(_metaApi.todoTaskMetaToWbeClient, {
                id: selectedRows[0].id
              });

            case 4:
              data = _context4.sent;

              if (!data) {
                _context4.next = 9;
                break;
              }

              modelDataList = data.dataList ? data.dataList : [];
              _context4.next = 9;
              return put({
                type: 'loadPage',
                payload: {
                  MODELSINFO: modelDataList
                }
              });

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, getModel);
    })
  }
};
exports.default = _default;