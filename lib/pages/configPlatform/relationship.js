"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _RelationshipCmp = _interopRequireDefault(require("../../component/configPlatform/relationship/RelationshipCmp"));

var _antd = require("antd");

var _utils = require("../../utils/utils");

var _TabsTable = _interopRequireDefault(require("../../component/configPlatform/tableConfig/TabsTable"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _metaApi = require("../../service/metaApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.relationship.fields; // 根据STATE值渲染NAME字段

var renderNameTag = function renderNameTag(state, text) {
  switch (state) {
    case 0:
      return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: "#2db7f5"
      }, text);
    // 新增对象蓝色

    case 2:
      return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: "#f50"
      }, text);
    //  变更中橘黄色

    default:
      return text;
  }
};

var tab_namespace = ['menu'];

var Relationship = function Relationship(_ref) {
  var relationship = _ref.relationship,
      dispatch = _ref.dispatch,
      isModeling = _ref.isModeling;
  var columns = [{
    title: common.index,
    dataIndex: 'index',
    align: 'left',
    width: 50,
    render: function render(text) {
      return text + 1 + (page - 1) * pageNumber;
    }
  }, // { title: fields.STATE, dataIndex: 'STATE', width: 80, render: text => stateMap[text] },
  // {
  //   title: fields.EFFECTIVE,
  //   dataIndex: 'EFFECTIVE',
  //   width: 80,
  //   align: 'center',
  //   render: text => <Checkbox checked={text} />
  // },
  // { title: fields.VER, dataIndex: 'VER', width: 80 },
  {
    title: fields.NO,
    dataIndex: 'NO',
    width: 150,
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: text
      }, text);
    }
  }, {
    title: _utils.isEnglish ? fields.ENNAME : fields.NAME,
    dataIndex: _utils.isEnglish ? 'ENNAME' : 'NAME',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: text
      }, renderNameTag(record.STATE, text));
    }
  }, {
    title: fields.RELATIONOBJECT,
    dataIndex: 'RELATIONOBJECT',
    width: 200
  }, {
    title: fields.OBJECTA,
    dataIndex: 'OBJECTA',
    width: 150
  }, {
    title: fields.OBJECTB,
    dataIndex: 'OBJECTB',
    width: 150
  }, {
    title: fields.POBJECT,
    dataIndex: 'POBJECT',
    width: 100
  }, {
    title: fields.CONTROLAUTH,
    dataIndex: 'CONTROLAUTH',
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.CONTROLAUTH,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'CONTROLAUTH'
        })
      });
    }
  }, {
    title: fields.SORTFIELDS,
    dataIndex: 'SORTFIELDS',
    render: function render(SORTFIELDS) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: JSON.stringify(SORTFIELDS)
      }, JSON.stringify(SORTFIELDS));
    }
  }, {
    title: common.definition,
    align: 'center',
    frozen: 'right',
    fixed: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        type: "primary",
        onClick: showDrawer.bind(showDrawer, record)
      }, common.definition);
    }
  }];
  var dataList = relationship.dataList,
      visible = relationship.visible,
      selectedRowKeys = relationship.selectedRowKeys,
      selectedRows = relationship.selectedRows,
      activeKey = relationship.activeKey,
      activeTab = relationship.activeTab,
      namespace = relationship.namespace,
      showTab = relationship.showTab,
      record = relationship.record,
      noFooter = relationship.noFooter,
      total = relationship.total,
      _relationship$paging = relationship.paging,
      paging = _relationship$paging === void 0 ? {
    showPaging: true
  } : _relationship$paging,
      _relationship$isSearc = relationship.isSearch,
      isSearch = _relationship$isSearc === void 0 ? false : _relationship$isSearc,
      page = relationship.page,
      pageNumber = relationship.pageNumber;

  var _ref2 = selectedRows[0] || {},
      STATE = _ref2.STATE,
      EFFECTIVE = _ref2.EFFECTIVE;

  var enable = isModeling && (STATE === 2 || STATE === 0);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      queryWord = _useState2[0],
      setQueryWord = _useState2[1]; // 是否为工作对象, 设计中对象.


  var _useState3 = (0, _react.useState)('commonObject'),
      _useState4 = _slicedToArray(_useState3, 2),
      objectType = _useState4[0],
      setObjectType = _useState4[1];

  (0, _react.useEffect)(function () {
    sessionStorage['tableConfigObjectType'] = 'commonObject';
  }, [namespace]);

  var eidtRow = function eidtRow(_ref3) {
    var text = _ref3.text,
        record = _ref3.record,
        field = _ref3.field;
    return function () {
      if (activeTab !== '2') {
        _antd.message.warn('不是设计中的关联关系');

        return;
      }

      var values = record.META;
      values[field] = !text;
      dispatch({
        type: 'commonConfig/edit',
        payload: {
          values: values,
          record: record,
          namespace: namespace
        }
      });
    };
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    dispatch({
      type: 'relationship/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          SORTFIELDS: record.SORTFIELDS || []
        }),
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var showDrawer = function showDrawer(row) {
    dispatch({
      type: 'relationship/packet',
      payload: {
        showTab: true
      }
    });
    changePane(activeKey, row);
  };

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    var STATE = rows.STATE,
        OBJECTA = rows.OBJECTA,
        CONTROLAUTH = rows.CONTROLAUTH;
    dispatch({
      type: 'relationship/packet',
      payload: {
        activeKey: activeKey
      }
    });
    dispatch({
      type: 'commonConfig/queryItem',
      payload: {
        PID: rows.ID,
        objectType: objectType,
        namespace: tab_namespace[activeKey],
        enable: isModeling && (STATE === 2 || STATE === 0),
        other: {
          selectedRows: [],
          OBJECTNO: rows.OBJECTB,
          OBJECTA: OBJECTA,
          pCONTROLAUTH: CONTROLAUTH
        }
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'relationship/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'relationship/packet',
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

  var workObjectBtns = [{
    name: buttons.create,
    disabled: !isModeling,
    func: function func() {
      toogleModal({
        TYPE: 0
      });
    }
  }, {
    name: buttons.update,
    disabled: !enable,
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: STATE === 2 ? buttons.cancel_upgrade : buttons.delete,
    disabled: !enable,
    func: function func() {
      (0, _utils.confirm)({
        title: STATE === 2 ? buttons.cancel_upgrade : common.confirm + buttons.delete,
        onOk: STATE === 2 ? cancelUpgrade(selectedRows) : del(selectedRows)
      });
    }
  }, {
    name: buttons.synchro_model,
    disabled: !(enable || STATE === 0 && !EFFECTIVE),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.synchro_model,
        onOk: synchro(selectedRows[0])
      });
    }
  }];
  var commonBtns = [{
    name: buttons.upgrade,
    disabled: !(selectedRows[0] && isModeling && STATE === 1),
    func: function func() {
      (0, _utils.confirm)({
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

              if (!isSearch) {
                _context.next = 13;
                break;
              }

              _context.next = 4;
              return objectType;

            case 4:
              _context.t0 = _context.sent;

              if (!(_context.t0 === 'workObject')) {
                _context.next = 9;
                break;
              }

              _context.t1 = _metaApi.searchWorkObject;
              _context.next = 10;
              break;

            case 9:
              _context.t1 = (0, _metaApi.searchObject)({
                tn: 2,
                paging: true,
                page: current,
                pageSize: pageSize,
                keyWord: queryWord
              }).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  var _dataList = (0, _utils.parseMeta)(data.dataList);

                  dispatch({
                    type: 'relationship/packet',
                    payload: {
                      dataList: _dataList,
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

            case 10:
              state = _context.t1;
              _context.next = 22;
              break;

            case 13:
              _context.next = 15;
              return objectType;

            case 15:
              _context.t2 = _context.sent;

              if (!(_context.t2 === 'workObject')) {
                _context.next = 20;
                break;
              }

              _context.t3 = _metaApi.queryWorkObject;
              _context.next = 21;
              break;

            case 20:
              _context.t3 = (0, _metaApi.queryObject)({
                tn: 2,
                paging: true,
                page: current,
                pageSize: pageSize
              }).then(function (data) {
                if (data === undefined || !data.flag) {
                  return state = true;
                } else {
                  var _dataList2 = (0, _utils.parseMeta)(data.dataList);

                  dispatch({
                    type: 'relationship/packet',
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

            case 21:
              state = _context.t3;

            case 22:
              return _context.abrupt("return", state);

            case 23:
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
      onSearch: onSearch,
      rightClick: toogleModal
    },
    formProps: {
      record: record,
      visible: visible,
      onCancel: toogleModal,
      namespace: namespace,
      noFooter: noFooter,
      dataList: dataList
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
    caption: _utils.isEnglish ? 'Synced' : '已同步',
    key: '1'
  }, {
    caption: _utils.isEnglish ? 'Designing' : '设计中',
    key: '2',
    disabled: !isModeling
  }];
  var tabsTableProps = {
    namespace: 'relationship',
    tabsProps: tabsProps,
    activeTab: activeTab,
    tableProps: props,
    dispatch: dispatch,
    showObject: showObject,
    setObjectType: setObjectType,
    Cmp: _RelationshipCmp.default
  };
  return /*#__PURE__*/_react.default.createElement(_TabsTable.default, tabsTableProps);
};

function mapStateToProps(_ref5) {
  var relationship = _ref5.relationship,
      isModeling = _ref5.user.isModeling;
  return {
    relationship: relationship,
    isModeling: isModeling
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Relationship);

exports.default = _default;