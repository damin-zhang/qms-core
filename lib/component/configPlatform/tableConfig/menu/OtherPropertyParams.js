"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _dva = require("dva");

var _metaApi = require("../../../../service/metaApi");

var _SearchInput = _interopRequireDefault(require("../../../common/search/SearchInput"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../../utils/utils");

var _queryTabConfigRelationApi = require("../../../../utils/queryTabConfigRelationApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$configPlatf = _language.default.configPlatform.tableConfig,
    fields1 = _language$configPlatf.fieldsProperty.fields,
    fields = _language$configPlatf.objectMenu.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      form = _ref.form,
      TABLENAME = _ref.TABLENAME,
      MNO = _ref.MNO;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      sfieldList = _useState2[0],
      setSfieldList = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tfieldList = _useState4[0],
      setTfieldList = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      objectNo = _useState6[0],
      setObjectNo = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      RELEVANCE = _useState8[0],
      setRELEVANCE = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      MNOList = _useState10[0],
      setMNOList = _useState10[1];

  (0, _react.useEffect)(function () {
    queryFields(TABLENAME, 1);

    var _ref2 = form.getFieldValue('PARAMS') || {},
        objectNo = _ref2.objectNo,
        RELEVANCE = _ref2.RELEVANCE;

    if (objectNo) {
      setObjectNo(objectNo);
      queryFields(objectNo, 0);
      getMNOList(objectNo);
    }

    RELEVANCE && setRELEVANCE(true);
  }, [TABLENAME, objectNo, form, MNO]); // 查询字段列表

  var queryFields = function queryFields(objectNo, type) {
    (0, _metaApi.queryItemPGR)({
      tn: 11,
      tableName: objectNo
    }).then(function (res) {
      type ? setSfieldList((0, _utils.parseMeta)(res.dataList)) : setTfieldList((0, _utils.parseMeta)(res.dataList));
    });
  }; // 点击“支持关联关系”，更新状态值


  var clickRelevance = function clickRelevance(event) {
    setRELEVANCE(event.target.checked);
  }; // 选择目标对象标识


  var selectItemNo = function selectItemNo() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          var TABLENAME = rows[0].TABLENAME;
          form.setFieldsValue({
            PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, {
              TABLENAME: TABLENAME
            })
          });
          setObjectNo(TABLENAME);
          getMNOList(TABLENAME);
        }
      }
    });
  }; // 选择关联关系标识


  var selectRELEVANCENO = function selectRELEVANCENO() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'relationship',
        condition: "A.objectB='".concat(objectNo, "'"),
        // 空
        onSelect: function onSelect(rows) {
          form.setFieldsValue({
            PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, {
              RELEVANCENO: rows[0].NO
            })
          });
        }
      }
    });
  }; // 获取弹窗标识列表


  var getMNOList = function getMNOList(objectNo) {
    var tn = (0, _queryTabConfigRelationApi.queryModelMap)('META_OBJECT_FORM');
    (0, _metaApi.queryItemPGR)({
      tn: tn,
      tableName: objectNo
    }).then(function (res) {
      if (res) setMNOList((0, _utils.parseMeta)(res.dataList));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: "MNO",
    label: fields.MNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, MNOList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'TABLENAME'],
    label: fields1.TTABLENAME,
    onClick: selectItemNo,
    rules: [{
      required: true
    }]
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-inline",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'RELEVANCE'],
    label: fields1.RELEVANCE,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: clickRelevance
  })), RELEVANCE && /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'RELEVANCENO'],
    label: fields1.RELEVANCENO,
    rules: [{
      required: true
    }],
    onClick: selectRELEVANCENO
  })), /*#__PURE__*/_react.default.createElement(List, {
    name: ['PARAMS', 'mapFields'],
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
    }, fields.map(function (field) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "ant-form-inline",
        style: {
          position: 'relative'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.sfield,
        name: [field.name, 'sfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '源字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, (sfieldList || []).map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item.NO,
          key: item.ID
        }, item.NAME);
      }))), /*#__PURE__*/_react.default.createElement(Item, {
        label: fields1.tfield,
        name: [field.name, 'tfield'],
        rules: [{
          required: true
        }],
        fieldKey: [field.fieldKey, '目标字段']
      }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
        showSearch: true,
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      }, tfieldList.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item.NO,
          key: item.ID
        }, item.NAME);
      }))), /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
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
        width: '100px',
        marginLeft: '25%'
      },
      onClick: function onClick() {
        return add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), "add")));
  }));
};

var _default = (0, _dva.connect)()(Index);

exports.default = _default;