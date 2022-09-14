"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _index = _interopRequireDefault(require("./index.less"));

var _EditorCmp = _interopRequireDefault(require("../property/EditorCmp"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _icons = require("@ant-design/icons");

var _language = _interopRequireDefault(require("@/locale/language"));

var _buttonFunc = require("../../../utils/buttonFunc");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _ObjectSelectorForm = _interopRequireDefault(require("../property/ObjectSelectorForm"));

var _ViewSelectorForm = _interopRequireDefault(require("../property/ViewSelectorForm"));

var _UserSelectorForm = _interopRequireDefault(require("../property/UserSelectorForm"));

var _NoSelectorForm = _interopRequireDefault(require("../property/NoSelectorForm"));

var _braftEditor = _interopRequireDefault(require("braft-editor"));

var _umi = require("umi");

var _lodash = require("lodash");

var _excluded = ["batchIndex"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    select_data = _language.default.message.property.select_data;

var BatchEdit = function BatchEdit(_ref, ref) {
  var _ref$pageFieldList = _ref.pageFieldList,
      pageFieldList = _ref$pageFieldList === void 0 ? [] : _ref$pageFieldList,
      clickedMenu = _ref.clickedMenu,
      namespace = _ref.namespace,
      objectBNameSpace = _ref.objectBNameSpace,
      onCancel = _ref.onCancel,
      columns = _ref.columns,
      initVal = _ref.initVal,
      _ref$list = _ref.list,
      list = _ref$list === void 0 ? {} : _ref$list,
      advancedSearch = _ref.advancedSearch,
      batchEdit = _ref.batchEdit,
      labelLen = _ref.labelLen,
      objectAData = _ref.objectAData,
      dataTotal = _ref.dataTotal,
      record = _ref.record,
      peptide = _ref.peptide,
      peptidePageList = _ref.peptidePageList;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      row = _useState2[0],
      setRow = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      canSubmit = _useState4[0],
      setCanSubmit = _useState4[1];

  var _useState5 = (0, _react.useState)(['form']),
      _useState6 = _slicedToArray(_useState5, 2),
      list1 = _useState6[0],
      setList = _useState6[1]; // eslint-disable-next-line no-unused-vars


  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      formList = _useState8[0],
      setFormList = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      formValues = _useState10[0],
      setFormValues = _useState10[1];

  var _useState11 = (0, _react.useState)('vertical'),
      _useState12 = _slicedToArray(_useState11, 2),
      layout = _useState12[0],
      setLayout = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      item = _useState14[0],
      setItem = _useState14[1];

  var _ref2 = item || {},
      editor = _ref2.editor,
      editParams = _ref2.editParams,
      no = _ref2.no;

  var childRef = (0, _react.useRef)();

  if (record.length) {
    initVal = record;
  }

  var selectData = function selectData(no) {
    var batchIndex = no.batchIndex;

    (0, _umi.getDvaApp)()._store.dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          var formList = form.getFieldsValue();
          formList[batchIndex][no] = rows[0].OBJECTNO;
          form.setFieldsValue(formList);
          setItem(null);
        }
      }
    });
  };

  var props = {
    list: list,
    pageFieldList: pageFieldList,
    columns: columns,
    namespace: namespace,
    advancedSearch: advancedSearch,
    batchEdit: batchEdit,
    labelLen: labelLen,
    objectAData: objectAData,
    tableName: clickedMenu && clickedMenu.hasOwnProperty('tableName') ? clickedMenu.tableName : null,
    objectId: clickedMenu && clickedMenu.hasOwnProperty('values') ? clickedMenu.values.pId : null,
    initVal: initVal,
    form: form,
    record: record,
    setCanSubmit: setCanSubmit,
    setFormValues: setFormValues,
    setItem: setItem,
    selectData: selectData
  }; // 设置list初始值

  (0, _react.useEffect)(function () {
    var rowList = [];

    if (record.length) {
      rowList = record;
      setList(rowList);
    } else {
      rowList = list1;
      setList(rowList);
    }
  }, [list1, record]); // 将图片编辑器放在最后

  if (pageFieldList.length) {
    pageFieldList.map(function (item, index) {
      if (item.editor === 'ImageEditor') {
        pageFieldList.push(item);
        delete pageFieldList[index];
      }
    });
  } // 添加行


  var handleAdd = function handleAdd() {
    var rowList = _toConsumableArray(list1);

    rowList.push('form');
    setList(rowList);
  }; // 提交表单


  var onFinish = function onFinish(values) {
    if (!canSubmit) {
      _antd.message.warn(common.wait_file_uploaded);

      return false;
    }

    var value = Object.values(values);
    setFormList(value);

    if (formValues.length) {
      value.map(function (item) {
        formValues.map(function (item1) {
          item.FLOCATION = item1.FLOCATION;
        });
      });
    }

    var newNameSpace = clickedMenu.wType !== 'classNodeObjectPropertyNo' ? namespace : objectBNameSpace;
    (0, _buttonFunc.confirmBtn)({
      values: _objectSpread(_objectSpread({}, clickedMenu.values), {}, {
        datas: value
      })
    }, clickedMenu, newNameSpace, onCancel, dataTotal);
  }; // 获取表单值


  (0, _react.useImperativeHandle)(ref, function () {
    return {
      Ok: function Ok() {
        form.submit();
      },
      getForm: function getForm() {
        return form;
      }
    };
  }); // 控制展示行或列

  var change = function change() {
    if (layout === 'inline') {
      layout = 'vertical';
      row = false;
    } else {
      layout = 'inline';
      row = true;
    }

    setLayout(layout);
    setRow(row);
  }; // 删减行


  var minus = function minus(index) {
    list1.splice(index, 1);
    var formList = Object.values(form.getFieldsValue());
    formList.splice(index, 1);
    form.setFieldsValue(formList);
    setList(list1);
    setFormList(formList);
  }; // 获取编辑器


  var getEditor = function getEditor(item1, index) {
    props.pageFieldList = [item1];

    if (record.length) {
      props.initVal = record[index];
      if (item1.editor === 'DateTime' && record[index][item1.fieldName]) props.initVal[item1.fieldName] = (0, _dayjs.default)(record[index][item1.fieldName]);
    }

    var batchIndex = index;
    return /*#__PURE__*/_react.default.createElement(_EditorCmp.default, _extends({}, props, {
      batchDefend: true,
      batchIndex: batchIndex
    }));
  }; // 弹窗


  var selectOk = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, batchIndex, _rest, _formList;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return childRef.current.Ok();

            case 2:
              res = _context.sent;

              if (JSON.stringify(res) === '{}') {
                _antd.message.warn(select_data);
              } else {
                if (peptide) {
                  peptidePageList.forEach(function (peptideObject) {
                    handleSelectValues(res, peptideObject.pageFieldList);
                  });
                } else {
                  handleSelectValues(res, pageFieldList);
                }

                if (res.hasOwnProperty('batchIndex')) {
                  batchIndex = res.batchIndex, _rest = _objectWithoutProperties(res, _excluded);
                  _formList = form.getFieldsValue();
                  _formList[batchIndex] = _objectSpread(_objectSpread({}, _formList[batchIndex]), _rest);
                  form.setFieldsValue(_formList);
                } else {
                  form.setFieldsValue(res);
                }

                setItem(null);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selectOk() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleSelectValues = function handleSelectValues(res, pageFieldList) {
    pageFieldList.forEach(function (item) {
      var editor = item.editor,
          fieldName = item.fieldName;
      if (!res[fieldName]) return;

      if (editor === 'DateTime') {
        res[fieldName] = (0, _dayjs.default)(res[fieldName]); // } else if (editor === 'UsersSelector' || editor === 'CheckEditor') {
      } else if (editor === 'CheckEditor') {
        res[fieldName] = res[fieldName].split(',');
      } else if (editor === 'Slider') {
        res[fieldName] = Number(res[fieldName]);
      } else if (editor === 'RichText') {
        res[fieldName] = _braftEditor.default.createEditorState(res[fieldName]);
      } else if (editor === 'ValueList' || editor === 'MapValueList') {
        if (item.editParams) {
          var _editParams = item.editParams;
          var multiple = _editParams.multiple;

          if (multiple) {
            var _list = res[fieldName].split(',');

            res[fieldName] = _list;
          }
        }
      }
    });
  };

  var objectProps = {
    onOk: selectOk,
    editParams: editParams,
    no: no,
    pageFieldList: pageFieldList,
    item: item
  };
  var container = {
    width: 700
  };

  if (editor === 'ObjectSelector' || editor === 'ViewSelector') {
    container.width = 1000;
    container.height = 600;
  }

  if (editor === 'UserSelector' || editor === 'UsersSelector') {
    container.width = 500;
    container.height = 300;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, !record.length && /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: function onClick() {
      return handleAdd();
    },
    type: "primary",
    style: {
      marginBottom: 16
    }
  }, "\u6DFB\u52A0"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: change,
    type: "primary",
    style: {
      marginBottom: 16
    }
  }, "\u5207\u6362")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflowX: 'scroll'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, null, /*#__PURE__*/_react.default.createElement(_antd.Row, {
    className: row ? ' ' : _index.default.hide,
    style: {
      flexWrap: 'nowrap'
    }
  }, pageFieldList.map(function (item) {
    var name = item.name,
        allowNull = item.allowNull;
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
      label: name,
      name: name,
      rules: [{
        required: allowNull ? false : true
      }],
      style: {
        width: '100px'
      }
    }));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    },
    className: row ? ' ' : _index.default.x
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (_index.default.warp, row ? _index.default.hide : ' ')
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, null, pageFieldList.map(function (item) {
    var name = item.name,
        allowNull = item.allowNull;
    return /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
      label: name,
      name: name,
      rules: [{
        required: allowNull ? false : true
      }]
    });
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: row ? ' ' : _index.default.x
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: row ? _index.default.y : _index.default.flex
  }, list1.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Form, {
      layout: layout,
      name: item + index,
      onFinish: onFinish,
      form: form,
      initialValues: initVal,
      style: {
        flexWrap: 'nowrap'
      }
    }, pageFieldList.map(function (item1) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '100px'
        }
      }, getEditor(item1, index));
    }), !record.length && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
      style: {
        lineHeight: '32px',
        marginTop: '5px',
        marginLeft: '20px'
      },
      onClick: minus.bind(minus, index)
    })));
  }))))), namespace && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({}, container, {
    title: common.select,
    visible: editor ? true : false,
    onCancel: function onCancel() {
      return setItem(null);
    },
    onOk: selectOk
  }), editor === 'ObjectSelector' && /*#__PURE__*/_react.default.createElement(_ObjectSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    form: form,
    objectAData: objectAData
  })), editor === 'ViewSelector' && /*#__PURE__*/_react.default.createElement(_ViewSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    form: form,
    objectAData: objectAData
  })), (editor === 'UserSelector' || editor === 'UsersSelector') && /*#__PURE__*/_react.default.createElement(_UserSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    editor: editor
  })), editor === 'OnSelector' && /*#__PURE__*/_react.default.createElement(_NoSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    objectNo: clickedMenu.objectNo
  })))));
};

var _default = (0, _react.forwardRef)(BatchEdit);

exports.default = _default;