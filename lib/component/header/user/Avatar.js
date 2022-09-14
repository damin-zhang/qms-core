"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _language = _interopRequireDefault(require("../../../locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var userTip = _language.default.header.user.userTip;

function beforeUpload(file) {
  var isLt200KB = file.size / 1024 < 200;

  if (!isLt200KB) {
    _antd.message.error(userTip.avatar200KB);
  }

  return isLt200KB;
}

var Avatar = function Avatar(props) {
  var _useState = (0, _react.useState)(localStorage.getItem('avatar')),
      _useState2 = _slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function getBase64(img) {
    var reader = new FileReader();
    reader.readAsDataURL(img);

    reader.onload = function (ev) {
      //文件读取成功完成时触发
      setImageUrl(ev.target.result); //获得文件读取成功后的DataURL,也就是base64编码

      props.setFieldsValue({
        avatar: ev.target.result
      });
    };
  }

  var handleChange = function handleChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj);
    }
  };

  var uploadButton = /*#__PURE__*/_react.default.createElement("div", null, loading ? /*#__PURE__*/_react.default.createElement(_icons.LoadingOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Upload"));

  return /*#__PURE__*/_react.default.createElement(_antd.Upload, {
    accept: ".jpg,.jpeg,.png",
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    action: imageUrl,
    beforeUpload: beforeUpload,
    onChange: handleChange
  }, imageUrl ? /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    alt: "avatar",
    style: {
      width: '100%'
    }
  }) : uploadButton);
};

var _default = Avatar;
exports.default = _default;