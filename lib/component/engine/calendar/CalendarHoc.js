"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _contextMenuFunc = require("../../../utils/contextMenuFunc");

var _utils = require("../../../utils/utils");

var _index = _interopRequireDefault(require("./index.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(engine) {
  return function (WrappedComponent) {
    return function (props) {
      var model = props.model;

      var _useState = (0, _react.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          dataList = _useState2[0],
          setDataList = _useState2[1];

      var _useState3 = (0, _react.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          typeFieldDataList = _useState4[0],
          setTypeFieldDataList = _useState4[1];

      (0, _react.useEffect)(function () {
        if (model.dataList) setDataList((0, _utils.generatorTableKey)(model.dataList));

        if (model.typeField) {
          var editParams = model.typeField.fieldEditor.editParams ? JSON.parse(model.typeField.fieldEditor.editParams) : '';
          setTypeFieldDataList(editParams ? editParams.values : []);
        }
      }, [model]); // 获取状态点和字体的颜色，如果返回的数据有颜色就用返回的数据，没有用默认值

      var getBadgeStatusColor = function getBadgeStatusColor(key) {
        var color = '#333';
        typeFieldDataList && typeFieldDataList.length > 0 && typeFieldDataList.forEach(function (type) {
          if (type.key === key) {
            if ('color' in type) color = type.color;
          }
        });
        return color;
      }; // 过滤某天或某月显示的数据


      var getRenderList = function getRenderList(value, type) {
        var _engine$params = engine.params,
            sTimeField = _engine$params.sTimeField,
            eTimeField = _engine$params.eTimeField,
            typeField = _engine$params.typeField;
        var renderList = [];
        renderList = dataList.length > 0 ? dataList.filter(function (item) {
          var sTime = item[sTimeField];
          var eTime = item[eTimeField];

          if (sTime || eTime) {
            if (!sTime) sTime = eTime;
            if (!eTime) eTime = sTime;
            var startDateArr = sTime.split(' ')[0].split('-');
            var startYear = parseInt(startDateArr[0]);
            var startMonth = parseInt(startDateArr[1]);
            var startDate = parseInt(startDateArr[2]);
            var endDateArr = eTime.split(' ')[0].split('-');
            var endYear = parseInt(endDateArr[0]);
            var endMonth = parseInt(endDateArr[1]);
            var endDate = parseInt(endDateArr[2]);
            if (type === 'date' && value.year() >= startYear && value.year() <= endYear && value.month() + 1 >= startMonth && value.month() + 1 <= endMonth && value.date() >= startDate && value.date() <= endDate) return true;
            if (type === 'month' && value.year() >= startYear && value.year() <= endYear && value.month() + 1 >= startMonth && value.month() + 1 <= endMonth) return true;
          }
        }) : [];

        if (renderList.length > 0) {
          renderList = renderList.sort(function (a, b) {
            return b[typeField] - a[typeField];
          });
        }

        return renderList;
      }; // 右键菜单


      var _onContextMenu = function onContextMenu(e, item) {
        e.preventDefault();

        if (model && engine) {
          var clientX = e.clientX,
              clientY = e.clientY;
          var newRecord = JSON.parse(JSON.stringify(item));
          if (newRecord.children) delete newRecord.children;
          model.selectedRows = [newRecord];
          model.selectedRowKeys = [newRecord.ID];
          (0, _contextMenuFunc.showContextMenu)({
            left: clientX,
            top: clientY,
            model: model,
            engine: engine,
            hData: model.selectedRows
          });
        }
      };

      var getContent = function getContent(item, contentFields) {
        var content = '';
        contentFields.forEach(function (fieldObject, index) {
          var fieldContent = item[fieldObject.contentField];

          if (fieldContent) {
            if (index > 0) {
              content += ' ';
            }

            content += fieldContent;
          }
        });
        return content;
      }; // 每天的数据处理显示


      var dateCellRender = function dateCellRender(value) {
        var _engine$params2 = engine.params,
            contentFields = _engine$params2.contentFields,
            typeField = _engine$params2.typeField,
            statisticsField = _engine$params2.statisticsField;
        var renderList = getRenderList(value, 'date');
        return /*#__PURE__*/_react.default.createElement("ul", {
          className: "events"
        }, statisticsField && renderList.length >= 3 ? /*#__PURE__*/_react.default.createElement("li", {
          className: _index.default.calendarObjectTotal
        }, /*#__PURE__*/_react.default.createElement("span", null, renderList.length)) : '', renderList.map(function (item) {
          return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
            title: getContent(item, contentFields),
            key: item.ID
          }, /*#__PURE__*/_react.default.createElement("li", {
            onContextMenu: function onContextMenu(e) {
              return _onContextMenu(e, item);
            }
          }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
            className: _index.default.calendarObjectBadge,
            color: getBadgeStatusColor(item[typeField]),
            text: /*#__PURE__*/_react.default.createElement("span", {
              style: {
                color: '#fff',
                background: getBadgeStatusColor(item[typeField]) || "".concat((0, _utils.getRenderColor)()),
                borderRadius: '3px',
                display: 'inline-block'
              }
            }, getContent(item, contentFields))
          })));
        }));
      }; // 每月的数据处理显示


      var monthCellRender = function monthCellRender(value) {
        var _engine$params3 = engine.params,
            contentFields = _engine$params3.contentFields,
            typeField = _engine$params3.typeField,
            statisticsField = _engine$params3.statisticsField;
        var renderList = getRenderList(value, 'month');
        return /*#__PURE__*/_react.default.createElement("ul", {
          className: "events"
        }, statisticsField && renderList.length >= 3 ? /*#__PURE__*/_react.default.createElement("li", {
          className: _index.default.calendarObjectTotal
        }, /*#__PURE__*/_react.default.createElement("span", null, renderList.length)) : '', renderList.map(function (item) {
          return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
            title: getContent(item, contentFields),
            key: item.ID
          }, /*#__PURE__*/_react.default.createElement("li", {
            onContextMenu: function onContextMenu(e) {
              return _onContextMenu(e, item);
            }
          }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
            className: _index.default.calendarObjectBadge,
            color: getBadgeStatusColor(item[typeField]),
            text: /*#__PURE__*/_react.default.createElement("span", {
              style: {
                color: getBadgeStatusColor(item[typeField])
              }
            }, getContent(item, contentFields))
          })));
        }));
      };

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex'
        },
        className: _index.default.calendarPage
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center'
        }
      }, typeFieldDataList.length > 0 ? typeFieldDataList.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("div", {
          style: {
            padding: '10px'
          }
        }, /*#__PURE__*/_react.default.createElement("span", {
          style: {
            display: 'inline-block',
            width: '14px',
            height: '14px',
            border: "1px solid ".concat(item.color || '#eee'),
            background: "".concat(item.color)
          }
        }), ' ', item.name || item);
      }) : ''), /*#__PURE__*/_react.default.createElement(_antd.Calendar, {
        dateCellRender: dateCellRender,
        monthCellRender: monthCellRender
      })));
    };
  };
};

exports.default = _default;