function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

/*
 * @Description: Rohs质检录入
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Table, Form, Input, message, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { showLoading, hideLoading } from '../../../utils/utils';
import { dateToFormat } from '../../../utils/dataToFormat';
import { commonApi } from '../../../service/applicationApi';
import { uploadFileAsync } from '../../../service/uploadApi';
import './index.css';
import { setInspectionColumns } from './mock';
var SUPPLIER_RISK_LEVEL = {
  1: '低风险',
  2: '中风险',
  3: '高风险'
};
var COMPREHENSIVE_RISK_DETERMINATION = {
  1: '低风险1',
  2: '中风险2',
  3: '高风险3',
  4: '低风险4',
  6: '中风险6',
  9: '高风险9'
};
var TextArea = Input.TextArea;

var RohsInspectionEntry = function RohsInspectionEntry(_ref) {
  var dispatch = _ref.dispatch,
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      dataList = _ref.dataList,
      formData = _ref.formData,
      formInitValue = _ref.formInitValue,
      objectANamespace = _ref.objectANamespace,
      objectADataList = _ref.objectADataList,
      id = _ref.id;
  var objectNo = values.objectNo;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedRowKeys = _useState2[0],
      setSelectedRowKeys = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      canRemark = _useState6[0],
      setCanRemark = _useState6[1];

  useEffect(function () {
    form.setFieldsValue(formInitValue);

    if (dataList[0] && dataList[0].TR === 'NG') {
      setCanRemark(false);
    } else setCanRemark(true);
  }, [dataList, formInitValue, form, formData]);
  /*测试结果OK/NG修改*/

  var definitionColumns = [{
    title: '序号',
    dataIndex: 'index',
    width: 50,
    render: function render(text, record, index) {
      return index + 1;
    }
  }, {
    title: '单号',
    dataIndex: 'NO',
    width: 100,
    align: 'center'
  }, {
    title: '物料编码',
    dataIndex: 'MATERIAL_CODE',
    width: 100,
    align: 'center'
  }, {
    title: '物料名称',
    dataIndex: 'MATERIAL_NAME',
    width: 120,
    align: 'center'
  }, {
    title: '分类名称',
    dataIndex: 'MATERIAL_SUBCLASS_NAME',
    width: 100,
    align: 'center'
  }, {
    title: '供应商名称',
    dataIndex: 'SUPPLIER_NAME',
    width: 100,
    align: 'center'
  }, {
    title: '供应商品牌',
    dataIndex: 'SUPPLIER_BRAND',
    width: 100,
    align: 'center'
  }, {
    title: 'SQE',
    dataIndex: 'SQE',
    width: 130,
    align: 'center'
  }, {
    title: '供应商风险等级',
    dataIndex: 'SUPPLIER_RISK_LEVEL',
    align: 'center',
    width: 120,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, SUPPLIER_RISK_LEVEL[text]);
    }
  }, {
    title: '物料风险等级',
    dataIndex: 'MATERIAL_RISK_LEVEL',
    align: 'center',
    width: 120,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, SUPPLIER_RISK_LEVEL[text]);
    }
  }, {
    title: '综合风险判定',
    dataIndex: 'COMPREHENSIVE_RISK_DETERMINATION',
    align: 'center',
    width: 120,
    render: function render(text) {
      return /*#__PURE__*/React.createElement("span", null, COMPREHENSIVE_RISK_DETERMINATION[text]);
    }
  }, {
    title: '测试报告',
    dataIndex: 'FNAME',
    align: 'center',
    width: 100,
    render: function render(text, record, index) {
      return /*#__PURE__*/React.createElement(Upload, {
        beforeUpload: function beforeUpload(file) {
          return _beforeUpload(file, [record], index);
        },
        showUploadList: false,
        itemRender: function itemRender() {
          return /*#__PURE__*/React.createElement(React.Fragment, null);
        },
        maxCount: 1,
        key: record.ID
      }, /*#__PURE__*/React.createElement(Button, {
        icon: /*#__PURE__*/React.createElement(UploadOutlined, null)
      }, "\u4E0A\u4F20\u62A5\u544A"));
    }
  }, {
    title: '报告上传时间',
    dataIndex: 'UPTIME',
    width: 130,
    align: 'center'
  }, {
    title: '测试结果',
    dataIndex: 'TR',
    align: 'center',
    width: 130,
    render: function render(text, record, index) {
      var TRClass = '';
      if (record.TR === 'OK') TRClass = 'green';
      if (record.TR === 'NG') TRClass = 'red';
      return /*#__PURE__*/React.createElement(Form.Item, {
        name: [record.ID, 'TR'],
        key: record.ID,
        className: TRClass + " resultSel"
      }, /*#__PURE__*/React.createElement(Select, {
        style: {
          width: '100px'
        },
        onChange: function onChange(val) {
          return ResultEvent(val, index, [record.ID, 'TR']);
        }
      }, /*#__PURE__*/React.createElement(Select.Option, {
        value: "OK",
        key: "1",
        style: {
          backgroundColor: '#92D050',
          textAlign: 'center'
        }
      }, "OK"), /*#__PURE__*/React.createElement(Select.Option, {
        value: "NG",
        key: "2",
        style: {
          backgroundColor: '#F93617',
          color: '#FFF',
          textAlign: 'center'
        }
      }, "NG")));
    }
  }, {
    title: '测试描述',
    dataIndex: 'REMARK',
    align: 'center',
    width: 130,
    render: function render(text, record, index) {
      return /*#__PURE__*/React.createElement(Form.Item, {
        name: [record.ID, 'REMARK'],
        key: record.ID
      }, /*#__PURE__*/React.createElement(TextArea, {
        type: "text",
        style: {
          textAlign: 'left'
        },
        autoSize: {
          minRows: 3,
          maxRows: 5
        },
        onPressEnter: function onPressEnter(e) {
          return commonInputPressEnter(e, record, [record.ID, 'REMARK'], index);
        },
        disabled: canRemark // onFocus={() => onInputFocus(record, index)}
        // onBlur={() => onInputBlur([record.ID,  'REMARK'], index)}

      }));
    }
  } // {
  //   title: 'SQE结论',
  //   dataIndex: 'RESPONSIBLE',
  //   align: 'center',
  //   width: 130,
  //   render: (text, record, index) => {
  //     return (
  //       <Form.Item name={[record.ID, 'RESPONSIBLE']} key={record.ID} >
  //         <Select style={{ width: '100px' }} disabled={canRemark} onChange={val => ResultEvent(val, index, [record.ID, 'RESPONSIBLE'])} >
  //           <Select.Option value='退回重检' key='1' style={{ textAlign: 'center' }}>
  //             退回重检
  //           </Select.Option>
  //           <Select.Option
  //             value='供应商责任'
  //             key='2'
  //             style={{ textAlign: 'center' }}
  //           >
  //             供应商责任
  //           </Select.Option>
  //         </Select>
  //       </Form.Item>
  //     )
  //   }
  // },
  ];

  var ResultEvent = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(val, index, fieldName) {
      var value, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = form.getFieldValue(fieldName);

              if (dataList[index].FLOCATION) {
                _context.next = 4;
                break;
              }

              message.warn('请先上传测试报告');
              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return commonApi({
                implClass: 'rohs.InputInsResultEvent',
                objectNo: objectNo,
                hData: [dataList[index]],
                data: _defineProperty({}, fieldName[1], val)
              });

            case 6:
              res = _context.sent;

              if (res && res.flag) {
                dispatch({
                  type: 'RohsQualityInspectionEntry/resFom',
                  payload: {
                    dataList: res.dataList
                  }
                });
                message.info(res.hint);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function ResultEvent(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var commonInputPressEnter = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, record, fieldName, index) {
      var value, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              value = form.getFieldValue(fieldName);

              if (!(value === null || value === undefined || !value.toString())) {
                _context2.next = 5;
                break;
              }

              message.warning('参数不能为空!');
              return _context2.abrupt("return");

            case 5:
              _context2.next = 7;
              return commonApi({
                implClass: 'rohs.InputInsResultEvent',
                objectNo: objectNo,
                hData: [dataList[index]],
                data: {
                  REMARK: value
                }
              });

            case 7:
              res = _context2.sent;

              if (res && res.flag) {
                dispatch({
                  type: 'RohsQualityInspectionEntry/resFom',
                  payload: {
                    dataList: res.dataList
                  }
                });
                message.info(res.hint);
              }

              console.log(value);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function commonInputPressEnter(_x4, _x5, _x6, _x7) {
      return _ref3.apply(this, arguments);
    };
  }();
  /*Input回车事件 */


  var onInputPressEnter = function onInputPressEnter(record, fieldName, index) {
    var value = form.getFieldValue(fieldName);

    if (value === null || value === undefined || !value.toString()) {
      message.warning('参数不能为空!');
      return;
    }

    if (isNaN(Number(value))) {
      message.warning('输入的数据格式不正确!');
      return;
    } else if (Number(value) < 0) {
      message.warning('请输入正确的数值!');
      return;
    }

    var el = document.getElementById("inspectionForm_".concat(formData[index].ID, "_").concat(fieldName[1]));

    if (fieldName[1] === 'Cd') {
      if (Number(value) > 100) {
        el.classList.add('red');
      } else {
        el.classList.remove('red');
      }
    } else {
      if (Number(value) > 1000) {
        el.classList.add('red');
      } else {
        el.classList.remove('red');
      }
    }

    var hData = formData[index].Items.filter(function (item) {
      return item.NAME === fieldName[1];
    });

    var callback = function callback() {
      if (index === formData.length - 1) {
        document.getElementById("inspectionForm_".concat(formData[index].ID, "_").concat(fieldName[1])).blur();
        return;
      }

      if (dataList.length && index < dataList.length - 1) {
        /* 光标下移 */
        var nextInput = document.getElementById("inspectionForm_".concat(formData[index + 1].ID, "_").concat(fieldName[1]));
        nextInput.focus();
      }
    };
    /* 获取当前输入框 */


    var currentInput = document.getElementById("inspectionForm_".concat(formData[index].ID, "_").concat(fieldName[1]));
    catchData(value, hData, callback, currentInput);
  };

  var catchData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(value, hData, callback, currentInput) {
      var res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return commonApi({
                implClass: 'rohs.InputInsItemValueEvent',
                objectNo: 'ROHS_WAIT_ITEM',
                hData: hData,
                data: {
                  TV: value
                }
              });

            case 2:
              res = _context3.sent;

              if (res && res.flag === true) {
                if (callback) callback();
                /* 恢复禁用输入框 */

                if (currentInput) currentInput.disabled = false;
              } else {
                /* 恢复禁用输入框 */
                if (currentInput) currentInput.disabled = false;
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function catchData(_x8, _x9, _x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }(); // 上传测试报告


  var _beforeUpload = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(file, hData, index) {
      var res, val;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              showLoading();
              _context4.next = 3;
              return uploadFileAsync({
                file: file,
                tableName: objectNo,
                record: hData
              });

            case 3:
              res = _context4.sent;

              if (res && res.flag === true) {
                val = {
                  implClass: 'rohs.UploadRohsFileEvent',
                  objectNo: objectNo,
                  hData: hData,
                  data: {
                    UPLOADED: true,
                    FLOCATION: res.dataList,
                    UPTIME: dateToFormat(new Date())
                  }
                };
                showLoading();
                commonApi(val).then(function (res) {
                  if (res) {
                    setSelectedRows([res.dataList]);
                    dispatch({
                      type: 'RohsQualityInspectionEntry/resFom',
                      payload: {
                        dataList: [res.dataList]
                      }
                    });
                    message.success('上传成功');
                  } else message.warn('上传失败');
                });
              } else {
                message.success('上传失败');
                hideLoading();
              }

              return _context4.abrupt("return", false);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function _beforeUpload(_x12, _x13, _x14) {
      return _ref5.apply(this, arguments);
    };
  }(); // 完成录入


  var save = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var i, res, list, payload;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < dataList.length)) {
                _context5.next = 11;
                break;
              }

              if (dataList[i].UPTIME) {
                _context5.next = 5;
                break;
              }

              message.warning('单号' + dataList[i].NO + '没有上传测试报告');
              return _context5.abrupt("return");

            case 5:
              if (dataList[i].TR) {
                _context5.next = 8;
                break;
              }

              message.warning('单号' + dataList[i].NO + '没有录入测试结果');
              return _context5.abrupt("return");

            case 8:
              i++;
              _context5.next = 1;
              break;

            case 11:
              showLoading();
              _context5.next = 14;
              return commonApi({
                implClass: 'rohs.SaveRohsInsResultEvent',
                objectNo: 'ROHS_WAIT_LIST',
                hData: dataList
              });

            case 14:
              res = _context5.sent;

              if (res && res.flag === true) {
                list = objectADataList.filter(function (item) {
                  return item.ID !== res.dataList[0].ID;
                });
                payload = _defineProperty({
                  selectedRows: [],
                  dataList: list || []
                }, id, false);
                dispatch({
                  type: "".concat(objectANamespace, "/packet"),
                  payload: payload
                });
                message.info('录入成功');
              } else {
                message.info('录入失败');
              }

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function save() {
      return _ref6.apply(this, arguments);
    };
  }(); // 批量编辑OK/NG


  var BatchEdit = function BatchEdit(testResult) {
    return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var i, val, res, list;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < selectedRows.length)) {
                _context6.next = 11;
                break;
              }

              if (selectedRows[i].UPTIME) {
                _context6.next = 7;
                break;
              }

              message.warning('单号' + selectedRows[i].NO + '没有上传测试报告');
              return _context6.abrupt("return");

            case 7:
              delete selectedRows[i].Items;

            case 8:
              i++;
              _context6.next = 1;
              break;

            case 11:
              val = {
                implClass: 'rohs.InputInsResultEvent',
                objectNo: objectNo,
                hData: selectedRows,
                data: {
                  TR: testResult
                }
              };
              showLoading();
              _context6.next = 15;
              return commonApi(val);

            case 15:
              res = _context6.sent;

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
                  type: 'RohsQualityInspectionEntry/resFom',
                  payload: {
                    dataList: list
                  }
                });
                message.info(res.hint);
              }

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: dataList && dataList.length ? false : true,
    onClick: save
  }, "\u5B8C\u6210\u5F55\u5165"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: selectedRows.length ? false : true,
    onClick: BatchEdit('OK')
  }, "\u6279\u91CFOK"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: selectedRows.length ? false : true,
    onClick: BatchEdit('NG')
  }, "\u6279\u91CFNG")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100% - 40px)'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    form: form,
    name: "inspectionForm",
    initialValues: formInitValue
  }, /*#__PURE__*/React.createElement(Table, {
    size: "small",
    className: "period-style",
    dataSource: dataList,
    columns: definitionColumns,
    bordered: true,
    scroll: {
      x: '100%',
      y: 500
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
  }))));
};

function mapStateToProps(_ref8) {
  var RohsQualityInspectionEntry = _ref8.RohsQualityInspectionEntry;
  return _objectSpread({}, RohsQualityInspectionEntry);
}

export default connect(mapStateToProps)(RohsInspectionEntry);