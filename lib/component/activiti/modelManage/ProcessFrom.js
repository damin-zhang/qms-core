"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _processApi = require("../../../service/processApi");

var _SearchInput = _interopRequireDefault(require("../../common/search/SearchInput"));

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _metaApi = require("../../../service/metaApi");

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var msg = _language.default.tipWords.msg,
    _language$common = _language.default.common,
    edit = _language$common.edit,
    index = _language$common.index,
    select = _language$common.select,
    proFields = _language.default.activiti.Process_instance.fields,
    _language$configPlatf = _language.default.configPlatform.navMenu,
    navMenuTitle = _language$configPlatf.title,
    fields = _language$configPlatf.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;
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
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, react.PARAMS.objectNo);
  }
}];

var Process = function Process(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      recordB = _ref.recordB,
      visible = _ref.visible,
      onCancel = _ref.onCancel;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      navList = _useState4[0],
      setNavList = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      list = _useState6[0],
      setList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      rows = _useState8[0],
      setRows = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      rowsKey = _useState10[0],
      setRowsKey = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      objectModelVisible = _useState12[0],
      setObjectModelVisible = _useState12[1];

  (0, _react.useEffect)(function () {
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
      (0, _utils.showLoading)();
      (0, _metaApi.queryMenu)({
        tn: 0
      }).then(function (res) {
        if (res && res.flag) {
          var dataList = (0, _utils.parseMeta)(res.dataList).filter(function (item) {
            return item.FACETYPE > 0 && item.FACETYPE !== 8;
          });
          setNavList(dataList);
          setList(dataList);
          setObjectModelVisible(true);
          setRows([]);
          setRowsKey([]);
        }
      });
      (0, _utils.hideLoading)();
    };

    if (record && record.ID && record.COND !== '[]') {
      (0, _utils.confirm)({
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
    if (!rows.length) return _antd.message.warning('请选择有效数据');
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: edit,
    form: form,
    visible: visible,
    onCancel: onCancel,
    onOk: function onOk() {
      return form.submit();
    },
    width: "70%"
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "property",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    className: "spaceBetween",
    name: "objectNo",
    label: proFields.objNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: "objectNo",
    onClick: queryItemTableName,
    rules: [{
      required: true
    }]
  })), /*#__PURE__*/_react.default.createElement(Item, {
    className: "spaceBetween",
    name: "name",
    label: proFields.objName,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    className: "spaceBetween",
    name: "objectGridNo",
    label: fields.objectGridNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    className: "spaceBetween",
    name: "objectRelationPageNo",
    label: fields.objectRelationPageNo
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    className: "spaceBetween",
    name: "faceType",
    label: fields.FACETYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })), /*#__PURE__*/_react.default.createElement(Item, {
    className: "spaceBetween",
    name: "REMARK",
    label: proFields.remark
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(List, {
    name: 'condition',
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        // className='ant-form-inline'
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'nowrap'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
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
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, /*#__PURE__*/_react.default.createElement(Option, {
        key: "1",
        value: "AND"
      }, "AND"), /*#__PURE__*/_react.default.createElement(Option, {
        key: "2",
        value: "OR"
      }, "OR"))), /*#__PURE__*/_react.default.createElement(Item, {
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
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        allowClear: true,
        showSearch: true,
        onFocus: function onFocus() {
          (0, _processApi.processgGetMetaField)(form.getFieldValue().objectNo).then(function (res) {
            if (res) setFieldList(res.dataList);
          });
        }
      }, fieldList.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          key: item.fieldName,
          value: item.fieldName
        }, item.fieldName);
      }))), /*#__PURE__*/_react.default.createElement(Item, {
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
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        value: "value"
      }, /*#__PURE__*/_react.default.createElement(Option, {
        key: "1",
        value: ">"
      }, '>'), /*#__PURE__*/_react.default.createElement(Option, {
        key: "2",
        value: "<"
      }, '<'), /*#__PURE__*/_react.default.createElement(Option, {
        key: "3",
        value: "="
      }, '='), /*#__PURE__*/_react.default.createElement(Option, {
        key: "4",
        value: ">="
      }, '>='), /*#__PURE__*/_react.default.createElement(Option, {
        key: "5",
        value: ">="
      }, '<='), /*#__PURE__*/_react.default.createElement(Option, {
        key: "6",
        value: "L%"
      }, '左模糊'), /*#__PURE__*/_react.default.createElement(Option, {
        key: "7",
        value: "%L"
      }, '右模糊'), /*#__PURE__*/_react.default.createElement(Option, {
        key: "8",
        value: "%L%"
      }, '全模糊'))), /*#__PURE__*/_react.default.createElement(Item, {
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
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), index >= 0 && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      style: {
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      },
      disabled: form.getFieldValue().objectNo ? false : true
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), proFields.condition));
  }))), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: select,
    height: 600,
    visible: objectModelVisible,
    onCancel: function onCancel() {
      return setObjectModelVisible(false);
    },
    onOk: selectItemTableName
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps)));
};

function mapStateToProps(_ref3) {
  var record2 = _ref3.ProcessInstance.record2;
  return {
    record2: record2
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Process);

exports.default = _default;