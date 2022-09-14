function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
 * @Description: 业务对象
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import TableConfigCmp from '../../component/configPlatform/tableConfig/TableConfigCmp'; //业务对象组件

import { Checkbox, Tooltip, Tag, Dropdown, Menu, Tabs, message, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { objTypeMap, objImplclassMap, colorMap } from '../../utils/mapParams';
import { objTypeMap as enObjTypeMap } from '../../utils/EnMapParams';
import { confirm, isEnglish, parseMeta } from '../../utils/utils';
import TabsTable from '../../component/configPlatform/tableConfig/TabsTable';
import language from '@/locale/language';
import { queryObject, queryWorkObject, searchObject, searchWorkObject } from '../../service/metaApi';
var common = language.common,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.tableConfig.fields;
var tab_namespace = ['field', 'menu', 'property', 'grid', 'relation', 'relatedEvents', 'dblclickEvent']; // 根据STATE值渲染NAME字段

var renderNameTag = function renderNameTag(state, text) {
  switch (state) {
    case 0:
      return /*#__PURE__*/React.createElement(Tag, {
        color: "#2db7f5"
      }, text);
    // 新增对象蓝色

    case 2:
      return /*#__PURE__*/React.createElement(Tag, {
        color: "#f50"
      }, text);
    //  变更中橘黄色

    default:
      return text;
  }
};

var TableConfig = function TableConfig(_ref) {
  var tableConfig = _ref.tableConfig,
      dispatch = _ref.dispatch,
      isModeling = _ref.isModeling;
  var dataList = tableConfig.dataList,
      visible = tableConfig.visible,
      selectedRowKeys = tableConfig.selectedRowKeys,
      _tableConfig$selected = tableConfig.selectedRows,
      selectedRows = _tableConfig$selected === void 0 ? [] : _tableConfig$selected,
      activeKey = tableConfig.activeKey,
      activeTab = tableConfig.activeTab,
      namespace = tableConfig.namespace,
      showTab = tableConfig.showTab,
      record = tableConfig.record,
      noFooter = tableConfig.noFooter,
      total = tableConfig.total,
      _tableConfig$paging = tableConfig.paging,
      paging = _tableConfig$paging === void 0 ? {
    showPaging: true
  } : _tableConfig$paging,
      _tableConfig$isSearch = tableConfig.isSearch,
      isSearch = _tableConfig$isSearch === void 0 ? false : _tableConfig$isSearch,
      page = tableConfig.page,
      pageNumber = tableConfig.pageNumber;

  var _ref2 = selectedRows[0] || {},
      STATE = _ref2.STATE,
      EFFECTIVE = _ref2.EFFECTIVE,
      CONTROLAUTH = _ref2.CONTROLAUTH,
      TYPE = _ref2.TYPE;

  var enable = isModeling && (STATE === 2 || STATE === 0);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      queryWord = _useState2[0],
      setQueryWord = _useState2[1]; // 是否为工作对象, 设计中对象.


  var _useState3 = useState('commonObject'),
      _useState4 = _slicedToArray(_useState3, 2),
      objectType = _useState4[0],
      setObjectType = _useState4[1];

  useEffect(function () {
    var objt = activeTab === '2' ? 'workObject' : 'commonObject';
    setObjectType(objt);
    sessionStorage['tableConfigObjectType'] = objt;
  }, [namespace, activeTab]);

  var eidtRow = function eidtRow(_ref3) {
    var text = _ref3.text,
        record = _ref3.record,
        field = _ref3.field;
    return function () {
      if (activeTab !== '2') {
        message.warn('不是设计中的对象');
        return;
      }

      var values = record.META;
      values[field] = !text;
      dispatch({
        type: 'commonConfig/edit',
        payload: {
          values: values,
          record: record,
          namespace: namespace,
          activeTab: activeTab
        }
      });
    };
  };

  var columns = [{
    title: common.index,
    dataIndex: 'index',
    align: 'left',
    width: 50,
    render: function render(text) {
      return text + 1 + (page - 1) * pageNumber;
    }
  }, // {
  //   title: fields.STATE,
  //   dataIndex: 'STATE',
  //   width: 80,
  //   render: text => (localStorage.getItem('AcceptLanguage') === 'en-US' ? enStateMap[text] : stateMap[text])
  // },
  // {
  //   title: fields.EFFECTIVE,
  //   dataIndex: 'EFFECTIVE',
  //   width: 80,
  //   align: 'center',
  //   render: text => <Checkbox checked={text} />
  // },
  // { title: fields.VER, dataIndex: 'VER', width: 80 },
  // { title: fields.OBJECTNO, dataIndex: 'OBJECTNO', width: 200, render: text => <Tooltip title={text}>{text}</Tooltip> },
  {
    title: fields.TABLENAME,
    dataIndex: 'TABLENAME',
    width: 200
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 200
  }, // {
  //   title: fields.IDLIFE,
  //   dataIndex: 'IDLIFE',
  //   width: 80,
  //   align: 'center',
  //   render: text => <Checkbox checked={text} />
  // },
  {
    title: fields.TYPE,
    dataIndex: 'TYPE',
    width: 100,
    render: function render(text) {
      return text || text === 0 ? /*#__PURE__*/React.createElement(Tag, {
        color: colorMap[text]
      }, isEnglish ? enObjTypeMap[text] : objTypeMap[text]) : isEnglish ? enObjTypeMap[text] : objTypeMap[text];
    }
  }, {
    title: fields.CONTROLAUTH,
    dataIndex: 'CONTROLAUTH',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        checked: text,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'CONTROLAUTH'
        })
      });
    }
  }, {
    title: fields.QUERYFIELDS,
    dataIndex: 'QUERYFIELDS',
    width: 150
  }, // { title: fields.REMARK, dataIndex: 'REMARK', width: 100 },
  {
    title: fields.OPERATION,
    dataIndex: 'OPERATION',
    width: 120,
    align: 'center',
    frozen: 'right',
    fixed: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        size: "small",
        type: "primary",
        style: {
          display: 'inline-block',
          padding: '0 7px',
          borderRadius: '2px',
          color: '#fff',
          backgroundColor: '#1890ff',
          marginRight: '5px',
          cursor: 'pointer'
        },
        onClick: showDrawer.bind(showDrawer, record)
      }, common.definition), /*#__PURE__*/React.createElement(Dropdown, {
        overlay: operationMenu,
        placement: "bottomLeft",
        trigger: ['click']
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-block',
          padding: '0 7px',
          borderRadius: '2px',
          color: '#1890ff',
          backgroundColor: 'rgb(231 238 239)',
          cursor: 'pointer'
        },
        className: "ant-dropdown-link",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, fields.OPERATION, " ", /*#__PURE__*/React.createElement(DownOutlined, null))));
    }
  }]; //操作菜单

  var operationMenu = /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    disabled: !(enable && TYPE !== 4 || isModeling && TYPE === 4),
    onClick: function onClick() {
      return toogleModal(selectedRows[0]);
    }
  }, buttons.update)), STATE === 0 && /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    disabled: !(isModeling && STATE === 0),
    onClick: function onClick() {
      return confirm({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, buttons.delete)), STATE === 1 && /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    disabled: !selectedRows[0],
    onClick: function onClick() {
      return confirm({
        title: common.confirm + buttons.refresh_meta,
        onOk: refresh(selectedRows[0])
      });
    }
  }, buttons.refresh_meta)), TYPE !== 4 && STATE === 1 && /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    disabled: !(selectedRows[0] && isModeling && TYPE !== 4),
    onClick: function onClick() {
      return confirm({
        title: common.confirm + buttons.copy_obj,
        onOk: copy(selectedRows[0], 'C')
      });
    }
  }, buttons.copy_obj)), TYPE !== 4 && STATE === 1 && /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    disabled: !(selectedRows[0] && isModeling),
    onClick: function onClick() {
      return confirm({
        title: common.confirm + buttons.copy_view,
        onOk: copy(selectedRows[0], 'V')
      });
    }
  }, buttons.copy_view)), enable && TYPE === 0 && /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
    disabled: !(enable && TYPE === 0),
    onClick: function onClick() {
      return confirm({
        title: common.confirm + buttons.changeFile,
        onOk: changeFile(selectedRows[0])
      });
    }
  }, buttons.changeFile)));

  var showDrawer = function showDrawer(record) {
    dispatch({
      type: 'tableConfig/packet',
      payload: {
        showTab: true
      }
    });
    changePane('0', record);
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    var QUERYFIELDS = record.QUERYFIELDS,
        TYPE = record.TYPE,
        IMPLCLASS = record.IMPLCLASS;
    dispatch({
      type: 'tableConfig/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          QUERYFIELDS: QUERYFIELDS ? QUERYFIELDS.split(',') : ['NO', 'NAME'],
          IMPLCLASS: IMPLCLASS || objImplclassMap[TYPE],
          CONTROLAUTH: false
        }),
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    var STATE = rows.STATE,
        TYPE = rows.TYPE;
    dispatch({
      type: 'tableConfig/packet',
      payload: {
        activeKey: activeKey
      }
    });
    dispatch({
      type: 'commonConfig/queryItem',
      payload: {
        PID: rows.ID,
        namespace: tab_namespace[activeKey],
        enable: isModeling && ((STATE === 2 || STATE === 0) && TYPE !== 4 || TYPE === 4),
        other: {
          objectDataList: [],
          selectedRows: [],
          selectedRowKeys: [],
          OBJECTNO: rows.OBJECTNO,
          pCONTROLAUTH: CONTROLAUTH,
          objectNO: rows.TABLENAME
        },
        objectType: objectType,
        STATE: STATE
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'tableConfig/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    }); // changePane(activeKey, selectedRows[0])
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'tableConfig/packet',
      payload: {
        showTab: false
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/del',
        payload: {
          rows: rows,
          namespace: namespace,
          activeTab: activeTab
        }
      });
    };
  };

  var refresh = function refresh(row) {
    return function () {
      dispatch({
        type: 'commonConfig/refresh',
        payload: {
          row: row,
          namespace: namespace
        }
      });
    };
  };

  var showObject = function showObject(condition, objectType, activeTab) {
    dispatch({
      type: 'commonConfig/query',
      payload: {
        condition: condition,
        namespace: namespace,
        objectType: objectType,
        activeTab: activeTab
      }
    });
  };

  var synchro = function synchro(row) {
    return function () {
      dispatch({
        type: 'commonConfig/synchro',
        payload: {
          row: row,
          namespace: namespace
        }
      });
    };
  };

  var upgrade = function upgrade(row) {
    return function () {
      dispatch({
        type: 'commonConfig/upgrade',
        payload: {
          row: row,
          namespace: namespace
        }
      });
      setObjectType('workObject');
    };
  };

  var cancelUpgrade = function cancelUpgrade(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/cancelUpgrade',
        payload: {
          rows: rows,
          namespace: namespace
        }
      });
    };
  };

  var copy = function copy(row, STATE) {
    return function () {
      dispatch({
        type: 'commonConfig/copy',
        payload: {
          row: row,
          namespace: namespace,
          STATE: STATE
        }
      });
    };
  };

  var changeFile = function changeFile(row) {
    return function () {
      dispatch({
        type: 'commonConfig/changeFile',
        payload: {
          row: row,
          namespace: namespace
        }
      });
    };
  }; //按钮


  var workObjectBtns = [{
    name: buttons.select_create_obj,
    disabled: !isModeling,
    btns: [{
      name: buttons.create_common_obj,
      func: function func() {
        toogleModal({
          TYPE: 0
        });
      }
    }, {
      name: buttons.create_file_obj,
      func: function func() {
        toogleModal({
          TYPE: 1
        });
      }
    }, {
      name: buttons.create_relation_obj,
      func: function func() {
        toogleModal({
          TYPE: 2
        });
      }
    }, {
      name: buttons.create_class_obj,
      func: function func() {
        toogleModal({
          TYPE: 3
        });
      }
    }]
  }, {
    name: buttons.synchro_model,
    disabled: !(enable || STATE === 1 && !EFFECTIVE || isModeling && TYPE === 4),
    func: function func() {
      confirm({
        title: common.confirm + buttons.synchro_model,
        onOk: synchro(selectedRows[0])
      });
    }
  }, {
    name: STATE === 2 ? buttons.cancel_upgrade : buttons.upgrade,
    disabled: !(selectedRows[0] && isModeling && (STATE === 1 || STATE === 2)),
    func: function func() {
      STATE === 2 ? confirm({
        title: buttons.cancel_upgrade,
        onOk: cancelUpgrade(selectedRows)
      }) : confirm({
        title: common.confirm + buttons.upgrade,
        onOk: upgrade(selectedRows[0])
      });
    }
  }];
  var commonBtns = [{
    name: STATE === 2 ? buttons.cancel_upgrade : buttons.upgrade,
    disabled: !(selectedRows[0] && isModeling && STATE === 1),
    func: function func() {
      STATE === 2 ? confirm({
        title: buttons.cancel_upgrade,
        onOk: cancelUpgrade(selectedRows)
      }) : confirm({
        title: common.confirm + buttons.upgrade,
        onOk: upgrade(selectedRows[0])
      });
    }
  }];

  var onSearch = function onSearch(queryWord) {
    setQueryWord(queryWord);
    dispatch({
      type: 'commonConfig/search',
      payload: {
        queryWord: queryWord,
        namespace: namespace,
        objectType: objectType
      }
    });
  };

  var changePage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(current, pageSize) {
      var state;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = null; // 如果是搜索执行搜索分页, 如果是全部数据执行通用查询分页

              if (isSearch) {
                // 判断是否为WorkObject, 调用不同搜索接口
                state = objectType === 'workObject' ? searchWorkObject : searchObject({
                  tn: 1,
                  paging: true,
                  page: current,
                  pageSize: pageSize,
                  keyWord: queryWord
                }).then(function (data) {
                  if (data === undefined || !data.flag) {
                    return state = true;
                  } else {
                    var _dataList = parseMeta(data.dataList);

                    dispatch({
                      type: 'tableConfig/packet',
                      payload: {
                        dataList: _dataList,
                        page: current,
                        pageSize: pageSize
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
                state = objectType === 'workObject' ? queryWorkObject : queryObject({
                  tn: 1,
                  paging: true,
                  page: current,
                  pageSize: pageSize
                }).then(function (data) {
                  if (data === undefined || !data.flag) {
                    return state = true;
                  } else {
                    var _dataList2 = parseMeta(data.dataList);

                    dispatch({
                      type: 'tableConfig/packet',
                      payload: {
                        dataList: _dataList2,
                        page: current,
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

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function changePage(_x, _x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var props = {
    tableProp: {
      dataList: dataList,
      columns: columns,
      btns: activeTab === '2' ? workObjectBtns : commonBtns,
      rowSelection: rowSelection,
      selectedRows: selectedRows,
      onSearch: onSearch,
      rightClick: toogleModal
    },
    formProps: {
      record: record,
      visible: visible,
      onCancel: toogleModal,
      namespace: namespace,
      dataList: dataList,
      noFooter: noFooter,
      activeTab: activeTab
    },
    paging: {
      size: 'small',
      total: total,
      changePage: changePage,
      showPaging: paging.showPaging,
      page: page,
      pageNumber: pageNumber
    },
    changePane: changePane,
    closeTab: closeTab,
    showTab: showTab,
    activeKey: activeKey,
    activeTab: activeTab,
    objectType: objectType
  };
  var tabsProps = [{
    caption: isEnglish ? 'Business Objects' : '业务对象',
    key: '1'
  }, {
    caption: isEnglish ? 'Objects In Design' : '设计中对象',
    key: '2',
    disabled: !isModeling
  }, {
    caption: isEnglish ? 'System Objects' : '系统对象',
    key: '3',
    disabled: !isModeling
  }];
  var tabsTableProps = {
    namespace: 'tableConfig',
    tabsProps: tabsProps,
    activeTab: activeTab,
    tableProps: props,
    dispatch: dispatch,
    showObject: showObject,
    setObjectType: setObjectType,
    selectedRows: selectedRows,
    Cmp: TableConfigCmp
  };
  return /*#__PURE__*/React.createElement(TabsTable, tabsTableProps);
};

function mapStateToProps(_ref5) {
  var tableConfig = _ref5.tableConfig,
      isModeling = _ref5.user.isModeling;
  return {
    tableConfig: tableConfig,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(TableConfig);