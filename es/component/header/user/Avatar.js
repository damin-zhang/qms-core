function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import language from '../../../locale/language';
var userTip = language.header.user.userTip;

function beforeUpload(file) {
  var isLt200KB = file.size / 1024 < 200;

  if (!isLt200KB) {
    message.error(userTip.avatar200KB);
  }

  return isLt200KB;
}

var Avatar = function Avatar(props) {
  var _useState = useState(localStorage.getItem('avatar')),
      _useState2 = _slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  var _useState3 = useState(false),
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

  var uploadButton = /*#__PURE__*/React.createElement("div", null, loading ? /*#__PURE__*/React.createElement(LoadingOutlined, null) : /*#__PURE__*/React.createElement(PlusOutlined, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, "Upload"));
  return /*#__PURE__*/React.createElement(Upload, {
    accept: ".jpg,.jpeg,.png",
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    action: imageUrl,
    beforeUpload: beforeUpload,
    onChange: handleChange
  }, imageUrl ? /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: "avatar",
    style: {
      width: '100%'
    }
  }) : uploadButton);
};

export default Avatar;