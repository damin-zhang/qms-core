function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { fetch } from 'dva';
import { history, getDvaApp } from 'umi';
import axios from 'axios';
import { notification, Modal, message } from 'antd';
import { confirm, warnConfirm, hideLoading, encodeBase64 } from '../utils/utils';
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '无法连接服务器。'
};

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 504 || response.status === 502) {
    message.warn(codeMessage[response.status], 2);
    setTimeout(function () {
      sessionStorage.clear();
      localStorage.clear(); // window.location.pathname = '/login'
    }, 2000);
  } else {
    var errortext = codeMessage[response.status] || response.statusText;
    notification.destroy();
    notification.error({
      message: "error ".concat(response.status, ": ").concat(response.url),
      description: errortext,
      duration: null
    });
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default function request(url, options) {
  var headers = _objectSpread({}, options);

  if (url !== '/api/login') {
    headers.headers = {
      Authorization: sessionStorage.getItem('token'),
      UserName: localStorage.getItem('userName'),
      EmployeeName: encodeBase64(localStorage.getItem('employeeName'))
    };
  }

  headers.headers['Accept-Language'] = localStorage['AcceptLanguage'] || 'zh';
  return fetch(url, headers).then(checkStatus).then(function (response) {
    var dis = response.headers.get('content-disposition');

    if (dis) {
      var strs = dis.split('filename='); //取消双引号

      var fileName = decodeURIComponent(strs[1].replace(/\"/g, ''));
      response.blob().then(function (blob) {
        var blobUrl = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = blobUrl;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(blobUrl);
      });
    } else {
      return response;
    }
  }).then(parseJSON).then(function (data) {
    hideLoading();
    var path = data.path,
        hint = data.hint,
        flag = data.flag,
        _data$dataList = data.dataList,
        dataList = _data$dataList === void 0 ? [] : _data$dataList,
        sign = data.sign,
        sso = data.sso;

    if (path) {
      sessionStorage.removeItem('token');
      Modal.destroyAll();
      warnConfirm({
        title: '提示',
        content: hint,
        onOk: function onOk() {
          var avatar = localStorage.avatar;
          var userName = localStorage.userName;
          var AcceptLanguage = localStorage.AcceptLanguage;
          var exportFieldList = localStorage.exportFieldList;
          sessionStorage.clear();
          localStorage.clear();

          if (avatar) {
            localStorage.setItem('avatar', avatar);
          } else localStorage.removeItem('avatar');

          if (userName && userName !== 'undefined') localStorage.setItem('userName', userName);
          if (AcceptLanguage && AcceptLanguage !== 'undefined') localStorage.setItem('AcceptLanguage', AcceptLanguage);
          if (exportFieldList && exportFieldList !== 'undefined') localStorage.setItem('exportFieldList', exportFieldList);
          sso ? window.location.href = path : window.location.pathname = '/login';
        }
      });
    } else {
      if (flag === false) {
        if (url === '/api/login' && history.push('/loginForward')) {
          var dva = getDvaApp();

          dva._store.dispatch({
            type: 'login/packet',
            payload: {
              loginForwardErrorInfo: hint
            }
          });
        } else {
          if (sign === 'EXCEPTION') {
            notification.destroy();
            notification.error({
              message: sign,
              description: hint || JSON.stringify(data),
              duration: null
            });
          } else {
            message.warn(hint, 3);
          }
        }
      } else {
        if (data !== true) {
          data.dataList = dataList || [];
        }

        return data;
      }
    }
  }).catch(function (err) {
    hideLoading();
    console.log(err);
  });
}
export function axiosRequest(url, options) {
  var headers = _objectSpread({}, options);

  if (url !== '/api/login') {
    headers.headers = {
      Authorization: sessionStorage.getItem('token'),
      UserName: localStorage.getItem('userName'),
      EmployeeName: encodeBase64(localStorage.getItem('employeeName'))
    };
  }

  headers.headers['Accept-Language'] = localStorage['AcceptLanguage'] || 'zh';

  var params = _objectSpread(_objectSpread({
    url: url
  }, headers), {}, {
    timeout: 1000 * 60 * 5
  });

  return axios(params).then(checkStatus).then(function (response) {
    var dis = response.headers['content-disposition'];

    if (dis) {
      var strs = dis.split('filename='); //取消双引号

      var fileName = decodeURIComponent(strs[1].replace(/\"/g, ''));
      response.blob().then(function (blob) {
        var blobUrl = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = blobUrl;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(blobUrl);
      });
    } else {
      return response;
    }
  }).then(function (res) {
    hideLoading();
    var _res$data = res.data,
        path = _res$data.path,
        hint = _res$data.hint,
        flag = _res$data.flag,
        dataList = _res$data.dataList,
        sign = _res$data.sign,
        sso = _res$data.sso;

    if (path) {
      sessionStorage.removeItem('token');
      Modal.destroyAll();
      confirm({
        title: '提示',
        content: hint,
        onOk: function onOk() {
          var avatar = localStorage.avatar;
          var userName = localStorage.userName;
          var AcceptLanguage = localStorage.AcceptLanguage;
          var exportFieldList = localStorage.exportFieldList;
          sessionStorage.clear();
          localStorage.clear();

          if (avatar) {
            localStorage.setItem('avatar', avatar);
          } else localStorage.removeItem('avatar');

          if (userName && userName !== 'undefined') localStorage.setItem('userName', userName);
          if (AcceptLanguage && AcceptLanguage !== 'undefined') localStorage.setItem('AcceptLanguage', AcceptLanguage);
          if (exportFieldList && exportFieldList !== 'undefined') localStorage.setItem('exportFieldList', exportFieldList);
          sso ? window.location.href = path : window.location.pathname = '/login';
        }
      });
    } else {
      if (flag === false) {
        if (sign === 'EXCEPTION') {
          notification.destroy();
          notification.error({
            message: sign,
            description: hint || JSON.stringify(res.data),
            duration: null
          });
        } else {
          message.warn(hint, 3);
        }
      } else {
        res.data.dataList = dataList || [];
        return res.data;
      }
    }
  }).catch(function (err) {
    hideLoading();
    console.log(err);
  });
}