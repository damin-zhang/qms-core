"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _umi = require("umi");

var _systemApi = require("../../service/systemApi");

var _metaApi = require("../../service/metaApi");

var _queryDataApi = require("../../service/queryDataApi");

var _utils = require("../../utils/utils");

var _antd = require("antd");

var _customPage = require("../../utils/customPage");

var _excluded = ["isModeling"],
    _excluded2 = ["val"];

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _localStorage = localStorage,
    _localStorage$menuDat = _localStorage.menuData,
    menuData = _localStorage$menuDat === void 0 ? '[]' : _localStorage$menuDat,
    theme = _localStorage.theme,
    mode = _localStorage.mode,
    collapsed = _localStorage.collapsed;

try {
  menuData = (0, _utils.ergodicRoot)(JSON.parse(menuData), '1');
} catch (err) {
  menuData = [];
}

var _default = {
  namespace: 'user',
  state: {
    visible: false,
    // isModeling: sessionStorage.getItem('isModeling') === localStorage.getItem('userName'),
    isModeling: false,
    menu: menuData,
    theme: theme ? true : false,
    mode: mode ? true : false,
    collapsed: collapsed ? true : false,
    // 已同步列表
    syncedList: [],
    selectedKeys: [],
    NavTotal: {}
  },
  //同步
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  },
  effects: {
    changeModel: /*#__PURE__*/_regeneratorRuntime().mark(function changeModel(_ref2, _ref3) {
      var _ref2$payload, isModeling, rest, callback, put, call, select, data, _yield$select, _yield$select$panes, panes, i, NO;

      return _regeneratorRuntime().wrap(function changeModel$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2$payload = _ref2.payload, isModeling = _ref2$payload.isModeling, rest = _objectWithoutProperties(_ref2$payload, _excluded), callback = _ref2.callback;
              put = _ref3.put, call = _ref3.call, select = _ref3.select;

              if (!isModeling) {
                _context.next = 31;
                break;
              }

              _context.next = 5;
              return call(_metaApi.closeModel, _objectSpread({}, rest));

            case 5:
              data = _context.sent;

              if (!data) {
                _context.next = 29;
                break;
              }

              if (!data.force) {
                _context.next = 11;
                break;
              }

              callback(data.info);
              _context.next = 29;
              break;

            case 11:
              _antd.message.success(data.info);

              sessionStorage.removeItem('isModeling');
              _context.next = 15;
              return select(function (state) {
                return state.tab;
              });

            case 15:
              _yield$select = _context.sent;
              _yield$select$panes = _yield$select.panes;
              panes = _yield$select$panes === void 0 ? [] : _yield$select$panes;
              i = 0;

            case 19:
              if (!(i < panes.length)) {
                _context.next = 27;
                break;
              }

              NO = panes[i].key;

              if (!(NO === 'tableConfig' || NO === 'autoClass' || NO === 'mqAffair' || NO === 'mqLines' || NO === 'queryView' || NO === 'relationship' || NO === 'globalTable')) {
                _context.next = 24;
                break;
              }

              _context.next = 24;
              return put({
                type: "commonConfig/query",
                payload: {
                  namespace: NO
                }
              });

            case 24:
              i++;
              _context.next = 19;
              break;

            case 27:
              _context.next = 29;
              return put({
                type: 'packet',
                payload: {
                  isModeling: false
                }
              });

            case 29:
              _context.next = 39;
              break;

            case 31:
              _context.next = 33;
              return call(_metaApi.openModel);

            case 33:
              data = _context.sent;

              if (!data) {
                _context.next = 39;
                break;
              }

              _antd.message.success(data.info);

              sessionStorage.setItem('isModeling', localStorage.getItem('userName'));
              _context.next = 39;
              return put({
                type: 'packet',
                payload: {
                  isModeling: true
                }
              });

            case 39:
            case "end":
              return _context.stop();
          }
        }
      }, changeModel);
    }),
    // 同步所有建模
    synchroAllModel: /*#__PURE__*/_regeneratorRuntime().mark(function synchroAllModel(_ref4, _ref5) {
      var payload, put, call, select, data;
      return _regeneratorRuntime().wrap(function synchroAllModel$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref4.payload;
              put = _ref5.put, call = _ref5.call, select = _ref5.select;
              _context2.next = 4;
              return call(_metaApi.synchroAllObject);

            case 4:
              data = _context2.sent;

              if (!data) {
                _context2.next = 8;
                break;
              }

              _context2.next = 8;
              return put({
                type: 'packet',
                payload: {
                  isModeling: false
                }
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, synchroAllModel);
    }),
    queryMenu: /*#__PURE__*/_regeneratorRuntime().mark(function queryMenu(_ref6, _ref7) {
      var _ref6$payload, payload, call, put, _payload$val, val, rest, data, dataList, _data$commonNavigatio, commonNavigations, canModeling, navs, menu, pathList, urlParams, pageNo, NOV, menuObject, routerPageNO, _menuObject, navList, customPageList, pageList, pageIds, _pageList;

      return _regeneratorRuntime().wrap(function queryMenu$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6$payload = _ref6.payload, payload = _ref6$payload === void 0 ? {} : _ref6$payload;
              call = _ref7.call, put = _ref7.put;
              _payload$val = payload.val, val = _payload$val === void 0 ? localStorage.getItem('AcceptLanguage') || 'zh-CN' : _payload$val, rest = _objectWithoutProperties(payload, _excluded2);
              _context3.next = 5;
              return call(_metaApi.changeLanguage, val);

            case 5:
              data = _context3.sent;

              if (!data) {
                _context3.next = 55;
                break;
              }

              sessionStorage.removeItem('isModeling'); //刷新页面后清除建模状态

              dataList = data.dataList, _data$commonNavigatio = data.commonNavigations, commonNavigations = _data$commonNavigatio === void 0 ? [] : _data$commonNavigatio;
              if (commonNavigations === null) commonNavigations = [];
              canModeling = false;

              if (sessionStorage.getItem('allowModel') === 'true') {
                dataList = _customPage.configPlatform.concat(dataList);
                dataList.unshift(_customPage.commonNavigationList);
                canModeling = true;
              } else {
                dataList.unshift(_customPage.commonNavigationList);
                canModeling = false;
              } // 处理常用导航


              if (commonNavigations.length) {
                navs = [];
                dataList.map(function (item) {
                  if (commonNavigations.includes(item.ID)) {
                    navs.push(_objectSpread(_objectSpread({}, item), {}, {
                      PID: 'collect'
                    }));
                  }
                });
                dataList = dataList.concat(navs);
              } else {
                dataList[0].children = [];
              }

              localStorage.setItem('menuData', JSON.stringify(dataList));
              data.watermark && localStorage.setItem('watermark', JSON.stringify(data.watermark));
              menu = (0, _utils.ergodicRoot)(dataList, 0); // 装配Path列表, 存入LocalStorage

              pathList = (0, _utils.setPathList)(menu);
              localStorage['pathList'] = JSON.stringify(pathList); // 链接跳转页签加载

              if (!localStorage.getItem('taskParams')) {
                _context3.next = 29;
                break;
              }

              urlParams = JSON.parse(localStorage.taskParams);
              pageNo = urlParams.pageNo, NOV = urlParams.NOV;
              menuObject = dataList.filter(function (item) {
                return item.NO === pageNo || item.META && item.META.NO === pageNo;
              });
              menuObject = (0, _utils.parseMeta)(menuObject);

              if (!menuObject.length) {
                _context3.next = 26;
                break;
              }

              _context3.next = 26;
              return put({
                type: 'tab/loadPage',
                payload: _objectSpread(_objectSpread({}, menuObject[0]), {}, {
                  NOV: NOV
                })
              });

            case 26:
              localStorage.removeItem('taskParams');
              localStorage.removeItem('routerPageNO');
              localStorage.removeItem('pageNo');

            case 29:
              if (!localStorage.routerPageNO) {
                _context3.next = 37;
                break;
              }

              routerPageNO = localStorage.routerPageNO;
              _menuObject = dataList.filter(function (item) {
                return item.NO === routerPageNO || item.META && item.META.NO === routerPageNO;
              });
              _menuObject = (0, _utils.parseMeta)(_menuObject);

              if (!_menuObject.length) {
                _context3.next = 36;
                break;
              }

              _context3.next = 36;
              return put({
                type: 'tab/loadPage',
                payload: _objectSpread({}, _menuObject[0])
              });

            case 36:
              localStorage.removeItem('routerPageNO');

            case 37:
              //第一次请求导航菜单查询导航数据统计
              navList = dataList.filter(function (item) {
                return item.META && item.META.isStatistics;
              }) || [];
              navList = navList.filter(function (item) {
                return item.PID !== 'collect';
              });
              customPageList = navList.filter(function (item) {
                return item.META && item.META.FACETYPE === 0;
              });
              pageList = navList.filter(function (item) {
                return item.META && item.META.FACETYPE;
              });

              if (!pageList.length) {
                _context3.next = 46;
                break;
              }

              pageIds = [];
              navList.map(function (item) {
                return pageIds.push(item.ID);
              });
              _context3.next = 46;
              return put({
                type: 'queryNavigationTotal',
                payload: {
                  pageIds: pageIds
                }
              });

            case 46:
              if (!customPageList.length) {
                _context3.next = 51;
                break;
              }

              _pageList = [];
              navList.map(function (item) {
                return _pageList.push({
                  ID: item.ID,
                  NO: item.META.NO
                });
              });
              _context3.next = 51;
              return put({
                type: 'queryCustomNavigationTotal',
                payload: {
                  pageList: _pageList
                }
              });

            case 51:
              _context3.next = 53;
              return put({
                type: 'packet',
                payload: _objectSpread({
                  menu: menu,
                  commonNavigations: commonNavigations,
                  canModeling: canModeling
                }, rest)
              });

            case 53:
              _context3.next = 57;
              break;

            case 55:
              _context3.next = 57;
              return put({
                type: 'packet',
                payload: {
                  menu: [],
                  commonNavigations: [],
                  NavTotal: {}
                }
              });

            case 57:
            case "end":
              return _context3.stop();
          }
        }
      }, queryMenu);
    }),
    queryUser: /*#__PURE__*/_regeneratorRuntime().mark(function queryUser(_ref8, _ref9) {
      var call, put, data;
      return _regeneratorRuntime().wrap(function queryUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _objectDestructuringEmpty(_ref8);

              call = _ref9.call, put = _ref9.put;
              _context4.next = 4;
              return call(_systemApi.queryUserInfo);

            case 4:
              data = _context4.sent;

              if (!data) {
                _context4.next = 8;
                break;
              }

              _context4.next = 8;
              return put({
                type: 'packet',
                payload: {
                  userInfo: data.dataList[0],
                  visible: true
                }
              });

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, queryUser);
    }),
    editUser: /*#__PURE__*/_regeneratorRuntime().mark(function editUser(_ref10, _ref11) {
      var _ref10$payload, values, record, call, put, data, avatar;

      return _regeneratorRuntime().wrap(function editUser$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _ref10$payload = _ref10.payload, values = _ref10$payload.values, record = _ref10$payload.record;
              call = _ref11.call, put = _ref11.put;
              _context5.next = 4;
              return call(_systemApi.editUserInfo, {
                values: values,
                userID: record.userID
              });

            case 4:
              data = _context5.sent;

              if (!data.flag) {
                _context5.next = 11;
                break;
              }

              avatar = data.dataList.avatar;

              if (!(avatar && avatar !== '')) {
                _context5.next = 11;
                break;
              }

              localStorage.setItem('avatar', avatar);
              _context5.next = 11;
              return put({
                type: 'packet',
                payload: {
                  avatar: avatar
                }
              });

            case 11:
              if (data) _antd.message.success(data.hint);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, editUser);
    }),
    editPassword: /*#__PURE__*/_regeneratorRuntime().mark(function editPassword(_ref12, _ref13) {
      var _ref12$payload, values, onCancel, call, data;

      return _regeneratorRuntime().wrap(function editPassword$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _ref12$payload = _ref12.payload, values = _ref12$payload.values, onCancel = _ref12$payload.onCancel;
              call = _ref13.call;
              _context6.next = 4;
              return call(_systemApi.editUserPassword, values);

            case 4:
              data = _context6.sent;

              if (data) {
                if (data.flag) {
                  _antd.message.success(data.info);

                  onCancel();
                }
              }

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, editPassword);
    }),
    migrateModelData: /*#__PURE__*/_regeneratorRuntime().mark(function migrateModelData(_ref14, _ref15) {
      var call, data;
      return _regeneratorRuntime().wrap(function migrateModelData$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _objectDestructuringEmpty(_ref14);

              call = _ref15.call;
              _context7.next = 4;
              return call(_metaApi.migrateModelData);

            case 4:
              data = _context7.sent;
              if (data) _antd.message.success(data.info);

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      }, migrateModelData);
    }),
    getInitSetUPS: /*#__PURE__*/_regeneratorRuntime().mark(function getInitSetUPS(_ref16, _ref17) {
      var payload, call, put, data;
      return _regeneratorRuntime().wrap(function getInitSetUPS$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              payload = _ref16.payload;
              call = _ref17.call, put = _ref17.put;
              _context8.next = 4;
              return call(_systemApi.getInitSetUPS);

            case 4:
              data = _context8.sent;

              if (!data) {
                _context8.next = 8;
                break;
              }

              _context8.next = 8;
              return put({
                type: 'packet',
                payload: {
                  initSetUPS: data
                }
              });

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, getInitSetUPS);
    }),
    queryNavigationTotal: /*#__PURE__*/_regeneratorRuntime().mark(function queryNavigationTotal(_ref18, _ref19) {
      var pageIds, call, put, data, totals, NavTotal;
      return _regeneratorRuntime().wrap(function queryNavigationTotal$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              pageIds = _ref18.payload.pageIds;
              call = _ref19.call, put = _ref19.put;
              _context9.next = 4;
              return call(_queryDataApi.queryNavigationTotal, {
                pageIds: pageIds
              });

            case 4:
              data = _context9.sent;

              if (!(data && data.flag)) {
                _context9.next = 14;
                break;
              }

              if (!data.totals.length) {
                _context9.next = 12;
                break;
              }

              totals = data.totals;
              NavTotal = {};
              totals.map(function (item) {
                NavTotal[item.pageId] = item.total;
              });
              _context9.next = 12;
              return put({
                type: 'packet',
                payload: {
                  NavTotal: NavTotal
                }
              });

            case 12:
              _context9.next = 17;
              break;

            case 14:
              if (!(!data || !data.flag)) {
                _context9.next = 17;
                break;
              }

              _context9.next = 17;
              return put({
                type: 'packet',
                payload: {
                  isLoginOut: true
                }
              });

            case 17:
            case "end":
              return _context9.stop();
          }
        }
      }, queryNavigationTotal);
    }),
    queryCustomNavigationTotal: /*#__PURE__*/_regeneratorRuntime().mark(function queryCustomNavigationTotal(_ref20, _ref21) {
      var pageList, call, put, data, totals, customNavTotal;
      return _regeneratorRuntime().wrap(function queryCustomNavigationTotal$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              pageList = _ref20.payload.pageList;
              call = _ref21.call, put = _ref21.put;
              _context10.next = 4;
              return call(_queryDataApi.queryCustomNavigationTotal, {
                pageList: pageList
              });

            case 4:
              data = _context10.sent;

              if (!(data && data.flag)) {
                _context10.next = 14;
                break;
              }

              if (!data.totals.length) {
                _context10.next = 12;
                break;
              }

              totals = data.totals;
              customNavTotal = {};
              totals.map(function (item) {
                customNavTotal[item.ID] = item.total;
              });
              _context10.next = 12;
              return put({
                type: 'packet',
                payload: {
                  customNavTotal: customNavTotal
                }
              });

            case 12:
              _context10.next = 17;
              break;

            case 14:
              if (!(!data || !data.flag)) {
                _context10.next = 17;
                break;
              }

              _context10.next = 17;
              return put({
                type: 'packet',
                payload: {
                  isLoginOut: true
                }
              });

            case 17:
            case "end":
              return _context10.stop();
          }
        }
      }, queryCustomNavigationTotal);
    })
  },
  subscriptions: {
    setup: function setup(_ref22) {
      var dispatch = _ref22.dispatch,
          history = _ref22.history;
      history.listen(function (_ref23) {
        var pathname = _ref23.pathname;

        if (pathname === '/' && localStorage.getItem('token')) {
          dispatch({
            type: 'queryMenu'
          });
        }
      });
    }
  }
};
exports.default = _default;