function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Table, message, Modal, Input, Checkbox, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import InspectionHeader from './InspectionHeader';
import DragModal from '../../../component/common/drag/DragModal';
import ReportFooter from './ReportFooter';
import { ergodicRoot, hideLoading, isEnglish, parseMeta, showLoading } from '../../../utils/utils';
import { setInspectionColumns } from './utils';
import { commonApi } from '../../../service/applicationApi';
import { exportExcel, exportPdf } from '../../../service/uploadApi';
import language from '@/locale/language';
import './index.css';

var _language$enterInput$ = language.enterInput.inspection,
    report = _language$enterInput$.report,
    inspection = _objectWithoutProperties(_language$enterInput$, ["report"]);

var ReportCmp = function ReportCmp(_ref) {
  var dispatch = _ref.dispatch,
      engine = _ref.engine,
      props = _ref.props,
      dataList = _ref.dataList,
      newRowData = _ref.newRowData,
      _ref$checklistTitle = _ref.checklistTitle,
      checklistTitle = _ref$checklistTitle === void 0 ? {} : _ref$checklistTitle;
  var _props$model$clickedM = props.model.clickedMenu,
      hData = _props$model$clickedM.values.hData,
      objectNo = _props$model$clickedM.objectNo,
      checkProObjectNo = _props$model$clickedM.params.checkProObjectNo;
  var header = engine.header,
      body = engine.body,
      footer = engine.footer,
      data = engine.data;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      headerDisplay = _useState4[0],
      setHeaderDisplay = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showNote = _useState6[0],
      setShowNote = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      SQE_NOTES = _useState8[0],
      setSQE_NOTES = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showFieldSelect = _useState10[0],
      setShowFieldSelect = _useState10[1];

  var _useState11 = useState(null),
      _useState12 = _slicedToArray(_useState11, 2),
      exportType = _useState12[0],
      setExportType = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      fieldList = _useState14[0],
      setFieldList = _useState14[1];

  useEffect(function () {
    setColumns(setInspectionColumns({
      fieldsList: body,
      dataList: dataList,
      modelData: data,
      checklistTitle: checklistTitle
    }));

    if (localStorage['exportFieldList'] && localStorage['exportFieldList'] !== 'undefined') {
      setFieldList(JSON.parse(localStorage['exportFieldList']));
    } else {
      setFieldList(['PC', 'POSITION', 'PD', 'INSPECTIONF', 'UT', 'LT']);
    }
  }, [dataList, body, checklistTitle]);
  useEffect(function () {
    var headerEl = document.querySelector('#report-header');
    var bodyEl = document.querySelector('#report-body');
    var footerEl = document.querySelector('#report-footer');
    bodyEl.style.height = "calc(100% - ".concat(headerEl.offsetHeight, "px - ").concat(footerEl.offsetHeight, "px)");
  }, [dataList, header, body, columns, headerDisplay]);

  var startFlow = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(SQE_C) {
      var res, _props$model, objectANamespace, _dataList, menuId, namespace, payload;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              showLoading();
              _context.next = 3;
              return commonApi({
                implClass: 'activiti.slm.ActStartSqeProcessEvent',
                objectNo: objectNo,
                hData: hData,
                data: {
                  SQE_C: SQE_C,
                  SQE_NOTES: SQE_C === 'B' ? SQE_NOTES : undefined
                }
              });

            case 3:
              res = _context.sent;
              hideLoading();

              if (res && res.flag === true) {
                _props$model = props.model, objectANamespace = _props$model.objectANamespace, _dataList = _props$model.clickedMenu.values.rData;
                menuId = engine.menuId, namespace = engine.namespace;

                if (res.dataList) {
                  _dataList = _dataList.map(function (item) {
                    if (item.ID === res.dataList.ID) return res.dataList;
                    return item;
                  });
                }

                payload = {
                  selectedRows: [res.dataList],
                  dataList: _dataList,
                  hData: res.dataList
                }; // 此处需将主对象选中数据录入完成状态改为true

                dispatch({
                  type: "".concat(namespace, "/packet"),
                  payload: _defineProperty({}, menuId, false)
                });
                dispatch({
                  type: "".concat(objectANamespace, "/packet"),
                  payload: payload
                });
                message.success(res.hint);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function startFlow(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // 导出Excel


  var exportEXCEL = function exportEXCEL() {
    var newFieldList = fieldList.map(function (item) {
      var field = body.filter(function (i) {
        return i.meta.FIELDNAME === item;
      })[0];
      return {
        NAME: "".concat(field.meta.NAME, "/").concat(field.meta.ENNAME),
        FIELDNAME: field.meta.FIELDNAME
      };
    });
    var params = {
      objectNo: objectNo,
      hData: hData,
      REVISE_VAR: data.REVISE_VAR,
      TABLE_NO: data.TABLE_NO,
      fieldList: newFieldList
    };
    showLoading();
    exportExcel(params).then(function (res) {
      setShowFieldSelect(false);

      if (res && res.flag === false) {
        message.warn(report.export_failed);
      }
    }).catch(function (err) {});
  }; // 导出PDF


  var exportPDF = function exportPDF() {
    var newFieldList = fieldList.map(function (item) {
      var field = body.filter(function (i) {
        return i.meta.FIELDNAME === item;
      })[0];
      return {
        NAME: "".concat(field.meta.NAME, "/").concat(field.meta.ENNAME),
        FIELDNAME: field.meta.FIELDNAME
      };
    });
    var params = {
      objectNo: objectNo,
      hData: hData,
      REVISE_VAR: data.REVISE_VAR,
      TABLE_NO: data.TABLE_NO,
      fieldList: newFieldList
    };
    showLoading();
    exportPdf(params).then(function (res) {
      setShowFieldSelect(false);

      if (res && res.flag === false) {
        message.warn(report.export_failed);
      }
    }).catch(function (err) {});
  };

  var fieldSelect = function fieldSelect(type) {
    setShowFieldSelect(true);
    setExportType(type);
  };

  var onFieldSelectChange = function onFieldSelectChange(checkedValues) {
    if (checkedValues.length > 6) {
      message.warning(isEnglish ? 'Only 6 export fields can be selected!' : '只能选择6个导出字段!');
      return;
    }

    setFieldList(checkedValues);
    localStorage['exportFieldList'] = JSON.stringify(checkedValues);
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "report-container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "report-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(DownloadOutlined, null),
    onClick: function onClick() {
      return fieldSelect('1');
    },
    type: "primary"
  }, report.expoer_excel), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(DownloadOutlined, null),
    onClick: function onClick() {
      return fieldSelect('2');
    },
    type: "primary"
  }, report.expoer_pdf)), newRowData && newRowData.D_STATE === 'D' && newRowData.STATE === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return startFlow('A');
    }
  }, report.start_flow), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return setShowNote(true);
    }
  }, report.reject_recalibration))), /*#__PURE__*/React.createElement(InspectionHeader, {
    data: data,
    header: header,
    hData: newRowData || hData,
    headerDisplay: headerDisplay,
    setHeaderDisplay: setHeaderDisplay
  })), /*#__PURE__*/React.createElement("div", {
    id: "report-body"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    dataSource: dataList,
    bordered: true,
    pagination: false,
    scroll: {
      x: '100%',
      y: '100%'
    },
    rowKey: function rowKey(record) {
      return record.InspectionItem.ID;
    }
  })), /*#__PURE__*/React.createElement("div", {
    id: "report-footer"
  }, newRowData && newRowData.TEST_CONCLUSION === 'NG' && /*#__PURE__*/React.createElement("div", {
    className: "footer-ng"
  }, /*#__PURE__*/React.createElement(ReportFooter, {
    data: data,
    footer: footer,
    hData: newRowData || hData
  }))), /*#__PURE__*/React.createElement(Modal, {
    title: report.sqe_notes,
    visible: showNote,
    onCancel: function onCancel() {
      return setShowNote(false);
    },
    onOk: function onOk() {
      return startFlow('B');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 75
    }
  }, report.sqe_notes, ":"), /*#__PURE__*/React.createElement(Input.TextArea, {
    value: SQE_NOTES,
    onChange: function onChange(e) {
      setSQE_NOTES(e.target.value);
    },
    rows: 3
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DragModal, {
    title: "".concat(isEnglish ? 'report' : '导出').concat(exportType === '1' ? 'Excel' : 'PDF').concat(report.fieldSelect),
    visible: showFieldSelect,
    onCancel: function onCancel() {
      return setShowFieldSelect(false);
    },
    onOk: function onOk() {
      exportType === '1' ? exportEXCEL() : exportPDF();
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: '20px'
    }
  }, isEnglish ? 'Choose 6 export fields' : '请选择6个导出字段', ":"), /*#__PURE__*/React.createElement(Checkbox.Group, {
    onChange: onFieldSelectChange,
    value: fieldList
  }, /*#__PURE__*/React.createElement(Row, null, body && body.map(function (item) {
    return /*#__PURE__*/React.createElement(Col, {
      key: item.ID,
      span: 8
    }, /*#__PURE__*/React.createElement(Checkbox, {
      value: item.meta.FIELDNAME
    }, item.meta.NAME));
  }))))));
};

function mapStateToProps(_ref3) {
  var InspectionReport = _ref3.InspectionReport;
  return _objectSpread({}, InspectionReport);
}

export default connect(mapStateToProps)(ReportCmp);