"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NoticeList = _interopRequireDefault(require("./NoticeList.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return /*#__PURE__*/_react.default.createElement("div", {
      className: _NoticeList.default.notFound
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg",
      alt: "not found"
    }), /*#__PURE__*/_react.default.createElement("div", null, emptyText));
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.List, {
    className: _NoticeList.default.list,
    dataSource: data,
    renderItem: function renderItem(item, i) {
      var itemCls = (0, _classnames.default)(_NoticeList.default.item, _defineProperty({}, _NoticeList.default.read, item.read)); // eslint-disable-next-line no-nested-ternary

      var leftIcon = item.avatar ? typeof item.avatar === 'string' ? /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
        className: _NoticeList.default.avatar,
        src: item.avatar
      }) : /*#__PURE__*/_react.default.createElement("span", {
        className: _NoticeList.default.iconElement
      }, item.avatar) : null;
      return /*#__PURE__*/_react.default.createElement(_antd.List.Item, {
        className: itemCls,
        key: item.key || i,
        onClick: function onClick() {
          return _onClick && _onClick(item);
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.List.Item.Meta, {
        className: _NoticeList.default.meta,
        avatar: leftIcon,
        title: /*#__PURE__*/_react.default.createElement("div", {
          className: _NoticeList.default.title
        }, item.title, /*#__PURE__*/_react.default.createElement("div", {
          className: _NoticeList.default.extra
        }, item.extra)),
        description: /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
          className: _NoticeList.default.datetime
        }, item.datetime))
      }));
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _NoticeList.default.bottomBar
  }, showClear ? /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClear
  }, clearText, " ", title) : null, showViewMore ? /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick(e) {
      if (onViewMore) {
        onViewMore(e);
      }
    }
  }, viewMoreText) : null));
};

var _default = NoticeList;
exports.default = _default;