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

/*
 * @Description: 定制页面文件浏览
 */
import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Slider } from 'antd';
import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import '../button/index.css';
import language from '@/locale/language';
pdfjs.GlobalWorkerOptions.workerSrc = "/activiti-explorer/js/pdf.worker.min.js  ";
var file_no_data = language.file.file_no_data;
var options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true
};

var Sample = /*#__PURE__*/function (_Component) {
  _inherits(Sample, _Component);

  var _super = _createSuper(Sample);

  function Sample() {
    var _this;

    _classCallCheck(this, Sample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      file: null,
      numPages: null,
      scale: 100
    };

    _this.onDocumentLoadSuccess = function (_ref) {
      var numPages = _ref.numPages;

      _this.setState({
        numPages: numPages
      });
    };

    _this.formatter = function (value) {
      return "".concat(value, "%");
    };

    _this.onChange = function (scale) {
      _this.setState({
        scale: scale
      });
    };

    _this.minusOrPlusScale = function (isPlus) {
      return function () {
        var scale = _this.state.scale;
        if (scale === 10 && !isPlus || scale === 500 && isPlus) return;

        if (scale % 10 === 0) {
          isPlus ? scale += 10 : scale -= 10;
        } else {
          isPlus ? scale += 10 - scale % 10 : scale -= scale % 10;
        }

        _this.setState({
          scale: scale
        });
      };
    };

    return _this;
  }

  _createClass(Sample, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          numPages = _this$state.numPages,
          scale = _this$state.scale;
      console.log(this.props);
      var _this$props = this.props,
          file = _this$props.file,
          record = _this$props.record,
          errorInfo = _this$props.errorInfo;
      return /*#__PURE__*/React.createElement("div", {
        className: "flex-y",
        style: {
          backgroundColor: '#e6e6e6'
        }
      }, file && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          textAlign: 'center'
        }
      }, record.FNAME), /*#__PURE__*/React.createElement("div", {
        style: {
          width: '300px',
          position: 'fixed',
          right: '10px',
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px',
          justifyContent: 'space-around',
          zIndex: 5
        }
      }, /*#__PURE__*/React.createElement(MinusSquareOutlined, {
        onClick: this.minusOrPlusScale(false)
      }), /*#__PURE__*/React.createElement(Slider, {
        tipFormatter: this.formatter,
        onChange: this.onChange,
        value: scale,
        max: 500,
        min: 10,
        style: {
          width: '200px'
        }
      }), /*#__PURE__*/React.createElement(PlusSquareOutlined, {
        onClick: this.minusOrPlusScale(true)
      }), /*#__PURE__*/React.createElement("span", null, scale, "%")), /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-y",
        style: {
          overflow: 'auto',
          userSelect: 'none'
        },
        onContextMenu: function onContextMenu(event) {
          return event.preventDefault();
        }
      }, /*#__PURE__*/React.createElement(Document, {
        file: file,
        onLoadSuccess: this.onDocumentLoadSuccess,
        options: options,
        noData: file_no_data // error={file_error}
        ,
        error: errorInfo
      }, Array.from(new Array(numPages), function (el, index) {
        return /*#__PURE__*/React.createElement(Page, {
          key: "page_".concat(index + 1),
          pageNumber: index + 1,
          scale: scale / 100,
          className: "pdf-page"
        });
      })))));
    }
  }]);

  return Sample;
}(Component);

export default Sample;