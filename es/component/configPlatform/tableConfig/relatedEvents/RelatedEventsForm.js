var _excluded = ["dispatch", "record", "namespace", "PID", "objectNO"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
 * @Description: 关联事件表单
 */
import React from 'react';
import { Form, Input, Select, Divider, Button } from 'antd';
import DragModal from '../../../common/drag/DragModal';
import SearchInput from '../../../common/search/SearchInput';
import { connect } from 'dva';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import language from '@/locale/language';
import { relatedEventsMap } from '../../../../utils/mapParams';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.relatedEvents,
    fields1 = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var RelationForm = function RelationForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      namespace = _ref.namespace,
      PID = _ref.PID,
      objectNO = _ref.objectNO,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var onFinish = function onFinish(values) {
    dispatch({
      type: 'commonConfig/editItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        PID: PID
      }
    });
  };

  var selectData = function selectData(index) {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'relationship',
          condition: "objectA='".concat(objectNO, "'"),
          onSelect: function onSelect(rows) {
            var PARAMS = form.getFieldValue('PARAMS');
            var RELEVANCENO = PARAMS.RELEVANCENO;
            rows.forEach(function (item, i) {
              var NO = item.NO,
                  NAME = item.NAME;

              if (i === 0) {
                RELEVANCENO[index] = {
                  NO: NO,
                  NAME: NAME
                };
              } else {
                RELEVANCENO.push({
                  NO: NO,
                  NAME: NAME
                });
              }
            });
            form.setFieldsValue({
              PARAMS: _objectSpread(_objectSpread({}, PARAMS), {}, {
                RELEVANCENO: RELEVANCENO
              })
            });
          }
        }
      });
    };
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "relatedEvents",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields1.NO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "NAME",
    label: fields1.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    name: "TYPE",
    label: fields1.TYPE
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: true
  }, relatedEventsMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Divider, null, fields1.PARAMS), /*#__PURE__*/React.createElement(List, {
    name: ['PARAMS', 'RELEVANCENO'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'calc(100% - 14px)'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(SearchInput, {
        label: fields1.RELEVANCENO,
        rules: [{
          required: true
        }],
        onClick: selectData(index),
        name: [field.name, 'NO'],
        fieldKey: [field.fieldKey, 'NO']
      }), /*#__PURE__*/React.createElement(Item, {
        label: fields1.NAME,
        name: [field.name, 'NAME'],
        fieldKey: [field.fieldKey, 'NAME']
      }, /*#__PURE__*/React.createElement(Input, {
        disabled: true
      })), /*#__PURE__*/React.createElement(MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Button, {
      type: "dashed",
      style: {
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), " Add")));
  })));
};

export default connect()(RelationForm);