function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["processInitValue", "PNIndex", "EDITPARAMS", "canInput", "DISPLAY_NAME", "FIELDNAME", "ETYPE", "INIT"];

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 流程详情页面
 */
import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Divider, Form, Input, Radio, Button, Dropdown, Menu, Table, message, // 提前引入全局提示, 脚本中可使用;
Select } from 'antd';
import dayjs from 'dayjs';
import { UserOutlined, DownOutlined, AimOutlined, DownloadOutlined } from '@ant-design/icons';
import PropertyForm from '../property/PropertyForm';
import Modal from '../../common/drag/DragModal';
import SearchSelect from '../../common/search/SearchSelect';
import UserSelectorForm from '../property/UserSelectorForm';
import language from '@/locale/language';
import styles from './processDetail.less';
import { ergodicRoot, isEnglish } from '../../../utils/utils';
import { downloadFiles, uploadFileAsync } from '../../../service/uploadApi';
import UploadFile from '../property/UploadFile';
import { clickBtn } from '../../../utils/buttonFunc';
import ProcessDetail from './ProcessDetail';
import NewUserSelectorFrom from '../property/NewUserSelectorFrom';
import SearchInput from '../../common/search/SearchInput';
var Item = Form.Item;
var Panel = Collapse.Panel;
var Option = Select.Option;
var common = language.common,
    select_data = language.message.property.select_data;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
export default (function (_ref) {
  var Act = _ref.Act,
      namespace = _ref.namespace;
  return function (WrappedComponent) {
    return function (_ref2) {
      var model = _ref2.model,
          dispatch = _ref2.dispatch;
      var _model$PNList = model.PNList,
          PNList = _model$PNList === void 0 ? [] : _model$PNList,
          _model$PBList = model.PBList,
          PBList = _model$PBList === void 0 ? [] : _model$PBList,
          _model$historyList = model.historyList,
          historyList = _model$historyList === void 0 ? [] : _model$historyList,
          _model$objectFormList = model.objectFormList,
          objectFormList = _model$objectFormList === void 0 ? [] : _model$objectFormList,
          _model$objectFieldLis = model.objectFieldList,
          objectFieldList = _model$objectFieldLis === void 0 ? [] : _model$objectFieldLis,
          tableName = model.tableName,
          processInstanceId = model.processInstanceId,
          taskId = model.taskId,
          _model$expandedRowKey = model.expandedRowKeys,
          expandedRowKeys = _model$expandedRowKey === void 0 ? [] : _model$expandedRowKey,
          _model$selectedRowKey = model.selectedRowKey,
          selectedRowKey = _model$selectedRowKey === void 0 ? [] : _model$selectedRowKey,
          _model$selectedRows = model.selectedRows,
          selectedRows = _model$selectedRows === void 0 ? [] : _model$selectedRows,
          _model$userVisible = model.userVisible,
          userVisible = _model$userVisible === void 0 ? false : _model$userVisible,
          _model$userList = model.userList,
          userList = _model$userList === void 0 ? [] : _model$userList,
          _model$userTreeList = model.userTreeList,
          userTreeList = _model$userTreeList === void 0 ? [] : _model$userTreeList,
          _model$historyNode = model.historyNode,
          historyNode = _model$historyNode === void 0 ? [] : _model$historyNode,
          _model$selectRole = model.selectRole,
          selectRole = _model$selectRole === void 0 ? [] : _model$selectRole,
          nextNodeUserModel = model.nextNodeUserModel,
          enable = model.enable;

      var _Form$useForm = Form.useForm(),
          _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
          form = _Form$useForm2[0];

      var _Form$useForm3 = Form.useForm(),
          _Form$useForm4 = _slicedToArray(_Form$useForm3, 1),
          nextNodeForm = _Form$useForm4[0];

      var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          canSubmit = _useState2[0],
          setCanSubmit = _useState2[1];

      var _Form$useForm5 = Form.useForm(),
          _Form$useForm6 = _slicedToArray(_Form$useForm5, 1),
          opinionForm = _Form$useForm6[0];

      var _Form$useForm7 = Form.useForm(),
          _Form$useForm8 = _slicedToArray(_Form$useForm7, 1),
          overForm = _Form$useForm8[0];

      var childRef = useRef();
      var userRef = useRef();

      var _useState3 = useState(null),
          _useState4 = _slicedToArray(_useState3, 2),
          editor = _useState4[0],
          setEditor = _useState4[1];

      var _useState5 = useState({}),
          _useState6 = _slicedToArray(_useState5, 2),
          formData = _useState6[0],
          setFormData = _useState6[1];

      var _useState7 = useState(null),
          _useState8 = _slicedToArray(_useState7, 2),
          refusalNode = _useState8[0],
          setRefusalNode = _useState8[1];

      var _useState9 = useState(''),
          _useState10 = _slicedToArray(_useState9, 2),
          searchValue = _useState10[0],
          setSearValue = _useState10[1];

      var _useState11 = useState(false),
          _useState12 = _slicedToArray(_useState11, 2),
          overVisible = _useState12[0],
          setOverVisible = _useState12[1];

      var _useState13 = useState([]),
          _useState14 = _slicedToArray(_useState13, 2),
          collapseActiveKey = _useState14[0],
          setCollapseActiveKey = _useState14[1];

      var _useState15 = useState({}),
          _useState16 = _slicedToArray(_useState15, 2),
          currentNodeForm = _useState16[0],
          setCurrentNodeForm = _useState16[1];

      var _useState17 = useState(null),
          _useState18 = _slicedToArray(_useState17, 2),
          userItem = _useState18[0],
          setUserItem = _useState18[1];

      var _useState19 = useState({}),
          _useState20 = _slicedToArray(_useState19, 2),
          singleUserList = _useState20[0],
          setSingleUserList = _useState20[1];

      useEffect(function () {
        if (!refusalNode) opinionForm.resetFields();
      }, [refusalNode]);
      useEffect(function () {
        if (!PNList.length) return;
        var current = PNList.filter(function (item) {
          return item.current;
        })[0];
        var currentNodeEvent = objectFormList.filter(function (obj) {
          return obj.PROCESS_NODE === current.activeId;
        })[0];
        setCurrentNodeForm(currentNodeEvent);
        setCollapseActiveKey(current.id);
      }, [PNList]);
      useEffect(function () {
        setTimeout(function () {
          var scrollItemDom = document.querySelector("#".concat(namespace, " .ant-collapse-item-active > .ant-collapse-content-active > .ant-collapse-content-box"));
          if (scrollItemDom) scrollItemDom.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 500);
        return function () {
          dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              PNList: []
            }
          });
        };
      }, []);

      var ProcessNodeEditor = function ProcessNodeEditor(_ref3) {
        var processInitValue = _ref3.processInitValue,
            PNIndex = _ref3.PNIndex,
            EDITPARAMS = _ref3.EDITPARAMS,
            canInput = _ref3.canInput,
            DISPLAY_NAME = _ref3.DISPLAY_NAME,
            FIELDNAME = _ref3.FIELDNAME,
            ETYPE = _ref3.ETYPE,
            INIT = _ref3.INIT,
            rest = _objectWithoutProperties(_ref3, _excluded);

        if (!INIT) return;
        var label = /*#__PURE__*/React.createElement("span", {
          style: {
            width: 100
          }
        }, DISPLAY_NAME);
        var Cmp = null;

        switch (ETYPE) {
          case 'TextBox':
            Cmp = /*#__PURE__*/React.createElement(Item, {
              label: label,
              name: FIELDNAME
            }, /*#__PURE__*/React.createElement(Input, {
              disabled: !canInput
            }));
            break;

          case 'TextArea':
            Cmp = /*#__PURE__*/React.createElement(Item, {
              label: label,
              name: FIELDNAME
            }, /*#__PURE__*/React.createElement(Input.TextArea, {
              disabled: !canInput
            }));
            break;

          case 'RadioEditor':
            Cmp = /*#__PURE__*/React.createElement(Item, {
              label: label,
              name: FIELDNAME
            }, /*#__PURE__*/React.createElement(Radio.Group, {
              disabled: !canInput,
              className: !canInput ? styles.disabledColor : ''
            }, EDITPARAMS.map(function (item, index) {
              return /*#__PURE__*/React.createElement(Radio, {
                value: item.KEY,
                key: index
              }, item.NAME);
            })));
            break;

          case 'UsersSelector':
            Cmp = /*#__PURE__*/React.createElement(SearchSelect, {
              className: !canInput ? styles.disabledColor : '',
              label: label,
              name: FIELDNAME,
              onClick: canInput ? function () {
                return setEditor({
                  editor: 'UsersSelector',
                  fieldName: '#',
                  // 全局调用用户选择器fieldName: # 和系统字段做区分
                  tableName: 'SUSER' // 全局调用用户选择器 tableName: 'SUSER' 和业务对象做区分

                });
              } : null,
              disabled: !canInput,
              editor: "UsersSelector"
            });
            break;

          case 'CC':
            Cmp = /*#__PURE__*/React.createElement(SearchSelect, {
              className: !canInput ? styles.disabledColor : '',
              label: label,
              name: FIELDNAME,
              onClick: canInput ? function () {
                return setEditor({
                  editor: 'UsersSelector',
                  fieldName: FIELDNAME,
                  // 全局调用用户选择器fieldName: # 和系统字段做区分
                  tableName: 'SUSER' // 全局调用用户选择器 tableName: 'SUSER' 和业务对象做区分

                });
              } : null,
              disabled: !canInput,
              editor: "UsersSelector"
            });
            break;

          case 'upload':
            var props = {
              model: model,
              namespace: namespace,
              disabled: !canInput,
              initVal: processInitValue[FIELDNAME],
              requestApi: uploadFileAsync,
              tableName: 'ACT_NODE_FILE',
              reqParams: {
                tableName: 'ACT_NODE_FILE',
                PROCESSINS_ID: processInstanceId,
                TASK_ID: taskId,
                record: PBList
              },
              onChange: function onChange(fileList) {
                var newDataList = fileList.map(function (item) {
                  if (!item.hasOwnProperty('xhr') || item.status !== 'done') return null;
                  return {
                    fLocation: item.xhr.url,
                    uid: item.uid,
                    fType: item.type,
                    fileName: item.name,
                    status: item.status,
                    FSIZE: Number(item.size / 1024).toFixed(2) + ' kb'
                  };
                });
                form.setFieldsValue(_defineProperty({}, FIELDNAME, newDataList));
              },
              onPreview: function onPreview(file) {
                dispatch({
                  type: "".concat(namespace, "/packet"),
                  payload: {
                    selectedRows: [{
                      ID: file.uid,
                      FLOCATION: file.fLocation
                    }]
                  }
                });
                clickBtn({
                  enName: 'FilePreview',
                  name: '文件预览',
                  objectNo: 'ACT_NODE_FILE',
                  tableName: 'ACT_NODE_FILE',
                  id: file.uid,
                  no: 'FilePreview',
                  implClass: 'file/base/browsePDF',
                  implType: 3,
                  mType: 0,
                  params: {},
                  reqParam: 'objectNo;hSingleData',
                  wType: 'browseFiles'
                }, // object
                {
                  objectNo: 'ACT_NODE_FILE'
                }, // engine
                _objectSpread(_objectSpread({}, model), {}, _defineProperty({
                  selectedRows: [{
                    ID: file.uid,
                    FLOCATION: file.fLocation
                  }],
                  namespace: namespace,
                  objectANamespace: namespace
                }, file.uid, true)) // model
                );
              },
              onDownload: function onDownload(file) {
                var FTYPE = file.fileName.substr(file.fileName.lastIndexOf('.'));
                var FNAME = file.fileName.substr(0, file.fileName.lastIndexOf('.'));
                var hData = [{
                  ID: file.uid,
                  FLOCATION: file.fLocation,
                  FTYPE: FTYPE,
                  FNAME: FNAME
                }];
                downloadFiles({
                  objectNo: 'ACT_NODE_FILE',
                  hData: hData
                });
              },
              showUploadList: {
                showDownloadIcon: true,
                downloadIcon: /*#__PURE__*/React.createElement(DownloadOutlined, null)
              }
            };
            Cmp = /*#__PURE__*/React.createElement(Item, {
              label: label,
              name: FIELDNAME
            }, /*#__PURE__*/React.createElement(UploadFile, _extends({}, props, {
              form: form
            })));
            break;

          default:
            Cmp = /*#__PURE__*/React.createElement(Item, {
              label: label,
              name: FIELDNAME
            }, /*#__PURE__*/React.createElement(Input, {
              disabled: !canInput
            }));
            break;
        }

        return Cmp;
      }; // onChange改变表单多肽字段显示


      var onFormChange = function onFormChange(val, values, activeId) {
        var currentForm = objectFormList.filter(function (obj) {
          return obj.PROCESS_NODE === activeId;
        })[0];
        var fieldList = JSON.parse(currentForm.NODE_DEF);
        var peptideFields = fieldList.filter(function (field) {
          return field.ETYPE === 'RadioEditor';
        });
        var addFields = [];
        var otherFields = [];
        peptideFields.forEach(function (field) {
          var currentOption = field.EDITPARAMS.filter(function (option) {
            return option.KEY === values[field.FIELDNAME];
          })[0];

          if (currentOption && currentOption.PEPTIDE_FIELDS) {
            addFields = [].concat(_toConsumableArray(addFields), _toConsumableArray(currentOption.PEPTIDE_FIELDS));
            var otherOption = field.EDITPARAMS.filter(function (option) {
              return option.KEY !== values[field.FIELDNAME];
            });
            otherOption.forEach(function (option) {
              return otherFields = [].concat(_toConsumableArray(otherFields), _toConsumableArray(option.PEPTIDE_FIELDS));
            });
          }
        });
        var newObjectFormList = objectFormList.map(function (item) {
          if (item.PROCESS_NODE === activeId) {
            var NODE_DEF = fieldList.map(function (field) {
              var INIT = addFields.indexOf(field.FIELDNAME) !== -1 ? true : otherFields.indexOf(field.FIELDNAME) !== -1 ? false : field.INIT;
              return _objectSpread(_objectSpread({}, field), {}, {
                INIT: INIT
              });
            });
            return _objectSpread(_objectSpread({}, item), {}, {
              NODE_DEF: JSON.stringify(NODE_DEF)
            });
          }

          return item;
        });
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            objectFormList: _toConsumableArray(newObjectFormList)
          }
        });
      }; // 初始化多肽字段渲染


      var renderPeptide = function renderPeptide(NODE_DEF, formValue) {
        var peptideFields = NODE_DEF.filter(function (field) {
          return field.ETYPE === 'RadioEditor';
        });
        var addFields = [];
        peptideFields.forEach(function (field) {
          var currentOption = null;

          if (field.EDITPARAMS) {
            currentOption = field.EDITPARAMS.filter(function (option) {
              return option.KEY === formValue[field.FIELDNAME];
            })[0];
          }

          if (currentOption && currentOption.PEPTIDE_FIELDS) {
            addFields.push.apply(addFields, _toConsumableArray(currentOption.PEPTIDE_FIELDS));
          }
        });
        var newNODE_DEF = NODE_DEF.map(function (field) {
          var INIT = addFields.indexOf(field.FIELDNAME) !== -1 ? true : field.INIT;
          return _objectSpread(_objectSpread({}, field), {}, {
            INIT: INIT
          });
        });
        return newNODE_DEF;
      };

      var eventButton = function eventButton(event) {
        var Cmp = null;

        switch (event) {
          case 'submit':
            Cmp = /*#__PURE__*/React.createElement(Button, {
              type: "primary",
              onClick: submit
            }, "\u4FDD\u5B58\u63D0\u4EA4");
            break;

          case 'entrust':
            var showUser = function showUser() {
              dispatch({
                type: 'RunningProcess/queryUserData',
                payload: {
                  namespace: namespace,
                  hasUser: userList.length && userTreeList.length
                }
              });
            };

            Cmp = /*#__PURE__*/React.createElement(Button, {
              style: {
                background: '#4caf50'
              },
              type: "primary",
              onClick: showUser
            }, "\u4EFB\u52A1\u59D4\u6258");
            break;

          case 'refusalTo':
            var menu = /*#__PURE__*/React.createElement(Menu, {
              onClick: setRefusalNode
            }, historyNode.map(function (item, index) {
              return /*#__PURE__*/React.createElement(Menu.Item, {
                key: item.ID,
                icon: /*#__PURE__*/React.createElement(AimOutlined, null)
              }, item.NAME);
            }));
            Cmp = /*#__PURE__*/React.createElement(Dropdown, {
              disabled: !historyNode.length,
              overlay: menu
            }, /*#__PURE__*/React.createElement(Button, {
              style: {
                background: '#ff9800'
              },
              type: "primary"
            }, "\u9A73\u56DE\u81F3", /*#__PURE__*/React.createElement(DownOutlined, null)));
            break;

          case 'over':
            Cmp = /*#__PURE__*/React.createElement(Button, {
              type: "primary",
              onClick: function onClick() {
                return setOverVisible(true);
              },
              danger: true
            }, "\u7EC8\u6B62");
            break;

          default:
            break;
        }

        return Cmp;
      }; // 保存提交


      var submit = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var form2, submitFn;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  form2 = null;

                  if (!childRef.current) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return childRef.current.getForm();

                case 4:
                  form2 = _context.sent;

                case 5:
                  submitFn = function submitFn(objectForm) {
                    var processForm = form.getFieldsValue();
                    var reverseData = {}; // 当前节点数据

                    var NODE_DEF = JSON.parse(currentNodeForm.NODE_DEF || '[]');
                    var NODE_EVENT = JSON.parse(currentNodeForm.NODE_EVENT || '[]');
                    var reverseFields = JSON.parse(currentNodeForm.REVERSE_FIELDS || '[]');
                    var conclusion = NODE_DEF.filter(function (item) {
                      return item.FIELDNAME === 'conclusion';
                    });
                    var submitEvent = NODE_EVENT.filter(function (item) {
                      return item.EVENT === 'submit';
                    }); // 提交保存脚本

                    var subScript = null;

                    if (submitEvent.length && submitEvent[0].SCRIPT) {
                      subScript = submitEvent[0].SCRIPT;
                    } // 流程结论中文映射值


                    var name = undefined;

                    if (conclusion.length) {
                      var res = conclusion[0].EDITPARAMS.filter(function (item) {
                        return item.KEY === processForm.conclusion;
                      });

                      if (res.length) {
                        name = res[0].NAME;
                      }
                    }

                    processForm.name = name; // 节点事件脚本验证

                    var test = true;

                    if (subScript) {
                      try {
                        test = eval("(objectForm,processForm,userName,message) => {".concat(subScript, "}"))(objectForm, processForm, localStorage.userName, message);
                      } catch (error) {
                        test = false;
                        message.error("\u811A\u672C\u8FD0\u884C\u5F02\u5E38! ".concat(error.name, " ").concat(error.message));
                      }
                    } // 脚本验证通过交互后台提交


                    if (test) {
                      dispatch({
                        type: 'RunningProcess/submitSave',
                        payload: _objectSpread({
                          taskId: taskId,
                          processInstanceId: processInstanceId,
                          objectForm: objectForm,
                          processForm: processForm,
                          reverseData: reverseData,
                          reverseFields: reverseFields,
                          objectNo: tableName,
                          ID: PBList[0].ID,
                          userName: localStorage.userName,
                          namespace: namespace
                        }, singleUserList)
                      });
                    }
                  };

                  if (form2) {
                    form2.validateFields().then(function () {
                      var objectForm = childRef.current.getFormData();
                      submitFn(objectForm);
                    });
                  } else {
                    submitFn();
                  }

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function submit() {
          return _ref4.apply(this, arguments);
        };
      }(); // 任务委托


      var entrust = function entrust() {
        if (!selectedRowKey.length) {
          message.warn('请先选择用户!');
          return;
        }

        dispatch({
          type: "RunningProcess/entrustTo",
          payload: {
            namespace: namespace,
            taskId: taskId,
            userName: selectedRows[0].NAME
          }
        });
      }; // 驳回至


      var refusalTo = function refusalTo(_ref5) {
        var opinion = _ref5.opinion;
        var current = PNList.filter(function (item) {
          return item.current;
        })[0];
        var ParallelNodes = PNList.filter(function (item) {
          return item.sequence === current.sequence;
        }).map(function (item) {
          return item.id;
        });
        dispatch({
          type: 'RunningProcess/refusalTo',
          payload: {
            taskId: current.id,
            activeId: refusalNode.key,
            processInstanceId: processInstanceId,
            options: opinion,
            userName: localStorage.userName,
            ParallelNodes: ParallelNodes,
            namespace: namespace
          }
        });
      }; // 终止


      var over = function over(options) {
        dispatch({
          type: "RunningProcess/revoke",
          payload: {
            namespace: namespace,
            options: options,
            processInstanceId: processInstanceId
          }
        });
      };

      var selectOk = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var res, userValue, arr, oldValue, emailList;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return userRef.current.Ok();

                case 2:
                  res = _context2.sent;

                  if (!(JSON.stringify(res) === '{}')) {
                    _context2.next = 6;
                    break;
                  }

                  message.warn('请选择有效数据');
                  return _context2.abrupt("return");

                case 6:
                  if (res) {
                    // userValue 选中的带：未截取的数据
                    userValue = res.userFieldValue.split(','); // arr 对当前选中值中有：的值进行截取

                    arr = userValue.map(function (item) {
                      return item.substr(item.indexOf(':') + 1);
                    }); // oldValue 从formData 表单中获取带：的值

                    oldValue = formData[res.userFieldName] ? formData[res.userFieldName].toString().split(',') : []; // formData 储存未截取的数据

                    userValue = [].concat(_toConsumableArray(oldValue), _toConsumableArray(userValue));
                    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, res.userFieldName, userValue))); // emailList 再次选择时获取表单中数据（上次选择的截取之后的值和输入值

                    emailList = form.getFieldValue(res.userFieldName); // 当前所有显示值去重

                    arr = emailList ? Array.from(new Set([].concat(_toConsumableArray(emailList), _toConsumableArray(arr)))) : arr; // 给表单赋值

                    res[res.userFieldName] = arr;
                  }

                  if (JSON.stringify(res) === '{}') {
                    message.warn('请选择有效数据');
                  } else {
                    form.setFieldsValue(res);
                    setEditor(null);
                  }

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function selectOk() {
          return _ref6.apply(this, arguments);
        };
      }();

      var userSelectOK = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var res;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return userRef.current.Ok();

                case 2:
                  res = _context3.sent;

                  if (!(JSON.stringify(res) === '{}')) {
                    _context3.next = 6;
                    break;
                  }

                  message.warn('请选择有效数据');
                  return _context3.abrupt("return");

                case 6:
                  if (res) {
                    setSingleUserList(_objectSpread(_objectSpread({}, singleUserList), {}, _defineProperty({
                      selectUser: true
                    }, res.userFieldName, res.userFieldValue)));
                  }

                  nextNodeForm.setFieldsValue(res);
                  setUserItem(null);

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function userSelectOK() {
          return _ref7.apply(this, arguments);
        };
      }(); // 获取父级Key


      var getParentkeys = function getParentkeys(key, tree) {
        var parentKey;

        for (var i = 0; i < tree.length; i++) {
          var node = tree[i];

          if (node.children) {
            if (node.children.some(function (item) {
              return item.ID === key;
            })) {
              parentKey = node.ID;
            } else if (getParentkeys(key, node.children)) {
              parentKey = getParentkeys(key, node.children);
            }
          }
        }

        return parentKey;
      }; // 搜索用户


      var onSearchUser = function onSearchUser(queryWord) {
        if (!queryWord) return;
        setSearValue(queryWord);
        var expandedRowKeys = [];
        var list = userList.filter(function (i) {
          return i.NAME.indexOf(queryWord) > -1;
        });
        var rootList = ergodicRoot(userList);
        list.forEach(function (j) {
          expandedRowKeys = expandedRowKeys.concat(getParentkeys(j.ID, rootList));
        });

        for (var i = 0; i < 10; i++) {
          if (expandedRowKeys.length && expandedRowKeys.indexOf('PID') < 0) {
            userList.map(function (item) {
              expandedRowKeys.map(function (item1) {
                if (item.ID === item1) {
                  !expandedRowKeys.includes(item.PID) && expandedRowKeys.push(item.PID);
                }
              });
            });
          }
        }

        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            expandedRowKeys: new Set(expandedRowKeys)
          }
        });
      }; // 用户选择行展开


      var onExpandedRowsChange = function onExpandedRowsChange(expandedRowKeys) {
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            expandedRowKeys: expandedRowKeys
          }
        });
      }; // 用户表格行选择


      var userTableOnRow = function userTableOnRow(selectedRowKey, selectedRows) {
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            selectedRowKey: selectedRowKey,
            selectedRows: selectedRows
          }
        });
      }; // 用户渲染


      var userRender = function userRender(text) {
        if (searchValue === '' || text.toUpperCase().indexOf(searchValue.toUpperCase()) < 0) {
          return /*#__PURE__*/React.createElement("span", null, text);
        }

        var i = text.toUpperCase().indexOf(searchValue.toUpperCase());
        var beforeStr = text.substr(0, i);
        var center = text.substr(i, searchValue.length);
        var afterStr = text.substr(i + searchValue.length);
        return /*#__PURE__*/React.createElement("span", null, beforeStr, /*#__PURE__*/React.createElement("span", {
          style: {
            color: '#FA2A45',
            fontWeight: 800
          }
        }, center), afterStr);
      };

      var userColumns = [{
        title: '名称',
        dataIndex: 'NAME',
        render: userRender
      }];

      var onChangeValueList = function onChangeValueList(val) {
        if (val) {
          nextNodeForm.setFieldsValue(val);
          setSingleUserList(_objectSpread(_objectSpread(_objectSpread({}, singleUserList), val), {}, {
            selectUser: true
          }));
        }
      };

      var toolNextNodeUserModel = function toolNextNodeUserModel() {
        setSingleUserList({});
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            nextNodeUserModel: !nextNodeUserModel
          }
        });
      };

      var objectProps = {
        editParams: {},
        onOk: userSelectOK,
        item: userItem
      };
      return /*#__PURE__*/React.createElement("div", {
        id: namespace,
        className: styles.processDetail,
        style: {
          overflow: 'auto',
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: PBList.length > 1 ? 162 : 122
        }
      }, /*#__PURE__*/React.createElement(Act, null)), PNList.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
        style: {
          fontSize: 18,
          margin: '1.6em 0 .6em',
          fontWeight: 600
        }
      }, "\u6D41\u7A0B\u8282\u70B9"), /*#__PURE__*/React.createElement(Collapse, {
        activeKey: collapseActiveKey,
        onChange: function onChange(key) {
          return setCollapseActiveKey(key);
        }
      }, PNList.map(function (item, index) {
        var currentNodeEvent = objectFormList.filter(function (obj) {
          return obj.PROCESS_NODE === item.activeId;
        });
        currentNodeEvent = currentNodeEvent.length && currentNodeEvent[0];
        var BUSINESS_DEF = JSON.parse(currentNodeEvent.BUSINESS_DEF || '{}');
        var NODE_DEF = JSON.parse(currentNodeEvent.NODE_DEF || '[]');
        var NODE_EVENT = JSON.parse(currentNodeEvent.NODE_EVENT || '[]');
        var processInitValue = JSON.parse(item.information || '{}');
        var pageFieldList = [];

        if (BUSINESS_DEF.FIELDS) {
          pageFieldList = objectFieldList.filter(function (field) {
            return BUSINESS_DEF.FIELDS.indexOf(field.fieldName) > -1;
          });
          pageFieldList = pageFieldList.map(function (item) {
            return _objectSpread(_objectSpread({}, item), {}, {
              editAble: 1
            });
          });
        } // 多肽节点字段初始化渲染


        var nodeFields = renderPeptide(NODE_DEF, processInitValue); // 处理业务对象数据初始值

        var initVal = PBList[0];
        pageFieldList.forEach(function (field) {
          var editor = field.editor,
              fieldName = field.fieldName,
              defaultV = field.defaultV,
              fType = field.fType,
              editParams = field.editParams;
          var val = initVal[fieldName] || undefined;

          if (val) {
            if (editor === 'DateTime') {
              initVal[fieldName] = dayjs(val); // } else if (editor === 'UsersSelector' || editor === 'CheckEditor') {
            } else if (editor === 'CheckEditor') {
              initVal[fieldName] = typeof val === 'string' ? val.split(',') : undefined;
            } else if (editor === 'DBValueList' || editor === 'ValueList' || editor === 'MapValueList') {
              var _ref8 = editParams || {},
                  multiple = _ref8.multiple;

              if (multiple) {
                initVal[fieldName] = typeof val === 'string' ? val.split(',') : undefined;
              }
            } else if (editor === 'Slider') {
              initVal[fieldName] = Number(val);
            } else if (editor === 'RichText') {
              initVal[fieldName] = BraftEditor.createEditorState(val);
            } else if (editor === 'ValueListDynamic') {
              var arr = val.split(/,|;|，|；/);
              editParams.values = arr.filter(function (item) {
                return item !== '' && item !== undefined;
              });
            }
          }

          if (editor === 'CheckBox') {
            initVal[fieldName] = val ? true : false;
          }
        });
        var formProps = {
          record: PBList[0],
          allFieldList: objectFieldList,
          pageFieldList: pageFieldList,
          initVal: initVal,
          columns: BUSINESS_DEF.COLUMN || 2,
          labelLen: BUSINESS_DEF.COLUMN ? BUSINESS_DEF.COLUMN === 1 ? 150 : 100 : 100,
          namespace: BUSINESS_DEF.EDITABLE && item.current && enable ? tableName : null,
          clickedMenu: {
            tableName: tableName
          }
        };
        var formProps2 = {};
        var panelClass = '';

        if (item.endTime) {
          panelClass = 'historyNode';
        } else if (item.current) {
          panelClass = 'currentNode';
          formProps2.form = form;
        } else if (!item.startTime) {
          panelClass = 'noStartNode';
        }

        return /*#__PURE__*/React.createElement(Panel, {
          showArrow: NODE_DEF.length > 0 || pageFieldList.length > 0,
          collapsible: !pageFieldList.length && !NODE_DEF.length ? 'disabled' : true,
          header: /*#__PURE__*/React.createElement("span", {
            className: styles[panelClass]
          }, item.actName),
          key: item.id,
          extra: item.assignee && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UserOutlined, null), item.assignee)
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            gap: 50
          }
        }, pageFieldList && pageFieldList.length > 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            width: nodeFields.length ? '50%' : '100%'
          }
        }, /*#__PURE__*/React.createElement(Divider, null, "\u4E1A\u52A1\u6570\u636E\u4FE1\u606F"), /*#__PURE__*/React.createElement(PropertyForm, _extends({
          ref: item.current ? childRef : null
        }, formProps))), nodeFields.length > 0 && /*#__PURE__*/React.createElement("div", {
          style: {
            width: pageFieldList.length ? '50%' : '100%'
          }
        }, /*#__PURE__*/React.createElement(Divider, null, "\u6D41\u7A0B\u5904\u7406\u4FE1\u606F"), /*#__PURE__*/React.createElement(Form, {
          initialValues: processInitValue,
          form: item.current ? form : null,
          onValuesChange: item.current ? function (val, values) {
            return onFormChange(val, values, item.activeId);
          } : null
        }, nodeFields.map(function (node) {
          return ProcessNodeEditor(_objectSpread(_objectSpread({
            processInitValue: processInitValue,
            PNIndex: index
          }, node), {}, {
            canInput: item.current && enable
          }));
        })))), item.current === 1 && enable && /*#__PURE__*/React.createElement("div", null, NODE_EVENT.map(function (item) {
          return eventButton(item.EVENT);
        })));
      })))), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 20
        }
      }, /*#__PURE__*/React.createElement("h2", {
        style: {
          fontSize: 18,
          margin: '1.6em 0 .6em',
          fontWeight: 600
        }
      }, "\u6D41\u7A0B\u5386\u53F2"), /*#__PURE__*/React.createElement(ProcessDetail, {
        dataList: historyList
      })), /*#__PURE__*/React.createElement(Modal, {
        title: common.select,
        width: 500,
        height: 300,
        visible: editor,
        onCancel: function onCancel() {
          return setEditor(null);
        },
        onOk: selectOk
      }, editor && /*#__PURE__*/React.createElement(UserSelectorForm, {
        editor: editor && editor.editor,
        item: editor,
        editParams: {},
        onOk: selectOk,
        ref: userRef,
        form: form
      })), /*#__PURE__*/React.createElement(Modal, {
        title: '驳回意见',
        width: 500,
        visible: refusalNode,
        onCancel: function onCancel() {
          return setRefusalNode(null);
        },
        onOk: function onOk() {
          return opinionForm.submit();
        }
      }, /*#__PURE__*/React.createElement(Form, {
        onFinish: refusalTo,
        form: opinionForm
      }, /*#__PURE__*/React.createElement(Item, {
        rules: [{
          required: true
        }],
        label: '驳回意见: ',
        name: "opinion"
      }, /*#__PURE__*/React.createElement(Input.TextArea, null)))), /*#__PURE__*/React.createElement(Modal, {
        title: '作废原因',
        width: 500,
        visible: overVisible,
        onCancel: function onCancel() {
          return setOverVisible(false);
        },
        onOk: function onOk() {
          return overForm.submit();
        }
      }, /*#__PURE__*/React.createElement(Form, {
        onFinish: over,
        form: overForm
      }, /*#__PURE__*/React.createElement(Item, {
        rules: [{
          required: true
        }],
        label: '作废原因: ',
        name: "options"
      }, /*#__PURE__*/React.createElement(Input.TextArea, null)))), /*#__PURE__*/React.createElement(Modal, {
        title: '用户选择',
        visible: userVisible,
        onCancel: function onCancel() {
          return dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              userVisible: false,
              selectedRowKey: [],
              selectedRows: []
            }
          });
        },
        onOk: entrust // noFooter={true}

      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 32
        }
      }, /*#__PURE__*/React.createElement(Input.Search, {
        onSearch: onSearchUser,
        enterButton: true
      })), /*#__PURE__*/React.createElement(Table, {
        size: "small",
        bordered: true,
        columns: userColumns,
        dataSource: userTreeList,
        pagination: false,
        expandedRowKeys: ['1'].concat(_toConsumableArray(expandedRowKeys)),
        onExpandedRowsChange: onExpandedRowsChange,
        onRow: function onRow(record) {
          return {
            onClick: function onClick(event) {
              if (record.isUser) {
                userTableOnRow([record.ID], [record]);
              } else {
                onExpandedRowsChange(new Set([].concat(_toConsumableArray(expandedRowKeys), [record.ID])));
              }
            }
          };
        },
        rowSelection: {
          type: 'radio',
          onChange: userTableOnRow,
          selectedRowKeys: selectedRowKey,
          getCheckboxProps: function getCheckboxProps(record) {
            return {
              disabled: !record.isUser,
              name: record.NAME
            };
          }
        },
        rowKey: "ID"
      }))), /*#__PURE__*/React.createElement(Modal, {
        width: 400,
        form: nextNodeForm,
        title: isEnglish ? 'Select the next node executor' : '选择下一个节点执行人',
        visible: nextNodeUserModel,
        onOk: function onOk() {
          return nextNodeForm.submit();
        },
        onCancel: toolNextNodeUserModel
      }, /*#__PURE__*/React.createElement(Form, _extends({
        name: "property",
        form: nextNodeForm,
        onFinish: submit,
        layout: "inline"
      }, layout), selectRole.map(function (item) {
        var type = item.type,
            condition = item.condition,
            keyName = item.keyName,
            title = item.title,
            selectUserValues = item.selectUserValues;
        return /*#__PURE__*/React.createElement(React.Fragment, null, type === 1 ? /*#__PURE__*/React.createElement(SearchInput, {
          name: keyName,
          label: title,
          rules: [{
            required: true
          }],
          onClick: function onClick() {
            setUserItem({
              editParams: {},
              fieldName: keyName,
              editor: 'UserSelector'
            });
          },
          className: "whole-line"
        }) : /*#__PURE__*/React.createElement(Item, {
          name: keyName,
          label: title,
          rules: [{
            required: true
          }],
          className: "whole-line"
        }, /*#__PURE__*/React.createElement(Select, {
          showSearch: true,
          onChange: function onChange(val) {
            return onChangeValueList(_defineProperty({}, keyName, val));
          },
          allowClear: true
        }, selectUserValues.map(function (item, index) {
          return /*#__PURE__*/React.createElement(Option, {
            value: item,
            key: index
          }, item);
        }))));
      }))), /*#__PURE__*/React.createElement(Modal, {
        width: 1000,
        height: 600,
        title: common.select,
        visible: userItem ? true : false,
        onCancel: function onCancel() {
          return setUserItem(null);
        },
        onOk: userSelectOK
      }, /*#__PURE__*/React.createElement(NewUserSelectorFrom, _extends({}, objectProps, {
        ref: userRef,
        editor: "UserSelector"
      }))));
    };
  };
});