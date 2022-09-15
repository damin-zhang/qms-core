function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { BellOutlined } from '@ant-design/icons';
import { Badge, Spin, Tabs, Tooltip } from 'antd';
import useMergeValue from 'use-merge-value';
import React from 'react';
import classNames from 'classnames';
import NoticeList, { NoticeIconTabProps } from './NoticeList';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import language from '@/locale/language';
var header = language.header;
var TabPane = Tabs.TabPane;

var NoticeIcon = function NoticeIcon(props) {
  var getNotificationBox = function getNotificationBox() {
    var children = props.children,
        loading = props.loading,
        _onClear = props.onClear,
        onTabChange = props.onTabChange,
        onItemClick = props.onItemClick,
        _onViewMore = props.onViewMore,
        clearText = props.clearText,
        viewMoreText = props.viewMoreText,
        theme = props.theme;

    if (!children) {
      return null;
    }

    var panes = [];
    React.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }

      var _child$props = child.props,
          list = _child$props.list,
          title = _child$props.title,
          count = _child$props.count,
          tabKey = _child$props.tabKey,
          showClear = _child$props.showClear,
          showViewMore = _child$props.showViewMore;
      var len = list && list.length ? list.length : 0;
      var dataList = list ? list.slice(0, 5) : [];
      list && list.length > 5 && dataList.push({
        key: 'ellipsis',
        type: dataList[0].type,
        title: /*#__PURE__*/React.createElement("div", {
          style: {
            paddingLeft: 10,
            fontSize: 20
          }
        }, ". . . . . ."),
        description: ''
      });
      var msgCount = count || count === 0 ? count : len;
      var tabTitle = msgCount > 0 ? "".concat(title, " (").concat(msgCount, ")") : title;
      panes.push( /*#__PURE__*/React.createElement(TabPane, {
        tab: tabTitle,
        key: tabKey
      }, /*#__PURE__*/React.createElement(NoticeList, _extends({
        clearText: clearText,
        viewMoreText: viewMoreText,
        data: dataList,
        onClear: function onClear() {
          return _onClear && _onClear(title, tabKey);
        },
        onClick: function onClick(item) {
          onItemClick && onItemClick(item, child.props);
          setVisible(false);
        },
        onViewMore: function onViewMore(event) {
          return _onViewMore && _onViewMore(child.props, event);
        },
        showClear: showClear,
        showViewMore: showViewMore,
        title: title
      }, child.props))));
    });
    return /*#__PURE__*/React.createElement(Spin, {
      spinning: loading,
      delay: 300
    }, /*#__PURE__*/React.createElement(Tabs, {
      className: styles.tabs,
      onChange: onTabChange,
      tabBarStyle: {
        background: '#fff'
      }
    }, panes));
  };

  var className = props.className,
      count = props.count,
      bell = props.bell,
      overflowCount = props.overflowCount,
      theme = props.theme;

  var _useMergeValue = useMergeValue(false, {
    value: props.popupVisible,
    onChange: props.onPopupVisibleChange
  }),
      _useMergeValue2 = _slicedToArray(_useMergeValue, 2),
      visible = _useMergeValue2[0],
      setVisible = _useMergeValue2[1];

  var noticeButtonClass = classNames(className, styles.noticeButton);
  var notificationBox = getNotificationBox();
  var NoticeBellIcon = bell || /*#__PURE__*/React.createElement(BellOutlined, {
    className: theme ? styles.icon : styles.icon2
  });
  var trigger = /*#__PURE__*/React.createElement("span", {
    className: classNames(noticeButtonClass, {
      opened: visible
    })
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: header.iconTip.notice
  }, /*#__PURE__*/React.createElement(Badge, {
    count: count,
    overflowCount: overflowCount,
    style: {
      boxShadow: 'none',
      backgroundColor: '#ffb84d'
    },
    className: styles.badge
  }, NoticeBellIcon)));

  if (!notificationBox) {
    return trigger;
  }

  return /*#__PURE__*/React.createElement(HeaderDropdown, {
    placement: "bottomRight",
    overlay: notificationBox,
    overlayClassName: styles.popover,
    trigger: ['click'],
    visible: visible,
    onVisibleChange: setVisible
  }, trigger);
};

NoticeIcon.defaultProps = {
  emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
};
NoticeIcon.Tab = NoticeList;
export default NoticeIcon;