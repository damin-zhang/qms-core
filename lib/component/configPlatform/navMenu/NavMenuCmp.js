"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _NavMenuForm = _interopRequireDefault(require("./NavMenuForm"));

var _Menu = _interopRequireDefault(require("../tableConfig/menu/Menu"));

var _MoveNodeForm = _interopRequireDefault(require("../../engine/property/MoveNodeForm"));

var _DragSortForm = _interopRequireDefault(require("../common/DragSortForm"));

var _ParameterRight = _interopRequireDefault(require("./ParameterRight"));

var _index = _interopRequireDefault(require("./index.less"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _reactBaseTable = require("react-base-table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var save = _language.default.common.save,
    _language$configPlatf = _language.default.configPlatform.navMenu,
    title2 = _language$configPlatf.title2,
    parameter = _language$configPlatf.fields.parameter;
var TabPane = _antd.Tabs.TabPane;
var Item = _antd.Form.Item;
var tabCmp = [{
  name: title2,
  cmp: /*#__PURE__*/_react.default.createElement(_Menu.default, {
    objectANamespace: "navMenu",
    activeTab: "2"
  })
}];

var NavMenuCmp = function NavMenuCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      moveNodeFormProps = _ref.moveNodeFormProps,
      dragProps = _ref.dragProps,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      isModeling = _ref.isModeling;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var record = moveNodeFormProps.selectedRows[0] ? moveNodeFormProps.selectedRows[0] : [];
  var PARAM = record.PARAMS || {}; // let sortFields = typeof PARAM.sortFields === 'string' ? JSON.parse(PARAM.sortFields) : []
  // let records = { ...record, PARAMS: { ...PARAM, sortFields } }

  var sortFields = PARAM.sortFields;

  var records = _objectSpread(_objectSpread({}, record), {}, {
    PARAMS: _objectSpread(_objectSpread({}, PARAM), {}, {
      sortFields: sortFields
    })
  });

  var tableProps = _objectSpread(_objectSpread({}, tableProp), {}, {
    record: records ? records : {}
  }); // let formProp = { ...formProps, record: records }


  var PARAMSA = moveNodeFormProps.selectedRows.length && moveNodeFormProps.selectedRows[0].PARAMS;
  var PARAMS = PARAMSA ? moveNodeFormProps.selectedRows[0].PARAMS : {};
  return (
    /*#__PURE__*/

    /* 可拖动分割面板 */
    _react.default.createElement("div", {
      className: "flex-x",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
      visible: showTab,
      height: "80%",
      closable: false,
      placement: "bottom",
      onClose: closeTab,
      zIndex: 999
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-grow-x",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _index.default.auto
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%',
        display: PARAMS ? 'inline-flex' : 'none'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%',
        fontSize: '16px',
        fontWeight: '600'
      }
    }, parameter), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
      onClick: closeTab
    })), /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
      enable: {
        bottom: true
      },
      showTab: showTab,
      tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
        onClick: closeTab
      })
    }, isModeling ? /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      onClick: function onClick() {
        return form.submit();
      },
      style: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 999
      }
    }, save) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement(_ParameterRight.default, _extends({}, formProps, {
      form: form
    }))))), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
      onChange: changePane,
      activeKey: activeKey
    }, tabCmp.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: item.name,
        key: "".concat(index)
      }, item.cmp);
    })))))), /*#__PURE__*/_react.default.createElement(_NavMenuForm.default, formProps), /*#__PURE__*/_react.default.createElement(_MoveNodeForm.default, moveNodeFormProps), /*#__PURE__*/_react.default.createElement(_DragSortForm.default, dragProps))
  );
};

var _default = NavMenuCmp;
exports.default = _default;