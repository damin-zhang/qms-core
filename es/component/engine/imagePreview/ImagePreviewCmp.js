function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 图片预览及下载
 */
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import RcViewer from '@hanyk/rc-viewer';
import './index.css';
import { base64ToBlob } from '../../../utils/utils';

var ImagePreviewCmp = function ImagePreviewCmp(_ref) {
  var imgList = _ref.imgList,
      imageDownload = _ref.imageDownload;

  var _useState = useState(imgList),
      _useState2 = _slicedToArray(_useState, 2),
      newImgList = _useState2[0],
      setNewImgList = _useState2[1]; //预览


  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1]; //预览图片


  var previewImage = function previewImage(fileObj) {
    // setNewImgList([fileObj])
    if (preview) {
      preview.viewer.view(fileObj); //预览时根据图片的下标显示相应的图片

      preview.viewer.show();
    }
  };
  /*  下载单张图片
        1.注意：base64过大会在某些浏览器上下载失败，解决办法：将base64转为blob
        2.a标签的href不能直接连Blob对象，得通过URL.createObjectURL() 静态方法将File对象或Blob对象生成URL。
        3.Data URL是一种协议，能将资源转换为base64编码的字符串，并存储于URL中，且能与File、Blob相互转换。
    */


  var downLoadImg = function downLoadImg(fileObj) {
    var a = document.createElement('a'); // 创建一个a标签

    var blob = base64ToBlob(fileObj.image); // new Blob([content]);

    a.href = URL.createObjectURL(blob); // a标签的src属性赋值

    a.download = fileObj.fileName; // a标签的download属性赋值

    document.body.appendChild(a); // 添加a标签到body下

    a.click(); // 触发a标签点击事件
    // document.body.removeChild(a)            // 完成后删除a标签，不删除则下载完成图片还可预览
  }; //下载所有图片


  var downLoadImgAll = function downLoadImgAll() {
    imgList.map(function (item) {
      downLoadImg(item);
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, imgList && imgList.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "rc-image-list"
  }, imgList && imgList.length > 0 && imgList.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "re-image-item image-item"
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      className: "mask"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon-actions"
    }, /*#__PURE__*/React.createElement(EyeOutlined, {
      className: "icon-style",
      onClick: function onClick() {
        return previewImage(index);
      }
    }), imageDownload && /*#__PURE__*/React.createElement(DownloadOutlined, {
      className: "icon-style",
      onClick: function onClick() {
        return downLoadImg(item);
      }
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "image-download"
  }, imageDownload && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    className: "image-download-btn",
    onClick: function onClick() {
      return downLoadImgAll();
    }
  }, "\u5168\u90E8\u4E0B\u8F7D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    }
  }, newImgList && newImgList.length > 0 && /*#__PURE__*/React.createElement(RcViewer, {
    options: {
      zIndex: 99999
    },
    ref: function ref(v) {
      setPreview(v);
    }
  }, newImgList && newImgList.length > 0 && newImgList.map(function (item) {
    return /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: item.fileName
    });
  }))));
};

export default ImagePreviewCmp;