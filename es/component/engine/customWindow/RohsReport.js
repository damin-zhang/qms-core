function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'dva';
import { Table, Form, Select, Button, message, Input, Drawer } from 'antd';
import DragModal from '../../common/drag/DragModal';
import UserSelectForm from '../../userManage/userSelectForm';
import { commonApi } from '../../../service/applicationApi';
import { downloadFiles } from '../../../service/uploadApi';
import { showLoading, hideLoading, confirm } from '../../../utils/utils';
import CustomBrowseFiles from './CustomBrowseFiles';
import styles from '../tab/index.less';
var Item = Form.Item;
var Option = Select.Option;
var TextArea = Input.TextArea;
var SUPPLIER_RISK_LEVEL = {
  1: '低风险',
  2: '中风险',
  3: '高风险'
};
var COMPREHENSIVE_RISK_DETERMINATION = {
  1: '低风险1',
  2: '中风险2',
  3: '高风险3',
  4: '低风险4',
  6: '中风险6',
  9: '高风险9'
};

var RohsReport = function RohsReport(_ref) {
  var dispatch = _ref.dispatch,
      objectANamespace = _ref.objectANamespace,
      objectADataList = _ref.objectADataList,
      reportList = _ref.reportList,
      _ref$rValues = _ref.rValues,
      rValues = _ref$rValues === void 0 ? {} : _ref$rValues,
      id = _ref.id,
      bfVisible = _ref.bfVisible,
      file = _ref.file,
      record = _ref.record;
  var objectNo = rValues.objectNo,
      hData = rValues.hData;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var childRef = useRef();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      editor = _useState2[0],
      setEditor = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRowKeys = _useState4[0],
      setSelectedRowKeys = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedRows = _useState6[0],
      setSelectedRows = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      userVisible = _useState8[0],
      setUserVisible = _useState8[1];

  var disabledState = hData && hData[0].STATE === 1 ? false : true;
  var definitionColumns = [{
    title: '序号',
    dataIndex: 'index',
    width: 50,
    render: function render(text, record, index) {
      return index + 1;
    }
  }, {
    title: '单号',
    dataIndex: 'NO',
    width: 100,
    align: 'center'
  }, {
    title: '物料编码',
    dataIndex: 'MATERIAL_CODE',
    width: 100,
    align: 'center'
  }, {
    title: '物料名称',
    dataIndex: 'MATERIAL_NAME',
    width: 120,
    align: 'center'
  }, {
    title: '分类名称',
    dataIndex: 'MATERIAL_SUBCLASS_NAME',
    width: 100,
    align: 'center'
  }, {
    title: '供应商名称',
    dataIndex: 'SUPPLIER_NAME',
    width: 100,
    align: 'center'
  }, {
    title: '供应商品牌',
    dataIndex: 'SUPPLIER_BRAND',
    width: 100,
    align: 'center'
  }, {
    title: 'SQE',
    dataIndex: 'SQE',
    width: 130,
    align: 'center'
  }, {
    title: '供应商风险等级',
    dataIndex: 'SUPPLIER_RISK_LEVEL',
    align: 'center',
    width: 120,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, SUPPLIER_RISK_LEVEL[text]);
    }
  }, {
    title: '物料风险等级',
    dataIndex: 'MATERIAL_RISK_LEVEL',
    align: 'center',
    width: 120,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, SUPPLIER_RISK_LEVEL[text]);
    }
  }, {
    title: '综合风险判定',
    dataIndex: 'COMPREHENSIVE_RISK_DETERMINATION',
    align: 'center',
    width: 120,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, COMPREHENSIVE_RISK_DETERMINATION[text]);
    }
  }, {
    title: '测试报告',
    dataIndex: 'FNAME',
    align: 'center',
    width: 100,
    render: function render(text, record, index) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return lookOrDownload('look');
        }
      }, "\u67E5\u770B"), /*#__PURE__*/React.createElement(Button, {
        onClick: function onClick() {
          return lookOrDownload('download');
        }
      }, "\u4E0B\u8F7D"));
    }
  }, {
    title: '报告上传时间',
    dataIndex: 'UPTIME',
    width: 130,
    align: 'center'
  }, {
    title: '测试结果',
    dataIndex: 'TR',
    align: 'center',
    width: 130,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          backgroundColor: text && text === 'NG' ? '#CF131E' : text && text === 'OK' ? '#88DB0B' : null,
          color: text && text === 'NG' ? '#fff' : null
        }
      }, text);
    }
  }, {
    title: '测试描述',
    dataIndex: 'REMARK',
    align: 'center',
    width: 130
  }];
  useEffect(function () {
    if (reportList && reportList.length) {
      form.setFieldsValue(reportList[0]);
    }

    return function () {
      form.resetFields();
    };
  }, [reportList, form]); // 查看/下载

  var lookOrDownload = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
      var res, val, path, formData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              showLoading();
              _context.next = 3;
              return commonApi({
                implClass: 'rohs.GetRohsWaitListDataEvent',
                objectNo: objectNo,
                hData: hData
              });

            case 3:
              res = _context.sent;

              if (res && res.flag) {
                val = {
                  objectNo: 'ROHS_WAIT_LIST',
                  hData: [res.dataList]
                };

                if (type === 'look') {
                  path = 'api/file/base/browsePDF';
                  formData = new FormData();
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
                        type: 'RohsReport/packet',
                        payload: {
                          bfVisible: !bfVisible,
                          file: e.target.result,
                          record: res.dataList
                        }
                      });
                    };

                    return r;
                  }).catch(function (err) {
                    hideLoading();
                    console.log(err);
                  });
                } else {
                  showLoading();
                  downloadFiles(_objectSpread({}, val)).then(function (res) {
                    hideLoading();
                  });
                } // message.info(res.hint)

              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function lookOrDownload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onCancel = function onCancel() {
    dispatch({
      type: 'RohsReport/packet',
      payload: {
        bfVisible: !bfVisible
      }
    });
  };

  var toomodelUser = function toomodelUser(editor) {
    return function () {
      setEditor(editor);
      setUserVisible(!userVisible);
    };
  };

  var selectOk = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return childRef.current.Ok();

            case 2:
              res = _context2.sent;

              if (!(JSON.stringify(res) === '{}')) {
                _context2.next = 6;
                break;
              }

              message.warn('请选择数据');
              return _context2.abrupt("return");

            case 6:
              if (editor === 'UserSelector') {
                form.setFieldsValue({
                  BUYER: res.NAME.substr(res.NAME.indexOf(':') + 1)
                });
              }

              if (editor === 'UsersSelector') {
                form.setFieldsValue({
                  CARBON_COPY: res.NAME
                });
              }

              toomodelUser()();

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function selectOk() {
      return _ref3.apply(this, arguments);
    };
  }();

  var objectProps = {
    onOk: selectOk,
    editor: editor
  };

  var onFinish = function onFinish(value) {
    var values = {};
    values.data = value;
    values.hData = hData;
    values.implClass = 'rohs.RohsSqeResultEvent';
    values.objectNo = objectNo;
    dispatch({
      type: 'RohsReport/repOnFinish',
      payload: {
        values: values,
        objectANamespace: objectANamespace,
        objectADataList: objectADataList,
        id: id
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: hData && hData[0].RESPONSIBLE ? true : false,
    onClick: function onClick() {
      return confirm({
        title: '确定提交吗？',
        onOk: function onOk() {
          return form.submit();
        }
      });
    }
  }, "\u63D0\u4EA4"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100% - 40px)'
    }
  }, reportList && reportList.length && reportList[0].TR === 'NG' && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    name: "property",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    className: styles.R_Form
  }, /*#__PURE__*/React.createElement(Item, {
    name: "RESPONSIBLE",
    label: "\u8D23\u4EFB\u65B9",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showArrow: false,
    allowClear: true,
    disabled: hData && hData[0].RESPONSIBLE ? true : false
  }, /*#__PURE__*/React.createElement(Option, {
    value: '供应商责任'
  }, "\u4F9B\u5E94\u5546\u8D23\u4EFB"), /*#__PURE__*/React.createElement(Option, {
    value: '退回重检'
  }, "\u9000\u56DE\u91CD\u68C0"))), /*#__PURE__*/React.createElement(Item, {
    name: "SQE_CONCLUSION",
    label: "SQE\u7ED3\u8BBA",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(TextArea, {
    type: "text",
    style: {
      textAlign: 'left'
    },
    autoSize: {
      minRows: 3,
      maxRows: 5
    },
    disabled: hData && hData[0].RESPONSIBLE ? true : false
  }))))), /*#__PURE__*/React.createElement(Table, {
    size: "small",
    className: "period-style",
    dataSource: reportList,
    columns: definitionColumns,
    bordered: true,
    scroll: {
      x: '100%',
      y: 200
    },
    pagination: false,
    rowKey: function rowKey(record) {
      return record.ID;
    },
    onRow: function onRow(record) {
      return {
        onClick: function onClick() {
          if (selectedRowKeys.length === 0 || selectedRowKeys[0] !== record.ID) {
            setSelectedRowKeys([record.ID]);
            setSelectedRows([record]);
          }
        }
      };
    },
    rowSelection: {
      type: 'radio',
      onChange: function onChange(selectedRowKeys, selectedRows) {
        setSelectedRowKeys(selectedRowKeys);
        setSelectedRows(selectedRows);
      },
      selectedRowKeys: selectedRowKeys
    }
  })), /*#__PURE__*/React.createElement(DragModal, {
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
  }, objectProps))), /*#__PURE__*/React.createElement(Drawer, {
    title: "\u67E5\u770B\u6587\u4EF6",
    onClose: onCancel,
    visible: bfVisible,
    width: "70%"
  }, /*#__PURE__*/React.createElement(CustomBrowseFiles, {
    file: file,
    record: record
  })));
};

function mapStateToProps(_ref4) {
  var RohsReport = _ref4.RohsReport;
  return _objectSpread({}, RohsReport);
}

export default connect(mapStateToProps)(RohsReport);