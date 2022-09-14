function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["dispatch"];

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

/*
 * @Description: 员工管理组件
 */
import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, Tabs, Checkbox, Form, Input, message } from 'antd';
import { NodeCollapseOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import DragCmp from '../../common/drag/DragCmp';
import TableWithBtn from '../../common/table/TableWithBtn';
import { confirm } from '../../../utils/utils';
import StaffForm from './StaffForm';
import StaffInformation from './StaffInformation';
import StaffUserForm from './StaffUserForm';
import { searchPersonnel, spersonnelQuery } from '../../../service/systemApi';
import language from '@/locale/language';
var common = language.common,
    _language$userManage$ = language.userManage.staffManage,
    buttons = _language$userManage$.buttons,
    fields = _language$userManage$.fields,
    staffUser = _language$userManage$.staffUser;
var TabPane = Tabs.TabPane;
var Item = Form.Item;
var columns = [{
  title: fields.SUNO,
  dataIndex: 'no',
  width: 200
}, {
  title: fields.SUNAME,
  dataIndex: 'suName',
  width: 200
}, {
  title: staffUser.fields.NAME,
  dataIndex: 'name',
  width: 200
}, {
  title: fields.SUTEL,
  dataIndex: 'tel',
  width: 200
}, {
  title: fields.MAIL,
  dataIndex: 'mail',
  width: 200
}, {
  title: fields.SAX,
  dataIndex: 'sax',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement("span", null, text ? '男' : '女');
  }
}, {
  title: fields.INTIME,
  dataIndex: 'inTime',
  width: 200
}, {
  title: fields.IDCARD,
  dataIndex: 'idCard',
  width: 200
}, {
  title: fields.OPSTATE,
  dataIndex: 'wk_state',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: staffUser.fields.ALLOWMODEL,
  dataIndex: 'allowMeta',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: staffUser.fields.DISABLED,
  dataIndex: 'disabled',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: staffUser.fields.PW_STIME,
  dataIndex: 'pw_stime',
  width: 200
}, {
  title: staffUser.fields.REMARK,
  dataIndex: 'remark',
  width: 200
}];
var columns2 = [{
  title: staffUser.fields.NAME,
  dataIndex: 'name',
  width: 200
}, {
  title: staffUser.fields.ONDUTY,
  dataIndex: 'onDuty',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: staffUser.fields.ALLOWMODEL,
  dataIndex: 'allowMeta',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: staffUser.fields.DISABLED,
  dataIndex: 'disabled',
  width: 100,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      checked: text
    });
  }
}, {
  title: staffUser.fields.PW_STIME,
  dataIndex: 'pw_stime',
  width: 200
}, {
  title: staffUser.fields.REMARK,
  dataIndex: 'uRemark',
  width: 200
}];

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      StaffManage = _objectWithoutProperties(_ref, _excluded);

  var showTab = StaffManage.showTab,
      _StaffManage$selected = StaffManage.selectedRows,
      selectedRows = _StaffManage$selected === void 0 ? [] : _StaffManage$selected,
      _StaffManage$selected2 = StaffManage.selectedRowKeys,
      selectedRowKeys = _StaffManage$selected2 === void 0 ? [] : _StaffManage$selected2,
      _StaffManage$dataList = StaffManage.dataList1,
      dataList1 = _StaffManage$dataList === void 0 ? [] : _StaffManage$dataList,
      _StaffManage$selected3 = StaffManage.selectedRowKeys1,
      selectedRowKeys1 = _StaffManage$selected3 === void 0 ? [] : _StaffManage$selected3,
      _StaffManage$selected4 = StaffManage.selectedRows1,
      selectedRows1 = _StaffManage$selected4 === void 0 ? [] : _StaffManage$selected4,
      visible1 = StaffManage.visible1,
      record1 = StaffManage.record1,
      dataList2 = StaffManage.dataList2,
      _StaffManage$selected5 = StaffManage.selectedRowKeys2,
      selectedRowKeys2 = _StaffManage$selected5 === void 0 ? [] : _StaffManage$selected5,
      _StaffManage$selected6 = StaffManage.selectedRows2,
      selectedRows2 = _StaffManage$selected6 === void 0 ? [] : _StaffManage$selected6,
      visible2 = StaffManage.visible2,
      record2 = StaffManage.record2,
      openImportModal = StaffManage.openImportModal,
      toogleMoveNodeModal = StaffManage.toogleMoveNodeModal,
      staffDataList = StaffManage.staffDataList,
      total = StaffManage.total,
      _StaffManage$isSearch = StaffManage.isSearch,
      isSearch = _StaffManage$isSearch === void 0 ? false : _StaffManage$isSearch,
      page = StaffManage.page,
      pageNumber = StaffManage.pageNumber;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      keyWord = _useState2[0],
      setKeyWord = _useState2[1];

  var _ref2 = selectedRows1[0] || [],
      allowMeta = _ref2.allowMeta,
      disabled = _ref2.disabled;

  var toogleModal = function toogleModal() {
    var record1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var inTime = record1.inTime;
      if (inTime) record1.inTime = dayjs(record1.inTime);
      dispatch({
        type: 'StaffManage/packet',
        payload: {
          visible1: !visible1,
          record1: record1
        }
      });
    };
  };

  var toogleModal2 = function toogleModal2() {
    var record2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      dispatch({
        type: 'StaffManage/packet',
        payload: {
          visible2: !visible2,
          record2: record2
        }
      });
    };
  };

  var onSelectChange = function onSelectChange(selectedRowKeys1, selectedRows1) {
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        selectedRowKeys1: selectedRowKeys1,
        selectedRows1: selectedRows1,
        showTab: selectedRows1 && selectedRows1.length === 1 ? true : false,
        selectedRowKeys2: [],
        selectedRows2: []
      }
    }); // selectedRows1 &&
    //   selectedRows1.length &&
    //   dispatch({ type: `StaffManage/queryStaffUser`, payload: { condition: selectedRows1[0].id } });

    if (selectedRows1[0]) {
      var params = selectedRows1[0].deptId;

      if (selectedRows1[0].deptId) {
        dispatch({
          type: 'StaffManage/deptUserInfo',
          payload: {
            deptId: params
          }
        });
        return;
      } else {
        message.error(fields.NODEPT);
        return;
      }
    }
  };

  var onSelectChange2 = function onSelectChange2(selectedRowKeys2, selectedRows2) {
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        selectedRowKeys2: selectedRowKeys2,
        selectedRows2: selectedRows2
      }
    });
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        showTab: false
      }
    });
  };

  var del = function del() {
    dispatch({
      type: 'StaffManage/delStaff',
      payload: {
        selectedRows: selectedRows,
        hData: selectedRows1
      }
    });
  };

  var del2 = function del2() {
    dispatch({
      type: 'StaffManage/delStaffUser',
      payload: {
        hData: selectedRows2
      }
    });
  };

  var assignModelAuth = function assignModelAuth() {
    dispatch({
      type: 'StaffManage/assignModelAuth',
      payload: {
        selectedRows: selectedRows,
        users: selectedRows1,
        metaState: !allowMeta
      }
    });
  };

  var resetPassword = function resetPassword() {
    dispatch({
      type: 'StaffManage/resetUserPassword',
      payload: {
        data: selectedRows1[0]
      }
    });
  };

  var disableUser = function disableUser() {
    dispatch({
      type: 'StaffManage/disableUser',
      payload: {
        selectedRows: selectedRows,
        hData: selectedRows1,
        disabled: !selectedRows1[0].disabled
      }
    });
  }; // 部门信息


  var callback = function callback(key) {
    var params = selectedRows1[0].deptId;

    if (key === 'deptUserInfo') {
      dispatch({
        type: 'StaffManage/deptUserInfo',
        payload: {
          deptId: params
        }
      });
    }
  }; // 导出用户信息


  var exportInformation = function exportInformation(state) {
    confirm({
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

  var rowSelection = {
    type: 'checkbox',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys1
  };
  var rowSelection2 = {
    type: 'radio',
    onChange: onSelectChange2,
    selectedRowKeys: selectedRowKeys2
  };
  var btns = [{
    name: '',
    disabled: !(selectedRows1[0] && selectedRows[0]),
    icon: /*#__PURE__*/React.createElement(NodeCollapseOutlined, null),
    title: buttons.Personnel_adjustment,
    func: toogleMoveNodeModal
  }, {
    name: buttons.create_staff,
    disabled: !(selectedRows[0] && selectedRows[0].pid !== '0'),
    func: selectedRows.length > 0 && toogleModal({
      deptId: selectedRows[0].id
    })
  }, {
    name: buttons.update_staff,
    disabled: !(selectedRows[0] && selectedRows1.length === 1),
    func: toogleModal(selectedRows1[0])
  }, {
    name: buttons.delete_staff,
    disabled: !(selectedRows[0] && selectedRows1[0]),
    func: function func() {
      confirm({
        title: common.confirm + buttons.delete_staff,
        onOk: del
      });
    }
  }, {
    name: buttons.import_staff,
    disabled: !(selectedRows[0] && selectedRows[0].pid !== '0'),
    func: function func() {
      openImportModal('staff');
    }
  }, // 新增导出选中员工信息
  {
    name: buttons.export_employeeInformation,
    btns: [{
      name: buttons.export_disabled,
      disabled: !selectedRows[0],
      func: function func() {
        exportInformation(0);
      }
    }, {
      name: buttons.export_userAll,
      disabled: !selectedRows[0],
      func: function func() {
        exportInformation(1);
      }
    }]
  }, {
    name: staffUser.buttons.assign_role,
    disabled: !(selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      dispatch({
        type: "assignRole/query",
        payload: {
          selectedRows: selectedRows1
        }
      });
    }
  }, {
    name: allowMeta ? staffUser.buttons.cancel_model_authority : staffUser.buttons.assign_model_authority,
    disabled: !(selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + (allowMeta ? staffUser.buttons.cancel_model_authority : staffUser.buttons.assign_model_authority),
        onOk: assignModelAuth
      });
    }
  }, {
    name: staffUser.buttons.reset_password,
    disabled: !(selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + staffUser.buttons.reset_password,
        onOk: resetPassword
      });
    }
  }, {
    name: disabled ? staffUser.buttons.user_enabled : staffUser.buttons.user_disabled,
    disabled: !(selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + (disabled ? staffUser.buttons.user_enabled : staffUser.buttons.user_disabled),
        onOk: disableUser
      });
    }
  }];
  var btns2 = [{
    name: staffUser.buttons.create_user,
    disabled: !(selectedRows1[0] && selectedRows[0] && selectedRows1[0].deptId),
    func: toogleModal2({
      SPERSONNELID: selectedRows1[0] && selectedRows1[0].id,
      onduty: true,
      WKCONTEXT: true
    })
  }, {
    name: staffUser.buttons.update_user,
    disabled: !(selectedRows2.length && selectedRows1[0] && selectedRows1[0].deptId),
    func: toogleModal2(selectedRows2[0])
  }, {
    name: staffUser.buttons.delete_user,
    disabled: !(selectedRows2.length && selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + staffUser.buttons.delete_user,
        onOk: del2
      });
    }
  }, {
    name: staffUser.buttons.assign_role,
    disabled: !(selectedRows2.length && selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      dispatch({
        type: "assignRole/query",
        payload: {
          selectedRows: selectedRows2
        }
      });
    }
  }, {
    name: allowMeta ? staffUser.buttons.cancel_model_authority : staffUser.buttons.assign_model_authority,
    disabled: !(selectedRows2.length && selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + (allowMeta ? staffUser.buttons.cancel_model_authority : staffUser.buttons.assign_model_authority),
        onOk: assignModelAuth
      });
    }
  }, {
    name: staffUser.buttons.reset_password,
    disabled: !(selectedRows2.length && selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + staffUser.buttons.reset_password,
        onOk: resetPassword
      });
    }
  }, {
    name: disabled ? staffUser.buttons.user_enabled : staffUser.buttons.user_disabled,
    disabled: !(selectedRows2.length && selectedRows1[0] && selectedRows1[0].deptId),
    func: function func() {
      confirm({
        title: common.confirm + (disabled ? staffUser.buttons.user_enabled : staffUser.buttons.user_disabled),
        onOk: disableUser
      });
    }
  }];

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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
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
              return searchPersonnel({
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
              return spersonnelQuery({
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
      return _ref3.apply(this, arguments);
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
  var tableProp = {
    dataList: staffDataList && staffDataList.length ? staffDataList : dataList1,
    columns: columns,
    btns: btns,
    rowSelection: rowSelection,
    onSearch: onSearch,
    disabled: !selectedRows[0],
    paging: paging
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(DragCmp, {
    enable: {
      bottom: true
    },
    showTab: showTab
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp)), showTab && /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: "1",
    tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
      onClick: closeTab
    }),
    onTabClick: callback
  }, selectedRows1[0].deptId && /*#__PURE__*/React.createElement(TabPane, {
    tab: staffUser.title1,
    key: "StaffInformation"
  }, /*#__PURE__*/React.createElement(StaffInformation, {
    record: selectedRows1[0]
  })), selectedRows1[0].deptId && /*#__PURE__*/React.createElement(TabPane, {
    tab: staffUser.title2,
    key: "deptUserInfo"
  }, /*#__PURE__*/React.createElement(Form, {
    name: "property"
  }, /*#__PURE__*/React.createElement(Item, {
    label: fields.NO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.NO,
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    label: fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.NAME,
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    label: fields.TEL,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.TEL,
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    label: fields.MANAGER,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.MANAGER,
    disabled: true
  })))))), selectedRows[0] && /*#__PURE__*/React.createElement(StaffForm, {
    visible: visible1,
    record: record1,
    onCancel: toogleModal(),
    selectedRows: selectedRows
  }), record2 && /*#__PURE__*/React.createElement(StaffUserForm, {
    visible: visible2,
    record: record2,
    onCancel: toogleModal2()
  }));
};

function mapStateToProps(_ref4) {
  var StaffManage = _ref4.StaffManage;
  return _objectSpread({}, StaffManage);
}

export default connect(mapStateToProps)(Index);