"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _jsBase = require("js-base64");

var _customPage = require("../../utils/customPage");

var _home = _interopRequireDefault(require("../../pages/home/home"));

var _utils = require("../../utils/utils");

var _api = require("../../service/api");

var _metaApi = require("../../service/metaApi");

var _queryDataApi = require("../../service/queryDataApi");

var _Engine = _interopRequireDefault(require("../../component/engine/Engine"));

var _ReportHoc = _interopRequireDefault(require("../../component/engine/layout/ReportHoc"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var configure_report = _language.default.message.report.configure_report;
var queryFunc = {
  4: _metaApi.queryClassModel,
  5: _metaApi.queryAutoClassModel
};
var home = {
  caption: 'Home',
  icon: 'home',
  Cmp: /*#__PURE__*/_react.default.createElement(_home.default, null),
  key: 'Home',
  unClosable: true
};
var _default = {
  namespace: 'tab',
  state: {
    panes: [home],
    clickedPanes: {},
    // 存储点击过的页面数据，第二次点击时不请求建模数据
    activeKey: 'Home',
    modals: [],
    loading: false,
    classModelData: {}
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    closeTab: function closeTab(state, _ref2) {
      var payload = _ref2.payload;
      var panes = state.panes;
      var type = payload.type,
          key = payload.key;
      var index = panes.findIndex(function (item) {
        return item.key === key;
      });

      switch (type) {
        case 0:
        case 'remove':
          if (index !== -1 && index !== 0) {
            key = (panes[index + 1] || panes[index - 1]).key;
            panes.splice(index, 1);
          }

          break;

        case 1:
          panes = index !== 0 ? [home, panes[index]] : [home];
          break;

        default:
          panes = [home];
          key = 'Home';
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        panes: panes,
        activeKey: key
      });
    },
    addTab: function addTab(state, _ref3) {
      var payload = _ref3.payload;
      // console.log('addTab', payload)
      var modelData = payload.modelData,
          namespace = payload.namespace,
          _payload$record = payload.record,
          record = _payload$record === void 0 ? {} : _payload$record,
          reportConfig = payload.reportConfig;
      var panes = state.panes,
          clickedPanes = state.clickedPanes;
      var CAPTION = record.CAPTION,
          ICON = record.ICON,
          FACETYPE = record.FACETYPE,
          PARAMS = record.PARAMS;
      CAPTION = CAPTION ? CAPTION : _utils.isEnglish ? record.ENNAME : record.NAME;
      var isExists = panes.some(function (item) {
        return item.key === namespace;
      });
      var Cmp = null;

      if (!isExists) {
        if (clickedPanes[namespace]) {
          panes.push(clickedPanes[namespace]);
        } else {
          if (FACETYPE === 6) {
            var _ref4 = PARAMS || {},
                url = _ref4.url,
                isBddp = _ref4.isBddp,
                reportId = _ref4.reportId;

            Cmp = (0, _ReportHoc.default)({
              title: CAPTION,
              url: url,
              isBddp: isBddp,
              reportId: reportId,
              reportConfig: reportConfig
            });
          } else if (FACETYPE === 7) {
            var params = PARAMS || {};
            Cmp = (0, _Engine.default)(_objectSpread(_objectSpread({}, modelData), {}, {
              params: params,
              namespace: namespace,
              CAPTION: CAPTION
            }));
          } else if (FACETYPE && FACETYPE !== 8) {
            var newModeData = (0, _utils.parseTreeMeta)(modelData); // 解构包含META属性的多层树结构

            Cmp = (0, _Engine.default)(_objectSpread(_objectSpread({}, newModeData), {}, {
              namespace: namespace,
              CAPTION: CAPTION ? CAPTION : _utils.isEnglish ? record.ENNAME : record.NAME
            }));
          } else {
            var page = _customPage.customPage.find(function (item) {
              return item.NO === namespace;
            });

            if (!page) return _objectSpread({}, state);
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
          clickedPanes[namespace] = pane;
          panes.push(pane);
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          activeKey: namespace,
          panes: panes
        });
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeKey: namespace
        });
      }
    },
    addModal: function addModal(state, _ref5) {
      var _ref5$payload = _ref5.payload,
          Cmp = _ref5$payload.Cmp,
          key = _ref5$payload.key;
      var modals = state.modals;
      var index = modals.findIndex(function (item) {
        return item.key === key;
      });

      if (index === -1) {
        modals.push({
          Cmp: Cmp,
          key: key
        });
      } else {
        modals[index] = {
          Cmp: Cmp,
          key: key
        };
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        modals: modals
      });
    }
  },
  effects: {
    loadPage: /*#__PURE__*/_regeneratorRuntime().mark(function loadPage(_ref6, _ref7) {
      var payload, put, FACETYPE;
      return _regeneratorRuntime().wrap(function loadPage$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref6.payload;
              put = _ref7.put;
              FACETYPE = payload.FACETYPE;

              if (!(FACETYPE === -1)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              _context.next = 7;
              return put({
                type: "".concat(FACETYPE && FACETYPE !== 8 ? FACETYPE === 6 ? 'queryReport' : 'queryConfig' : 'queryCustom'),
                payload: payload
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, loadPage);
    }),
    queryCustom: /*#__PURE__*/_regeneratorRuntime().mark(function queryCustom(_ref8, _ref9) {
      var payload, put, NO, ID;
      return _regeneratorRuntime().wrap(function queryCustom$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref8.payload;
              put = _ref9.put;
              NO = payload.NO, ID = payload.ID;

              if (!(0, _utils.judgeModel)(NO, false)) {
                _context2.next = 16;
                break;
              }

              if (!(NO === 'navMenu' || NO === 'tableConfig' || NO === 'autoClass' || NO === 'mqAffair' || NO === 'mqLines' || NO === 'queryView' || NO === 'relationship' || NO === 'globalTable')) {
                _context2.next = 9;
                break;
              }

              _context2.next = 7;
              return put({
                type: "".concat(NO === 'navMenu' ? 'navMenu' : 'commonConfig', "/query"),
                payload: {
                  namespace: NO
                }
              });

            case 7:
              _context2.next = 16;
              break;

            case 9:
              if (!(NO === 'reportModel' || NO === 'inspectionModel')) {
                _context2.next = 14;
                break;
              }

              _context2.next = 12;
              return put({
                type: "qualityInspectionTemplate/query",
                payload: {
                  namespace: NO
                }
              });

            case 12:
              _context2.next = 16;
              break;

            case 14:
              _context2.next = 16;
              return put({
                type: "".concat(NO, "/query"),
                payload: {
                  namespace: NO,
                  pageId: ID
                }
              });

            case 16:
              _context2.next = 18;
              return put({
                type: 'addTab',
                payload: {
                  namespace: NO,
                  record: payload
                }
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, queryCustom);
    }),
    queryReport: /*#__PURE__*/_regeneratorRuntime().mark(function queryReport(_ref10, _ref11) {
      var payload, put, call, ID, ISCUSTOMPAGE, PARAMS, namespace, configNo, _JSON$parse, isBddp, data, reportConfig;

      return _regeneratorRuntime().wrap(function queryReport$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref10.payload;
              put = _ref11.put, call = _ref11.call;
              ID = payload.ID, ISCUSTOMPAGE = payload.ISCUSTOMPAGE, PARAMS = payload.PARAMS;
              namespace = ID;
              configNo = ''; // 配置的报表页面

              _JSON$parse = JSON.parse(PARAMS || '{}'), isBddp = _JSON$parse.isBddp;
              isBddp && isBddp === true ? configNo = 'largeScreenReportPage' : configNo = 'reportPage'; // 定制的报表页面

              if (ISCUSTOMPAGE && ISCUSTOMPAGE === true) {
                configNo = ID;
              }

              _context3.next = 10;
              return call(_api.queryReportConfig, configNo);

            case 10:
              data = _context3.sent;

              if (!data) {
                _context3.next = 19;
                break;
              }

              reportConfig = JSON.parse(_jsBase.Base64.decode(data.dataList));

              if (!(reportConfig && reportConfig.CONFIG_VALUE)) {
                _context3.next = 18;
                break;
              }

              _context3.next = 16;
              return put({
                type: 'addTab',
                payload: {
                  namespace: namespace,
                  record: payload,
                  reportConfig: reportConfig
                }
              });

            case 16:
              _context3.next = 19;
              break;

            case 18:
              _antd.message.warn(configure_report);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, queryReport);
    }),
    queryConfig: /*#__PURE__*/_regeneratorRuntime().mark(function queryConfig(_ref12, _ref13) {
      var payload, put, call, select, PARAMS, ID, FACETYPE, SUPQUERY, INITDATA, NO, tableName, classNodeTableName, condition, objectGridNo, sortFields, namespace, modelData, classModelData, _yield$select, rest, data, tabs, valuseLen, i, _data, res, paramsProps, tabActiveKey, _tabs, _valuseLen, _i;

      return _regeneratorRuntime().wrap(function queryConfig$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref12.payload;
              put = _ref13.put, call = _ref13.call, select = _ref13.select;
              PARAMS = payload.PARAMS, ID = payload.ID, FACETYPE = payload.FACETYPE, SUPQUERY = payload.SUPQUERY, INITDATA = payload.INITDATA, NO = payload.NO;
              tableName = PARAMS.tableName, classNodeTableName = PARAMS.classNodeTableName, condition = PARAMS.condition, objectGridNo = PARAMS.objectGridNo, sortFields = PARAMS.sortFields;
              namespace = (FACETYPE === 4 ? PARAMS.classNodeTableName : PARAMS.tableName) + '-' + ID; // const namespace = ID

              modelData = {
                supQuery: SUPQUERY,
                pageId: ID,
                pageNo: NO
              };
              _context4.next = 8;
              return select(function (state) {
                return state.tab.classModelData;
              });

            case 8:
              classModelData = _context4.sent;
              _context4.next = 11;
              return select(function (state) {
                return state[namespace];
              });

            case 11:
              _yield$select = _context4.sent;
              rest = _extends({}, _yield$select);
              modelData = _objectSpread(_objectSpread({}, rest.modelData), modelData);

              if ((0, _utils.judgeModel)(namespace)) {
                _context4.next = 27;
                break;
              }

              _context4.next = 17;
              return call(queryFunc[FACETYPE] || _metaApi.querySingleModel, _objectSpread(_objectSpread({}, PARAMS), {}, {
                pageId: ID,
                faceType: FACETYPE
              }));

            case 17:
              data = _context4.sent;

              if (!data) {
                _context4.next = 26;
                break;
              }

              modelData = _objectSpread(_objectSpread({}, modelData), data);

              if (!(PARAMS && PARAMS.isClass)) {
                _context4.next = 24;
                break;
              }

              classModelData[namespace] = modelData;
              _context4.next = 24;
              return put({
                type: 'packet',
                payload: {
                  classModelData: classModelData
                }
              });

            case 24:
              _context4.next = 27;
              break;

            case 26:
              (0, _utils.removeModel)(namespace);

            case 27:
              if (!(0, _utils.judgeModel)(namespace, false)) {
                _context4.next = 73;
                break;
              }

              if (modelData.dataClassField && modelData.dataClassField.editParams) {
                tabs = modelData.dataClassField.editParams.values;
                valuseLen = tabs.length;

                if (valuseLen) {
                  modelData.bgcRandomTabs = [];

                  for (i = 0; i < valuseLen; i++) {
                    modelData.bgcRandomTabs.push((0, _utils.rgbRandom)());
                  }
                }
              } // 2. 生成页面


              _context4.next = 31;
              return put({
                type: 'addTab',
                payload: {
                  modelData: modelData,
                  namespace: namespace,
                  record: payload
                }
              });

            case 31:
              // 3. 查询数据
              _data = {
                selectedRowKeys: [],
                selectedRows: [],
                showTab: false,
                condition: condition,
                params: PARAMS,
                namespace: namespace,
                tableName: tableName,
                sortFields: sortFields,
                INITDATA: INITDATA,
                modelData: modelData
              };

              if (!(PARAMS && PARAMS.isClass)) {
                _context4.next = 40;
                break;
              }

              modelData = classModelData[namespace];
              _context4.next = 36;
              return call(_queryDataApi.queryDataClassFieldTotal, {
                pageIds: [ID]
              });

            case 36:
              res = _context4.sent;

              if (res && res.flag) {
                _data.tabCountData = res.totals[0].values;
              }

              _context4.next = 41;
              break;

            case 40:
              _data.tabCountData = rest.tabCountData;

            case 41:
              if (!INITDATA) {
                _context4.next = 71;
                break;
              }

              if (!(FACETYPE === 4)) {
                _context4.next = 52;
                break;
              }

              _data.tableName = classNodeTableName;
              _context4.next = 46;
              return put({
                type: 'common/queryClassNodeData',
                payload: {
                  tableName: tableName,
                  classNodeTableName: classNodeTableName,
                  namespace: namespace
                }
              });

            case 46:
              if (!modelData.objectMeta) {
                _context4.next = 50;
                break;
              }

              // data.objectBNameSpace = `${modelData.objectMeta.objectID}`
              _data.objectBNameSpace = namespace + "-0";
              _context4.next = 50;
              return put({
                type: 'popup/loadSubpage',
                payload: {
                  objectRelationPage: [{
                    relationPageSign: _objectSpread(_objectSpread({}, modelData.objectMeta), {}, {
                      PARAMS: PARAMS
                    }),
                    rType: 'classRelationpage',
                    id: modelData.objectMeta.objectID,
                    supQuery: SUPQUERY,
                    tableName: tableName
                  }],
                  objectANamespace: namespace,
                  objectA: tableName
                }
              });

            case 50:
              _context4.next = 71;
              break;

            case 52:
              if (!(FACETYPE === 5)) {
                _context4.next = 58;
                break;
              }

              if (!modelData.classViewNodeList) {
                _context4.next = 56;
                break;
              }

              _context4.next = 56;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  treeData: modelData.classViewNodeList,
                  dataList: []
                }
              });

            case 56:
              _context4.next = 71;
              break;

            case 58:
              if (!(FACETYPE === 7)) {
                _context4.next = 63;
                break;
              }

              _context4.next = 61;
              return put({
                type: 'common/queryCalendarViewAllData',
                payload: {
                  tableName: tableName,
                  otherParam: _objectSpread({}, PARAMS),
                  namespace: namespace
                }
              });

            case 61:
              _context4.next = 71;
              break;

            case 63:
              if (!(FACETYPE !== 22)) {
                _context4.next = 71;
                break;
              }

              paramsProps = {
                tableName: tableName,
                namespace: namespace,
                objectGridNo: objectGridNo,
                condition: condition,
                sortFields: sortFields
              }; // 分区tab

              _context4.next = 67;
              return select(function (state) {
                return state[namespace].tabActiveKey;
              });

            case 67:
              tabActiveKey = _context4.sent;

              if (PARAMS && PARAMS.isClass && modelData.dataClassField && modelData.dataClassField.editParams) {
                _tabs = modelData.dataClassField.editParams.values;
                _valuseLen = _tabs.length;

                if (_valuseLen) {
                  paramsProps = _objectSpread(_objectSpread({}, paramsProps), {}, {
                    tableName: tableName,
                    typeField: PARAMS.dataClassField,
                    tabActiveKey: tabActiveKey ? tabActiveKey : modelData.dataClassField.editor === 'ValueList' ? _tabs[0].name : _tabs[0].key + ''
                  });
                  _data.bgcRandomTabs = [];

                  for (_i = 0; _i < _valuseLen; _i++) {
                    _data.bgcRandomTabs.push((0, _utils.rgbRandom)());
                  }
                }
              }

              _context4.next = 71;
              return put({
                type: 'common/querySingleData',
                payload: paramsProps
              });

            case 71:
              _context4.next = 73;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: _data
              });

            case 73:
            case "end":
              return _context4.stop();
          }
        }
      }, queryConfig);
    }),
    queryDataClassFieldTotal: /*#__PURE__*/_regeneratorRuntime().mark(function queryDataClassFieldTotal(_ref14, _ref15) {
      var _ref14$payload, pageId, namespace, call, put, res;

      return _regeneratorRuntime().wrap(function queryDataClassFieldTotal$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref14$payload = _ref14.payload, pageId = _ref14$payload.pageId, namespace = _ref14$payload.namespace;
              call = _ref15.call, put = _ref15.put;
              _context5.next = 4;
              return call(_queryDataApi.queryDataClassFieldTotal, {
                pageIds: [pageId]
              });

            case 4:
              res = _context5.sent;

              if (!(res && res.flag)) {
                _context5.next = 8;
                break;
              }

              _context5.next = 8;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: {
                  tabCountData: res.totals[0].values
                }
              });

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, queryDataClassFieldTotal);
    })
  }
};
exports.default = _default;