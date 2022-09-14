"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _metaApi = require("../../../service/metaApi");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../utils/utils");

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
var Option = _antd.Select.Option;

var Index = function Index(_ref) {
  var objectNo = _ref.objectNo,
      noParams = _ref.noParams,
      id = _ref.id;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  (0, _react.useEffect)(function () {
    if (objectNo) {
      (0, _metaApi.queryItemPGR)({
        tn: 11,
        tableName: objectNo,
        objectId: id
      }).then(function (res) {
        if (res && res.dataList) setFieldList((0, _utils.parseMeta)(res.dataList));
      });
    }
  }, [objectNo, id]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(List, {
    name: noParams ? 'SORTFIELDS' : ['PARAMS', 'sortFields'],
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: 'calc(100% - 14px)'
      }
    }, fields.map(function (field) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.field,
        name: [field.name, 'field'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, (fieldList || []).map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item.FIELDNAME,
          key: item.ID
        }, _utils.isEnglish ? item.ENNAME + "_".concat(item.FIELDNAME) : item.NAME + "_".concat(item.FIELDNAME));
      }))), /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.sort,
        name: [field.name, 'sort'],
        fieldKey: [field.fieldKey, '排序']
      }, /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, null, /*#__PURE__*/_react.default.createElement(_antd.Radio, {
        value: "ASC"
      }, "\u6B63\u5E8F"), /*#__PURE__*/_react.default.createElement(_antd.Radio, {
        value: "DESC"
      }, "\u5012\u5E8F"))), /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      style: {
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add({
          sort: 'ASC'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), "\u6DFB\u52A0\u6392\u5E8F\u5B57\u6BB5")));
  }));
};

var _default = Index;
exports.default = _default;