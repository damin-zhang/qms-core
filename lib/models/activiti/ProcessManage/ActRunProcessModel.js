"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _Engine = _interopRequireDefault(require("../../../component/engine/Engine"));

var commonService = _interopRequireWildcard(require("../../../service/api"));

var _metaApi = require("../../../service/metaApi");

var _processApi = require("../../../service/processApi");

var _systemApi = require("../../../service/systemApi");

var _queryTabConfigRelationApi = require("../../../utils/queryTabConfigRelationApi");

var _utils = require("../../../utils/utils");

var _excluded = ["namespace"],
    _excluded2 = ["namespace"],
    _excluded3 = ["namespace"],
    _excluded4 = ["namespace"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  namespace: 'RunningProcess',
  state: {},
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  effects: {
    //查询流程
    query: /*#__PURE__*/_regeneratorRuntime().mark(function query(_ref2, _ref3) {
      var _ref2$payload, page, pageSize, keyWord, call, put, api, data;

      return _regeneratorRuntime().wrap(function query$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2$payload = _ref2.payload, page = _ref2$payload.page, pageSize = _ref2$payload.pageSize, keyWord = _ref2$payload.keyWord;
              call = _ref3.call, put = _ref3.put;
              api = keyWord ? _processApi.processGetRunProcessSearch : _processApi.processGetRunProcess;
              _context.next = 5;
              return call(api, {
                keyWord: keyWord,
                page: page || 1,
                pageSize: pageSize || 20
              });

            case 5:
              data = _context.sent;

              if (!data.flag) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return put({
                type: 'packet',
                payload: {
                  list: data.dataList,
                  total: data.total,
                  page: page || 1,
                  pageNumber: pageSize || 20
                }
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, query);
    }),
    getProcessDetails: /*#__PURE__*/_regeneratorRuntime().mark(function getProcessDetails(_ref4, _ref5) {
      var _ref4$payload, processInstanceId, taskId, processDefinitionId, objectNo, hData, enable, call, put, PBList, PNList, objectFormList, _objectFormList$navDa, OBJECTNO, OBJECTGRIDNO, OBJECTRELATIONPAGENO, FACETYPE, params, allList, engine, namespace, Act, historyNode, historyNodeData, namespaceB, modelData, pageTabProps;

      return _regeneratorRuntime().wrap(function getProcessDetails$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref4$payload = _ref4.payload, processInstanceId = _ref4$payload.processInstanceId, taskId = _ref4$payload.taskId, processDefinitionId = _ref4$payload.processDefinitionId, objectNo = _ref4$payload.objectNo, hData = _ref4$payload.hData, enable = _ref4$payload.enable;
              call = _ref5.call, put = _ref5.put;
              _context2.next = 4;
              return call(commonService.post, '/application/process/getProcessSubList', {
                processInstanceId: processInstanceId
              });

            case 4:
              PBList = _context2.sent;
              _context2.next = 7;
              return call(_processApi.queryProcessNode, {
                instanceId: processInstanceId,
                taskId: taskId,
                processDefinitionId: processDefinitionId
              });

            case 7:
              PNList = _context2.sent;
              _context2.next = 10;
              return call(_processApi.queryProcessNodeForm, {
                processDefinitionId: processDefinitionId,
                objectNo: objectNo
              });

            case 10:
              objectFormList = _context2.sent;
              // 获取申请对象模型数据以及申请数据
              _objectFormList$navDa = objectFormList.navData, OBJECTNO = _objectFormList$navDa.OBJECTNO, OBJECTGRIDNO = _objectFormList$navDa.OBJECTGRIDNO, OBJECTRELATIONPAGENO = _objectFormList$navDa.OBJECTRELATIONPAGENO, FACETYPE = _objectFormList$navDa.FACETYPE;
              params = {
                objectNo: OBJECTNO,
                objectGridNo: OBJECTGRIDNO,
                objectRelationPageNo: OBJECTRELATIONPAGENO || 'default',
                faceType: FACETYPE
              };
              _context2.next = 15;
              return call(commonService.post, '/meta/metaToWbeClient/getMetaData/act', params);

            case 15:
              allList = _context2.sent;
              // 流程操作数据表格, 嵌套到流程详情头部
              engine = allList;
              namespace = "activiti-".concat(processInstanceId);
              engine.condition = "dsno = ".concat(processInstanceId);
              engine.namespace = namespace;
              (0, _utils.judgeModel)(namespace);
              _context2.next = 23;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: PBList.dataList,
                  namespace: namespace
                }
              });

            case 23:
              Act = (0, _Engine.default)(engine); // 驳回节点

              historyNode = null;

              if (!enable) {
                _context2.next = 30;
                break;
              }

              _context2.next = 28;
              return call(_processApi.rebuttable, {
                taskId: taskId
              });

            case 28:
              historyNodeData = _context2.sent;

              if (historyNodeData && historyNodeData.flag) {
                historyNode = historyNodeData.dataList;
              }

            case 30:
              // 流程详情页面
              namespaceB = "process-".concat(processInstanceId);
              (0, _utils.judgeModel)(namespaceB);
              modelData = {
                hData: hData,
                PBList: PBList.dataList,
                PNList: PNList.dataList,
                historyList: PNList.historyList,
                objectFormList: objectFormList.dataList,
                objectFieldList: allList.objectPropertyPage.allFieldList,
                Act: Act,
                tableName: objectNo,
                faceType: 'processDetail',
                processInstanceId: processInstanceId,
                taskId: taskId,
                historyNode: historyNode,
                enable: enable
              };
              pageTabProps = {
                namespace: namespaceB,
                modelData: modelData,
                record: {
                  CAPTION: hData[0].title,
                  ICON: null,
                  FACETYPE: 'processDetail'
                }
              };
              _context2.next = 36;
              return put({
                type: 'tab/addTab',
                payload: pageTabProps
              });

            case 36:
              _context2.next = 38;
              return put({
                type: "".concat(namespaceB, "/packet"),
                payload: _objectSpread({}, modelData)
              });

            case 38:
            case "end":
              return _context2.stop();
          }
        }
      }, getProcessDetails);
    }),
    submitSave: /*#__PURE__*/_regeneratorRuntime().mark(function submitSave(_ref6, _ref7) {
      var _ref6$payload, namespace, payload, call, put, data;

      return _regeneratorRuntime().wrap(function submitSave$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6$payload = _ref6.payload, namespace = _ref6$payload.namespace, payload = _objectWithoutProperties(_ref6$payload, _excluded);
              call = _ref7.call, put = _ref7.put;
              _context3.next = 4;
              return call(_processApi.handleProcess, payload);

            case 4:
              data = _context3.sent;

              if (!(data && data.flag)) {
                _context3.next = 18;
                break;
              }

              if (!data.selectUser) {
                _context3.next = 11;
                break;
              }

              _context3.next = 9;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  nextNodeUserModel: true,
                  selectRole: data.selectRole
                }
              });

            case 9:
              _context3.next = 18;
              break;

            case 11:
              _context3.next = 13;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  nextNodeUserModel: false
                }
              });

            case 13:
              _antd.message.success('办理成功!');

              _context3.next = 16;
              return put({
                type: 'tab/closeTab',
                payload: {
                  key: namespace,
                  type: 'remove'
                }
              });

            case 16:
              _context3.next = 18;
              return put({
                type: 'TodoProcess/query',
                payload: {}
              });

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, submitSave);
    }),
    refusalTo: /*#__PURE__*/_regeneratorRuntime().mark(function refusalTo(_ref8, _ref9) {
      var _ref8$payload, namespace, payload, call, put, data;

      return _regeneratorRuntime().wrap(function refusalTo$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref8$payload = _ref8.payload, namespace = _ref8$payload.namespace, payload = _objectWithoutProperties(_ref8$payload, _excluded2);
              call = _ref9.call, put = _ref9.put;
              _context4.next = 4;
              return call(_processApi.rejectTo, payload);

            case 4:
              data = _context4.sent;

              if (!(data && data.flag)) {
                _context4.next = 11;
                break;
              }

              _antd.message.success('驳回成功!');

              _context4.next = 9;
              return put({
                type: 'tab/closeTab',
                payload: {
                  key: namespace,
                  type: 'remove'
                }
              });

            case 9:
              _context4.next = 11;
              return put({
                type: 'TodoProcess/query',
                payload: {}
              });

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, refusalTo);
    }),
    queryUserData: /*#__PURE__*/_regeneratorRuntime().mark(function queryUserData(_ref10, _ref11) {
      var _ref10$payload, namespace, hasUser, call, put, data, userTreeList, expandedRowKeys, getTreeUserListKeys;

      return _regeneratorRuntime().wrap(function queryUserData$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref10$payload = _ref10.payload, namespace = _ref10$payload.namespace, hasUser = _ref10$payload.hasUser;
              call = _ref11.call, put = _ref11.put;

              if (!hasUser) {
                _context5.next = 7;
                break;
              }

              _context5.next = 5;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  userVisible: true
                }
              });

            case 5:
              _context5.next = 19;
              break;

            case 7:
              _context5.next = 9;
              return call(_systemApi.deptGetUserEditor, {});

            case 9:
              data = _context5.sent;

              if (!(data && data.flag)) {
                _context5.next = 19;
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
              _context5.next = 17;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  userVisible: true,
                  userList: data.dataList,
                  userTreeList: userTreeList
                }
              });

            case 17:
              _context5.next = 19;
              return put({
                type: 'TodoProcess/query',
                payload: {}
              });

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, queryUserData);
    }),
    entrustTo: /*#__PURE__*/_regeneratorRuntime().mark(function entrustTo(_ref12, _ref13) {
      var _ref12$payload, namespace, params, call, put, data;

      return _regeneratorRuntime().wrap(function entrustTo$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref12$payload = _ref12.payload, namespace = _ref12$payload.namespace, params = _objectWithoutProperties(_ref12$payload, _excluded3);
              call = _ref13.call, put = _ref13.put;
              _context6.next = 4;
              return call(_processApi.taskTransfer, params);

            case 4:
              data = _context6.sent;

              if (!(data && data.flag)) {
                _context6.next = 13;
                break;
              }

              _antd.message.success('委托成功!');

              _context6.next = 9;
              return put({
                type: 'tab/closeTab',
                payload: {
                  key: namespace,
                  type: 'remove'
                }
              });

            case 9:
              _context6.next = 11;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  userVisible: false,
                  selectedRowKey: [],
                  selectedRows: []
                }
              });

            case 11:
              _context6.next = 13;
              return put({
                type: 'TodoProcess/query',
                payload: {}
              });

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, entrustTo);
    }),
    revoke: /*#__PURE__*/_regeneratorRuntime().mark(function revoke(_ref14, _ref15) {
      var _ref14$payload, namespace, params, call, put, data;

      return _regeneratorRuntime().wrap(function revoke$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _ref14$payload = _ref14.payload, namespace = _ref14$payload.namespace, params = _objectWithoutProperties(_ref14$payload, _excluded4);
              call = _ref15.call, put = _ref15.put;
              _context7.next = 4;
              return call(_processApi.processRevoke, params);

            case 4:
              data = _context7.sent;

              if (!(data && data.flag)) {
                _context7.next = 11;
                break;
              }

              _antd.message.success('流程已终止!');

              _context7.next = 9;
              return put({
                type: 'tab/closeTab',
                payload: {
                  key: namespace,
                  type: 'remove'
                }
              });

            case 9:
              _context7.next = 11;
              return put({
                type: 'TodoProcess/query',
                payload: {}
              });

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, revoke);
    })
  },
  subscriptions: {
    setup: function setup(_ref16) {
      var dispatch = _ref16.dispatch,
          history = _ref16.history;
      history.listen(function (location) {
        var index = location.pathname.indexOf('_');
        var id = location.pathname.substr(index);

        switch (location.pathname) {
          case "/act/activiti/ProcessManage/ActRunProcess".concat(id):
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
exports.default = _default;