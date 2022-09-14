function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

import React, { useState, useEffect, useRef } from 'react';
import { Badge, Form, Button, Input, Tooltip, message, Select, Drawer } from 'antd';
import BraftEditor from 'braft-editor';
import { TeamOutlined } from '@ant-design/icons';
import Modal from '../../common/drag/DragModal';
import language from '@/locale/language';
import { sendNotice, sendMail, getSenderMail } from '../../../service/communicationApi';
import { get } from '../../../service/api';
import DragModal from '../../common/drag/DragModal';
import SearchInput from '../../../component/common/search/SearchInput';
import Table from '../../common/table/ParseTable';
import UserSelectForm from '../../userManage/userSelectForm';
import { isEnglish } from '../../../utils/utils';
var _language$common = language.common,
    close = _language$common.close,
    send_messages = _language$common.send_messages,
    send_email = _language$common.send_email,
    prompt_user = _language$common.prompt_user,
    select = _language$common.select,
    cancel = _language$common.cancel,
    _language$header = language.header,
    iconTip = _language$header.iconTip,
    _language$header$user = _language$header.user,
    onlineUser = _language$header$user.onlineUser,
    yh_info = _language$header$user.yh_info,
    fields = _language$header$user.fields,
    notice = _language$header$user.notice;
var Item = Form.Item;
var Option = Select.Option;
var TextArea = Input.TextArea;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var columns = [{
  title: fields.userName,
  dataIndex: 'userName',
  width: 80
}, {
  title: fields.ip,
  dataIndex: 'ip',
  width: 100
}, {
  title: fields.loginTime,
  dataIndex: 'loginTime',
  width: 150
}, {
  title: fields.loginWay,
  dataIndex: 'sso',
  width: 150,
  render: function render(text) {
    return text ? /*#__PURE__*/React.createElement("span", null, fields.singleSignOnSSO) : /*#__PURE__*/React.createElement("span", null, fields.systemLogin);
  }
}, {
  title: fields.employeeNo,
  dataIndex: 'employeeNo',
  width: 80
}, {
  title: fields.employeeName,
  dataIndex: 'employeeName',
  width: 100
}, {
  title: fields.tel,
  dataIndex: 'tel',
  width: 100
}, {
  title: fields.mail,
  dataIndex: 'mail',
  width: 120
}, {
  title: fields.departMentNo,
  dataIndex: 'departMentNo',
  width: 80
}, {
  title: fields.departMentName,
  dataIndex: 'departMentName',
  width: 100
}, {
  title: fields.osBowser,
  dataIndex: 'osBowsers',
  width: 280,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}];
var pageFieldList = [];
columns.forEach(function (item) {
  pageFieldList.push({
    no: item.dataIndex,
    caption: item.title,
    editor: 'TextBox'
  });
});

var OnlineUser = function OnlineUser(_ref) {
  var userName = _ref.userName,
      theme = _ref.theme;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible2 = _useState6[0],
      setVisible2 = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      sendModalVisible = _useState8[0],
      setSendMessageModalVisible = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      userSelectorModalVisible = _useState10[0],
      setUserSelectorModalVisible = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      setListData = _useState12[0],
      setSetListData = _useState12[1];

  var _useState13 = useState(true),
      _useState14 = _slicedToArray(_useState13, 2),
      contentType = _useState14[0],
      setContentType = _useState14[1];

  var _useState15 = useState([]),
      _useState16 = _slicedToArray(_useState15, 2),
      selectedRowKeys = _useState16[0],
      setSelectedRowKeys = _useState16[1];

  var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      selectedRows = _useState18[0],
      setSelectedRows = _useState18[1];

  var _useState19 = useState({}),
      _useState20 = _slicedToArray(_useState19, 2),
      record = _useState20[0],
      setRecord = _useState20[1];

  var _useState21 = useState(''),
      _useState22 = _slicedToArray(_useState21, 2),
      sendType = _useState22[0],
      setSendType = _useState22[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var childRef = useRef();
  useEffect(function () {
    getOnlineUser();
  }, [1]);
  useEffect(function () {
    if (sendModalVisible) {
      // 将HTML字符串转换为编辑器所需要的EditorState实例
      // 接收人的默认值
      if (selectedRows && selectedRows.length > 0) {
        var userIdArr = [];
        selectedRows.forEach(function (row) {
          userIdArr.indexOf(row.userName) < 0 && userIdArr.push(row.userName);
        });
        form.setFieldsValue({
          userName: userIdArr.join(',')
        });
      }

      if (selectedRows && selectedRows.length === 0) {
        setSendMessageModalVisible(false);
      }
    }

    return function () {
      form.resetFields();
    };
  }, [userName, selectedRows, form, sendModalVisible]);
  useEffect(function () {
    form.setFieldsValue(record);
    return function () {
      form.resetFields();
    };
  }, [record, form]);

  var onSelect = function onSelect(key) {
    if (key === '0') {
      setContentType(false);
    } else setContentType(true);
  };

  var getOnlineUser = function getOnlineUser() {
    get('/system/user/getOnline').then(function (res) {
      if (res) {
        res.dataList.forEach(function (item, index) {
          item.osBowsers = item.osBowsers[0];
        });
        setList(res.dataList);
      }
    });
  };

  var toogleModal = function toogleModal() {
    // TODO 刷新在线用户
    getOnlineUser();
    setVisible(!visible);
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  var toogleModal2 = function toogleModal2() {
    setVisible2(!visible2);
  }; //发送消息


  var sendMessage = function sendMessage() {
    var replyMessageContent = form.getFieldsValue().sMessage;
    replyMessageContent = contentType ? replyMessageContent : replyMessageContent && !replyMessageContent.isEmpty() ? replyMessageContent = replyMessageContent.toHTML() : null;

    var data = _objectSpread(_objectSpread({}, form.getFieldsValue()), {}, {
      message: replyMessageContent,
      senderId: userName,
      html: contentType ? false : true
    });

    delete data.sMessage;
    sendNotice(data).then(function (res) {
      if (res) {
        setSendMessageModalVisible(!sendModalVisible);
        message.success(notice.message_sent_successfully);
      }
    });
  }; //发送邮件


  var sendEmail = function sendEmail() {
    var replyMessageContent = form.getFieldsValue().sMessage;
    replyMessageContent = contentType ? replyMessageContent : replyMessageContent && !replyMessageContent.isEmpty() ? replyMessageContent.toHTML() : null;

    var data = _objectSpread(_objectSpread({}, form.getFieldsValue()), {}, {
      sMessage: replyMessageContent
    });

    var values = {
      html: contentType ? false : true,
      subject: data.title,
      text: data.sMessage,
      sender: data.senderId,
      toUsers: data.userName.split(',')
    };
    sendMail(values).then(function (res) {
      if (res) {
        setSendMessageModalVisible(!sendModalVisible);
        message.success(res.hint);
      }
    });
  };

  var toogleSendMessageModal = function toogleSendMessageModal(type) {
    return function () {
      if (selectedRowKeys.length > 0) {
        setSendType(type);
        setSendMessageModalVisible(!sendModalVisible);
      } else {
        message.warn(prompt_user);
      }
    };
  };

  var toomodel = function toomodel() {
    setUserSelectorModalVisible(!userSelectorModalVisible);
  };

  var toomodels = function toomodels() {
    setUserSelectorModalVisible(false);
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

              if (!(JSON.stringify(res) === '{}')) {
                _context.next = 7;
                break;
              }

              message.warn('请选择有效数据');
              return _context.abrupt("return");

            case 7:
              userIdArrStr += ",".concat(res.NAME);
              form.setFieldsValue({
                userName: userIdArrStr
              });
              toomodels();

            case 10:
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

  var objectProps = {
    onOk: selectUserOk
  };
  var footer = [];
  footer.push( /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    onChange: onSelect,
    defaultValue: contentType ? notice.plain_text : notice.rich_text
  }, /*#__PURE__*/React.createElement(Option, {
    value: "1",
    key: 1
  }, notice.plain_text), /*#__PURE__*/React.createElement(Option, {
    value: "0",
    key: 0
  }, notice.rich_text))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: toogleSendMessageModal()
  }, cancel), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: sendType === 'message' ? sendMessage : sendEmail
  }, notice.send))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: list.length > 99 ? '3px 22px 0 6px' : '3px 6px 0 6px'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: iconTip.online
  }, /*#__PURE__*/React.createElement(Badge, {
    count: list.length,
    offset: [4],
    overflowCount: 999,
    style: {
      backgroundColor: '#40a9ff'
    }
  }, /*#__PURE__*/React.createElement(TeamOutlined, {
    onClick: toogleModal,
    style: {
      color: theme ? '#555555' : '#fff',
      fontSize: '20px'
    }
  }))), /*#__PURE__*/React.createElement(Drawer, {
    visible: visible,
    title: onlineUser,
    onClose: toogleModal,
    placement: 'bottom',
    height: '90%',
    footer: [/*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: toogleSendMessageModal('message')
    }, send_messages)), ",", /*#__PURE__*/React.createElement(Button, {
      type: "default",
      onClick: toogleModal
    }, close))]
  }, /*#__PURE__*/React.createElement(Table, {
    dataList: list,
    columns: columns,
    rowSelection: {
      type: 'Checkbox',
      selectedRowKeys: selectedRowKeys,
      onChange: function onChange(selectedRowKeys, selectedRows) {
        setSelectedRowKeys(selectedRowKeys);
        setSelectedRows(selectedRows);
        setRecord(selectedRows[0]);
      }
    },
    rightClick: function rightClick(selectedRows) {
      setRecord(selectedRows);
      setVisible2(true);
    }
  })), /*#__PURE__*/React.createElement(DragModal, {
    zIndex: 1001,
    namespace: "sendMessagesModal",
    width: '60%',
    title: sendType === 'message' ? notice.send_message : notice.send_email,
    visible: sendModalVisible,
    footer: footer,
    onCancel: toogleSendMessageModal()
  }, /*#__PURE__*/React.createElement(Form, {
    form: form,
    labelCol: {
      span: 3
    },
    className: "propertyForm"
  }, /*#__PURE__*/React.createElement(SearchInput, {
    name: "userName",
    label: notice.receiver,
    className: "whole-line",
    onClick: toomodel
  }), /*#__PURE__*/React.createElement(Item, {
    name: "title",
    label: notice.title,
    required: true
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "sMessage",
    label: notice.content
  }, contentType ? /*#__PURE__*/React.createElement(TextArea, {
    rows: 10
  }) : /*#__PURE__*/React.createElement(BraftEditor, {
    contentStyle: {
      height: 350
    } // maxLength={2000}
    ,
    style: {
      border: '1px solid #d9d9d9',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Item, {
    name: "senderId",
    label: notice.sender
  }, sendType === 'message' ? /*#__PURE__*/React.createElement(Input, {
    disabled: true,
    defaultValue: userName
  }) : /*#__PURE__*/React.createElement(Select, {
    style: {
      width: '100%'
    },
    onFocus: function onFocus() {
      getSenderMail().then(function (res) {
        if (res) {
          setSetListData(res.dataList);
        }
      });
    }
  }, setListData.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item.mailName,
      label: item.mailName,
      defaultValue: item.mailName
    }, item.mailName);
  }))))), /*#__PURE__*/React.createElement(DragModal, {
    zIndex: 1100,
    namespace: "selectorModal",
    width: 500,
    height: 550,
    title: select,
    visible: userSelectorModalVisible,
    onOk: selectUserOk,
    onCancel: toomodels
  }, userSelectorModalVisible && /*#__PURE__*/React.createElement(UserSelectForm, _extends({
    ref: childRef
  }, objectProps, {
    editor: 'UsersSelector'
  }))), /*#__PURE__*/React.createElement(Modal, {
    visible: visible2,
    title: yh_info,
    onCancel: toogleModal2,
    zIndex: 1001,
    footer: [/*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: toogleModal2
    }, close)]
  }, /*#__PURE__*/React.createElement(Form, _extends({
    name: yh_info,
    layout: "inline",
    form: form
  }, layout), pageFieldList.map(function (item) {
    return /*#__PURE__*/React.createElement(Item, {
      className: "spaceBetween",
      name: item.no,
      label: item.caption,
      key: item.no
    }, /*#__PURE__*/React.createElement(Input, null));
  })))); // }
};

export default OnlineUser;