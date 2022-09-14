"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _processApi = require("../../../service/processApi");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _ProcessFrom = _interopRequireDefault(require("./ProcessFrom"));

var _EventFrom = _interopRequireDefault(require("./EventFrom"));

var _utils = require("../../../utils/utils");

var _ProcessActivityPngCmp = _interopRequireDefault(require("../activitiCommon/ProcessActivityPngCmp"));

var _language = _interopRequireDefault(require("@/locale/language"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    _language$activiti$Pr = _language.default.activiti.Process_instance,
    proFields = _language$activiti$Pr.fields,
    buttons = _language$activiti$Pr.buttons;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var TabPane = _antd.Tabs.TabPane;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var columns1 = [{
  title: proFields.objectNo,
  dataIndex: 'OBJECTNO',
  align: 'center'
}, {
  title: proFields.objectName,
  dataIndex: 'NAME',
  align: 'center'
}, {
  title: proFields.condition,
  dataIndex: 'COND',
  align: 'center'
}, {
  title: proFields.state,
  dataIndex: 'STATE',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
      color: text ? 'blue' : ''
    }, text ? proFields.alreadyEnable : proFields.alreadyDisable);
  }
}, {
  title: proFields.processID,
  dataIndex: 'PROCDEF_ID',
  align: 'center'
}, {
  title: proFields.remark,
  align: 'center',
  dataIndex: 'REMARK'
}];
var columnsRootEvent = [{
  title: proFields.processNode,
  dataIndex: 'PROCESS_NODE',
  align: 'center'
}, {
  title: proFields.processNodeName,
  dataIndex: 'PROCESS_NODE_NAME',
  align: 'center'
}, {
  title: '业务定义',
  dataIndex: 'BUSINESS_DEF',
  align: 'center'
}, {
  title: '节点定义',
  dataIndex: 'NODE_DEF',
  align: 'center'
}, {
  title: '流转字段',
  dataIndex: 'REVERSE_FIELDS',
  align: 'center'
}, {
  title: '节点事件',
  dataIndex: 'NODE_EVENT',
  align: 'center'
}];

var ActProcdefCmp = function ActProcdefCmp(_ref) {
  var dispatch = _ref.dispatch,
      list = _ref.list,
      rowSelection = _ref.rowSelection,
      columns = _ref.columns,
      xmlStr = _ref.xmlStr,
      visible = _ref.visible,
      onClose = _ref.onClose,
      ProcessInstance = _ref.ProcessInstance,
      onCancel = _ref.onCancel,
      EventBind = _ref.EventBind,
      showPicture = _ref.showPicture,
      selectedRows = _ref.selectedRows;
  var visible1 = ProcessInstance.visible1,
      record1 = ProcessInstance.record1,
      recordB = ProcessInstance.recordB,
      dataList1 = ProcessInstance.dataList1,
      _ProcessInstance$sele = ProcessInstance.selectedRows1,
      selectedRows1 = _ProcessInstance$sele === void 0 ? [] : _ProcessInstance$sele,
      selectedRowKeys1 = ProcessInstance.selectedRowKeys1,
      visible2 = ProcessInstance.visible2,
      total = ProcessInstance.total,
      page = ProcessInstance.page,
      pageNumber = ProcessInstance.pageNumber;
  var dataListEvent = EventBind.dataListEvent,
      _EventBind$eventSelec = EventBind.eventSelectedRows,
      eventSelectedRows = _EventBind$eventSelec === void 0 ? [] : _EventBind$eventSelec,
      _EventBind$eventSelec2 = EventBind.eventSelectedRowKeys,
      eventSelectedRowKeys = _EventBind$eventSelec2 === void 0 ? [] : _EventBind$eventSelec2,
      recordEventFrom = EventBind.recordEventFrom,
      visibleEventFrom = EventBind.visibleEventFrom;

  var _ref2 = selectedRows1 && selectedRows1[0] || [],
      STATE = _ref2.STATE;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  (0, _react.useEffect)(function () {
    var data = {};

    if (selectedRows1.length) {
      data.condition = JSON.parse(selectedRows1[0].COND);
    }

    form.setFieldsValue(data);
  }, [selectedRows1, form]);

  var toogleModal = function toogleModal(record) {
    return function () {
      dispatch({
        type: 'ProcessInstance/packet',
        payload: {
          visible2: !visible2,
          record1: record
        }
      });
    };
  };

  var toogleModalEventFrom = function toogleModalEventFrom(recordEventFrom) {
    return function () {
      dispatch({
        type: 'EventBind/packet',
        payload: {
          visibleEventFrom: !visibleEventFrom,
          recordEventFrom: recordEventFrom
        }
      });
    };
  };

  var del = function del() {
    dispatch({
      type: 'ProcessInstance/delObject',
      payload: {
        selectedRows1: selectedRows1
      }
    });
  };

  var eventDel = function eventDel() {
    dispatch({
      type: 'EventBind/del',
      payload: {
        IDS: eventSelectedRowKeys,
        selectedRows1: selectedRows1
      }
    });
  };

  var disabled = function disabled() {
    dispatch({
      type: 'ProcessInstance/disabled',
      payload: {
        selectedRows1: selectedRows1,
        state: !STATE
      }
    });
  };

  var onSelectChange1 = function onSelectChange1(selectedRowKeys1, selectedRows1) {
    dispatch({
      type: 'ProcessInstance/packet',
      payload: {
        selectedRowKeys1: selectedRowKeys1,
        selectedRows1: selectedRows1
      }
    });
    dispatch({
      type: 'EventBind/processQueryMenu',
      payload: {
        ID: selectedRows1[0].ID
      }
    });
  };

  var onSelectChangeEvent = function onSelectChangeEvent(eventSelectedRowKeys, eventSelectedRows) {
    dispatch({
      type: 'EventBind/packet',
      payload: {
        eventSelectedRowKeys: eventSelectedRowKeys,
        eventSelectedRows: eventSelectedRows
      }
    });
  };

  var rowSelection1 = {
    type: 'radio',
    onChange: onSelectChange1,
    selectedRowKeys: selectedRowKeys1
  };
  var rowSelectionEvent = {
    onChange: onSelectChangeEvent,
    selectedRowKeys: eventSelectedRowKeys
  };

  var changePage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(page, pageSize) {
      var state;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = false;
              _context.next = 3;
              return (0, _processApi.getProcdefProcess)({
                page: page,
                pageSize: pageSize
              }).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  var dataList = data.dataList;
                  dispatch({
                    type: 'ProcessInstance/packet',
                    payload: {
                      list: dataList,
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
  var btns1 = [{
    name: buttons.bind,
    disabled: false,
    func: toogleModal()
  }, {
    name: buttons.update,
    disabled: !(selectedRows1 && selectedRows1[0] && !STATE),
    func: toogleModal(selectedRows1 ? selectedRows1[0] : null)
  }, {
    name: STATE ? buttons.disabled : buttons.enable,
    disabled: !(selectedRows1 && selectedRows1[0]),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + (STATE ? buttons.disabled : buttons.enable),
        onOk: disabled
      });
    }
  }, {
    name: buttons.delete,
    disabled: !(selectedRows1 && selectedRows1[0] && !STATE),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del
      });
    }
  }, {
    name: '绑定节点事件',
    disabled: !(selectedRows1 && selectedRows1[0] && !STATE),
    func: function func() {
      return showPicture(selectedRows[0].ID);
    }
  }];
  var btnsRootEvent = [{
    name: buttons.create,
    func: toogleModalEventFrom()
  }, {
    name: buttons.update,
    disabled: !(eventSelectedRows && eventSelectedRows[0]),
    func: toogleModalEventFrom(eventSelectedRows[0] ? eventSelectedRows[0] : null)
  }, {
    name: buttons.delete,
    disabled: !(eventSelectedRows && eventSelectedRows[0]),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: eventDel
      });
    }
  }];
  var props = {
    rowSelection: rowSelection,
    dataList: list,
    paging: paging,
    columns: columns,
    onRow: function (_onRow) {
      function onRow(_x3) {
        return _onRow.apply(this, arguments);
      }

      onRow.toString = function () {
        return _onRow.toString();
      };

      return onRow;
    }(function (record) {
      return {
        onClick: function onClick() {
          onRow(record.ID, record);
        } // 点击行

      };
    })
  };
  var tableProp = {
    dataList: dataList1,
    columns: columns1,
    btns: btns1,
    rowSelection: rowSelection1
  };
  var RootTableProps = {
    dataList: dataListEvent,
    rowSelection: rowSelectionEvent,
    columns: columnsRootEvent,
    btns: btnsRootEvent
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, props), visible && /*#__PURE__*/_react.default.createElement(_ProcessActivityPngCmp.default, {
    xmlStr: xmlStr,
    visible: visible,
    onCancel: onCancel,
    noShowNodeInformation: true,
    toogleModalEventFrom: toogleModalEventFrom,
    nodeDataListEvent: dataListEvent,
    selectedRowsBindObject: selectedRows1
  })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    title: proFields.objectBind,
    visible: visible1,
    onClose: onClose,
    width: "85%",
    zIndex: 900
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      bottom: true
    },
    showTab: selectedRows1.length ? true : false,
    height: "20%"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp)), selectedRows1 && selectedRows1.length > 0 && /*#__PURE__*/_react.default.createElement(_antd.Tabs, null, /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: proFields.nodeEvent,
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, RootTableProps))))), /*#__PURE__*/_react.default.createElement(_ProcessFrom.default, {
    visible: visible2,
    onCancel: toogleModal(),
    record: record1,
    recordB: recordB
  }), /*#__PURE__*/_react.default.createElement(_EventFrom.default, {
    visible: visibleEventFrom,
    selectedRows1: selectedRows1,
    onCancel: toogleModalEventFrom(),
    record: recordEventFrom,
    recordB: recordB
  }));
};

function mapStateToProps(_ref4) {
  var ProcessInstance = _ref4.ProcessInstance,
      EventBind = _ref4.EventBind;
  return {
    ProcessInstance: ProcessInstance,
    EventBind: EventBind
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(ActProcdefCmp);

exports.default = _default;