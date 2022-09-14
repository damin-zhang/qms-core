"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _applicationApi = require("../../../service/applicationApi");

var _utils = require("../../../utils/utils");

var _uploadApi = require("../../../service/uploadApi");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _antd = require("antd");

var _moment = _interopRequireDefault(require("moment"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var TextArea = _antd.Input.TextArea;
var Item = _antd.Form.Item;
var dateFormat = 'YYYY-MM-DD HH:mm:ss';

var PeriodInspectionEntry = function PeriodInspectionEntry(_ref) {
  var dispatch = _ref.dispatch,
      objectANamespace = _ref.objectANamespace,
      objectADataList = _ref.objectADataList,
      id = _ref.id,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      dataList = _ref.dataList,
      hData = _ref.hData,
      formInitValue = _ref.formInitValue,
      isOperation = _ref.isOperation,
      props = _ref.props;
  var objectNo = values.objectNo;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _Form$useForm3 = _antd.Form.useForm(),
      _Form$useForm4 = _slicedToArray(_Form$useForm3, 1),
      NAform = _Form$useForm4[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      NAVisible = _useState6[0],
      setNAVisible = _useState6[1];

  var definitionColumns = [{
    title: '序号',
    dataIndex: 'index',
    width: 50,
    align: 'center',
    render: function render(text, record, index) {
      return index + 1;
    }
  }, {
    title: '试验项目',
    dataIndex: 'TEST_ITEMS',
    width: 100,
    align: 'center'
  }, {
    title: '样品数量',
    dataIndex: 'SQ',
    width: 80,
    align: 'center'
  }, {
    title: '单位&备注',
    dataIndex: 'UNITS',
    width: 120,
    align: 'center'
  }, {
    title: '参考标准',
    dataIndex: 'REFERENCE_STANDARD',
    width: 100,
    align: 'center'
  }, {
    title: '试验条件',
    dataIndex: 'TEST_CNDITION',
    width: 220
  }, {
    title: '试验负责人',
    dataIndex: 'FI',
    width: 100,
    align: 'center'
  }, {
    title: hData && hData.TEST_SUBJECT.indexOf('供应商') > -1 ? '预计开始时间' : '送检时间',
    dataIndex: 'INSPECT_TIME ',
    width: 150,
    align: 'center',
    render: function render(text, record, index) {
      if (hData && hData.TEST_SUBJECT.indexOf('供应商') > -1) {
        return /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.ID, 'INSPECT_TIME'],
          key: record.ID
        }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
          showTime: true,
          format: "YYYY-MM-DD HH:mm:ss",
          onChange: function onChange(val1) {
            return timeChange('INSPECT_TIME', record, index, val1);
          },
          disabled: isOperation
        }));
      } else return /*#__PURE__*/_react.default.createElement("span", null, record.INSPECT_TIME);
    }
  }, {
    title: '计划完成时间',
    dataIndex: 'ESTIMATE_C_TIME',
    width: 150,
    align: 'center',
    render: function render(text, record, index) {
      if (hData && hData.TEST_SUBJECT.indexOf('供应商') > -1) {
        return /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.ID, 'ESTIMATE_C_TIME'],
          key: record.ID
        }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
          showTime: true,
          format: "YYYY-MM-DD HH:mm:ss",
          onChange: function onChange(val1) {
            return timeChange('ESTIMATE_C_TIME', record, index, val1);
          },
          disabled: isOperation
        }));
      } else return /*#__PURE__*/_react.default.createElement("span", null, record.ESTIMATE_C_TIME);
    }
  }, {
    title: '试验结论',
    dataIndex: 'TR ',
    align: 'center',
    width: 120,
    render: function render(text, record, index) {
      var TRClass = '';
      if (record.TR === 'OK') TRClass = 'green';
      if (record.TR === 'NG') TRClass = 'red';
      return /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
        name: [record.ID, 'TR'],
        key: record.ID,
        className: TRClass + " resultSel"
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        style: {
          width: '100px'
        },
        onChange: function onChange(val) {
          return ResultEvent(val, index);
        },
        disabled: isOperation
      }, /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
        value: "OK",
        key: "1",
        style: {
          backgroundColor: '#92D050',
          textAlign: 'center'
        }
      }, "OK"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
        value: "NG",
        key: "2",
        style: {
          backgroundColor: '#F93617',
          color: '#FFF',
          textAlign: 'center'
        }
      }, "NG"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
        value: "NA",
        key: "3",
        style: {
          textAlign: 'center'
        }
      }, "\u672A\u5B89\u6392")));
    }
  }];

  if (hData && hData.TEST_SUBJECT.indexOf('供应商') > -1) {
    definitionColumns.push({
      title: 'SQE邮箱',
      dataIndex: 'SQEMAIL',
      align: 'center',
      width: 150
    });
  }

  (0, _react.useEffect)(function () {
    formInitValue && form.setFieldsValue(formInitValue);
    return function () {
      form.resetFields();
    };
  }, [formInitValue, dataList, form]); // 供应商选择时间

  var timeChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type, record, index, val1) {
      var _otherParam2;

      var otherParam, _otherParam, val, res;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              otherParam = {};

              if (type === 'INSPECT_TIME') {
                otherParam = (_otherParam = {}, _defineProperty(_otherParam, type, (0, _moment.default)(val1).format(dateFormat)), _defineProperty(_otherParam, "ESTIMATE_C_TIME", record.ESTIMATE_C_TIME ? (0, _moment.default)(record.ESTIMATE_C_TIME).format(dateFormat) : null), _otherParam);
              } else otherParam = (_otherParam2 = {}, _defineProperty(_otherParam2, type, (0, _moment.default)(val1).format(dateFormat)), _defineProperty(_otherParam2, "INSPECT_TIME", record.INSPECT_TIME ? (0, _moment.default)(record.INSPECT_TIME).format(dateFormat) : null), _otherParam2);

              val = {
                implClass: 'inspect.SaveSupplierTimeEvent',
                objectNo: objectNo,
                hData: selectedRows,
                otherParam: otherParam
              };
              (0, _utils.showLoading)();
              _context.next = 6;
              return (0, _applicationApi.commonApi)(val);

            case 6:
              res = _context.sent;

              if (res && res.flag) {
                dataList[index][type] = (0, _moment.default)(val1).format(dateFormat);
                dispatch({
                  type: 'periodQualityInspectionEntry/packet',
                  payload: {
                    dataList: dataList
                  }
                });

                _antd.message.info(res.hint);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function timeChange(_x, _x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(); // 完成录入


  var save = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res, _payload, list, payload;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // for (let i = 0; i < dataList.length; i++) {
              //   if (dataList[i].TR === 'NA') {
              //     message.warning('实验项目 [' + dataList[i].TEST_ITEMS + '] 没有录入试验结论')
              //     return
              //   }
              // }
              (0, _utils.showLoading)();
              _context2.next = 3;
              return (0, _applicationApi.commonApi)({
                implClass: 'inspect.PeriodSavaInspectionEvent',
                objectNo: objectNo,
                hData: [hData]
              });

            case 3:
              res = _context2.sent;

              if (res && res.flag) {
                if (res.newRowData) {
                  list = objectADataList.filter(function (item) {
                    return item.ID !== res.newRowData.ID;
                  });
                  payload = (_payload = {
                    selectedRows: [],
                    dataList: list || []
                  }, _defineProperty(_payload, id, false), _defineProperty(_payload, "hData", _objectSpread({}, hData)), _payload);
                  dispatch({
                    type: "".concat(objectANamespace, "/packet"),
                    payload: payload
                  });
                }

                _antd.message.info('录入成功');
              } else {
                _antd.message.info('录入失败');
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function save() {
      return _ref3.apply(this, arguments);
    };
  }();
  /*测试结果OK/NG修改*/


  var ResultEvent = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(val, index) {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              (0, _utils.showLoading)();
              _context3.next = 3;
              return (0, _applicationApi.commonApi)({
                implClass: 'inspect.SaveTestConclutionEvent',
                objectNo: objectNo,
                hData: [dataList[index]],
                otherParam: {
                  TR: val
                }
              });

            case 3:
              res = _context3.sent;

              if (res && res.flag) {
                dataList[index].TR = val;
                dispatch({
                  type: 'periodQualityInspectionEntry/resFom',
                  payload: {
                    dataList: dataList
                  }
                });
              }

              _antd.message.info(res.hint);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function ResultEvent(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }(); // 批量编辑OK/NG


  var BatchEdit = function BatchEdit(testResult) {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var val, res, list;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              val = {
                implClass: 'inspect.SaveTestConclutionEvent',
                objectNo: objectNo,
                hData: selectedRows,
                otherParam: {
                  TR: testResult
                }
              };
              (0, _utils.showLoading)();
              _context4.next = 4;
              return (0, _applicationApi.commonApi)(val);

            case 4:
              res = _context4.sent;

              if (res && res.flag) {
                list = dataList.map(function (item) {
                  selectedRows.forEach(function (rows) {
                    if (rows.ID === item.ID) {
                      item.TR = testResult;
                    }
                  });
                  return item;
                });
                dispatch({
                  type: 'periodQualityInspectionEntry/resFom',
                  payload: {
                    dataList: list
                  }
                });

                _antd.message.info(res.hint);
              }

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
  }; // 上传试验报告


  var _beforeUpload = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(file) {
      var res, val;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              (0, _utils.showLoading)();
              _context5.next = 3;
              return (0, _uploadApi.uploadFileAsync)({
                file: file,
                tableName: objectNo,
                record: [hData]
              });

            case 3:
              res = _context5.sent;

              if (res && res.flag === true) {
                val = {
                  implClass: 'rohs.UploadRohsFileEvent',
                  objectNo: objectNo,
                  hData: [hData],
                  data: {
                    FLOCATION: res.dataList
                  }
                };
                (0, _utils.showLoading)();
                (0, _applicationApi.commonApi)(val).then(function (res) {
                  if (res) {
                    _antd.message.success('上传成功');
                  } else _antd.message.warn('上传失败');
                });
              } else {
                _antd.message.warn('上传失败');

                (0, _utils.hideLoading)();
              }

              return _context5.abrupt("return", false);

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function beforeUpload(_x7) {
      return _ref6.apply(this, arguments);
    };
  }(); //提交申请不安排试验


  var onFinish = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
      var val, res, _payload2, list, payload;

      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              val = {
                implClass: 'inspect.PeriodSavaNaEvent',
                objectNo: objectNo,
                hData: [hData],
                otherParam: _objectSpread({}, value)
              };
              (0, _utils.showLoading)();
              _context6.next = 4;
              return (0, _applicationApi.commonApi)(val);

            case 4:
              res = _context6.sent;

              if (res && res.flag) {
                if (res.newRowData) {
                  list = objectADataList.filter(function (item) {
                    return item.ID !== res.newRowData.ID;
                  });
                  payload = (_payload2 = {
                    selectedRows: [],
                    dataList: list || []
                  }, _defineProperty(_payload2, id, false), _defineProperty(_payload2, "hData", _objectSpread({}, hData)), _payload2);
                  dispatch({
                    type: "".concat(objectANamespace, "/packet"),
                    payload: payload
                  });
                }

                _antd.message.info(res.hint);
              }

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function onFinish(_x8) {
      return _ref7.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "period-data-top"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "period-data-info"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u68C0\u9A8C\u5355\u53F7: ", hData && hData.INSPECTION_ORDER_NUMBER), /*#__PURE__*/_react.default.createElement("span", null, "\u68C0\u9A8C\u65E5\u671F: ", hData && hData.IST), /*#__PURE__*/_react.default.createElement("span", null, "\u8BD5\u9A8C\u5355\u53F7: ", hData && hData.TEST_ORDER), /*#__PURE__*/_react.default.createElement("span", null, "\u9001\u68C0\u65E5\u671F: ", hData && hData.INSPECT_TIME), /*#__PURE__*/_react.default.createElement("span", null, "\u7269\u6599\u7F16\u53F7: ", hData && hData.MATERIAL_CODE), /*#__PURE__*/_react.default.createElement("span", null, "\u6837\u54C1\u6570\u91CF: ", hData && hData.SAMPLE_QUANTITY), /*#__PURE__*/_react.default.createElement("span", null, "\u4F9B\u5E94\u5546\u54C1\u724C\u4EE3\u7801: ", hData && hData.SUPPLIER_BRAND_CODE), /*#__PURE__*/_react.default.createElement("span", null, "\u4F9B\u5E94\u5546\u54C1\u724C: ", hData && hData.SUPPLIER_BRAND), /*#__PURE__*/_react.default.createElement("span", {
    className: "lin-2"
  }, "\u7269\u6599\u63CF\u8FF0: ", hData && hData.MATERIAL_NAME), /*#__PURE__*/_react.default.createElement("span", null, "\u4F9B\u5E94\u5546\u540D\u79F0: ", hData && hData.SUPPLIER_NAME))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '50px',
      lineHeight: '55px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: dataList.length && hData.INSPECTION_STATUS !== 2 && !isOperation ? false : true,
    onClick: save
  }, "\u5B8C\u6210\u5F55\u5165"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: selectedRows.length && hData.INSPECTION_STATUS !== 2 && !isOperation ? false : true,
    onClick: BatchEdit('OK')
  }, "\u6279\u91CFOK"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: selectedRows.length && hData.INSPECTION_STATUS !== 2 && !isOperation ? false : true,
    onClick: BatchEdit('NG')
  }, "\u6279\u91CFNG"), /*#__PURE__*/_react.default.createElement(_antd.Upload, {
    beforeUpload: function beforeUpload(file) {
      return _beforeUpload(file);
    },
    showUploadList: false,
    itemRender: function itemRender() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    },
    maxCount: 1
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: dataList.length && hData.INSPECTION_STATUS !== 2 && !isOperation ? false : true
  }, "\u4E0A\u4F20\u62A5\u544A")), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: dataList.length && hData.INSPECTION_STATUS !== 2 && !isOperation ? false : true,
    onClick: function onClick() {
      return setNAVisible(true);
    }
  }, "\u7533\u8BF7\u4E0D\u5B89\u6392\u8BD5\u9A8C")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "calc(100% - 176px)"
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    form: form,
    name: "inspectionForm",
    initialValues: formInitValue,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
    size: "small",
    className: "period-style",
    dataSource: dataList,
    columns: definitionColumns,
    bordered: true,
    scroll: {
      x: '100%',
      y: 'calc(100% - 176px)'
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
      type: 'checkbox',
      onChange: function onChange(selectedRowKeys, selectedRows) {
        setSelectedRowKeys(selectedRowKeys);
        setSelectedRows(selectedRows);
      },
      selectedRowKeys: selectedRowKeys
    }
  })))), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: '编辑原因',
    width: 500,
    visible: NAVisible,
    onCancel: function onCancel() {
      return setNAVisible(false);
    },
    onOk: function onOk() {
      return NAform.submit();
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    name: "property",
    onFinish: onFinish,
    form: NAform,
    layout: "inline"
  }, /*#__PURE__*/_react.default.createElement(Item, {
    name: "REMARK",
    label: '不安排原因',
    className: "whole-line",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(TextArea, null)))));
};

function mapStateToProps(_ref8) {
  var periodQualityInspectionEntry = _ref8.periodQualityInspectionEntry;
  return _objectSpread({}, periodQualityInspectionEntry);
}

var _default = (0, _dva.connect)(mapStateToProps)(PeriodInspectionEntry);

exports.default = _default;