"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

var _antd = require("antd");

var _metaApi = require("../../../service/metaApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform.tableConfig,
    title = _language$configPlatf.title,
    fieldsProperty = _language$configPlatf.fieldsProperty;
var Option = _antd.Select.Option;
var columns = [{
  title: fieldsProperty.fields.NO,
  dataIndex: 'NO',
  width: 200
}, {
  title: fieldsProperty.fields.NAME,
  dataIndex: 'NAME'
}];

var SelectData = function SelectData(_ref) {
  var visible = _ref.visible,
      onCancel = _ref.onCancel,
      onSelect = _ref.onSelect;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      keys = _useState2[0],
      setKeys = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dataList = _useState6[0],
      setDataList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      objectNoList = _useState8[0],
      setObjectNoList = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      tableName = _useState10[0],
      setTableName = _useState10[1];

  (0, _react.useEffect)(function () {
    if (visible) {
      (0, _metaApi.queryObject)({
        tn: 1,
        condition: "type IN(0,1)"
      }).then(function (res) {
        if (res) {
          setObjectNoList(res.dataList);
        }
      });
    }
  }, [visible]);

  var Ok = function Ok() {
    if (rows[0]) onSelect(rows, tableName);
    onCancel();
  };

  var onChange = function onChange(value, option) {
    setTableName(option.key);
    (0, _metaApi.queryItemPGR)({
      tn: 11,
      tableName: value
    }).then(function (res) {
      setDataList(res.dataList);
    });
  };

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      setKeys(selectedRowKeys);
      setRows(selectedRows);
    },
    selectedRowKeys: keys
  };
  var props = {
    dataList: dataList,
    columns: columns,
    rowSelection: rowSelection
  };
  return /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: common.select,
    visible: visible,
    onOk: Ok,
    onCancel: onCancel
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y",
    style: {
      height: 500
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    style: {
      marginBottom: '8px'
    },
    placeholder: common.select + '' + title,
    optionFilterProp: "children",
    onChange: onChange,
    filterOption: function filterOption(input, option) {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, objectNoList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.META.TABLENAME,
      key: item.META.TABLENAME
    }, _utils.isEnglish ? item.META.ENNAME : item.META.NAME);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, props))));
};

var _default = SelectData;
exports.default = _default;