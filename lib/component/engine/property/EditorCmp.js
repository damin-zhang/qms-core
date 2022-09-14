"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _SearchInput = _interopRequireDefault(require("../../common/search/SearchInput"));

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _braftEditor = _interopRequireDefault(require("braft-editor"));

require("braft-editor/dist/index.css");

var _applicationApi = require("../../../service/applicationApi");

var _uploadApi = require("../../../service/uploadApi");

var _index2 = _interopRequireDefault(require("./index.css"));

var _utils = require("../../../utils/utils");

var _PicturesWall = _interopRequireDefault(require("./PicturesWall"));

var _SearchSelect = _interopRequireDefault(require("../../common/search/SearchSelect"));

var _reactSvg = require("react-svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var svgDir = require.context('../../../assets/icon/');

var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea,
    Password = _antd.Input.Password;
var TreeNode = _antd.TreeSelect.TreeNode;

var replaceDBSql = function replaceDBSql(form, sql, objectAData) {
  return sql.split('${').map(function (item) {
    var replaceArray = item.split("}");

    if (replaceArray[0].indexOf('OBJECTA.') === 0) {
      replaceArray.splice(0, 1, objectAData[replaceArray[0].slice(6)]);
    } else {
      var value = form.getFieldValue(replaceArray[0]);

      if (value) {
        replaceArray.splice(0, 1, value);
      }
    }

    return replaceArray.join('');
  }).reduce(function (total, value) {
    return total += value;
  });
};

var EditorCmp = function EditorCmp(_ref) {
  var pageFieldList = _ref.pageFieldList,
      form = _ref.form,
      setFileLocation = _ref.setFileLocation,
      setCanSubmit = _ref.setCanSubmit,
      list = _ref.list,
      columns = _ref.columns,
      setItem = _ref.setItem,
      selectData = _ref.selectData,
      namespace = _ref.namespace,
      advancedSearch = _ref.advancedSearch,
      batchEdit = _ref.batchEdit,
      labelLen = _ref.labelLen,
      tableName = _ref.tableName,
      objectId = _ref.objectId,
      _ref$initVal = _ref.initVal,
      initVal = _ref$initVal === void 0 ? {} : _ref$initVal,
      _ref$objectAData = _ref.objectAData,
      objectAData = _ref$objectAData === void 0 ? {} : _ref$objectAData,
      clickedMenu = _ref.clickedMenu,
      record = _ref.record,
      batchDefend = _ref.batchDefend,
      batchIndex = _ref.batchIndex,
      setFormValues = _ref.setFormValues,
      peptide = _ref.peptide,
      peptidePageList = _ref.peptidePageList,
      formLayout = _ref.formLayout;
  var imgFieldList = pageFieldList.filter(function (item) {
    return item.editor === 'ImageEditor';
  });
  var newPageFieldList = [].concat(_toConsumableArray(pageFieldList.filter(function (item) {
    return item.editor !== 'ImageEditor';
  })), _toConsumableArray(imgFieldList));

  var _useState = (0, _react.useState)(record instanceof Array && record[0].hasOwnProperty('FLOCATION') && record[0].FLOCATION ? true : false),
      _useState2 = _slicedToArray(_useState, 2),
      hasFile = _useState2[0],
      setHasFile = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      DBList = _useState4[0],
      setDBList = _useState4[1]; // const [DBValueList, setDBValueList] = useState({});


  var _useState5 = (0, _react.useState)(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var loop = function loop(data) {
    return data.map(function (item) {
      var title = item.NAME;

      if (item.children) {
        return /*#__PURE__*/_react.default.createElement(TreeNode, {
          key: item.ID,
          value: title,
          title: title,
          dataRef: item,
          disabled: item.PID === '0'
        }, loop(item.children));
      }

      return /*#__PURE__*/_react.default.createElement(TreeNode, {
        key: item.ID,
        value: title,
        title: title,
        dataRef: item,
        disabled: item.PID === '0'
      });
    });
  };

  var getEditor = function getEditor(item, index) {
    var editor = item.editor,
        EDITOR = item.EDITOR,
        editParams = item.editParams,
        allowNull = item.allowNull,
        ALLOWNULL = item.ALLOWNULL,
        allowFormNull = item.allowFormNull,
        PATTERN = item.PATTERN,
        no = item.no,
        NO = item.NO,
        fieldName = item.fieldName,
        editAble = item.editAble,
        fType = item.fType,
        accuracy = item.accuracy,
        caption = item.caption,
        fLength = item.fLength,
        WLINE = item.WLINE;
    caption = (0, _utils.getCaption)(item);
    var disabled = !(editAble && namespace);
    if (clickedMenu && clickedMenu.wType === 'detailForm') disabled = true;
    editParams = editParams || {};
    var _editParams = editParams,
        canInput = _editParams.canInput,
        _editParams$values = _editParams.values,
        values = _editParams$values === void 0 ? [] : _editParams$values,
        _editParams$format = _editParams.format,
        format = _editParams$format === void 0 ? 'YYYY-MM-DD' : _editParams$format,
        rowHeight = _editParams.rowHeight,
        visibilityToggle = _editParams.visibilityToggle,
        _editParams$mapFields = _editParams.mapFields,
        mapFields = _editParams$mapFields === void 0 ? [] : _editParams$mapFields,
        sql = _editParams.sql,
        multiple = _editParams.multiple,
        switchOn = _editParams.switchOn,
        switchOff = _editParams.switchOff;
    var multipleProps = {};
    if (multiple) multipleProps = {
      mode: canInput ? 'tags' : 'multiple'
    };
    var Cmp = null;
    var isFormObject = false;
    var rules = [];

    if (advancedSearch) {
      rules = [{
        required: false
      }];
    } else {
      if (ALLOWNULL || allowNull) {
        //如果业务字段不允许为空，则表单字段也不能为空；如果业务字段允许为空，则按照表单字段是否为空决定
        if (allowFormNull || allowFormNull === undefined) {
          rules = [{
            required: false
          }];
        } else {
          rules = [{
            required: true
          }];
        }
      } else {
        rules = [{
          required: true
        }];
      }
    }

    if (PATTERN) rules.push({
      pattern: new RegExp(PATTERN)
    }); //  = [{ required: advancedSearch || batchEdit || !allowNull }]

    if ((fType === 'FLOAT' || fType === 'DOUBLE') && accuracy) {
      rules.push({
        pattern: new RegExp('^(-?)[0-9]+(.[0-9]{1,' + accuracy + '})?$')
      });
    } else if (fType === 'VARCHAR' && (editor || EDITOR) === 'TextBox' || (editor || EDITOR) === 'TextArea') {
      rules.push({
        type: 'string',
        max: fLength
      });
    } else if (fType === 'JSON' && (editor || EDITOR) === 'TextBox' || (editor || EDITOR) === 'TextArea') {
      rules.push({
        type: 'string'
      });
    }

    if ((editor || EDITOR) === 'OnSelector' || // (editor || EDITOR) === 'UserSelector' ||
    // (editor || EDITOR) === 'UsersSelector' ||
    (editor || EDITOR) === 'ObjectSelector' || (editor || EDITOR) === 'ViewSelector' || (editor || EDITOR) === 'ObjectNoSelector') {
      rules.push({
        type: 'string',
        max: fLength
      });
    }

    columns = batchDefend ? 1 : columns || 2;
    var other = {
      style: {
        width: Number(1 / columns * 100).toFixed(2) + '%'
      }
    };

    if (WLINE) {
      other = {
        className: 'whole-line'
      }; // if (columns === 2) {
      //   other = { ...other, ...layout2 }
      // } else {
      //   other = { ...other, ...layout3 }
      // }
    }

    if ((editor || EDITOR) === 'RichText') rules = [{
      required: !allowNull
    }];

    var formProps = _objectSpread({
      key: index,
      name: batchDefend ? ["".concat(batchIndex), "".concat(fieldName)] : fieldName || NO || no,
      label: !batchDefend && /*#__PURE__*/_react.default.createElement("span", {
        style: {
          width: formLayout === 'vertical' ? '100%' : rules[0].required ? labelLen - 11 : labelLen,
          textAlign: !advancedSearch ? 'left' : 'right'
        }
      }, caption, "\uFF1A"),
      rules: rules,
      colon: false
    }, other);

    var DBValueListMultipleItem = function DBValueListMultipleItem(item, index) {
      var label = '';
      /* let DBKey = null;
      for (let key in item) {
        DBKey = key;
        break;
      } */

      mapFields.map(function (f) {
        label += item[f.tfield];
      });
      return /*#__PURE__*/_react.default.createElement(Option, {
        key: index,
        label: label
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _index2.default.selectOption
      }, mapFields.map(function (f) {
        return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
          title: item[f.tfield]
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _index2.default.selectOptionObject
        }, item[f.tfield]));
      })));
    };

    var onSearchValueList = function onSearchValueList(val) {
      if (val && canInput) {
        if (fType === 'INT' || fType === 'FLOAT' || fType === 'DOUBLE' || fType === 'NUMERIC') {
          if (isNaN(Number(val))) {// message.error(caption + '的字段类型为：' + fType)
          } else {
            if ((fType === 'FLOAT' || fType === 'DOUBLE') && accuracy) {
              if (new RegExp('^[0-9]+(.[0-9]{1,' + accuracy + '})?$').test(Number(val))) {
                form.setFieldsValue(_defineProperty({}, fieldName, Number(val)));
              } else {
                _antd.message.error(caption + '的精度为：' + accuracy);
              }
            } else {
              form.setFieldsValue(_defineProperty({}, fieldName, Number(val)));
            }
          }
        } else {
          formProps.validateStatus = 'success';
          form.setFieldsValue(_defineProperty({}, fieldName, val));
        }
      }
    };

    var onSearchDBValueList = function onSearchDBValueList(val) {
      if (val && canInput) {
        if (fType === 'INT' || fType === 'FLOAT' || fType === 'DOUBLE' || fType === 'NUMERIC') {
          if (isNaN(Number(val))) {// message.error(caption + '的字段类型为：' + fType)
          } else {
            if ((fType === 'FLOAT' || fType === 'DOUBLE') && accuracy) {
              if (new RegExp('^[0-9]+(.[0-9]{1,' + accuracy + '})?$').test(Number(val))) {
                form.setFieldsValue(_defineProperty({}, fieldName, Number(val)));
              } else {
                _antd.message.error(caption + '的精度为：' + accuracy);
              }
            } else {
              form.setFieldsValue(_defineProperty({}, fieldName, Number(val)));
            }
          }
        } else {
          formProps.validateStatus = 'success';
          form.setFieldsValue(_defineProperty({}, fieldName, val));
        }
      }
    };

    var onSearchDBValueListMultiple = function onSearchDBValueListMultiple(val) {
      if (val && canInput) {
        if (fType === 'INT' || fType === 'FLOAT' || fType === 'DOUBLE' || fType === 'NUMERIC') {
          if (isNaN(Number(val))) {// message.error(caption + '的字段类型为：' + fType)
          } else {
            if ((fType === 'FLOAT' || fType === 'DOUBLE') && accuracy) {
              if (new RegExp('^[0-9]+(.[0-9]{1,' + accuracy + '})?$').test(Number(val))) {
                form.setFieldsValue(_defineProperty({}, fieldName, Number(val)));
              } else {
                _antd.message.error(caption + '的精度为：' + accuracy);
              }
            } else {
              form.setFieldsValue(_defineProperty({}, fieldName, Number(val)));
            }
          }
        } else {
          formProps.validateStatus = 'success';
          form.setFieldsValue(_defineProperty({}, fieldName, val));
        }
      }
    };

    var textInputChange = function textInputChange(e, fieldName) {
      form.setFieldsValue(_defineProperty({}, fieldName, e.target.value.trim()));
    };

    var searchValueListProps = null;
    var searchDBValueListProps = null;
    var searchDBValueListMultipleProps = null;

    if (!multiple || fType === 'INT' || fType === 'FLOAT' || fType === 'DOUBLE' || fType === 'NUMERIC') {
      searchValueListProps = {
        onSearch: onSearchValueList
      };
      searchDBValueListProps = {
        onSearch: onSearchDBValueList
      };
      searchDBValueListMultipleProps = {
        onSearch: onSearchDBValueListMultiple
      };
    }

    var getIcon = function getIcon(item) {
      var newIcon = null;
      var IconView = null;

      if (item.icon) {
        if (item.icon.indexOf('third-') != -1) {
          //筛选第三方图标库的icons
          newIcon = item.icon.substring(6); //将第三方图标库标识去掉
        } else {
          item.icon = item.icon.substring(0, 1).toUpperCase() + item.icon.substring(1, item.icon.length);
          IconView = Icon["".concat(item.icon, "Outlined")];
        }
      }

      return item.icon && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        style: {
          fill: item.color || '#000'
        },
        className: "editorThirdIcons",
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, {
        style: {
          color: item.color || '',
          marginRight: '5px'
        }
      }));
    };

    switch (editor || EDITOR) {
      case 'TextBox':
        if (fType === 'INT' || fType === 'FLOAT' || fType === 'DOUBLE' || fType === 'NUMERIC') {
          Cmp = /*#__PURE__*/_react.default.createElement(_antd.InputNumber, {
            disabled: disabled,
            className: disabled ? _index2.default.disabledColor : ''
          });
        } else {
          Cmp = /*#__PURE__*/_react.default.createElement(_antd.Input, {
            disabled: disabled,
            className: disabled ? _index2.default.disabledColor : '',
            rules: rules,
            onChange: function onChange(text) {
              return textInputChange(text, fieldName);
            }
          });
        }

        break;

      case 'TextArea':
        Cmp = /*#__PURE__*/_react.default.createElement(TextArea, {
          rows: rowHeight,
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : '',
          onChange: function onChange(text) {
            return textInputChange(text, fieldName);
          }
        });
        break;

      case 'DateTime':
        var showTime = format && format.length > 10;
        var picker = format === 'YYYY' ? 'year' : format === 'YYYY-MM' ? 'month' : 'date';
        var timeConfig = {
          format: format,
          picker: picker,
          disabled: disabled,
          showTime: showTime
        };
        Cmp = !advancedSearch ? /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, timeConfig, {
          className: disabled ? _index2.default.disabledColor : '',
          inputReadOnly: true
        })) : /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, _extends({}, timeConfig, {
          className: disabled ? _index2.default.disabledColor : '',
          inputReadOnly: true
        }));
        break;

      case 'ValueList':
      case 'MapValueList':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({}, multipleProps, {
          showSearch: true,
          disabled: disabled
        }, searchValueListProps, {
          allowClear: true,
          className: disabled ? _index2.default.disabledColor : ''
        }), values.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement(Option, {
            value: (editor || EDITOR) === 'MapValueList' ? item.key : item.name === 0 ? 0 : item.name || item,
            key: index,
            style: {
              color: item.color || ''
            }
          }, item.icon && getIcon(item), /*#__PURE__*/_react.default.createElement("span", {
            style: {
              color: item.color || ''
            }
          }, item.name === 0 ? 0 : item.name || item));
        }));
        break;

      case 'ValueListDynamic':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({}, multipleProps, {
          showSearch: true,
          disabled: disabled
        }, searchValueListProps, {
          allowClear: true,
          className: disabled ? _index2.default.disabledColor : ''
        }), values.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement(Option, {
            value: item,
            key: index
          }, item.name || item);
        }));
        break;

      case 'RadioEditor':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, {
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : ''
        }, values.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement(_antd.Radio, {
            value: item.name || item,
            key: index
          }, item.icon && getIcon(item), /*#__PURE__*/_react.default.createElement("span", {
            style: {
              color: item.color || '#000'
            }
          }, item.name || item));
        }));
        break;

      case 'CheckEditor':
        var options = values.map(function (item) {
          return {
            label: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.icon && getIcon(item), /*#__PURE__*/_react.default.createElement("span", {
              style: {
                color: item.color || '#000'
              }
            }, item.name || item)),
            value: item.name
          };
        });
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
          options: options,
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : ''
        });
        break;

      case 'CheckBox':
        formProps.valuePropName = 'checked';
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : ''
        });
        break;

      case 'Rate':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Rate, {
          allowHalf: true,
          disabled: disabled
        });
        break;

      case 'Slider':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Slider, {
          tipFormatter: function tipFormatter(value) {
            return "".concat(value, "%");
          },
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : ''
        });
        break;

      case 'Password':
        Cmp = /*#__PURE__*/_react.default.createElement(Password, {
          autoComplete: "new-password",
          disabled: disabled,
          visibilityToggle: visibilityToggle,
          className: disabled ? _index2.default.disabledColor : ''
        });
        break;

      case 'FileSelector':
        var props = {
          beforeUpload: function beforeUpload(file) {
            setCanSubmit(false);
            form.setFieldsValue(_defineProperty({}, fieldName, 'File uploading...')); // 异步上传文件

            (0, _uploadApi.uploadFileAsync)({
              file: file,
              record: record,
              tableName: tableName
            }).then(function (data) {
              if (data && data.flag === true) {
                if (batchDefend) {
                  var formList = form.getFieldsValue();
                  formList[batchIndex][fieldName] = file.name;
                  formList[batchIndex].FLOCATION = data.dataList;
                  form.setFieldsValue(formList);
                  formList = Object.values(formList);
                  setFormValues(formList);
                } else {
                  setFileLocation(data.dataList);
                  form.setFieldsValue(_defineProperty({}, fieldName, file.name));
                }
              } else {
                _antd.message.warn(data.hint);

                form.setFieldsValue(_defineProperty({}, fieldName, undefined));
              }
              /* 等待返回值才允许提交表单 */


              setCanSubmit(true);
            }).catch(function (err) {
              form.setFieldsValue(_defineProperty({}, fieldName, undefined));

              _antd.message.warn(_utils.isEnglish ? 'Failed to upload files' : '文件上传失败');

              setCanSubmit(true);
            });
            return false;
          }
        };
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Input, {
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : '',
          addonAfter: hasFile ? /*#__PURE__*/_react.default.createElement(_antd.Button, {
            disabled: disabled,
            type: "primary",
            onClick: function onClick() {
              setHasFile(false);

              if (batchDefend) {
                var formList = form.getFieldsValue();
                formList[batchIndex][fieldName] = null;
                formList[batchIndex].FLOCATION = null;
                form.setFieldsValue(formList);
              } else {
                setFileLocation(null);
                form.setFieldsValue(_defineProperty({}, fieldName, null));
              }
            },
            icon: /*#__PURE__*/_react.default.createElement(Icon.CloseOutlined, null)
          }) : /*#__PURE__*/_react.default.createElement(_antd.Upload, _extends({}, props, {
            showUploadList: false
          }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
            disabled: disabled,
            type: "primary",
            icon: /*#__PURE__*/_react.default.createElement(Icon.UploadOutlined, null)
          }))
        });
        break;

      case 'ImageEditor':
        var onChange = function onChange(dataList) {
          var newDataList = dataList.map(function (item) {
            if (!item.hasOwnProperty('xhr') || item.status !== 'done') return null;
            return {
              fLocation: item.xhr.fLocation,
              uploadUser: item.xhr.uploadUser,
              uploadTime: item.xhr.uploadTime,
              fType: item.xhr.fType,
              fileName: item.xhr.fileName
            };
          });

          if (batchDefend) {
            var formList = Object.values(form.getFieldsValue());
            formList[batchIndex][fieldName] = JSON.stringify(newDataList);
            form.setFieldsValue(formList);
          } else {
            form.setFieldsValue(_defineProperty({}, fieldName, JSON.stringify(newDataList)));
          }
        };

        Cmp = /*#__PURE__*/_react.default.createElement(_PicturesWall.default, {
          requestApi: _uploadApi.uploadImageSync,
          tableName: tableName,
          objectId: objectId,
          onChange: onChange,
          editParams: editParams,
          initVal: initVal[fieldName],
          disabled: disabled
        });
        break;

      case 'DBValueList':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({}, multipleProps, {
          allowClear: true,
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : '',
          showSearch: true,
          optionLabelProp: "label"
        }, searchDBValueListProps, {
          onFocus: function onFocus() {
            var data = {};

            if (peptide) {
              var arr = [];
              peptidePageList.forEach(function (p) {
                p.pageFieldList.forEach(function (a) {
                  arr.push(a.fieldName);
                });
              });
              data = form.getFieldsValue(arr);
            } else {
              var field = pageFieldList.map(function (item) {
                return item.fieldName;
              });
              data = form.getFieldsValue(field);
            }

            (0, _applicationApi.queryEditorData)({
              tableName: tableName,
              fieldName: fieldName,
              data: data,
              objectAData: objectAData,
              objectA: objectAData.length ? clickedMenu.values.objectA : ''
            }).then(function (res) {
              if (res) setDBList(_objectSpread(_objectSpread({}, DBList), {}, _defineProperty({}, fieldName, res.dataList || [])));
            });
          }
        }), (DBList[fieldName] || []).map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement(Option, {
            key: index,
            value: item[Object.keys(item)[0]],
            label: item[Object.keys(item)[0]]
          });
        }));
        break;

      case 'DBValueListMultiple':
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({
          allowClear: true // mode={canMultiSelect ? 'multiple' : false} //可多选
          ,
          disabled: disabled //是否禁用
          ,
          className: disabled ? _index2.default.disabledColor : '',
          showSearch: true,
          optionFilterProp: "label",
          optionLabelProp: "value",
          filterOption: function filterOption(input, option) {
            if (option.key) {
              return option.label.indexOf(input) >= 0;
            } else {
              return true;
            }
          }
        }, searchDBValueListMultipleProps, {
          onFocus: function onFocus() {
            var data = {};

            if (peptide) {
              var arr = [];
              peptidePageList.forEach(function (p) {
                p.pageFieldList.forEach(function (a) {
                  arr.push(a.fieldName);
                });
              });
              data = form.getFieldsValue(arr);
            } else {
              var s = pageFieldList.map(function (item) {
                return item.fieldName;
              });
              data = form.getFieldsValue(s);
            }

            (0, _applicationApi.queryEditorData)({
              tableName: tableName,
              fieldName: fieldName,
              data: data,
              objectAData: objectAData,
              objectA: objectAData.length ? clickedMenu.values.objectA : ''
            }).then(function (res) {
              if (res) {
                setDBList(_objectSpread(_objectSpread({}, DBList), {}, _defineProperty({}, fieldName, res.dataList || []))); // setDBValueList({ ...DBValueList, [fieldName]: [] });
              }
            });
          },
          onChange: function onChange(val) {
            //val 选中的值

            /* let flag = false;
            if (canMultiSelect) {
              //多选
              const DBValue =
                (DBList[fieldName] &&
                  DBList[fieldName].filter(
                    (item) => val.indexOf(item[fieldName]) > -1,
                  )) ||
                []; //在DB列表中筛选出与已选中项相同的fieldname ，再把对应的行数据放进去，即DBvalue存储的是选中的所有行数据
              if (!DBList[fieldName]) {
                form.setFieldsValue({ [fieldName]: [] });
                return;
              }
              for (let key in DBList[fieldName][0]) {
                //拿到当前编辑器中的每一个key值  SUPPLIER_CODE
                let newValue = [];
                DBValue.forEach((item) => {
                  //遍历已选中的行数据，将key对应的值放入新数组中
                  newValue.push(item[key]); // 10002 四川投能
                });
                if (fieldName === key) {
                  //如果是DB编辑器就用数组显示
                  form.setFieldsValue({ [key]: newValue });
                } else {
                  //不是则用逗号隔开显示
                  newValue = newValue.join(',');
                  form.setFieldsValue({ [key]: newValue });
                }
              }
              setDBValueList({ ...DBValueList, [fieldName]: DBValue }); //当前编辑器的名称为 DBValue
            } else {
              //单选
              const index =
                (DBList[fieldName] &&
                  DBList[fieldName].filter(
                    (item) => val.indexOf(item[fieldName]) > -1,
                  ))[0] || [];
              for (let key in index) {
                if (key === fieldName) flag = true;
                form.setFieldsValue({ [key]: index[key] });
              }
              if (!flag) {
                form.setFieldsValue({ [fieldName]: null });
              }
            } */
            var flag = false;

            for (var key in DBList[fieldName][val]) {
              if (key === fieldName) flag = true;

              if (batchDefend) {
                var formList = form.getFieldsValue();
                formList[batchIndex][key] = DBList[fieldName][val][key];
                form.setFieldsValue(formList);
              } else {
                form.setFieldsValue(_defineProperty({}, key, DBList[fieldName][val][key]));
              }
            }

            if (!flag) {
              form.setFieldsValue(_defineProperty({}, fieldName, null));
            }
          }
        }), /*#__PURE__*/_react.default.createElement(Option, {
          disabled: true,
          className: _index2.default.selectOptionHeader
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _index2.default.selectOption
        }, mapFields.map(function (item) {
          return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
            title: item.sfield
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: _index2.default.selectOptionObject
          }, item.sfield));
        }))), (DBList[fieldName] || []).map(function (item, index) {
          return DBValueListMultipleItem(item, index);
        }));
        break;

      case 'RichText':
        Cmp = /*#__PURE__*/_react.default.createElement(_braftEditor.default // disabled={disabled}
        , {
          readOnly: disabled,
          contentStyle: {
            height: 200
          },
          className: disabled ? _index2.default.disabledColor : '',
          maxLength: 20000,
          style: {
            border: '1px solid #d9d9d9',
            width: '100%'
          }
        });
        break;

      case 'OnSelector':
      case 'UserSelector':
      case 'ObjectSelector':
      case 'ViewSelector':
        isFormObject = true;
        Cmp = /*#__PURE__*/_react.default.createElement(_SearchInput.default, _extends({
          className: disabled ? _index2.default.disabledColor : ''
        }, formProps, {
          onClick: !disabled ? function () {
            return setItem({
              editParams: editParams,
              fieldName: fieldName,
              tableName: tableName,
              editor: editor,
              batchIndex: batchIndex
            });
          } : null,
          disabled: disabled,
          editor: editor || EDITOR,
          canInput: canInput
        }));
        break;

      case 'UsersSelector':
        isFormObject = true;
        Cmp = /*#__PURE__*/_react.default.createElement(_SearchSelect.default, _extends({
          className: disabled ? _index2.default.disabledColor : ''
        }, formProps, {
          onClick: !disabled ? function () {
            return setItem({
              editParams: editParams,
              fieldName: fieldName,
              tableName: tableName,
              editor: editor,
              batchIndex: batchIndex
            });
          } : null,
          disabled: disabled,
          editor: editor || EDITOR
        }));
        break;

      case 'ObjectNoSelector':
        isFormObject = true;
        Cmp = /*#__PURE__*/_react.default.createElement(_SearchInput.default, _extends({}, formProps, {
          className: disabled ? _index2.default.disabledColor : '',
          onClick: !disabled ? batchDefend ? function () {
            return selectData({
              editParams: editParams,
              fieldName: fieldName,
              editor: editor,
              batchIndex: batchIndex
            });
          } : function () {
            return selectData({
              editParams: editParams,
              fieldName: fieldName,
              editor: editor
            });
          } : null,
          disabled: disabled
        }));
        break;

      case 'DeptSelector':
        var _editParams2 = editParams,
            DeptMultiple = _editParams2.DeptMultiple;
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.TreeSelect, {
          showSearch: true,
          value: value,
          placeholder: _utils.isEnglish ? 'select' : '请选择',
          allowClear: true,
          multiple: DeptMultiple,
          onChange: onChange,
          disabled: disabled
        }, loop((0, _utils.ergodicRoot)(list[fieldName] || [])));
        break;

      case 'JSONEditor':
        // json
        var _editParams3 = editParams,
            JSONfields = _editParams3.JSONfields;
        Cmp = JSONfields.length ? /*#__PURE__*/_react.default.createElement(List, {
          style: {
            width: '100%'
          }
        }, function (fields, _ref2) {
          var add = _ref2.add,
              remove = _ref2.remove;
          return /*#__PURE__*/_react.default.createElement(Item, {
            fieldKey: 'JSONfields',
            className: "JSONfields"
          }, JSONfields.length && JSONfields.map(function (item) {
            return /*#__PURE__*/_react.default.createElement(Item, {
              label: item,
              name: [fieldName, item],
              key: item,
              style: {
                width: '50%',
                textAlign: 'center'
              }
            }, /*#__PURE__*/_react.default.createElement(_antd.Input, null));
          }));
        }) : /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(_antd.Input, null));
        break;

      case 'Switch':
        formProps.valuePropName = 'checked';
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Switch, {
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : '',
          checkedChildren: switchOn,
          unCheckedChildren: switchOff
        });
        break;

      default:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Input, {
          disabled: disabled,
          className: disabled ? _index2.default.disabledColor : ''
        });
    }

    var getTooltipVal = function getTooltipVal(fieldVal, editor, values) {
      var val = null;

      if (editor === 'MapValueList') {
        values.map(function (item) {
          if (item.key === fieldVal) {
            val = item.name;
          }
        });
        return val;
      } else return fieldVal;
    };

    return isFormObject ? Cmp : editor === 'DateTime' || editor === 'RichText' || editor === 'JSONEditor' || editor === 'CheckBox' || editor === 'ImageEditor' ? /*#__PURE__*/_react.default.createElement(Item, formProps, Cmp) : /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      key: index,
      title: getTooltipVal(initVal[formProps.name], editor, values)
    }, /*#__PURE__*/_react.default.createElement(Item, formProps, Cmp));
  };

  return newPageFieldList.map(function (item, index) {
    return getEditor(item, index);
  });
};

var _default = EditorCmp;
exports.default = _default;