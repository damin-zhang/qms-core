"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _utils = require("../../../utils/utils");

var _columnUtil = require("../../../utils/columnUtil");

var _systemApi = require("../../../service/systemApi");

var _queryDataApi = require("../../../service/queryDataApi");

var _contextMenuFunc = require("../../../utils/contextMenuFunc");

var _ProcessDetail = _interopRequireDefault(require("../../engine/relationPage/ProcessDetail"));

var _umi = require("umi");

var _ProTable = _interopRequireDefault(require("./ProTable"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _excluded = ["dataList", "columns", "rowSelection", "showSubPage", "isTree", "engine", "model", "canDrag", "namespace", "listType", "width", "height", "rightClick", "afterDragFunc", "rowKey", "paging", "hasBtn"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _language$table = _language.default.table,
    fixed_column = _language$table.fixed_column,
    unpin_column = _language$table.unpin_column;

var Index = function Index(_ref) {
  var _ref$dataList = _ref.dataList,
      dataList = _ref$dataList === void 0 ? [] : _ref$dataList,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? [] : _ref$columns,
      rowSelection = _ref.rowSelection,
      showSubPage = _ref.showSubPage,
      isTree = _ref.isTree,
      _ref$engine = _ref.engine,
      engine = _ref$engine === void 0 ? {} : _ref$engine,
      model = _ref.model,
      canDrag = _ref.canDrag,
      namespace = _ref.namespace,
      listType = _ref.listType,
      width = _ref.width,
      height = _ref.height,
      rightClick = _ref.rightClick,
      afterDragFunc = _ref.afterDragFunc,
      rowKey = _ref.rowKey,
      paging = _ref.paging,
      hasBtn = _ref.hasBtn,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      processVisible = _useState6[0],
      setProcessVisible = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      processList = _useState8[0],
      setProcessList = _useState8[1];

  var _onContextMenu = function onContextMenu(e, record) {
    var clientX = e.clientX,
        clientY = e.clientY,
        target = e.target;
    var selectedRows = model.selectedRows;

    if (selectedRows && selectedRows.length === 0) {
      var newRecord = JSON.parse(JSON.stringify(record));
      if (newRecord.children) delete newRecord.children; // 没有选中数据时，点击右键时默认选择当前行

      rowSelection.onChange([newRecord.key], [newRecord], true);
      model.selectedRows = [newRecord];
      model.selectedRowKeys = [newRecord.key];
    } // selectedCellData 存放选中的单元格的内容


    model.selectedCellData = target.innerText; // selectedRowsData 存放选中的行数据及表头数据

    model.selectedRowsData = handleSelectedData();
    (0, _contextMenuFunc.showContextMenu)({
      left: clientX,
      top: clientY,
      model: model,
      engine: engine,
      hData: model.selectedRows,
      canExportData: true,
      isTable: true
    });
  };

  var moveRow = function moveRow(dragIndex, hoverIndex) {
    var list2 = _toConsumableArray(dataList);

    var newList = [];

    if (isTree) {
      var a = dataList[dragIndex];
      var b = dataList[hoverIndex];

      if (a.PID !== b.PID) {
        _antd.message.error('请拖动同一层级的数据');

        return;
      } else {
        newList.push(a, b);
        list2[dragIndex] = b;
        list2[hoverIndex] = a;
      }
    } else {
      if (dragIndex > hoverIndex) {
        list2.splice(hoverIndex, 0, dataList[dragIndex]);
        list2.splice(dragIndex + 1, 1);
        newList = list2.slice(hoverIndex, dragIndex + 1);
      } else {
        list2.splice(hoverIndex + 1, 0, dataList[dragIndex]);
        list2.splice(dragIndex, 1);
        newList = list2.slice(dragIndex, hoverIndex + 1);
      }
    }

    var dva = (0, _umi.getDvaApp)();

    dva._store.dispatch({
      type: 'common/moveRow',
      payload: {
        list: list2,
        newList: newList,
        listType: listType,
        isTree: isTree,
        namespace: namespace,
        afterDragFunc: afterDragFunc
      }
    });
  };

  var onEndReached = function onEndReached(_ref2) {
    var distanceFromEnd = _ref2.distanceFromEnd;

    if (distanceFromEnd >= -2 && !sessionStorage.getItem('onResize')) {
      var dva = (0, _umi.getDvaApp)();
      var page = model.page,
          _dataList = model.dataList,
          queryName = model.queryName,
          queryParams = model.queryParams,
          requestData = model.requestData;

      if (_dataList.length === page * 100) {
        if (requestData) {
          requestData(page + 1);
        } else {
          dva._store.dispatch({
            type: queryName,
            payload: _objectSpread({
              page: page + 1,
              dataList: _dataList
            }, queryParams)
          });
        }
      }
    }
  };

  var onColumnSort = function onColumnSort(sortBy) {
    var dataList = model.dataList,
        namespace = model.namespace;
    if (!dataList || dataList.length === 0) return;
    var order = sortBy.order,
        key = sortBy.key;
    var dva = (0, _umi.getDvaApp)();
    dataList.sort(function (a, b) {
      return a[key] > b[key] ? 1 : -1;
    });
    if (order === 'desc') dataList.reverse();

    dva._store.dispatch({
      type: "".concat(namespace, "/packet"),
      payload: {
        dataLength: dataLength,
        sortBy: sortBy
      }
    });
  }; // 处理选中数据


  var handleSelectedData = function handleSelectedData() {
    var selectedRows = model.selectedRows;
    var data = selectedRows;
    var dataLen = data.length;

    if (!dataLen) {
      return '';
    }

    var gridFieldList = engine.objectGrid.gridFieldList;
    var fieldLen = gridFieldList.length;
    var noList = [];
    var dateLen = [];
    var result = '';

    for (var i = 0; i < fieldLen; i++) {
      var _gridFieldList$i = gridFieldList[i],
          name = _gridFieldList$i.name,
          enName = _gridFieldList$i.enName,
          fieldName = _gridFieldList$i.fieldName,
          editor = _gridFieldList$i.editor,
          editParams = _gridFieldList$i.editParams;
      result += "".concat(_utils.isEnglish ? enName : name, "\t");
      noList.push(fieldName);

      if (editor === 'DateTime') {
        var _ref3 = editParams || {},
            format = _ref3.format;

        dateLen.push(format.length);
      } else {
        dateLen.push(false);
      }
    }

    result += "\n";

    for (var _i2 = 0; _i2 < dataLen; _i2++) {
      for (var j = 0; j < fieldLen; j++) {
        var item = data[_i2][noList[j]];

        if (!dateLen[j]) {
          var str = item ? item + '' : '';
          str && (str = str.replace(/[\r\n\t]/g, ''));
          result += "".concat(str || '', "\t");
        } else {
          var _str = (item || '').slice(0, dateLen[j]) + '';

          _str && (_str = _str.replace(/[\r\n\t]/g, ''));
          result += "".concat(_str, "\t");
        }
      }

      result += "\n";
    }

    return result;
  }; // 固定列


  var lockColumns = function lockColumns(columns, no) {
    if (model) {
      var fixedIndex = '';

      for (var i = 0; i < columns.length; i++) {
        if (columns[i].dataKey === no) {
          fixedIndex = i;
          break;
        }
      }

      columns.forEach(function (item, index) {
        if (index <= fixedIndex) {
          item.frozen = 'left';

          item.headerRenderer = function () {
            return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
              title: unpin_column
            }, /*#__PURE__*/_react.default.createElement(_icons.UnlockOutlined, {
              className: "tableIconUnlock",
              onClick: function onClick() {
                return unLockColumns(columns, item.dataKey);
              }
            })), item.title);
          };
        }
      });
      var dva = (0, _umi.getDvaApp)();

      dva._store.dispatch({
        type: "".concat(model.namespace, "/packet"),
        payload: {
          columns: columns
        }
      });
    }
  }; // 取消固定列


  var unLockColumns = function unLockColumns(columns, no) {
    if (model) {
      var fixedIndex = '';

      for (var i = 0; i < columns.length; i++) {
        if (columns[i].dataKey === no) {
          fixedIndex = i;
          break;
        }
      }

      columns.forEach(function (item, index) {
        if (index >= fixedIndex) {
          item.frozen = '';

          item.headerRenderer = function () {
            return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
              title: fixed_column
            }, /*#__PURE__*/_react.default.createElement(_icons.LockOutlined, {
              className: "tableIconLock",
              onClick: function onClick() {
                return lockColumns(columns, item.dataKey);
              }
            })), item.title);
          };
        }
      });
      var dva = (0, _umi.getDvaApp)();

      dva._store.dispatch({
        type: "".concat(model.namespace, "/packet"),
        payload: {
          columns: columns
        }
      });
    }
  };

  var loadPopup = function loadPopup(objectGrid) {
    var dva = (0, _umi.getDvaApp)();
    var pageFieldList = JSON.parse(JSON.stringify(objectGrid.gridFieldList)).filter(function (item) {
      return item.gType !== 4;
    }).map(function (item) {
      item.editor === 'RichText' || item.editor === 'TextArea' ? item.WLINE = true : item.WLINE = false;
      return item;
    });
    var payload = {
      objectANamespace: model.namespace,
      clickedMenu: {
        wType: 'objectColumnPage',
        caption: _utils.isEnglish ? 'Detail' : '明细',
        menuId: 'objectColumnPage'
      },
      columnModelData: {
        pageFieldList: pageFieldList,
        rType: true,
        columns: pageFieldList.length >= 9 ? 3 : 2,
        width: pageFieldList.length >= 9 ? 1000 : 800
      }
    };

    dva._store.dispatch({
      type: "popup/loadPopup",
      payload: payload
    });
  };

  var objectGrid = engine.objectGrid;
  var showDetails = null;

  if (objectGrid && objectGrid.gridOperation && objectGrid.gridOperation.some(function (item) {
    return item === 0;
  })) {
    showDetails = function showDetails() {
      return loadPopup(objectGrid);
    };
  }

  var getProcessList = function getProcessList(record) {
    var tableName = model.tableName,
        objectA = model.objectA,
        objectNo = model.objectNo;
    (0, _queryDataApi.queryProcessDetailData)({
      jsonData: record,
      tableName: tableName || objectNo,
      objectA: objectA || tableName
    }).then(function (res) {
      if (res) {
        setProcessVisible(true);
        setProcessList(res.dataList);
      }
    });
  };

  columns = objectGrid ? (0, _columnUtil.setMultipleColumns)(_toConsumableArray(objectGrid.gridFieldList), model ? model.namespace : '', model, lockColumns, !objectGrid.type, showSubPage) : (0, _columnUtil.setOldColumns)(columns);
  if (model) dataList = model.dataList;
  dataList = (0, _utils.generatorTableKey)(dataList);
  var dataLength = dataList.length;
  /* 处理装配页面分页 */

  if (model) {
    var _model$isSearch = model.isSearch,
        isSearch = _model$isSearch === void 0 ? false : _model$isSearch,
        objectNo = model.objectNo,
        queryParams = model.queryParams,
        _namespace = model.namespace,
        queryName = model.queryName,
        queryApi = model.queryApi;
    var changePage = false;

    if (model.queryApi) {
      changePage = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(current, pageSize) {
          var state;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  state = null; // 如果是搜索执行搜索分页, 如果是全部数据执行通用查询分页

                  if (!isSearch) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return (0, _queryDataApi.commonLikeQuery)(_objectSpread({
                    page: current,
                    pageSize: pageSize
                  }, queryParams)).then(function (data) {
                    if (data === undefined || !data.flag) {
                      return state = true;
                    } else {
                      var dva = (0, _umi.getDvaApp)();

                      dva._store.dispatch({
                        type: "".concat(_namespace, "/packet"),
                        payload: {
                          dataList: data.dataList,
                          dataTotal: data.total,
                          page: current,
                          pageSize: pageSize,
                          queryName: queryName,
                          queryParams: queryParams
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
                  _context.next = 14;
                  break;

                case 7:
                  if (!(objectNo === 'AUTHCODE')) {
                    _context.next = 11;
                    break;
                  }

                  (0, _systemApi.systemAuthcodeQuery)({
                    current: current,
                    pageSize: pageSize,
                    tableName: 'AUTHCODE'
                  });
                  _context.next = 14;
                  break;

                case 11:
                  _context.next = 13;
                  return queryApi(_objectSpread({
                    page: current,
                    pageSize: pageSize
                  }, queryParams)).then(function (data) {
                    if (data === undefined || !data.flag) {
                      return state = true;
                    } else {
                      var dva = (0, _umi.getDvaApp)();

                      dva._store.dispatch({
                        type: "".concat(_namespace, "/packet"),
                        payload: {
                          dataList: data.dataList,
                          dataTotal: data.total,
                          page: current,
                          pageSize: pageSize,
                          queryName: queryName,
                          queryParams: queryParams
                        }
                      });

                      return state = true;
                    }
                  }).then(function (state) {
                    return state;
                  }).catch(function () {
                    return state = true;
                  });

                case 13:
                  state = _context.sent;

                case 14:
                  return _context.abrupt("return", state);

                case 15:
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
    }

    paging = {
      size: 'small',
      total: model && model.dataTotal ? model.dataTotal : 0,
      changePage: changePage,
      showPaging: isTree || objectGrid && !objectGrid.type ? false : true,
      page: model && model.page ? model.page : 1,
      pageNumber: model && model.pageSize ? model.pageSize : 20
    };
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProTable.default, _extends({
    data: isTree || objectGrid && !objectGrid.type ? dataList.length > 0 && dataList[0].hasOwnProperty('ID') ? (0, _utils.ergodicRoot)(dataList, '0', 'PID', 'ID') : (0, _utils.systemErgodicRoot)(dataList) : dataList,
    dataTotal: model && model.dataTotal ? model.dataTotal : 0,
    paging: paging,
    columns: model && model.columns && model.columns.length ? model.columns : columns,
    manualRequest: true,
    request: /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref5, sorts) {
        var state;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _objectDestructuringEmpty(_ref5);

                if (!(!paging || !paging.changePage || JSON.stringify(sorts) !== JSON.stringify(sort))) {
                  _context2.next = 4;
                  break;
                }

                setSort(sorts);
                return _context2.abrupt("return", false);

              case 4:
                setLoading(true);
                _context2.next = 7;
                return paging.changePage(paging.page, paging.pageNumber);

              case 7:
                state = _context2.sent;

                if (!state) {
                  _context2.next = 12;
                  break;
                }

                setLoading(false);
                _context2.next = 14;
                break;

              case 12:
                setLoading(false);
                return _context2.abrupt("return", false);

              case 14:
                return _context2.abrupt("return", false);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref6.apply(this, arguments);
      };
    }(),
    isLoading: isLoading,
    setLoading: setLoading,
    hasBtn: hasBtn,
    moveRow: moveRow,
    canDrag: Boolean(canDrag),
    width: width,
    height: height,
    rowSelection: rowSelection,
    onEndReached: model ? onEndReached : null,
    dataLength: dataLength,
    expandColumnKey: (isTree || objectGrid && !objectGrid.type) && columns[0] ? columns[0].dataKey : null,
    rowKey: rowKey || 'key'
  }, restProps, {
    sortBy: model && model.sortBy,
    model: model,
    engine: engine,
    onColumnSort: onColumnSort,
    handleSelectedData: handleSelectedData,
    showDetails: showDetails,
    showSubPage: showSubPage,
    rowEventHandlers: {
      onClick: function onClick(_ref7) {
        var rowData = _ref7.rowData,
            event = _ref7.event;

        // 将选中行置于表格顶部
        // event.currentTarget.offsetParent.scrollTop = event.currentTarget.offsetTop
        if (rowSelection && typeof rowSelection.onChange === 'function') {
          rowSelection.onChange([rowData[rowKey || 'key']], [rowData]);
        }
      },
      onKeyUp: function onKeyUp(_ref8) {
        var event = _ref8.event;

        if (model && model.selectedRows) {
          // 当键盘按下ctrl+c时，复制选中行数据
          if (event.ctrlKey && event.keyCode === 67) {
            var data = handleSelectedData();

            if (data === '') {
              _antd.message.error('请选择需要复制的数据', 1);
            } else {
              var textareaDom = document.createElement('textarea');
              textareaDom.value = data;
              document.body.appendChild(textareaDom);
              textareaDom.select();
              document.execCommand('Copy');
              document.body.removeChild(textareaDom);

              _antd.message.success('复制成功', 1);
            }
          }

          var selectedRows = model.selectedRows;
          var newRow = null; // 当键盘按下'上键'，移动选中数据

          if (event.key === 'ArrowUp') {
            if (selectedRows.length !== 0 && selectedRows[0].index > 0) {
              newRow = dataList[selectedRows[0].index - 1];

              if (rowSelection && typeof rowSelection.onChange === 'function') {
                rowSelection.onChange([newRow.key], [newRow]);
              }

              model.selectedRows = [newRow];
              model.selectedRowKeys = [newRow.key];
            }
          } // 当键盘按下'下键'，移动选中数据


          if (event.key === 'ArrowDown') {
            if (selectedRows.length !== 0 && selectedRows[selectedRows.length - 1].index < dataList.length - 1) {
              newRow = dataList[selectedRows[selectedRows.length - 1].index + 1];

              if (rowSelection && typeof rowSelection.onChange === 'function') {
                rowSelection.onChange([newRow.key], [newRow]);
              }

              model.selectedRows = [newRow];
              model.selectedRowKeys = [newRow.key];
            }
          }
        }
      },
      onContextMenu: function onContextMenu(_ref9) {
        var rowData = _ref9.rowData,
            event = _ref9.event;
        event.preventDefault();

        if (typeof rightClick === 'function') {
          rightClick(rowData, true);
        } else if (model && engine) {
          _onContextMenu(event, rowData);
        }
      }
    },
    getProcessList: getProcessList
  })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    title: _utils.isEnglish ? 'The Process Of History' : '流程历史',
    visible: processVisible,
    width: "80%",
    onClose: function onClose() {
      return setProcessVisible(false);
    },
    zIndex: 999
  }, /*#__PURE__*/_react.default.createElement(_ProcessDetail.default, {
    dataList: processList
  })));
};

var _default = Index;
exports.default = _default;