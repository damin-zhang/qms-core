var _excluded = ["record", "dispatch", "namespace", "dataList"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 关联关系表单
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox } from 'antd';
import { connect } from 'dva';
import DragModal from '../../common/drag/DragModal';
import SearchInput from '../../common/search/SearchInput';
import LocaleNameForm from '../common/LocaleNameForm';
import SortFields from '../common/SortFields';
import { checkRepeat } from '../../../utils/utils';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.relationship,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Option = Select.Option;
var Item = Form.Item;
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var RelationshipForm = function RelationshipForm(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      dataList = _ref.dataList,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      OBJECTB = _useState2[0],
      setOBJECTB = _useState2[1];

  var STATE = record.STATE;
  useEffect(function () {
    var OBJECTB = record.OBJECTB;

    if (OBJECTB) {
      setOBJECTB(OBJECTB);
    }
  }, [record]);

  var onFinish = function onFinish(values) {
    dispatch({
      type: 'commonConfig/edit',
      payload: {
        values: values,
        record: record,
        namespace: namespace
      }
    });
  };

  var selectData = function selectData(no) {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'objectNo',
          condition: no === 'RELATIONOBJECT' ? "JSON_VALUE(B.META,'$.TYPE') = 2" : "JSON_VALUE(B.META,'$.TYPE') in (0,1)",
          onSelect: function onSelect(rows) {
            var obj = {};
            obj[no] = rows[0].TABLENAME;
            form.setFieldsValue(obj);
            if (no === 'OBJECTB') setOBJECTB(rows[0].TABLENAME);
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
    name: "relationShip",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }, {
      type: 'string',
      max: 50
    }, {
      validator: function validator(_, value) {
        return checkRepeat(value, 'NO', dataList, record.ID);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: STATE === 2
  })), /*#__PURE__*/React.createElement(SearchInput, {
    name: "RELATIONOBJECT",
    label: fields.RELATIONOBJECT,
    rules: [{
      required: true
    }],
    onClick: selectData('RELATIONOBJECT')
  }), /*#__PURE__*/React.createElement(SearchInput, {
    name: "OBJECTA",
    label: fields.OBJECTA,
    rules: [{
      required: true
    }],
    onClick: selectData('OBJECTA')
  }), /*#__PURE__*/React.createElement(SearchInput, {
    name: "OBJECTB",
    label: fields.OBJECTB,
    rules: [{
      required: true
    }],
    onClick: selectData('OBJECTB')
  }), /*#__PURE__*/React.createElement(Item, {
    name: "POBJECT",
    label: fields.POBJECT,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
    value: "A"
  }, "A"), /*#__PURE__*/React.createElement(Option, {
    value: "B"
  }, "B"))), /*#__PURE__*/React.createElement(Item, {
    name: "SUPQUERY",
    label: fields.SUPQUERY,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    name: "CONTROLAUTH",
    label: fields.CONTROLAUTH,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(SortFields, {
    objectNo: OBJECTB,
    noParams: true,
    id: record.ID
  }), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(RelationshipForm);