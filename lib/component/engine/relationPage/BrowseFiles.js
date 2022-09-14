"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPdf = require("react-pdf");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

require("../button/index.css");

var _language = _interopRequireDefault(require("@/locale/language"));

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

_reactPdf.pdfjs.GlobalWorkerOptions.workerSrc = "/activiti-explorer/js/pdf.worker.min.js  ";
var _language$file = _language.default.file,
    file_is_loading = _language$file.file_is_loading,
    file_no_data = _language$file.file_no_data,
    file_error = _language$file.file_error;
var options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true
};

var BrowseFiles = function BrowseFiles(_ref) {
  var props = _ref.props,
      engine = _ref.engine;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      numPages = _useState4[0],
      setNumPages = _useState4[1];

  var _useState5 = (0, _react.useState)(100),
      _useState6 = _slicedToArray(_useState5, 2),
      scale = _useState6[0],
      setScale = _useState6[1];

  var _props$model = props.model,
      clickedMenu = _props$model.clickedMenu,
      selectedRows = _props$model.selectedRows;
  var mNo = clickedMenu.mNo,
      id = clickedMenu.id,
      implClass = clickedMenu.implClass,
      implType = clickedMenu.implType,
      wType = clickedMenu.wType,
      objectNo = clickedMenu.objectNo,
      params = clickedMenu.params;
  var newValues = {
    mNo: mNo,
    menuId: id,
    implClass: implClass,
    implType: implType,
    params: params,
    wType: wType,
    objectNo: objectNo,
    hData: selectedRows
  };
  (0, _react.useEffect)(function () {
    var path = 'api/api/application/hkdt/event';

    if (implType === 3) {
      path = 'api/file/base/browsePDF'; // path = 'api/' + implClass
      // 将文件对象FLOCATION添加到PathList

      var newPathList = localStorage['pathList'] ? JSON.parse(localStorage['pathList']) : [];
      newPathList.push({
        ID: newValues.hData[0].ID,
        pathname: newValues.hData[0].FLOCATION
      });
      localStorage['pathList'] = JSON.stringify(newPathList);
    }

    var formData = new FormData();
    formData.append('values', JSON.stringify(newValues));
    fetch(path, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: sessionStorage.getItem('token') || localStorage.getItem('token'),
        UserName: localStorage.getItem('userName')
      }
    }).then(function (res) {
      return res.blob();
    }).then(function (blob) {
      var r = new FileReader();
      r.readAsDataURL(blob);

      r.onload = function (e) {
        setFile(e.target.result);
      };

      return r;
    }).catch(function (err) {
      (0, _utils.hideLoading)();
      console.log(err);
    });
    return function () {
      setFile(null);
    };
  }, [implClass]);

  var onDocumentLoadSuccess = function onDocumentLoadSuccess(_ref2) {
    var numPages = _ref2.numPages;
    setNumPages(numPages);
  };

  var formatter = function formatter(value) {
    return "".concat(value, "%");
  };

  var onChange = function onChange(scale) {
    setScale(scale);
  };

  var minusOrPlusScale = function minusOrPlusScale(isPlus) {
    return function () {
      if (scale === 10 && !isPlus || scale === 500 && isPlus) return;

      if (scale % 10 === 0) {
        isPlus ? scale += 10 : scale -= 10;
      } else {
        isPlus ? scale += 10 - scale % 10 : scale -= scale % 10;
      }

      setScale(scale);
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y",
    style: {
      backgroundColor: '#e6e6e6'
    }
  }, file && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, selectedRows && selectedRows[0].FNAME), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '300px',
      // position: 'fixed',
      // right: '10px',
      // bottom: 0,
      display: 'flex',
      alignItems: 'center',
      fontSize: '18px',
      justifyContent: 'space-around',
      zIndex: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.MinusSquareOutlined, {
    onClick: minusOrPlusScale(false)
  }), /*#__PURE__*/_react.default.createElement(_antd.Slider, {
    tipFormatter: formatter,
    onChange: onChange,
    value: scale,
    max: 500,
    min: 10,
    style: {
      width: '200px'
    }
  }), /*#__PURE__*/_react.default.createElement(_icons.PlusSquareOutlined, {
    onClick: minusOrPlusScale(true)
  }), /*#__PURE__*/_react.default.createElement("span", null, scale, "%")), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-y",
    style: {
      overflow: 'auto',
      userSelect: 'none'
    },
    onContextMenu: function onContextMenu(event) {
      return event.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactPdf.Document, {
    file: file,
    onLoadSuccess: onDocumentLoadSuccess,
    options: options,
    noData: file_no_data // error={file_error}
    ,
    error: selectedRows[0].errorInfo
  }, Array.from(new Array(numPages), function (el, index) {
    return /*#__PURE__*/_react.default.createElement(_reactPdf.Page, {
      key: "page_".concat(index + 1),
      pageNumber: index + 1,
      scale: scale / 100,
      className: "pdf-page"
    });
  })))));
};

var _default = BrowseFiles;
exports.default = _default;