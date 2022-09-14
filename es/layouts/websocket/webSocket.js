function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { connect } from 'dva';
import { Base64 } from 'js-base64';
import Socket from './websocketConfig';
import * as commonService from '../../service/api';
import { requestIP } from '../../service/config';

var websocket = /*#__PURE__*/function (_React$Component) {
  _inherits(websocket, _React$Component);

  var _super = _createSuper(websocket);

  function websocket() {
    var _this;

    _classCallCheck(this, websocket);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.componentDidMount = function () {
      var dispatch = _this.props.dispatch;
      var initFormData = {};
      var values = {
        implclass: 'cn.hkdt.infinity.application.ims.config.event.ChatInitUsers',
        objectNo: 'SUSER',
        userName: localStorage.getItem('userName')
      };
      initFormData.values = JSON.stringify(values);
      /* global layui */
      // const config = JSON.parse(Base64.decode(res.dataList))
      // if (config.CONFIG_VALUE) {
      // layui.use('layim', function(layim) {
      //    判断专家是否登录

      _this.socket = new Socket({
        // socketUrl: `ws://${window.location.host}/ws/${localStorage.getItem('userId')}`,
        // socketUrl: `ws://192.168.2.84:8899/ws/${localStorage.getItem('userId')}`,
        // socketUrl: `ws://${
        //   /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.exec(requestIP)[0]
        // }:8892/auxiliary/ws/${localStorage.getItem('userName')}`,
        socketUrl: "ws://47.108.234.27:8892/auxiliary/ws/".concat(localStorage.getItem('userName')),
        // 测试环境
        // socketUrl: `ws://192.168.158.61:8892/auxiliary/ws/${localStorage.getItem('userName')}`,     // 正式环境
        socketOpen: function socketOpen() {
          // console.log('websocket连接建立成功')
          //初始化完成后获取离线信息
          // layim.on('ready', function() {
          // socket.sendMessage('lx' + localStorage.getItem('userId'))
          // })
          // 心跳机制 定时向后端发数据
          _this.taskRemindInterval = setInterval(function () {
            _this.socket.sendMessage('ping');
          }, 30000);
        },
        socketError: function socketError() {
          console.log('websocket出错了');
        },
        //后端返回的数据，渲染页面
        socketMessage: function socketMessage(event) {// console.log(event.data)
        },
        socketClose: function socketClose() {
          console.log('websocket关闭');
        }
      });
      dispatch({
        type: 'systemLog/packet',
        payload: {
          socket: _this.socket
        }
      });
    };

    return _this;
  }

  _createClass(websocket, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return websocket;
}(React.Component);

function mapStateToProps(_ref) {
  var websocket = _ref.websocket;
  return {
    websocket: websocket
  };
}

export default connect(mapStateToProps)(websocket);