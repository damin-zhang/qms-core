function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* 新能源产品追溯链页面 */
import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Form, Tooltip, Select, AutoComplete, Modal, Spin, message } from 'antd';
import { queryDjgCpInfoNodeData, queryYclToDjgCpInfoNodeData, queryThToDjgCpInfoNodeData, queryRkdToDjgCpInfoNodeData } from '../../service/traceApi';
import QualityNode from '../../component/qualityTracing/QualityNode';
import TraceabilityDetailCmp from '../../component/qualityTracing/TraceabilityDetailCmp';
import ProductDetailCmp from '../../component/qualityTracing/ProductDetailCmp';
import QualityDetail from '../../component/qualityTracing/QualityDetailForm';
import { rawMaterialCols, // 原材料
productTraceCols // 成品
} from './TableColumns';
/* 原材料 - 多晶硅成品 */

var mainTableCols = {
  ycl: rawMaterialCols,
  xnycp: productTraceCols
};
var FlotFields = {
  ycl: 'FLOT',
  rkd: 'BILL_NO',
  xnycp: 'FNUMBER',
  th: 'CFTUOHAO'
};
var Api = {
  ycl: queryYclToDjgCpInfoNodeData,
  rkd: queryRkdToDjgCpInfoNodeData,
  xnycp: queryDjgCpInfoNodeData,
  th: queryThToDjgCpInfoNodeData
};

var NewEnergyBatchNodeTrace = function NewEnergyBatchNodeTrace(_ref) {
  var dispatch = _ref.dispatch,
      traceabilityDetailCmp = _ref.traceabilityDetailCmp,
      productDetailCmp = _ref.productDetailCmp,
      loading = _ref.loading,
      yclList = _ref.yclList,
      cpList = _ref.cpList,
      palletResult = _ref.palletResult,
      checkedNode = _ref.checkedNode,
      checkedType = _ref.checkedType,
      queryItem = _ref.queryItem,
      queryType = _ref.queryType;
  var queryBox = useRef();

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentNode = _useState2[0],
      setCurrentNode = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      displayPage = _useState4[0],
      setDisplayPage = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      nodeType = _useState6[0],
      setNodeType = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      nodeDetail = _useState8[0],
      setNodeDetail = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      nodeDetailType = _useState10[0],
      setNodeDetailType = _useState10[1];

  var onFinish = function onFinish() {};

  var onClose = function onClose() {
    switch (nodeType) {
      case 'ycl':
        dispatch({
          type: 'traceabilityDetailCmp/packet',
          payload: {
            BatchNodeDetail: false
          }
        });
        break;

      case 'xnycp':
        dispatch({
          type: 'productDetailCmp/packet',
          payload: {
            BatchNodeDetail: false
          }
        });
        break;

      default:
        break;
    }
  };

  useEffect(function () {
    if (!queryItem || !queryType) return;
    form.setFieldsValue({
      FLOT: queryItem[FlotFields[queryType]],
      TYPE: queryType
    });
    queryAllNodeData({
      record: queryItem,
      type: queryType
    });
    return function () {};
  }, [queryItem, queryType]);

  var queryAllNodeData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref2) {
      var record, type, params, checkedNodeKey, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              record = _ref2.record, type = _ref2.type;
              dispatch({
                type: 'newEnergyQualityNodeCmp/packet',
                payload: {
                  loading: true
                }
              });
              params = null;
              checkedNodeKey = null;
              _context.t0 = type;
              _context.next = _context.t0 === 'ycl' ? 7 : _context.t0 === 'rkd' ? 10 : _context.t0 === 'xnycp' ? 13 : _context.t0 === 'ycltocp' ? 16 : _context.t0 === 'th' ? 19 : 22;
              break;

            case 7:
              params = [{
                FLOT: record.FLOT
              }];
              checkedNodeKey = 'rawMaterialResult';
              return _context.abrupt("break", 23);

            case 10:
              params = [{
                BILL_NO: record.BILL_NO
              }];
              checkedNodeKey = 'palletResult';
              return _context.abrupt("break", 23);

            case 13:
              params = [{
                FNUMBER: record.FNUMBER
              }];
              checkedNodeKey = 'CPKHTHResult';
              return _context.abrupt("break", 23);

            case 16:
              params = [{
                FLOT: record.FLOT
              }];
              checkedNodeKey = 'CPKHTHResult';
              return _context.abrupt("break", 23);

            case 19:
              params = [{
                CFTUOHAO: record.PALLET
              }];
              checkedNodeKey = 'palletResult';
              return _context.abrupt("break", 23);

            case 22:
              return _context.abrupt("return");

            case 23:
              _context.next = 25;
              return Api[type](params);

            case 25:
              data = _context.sent;
              dispatch({
                type: 'newEnergyQualityNodeCmp/packet',
                payload: {
                  loading: false
                }
              });

              if (data) {
                dispatch({
                  type: 'newEnergyQualityNodeCmp/packet',
                  payload: {
                    yclList: data.rawMaterialResult,
                    cpList: data.CPKHTHResult,
                    palletResult: data.palletResult,
                    checkedNode: data[checkedNodeKey][0],
                    checkedType: type
                  }
                });
              }

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function queryAllNodeData(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onDoubleClick = function onDoubleClick(_ref4) {
    var item = _ref4.item,
        type = _ref4.type;
    if (type === 'kh') return;
    queryAllNodeData({
      record: item,
      type: type
    });
  };

  var onPageClose = function onPageClose() {
    setDisplayPage(false);
  };

  var qtNodeProps = {
    currentNode: currentNode,
    checkedNode: checkedNode,
    checkedType: checkedType,
    setCurrentNode: setCurrentNode,
    displayPage: displayPage,
    setDisplayPage: setDisplayPage,
    nodeType: nodeType,
    setNodeType: setNodeType,
    setNodeDetail: setNodeDetail,
    setNodeDetailType: setNodeDetailType,
    dispatch: dispatch,
    onDoubleClick: onDoubleClick
  };

  var queryBatch = function queryBatch() {
    var _form$getFieldsValue = form.getFieldsValue(),
        TYPE = _form$getFieldsValue.TYPE,
        FLOT = _form$getFieldsValue.FLOT,
        CFTXTCONTRACTNO = _form$getFieldsValue.CFTXTCONTRACTNO;

    if (!TYPE) {
      message.warning('请选择追溯维度!');
      return;
    }

    if (!FLOT || !FLOT.toString().length) {
      message.warning('请输入查询批次号!');
      return;
    }

    FLOT = FLOT.toString().replace(/\n|\r|\t/g, ''); // 去空格和换行

    var record = {};

    switch (TYPE) {
      case 'ycl':
        record.FLOT = FLOT;
        break;

      case 'rkd':
        record.BILL_NO = FLOT;
        break;

      case 'xnycp':
        record.FNUMBER = FLOT;
        break;

      case 'th':
        record.PALLET = FLOT;
        break;

      default:
        break;
    }

    queryAllNodeData({
      record: record,
      type: TYPE
    });
  };

  var querySalesNo = function querySalesNo() {
    var _form$getFieldsValue2 = form.getFieldsValue(),
        CFTXTCONTRACTNO = _form$getFieldsValue2.CFTXTCONTRACTNO;

    if (!CFTXTCONTRACTNO || !CFTXTCONTRACTNO.toString().length) {
      message.warning('请输入销售单号!');
      return;
    }

    queryAllNodeData({
      record: {
        FSALEORDERNUMBER: CFTXTCONTRACTNO
      },
      type: 'xsdh'
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "qt-container xinnengyuan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-query-box",
    ref: queryBox,
    style: {
      height: 100
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontWeight: '700'
    }
  }, "\u591A\u6676\u7845\u4EA7\u54C1\u8FFD\u6EAF\u94FE"), /*#__PURE__*/React.createElement(Form, {
    onFinish: onFinish,
    form: form
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70
    }
  }, "\u8FFD\u6EAF\u7EF4\u5EA6"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "TYPE"
  }, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: '169px'
    }
  }, /*#__PURE__*/React.createElement(Select.Option, {
    value: 'ycl'
  }, "\u539F\u6750\u6599"), /*#__PURE__*/React.createElement(Select.Option, {
    value: 'rkd'
  }, "\u5165\u5E93\u5355"), /*#__PURE__*/React.createElement(Select.Option, {
    value: 'xnycp'
  }, "\u6210\u54C1"), /*#__PURE__*/React.createElement(Select.Option, {
    value: 'th'
  }, "\u6258\u53F7")))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70
    }
  }, "\u6279\u6B21\u7F16\u53F7"), /*#__PURE__*/React.createElement(Tooltip, null, /*#__PURE__*/React.createElement(Form.Item, {
    name: "FLOT"
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    style: {
      width: '169px'
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
    htmlType: "submit",
    onClick: queryBatch
  }, "\u67E5\u8BE2"))), /*#__PURE__*/React.createElement("div", {
    className: "qt-query-form-item"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70
    }
  }, "\u9500\u552E\u5355\u53F7"), /*#__PURE__*/React.createElement(Tooltip, null, /*#__PURE__*/React.createElement(Form.Item, {
    name: "CFTXTCONTRACTNO"
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    style: {
      width: '169px'
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
    htmlType: "submit",
    onClick: querySalesNo
  }, "\u67E5\u8BE2")), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    style: {
      padding: '0 10px'
    },
    onClick: function onClick() {
      form.resetFields();
    }
  }, "\u91CD\u7F6E")))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-table"
  }, /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement("div", {
    className: "traceability-chain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-title"
  }, "\u539F\u6750\u6599"), /*#__PURE__*/React.createElement("div", {
    className: "qt-node-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-item-container"
  }, /*#__PURE__*/React.createElement(QualityNode, _extends({
    dataList: yclList,
    type: "ycl"
  }, qtNodeProps)))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-title"
  }, "\u6210\u54C1"), /*#__PURE__*/React.createElement("div", {
    className: "qt-node-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-item-container"
  }, /*#__PURE__*/React.createElement(QualityNode, _extends({
    dataList: cpList,
    type: "xnycp"
  }, qtNodeProps)))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-title"
  }, "\u6258\u53F7"), /*#__PURE__*/React.createElement("div", {
    className: "qt-node-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-item-container"
  }, /*#__PURE__*/React.createElement(QualityNode, _extends({
    dataList: palletResult,
    type: "th"
  }, qtNodeProps)))))), /*#__PURE__*/React.createElement("div", {
    className: "qt-node"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-title"
  }, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("div", {
    className: "qt-node-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qt-node-item-container"
  }, /*#__PURE__*/React.createElement(QualityNode, _extends({
    dataList: palletResult,
    type: "kh"
  }, qtNodeProps)))))))))), /*#__PURE__*/React.createElement(TraceabilityDetailCmp, {
    visible: traceabilityDetailCmp.BatchNodeDetail,
    onClose: onClose
  }), ' ', /*#__PURE__*/React.createElement(ProductDetailCmp, {
    visible: productDetailCmp.BatchNodeDetail,
    onClose: onClose
  }), ' ', /*#__PURE__*/React.createElement(Modal, {
    width: '70%',
    title: "\u6279\u6B21\u4FE1\u606F",
    onCancel: onPageClose,
    visible: displayPage,
    footer: null
  }, displayPage && /*#__PURE__*/React.createElement(QualityDetail, {
    data: mainTableCols[nodeDetailType],
    init: nodeDetail
  })));
};

function mapStateToProps(_ref5) {
  var newEnergyQualityNodeCmp = _ref5.newEnergyQualityNodeCmp,
      traceabilityDetailCmp = _ref5.traceabilityDetailCmp,
      productDetailCmp = _ref5.productDetailCmp;
  return _objectSpread(_objectSpread({}, newEnergyQualityNodeCmp), {}, {
    traceabilityDetailCmp: traceabilityDetailCmp,
    productDetailCmp: productDetailCmp
  });
}

export default connect(mapStateToProps)(NewEnergyBatchNodeTrace);