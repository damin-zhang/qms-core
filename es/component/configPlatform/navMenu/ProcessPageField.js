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

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, InputNumber, Divider, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined, MenuOutlined } from '@ant-design/icons';
import DragModal from '../../common/drag/DragModal';
import TableWithBtn from '../../common/table/TableWithBtn';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';
var Item = Form.Item,
    List = Form.List;
var defaultProcessFieldList = [{
  name: '实例标题',
  enName: 'title',
  fieldName: 'title',
  colWidth: 380
}, {
  name: '流程名称',
  enName: 'Process Name',
  fieldName: 'NAME',
  colWidth: 100
}, {
  name: '当前环节',
  enName: 'Current Link',
  fieldName: 'link',
  colWidth: 100
}, {
  name: '发起人',
  enName: 'Initiator',
  fieldName: 'startName',
  colWidth: 100
}];

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
  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(DragHandle, null), text);
};

var ProcessPageField = function ProcessPageField(_ref) {
  var form = _ref.form,
      _ref$businessFieldLis = _ref.businessFieldList,
      businessFieldList = _ref$businessFieldLis === void 0 ? [] : _ref$businessFieldLis,
      _ref$processFieldList = _ref.processFieldList,
      processFieldList = _ref$processFieldList === void 0 ? [] : _ref$processFieldList,
      setBusinessFieldList = _ref.setBusinessFieldList,
      setProcessFieldList = _ref.setProcessFieldList,
      fieldsMap = _ref.fieldsMap;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dragSortVisible = _useState4[0],
      setDragSortVisible = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      fType = _useState6[0],
      setFType = _useState6[1];

  useEffect(function () {
    var processField = form.getFieldValue('processField') || [];

    if (!processField.length) {
      form.setFieldsValue({
        processField: defaultProcessFieldList
      });
      setProcessFieldList(defaultProcessFieldList);
    }
  }, [form]);
  var columns = [{
    title: fieldsMap.NAME,
    dataIndex: 'name',
    render: function render(text) {
      return renders(text);
    }
  }, {
    title: fieldsMap.ENNAME,
    dataIndex: 'enName'
  }, {
    title: fieldsMap.fieldName,
    dataIndex: 'fieldName'
  }, {
    title: fieldsMap.colWidth,
    dataIndex: 'colWidth'
  }];
  var SortableItem = sortableElement(function (props) {
    return /*#__PURE__*/React.createElement("tr", props);
  });
  var SortableContainer = sortableContainer(function (props) {
    return /*#__PURE__*/React.createElement("tbody", props);
  });

  var nodeSort = function nodeSort() {
    var formValue = form.getFieldsValue();
    form.setFieldsValue(_objectSpread(_objectSpread({}, formValue), {}, _defineProperty({}, fType, fieldList)));

    if (fType === 'processField') {
      setProcessFieldList(fieldList);
    } else if (fType === 'businessField') {
      setBusinessFieldList(fieldList);
    }

    setDragSortVisible(false);
  };

  var onSortEnd = function onSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;

    if (oldIndex !== newIndex) {
      var newData = arrayMoveImmutable([].concat(fieldList), oldIndex, newIndex).filter(function (el) {
        return !!el;
      });
      setFieldList(newData);
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

    var index = fieldList.findIndex(function (x, index) {
      return index == restProps['data-row-key'];
    });
    return /*#__PURE__*/React.createElement(SortableItem, _extends({
      index: index
    }, restProps));
  };

  var tableProp = {
    columns: columns,
    dataList: fieldList,
    components: {
      body: {
        wrapper: DraggableContainer,
        row: DraggableBodyRow
      }
    },
    expandIconColumnIndex: 3
  };
  var businessCName = ['代号', '代码', '名称', '物料编码', '类型', '物料描述', '供应商名称', '供应商代码'];

  var businessCNameChange = function businessCNameChange(value, businessField, index) {
    var newbusinessField = businessField[index];

    switch (value) {
      case '代号':
        businessField[index] = {
          name: value,
          enName: 'No',
          fieldName: 'NO',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '代码':
        businessField[index] = {
          name: value,
          enName: 'Code',
          fieldName: 'CODE',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '名称':
        businessField[index] = {
          name: value,
          enName: 'Name',
          fieldName: 'NAME',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '物料编码':
        businessField[index] = {
          name: value,
          enName: 'Material Code',
          fieldName: 'MATERIAL_CODE',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '类型':
        businessField[index] = {
          name: value,
          enName: '审核意见',
          fieldName: 'options',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '物料描述':
        businessField[index] = {
          name: value,
          enName: 'Material Name',
          fieldName: 'MATERIAL_NAME',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '供应商名称':
        businessField[index] = {
          name: value,
          enName: 'Supplier Name',
          fieldName: 'SUPPLIER_NAME',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      case '供应商代码':
        businessField[index] = {
          name: value,
          enName: 'Supplier Code',
          fieldName: 'SUPPLIER_CODE',
          colWidth: 180,
          mapFields: newbusinessField.mapFields
        };
        break;

      default:
        break;
    }

    form.setFieldsValue({
      businessField: businessField
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null, fieldsMap.businessField), /*#__PURE__*/React.createElement(List, {
    name: 'businessField',
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
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.NAME,
        name: [field.name, 'name'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'name']
      }, /*#__PURE__*/React.createElement(Select, {
        onChange: function onChange(value) {
          var businessField = form.getFieldValue('businessField');
          businessCNameChange(value, businessField, index);
        },
        showSearch: true,
        onSearch: function onSearch(val) {
          if (val) {
            var businessField = form.getFieldValue('businessField');
            businessField[index].name = val;
            form.setFieldsValue({
              businessField: businessField
            });
          }
        }
      }, businessCName.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          key: item,
          value: item
        });
      }))), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.ENNAME,
        name: [field.name, 'enName'],
        fieldKey: [field.fieldKey, 'enName']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.contentField,
        name: [field.name, 'fieldName'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'fieldName']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.colWidth,
        name: [field.name, 'colWidth'],
        fieldKey: [field.fieldKey, 'colWidth']
      }, /*#__PURE__*/React.createElement(InputNumber, {
        min: 50
      })), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '50%',
          marginBottom: '8px'
        },
        label: fieldsMap.mapFields,
        name: [field.name, 'mapFields'],
        fieldKey: [field.fieldKey, 'mapFields']
      }, /*#__PURE__*/React.createElement(Select, {
        mode: "tags",
        dropdownStyle: {
          display: 'none'
        }
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
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), fieldsMap.addBusinessField), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginLeft: '26px'
      },
      disabled: businessFieldList.length > 1 ? false : true,
      onClick: function onClick() {
        setFType('businessField');
        setFieldList(businessFieldList);
        setDragSortVisible(true);
      }
    }, fieldsMap.sort));
  }), /*#__PURE__*/React.createElement(Divider, null, fieldsMap.processField), /*#__PURE__*/React.createElement(List, {
    name: 'processField',
    style: {
      width: '100%'
    }
  }, function (fields, _ref5) {
    var add = _ref5.add,
        remove = _ref5.remove;
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
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.NAME,
        name: [field.name, 'name'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'name']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.ENNAME,
        name: [field.name, 'enName'],
        fieldKey: [field.fieldKey, 'enName']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.fieldName,
        name: [field.name, 'fieldName'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, 'fieldName']
      }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
        style: {
          width: '25%',
          marginBottom: '8px'
        },
        label: fieldsMap.colWidth,
        name: [field.name, 'colWidth'],
        fieldKey: [field.fieldKey, 'colWidth']
      }, /*#__PURE__*/React.createElement(InputNumber, {
        min: 50
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
    }, /*#__PURE__*/React.createElement(PlusOutlined, null), fieldsMap.addProcessField), /*#__PURE__*/React.createElement(Button, {
      style: {
        marginLeft: '26px'
      },
      disabled: processFieldList.length > 1 ? false : true,
      onClick: function onClick() {
        setFType('processField');
        setFieldList(processFieldList);
        setDragSortVisible(true);
      }
    }, fieldsMap.sort));
  }), /*#__PURE__*/React.createElement(DragModal, {
    height: 500,
    title: fType === 'processField' ? fieldsMap.processField : fieldsMap.businessField,
    visible: dragSortVisible,
    onCancel: function onCancel() {
      return setDragSortVisible(false);
    },
    onOk: nodeSort
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp)));
};

export default ProcessPageField;