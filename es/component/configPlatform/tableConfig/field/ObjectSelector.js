function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 引用对象编辑器
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import SearchInput from '../../../common/search/SearchInput';
import { queryItemPGR, queryObjFields } from '../../../../service/metaApi';
import language from '@/locale/language';
var fields1 = language.configPlatform.tableConfig.fieldsProperty.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;

var ObjectSelector = function ObjectSelector(_ref) {
  var dispatch = _ref.dispatch,
      form = _ref.form,
      fieldList = _ref.fieldList,
      _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      sfieldList = _useState2[0],
      setSfieldList = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      canMultipleChoice = _useState4[0],
      setCanMultipleChoice = _useState4[1];

  useEffect(function () {
    var _ref2 = form.getFieldValue('EDITPARAMS') || {},
        tableName = _ref2.tableName,
        canMultipleChoice = _ref2.canMultipleChoice;

    if (tableName) {
      queryItemPGR({
        tn: 11,
        tableName: tableName
      }).then(function (res) {
        if (res && res.dataList) setSfieldList(res.dataList);
      });
    }

    if (canMultipleChoice) {
      setCanMultipleChoice(canMultipleChoice);
    }
  }, [form]);
  useEffect(function () {
    if (record.EDITOR === 'ObjectSelector') return;
    var fieldName = form.getFieldValue('FIELDNAME');
    form.setFieldsValue({
      EDITPARAMS: {
        mapFields: [{
          sfield: '',
          tfield: fieldName
        }]
      }
    });
  }, [form, sfieldList]);

  var selectData = function selectData() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          var TABLENAME = rows[0].TABLENAME;
          form.setFieldsValue({
            EDITPARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('EDITPARAMS')), {}, {
              tableName: TABLENAME,
              mapFields: [{
                sfield: ''
              }]
            })
          });
          queryItemPGR({
            tn: 11,
            tableName: TABLENAME
          }).then(function (res) {
            setSfieldList(res.dataList);
          });
        }
      }
    });
  }; // 点击多选按钮


  var clickMultipleChoice = function clickMultipleChoice(event) {
    setCanMultipleChoice(event.target.checked);
    var EDITPARAMS = form.getFieldValue('EDITPARAMS');

    if (event.target.checked === false) {
      form.setFieldsValue({
        EDITPARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('EDITPARAMS')), {}, {
          mapFields: [EDITPARAMS.mapFields[0]]
        })
      });
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: ['EDITPARAMS', 'tableName'],
    label: fields1.objectNo,
    rules: [{
      required: true
    }],
    onClick: selectData
  }), /*#__PURE__*/React.createElement(Item, {
    name: ['EDITPARAMS', 'sql'],
    label: fields1.sql
  }, /*#__PURE__*/React.createElement(Input.TextArea, null)), /*#__PURE__*/React.createElement(Item, {
    name: ['EDITPARAMS', 'canMultipleChoice'],
    label: fields1.canMultipleChoice,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: clickMultipleChoice
  })), /*#__PURE__*/React.createElement(Item, {
    name: ['EDITPARAMS', 'canInput'],
    label: fields1.canInput,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), canMultipleChoice ? /*#__PURE__*/React.createElement(List, {
    name: ['EDITPARAMS', 'mapFields'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref3) {
    var add = _ref3.add,
        remove = _ref3.remove;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        label: fields1.sfield,
        name: [field.name, 'sfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '源字段']
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        onSearch: function onSearch(val) {
          var EDITPARAMS = form.getFieldValue('EDITPARAMS');
          var _EDITPARAMS$mapFields = EDITPARAMS.mapFields,
              mapFields = _EDITPARAMS$mapFields === void 0 ? [] : _EDITPARAMS$mapFields;
          fieldList.forEach(function (item) {
            if (item.NAME === val) {
              if (!mapFields[index]) mapFields[index] = {};
              mapFields[index].sfield = item.FIELDNAME;
              form.setFieldsValue({
                EDITPARAMS: _objectSpread(_objectSpread({}, EDITPARAMS), {}, {
                  mapFields: mapFields
                })
              });
            }
          });
        }
      }, (sfieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.META.FIELDNAME,
          key: item.ID
        }, item.META.NAME + "_".concat(item.META.FIELDNAME));
      }))), /*#__PURE__*/React.createElement(Item, {
        label: fields1.tfield,
        name: [field.name, 'tfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '目标字段']
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        onSearch: function onSearch(val) {
          var EDITPARAMS = form.getFieldValue('EDITPARAMS');
          var _EDITPARAMS$mapFields2 = EDITPARAMS.mapFields,
              mapFields = _EDITPARAMS$mapFields2 === void 0 ? [] : _EDITPARAMS$mapFields2;
          fieldList.forEach(function (item) {
            if (item.NAME === val) {
              if (!mapFields[index]) mapFields[index] = {};
              mapFields[index].tfield = item.FIELDNAME;
              form.setFieldsValue({
                EDITPARAMS: _objectSpread(_objectSpread({}, EDITPARAMS), {}, {
                  mapFields: mapFields
                })
              });
            }
          });
        }
      }, fieldList.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.FIELDNAME,
          key: item.ID
        }, item.NAME + "_".concat(item.FIELDNAME));
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
        width: '100px',
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), "add")));
  }) : /*#__PURE__*/React.createElement(List, {
    name: ['EDITPARAMS', 'mapFields'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref4) {
    var add = _ref4.add,
        remove = _ref4.remove;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        label: fields1.sfield,
        name: [fields.length ? fields[0].name : field.name, 'sfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '源字段']
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        onSearch: function onSearch(val) {
          var EDITPARAMS = form.getFieldValue('EDITPARAMS');
          var _EDITPARAMS$mapFields3 = EDITPARAMS.mapFields,
              mapFields = _EDITPARAMS$mapFields3 === void 0 ? [] : _EDITPARAMS$mapFields3;
          fieldList.forEach(function (item) {
            if (item.NAME === val) {
              if (!mapFields[index]) mapFields[index] = {};
              mapFields[index].sfield = item.FIELDNAME;
              form.setFieldsValue({
                EDITPARAMS: _objectSpread(_objectSpread({}, EDITPARAMS), {}, {
                  mapFields: mapFields
                })
              });
            }
          });
        }
      }, (sfieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.META.FIELDNAME,
          key: item.ID
        }, item.META.NAME + "_".concat(item.META.FIELDNAME));
      }))), /*#__PURE__*/React.createElement(Item, {
        label: fields1.tfield,
        name: [fields.length ? fields[0].name : field.name, 'tfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '目标字段']
      }, /*#__PURE__*/React.createElement(Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
        onSearch: function onSearch(val) {
          var EDITPARAMS = form.getFieldValue('EDITPARAMS');
          var _EDITPARAMS$mapFields4 = EDITPARAMS.mapFields,
              mapFields = _EDITPARAMS$mapFields4 === void 0 ? [] : _EDITPARAMS$mapFields4;
          fieldList.forEach(function (item) {
            if (item.NAME === val) {
              if (!mapFields[index]) mapFields[index] = {};
              mapFields[index].tfield = item.FIELDNAME;
              form.setFieldsValue({
                EDITPARAMS: _objectSpread(_objectSpread({}, EDITPARAMS), {}, {
                  mapFields: mapFields
                })
              });
            }
          });
        }
      }, fieldList.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.FIELDNAME,
          key: item.ID
        }, item.NAME + "_".concat(item.FIELDNAME));
      }))));
    }));
  }), /*#__PURE__*/React.createElement(Item, {
    label: fields1.searchFields,
    name: ['EDITPARAMS', 'searchFields']
  }, /*#__PURE__*/React.createElement(Select, {
    mode: "multiple",
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (sfieldList || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.ID
    }, item.META.NAME + "_".concat(item.META.FIELDNAME));
  }))));
};

export default connect()(ObjectSelector);