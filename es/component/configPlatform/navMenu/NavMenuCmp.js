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

/*
 * @Description: 导航菜单组件
 */
import React from 'react';
import { Button, Tabs, Form, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import DragCmp from '../../common/drag/DragCmp';
import TableWithBtn from '../../common/table/TableWithBtn';
import NavMenuForm from './NavMenuForm';
import Menu from '../tableConfig/menu/Menu';
import MoveNodeForm from '../../engine/property/MoveNodeForm';
import DragSortForm from '../common/DragSortForm';
import ParameterRight from './ParameterRight';
import styles from './index.less';
import language from '@/locale/language';
import { TableRow } from 'react-base-table';
var save = language.common.save,
    _language$configPlatf = language.configPlatform.navMenu,
    title2 = _language$configPlatf.title2,
    parameter = _language$configPlatf.fields.parameter;
var TabPane = Tabs.TabPane;
var Item = Form.Item;
var tabCmp = [{
  name: title2,
  cmp: /*#__PURE__*/React.createElement(Menu, {
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

  var _Form$useForm = Form.useForm(),
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
    React.createElement("div", {
      className: "flex-x",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement(TableWithBtn, tableProps), /*#__PURE__*/React.createElement(Drawer, {
      visible: showTab,
      height: "80%",
      closable: false,
      placement: "bottom",
      onClose: closeTab,
      zIndex: 999
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-grow-x",
      style: {
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.auto
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        display: PARAMS ? 'inline-flex' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        fontSize: '16px',
        fontWeight: '600'
      }
    }, parameter), /*#__PURE__*/React.createElement(Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
      onClick: closeTab
    })), /*#__PURE__*/React.createElement(DragCmp, {
      enable: {
        bottom: true
      },
      showTab: showTab,
      tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
        size: "small",
        className: "extra-btn",
        icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
        onClick: closeTab
      })
    }, isModeling ? /*#__PURE__*/React.createElement(Button, {
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
    }, save) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(ParameterRight, _extends({}, formProps, {
      form: form
    }))))), /*#__PURE__*/React.createElement("div", {
      className: "flex-y"
    }, /*#__PURE__*/React.createElement(Tabs, {
      onChange: changePane,
      activeKey: activeKey
    }, tabCmp.map(function (item, index) {
      return /*#__PURE__*/React.createElement(TabPane, {
        tab: item.name,
        key: "".concat(index)
      }, item.cmp);
    })))))), /*#__PURE__*/React.createElement(NavMenuForm, formProps), /*#__PURE__*/React.createElement(MoveNodeForm, moveNodeFormProps), /*#__PURE__*/React.createElement(DragSortForm, dragProps))
  );
};

export default NavMenuCmp;