"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _userListFrom = _interopRequireDefault(require("./userListFrom"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _Search = _interopRequireDefault(require("../../../component/common/search/Search"));

var _AntdPagination = _interopRequireDefault(require("../../common/table/AntdPagination"));

var _systemApi = require("../../../service/systemApi");

require("./index.css");

var _lodash = require("lodash");

var _excluded = ["dispatch"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var common = _language.default.common,
    _language$userManage$ = _language.default.userManage.staffManage,
    buttons = _language$userManage$.buttons,
    fields = _language$userManage$.fields,
    staffUser = _language$userManage$.staffUser;
var Item = _antd.Menu.Item;

var UserList = function UserList(_ref) {
  var dispatch = _ref.dispatch,
      StaffManage = _objectWithoutProperties(_ref, _excluded);

  var _StaffManage$dataList = StaffManage.dataList1,
      dataList1 = _StaffManage$dataList === void 0 ? [] : _StaffManage$dataList,
      disabled1 = StaffManage.disabled1,
      total = StaffManage.total,
      record1 = StaffManage.record1,
      selectedRows = StaffManage.selectedRows,
      selectedRows1 = StaffManage.selectedRows1,
      selectedRowKeys1 = StaffManage.selectedRowKeys1,
      selectedRows2 = StaffManage.selectedRows2,
      toogleMoveNodeModal = StaffManage.toogleMoveNodeModal,
      openImportModal = StaffManage.openImportModal,
      _StaffManage$isSearch = StaffManage.isSearch,
      isSearch = _StaffManage$isSearch === void 0 ? false : _StaffManage$isSearch,
      page = StaffManage.page,
      pageNumber = StaffManage.pageNumber;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      keyWord = _useState4[0],
      setKeyWord = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var detail = function detail() {
    var record1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var disabled1 = arguments.length > 1 ? arguments[1] : undefined;
    setVisible(!visible);
    var inTime = record1.inTime;
    if (inTime) record1.inTime = (0, _dayjs.default)(record1.inTime);
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        record1: record1,
        disabled1: disabled1
      }
    });

    if (record1 && record1.deptId) {
      var params = record1.deptId;

      if (record1.deptId) {
        dispatch({
          type: 'StaffManage/deptUserInfo',
          payload: {
            deptId: params
          }
        });
        return;
      } else {
        _antd.message.error(fields.NODEPT);

        return;
      }
    }
  };

  var rowSelection = {
    selectedRowKeys: selectedRowKeys1
  };

  var onChange = function onChange(rows) {
    var row = [];
    dataList1.map(function (item) {
      rows.map(function (item1) {
        if (item1 === item.id) {
          row.push(item);
        }
      });
    });
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        selectedRowKeys1: rows,
        selectedRows1: row
      }
    });
  };

  var del = function del(row) {
    dispatch({
      type: 'StaffManage/delStaff',
      payload: {
        selectedRows: selectedRows,
        hData: row
      }
    });
  };

  var assignModelAuth = function assignModelAuth(row) {
    dispatch({
      type: 'StaffManage/assignModelAuth',
      payload: {
        selectedRows: selectedRows,
        users: row,
        metaState: !row[0].allowMeta
      }
    });
  };

  var resetPassword = function resetPassword(row) {
    dispatch({
      type: 'StaffManage/resetUserPassword',
      payload: {
        data: row
      }
    });
  };

  var disableUser = function disableUser(row) {
    dispatch({
      type: 'StaffManage/disableUser',
      payload: {
        selectedRows: selectedRows,
        hData: row,
        disabled: !row[0].disabled
      }
    });
  }; // 导出用户信息


  var exportInformation = function exportInformation(state) {
    (0, _utils.confirm)({
      title: state === 0 ? common.confirm + '导出' + buttons.export_disabled : common.confirm + buttons.export_userAll,
      onOk: function onOk() {
        return dispatch({
          type: 'StaffManage/exportInformation',
          payload: {
            hData: selectedRows,
            state: state
          }
        });
      }
    });
  };

  var onSearch = function onSearch(keyWord) {
    setKeyWord(keyWord);

    if (selectedRows && selectedRows.length) {
      dispatch({
        type: 'StaffManage/searchAllStaffData',
        payload: {
          keyWord: keyWord,
          page: 1,
          pageSize: 20,
          deptId: selectedRows[0].pid === '0' ? 0 : selectedRows[0].id
        }
      });
    }
  };

  var changePage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var state;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = false;

              if (!isSearch) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return (0, _systemApi.searchPersonnel)({
                deptId: selectedRows[0].pid === '0' ? 0 : selectedRows[0].id,
                page: page,
                pageSize: pageSize,
                keyWord: keyWord
              }).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  var dataList = data.dataList;
                  dispatch({
                    type: 'StaffManage/packet',
                    payload: {
                      dataList1: dataList,
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

            case 4:
              state = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return (0, _systemApi.spersonnelQuery)({
                deptId: selectedRows[0].pid === '0' ? 0 : selectedRows[0].id,
                page: page,
                pageSize: pageSize
              }).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  var dataList = data.dataList;
                  dispatch({
                    type: 'StaffManage/packet',
                    payload: {
                      dataList1: dataList,
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

            case 9:
              state = _context.sent;

            case 10:
              return _context.abrupt("return", state);

            case 11:
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

  var setLoading = function setLoading(stateBoolean) {
    setIsLoading(stateBoolean);
  };

  var getType = function getType(item) {
    if (item.type === '0') return fields.INTERNALUSER;else if (item.type === '1') return fields.SUPPLIER;else if (item.type === '2') return fields.CUSTOMER;else return fields.UNCLASSIFIED;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "ProList"
  }, selectedRows[0] && /*#__PURE__*/_react.default.createElement("div", {
    className: "list-toolbar"
  }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: buttons.Personnel_adjustment
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length === 1),
    onClick: toogleMoveNodeModal
  }, /*#__PURE__*/_react.default.createElement(_icons.NodeCollapseOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: buttons.create_staff
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: selectedRows[0] && selectedRows[0].pid === '0' ? true : false,
    onClick: detail.bind(detail, {
      deptId: selectedRows[0] && selectedRows[0].id
    }, false)
  }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: buttons.delete_staff
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length),
    onClick: function onClick() {
      return (0, _utils.confirm)({
        title: common.confirm + buttons.delete_staff,
        onOk: del.bind(del, selectedRows1)
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: buttons.import_staff
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows[0].pid !== '0'),
    onClick: function onClick() {
      openImportModal('staff');
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.UsbOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: buttons.update_staff
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length === 1),
    onClick: detail.bind(detail, selectedRows1[0], false)
  }, /*#__PURE__*/_react.default.createElement(_icons.FormOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: staffUser.buttons.assign_role
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length === 1),
    onClick: function onClick() {
      dispatch({
        type: "assignRole/query",
        payload: {
          selectedRows: [selectedRows1[0]]
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.PartitionOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: selectedRows1.length && selectedRows1[0].allowMeta ? staffUser.buttons.cancel_model_authority : staffUser.buttons.assign_model_authority
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length),
    onClick: function onClick() {
      (0, _utils.confirm)({
        title: common.confirm + (selectedRows1[0].allowMeta ? staffUser.buttons.cancel_model_authority : staffUser.buttons.assign_model_authority),
        onOk: assignModelAuth.bind(assignModelAuth, [selectedRows1[0]])
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.LayoutOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: staffUser.buttons.reset_password
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length),
    onClick: function onClick() {
      (0, _utils.confirm)({
        title: common.confirm + staffUser.buttons.reset_password,
        onOk: resetPassword.bind(resetPassword, selectedRows1[0])
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.ReloadOutlined, null))), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: selectedRows1.length && selectedRows1[0].disabled ? staffUser.buttons.user_enabled : staffUser.buttons.user_disabled
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(selectedRows[0] && selectedRows1.length),
    onClick: function onClick() {
      (0, _utils.confirm)({
        title: common.confirm + (selectedRows1[0].disabled ? staffUser.buttons.user_enabled : staffUser.buttons.user_disabled),
        onOk: disableUser.bind(disableUser, [selectedRows1[0]])
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.StopOutlined, null))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    overlay: /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(Item, {
      key: "1",
      disabled: !selectedRows[0],
      onClick: exportInformation.bind(exportInformation, 0)
    }, buttons.export_disabled), /*#__PURE__*/_react.default.createElement(Item, {
      key: "2",
      disabled: !selectedRows[0],
      onClick: exportInformation.bind(exportInformation, 1)
    }, buttons.export_userAll))
  }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: buttons.export_employeeInformation
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary"
  }, /*#__PURE__*/_react.default.createElement(_icons.RotateRightOutlined, null))))), /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: onSearch
  })), selectedRows[0] && /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
    onChange: onChange,
    defaultValue: selectedRowKeys1
  }, /*#__PURE__*/_react.default.createElement(_antd.List, {
    rowKey: "id",
    dataSource: dataList1,
    showActions: "always",
    rowSelection: rowSelection,
    loading: isLoading,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/_react.default.createElement(_antd.List.Item, {
        key: item.id,
        extra: /*#__PURE__*/_react.default.createElement("div", {
          className: "ant-list-item-extra"
        })
      }, /*#__PURE__*/_react.default.createElement(_antd.List.Item.Meta, {
        avatar: /*#__PURE__*/_react.default.createElement(_antd.Space, {
          size: 0
        }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
          value: item.id,
          key: item.id,
          style: {
            marginRight: '12px'
          }
        }), /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
          size: 50,
          src: item.avatar,
          icon: /*#__PURE__*/_react.default.createElement(_icons.UserOutlined, null)
        })),
        title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
          onClick: detail.bind(detail, item, true),
          className: item.sax === 0 ? 'ant-list-item-meta-main-title red' : 'ant-list-item-meta-main-title blue'
        }, item.suName), /*#__PURE__*/_react.default.createElement(_antd.Space, {
          size: 0
        }, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          color: "blue",
          style: {
            width: '120px',
            textAlign: 'center',
            display: 'flex'
          }
        }, fields.USERNAME, ":", item.name), /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          color: "#5BD8A6",
          style: {
            width: '120px',
            textAlign: 'center',
            display: 'flex'
          }
        }, fields.SUNO, ":", item.no), /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          color: "#FF6600",
          style: {
            width: '120px',
            textAlign: 'center',
            display: 'flex',
            fontWeight: 'bold'
          }
        }, getType(item)))),
        description: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, ' ', fields.MAIL, ":", item.mail), /*#__PURE__*/_react.default.createElement("span", {
          style: {
            paddingLeft: '20px'
          }
        }, ' ', fields.SUTEL, ":", item.tel))
      }));
    }
  })), selectedRows[0] && /*#__PURE__*/_react.default.createElement(_userListFrom.default, {
    visible: visible,
    record: record1,
    selectedRows: selectedRows,
    selectedRows2: selectedRows2,
    disabled1: disabled1,
    onCancel: function onCancel() {
      return setVisible(!visible);
    }
  })), /*#__PURE__*/_react.default.createElement(_AntdPagination.default, {
    paging: _objectSpread({}, paging),
    setLoading: setLoading
  }));
};

function mapStateToProps(_ref3) {
  var StaffManage = _ref3.StaffManage;
  return _objectSpread({}, StaffManage);
}

var _default = (0, _dva.connect)(mapStateToProps)(UserList);

exports.default = _default;