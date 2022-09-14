function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 日历视图页面参数
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import SearchInput from '../../common/search/SearchInput';
import { queryItem, queryItemPGR, queryObjFields } from '../../../service/metaApi';
import language from '@/locale/language';
import { isEnglish, parseMeta } from '../../../utils/utils';
import { queryRelationPropertyQueryApi } from '../../../utils/queryTabConfigRelationApi';
var fields1 = language.configPlatform.navMenu.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      form = _ref.form,
      objectNo = _ref.objectNo,
      ID = _ref.ID;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  useEffect(function () {
    if (objectNo) {
      getFieldList(objectNo);
    }

    var PARAMS = form.getFieldValue('PARAMS');
    var _PARAMS$contentFields = PARAMS.contentFields,
        contentFields = _PARAMS$contentFields === void 0 ? [] : _PARAMS$contentFields;

    if (!contentFields || contentFields.length === 0) {
      form.setFieldsValue({
        PARAMS: {
          contentFields: [{
            contentField: ''
          }]
        }
      });
    }
  }, [objectNo, form]);

  var getFieldList = function getFieldList(tableName) {
    var tn = 11;
    queryItemPGR({
      tn: tn,
      tableName: tableName,
      objectId: ID
    }).then(function (res) {
      if (res && res.dataList) setFieldList(parseMeta(res.dataList));
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "ant-form-inline",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'sTimeField'],
    label: fields1.startTimeField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'DateTime';
  }) || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'eTimeField'],
    label: fields1.endTimeField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'DateTime';
  }) || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'typeField'],
    label: fields1.typeField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'ValueList' || item.EDITOR === 'MapValueList' || item.EDITOR === 'RadioEditor';
  }) || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'statisticsField'],
    label: fields1.statisticsField,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(List, {
    name: ['PARAMS', 'contentFields'],
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
      }, /*#__PURE__*/React.createElement(Item, {
        label: fields1.contentField,
        name: [field.name, 'contentField'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '显示字段']
      }, /*#__PURE__*/React.createElement(Select, null, (fieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.META.FIELDNAME,
          key: item.META.FIELDNAME
        }, isEnglish ? item.ENNAME : item.NAME);
      }))), index > 0 && /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), fields1.add_content_field)));
  }));
};

export default connect()(Index);