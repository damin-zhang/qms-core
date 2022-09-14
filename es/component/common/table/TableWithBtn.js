var _excluded = ["onSearch", "btns", "height", "disabled", "collapsed", "onSearchOpen", "record", "paging"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 带按钮的表格组件，方便布局
 */
import React, { Fragment } from 'react';
import { Button, Menu, Dropdown, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Table from './ParseTable'; // 解析配置表格

import Search from '../search/Search';
import SearchOpen from '../search/SearchOpen';
var Item = Menu.Item;

var TableWithBtn = function TableWithBtn(props) {
  var onSearch = props.onSearch,
      _props$btns = props.btns,
      btns = _props$btns === void 0 ? [] : _props$btns,
      _props$height = props.height,
      height = _props$height === void 0 ? '100%' : _props$height,
      disabled = props.disabled,
      collapsed = props.collapsed,
      onSearchOpen = props.onSearchOpen,
      record = props.record,
      paging = props.paging,
      restProps = _objectWithoutProperties(props, _excluded);

  var hasBtn = onSearch || onSearchOpen || btns.length ? true : false;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y",
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'calc(100% - 96px)',
      minHeight: 33
    }
  }, btns.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, item.btns ? /*#__PURE__*/React.createElement(Dropdown, {
      disabled: item.disabled,
      trigger: ['click'],
      overlay: /*#__PURE__*/React.createElement(Menu, null, item.btns.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Item, {
          key: index,
          disabled: item.disabled,
          onClick: item.func
        }, item.name);
      }))
    }, /*#__PURE__*/React.createElement(Button, null, item.name, " ", /*#__PURE__*/React.createElement(DownOutlined, null))) : item.title && item.title !== '' ? /*#__PURE__*/React.createElement(Tooltip, {
      title: item.title
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: item.func,
      type: "primary",
      key: item.name,
      disabled: item.disabled,
      icon: item.icon ? item.icon : null,
      style: item.icon && {
        minWidth: 32
      }
    }, item.name)) : /*#__PURE__*/React.createElement(Button, {
      onClick: item.func,
      type: "primary",
      key: item.name,
      disabled: item.disabled,
      icon: item.icon ? item.icon : null,
      style: item.icon && {
        minWidth: 32
      }
    }, item.name));
  }), onSearchOpen && /*#__PURE__*/React.createElement(SearchOpen, {
    onSearch: onSearchOpen
  }), onSearch && /*#__PURE__*/React.createElement(Search, {
    onSearch: onSearch,
    disabled: disabled
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-y"
  }, /*#__PURE__*/React.createElement(Table, _extends({
    paging: paging,
    hasBtn: hasBtn
  }, restProps, {
    className: "ant-list"
  }))));
};

export default TableWithBtn;