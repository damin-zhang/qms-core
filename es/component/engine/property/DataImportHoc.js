function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";

/*
 * @Description: 数据导入
 */
import { useState, useImperativeHandle, forwardRef } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import language from '@/locale/language';
import { confirmBtn } from '../../../utils/buttonFunc';
var _language$common = language.common,
    please_select_file = _language$common.please_select_file,
    select_file_prompt1 = _language$common.select_file_prompt1,
    select_file_prompt2 = _language$common.select_file_prompt2;
var Dragger = Upload.Dragger;
export default (function (engine) {
  return function (WrappedComponent) {
    var ChildCmp = function ChildCmp(props, ref) {
      var _useState = useState([]),
          _useState2 = _slicedToArray(_useState, 2),
          fileList = _useState2[0],
          setFileList = _useState2[1];

      var onCancel = props.onCancel;
      var clickedMenu = engine.clickedMenu,
          namespace = engine.namespace,
          params = engine.params;
      var batch = params ? params.BATCH : '';
      var multipleProps = null;

      if (batch) {
        multipleProps = {
          multiple: true
        };
      }

      var fileProps = _objectSpread({
        beforeUpload: function beforeUpload(file, files) {
          var list = [];

          if (batch) {
            list = [].concat(_toConsumableArray(fileList), _toConsumableArray(files));
          } else {
            list = [].concat(_toConsumableArray(fileList), [file]);
          }

          setFileList(list);
          return false;
        },
        onRemove: function onRemove(file) {
          var index = fileList.indexOf(file);
          var newFileList = fileList.slice();
          newFileList.splice(index, 1);
          setFileList(newFileList);
        },
        // accept: '.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
        fileList: fileList
      }, multipleProps);

      useImperativeHandle(ref, function () {
        return {
          Ok: function Ok() {
            if (fileList.length > 0) {
              confirmBtn({
                file: fileList,
                values: clickedMenu.values
              }, clickedMenu, namespace, onCancel);
            } else {
              message.warn(please_select_file);
            }
          }
        };
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dragger, fileProps, /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-drag-icon"
      }, /*#__PURE__*/React.createElement(InboxOutlined, null)), /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-text"
      }, select_file_prompt1), /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-hint"
      }, select_file_prompt2)), /*#__PURE__*/React.createElement(WrappedComponent, props));
    };

    return forwardRef(ChildCmp);
  };
});