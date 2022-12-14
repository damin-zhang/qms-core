"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _react = _interopRequireWildcard(require("react"));

var _rcViewer = _interopRequireDefault(require("@hanyk/rc-viewer"));

require("./index.css");

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ImagePreviewCmp = function ImagePreviewCmp(_ref) {
  var imgList = _ref.imgList,
      imageDownload = _ref.imageDownload;

  var _useState = (0, _react.useState)(imgList),
      _useState2 = _slicedToArray(_useState, 2),
      newImgList = _useState2[0],
      setNewImgList = _useState2[1]; //??????


  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1]; //????????????


  var previewImage = function previewImage(fileObj) {
    // setNewImgList([fileObj])
    if (preview) {
      preview.viewer.view(fileObj); //???????????????????????????????????????????????????

      preview.viewer.show();
    }
  };
  /*  ??????????????????
        1.?????????base64???????????????????????????????????????????????????????????????base64??????blob
        2.a?????????href???????????????Blob??????????????????URL.createObjectURL() ???????????????File?????????Blob????????????URL???
        3.Data URL???????????????????????????????????????base64?????????????????????????????????URL???????????????File???Blob???????????????
    */


  var downLoadImg = function downLoadImg(fileObj) {
    var a = document.createElement('a'); // ????????????a??????

    var blob = (0, _utils.base64ToBlob)(fileObj.image); // new Blob([content]);

    a.href = URL.createObjectURL(blob); // a?????????src????????????

    a.download = fileObj.fileName; // a?????????download????????????

    document.body.appendChild(a); // ??????a?????????body???

    a.click(); // ??????a??????????????????
    // document.body.removeChild(a)            // ???????????????a???????????????????????????????????????????????????
  }; //??????????????????


  var downLoadImgAll = function downLoadImgAll() {
    imgList.map(function (item) {
      downLoadImg(item);
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, imgList && imgList.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "rc-image-list"
  }, imgList && imgList.length > 0 && imgList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "re-image-item image-item"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: item.image,
      alt: ""
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "mask"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "icon-actions"
    }, /*#__PURE__*/_react.default.createElement(_icons.EyeOutlined, {
      className: "icon-style",
      onClick: function onClick() {
        return previewImage(index);
      }
    }), imageDownload && /*#__PURE__*/_react.default.createElement(_icons.DownloadOutlined, {
      className: "icon-style",
      onClick: function onClick() {
        return downLoadImg(item);
      }
    }))));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-download"
  }, imageDownload && /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    className: "image-download-btn",
    onClick: function onClick() {
      return downLoadImgAll();
    }
  }, "\u5168\u90E8\u4E0B\u8F7D"))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'none'
    }
  }, newImgList && newImgList.length > 0 && /*#__PURE__*/_react.default.createElement(_rcViewer.default, {
    options: {
      zIndex: 99999
    },
    ref: function ref(v) {
      setPreview(v);
    }
  }, newImgList && newImgList.length > 0 && newImgList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: item.image,
      alt: item.fileName
    });
  }))));
};

var _default = ImagePreviewCmp;
exports.default = _default;