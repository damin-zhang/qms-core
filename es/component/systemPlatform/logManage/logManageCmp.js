function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

/*
 * @Descripttion: 日志管理组件
 */
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'dva';
import { Tree, DatePicker, InputNumber, Button, Select, Form } from 'antd';
import DragCmp from '../../common/drag/DragCmp';
import ScrollTable from '../../common/table/ParseTable';
import VirtualTree from '../../common/tree/VirtualTree';
import { hideLoading } from '../../../utils/utils';
import styles from '../systemLog/index.less';
import language from '@/locale/language';
import { get } from '../../../service/api';
var _language$systemPlatf = language.systemPlatform.systemLog,
    tableColumns = _language$systemPlatf.tableColumns,
    _language$systemPlatf2 = _language$systemPlatf.serviceLog,
    auto_refresh_interval_time = _language$systemPlatf2.auto_refresh_interval_time,
    show_data_rows = _language$systemPlatf2.show_data_rows,
    manual_refresh = _language$systemPlatf2.manual_refresh,
    stop_refresh = _language$systemPlatf2.stop_refresh,
    filter_logs = _language$systemPlatf2.filter_logs,
    log_valid_time = _language$systemPlatf2.log_valid_time,
    automatic_database_backup_interval = _language$systemPlatf2.automatic_database_backup_interval,
    manual_backup = _language$systemPlatf2.manual_backup;
var columns = [{
  title: tableColumns.OBJTN,
  dataIndex: 'objTn',
  width: 100
}, {
  title: tableColumns.OBJNAME,
  dataIndex: 'objName',
  width: 100
}, {
  title: tableColumns.OBJID,
  dataIndex: 'objId',
  width: 120
}, {
  title: tableColumns.ACTION,
  dataIndex: 'event',
  width: 100
}, {
  title: tableColumns.DETAILS,
  dataIndex: 'details',
  width: 250
}, {
  title: tableColumns.IP,
  dataIndex: 'ip',
  width: 100
}, {
  title: tableColumns.CTIME,
  dataIndex: 'ctime',
  width: 130
}, {
  title: tableColumns.CUSER,
  dataIndex: 'cuser',
  width: 80
}];
var TreeNode = Tree.TreeNode;
var Option = Select.Option;
var Item = Form.Item;

var renderTreeNodes = function renderTreeNodes(data) {
  return data.map(function (item) {
    var titlePro = localStorage.getItem('AcceptLanguage') === 'en-US';
    var title = item.title;
    var action = item.action;

    if (item.children) {
      return /*#__PURE__*/React.createElement(TreeNode, {
        title: titlePro ? action ? action : title : title,
        key: item.key,
        dataRef: item
      }, renderTreeNodes(item.children));
    }

    return /*#__PURE__*/React.createElement(TreeNode, {
      title: titlePro ? action ? action : title : title,
      key: item.key,
      dataRef: item
    });
  });
};

var LogManageCmp = function LogManageCmp(_ref) {
  var dispatch = _ref.dispatch,
      treeData = _ref.treeData,
      serviceLog = _ref.serviceLog,
      socket = _ref.socket;

  var _useState = useState(15),
      _useState2 = _slicedToArray(_useState, 2),
      intervalTime = _useState2[0],
      setIntervalTime = _useState2[1];

  var _useState3 = useState(200),
      _useState4 = _slicedToArray(_useState3, 2),
      rowCount = _useState4[0],
      setRowCount = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      action = _useState6[0],
      setAction = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      dataList = _useState8[0],
      setDataList = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      dataList1 = _useState10[0],
      setDataList1 = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedRowKey = _useState12[0],
      setSelectedRowKey = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = _slicedToArray(_useState13, 2),
      selectedRows = _useState14[0],
      setSelectedRows = _useState14[1];

  var _useState15 = useState(0),
      _useState16 = _slicedToArray(_useState15, 2),
      total = _useState16[0],
      setTotal = _useState16[1];

  var _useState17 = useState(1),
      _useState18 = _slicedToArray(_useState17, 2),
      page = _useState18[0],
      setPage = _useState18[1];

  var _useState19 = useState(20),
      _useState20 = _slicedToArray(_useState19, 2),
      pageNumber = _useState20[0],
      setPageNumber = _useState20[1];

  var systemLogRef = useRef();
  useEffect(function () {
    if (serviceLog && systemLogRef.current) {
      hideLoading(); // 滚动服务日志到最底部

      systemLogRef.current.scrollTop = systemLogRef.current.scrollHeight;
    }
  }, [serviceLog]);

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'logManage/toogleModal',
      payload: {
        record: record
      }
    });
  };

  var onValidTimeChange = function onValidTimeChange(date, dateString) {
    if (dataList && dataList.length) {
      if (dateString) {
        var dataS = dataList.filter(function (item) {
          return dateString === item.ctime.substring(0, 10);
        });
        setDataList(dataS);
      } else setDataList(dataList1);
    } else setDataList(dataList1);
  };

  var onBackupTimeChange = function onBackupTimeChange(date, dateString) {// console.log(date, dateString)
  };

  var onClick = function onClick() {}; // 向websocket发送消息


  var sendSocketMessage = function sendSocketMessage(open) {
    var pollTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
    var logStartRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

    if (socket) {
      var params = {
        open: open,
        pollTime: pollTime,
        logStartRow: logStartRow
      };
      socket.sendMessage('@R_LOG' + JSON.stringify(params));
    }
  };

  var onRow = function onRow(record) {
    return {
      onDoubleClick: function onDoubleClick() {
        toogleModal(record);
      }
    };
  }; // 自动刷新间隔时间


  var refreshIntervalTime = function refreshIntervalTime() {
    sendSocketMessage(true, intervalTime, rowCount);
  };

  var onChangeIntervalTime = function onChangeIntervalTime(event) {
    setIntervalTime(event);
  }; // 选择展示数据行


  var onSelectRowCount = function onSelectRowCount(value) {
    setRowCount(value);
    sendSocketMessage(true, intervalTime, value);
  }; // 手动刷新


  var onClickManualRefresh = function onClickManualRefresh() {
    // showLoading()
    sendSocketMessage(true);
  }; // 停止刷新


  var onClickStopRefresh = function onClickStopRefresh() {
    sendSocketMessage(false);
  };

  var onSelect = function onSelect(selectedKeys, e) {
    var dataRef = e.node.props.dataRef;
    setSelectedRowKey([dataRef.key]);
    setSelectedRows([dataRef]);

    if (dataRef.key === '1-6') {
      // showLoading()
      // 向websocket发送消息
      sendSocketMessage(true);
    } else {
      if (dataRef.action) {
        setAction(dataRef.action);
        get('/log/app/query', {
          action: dataRef.action,
          page: page,
          pageSize: pageNumber
        }).then(function (res) {
          if (res === undefined || !res.flag) {
            return;
          } else {
            setDataList(res.dataList);
            setDataList1(res.dataList);
            setTotal(res.total);
          }
        });
      }
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
              _context.next = 3;
              return get('/log/app/query', {
                action: action,
                page: page,
                pageSize: pageSize
              }).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  setDataList(data.dataList);
                  setDataList1(data.dataList);
                  setPage(page);
                  setPageNumber(pageSize);
                  return state = true;
                }
              }).then(function (state) {
                return state;
              }).catch(function () {
                return state = true;
              });

            case 3:
              state = _context.sent;
              return _context.abrupt("return", state);

            case 5:
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
  return /*#__PURE__*/React.createElement("div", {
    className: styles.pageSystemLog
  }, /*#__PURE__*/React.createElement(DragCmp, {
    enable: {
      right: true
    },
    showTab: true,
    width: "15%"
  }, /*#__PURE__*/React.createElement(VirtualTree, {
    defaultExpandAll: true,
    onSelect: onSelect,
    selectedKeys: selectedRowKey,
    data: renderTreeNodes(treeData)
  })), selectedRowKey && selectedRowKey[0] && /*#__PURE__*/React.createElement("div", {
    className: styles.main
  }, selectedRowKey && selectedRowKey[0] && selectedRowKey[0] === '1-6' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form, {
    layout: "inline"
  }, /*#__PURE__*/React.createElement(Item, {
    label: auto_refresh_interval_time,
    labelCol: {
      span: 17
    },
    wrapperCol: {
      span: 7
    },
    style: {
      width: 230
    }
  }, /*#__PURE__*/React.createElement(InputNumber, {
    min: 5,
    value: intervalTime,
    onPressEnter: refreshIntervalTime,
    onChange: onChangeIntervalTime
  })), /*#__PURE__*/React.createElement(Item, {
    label: show_data_rows,
    labelCol: {
      span: 12
    },
    wrapperCol: {
      span: 12
    },
    style: {
      width: 200,
      marginLeft: '16px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: 200,
    onSelect: onSelectRowCount
  }, /*#__PURE__*/React.createElement(Option, {
    value: 100
  }, "100"), /*#__PURE__*/React.createElement(Option, {
    value: 200
  }, "200"), /*#__PURE__*/React.createElement(Option, {
    value: 300
  }, "300"), /*#__PURE__*/React.createElement(Option, {
    value: 400
  }, "400"), /*#__PURE__*/React.createElement(Option, {
    value: 500
  }, "500"))), /*#__PURE__*/React.createElement(Button, {
    onClick: onClickManualRefresh,
    style: {
      marginLeft: '16px'
    },
    type: "primary"
  }, manual_refresh), /*#__PURE__*/React.createElement(Button, {
    onClick: onClickStopRefresh,
    style: {
      marginLeft: '16px'
    },
    type: "primary"
  }, stop_refresh)), serviceLog && /*#__PURE__*/React.createElement("div", {
    className: styles.serviceLog,
    ref: systemLogRef,
    dangerouslySetInnerHTML: {
      __html: serviceLog
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px',
      display: 'flex'
    }
  }, filter_logs, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/React.createElement(DatePicker, {
    onChange: onValidTimeChange,
    placeholder: log_valid_time
  })), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: '25px'
    }
  }, automatic_database_backup_interval), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/React.createElement(InputNumber, {
    min: 1,
    onChange: onBackupTimeChange
  }))), /*#__PURE__*/React.createElement(Button, {
    onClick: onClick,
    style: {
      marginLeft: '25px'
    },
    type: "primary"
  }, manual_backup)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      flexGrow: '1',
      height: '5px'
    }
  }, /*#__PURE__*/React.createElement(ScrollTable, {
    dataList: dataList,
    columns: columns,
    paging: paging,
    onRow: onRow,
    rightClick: toogleModal
  })))));
};

function mapStateToProps(_ref3) {
  var logManage = _ref3.logManage;
  return _objectSpread({}, logManage);
}

export default connect(mapStateToProps)(LogManageCmp);