"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _CodeStandardForm = _interopRequireDefault(require("./CodeStandardForm"));

var _utils = require("../../../utils/utils");

var _PropertyForm = _interopRequireDefault(require("../../engine/property/PropertyForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _mapParams = require("../../../utils/mapParams");

var _EnMapParams = require("../../../utils/EnMapParams");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _language$systemPlatf = _language.default.systemPlatform.codeStandard,
    fields = _language$systemPlatf.fields,
    buttons = _language$systemPlatf.buttons,
    title1 = _language$systemPlatf.title1,
    title2 = _language$systemPlatf.title2,
    Coding = _language$systemPlatf.Coding;
var TreeNode = _antd.Tree.TreeNode;
var offsetHeights = document.getElementsByClassName;

var CodeStandard = function CodeStandard(_ref) {
  var list = _ref.list,
      record = _ref.record,
      onCancel = _ref.onCancel,
      visible = _ref.visible,
      showModel = _ref.showModel,
      deleteCode = _ref.deleteCode,
      editModel = _ref.editModel,
      createType = _ref.createType,
      objectList = _ref.objectList,
      onSelect = _ref.onSelect,
      selectRow = _ref.selectRow,
      parentKeyA = _ref.parentKeyA;
  var pageFieldList = [];
  var openKeys = [];
  var pageFieldList0 = [{
    editor: 'TextBox',
    caption: fields.NAME,
    no: 'name'
  }, {
    editor: 'TextBox',
    caption: fields.OBJECT,
    no: 'object'
  }, {
    editor: 'TextBox',
    caption: fields.TYPE,
    no: 'type'
  }];
  var pageFieldList1 = [{
    editor: 'TextBox',
    caption: fields.NAME,
    no: 'name'
  }, {
    editor: 'TextBox',
    caption: fields.OBJECT,
    no: 'object'
  }, {
    editor: 'TextBox',
    caption: fields.TYPE,
    no: 'type'
  }, {
    editor: 'TextBox',
    caption: fields.PREFIX,
    no: 'prefix'
  }, {
    editor: 'TextBox',
    caption: fields.CONNECTOR,
    no: 'connector'
  }];
  var pageFieldList2 = [{
    editor: 'TextBox',
    caption: fields.NAME,
    no: 'name'
  }, {
    editor: 'TextBox',
    caption: fields.OBJECT,
    no: 'object'
  }, {
    editor: 'TextBox',
    caption: fields.TYPE,
    no: 'type'
  }, {
    editor: 'TextBox',
    caption: fields.CODE_SEGMENT,
    no: 'code_segment'
  }, {
    editor: 'TextBox',
    caption: fields.STARTCODE,
    no: 'startCode'
  }, {
    editor: 'TextBox',
    caption: fields.ENDCODE,
    no: 'endCode'
  }, {
    editor: 'TextBox',
    caption: fields.REMARK,
    no: 'remark',
    allowNull: true
  }];

  if (selectRow && selectRow.dataType === 0) {
    pageFieldList = pageFieldList0;
  } else if (selectRow && selectRow.dataType === 1) {
    pageFieldList = pageFieldList1;
  } else if (selectRow && selectRow.dataType === 2) {
    pageFieldList = pageFieldList2;
  }

  var newList = (0, _utils.systemErgodicRoot)(list);

  var generateTree = function generateTree(data) {
    return data.map(function (item) {
      var title = localStorage.getItem('AcceptLanguage') === 'en-US' ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", null, item.eName ? item.eName : item.name), item.prefix ? /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#e8d098'
        }
      }, "(", _EnMapParams.EnCodeTypeMap[item.dataType] && _EnMapParams.EnCodeTypeMap[item.dataType].name, ' ', "/ ", item.prefix, ")") : item.type !== 'block_code' && /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#1890ff'
        }
      }, "(", _EnMapParams.EnCodeTypeMap[item.dataType].name, ")")) : /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", null, item.name), item.prefix ? /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#e8d098'
        }
      }, "(", _mapParams.codeTypeMap[item.dataType] && _mapParams.codeTypeMap[item.dataType].name, ' ', "/ ", item.prefix, ")") : item.type !== 'block_code' && /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#1890ff'
        }
      }, "(", _mapParams.codeTypeMap[item.dataType].name, ")"));

      if (item.children) {
        return /*#__PURE__*/_react.default.createElement(TreeNode, {
          key: item.id,
          title: title,
          dataRef: item
        }, generateTree(item.children));
      }

      return /*#__PURE__*/_react.default.createElement(TreeNode, {
        key: item.id,
        title: title,
        dataRef: item
      });
    });
  };

  var isType = function isType(i) {
    if (i === undefined && createType === 0) {
      return 'block_code';
    } else if (i === undefined && createType === 1) {
      return 'classification_code';
    } else if (i === undefined && createType === 2) {
      return 'pipeline_code';
    } else {
      return i;
    }
  };

  var _ref2 = selectRow || {},
      dataType = _ref2.dataType,
      id = _ref2.id;

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      right: true
    },
    showTab: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: 5,
      marginTop: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return showModel(0);
    }
  }, buttons.newCodeingGroup), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return showModel(1);
    },
    disabled: !(id && dataType !== 2)
  }, buttons.newCode), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: function onClick() {
      return showModel(2);
    },
    disabled: !(id && dataType !== 2)
  }, buttons.newPipelineGroup), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: deleteCode,
    disabled: !id
  }, buttons.delete), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: editModel,
    disabled: !id
  }, buttons.update)), /*#__PURE__*/_react.default.createElement(_antd.Card, {
    bordered: false,
    style: {
      height: '100%'
    },
    className: "CardTree"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflowY: 'scroll',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Tree, {
    onSelect: onSelect
  }, generateTree(newList))))), /*#__PURE__*/_react.default.createElement(_antd.Card, {
    title: title2,
    bordered: false
  }, selectRow ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_PropertyForm.default, {
    columns: 1,
    pageFieldList: pageFieldList,
    initVal: selectRow,
    rType: "code",
    labelLen: 100
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: 'rgba(0, 0, 0, 0.85)'
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, parentKeyA ? Coding + ':' : ''), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginTop: '40px',
      marginLeft: '50px'
    }
  }, parentKeyA))) : ''), /*#__PURE__*/_react.default.createElement(_CodeStandardForm.default, {
    visible: visible,
    onCancel: onCancel,
    record: _objectSpread(_objectSpread({}, record), {}, {
      type: isType(record.type)
    }),
    createType: createType,
    objectList: objectList
  }));
};

var _default = CodeStandard;
exports.default = _default;