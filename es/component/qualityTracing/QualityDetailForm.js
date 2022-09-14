function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 明细追溯页表单组件
import React, { useEffect } from 'react';
import { Form, Input, Tooltip } from 'antd';
var Item = Form.Item;

var QualityDetail = function QualityDetail(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      init = _ref.init;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  useEffect(function () {
    form.setFieldsValue(init);
    return function () {
      form.resetFields();
    };
  }, [data, init, form]);

  var getTitle = function getTitle(item, init) {
    var title = null;
    var key = item && item.name || item.dataIndex;
    title = init && init[key] || null;
    return title;
  };

  return /*#__PURE__*/React.createElement(Form, {
    form: form,
    layout: "inline",
    initialValues: init
  }, data.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: '10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 'bold'
      }
    }, item.title), /*#__PURE__*/React.createElement(Tooltip, {
      title: getTitle(item, init)
    }, /*#__PURE__*/React.createElement(Item, {
      name: item.name || item.dataIndex
    }, /*#__PURE__*/React.createElement(Input, {
      disabled: true,
      style: {
        textOverflow: 'ellipsis'
      }
    }))));
  }));
};

export default QualityDetail;