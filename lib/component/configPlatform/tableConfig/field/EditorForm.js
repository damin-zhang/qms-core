"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _KeyValueList = _interopRequireDefault(require("./KeyValueList"));

var _ObjectSelector = _interopRequireDefault(require("./ObjectSelector"));

var _ViewSelector = _interopRequireDefault(require("./ViewSelector"));

var _mapParams = require("../../../../utils/mapParams");

var _language = _interopRequireDefault(require("@/locale/language"));

var _DBValueList = _interopRequireDefault(require("./DBValueList"));

var _DBValueListMultiple = _interopRequireDefault(require("./DBValueListMultiple"));

var _mapParams2 = require("@/utils/mapParams");

var _EnMapParams = require("../../../../utils/EnMapParams");

var _utils = require("../../../../utils/utils");

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$configPlatf = _language.default.configPlatform.tableConfig.fieldsProperty,
    fields = _language$configPlatf.fields,
    fields1 = _language$configPlatf.fields1;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var TextArea = _antd.Input.TextArea;
var Option = _antd.Select.Option;
var imgFormatList = [{
  label: 'jpg',
  value: 'image/jpg'
}, {
  label: 'jpeg',
  value: 'image/jpeg'
}, {
  label: 'png',
  value: 'image/png'
}, {
  label: 'webp',
  value: 'image/webp'
}, {
  label: 'gif',
  value: 'image/gif'
}];

var EditorForm = function EditorForm(_ref) {
  var EDITOR = _ref.EDITOR,
      fieldList = _ref.fieldList,
      form = _ref.form,
      FLENGTH = _ref.FLENGTH,
      isNumber = _ref.isNumber,
      FTYPE = _ref.FTYPE,
      record = _ref.record;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      imgMultiple = _useState4[0],
      setImgMultiple = _useState4[1];

  (0, _react.useEffect)(function () {
    if (EDITOR === 'ImageEditor') {
      var _form$getFieldValue = form.getFieldValue('EDITPARAMS'),
          _imgMultiple = _form$getFieldValue.imgMultiple;

      setImgMultiple(_imgMultiple);
    }

    if (EDITOR === 'JSONEditor') {
      var EDITPARAMS = record.EDITPARAMS;
      EDITPARAMS.JSONfields = EDITPARAMS.JSONfields || ['', ''];
      form.setFieldsValue({
        EDITPARAMS: EDITPARAMS
      });
    }
  }, [EDITOR, form, record]);

  var onChange = function onChange() {
    setIsChecked(!isChecked);
  }; // 点击图片多选


  var clickImgMultiple = function clickImgMultiple(event) {
    setImgMultiple(event.target.checked);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.EDITPARAMS), /*#__PURE__*/_react.default.createElement(Item, {
    name: "EDITOR",
    label: fields.EDITOR,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: FTYPE === 'TINYINT'
  }, _utils.isEnglish ? _EnMapParams.editorMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : _mapParams2.editorMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), EDITOR === 'TextArea' && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'rowHeight'],
    label: fields.rowHeight,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    min: 2,
    style: {
      width: '100%'
    }
  })), EDITOR === 'Password' && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'visibilityToggle'],
    label: fields.visibilityToggle,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), EDITOR === 'DateTime' && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'format'],
    label: fields.format,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, _mapParams.formatMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), EDITOR === 'DBValueList' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DBValueList.default, {
    form: form,
    fieldList: fieldList
  })), EDITOR === 'DBValueListMultiple' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_DBValueListMultiple.default, {
    form: form,
    fieldList: fieldList
  })), EDITOR === 'UserSelector' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'sql'],
    label: fields.sql
  }, /*#__PURE__*/_react.default.createElement(TextArea, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'selectMap'],
    label: fields.selectMap,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: onChange,
    checked: isChecked
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'tfield'],
    label: fields.tfield
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, isChecked ? fieldList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.FIELDNAME,
      key: item.ID
    }, item.NAME);
  }) : ''))), (EDITOR === 'UsersSelector' || EDITOR === 'DeptSelector' || EDITOR === 'OnSelector') && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'sql'],
    label: fields.sql
  }, /*#__PURE__*/_react.default.createElement(TextArea, null)), EDITOR === 'DeptSelector' && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'DeptMultiple'],
    label: fields.multiple,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), EDITOR === 'MapValueList' && /*#__PURE__*/_react.default.createElement(_KeyValueList.default, {
    form: form,
    fieldList: fieldList,
    canInput: true,
    FLENGTH: FLENGTH,
    isNumber: isNumber,
    EDITOR: EDITOR
  }), (EDITOR === 'ValueList' || EDITOR === 'ValueListDynamic' || EDITOR === 'RadioEditor' || EDITOR === 'CheckEditor') && /*#__PURE__*/_react.default.createElement(_KeyValueList.default, {
    isMap: EDITOR === 'RadioEditor' || EDITOR === 'ValueListDynamic' ? true : false,
    fieldList: fieldList,
    form: form,
    canInput: EDITOR === 'ValueList' || EDITOR === 'ValueListDynamic',
    FLENGTH: FLENGTH,
    isNumber: isNumber,
    EDITOR: EDITOR
  }), EDITOR === 'ObjectSelector' && /*#__PURE__*/_react.default.createElement(_ObjectSelector.default, {
    form: form,
    fieldList: fieldList,
    record: record
  }), EDITOR === 'ViewSelector' && /*#__PURE__*/_react.default.createElement(_ViewSelector.default, {
    form: form,
    fieldList: fieldList
  }), EDITOR === 'ImageEditor' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'imgMultiple'],
    label: fields.imgMultiple,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: clickImgMultiple
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'imgMaxSize'],
    label: fields.imgMaxSize,
    rules: [{
      required: true,
      type: 'number',
      min: 0,
      max: 20
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'imgFormat'],
    label: fields.imgFormat
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
    options: imgFormatList
  })), imgMultiple && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'imgMaximum'],
    label: fields.imgMaximum,
    rules: [{
      required: true,
      type: 'number',
      min: 0,
      max: 100
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
    style: {
      width: '100%'
    }
  }))), EDITOR === 'JSONEditor' && /*#__PURE__*/_react.default.createElement(List, {
    name: ['EDITPARAMS', 'JSONfields'],
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
          flexWrap: 'wrap'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: '50%',
          marginBottom: '8px'
        },
        label: "".concat(fields1.JsonFields).concat(index + 1),
        name: [field.name],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, fields.JsonFields]
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), index > 1 && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '98%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), fields1.addJsonFields));
  }), EDITOR === 'Switch' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    style: {
      width: '50%',
      marginBottom: '8px'
    },
    label: fields1.openField,
    name: ['EDITPARAMS', 'switchOn']
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    style: {
      width: '50%',
      marginBottom: '8px'
    },
    label: fields1.closeField,
    name: ['EDITPARAMS', 'switchOff']
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null))));
};

var _default = EditorForm;
exports.default = _default;