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

/*
 * @Description: 绑定对象表单
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Button, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { processgGetMetaField } from '../../../service/processApi';
import SearchInput from '../../common/search/SearchInput';
import DragModal from '../../common/drag/DragModal';
import { queryMenu } from '../../../service/metaApi';
import { confirm, hideLoading, parseMeta, showLoading } from '../../../utils/utils';
import language from '@/locale/language';
import TableWithBtn from '../../common/table/TableWithBtn';
var msg = language.tipWords.msg,
    _language$common = language.common,
    edit = _language$common.edit,
    index = _language$common.index,
    select = _language$common.select,
    proFields = language.activiti.Process_instance.fields,
    _language$configPlatf = language.configPlatform.navMenu,
    navMenuTitle = _language$configPlatf.title,
    fields = _language$configPlatf.fields;
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
var columns = [{
  title: index,
  dataIndex: 'index',
  align: 'left',
  width: 120,
  render: function render(text, record, index) {
    return index + 1;
  }
}, {
  title: navMenuTitle,
  dataIndex: 'NAME',
  width: 250
}, {
  title: proFields.objNo,
  dataIndex: 'objectNo',
  render: function render(text, react) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, react.PARAMS.objectNo);
  }
}];

var Process = function Process(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      recordB = _ref.recordB,
      visible = _ref.visible,
      onCancel = _ref.onCancel;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      navList = _useState4[0],
      setNavList = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      rows = _useState8[0],
      setRows = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      rowsKey = _useState10[0],
      setRowsKey = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      objectModelVisible = _useState12[0],
      setObjectModelVisible = _useState12[1];

  useEffect(function () {
    var data = {};

    if (record && record.ID) {
      data.objectNo = record.OBJECTNO;
      data.name = record.NAME;
      data.condition = record.condition ? record.condition : JSON.parse(record.COND);
      data.REMARK = record.REMARK || undefined;
    }

    form.setFieldsValue(data);
  }, [record, form]);

  var onFinish = function onFinish(values) {
    values.condition = values.condition || [];
    dispatch({
      type: 'ProcessInstance/editBind',
      payload: {
        values: values,
        record: record,
        recordB: recordB
      }
    });
  };

  var checkRule = function checkRule(value, index) {
    var Reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g;
    var fValue = form.getFieldValue('condition');

    if (fValue[index].rule === '>' || fValue[index].rule === '<' || fValue[index].rule === '>=' || fValue[index].rule === '<=') {
      if (!Reg.test(value)) return Promise.reject(msg);
    }

    return Promise.resolve();
  };

  var queryItemTableName = function queryItemTableName() {
    var query = function query() {
      showLoading();
      queryMenu({
        tn: 0
      }).then(function (res) {
        if (res && res.flag) {
          var dataList = parseMeta(res.dataList).filter(function (item) {
            return item.FACETYPE > 0 && item.FACETYPE !== 8;
          });
          setNavList(dataList);
          setList(dataList);
          setObjectModelVisible(true);
          setRows([]);
          setRowsKey([]);
        }
      });
      hideLoading();
    };

    if (record && record.ID && record.COND !== '[]') {
      confirm({
        title: proFields.upObjTip,
        onOk: query
      });
    } else query();
  };

  var onSearch = function onSearch(value) {
    if (value) {
      var data = list.filter(function (item) {
        return item.PARAMS.objectNo.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.NAME.toUpperCase().indexOf(value.toUpperCase()) >= 0;
      });
      setNavList(data);
    } else {
      setNavList(list);
    }

    setRows([]);
    setRowsKey([]);
  };

  var selectItemTableName = function selectItemTableName() {
    if (!rows.length) return message.warning('请选择有效数据');
    var _rows$ = rows[0],
        PARAMS = _rows$.META.PARAMS,
        NAME = _rows$.NAME,
        FACETYPE = _rows$.FACETYPE;

    if (record && record.ID && record.COND !== '[]') {
      form.setFieldsValue(_objectSpread({
        name: NAME,
        faceType: FACETYPE,
        condition: []
      }, PARAMS));
    } else {
      form.setFieldsValue(_objectSpread({
        name: NAME,
        faceType: FACETYPE
      }, PARAMS));
    }

    setObjectModelVisible(false);
  };

  var tableProps = {
    dataList: navList,
    columns: columns,
    rowSelection: {
      type: 'radio',
      onChange: function onChange(rowKey, rows) {
        setRows(rows);
        setRowsKey(rowKey);
      },
      selectedRowKeys: rowsKey
    },
    onSearch: onSearch
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DragModal, {
    title: edit,
    form: form,
    visible: visible,
    onCancel: onCancel,
    onOk: function onOk() {
      return form.submit();
    },
    width: "70%"
  }, /*#__PURE__*/React.createElement(Form, _extends({
    name: "property",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, layout), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "objectNo",
    label: proFields.objNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(SearchInput, {
    name: "objectNo",
    onClick: queryItemTableName,
    rules: [{
      required: true
    }]
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "name",
    label: proFields.objName,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "objectGridNo",
    label: fields.objectGridNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "objectRelationPageNo",
    label: fields.objectRelationPageNo
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "faceType",
    label: fields.FACETYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "REMARK",
    label: proFields.remark
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(List, {
    name: 'condition',
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        // className='ant-form-inline'
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'nowrap'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: proFields.keyWord,
        name: [field.name, 'keyWord'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, proFields.keyWord]
      }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
        key: "1",
        value: "AND"
      }, "AND"), /*#__PURE__*/React.createElement(Option, {
        key: "2",
        value: "OR"
      }, "OR"))), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: proFields.fieldName,
        name: [field.name, 'fieldName'],
        disabled: form.getFieldValue().objectNo ? false : true,
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, proFields.fieldName]
      }, /*#__PURE__*/React.createElement(Select, {
        allowClear: true,
        showSearch: true,
        onFocus: function onFocus() {
          processgGetMetaField(form.getFieldValue().objectNo).then(function (res) {
            if (res) setFieldList(res.dataList);
          });
        }
      }, fieldList.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          key: item.fieldName,
          value: item.fieldName
        }, item.fieldName);
      }))), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: proFields.rule,
        name: [field.name, 'rule'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, proFields.rule]
      }, /*#__PURE__*/React.createElement(Select, {
        value: "value"
      }, /*#__PURE__*/React.createElement(Option, {
        key: "1",
        value: ">"
      }, '>'), /*#__PURE__*/React.createElement(Option, {
        key: "2",
        value: "<"
      }, '<'), /*#__PURE__*/React.createElement(Option, {
        key: "3",
        value: "="
      }, '='), /*#__PURE__*/React.createElement(Option, {
        key: "4",
        value: ">="
      }, '>='), /*#__PURE__*/React.createElement(Option, {
        key: "5",
        value: ">="
      }, '<='), /*#__PURE__*/React.createElement(Option, {
        key: "6",
        value: "L%"
      }, '左模糊'), /*#__PURE__*/React.createElement(Option, {
        key: "7",
        value: "%L"
      }, '右模糊'), /*#__PURE__*/React.createElement(Option, {
        key: "8",
        value: "%L%"
      }, '全模糊'))), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: proFields.fieldValue,
        name: [field.name, 'fieldValue'],
        rules: [{
          required: true,
          validator: function validator(_, value) {
            return checkRule(value, index);
          }
        }],
        fieldKey: [field.fieldKey, proFields.fieldValue]
      }, /*#__PURE__*/React.createElement(Input, null)), index >= 0 && /*#__PURE__*/React.createElement(MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/React.createElement(Button, {
      type: "dashed",
      style: {
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      },
      disabled: form.getFieldValue().objectNo ? false : true
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), proFields.condition));
  }))), /*#__PURE__*/React.createElement(DragModal, {
    title: select,
    height: 600,
    visible: objectModelVisible,
    onCancel: function onCancel() {
      return setObjectModelVisible(false);
    },
    onOk: selectItemTableName
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps)));
};

function mapStateToProps(_ref3) {
  var record2 = _ref3.ProcessInstance.record2;
  return {
    record2: record2
  };
}

export default connect(mapStateToProps)(Process);