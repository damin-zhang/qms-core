function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["editing", "dataIndex", "editor", "editParams", "children", "list"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

/*
 * @Description: ????????????
 */
import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react'; // import Table from '../../common/table/ParseTable'

import { Input, Form, Select, Table } from 'antd';
import { getDvaApp } from 'umi';
import { confirmBtn } from '../../../utils/buttonFunc'; // import EditorCmp from './EditorCmp'

var Option = Select.Option;

var EditableCell = function EditableCell(_ref) {
  var editing = _ref.editing,
      dataIndex = _ref.dataIndex,
      editor = _ref.editor,
      editParams = _ref.editParams,
      children = _ref.children,
      list = _ref.list,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _JSON$parse = JSON.parse(editParams || '{}'),
      canInput = _JSON$parse.canInput,
      values = _JSON$parse.values,
      rowHeight = _JSON$parse.rowHeight;

  var inputNode = /*#__PURE__*/React.createElement(Input, null); // let inputNode = <EditorCmp pageFieldList={[{ no: dataIndex, editor, editParams }]} list={list} />

  if (editor === 'ValueList') {
    inputNode = /*#__PURE__*/React.createElement(Select, {
      showSearch: canInput
    }, values.map(function (item, index) {
      return /*#__PURE__*/React.createElement(Option, {
        value: item.name || item,
        key: index
      }, item.name || item);
    }));
  } else if (editor === 'DBValueList') {
    inputNode = /*#__PURE__*/React.createElement(Select, null, (list[dataIndex] || []).map(function (item, index) {
      return /*#__PURE__*/React.createElement(Option, {
        value: item.NAME,
        key: index
      }, item.NAME);
    })); // } else if (editor === 'CheckEditor') {
    //   let options = values.map(item => ({ label: item.name, value: item.name }))
    //   inputNode = (
    //     <Checkbox.Group>
    //       <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
    //         {options.map(item => (
    //           <div>
    //             <Checkbox value={item.value}>{item.label}</Checkbox>
    //           </div>
    //         ))}
    //       </div>
    //     </Checkbox.Group>
    //   )
  } else if (editor === 'TextArea') {
    inputNode = /*#__PURE__*/React.createElement(Input.TextArea, {
      rows: rowHeight
    });
  }

  return /*#__PURE__*/React.createElement("td", restProps, editing ? /*#__PURE__*/React.createElement(Form.Item, {
    name: dataIndex,
    style: {
      margin: 0
    }
  }, inputNode) : children);
};

var TableHoc = function TableHoc(engine) {
  return function (WrappedComponent) {
    var EditableTable = function EditableTable(_ref2, ref) {
      var model = _ref2.model,
          onCancel = _ref2.onCancel;
      var record = model.record;
      var gridFieldList = engine.gridFieldList,
          objectANamespace = engine.objectANamespace,
          list = engine.list,
          clickedMenu = engine.clickedMenu;
      var dva = getDvaApp();

      var _useState = useState(record || []),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];

      var _Form$useForm = Form.useForm(),
          _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
          form = _Form$useForm2[0];

      var _useState3 = useState(false),
          _useState4 = _slicedToArray(_useState3, 2),
          error = _useState4[0],
          setError = _useState4[1];

      var _useState5 = useState(''),
          _useState6 = _slicedToArray(_useState5, 2),
          editingKey = _useState6[0],
          setEditingKey = _useState6[1];

      useEffect(function () {
        setData(record);
      }, [record]);
      useImperativeHandle(ref, function () {
        return {
          Ok: function Ok() {
            confirmBtn({
              values: _objectSpread(_objectSpread({}, clickedMenu.values), {}, {
                otherParam: data
              })
            }, clickedMenu, objectANamespace, onCancel);
          }
        };
      });

      var isEditing = function isEditing(record) {
        return record.key === editingKey;
      };

      var edit = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(record) {
          var row;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(record.key !== editingKey)) {
                    _context.next = 14;
                    break;
                  }

                  _context.prev = 1;
                  _context.next = 4;
                  return form.validateFields();

                case 4:
                  row = _context.sent;
                  save(editingKey, _objectSpread({}, row));
                  form.setFieldsValue(_objectSpread({
                    name: '',
                    age: '',
                    address: ''
                  }, record));
                  setEditingKey(record.key);

                  if (error) {
                    dva._store.dispatch({
                      type: "".concat(objectANamespace, "/packet"),
                      payload: {
                        batchEditHasError: false
                      }
                    });

                    setError(false);
                  }

                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](1);

                  if (!error) {
                    dva._store.dispatch({
                      type: "".concat(objectANamespace, "/packet"),
                      payload: {
                        batchEditHasError: true
                      }
                    });

                    setError(true);
                  }

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 11]]);
        }));

        return function edit(_x) {
          return _ref3.apply(this, arguments);
        };
      }();

      var cancel = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var row;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return form.validateFields();

                case 3:
                  row = _context2.sent;
                  save(editingKey, _objectSpread({}, row));
                  setEditingKey('');

                  if (error) {
                    dva._store.dispatch({
                      type: "".concat(objectANamespace, "/packet"),
                      payload: {
                        batchEditHasError: false
                      }
                    });

                    setError(false);
                  }

                  _context2.next = 12;
                  break;

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](0);

                  if (!error) {
                    dva._store.dispatch({
                      type: "".concat(objectANamespace, "/packet"),
                      payload: {
                        batchEditHasError: true
                      }
                    });

                    setError(true);
                  }

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 9]]);
        }));

        return function cancel() {
          return _ref4.apply(this, arguments);
        };
      }();

      var save = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key, row) {
          var newData, index, item;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (key) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return");

                case 2:
                  newData = _toConsumableArray(data);
                  index = newData.findIndex(function (item) {
                    return key === item.key;
                  });

                  if (index > -1) {
                    item = newData[index];
                    newData.splice(index, 1, _objectSpread(_objectSpread({}, item), row));
                    setData(newData);
                  } else {
                    newData.push(row);
                    setData(newData);
                  }

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function save(_x2, _x3) {
          return _ref5.apply(this, arguments);
        };
      }();

      var columns = gridFieldList.map(function (item, index) {
        var caption = item.caption,
            no = item.no,
            align = item.align,
            editParams = item.editParams,
            editor = item.editor,
            width = item.width;
        var col = {
          title: caption,
          dataIndex: no,
          align: align,
          width: Number("".concat(width)),
          editParams: editParams,
          editor: editor
        };
        if (index === gridFieldList.length - 1) return col;
        return _objectSpread(_objectSpread({}, col), {}, {
          width: Number("".concat(width))
        });
      });
      var mergedColumns = columns.map(function (col) {
        return _objectSpread(_objectSpread({}, col), {}, {
          onCell: function onCell(record) {
            return {
              record: record,
              dataIndex: col.dataIndex,
              title: col.title,
              editing: isEditing(record),
              editParams: col.editParams,
              editor: col.editor,
              list: list
            };
          }
        });
      });
      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '500px'
        },
        onMouseLeave: function onMouseLeave() {
          cancel();
        }
      }, /*#__PURE__*/React.createElement(Form, {
        form: form,
        component: false
      }, /*#__PURE__*/React.createElement(Table, {
        pagination: false,
        components: {
          body: {
            cell: EditableCell
          }
        },
        bordered: true,
        dataSource: data,
        columns: mergedColumns,
        rowClassName: "editable-row",
        size: "small",
        scroll: {
          y: 400
        },
        onRow: function onRow(record) {
          return {
            onClick: function onClick() {
              edit(record);
            } // onMouseLeave: () => {
            //   cancel()
            // }

          };
        },
        isTree: true
      })), /*#__PURE__*/React.createElement(WrappedComponent, null));
    };

    return forwardRef(EditableTable);
  };
};

export default TableHoc;