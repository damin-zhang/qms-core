"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _dva = require("dva");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _antd = require("antd");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var ICON = _interopRequireWildcard(require("@ant-design/icons"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _iconNames = _interopRequireDefault(require("../../../utils/iconNames"));

var _bannerNames = _interopRequireDefault(require("../../../utils/bannerNames"));

var _Search = _interopRequireDefault(require("../../common/search/Search"));

var _reactSvg = require("react-svg");

require("./index.css");

var _api = require("../../../service/api");

var _metaApi = require("../../../service/metaApi");

var _applicationApi = require("../../../service/applicationApi");

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    procedures = _language.default.configPlatform.navMenu.procedures;
var TabPane = _antd.Tabs.TabPane;

var svgDir = require.context('../../../assets/icon/');

var columns2 = [{
  title: procedures.fields.index,
  dataIndex: 'index',
  width: 80
}, {
  title: procedures.fields.NAME,
  dataIndex: 'NAME',
  width: 150
}, {
  title: procedures.fields.DATATYPE,
  dataIndex: 'DATATYPE',
  width: 100
}, {
  title: procedures.fields.MODEL,
  dataIndex: 'MODEL'
}];
var paramsMap = {
  objectNo: {
    tn: 1,
    queryAPI: _metaApi.queryAllObject,
    searchApi: _metaApi.searchAllObject
  },
  viewNo: {
    tn: 3,
    queryAPI: _metaApi.queryObject
  },
  field: {
    tn: 11,
    queryAPI: _metaApi.queryItem
  },
  relationship: {
    tn: 2,
    queryAPI: _metaApi.queryObject
  },
  queryView: {
    tn: 3,
    queryAPI: _metaApi.queryObject
  },
  classView: {
    tn: 4,
    queryAPI: _metaApi.queryObject
  },
  procedures: {
    queryAPI: _api.queryProcedures
  },
  user: {
    queryAPI: _applicationApi.commonApi
  },
  process: {
    queryAPI: _metaApi.queryAllObject,
    searchApi: _metaApi.searchAllObject
  }
};

var SelectData = function SelectData(_ref) {
  var dispatch = _ref.dispatch,
      selectData = _ref.selectData;
  var onSelect = selectData.onSelect,
      selectedRowKeys = selectData.selectedRowKeys,
      selectedRows = selectData.selectedRows,
      visible = selectData.visible,
      columns = selectData.columns,
      type = selectData.type,
      showTab = selectData.showTab,
      dataList2 = selectData.dataList2,
      dataList = selectData.dataList,
      _selectData$isSearch = selectData.isSearch,
      isSearch = _selectData$isSearch === void 0 ? false : _selectData$isSearch,
      total = selectData.total,
      page = selectData.page,
      pageNumber = selectData.pageNumber,
      payload = selectData.payload;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataList1 = _useState2[0],
      setDataList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      icon = _useState4[0],
      setIcon = _useState4[1];

  var _useState5 = (0, _react.useState)(_iconNames.default),
      _useState6 = _slicedToArray(_useState5, 2),
      iconMap = _useState6[0],
      setIconMap = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      keyWord = _useState8[0],
      setKeyWord = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      banner = _useState10[0],
      setBanner = _useState10[1];

  (0, _react.useEffect)(function () {
    if (type === 'icon') setIconMap(_iconNames.default);

    if (dataList) {
      setDataList(dataList);
    }
  }, [type, dataList, visible]);

  var toogleModal = function toogleModal() {
    dispatch({
      type: 'selectData/packet',
      payload: {
        visible: !visible,
        selectedRowKeys: [],
        selectedRows: []
      }
    });
  };

  var Ok = function Ok() {
    if (selectedRows[0]) onSelect(selectedRows);

    if (type === 'icon') {
      onSelect(icon); //修改完图标之后清空，将之前选中置为蓝色的图标还原颜色

      setIcon(null);
    }

    if (type === 'banner') onSelect(banner);
    toogleModal();
  };

  var onSearch = function onSearch(queryWord) {
    setKeyWord(queryWord);

    if (type === 'process') {
      dispatch({
        type: 'selectData/searchProcess',
        payload: {
          keyWord: queryWord,
          page: 1,
          pageSize: 20
        }
      });
    } else {
      dispatch({
        type: type === 'authCode' ? 'selectData/searchAuthCode' : 'selectData/search',
        payload: {
          queryWord: queryWord
        }
      });
    }
  };

  var onIconSearch = function onIconSearch(queryWord) {
    if (queryWord) {
      var newMap = [];

      _iconNames.default.forEach(function (item) {
        var title = item.title,
            names = item.names;
        var arr = [];
        names.forEach(function (name) {
          if (name.indexOf(queryWord) !== -1) {
            arr.push(name);
          }
        });
        if (arr.length > 0) newMap.push({
          title: title,
          names: arr
        });
      });

      setIconMap(newMap);
    } else {
      setIconMap(_iconNames.default);
    }
  };

  var onSearchDataList = function onSearchDataList(queryWord) {
    setKeyWord(queryWord);

    if (type === 'field') {
      if (queryWord) {
        var data = dataList.filter(function (item) {
          return item.FIELDNAME.toUpperCase().indexOf(queryWord.toUpperCase()) >= 0 || item.NAME.toUpperCase().indexOf(queryWord.toUpperCase()) >= 0;
        });
        setDataList(data);
      } else {
        setDataList(dataList);
      }
    } else dispatch({
      type: 'selectData/search',
      payload: _objectSpread(_objectSpread({}, payload), {}, {
        queryWord: queryWord
      })
    });
  };

  var rowSelection = {
    type: type === 'objectNo' || type === 'process' ? 'radio' : 'checkbox',
    onChange: function onChange(selectedRowKeys, selectedRows) {
      dispatch({
        type: 'selectData/packet',
        payload: {
          selectedRowKeys: selectedRowKeys,
          selectedRows: selectedRows,
          showTab: type === 'procedures'
        }
      });

      if (type === 'procedures' && selectedRows[0]) {
        dispatch({
          type: 'selectData/queryParams',
          payload: {
            name: selectedRows[0].Name
          }
        });
      }
    },
    selectedRowKeys: selectedRowKeys
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'selectData/packet',
      payload: {
        showTab: false
      }
    });
  };

  var changePage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var type, _paramsMap$type, queryAPI, searchApi, tn, condition, state;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = payload.type;
              _paramsMap$type = paramsMap[type], queryAPI = _paramsMap$type.queryAPI, searchApi = _paramsMap$type.searchApi;
              tn = payload.tn, condition = payload.condition;
              state = false;

              if (isSearch) {
                state = searchApi({
                  tn: tn,
                  condition: condition,
                  keyWord: keyWord,
                  page: page,
                  pageSize: pageSize,
                  paging: true
                }).then(function (data) {
                  if (data === undefined || !data.flag) {
                    return state = true;
                  } else {
                    var _dataList = (0, _utils.parseMeta)(data.dataList);

                    dispatch({
                      type: 'selectData/packet',
                      payload: {
                        dataList: _dataList,
                        page: page,
                        pageNumber: pageSize
                      }
                    });
                    return state = true;
                  }
                }).then(function (state) {
                  return state;
                }).catch(function () {
                  return state = true;
                });
              } else {
                state = queryAPI({
                  tn: tn,
                  condition: condition,
                  page: page,
                  pageSize: pageSize,
                  paging: true
                }).then(function (data) {
                  if (data === undefined || !data.flag) {
                    return state = true;
                  } else {
                    var _dataList2 = (0, _utils.parseMeta)(data.dataList);

                    dispatch({
                      type: 'selectData/packet',
                      payload: {
                        dataList: _dataList2,
                        page: page,
                        pageNumber: pageSize
                      }
                    });
                    return state = true;
                  }
                }).then(function (state) {
                  return state;
                }).catch(function () {
                  return state = true;
                });
              }

              return _context.abrupt("return", state);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function changePage(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var paging = {
    size: 'small',
    total: total,
    changePage: changePage,
    showPaging: true,
    page: page,
    pageNumber: pageNumber
  };
  var props = {
    dataList: dataList1,
    columns: columns,
    rowSelection: rowSelection,
    onSearch: type !== 'user' && type !== 'field' && type !== 'objectNo' && type !== 'procedures' ? onSearch : onSearchDataList,
    paging: type === 'process' ? paging : null
  };
  var props2 = {
    dataList: dataList2,
    columns: columns2
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, visible && /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: common.select,
    visible: visible,
    onOk: Ok,
    onCancel: toogleModal,
    zIndex: 1010,
    height: 500
  }, type === 'icon' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: onIconSearch
  }), iconMap.map(function (item) {
    return item.title === '第三方图标库' ? /*#__PURE__*/_react.default.createElement("div", {
      key: item.title
    }, /*#__PURE__*/_react.default.createElement("p", {
      style: {
        margin: '5px 0 2px 0'
      }
    }, item.title), /*#__PURE__*/_react.default.createElement("div", null, item.names.map(function (item) {
      var newIconName = item.substring(6); //去掉第三方图标“third-”标识，获取svg图片的名称

      return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: newIconName,
        key: newIconName
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, null, /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        className: icon === item ? 'btn-icons' : 'svg-icons',
        src: svgDir("./".concat(newIconName, ".svg")),
        onClick: function onClick() {
          return setIcon(item);
        } //当选中图标时将该图标置为蓝色

      })));
    }))) : /*#__PURE__*/_react.default.createElement("div", {
      key: item.title
    }, /*#__PURE__*/_react.default.createElement("p", {
      style: {
        margin: '5px 0 2px 0'
      }
    }, item.title), /*#__PURE__*/_react.default.createElement("div", null, item.names.map(function (item) {
      var Icon = ICON["".concat(item, "Outlined")];
      return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: item,
        key: item
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        icon: Icon && /*#__PURE__*/_react.default.createElement(Icon, null),
        style: {
          margin: '2px'
        },
        onClick: function onClick() {
          return setIcon(item);
        }
      }));
    })));
  })) : type === 'banner' ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, _bannerNames.default.map(function (name) {
    return /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: function onClick() {
        return setBanner(name);
      },
      style: {
        width: '49%',
        height: 'auto',
        padding: '1px'
      }
    }, /*#__PURE__*/_react.default.createElement("img", {
      width: "100%",
      src: require("../../../assets/Banners/".concat(name))
    }));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      right: true
    },
    showTab: showTab
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, _extends({}, props, {
    paging: paging
  }))), showTab && type === 'procedures' && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-x"
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    defaultActiveKey: "1",
    tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/_react.default.createElement(ICON.CloseOutlined, null),
      onClick: closeTab
    })
  }, /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: procedures.title2,
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, props2))))))));
};

function mapStateToProps(_ref3) {
  var selectData = _ref3.selectData;
  return {
    selectData: selectData
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(SelectData);

exports.default = _default;