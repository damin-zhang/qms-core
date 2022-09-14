function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* 原材料批次查询页面 */
import React, { useRef, useEffect, useState } from 'react';
import { DatePicker, Button, Input, Form, Tooltip, Select, AutoComplete, Dropdown, Menu } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import Table from '../../component/common/table/ParseTable';
import TraceabilityDetailCmp from '../../component/qualityTracing/TraceabilityDetailCmp';
import './index.css';
import language from '@/locale/language';
import { materialQuery, searchFields } from '../../service/traceApi';
import { rawMaterialCols } from './TableColumns';
import { toGFTrackPage, toXNYTrackPage } from './utils';
var RangePicker = DatePicker.RangePicker;
var Option = AutoComplete.Option;
var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      BatchNodeDetail = _ref.BatchNodeDetail;
  var queryBox = useRef();

  var _useState = useState('100%'),
      _useState2 = _slicedToArray(_useState, 2),
      tableHeight = _useState2[0],
      setTableHeight = _useState2[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      dataList = _useState4[0],
      setDataList = _useState4[1];

  var _useState5 = useState(1),
      _useState6 = _slicedToArray(_useState5, 2),
      page = _useState6[0],
      setPage = _useState6[1];

  var _useState7 = useState(20),
      _useState8 = _slicedToArray(_useState7, 2),
      pageSize = _useState8[0],
      setPageSize = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      total = _useState10[0],
      setTotal = _useState10[1];

  var _useState11 = useState({}),
      _useState12 = _slicedToArray(_useState11, 2),
      val = _useState12[0],
      setVal = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      loading = _useState14[0],
      setLoading = _useState14[1];

  var _useState15 = useState([]),
      _useState16 = _slicedToArray(_useState15, 2),
      rukuFlotFields = _useState16[0],
      setRukuFlotFields = _useState16[1];

  var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      companyFields = _useState18[0],
      setCompanyFields = _useState18[1];

  var _useState19 = useState([]),
      _useState20 = _slicedToArray(_useState19, 2),
      supplierFields = _useState20[0],
      setSupplierFields = _useState20[1];

  var _useState21 = useState(''),
      _useState22 = _slicedToArray(_useState21, 2),
      tipTitleP = _useState22[0],
      setTipTitleP = _useState22[1];

  var _useState23 = useState(''),
      _useState24 = _slicedToArray(_useState23, 2),
      tipTitleZ = _useState24[0],
      setTipTitleZ = _useState24[1];

  var _useState25 = useState(''),
      _useState26 = _slicedToArray(_useState25, 2),
      tipTitleS = _useState26[0],
      setTipTitleS = _useState26[1];

  var _useState27 = useState([]),
      _useState28 = _slicedToArray(_useState27, 2),
      selectedRowKey = _useState28[0],
      setSelectedRowKey = _useState28[1];

  useEffect(function () {
    setTableHeight("calc(100% - ".concat(queryBox.current.offsetHeight, "px - 15px)"));
    searchFields().then(function (data) {
      if (data) {
        var _rukuFlotFields = [];
        _rukuFlotFields = data.rukuFlotFields && data.rukuFlotFields.filter(function (item) {
          return item !== null && item;
        });
        var _companyFields = [];
        _companyFields = data.companyFields && data.companyFields.filter(function (item) {
          return item !== null && item;
        });
        var _supplierFields = [];
        _supplierFields = data.supplierFields && data.supplierFields.filter(function (item) {
          return item !== null && item;
        }); // let materialFields=data.materialFields

        setRukuFlotFields(_rukuFlotFields);
        setCompanyFields(_companyFields);
        setSupplierFields(_supplierFields);
      }
    });
  }, []);
  var columns = [].concat(_toConsumableArray(rawMaterialCols), [{
    title: '明细',
    dataIndex: '',
    align: 'center',
    width: 120,
    fixed: 'right',
    render: function render(record) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, (record.BASEUNIT === '四川永祥新能源有限公司' || record.BASEUNIT === '四川永祥光伏科技有限公司') && /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          if (record.BASEUNIT === '四川永祥新能源有限公司') {
            toXNYTrackPage(record, 'ycl');
          } else if (record.BASEUNIT === '四川永祥光伏科技有限公司') {
            toGFTrackPage(record, 'ycl');
          }

          return;
        }
      }, "\u8FFD\u6EAF"), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: showDetails(record)
      }, "\u660E\u7EC6"));
    }
  }]);

  var showDetails = function showDetails(record) {
    return function () {
      var value = {};
      value.RECEIVINGID = record.RECEIVINGID;
      value.FSUPPLIERID = record.FSUPPLIERID;
      dispatch({
        type: 'traceabilityDetailCmp/queryDetails',
        payload: {
          value: value
        }
      });
    };
  };

  var onFinish = function onFinish(values) {
    setLoading(true);

    if (values.FAUDITTIME) {
      values.STARTTIME = moment(values.FAUDITTIME[0]).format(dateFormat);
      values.ENDTIME = moment(values.FAUDITTIME[1]).format(dateFormat);
      delete values.FAUDITTIME;
    }

    materialQuery(_objectSpread({
      page: page,
      pageSize: pageSize
    }, values)).then(function (res) {
      if (res) {
        setDataList(res.dataList);
        setTotal(res.total);
        setVal(values);
        setLoading(false);
      } else setLoading(false);
    });
  };

  var changePage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var state;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              state = false;
              _context.next = 4;
              return materialQuery(_objectSpread({
                page: page,
                pageSize: pageSize
              }, val)).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  var _dataList = data.dataList;
                  setDataList(_dataList);
                  setPage(page);
                  setPageSize(pageSize);
                  return state = true;
                }
              }).then(function (state) {
                return state;
              }).catch(function () {
                return state = true;
              });

            case 4:
              state = _context.sent;
              setLoading(false);
              return _context.abrupt("return", state);

            case 7:
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

  var getTipTitleP = function getTipTitleP(val) {
    setTipTitleP(val);
  };

  var getTipTitleZ = function getTipTitleZ(val) {
    setTipTitleZ(val);
  };

  var getTipTitleS = function getTipTitleS(val) {
    setTipTitleS(val);
  }; ///表格选中行


  var onSelectChange = function onSelectChange(selectedRowKey, selectedRows) {
    setSelectedRowKey(selectedRowKey);
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKey
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "qt-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-query-box",
    ref: queryBox
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: '700'
    }
  }, "\u539F\u6750\u6599\u6279\u6B21\u67E5\u8BE2"), /*#__PURE__*/React.createElement(Form, {
    onFinish: onFinish,
    form: form
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", null, "\u539F\u6750\u6599\u6279\u6B21"), /*#__PURE__*/React.createElement(Tooltip, {
    title: tipTitleP
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "FLOT"
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    onChange: getTipTitleP,
    style: {
      width: '169px'
    },
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, rukuFlotFields && rukuFlotFields.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item
    }, item));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", null, "\u7EC4\u7EC7\u540D\u79F0"), /*#__PURE__*/React.createElement(Tooltip, {
    title: tipTitleZ
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "COMPANYNAME"
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    onChange: getTipTitleZ,
    style: {
      width: '210px'
    },
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, companyFields && companyFields.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item
    }, item));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", null, "\u4F9B\u5E94\u5546\u540D\u79F0"), /*#__PURE__*/React.createElement(Tooltip, {
    title: tipTitleS
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "FSUPPLIERID"
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    onChange: getTipTitleS,
    style: {
      width: '169px'
    },
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, supplierFields && supplierFields.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item
    }, item));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", null, "\u7269\u6599\u7F16\u7801"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "FNUMBER"
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      width: 'auto',
      height: '32px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", null, "\u7269\u6599\u540D\u79F0"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "FNAME"
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      width: 'auto',
      height: '32px'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", null, "\u5165\u5E93\u65F6\u95F4\u8303\u56F4"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Item, {
    name: "FAUDITTIME",
    format: dateFormat
  }, /*#__PURE__*/React.createElement(RangePicker, {
    format: dateFormat,
    showTime: {
      hideDisabledOptions: true
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    style: {
      padding: '0 10px'
    },
    type: "primary",
    htmlType: "submit"
  }, "\u67E5\u8BE2")), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    style: {
      padding: '0 10px'
    },
    onClick: function onClick() {
      form.resetFields();
    }
  }, "\u91CD\u7F6E")))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-table",
    style: {
      height: tableHeight
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    data: dataList,
    pagination: true,
    paging: {
      size: 'small',
      total: total,
      showPaging: true,
      changePage: changePage,
      page: page,
      pageNumber: pageSize
    } // rowEventHandlers={{
    //   onClick: ({ rowData, event }) => { },
    //   onContextMenu: ({ rowData, event }) => {
    //     event.preventDefault()
    //   }
    // }}
    ,
    rowSelection: rowSelection,
    loading: loading,
    rowKey: "ID"
  }))), /*#__PURE__*/React.createElement(TraceabilityDetailCmp, {
    visible: BatchNodeDetail
  }));
};

function mapStateToProps(_ref3) {
  var traceabilityDetailCmp = _ref3.traceabilityDetailCmp;
  return _objectSpread({}, traceabilityDetailCmp);
}

export default connect(mapStateToProps)(Index);