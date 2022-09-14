function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import { Select } from 'antd';
import { isEnglish } from '../../../utils/utils';
export var setInspectionColumns = function setInspectionColumns(_ref) {
  var fieldsList = _ref.fieldsList,
      dataList = _ref.dataList,
      modelData = _ref.modelData,
      checklistTitle = _ref.checklistTitle;

  /* 常规字段 */
  var columns = fieldsList.map(function (item) {
    var _ref2;

    item = _objectSpread(_objectSpread({}, item), item.meta);
    var _item = item,
        NAME = _item.NAME,
        WIDTH = _item.WIDTH,
        ENNAME = _item.ENNAME,
        EDITOR = _item.EDITOR,
        EDITABLE = _item.EDITABLE,
        FIELDNAME = _item.FIELDNAME,
        ALLOWNULL = _item.ALLOWNULL,
        EDITPARAMS = _item.EDITPARAMS,
        ID = _item.ID,
        ALIGN = _item.ALIGN;

    var render = function render(h, record, i) {
      var Cmp;

      switch (item.EDITOR) {
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
          Cmp = /*#__PURE__*/React.createElement("div", {
            style: styles
          }, record.InspectionItem[FIELDNAME]);
          break;

        case 'MapValueList':
          Cmp = /*#__PURE__*/React.createElement("div", null, EDITPARAMS.values.filter(function (item) {
            return item.key === record.InspectionItem[FIELDNAME];
          })[0] && EDITPARAMS.values.filter(function (item) {
            return item.key === record.InspectionItem[FIELDNAME];
          })[0].name);
          break;

        default:
          Cmp = /*#__PURE__*/React.createElement("div", {
            style: {
              align: item.ALIGN || 'center',
              wordBreak: 'break-all'
            }
          }, record.InspectionItem[FIELDNAME]);
          break;
      }

      return Cmp;
    };

    return _ref2 = {
      align: ALIGN || 'center',
      title: isEnglish ? ENNAME : NAME,
      dataIndex: FIELDNAME,
      width: WIDTH || 100
    }, _defineProperty(_ref2, "dataIndex", FIELDNAME), _defineProperty(_ref2, "onCell", function onCell(record, index) {}), _defineProperty(_ref2, "render", render), _ref2;
  });
  /* 检验值列表 */

  var _loop = function _loop(i) {
    columns.push({
      title: checklistTitle[i] || i + 1,
      dataIndex: 'InspectionItemResult',
      width: 80,
      align: 'center',
      render: function render(h, record, index) {
        var Cmp = /*#__PURE__*/React.createElement("div", {
          className: "null-element",
          key: record.InspectionItem.ID + 'null'
        });

        if ((i < 2 || record.InspectionItemResult.length === 3) && Number(record.InspectionItem.DT)) {
          if (record.InspectionItem.MAX_MIN) {
            Cmp = /*#__PURE__*/React.createElement("div", {
              className: "max_min_item"
            }, /*#__PURE__*/React.createElement("p", {
              className: record.InspectionItemResult[i] && record.InspectionItemResult[i].TR === 'NG' ? 'ng-cell' : null
            }, /*#__PURE__*/React.createElement("span", null, "V:"), record.InspectionItemResult[i].TV), /*#__PURE__*/React.createElement("p", {
              className: record.InspectionItemResult[i] && record.InspectionItemResult[i].UMAX && (record.InspectionItemResult[i].UMAX > record.InspectionItem.UT || record.InspectionItemResult[i].UMAX < -record.InspectionItem.LT) ? 'warn-cell' : null
            }, /*#__PURE__*/React.createElement("span", null, "U:"), record.InspectionItemResult[i].UMAX), /*#__PURE__*/React.createElement("p", {
              className: record.InspectionItemResult[i] && record.InspectionItemResult[i].LMIN && (record.InspectionItemResult[i].LMIN > record.InspectionItem.UT || record.InspectionItemResult[i].LMIN < -record.InspectionItem.LT) ? 'warn-cell' : null
            }, /*#__PURE__*/React.createElement("span", null, "L:"), record.InspectionItemResult[i].LMIN));
          } else {
            Cmp = /*#__PURE__*/React.createElement("div", {
              className: record.InspectionItemResult[i].TR === 'NG' ? 'ng-cell' : null
            }, record.InspectionItemResult[i].TV);
          }
        } else {
          if (record.InspectionItem.SQ > i && Number(record.InspectionItem.DT || modelData.COUNTTYPECANINPUT)) {
            if (record.InspectionItem.MAX_MIN) {
              Cmp = /*#__PURE__*/React.createElement(Select, {
                defaultValue: 'more',
                dropdownClassName: "report-more-select"
              }, record.InspectionItemResult.map(function (item, k) {
                if (k < 2) return;
                return /*#__PURE__*/React.createElement(Select.Option, {
                  key: item.NO,
                  disabled: true,
                  className: "report-select-value"
                }, /*#__PURE__*/React.createElement("div", {
                  className: "max_min_item"
                }, /*#__PURE__*/React.createElement("p", null, item.NO), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
                  className: item && item.TR === 'NG' ? 'ng-cell' : null
                }, /*#__PURE__*/React.createElement("span", null, "V:"), item.TV), /*#__PURE__*/React.createElement("p", {
                  className: item && item.UMAX && (item.UMAX > record.InspectionItem.UT || item.UMAX < -record.InspectionItem.LT) ? 'warn-cell' : null
                }, /*#__PURE__*/React.createElement("span", null, "U:"), item.UMAX), /*#__PURE__*/React.createElement("p", {
                  className: item && item.LMIN && (item.LMIN > record.InspectionItem.UT || item.LMIN < -record.InspectionItem.LT) ? 'warn-cell' : null
                }, /*#__PURE__*/React.createElement("span", null, "L:"), item.LMIN))));
              }));
            } else {
              Cmp = /*#__PURE__*/React.createElement(Select, {
                defaultValue: "more",
                dropdownClassName: "report-more-select"
              }, record.InspectionItemResult.map(function (item, k) {
                if (k < 2) return;
                return /*#__PURE__*/React.createElement(Select.Option, {
                  key: item.NO,
                  disabled: true,
                  className: "report-select-value"
                }, /*#__PURE__*/React.createElement("div", {
                  className: "report-value-item"
                }, /*#__PURE__*/React.createElement("p", {
                  className: "title"
                }, item.NO), /*#__PURE__*/React.createElement("p", {
                  className: item.TR === 'NG' ? 'ng-cell' : null
                }, item.TV)));
              }));
            }
          }
        }

        return Cmp;
      }
    });
  };

  for (var i = 0; i < 3; i++) {
    _loop(i);
  }

  return columns;
};