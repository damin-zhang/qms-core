"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _useMergeValue3 = _interopRequireDefault(require("use-merge-value"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _NoticeList = _interopRequireWildcard(require("./NoticeList"));

var _HeaderDropdown = _interopRequireDefault(require("../HeaderDropdown"));

var _index = _interopRequireDefault(require("./index.less"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var header = _language.default.header;
var TabPane = _antd.Tabs.TabPane;

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

    _react.default.Children.forEach(children, function (child) {
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
        title: /*#__PURE__*/_react.default.createElement("div", {
          style: {
            paddingLeft: 10,
            fontSize: 20
          }
        }, ". . . . . ."),
        description: ''
      });
      var msgCount = count || count === 0 ? count : len;
      var tabTitle = msgCount > 0 ? "".concat(title, " (").concat(msgCount, ")") : title;
      panes.push( /*#__PURE__*/_react.default.createElement(TabPane, {
        tab: tabTitle,
        key: tabKey
      }, /*#__PURE__*/_react.default.createElement(_NoticeList.default, _extends({
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

    return /*#__PURE__*/_react.default.createElement(_antd.Spin, {
      spinning: loading,
      delay: 300
    }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
      className: _index.default.tabs,
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

  var _useMergeValue = (0, _useMergeValue3.default)(false, {
    value: props.popupVisible,
    onChange: props.onPopupVisibleChange
  }),
      _useMergeValue2 = _slicedToArray(_useMergeValue, 2),
      visible = _useMergeValue2[0],
      setVisible = _useMergeValue2[1];

  var noticeButtonClass = (0, _classnames.default)(className, _index.default.noticeButton);
  var notificationBox = getNotificationBox();

  var NoticeBellIcon = bell || /*#__PURE__*/_react.default.createElement(_icons.BellOutlined, {
    className: theme ? _index.default.icon : _index.default.icon2
  });

  var trigger = /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(noticeButtonClass, {
      opened: visible
    })
  }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    title: header.iconTip.notice
  }, /*#__PURE__*/_react.default.createElement(_antd.Badge, {
    count: count,
    overflowCount: overflowCount,
    style: {
      boxShadow: 'none',
      backgroundColor: '#ffb84d'
    },
    className: _index.default.badge
  }, NoticeBellIcon)));

  if (!notificationBox) {
    return trigger;
  }

  return /*#__PURE__*/_react.default.createElement(_HeaderDropdown.default, {
    placement: "bottomRight",
    overlay: notificationBox,
    overlayClassName: _index.default.popover,
    trigger: ['click'],
    visible: visible,
    onVisibleChange: setVisible
  }, trigger);
};

NoticeIcon.defaultProps = {
  emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
};
NoticeIcon.Tab = _NoticeList.default;
var _default = NoticeIcon;
exports.default = _default;