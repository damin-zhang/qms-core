function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 属性页参数、缺省值和映射值
 */
import React, { useState, useEffect } from 'react';
import { Form, Button, Select, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { queryItemPGR, queryObjFields } from '../../../../service/metaApi';
import language from '@/locale/language';
import { isEnglish, parseMeta } from '../../../../utils/utils';
var fields1 = language.configPlatform.tableConfig.objectMenu.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;
var pattern = '^[A-Z][A-Z0-9_]*$';

var Index = function Index(_ref) {
  var TABLENAME = _ref.TABLENAME,
      OBJECTA = _ref.OBJECTA,
      MNO = _ref.MNO,
      record = _ref.record,
      namespace = _ref.namespace,
      PID = _ref.PID,
      form = _ref.form;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      sfieldList = _useState4[0],
      setSFieldList = _useState4[1];

  useEffect(function () {
    if (TABLENAME && MNO) {
      // objectNo: TABLENAME, propertyPageNo: MNO
      queryItemPGR({
        tn: 11,
        tableName: TABLENAME
      }).then(function (res) {
        if (res && res.dataList) setFieldList(parseMeta(res.dataList));
      });
    }

    if (OBJECTA) {
      queryItemPGR({
        tn: 11,
        tableName: OBJECTA
      }).then(function (res) {
        setSFieldList(parseMeta(res.dataList));
      });
    }
  }, [TABLENAME, OBJECTA, MNO]);

  var _onSearch = function onSearch(val, index) {
    if (val) {
      var _form$getFieldValue = form.getFieldValue('PARAMS'),
          mapParentFields = _form$getFieldValue.mapParentFields;

      mapParentFields[index] = mapParentFields[index] || {};
      mapParentFields[index].sfield = val;
      form.setFieldsValue({
        PARAMS: {
          mapParentFields: mapParentFields
        }
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(List, {
    name: ['PARAMS', 'defaultVList'],
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
    }, fields.map(function (field) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        label: fields1.field,
        name: [field.name, 'field'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '字段']
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, (fieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.FIELDNAME,
          key: item.ID
        }, isEnglish ? item.ENNAME : item.NAME);
      }))), /*#__PURE__*/React.createElement(Item, {
        label: fields1.key,
        name: [field.name, 'value'],
        fieldKey: [field.fieldKey, '排序'],
        rules: [{
          required: true
        }]
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), fields1.add_default_value)));
  }), /*#__PURE__*/React.createElement(List, {
    name: ['PARAMS', 'mapParentFields'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref3) {
    var add = _ref3.add,
        remove = _ref3.remove;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 'calc(100% - 14px)'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative'
        },
        className: "ant-form-inline",
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        label: fields1.sfield,
        name: [field.name, 'sfield'],
        rules: [{
          required: true,
          pattern: pattern
        }],
        fieldKey: [field.fieldKey, '字段'],
        style: {
          width: '45%',
          marginRight: '2%',
          marginBottom: '8px'
        }
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        onSearch: function onSearch(val) {
          return _onSearch(val, index);
        }
      }, (sfieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.META.FIELDNAME,
          key: item.META.FIELDNAME
        }, isEnglish ? item.ENNAME : item.NAME);
      }))), /*#__PURE__*/React.createElement(Item, {
        label: fields1.tfield,
        name: [field.name, 'tfield'],
        fieldKey: [field.fieldKey, '排序'],
        rules: [{
          required: true
        }],
        style: {
          width: '45%',
          marginRight: '2%',
          marginBottom: '8px'
        }
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, (fieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.META.FIELDNAME,
          key: item.META.FIELDNAME
        }, isEnglish ? item.ENNAME : item.NAME);
      }))), /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), fields1.add_mapping_field)));
  }));
};

export default Index;