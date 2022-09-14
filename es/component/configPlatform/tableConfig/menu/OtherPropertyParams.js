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
 * @Description: 其他对象属性页弹窗配置参数
 */
import React, { useState, useEffect } from 'react';
import { Form, Button, Select, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import { queryObjFields } from '../../../../service/metaApi';
import SearchInput from '../../../common/search/SearchInput';
import language from '@/locale/language';
import { queryItemPGR } from '../../../../service/metaApi';
import { parseMeta } from '../../../../utils/utils';
import { queryModelMap } from '../../../../utils/queryTabConfigRelationApi';
var _language$configPlatf = language.configPlatform.tableConfig,
    fields1 = _language$configPlatf.fieldsProperty.fields,
    fields = _language$configPlatf.objectMenu.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      form = _ref.form,
      TABLENAME = _ref.TABLENAME,
      MNO = _ref.MNO;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      sfieldList = _useState2[0],
      setSfieldList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tfieldList = _useState4[0],
      setTfieldList = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      objectNo = _useState6[0],
      setObjectNo = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      RELEVANCE = _useState8[0],
      setRELEVANCE = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      MNOList = _useState10[0],
      setMNOList = _useState10[1];

  useEffect(function () {
    queryFields(TABLENAME, 1);

    var _ref2 = form.getFieldValue('PARAMS') || {},
        objectNo = _ref2.objectNo,
        RELEVANCE = _ref2.RELEVANCE;

    if (objectNo) {
      setObjectNo(objectNo);
      queryFields(objectNo, 0);
      getMNOList(objectNo);
    }

    RELEVANCE && setRELEVANCE(true);
  }, [TABLENAME, objectNo, form, MNO]); // 查询字段列表

  var queryFields = function queryFields(objectNo, type) {
    queryItemPGR({
      tn: 11,
      tableName: objectNo
    }).then(function (res) {
      type ? setSfieldList(parseMeta(res.dataList)) : setTfieldList(parseMeta(res.dataList));
    });
  }; // 点击“支持关联关系”，更新状态值


  var clickRelevance = function clickRelevance(event) {
    setRELEVANCE(event.target.checked);
  }; // 选择目标对象标识


  var selectItemNo = function selectItemNo() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          var TABLENAME = rows[0].TABLENAME;
          form.setFieldsValue({
            PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, {
              TABLENAME: TABLENAME
            })
          });
          setObjectNo(TABLENAME);
          getMNOList(TABLENAME);
        }
      }
    });
  }; // 选择关联关系标识


  var selectRELEVANCENO = function selectRELEVANCENO() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'relationship',
        condition: "A.objectB='".concat(objectNo, "'"),
        // 空
        onSelect: function onSelect(rows) {
          form.setFieldsValue({
            PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, {
              RELEVANCENO: rows[0].NO
            })
          });
        }
      }
    });
  }; // 获取弹窗标识列表


  var getMNOList = function getMNOList(objectNo) {
    var tn = queryModelMap('META_OBJECT_FORM');
    queryItemPGR({
      tn: tn,
      tableName: objectNo
    }).then(function (res) {
      if (res) setMNOList(parseMeta(res.dataList));
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: "MNO",
    label: fields.MNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, MNOList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'TABLENAME'],
    label: fields1.TTABLENAME,
    onClick: selectItemNo,
    rules: [{
      required: true
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "ant-form-inline",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'RELEVANCE'],
    label: fields1.RELEVANCE,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: clickRelevance
  })), RELEVANCE && /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'RELEVANCENO'],
    label: fields1.RELEVANCENO,
    rules: [{
      required: true
    }],
    onClick: selectRELEVANCENO
  })), /*#__PURE__*/React.createElement(List, {
    name: ['PARAMS', 'mapFields'],
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
    }, fields.map(function (field) {
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
        }
      }, (sfieldList || []).map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.NO,
          key: item.ID
        }, item.NAME);
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
        }
      }, tfieldList.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          value: item.NO,
          key: item.ID
        }, item.NAME);
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
        width: '100px',
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), "add")));
  }));
};

export default connect()(Index);