"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ParseTable = _interopRequireDefault(require("../../common/table/ParseTable"));

var _antd = require("antd");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _PropertyForm = _interopRequireDefault(require("../property/PropertyForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$changeHisto = _language.default.changeHistory,
    title = _language$changeHisto.title,
    fields = _language$changeHisto.fields,
    common = _language.default.common;
var columns = [{
  title: fields.ACTION,
  dataIndex: 'ACTION',
  width: 100
}, {
  title: fields.cuser,
  dataIndex: 'cuser',
  width: 100
}, {
  title: fields.ctime,
  dataIndex: 'ctime',
  width: 150
}, {
  title: fields.DETAILS,
  dataIndex: 'DETAILS',
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}];
var pageFieldList = [];
columns.forEach(function (item) {
  if (item.dataIndex === 'DETAILS') {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextArea',
      editParams: JSON.stringify({
        rowHeight: 8
      })
    });
  } else {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextBox'
    });
  }
});

var _default = function _default(WrappedComponent) {
  return function (props) {
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        record = _useState4[0],
        setRecord = _useState4[1];

    var dataList = props.model.dataList;

    var onRow = function onRow(record) {
      return {
        onDoubleClick: function onDoubleClick() {
          setRecord(record);
          setVisible(true);
        }
      };
    };

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props), /*#__PURE__*/_react.default.createElement(_ParseTable.default, {
      dataList: dataList,
      columns: columns,
      onRow: onRow
    }), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
      title: title,
      visible: visible,
      footer: /*#__PURE__*/_react.default.createElement(_antd.Button, {
        key: "submit",
        type: "primary",
        onClick: function onClick() {
          return setVisible(false);
        }
      }, common.close),
      onCancel: function onCancel() {
        return setVisible(false);
      }
    }, /*#__PURE__*/_react.default.createElement(_PropertyForm.default, {
      record: record,
      pageFieldList: pageFieldList
    })));
  };
};

exports.default = _default;