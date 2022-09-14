/*
 * @Description: 布局
 */
import React, { useEffect } from 'react';
import { ConfigProvider, Layout } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import Header from './header/header';
import Menu from './menu/menu';
import Authornized from '../component/authorized/Authorized'; //是否登录验证组件

import WebSocket from './websocket/webSocket';
import styles from './index.css';
import language from '@/locale/language';
import Tab from './tab/tab';
import { HashRouter } from 'react-router-dom';
import { TpWatermark } from '../utils/utils';
dayjs.locale('zh-cn');
var Content = Layout.Content;

var Index = function Index() {
  var validateMessages = {
    required: "".concat(language.common.is_required),
    pattern: {
      mismatch: "".concat(language.common.incorrect_format)
    },
    string: {
      max: "".concat(language.common.max_len, ": ") + '${max}'
    }
  };
  useEffect(function () {
    var watermark = localStorage.getItem('watermark');

    if (watermark) {
      var watermarkText = JSON.parse(watermark);
      watermarkText && watermarkText.text && TpWatermark(watermarkText);
    }
  }, []);
  return /*#__PURE__*/React.createElement(ConfigProvider, {
    form: {
      validateMessages: validateMessages
    },
    locale: localStorage.getItem('AcceptLanguage') === 'en-US' ? enUS : zhCN
  }, /*#__PURE__*/React.createElement(Layout, {
    className: styles.root
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Layout, {
    className: styles.main
  }, /*#__PURE__*/React.createElement(Menu, null), /*#__PURE__*/React.createElement(Content, {
    className: "content ant-layout-has-sider"
  }, /*#__PURE__*/React.createElement(Tab, null)))), /*#__PURE__*/React.createElement(WebSocket, null));
};

export default Authornized(Index);