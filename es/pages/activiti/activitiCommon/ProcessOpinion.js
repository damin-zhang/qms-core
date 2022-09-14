function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { connect } from 'dva';
import { Form, Input, Radio, Select } from 'antd';
import DragModal from '../../../component/common/drag/DragModal';
import language from '@/locale/language';
var fields = language.activiti.processState.fields;
var Item = Form.Item;
var Option = Select.Option;
var TextArea = Input.TextArea;

var ProcessOpinion = function ProcessOpinion(_ref) {
  var dispatch = _ref.dispatch,
      processOpinion = _ref.processOpinion,
      list = _ref.list,
      transact = _ref.transact,
      visible = _ref.visible,
      cancel = _ref.cancel,
      _ref$currentLink = _ref.currentLink,
      currentLink = _ref$currentLink === void 0 ? '' : _ref$currentLink,
      _ref$transtactList = _ref.transtactList,
      transtactList = _ref$transtactList === void 0 ? [] : _ref$transtactList,
      taskId = _ref.taskId;
  var _processOpinion$proce = processOpinion.processInstanceId,
      processInstanceId = _processOpinion$proce === void 0 ? '' : _processOpinion$proce,
      _processOpinion$title = processOpinion.title,
      title = _processOpinion$title === void 0 ? '' : _processOpinion$title,
      _processOpinion$url = processOpinion.url,
      url = _processOpinion$url === void 0 ? '' : _processOpinion$url,
      _processOpinion$refre = processOpinion.refreshUrl,
      refreshUrl = _processOpinion$refre === void 0 ? '' : _processOpinion$refre,
      rejectTo = processOpinion.rejectTo;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = function onChange(e) {
    setValue(e.target.value);
  };

  var onFinish = function onFinish(values) {
    if (transact) {
      if (transtactList.length) {
        var val = transtactList.filter(function (item) {
          return item.key === values.conclusion;
        })[0];
        values.name = val.name;
      } else {
        if (values.conclusion === 'Y') values.name = '同意';
        if (values.conclusion === 'N') values.name = '拒绝';
      }
    }

    values.processInstanceId = processInstanceId; //请求后台路径

    values.url = url; //刷新路径

    values.refreshUrl = refreshUrl; //审批数据

    values.rows = list;
    dispatch({
      type: 'processOpinion/submit',
      payload: {
        taskId: taskId,
        processInstanceId: processInstanceId,
        currentLink: currentLink,
        isShowButtons: false,
        values: values,
        cancel: cancel,
        transact: transact,
        rejectTo: rejectTo
      }
    });
  };

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  return /*#__PURE__*/React.createElement(DragModal, {
    width: 330,
    form: form,
    title: title,
    visible: visible,
    onOk: function onOk() {
      return form.submit();
    },
    onCancel: cancel
  }, transact ? /*#__PURE__*/React.createElement(Form, {
    form: form,
    onFinish: onFinish
  }, transtactList.length ? /*#__PURE__*/React.createElement(Item, {
    name: "conclusion",
    label: fields.conclusion,
    rules: [{
      required: true,
      message: fields.required
    }]
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    onChange: onChange,
    value: value
  }, transtactList.map(function (item) {
    return /*#__PURE__*/React.createElement(Radio, {
      value: item.key
    }, item.name);
  }))) : /*#__PURE__*/React.createElement(Item, {
    name: "conclusion",
    label: fields.conclusion,
    rules: [{
      required: true,
      message: fields.required
    }]
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    onChange: onChange,
    value: value
  }, /*#__PURE__*/React.createElement(Radio, {
    value: 'Y'
  }, fields.agree), /*#__PURE__*/React.createElement(Radio, {
    value: 'N'
  }, fields.reject))), /*#__PURE__*/React.createElement(Item, {
    name: "options",
    label: fields.opinion,
    rules: [{
      required: true,
      message: fields.required
    }]
  }, /*#__PURE__*/React.createElement(TextArea, null))) : /*#__PURE__*/React.createElement(Form, {
    form: form,
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement(Item, {
    name: "options",
    label: title,
    rules: [{
      required: true,
      message: fields.required
    }]
  }, /*#__PURE__*/React.createElement(TextArea, null))));
};

function mapStateToProps(_ref2) {
  var processOpinion = _ref2.processOpinion;
  return {
    processOpinion: processOpinion
  };
}

export default connect(mapStateToProps)(ProcessOpinion);