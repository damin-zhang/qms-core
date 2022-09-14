"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _Search = _interopRequireDefault(require("../../common/search/Search"));

var _buttonFunc = require("../../../utils/buttonFunc");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _PropertyForm = _interopRequireDefault(require("../property/PropertyForm"));

var _reactSvg = require("react-svg");

var _index = _interopRequireDefault(require("./index.css"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../utils/utils");

var _dataToFormat = require("../../../utils/dataToFormat");

var _applicationApi = require("../../../service/applicationApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item = _antd.Menu.Item,
    SubMenu = _antd.Menu.SubMenu;

var svgDir = require.context('../../../assets/icon/');

var _language$common = _language.default.common,
    search = _language$common.search,
    advanced_search = _language$common.advanced_search,
    reset = _language$common.reset,
    please_select_node = _language$common.please_select_node,
    move_node_data = _language$common.move_node_data,
    switch_view = _language$common.switch_view,
    _language$message = _language.default.message,
    select_node_message = _language$message.buttonHoc.select_node_message,
    export_failed = _language$message.menu.export_failed,
    quality_inspection_entry = _language.default.menu.quality_inspection_entry,
    _language$table = _language.default.table,
    export_selected_data = _language$table.export_selected_data,
    export_table_data = _language$table.export_table_data,
    export_all_data = _language$table.export_all_data,
    copy_cell_data = _language$table.copy_cell_data,
    copy_select_data = _language$table.copy_select_data,
    copy_success = _language$table.copy_success,
    cell_data_null = _language$table.cell_data_null,
    confirm_export_data = _language$table.confirm_export_data,
    confirm_export_all_data = _language$table.confirm_export_all_data,
    table_menu = _language$table.table_menu,
    download_file = _language$table.download_file;

var _default = function _default(engine) {
  return function (WrappedComponent) {
    return function (props) {
      var childRef = (0, _react.useRef)();
      var supQuery = engine.supQuery,
          _engine$objectSupport = engine.objectSupportQueryFields,
          objectSupportQueryFields = _engine$objectSupport === void 0 ? [] : _engine$objectSupport,
          rType = engine.rType,
          PARAMS = engine.PARAMS,
          objectType = engine.objectType,
          faceType = engine.faceType;
      var _props$model = props.model,
          model = _props$model === void 0 ? {} : _props$model,
          dispatch = props.dispatch;
      var namespace = model.namespace,
          tableName = model.tableName,
          condition = model.condition,
          objectA = model.objectA,
          relevanceNo = model.relevanceNo,
          objectAData = model.objectAData,
          selectedRows = model.selectedRows,
          switchFileFormat = model.switchFileFormat,
          queryParams = model.queryParams,
          sortFields = model.sortFields,
          relationMenuList = model.relationMenuList,
          dataTotal = model.dataTotal,
          pageSize = model.pageSize,
          params = model.params;
      var pageMenus = engine.pageMenus,
          objectGrid = engine.objectGrid;
      var showSystemSubarea = params ? params.systemSubarea : false;

      if (selectedRows && selectedRows.length && pageMenus) {
        pageMenus = JSON.parse(JSON.stringify(pageMenus));
        pageMenus = pageMenus.map(function (item) {
          var disabled = false;

          if (item?.params?.scriptValue) {
            try {
              disabled = !eval("(record,selectedRows,userName,employeeName)=>{".concat(item.params.scriptValue, "}"))(selectedRows[0], selectedRows, localStorage.userName, localStorage.employeeName);
            } catch (error) {
              _antd.message.error("\u9875\u9762\u83DC\u5355\u811A\u672C\u8FD0\u884C\u5F02\u5E38\uFF01");

              console.log("".concat(error.name, " ").concat(error.message));
            }
          }

          return _objectSpread(_objectSpread({}, item), {}, {
            disabled: disabled
          });
        });
      }

      var _useState = (0, _react.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          showSearch = _useState2[0],
          setShowSearch = _useState2[1];

      if (objectSupportQueryFields.length) {
        objectSupportQueryFields.map(function (item) {
          if (item.editor === 'OnSelector') {
            return item.editor = 'TextBox';
          } //高级搜索时DB值列表整行展示


          if (item.editor === 'DBValueListMultiple' || item.editor === 'DBValueList') {
            return item.WLINE = 'true';
          }
        });
      }
      /**
       * @param {number} type 导出类型：0选中，1表格
       */


      var exportData = function exportData(type) {
        return function () {
          var selectedRows = model.selectedRows,
              tableName = model.tableName,
              dataList = model.dataList;

          if (type === 0 && !selectedRows.length) {
            _antd.message.warn('请选择要导出的行数据');

            return;
          }

          if (type === 1 && !dataList.length) {
            _antd.message.warn('没有可导出的数据');

            return;
          }

          var data = type ? dataList : selectedRows;
          var dataLen = data.length;
          (0, _utils.confirm)({
            title: confirm_export_data + dataLen,
            onOk: function onOk() {
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
                var caption = _utils.isEnglish ? enName : name;
                result += "\"".concat(caption, "\",");
                noList.push(fieldName);

                if (editor === 'DateTime') {
                  var _JSON$parse = JSON.parse(JSON.stringify(editParams) || '{}'),
                      format = _JSON$parse.format;

                  dateLen.push(format.length);
                } else {
                  dateLen.push(false);
                }
              }

              result += "\n";

              for (var _i2 = 0; _i2 < dataLen; _i2++) {
                var _loop = function _loop(j) {
                  var item = '';

                  if (noList[j] === '{INDEX}') {
                    item = _i2 + 1;
                  } else {
                    item = data[_i2][noList[j]];
                  }

                  var _gridFieldList$j = gridFieldList[j],
                      editor = _gridFieldList$j.editor,
                      editParams = _gridFieldList$j.editParams;

                  var _ref = editParams || {},
                      _ref$values = _ref.values,
                      values = _ref$values === void 0 ? [] : _ref$values;

                  if (editor === 'MapValueList') {
                    if (item && values.length) {
                      var vItem = values.find(function (value) {
                        return value.key === item;
                      }) || {};
                      item = vItem.name;
                    }
                  }

                  if (!dateLen[j]) {
                    var str = item ? item + '' : '';
                    str && (str = str.replace(/[\r\n\t]/g, ''));
                    result += "\"".concat(str || '', "\",");
                  } else {
                    var _str = (item || '').slice(0, dateLen[j]) + '';

                    _str && (_str = _str.replace(/[\r\n\t]/g, ''));
                    result += "\"".concat(_str, "\",");
                  }
                };

                for (var j = 0; j < fieldLen; j++) {
                  _loop(j);
                }

                result += "\n";
              }

              var blob = new Blob([result], {
                type: 'text/plain;charset=utf-8'
              }); //解决中文乱码问题

              blob = new Blob([String.fromCharCode(0xfeff), blob], {
                type: blob.type
              });
              var link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = "".concat(tableName, "_").concat((0, _dataToFormat.dateToFormat)(new Date()), ".csv");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          });
        };
      }; // 导出全部数据


      var exportAllData = function exportAllData() {
        (0, _utils.confirm)({
          title: confirm_export_all_data,
          onOk: function onOk() {
            var tableName = model.tableName,
                queryWord = model.queryWord,
                sortFields = model.sortFields,
                _model$normalSearch = model.normalSearch,
                normalSearch = _model$normalSearch === void 0 ? true : _model$normalSearch,
                relevanceNo = model.relevanceNo,
                objectA = model.objectA,
                objectAData = model.objectAData,
                searchFields = model.searchFields,
                condition = model.condition;
            var objectGrid = engine.objectGrid;
            var params = {
              condition: condition,
              page: 1,
              objectGridNo: objectGrid.no,
              tableName: tableName,
              queryWord: queryWord,
              sortFields: sortFields,
              searchFields: searchFields,
              normalSearch: normalSearch
            };

            if (relevanceNo) {
              params.relevanceNo = relevanceNo;
              params.objectA = objectA;
              params.objectAData = objectAData;
            }

            (0, _utils.showLoading)();
            (0, _applicationApi.commonExportData)(params).then(function (res) {
              if (res && res.flag === false) {
                _antd.message.warn(export_failed);
              }
            }).catch(function (err) {});
          }
        });
      }; // 复制单元格数据


      var copyCellData = function copyCellData() {
        var selectedCellData = model.selectedCellData;

        if (!selectedCellData) {
          return;
        }

        copyData(selectedCellData);
      }; // 复制选中行数据


      var copySelectData = function copySelectData() {
        if (!selectedRows.length) {
          _antd.message.warn('请先选择行数据');

          return;
        }

        var selectedRowsData = handleSelectedData();
        copyData(selectedRowsData);
      }; // 复制内容到粘贴板


      var copyData = function copyData(data) {
        if (data === '') {
          _antd.message.error(cell_data_null, 1);
        } else {
          var textareaDom = document.createElement('textarea');
          textareaDom.value = data;
          document.body.appendChild(textareaDom);
          textareaDom.select();
          document.execCommand('Copy');
          document.body.removeChild(textareaDom);

          _antd.message.success(copy_success, 1);
        }
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
          var _gridFieldList$i2 = gridFieldList[i],
              name = _gridFieldList$i2.name,
              enName = _gridFieldList$i2.enName,
              fieldName = _gridFieldList$i2.fieldName,
              editor = _gridFieldList$i2.editor,
              editParams = _gridFieldList$i2.editParams;
          result += "".concat(_utils.isEnglish ? enName : name, "\t");
          noList.push(fieldName);

          if (editor === 'DateTime') {
            var _ref2 = editParams || {},
                format = _ref2.format;

            dateLen.push(format.length);
          } else {
            dateLen.push(false);
          }
        }

        result += "\n";

        for (var _i3 = 0; _i3 < dataLen; _i3++) {
          for (var j = 0; j < fieldLen; j++) {
            var item = data[_i3][noList[j]];

            if (!dateLen[j]) {
              var str = item ? item + '' : '';
              str && (str = str.replace(/[\r\n\t]/g, ''));
              result += "".concat(str || '', "\t");
            } else {
              var _str2 = (item || '').slice(0, dateLen[j]) + '';

              _str2 && (_str2 = _str2.replace(/[\r\n\t]/g, ''));
              result += "".concat(_str2, "\t");
            }
          }

          result += "\n";
        }

        return result;
      };

      var onClick = function onClick(item) {
        return function () {
          if (props.onClick && typeof props.onClick === 'function') {
            props.onClick(item, engine, model);
          } else (0, _buttonFunc.clickBtn)(item, engine, model);
        };
      };

      var toogleSearch = function toogleSearch() {
        setShowSearch(!showSearch);
      };

      var advancedSearch = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var form, values;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return childRef.current.getForm();

                case 3:
                  form = _context.sent;
                  _context.next = 6;
                  return form.validateFields();

                case 6:
                  values = _context.sent;
                  objectSupportQueryFields.forEach(function (item) {
                    var editor = item.editor,
                        fieldName = item.fieldName,
                        editParams = item.editParams; // if (values[fieldName] === '') values[fieldName] = null

                    var val = values[fieldName];

                    if (val) {
                      if (editor === 'DateTime') {
                        var _ref4 = editParams || {},
                            format = _ref4.format;

                        values[fieldName] = val.map(function (i) {
                          return i && i.format(format);
                        });
                      } else if (editor === 'CheckEditor') {
                        values[fieldName] = _typeof(val) === 'object' ? val.join(',') : null;
                      } else if (editor === 'RichText') {
                        values[fieldName] = !val.isEmpty() ? val.toHTML() : null;
                      } else if (editor === 'DBValueList' || editor === 'ValueList' || editor === 'MapValueList') {
                        var _ref5 = editParams || {},
                            multiple = _ref5.multiple;

                        if (multiple) values[fieldName] = _typeof(val) === 'object' ? val.join(',') : null;
                      }
                    } // if (editor === 'CheckBox') {
                    // values[no] = val ? true : false
                    // }

                  }); // dispatch({ type: `common/advancedSearch`, payload: { itemNo, condition, queryWord: values, namespace } })

                  delete queryParams.keyWord;
                  dispatch({
                    type: "common/advancedSearch",
                    payload: _objectSpread(_objectSpread({}, queryParams), {}, {
                      tableName: tableName,
                      namespace: namespace,
                      searchFields: values
                    })
                  });
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](0);
                  console.log(_context.t0);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 12]]);
        }));

        return function advancedSearch() {
          return _ref3.apply(this, arguments);
        };
      }();

      var advancedReset = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var form;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return childRef.current.getForm();

                case 3:
                  form = _context2.sent;
                  form.resetFields();
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                  console.log(_context2.t0);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 7]]);
        }));

        return function advancedReset() {
          return _ref6.apply(this, arguments);
        };
      }();

      var onSearch = function onSearch(queryWord) {
        var values = _objectSpread(_objectSpread({}, queryParams), {}, {
          tableName: tableName,
          queryWord: queryWord,
          condition: condition,
          sortFields: sortFields,
          pageSize: pageSize
        });

        delete values.searchFields;

        if (faceType === 5) {// values.implclass = 'cn.hkdt.infinity.application.view.search.SearchClassViewNodeObjectEvent'
        } else if (engine.hasOwnProperty('pageMenus')) {// values.implclass = implclassMap.searchSingleData
        } else if (rType === 'relationpage') {
          // values = { ...values, objectA, relevanceNo, objectAData, implclass: implclassMap.searchRelationPageData }
          values = _objectSpread(_objectSpread({}, values), {}, {
            objectA: objectA,
            relevanceNo: relevanceNo,
            objectAData: objectAData
          });
        } else if (rType === 'classRelationpage') {
          if (!objectAData) {
            _antd.message.warning(please_select_node);

            return;
          }

          var classObjectNo = PARAMS.classObjectNo,
              classNodeObjectNo = PARAMS.classNodeObjectNo;
          values = _objectSpread(_objectSpread({}, values), {}, {
            classObjectNo: classObjectNo,
            classNodeObjectNo: classNodeObjectNo,
            classNodeData: objectAData // implclass: implclassMap.searchClassRelationPageData

          });
        }

        if (faceType === 5) {
          if (model.selectedNode && model.selectedNode.length && model.selectedNode[0].loadDataSet) {
            dispatch({
              type: "common/search",
              payload: _objectSpread(_objectSpread({}, values), {}, {
                namespace: namespace
              })
            });
          } else {
            _antd.message.warn(select_node_message);
          }
        } else {
          dispatch({
            type: "common/search",
            payload: _objectSpread(_objectSpread({}, values), {}, {
              namespace: namespace
            })
          });
        }
      };

      var toogleTable = function toogleTable() {
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            switchFileFormat: !switchFileFormat
          }
        });
      }; //获取图标


      var getIcon = function getIcon(item) {
        var newIcon = null;
        var IconView = null;

        if (item.icon) {
          if (item.icon.indexOf('third-') != -1) {
            //筛选第三方图标库的icons
            newIcon = item.icon.substring(6); //将第三方图标库标识去掉
          } else {
            item.icon = item.icon.substring(0, 1).toUpperCase() + item.icon.substring(1, item.icon.length);
            IconView = Icon["".concat(item.icon, "Outlined")];
          }
        }

        return item.icon && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
          style: {
            fill: item.color || '#000'
          },
          className: "buttonThirdIcons",
          src: svgDir("./".concat(newIcon, ".svg"))
        }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null));
      };

      var getMenus = function getMenus() {
        var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var parentId = arguments.length > 1 ? arguments[1] : undefined;
        var res = [];
        menus.forEach(function (item, index) {
          if (item.pId === parentId) {
            var name = item.name,
                enName = item.enName,
                id = item.id,
                disabled = item.disabled;

            var title = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.icon && getIcon(item), _utils.isEnglish ? enName : name);

            if (item.mType === 1) {
              res.push( /*#__PURE__*/_react.default.createElement(SubMenu, {
                key: index,
                title: title
              }, getMenus(menus, id)));
            } else {
              !disabled && res.push( /*#__PURE__*/_react.default.createElement(Item, {
                key: index,
                onClick: onClick(item)
              }, title));
            }
          }
        });
        return res;
      };

      var menus = pageMenus || relationMenuList || engine.relationMenuList || [];
      var Cmp = menus.map(function (item) {
        if (item.mType === 1 && item.pId === 0) {
          return /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
            disabled: item.disabled,
            trigger: ['click'],
            overlay: /*#__PURE__*/_react.default.createElement(_antd.Menu, null, getMenus(menus, item.id))
          }, /*#__PURE__*/_react.default.createElement(_antd.Button, null, _utils.isEnglish ? item.enName : item.name, " ", /*#__PURE__*/_react.default.createElement(Icon.DownOutlined, null)));
        } else if (item.pId === 0) {
          return /*#__PURE__*/_react.default.createElement(_antd.Button, {
            type: "primary",
            key: item.id,
            disabled: item.disabled,
            onClick: onClick(item),
            icon: item.icon && getIcon(item),
            style: {
              background: item.bg_color
            }
          }, /*#__PURE__*/_react.default.createElement("span", {
            style: {
              marginLeft: item.icon ? 8 : 0
            }
          }, _utils.isEnglish ? item.enName : item.name));
        }
      });

      var menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(Item, {
        disabled: selectedRows.length ? false : true,
        key: -1,
        onClick: exportData(0)
      }, export_selected_data), /*#__PURE__*/_react.default.createElement(Item, {
        disabled: dataTotal ? false : true,
        key: -2,
        onClick: exportData(1)
      }, export_table_data), /*#__PURE__*/_react.default.createElement(Item, {
        disabled: dataTotal ? false : true,
        key: -3,
        onClick: exportAllData
      }, export_all_data), /*#__PURE__*/_react.default.createElement(Item, {
        disabled: selectedRows.length ? false : true,
        key: -5,
        onClick: copySelectData
      }, copy_select_data));

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showSearch && /*#__PURE__*/_react.default.createElement("div", {
        className: _index.default.advancedSearchWrapper,
        style: {
          maxHeight: '30%',
          minHeight: objectSupportQueryFields && objectSupportQueryFields.length < 4 ? 'auto' : '110px'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Row, {
        className: (0, _classnames.default)([_index.default.advancedSearch, _index.default.advancedSearchFormWrapper])
      }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
        span: 24
      }, /*#__PURE__*/_react.default.createElement(_reactVirtualizedAutoSizer.default, {
        style: {
          width: '100%',
          height: 'auto'
        }
      }, function (_ref7) {
        var width = _ref7.width;
        return /*#__PURE__*/_react.default.createElement(_PropertyForm.default, {
          tableName: tableName,
          ref: childRef,
          columns: Math.round(width / 300) || 1,
          advancedSearch: true,
          pageFieldList: objectSupportQueryFields,
          namespace: namespace,
          labelLen: (((width || 700) - 60) / Math.round(width / 400) || 1) * 0.4 - 20,
          dataTotal: dataTotal
        });
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: _index.default.advancedSearchBtnWrapper,
        style: {
          marginBottom: '5px'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        style: {
          height: '70%'
        },
        type: "primary",
        htmlType: "submit",
        onClick: advancedSearch,
        icon: /*#__PURE__*/_react.default.createElement(Icon.SearchOutlined, null)
      }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        style: {
          height: '30%',
          minHeight: '32px'
        },
        onClick: advancedReset,
        icon: /*#__PURE__*/_react.default.createElement(Icon.DeleteOutlined, null)
      }))), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          width: objectGrid.noTableToolbar ? '100%' : showSystemSubarea ? 'calc(100% - 154px)' : 'calc(100% - 96px)',
          minHeight: objectGrid.noTableToolbar && '33px'
        }
      }, rType === 'classRelationpage' && /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: move_node_data
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        disabled: !(selectedRows && selectedRows.length > 0 && objectAData),
        type: "primary",
        onClick: function onClick() {
          return model.moveNodeData(selectedRows);
        },
        icon: /*#__PURE__*/_react.default.createElement(Icon.NodeCollapseOutlined, null)
      })), /*#__PURE__*/_react.default.createElement("div", null, Cmp), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          flexGrow: 1,
          minWidth: supQuery === true ? '20%' : 0
        }
      }, supQuery === true && /*#__PURE__*/_react.default.createElement(_Search.default, {
        onSearch: onSearch,
        disabled: showSearch ? true : false
      })), objectSupportQueryFields && objectSupportQueryFields[0] && supQuery === true && rType !== 'classRelationpage' && /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: advanced_search
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        style: {
          marginLeft: '5px'
        },
        onClick: toogleSearch,
        icon: /*#__PURE__*/_react.default.createElement(Icon.FileSearchOutlined, null)
      })), /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
        overlay: menu
      }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: table_menu
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary"
      }, /*#__PURE__*/_react.default.createElement(Icon.ToolOutlined, null))))), /*#__PURE__*/_react.default.createElement(WrappedComponent, props));
    };
  };
};

exports.default = _default;