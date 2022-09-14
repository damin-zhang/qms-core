"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _groupBy = _interopRequireDefault(require("lodash/groupBy"));

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

var _braftEditor = _interopRequireDefault(require("braft-editor"));

var _DragModal = _interopRequireDefault(require("../common/drag/DragModal"));

var _NewsIcon = _interopRequireDefault(require("../../assets/NewsIcon.png"));

var _NoticeIcon = _interopRequireDefault(require("../../component/common/NoticeIcon"));

var _style = _interopRequireDefault(require("../../component/common/NoticeIcon/style.less"));

var _SearchInput = _interopRequireDefault(require("../../component/common/search/SearchInput"));

var _userSelectForm = _interopRequireDefault(require("../userManage/userSelectForm"));

var _MessageNotification = _interopRequireDefault(require("./MessageNotification"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _excluded = ["allList", "toDoList", "theme", "NoticeModelCmp", "userName", "showTab"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var common = _language.default.common,
    noticeLanguage = _language.default.header.user.notice,
    message_sent_success = _language.default.message.notice.message_sent_success;

_dayjs.default.extend(_relativeTime.default);

var Item = _antd.Form.Item;
var TextArea = _antd.Input.TextArea;
var Option = _antd.Select.Option;

var NoticeCmp = function NoticeCmp(_ref) {
  var allList = _ref.allList,
      toDoList = _ref.toDoList,
      theme = _ref.theme,
      NoticeModelCmp = _ref.NoticeModelCmp,
      userName = _ref.userName,
      showTab = _ref.showTab,
      notice = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var childRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      replyMessageModalVisible = _useState2[0],
      setReplyMessageModalVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      userSelectorModalVisible = _useState4[0],
      setUserSelectorModalVisible = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      noticeVisible = _useState6[0],
      setNoticeVisible = _useState6[1];

  var dispatch = notice.dispatch,
      selectedRowKeys = notice.selectedRowKeys,
      _notice$selectedRows = notice.selectedRows,
      selectedRows = _notice$selectedRows === void 0 ? [] : _notice$selectedRows,
      dataList = notice.dataList;
  var data = allList;
  var html = selectedRows.length && selectedRows[0].html;
  (0, _react.useEffect)(function () {
    if (replyMessageModalVisible) {
      var sMessage = selectedRows ? selectedRows[0].sMessage : ''; // 将HTML字符串转换为编辑器所需要的EditorState实例

      var editorState = _braftEditor.default.createEditorState(sMessage); // 发送人为当前用户


      form.setFieldsValue({
        senderId: userName,
        title: selectedRows ? selectedRows[0].title : '',
        sMessage: html ? editorState : sMessage
      }); // 接收人的默认值

      if (selectedRows && selectedRows.length > 0) {
        var userIdArr = [];
        selectedRows.forEach(function (row) {
          userIdArr.indexOf(row.senderId) < 0 && userIdArr.push(row.senderId);
        });
        form.setFieldsValue({
          userName: userIdArr.join(',')
        });
      }
    }
  }, [userName, selectedRows, replyMessageModalVisible, html, form]);
  /**
   * 点击事件
   * @param item 数据详情
   */

  var handle = function handle() {
    setNoticeVisible(!noticeVisible);
  };

  var onItemClick = function onItemClick(item) {
    if (item.key === 'ellipsis') {
      if (item.type === 'notice') {
        setNoticeVisible(!noticeVisible);
        dispatch({
          type: 'notice/query'
        });
      } else if (item.type === 'A') {
        dispatch({
          type: 'tab/addTab',
          payload: {
            namespace: 'UpcomingTasks'
          }
        });
        dispatch({
          type: 'UpcomingTasks/query'
        });
      }
    } else {
      switch (item.type) {
        case 'notice':
          setNoticeVisible(!noticeVisible);
          dispatch({
            type: 'notice/query'
          });
          break;
        // A: 待办任务中类型为未开始的数据

        case 'A':
          dispatch({
            type: 'tab/addTab',
            payload: {
              namespace: 'UpcomingTasks'
            }
          });
          dispatch({
            type: 'UpcomingTasks/query',
            payload: {
              id: item.ID,
              selectedRows: [item]
            }
          });
          dispatch({
            type: 'UpcomingTasks/update',
            payload: {
              selectedRowKey: [item.ID],
              selectedRows: [item],
              showTab: true
            }
          });
          dispatch({
            type: 'UpcomingTasks/getModel',
            payload: {
              selectedRows: [item]
            }
          });
          break;

        case 'actToDo':
          dispatch({
            type: 'tab/addTab',
            payload: {
              namespace: 'TodoProcess'
            }
          });
          dispatch({
            type: 'TodoProcess/query'
          });
          dispatch({
            type: 'notice/edit',
            payload: {
              selectedRowKey: item.ID,
              data: data
            }
          });
          break;

        default:
          break;
      }
    }

    dispatch({
      type: 'notice/onPopupVisibleChange'
    });
  };

  var onPopupVisibleChange = function onPopupVisibleChange() {
    dispatch({
      type: 'notice/onPopupVisibleChange'
    });
  };

  var onViewMore = function onViewMore() {};

  var onClear = function onClear() {};

  function getNoticeData(notices) {
    if (notices.length === 0) {
      return {};
    }

    var newNotices = notices.map(function (notice) {
      var newNotice = _objectSpread({}, notice);

      if (newNotice.cTime) {
        newNotice.datetime = (0, _dayjs.default)(notice.cTime).fromNow();
      } // transform id to item key


      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }

      if (newNotice.sMessage) {
        newNotice.description = newNotice.sMessage;
      }

      newNotice.avatar = _NewsIcon.default;
      return newNotice;
    });
    return (0, _groupBy.default)(newNotices, 'type');
  } // 标记已读


  var markedRead = function markedRead() {
    dispatch({
      type: 'notice/markedRead',
      payload: {
        data: data,
        selectedRows: selectedRows,
        dataList: dataList
      }
    });
  }; // 回复消息


  var replyMessage = function replyMessage() {
    if (selectedRows && selectedRows.length > 0) {
      setReplyMessageModalVisible(!replyMessageModalVisible);
    } else {
      _antd.message.warn(noticeLanguage.prompt_message);
    }
  };

  var selectUserOk = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var userIdArrStr, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userIdArrStr = form.getFieldsValue().userName;
              _context.next = 3;
              return childRef.current.Ok();

            case 3:
              res = _context.sent;
              userIdArrStr += ",".concat(res.N9);
              form.setFieldsValue({
                userName: userIdArrStr
              });
              setUserSelectorModalVisible(!userSelectorModalVisible);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function selectUserOk() {
      return _ref2.apply(this, arguments);
    };
  }();

  var selectOkReplyMessage = function selectOkReplyMessage() {
    form.validateFields().then(function () {
      var replyMessageContent = form.getFieldsValue().sMessage; // replyMessageContent && !replyMessageContent.isEmpty()
      //   ? (replyMessageContent = replyMessageContent.toHTML())
      //   : null

      var data = _objectSpread(_objectSpread({}, form.getFieldsValue()), {}, {
        sMessage: replyMessageContent
      });

      dispatch({
        type: 'notice/replyMessage',
        payload: {
          hData: selectedRows,
          data: data,
          callback: function callback() {
            form.setFieldsValue({
              title: ''
            });
            form.setFieldsValue({
              sMessage: null
            });
            setReplyMessageModalVisible(!replyMessageModalVisible);
            markedRead();

            _antd.message.info(message_sent_success);

            dispatch({
              type: 'notice/packet',
              payload: {
                selectedRowKeys: []
              }
            });
          }
        }
      });
    });
  };

  var getNotciceCount = function getNotciceCount() {
    var count = 0;
    var data = allList;
    data.forEach(function (item) {
      if (item.status === 0) {
        count++;
      }
    });
    return count;
  };

  var footer = [];
  footer.push( /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: markedRead,
    disabled: selectedRows.length > 0 ? false : true
  }, noticeLanguage.mark_read), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: replyMessage,
    label: notice.reply_message,
    disabled: selectedRows.length > 0 ? false : true
  }, noticeLanguage.reply_message)), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: handle
  }, noticeLanguage.cancel)));
  var objectProps = {
    onOk: selectUserOk
  };
  var noticeData = getNoticeData(data);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'inline',
      color: theme ? '#000' : '#fff',
      padding: getNotciceCount(data) > 99 ? '0 18px 0 6px' : ''
    }
  }, /*#__PURE__*/_react.default.createElement(_NoticeIcon.default, {
    className: _style.default.action,
    count: getNotciceCount(data),
    overflowCount: 999,
    onItemClick: onItemClick,
    onViewMore: onViewMore,
    onClear: onClear,
    onPopupVisibleChange: onPopupVisibleChange,
    theme: theme
  }, /*#__PURE__*/_react.default.createElement(_NoticeIcon.default.Tab, {
    tabKey: "notice",
    list: noticeData['notice'] ? noticeData['notice'].filter(function (item) {
      return item.status === 0;
    }) : noticeData['notice'],
    title: noticeLanguage.notification,
    emptyText: noticeLanguage.notice_empty_text
  })), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: noticeLanguage.notification,
    height: 600,
    width: "70%",
    footer: footer,
    visible: noticeVisible,
    onCancel: handle
  }, /*#__PURE__*/_react.default.createElement(_MessageNotification.default, notice)), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    namespace: "sendMessagesModal",
    width: '70%',
    height: '100%',
    title: noticeLanguage.send_messages,
    visible: replyMessageModalVisible,
    onOk: selectOkReplyMessage,
    onCancel: function onCancel() {
      return setReplyMessageModalVisible(!replyMessageModalVisible);
    }
  }, replyMessageModalVisible && /*#__PURE__*/_react.default.createElement(_antd.Form, {
    labelCol: {
      span: 3
    },
    className: "propertyForm",
    form: form
  }, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: "userName",
    label: noticeLanguage.receiver,
    onClick: function onClick() {
      return setUserSelectorModalVisible(!userSelectorModalVisible);
    }
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: "title",
    label: noticeLanguage.title,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "sMessage",
    label: noticeLanguage.content
  }, html ? /*#__PURE__*/_react.default.createElement(_braftEditor.default, {
    contentStyle: {
      height: 350
    },
    maxLength: 20000,
    style: {
      border: '1px solid #d9d9d9',
      width: '100%'
    }
  }) : /*#__PURE__*/_react.default.createElement(TextArea, {
    rows: 10
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "senderId",
    label: noticeLanguage.sender
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })))), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    namespace: "selectorModal",
    width: 500,
    height: 550,
    title: common.select,
    visible: userSelectorModalVisible,
    onOk: selectUserOk,
    onCancel: function onCancel() {
      return setUserSelectorModalVisible(!userSelectorModalVisible);
    }
  }, userSelectorModalVisible && /*#__PURE__*/_react.default.createElement(_userSelectForm.default, _extends({
    ref: childRef
  }, objectProps, {
    editor: 'UsersSelector'
  }))));
};

var _default = NoticeCmp; // 数据结构
// {
//   id: '000000001',
//   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
//   title: '你收到了 14 份新周报',
//   datetime: '2017-08-09',
//   type: 'notice'
// },
// {
//   id: '000000002',
//     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
//   title: '你推荐的 曲妮妮 已通过第三轮面试',
//   datetime: '2017-08-08',
//   type: 'notice'
// },
// {
//   id: '000000003',
//   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
//   title: '这种模板可以区分多种通知类型',
//   datetime: '2017-08-07',
//   read: true,
//   type: 'notice'
// },
// {
//   id: '000000004',
//   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
//   title: '左侧图标用于区分不同的类型',
//   datetime: '2017-08-07',
//   type: 'notice'
// },
// {
//   id: '000000005',
//   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
//   title: '内容不要超过两行字，超出时自动截断',
//   datetime: '2017-08-07',
//   type: 'notice'
// },
// {
//   id: '000000006',
//   vatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
//   title: '曲丽丽 评论了你',
//   description: '描述信息描述信息描述信息',
//   datetime: '2017-08-07',
//   type: 'news',
//   clickClose: true
// },
// {
//   id: '000000007',
//   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
//   title: '朱偏右 回复了你',
//   description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
//   datetime: '2017-08-07',
//   type: 'news',
//   clickClose: true
// },
// {
//   id: '000000008',
//     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
//   title: '标题',
//   description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
//   datetime: '2017-08-07',
//   type: 'news',
//   clickClose: true
// },
// {
//   id: '000000009',
//     title: '任务名称',
//   description: '任务需要在 2017-01-12 20:00 前启动',
//   extra: '未开始',
//   status: 'todo',
//   type: 'todo'
// },
// {
//   id: '000000010',
//     title: '第三方紧急代码变更',
//   description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
//   extra: '马上到期',
//   status: 'urgent',
//   type: 'todo'
// },
// {
//   id: '000000011',
//     title: '信息安全考试',
//   description: '指派竹尔于 2017-01-09 前完成更新并发布',
//   extra: '已耗时 8 天',
//   status: 'doing',
//   type: 'todo'
// },
// {
//   id: '000000012',
//     title: 'ABCD 版本发布',
//   description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
//   extra: '进行中',
//   status: 'processing',
//   type: 'todo'
// }

exports.default = _default;