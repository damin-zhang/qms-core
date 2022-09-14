function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Avatar, List } from 'antd';
import React from 'react';
import classNames from 'classnames';
import styles from './NoticeList.less';

var NoticeList = function NoticeList(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _onClick = _ref.onClick,
      onClear = _ref.onClear,
      title = _ref.title,
      onViewMore = _ref.onViewMore,
      emptyText = _ref.emptyText,
      _ref$showClear = _ref.showClear,
      showClear = _ref$showClear === void 0 ? true : _ref$showClear,
      clearText = _ref.clearText,
      viewMoreText = _ref.viewMoreText,
      _ref$showViewMore = _ref.showViewMore,
      showViewMore = _ref$showViewMore === void 0 ? false : _ref$showViewMore;

  if (!data || data.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.notFound
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg",
      alt: "not found"
    }), /*#__PURE__*/React.createElement("div", null, emptyText));
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(List, {
    className: styles.list,
    dataSource: data,
    renderItem: function renderItem(item, i) {
      var itemCls = classNames(styles.item, _defineProperty({}, styles.read, item.read)); // eslint-disable-next-line no-nested-ternary

      var leftIcon = item.avatar ? typeof item.avatar === 'string' ? /*#__PURE__*/React.createElement(Avatar, {
        className: styles.avatar,
        src: item.avatar
      }) : /*#__PURE__*/React.createElement("span", {
        className: styles.iconElement
      }, item.avatar) : null;
      return /*#__PURE__*/React.createElement(List.Item, {
        className: itemCls,
        key: item.key || i,
        onClick: function onClick() {
          return _onClick && _onClick(item);
        }
      }, /*#__PURE__*/React.createElement(List.Item.Meta, {
        className: styles.meta,
        avatar: leftIcon,
        title: /*#__PURE__*/React.createElement("div", {
          className: styles.title
        }, item.title, /*#__PURE__*/React.createElement("div", {
          className: styles.extra
        }, item.extra)),
        description: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: styles.datetime
        }, item.datetime))
      }));
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.bottomBar
  }, showClear ? /*#__PURE__*/React.createElement("div", {
    onClick: onClear
  }, clearText, " ", title) : null, showViewMore ? /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (onViewMore) {
        onViewMore(e);
      }
    }
  }, viewMoreText) : null));
};

export default NoticeList;