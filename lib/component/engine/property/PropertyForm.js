"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _EditorCmp = _interopRequireDefault(require("./EditorCmp"));

var _buttonFunc = require("../../../utils/buttonFunc");

var _ObjectSelectorForm = _interopRequireDefault(require("./ObjectSelectorForm"));

var _ViewSelectorForm = _interopRequireDefault(require("./ViewSelectorForm"));

var _NewUserSelectorFrom = _interopRequireDefault(require("./NewUserSelectorFrom"));

var _NoSelectorForm = _interopRequireDefault(require("./NoSelectorForm"));

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _umi = require("umi");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _braftEditor = _interopRequireDefault(require("braft-editor"));

require("./index.css");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
    select_data = _language.default.message.property.select_data;
var TabPane = _antd.Tabs.TabPane;
var Panel = _antd.Collapse.Panel;

var PropertyForm = function PropertyForm(_ref, ref) {
  var _ref$allFieldList = _ref.allFieldList,
      allFieldList = _ref$allFieldList === void 0 ? [] : _ref$allFieldList,
      _ref$pageFieldList = _ref.pageFieldList,
      fieldList = _ref$pageFieldList === void 0 ? [] : _ref$pageFieldList,
      menuId = _ref.menuId,
      clickedMenu = _ref.clickedMenu,
      namespace = _ref.namespace,
      objectBNameSpace = _ref.objectBNameSpace,
      onCancel = _ref.onCancel,
      tiled = _ref.tiled,
      formLayout = _ref.formLayout,
      peptide = _ref.peptide,
      _ref$peptidePageList = _ref.peptidePageList,
      peptideList = _ref$peptidePageList === void 0 ? [] : _ref$peptidePageList,
      columns = _ref.columns,
      initVal = _ref.initVal,
      record = _ref.record,
      _ref$list = _ref.list,
      list = _ref$list === void 0 ? {} : _ref$list,
      visible = _ref.visible,
      rType = _ref.rType,
      wType = _ref.wType,
      advancedSearch = _ref.advancedSearch,
      batchEdit = _ref.batchEdit,
      labelLen = _ref.labelLen,
      objectAData = _ref.objectAData,
      dataTotal = _ref.dataTotal,
      _ref$dataClassField = _ref.dataClassField,
      dataClassField = _ref$dataClassField === void 0 ? {} : _ref$dataClassField,
      tabActiveKey = _ref.tabActiveKey,
      tableName = _ref.tableName,
      pageId = _ref.pageId,
      changeControl = _ref.changeControl,
      layout = _ref.layout;

  var _ref2 = dataClassField.editParams || {},
      tabInfo = _ref2.values;

  var hData = record instanceof Array ? record.length ? record[0] : {} : record;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var childRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      FLOCATION = _useState2[0],
      setFileLocation = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      item = _useState4[0],
      setItem = _useState4[1];

  var _ref3 = item || {},
      editor = _ref3.editor,
      editParams = _ref3.editParams,
      no = _ref3.no;

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      canSubmit = _useState6[0],
      setCanSubmit = _useState6[1];

  var _useState7 = (0, _react.useState)(initVal),
      _useState8 = _slicedToArray(_useState7, 2),
      initValLists = _useState8[0],
      setInitValLists = _useState8[1];

  var _useState9 = (0, _react.useState)({}),
      _useState10 = _slicedToArray(_useState9, 2),
      singleUserList = _useState10[0],
      setSingleUserList = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      formData = _useState12[0],
      setFormData = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      clearFields = _useState14[0],
      setClearFields = _useState14[1];

  var _useState15 = (0, _react.useState)(fieldList),
      _useState16 = _slicedToArray(_useState15, 2),
      pageFieldList = _useState16[0],
      setPageFieldList = _useState16[1];

  var _useState17 = (0, _react.useState)(peptideList),
      _useState18 = _slicedToArray(_useState17, 2),
      peptidePageList = _useState18[0],
      setPeptidePageList = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      peptideFieldInit = _useState20[0],
      setPeptideFieldInit = _useState20[1]; // const [DBEditor, setDBEditor] = useState([]);


  (0, _react.useEffect)(function () {
    if (initVal) {
      var _loop = function _loop(key) {
        allFieldList.forEach(function (item) {
          if (item.fieldName === key && item.editor === 'UserSelector') {
            initValLists[key] = hData[key] && hData[key].substr(hData[key].indexOf(':') + 1) || null;
          } else if (item.fieldName === key && item.editor === 'UsersSelector') {
            initValLists[key] = hData[key] ? hData[key].split(',').map(function (user) {
              return user.substr(user.indexOf(':') + 1);
            }) : [];
          } else if (item.fieldName === key && item.editor === 'JSONEditor' && initVal[key]) {
            initValLists[key] = JSON.parse(initVal[key]);
          } else if (item.fieldName === key && item.editor === 'DeptSelector' && item.editParams.DeptMultiple) {
            initValLists[key] = initVal[key] ? initVal[key].split(',') : [];
          } else if (item.fieldName === key && dataClassField && item.fieldName === dataClassField.fieldName) {
            if (tabActiveKey && item.editor === 'MapValueList') {
              initValLists[key] = tabInfo[Number(tabActiveKey)].name;
            } else if (tabActiveKey && item.editor === 'ValueList') {
              initValLists[key] = tabActiveKey;
            } else {
              initValLists[key] = tabInfo[0].name;
            }
          }
          /* else if (
          item.fieldName === key &&
          item.editor === 'DBValueListMultiple' &&
          item.editParams.canMultiSelect
          ) {
          //将DB值列表（多选）编辑器可多选的筛选出来
          setDBEditor(new Set([...DBEditor, item.fieldName])); //数组去重
          initValLists[key] = (hData[key] && hData[key].split(',')) || [];
          } */

        });
      };

      for (var key in initVal) {
        _loop(key);
      }
    }
  }, [initVal, allFieldList]); // 特殊的字段和编辑器值处理

  var formDataProcess = function formDataProcess(values) {
    var _loop2 = function _loop2(_key) {
      allFieldList.forEach(function (item) {
        if (item.fieldName === _key && item.editor === 'DeptSelector' && item.editParams.DeptMultiple && values[_key]) values[_key] = values[_key].length ? values[_key].join(',') : null;
      });
    };

    // 处理多部门选择器 将值转为字符串
    for (var _key in values) {
      _loop2(_key);
    }
    /* DBEditor.forEach((item) => {
      values[item] = values[item].join(','); //将DB值列表（多选）编辑器多选的值用逗号拼接显示
    }); */


    var carbonCopy = {};

    var _loop3 = function _loop3() {
      var arr = []; // push带：的值

      for (var i = 0; i < formData[key].length; i++) {
        if (values[key].indexOf(formData[key][i].substr(formData[key][i].indexOf(':') + 1)) > -1) {
          arr.push(formData[key][i]);
        }
      }

      var newArr = arr.map(function (item, index) {
        return item.substr(arr[index].indexOf(':') + 1);
      }); // push自由输入的值

      for (var _i2 = 0; _i2 < values[key].length; _i2++) {
        if (newArr.indexOf(values[key][_i2]) < 0) {
          arr.push(values[key][_i2]);
        }
      }

      arr = Array.from(new Set(arr));
      carbonCopy[key] = arr.length ? arr.join(',') : undefined;
    };

    for (var key in formData) {
      _loop3();
    } // 等待文件上传完成后才能提交表单


    if (!canSubmit) {
      _antd.message.warn(common.wait_file_uploaded);

      return false;
    }

    handleValues(values, pageFieldList);

    if (peptide) {
      peptidePageList.forEach(function (peptideObject) {
        handleValues(values, peptideObject.pageFieldList);
      });
    }

    delete values[''];
    return values;
  };

  var onFinish = function onFinish(values) {
    values = formDataProcess(values);
    var newNameSpace = clickedMenu.wType !== 'classNodeObjectPropertyNo' ? namespace : objectBNameSpace; // 判断是否新建

    var isChange = JSON.stringify(record) === '{}' ? true : (0, _utils.isUpdate)(record, values); // 判断表单数据是否修改

    changeControl ? (0, _buttonFunc.confirmBtn)({
      values: _objectSpread(_objectSpread({}, clickedMenu.values), {}, {
        data: _objectSpread(_objectSpread({}, values), {}, {
          FLOCATION: FLOCATION
        })
      })
    }, clickedMenu, newNameSpace, pageId, tabInfo, onCancel, dataTotal) : isChange ? (0, _buttonFunc.confirmBtn)({
      values: _objectSpread(_objectSpread({}, clickedMenu.values), {}, {
        data: _objectSpread(_objectSpread({}, values), {}, {
          FLOCATION: FLOCATION
        })
      })
    }, clickedMenu, newNameSpace, pageId, tabInfo, onCancel, dataTotal) : onCancel();
  };

  var handleValues = function handleValues(values, pageFieldList) {
    pageFieldList.forEach(function (item) {
      var editor = item.editor,
          fieldName = item.fieldName,
          editParams = item.editParams; // if (values[fieldName] === '') values[fieldName] = null

      var val = values[fieldName];

      if (val) {
        if (editor === 'DateTime') {
          var _ref4 = editParams || '',
              format = _ref4.format;

          if (!advancedSearch) {
            values[fieldName] = val.format(format);
          } else {
            values[fieldName] = val.map(function (i) {
              return i && i.format(format);
            });
          }
        } else if (editor === 'CheckEditor') {
          values[fieldName] = _typeof(val) === 'object' ? val.join(',') : null;
        } else if (editor === 'DBValueList' || editor === 'ValueList' || editor === 'MapValueList') {
          var _ref5 = editParams || {},
              multiple = _ref5.multiple;

          if (multiple) values[fieldName] = _typeof(val) === 'object' ? val.join(',') : null;
        } else if (editor === 'RichText') {
          values[fieldName] = !val.isEmpty() ? val.toHTML() : null;
        }
      }

      if (editor === 'CheckBox') {
        values[fieldName] = val ? true : false;
      }
    });
  };

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      Ok: function Ok() {
        form.submit();
      },
      getForm: function getForm() {
        return form;
      },
      getFormData: function getFormData() {
        return formDataProcess(form.getFieldsValue());
      }
    };
  });
  (0, _react.useEffect)(function () {
    // 多肽字段初始化
    if (wType !== 'objectColumnPage') peptideFieldRender();
  }, []);
  (0, _react.useEffect)(function () {
    if (rType && initVal) {
      form.resetFields();
    }
  }, [rType, form, initVal]);
  (0, _react.useEffect)(function () {
    var formValues = form.getFieldsValue();

    if (!peptideFieldInit) {
      (function () {
        var userEditorValues = {};
        var singleUserValue = {};
        var multipleUserValue = {};

        var _loop4 = function _loop4(key) {
          allFieldList.forEach(function (item) {
            if (item.fieldName === key && item.editor === 'UserSelector') {
              singleUserValue[key] = hData[key] && hData[key];
              userEditorValues[key] = hData[key] && hData[key].substr(hData[key].indexOf(':') + 1) || null;
              setSingleUserList(_objectSpread(_objectSpread({}, singleUserList), singleUserValue));
            } else if (item.fieldName === key && item.editor === 'UsersSelector') {
              multipleUserValue[key] = hData[key] && hData[key].split(',');
              userEditorValues[key] = hData[key] && hData[key].split(',').map(function (user) {
                return user.substr(user.indexOf(':') + 1);
              }) || [];
              setFormData(_objectSpread(_objectSpread({}, formData), multipleUserValue));
            }
          });
        };

        for (var key in formValues) {
          _loop4(key);
        }

        setPeptideFieldInit(true);
        form.setFieldsValue(_objectSpread(_objectSpread(_objectSpread({}, hData), initVal), userEditorValues));
      })();
    }
  }, [pageFieldList, peptidePageList]);

  var selectOk = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res, userValue, arr, oldValue, emailList;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return childRef.current.Ok();

            case 2:
              res = _context.sent;

              if (!(JSON.stringify(res) === '{}')) {
                _context.next = 6;
                break;
              }

              _antd.message.warn('请选择有效数据');

              return _context.abrupt("return");

            case 6:
              if (res) {
                if (editor === 'UserSelector') {
                  setSingleUserList(_objectSpread(_objectSpread({}, singleUserList), {}, _defineProperty({}, res.userFieldName, res.userFieldValue)));
                }

                if (editor === 'UsersSelector') {
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
              }

              if (JSON.stringify(res) === '{}') {
                _antd.message.warn('请选择有效数据');
              } else {
                if (peptide) {
                  peptidePageList.forEach(function (peptideObject) {
                    handleSelectValues(res, peptideObject.pageFieldList);
                  });
                } else {
                  handleSelectValues(res, pageFieldList);
                }

                form.setFieldsValue(res);
                setItem(null);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selectOk() {
      return _ref6.apply(this, arguments);
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

  var selectData = function selectData(no) {
    (0, _umi.getDvaApp)()._store.dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          form.setFieldsValue(_defineProperty({}, no, rows[0].OBJECTNO));
          setItem(null);
        }
      }
    });
  };

  var onValuesChange = function onValuesChange(values, allValues) {
    peptideFieldRender(_objectSpread(_objectSpread({}, hData), allValues));
  };

  var peptideFieldRender = function peptideFieldRender(formValues) {
    var record = formValues || hData;

    if (peptide) {
      var newPeptidePageList = JSON.parse(JSON.stringify(peptideList));
      newPeptidePageList.forEach(function (fieldArr, arrIndex) {
        var newFieldArr = JSON.parse(JSON.stringify(fieldArr.pageFieldList));
        var peptideFields = [];
        var otherFields = [];
        fieldArr.pageFieldList.forEach(function (fieldObj, fieldIndex) {
          var field = allFieldList.filter(function (field) {
            return field.fieldName === fieldObj.fieldName;
          })[0];
          if (field.editor !== 'ValueList' && field.editor !== 'MapValueList') return;
          var fieldValueList = field.editParams.values;
          var fieldValueParam = null;
          var otherParam = null;
          var fieldValue = record[field.fieldName]; // 根据编辑器类型取到当前字段的编辑器参数

          switch (field.editor) {
            case 'ValueList':
              fieldValueParam = fieldValueList.filter(function (item) {
                return item.name === fieldValue;
              })[0];
              otherParam = fieldValueList.filter(function (item) {
                return item.name !== fieldValue;
              });
              break;

            case 'MapValueList':
              fieldValueParam = fieldValueList.filter(function (item) {
                return item.key === fieldValue;
              })[0];
              otherParam = fieldValueList.filter(function (item) {
                return item.key !== fieldValue;
              });
              break;

            default:
              break;
          }

          if (!fieldValueParam || !fieldValueParam.peptideFields || !fieldValueParam.peptideFields.length) return; // 需要移除的字段

          otherParam.forEach(function (item) {
            if (item.peptideFields) {
              item.peptideFields.forEach(function (field) {
                otherFields.push(field);
              });
            }
          });
          fieldValueParam.peptideFields.forEach(function (item, i) {
            peptideFields.push({
              fieldName: item,
              fieldIndex: fieldIndex + i + 1,
              parentField: fieldObj.fieldName,
              WLINE: fieldValueParam.peptideFLine ? 1 : 0
            });
          });
        });

        var ergodicFields = function ergodicFields(fieldList, otherFields) {
          newFieldArr = newFieldArr.filter(function (field) {
            return otherFields.indexOf(field.fieldName) < 0;
          });
          var peptideFields = [];
          var newOtherFields = [];
          fieldList.forEach(function (fieldObj, index) {
            var field = allFieldList.filter(function (field) {
              return field.fieldName === fieldObj.fieldName;
            })[0];
            newFieldArr.splice(newFieldArr.findIndex(function (item) {
              return item.fieldName === fieldObj.parentField;
            }) + index + 1, 0, _objectSpread(_objectSpread({}, field), {}, {
              editAble: 1,
              WLINE: fieldObj.WLINE
            }));

            if (field.editor === 'ValueList' || field.editor === 'MapValueList') {
              var fieldValueList = field.editParams.values;
              var fieldValueParam = null;
              var otherParam = null;
              var fieldValue = record[field.fieldName]; // 根据编辑器类型取到当前字段的编辑器参数

              switch (field.editor) {
                case 'ValueList':
                  fieldValueParam = fieldValueList.filter(function (item) {
                    return item.name === fieldValue;
                  })[0];
                  otherParam = fieldValueList.filter(function (item) {
                    return item.name !== fieldValue;
                  });
                  break;

                case 'MapValueList':
                  fieldValueParam = fieldValueList.filter(function (item) {
                    return item.key === fieldValue;
                  })[0];
                  otherParam = fieldValueList.filter(function (item) {
                    return item.key !== fieldValue;
                  });
                  break;

                default:
                  break;
              }

              if (fieldValueParam && fieldValueParam.peptideFields && fieldValueParam.peptideFields.length) {
                fieldValueParam.peptideFields.forEach(function (item, i) {
                  peptideFields.push({
                    fieldName: item,
                    fieldIndex: fieldObj.fieldIndex + i + 1,
                    parentField: fieldObj.fieldName,
                    WLINE: fieldValueParam.peptideFLine ? 1 : 0
                  });
                }); // 需要移除的字段

                otherParam.forEach(function (item) {
                  if (item.peptideFields) {
                    item.peptideFields.forEach(function (field) {
                      newOtherFields.push(field);
                    });
                  }
                });
              }
            }
          });

          if (peptideFields.length || newOtherFields.length) {
            ergodicFields(peptideFields, newOtherFields);
          }
        };

        ergodicFields(peptideFields, otherFields);
        var newClearFields = {};
        otherFields.forEach(function (item) {
          newClearFields[item] = null;
        });
        setClearFields(_objectSpread(_objectSpread({}, clearFields), newClearFields));
        newPeptidePageList[arrIndex].pageFieldList = newFieldArr;
      });
      setPeptidePageList(_toConsumableArray(newPeptidePageList));
    } else {
      var newPageFieldList = JSON.parse(JSON.stringify(fieldList));
      var peptideFields = [];
      var otherFields = [];
      newPageFieldList.forEach(function (fieldObj, fieldIndex) {
        var field = allFieldList.filter(function (field) {
          return field.fieldName === fieldObj.fieldName;
        })[0];
        if (!field || field.editor !== 'ValueList' && field.editor !== 'MapValueList') return;
        var fieldValueList = field.editParams.values;
        var fieldValueParam = null;
        var otherParam = null;
        var fieldValue = record[field.fieldName]; // 根据编辑器类型取到当前字段的编辑器参数

        switch (field.editor) {
          case 'ValueList':
            fieldValueParam = fieldValueList.filter(function (item) {
              return item.name === fieldValue;
            })[0];
            otherParam = fieldValueList.filter(function (item) {
              return item.name !== fieldValue;
            });
            break;

          case 'MapValueList':
            fieldValueParam = fieldValueList.filter(function (item) {
              return item.key === fieldValue;
            })[0];
            otherParam = fieldValueList.filter(function (item) {
              return item.key !== fieldValue;
            });
            break;

          default:
            break;
        }

        if (!fieldValueParam || !fieldValueParam.peptideFields || !fieldValueParam.peptideFields.length) return; // 需要移除的字段

        otherParam.forEach(function (item) {
          if (item.peptideFields) {
            item.peptideFields.forEach(function (field) {
              otherFields.push(field);
            });
          }
        });
        fieldValueParam.peptideFields.forEach(function (item, i) {
          peptideFields.push({
            fieldName: item,
            fieldIndex: fieldIndex + i + 1,
            parentField: field.fieldName,
            WLINE: fieldValueParam.peptideFLine ? 1 : 0
          });
        });

        var ergodicFields = function ergodicFields(fieldList, otherFields) {
          newPageFieldList = newPageFieldList.filter(function (field) {
            return otherFields.indexOf(field.fieldName) < 0;
          });
          var peptideFields = [];
          var newOtherFields = [];
          fieldList.forEach(function (fieldObj, index) {
            var field = allFieldList.filter(function (field) {
              return field.fieldName === fieldObj.fieldName;
            })[0];
            newPageFieldList.splice(fieldObj.fieldIndex, 0, _objectSpread(_objectSpread({}, field), {}, {
              editAble: 1,
              WLINE: fieldObj.WLINE
            }));

            if (field.editor === 'ValueList' || field.editor === 'MapValueList') {
              var _fieldValueList = field.editParams.values;
              var _fieldValueParam = null;
              var _otherParam = null;
              var _fieldValue = record[field.fieldName]; // 根据编辑器类型取到当前字段的编辑器参数

              switch (field.editor) {
                case 'ValueList':
                  _fieldValueParam = _fieldValueList.filter(function (item) {
                    return item.name === _fieldValue;
                  })[0];
                  _otherParam = _fieldValueList.filter(function (item) {
                    return item.name !== _fieldValue;
                  });
                  break;

                case 'MapValueList':
                  _fieldValueParam = _fieldValueList.filter(function (item) {
                    return item.key === _fieldValue;
                  })[0];
                  _otherParam = _fieldValueList.filter(function (item) {
                    return item.key !== _fieldValue;
                  });
                  break;

                default:
                  break;
              }

              if (_fieldValueParam && _fieldValueParam.peptideFields && _fieldValueParam.peptideFields.length) {
                _fieldValueParam.peptideFields.forEach(function (item, i) {
                  peptideFields.push({
                    fieldName: item,
                    parentField: field.fieldName,
                    fieldIndex: fieldObj.fieldIndex + i + 1,
                    WLINE: _fieldValueParam.peptideFLine ? 1 : 0
                  });
                }); // 需要移除的字段


                _otherParam.forEach(function (item) {
                  if (item.peptideFields) {
                    item.peptideFields.forEach(function (field) {
                      newOtherFields.push(field);
                    });
                  }
                });
              }
            }
          });

          if (peptideFields.length || newOtherFields.length) {
            ergodicFields(peptideFields, newOtherFields);
          }
        };

        ergodicFields(peptideFields, otherFields);
        var newClearFields = {};
        otherFields.forEach(function (item) {
          newClearFields[item] = null;
        });
        setClearFields(_objectSpread(_objectSpread({}, clearFields), newClearFields));
      });
      setPageFieldList(_toConsumableArray(newPageFieldList));
    }
  };
  /* 获取多肽表单每个折叠面板的标题
    1.item：为每个折叠面板Form的数据
    2.有多选的字段，则标题加红色*号显示，没有则正常显示
  */


  var getTableTitle = function getTableTitle(item) {
    var name = item.name,
        pageFieldList = item.pageFieldList;
    var flag = pageFieldList.some(function (item) {
      return !item.allowNull;
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "title-name"
    }, flag && /*#__PURE__*/_react.default.createElement("span", {
      className: "title-name-star"
    }, "*"), (0, _utils.getCaption)(item));
  };

  var props = {
    list: list,
    pageFieldList: pageFieldList,
    form: form,
    setFileLocation: setFileLocation,
    columns: columns,
    namespace: namespace,
    advancedSearch: advancedSearch,
    batchEdit: batchEdit,
    setItem: setItem,
    selectData: selectData,
    labelLen: labelLen,
    objectAData: objectAData,
    tableName: tableName || (clickedMenu && clickedMenu.hasOwnProperty('tableName') ? clickedMenu.tableName : null),
    objectId: clickedMenu && clickedMenu.hasOwnProperty('values') ? clickedMenu.values.pId : null,
    initVal: initVal,
    record: record,
    clickedMenu: clickedMenu,
    setCanSubmit: setCanSubmit,
    peptide: peptide,
    peptidePageList: peptidePageList,
    formLayout: formLayout
  };
  var objectProps = {
    onOk: selectOk,
    editParams: editParams,
    no: no,
    pageFieldList: pageFieldList,
    item: item,
    peptide: peptide,
    peptidePageList: peptidePageList,
    formLayout: formLayout
  };
  var container = {
    width: 700
  };

  if (editor === 'ObjectSelector' || editor === 'ViewSelector') {
    container.width = 1000;
    container.height = 600;
  }

  if (editor === 'UserSelector' || editor === 'UsersSelector') {
    container.width = 1000;
    container.height = 600;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    className: "propertyForm",
    onFinish: onFinish,
    name: menuId,
    form: form,
    layout: formLayout || 'inline',
    initialValues: initValLists,
    onValuesChange: onValuesChange
  }, layout), peptide ? tiled ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    style: {
      width: '100%'
    }
  }, peptidePageList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: item.id || item.no
    }, /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: (0, _utils.getCaption)(item),
      key: item.id || item.no,
      className: "tiledTabPane"
    }, /*#__PURE__*/_react.default.createElement(_EditorCmp.default, _extends({}, props, {
      pageFieldList: item.pageFieldList
    }))));
  }))) : /*#__PURE__*/_react.default.createElement(_antd.Collapse, {
    defaultActiveKey: peptidePageList[0] && peptidePageList[0].id,
    style: {
      width: '100%'
    },
    className: "propertyCollapse"
  }, peptidePageList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Panel, {
      header: getTableTitle(item),
      key: item.id
    }, /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: item.id
    }, /*#__PURE__*/_react.default.createElement(_EditorCmp.default, _extends({}, props, {
      pageFieldList: item.pageFieldList
    }))));
  })) : /*#__PURE__*/_react.default.createElement(_EditorCmp.default, props)), namespace && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({}, container, {
    title: common.select,
    visible: editor ? true : false,
    onCancel: function onCancel() {
      return setItem(null);
    },
    onOk: selectOk
  }), editor === 'ObjectSelector' && /*#__PURE__*/_react.default.createElement(_ObjectSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    form: form,
    peptide: peptide,
    peptidePageList: peptidePageList,
    objectAData: objectAData
  })), editor === 'ViewSelector' && /*#__PURE__*/_react.default.createElement(_ViewSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    form: form,
    objectAData: objectAData
  })), (editor === 'UserSelector' || editor === 'UsersSelector') && /*#__PURE__*/_react.default.createElement(_NewUserSelectorFrom.default, _extends({}, objectProps, {
    ref: childRef,
    form: form,
    editor: editor
  })), editor === 'OnSelector' && /*#__PURE__*/_react.default.createElement(_NoSelectorForm.default, _extends({}, objectProps, {
    ref: childRef,
    form: form,
    objectNo: clickedMenu.objectNo
  })))));
};

var _default = (0, _react.forwardRef)(PropertyForm);

exports.default = _default;