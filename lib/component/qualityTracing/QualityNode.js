"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _utils = require("../../utils/utils");

var _traceApi = require("../../service/traceApi");

require("./index.css");

var _utils2 = require("../../pages/qualityTracing/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dataIndex = {
  ycl: 'FLOT',
  mb: 'CODE',
  dyb: 'PICINO',
  fb: 'PICINO',
  cp: 'FNUMBER',
  kh: 'CUSTOMERNAME',
  th: 'PALLET',
  xnycp: 'FNUMBER'
};

var QualityNode = function QualityNode(_ref) {
  var _ref$dataList = _ref.dataList,
      dataList = _ref$dataList === void 0 ? [] : _ref$dataList,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? null : _ref$type,
      _onDoubleClick = _ref.onDoubleClick,
      checkedNode = _ref.checkedNode,
      checkedType = _ref.checkedType,
      currentNode = _ref.currentNode,
      setCurrentNode = _ref.setCurrentNode,
      setDisplayPage = _ref.setDisplayPage,
      nodeType = _ref.nodeType,
      setNodeType = _ref.setNodeType,
      setNodeDetail = _ref.setNodeDetail,
      setNodeDetailType = _ref.setNodeDetailType,
      dispatch = _ref.dispatch;
  (0, _react.useEffect)(function () {
    return function () {
      dataList = [];
    };
  }, []);

  var openDetails = function openDetails(_ref2) {
    var key = _ref2.key;
    var value = {};

    switch (nodeType) {
      case 'ycl':
        (0, _utils.showLoading)();
        value.RECEIVINGID = currentNode.RECEIVINGID;
        value.FSUPPLIERID = currentNode.FSUPPLIERID;
        dispatch({
          type: 'traceabilityDetailCmp/queryDetails',
          payload: {
            value: value,
            BatchNodeDetail: true
          }
        });
        break;

      case 'mb':
        (0, _utils.showLoading)();
        value.CODE = currentNode.CODE;
        value.PKHAIRSTICK = currentNode.PKHAIRSTICK;
        dispatch({
          type: 'sketchyBarTraceCmp/queryDetails',
          payload: {
            value: value,
            BatchNodeDetail: true
          }
        });
        break;

      case 'fb':
        (0, _utils.showLoading)();
        value.CODE = currentNode.CODE;
        value.PKSQUAREBAR = currentNode.PKSQUAREBAR;
        dispatch({
          type: 'squareBarTraceCmp/queryDetails',
          payload: {
            value: value,
            BatchNodeDetail: true
          }
        });
        break;

      case 'cp':
        value.CONSIGNMENTID = currentNode.CONSIGNMENTID;
        dispatch({
          type: 'productDetailCmp/queryDetails',
          payload: {
            value: value,
            BatchNodeDetail: true
          }
        });
        break;

      case 'xnycp':
        value.CONSIGNMENTID = currentNode.CONSIGNMENTID;
        dispatch({
          type: 'productDetailCmp/queryDetails',
          payload: {
            value: value,
            BatchNodeDetail: true
          }
        });
        break;

      default:
        break;
    }
  };

  var openFQDYBInfo = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(item) {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _traceApi.queryFjdybInfoNodeData)([{
                PICINO: item.PICINO
              }]);

            case 2:
              data = _context.sent;
              openBatchInfo({
                type: 'fjdyb',
                item: data.fanjieResult[0]
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function openFQDYBInfo(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var openFQDYBDetails = function openFQDYBDetails() {
    var value = {
      PKREVERSETRUNCATEDROUNDBAR: currentNode.PICINO
    };
    dispatch({
      type: 'cutRoundBarTraceCmp/queryDetails',
      payload: {
        value: value,
        BatchNodeDetail: true
      }
    });
  };

  var openYpDetails = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(item) {
      var data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _traceApi.queryYpInfoNodeData)([{
                CODE: item.CODE
              }]);

            case 2:
              data = _context2.sent;
              openBatchInfo({
                type: 'yp',
                item: data.sampleResult
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function openYpDetails(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var getContextMenu = function getContextMenu(nodeType, item) {
    var menu = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);

    switch (nodeType) {
      case 'ycl':
        menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
          className: "qt-contextMenu"
        }, item.SUPPLIERNAME === '四川永祥新能源有限公司' && /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "1",
          onClick: function onClick() {
            return (0, _utils2.toXNYTrackPage)(item, 'ycl');
          }
        }, "\u8FFD\u6EAF\u591A\u6676\u7845\u4EA7\u54C1"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "2",
          onClick: function onClick() {
            openBatchInfo({
              type: nodeType,
              item: item
            });
          }
        }, "\u67E5\u770B\u6279\u6B21\u4FE1\u606F"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "3",
          onClick: openDetails
        }, "\u67E5\u770B\u6279\u6B21\u660E\u7EC6"));
        break;

      case 'mb':
        menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
          className: "qt-contextMenu"
        }, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "1",
          onClick: function onClick() {
            openYpDetails(item);
          }
        }, "\u67E5\u770B\u6837\u7247\u4FE1\u606F"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "2",
          onClick: function onClick() {
            openBatchInfo({
              type: nodeType,
              item: item
            });
          }
        }, "\u67E5\u770B\u6279\u6B21\u4FE1\u606F"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "3",
          onClick: openDetails
        }, "\u67E5\u770B\u6279\u6B21\u660E\u7EC6"));
        break;

      case 'dyb':
        menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
          className: "qt-contextMenu"
        }, item.MARK && item.MARK !== '0' && /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "1",
          onClick: function onClick() {
            openFQDYBInfo(item);
          }
        }, "\u67E5\u770B\u53CD\u622A\u77ED\u5706\u68D2\u4FE1\u606F"), item.MARK && item.MARK !== '0' && /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "2",
          onClick: openFQDYBDetails
        }, "\u67E5\u770B\u53CD\u622A\u77ED\u5706\u68D2\u660E\u7EC6"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "3",
          onClick: function onClick() {
            openBatchInfo({
              type: nodeType,
              item: item
            });
          }
        }, "\u67E5\u770B\u6279\u6B21\u4FE1\u606F"));
        break;

      case 'fb':
        menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
          className: "qt-contextMenu"
        }, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "1",
          onClick: function onClick() {
            openBatchInfo({
              type: nodeType,
              item: item
            });
          }
        }, "\u67E5\u770B\u6279\u6B21\u4FE1\u606F"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "2",
          onClick: openDetails
        }, "\u67E5\u770B\u6279\u6B21\u660E\u7EC6"));
        break;

      case 'cp':
      case 'xnycp':
        menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
          className: "qt-contextMenu"
        }, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "1",
          onClick: function onClick() {
            openBatchInfo({
              type: nodeType,
              item: item
            });
          }
        }, "\u67E5\u770B\u6279\u6B21\u4FE1\u606F"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: "2",
          onClick: openDetails
        }, "\u67E5\u770B\u6279\u6B21\u660E\u7EC6"));
        break;

      default:
        break;
    }

    return menu;
  };

  var openBatchInfo = function openBatchInfo(_ref5) {
    var item = _ref5.item,
        type = _ref5.type;
    setDisplayPage(true);
    setNodeDetail(item);
    setNodeDetailType(type);
  };

  var _onContextMenu = function onContextMenu(_ref6) {
    var item = _ref6.item,
        type = _ref6.type;
    setCurrentNode(item);
    setNodeType(type);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, dataList && dataList.length > 0 && dataList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
      overlay: getContextMenu(type, item),
      trigger: ['contextMenu'],
      key: "".concat(item.ID || '').concat(type === 'kh' ? item.CUSTOMERNAME + item.PALLET : '').concat(type === 'th' ? item.PALLET : '')
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: "".concat(item.ID || '').concat(type === 'kh' ? item.CUSTOMERNAME + item.PALLET : '').concat(type === 'th' ? item.PALLET : ''),
      className: [item.MARK && item.MARK !== '0' ? 'fq' : null, // 反切标识需更改
      checkedNode && item.ID === checkedNode.ID && checkedType === type ? 'checked' : null, currentNode && item.ID === currentNode.ID && type === nodeType ? 'active' : null, type === 'ycl' && item.SUPPLIERNAME === '四川永祥新能源有限公司' ? 'ycl-xny' : null, type === 'ycl' && item.type === 'H' ? 'ycl-hsl' : null // item.MARK && item.MARK !== '0' ? 'bgColor' : null
      ].join(" "),
      onDoubleClick: function onDoubleClick() {
        return _onDoubleClick({
          item: item,
          type: type
        });
      },
      onContextMenu: function onContextMenu() {
        return _onContextMenu({
          item: item,
          type: type
        });
      },
      key: item[dataIndex[type]]
    }, item.MARK && item.MARK !== '0' && /*#__PURE__*/_react.default.createElement("div", {
      className: "cutOff-mark"
    }), type && type !== 'kh' && /*#__PURE__*/_react.default.createElement("span", {
      className: "batch-no"
    }, item[dataIndex[type]]), type === 'kh' && /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: item.CUSTOMERNAME
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "batch-no"
    }, item.CUSTOMERNAME))));
  }));
};

var _default = QualityNode;
exports.default = _default;