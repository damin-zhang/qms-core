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
 * @Description: home页面
 */
import React, { useState, useEffect } from 'react';
import { Card, Avatar, Breadcrumb, Row, Col, Tooltip } from 'antd'; // import { Icon } from '@ant-design/compatible';

import * as Icon from '@ant-design/icons';
import { SettingOutlined } from '@ant-design/icons';
import { ReactSVG } from 'react-svg';
import { connect } from 'dva';
import styles from './home.css';
import './home.css';
import { isEnglish } from '../../utils/utils';
import request from '../../service/request';

var svgDir = require.context('../../assets/icon/');

var Meta = Card.Meta;
var BreadItem = Breadcrumb.Item;

var Home = function Home(_ref) {
  var dispatch = _ref.dispatch,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user;
  var _user$menu = user.menu,
      menu = _user$menu === void 0 ? [] : _user$menu;

  var _useState = useState([{
    CAPTION: 'Home',
    ICON: 'home',
    ID: '1'
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      navList = _useState2[0],
      setNavList = _useState2[1];

  var _useState3 = useState(menu),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  useEffect(function () {
    setData(menu.filter(function (item) {
      return item.NO !== 'ConfigPlatform' && item.NO !== 'CommonNavigation';
    }));

    if (localStorage.system) {
      document.getElementsByTagName('title')[0].innerText = JSON.parse(localStorage.system).homeInfo.title;
    } else {
      request('/systems.json').then(function (res) {
        localStorage['system'] = JSON.stringify(res);
        document.getElementsByTagName('title')[0].innerText = res.homeInfo.title;
      });
    }
  }, [menu]);

  var clickCard = function clickCard(item) {
    return function () {
      if (item.children) {
        navList.push(item);
        setNavList(navList);
        setData(item.children);
      } else {
        item.META = item.META || {};
        dispatch({
          type: 'tab/loadPage',
          payload: _objectSpread(_objectSpread({}, item), item.META)
        });
      }
    };
  };

  var clickNav = function clickNav(item, index) {
    return function () {
      navList.splice(index + 1);
      setNavList(navList);
      setData(index ? item.children : menu.filter(function (item) {
        return item.NO !== 'ConfigPlatform' && item.NO !== 'CommonNavigation';
      }));
    };
  };
  /* 当有第三方图标时Icon的展示 */


  var getIcon = function getIcon(item, flag) {
    //newIcon用于存放第三方图标的图标名称
    var newIcon = null;
    var IconView = null;

    if (item.META && item.META.ICON) {
      //筛选第三方图标库的icons
      if (item.META.ICON.indexOf('third-') != -1) {
        newIcon = item.META.ICON.substring(6); //将第三方图标库标识去掉
      } else {
        item.META.ICON = item.META.ICON.substring(0, 1).toUpperCase() + item.META.ICON.substring(1, item.META.ICON.length);
        IconView = Icon["".concat(item.META.ICON, "Outlined")];
      }
    } else if (item.ICON) {
      item.ICON = item.ICON.substring(0, 1).toUpperCase() + item.ICON.substring(1, item.ICON.length);
      IconView = Icon["".concat(item.ICON, "Outlined")];
    }

    return newIcon ? /*#__PURE__*/React.createElement(ReactSVG, {
      style: {
        fill: item.META.ICON_COLOR || '#fff'
      },
      className: flag ? styles.homeThirdIcons : styles.cardThirdIcons,
      src: svgDir("./".concat(newIcon, ".svg"))
    }) : flag ? IconView && /*#__PURE__*/React.createElement(IconView, null) : IconView && /*#__PURE__*/React.createElement(IconView, {
      style: {
        color: item.META.ICON_COLOR
      }
    }) || /*#__PURE__*/React.createElement(SettingOutlined, {
      style: {
        color: item.META.ICON_COLOR
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    className: styles.breadcrumb
  }, navList.map(function (item, index) {
    // 用于判断是home页的面包屑导航，还是卡片导航
    var flag = true;
    return index < navList.length - 1 ? /*#__PURE__*/React.createElement(BreadItem, {
      onClick: clickNav(item, index),
      key: item.ID,
      className: styles.home_href
    }, (item.ICON || item.META.ICON) && getIcon(item, flag), item.CAPTION !== undefined ? item.CAPTION : isEnglish ? item.META.ENNAME : item.META.NAME) : /*#__PURE__*/React.createElement(BreadItem, {
      key: item.ID
    }, (item.ICON || item.META.ICON) && getIcon(item, flag), item.CAPTION !== undefined ? item.CAPTION : isEnglish ? item.META.ENNAME : item.META.NAME);
  })), /*#__PURE__*/React.createElement(Row, {
    justify: "start",
    gutter: {
      sm: 8,
      lg: 16,
      xxl: 24
    },
    style: {
      width: '100%'
    }
  }, data.map(function (item) {
    // 用于判断是home页的面包屑导航，还是卡片导航
    var flag = false;
    var title = /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '20px',
        fontWeight: 600
      }
    }, item.CAPTION !== undefined ? item.CAPTION : isEnglish ? item.META.ENNAME : item.META.NAME);
    var description = /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        color: '#535353'
      }
    }, item.META && item.META.ENNAME ? item.META.ENNAME : item.NO ? item.NO : item.META.NO);
    return item.PID === 0 ? /*#__PURE__*/React.createElement(Col, {
      sm: 8,
      lg: 8,
      xxl: 8,
      key: item.ID
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: item.CAPTION !== undefined ? item.CAPTION : isEnglish ? item.META.ENNAME : item.META.NAME
        }
      })
    }, item.children ? /*#__PURE__*/React.createElement(Card, {
      onClick: clickCard(item),
      className: styles.card,
      size: "small",
      hoverable: true,
      style: {
        width: '100%',
        border: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, item.META.BANNER ? /*#__PURE__*/React.createElement("img", {
      width: "100%",
      style: {
        borderRadius: '20px'
      },
      src: require("../../assets/Banners/".concat(item.META.BANNER)),
      alt: ""
    }) : /*#__PURE__*/React.createElement("img", {
      width: "100%",
      style: {
        borderRadius: '20px'
      },
      src: require("../../assets/Banners/defualt.png"),
      alt: ""
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '10%',
        top: '16%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '20px 0'
      }
    }, title), description)) : /*#__PURE__*/React.createElement(Card, {
      onClick: clickCard(item),
      className: styles.card,
      size: "small",
      hoverable: true
    }, /*#__PURE__*/React.createElement(Meta, {
      avatar: /*#__PURE__*/React.createElement(Avatar, {
        icon: (item.ICON || item.META.ICON) && getIcon(item, flag),
        style: {
          backgroundColor: '#1890ff'
        }
      }),
      title: title,
      description: description
    })))) : /*#__PURE__*/React.createElement(Col, {
      sm: 8,
      lg: 8,
      xxl: 8,
      key: item.ID
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: item.CAPTION !== undefined ? item.CAPTION : isEnglish ? item.META.ENNAME : item.META.NAME
        }
      })
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        backgroundColor: item.META.BG_COLOR
      },
      onClick: clickCard(item),
      className: styles.card_sub,
      size: "small",
      hoverable: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center'
      },
      className: styles.sub_card_icon_outer
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.sub_card_icon
    }, getIcon(item, flag))), /*#__PURE__*/React.createElement(Meta, {
      style: {
        color: item.META.FONT_COLOR
      },
      className: styles.meta_detail,
      title: item.CAPTION !== undefined ? item.CAPTION : isEnglish ? item.META.ENNAME : item.META.NAME,
      description: item.META && item.META.ENNAME ? item.META.ENNAME : item.NO ? item.NO : item.META.NO
    }))));
  })));
};

function mapStateToProps(_ref2) {
  var user = _ref2.user;
  return {
    user: user
  };
}

export default connect(mapStateToProps)(Home);