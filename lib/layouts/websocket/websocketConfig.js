"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _umi = require("umi");

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var warning = _antd.Modal.warning;

var showConfirm = function showConfirm() {
  var title = _utils.isEnglish ? 'Please log in again' : '请重新登录';
  var msg = _utils.isEnglish ? 'You are offline, and your account is logged in on another client' : '你已离线, 账户在另一台客户端登录';
  warning({
    title: title,
    icon: /*#__PURE__*/_react.default.createElement(_icons.ExclamationCircleOutlined, null),
    content: msg,
    onOk: function onOk() {
      // window.location.href = '/login'
      _umi.history.push('/login');
    }
  });
};

var webSocket = /*#__PURE__*/_createClass(function webSocket() {
  var _this = this;

  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, webSocket);

  this.connection = function () {
    var _this$param = _this.param,
        socketUrl = _this$param.socketUrl,
        _this$param$timeout = _this$param.timeout,
        timeout = _this$param$timeout === void 0 ? 0 : _this$param$timeout; // 检测当前浏览器是什么浏览器来决定用什么socket

    if ('WebSocket' in window || 'MozWebSocket' in window) {
      _this.socket = new WebSocket(socketUrl);
    } // if ('WebSocket' in window) {
    //   console.log('WebSocket')
    //
    //   this.socket = new WebSocket(socketUrl)
    // } else if ('MozWebSocket' in window) {
    //   console.log('MozWebSocket')
    //
    //   this.socket = new MozWebSocket(socketUrl)
    // } else {
    //   console.log('SockJS')
    //
    //   this.socket = new SockJS(socketUrl)
    // }


    _this.socket.onopen = _this.onopen;
    _this.socket.onmessage = _this.onmessage;
    _this.socket.onclose = _this.onclose;
    _this.socket.onerror = _this.onerror; // 检测返回的状态码 如果socket.readyState不等于1则连接失败，关闭连接

    if (timeout) {
      var time = setTimeout(function () {
        if (_this.socket && _this.socket.readyState !== 1) {
          _this.socket.close();
        }

        clearInterval(time);
      }, timeout);
    }
  };

  this.onopen = function () {
    var socketOpen = _this.param.socketOpen;
    _this.isSucces = false; //连接成功将标识符改为false

    socketOpen && socketOpen();
  };

  this.onmessage = function (event) {
    var _this$param2 = _this.param,
        socketMessage = _this$param2.socketMessage,
        socketClose = _this$param2.socketClose;
    socketMessage && socketMessage(event);
    console.log('后端推送的消息：' + event.data);

    if (event.data === '@NT_RUR' || event.data === '@NT_RR') {
      (0, _umi.getDvaApp)()._store.dispatch({
        type: 'notice/query'
      });
    } else if (event.data === '@TD_RUR') {
      (0, _umi.getDvaApp)()._store.dispatch({
        type: 'UpcomingTasks/query',
        payload: {
          webSocket: true
        }
      });
    } else if (event.data.startsWith('@R_LOG')) {
      (0, _umi.getDvaApp)()._store.dispatch({
        type: 'systemLog/packet',
        payload: {
          serviceLog: event.data.substr(7) // serviceLog: event.data.substr(7) + new Date().getTime()

        }
      });
    } else if (event.data === 'offLine') {
      // 接收到offLine强制下线
      var avatar = localStorage.avatar;
      var userName = localStorage.userName;
      var AcceptLanguage = localStorage.AcceptLanguage;
      var exportFieldList = localStorage.exportFieldList;
      sessionStorage.clear();
      localStorage.clear();
      if (avatar && avatar !== 'undefined') localStorage.setItem('avatar', avatar);
      if (userName && userName !== 'undefined') localStorage.setItem('userName', userName);
      if (AcceptLanguage && AcceptLanguage !== 'undefined') localStorage.setItem('AcceptLanguage', AcceptLanguage);
      if (exportFieldList && exportFieldList !== 'undefined') localStorage.setItem('exportFieldList', exportFieldList);
      showConfirm();
      socketClose && socketClose();
    }
    /* global layui */
    // layui.use(['layim', 'layer'], function() {
    //   let layim = layui.layim
    //   // let layer = layui.layer
    //   if (event.data.indexOf('_msg_') >= 0) {
    //     let arra = event.data.split('_msg_')
    //     let sender = arra[0] //发送者loginname
    //     let avatar = arra[1] //发送者头像
    //     let senderId = arra[2] //私聊是发送者id，群聊是群id
    //     let type = arra[3] //类型
    //     let content = arra[4] //信息
    //     let sendtime = arra[5] //时间
    //     if ('group' === type) {
    //       if (sendtime !== 'NAN') {
    //         layim.getMessage({
    //           username: sender,
    //           avatar: `api/src/user/getAvatar/${localStorage.getItem('userId')}`,
    //           id: senderId,
    //           type: type,
    //           content: content,
    //           timestamp: parseFloat(sendtime)
    //         })
    //       } else {
    //         layim.getMessage({
    //           username: sender,
    //           avatar: avatar,
    //           id: senderId,
    //           type: type,
    //           content: content
    //         })
    //       }
    //     } else if ('setOnline' === type) {
    //       // layer.msg(sender + '上线了')
    //       // console.log(sender + '上线了')
    //       //设置上线用户头像取消置灰
    //       layim.setFriendStatus(senderId, 'online')
    //     } else if ('setOffline' === type) {
    //       // layer.msg(sender + '下线了')
    //       //设置上线用户头像取消置灰
    //       layim.setFriendStatus(senderId, 'offline')
    //     } else {
    //       if (sendtime !== 'NAN') {
    //         //使用历史记录时间
    //         layim.getMessage({
    //           username: sender,
    //           avatar: avatar,
    //           id: senderId,
    //           type: type,
    //           content: content,
    //           timestamp: parseFloat(sendtime)
    //         })
    //       } else {
    //         layim.getMessage({
    //           username: sender,
    //           avatar: `api/src/user/getAvatar/` + sender,
    //           id: senderId,
    //           type: type,
    //           content: content
    //         })
    //       }
    //     }
    //   }
    // })

  };

  this.onclose = function () {
    var socketClose = _this.param.socketClose;
    _this.isSucces = true; //关闭将标识符改为true

    console.log('关闭socket收到的数据');
    socketClose && socketClose();
  };

  this.onerror = function () {
    // socket连接报错触发
    var socketError = _this.param.socketError;
    _this.socket = null;
    socketError && socketError();
  };

  this.sendMessage = function (value) {
    console.log('=====', value); // 向后端发送数据

    if (_this.socket) {
      _this.socket.send(value);
    }
  };

  this.param = param;
  this.socket = null;
  this.taskRemindInterval = null;
  this.isSucces = true;
  this.connection();
});

var _default = webSocket;
exports.default = _default;