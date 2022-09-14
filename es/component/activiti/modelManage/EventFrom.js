var _excluded = ["className", "style"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * @Description: 绑定事件表单
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Button, message, Divider, Checkbox } from 'antd';
import { MinusCircleOutlined, PlusOutlined, MenuOutlined } from '@ant-design/icons';
import { processGetProcessNode, processGetMenu } from '../../../service/processApi';
import DragModal from '../../common/drag/DragModal';
import language from '@/locale/language';
import { queryItemPGR } from '../../../service/metaApi';
import { isEnglish } from '../../../utils/utils';
import TableWithBtn from '../../common/table/TableWithBtn';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
var edit = language.common.edit,
    proFields = language.activiti.Process_instance.fields;
var Item = Form.Item,
    List = Form.List;
var Option = Select.Option;
var layout = {
  labelCol: {
    span: 10
  },
  wrapperCol: {
    span: 14
  }
};
var layout2 = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};
var FTYPE = {
  idea: '意见类',
  result: '结论类',
  user: '用户类',
  mail: '邮件',
  other: '其他',
  file: '文件上传'
};
var ETYPE = {
  TextBox: '文本框',
  TextArea: '文本域',
  RadioEditor: '单选列表',
  UsersSelector: '用户选择',
  CC: '邮件抄送',
  upload: '文件上传'
};
var columns = [{
  title: '事件类型',
  dataIndex: 'FTYPE',
  render: function render(text) {
    return renders(text);
  }
}, {
  title: '显示名称',
  dataIndex: 'DISPLAY_NAME'
}, {
  title: '字段名称',
  dataIndex: 'FIELDNAME'
}, {
  title: '编辑方式',
  dataIndex: 'ETYPE',
  render: function render(text) {
    return /*#__PURE__*/React.createElement("span", null, ETYPE[text]);
  }
}];
var scriptInitValue = "/*\n* @description: JS\u811A\u672C\u4F7F\u7528\u63CF\u8FF0\n* @param (objectForm, processForm, reverseData, userName): (\u4E1A\u52A1\u6570\u636E\u8868\u5355, \u6D41\u7A0B\u8282\u70B9\u8868\u5355, \u6D41\u7A0B\u5BF9\u8C61\u9700\u4FEE\u6539\u6570\u636E: \u76F4\u63A5\u8D4B\u503C, \u5F53\u524D\u7528\u6237\u540D)\n* @return: \u8FD4\u56DE\u503C\u4E3Aboolean\u7C7B\u578B\n* @tips: \u4E0E\u5224\u65AD\u7B26: &&, \u6216\u5224\u65AD\u7B26: ||, \u975E\u5224\u65AD\u7B26 !==, \u7B49\u4E0E\u7B26 === \n* @message .warning: \u5168\u5C40\u63D0\u793A\u4FE1\u606F \n*/\n// \u793A\u4F8B \u5224\u65AD\u662F\u5426\u586B\u5199\u7ED3\u8BBA\u610F\u89C1, \u6CA1\u6709\u586B\u5199\u7684\u65F6\u5019\u63D0\u793A\u4FE1\u606F\u5E76\u4E14 return false. \u4E0D\u4F1A\u4EA4\u4E92\u540E\u53F0; \u4FEE\u6539\u4E3B\u5BF9\u8C61\u72B6\u6001\u4E3AA.\n\n// const result = processForm.options !== undefined\n// if(!result ) message .warning('\u8BF7\u586B\u5199\u7ED3\u8BBA\u610F\u89C1!')\n// reverseData.STATE = 'a'\nreturn true";

var renders = function renders(text) {
  var DragHandle = sortableHandle(function () {
    return /*#__PURE__*/React.createElement(MenuOutlined, {
      style: {
        cursor: 'grab',
        color: '#999',
        marginRight: '8px'
      }
    });
  });
  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(DragHandle, null), FTYPE[text]);
};

var EventFrom = function EventFrom(_ref) {
  var selectedRows1 = _ref.selectedRows1,
      dispatch = _ref.dispatch,
      record = _ref.record,
      visible = _ref.visible,
      onCancel = _ref.onCancel;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      processList = _useState2[0],
      setProcessIdList = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      displayType = _useState4[0],
      setDisplayType = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      fieldList = _useState6[0],
      setFieldList = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      nodeList = _useState8[0],
      setNodeList = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      NODE_DEF_MODAL = _useState10[0],
      setNODE_DEF_MODAL = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      BUSINESS_D = _useState12[0],
      setBUSINESS_D = _useState12[1];

  var _useState13 = useState({}),
      _useState14 = _slicedToArray(_useState13, 2),
      formData = _useState14[0],
      setFormData = _useState14[1];

  var OBJECTNO = selectedRows1.length && selectedRows1[0].OBJECTNO;
  useEffect(function () {
    if (record && record.ID) {
      var BUSINESS_DEF = JSON.parse(record.BUSINESS_DEF || '{}');
      var NODE_DEF = JSON.parse(record.NODE_DEF || '[]');
      var NODE_EVENT = JSON.parse(record.NODE_EVENT || '[]');
      var REVERSE_FIELDS = JSON.parse(record.REVERSE_FIELDS || '[]');
      var _BUSINESS_D = false;

      if (BUSINESS_DEF.hasOwnProperty('DISPLAY_TYPE')) {
        _BUSINESS_D = true;
        setBUSINESS_D(true);
      }

      setNodeList(NODE_DEF);
      form.setFieldsValue(_objectSpread(_objectSpread({}, record), {}, {
        BUSINESS_DEF: BUSINESS_DEF,
        NODE_DEF: NODE_DEF,
        NODE_EVENT: NODE_EVENT,
        BUSINESS_D: _BUSINESS_D,
        REVERSE_FIELDS: REVERSE_FIELDS
      }));
      setFormData(_objectSpread(_objectSpread({}, record), {}, {
        BUSINESS_DEF: BUSINESS_DEF,
        NODE_DEF: NODE_DEF,
        NODE_EVENT: NODE_EVENT,
        BUSINESS_D: _BUSINESS_D,
        REVERSE_FIELDS: REVERSE_FIELDS
      }));
      if (_BUSINESS_D) queryObjectFields();
    } else {
      var defaultNODE_DEF = [{
        FTYPE: 'idea',
        DISPLAY_NAME: '审核意见',
        FIELDNAME: 'options',
        ETYPE: 'TextArea',
        INIT: true
      }, {
        FTYPE: 'result',
        DISPLAY_NAME: '审核结论',
        FIELDNAME: 'conclusion',
        ETYPE: 'RadioEditor',
        INIT: true
      }, {
        FTYPE: 'mail',
        DISPLAY_NAME: '抄送人',
        FIELDNAME: 'cc',
        ETYPE: 'CC',
        INIT: true
      }, {
        FTYPE: 'file',
        DISPLAY_NAME: '附件',
        FIELDNAME: 'attachment',
        ETYPE: 'upload',
        INIT: true
      }];
      form.setFieldsValue({
        NODE_DEF: defaultNODE_DEF
      });
      setFormData({
        NODE_DEF: defaultNODE_DEF
      });
      setNodeList(defaultNODE_DEF);
      setBUSINESS_D(false);
    }

    return function () {
      form.resetFields();
      setNodeList([]);
      setBUSINESS_D(false);
    };
  }, [record, form, visible]);

  var onFinish = function onFinish(values) {
    delete values.BUSINESS_D;
    values.BUSINESS_DEF = JSON.stringify(values.BUSINESS_DEF);
    values.NODE_DEF = JSON.stringify(values.NODE_DEF);
    values.NODE_EVENT = JSON.stringify(values.NODE_EVENT);
    values.REVERSE_FIELDS = JSON.stringify(values.REVERSE_FIELDS);
    dispatch({
      type: 'EventBind/editNodeEvent',
      payload: {
        values: values,
        record: record,
        selectedRows1: selectedRows1
      }
    });
  };

  var onChange = function onChange(value, values) {
    setFormData(values);
    if (values.NODE_DEF) setNodeList(values.NODE_DEF.filter(function (item) {
      return item;
    }));
    if (value.BUSINESS_D !== undefined) setBUSINESS_D(value.BUSINESS_D);
    if (value.BUSINESS_DEF && value.BUSINESS_DEF.DISPLAY_TYPE !== undefined) setDisplayType(value.BUSINESS_DEF.DISPLAY_TYPE);
  };

  var queryObjectFields = function queryObjectFields() {
    queryItemPGR({
      tn: 11,
      tableName: OBJECTNO
    }).then(function (res) {
      if (res && res.flag) {
        setFieldList(res.dataList);
      }
    });
  };

  var SortableItem = sortableElement(function (props) {
    return /*#__PURE__*/React.createElement("tr", props);
  });
  var SortableContainer = sortableContainer(function (props) {
    return /*#__PURE__*/React.createElement("tbody", props);
  });

  var nodeSort = function nodeSort() {
    var formValue = form.getFieldsValue();
    var nodeVal = nodeList.map(function (item) {
      delete item.ID;
      return item;
    });
    form.setFieldsValue(_objectSpread(_objectSpread({}, formValue), {}, {
      NODE_DEF: nodeVal
    }));
    setFormData(_objectSpread(_objectSpread({}, formValue), {}, {
      NODE_DEF: nodeVal
    }));
    setNODE_DEF_MODAL(false);
  };

  var onSortEnd = function onSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;

    if (oldIndex !== newIndex) {
      var newData = arrayMoveImmutable([].concat(nodeList), oldIndex, newIndex).filter(function (el) {
        return !!el;
      });
      setNodeList(newData);
    }
  };

  var DraggableContainer = function DraggableContainer(props) {
    return /*#__PURE__*/React.createElement(SortableContainer, _extends({
      useDragHandle: true,
      disableAutoscroll: true,
      helperClass: "row-dragging",
      onSortEnd: onSortEnd
    }, props));
  };

  var DraggableBodyRow = function DraggableBodyRow(_ref3) {
    var className = _ref3.className,
        style = _ref3.style,
        restProps = _objectWithoutProperties(_ref3, _excluded);

    var index = nodeList.findIndex(function (x) {
      return x.ID === restProps['data-row-key'];
    });
    return /*#__PURE__*/React.createElement(SortableItem, _extends({
      index: index
    }, restProps));
  };

  var tableProp = {
    columns: columns,
    dataList: nodeList,
    components: {
      body: {
        wrapper: DraggableContainer,
        row: DraggableBodyRow
      }
    },
    expandIconColumnIndex: 3
  };

  var fTypeChange = function fTypeChange(value, NODE_DEF, index) {
    switch (value) {
      case 'idea':
        NODE_DEF[index] = {
          FTYPE: value,
          DISPLAY_NAME: '审核意见',
          FIELDNAME: 'options',
          ETYPE: 'TextArea',
          INIT: true
        };
        break;

      case 'result':
        NODE_DEF[index] = {
          FTYPE: value,
          DISPLAY_NAME: '审核结论',
          FIELDNAME: 'conclusion',
          ETYPE: 'RadioEditor',
          INIT: true
        };
        break;

      case 'mail':
        NODE_DEF[index] = {
          FTYPE: value,
          DISPLAY_NAME: '抄送人',
          FIELDNAME: 'cc',
          ETYPE: 'CC',
          INIT: true
        };
        break;

      case 'file':
        NODE_DEF[index] = {
          FTYPE: value,
          DISPLAY_NAME: '附件',
          FIELDNAME: 'attachment',
          ETYPE: 'upload',
          INIT: true
        };
        break;

      default:
        break;
    }

    form.setFieldsValue({
      EDITPARAMS: {
        NODE_DEF: NODE_DEF
      }
    });
    setFormData({
      NODE_DEF: NODE_DEF
    });
    setNodeList(NODE_DEF);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DragModal, {
    title: edit + proFields.bindEvent,
    form: form,
    visible: visible,
    onCancel: onCancel,
    onOk: function onOk() {
      return form.submit();
    }
  }, /*#__PURE__*/React.createElement(Form, _extends({
    name: "property",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, layout, {
    onValuesChange: onChange,
    initialValues: {
      BUSINESS_DEF: {
        DISPLAY_TYPE: 0,
        COLUMN: 2,
        EDITABLE: true
      }
    }
  }), /*#__PURE__*/React.createElement(Divider, null, "\u8282\u70B9\u4FE1\u606F"), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "PROCESS_NODE_NAME",
    label: proFields.processNodeName,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    onFocus: function onFocus() {
      processGetProcessNode({
        ID: selectedRows1[0].ID,
        PROCESSID: selectedRows1[0].PROCDEF_ID
      }).then(function (res) {
        if (res.flag) {
          setProcessIdList(res.dataList);

          if (res.dataList.length === 0) {
            message.warn(res.hint, 2);
          }
        }
      });
    },
    onChange: function onChange(val) {
      processList.map(function (item) {
        if (item.PROCESS_NODE_NAME === val) form.setFieldsValue({
          PROCESS_NODE: item.PROCESS_NODE
        });
      });
    }
  }, processList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item.PROCESS_NODE_NAME
    }, item.PROCESS_NODE_NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "PROCESS_NODE",
    label: proFields.processNode,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), /*#__PURE__*/React.createElement(Divider, null, "\u4E1A\u52A1\u5B9A\u4E49"), /*#__PURE__*/React.createElement(Item, {
    name: "BUSINESS_D",
    label: "\u5B9A\u4E49\u4E1A\u52A1\u5BF9\u8C61",
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), BUSINESS_D && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: ['BUSINESS_DEF', 'DISPLAY_TYPE'],
    label: "\u5C55\u793A\u7C7B\u578B",
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
    key: 0,
    value: 0
  }, "\u8868\u5355"), /*#__PURE__*/React.createElement(Option, {
    key: 1,
    value: 1
  }, "\u8868\u683C"))), displayType === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    label: "\u53EF\u7F16\u8F91",
    name: ['BUSINESS_DEF', 'EDITABLE'],
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Item, {
    label: "\u5217\u6570",
    name: ['BUSINESS_DEF', 'COLUMN'],
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
    key: 1,
    value: 1
  }, "1"), /*#__PURE__*/React.createElement(Option, {
    key: 2,
    value: 2
  }, "2"), /*#__PURE__*/React.createElement(Option, {
    key: 3,
    value: 3
  }, "3")))), /*#__PURE__*/React.createElement(Item, {
    label: "\u4E1A\u52A1\u5B57\u6BB5",
    name: ['BUSINESS_DEF', 'FIELDS'],
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    mode: "multiple",
    onFocus: queryObjectFields
  }, fieldList.map(function (field) {
    return /*#__PURE__*/React.createElement(Option, {
      key: field.FIELDNAME,
      value: field.META.FIELDNAME
    }, isEnglish ? field.META.ENNAME || field.META.FIELDNAME : field.META.NAME);
  })))), /*#__PURE__*/React.createElement(Divider, null, "\u8282\u70B9\u5B9A\u4E49"), /*#__PURE__*/React.createElement(List, {
    name: 'NODE_DEF',
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
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: "\u4E8B\u4EF6\u7C7B\u578B",
        name: [field.name, 'FTYPE'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'FTYPE']
      }, /*#__PURE__*/React.createElement(Select, {
        onChange: function onChange(value) {
          var NODE_DEF = form.getFieldValue('NODE_DEF');
          fTypeChange(value, NODE_DEF, index);
        }
      }, /*#__PURE__*/React.createElement(Option, {
        key: 0,
        value: "idea"
      }, "\u610F\u89C1\u7C7B"), /*#__PURE__*/React.createElement(Option, {
        key: 1,
        value: "result"
      }, "\u7ED3\u8BBA\u7C7B"), /*#__PURE__*/React.createElement(Option, {
        key: 2,
        value: "user"
      }, "\u7528\u6237\u7C7B"), /*#__PURE__*/React.createElement(Option, {
        key: 3,
        value: "mail"
      }, "\u90AE\u4EF6"), /*#__PURE__*/React.createElement(Option, {
        key: 4,
        value: "other"
      }, "\u5176\u4ED6"), /*#__PURE__*/React.createElement(Option, {
        key: 5,
        value: "file"
      }, "\u6587\u4EF6\u4E0A\u4F20"))), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: "\u663E\u793A\u540D\u79F0",
        name: [field.name, 'DISPLAY_NAME'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'DISPLAY_NAME']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: "\u5B57\u6BB5\u540D\u79F0",
        name: [field.name, 'FIELDNAME'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'FIELDNAME']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: "\u7F16\u8F91\u65B9\u5F0F",
        name: [field.name, 'ETYPE'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'ETYPE']
      }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
        key: "TextBox",
        value: "TextBox"
      }, "\u6587\u672C\u6846"), /*#__PURE__*/React.createElement(Option, {
        key: "TextArea",
        value: "TextArea"
      }, "\u6587\u672C\u57DF"), /*#__PURE__*/React.createElement(Option, {
        key: "RadioEditor",
        value: "RadioEditor"
      }, "\u5355\u9009\u5217\u8868"), /*#__PURE__*/React.createElement(Option, {
        key: "UsersSelector",
        value: "UsersSelector"
      }, "\u7528\u6237\u9009\u62E9"), /*#__PURE__*/React.createElement(Option, {
        key: "CC",
        value: "CC"
      }, "\u90AE\u4EF6\u6284\u9001"), /*#__PURE__*/React.createElement(Option, {
        key: "upload",
        value: "upload"
      }, "\u6587\u4EF6\u4E0A\u4F20"))), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '33%',
          marginBottom: '8px'
        },
        label: "\u521D\u59CB\u5316\u6E32\u67D3",
        name: [field.name, 'INIT'],
        fieldKey: [field.fieldKey, 'INIT'],
        valuePropName: "checked",
        initialValue: true
      }, /*#__PURE__*/React.createElement(Checkbox, null)), formData && formData.NODE_DEF && formData.NODE_DEF[index] && formData.NODE_DEF[index].ETYPE === 'RadioEditor' && /*#__PURE__*/React.createElement(List, {
        name: [field.name, 'EDITPARAMS']
      }, function (fields, _ref5) {
        var add2 = _ref5.add,
            remove2 = _ref5.remove;
        return /*#__PURE__*/React.createElement("div", {
          style: {
            width: '100%',
            marginBottom: 10
          }
        }, fields.map(function (item, index) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap'
            },
            key: item.key
          }, /*#__PURE__*/React.createElement(Item, {
            style: {
              width: '50%',
              marginBottom: '8px'
            },
            label: "\u5355\u9009\u5B57\u6BB5\u540D".concat(index + 1),
            name: [item.name, 'NAME'],
            rules: [{
              required: true
            }],
            fieldKey: [item.fieldKey, 'NAME']
          }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
            style: {
              width: '50%',
              marginBottom: '8px'
            },
            label: "\u5355\u9009\u5B57\u6BB5\u503C".concat(index + 1),
            name: [item.name, 'KEY'],
            rules: [{
              required: true
            }],
            fieldKey: [item.fieldKey, 'KEY']
          }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
            style: {
              width: '50%',
              marginBottom: '8px'
            },
            label: "\u591A\u80BD\u5B57\u6BB5",
            name: [item.name, 'PEPTIDE_FIELDS'],
            fieldKey: [item.fieldKey, 'PEPTIDE_FIELDS']
          }, /*#__PURE__*/React.createElement(Select, {
            mode: "multiple"
          }, formData && formData.NODE_DEF && formData.NODE_DEF.length && formData.NODE_DEF.map(function (item) {
            return /*#__PURE__*/React.createElement(React.Fragment, null, item && item.FIELDNAME && item.DISPLAY_NAME && /*#__PURE__*/React.createElement(Option, {
              key: item.FIELDNAME,
              value: item.FIELDNAME
            }, item.DISPLAY_NAME));
          }))), index >= 0 && /*#__PURE__*/React.createElement(MinusCircleOutlined, {
            style: {
              position: 'absolute',
              left: '100%',
              marginTop: '8px'
            },
            onClick: function onClick() {
              remove2(item.name);
            }
          }));
        }), /*#__PURE__*/React.createElement(Button, {
          type: "dashed",
          style: {
            marginLeft: '25%'
          },
          onClick: function onClick() {
            return add2();
          }
        }, /*#__PURE__*/React.createElement(PlusOutlined, null), proFields.radioOption));
      }), index >= 0 && /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
      }
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), proFields.nodeField), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginLeft: '26px'
      },
      disabled: nodeList.length > 1 ? false : true,
      onClick: function onClick() {
        setNodeList(nodeList.map(function (item, index) {
          return _objectSpread(_objectSpread({}, item), {}, {
            ID: index
          });
        }));
        setNODE_DEF_MODAL(true);
      }
    }, "\u6392\u5E8F"));
  }), /*#__PURE__*/React.createElement(Divider, null, "\u6D41\u7A0B\u6D41\u8F6C"), /*#__PURE__*/React.createElement(Item, {
    style: {
      width: '50%',
      marginBottom: '8px'
    },
    label: "\u6D41\u8F6C\u5B57\u6BB5",
    name: "REVERSE_FIELDS"
  }, /*#__PURE__*/React.createElement(Select, {
    mode: "multiple",
    onFocus: queryObjectFields
  }, fieldList.map(function (field) {
    return /*#__PURE__*/React.createElement(Option, {
      key: field.FIELDNAME,
      value: field.META.FIELDNAME
    }, isEnglish ? field.META.ENNAME || field.META.FIELDNAME : field.META.NAME);
  }))), /*#__PURE__*/React.createElement(Divider, null, "\u8282\u70B9\u4E8B\u4EF6"), /*#__PURE__*/React.createElement(List, {
    name: 'NODE_EVENT',
    style: {
      width: '100%'
    }
  }, function (fields, _ref6) {
    var add = _ref6.add,
        remove = _ref6.remove;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'nowrap'
        },
        key: field.key
      }, /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '30%',
          marginBottom: '8px'
        },
        label: "\u4E8B\u4EF6\u7C7B\u578B",
        name: [field.name, 'EVENT'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'EVENT']
      }, /*#__PURE__*/React.createElement(Select, null, /*#__PURE__*/React.createElement(Option, {
        key: 0,
        value: "submit"
      }, "\u4FDD\u5B58\u63D0\u4EA4"), /*#__PURE__*/React.createElement(Option, {
        key: 1,
        value: "entrust"
      }, "\u4EFB\u52A1\u59D4\u6258"), /*#__PURE__*/React.createElement(Option, {
        key: 2,
        value: "refusalTo"
      }, "\u9A73\u56DE\u81F3"), /*#__PURE__*/React.createElement(Option, {
        key: 3,
        value: "over"
      }, "\u7EC8\u6B62"))), /*#__PURE__*/React.createElement(Item, _extends({
        style: {
          width: '70%',
          marginBottom: '8px'
        },
        label: "\u811A\u672C\u9A8C\u8BC1",
        name: [field.name, 'SCRIPT'],
        fieldKey: [field.fieldKey, 'SCRIPT'],
        initialValue: scriptInitValue
      }, layout2), /*#__PURE__*/React.createElement(Input.TextArea, {
        def: true
      })), index >= 0 && /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
      }
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), proFields.nodeEvent));
  }))), /*#__PURE__*/React.createElement(DragModal, {
    height: 500,
    title: '节点排序',
    visible: NODE_DEF_MODAL,
    onCancel: function onCancel() {
      return setNODE_DEF_MODAL(false);
    },
    onOk: nodeSort
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp)));
};

function mapStateToProps(_ref7) {
  var ProcessInstance = _ref7.ProcessInstance;
  return {
    ProcessInstance: ProcessInstance
  };
}

export default connect(mapStateToProps)(EventFrom);