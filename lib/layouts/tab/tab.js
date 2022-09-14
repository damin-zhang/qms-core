"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactSvg = require("react-svg");

var _ActStartProcess = _interopRequireDefault(require("../../pages/activiti/ProcessManage/ActStartProcess"));

var _SelectData = _interopRequireDefault(require("../../component/configPlatform/common/SelectData"));

var _AssignRole = _interopRequireDefault(require("../../pages/systemPlatform/AssignRole"));

var _tab = _interopRequireDefault(require("./tab.css"));

require("./tabStyle.css");

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../utils/utils");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * @Description: 布局-页签
 */
var tab_context_menu = _language.default.common.tab_context_menu;

var svgDir = require.context('.././../assets/icon/');

var TabPane = _antd.Tabs.TabPane;
var Item = _antd.Menu.Item;
var arr = ['close_current_tags', 'close_other_tags', 'close_all_tags'];

var TabCmp = function TabCmp(_ref) {
  var dispatch = _ref.dispatch,
      loading = _ref.loading,
      tab = _ref.tab;
  var panes = tab.panes,
      activeKey = tab.activeKey,
      contextMenuKey = tab.contextMenuKey,
      modals = tab.modals;
  var _localStorage = localStorage,
      menuData = _localStorage.menuData;

  try {
    menuData = JSON.parse(menuData || '[]');
  } catch (err) {
    menuData = [];
  }

  if (!loading) loading = tab.loading;

  var onEdit = function onEdit(key, type) {
    dispatch({
      type: 'tab/closeTab',
      payload: {
        type: type,
        key: key
      }
    });
  };

  var onChange = function onChange(activeKey) {
    var navList = menuData.filter(function (item) {
      return item.META && item.META.isStatistics;
    }) || [];
    navList = navList.filter(function (item) {
      return item.PID !== 'collect';
    });

    if (navList.length) {
      var pageIds = [];
      navList.map(function (item) {
        return pageIds.push(item.ID);
      });
      dispatch({
        type: 'user/queryNavigationTotal',
        payload: {
          pageIds: pageIds
        }
      });
    }

    dispatch({
      type: 'tab/packet',
      payload: {
        activeKey: activeKey
      }
    });
  };

  (0, _react.useEffect)(function () {
    var selectKey = panes.find(function (item) {
      return activeKey === item.key;
    }) || {};

    if (activeKey !== 'Home' && selectKey.record && selectKey.record.ID) {
      dispatch({
        type: 'user/packet',
        payload: {
          selectedKeys: [selectKey.record.ID.toString()]
        }
      });
    } else dispatch({
      type: 'user/packet',
      payload: {
        selectedKeys: []
      }
    });
  }, [activeKey, panes]);

  var menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, arr.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Item, {
      key: item,
      onClick: function onClick() {
        return onEdit(contextMenuKey, index);
      }
    }, tab_context_menu[item]);
  }));

  var menu2 = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(Item, {
    onClick: function onClick() {
      return onEdit(contextMenuKey, 1);
    }
  }, tab_context_menu['close_other_tags']));

  var _onVisibleChange = function onVisibleChange(key) {
    dispatch({
      type: 'tab/packet',
      payload: {
        contextMenuKey: key
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    onChange: onChange,
    onEdit: onEdit,
    activeKey: activeKey,
    type: "editable-card",
    hideAdd: true,
    className: (0, _classnames.default)([_tab.default.tabs, 'selectedBackground'])
  }, panes.map(function (item) {
    var newIcon = null;
    var IconView = null;

    if (item.icon) {
      if (item.icon.indexOf('third-') != -1) {
        //筛选第三方图标库的icons
        newIcon = item.icon.substring(6); //将第三方图标库标识去掉
      } else {
        item.icon = item.icon.substring(0, 1).toUpperCase() + item.icon.substring(1, item.icon.length);
        IconView = Icon["".concat(item.icon, "Outlined")];
      }
    }

    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
        overlay: item.key !== 'Home' ? menu : menu2,
        trigger: ['contextMenu'],
        onVisibleChange: function onVisibleChange(visible) {
          if (visible) _onVisibleChange(item.key);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, item.icon && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        className: "thirdIcons",
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null)), item.caption ? item.caption : _utils.isEnglish ? item.record.ENNAME : item.record.NAME)),
      key: item.key,
      className: _tab.default.tabPane,
      closable: item.closable
    }, item.Cmp);
  })), loading && /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    spinning: loading,
    delay: 100,
    className: _tab.default.spin
  }), modals.map(function (item) {
    return item.Cmp;
  }), /*#__PURE__*/_react.default.createElement(_ActStartProcess.default, null), /*#__PURE__*/_react.default.createElement(_AssignRole.default, null), /*#__PURE__*/_react.default.createElement(_SelectData.default, null));
};

function mapStateToProps(_ref2) {
  var tab = _ref2.tab,
      loading = _ref2.loading,
      user = _ref2.user;
  return {
    loading: loading.global,
    tab: tab,
    user: user
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(TabCmp);

exports.default = _default;