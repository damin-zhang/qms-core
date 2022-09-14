"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _dva = require("dva");

var _DragModal = _interopRequireDefault(require("../../../common/drag/DragModal"));

var _LocaleNameForm = _interopRequireDefault(require("../../common/LocaleNameForm"));

var _EditorForm = _interopRequireDefault(require("./EditorForm"));

var _SearchInput = _interopRequireDefault(require("../../../common/search/SearchInput"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _mapParams = require("@/utils/mapParams");

var _EnMapParams = require("../../../../utils/EnMapParams");

var _utils = require("../../../../utils/utils");

var _excluded = ["record", "dispatch", "namespace", "fieldList", "PID", "isCommon", "parentState"];

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var edit = _language.default.common.edit,
    _language$configPlatf = _language.default.configPlatform.tableConfig.fieldsProperty,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title,
    fields1 = _language$configPlatf.fields1;
var Option = _antd.Select.Option;
var Item = _antd.Form.Item;
var TextArea = _antd.Input.TextArea;

var isNumber = function isNumber(type) {
  return type === 'INT' || type === 'DOUBLE' || type === 'FLOAT' || type === 'NUMERIC' || type === 'BOOLEAN';
};

var pattern = '^[A-Z][A-Z0-9_]*$';
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var FieldForm = function FieldForm(_ref) {
  var record = _ref.record,
      dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      fieldList = _ref.fieldList,
      PID = _ref.PID,
      isCommon = _ref.isCommon,
      parentState = _ref.parentState,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)({
    FLENGTH: false,
    ACCURACY: false,
    ALLOWNULL: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      disabledFields = _useState2[0],
      setDisabledFields = _useState2[1];

  var _useState3 = (0, _react.useState)({
    FLENGTH: true
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      requiredFields = _useState4[0],
      setRequiredFields = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      SUPLINK = _useState6[0],
      setSUPLINK = _useState6[1];

  var _useState7 = (0, _react.useState)('TextBox'),
      _useState8 = _slicedToArray(_useState7, 2),
      EDITOR = _useState8[0],
      setEDITOR = _useState8[1];

  var _useState9 = (0, _react.useState)('VARCHAR'),
      _useState10 = _slicedToArray(_useState9, 2),
      FTYPE = _useState10[0],
      setFTYPE = _useState10[1];

  var _useState11 = (0, _react.useState)(50),
      _useState12 = _slicedToArray(_useState11, 2),
      FLENGTH = _useState12[0],
      setFLENGTH = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      linkTYPE = _useState14[0],
      setLinkTYPE = _useState14[1];

  var TYPE = record.TYPE,
      STATE = record.STATE;
  (0, _react.useEffect)(function () {
    var ID = record.ID,
        SUPLINK = record.SUPLINK,
        EDITOR = record.EDITOR,
        FTYPE = record.FTYPE,
        FLENGTH = record.FLENGTH,
        DEFAULTV = record.DEFAULTV,
        LINKPARAMS = record.LINKPARAMS;

    if (ID) {
      setSUPLINK(SUPLINK);
      setEDITOR(EDITOR);
      setFTYPE(FTYPE);
      setFLENGTH(Number(FLENGTH || 50));

      if (isNumber(FTYPE) && DEFAULTV) {
        form.setFieldsValue({
          DEFAULTV: Number(DEFAULTV)
        });
      }

      if (LINKPARAMS && LINKPARAMS.linkType) setLinkTYPE(LINKPARAMS.linkType);
    } else {
      setLinkTYPE(null);
      setEDITOR('TextBox');
      setFTYPE('VARCHAR');
      setSUPLINK(false);
      setDisabledFields({
        FLENGTH: false,
        ACCURACY: false,
        ALLOWNULL: false
      });
      setRequiredFields({
        FLENGTH: true
      });
    }
  }, [record, form]);

  var onFinish = function onFinish(values) {
    for (var key in values) {
      values[key] = values[key] === '' ? undefined : values[key];
    }

    var EDITOR = values.EDITOR,
        EDITPARAMS = values.EDITPARAMS;

    if (EDITOR === 'ValueList' || EDITOR === 'CheckEditor') {
      var editorParm = EDITPARAMS.values.map(function (item) {
        delete item.key;
        return item;
      });
      EDITPARAMS.values = editorParm;
    }

    dispatch({
      type: !isCommon ? 'commonConfig/editItem' : 'addCommonField/edit',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        PID: PID,
        parentState: parentState
      }
    });
  };

  var onValuesChange = function onValuesChange(_ref2) {
    var FTYPE = _ref2.FTYPE,
        ONLY = _ref2.ONLY,
        EDITOR = _ref2.EDITOR,
        SUPLINK = _ref2.SUPLINK,
        FLENGTH = _ref2.FLENGTH;

    var disabledFields2 = _objectSpread({}, disabledFields);

    var requiredFields2 = _objectSpread({}, requiredFields);

    disabledFields2.FLENGTH = FTYPE === 'DATETIME' || FTYPE === 'BOOLEAN' || FTYPE === 'LONGTEXT' ? true : false;
    requiredFields2.FLENGTH = !disabledFields2.FLENGTH;

    if (FTYPE) {
      setFTYPE(FTYPE);

      if (FTYPE === 'DATETIME') {
        form.setFieldsValue({
          EDITOR: 'DateTime',
          EDITPARAMS: {
            format: 'YYYY-MM-DD HH:mm:ss'
          }
        });
        setEDITOR('DateTime');
      } else if (FTYPE === 'INT') {
        form.setFieldsValue({
          EDITOR: 'TextBox',
          FLENGTH: 1
        });
        setEDITOR('TextBox');
        setFLENGTH(1);
      } else if (FTYPE === 'BOOLEAN') {
        form.setFieldsValue({
          EDITOR: 'CheckBox',
          FLENGTH: 1,
          DEFAULTV: 0
        });
        setEDITOR('CheckBox');
        setFLENGTH(1);
      } else if (FTYPE === 'LONGTEXT') {
        form.setFieldsValue({
          EDITOR: ''
        });
        setEDITOR('RichText');
      } else if (FTYPE === 'JSON') {
        form.setFieldsValue({
          EDITOR: 'TextBox',
          FLENGTH: 0
        });
        setEDITOR('TextBox');
        setFLENGTH(0);
      } else if (FTYPE === 'VARCHAR') {
        if (form.getFieldValue('EDITOR') === 'TextArea') {
          form.setFieldsValue({
            EDITOR: 'TextArea',
            EDITPARAMS: {
              rowHeight: 5
            }
          });
          setEDITOR('TextArea');
        } else {
          form.setFieldsValue({
            EDITOR: 'TextBox',
            FLENGTH: 20
          });
          setEDITOR('TextBox');
        }
      } else {
        form.setFieldsValue({
          EDITOR: 'TextBox',
          FLENGTH: 10
        });
        setEDITOR('TextBox');
      }
    }

    if (typeof ONLY === 'boolean') {
      form.setFieldsValue({
        ALLOWNULL: false
      });
      disabledFields2.ALLOWNULL = ONLY;
    }

    setDisabledFields(disabledFields2);
    setRequiredFields(requiredFields2);
    if (typeof SUPLINK === 'boolean') setSUPLINK(SUPLINK);
    if (EDITOR) setEDITOR(EDITOR);

    if (EDITOR === 'TextArea') {
      form.setFieldsValue({
        EDITPARAMS: {
          rowHeight: 5
        },
        FTYPE: 'LONGTEXT'
      });
      setFTYPE('LONGTEXT');
    } else if (EDITOR === 'TextBox') {
      form.setFieldsValue({
        FTYPE: 'VARCHAR'
      });
      setFTYPE('VARCHAR');
    } else if (EDITOR === 'DateTime') {
      form.setFieldsValue({
        EDITPARAMS: {
          format: 'YYYY-MM-DD HH:mm:ss'
        },
        FTYPE: 'DATETIME'
      });
      setFTYPE('DATETIME');
    } else if (EDITOR === 'Password') {
      form.setFieldsValue({
        EDITPARAMS: {
          visibilityToggle: true
        }
      });
    } else if (EDITOR === 'CheckBox') {
      form.setFieldsValue({
        FTYPE: 'BOOLEAN',
        FLENGTH: 1
      });
      setFLENGTH(1);
      setFTYPE('BOOLEAN');
    } else if (EDITOR === 'RichText') {
      form.setFieldsValue({
        FTYPE: 'LONGTEXT'
      });
      setFTYPE('LONGTEXT');
    } else if (EDITOR === 'ImageEditor') {
      form.setFieldsValue({
        EDITPARAMS: {
          imgMaxSize: 1,
          imgFormat: ['image/jpg', 'image/jpeg', 'image/png', 'image/webp', 'image/gif'],
          imgMaximum: 20
        },
        FTYPE: 'LONGTEXT'
      });
      setFTYPE('LONGTEXT');
    }

    if (EDITOR === 'JSONEditor') {
      form.setFieldsValue({
        EDITPARAMS: {
          rowHeight: 2
        },
        FTYPE: 'LONGTEXT'
      });
      setFTYPE('LONGTEXT');
    }

    if (EDITOR === 'Switch') {
      form.setFieldsValue({
        FTYPE: 'BOOLEAN',
        FLENGTH: 1
      });
      setFLENGTH(1);
      setFTYPE('BOOLEAN');
    }

    if (FLENGTH) setFLENGTH(Number(FLENGTH));
  };

  var selectData = function selectData() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          form.setFieldsValue({
            LINKPARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('LINKPARAMS')), {}, {
              objectNo: rows[0].TABLENAME
            })
          });
        }
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "field",
    onFinish: onFinish,
    onValuesChange: onValuesChange,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "FIELDNAME",
    label: fields.FIELDNAME,
    rules: [{
      required: true,
      pattern: pattern
    }, {
      validator: function validator(_, value) {
        return (0, _utils.checkRepeat)(value, 'FIELDNAME', fieldList, record.ID);
      }
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: STATE !== 0 && STATE
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "FTYPE",
    label: fields.FTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: TYPE === 0 || EDITOR === 'ImageEditor',
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, _utils.isEnglish ? _EnMapParams.ftypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : _mapParams.ftypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), FTYPE !== 'DATETIME' && FTYPE !== 'BOOLEAN' && FTYPE !== 'LONGTEXT' && FTYPE !== 'BLOB' && EDITOR !== 'TextArea' && /*#__PURE__*/_react.default.createElement(Item, {
    name: "FLENGTH",
    label: fields.FLENGTH,
    rules: [{
      required: requiredFields.FLENGTH
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    disabled: disabledFields.FLENGTH || EDITOR === 'ImageEditor'
  })), (FTYPE === 'DOUBLE' || FTYPE === 'FLOAT') && /*#__PURE__*/_react.default.createElement(Item, {
    name: "ACCURACY",
    label: fields.ACCURACY,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: disabledFields.ACCURACY
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "DEFAULTV",
    label: fields.DEFAULTV,
    rules: [isNumber(FTYPE) ? {
      type: 'number'
    } : {
      type: 'string',
      max: FLENGTH
    }]
  }, isNumber(FTYPE) ? /*#__PURE__*/_react.default.createElement(_antd.InputNumber, null) : /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "ALLOWNULL",
    label: fields.ALLOWNULL,
    rules: [{
      required: requiredFields.ALLOWNULL
    }],
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    disabled: disabledFields.ALLOWNULL
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "ONLY",
    label: fields.ONLY,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "SUPQUERY",
    label: fields.SUPQUERY,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "SUPLINK",
    label: fields.SUPLINK,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "SUPCOPY",
    label: fields.SUPCOPY,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "TYPE",
    label: fields.TYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: true,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 0
  }, fields1.systemFields), /*#__PURE__*/_react.default.createElement(Option, {
    value: 1
  }, fields1.businessFields))), EDITOR && /*#__PURE__*/_react.default.createElement(_EditorForm.default, {
    EDITOR: EDITOR,
    fieldList: fieldList,
    form: form,
    FLENGTH: FLENGTH,
    isNumber: isNumber(FTYPE),
    FTYPE: FTYPE,
    record: record
  }), SUPLINK === true && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.LINKPARAMS), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['LINKPARAMS', 'linkType'],
    label: fields1.linkType,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    style: {
      width: '100%'
    },
    onChange: function onChange(val) {
      setLinkTYPE(val);
    }
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 0,
    key: 0
  }, fields1.dataDrill), /*#__PURE__*/_react.default.createElement(Option, {
    value: 1,
    key: 1
  }, fields1.aLabel), /*#__PURE__*/_react.default.createElement(Option, {
    value: 2,
    key: 2
  }, fields1.internalFile), /*#__PURE__*/_react.default.createElement(Option, {
    value: 3,
    key: 3
  }, fields1.externalFile), /*#__PURE__*/_react.default.createElement(Option, {
    value: 4,
    key: 4
  }, fields1.relatedPage))), linkTYPE === 0 || linkTYPE === 2 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['LINKPARAMS', 'objectNo'],
    label: fields.objectNo,
    onClick: selectData
  })) : null, linkTYPE === 1 ? /*#__PURE__*/_react.default.createElement(Item, {
    name: ['LINKPARAMS', 'aLink'],
    label: fields1.link,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(TextArea, null)) : null, linkTYPE !== 1 && linkTYPE !== 4 && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['LINKPARAMS', 'condition'],
    label: fields.condition
  }, /*#__PURE__*/_react.default.createElement(TextArea, null))), /*#__PURE__*/_react.default.createElement(_LocaleNameForm.default, null)));
};

var _default = (0, _dva.connect)()(FieldForm);

exports.default = _default;