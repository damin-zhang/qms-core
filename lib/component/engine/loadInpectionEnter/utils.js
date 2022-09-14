"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInspectionColumns = exports.HeaderEditorCmp = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 头部检验单编辑器渲染 */
var HeaderEditorCmp = function HeaderEditorCmp(_ref) {
  var params = _ref.params,
      hData = _ref.hData;
  params = _objectSpread(_objectSpread({}, params), params.meta);
  var Cmp = null;

  switch (params.EDITOR) {
    case 'MapValueList':
      Cmp = /*#__PURE__*/_react.default.createElement("p", {
        style: params.WLINE ? {
          width: '100%'
        } : {}
      }, params.NAME, "\uFF1A", params.EDITPARAMS.values.filter(function (item) {
        return item.key === hData[0][params.FIELDNAME];
      })[0].name);
      break;

    case 'TextBox':
      Cmp = /*#__PURE__*/_react.default.createElement("p", {
        style: params.WLINE ? {
          width: '100%',
          wordBreak: 'break-all'
        } : {
          wordBreak: 'break-all'
        }
      }, params.NAME, "\uFF1A", hData[0][params.FIELDNAME]);
      break;

    default:
      break;
  }

  return Cmp;
};
/* Body 检验项表格列装配 */


exports.HeaderEditorCmp = HeaderEditorCmp;

var setInspectionColumns = function setInspectionColumns(_ref2) {
  var filedList = _ref2.filedList,
      dataList = _ref2.dataList,
      onInputPressEnter = _ref2.onInputPressEnter,
      commonInputPressEnter = _ref2.commonInputPressEnter,
      onSelectChange = _ref2.onSelectChange,
      onDBSelectChange = _ref2.onDBSelectChange,
      formDisable = _ref2.formDisable,
      onInputFocus = _ref2.onInputFocus,
      onInputBlur = _ref2.onInputBlur,
      DBValueData = _ref2.DBValueData,
      DBValueData2 = _ref2.DBValueData2,
      onDbSelectFocus = _ref2.onDbSelectFocus,
      checklistTitle = _ref2.checklistTitle,
      settingChecklistTitle = _ref2.settingChecklistTitle,
      EnterSaveChecklistTitle = _ref2.EnterSaveChecklistTitle,
      inspectionItemDT = _ref2.inspectionItemDT,
      modelData = _ref2.modelData;

  /* 获取检验列表最大检验项 */
  var maxInspectionQty = Math.max.apply(Math, dataList.map(function (item) {
    return !isNaN(Number(item.InspectionItem.TV)) && item.InspectionItem.SQ;
  })); // const maxInspectionQty = 5;

  /* 装配常规表格列 */

  var columns = filedList.map(function (item, index) {
    item = _objectSpread(_objectSpread({}, item), item.meta);
    var _item = item,
        _item$meta = _item.meta,
        NAME = _item$meta.NAME,
        WIDTH = _item$meta.WIDTH,
        ALIGN = _item$meta.ALIGN,
        ENNAME = _item$meta.ENNAME,
        EDITOR = _item$meta.EDITOR,
        EDITABLE = _item$meta.EDITABLE,
        FIELDNAME = _item$meta.FIELDNAME,
        ALLOWNULL = _item$meta.ALLOWNULL,
        EDITPARAMS = _item$meta.EDITPARAMS,
        FTYPE = _item$meta.FTYPE,
        ID = _item.ID;
    var type = 'text';

    switch (FTYPE) {
      case 'INT':
        type = 'number';
        break;

      case 'DOUBLE':
        type = 'number';
        break;

      case 'FLOAT':
        type = 'number';
        break;

      case 'NUMERIC':
        type = 'number';
        break;

      default:
        break;
    }

    var render = function render(text, record, i) {
      var pagingIndex = record.InspectionItem.SORT - 1;
      var inputProps = {
        align: ALIGN || 'center',
        type: type,
        disabled: formDisable || EDITABLE === 0 || EDITABLE === 2,
        onPressEnter: function onPressEnter(e) {
          return commonInputPressEnter(e, record, [record.InspectionItem.ID, 'InspectionItem', FIELDNAME], pagingIndex);
        },
        onFocus: function onFocus() {
          return onInputFocus(record);
        },
        onBlur: function onBlur() {
          return onInputBlur([record.InspectionItem.ID, 'InspectionItem', FIELDNAME], pagingIndex);
        }
      };
      var selectProps = {
        onChange: function onChange(value) {
          onSelectChange(value, record, FIELDNAME, pagingIndex);
        },
        disabled: formDisable
      };
      var Cmp;
      var disabled = EDITABLE === 0 || EDITABLE === 2;

      switch (item.EDITOR) {
        case 'MapValueList':
          if (EDITABLE) {
            Cmp = /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
              name: [record.InspectionItem.ID, 'InspectionItem', FIELDNAME]
            }, /*#__PURE__*/_react.default.createElement(_antd.Select, selectProps, EDITPARAMS.values.map(function (item) {
              /*#__PURE__*/
              _react.default.createElement(_antd.Select.Option, {
                values: item.key
              }, item.name);
            })));
          } else {
            Cmp = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, EDITPARAMS.values.filter(function (item) {
              return item.key === record.InspectionItem[FIELDNAME];
            })[0] && EDITPARAMS.values.filter(function (item) {
              return item.key === record.InspectionItem[FIELDNAME];
            })[0].name);
          }

          break;

        case 'ValueList':
          var styles = {};
          EDITPARAMS.values.forEach(function (item) {
            if (record.InspectionItem[FIELDNAME] === item.name) {
              styles = {
                background: item.color,
                color: '#fff'
              };
            }
          });
          Cmp = /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
            name: [record.InspectionItem.ID, 'InspectionItem', FIELDNAME],
            style: styles
          }, /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({}, selectProps, {
            className: "custom-css",
            style: styles
          }), EDITPARAMS.values.map(function (item) {
            return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
              value: item.name,
              key: item.name
            }, item.name);
          })));
          break;

        case 'TextBox':
          if (item.EDITABLE) {
            Cmp = /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
              name: [record.InspectionItem.ID, 'InspectionItem', FIELDNAME]
            }, type === 'number' ? /*#__PURE__*/_react.default.createElement(_antd.InputNumber, inputProps) : /*#__PURE__*/_react.default.createElement(_antd.Input, inputProps));
          } else {
            Cmp = /*#__PURE__*/_react.default.createElement("div", {
              style: {
                align: item.ALIGN || 'center',
                wordBreak: 'break-all'
              }
            }, record.InspectionItem[FIELDNAME]);
          }

          break;

        case 'TextArea':
          Cmp = /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
            name: [record.InspectionItem.ID, 'InspectionItem', FIELDNAME]
          }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, inputProps));
          break;

        case 'DBValueListMultiple':
          Cmp = /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
            name: [record.InspectionItem.ID, 'InspectionItem', FIELDNAME]
          }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
            showSearch: true,
            allowClear: true,
            disabled: formDisable || record.InspectionItem.TR !== 'NG',
            onFocus: function onFocus() {
              return onDbSelectFocus(FIELDNAME);
            },
            onChange: function onChange(val) {
              return onDBSelectChange(record, pagingIndex, FIELDNAME === 'DEFECT_GENERA' ? DBValueData[val] : DBValueData2[val], EDITPARAMS.mapFields);
            },
            dropdownStyle: {
              minWidth: 200
            }
          }, DBValueData.length || DBValueData2.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
            disabled: true,
            className: "selectOptionHeader",
            values: [undefined],
            value: [undefined],
            key: "header"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "selectOption defect-option"
          }, EDITPARAMS.mapFields.map(function (item) {
            return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
              title: item.sfield
            }, /*#__PURE__*/_react.default.createElement("div", {
              className: "selectOptionObject"
            }, item.sfield));
          }))), FIELDNAME === 'DEFECT_GENERA' ? DBValueData.map(function (item, index) {
            return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
              key: index
            }, /*#__PURE__*/_react.default.createElement("div", {
              className: "selectOption defect-option"
            }, EDITPARAMS.mapFields.map(function (i) {
              return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
                title: item[i.tfield]
              }, /*#__PURE__*/_react.default.createElement("div", {
                className: "selectOptionObject"
              }, item[i.tfield]));
            })));
          }) : DBValueData2.map(function (item, index) {
            return /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
              key: index
            }, /*#__PURE__*/_react.default.createElement("div", {
              className: "selectOption defect-option"
            }, EDITPARAMS.mapFields.map(function (i) {
              return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
                title: item[i.tfield]
              }, /*#__PURE__*/_react.default.createElement("div", {
                className: "selectOptionObject"
              }, item[i.tfield]));
            })));
          })) : ''));
          break;

        default:
          break;
      }

      return Cmp;
    };

    return {
      title: function title() {
        return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
          title: _utils.isEnglish ? ENNAME : NAME
        }, /*#__PURE__*/_react.default.createElement("span", null, _utils.isEnglish ? ENNAME : NAME));
      },
      dataIndex: FIELDNAME,
      align: 'center',
      width: WIDTH || 100,
      render: render
    };
  });
  /* 装配检验值列表 */

  var _loop = function _loop(i) {
    columns.push({
      title: modelData.PNCANINPUT ? function () {
        return /*#__PURE__*/_react.default.createElement(_antd.Input, {
          id: "checkItemTitle-".concat(i),
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            return EnterSaveChecklistTitle(i, maxInspectionQty);
          },
          onChange: function onChange(e) {
            return settingChecklistTitle(e, i);
          },
          defaultValue: checklistTitle[i]
        });
      } : i + 1,
      dataIndex: 'InspectionItemResult',
      width: 100,
      align: 'center',
      fixed: maxInspectionQty <= 5 ? 'right' : false,
      render: function render(text, record, index) {
        var pagingIndex = record.InspectionItem.SORT - 1;
        return record.InspectionItem.SQ > i && Number(record.InspectionItem.DT) ? record.InspectionItem.MAX_MIN ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItemResult', i, 'TV'],
          label: /*#__PURE__*/_react.default.createElement("span", {
            className: "inspection-label"
          }, "V")
        }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
          id: "checkItem-".concat(i, "-").concat(pagingIndex, "-TV"),
          className: record.InspectionItemResult[i] && record.InspectionItemResult[i].TR === 'NG' ? 'ng-cell' : null,
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            onInputPressEnter(e, record, [i, pagingIndex], 'TV');
          },
          disabled: formDisable,
          onFocus: function onFocus() {
            return onInputFocus(record, record.InspectionItemResult[i]);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItemResult', i, 'TV'], pagingIndex);
          }
        })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItemResult', i, 'UMAX'],
          label: /*#__PURE__*/_react.default.createElement("span", {
            className: "inspection-label"
          }, "U")
        }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
          id: "checkItem-".concat(i, "-").concat(pagingIndex, "-UMAX"),
          className: record.InspectionItemResult[i] && record.InspectionItemResult[i].UMAX && (record.InspectionItemResult[i].UMAX > record.InspectionItem.UT || record.InspectionItemResult[i].UMAX < -record.InspectionItem.LT) ? 'warn-cell' : null,
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            onInputPressEnter(e, record, [i, pagingIndex], 'UMAX');
          },
          disabled: formDisable,
          onFocus: function onFocus() {
            return onInputFocus(record);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItemResult', i, 'UMAX'], pagingIndex);
          }
        })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItemResult', i, 'LMIN'],
          label: /*#__PURE__*/_react.default.createElement("span", {
            className: "inspection-label"
          }, "L")
        }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
          id: "checkItem-".concat(i, "-").concat(pagingIndex, "-LMIN"),
          className: record.InspectionItemResult[i] && record.InspectionItemResult[i].LMIN && (record.InspectionItemResult[i].LMIN > record.InspectionItem.UT || record.InspectionItemResult[i].LMIN < -record.InspectionItem.LT) ? 'warn-cell' : null,
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            onInputPressEnter(e, record, [i, pagingIndex], 'LMIN');
          },
          disabled: formDisable,
          onFocus: function onFocus() {
            return onInputFocus(record);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItemResult', i, 'LMIN'], pagingIndex);
          }
        }))) : /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItemResult', i, 'TV']
        }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
          id: "checkItem-".concat(i, "-").concat(pagingIndex, "-TV"),
          className: record.InspectionItemResult[i] && record.InspectionItemResult[i].TR === 'NG' ? 'ng-cell' : null,
          autoComplete: "off",
          onPressEnter: function onPressEnter(e) {
            onInputPressEnter(e, record, [i, pagingIndex], 'TV');
          },
          disabled: formDisable,
          onFocus: function onFocus() {
            return onInputFocus(record, record.InspectionItemResult[i]);
          },
          onBlur: function onBlur() {
            return onInputBlur([record.InspectionItem.ID, 'InspectionItemResult', i, 'TV'], pagingIndex);
          }
        })) : record.InspectionItem.SQ > i && Number(record.InspectionItem.DT) == 0 && modelData.COUNTTYPECANINPUT ? /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
          name: [record.InspectionItem.ID, 'InspectionItemResult', i, 'TV']
        }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
          id: "checkItem-".concat(i, "-").concat(pagingIndex, "-TV"),
          onChange: function onChange(value) {
            return inspectionItemDT(value, record, [i, pagingIndex], 'TV');
          },
          className: "custom-css",
          style: {
            background: record.InspectionItemResult[i] && record.InspectionItemResult[i].TR === 'NG' ? '#d9363e' : '#fff',
            color: record.InspectionItemResult[i] && record.InspectionItemResult[i].TR === 'NG' ? '#fff' : null
          }
        }, /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
          value: 'OK',
          key: 'OK'
        }, "OK"), /*#__PURE__*/_react.default.createElement(_antd.Select.Option, {
          value: 'NG',
          key: 'NG'
        }, "NG"))) : /*#__PURE__*/_react.default.createElement("div", {
          className: "null-element",
          key: record.InspectionItem.ID
        });
      }
    });
  };

  for (var i = 0; i < maxInspectionQty; i++) {
    _loop(i);
  }

  columns.unshift({
    title: _utils.isEnglish ? 'index' : '序号',
    align: 'center',
    width: 50,
    render: function render(text, record, index) {
      return /*#__PURE__*/_react.default.createElement("span", null, record.InspectionItem.SORT);
    }
  });
  return columns;
};

exports.setInspectionColumns = setInspectionColumns;