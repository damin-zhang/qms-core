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

var _classnames = _interopRequireDefault(require("classnames"));

var _systemApi = require("../../service/systemApi");

var _queryDataApi = require("../../service/queryDataApi");

var _utils = require("../../utils/utils");

var _index = _interopRequireDefault(require("./index.css"));

var _menu3 = _interopRequireDefault(require("./menu.less"));

require("./menu.css");

var _language = _interopRequireDefault(require("../../locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var svgDir = require.context('../../assets/icon/');

var paramsa = _language.default.paramsa;
var Sider = _antd.Layout.Sider;
var Item = _antd.Menu.Item,
    SubMenu = _antd.Menu.SubMenu;
var Search = _antd.Input.Search;
var styleMap = [{
  unChecked: _utils.isEnglish ? 'Collapse' : '??????',
  checked: _utils.isEnglish ? 'Top' : '??????',
  name: 'position'
}, {
  unChecked: _utils.isEnglish ? 'Dark' : '??????',
  checked: _utils.isEnglish ? 'Light' : '??????',
  name: 'theme'
}, {
  unChecked: _utils.isEnglish ? 'Inline' : '??????',
  checked: _utils.isEnglish ? 'Vertical' : '??????',
  name: 'mode'
}, // { unChecked: isEnglish ? 'Expand' : '??????', checked: isEnglish ? 'Collapsed' : '??????', name: 'collapsed' },
{
  unChecked: _utils.isEnglish ? 'Discard' : '??????',
  checked: _utils.isEnglish ? 'Collect' : '??????',
  name: 'collect'
}];

var getParentKey = function getParentKey(key, tree) {
  var parentKey;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.children) {
      if (node.children.some(function (item) {
        return item.ID === key;
      })) {
        parentKey = node.ID;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};

var getOpenKeys = function getOpenKeys(keys, tree) {
  var PID = 1;
  var openKeys = [];

  if (keys.length) {
    keys.forEach(function (item) {
      var key = item;
      openKeys.push(key.toString());

      for (var i = 0; i < 6; i++) {
        if (openKeys.length) {
          tree.map(function (item1) {
            openKeys.map(function (item2) {
              if (item1.ID.toString() === item2) {
                !openKeys.includes(item1.PID.toString()) && openKeys.push(item1.PID.toString());
              }
            });
          });
        }
      }

      while (PID !== 1) {
        for (var _i = 0; _i < tree.length; _i++) {
          var node = tree[_i];

          if (node.ID === key) {
            PID = node.PID;
            key = node.PID;

            if (PID !== 1) {
              openKeys.indexOf('PID') < 0 && openKeys.push(PID.toString());
            }

            break;
          }
        }
      }
    });
  }

  return openKeys;
};

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      user = _ref.user,
      mode = _ref.mode;
  var _localStorage = localStorage,
      menuData = _localStorage.menuData;
  var menu = user.menu,
      _user$commonNavigatio = user.commonNavigations,
      commonNavigations = _user$commonNavigatio === void 0 ? [] : _user$commonNavigatio,
      selectedKeys = user.selectedKeys,
      openKeys = user.openKeys,
      theme = user.theme,
      collapsed = user.collapsed,
      position = user.position,
      collect = user.collect,
      NavTotal = user.NavTotal,
      isLoginOut = user.isLoginOut,
      _user$customNavTotal = user.customNavTotal,
      customNavTotal = _user$customNavTotal === void 0 ? {} : _user$customNavTotal;

  try {
    menuData = JSON.parse(menuData || '[]');
  } catch (err) {
    menuData = [];
  }

  (0, _react.useEffect)(function () {
    if (selectedKeys && selectedKeys.length) {
      setTimeout(function () {
        var selectedFirstDom = document.getElementsByClassName('ant-menu-item-selected')[0];
        selectedFirstDom && selectedFirstDom.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, [selectedKeys]);
  (0, _react.useEffect)(function () {
    var timer = setInterval(function () {
      queryNavTotal();
    }, 30000);
    isLoginOut && clearInterval(timer);
    return function () {
      clearInterval(timer);
    };
  }, [isLoginOut]); //????????????????????????

  var queryNavTotal = function queryNavTotal() {
    var navList = menuData.filter(function (item) {
      return item.PID !== 'collect' && item.META && item.META.isStatistics;
    }) || [];
    var customPageList = navList.filter(function (item) {
      return item.META && item.META.FACETYPE === 0;
    });
    var pageList = navList.filter(function (item) {
      return item.META && item.META.FACETYPE;
    });

    if (pageList.length) {
      var pageIds = [];
      pageList.map(function (item) {
        return pageIds.push(item.ID);
      });
      (0, _queryDataApi.queryNavigationTotal)({
        pageIds: pageIds
      }).then(function (data) {
        if (data && data.flag) {
          if (data.totals.length) {
            var totals = data.totals;
            var _NavTotal = {};
            totals.map(function (item) {
              _NavTotal[item.pageId] = item.total;
            });
            dispatch({
              type: 'user/packet',
              payload: {
                NavTotal: _NavTotal
              }
            });
          }
        } else if (!data || !data.flag) {
          dispatch({
            type: 'user/packet',
            payload: {
              isLoginOut: true
            }
          });
        }
      });
    }

    if (customPageList.length) {
      var _pageList = [];
      customPageList.map(function (item) {
        return _pageList.push({
          ID: item.ID,
          NO: item.META.NO
        });
      });
      (0, _queryDataApi.queryCustomNavigationTotal)({
        pageList: _pageList
      }.then(function (data) {
        if (data && data.flag) {
          if (data.totals.length) {
            var totals = data.totals;
            var _customNavTotal = {};
            totals.map(function (item) {
              _customNavTotal[item.ID] = item.total;
            });
            dispatch({
              type: 'user/packet',
              payload: {
                customNavTotal: _customNavTotal
              }
            });
          }
        } else if (!data || !data.flag) {
          dispatch({
            type: 'user/packet',
            payload: {
              isLoginOut: true
            }
          });
        }
      }));
    }
  };

  var loadPage = function loadPage(item) {
    item.META = item.META || {};
    dispatch({
      type: 'tab/loadPage',
      payload: _objectSpread(_objectSpread({}, item), item.META)
    });
    dispatch({
      type: 'user/packet',
      payload: {
        selectedKeys: [item.ID.toString()]
      }
    });
  }; // TODO ????????????


  var toogleCollect = function toogleCollect(e, item) {
    e.stopPropagation();

    if (commonNavigations.length && commonNavigations.includes(item.ID)) {
      (0, _systemApi.collectNav)(item.ID).then(function (res) {
        if (res) {
          var dataList = JSON.parse(localStorage.getItem('menuData'));
          dataList.splice(dataList.findIndex(function (nav) {
            return nav.ID === item.ID && nav.PID === 'collect';
          }), 1);
          commonNavigations.splice(commonNavigations.findIndex(function (nav) {
            return nav === item.ID;
          }), 1);

          if (!commonNavigations.length) {
            dataList.find(function (nav) {
              return nav.ID === 'collect';
            }).children = [];
          }

          localStorage.setItem('menuData', JSON.stringify(dataList));

          var _menu = (0, _utils.ergodicRoot)(dataList, 0);

          dispatch({
            type: 'user/packet',
            payload: {
              menu: _menu,
              commonNavigations: commonNavigations
            }
          });
        }
      });
    } else {
      (0, _systemApi.collectNav)(item.ID).then(function (res) {
        if (res) {
          commonNavigations.push(item.ID);
          var dataList = JSON.parse(localStorage.getItem('menuData'));
          var clickedNav = dataList.find(function (nav) {
            return nav.ID === item.ID;
          });
          clickedNav = _objectSpread(_objectSpread({}, clickedNav), {}, {
            PID: 'collect'
          });
          dataList.push(clickedNav);
          localStorage.setItem('menuData', JSON.stringify(dataList));

          var _menu2 = (0, _utils.ergodicRoot)(dataList, 0);

          dispatch({
            type: 'user/packet',
            payload: {
              menu: _menu2,
              commonNavigations: commonNavigations
            }
          });
        }
      });
    }
  }; //????????????????????????


  var getParentCount = function getParentCount() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!list.length) return 0;
    var total = 0;

    var getTotal = function getTotal(data) {
      data.map(function (item) {
        var children = item.children,
            ID = item.ID;

        if (NavTotal[ID]) {
          total += NavTotal[ID];
        }

        if (customNavTotal[ID]) {
          total += customNavTotal[ID];
        }

        if (children && children.length) {
          getTotal(children);
        }
      });
    };

    getTotal(list);
    return total;
  };

  var showSubMenu = function showSubMenu(children) {
    var show = true;

    if (children && children.length) {
      var flag = children.every(function (item) {
        return !item.children;
      });

      if (flag) {
        show = !children.every(function (item) {
          return item.TOP;
        });
      }
    }

    return show;
  };

  var getMenus = function getMenus(data, commonNavigations) {
    return data.map(function (item) {
      var children = item.children,
          ID = item.ID,
          CAPTION = item.CAPTION,
          TOP = item.TOP,
          META = item.META,
          rowkey = item.rowkey,
          PID = item.PID;

      var _ref2 = META ? META : '',
          ICON = _ref2.ICON;

      var newIcon = null;
      var IconView = null;

      if (ICON) {
        if (ICON.indexOf('third-') != -1) {
          //???????????????????????????icons
          newIcon = ICON.substring(6); //?????????????????????????????????
        } else {
          ICON = ICON.substring(0, 1).toUpperCase() + ICON.substring(1, ICON.length);
          IconView = Icon["".concat(ICON, "Outlined")];
        }
      }

      var _ref3 = item.META ? META : '',
          PARAMS = _ref3.PARAMS;

      var ObjParams = PARAMS ? PARAMS : '{}';
      var ObjPar = Object.keys(ObjParams);
      var newParams = [];
      ObjPar.map(function (item) {
        newParams.push([paramsa[item]] + ':' + ObjParams[item]);
      }); // ??????

      var text = CAPTION !== undefined ? CAPTION : _utils.isEnglish ? META.ENNAME || META.NO : META.NAME;

      var title = /*#__PURE__*/_react.default.createElement("div", {
        className: theme ? _menu3.default.themeItem : _menu3.default.darkMenuItem
      }, collect && item.PID !== 'config' && item.PID !== 'reportList' && item.PID !== 'other' && item.META && item.META.FACETYPE > -1 && (commonNavigations.includes(item.ID) ? /*#__PURE__*/_react.default.createElement(Icon.HeartFilled, {
        style: {
          float: 'left',
          marginTop: '14px',
          marginRight: '5px',
          color: 'red'
        },
        onClick: function onClick(e) {
          return toogleCollect(e, item);
        }
      }) : /*#__PURE__*/_react.default.createElement(Icon.HeartOutlined, {
        style: {
          float: 'left',
          marginTop: '14px',
          marginRight: '5px'
        },
        onClick: function onClick(e) {
          return toogleCollect(e, item);
        }
      })), META && (newIcon ? item.children ?
      /*#__PURE__*/
      //?????????????????????????????????????????????
      _react.default.createElement(_reactSvg.ReactSVG, {
        className: _menu3.default.sideIcons,
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        className: collect ? _menu3.default.collectThirdIcons : _menu3.default.sideIcons,
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null) || /*#__PURE__*/_react.default.createElement(Icon.BorderOuterOutlined, null)), /*#__PURE__*/_react.default.createElement("span", null, CAPTION !== undefined ? CAPTION : _utils.isEnglish ? META.ENNAME || META.NO : META.NAME)); // ??????????????????


      var Modeling = sessionStorage.getItem('isModeling');
      var menuItem = Modeling && Modeling !== '' ? /*#__PURE__*/_react.default.createElement(Item, {
        key: ID,
        onClick: function onClick() {
          return loadPage(item);
        },
        title: PARAMS ? newParams.join('\n') : text
      }, title, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
        count: META && META.isStatistics ? NavTotal[ID] || customNavTotal[ID] : 0,
        offset: !collapsed && [-36, 1],
        overflowCount: 999,
        className: !collapsed ? 'collapsedCountStyle' : 'ParentCountStyle'
      })) : /*#__PURE__*/_react.default.createElement(Item, {
        key: ID,
        onClick: function onClick() {
          return loadPage(item);
        },
        title: text
      }, title, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
        count: META && META.isStatistics ? NavTotal[ID] || customNavTotal[ID] : 0,
        offset: !collapsed && [-36, 1],
        overflowCount: 999,
        className: !collapsed ? 'collapsedCountStyle' : 'ParentCountStyle'
      }));
      return children ? /*#__PURE__*/_react.default.createElement(SubMenu, {
        key: ID,
        title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
          title: text
        }, title), /*#__PURE__*/_react.default.createElement(_antd.Badge, {
          count: getParentCount(children),
          offset: !collapsed && [-16, 1],
          overflowCount: 999,
          className: !collapsed ? 'collapsedCountStyle' : 'ParentCountStyle'
        }))
      }, getMenus(children, commonNavigations)) : position ? menuItem : !TOP && menuItem;
    });
  }; //????????????


  var onSearch = function onSearch(value) {
    if (!value) return;
    var selectedKeys = [];
    var openKeys = [];
    var parentKey = menuData.map(function (item) {
      var CAPTION = item.CAPTION ? item.CAPTION : _utils.isEnglish ? item.META.ENNAME : item.META.NAME;

      if (CAPTION && CAPTION.toUpperCase().indexOf(value.toUpperCase()) >= 0) {
        selectedKeys.push(item.ID.toString());
        return getParentKey(item.ID, menu, user.mode);
      }

      return null;
    }).filter(function (item, i, self) {
      return item && self.indexOf(item) === i;
    });
    openKeys = getOpenKeys(parentKey, menuData);
    user.mode ? dispatch({
      type: 'user/packet',
      payload: {
        selectedKeys: selectedKeys
      }
    }) : dispatch({
      type: 'user/packet',
      payload: {
        openKeys: openKeys,
        selectedKeys: selectedKeys
      }
    });
  }; //?????? || ????????????


  var onOpenChange = function onOpenChange(openKeys) {
    dispatch({
      type: 'user/packet',
      payload: {
        openKeys: openKeys
      }
    });
  };

  var changeStyle = function changeStyle(type) {
    return function () {
      var _payload;

      localStorage[type] ? localStorage.removeItem(type) : localStorage.setItem(type, 1);
      dispatch({
        type: 'user/packet',
        payload: (_payload = {}, _defineProperty(_payload, type, !user[type]), _defineProperty(_payload, "openKeys", []), _payload)
      });

      if (type === 'position' && !user[type]) {
        dispatch({
          type: 'user/packet',
          payload: {
            isRequestMenusTotal: true
          }
        });
      }
    };
  };

  var tool = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, styleMap.map(function (item) {
    return (item.name === 'position' && menuData.some(function (item) {
      return item.TOP;
    }) || item.name !== 'position') && /*#__PURE__*/_react.default.createElement(Item, {
      key: item.name
    }, /*#__PURE__*/_react.default.createElement(_antd.Switch, {
      checkedChildren: item.checked,
      unCheckedChildren: item.unChecked,
      checked: item.name === 'position' ? !user[item.name] : user[item.name],
      onChange: changeStyle(item.name)
    }));
  }));

  return /*#__PURE__*/_react.default.createElement(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed ? false : true,
    className: (0, _classnames.default)([_menu3.default.menuWrapper, !collapsed ? _index.default.menuWidth : null, 'menuSider'])
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      backgroundColor: theme ? '#fff' : '#001529',
      justifyContent: 'center'
    }
  }, collapsed && /*#__PURE__*/_react.default.createElement(Search, {
    onSearch: onSearch,
    className: _index.default.search
  })), /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    onOpenChange: onOpenChange,
    className: (0, _classnames.default)([collapsed ? _index.default.menu : _index.default.menuCollapsed, theme ? '' : 'bg-color']),
    mode: user.mode ? 'vertical' : 'inline',
    theme: theme ? 'light' : 'dark',
    selectedKeys: selectedKeys,
    openKeys: openKeys
  }, getMenus(menu, commonNavigations)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: theme ? '#d6d6d6' : 'rgb(6, 25, 54)',
      color: theme ? '#333' : '#fff'
    },
    className: _index.default.menuBottom
  }, collapsed && /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    overlay: tool,
    placement: "topLeft"
  }, /*#__PURE__*/_react.default.createElement(Icon.SettingOutlined, {
    className: _index.default.tool
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _index.default.menuBottomIcon,
    onClick: changeStyle('collapsed')
  }, collapsed ? /*#__PURE__*/_react.default.createElement(Icon.MenuFoldOutlined, null) : /*#__PURE__*/_react.default.createElement(Icon.MenuUnfoldOutlined, null))));
};

function mapStateToProps(_ref4) {
  var user = _ref4.user;
  return {
    user: user
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;