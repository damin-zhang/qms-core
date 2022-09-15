"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactSvg = require("react-svg");

var _dva = require("dva");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Notice = _interopRequireDefault(require("../../pages/notice/Notice"));

var _UserForm = _interopRequireDefault(require("../../component/header/user/UserForm"));

var _OnlineUser = _interopRequireDefault(require("../../component/header/user/OnlineUser"));

var _DragModal = _interopRequireDefault(require("../../component/common/drag/DragModal"));

var _utils = require("../../utils/utils");

var _mapParams = require("../../utils/mapParams");

var _applicationApi = require("../../service/applicationApi");

var _metaApi = require("../../service/metaApi");

var _systemApi = require("../../service/systemApi");

var _config = require("../../service/config");

var _aboutUs = _interopRequireDefault(require("@/locale/aboutUs"));

var _index = _interopRequireDefault(require("./index.less"));

var _menu3 = _interopRequireDefault(require("../menu/menu.less"));

require("./index.css");

var _headerAboutBg = _interopRequireDefault(require("../../assets/header-about-bg.jpeg"));

var _infinityLogo = _interopRequireDefault(require("../../assets/infinity-logo.png"));

var _QS_LOGO = _interopRequireDefault(require("../../assets/QS_LOGO.png"));

var _language = _interopRequireDefault(require("@/locale/language"));

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

var common = _language.default.common,
    header = _language.default.header;

var svgDir = require.context('../../assets/icon/');

var AntdHeader = _antd.Layout.Header;
var Item = _antd.Menu.Item,
    SubMenu = _antd.Menu.SubMenu;
var VersionTitle = _aboutUs.default.VersionTitle,
    Version = _aboutUs.default.Version;

var Header = function Header(_ref) {
  var user = _ref.user,
      notice = _ref.notice,
      dispatch = _ref.dispatch;
  var syncedListRef = (0, _react.useRef)();
  var leftBtn = (0, _react.useRef)(null);
  var menuBox = (0, _react.useRef)(null);
  var aboutUs = true;
  var isModeling = user.isModeling,
      visible = user.visible,
      _user$userInfo = user.userInfo,
      userInfo = _user$userInfo === void 0 ? {} : _user$userInfo,
      theme = user.theme,
      collapsed = user.collapsed,
      position = user.position,
      canModeling = user.canModeling,
      initSetUPS = user.initSetUPS,
      _user$menusTotal = user.menusTotal,
      menusTotal = _user$menusTotal === void 0 ? {} : _user$menusTotal,
      _user$isRequestMenusT = user.isRequestMenusTotal,
      isRequestMenusTotal = _user$isRequestMenusT === void 0 ? true : _user$isRequestMenusT,
      NavMenu = user.menu,
      _user$commonNavigatio = user.commonNavigations,
      commonNavigations = _user$commonNavigatio === void 0 ? [] : _user$commonNavigatio,
      collect = user.collect,
      NavTotal = user.NavTotal,
      selectedKeys = user.selectedKeys;
  var _notice$toDoList = notice.toDoList,
      toDoList = _notice$toDoList === void 0 ? [] : _notice$toDoList;
  var _localStorage = localStorage,
      employeeName = _localStorage.employeeName,
      userName = _localStorage.userName,
      avatar = _localStorage.avatar,
      system = _localStorage.system;

  var _JSON$parse = JSON.parse(system || '{}'),
      aboutUsInfo = _JSON$parse.aboutUsInfo;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      syncModalVisible = _useState2[0],
      setSyncModalVisible = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      syncedList = _useState4[0],
      setSyncedList = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      syncCompleted = _useState6[0],
      setSyncCompleted = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      syncState = _useState8[0],
      setSyncState = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      aboutUsModalVisible = _useState10[0],
      setAboutUsModalVisible = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      menuData = _useState12[0],
      setMenuData = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isModalVisible = _useState14[0],
      setIsModalVisible = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      timers = _useState16[0],
      setTimers = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      commonNav = _useState18[0],
      setCommonNaV = _useState18[1];

  var DividerCmp = /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    type: "vertical",
    className: (0, _classnames.default)(["".concat(_index.default.divider)], _defineProperty({}, "".concat(_index.default.darkTheme), theme))
  });
  /* 请及时修改密码 */
  // useEffect(() => {
  //   if (reset && reset == 'true') {
  //     notification.warn({
  //       placement: 'bottomRight',
  //       message: header.message.change_password_message,
  //       duration: 10
  //     })
  //   }
  // }, [reset])


  (0, _react.useEffect)(function () {
    if (NavMenu.length) {
      var item = NavMenu.find(function (item) {
        return item.ID === 'collect';
      });
      setCommonNaV(item.children);
    }
  }, [NavMenu, commonNavigations]);
  (0, _react.useEffect)(function () {
    if (user.syncedList) {
      setSyncedList(user.syncedList);
    } // 动态获取菜单宽度，设置给logo
    // setTimeout(() => {
    //   const menuWrapper = document.getElementsByClassName('menuSider')
    //   if (menuWrapper && menuWrapper.length) {
    //     setLogoImgWidth(menuWrapper[0].clientWidth)
    //   }
    // }, 500)


    var data = localStorage.getItem('menuData');

    if (data) {
      setMenuData(JSON.parse(data));
    } // 请求顶部菜单数据条数


    if (menuData.length && !position) {
      if (isRequestMenusTotal) {
        menuData.forEach(function (item) {
          if (item.TOP && item.PARAMS) {
            var _JSON$parse2 = JSON.parse(item.PARAMS),
                objectNo = _JSON$parse2.objectNo,
                objectGridNo = _JSON$parse2.objectGridNo;

            if (objectNo) {
              requestMenusTotal(item, objectNo, objectGridNo);
              var timer = setInterval(function () {
                requestMenusTotal(item, objectNo, objectGridNo);
              }, 1000 * 20);
              timers.push(timer);
            }
          }
        });
      }
    } else {
      timers.forEach(function (item) {
        clearInterval(item);
      });
      setTimers([]);
    }
  }, [user]);

  var requestMenusTotal = function requestMenusTotal(object, objectNo, objectGridNo) {
    var params = {
      objectNo: objectNo,
      objectGridNo: objectGridNo,
      page: 1,
      implclass: _mapParams.implclassMap.queryTotalAnyPageDataRows
    };
    (0, _applicationApi.commonApi)(params).then(function (res) {
      if (res) {
        var menus = Object.assign(menusTotal, _defineProperty({}, object.NO, res.TOTAL));
        dispatch({
          type: 'user/packet',
          payload: {
            menusTotal: menus
          }
        });
      }

      dispatch({
        type: 'user/packet',
        payload: {
          isRequestMenusTotal: false
        }
      });
    }).catch(function (err) {
      console.log(err);
      dispatch({
        type: 'user/packet',
        payload: {
          isRequestMenusTotal: false
        }
      });
    });
  };

  var getMenus = function getMenus() {
    return commonNav.map(function (item) {
      var ID = item.ID,
          CAPTION = item.CAPTION,
          META = item.META;
      var newIcon = null;
      var IconView = null;

      if (META.ICON) {
        if (META.ICON.indexOf('third-') != -1) {
          //筛选第三方图标库的icons
          newIcon = META.ICON.substring(6); //将第三方图标库标识去掉
        } else {
          META.ICON = META.ICON.substring(0, 1).toUpperCase() + META.ICON.substring(1, META.ICON.length);
          IconView = Icon["".concat(META.ICON, "Outlined")];
        }
      }

      var text = CAPTION ? CAPTION : _utils.isEnglish ? META.ENNAME || META.NO : META.NAME;

      var title = /*#__PURE__*/_react.default.createElement("div", {
        key: ID,
        className: theme ? _menu3.default.themeItem : _menu3.default.darkMenuItem
      }, META && META.ICON && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        className: _menu3.default.headerThirdIcons,
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null)), /*#__PURE__*/_react.default.createElement("span", null, CAPTION ? CAPTION : _utils.isEnglish ? META.ENNAME || META.NO : META.NAME));

      return /*#__PURE__*/_react.default.createElement(Item, {
        key: ID,
        onClick: function onClick() {
          return loadPage(item);
        },
        title: text
      }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
        count: NavTotal[ID],
        offset: [1, -8],
        className: _menu3.default.badgeStyle,
        overflowCount: 999
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, collect && /*#__PURE__*/_react.default.createElement(Icon.HeartFilled, {
        style: {
          marginRight: '5px',
          color: 'red'
        },
        onClick: function onClick(e) {
          return toogleCollect(e, item);
        }
      }), title)));
    });
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
  };

  var changeModel = function changeModel() {
    setSyncState(false);
    dispatch({
      type: 'user/changeModel',
      payload: {
        isModeling: isModeling
      },
      callback: function callback(info) {
        _antd.Modal.warning({
          title: info,
          centered: true,
          okText: common.cancel,
          content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
            onClick: function onClick() {
              dispatch({
                type: "user/changeModel",
                payload: {
                  force: true,
                  isModeling: isModeling
                }
              });

              _antd.Modal.destroyAll();
            }
          }, common.save), /*#__PURE__*/_react.default.createElement(_antd.Button, {
            onClick: function onClick() {
              dispatch({
                type: "user/changeModel",
                payload: {
                  force: false,
                  isModeling: isModeling
                }
              });

              _antd.Modal.destroyAll();
            }
          }, common.not_save)),
          mask: false
        });
      }
    });
  }; // 同步建模提示


  var synchroTip = function synchroTip() {
    setSyncModalVisible(true);
  }; // 取消同步建模


  var cancelSyncroModel = function cancelSyncroModel() {
    setSyncModalVisible(false);
  }; // 同步所有建模


  var synchroAllModel = function synchroAllModel() {
    setSyncState(true);
    setSyncModalVisible(true); // dispatch({
    //   type: 'user/synchroAllModel'
    // })

    (0, _metaApi.synchroAllObject)().then(function (res) {
      if (res && res.flag) {
        dispatch({
          type: 'user/packet',
          payload: {
            isModeling: false
          }
        });
        var timer = setInterval(function () {
          (0, _metaApi.synchroSpeed)().then(function (res) {
            if (res) {
              if (res.finish) {
                setSyncCompleted(res.finish);
                clearInterval(timer);
              } else {
                dispatch({
                  type: 'user/packet',
                  payload: {
                    syncedList: res.dataList
                  }
                });
                syncedListRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
              }
            }
          });
        }, 1000);
        setTimeout(function () {
          clearInterval(timer);
        }, 1000 * 60 * 3);
      } else {
        dispatch({
          type: 'user/packet',
          payload: {
            isModeling: false
          }
        });
        setSyncModalVisible(false);
        setSyncCompleted(true);
      }
    });
  };

  var synchroAllModelFooters = [/*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: synchroAllModel
  }, common.continue)];

  var closeSyncModal = function closeSyncModal() {
    if (syncCompleted) {
      setSyncModalVisible(false);
      setSyncCompleted(false);
      dispatch({
        type: 'user/packet',
        payload: {
          syncedList: []
        }
      });
    } else {
      _antd.message.warn(header.message.sync_not_completed);
    }
  };

  var toogleUserInfo = function toogleUserInfo() {
    if (visible) {
      dispatch({
        type: "user/packet",
        payload: {
          visible: false
        }
      });
    } else {
      dispatch({
        type: "user/queryUser"
      });
    }
  }; // 迁移建模数据


  var migrateModelData = function migrateModelData() {
    (0, _utils.confirm)({
      title: header.user.migrate_model_data,
      onOk: function onOk() {
        dispatch({
          type: 'user/migrateModelData'
        });
      }
    });
  }; // 切换语言


  var changeLanguage = function changeLanguage(val) {
    return function () {
      // dispatch({ type: 'user/changeLanguage', payload: { val } })
      localStorage.setItem('AcceptLanguage', val === 'en-US' ? 'en' : 'zh');

      _dayjs.default.locale(val === 'en-US' ? 'en' : 'zh-cn');

      window.location.reload();
    };
  }; // 关于我们


  var toogleModalAboutUs = function toogleModalAboutUs() {
    setAboutUsModalVisible(!aboutUsModalVisible);
  };

  var VerSionTitle = function VerSionTitle() {
    setIsModalVisible(!isModalVisible);
  };

  var logoutConfirm = function logoutConfirm(force) {
    return function () {
      if (isModeling) {
        dispatch({
          type: "user/changeModel",
          payload: {
            force: force,
            isModeling: isModeling
          }
        });

        _antd.Modal.destroyAll();
      }

      dispatch({
        type: 'login/logout'
      });
    };
  }; // 退出


  var logout = function logout() {
    if (isModeling) {
      _antd.Modal.warning({
        title: header.user.logout_msg,
        centered: true,
        okText: common.cancel,
        content: /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
          onClick: logoutConfirm(true)
        }, common.save), /*#__PURE__*/_react.default.createElement(_antd.Button, {
          onClick: logoutConfirm(false)
        }, common.not_save)),
        mask: false
      });
    } else {
      dispatch({
        type: 'login/logout'
      });
    }
  }; // 跳转到待办任务页面


  var gotoTodoPage = function gotoTodoPage() {
    dispatch({
      type: 'tab/addTab',
      payload: {
        namespace: 'UpcomingTasks'
      }
    });
    dispatch({
      type: 'UpcomingTasks/query',
      payload: {
        activeKeyTodoTask: 0
      }
    });
  };

  var menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(Item, {
    onClick: toogleUserInfo
  }, header.user.user_center), employeeName === 'admin' && /*#__PURE__*/_react.default.createElement(Item, {
    onClick: migrateModelData
  }, header.user.migrate_model_data), /*#__PURE__*/_react.default.createElement(SubMenu, {
    title: header.user.change_language
  }, _mapParams.languageMap.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Item, {
      key: item.value,
      onClick: changeLanguage(item.value)
    }, item.name);
  })), /*#__PURE__*/_react.default.createElement(Item, {
    onClick: logout
  }, header.user.logout));

  var showModal = function showModal() {
    if (sessionStorage.getItem('allowModel') !== true) {
      setIsModalVisible(true);
    } else {
      setIsModalVisible(false);
    }
  }; // 解析版本内容


  var getVersionContent = function getVersionContent(content) {
    var finallyContent = '';

    if (content) {
      // 替换\t
      finallyContent = content.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
      finallyContent = finallyContent.replace(/\[\*c=(\S*)\s/g, '<span style="color: $1">');
      finallyContent = finallyContent.replace(/\[\*f=(\S*)\s/g, '<span style="font-size: $1px">');
      finallyContent = finallyContent.replace(/\[\*b/g, '<span style="font-weight: bold">');
      finallyContent = finallyContent.replace(/\*\]/g, '</span>');
    }

    return finallyContent;
  }; // 展示隐藏的导航菜单


  var showMenu = function showMenu(e) {
    var scrollleft = menuBox.current.scrollLeft;
    var scrollWidth = menuBox.current.scrollWidth - menuBox.current.clientWidth;
    var pos = scrollleft;

    if (e === leftBtn) {
      var frame = function frame() {
        if (pos <= scrollleft - 150 || pos <= 0) {
          clearInterval(id);
        } else {
          pos -= 5;
          menuBox.current.scrollLeft = pos;
        }
      };

      var id = setInterval(frame, 5);
    } else {
      if (scrollleft < scrollWidth) {
        var _frame = function _frame() {
          if (pos >= scrollleft + 150 || pos >= scrollWidth) {
            clearInterval(_id);
          } else {
            pos += 5;
            menuBox.current.scrollLeft = pos;
          }
        };

        var _id = setInterval(_frame, 5);
      }
    }
  }; // TODO 切换搜藏


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
  };

  return /*#__PURE__*/_react.default.createElement(AntdHeader, {
    className: _index.default.header,
    style: {
      backgroundColor: theme ? '#fff' : '#001529'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      maxWidth: 'calc(100% - 400px)'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.logo
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _QS_LOGO.default,
    className: _index.default.topLLogo,
    onClick: toogleModalAboutUs
  })), /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    className: (0, _classnames.default)([_index.default.menu, theme ? 'menuTop' : 'menuBackground']),
    style: {
      lineHeight: theme ? '50px' : '52px'
    },
    mode: "horizontal",
    theme: theme ? 'light' : 'dark',
    selectedKeys: selectedKeys
  }, getMenus())), /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.actionBar
  }, canModeling && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: _index.default.modelBtn,
    onClick: changeModel
  }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: header.user[isModeling ? 'end_modeling' : 'start_modeling']
  }, isModeling ? /*#__PURE__*/_react.default.createElement(Icon.PauseCircleTwoTone, null) : /*#__PURE__*/_react.default.createElement(Icon.PlayCircleTwoTone, null))), DividerCmp, employeeName === 'admin' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: header.user.synchro_model
  }, /*#__PURE__*/_react.default.createElement(Icon.RetweetOutlined, {
    className: _index.default.modelBtn,
    onClick: synchroTip,
    disabled: !isModeling,
    style: {
      color: isModeling ? '#1e90ff' : '',
      display: isModeling ? 'block' : 'none'
    }
  })), isModeling && DividerCmp)), /*#__PURE__*/_react.default.createElement(_OnlineUser.default, {
    theme: theme,
    userName: userName
  }), DividerCmp, /*#__PURE__*/_react.default.createElement(_Notice.default, {
    theme: theme,
    userName: userName
  }), DividerCmp, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: header.iconTip.todo
  }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
    count: toDoList.length,
    offset: [4],
    overflowCount: 999,
    style: {
      backgroundColor: 'red'
    }
  }, /*#__PURE__*/_react.default.createElement(Icon.ProfileOutlined, {
    onClick: gotoTodoPage,
    style: {
      color: theme ? '#555555' : '#fff',
      fontSize: '20px'
    }
  }))), DividerCmp, /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    overlay: menu,
    trigger: ['click']
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
    size: 30,
    src: avatar,
    icon: /*#__PURE__*/_react.default.createElement(Icon.UserOutlined, null)
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _index.default.employeeName,
    style: {
      color: !theme ? '#fff' : '#001529'
    }
  }, employeeName)))), /*#__PURE__*/_react.default.createElement(_UserForm.default, {
    visible: visible,
    record: userInfo,
    onCancel: toogleUserInfo,
    employeeName: employeeName,
    initSetUPS: initSetUPS
  }), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    visible: syncModalVisible,
    title: header.user.schedule,
    onCancel: syncState ? closeSyncModal : cancelSyncroModel,
    footer: syncState ? false : synchroAllModelFooters
  }, /*#__PURE__*/_react.default.createElement("ul", {
    ref: syncedListRef
  }, syncState ? syncedList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, item);
  }) : /*#__PURE__*/_react.default.createElement("li", {
    style: {
      listStyle: 'none',
      fontSize: '20px'
    }
  }, common.SyncModal))), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    visible: aboutUsModalVisible,
    title: header.user.about_us,
    width: 423,
    mask: true,
    noFooter: true,
    onCancel: toogleModalAboutUs,
    aboutUs: aboutUs
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.CopyrightMap
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _headerAboutBg.default,
    className: _index.default.rightImg
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _infinityLogo.default,
    className: _index.default.logoImg
  }), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    style: {
      fontWeight: '600'
    }
  }, aboutUsInfo && aboutUsInfo.aboutUsTitle), /*#__PURE__*/_react.default.createElement("li", {
    onClick: showModal
  }, aboutUsInfo && aboutUsInfo.VersionNumber), /*#__PURE__*/_react.default.createElement("li", null, aboutUsInfo && aboutUsInfo.CopyrightZ, "\xA0", /*#__PURE__*/_react.default.createElement("a", {
    href: aboutUsInfo && aboutUsInfo.web,
    target: "_blank"
  }, _config.config.website)), /*#__PURE__*/_react.default.createElement("li", null, aboutUsInfo && aboutUsInfo.Copyright)))), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    visible: isModalVisible,
    title: VersionTitle,
    width: '60%',
    mask: true,
    noFooter: true,
    onCancel: VerSionTitle
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: _index.default.editions + ' markdown'
  }, Version.map(function (item, index) {
    return item.content ? /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: _index.default.edition,
      style: {
        color: item.color,
        fontWeight: item.fontWeight
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, item.VersionNumber), /*#__PURE__*/_react.default.createElement("span", {
      className: _index.default.date
    }, item.date)), /*#__PURE__*/_react.default.createElement("li", {
      style: {
        whiteSpace: 'pre-line',
        color: '#000'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: getVersionContent(item.content)
      }
    }))) : /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: _index.default.edition,
      style: {
        color: item.color,
        fontWeight: item.fontWeight
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, item.VersionNumber), /*#__PURE__*/_react.default.createElement("span", {
      className: _index.default.date
    }, item.date)), item.edition.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: index
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          color: item.color,
          fontWeight: item.fontWeight,
          display: 'flex',
          alignContent: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, item.whether == true ? item.identification : '', item.title)), item.text.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
          style: {
            color: item.color,
            fontWeight: item.fontWeight,
            paddingLeft: '10px'
          },
          className: _index.default.text,
          key: index
        }, item.identification, item.context, /*#__PURE__*/_react.default.createElement("a", {
          className: _index.default.username
        }, item.username ? '@' : '', item.username)));
      }));
    }));
  }))));
};

function mapStateToProps(_ref2) {
  var user = _ref2.user,
      notice = _ref2.notice;
  return {
    user: user,
    notice: notice
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Header);

exports.default = _default;