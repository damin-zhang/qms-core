function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

import React from "react";
import { Base64 } from 'js-base64';
import { message } from 'antd';
import { queryReportConfig } from '../../service/api';
import { queryGridModel, querySingleModel, queryPropertyModel, queryRelationModel, queryTemplateNo, getTemplateMetaData } from '../../service/metaApi';
import { commonApi, queryEditorData } from '../../service/applicationApi';
import PopupEngine from '../../component/engine/PopupEngine';
import SubPageEngine from '../../component/engine/SubPageEngine';
import { isEnglish, judgeModel } from '../../utils/utils';
import language from '@/locale/language';
import { getImgFileData } from '../../service/uploadApi';
var configure_report = language.message.report.configure_report;
/*
 * @Description: 点击按钮弹出窗口相关的请求
 */

var objectNoMap = {
  input: 'TASKINPUT',
  output: 'TASKOUTPUT'
};

var replaceLinkSql = function replaceLinkSql(record, sql, objectAData) {
  return sql.split('${').map(function (item) {
    var replaceArray = item.split("}");

    if (replaceArray[0].indexOf('OBJECTA.') === 0) {
      replaceArray.splice(0, 1, objectAData[replaceArray[0].slice(6)]);
    } else {
      var value = record[replaceArray[0]];

      if (value) {
        replaceArray.splice(0, 1, value);
      }
    }

    return replaceArray.join('');
  }).reduce(function (total, value) {
    return total += value;
  });
};

export default {
  namespace: 'popup',
  state: {},
  effects: {
    // 加载弹窗
    loadPopup: /*#__PURE__*/_regeneratorRuntime().mark(function loadPopup(_ref, _ref2) {
      var _ref$payload, objectANamespace, objectAData, clickedMenu, record, objectGrid, rData, linkParams, _ref$payload$columnMo, columnModelData, pageId, call, put, select, wType, id, mNo, params, values, name, enName, IS_DYNAMIC, objectNo, tableName, caption, state, namespace, newPayload, modelData, configNo, _ref3, isBddp, data, config, ModalPage, hData, implClass, _data, _ModalPage, _hData, _data2, _hData2, list, _modelData, pageFieldList, gridFieldList, peptide, peptidePageList, mapArr, mapFields, classNodeData, i, _mapArr$i, editor, fieldName, editParams, _editParams, sql, _data3, _ref4, queryObjectNo, _objectNo, _ModalPage2, _ref5, queryObjectNO, _sql, _objectNo2, condition, fields, _clickedMenu$values, _hData3, dataList, checkProRelationShipNo, _clickedMenu$values2, _hData4, objectA, _rData, _implClass, no, _id, _values, _clickedMenu$values3, _hData5, _rData2, _checkProRelationShipNo, _implClass2, _clickedMenu$values4, _hData6, _rData3, _checkProRelationShipNo2, _implClass3, _clickedMenu$values5, hSingleData, _hData7, _implClass4, _id2, _params, reqParams, _data4, imageField, imageDownload, imgJson, imgData;

      return _regeneratorRuntime().wrap(function loadPopup$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$payload = _ref.payload, objectANamespace = _ref$payload.objectANamespace, objectAData = _ref$payload.objectAData, clickedMenu = _ref$payload.clickedMenu, record = _ref$payload.record, objectGrid = _ref$payload.objectGrid, rData = _ref$payload.rData, linkParams = _ref$payload.linkParams, _ref$payload$columnMo = _ref$payload.columnModelData, columnModelData = _ref$payload$columnMo === void 0 ? null : _ref$payload$columnMo, pageId = _ref$payload.pageId;
              call = _ref2.call, put = _ref2.put, select = _ref2.select;
              wType = clickedMenu.wType, id = clickedMenu.id, mNo = clickedMenu.mNo, params = clickedMenu.params, values = clickedMenu.values, name = clickedMenu.name, enName = clickedMenu.enName, IS_DYNAMIC = clickedMenu.IS_DYNAMIC;
              objectNo = clickedMenu.objectNo, tableName = clickedMenu.tableName, caption = clickedMenu.caption;
              caption = caption ? caption : isEnglish ? enName : name;
              _context.next = 7;
              return select(function (state) {
                return state[objectANamespace];
              });

            case 7:
              state = _context.sent;
              namespace = objectANamespace;
              newPayload = {
                objectAData: objectAData,
                objectANamespace: objectANamespace,
                record: record,
                clickedMenu: clickedMenu
              };
              newPayload[id] = true;

              if (!(wType === 'report')) {
                _context.next = 33;
                break;
              }

              configNo = ''; // 配置的报表页面

              _ref3 = params || {}, isBddp = _ref3.isBddp;
              isBddp && isBddp == true ? configNo = 'largeScreenReportPage' : configNo = 'reportPage'; // 报表每次都重新渲染

              _context.next = 17;
              return call(queryReportConfig, configNo);

            case 17:
              data = _context.sent;

              if (!data) {
                _context.next = 30;
                break;
              }

              config = JSON.parse(Base64.decode(data.dataList));

              if (!(config && config.CONFIG_VALUE)) {
                _context.next = 27;
                break;
              }

              newPayload.reportIP = config.CONFIG_VALUE;
              ModalPage = PopupEngine({
                caption: caption,
                wType: wType,
                menuId: id,
                namespace: namespace,
                objectANamespace: objectANamespace,
                params: params,
                reportConfig: config
              });
              _context.next = 25;
              return put({
                type: "tab/addModal",
                payload: {
                  Cmp: /*#__PURE__*/React.createElement(ModalPage, {
                    key: id
                  }),
                  key: id
                }
              });

            case 25:
              _context.next = 28;
              break;

            case 27:
              message.warn(configure_report);

            case 28:
              _context.next = 31;
              break;

            case 30:
              message.warn(configure_report);

            case 31:
              _context.next = 127;
              break;

            case 33:
              if (!(wType === 'spcControlChart')) {
                _context.next = 46;
                break;
              }

              hData = clickedMenu.values.hData, implClass = clickedMenu.implClass;
              _context.next = 37;
              return call(commonApi, {
                objectNo: objectNo,
                hData: hData,
                implClass: implClass
              });

            case 37:
              _data = _context.sent;

              if (!(_data && _data.flag)) {
                _context.next = 44;
                break;
              }

              _ModalPage = PopupEngine({
                caption: caption,
                wType: wType,
                menuId: id,
                namespace: namespace,
                objectANamespace: objectANamespace,
                params: params
              });
              _context.next = 42;
              return put({
                type: "tab/addModal",
                payload: {
                  Cmp: /*#__PURE__*/React.createElement(_ModalPage, {
                    key: id
                  }),
                  key: id
                }
              });

            case 42:
              _context.next = 44;
              return put({
                type: 'spcControlChart/spcMeanValue',
                payload: {
                  data: _data
                }
              });

            case 44:
              _context.next = 127;
              break;

            case 46:
              if (!(wType === 'detailRelationPage')) {
                _context.next = 59;
                break;
              }

              _hData = values.hData;
              _context.next = 50;
              return call(queryRelationModel, {
                tableName: objectNo || tableName,
                objectRelationPageNo: IS_DYNAMIC ? _hData[0][mNo].toString() : mNo
              });

            case 50:
              _data2 = _context.sent;

              if (!(_data2 && _data2.flag)) {
                _context.next = 56;
                break;
              }

              _context.next = 54;
              return put({
                type: 'loadSubpage',
                payload: {
                  objectRelationPage: _data2.dataList,
                  objectAData: _hData[0],
                  objectANamespace: objectANamespace,
                  objectA: objectNo || tableName,
                  wType: 'detailRelationPage',
                  clickedMenu: clickedMenu
                }
              });

            case 54:
              _context.next = 57;
              break;

            case 56:
              message.info(_data2.hint);

            case 57:
              _context.next = 127;
              break;

            case 59:
              _context.t0 = wType;
              _context.next = _context.t0 === 'objectPropertyPage' ? 62 : _context.t0 === 'otherObjectPropertyPage' ? 62 : _context.t0 === 'classNodeObjectPropertyNo' ? 62 : _context.t0 === 'batchMaintain' ? 62 : _context.t0 === 'batchEdit' ? 62 : _context.t0 === 'detailForm' ? 62 : _context.t0 === 'objectColumnPage' ? 92 : _context.t0 === 'queryObjectView' ? 94 : _context.t0 === 'linkPage' ? 102 : _context.t0 === 'QualityInspectionEntry' ? 109 : _context.t0 === 'customWindow' ? 109 : _context.t0 === 'spcControlChart' ? 109 : _context.t0 === 'LoadQualityInspectionEntry' ? 111 : _context.t0 === 'QualityInspectionReport' ? 117 : 123;
              break;

            case 62:
              if (wType === 'otherObjectPropertyPage') {
                params.objectNo, _readOnlyError("objectNo");
              }

              _hData2 = values.hData;

              if (!(wType === 'batchEdit')) {
                _context.next = 68;
                break;
              }

              _context.t1 = objectGrid;
              _context.next = 71;
              break;

            case 68:
              _context.next = 70;
              return call(queryPropertyModel, {
                tableName: _objectNo || tableName,
                objectPropertyNo: (wType === 'detailForm' || wType === 'objectPropertyPage') && IS_DYNAMIC ? _hData2[0][mNo].toString() : mNo
              });

            case 70:
              _context.t1 = _context.sent;

            case 71:
              modelData = _context.t1;
              list = {};
              _modelData = modelData, pageFieldList = _modelData.pageFieldList, gridFieldList = _modelData.gridFieldList, peptide = _modelData.peptide, peptidePageList = _modelData.peptidePageList;
              mapArr = wType === 'batchEdit' ? gridFieldList : peptide ? [] : pageFieldList;

              if (peptide) {
                peptidePageList.forEach(function (item) {
                  // mapArr= mapArr.concat(item.pageFieldList);
                  mapArr = [].concat(_toConsumableArray(mapArr), _toConsumableArray(item.pageFieldList));
                });
              } // 处理类型为otherItemPropertyPage的映射（目标字段存在）


              if (wType === 'otherObjectPropertyPage') {
                // 获取映射关系
                mapFields = params.mapFields; // 源对象

                classNodeData = values.classNodeData; // 根据映射关系，将源对象对应字段赋值给目标对象对应字段

                mapFields && mapFields.forEach(function (item) {
                  pageFieldList.map(function (field) {
                    if (item.tfield === field.fieldName) {
                      field.defaultV = classNodeData[item.sfield];
                    }
                  });
                });
              }

              i = 0;

            case 78:
              if (!(i < mapArr.length)) {
                _context.next = 90;
                break;
              }

              _mapArr$i = mapArr[i], editor = _mapArr$i.editor, fieldName = _mapArr$i.fieldName, editParams = _mapArr$i.editParams;
              editParams = editParams || {};

              if (!(editor === 'DeptSelector')) {
                _context.next = 87;
                break;
              }

              _editParams = editParams, sql = _editParams.sql;
              _context.next = 85;
              return call(queryEditorData, {
                tableName: _objectNo || tableName,
                fieldName: fieldName // implclass: implclassMap.queryDeptSelector,
                // condition: sql

              });

            case 85:
              _data3 = _context.sent;
              list[fieldName] = _data3.dataList;

            case 87:
              i++;
              _context.next = 78;
              break;

            case 90:
              modelData.list = list;
              return _context.abrupt("break", 124);

            case 92:
              if (columnModelData) {
                modelData = columnModelData;
                judgeModel(namespace);
              }

              return _context.abrupt("break", 124);

            case 94:
              // namespace = `${itemANamespace}-${id}`
              namespace = "".concat(id);
              judgeModel(namespace);
              _ref4 = params || {}, queryObjectNo = _ref4.tableName;
              _context.next = 99;
              return call(queryGridModel, {
                objectNo: queryObjectNo || _objectNo
              });

            case 99:
              modelData = _context.sent;
              modelData = {
                objectGrid: _objectSpread({}, modelData)
              };
              return _context.abrupt("break", 124);

            case 102:
              _objectNo = linkParams.objectNo;
              namespace = "".concat(_objectNo, "-link");
              judgeModel(namespace);
              _context.next = 107;
              return call(querySingleModel, {
                objectNo: _objectNo,
                facetype: 1
              });

            case 107:
              modelData = _context.sent;
              return _context.abrupt("break", 124);

            case 109:
              judgeModel(namespace); // modelData = modelData

              return _context.abrupt("break", 124);

            case 111:
              namespace = params.templateNo;
              judgeModel(namespace); // 质检录入弹窗建模数据请求

              _context.next = 115;
              return call(getTemplateMetaData, {
                templateNo: params.templateNo,
                TYPE: 0
              });

            case 115:
              modelData = _context.sent;
              return _context.abrupt("break", 124);

            case 117:
              namespace = params.templateNo;
              judgeModel(namespace); // 质检报告弹窗建模数据请求

              _context.next = 121;
              return call(getTemplateMetaData, {
                templateNo: params.templateNo,
                TYPE: 1
              });

            case 121:
              modelData = _context.sent;
              return _context.abrupt("break", 124);

            case 123:
              console.log('new wtype', wType);

            case 124:
              _ModalPage2 = PopupEngine(_objectSpread(_objectSpread({
                caption: caption
              }, modelData), {}, {
                wType: wType,
                menuId: id,
                namespace: namespace,
                objectANamespace: objectANamespace,
                params: params,
                clickedMenu: clickedMenu,
                pageId: pageId
              }));
              _context.next = 127;
              return put({
                type: "tab/addModal",
                payload: {
                  Cmp: /*#__PURE__*/React.createElement(_ModalPage2, {
                    key: id
                  }),
                  key: id
                }
              });

            case 127:
              if (!(wType === 'queryObjectView')) {
                _context.next = 134;
                break;
              }

              _ref5 = params || {}, queryObjectNO = _ref5.objectNo, _sql = _ref5.sql;
              _context.next = 131;
              return put({
                type: "common/queryObjectViewData",
                payload: {
                  objectNo: queryObjectNO || objectNo,
                  rData: queryObjectNO ? null : rData,
                  page: 1,
                  condition: _sql,
                  namespace: namespace,
                  objectA: clickedMenu.values.objectA || null,
                  objectAData: objectAData,
                  relationObject: clickedMenu.values.relationShipNo || null
                }
              });

            case 131:
              newPayload = _objectSpread(_objectSpread({}, newPayload), {}, {
                namespace: namespace,
                selectedRowKeys: [],
                selectedRows: []
              });
              _context.next = 200;
              break;

            case 134:
              if (!(wType === 'linkPage')) {
                _context.next = 142;
                break;
              }

              _objectNo2 = linkParams.objectNo, condition = linkParams.condition;
              newPayload = _objectSpread(_objectSpread({}, newPayload), {}, {
                namespace: namespace,
                selectedRowKeys: [],
                selectedRows: [],
                showTab: false
              });
              fields = condition.match(/[^${}]+(?=\})/g);
              _context.next = 140;
              return put({
                type: 'common/querySingleData',
                payload: {
                  tableName: _objectNo2,
                  namespace: namespace,
                  condition: fields ? replaceLinkSql(record, condition, state.objectAData) : condition
                }
              });

            case 140:
              _context.next = 200;
              break;

            case 142:
              if (!(wType === 'QualityInspectionEntry')) {
                _context.next = 148;
                break;
              }

              _clickedMenu$values = clickedMenu.values, _hData3 = _clickedMenu$values.hData, dataList = _clickedMenu$values.dataList, checkProRelationShipNo = clickedMenu.params.checkProRelationShipNo;
              _context.next = 146;
              return put({
                type: 'common/queryInspectionItem',
                payload: {
                  objectNo: objectNo,
                  objectANamespace: objectANamespace,
                  hData: _hData3,
                  objectADataList: dataList,
                  checkProRelationShipNo: checkProRelationShipNo
                }
              });

            case 146:
              _context.next = 200;
              break;

            case 148:
              if (!(wType === 'customWindow')) {
                _context.next = 160;
                break;
              }

              _clickedMenu$values2 = clickedMenu.values, _hData4 = _clickedMenu$values2.hData, objectA = _clickedMenu$values2.objectA, _rData = _clickedMenu$values2.rData, _implClass = clickedMenu.implClass, no = clickedMenu.no, _id = clickedMenu.id;
              _values = {
                objectANamespace: objectANamespace
              };
              _values.implClass = _implClass;
              _values.hData = _hData4;
              _values.objectNo = objectNo;
              _values.objectA = objectA;
              _values.objectAData = objectAData;
              _context.next = 158;
              return put({
                type: "".concat(no, "/").concat(no),
                payload: {
                  values: _values,
                  id: _id,
                  namespace: namespace,
                  objectADataList: _rData
                }
              });

            case 158:
              _context.next = 200;
              break;

            case 160:
              if (!(wType === 'LoadQualityInspectionEntry')) {
                _context.next = 166;
                break;
              }

              _clickedMenu$values3 = clickedMenu.values, _hData5 = _clickedMenu$values3.hData, _rData2 = _clickedMenu$values3.rData, _checkProRelationShipNo = clickedMenu.params.checkProRelationShipNo, _implClass2 = clickedMenu.implClass;
              _context.next = 164;
              return put({
                type: 'common/queryInspectionItem2',
                payload: {
                  objectNo: objectNo,
                  objectANamespace: objectANamespace,
                  hData: _hData5,
                  objectADataList: _rData2,
                  checkProRelationShipNo: _checkProRelationShipNo,
                  namespace: namespace,
                  implClass: _implClass2
                }
              });

            case 164:
              _context.next = 200;
              break;

            case 166:
              if (!(wType === 'QualityInspectionReport')) {
                _context.next = 172;
                break;
              }

              _clickedMenu$values4 = clickedMenu.values, _hData6 = _clickedMenu$values4.hData, _rData3 = _clickedMenu$values4.rData, _checkProRelationShipNo2 = clickedMenu.params.checkProRelationShipNo, _implClass3 = clickedMenu.implClass;
              _context.next = 170;
              return put({
                type: 'common/queryInspectionReport',
                payload: {
                  objectNo: objectNo,
                  objectANamespace: objectANamespace,
                  hData: _hData6,
                  objectADataList: _rData3,
                  checkProRelationShipNo: _checkProRelationShipNo2,
                  namespace: namespace,
                  implClass: _implClass3
                }
              });

            case 170:
              _context.next = 200;
              break;

            case 172:
              if (!(wType === 'imagePreview')) {
                _context.next = 200;
                break;
              }

              _clickedMenu$values5 = clickedMenu.values, hSingleData = _clickedMenu$values5.hSingleData, _hData7 = _clickedMenu$values5.hData, _implClass4 = clickedMenu.implClass, _id2 = clickedMenu.id, _params = clickedMenu.params;
              reqParams = {
                objectNo: objectNo,
                implClass: _implClass4,
                menuId: _id2,
                wType: wType,
                params: _params,
                hData: _hData7
              };
              _context.next = 177;
              return call(commonApi, reqParams);

            case 177:
              _data4 = _context.sent;

              if (!(_data4 && _data4.flag)) {
                _context.next = 198;
                break;
              }

              imageField = _data4.imageField, imageDownload = _data4.imageDownload;

              if (!(imageField && imageField.length)) {
                _context.next = 195;
                break;
              }

              imgJson = []; //处理有多个图片编辑器的情况
              //将每个图片编辑器中的图片放到imgJson中

              imageField.forEach(function (item) {
                var imgData = JSON.parse(_hData7[0][item.FIELDNAME] || '[]');
                imgData.forEach(function (item) {
                  return imgJson.push(item);
                });
              }); //有图片时才弹窗

              if (!imgJson.length) {
                _context.next = 190;
                break;
              }

              _context.next = 186;
              return call(getImgFileData, {
                id: _hData7[0].ID,
                objectNo: objectNo,
                data: imgJson
              });

            case 186:
              imgData = _context.sent;

              //调接口将图片转为base64格式
              if (imgData && imgData.flag) {
                newPayload.imgList = imgData.dataList;
              }

              _context.next = 192;
              break;

            case 190:
              //无图片则不弹窗并且给提示
              message.warning('暂无图片！');
              newPayload[_id2] = false;

            case 192:
              newPayload.imageDownload = imageDownload;
              _context.next = 196;
              break;

            case 195:
              //没有图片编辑器也不弹窗
              newPayload[_id2] = false;

            case 196:
              _context.next = 200;
              break;

            case 198:
              //当没有图片时不交互后台，直接给全局提示
              newPayload[_id2] = false;
              message.warning('暂无图片！');

            case 200:
              _context.next = 202;
              return put({
                type: "".concat(namespace, "/packet"),
                payload: newPayload
              });

            case 202:
            case "end":
              return _context.stop();
          }
        }
      }, loadPopup);
    }),
    // 加载子页面
    loadSubpage: /*#__PURE__*/_regeneratorRuntime().mark(function loadSubpage(_ref6, _ref7) {
      var _ref6$payload, objectRelationPage, objectAData, objectANamespace, objectA, wType, clickedMenu, pageNo, put, select, call, panes, len, _loop, i, _wType, id, params, name, enName, caption, ModalPage;

      return _regeneratorRuntime().wrap(function loadSubpage$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref6$payload = _ref6.payload, objectRelationPage = _ref6$payload.objectRelationPage, objectAData = _ref6$payload.objectAData, objectANamespace = _ref6$payload.objectANamespace, objectA = _ref6$payload.objectA, wType = _ref6$payload.wType, clickedMenu = _ref6$payload.clickedMenu, pageNo = _ref6$payload.pageNo;
              put = _ref7.put, select = _ref7.select, call = _ref7.call;
              // const panes = yield select((state) => state[objectANamespace].panes);
              panes = [];
              len = objectRelationPage.length;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                var object, rType, objectNo, enName, name, icon, id, relationPageSign, sortFields, relevanceNo, supQuery, DYNAMIC, caption, relationMenuList, Cmp, namespace, newObjectAData, modalData, formData, TILED, EXPAND, index, pane;
                return _regeneratorRuntime().wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        object = objectRelationPage[i];
                        rType = object.rType, objectNo = object.objectNo, enName = object.enName, name = object.name, icon = object.icon, id = object.id, relationPageSign = object.relationPageSign, sortFields = object.sortFields, relevanceNo = object.relevanceNo, supQuery = object.supQuery, DYNAMIC = object.DYNAMIC;
                        caption = isEnglish ? enName : name;
                        relationMenuList = [];
                        relationPageSign && (relationMenuList = relationPageSign.relationMenuList);

                        Cmp = function Cmp() {
                          return /*#__PURE__*/React.createElement("div", null);
                        };

                        namespace = "".concat(objectANamespace, "-").concat(i); // 清除历史数据

                        _context2.next = 9;
                        return put({
                          type: "".concat(namespace, "/packet"),
                          payload: {
                            dataList: [],
                            dataTotal: 0
                          }
                        });

                      case 9:
                        // const namespace = id
                        if (rType !== 'relationproperty') judgeModel(namespace);

                        if (!(rType !== 'relationproperty' && rType !== 'changeHistory' && rType !== 'relationclassview' && objectAData)) {
                          _context2.next = 17;
                          break;
                        }

                        newObjectAData = JSON.parse(JSON.stringify(objectAData));
                        delete newObjectAData.IMAGE64;
                        _context2.next = 15;
                        return put({
                          type: 'common/querySubPageData',
                          payload: {
                            pageNo: pageNo,
                            namespace: namespace,
                            objectAData: newObjectAData,
                            objectNo: objectNoMap[rType] || objectNo,
                            objectA: objectA,
                            sortFields: sortFields,
                            relevanceNo: relevanceNo,
                            rType: rType,
                            relationObject: relationPageSign && relationPageSign.hasOwnProperty('relationObject') ? relationPageSign.relationObject : null
                          }
                        });

                      case 15:
                        _context2.next = 20;
                        break;

                      case 17:
                        if (!(rType === 'changeHistory')) {
                          _context2.next = 20;
                          break;
                        }

                        _context2.next = 20;
                        return put({
                          type: 'common/querySubPageData',
                          payload: {
                            namespace: namespace,
                            objectNo: objectA,
                            rType: rType,
                            hData: [objectAData],
                            userName: localStorage.getItem('userName')
                          }
                        });

                      case 20:
                        // if (relationMenuList && relationMenuList.length > 0) {
                        //   // 验证关联页disabled
                        //   yield put({
                        //     type: 'common/verifyPageDisabled',
                        //     payload: {
                        //       namespace,
                        //       objectNo,
                        //       objectA,
                        //       objectAData,
                        //       relevanceNo,
                        //       otherParam: relationMenuList
                        //     }
                        //   })
                        // }
                        modalData = _objectSpread(_objectSpread({}, relationPageSign), {}, {
                          relationMenuList: relationMenuList,
                          namespace: namespace,
                          rType: rType,
                          supQuery: supQuery,
                          wType: wType
                        });
                        _context2.t0 = rType;
                        _context2.next = _context2.t0 === 'relationproperty' ? 24 : 33;
                        break;

                      case 24:
                        formData = [];

                        if (!DYNAMIC) {
                          _context2.next = 29;
                          break;
                        }

                        _context2.next = 28;
                        return call(queryPropertyModel, {
                          tableName: objectNo,
                          objectPropertyNo: objectAData[relevanceNo]
                        });

                      case 28:
                        formData = _context2.sent;

                      case 29:
                        modalData.objectAData = objectAData;
                        modalData.namespace = objectANamespace;
                        modalData = _objectSpread(_objectSpread({}, modalData), formData);
                        return _context2.abrupt("break", 33);

                      case 33:
                        _context2.next = 35;
                        return put({
                          type: "".concat(namespace, "/packet"),
                          payload: {
                            objectA: objectA,
                            objectAData: objectAData,
                            namespace: namespace,
                            relevanceNo: relevanceNo,
                            showTab: false,
                            objectNo: objectNo,
                            sortFields: sortFields,
                            selectedRowKeys: [],
                            selectedRows: []
                          }
                        });

                      case 35:
                        Cmp = SubPageEngine(modalData);
                        TILED = objectRelationPage[i].TILED;
                        EXPAND = objectRelationPage[i].EXPAND;
                        index = panes.findIndex(function (item) {
                          return item.key === id;
                        });
                        pane = {
                          TILED: TILED,
                          EXPAND: EXPAND,
                          rType: rType,
                          caption: caption,
                          icon: icon,
                          Cmp: /*#__PURE__*/React.createElement(Cmp, null),
                          key: id
                        };
                        index === -1 ? panes.push(pane) : panes[index] = pane;

                      case 41:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop);
              });
              i = 0;

            case 6:
              if (!(i < len)) {
                _context3.next = 11;
                break;
              }

              return _context3.delegateYield(_loop(i), "t0", 8);

            case 8:
              i++;
              _context3.next = 6;
              break;

            case 11:
              if (!wType) {
                _context3.next = 17;
                break;
              }

              _wType = clickedMenu.wType, id = clickedMenu.id, params = clickedMenu.params, name = clickedMenu.name, enName = clickedMenu.enName, caption = clickedMenu.caption;
              caption = caption ? caption : isEnglish ? enName : name;
              ModalPage = PopupEngine({
                caption: caption,
                wType: _wType,
                menuId: id,
                namespace: objectANamespace,
                objectANamespace: objectANamespace,
                params: params
              });
              _context3.next = 17;
              return put({
                type: "tab/addModal",
                payload: {
                  Cmp: /*#__PURE__*/React.createElement(ModalPage, {
                    key: id
                  }),
                  key: id
                }
              });

            case 17:
              _context3.next = 19;
              return put({
                type: "".concat(objectANamespace, "/packet"),
                payload: {
                  panes: panes,
                  showTab: wType ? false : true
                }
              });

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, loadSubpage);
    })
  }
};