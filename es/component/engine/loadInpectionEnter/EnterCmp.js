function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

/*
 * @Description: 装配质检录入组件页面
 */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva';
import { evaluate, format } from 'mathjs';
import { Button, Table, Form, message, Switch, Input, Select, Tree, Popover } from 'antd';
import './index.css';
import { setInspectionColumns } from './utils';
import { commonApi } from '../../../service/applicationApi';
import { queryPropertyModel } from '../../../service/metaApi';
import { hideLoading, showLoading, isEnglish, parseMeta } from '../../../utils/utils';
import DragModal from '../../common/drag/DragModal';
import UserSelectForm from '../../userManage/userSelectForm';
import InspectionHeader from '../inspectionReport/InspectionHeader';
import PropertyForm from '../property/PropertyForm';
import language from '@/locale/language';
import { debounce } from '../../../utils/utils';
var _language$enterInput = language.enterInput,
    inspection = _language$enterInput.inspection,
    defectForm = _language$enterInput.defectForm;
var TreeNode = Tree.TreeNode;

var EnterCmp = function EnterCmp(_ref) {
  var dispatch = _ref.dispatch,
      engine = _ref.engine,
      props = _ref.props,
      formData = _ref.formData,
      formInitValue = _ref.formInitValue,
      userVisible = _ref.userVisible,
      newRowData = _ref.newRowData,
      defectCode = _ref.defectCode,
      checklistTitle = _ref.checklistTitle,
      _ref$defectVisible = _ref.defectVisible,
      defectVisible = _ref$defectVisible === void 0 ? false : _ref$defectVisible,
      hintVisible = _ref.hintVisible;
  var _props$model$clickedM = props.model.clickedMenu,
      hData = _props$model$clickedM.values.hData,
      objectNo = _props$model$clickedM.objectNo,
      checkProObjectNo = _props$model$clickedM.params.checkProObjectNo,
      tableName = _props$model$clickedM.tableName;
  var header = engine.header,
      body = engine.body,
      _engine$footer = engine.footer,
      footer = _engine$footer === void 0 ? [] : _engine$footer,
      data = engine.data,
      namespace = engine.namespace;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _Form$useForm3 = Form.useForm(),
      _Form$useForm4 = _slicedToArray(_Form$useForm3, 1),
      footerForm = _Form$useForm4[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = useState(hData[0].ENTRY_END || hData[0].D_STATE !== 'B'),
      _useState4 = _slicedToArray(_useState3, 2),
      formDisabled = _useState4[0],
      setFormDisabled = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      currentInspectionResult = _useState6[0],
      setCurrentInspectionResult = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedRowKeys = _useState8[0],
      setSelectedRowKeys = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      currentInspection = _useState10[0],
      setCurrentInspection = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showFooter = _useState12[0],
      setShowFooter = _useState12[1];

  var _useState13 = useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      editor = _useState14[0],
      setEditor = _useState14[1];

  var _useState15 = useState([]),
      _useState16 = _slicedToArray(_useState15, 2),
      IQCWayList = _useState16[0],
      setIQCWayList = _useState16[1];

  var _useState17 = useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      headerDisplay = _useState18[0],
      setHeaderDisplay = _useState18[1];

  var _useState19 = useState([]),
      _useState20 = _slicedToArray(_useState19, 2),
      DBValueData = _useState20[0],
      setDBValueData = _useState20[1];

  var _useState21 = useState([]),
      _useState22 = _slicedToArray(_useState21, 2),
      DBValueData2 = _useState22[0],
      setDBValueData2 = _useState22[1];

  var _useState23 = useState(body),
      _useState24 = _slicedToArray(_useState23, 2),
      showColumns = _useState24[0],
      setShowColumns = _useState24[1];

  var _useState25 = useState([]),
      _useState26 = _slicedToArray(_useState25, 2),
      checkedKeys = _useState26[0],
      setCheckedKeys = _useState26[1];

  var _useState27 = useState({}),
      _useState28 = _slicedToArray(_useState27, 2),
      onChangeChecklistTitle = _useState28[0],
      setOnChangeChecklistTitle = _useState28[1];

  var _useState29 = useState(1),
      _useState30 = _slicedToArray(_useState29, 2),
      page = _useState30[0],
      setPage = _useState30[1];

  var _useState31 = useState(20),
      _useState32 = _slicedToArray(_useState31, 2),
      pageSize = _useState32[0],
      setPageSize = _useState32[1];

  var _useState33 = useState([]),
      _useState34 = _slicedToArray(_useState33, 2),
      defectFormProps = _useState34[0],
      setDefectFormProps = _useState34[1];

  var childRef = useRef();
  var defectRef = useRef();
  var layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  };
  useEffect(function () {
    if (formData.length) {
      var ng = false;

      for (var index = 0; index < formData.length; index++) {
        if (formData[index].InspectionItem.TR === 'NG') {
          ng = true;
        }
      }

      if (ng) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    } // 控制单据禁用状态


    var formDisable = newRowData && (newRowData.ENTRY_END || newRowData.D_STATE !== 'B');
    setFormDisabled(formDisable);
    setColumns(setInspectionColumns({
      filedList: showColumns,
      dataList: formData,
      onInputPressEnter: onInputPressEnter,
      commonInputPressEnter: commonInputPressEnter,
      onSelectChange: onSelectChange,
      onDBSelectChange: onDBSelectChange,
      formDisable: formDisable,
      onInputFocus: onInputFocus,
      onInputBlur: onInputBlur,
      DBValueData: DBValueData,
      DBValueData2: DBValueData2,
      onDbSelectFocus: onDbSelectFocus,
      checklistTitle: checklistTitle,
      settingChecklistTitle: settingChecklistTitle,
      EnterSaveChecklistTitle: EnterSaveChecklistTitle,
      inspectionItemDT: inspectionItemDT,
      modelData: data
    }));
  }, [body, props, showColumns, checklistTitle, onChangeChecklistTitle, formData, DBValueData, DBValueData2]); // 初始化装载body和footer表单默认值

  useEffect(function () {
    if (JSON.stringify(formInitValue) === '{}') return;
    form.setFieldsValue(formInitValue);

    if (showFooter) {
      footerForm.setFieldsValue(newRowData || hData);

      if (newRowData.IQC_SCRAP_WAY) {
        commonApi({
          implClass: 'inspect.IQCScrapWayEvent',
          objectNo: objectNo,
          hData: [newRowData],
          data: {
            IQC_SCRAP_WAY: newRowData.IQC_SCRAP_WAY
          }
        }).then(function (res) {
          if (res && res.flag) setIQCWayList(res.dataList);
        });
      }
    }
  }, [formInitValue, hData, showFooter]);
  useEffect(function () {
    var headerEl = document.querySelector('.enter-header');
    var bodyEl = document.querySelector('.enter-body');
    bodyEl.style.height = "calc(100% - ".concat(headerEl.offsetHeight, "px )");
  }, [newRowData, body, props, formData, showFooter, headerDisplay]);
  useEffect(function () {
    setCheckedKeys(body.map(function (item) {
      return item.meta.FIELDNAME;
    }));
    queryPropertyModel({
      objectPropertyNo: 'default',
      tableName: tableName
    }).then(function (data) {
      var pageFieldList = [];

      if (data && footer.length) {
        pageFieldList = footer.map(function (item) {
          return _objectSpread(_objectSpread({}, data.allFieldList.filter(function (field) {
            return item.meta.FIELDNAME === field.fieldName;
          })[0]), {}, {
            editAble: item.meta.EDITABLE,
            WLINE: item.meta.WLINE
          });
        });
        data.pageFieldList = pageFieldList;
        data.record = newRowData || hData;
        setDefectFormProps(data);
      }
    });
    var enterTableShowColumns = localStorage[data.NO];

    if (enterTableShowColumns) {
      var _showColumns = JSON.parse(enterTableShowColumns).filter(function (item) {
        return body.some(function (el) {
          return el.meta.FIELDNAME === item.meta.FIELDNAME;
        });
      });

      setShowColumns(_showColumns);
      setCheckedKeys(_showColumns.map(function (item) {
        return item.meta.FIELDNAME;
      }));
    } else {
      setShowColumns(body);
      setCheckedKeys(body.map(function (item) {
        return item.meta.FIELDNAME;
      }));
    }

    return function () {
      dispatch({
        type: 'Enter/packet',
        payload: {
          dataList: [],
          formData: [],
          formInitValue: []
        }
      });
    };
  }, []);
  useEffect(function () {
    if (checklistTitle) setOnChangeChecklistTitle(checklistTitle);
  }, [checklistTitle]);

  var settingChecklistTitle = function settingChecklistTitle(e, x) {
    if (e.target.value) {
      setOnChangeChecklistTitle(_objectSpread(_objectSpread({}, onChangeChecklistTitle), {}, _defineProperty({}, x, e.target.value)));
    }
  };

  var EnterSaveChecklistTitle = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(x, maxInspectionQty) {
      var res, nextInput, i, el;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              showLoading();
              _context.next = 3;
              return commonApi({
                implClass: 'inspect.IQCFillInBadDescriptionEvent',
                objectNo: objectNo,
                hData: [newRowData] || hData,
                data: {
                  P_NUM_LIST: JSON.stringify(onChangeChecklistTitle)
                }
              });

            case 3:
              res = _context.sent;
              hideLoading();

              if (!(res && res.flag)) {
                _context.next = 29;
                break;
              }

              nextInput = null;
              nextInput = document.querySelector("#checkItemTitle-".concat(x));

              if (!nextInput) {
                _context.next = 18;
                break;
              }

              i = x;

            case 10:
              if (!(i < maxInspectionQty)) {
                _context.next = 18;
                break;
              }

              el = document.querySelector("#checkItemTitle-".concat(i + 1));

              if (!el) {
                _context.next = 15;
                break;
              }

              nextInput = el;
              return _context.abrupt("break", 18);

            case 15:
              i++;
              _context.next = 10;
              break;

            case 18:
              if (!(!nextInput && x !== 0)) {
                _context.next = 23;
                break;
              }

              document.querySelector("#checkItemTitle-".concat(x)).blur();
              return _context.abrupt("return");

            case 23:
              if (!(!nextInput && x === 0)) {
                _context.next = 27;
                break;
              }

              return _context.abrupt("return");

            case 27:
              nextInput.focus();
              nextInput.select();

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function EnterSaveChecklistTitle(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(); // 缓存单条数据


  var catchData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(inspectionItem, itemData, callback, currentInput) {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              /* 禁用当前输入框 */
              if (currentInput) currentInput.disabled = true;

              if (inspectionItem.InspectionItem.TR === 'OK') {
                inspectionItem.InspectionItem.DEFECT_CLASS_B = null;
                inspectionItem.InspectionItem.DEFECT_CLASS_S = null;
                inspectionItem.InspectionItem.DEFECT_CODE = null;
                inspectionItem.InspectionItem.DEFECT_GENERA = null;
              }

              _context2.next = 4;
              return commonApi({
                implClass: 'inspect.CacheInspectResultEvent',
                objectA: objectNo,
                objectAData: hData[0],
                objectNo: checkProObjectNo,
                data: inspectionItem,
                hData: itemData
              });

            case 4:
              res = _context2.sent;

              if (res && res.flag === true) {
                if (callback) callback();
                /* 恢复禁用输入框 */

                if (currentInput) currentInput.disabled = false;
              } else {
                /* 恢复禁用输入框 */
                if (currentInput) currentInput.disabled = false;
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function catchData(_x3, _x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }(); // 清除所有缓存


  var clearAllCatch = function clearAllCatch() {
    var payload = {
      implClass: 'inspect.ClearAllInspectionCachedDataEvent',
      hData: hData,
      objectNo: objectNo
    };
    dispatch({
      type: 'Enter/clearAllCatch',
      payload: payload
    });
  }; // 清除单条缓存


  var clearSingleCatch = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ID, hData, payload;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              ID = currentInspection.InspectionItem.ID;
              hData = [formData.filter(function (item) {
                return item.InspectionItem.ID === ID;
              })[0].InspectionItem];
              payload = {
                values: {
                  implClass: 'inspect.ClearInspectionItemCachedDataEvent',
                  hData: hData,
                  objectNo: checkProObjectNo
                },
                formData: formData,
                ID: ID
              };
              dispatch({
                type: 'Enter/clearSingleCatch',
                payload: payload
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function clearSingleCatch() {
      return _ref4.apply(this, arguments);
    };
  }(); // 录入完成


  var completeSave = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var value, state, i, _formData$i, InspectionItem, InspectionItemResult, res, _props$model, objectANamespace, dataList, menuId, _namespace, payload;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // 保存缺陷表单
              value = defectRef?.current?.getForm()?.getFieldsValue();
              commonApi({
                implClass: 'inspect.IQCFillInBadDescriptionEvent',
                objectNo: objectNo,
                hData: [newRowData] || hData,
                data: value
              }).then(function (res) {
                if (res && res.flag) {
                  var _defectForm = defectFormProps;
                  _defectForm.record = value;
                  setDefectFormProps(_defectForm);
                }
              }); // 判断检验值是否全部录入完成

              state = true;
              i = 0;

            case 4:
              if (!(i < formData.length)) {
                _context4.next = 23;
                break;
              }

              _formData$i = formData[i], InspectionItem = _formData$i.InspectionItem, InspectionItemResult = _formData$i.InspectionItemResult;

              if (!(Number(InspectionItem.DT) === 0 && !data.COUNTTYPECANINPUT)) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt("continue", 20);

            case 8:
              if (!(InspectionItemResult.filter(function (item) {
                return item !== null;
              }).length !== Number(InspectionItem.SQ))) {
                _context4.next = 15;
                break;
              }

              state = false;
              message.warning("".concat(i + 1).concat(inspection.inspectionItem, ": ").concat(InspectionItem.PD, " ").concat(inspection.incompleteEntry, "!"));
              setSelectedRowKeys([InspectionItem.ID]);
              return _context4.abrupt("break", 23);

            case 15:
              if (!(InspectionItem.TR === 'NG' && !InspectionItem.DEFECT_CLASS_B)) {
                _context4.next = 20;
                break;
              }

              state = false;
              message.warning("".concat(inspection.inspectionItem, ": ").concat(InspectionItem.PD, " ").concat(inspection.selectCategory, "!"));
              setSelectedRowKeys([InspectionItem.ID]);
              return _context4.abrupt("break", 23);

            case 20:
              i++;
              _context4.next = 4;
              break;

            case 23:
              if (!state) {
                _context4.next = 30;
                break;
              }

              showLoading();
              _context4.next = 27;
              return commonApi({
                implClass: 'inspect.QualityInspectionSaveEvent',
                objectNo: objectNo,
                hData: hData
              });

            case 27:
              res = _context4.sent;
              hideLoading();

              if (res && res.flag === true) {
                _props$model = props.model, objectANamespace = _props$model.objectANamespace, dataList = _props$model.clickedMenu.values.rData;
                menuId = engine.menuId, _namespace = engine.namespace;

                if (res.dataList) {
                  dataList = dataList.map(function (item) {
                    if (item.ID === res.dataList.ID) return res.dataList;
                    return item;
                  });
                }

                payload = {
                  selectedRows: [res.dataList],
                  dataList: dataList,
                  hData: res.dataList
                }; // 此处需将主对象选中数据录入完成状态改为true

                dispatch({
                  type: "".concat(_namespace, "/packet"),
                  payload: _defineProperty({}, menuId, false)
                });
                dispatch({
                  type: "".concat(objectANamespace, "/packet"),
                  payload: payload
                });
                message.success(res.hint);
              }

            case 30:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function completeSave() {
      return _ref5.apply(this, arguments);
    };
  }(); // Select选择器选择事件


  var onSelectChange = function onSelectChange(value, record, fieldName, index) {
    var ID = record.InspectionItem.ID;
    formData[index].InspectionItem[fieldName] = value;
    dispatch({
      type: 'Enter/packet',
      payload: {
        formData: _toConsumableArray(formData)
      }
    }); // 缓存数据

    var InspectionItem = formData[index];
    var hData = [formData[index].InspectionItem];
    catchData(InspectionItem, hData);
  }; // DB值列表多列Focus事件


  var onDbSelectFocus = function onDbSelectFocus(fieldName) {
    if (fieldName === 'DEFECT_GENERA' && DBValueData.length === 0) {
      commonApi({
        implClass: 'inspect.DefectGeneraCodeEvent',
        objectNo: objectNo
      }).then(function (res) {
        if (res && res.flag) setDBValueData(res.defectGenera);
      });
    }
  }; // DB值列表多列选择器onChange事件


  var onDBSelectChange = function onDBSelectChange(record, index, value, filedList) {
    var ID = record.InspectionItem.ID;

    if (value) {
      filedList.forEach(function (item) {
        formData[index].InspectionItem[item.tfield] = value[item.tfield];
      });
    } else {
      filedList.forEach(function (item) {
        formData[index].InspectionItem[item.tfield] = null;
      });
    }

    dispatch({
      type: 'Enter/packet',
      payload: {
        formData: _toConsumableArray(formData)
      }
    });
    var InspectionItem = formData[index];
    var hData = [formData[index].InspectionItem];
    catchData(InspectionItem, hData);

    if (value && value.DEFECT_CLASS_B) {
      commonApi({
        implClass: 'inspect.DefectClassCodeEvent',
        objectNo: objectNo,
        data: value
      }).then(function (res) {
        if (res && res.flag) setDBValueData2(res.defectClassCode);
      });
      setDBValueData([]);
    }
  }; // 检验值列表回车事件


  var onInputPressEnter = function onInputPressEnter(e, record, coordinate, field) {
    e.preventDefault();

    var _coordinate = _slicedToArray(coordinate, 2),
        x = _coordinate[0],
        y = _coordinate[1];
    /* 处理交互后台缓存方法 */


    var _record$InspectionIte = record.InspectionItem,
        UT = _record$InspectionIte.UT,
        LT = _record$InspectionIte.LT,
        USLS = _record$InspectionIte.USLS,
        LSLS = _record$InspectionIte.LSLS,
        ID = _record$InspectionIte.ID,
        AC = _record$InspectionIte.AC,
        RE = _record$InspectionIte.RE,
        SQ = _record$InspectionIte.SQ;
    UT = Math.abs(UT); //上公差取绝对值

    LT = -Math.abs(LT); //下公差取绝对值取反

    var value = form.getFieldValue([ID, 'InspectionItemResult', x, field]);
    var res = false;
    var ngNumber = 0;
    var finishNumber = 0;
    /* 空值判断 */

    if (value === null || value === undefined || !value.toString()) {
      message.warning("".concat(inspection.inputTestValue, "!"));
      return;
    } else {
      /* 去除空格 */
      value = value.toString().replace(/\s*/g, '');

      if (!value) {
        message.warning("".concat(inspection.inputTestValue, "!"));
        return;
      }
    }

    value = (value || value === 0) && isNaN(Number(value)) ? 'NAN' : Number(value);
    /* NaN判断 */

    if (value === 'NAN') {
      message.warning("".concat(inspection.formalError, "!"));
      return;
    }

    formData[y]['InspectionItemResult'][x] = formData[y]['InspectionItemResult'][x] || {}; // 检验均值录入

    if (field === 'TV') {
      // 生成检验结论
      var TD;

      if (value > UT) {
        var td = Number(format(evaluate("".concat(value, " - ").concat(UT)), {
          precision: 14
        }));
        TD = "".concat(inspection.greaterThan).concat(td);
      } else if (value < LT) {
        var _td = Number(format(evaluate("".concat(LT, " + ").concat(value)), {
          precision: 14
        }));

        TD = "".concat(inspection.lessThan).concat(_td);
      } else if (value === UT) {
        if (USLS === '<=') {
          TD = 'OK';
        } else {
          TD = "".concat(inspection.upperLimitDisqualified);
        }
      } else if (value === LT) {
        if (LSLS === '>=') {
          TD = 'OK';
        } else {
          TD = "".concat(inspection.lowerLimitDisqualified);
        }
      } else {
        TD = 'OK';
      }

      res = TD === 'OK' ? 'OK' : 'NG';
      /* 单列料检验结果 */

      formData[y]['InspectionItemResult'][x]['OBJECTID'] = ID;
      formData[y]['InspectionItemResult'][x]['TV'] = value;
      formData[y]['InspectionItemResult'][x]['TR'] = res;
      formData[y]['InspectionItemResult'][x]['TD'] = TD;
      formData[y]['InspectionItemResult'][x]['NO'] = x + 1; // 检验项不合格判定

      formData[y]['InspectionItemResult'].forEach(function (item) {
        if (item && item.TR === 'NG') ngNumber += 1;
        if (item && item.TR) finishNumber += 1;
      }); // 不良数赋值

      formData[y].InspectionItem.UQ = ngNumber; // 检验结果赋值

      if (ngNumber > AC || ngNumber > RE) {
        formData[y]['InspectionItem']['TR'] = 'NG';
      } else {
        formData[y]['InspectionItem']['TR'] = 'OK';
      }
    } else {
      // MIN MAX 值录入
      var InspectionResult = form.getFieldValue([ID, 'InspectionItemResult']);
      InspectionResult[x][field] = value;
      formData[y]['InspectionItemResult'][x][field] = value;
    }

    var InspectionItem = formData[y];
    var hData = [formData[y].InspectionItem];

    var callback = function callback() {
      dispatch({
        type: 'Enter/packet',
        payload: {
          formData: _toConsumableArray(formData)
        }
      }); // 光标跳转下一个输入框

      var nextInput = null;

      switch (field) {
        case 'TV':
          nextInput = document.querySelector("#checkItem-".concat(x, "-").concat(y, "-UMAX")) || document.querySelector("#checkItem-".concat(x + 1, "-").concat(y, "-TV")) || document.querySelector("#checkItem-0-".concat(y + 1, "-TV"));
          break;

        case 'UMAX':
          nextInput = document.querySelector("#checkItem-".concat(x, "-").concat(y, "-LMIN"));
          break;

        case 'LMIN':
          nextInput = document.querySelector("#checkItem-".concat(x + 1, "-").concat(y, "-TV")) || document.querySelector("#checkItem-0-".concat(y + 1, "-TV"));
          break;

        default:
          break;
      }

      if (!nextInput) {
        for (var i = y + 1; i < formData.length; i++) {
          var el = document.querySelector("#checkItem-0-".concat(i + 1, "-TV"));

          if (el) {
            nextInput = el;
            break;
          }
        }
      }
      /* 最后一个输入框不做操作 */


      if (!nextInput && x !== 0 && y !== 0) {
        document.querySelector("#checkItem-".concat(x, "-").concat(y, "-").concat(field)).blur();
        return;
      } else if (!nextInput && (x === 0 || y === 0)) {
        return;
      } else {
        nextInput.focus();
        nextInput.select();
      }
    };

    var currentInput = document.querySelector("#checkItem-".concat(x, "-").concat(y, "-").concat(field)); // 缓存数据

    catchData(InspectionItem, hData, callback, currentInput);
  }; // 计数型检验值列表onChange事件


  var inspectionItemDT = function inspectionItemDT(value, record, coordinate, field) {
    var _coordinate2 = _slicedToArray(coordinate, 2),
        x = _coordinate2[0],
        y = _coordinate2[1];
    /* 处理交互后台缓存方法 */


    var _record$InspectionIte2 = record.InspectionItem,
        ID = _record$InspectionIte2.ID,
        AC = _record$InspectionIte2.AC,
        RE = _record$InspectionIte2.RE;
    var ngNumber = 0;
    formData[y]['InspectionItemResult'][x] = formData[y]['InspectionItemResult'][x] || {};
    /* 单列料检验结果 */

    formData[y]['InspectionItemResult'][x]['OBJECTID'] = ID;
    formData[y]['InspectionItemResult'][x]['TV'] = value;
    formData[y]['InspectionItemResult'][x]['TR'] = value;
    formData[y]['InspectionItemResult'][x]['TD'] = value;
    formData[y]['InspectionItemResult'][x]['NO'] = x + 1; // 检验项不合格判定

    formData[y]['InspectionItemResult'].forEach(function (item) {
      if (item && item.TR === 'NG') ngNumber += 1;
    }); // 不良数赋值

    formData[y].InspectionItem.UQ = ngNumber; // 检验结果赋值

    if (ngNumber > AC || ngNumber > RE) {
      formData[y]['InspectionItem']['TR'] = 'NG';
    } else {
      formData[y]['InspectionItem']['TR'] = 'OK';
    }

    var InspectionItem = formData[y];
    var hData = [formData[y].InspectionItem];

    var callback = function callback() {
      dispatch({
        type: 'Enter/packet',
        payload: {
          formData: _toConsumableArray(formData)
        }
      });
    };

    var currentInput = document.querySelector("#checkItem-".concat(x, "-").concat(y, "-").concat(field)); // 缓存数据

    catchData(InspectionItem, hData, callback, currentInput);
  }; // 普通字段回车事件


  var commonInputPressEnter = function commonInputPressEnter(e, record, fieldName, index) {
    var oldValue = formData[index][fieldName[1]][fieldName[2]];
    var value = form.getFieldValue(fieldName);

    if (oldValue === value) {
      /* 光标下移 */
      var nextInput = document.getElementById("inspectionForm_".concat(formData[index + 1].InspectionItem.ID, "_InspectionItem_").concat(fieldName[2]));
      if (nextInput) nextInput.focus();
      return;
    }

    var fieldParams = body.filter(function (item) {
      return item.meta.FIELDNAME === fieldName[2];
    });
    e.preventDefault();
    var FTYPE = fieldParams[0].meta.FTYPE;
    var type = 'text';

    switch (FTYPE) {
      case 'INT':
        type = 'number';
        break;

      case 'DOUBLE':
        type = 'number';
        break;

      case 'FLOAT':
        type = 'number';
        break;

      case 'NUMERIC':
        type = 'number';
        break;

      default:
        break;
    }

    if (type === 'number') value = Number(value);

    if (typeof value === 'null' && !fieldParams[0].meta.ALLOWNULL) {
      message.warning("".concat(inspection.parameterEmpty));
      return;
    }

    formData[index][fieldName[1]][fieldName[2]] = value;
    dispatch({
      type: 'Enter/packet',
      payload: {
        formData: _toConsumableArray(formData)
      }
    });
    var ID = record.InspectionItem.ID;
    var item = form.getFieldsValue()[ID]; // 缓存数据

    var InspectionItem = {
      InspectionItem: _objectSpread({
        ID: ID
      }, item.InspectionItem),
      InspectionItemResult: formData[index].InspectionItemResult
    };
    var hData = [formData[index].InspectionItem];

    var callback = function callback() {
      dispatch({
        type: 'enterCmp/packet',
        payload: {
          formData: formData
        }
      });

      if (index === formData.length - 1) {
        document.getElementById("inspectionForm_".concat(formData[index].InspectionItem.ID, "_InspectionItem_").concat(fieldName[2])).blur();
        return;
      }
      /* 光标下移 */


      var nextInput = document.getElementById("inspectionForm_".concat(formData[index + 1].InspectionItem.ID, "_InspectionItem_").concat(fieldName[2]));
      if (nextInput) nextInput.focus();
    };
    /* 获取当前输入框 */


    var currentInput = document.getElementById("inspectionForm_".concat(formData[index].InspectionItem.ID, "_InspectionItem_").concat(fieldName[2]));
    catchData(InspectionItem, hData, callback, currentInput);
  }; // 捕获焦点


  var onInputFocus = function onInputFocus(record, inspectionItem) {
    setCurrentInspectionResult(inspectionItem);
    setCurrentInspection(record);
    setSelectedRowKeys([record.InspectionItem.ID]);
  }; // 失去焦点


  var onInputBlur = function onInputBlur(fieldName, index) {
    var oldValue = null;
    var newValue = null;

    if (fieldName[1] === 'InspectionItemResult') {
      oldValue = formData[index][fieldName[1]][fieldName[2]] && formData[index][fieldName[1]][fieldName[2]][fieldName[3]];
      newValue = form.getFieldValue(fieldName[0])[fieldName[1]][fieldName[2]] && form.getFieldValue(fieldName[0])[fieldName[1]][fieldName[2]][fieldName[3]];
      oldValue = oldValue || null;
      newValue = !newValue ? null : Number(newValue);
    } else if (fieldName[1] === 'InspectionItem') {
      oldValue = formData[index][fieldName[1]][fieldName[2]] && formData[index][fieldName[1]][fieldName[2]];
      newValue = form.getFieldValue(fieldName[0])[fieldName[1]][fieldName[2]] && form.getFieldValue(fieldName[0])[fieldName[1]][fieldName[2]];
    }

    if (oldValue !== newValue && oldValue !== null) {
      message.warning("".concat(inspection.notSaved));
      dispatch({
        type: 'Enter/packet',
        payload: {
          formData: _toConsumableArray(formData)
        }
      });
    }

    setCurrentInspectionResult(null);
  };

  var toomodelUser = function toomodelUser(editor) {
    return function () {
      setEditor(editor);
      dispatch({
        type: 'enterCmp/packet',
        payload: {
          userVisible: !userVisible
        }
      });
    };
  };

  var selectOk = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var res, emailList, recipient, hisBuyers;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return childRef.current.Ok();

            case 2:
              res = _context5.sent;

              if (!(JSON.stringify(res) === '{}')) {
                _context5.next = 6;
                break;
              }

              message.warn("".concat(inspection.selectData));
              return _context5.abrupt("return");

            case 6:
              if (editor === 'UsersSelector') {
                // emailList获取当前表单所有值
                emailList = senderForm.getFieldValue('CARBON_COPY'); // recipient 带：的数据 进行去重

                recipient = Array.from(new Set([].concat(_toConsumableArray(CARBON_COPY), _toConsumableArray(res.NAMEr)))); // hisBuyers表单数据 进行去重

                hisBuyers = Array.from(new Set([].concat(_toConsumableArray(emailList), _toConsumableArray(res.NAME))));
                setCARBON_COPY([].concat(recipient));
                senderForm.setFieldsValue({
                  CARBON_COPY: [].concat(hisBuyers)
                });
              }

              toomodelUser()();

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function selectOk() {
      return _ref6.apply(this, arguments);
    };
  }(); // 质检录入不良信息保存


  var saveFooter = debounce( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
      var res;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return commonApi({
                implClass: 'inspect.IQCFillInBadDescriptionEvent',
                objectNo: objectNo,
                hData: [newRowData] || hData,
                data: value
              });

            case 2:
              res = _context6.sent;

              if (res && res.flag) {
                footerForm.setFieldsValue(_objectSpread({}, value));
                dispatch({
                  type: 'Enter/packet',
                  payload: {
                    newRowData: res.newRowData
                  }
                });
              }

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }(), 2000);
  /* Footer 表单修改保存 */

  var onFooterFormChange = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var value, res, _defectForm2;

      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              value = defectRef?.current?.getForm()?.getFieldsValue();
              _context7.next = 3;
              return commonApi({
                implClass: 'inspect.IQCFillInBadDescriptionEvent',
                objectNo: objectNo,
                hData: [newRowData] || hData,
                data: value
              });

            case 3:
              res = _context7.sent;

              if (res && res.flag) {
                _defectForm2 = defectFormProps;
                _defectForm2.record = value;
                setDefectFormProps(_defectForm2);
                dispatch({
                  type: 'Enter/packet',
                  payload: {
                    newRowData: res.newRowData
                  }
                });
                dispatch({
                  type: 'Enter/packet',
                  payload: {
                    defectVisible: false,
                    hintVisible: false
                  }
                });
              }

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function onFooterFormChange() {
      return _ref8.apply(this, arguments);
    };
  }();

  var loopNode = function loopNode() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return data.map(function (item) {
      var FIELDNAME = item.FIELDNAME,
          ENNAME = item.ENNAME,
          NAME = item.NAME;
      var title = /*#__PURE__*/React.createElement("span", null, isEnglish ? ENNAME || FIELDNAME : NAME);
      var props = {
        key: FIELDNAME,
        title: title,
        dataRef: item
      };
      return /*#__PURE__*/React.createElement(TreeNode, props);
    });
  }; // 选择展示列


  var onCheck = function onCheck(checkedKeys) {
    var col = [];
    body.map(function (item) {
      checkedKeys.map(function (el) {
        if (el === item.meta.FIELDNAME) {
          col.push(item);
        }
      });
    });
    localStorage.setItem([data.NO], JSON.stringify(col));
    setShowColumns(col);
    setCheckedKeys(checkedKeys);
  };

  var content = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tree, {
    checkable: true,
    onCheck: onCheck,
    checkedKeys: checkedKeys
  }, loopNode(parseMeta(body)))); // 缺陷表单

  var clickDefectForm = function clickDefectForm() {
    if (formData.length) {
      // 显示Footer
      var ng = false;
      var maxInspectionQty = 0,
          MINOR_D = 0,
          SEVERE_D = 0,
          UQ = 0;
      var UQObj = {};

      for (var index = 0; index < formData.length; index++) {
        if (formData[index].InspectionItem.TR === 'NG') {
          ng = true;
        } // 二层循环遍历检验值列表


        for (var i = 0; i < formData[index].InspectionItemResult.length; i++) {
          if (formData[index].InspectionItemResult[i] && formData[index].InspectionItemResult[i].TR === 'NG') {
            UQObj[i] = true;

            switch (formData[index].InspectionItem.FC) {
              case '1':
              case '2':
                SEVERE_D += 1;
                break;

              case '3':
                MINOR_D += 1;
                break;

              default:
                break;
            }
          }
        }
      }

      for (var _index in UQObj) {
        if (UQObj[_index] === true) UQ += 1;
      }

      maxInspectionQty = Math.max.apply(Math, formData.map(function (item) {
        return !isNaN(Number(item.InspectionItem.TV)) && item.InspectionItem.SQ;
      }));

      if (ng) {
        var record = _objectSpread(_objectSpread({}, defectFormProps.record), {}, {
          IQ: maxInspectionQty,
          SEVERE_D: SEVERE_D,
          MINOR_D: MINOR_D,
          UQ: UQ
        });

        setDefectFormProps(_objectSpread(_objectSpread({}, defectFormProps), {}, {
          record: record
        }));
        dispatch({
          type: 'Enter/packet',
          payload: {
            defectVisible: !defectVisible
          }
        });
      } else {
        setDefectFormProps({});
        setShowFooter(false);
      }
    }
  }; // 关闭缺陷表单


  var cancelDefectForm = function cancelDefectForm() {
    var value = defectRef?.current?.getForm()?.getFieldsValue();
    var defectChange = false;

    for (var key in value) {
      if (value[key] !== defectFormProps?.record[key]) defectChange = true;
    }

    if (defectChange) {
      dispatch({
        type: 'Enter/packet',
        payload: {
          hintVisible: true
        }
      });
    } else {
      dispatch({
        type: 'Enter/packet',
        payload: {
          defectVisible: false
        }
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "enter-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enter-header"
  }, /*#__PURE__*/React.createElement(InspectionHeader, {
    data: data,
    header: header,
    hData: newRowData || hData,
    headerDisplay: headerDisplay,
    setHeaderDisplay: setHeaderDisplay
  })), /*#__PURE__*/React.createElement("div", {
    className: "enter-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enter-fc-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enter-btn-list"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: clearAllCatch,
    disabled: formDisabled
  }, inspection.clearAll), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: clearSingleCatch,
    disabled: formDisabled || currentInspection === null
  }, inspection.removeSingle), showFooter && footer.length > 0 ? /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: clickDefectForm // disabled={formDisabled || currentInspection === null}

  }, defectForm) : '', /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: showFooter ? clickDefectForm : completeSave,
    disabled: formDisabled
  }, inspection.entryComplete), /*#__PURE__*/React.createElement(Switch, {
    checkedChildren: "\u5934\u90E8\u5C55\u5F00",
    unCheckedChildren: "\u5934\u90E8\u6536\u8D77",
    onChange: function onChange(state) {
      return setHeaderDisplay(state);
    },
    checked: headerDisplay
  }), /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom",
    title: '列展示',
    content: content,
    trigger: "click"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary"
  }, " \u9009\u62E9\u5C55\u793A\u5217"))), /*#__PURE__*/React.createElement("div", {
    className: currentInspectionResult && currentInspectionResult.TR === 'NG' ? "insp-result ng" : "insp-result"
  }, currentInspectionResult && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, inspection.testValue, ": ", currentInspectionResult.TV), /*#__PURE__*/React.createElement("span", null, inspection.conclusion, ": ", currentInspectionResult.TR), /*#__PURE__*/React.createElement("span", null, inspection.conclusionDescription, ": ", currentInspectionResult.TD)))), /*#__PURE__*/React.createElement(Form, {
    form: form,
    name: "inspectionForm"
  }, /*#__PURE__*/React.createElement(Table, {
    className: formData.length > 20 ? 'paging' : null,
    columns: columns,
    dataSource: formData,
    bordered: true,
    pagination: {
      defaultCurrent: 1,
      defaultPageSize: 20,
      hideOnSinglePage: true,
      size: 'small'
    },
    scroll: {
      x: '100%',
      y: '100%'
    },
    rowKey: function rowKey(record) {
      return record.InspectionItem.ID;
    },
    onRow: function onRow(record) {
      return {
        onClick: function onClick() {
          if (selectedRowKeys.length === 0 || selectedRowKeys[0] !== record.InspectionItem.ID) {
            setSelectedRowKeys([record.InspectionItem.ID]);
            setCurrentInspection(record);
          }
        }
      };
    },
    rowSelection: {
      type: 'radio',
      selectedRowKeys: selectedRowKeys
    }
  }))), /*#__PURE__*/React.createElement(DragModal, {
    zIndex: 1100,
    namespace: "selectorModal",
    width: 500,
    height: 550,
    title: '选择',
    visible: userVisible,
    onOk: selectOk,
    onCancel: toomodelUser()
  }, /*#__PURE__*/React.createElement(UserSelectForm, {
    ref: childRef,
    onOk: selectOk,
    editor: editor
  })), /*#__PURE__*/React.createElement(DragModal, {
    namespace: "selectorModal",
    width: 520,
    height: 550,
    title: defectForm,
    visible: defectVisible,
    onCancel: cancelDefectForm,
    footer: [/*#__PURE__*/React.createElement(Button, {
      type: "dashed",
      onClick: cancelDefectForm
    }, inspection.cancel), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      ghost: true,
      onClick: onFooterFormChange
    }, inspection.ts), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: completeSave
    }, inspection.submit)]
  }, /*#__PURE__*/React.createElement(PropertyForm, _extends({
    ref: defectRef
  }, props, defectFormProps, {
    namespace: namespace,
    layout: layout
  }))), /*#__PURE__*/React.createElement(DragModal, {
    title: inspection.hint,
    visible: hintVisible,
    width: 280,
    onOk: onFooterFormChange,
    onCancel: function onCancel() {
      dispatch({
        type: 'Enter/packet',
        payload: {
          defectVisible: false,
          hintVisible: false
        }
      });
    }
  }, inspection.hintInfo));
};

function mapStateToProps(_ref9) {
  var Enter = _ref9.Enter;
  return _objectSpread({}, Enter);
}

export default connect(mapStateToProps)(EnterCmp);