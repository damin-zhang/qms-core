"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _reactColor = require("react-color");

var _language = _interopRequireDefault(require("@/locale/language"));

var _DragModal = _interopRequireDefault(require("../../../common/drag/DragModal"));

var _SearchInput = _interopRequireDefault(require("../../../common/search/SearchInput"));

var _dva = require("dva");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fields1 = _language.default.configPlatform.tableConfig.fieldsProperty.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;

var KeyValueList = function KeyValueList(_ref) {
  var dispatch = _ref.dispatch,
      _ref$isMap = _ref.isMap,
      isMap = _ref$isMap === void 0 ? true : _ref$isMap,
      form = _ref.form,
      canInput = _ref.canInput,
      FLENGTH = _ref.FLENGTH,
      isNumber = _ref.isNumber,
      _ref$EDITOR = _ref.EDITOR,
      EDITOR = _ref$EDITOR === void 0 ? '' : _ref$EDITOR,
      _ref$fieldList = _ref.fieldList,
      fieldList = _ref$fieldList === void 0 ? [] : _ref$fieldList;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      index = _useState6[0],
      setIndex = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      colorArray = _useState8[0],
      setArray = _useState8[1];

  (0, _react.useEffect)(function () {
    var _ref2 = form.getFieldValue('EDITPARAMS') || {},
        values = _ref2.values;

    if (!values || values.length === 0) {
      form.setFieldsValue({
        EDITPARAMS: {
          values: [{
            name: ''
          }]
        }
      });
    }

    setArray(values);
  }, [form]);

  var handleChangeComplete = function handleChangeComplete(color) {
    setColor(color.hex);
  };

  var chooseColor = function chooseColor() {
    var _form$getFieldValue = form.getFieldValue('EDITPARAMS'),
        values = _form$getFieldValue.values;

    values[index] = values[index] || {};
    values[index].color = color;
    form.setFieldsValue({
      EDITPARAMS: {
        values: values
      }
    });
    setOpen(false);
  };

  var resetColor = function resetColor() {
    var _form$getFieldValue2 = form.getFieldValue('EDITPARAMS'),
        values = _form$getFieldValue2.values;

    values[index] = values[index] || {};
    values[index].color = '';
    setColor(values);
    form.setFieldsValue({
      EDITPARAMS: {
        values: values
      }
    });
  };

  var openColorPicker = function openColorPicker(index) {
    return function () {
      var _form$getFieldValue3 = form.getFieldValue('EDITPARAMS'),
          values = _form$getFieldValue3.values;

      values[index] = values[index] || {};
      setIndex(index);
      setOpen(true);
      setColor(values[index].color);
      setArray(values);
    };
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, canInput && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'canInput'],
    label: fields1.canInput,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)), !isMap == true ? /*#__PURE__*/_react.default.createElement(Item, {
    name: ['EDITPARAMS', 'multiple'],
    label: fields1.multiple,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null)) : '', EDITOR !== 'ValueListDynamic' && /*#__PURE__*/_react.default.createElement(List, {
    name: ['EDITPARAMS', 'values'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref3) {
    var add = _ref3.add,
        remove = _ref3.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      var label = function label(text, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          style: {
            color: colorArray && colorArray[index] ? colorArray[index].color : '#000'
          },
          onClick: openColorPicker(index)
        }, text);
      };

      var selectIcon = function selectIcon(name, index) {
        return function () {
          dispatch({
            type: 'selectData/packet',
            payload: {
              type: 'icon',
              visible: true,
              onSelect: function onSelect(ICON) {
                var values = form.getFieldValue(['EDITPARAMS', 'values']);
                values[index] = values[index] || {};
                values[index].icon = ICON;
                form.setFieldsValue({
                  EDITPARAMS: {
                    values: values
                  }
                });
                setArray(values);
              }
            }
          });
        };
      };

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
          width: isMap ? '33%' : '50%',
          marginBottom: '8px',
          color: colorArray && colorArray[index] ? colorArray[index].color : '#000'
        },
        label: label(fields1.name, index),
        name: [field.name, 'name'],
        rules: [{
          required: true
        }, !isMap && isNumber ? {
          type: 'number'
        } : {
          type: 'string',
          max: !isMap || isMap ? 50 : FLENGTH
        }],
        fieldKey: [field.fieldKey, '显示值']
      }, !isMap && isNumber ? /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
        style: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }) : /*#__PURE__*/_react.default.createElement(_antd.Input, {
        style: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          color: colorArray && colorArray[index] ? colorArray[index].color : '#000',
          WebkitTextFillColor: colorArray && colorArray[index] ? colorArray[index].color : '#000'
        }
      })), isMap && /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: isMap ? '33%' : '50%',
          marginBottom: '8px'
        },
        label: fields1.key,
        name: [field.name, 'key'],
        rules: [{
          required: true
        }, isNumber ? {
          type: 'number'
        } : {
          type: 'string',
          max: FLENGTH
        }],
        fieldKey: [field.fieldKey, '映射值']
      }, isNumber ? /*#__PURE__*/_react.default.createElement(_antd.InputNumber, null) : /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: isMap ? '33%' : '50%',
          marginBottom: '8px',
          display: 'none'
        },
        label: fields1.color + '配置',
        name: [field.name, 'name'],
        fieldKey: [field.fieldKey, '颜色']
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
        style: {
          width: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          backgroundColor: colorArray && colorArray[index] ? colorArray[index].color : '#ffffff',
          borderRadius: '3px',
          opacity: '0.7'
        },
        icon: /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, {
          key: index
        }),
        key: index,
        onClick: openColorPicker(index)
      })), /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: isMap ? '33%' : '50%',
          marginBottom: '8px'
        },
        label: fields1.icon,
        name: [field.name, 'icon'],
        fieldKey: [field.fieldKey, 'Icon']
      }, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
        name: [field.name, 'icon'],
        label: fields.ICON,
        onClick: selectIcon(field.name, index),
        icon: colorArray && colorArray[index] && colorArray[index].icon || '',
        iconColor: colorArray && colorArray[index] && colorArray[index].color || ''
      })), (EDITOR === 'RadioEditor' || EDITOR === 'ValueList' || EDITOR === 'MapValueList' || EDITOR === 'DBValueList') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: isMap ? '33%' : '50%',
          marginBottom: '8px'
        },
        label: "\u591A\u80BD\u5B57\u6BB5",
        name: [field.name, 'peptideFields']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        mode: "multiple"
      }, fieldList.length > 0 && fieldList.filter(function (item) {
        return item.TYPE !== 0;
      }).map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
          key: item.ID,
          value: item.FIELDNAME
        }, item.NAME);
      }))), /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: isMap ? '33%' : '50%',
          marginBottom: '8px'
        },
        label: "\u591A\u80BD\u6574\u884C",
        name: [field.name, 'peptideFLine'],
        valuePropName: "checked"
      }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null))), index > 0 && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);

          var _form$getFieldValue4 = form.getFieldValue('EDITPARAMS'),
              values = _form$getFieldValue4.values;

          setArray(values);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      style: {
        marginLeft: isMap ? '13.2%' : '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), "add"), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
      width: "auto",
      visible: open,
      onCancel: function onCancel() {
        return setOpen(false);
      },
      onOk: chooseColor,
      title: "\u9009\u62E9\u989C\u8272",
      footer: [/*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        onClick: resetColor
      }, fields1.reset), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        onClick: function onClick() {
          return setOpen(false);
        }
      }, fields1.cancel), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        onClick: chooseColor
      }, fields1.ok))]
    }, /*#__PURE__*/_react.default.createElement(_reactColor.SketchPicker, {
      onChangeComplete: handleChangeComplete,
      color: color,
      width: 300
    })));
  }));
};

var _default = (0, _dva.connect)()(KeyValueList);

exports.default = _default;