function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["selectedRowKeys", "selectedRows", "dataList", "showTab"],
    _excluded2 = ["namespace", "page", "pageSize", "dataList", "typeField", "tabActiveKey", "tableName"],
    _excluded3 = ["namespace", "page", "dataList"],
    _excluded4 = ["namespace", "page", "pageSize", "dataList", "rType", "objectNo", "relationObject", "objectA", "objectAData", "relevanceNo", "pageNo"],
    _excluded5 = ["namespace", "page", "dataList", "classNodeTableName", "tableName"],
    _excluded6 = ["namespace", "page", "pageSize", "dataList", "classNodeData", "moveNodeData", "objectNo", "classObjectNo"],
    _excluded7 = ["namespace", "page", "dataList", "objectA"],
    _excluded8 = ["namespace", "page", "pageSize", "dataList", "objectNo"],
    _excluded9 = ["namespace", "dataList"],
    _excluded10 = ["namespace", "page", "pageSize", "dataList", "searchFields"],
    _excluded11 = ["namespace", "page", "pageSize", "dataList", "queryWord"],
    _excluded12 = ["namespace", "dataList", "data", "hData", "onCancel"],
    _excluded13 = ["namespace", "hData", "onCancel"],
    _excluded14 = ["namespace"],
    _excluded15 = ["namespace"];

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 通用model 用于公共相似业务
 */
import { commonApiAxios } from '../../service/api';
import { systemAuthcodeQuery } from '../../service/systemApi';
import { moveRow as _moveRow, moveMenu, refreshAutoClassTree as _refreshAutoClassTree } from '../../service/metaApi';
import { queryCalendarViewAllData as _queryCalendarViewAllData } from '../../service/queryDataApi';
import { commonApi, queryMenuEnable } from '../../service/applicationApi';
import { downloadFiles } from '../../service/uploadApi';
import { taskTodo } from '../../service/communicationApi';
import { commonSingleQuery, commonSingleQueryNoPaging, querySubPageModel, queryClassObjectData as _queryClassObjectData, commonLikeQuery, queryRelationViewSubPageModel, queryAutoClassObjectData, queryInputData, queryOutputData, queryProcessDetailData } from '../../service/queryDataApi';
import { implclassMap } from '../../utils/mapParams';
import { message } from 'antd';
import { generatorTableKey, judgeModel } from '../../utils/utils';
import language from '@/locale/language';
import { develop } from '../../service/developApi';
var fields = language.activiti.Process_instance.fields;
export default {
  namespace: 'common',
  state: {},
  effects: {
    // 保存（配置页面通用请求）
    save: /*#__PURE__*/_regeneratorRuntime().mark(function save(_ref, _ref2) {
      var _ref$payload, values, namespace, pageId, tabCountData, engine, wType, dataTotal, callback, call, put, select, data, hData, _data, hint, responseType, _data$dataList, newDataList, _yield$select, selectedRowKeys, selectedRows, _yield$select$dataLis, oldDataList, showTab, rest, dataList, doSth, otherParams, noticeList;

      return _regeneratorRuntime().wrap(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$payload = _ref.payload, values = _ref$payload.values, namespace = _ref$payload.namespace, pageId = _ref$payload.pageId, tabCountData = _ref$payload.tabCountData, engine = _ref$payload.engine, wType = _ref$payload.wType, dataTotal = _ref$payload.dataTotal, callback = _ref.callback;
              call = _ref2.call, put = _ref2.put, select = _ref2.select;

              if (wType === undefined) {
                wType = values.wType && values.wType;
              }

              if (values.implType === 3) {
                values.path = values.implClass;
                delete values.implClass;
              } // let data = wType === 'dataImport' ? yield call(commonApi, values) : yield call(commonApi, values)


              hData = values.hData;

              if (!(wType === 'downLoad' && values.implType === 3)) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return call(downloadFiles, values);

            case 8:
              data = _context.sent;
              _context.next = 27;
              break;

            case 11:
              if (!(wType !== 'downLoad' && values.implType === 3)) {
                _context.next = 17;
                break;
              }

              _context.next = 14;
              return call(develop, _objectSpread({
                path: values.path
              }, values));

            case 14:
              data = _context.sent;
              _context.next = 27;
              break;

            case 17:
              if (!(wType === 'dataImport')) {
                _context.next = 23;
                break;
              }

              _context.next = 20;
              return call(commonApi, values);

            case 20:
              _context.t0 = _context.sent;
              _context.next = 26;
              break;

            case 23:
              _context.next = 25;
              return call(commonApi, values);

            case 25:
              _context.t0 = _context.sent;

            case 26:
              data = _context.t0;

            case 27:
              if (!data) {
                _context.next = 91;
                break;
              }

              _data = data, hint = _data.hint, responseType = _data.responseType, _data$dataList = _data.dataList, newDataList = _data$dataList === void 0 ? [] : _data$dataList;

              if (!(wType === 'processInstanceList' && data.processState === 0)) {
                _context.next = 38;
                break;
              }

              if (!newDataList.length) {
                _context.next = 35;
                break;
              }

              _context.next = 33;
              return put({
                type: 'ProcessInstance/packet',
                payload: {
                  dataListProcessList: newDataList,
                  processValues: values,
                  processNamespace: namespace,
                  engine: engine,
                  wType: wType,
                  dataTotal: dataTotal,
                  visibleProcess: true,
                  total: data.total
                }
              });

            case 33:
              _context.next = 37;
              break;

            case 35:
              message.info(fields.noProcess, 3);
              return _context.abrupt("return");

            case 37:
              return _context.abrupt("return");

            case 38:
              message.info(hint); // 操作成功，执行回调函数关闭弹窗

              if (callback && typeof callback === 'function') {
                callback(data);
              }

              _context.next = 42;
              return select(function (state) {
                return state[namespace];
              });

            case 42:
              _yield$select = _context.sent;
              selectedRowKeys = _yield$select.selectedRowKeys;
              selectedRows = _yield$select.selectedRows;
              _yield$select$dataLis = _yield$select.dataList;
              oldDataList = _yield$select$dataLis === void 0 ? [] : _yield$select$dataLis;
              showTab = _yield$select.showTab;
              rest = _objectWithoutProperties(_yield$select, _excluded);
              dataList = JSON.parse(JSON.stringify(oldDataList));
              doSth = true;
              otherParams = {};
              _context.t1 = responseType;
              _context.next = _context.t1 === 'N' ? 55 : _context.t1 === 'RAP' ? 61 : _context.t1 === 'M' ? 64 : _context.t1 === 'D' ? 74 : _context.t1 === 'A' ? 80 : _context.t1 === 'NDW' ? 82 : 84;
              break;

            case 55:
              // 新增
              // dataList = dataList.concat(newDataList)
              dataList = [].concat(_toConsumableArray(newDataList), _toConsumableArray(dataList)); // 选中新增数据

              selectedRows = [_objectSpread(_objectSpread({}, newDataList[0]), {}, {
                index: dataList.length - 1
              })];
              selectedRowKeys[0] = newDataList[0].ID;
              otherParams.addTotal = 1;
              dataTotal += 1;
              return _context.abrupt("break", 85);

            case 61:
              _context.next = 63;
              return put({
                type: 'popup/loadSubpage',
                payload: {
                  objectRelationPage: engine.objectRelationPage,
                  objectANamespace: namespace,
                  objectAData: values.hData[0],
                  objectA: engine.objectNo
                }
              });

            case 63:
              return _context.abrupt("break", 85);

            case 64:
              // 修改
              hData.forEach(function (item, index) {
                dataList[item.index] = newDataList[index];
                selectedRowKeys[index] = newDataList[index].ID;
                selectedRows[index] = _objectSpread(_objectSpread({}, newDataList[index]), {}, {
                  key: newDataList[index].ID,
                  index: item.index
                });
              }); // 待办任务

              if (!(namespace.substr(0, 5) === 'todo-')) {
                _context.next = 73;
                break;
              }

              _context.next = 68;
              return put({
                type: 'UpcomingTasks/query',
                payload: {}
              });

            case 68:
              _context.next = 70;
              return call(taskTodo, {
                status: 0
              });

            case 70:
              noticeList = _context.sent;
              _context.next = 73;
              return put({
                type: 'notice/packet',
                payload: {
                  toDoList: noticeList.dataList
                }
              });

            case 73:
              return _context.abrupt("break", 85);

            case 74:
              // 删除
              showTab = false;
              hData.sort(function (a, b) {
                return b.index - a.index;
              });
              hData.forEach(function (item) {
                dataList.splice(item.index, 1);
              });
              selectedRowKeys = [];
              selectedRows = [];
              return _context.abrupt("break", 85);

            case 80:
              // 添加
              dataList = dataList.concat(newDataList);
              return _context.abrupt("break", 85);

            case 82:
              // 不做数据更新
              doSth = false;
              return _context.abrupt("break", 85);

            case 84:
              return _context.abrupt("break", 85);

            case 85:
              if (!doSth) {
                _context.next = 91;
                break;
              }

              _context.next = 88;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: generatorTableKey(dataList),
                  selectedRowKeys: selectedRowKeys,
                  selectedRows: selectedRows,
                  dataTotal: dataTotal
                }
              });

            case 88:
              if (!tabCountData) {
                _context.next = 91;
                break;
              }

              _context.next = 91;
              return put({
                type: "tab/queryDataClassFieldTotal",
                payload: {
                  namespace: namespace,
                  pageId: pageId
                }
              });

            case 91:
            case "end":
              return _context.stop();
          }
        }
      }, save);
    }),
    // 表格拖拽排序
    moveRow: /*#__PURE__*/_regeneratorRuntime().mark(function moveRow(_ref3, _ref4) {
      var payload, call, select, newList, isTree, listType, namespace, afterDragFunc, _yield$select2, tableName, objectTableName, data;

      return _regeneratorRuntime().wrap(function moveRow$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              call = _ref4.call, select = _ref4.select;
              newList = payload.newList, isTree = payload.isTree, listType = payload.listType, namespace = payload.namespace, afterDragFunc = payload.afterDragFunc;
              _context2.next = 5;
              return select(function (state) {
                return state[namespace];
              });

            case 5:
              _yield$select2 = _context2.sent;
              tableName = _yield$select2.tableName;
              objectTableName = _yield$select2.objectTableName;
              _context2.next = 10;
              return call(isTree ? moveMenu : _moveRow, {
                hData: newList,
                tableName: listType ? objectTableName : tableName
              });

            case 10:
              data = _context2.sent;

              if (data) {
                message.info(data.hint);
                afterDragFunc();
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, moveRow);
    }),
    // 查询单对象数据
    querySingleData: /*#__PURE__*/_regeneratorRuntime().mark(function querySingleData(_ref5, _ref6) {
      var _ref5$payload, namespace, _ref5$payload$page, page, _ref5$payload$pageSiz, pageSize, _ref5$payload$dataLis, dataList, typeField, tabActiveKey, tableName, rest, call, put, params, data;

      return _regeneratorRuntime().wrap(function querySingleData$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref5$payload = _ref5.payload, namespace = _ref5$payload.namespace, _ref5$payload$page = _ref5$payload.page, page = _ref5$payload$page === void 0 ? 1 : _ref5$payload$page, _ref5$payload$pageSiz = _ref5$payload.pageSize, pageSize = _ref5$payload$pageSiz === void 0 ? 20 : _ref5$payload$pageSiz, _ref5$payload$dataLis = _ref5$payload.dataList, dataList = _ref5$payload$dataLis === void 0 ? [] : _ref5$payload$dataLis, typeField = _ref5$payload.typeField, tabActiveKey = _ref5$payload.tabActiveKey, tableName = _ref5$payload.tableName, rest = _objectWithoutProperties(_ref5$payload, _excluded2);
              call = _ref6.call, put = _ref6.put;
              // console.log('查询单对象数据', tableName, rest)
              params = _objectSpread({}, rest);

              if (tabActiveKey) {
                params = _objectSpread(_objectSpread({}, params), {}, {
                  otherParam: {
                    typeField: typeField,
                    typeFieldValue: tabActiveKey
                  }
                });
              }

              if (!(tableName === 'AUTHCODE')) {
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
              return call(systemAuthcodeQuery, {
                page: page,
                pageSize: pageSize,
                tableName: 'AUTHCODE'
              });

            case 7:
              data = _context3.sent;
              _context3.next = 13;
              break;

            case 10:
              _context3.next = 12;
              return call(commonSingleQuery, _objectSpread({
                page: page,
                pageSize: pageSize,
                tableName: tableName
              }, params));

            case 12:
              data = _context3.sent;

            case 13:
              if (!data) {
                _context3.next = 16;
                break;
              }

              _context3.next = 16;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  page: page,
                  pageSize: pageSize,
                  dataTotal: data.total,
                  implClass: implclassMap.querySingleData,
                  queryName: 'common/querySingleData',
                  queryApi: tableName === 'AUTHCODE' ? systemAuthcodeQuery : commonSingleQuery,
                  namespace: namespace,
                  queryParams: _objectSpread({
                    tableName: tableName
                  }, params)
                }
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, querySingleData);
    }),
    // 查询单对象数据--待办任务
    querySingleDataTodo: /*#__PURE__*/_regeneratorRuntime().mark(function querySingleDataTodo(_ref7, _ref8) {
      var _ref7$payload, namespace, _ref7$payload$page, page, _ref7$payload$dataLis, dataList, rest, call, put, data;

      return _regeneratorRuntime().wrap(function querySingleDataTodo$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ref7$payload = _ref7.payload, namespace = _ref7$payload.namespace, _ref7$payload$page = _ref7$payload.page, page = _ref7$payload$page === void 0 ? 1 : _ref7$payload$page, _ref7$payload$dataLis = _ref7$payload.dataList, dataList = _ref7$payload$dataLis === void 0 ? [] : _ref7$payload$dataLis, rest = _objectWithoutProperties(_ref7$payload, _excluded3);
              call = _ref8.call, put = _ref8.put;
              _context4.next = 4;
              return call(commonApi, _objectSpread({
                page: page
              }, rest));

            case 4:
              data = _context4.sent;

              if (!data) {
                _context4.next = 8;
                break;
              }

              _context4.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  page: data.dataList.length > 0 ? page : page - 1,
                  queryName: 'common/querySingleDataTodo',
                  queryParams: _objectSpread({
                    namespace: namespace
                  }, rest)
                }
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, querySingleDataTodo);
    }),
    //  itemB: objectNo, relationItem: relevanceNo, itemA: ?, itemAID
    // 查询子页面数据
    querySubPageData: /*#__PURE__*/_regeneratorRuntime().mark(function querySubPageData(_ref9, _ref10) {
      var _ref9$payload, namespace, _ref9$payload$page, page, _ref9$payload$pageSiz, pageSize, _ref9$payload$dataLis, dataList, rType, objectNo, relationObject, objectA, objectAData, relevanceNo, pageNo, rest, call, put, data;

      return _regeneratorRuntime().wrap(function querySubPageData$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref9$payload = _ref9.payload, namespace = _ref9$payload.namespace, _ref9$payload$page = _ref9$payload.page, page = _ref9$payload$page === void 0 ? 1 : _ref9$payload$page, _ref9$payload$pageSiz = _ref9$payload.pageSize, pageSize = _ref9$payload$pageSiz === void 0 ? 20 : _ref9$payload$pageSiz, _ref9$payload$dataLis = _ref9$payload.dataList, dataList = _ref9$payload$dataLis === void 0 ? [] : _ref9$payload$dataLis, rType = _ref9$payload.rType, objectNo = _ref9$payload.objectNo, relationObject = _ref9$payload.relationObject, objectA = _ref9$payload.objectA, objectAData = _ref9$payload.objectAData, relevanceNo = _ref9$payload.relevanceNo, pageNo = _ref9$payload.pageNo, rest = _objectWithoutProperties(_ref9$payload, _excluded4);
              call = _ref10.call, put = _ref10.put;
              // console.log('查询子页面数据')
              data = null;

              if (!(rType === 'relationqueryview')) {
                _context5.next = 9;
                break;
              }

              _context5.next = 6;
              return call(queryRelationViewSubPageModel, {
                page: page,
                pageSize: pageSize,
                tableName: objectNo,
                jsonData: objectAData,
                relationObject: relevanceNo,
                objectA: objectA
              });

            case 6:
              data = _context5.sent;
              _context5.next = 30;
              break;

            case 9:
              if (!(rType === 'input')) {
                _context5.next = 15;
                break;
              }

              _context5.next = 12;
              return call(queryInputData, {
                jsonData: objectAData,
                page: page,
                pageSize: pageSize
              });

            case 12:
              data = _context5.sent;
              _context5.next = 30;
              break;

            case 15:
              if (!(rType === 'output')) {
                _context5.next = 21;
                break;
              }

              _context5.next = 18;
              return call(queryOutputData, {
                jsonData: objectAData,
                page: page,
                pageSize: pageSize
              });

            case 18:
              data = _context5.sent;
              _context5.next = 30;
              break;

            case 21:
              if (!(rType === 'processDetail')) {
                _context5.next = 27;
                break;
              }

              _context5.next = 24;
              return call(queryProcessDetailData, {
                jsonData: objectAData,
                tableName: objectNo,
                objectA: objectA
              });

            case 24:
              data = _context5.sent;
              _context5.next = 30;
              break;

            case 27:
              _context5.next = 29;
              return call(querySubPageModel, {
                page: page,
                pageSize: pageSize,
                objectB: objectNo,
                relationObject: relationObject,
                objectA: objectA,
                objectAID: objectAData.ID,
                relevanceNo: relevanceNo
              });

            case 29:
              data = _context5.sent;

            case 30:
              if (!data) {
                _context5.next = 33;
                break;
              }

              _context5.next = 33;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  objectAPageNo: pageNo,
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total || 0,
                  page: data.dataList.length > 0 ? page : page - 1,
                  pageSize: pageSize,
                  queryName: 'common/querySubPageData',
                  queryApi: querySubPageModel,
                  queryParams: {
                    objectB: objectNo,
                    relationObject: relationObject,
                    objectA: objectA,
                    objectAID: objectAData.ID,
                    relevanceNo: relevanceNo
                  }
                }
              });

            case 33:
            case "end":
              return _context5.stop();
          }
        }
      }, querySubPageData);
    }),
    // 查询分类视图节点树
    queryClassNodeData: /*#__PURE__*/_regeneratorRuntime().mark(function queryClassNodeData(_ref11, _ref12) {
      var _ref11$payload, namespace, _ref11$payload$page, page, _ref11$payload$dataLi, dataList, classNodeTableName, tableName, rest, call, put, data;

      return _regeneratorRuntime().wrap(function queryClassNodeData$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref11$payload = _ref11.payload, namespace = _ref11$payload.namespace, _ref11$payload$page = _ref11$payload.page, page = _ref11$payload$page === void 0 ? 1 : _ref11$payload$page, _ref11$payload$dataLi = _ref11$payload.dataList, dataList = _ref11$payload$dataLi === void 0 ? [] : _ref11$payload$dataLi, classNodeTableName = _ref11$payload.classNodeTableName, tableName = _ref11$payload.tableName, rest = _objectWithoutProperties(_ref11$payload, _excluded5);
              call = _ref12.call, put = _ref12.put;
              _context6.next = 4;
              return call(commonSingleQueryNoPaging, _objectSpread(_objectSpread({}, rest), {}, {
                implclass: implclassMap.queryClassNodeData,
                tableName: classNodeTableName,
                condition: "OBJECTNO='".concat(tableName, "'")
              }));

            case 4:
              data = _context6.sent;

              if (!data) {
                _context6.next = 8;
                break;
              }

              _context6.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total || 0
                }
              });

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, queryClassNodeData);
    }),
    // 查询分类视图节点树对应数据
    queryClassObjectData: /*#__PURE__*/_regeneratorRuntime().mark(function queryClassObjectData(_ref13, _ref14) {
      var _ref13$payload, namespace, _ref13$payload$page, page, _ref13$payload$pageSi, pageSize, _ref13$payload$dataLi, dataList, classNodeData, moveNodeData, objectNo, classObjectNo, rest, call, put, data;

      return _regeneratorRuntime().wrap(function queryClassObjectData$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _ref13$payload = _ref13.payload, namespace = _ref13$payload.namespace, _ref13$payload$page = _ref13$payload.page, page = _ref13$payload$page === void 0 ? 1 : _ref13$payload$page, _ref13$payload$pageSi = _ref13$payload.pageSize, pageSize = _ref13$payload$pageSi === void 0 ? 20 : _ref13$payload$pageSi, _ref13$payload$dataLi = _ref13$payload.dataList, dataList = _ref13$payload$dataLi === void 0 ? [] : _ref13$payload$dataLi, classNodeData = _ref13$payload.classNodeData, moveNodeData = _ref13$payload.moveNodeData, objectNo = _ref13$payload.objectNo, classObjectNo = _ref13$payload.classObjectNo, rest = _objectWithoutProperties(_ref13$payload, _excluded6);
              call = _ref14.call, put = _ref14.put;
              _context7.next = 4;
              return call(_queryClassObjectData, _objectSpread({
                page: page,
                pageSize: pageSize,
                implclass: implclassMap.queryClassObjectData,
                classNodeData: classNodeData,
                tableName: objectNo,
                classTableName: classObjectNo,
                nodeid: classNodeData.ID
              }, rest));

            case 4:
              data = _context7.sent;

              if (!data) {
                _context7.next = 8;
                break;
              }

              _context7.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total || 0,
                  objectAData: classNodeData,
                  page: data.dataList.length > 0 ? page : page - 1,
                  pageSize: pageSize,
                  moveNodeData: moveNodeData,
                  queryName: 'common/queryClassObjectData',
                  queryParams: _objectSpread({
                    implclass: implclassMap.queryClassObjectData,
                    classNodeData: classNodeData,
                    tableName: objectNo,
                    classTableName: classObjectNo,
                    nodeid: classNodeData.ID
                  }, rest),
                  queryApi: _queryClassObjectData
                }
              });

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, queryClassObjectData);
    }),
    // 查询自动分类节点树对应数据
    queryAutoClassData: /*#__PURE__*/_regeneratorRuntime().mark(function queryAutoClassData(_ref15, _ref16) {
      var _ref15$payload, namespace, _ref15$payload$page, page, _ref15$payload$dataLi, dataList, objectA, rest, call, put, data;

      return _regeneratorRuntime().wrap(function queryAutoClassData$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _ref15$payload = _ref15.payload, namespace = _ref15$payload.namespace, _ref15$payload$page = _ref15$payload.page, page = _ref15$payload$page === void 0 ? 1 : _ref15$payload$page, _ref15$payload$dataLi = _ref15$payload.dataList, dataList = _ref15$payload$dataLi === void 0 ? [] : _ref15$payload$dataLi, objectA = _ref15$payload.objectA, rest = _objectWithoutProperties(_ref15$payload, _excluded7);
              call = _ref16.call, put = _ref16.put;
              _context8.next = 4;
              return call(queryAutoClassObjectData, _objectSpread({
                page: page,
                implclass: objectA ? implclassMap.queryRelationAutoClassData : implclassMap.queryAutoClassData
              }, rest));

            case 4:
              data = _context8.sent;

              if (!data) {
                _context8.next = 8;
                break;
              }

              _context8.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total || 0,
                  page: data.dataList.length > 0 ? page : page - 1,
                  queryName: 'common/queryAutoClassData',
                  queryParams: _objectSpread({
                    namespace: namespace,
                    objectA: objectA
                  }, rest)
                }
              });

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, queryAutoClassData);
    }),
    // 查询视图弹窗数据
    queryObjectViewData: /*#__PURE__*/_regeneratorRuntime().mark(function queryObjectViewData(_ref17, _ref18) {
      var _ref17$payload, namespace, _ref17$payload$page, page, _ref17$payload$pageSi, pageSize, _ref17$payload$dataLi, dataList, objectNo, rest, call, put, data;

      return _regeneratorRuntime().wrap(function queryObjectViewData$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _ref17$payload = _ref17.payload, namespace = _ref17$payload.namespace, _ref17$payload$page = _ref17$payload.page, page = _ref17$payload$page === void 0 ? 1 : _ref17$payload$page, _ref17$payload$pageSi = _ref17$payload.pageSize, pageSize = _ref17$payload$pageSi === void 0 ? 20 : _ref17$payload$pageSi, _ref17$payload$dataLi = _ref17$payload.dataList, dataList = _ref17$payload$dataLi === void 0 ? [] : _ref17$payload$dataLi, objectNo = _ref17$payload.objectNo, rest = _objectWithoutProperties(_ref17$payload, _excluded8);
              call = _ref18.call, put = _ref18.put;
              _context9.next = 4;
              return call(commonSingleQuery, _objectSpread({
                page: page,
                pageSize: pageSize,
                tableName: objectNo,
                objectNo: objectNo
              }, rest));

            case 4:
              data = _context9.sent;

              if (!data) {
                _context9.next = 8;
                break;
              }

              _context9.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total,
                  page: page,
                  pageSize: pageSize,
                  queryName: 'common/queryObjectViewData',
                  queryApi: commonSingleQuery,
                  queryParams: _objectSpread({
                    tableName: objectNo,
                    objectNo: objectNo
                  }, rest)
                }
              });

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, queryObjectViewData);
    }),
    // 查询日历视图所有数据
    queryCalendarViewAllData: /*#__PURE__*/_regeneratorRuntime().mark(function queryCalendarViewAllData(_ref19, _ref20) {
      var _ref19$payload, namespace, _ref19$payload$dataLi, dataList, rest, call, put, data;

      return _regeneratorRuntime().wrap(function queryCalendarViewAllData$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _ref19$payload = _ref19.payload, namespace = _ref19$payload.namespace, _ref19$payload$dataLi = _ref19$payload.dataList, dataList = _ref19$payload$dataLi === void 0 ? [] : _ref19$payload$dataLi, rest = _objectWithoutProperties(_ref19$payload, _excluded9);
              call = _ref20.call, put = _ref20.put;
              _context10.next = 4;
              return call(_queryCalendarViewAllData, _objectSpread({}, rest));

            case 4:
              data = _context10.sent;

              if (!data) {
                _context10.next = 8;
                break;
              }

              _context10.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  typeField: data.typeField
                }
              });

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, queryCalendarViewAllData);
    }),
    // 高级搜索查询
    advancedSearch: /*#__PURE__*/_regeneratorRuntime().mark(function advancedSearch(_ref21, _ref22) {
      var _ref21$payload, namespace, _ref21$payload$page, page, _ref21$payload$pageSi, pageSize, _ref21$payload$dataLi, dataList, searchFields, rest, call, put, data;

      return _regeneratorRuntime().wrap(function advancedSearch$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref21$payload = _ref21.payload, namespace = _ref21$payload.namespace, _ref21$payload$page = _ref21$payload.page, page = _ref21$payload$page === void 0 ? 1 : _ref21$payload$page, _ref21$payload$pageSi = _ref21$payload.pageSize, pageSize = _ref21$payload$pageSi === void 0 ? 20 : _ref21$payload$pageSi, _ref21$payload$dataLi = _ref21$payload.dataList, dataList = _ref21$payload$dataLi === void 0 ? [] : _ref21$payload$dataLi, searchFields = _ref21$payload.searchFields, rest = _objectWithoutProperties(_ref21$payload, _excluded10);
              call = _ref22.call, put = _ref22.put;
              _context11.next = 4;
              return call(commonLikeQuery, _objectSpread(_objectSpread({
                page: page,
                pageSize: pageSize
              }, rest), {}, {
                implclass: implclassMap.advancedSearch,
                searchFields: searchFields
              }));

            case 4:
              data = _context11.sent;

              if (!data) {
                _context11.next = 8;
                break;
              }

              _context11.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total || 0,
                  showTab: false,
                  searchFields: searchFields,
                  normalSearch: false,
                  page: page,
                  pageSize: pageSize,
                  isSearch: true,
                  queryName: 'common/advancedSearch',
                  queryParams: _objectSpread(_objectSpread({}, rest), {}, {
                    implclass: implclassMap.advancedSearch,
                    searchFields: searchFields
                  })
                }
              });

            case 8:
            case "end":
              return _context11.stop();
          }
        }
      }, advancedSearch);
    }),
    // 搜索查询
    search: /*#__PURE__*/_regeneratorRuntime().mark(function search(_ref23, _ref24) {
      var _ref23$payload, namespace, _ref23$payload$page, page, _ref23$payload$pageSi, pageSize, _ref23$payload$dataLi, dataList, queryWord, rest, call, put, data;

      return _regeneratorRuntime().wrap(function search$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _ref23$payload = _ref23.payload, namespace = _ref23$payload.namespace, _ref23$payload$page = _ref23$payload.page, page = _ref23$payload$page === void 0 ? 1 : _ref23$payload$page, _ref23$payload$pageSi = _ref23$payload.pageSize, pageSize = _ref23$payload$pageSi === void 0 ? 20 : _ref23$payload$pageSi, _ref23$payload$dataLi = _ref23$payload.dataList, dataList = _ref23$payload$dataLi === void 0 ? [] : _ref23$payload$dataLi, queryWord = _ref23$payload.queryWord, rest = _objectWithoutProperties(_ref23$payload, _excluded11);
              call = _ref24.call, put = _ref24.put;
              _context12.next = 4;
              return call(commonLikeQuery, _objectSpread(_objectSpread({
                page: page,
                pageSize: pageSize
              }, rest), {}, {
                keyWord: queryWord
              }));

            case 4:
              data = _context12.sent;

              if (!data) {
                _context12.next = 8;
                break;
              }

              _context12.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: dataList.concat(data.dataList),
                  dataTotal: data.total || 0,
                  showTab: false,
                  queryWord: queryWord,
                  normalSearch: true,
                  page: page,
                  pageSize: pageSize,
                  isSearch: true,
                  queryName: 'common/search',
                  queryParams: _objectSpread(_objectSpread({}, rest), {}, {
                    keyWord: queryWord
                  }),
                  selectedRows: [],
                  selectedRowKeys: []
                }
              });

            case 8:
            case "end":
              return _context12.stop();
          }
        }
      }, search);
    }),
    // 分类视图迁移节点
    moveNode: /*#__PURE__*/_regeneratorRuntime().mark(function moveNode(_ref25, _ref26) {
      var _ref25$payload, namespace, _ref25$payload$dataLi, dataList, data, hData, onCancel, rest, call, put, data2, newDataList, index;

      return _regeneratorRuntime().wrap(function moveNode$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _ref25$payload = _ref25.payload, namespace = _ref25$payload.namespace, _ref25$payload$dataLi = _ref25$payload.dataList, dataList = _ref25$payload$dataLi === void 0 ? [] : _ref25$payload$dataLi, data = _ref25$payload.data, hData = _ref25$payload.hData, onCancel = _ref25$payload.onCancel, rest = _objectWithoutProperties(_ref25$payload, _excluded12);
              call = _ref26.call, put = _ref26.put;
              _context13.next = 4;
              return call(commonApi, _objectSpread({
                implclass: implclassMap.moveNode,
                data: data,
                hData: hData
              }, rest));

            case 4:
              data2 = _context13.sent;

              if (!data2) {
                _context13.next = 13;
                break;
              }

              message.info(data2.hint);
              onCancel();
              newDataList = JSON.parse(JSON.stringify(dataList));
              index = newDataList.findIndex(function (item) {
                return item.ID === hData[0].ID;
              });
              newDataList[index].PID = data.PID;
              _context13.next = 13;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: newDataList,
                  selectedRows: [newDataList[index]]
                }
              });

            case 13:
            case "end":
              return _context13.stop();
          }
        }
      }, moveNode);
    }),
    // 分类视图迁移节点数据
    moveNodeData: /*#__PURE__*/_regeneratorRuntime().mark(function moveNodeData(_ref27, _ref28) {
      var _ref27$payload, namespace, _ref27$payload$hData, hData, onCancel, rest, call, put, select, data2, _yield$select3, _yield$select3$dataLi, dataList, newDataList;

      return _regeneratorRuntime().wrap(function moveNodeData$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _ref27$payload = _ref27.payload, namespace = _ref27$payload.namespace, _ref27$payload$hData = _ref27$payload.hData, hData = _ref27$payload$hData === void 0 ? [] : _ref27$payload$hData, onCancel = _ref27$payload.onCancel, rest = _objectWithoutProperties(_ref27$payload, _excluded13);
              call = _ref28.call, put = _ref28.put, select = _ref28.select;
              _context14.next = 4;
              return call(commonApi, _objectSpread({
                implclass: implclassMap.moveNodeData,
                hData: hData
              }, rest));

            case 4:
              data2 = _context14.sent;

              if (!data2) {
                _context14.next = 17;
                break;
              }

              message.info(data2.hint);
              onCancel();
              _context14.next = 10;
              return select(function (state) {
                return state[namespace];
              });

            case 10:
              _yield$select3 = _context14.sent;
              _yield$select3$dataLi = _yield$select3.dataList;
              dataList = _yield$select3$dataLi === void 0 ? [] : _yield$select3$dataLi;
              newDataList = JSON.parse(JSON.stringify(dataList));
              newDataList.splice(hData[0].index, hData.length);
              _context14.next = 17;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  dataList: newDataList,
                  showTab: false,
                  selectedRowKeys: [],
                  selectedRows: []
                }
              });

            case 17:
            case "end":
              return _context14.stop();
          }
        }
      }, moveNodeData);
    }),
    // 刷新自动分类视图树
    refreshAutoClassTree: /*#__PURE__*/_regeneratorRuntime().mark(function refreshAutoClassTree(_ref29, _ref30) {
      var _ref29$payload, namespace, rest, call, put, data;

      return _regeneratorRuntime().wrap(function refreshAutoClassTree$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _ref29$payload = _ref29.payload, namespace = _ref29$payload.namespace, rest = _objectWithoutProperties(_ref29$payload, _excluded14);
              call = _ref30.call, put = _ref30.put;
              _context15.next = 4;
              return call(_refreshAutoClassTree, _objectSpread({}, rest));

            case 4:
              data = _context15.sent;

              if (!data) {
                _context15.next = 8;
                break;
              }

              _context15.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  treeData: data.classViewNodeList,
                  dataList: [],
                  selectedNodeKeys: [],
                  selectedNode: [],
                  selectedRowKeys: [],
                  selectedRows: [],
                  showTab: false
                }
              });

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, refreshAutoClassTree);
    }),
    // 验证关联页和主对象disabled
    verifyPageDisabled: /*#__PURE__*/_regeneratorRuntime().mark(function verifyPageDisabled(_ref31, _ref32) {
      var _ref31$payload, namespace, rest, call, put, relevanceNo, data, payload;

      return _regeneratorRuntime().wrap(function verifyPageDisabled$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              _ref31$payload = _ref31.payload, namespace = _ref31$payload.namespace, rest = _objectWithoutProperties(_ref31$payload, _excluded15);
              call = _ref32.call, put = _ref32.put;
              // console.log('验证关联页和主对象disabled', rest)
              relevanceNo = rest.relevanceNo;
              _context16.next = 5;
              return call(queryMenuEnable, _objectSpread({
                implclass: implclassMap.queryContextMenu
              }, rest));

            case 5:
              data = _context16.sent;

              if (!data) {
                _context16.next = 11;
                break;
              }

              payload = null;

              if (relevanceNo) {
                payload = {
                  relationMenuList: data.dataList,
                  relevanceNo: relevanceNo
                };
              } else {
                payload = {
                  pageMenus: data.dataList
                };
              }

              _context16.next = 11;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: payload
              });

            case 11:
            case "end":
              return _context16.stop();
          }
        }
      }, verifyPageDisabled);
    }),

    /* 质检录入检测项目请求 */
    queryInspectionItem: /*#__PURE__*/_regeneratorRuntime().mark(function queryInspectionItem(_ref33, _ref34) {
      var _ref33$payload, hData, objectNo, objectANamespace, objectADataList, checkProRelationShipNo, call, put, data, newDataList, dataList, formInitValue;

      return _regeneratorRuntime().wrap(function queryInspectionItem$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _ref33$payload = _ref33.payload, hData = _ref33$payload.hData, objectNo = _ref33$payload.objectNo, objectANamespace = _ref33$payload.objectANamespace, objectADataList = _ref33$payload.objectADataList, checkProRelationShipNo = _ref33$payload.checkProRelationShipNo;
              call = _ref34.call, put = _ref34.put;
              _context17.next = 4;
              return call(commonApi, {
                implClass: 'inspect.QueryInspectionItemsEvent',
                hData: hData,
                objectNo: objectNo,
                relevanceNo: checkProRelationShipNo
              });

            case 4:
              data = _context17.sent;

              if (!(data && data.newRowData)) {
                _context17.next = 9;
                break;
              }

              // console.log(data.newRowData)
              newDataList = objectADataList.map(function (item) {
                return item.ID === hData[0].ID ? data.newRowData : item;
              });
              _context17.next = 9;
              return put({
                type: "".concat(objectANamespace, "/packet"),
                payload: {
                  dataList: newDataList,
                  selectedRows: [data.newRowData]
                }
              });

            case 9:
              dataList = data && data.dataList || [];
              formInitValue = {};
              dataList = dataList.map(function (item) {
                var InspectionItemResult = [];
                var _InspectionItemResult = [];

                for (var i = 0; i < item.InspectionItem.SQ; i++) {
                  InspectionItemResult[i] = null;
                  _InspectionItemResult[i] = null;
                }

                item.InspectionItemResult.forEach(function (item) {
                  InspectionItemResult[item.NO - 1] = item.TV;
                  _InspectionItemResult[item.NO - 1] = item;
                });
                formInitValue[item.InspectionItem.ID] = {
                  InspectionItem: _objectSpread(_objectSpread({}, item.InspectionItem), {}, {
                    DEFECT_TYPE: item.InspectionItem.DEFECT_CODE
                  }),
                  InspectionItemResult: InspectionItemResult
                };
                return {
                  InspectionItem: item.InspectionItem,
                  InspectionItemResult: _InspectionItemResult
                };
              });
              _context17.next = 14;
              return put({
                type: "enterCmp/packet",
                payload: {
                  dataList: dataList,
                  formData: dataList,
                  formInitValue: formInitValue,
                  DefectCode: data && data.defectCode || [],
                  hData: data.rowData,
                  BLACKLISTCode: data.BLACKLISTCode || null,
                  JHCode: data.JHCode || null,
                  newRowData: data.newRowData ? [data.newRowData] : null,
                  rowData: data.rowData ? data.rowData : null
                }
              });

            case 14:
            case "end":
              return _context17.stop();
          }
        }
      }, queryInspectionItem);
    }),
    queryInspectionItem2: /*#__PURE__*/_regeneratorRuntime().mark(function queryInspectionItem2(_ref35, _ref36) {
      var _ref35$payload, hData, objectNo, objectANamespace, objectADataList, checkProRelationShipNo, namespace, implClass, call, put, data, newDataList;

      return _regeneratorRuntime().wrap(function queryInspectionItem2$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              _ref35$payload = _ref35.payload, hData = _ref35$payload.hData, objectNo = _ref35$payload.objectNo, objectANamespace = _ref35$payload.objectANamespace, objectADataList = _ref35$payload.objectADataList, checkProRelationShipNo = _ref35$payload.checkProRelationShipNo, namespace = _ref35$payload.namespace, implClass = _ref35$payload.implClass;
              call = _ref36.call, put = _ref36.put;
              _context18.next = 4;
              return call(commonApi, {
                implClass: implClass,
                hData: hData,
                objectNo: objectNo,
                relevanceNo: checkProRelationShipNo
              });

            case 4:
              data = _context18.sent;

              if (!data) {
                _context18.next = 12;
                break;
              }

              _context18.next = 8;
              return put({
                type: "Enter/initPacket",
                payload: {
                  dataList: data.dataList,
                  newRowData: data.newRowData,
                  defectCode: data.defectCode
                }
              });

            case 8:
              if (!data.newRowData) {
                _context18.next = 12;
                break;
              }

              newDataList = objectADataList.map(function (item) {
                return item.ID === hData[0].ID ? data.newRowData : item;
              });
              _context18.next = 12;
              return put({
                type: "".concat(objectANamespace, "/packet"),
                payload: {
                  dataList: newDataList,
                  selectedRows: [data.newRowData]
                }
              });

            case 12:
            case "end":
              return _context18.stop();
          }
        }
      }, queryInspectionItem2);
    }),
    queryInspectionReport: /*#__PURE__*/_regeneratorRuntime().mark(function queryInspectionReport(_ref37, _ref38) {
      var _ref37$payload, hData, objectNo, objectANamespace, objectADataList, checkProRelationShipNo, namespace, implClass, call, put, data;

      return _regeneratorRuntime().wrap(function queryInspectionReport$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _ref37$payload = _ref37.payload, hData = _ref37$payload.hData, objectNo = _ref37$payload.objectNo, objectANamespace = _ref37$payload.objectANamespace, objectADataList = _ref37$payload.objectADataList, checkProRelationShipNo = _ref37$payload.checkProRelationShipNo, namespace = _ref37$payload.namespace, implClass = _ref37$payload.implClass;
              call = _ref38.call, put = _ref38.put;
              _context19.next = 4;
              return call(commonApi, {
                implClass: implClass,
                hData: hData,
                objectNo: objectNo,
                relevanceNo: checkProRelationShipNo
              });

            case 4:
              data = _context19.sent;

              if (!(data && data.flag)) {
                _context19.next = 8;
                break;
              }

              _context19.next = 8;
              return put({
                type: "InspectionReport/initPacket",
                payload: {
                  dataList: data.dataList,
                  newRowData: data.newRowData
                }
              });

            case 8:
            case "end":
              return _context19.stop();
          }
        }
      }, queryInspectionReport);
    }),
    embedThreePartyPage: /*#__PURE__*/_regeneratorRuntime().mark(function embedThreePartyPage(_ref39, _ref40) {
      var values, callback, call, put, select, data, hData, _data2, hint, HyperlinkUrl, namespace, modelData, pageTabProps;

      return _regeneratorRuntime().wrap(function embedThreePartyPage$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              values = _ref39.payload.values, callback = _ref39.callback;
              call = _ref40.call, put = _ref40.put, select = _ref40.select;

              if (values.implType === 3) {
                values.path = values.implClass;
                delete values.implClass;
              }

              hData = values.hData;
              _context20.next = 6;
              return call(commonApi, values);

            case 6:
              data = _context20.sent;

              if (!data) {
                _context20.next = 18;
                break;
              }

              _data2 = data, hint = _data2.hint, HyperlinkUrl = _data2.HyperlinkUrl; // 操作成功，执行回调函数关闭弹窗

              if (callback && typeof callback === 'function') {
                callback(data);
              }

              namespace = "embedThreePartyPage-".concat(hData[0].ID);
              judgeModel(namespace);
              modelData = {
                hData: hData,
                HyperlinkUrl: HyperlinkUrl,
                faceType: 'embedThreePartyPage'
              };
              pageTabProps = {
                namespace: namespace,
                modelData: modelData,
                record: {
                  CAPTION: '质检报告',
                  ICON: null,
                  FACETYPE: 'embedThreePartyPage'
                }
              };
              _context20.next = 16;
              return put({
                type: 'tab/addTab',
                payload: pageTabProps
              });

            case 16:
              _context20.next = 18;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: _objectSpread({}, modelData)
              });

            case 18:
            case "end":
              return _context20.stop();
          }
        }
      }, embedThreePartyPage);
    })
  }
};