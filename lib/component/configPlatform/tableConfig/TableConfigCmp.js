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

var _TableConfigForm = _interopRequireDefault(require("./TableConfigForm"));

var _Field = _interopRequireDefault(require("./field/Field"));

var _Menu = _interopRequireDefault(require("./menu/Menu"));

var _Property = _interopRequireDefault(require("./property/Property"));

var _Grid = _interopRequireDefault(require("./grid/Grid"));

var _Relation = _interopRequireDefault(require("./relation/Relation"));

var _RelatedEvents = _interopRequireDefault(require("./relatedEvents/RelatedEvents"));

var _DblclickEvent = _interopRequireDefault(require("./dblclick/DblclickEvent"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _language$configPlatf = _language.default.configPlatform.tableConfig,
    fieldsProperty = _language$configPlatf.fieldsProperty,
    objectMenu = _language$configPlatf.objectMenu,
    objectProperty = _language$configPlatf.objectProperty,
    objectGrid = _language$configPlatf.objectGrid,
    objectRelationPage = _language$configPlatf.objectRelationPage,
    relatedEvents = _language$configPlatf.relatedEvents,
    dblclick = _language$configPlatf.dblclick;
var TabPane = _antd.Tabs.TabPane;

var TableConfigCmp = function TableConfigCmp(_ref) {
  var tableProp = _ref.tableProp,
      formProps = _ref.formProps,
      paging = _ref.paging,
      changePane = _ref.changePane,
      closeTab = _ref.closeTab,
      showTab = _ref.showTab,
      activeKey = _ref.activeKey,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var selectedRows = tableProp.selectedRows;

  var _ref2 = selectedRows.length > 0 && selectedRows[0].META || {},
      TYPE = _ref2.TYPE;

  var tabCmp = [{
    name: fieldsProperty.title,
    cmp: /*#__PURE__*/_react.default.createElement(_Field.default, {
      activeTab: activeTab
    })
  }, {
    name: objectMenu.title,
    cmp: /*#__PURE__*/_react.default.createElement(_Menu.default, {
      objectANamespace: "tableConfig",
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: objectProperty.title,
    cmp: /*#__PURE__*/_react.default.createElement(_Property.default, {
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: objectGrid.title,
    cmp: /*#__PURE__*/_react.default.createElement(_Grid.default, {
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: objectRelationPage.title,
    cmp: /*#__PURE__*/_react.default.createElement(_Relation.default, {
      activeTab: activeTab,
      objectType: objectType
    })
  }, {
    name: relatedEvents.title,
    cmp: /*#__PURE__*/_react.default.createElement(_RelatedEvents.default, {
      activeTab: activeTab
    })
  }, {
    name: dblclick.title,
    cmp: /*#__PURE__*/_react.default.createElement(_DblclickEvent.default, {
      objectANamespace: "tableConfig",
      activeTab: activeTab,
      objectType: objectType
    })
  }];

  var showTabsByType = function showTabsByType() {
    var showTabCmp = [];

    switch (TYPE) {
      case 2:
        showTabCmp = [tabCmp[0]];
        break;

      case 3:
        showTabCmp = [tabCmp[0], tabCmp[1], tabCmp[2]];
        break;

      default:
        showTabCmp = tabCmp;
        break;
    }

    return showTabCmp.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: item.name,
        key: "".concat(index)
      }, item.cmp);
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, _extends({}, tableProp, {
    paging: paging
  })), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
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
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    onChange: changePane,
    activeKey: activeKey,
    tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
      onClick: closeTab
    })
  }, showTabsByType()))), /*#__PURE__*/_react.default.createElement(_TableConfigForm.default, formProps));
};

var _default = TableConfigCmp;
exports.default = _default;