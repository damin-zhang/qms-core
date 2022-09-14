function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 逆向超期质检报告
 */
import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'dva';
import { exportPdf, exportExcel } from '../../../service/uploadApi';
import { Form, Table, Select, Button, Drawer, InputNumber, message, Input, Tooltip, Modal } from 'antd';
import SearchInput from '../../common/search/SearchInput';
import SearchSelect from '../../common/search/SearchSelect';
import DragModal from '../../common/drag/DragModal';
import UserSelectForm from '../../userManage/userSelectForm';
import styles from '../tab/index.less';
import './index.css';
import classNames from 'classnames';
import { confirm, showLoading, hideLoading } from '../../../utils/utils';
import { downloadFiles } from '../../../service/uploadApi';
import CustomBrowseFiles from '../customWindow/CustomBrowseFiles';
var Item = Form.Item;
var Option = Select.Option;
var TextArea = Input.TextArea;
var tableHeader = [[{
  name: '检验单号',
  value: 'INSPECTION_ORDER_NUMBER',
  width: '18%'
}, {
  name: '收货单号',
  value: 'RECEIPT_NUMBER',
  width: '45%'
}, {
  name: '检验日期',
  value: 'IET',
  width: '18%'
}], [{
  name: '物料编号',
  value: 'MATERIAL_CODE'
}, {
  name: '物料名称',
  value: 'MATERIAL_NAME'
}, {
  name: '报检日期',
  value: 'INSPECTION_TIME'
}], [{
  name: '报检数量',
  value: 'QUANTITY_OF_INSPECTION'
}, {
  name: '供应商品牌',
  value: 'SUPPLIER_BRAND'
}, {
  name: '检验类型',
  value: 'TYPE_OF_INSPECTION',
  map: {
    A: '正常检验',
    B: '放宽检验',
    C: '免检',
    D: '加严检验'
  }
}]];
var tableFooter = [[{
  name: '不良描述',
  value: 'POOR_DESCRIPTION',
  colSpan: '7',
  height: '50px'
}], [{
  name: 'SQE',
  value: 'SQE'
}, {
  name: 'IQC判定结果',
  value: 'TEST_CONCLUSION',
  backgroundColor: '#FFF'
}, {
  name: '严重不良数',
  value: 'SEVERE_DEFECTS'
}, {
  name: '轻微不良数',
  value: 'MINOR_DEFECTS'
}]];

var getMergeRowNum = function getMergeRowNum(col_name, row, dataSource) {
  var compare_col_name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var temp = {};
  var n = 0;

  if (col_name !== temp[col_name]) {
    temp[col_name] = row[col_name];
    dataSource.forEach(function (e) {
      if (compare_col_name !== null) {
        if (e[col_name] === temp[col_name] && e[compare_col_name] === row[compare_col_name]) {
          n += 1;
        }
      } else {
        if (e[col_name] === temp[col_name]) {
          n += 1;
        }
      }
    });
  }

  return n;
};

var ReverseRualityReport = function ReverseRualityReport(_ref) {
  var dispatch = _ref.dispatch,
      qualityVisible = _ref.qualityVisible,
      list = _ref.list,
      dataList = _ref.dataList,
      _ref$footerList = _ref.footerList,
      footerList = _ref$footerList === void 0 ? [] : _ref$footerList,
      hData = _ref.hData,
      objectNo = _ref.objectNo,
      userVisible = _ref.userVisible,
      objectANamespace = _ref.objectANamespace,
      objectADataList = _ref.objectADataList,
      id = _ref.id,
      namespace = _ref.namespace,
      attachmentVisible = _ref.attachmentVisible,
      attachmentList = _ref.attachmentList,
      filePreviewVisible = _ref.filePreviewVisible,
      file = _ref.file,
      fileRecord = _ref.fileRecord;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var childRef = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      flag1 = _useState2[0],
      setflag1 = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      flag2 = _useState4[0],
      setflag2 = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      flag3 = _useState6[0],
      setflag3 = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      flag4 = _useState8[0],
      setflag4 = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      buyer = _useState10[0],
      setBuyer = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      CARBON_COPY = _useState12[0],
      setCARBON_COPY = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      hisBuys = _useState14[0],
      setHisBuys = _useState14[1];

  var _useState15 = useState(''),
      _useState16 = _slicedToArray(_useState15, 2),
      editor = _useState16[0],
      setEditor = _useState16[1];

  var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      attachmentDataSource = _useState18[0],
      setAttachmentDataSource = _useState18[1];

  var disabledState = hData && hData[0].STATE === 0 || hData && hData[0].STATE === null ? false : true;
  useEffect(function () {
    if (!disabledState) {
      form.validateFields(['BUYER', 'RESPONSIBLE', 'SPECIAL_MINING_QUANTITY', 'SQE_NOTES']);
    }
  }, [disabledState, flag1, flag2, flag3, form]);
  useEffect(function () {
    // 打开页面抄送人值回填
    if (footerList && footerList.length) {
      setBuyer(footerList[0].BUYER);
      footerList[0].CARBON_COPY = hData[0].CARBON_COPY;
      var arr = footerList[0].CARBON_COPY && !Array.isArray(footerList[0].CARBON_COPY) && footerList[0].CARBON_COPY.split(',') || [];
      arr = Array.from(new Set(arr)); // 储存默认抄送人数据

      setCARBON_COPY(arr);
      footerList[0].CARBON_COPY = arr.map(function (item, index) {
        return item.substr(arr[index].indexOf(':') + 1);
      });
      setHisBuys(footerList[0].CARBON_COPY);
      footerList[0].BUYER = footerList[0].BUYER && footerList[0].BUYER.substr(footerList[0].BUYER.indexOf(':') + 1);
      form.setFieldsValue(footerList[0]);
    }
  }, [footerList, hData]);
  useEffect(function () {
    if (footerList && footerList.length) {
      footerList.map(function (item) {
        if (item.SQE_CONCLUSION) {
          if (item.SQE_CONCLUSION === 'D') {
            setflag3(true);
            setflag1(true);
            setflag2(false);
            setflag4(false);
          } else if (item.SQE_CONCLUSION === 'B' || item.SQE_CONCLUSION === 'C') {
            setflag2(true);
            setflag1(true);
            setflag3(false);
            setflag4(false);
          } else if (item.SQE_CONCLUSION === 'A' || item.SQE_CONCLUSION === 'E' || item.SQE_CONCLUSION === 'F' || !item.SQE_CONCLUSION) {
            if (item.SQE_CONCLUSION === 'A' || item.SQE_CONCLUSION === 'E' || !item.SQE_CONCLUSION) {
              setflag4(true);
            } else {
              setflag2(false);
              setflag1(false);
              setflag3(false);
              setflag4(false);
            }
          }
        }
      });
    }
  }, [footerList[0], form]);
  var columns = [{
    title: '类别',
    dataIndex: 'ITEM_CATEGORY',
    align: 'center',
    width: '5%',
    render: function render(text, record, index) {
      return _render(text, 'ITEM_CATEGORY', record, index);
    }
  }, {
    title: '检验项目',
    dataIndex: 'CORRESPONDING_DETAILS_OF_INSPECTION_TEMS',
    width: '8%',
    align: 'center'
  }, {
    title: '检验重点',
    dataIndex: 'CDOIT',
    align: 'left'
  }, {
    title: '检验工具',
    dataIndex: 'DETECTION_TOOL',
    width: '6%',
    align: 'center'
  }, {
    title: '抽样数',
    dataIndex: 'SQ',
    align: 'center',
    width: '5%'
  }, {
    title: '缺陷类型',
    dataIndex: 'DEFECT_TYPE',
    align: 'center',
    width: '6%'
  }, {
    title: '缺陷数',
    dataIndex: 'NOSDS',
    align: 'center',
    width: '6%'
  }, {
    title: '缺陷值',
    dataIndex: 'DEFECT_VALUE',
    align: 'center',
    width: '4%'
  }, {
    title: '允收水品AC/RE',
    dataIndex: 'AC/RE',
    align: 'center',
    width: '7%',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("span", null, record.AC + '/' + record.RE);
    }
  }, {
    title: '检验结果',
    dataIndex: 'TR',
    align: 'center',
    width: '6%',
    render: function render(text) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: text === 'OK' ? '#92D050' : text === 'NG' ? '#F93617' : null,
          color: text === 'OK' ? '#000' : text === 'NG' ? '#fff' : null
        }
      }, text);
    }
  }, {
    title: '备注',
    dataIndex: 'REMARK',
    align: 'center',
    width: '10%'
  }, {
    title: 'USL',
    dataIndex: 'USL',
    align: 'center',
    width: '3%'
  }, {
    title: 'LSL',
    dataIndex: 'LSL',
    align: 'center',
    width: '3%'
  }, {
    title: '1',
    dataIndex: 'NO',
    align: 'center',
    width: '3%',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("p", {
        style: {
          backgroundColor: record && record.list && record.list[0] && record.list[0].TR === 'NG' ? '#F93617' : '',
          color: record && record.list && record.list[0] && record.list[0].TR === 'NG' ? '#fff' : '#000',
          margin: '0',
          height: 32,
          lineHeight: '32px'
        }
      }, record && record.list && record.list[0] && record.list[0].TV);
    }
  }, {
    title: '2',
    dataIndex: 'NO',
    align: 'center',
    width: '3%',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("p", {
        style: {
          backgroundColor: record && record.list && record.list[1] && record.list[1].TR === 'NG' ? '#F93617' : '',
          color: record && record.list && record.list[0] && record.list[0].TR === 'NG' ? '#fff' : '#000',
          margin: '0',
          height: 32,
          lineHeight: '32px'
        }
      }, record && record.list && record.list[1] && record.list[1].TV);
    }
  }, {
    title: '3',
    dataIndex: 'NO',
    align: 'center',
    width: '4%',
    render: function render(text, record) {
      if (record && record.list && record.list.length > 3) {
        return /*#__PURE__*/React.createElement(Select, {
          defaultValue: record.list[2].TV,
          bordered: false,
          style: {
            backgroundColor: record.list[2].TR === 'NG' ? '#F93617' : '',
            color: record && record.list && record.list[0] && record.list[0].TR === 'NG' ? '#fff' : '#000',
            margin: '0',
            height: 32,
            lineHeight: '32px'
          }
        }, record.list.map(function (item, index) {
          return item.NO > 3 && /*#__PURE__*/React.createElement(Option, {
            disabled: true,
            key: index,
            style: {
              backgroundColor: record.list[0].TR === 'NG' ? '#F93617' : '',
              color: record && record.list && record.list[0] && record.list[0].TR === 'NG' ? '#fff' : '#000',
              margin: '0',
              height: 32,
              lineHeight: '32px'
            }
          }, item.NO + ': ' + item.TV);
        }));
      } else return /*#__PURE__*/React.createElement("p", {
        style: {
          backgroundColor: record && record.list && record.list[2] && record.list[2].TR === 'NG' ? '#F93617' : '',
          color: record && record.list && record.list[0] && record.list[0].TR === 'NG' ? '#fff' : '#000',
          margin: '0',
          height: 32,
          lineHeight: '32px'
        }
      }, record && record.list && record.list[2] && record.list[2].TV);
    }
  }]; // 附件下载表格列

  var attachmentColumns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
    render: function render(text, record, index) {
      return index + 1;
    }
  }, {
    title: '附件',
    dataIndex: 'FNAME',
    key: 'FNAME',
    align: 'center'
  }, {
    title: '操作',
    width: 80,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return lookFile(record);
        },
        style: {
          color: '#FFF',
          backgroundColor: '#1890ff'
        }
      }, ' ', "\u9884\u89C8", ' '), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return downloadFile(record);
        },
        style: {
          color: '#FFF',
          backgroundColor: '#1890ff'
        }
      }, ' ', "\u4E0B\u8F7D", ' '));
    }
  }];
  useEffect(function () {
    if (attachmentList) {
      var attachmentDataS = attachmentList.attachmentDataS;
      var attList = attachmentDataS;
      setAttachmentDataSource(attList);
    }
  }, [attachmentList]); // 附件点击下载文件

  var downloadFile = function downloadFile(record) {
    var objectNo = attachmentList.objectNo;
    var hData = [record];
    downloadFiles({
      objectNo: objectNo,
      hData: hData
    });
  };

  var _render = function _render(text, filed, record, index) {
    var obj = {
      children: text,
      props: {}
    };

    if (index > 0 && record[filed] !== dataList[index - 1][filed] || index === 0) {
      obj.props.rowSpan = getMergeRowNum(filed, record, dataList);
    } else {
      obj.props.rowSpan = 0;
    }

    return obj;
  };

  var toomodelUser = function toomodelUser(editor) {
    return function () {
      setEditor(editor);
      dispatch({
        type: 'reverseRualityReport/packet',
        payload: {
          userVisible: !userVisible
        }
      });
    };
  };

  var selectOk = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, emailList, recipient, hisBuyers;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return childRef.current.Ok();

            case 2:
              res = _context.sent;

              if (!(JSON.stringify(res) === '{}')) {
                _context.next = 6;
                break;
              }

              message.warn('请选择有效数据');
              return _context.abrupt("return");

            case 6:
              if (editor === 'UserSelector') {
                setBuyer(res.NAME);
                form.setFieldsValue({
                  BUYER: res.NAME.substr(res.NAME.indexOf(':') + 1)
                });
              }

              if (editor === 'UsersSelector') {
                // emailList获取当前表单所有值
                emailList = form.getFieldValue('CARBON_COPY'); // recipient 带：的数据 进行去重

                recipient = Array.from(new Set([].concat(_toConsumableArray(CARBON_COPY), _toConsumableArray(res.NAMEr)))); // hisBuyers表单数据 进行去重

                hisBuyers = Array.from(new Set([].concat(_toConsumableArray(emailList), _toConsumableArray(res.NAME))));
                setHisBuys(hisBuyers);
                setCARBON_COPY(recipient);
                form.setFieldsValue({
                  CARBON_COPY: hisBuyers
                });
              }

              toomodelUser()();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selectOk() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDeselect = function onDeselect(value) {};

  var getTable = function getTable(fieldData, footer, list) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
      border: "1",
      style: {
        width: '100%'
      }
    }, fieldData.map(function (item) {
      return /*#__PURE__*/React.createElement("tr", {
        style: {
          width: '100%',
          textAlign: 'center'
        }
      }, item.map(function (td) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("td", {
          style: {
            width: '10%'
          },
          rowSpan: td.rowSpan
        }, td.name), /*#__PURE__*/React.createElement("td", {
          style: {
            width: footer && td.colSpan ? '87%' : td.width,
            backgroundColor: footer ? td.backgroundColor && getFieldVal(td.value, list, td.map) === 'OK' ? '#92D050' : td.backgroundColor && getFieldVal(td.value, list, td.map) === 'NG' ? '#F93617' : null : '#92D050',
            whiteSpace: 'break-spaces',
            color: td.backgroundColor && getFieldVal(td.value, list, td.map) === 'NG' ? '#fff' : null,
            height: td.height
          },
          colSpan: td.colSpan,
          rowSpan: td.rowSpan
        }, getFieldVal(td.value, list, td.map)));
      }));
    }), footer && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("td", {
      colSpan: "8",
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Form, {
      name: "property",
      onFinish: onFinish,
      form: form,
      layout: "inline"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: '10px'
      } // className={styles.R_Form}

    }, /*#__PURE__*/React.createElement(Item, {
      name: "SQE_CONCLUSION",
      rules: [{
        required: true
      }],
      label: "SQE\u7ED3\u8BBA",
      style: {
        width: '220px'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      disabled: disabledState,
      showArrow: false,
      allowClear: true,
      onChange: function onChange(val) {
        if (val) {
          if (val === 'D') {
            setflag3(true);
            setflag1(true);
            setflag2(false);
            setflag4(false);
            form.setFieldsValue({
              SPECIAL_MINING_QUANTITY: ''
            });
          } else if (val === 'B' || val === 'C') {
            setflag2(true);
            setflag1(true);
            setflag3(false);
            setflag4(false);
            form.setFieldsValue({
              BUYER: ''
            });
          } else if (val === 'A' || val === 'E') {
            setflag2(false);
            setflag1(false);
            setflag3(false);
            setflag4(true);
            form.setFieldsValue({
              RESPONSIBLE: '',
              SPECIAL_MINING_QUANTITY: '',
              BUYER: ''
            });
          }
        }
      }
    }, /*#__PURE__*/React.createElement(Option, {
      value: 'A',
      disabled: true
    }, "\u5408\u683C\u63A5\u6536"), /*#__PURE__*/React.createElement(Option, {
      value: 'C'
    }, "\u7279\u91C7\u8DDF\u8E2A\u4F7F\u7528"), /*#__PURE__*/React.createElement(Option, {
      value: 'B'
    }, "\u7279\u91C7\u76F4\u63A5\u4F7F\u7528"), /*#__PURE__*/React.createElement(Option, {
      value: 'D'
    }, "SQE\u76F4\u63A5\u62A5\u5E9F"), /*#__PURE__*/React.createElement(Option, {
      value: 'E'
    }, "\u9A73\u56DE\u5230IQC"), /*#__PURE__*/React.createElement(Option, {
      value: 'F',
      disabled: true
    }, "\u5408\u683C"))), /*#__PURE__*/React.createElement(Item, {
      name: "SPECIAL_MINING_QUANTITY",
      rules: [{
        required: flag2 ? true : false,
        type: 'number',
        min: 0,
        max: footerList.length && footerList[0].IQ
      }],
      label: "\u7279\u91C7\u6570\u91CF",
      style: {
        width: '220px'
      }
    }, /*#__PURE__*/React.createElement(InputNumber, {
      style: {
        width: '100%'
      },
      disabled: disabledState || !flag2
    })), /*#__PURE__*/React.createElement(SearchInput, {
      name: "BUYER",
      className: "whole-line",
      onClick: disabledState || !flag3 ? null : toomodelUser('UserSelector'),
      label: "\u91C7\u8D2D\u5458",
      rules: [{
        required: flag3,
        message: '必填字段'
      }],
      style: {
        width: '220px'
      }
    }), /*#__PURE__*/React.createElement(SearchSelect, {
      name: "CARBON_COPY",
      className: "whole-line",
      onClick: toomodelUser('UsersSelector'),
      label: "\u6284\u9001\u4EBA",
      onChange: onDeselect,
      style: {
        display: 'flex',
        width: 'calc(100% - 680px)'
      },
      disabled: disabledState
    }), /*#__PURE__*/React.createElement(Item, {
      name: "SQE_NOTES",
      rules: [{
        required: flag4
      }],
      label: "SQE\u5907\u6CE8",
      style: {
        width: '99%'
      }
    }, /*#__PURE__*/React.createElement(TextArea, {
      disabled: disabledState
    })))))), /*#__PURE__*/React.createElement("tr", {
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        width: '100%'
      },
      colSpan: "8"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-around'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u68C0\u9A8C\u5458\uFF1A", getFieldVal('FI', footerList)), /*#__PURE__*/React.createElement("span", null, "\u5BA1\u6838\uFF1A", getFieldVal('TEAML', footerList))))))));
  };

  var onFinish = function onFinish(value) {
    value.BUYER = buyer;
    var carbonCopy = []; // push 带:的值

    for (var i = 0; i < CARBON_COPY.length; i++) {
      if (value.CARBON_COPY.indexOf(CARBON_COPY[i].substr(CARBON_COPY[i].indexOf(':') + 1)) > -1) {
        carbonCopy.push(CARBON_COPY[i]);
      }
    } // push自由输入的值


    var arr = carbonCopy.map(function (item, index) {
      return item.substr(carbonCopy[index].indexOf(':') + 1);
    });

    for (var _i2 = 0; _i2 < value.CARBON_COPY.length; _i2++) {
      if (arr.indexOf(value.CARBON_COPY[_i2]) < 0) {
        carbonCopy.push(value.CARBON_COPY[_i2]);
      }
    }

    value.CARBON_COPY = carbonCopy.join(',');
    var values = {};
    values.otherParam = value;
    values.hData = hData;
    values.implClass = 'rj.reverse.overdue.ActStartSqeNxProcessEvent';
    values.objectNo = objectNo;
    dispatch({
      type: 'reverseRualityReport/repOnFinish',
      payload: {
        values: values,
        objectANamespace: objectANamespace,
        objectADataList: objectADataList,
        menuId: id,
        namespace: namespace
      }
    });
  };

  var getFieldVal = function getFieldVal(field, data, map) {
    var value = '';
    data && data.map(function (item) {
      if (field && item.hasOwnProperty(field)) {
        if (map) {
          value = map[item[field]];
        } else value = item[field];
      }
    });
    return value;
  };

  var onCancel = function onCancel() {
    dispatch({
      type: 'reverseRualityReport/packet',
      payload: {
        qualityVisible: !qualityVisible
      }
    });
  }; // 附件下载


  var downloadAttachment = function downloadAttachment() {
    dispatch({
      type: 'reverseRualityReport/downloadAttachment',
      payload: {
        values: {
          implClass: 'iqc.IQCGetFIleEvent',
          hData: hData,
          objectNo: objectNo
        }
      }
    });
  };

  var attachmentCancel = function attachmentCancel() {
    return dispatch({
      type: 'reverseRualityReport/packet',
      payload: {
        attachmentVisible: false
      }
    });
  }; // 附件预览


  var lookFile = function lookFile(record) {
    showLoading();
    var objectNo = attachmentList.objectNo;
    var val = {
      objectNo: objectNo,
      hData: [record]
    };
    var path = 'api/file/base/browsePDF';
    var formData = new FormData();
    formData.append('values', JSON.stringify(val));
    fetch(path, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: sessionStorage.getItem('token'),
        UserName: localStorage.getItem('userName')
      }
    }).then(function (res) {
      return res.blob();
    }).then(function (blob) {
      var r = new FileReader();
      r.readAsDataURL(blob);

      r.onload = function (e) {
        dispatch({
          type: 'reverseRualityReport/packet',
          payload: {
            filePreviewVisible: !filePreviewVisible,
            file: e.target.result,
            fileRecord: record
          }
        });
      };

      hideLoading();
      return r;
    }).catch(function (err) {
      hideLoading();
      console.log(err);
    }); //
  };

  var lookFileCancel = function lookFileCancel() {
    return dispatch({
      type: 'reverseRualityReport/packet',
      payload: {
        filePreviewVisible: false
      }
    });
  };

  var exportEXCEL = function exportEXCEL() {
    var params = {
      objectNo: objectNo,
      hData: hData
    };
    showLoading();
    exportExcel(params).then(function (res) {
      if (res && res.flag === false) {
        message.warn('导出失败');
      }
    }).catch(function (err) {});
  };

  var exportPDF = function exportPDF() {
    var params = {
      objectNo: objectNo,
      hData: hData
    };
    showLoading();
    exportPdf(params).then(function (res) {
      if (res && res.flag === false) {
        message.warn('导出失败');
      }
    }).catch(function (err) {});
  };

  var objectProps = {
    onOk: selectOk,
    editor: editor
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: exportEXCEL
  }, "\u5BFC\u51FAExcel"), /*#__PURE__*/React.createElement(Button, {
    onClick: exportPDF
  }, "\u5BFC\u51FAPDF"), /*#__PURE__*/React.createElement(Button, {
    onClick: downloadAttachment
  }, "\u9644\u4EF6"), /*#__PURE__*/React.createElement(Button, {
    disabled: hData && hData[0].STATE === 0 || hData && hData[0].STATE === null ? false : true,
    style: {
      marginLeft: '30px'
    },
    type: "primary",
    onClick: function onClick() {
      return confirm({
        title: '确定启动流程吗？',
        onOk: function onOk() {
          return form.submit();
        }
      });
    }
  }, "\u63D0\u4EA4"), /*#__PURE__*/React.createElement("div", {
    className: "reverseTab",
    id: "export_content"
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.R_header
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames([styles.logo])
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.R_title
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '170px'
    }
  }, "\u9510\u6377\u7F51\u7EDC\u9006\u5411\u8D85\u671F\u68C0\u9A8C\u62A5\u544A"))), /*#__PURE__*/React.createElement("div", null, getTable(tableHeader, false, list)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    size: "small",
    columns: columns,
    dataSource: dataList,
    bordered: true,
    pagination: false,
    className: styles.table_break_spaces
  }), footerList.length && footerList[0].TEST_CONCLUSION === 'NG' && /*#__PURE__*/React.createElement("div", null, getTable(tableFooter, true, list)))), /*#__PURE__*/React.createElement(DragModal, {
    zIndex: 1100,
    namespace: "selectorModal",
    width: 500,
    height: 550,
    title: '选择',
    visible: userVisible,
    onOk: selectOk,
    onCancel: toomodelUser()
  }, /*#__PURE__*/React.createElement(UserSelectForm, _extends({
    ref: childRef
  }, objectProps))), /*#__PURE__*/React.createElement(Modal, {
    title: "\u9644\u4EF6",
    visible: attachmentVisible,
    onCancel: attachmentCancel,
    footer: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: '600px'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    dataSource: attachmentDataSource,
    columns: attachmentColumns,
    size: "small",
    pagination: false
  }))), /*#__PURE__*/React.createElement(Modal, {
    title: "\u9644\u4EF6\u9884\u89C8",
    visible: filePreviewVisible,
    onCancel: lookFileCancel,
    footer: false,
    className: styles.lookFile
  }, /*#__PURE__*/React.createElement(CustomBrowseFiles, {
    file: file,
    record: fileRecord
  })));
};

function mapStateToProps(_ref3) {
  var reverseRualityReport = _ref3.reverseRualityReport;
  return _objectSpread({}, reverseRualityReport);
}

export default connect(mapStateToProps)(ReverseRualityReport);