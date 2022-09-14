function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 排序字段
 */
import React, { useState, useEffect } from 'react';
import { Form, Button, Select, Radio } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { queryItem, queryItemPGR, queryObjFields } from '../../../service/metaApi';
import language from '@/locale/language';
import { isEnglish, parseMeta } from '../../../utils/utils';
var fields1 = language.configPlatform.tableConfig.fieldsProperty.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;

var Index = function Index(_ref) {
  var objectNo = _ref.objectNo,
      noParams = _ref.noParams,
      id = _ref.id;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  useEffect(function () {
    if (objectNo) {
      queryItemPGR({
        tn: 11,
        tableName: objectNo,
        objectId: id
      }).then(function (res) {
        if (res && res.dataList) setFieldList(parseMeta(res.dataList));
      });
    }
  }, [objectNo, id]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(List, {
    name: noParams ? 'SORTFIELDS' : ['PARAMS', 'sortFields'],
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
        }, isEnglish ? item.ENNAME + "_".concat(item.FIELDNAME) : item.NAME + "_".concat(item.FIELDNAME));
      }))), /*#__PURE__*/React.createElement(Item, {
        label: fields1.sort,
        name: [field.name, 'sort'],
        fieldKey: [field.fieldKey, '排序']
      }, /*#__PURE__*/React.createElement(Radio.Group, null, /*#__PURE__*/React.createElement(Radio, {
        value: "ASC"
      }, "\u6B63\u5E8F"), /*#__PURE__*/React.createElement(Radio, {
        value: "DESC"
      }, "\u5012\u5E8F"))), /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
        return add({
          sort: 'ASC'
        });
      }
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), "\u6DFB\u52A0\u6392\u5E8F\u5B57\u6BB5")));
  }));
};

export default Index;