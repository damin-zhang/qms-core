function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 用户表单
 */
import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Checkbox, DatePicker, Drawer, Button, Divider } from 'antd';
import language from '@/locale/language';
import { isUpdate } from '../../../utils/utils';
var msg = language.tipWords.msg,
    _language$common = language.common,
    edit = _language$common.edit,
    cancel = _language$common.cancel,
    ok = _language$common.ok,
    _language$userManage$ = language.userManage.staffManage,
    staffUser = _language$userManage$.staffUser,
    login_info = _language$userManage$.login_info,
    basic_info = _language$userManage$.basic_info,
    fields = _language$userManage$.fields;
var Item = Form.Item;
var Option = Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

var PropertyForm = function PropertyForm(_ref) {
  var dispatch = _ref.dispatch,
      visible = _ref.visible,
      record = _ref.record,
      selectedRows = _ref.selectedRows,
      onCancel = _ref.onCancel,
      selectedRows2 = _ref.selectedRows2,
      disabled1 = _ref.disabled1;

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  useEffect(function () {
    form.setFieldsValue(record);
    return function () {
      form.resetFields();
    };
  }, [form, record, visible]);

  var onFinish = function onFinish(values) {
    var isChange = isUpdate(record, values);
    if (values.inTime) values.inTime = values.inTime.format('YYYY-MM-DD');
    isChange ? dispatch({
      type: 'StaffManage/editStaff',
      payload: {
        selectedRows: selectedRows,
        values: values,
        record: record,
        onCancel: onCancel
      }
    }) : onCancel();
  };

  var checkRule = function checkRule(value) {
    var Reg = /^[\u4e00-\u9fa5]/g;

    var _form$getFieldsValue = form.getFieldsValue(['no', 'tel', 'idCard', 'mail', 'mailPassword']),
        no = _form$getFieldsValue.no,
        tel = _form$getFieldsValue.tel,
        idCard = _form$getFieldsValue.idCard,
        mail = _form$getFieldsValue.mail,
        mailPassword = _form$getFieldsValue.mailPassword;

    if (no === value) if (Reg.test(no)) return Promise.reject(msg);
    if (tel === value) if (Reg.test(tel)) return Promise.reject(msg);
    if (idCard === value) if (Reg.test(idCard)) return Promise.reject(msg);
    if (mail === value) if (Reg.test(mail)) return Promise.reject(msg);
    if (mailPassword === value) if (Reg.test(mailPassword)) return Promise.reject(msg);
    return Promise.resolve();
  };

  return /*#__PURE__*/React.createElement(Drawer, {
    title: edit + ' ' + basic_info,
    visible: visible,
    onClose: onCancel,
    footer: disabled1 ? null : [/*#__PURE__*/React.createElement("div", {
      style: {
        float: 'right'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onCancel
    }, cancel), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: function onClick() {
        return form.submit();
      }
    }, ok))],
    width: "70%"
  }, /*#__PURE__*/React.createElement(Form, _extends({
    name: "property",
    onFinish: onFinish,
    form: form,
    layout: "inline"
  }, layout), /*#__PURE__*/React.createElement(Divider, null, basic_info), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "no",
    label: fields.SUNO,
    rules: [{
      required: true,
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "suName",
    label: fields.SUNAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "type",
    label: fields.USERTYPE
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: disabled1
  }, /*#__PURE__*/React.createElement(Option, {
    value: '0'
  }, fields.INTERNALUSER), /*#__PURE__*/React.createElement(Option, {
    value: '1'
  }, fields.SUPPLIER), /*#__PURE__*/React.createElement(Option, {
    value: '2'
  }, fields.CUSTOMER))), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "tel",
    label: fields.SUTEL,
    rules: [{
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "sax",
    label: fields.SAX
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: disabled1
  }, /*#__PURE__*/React.createElement(Option, {
    value: 1
  }, fields.MEN), /*#__PURE__*/React.createElement(Option, {
    value: 0
  }, fields.WOMEN))), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "inTime",
    label: fields.INTIME,
    disabled: disabled1
  }, /*#__PURE__*/React.createElement(DatePicker, {
    format: "YYYY-MM-DD"
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "idCard",
    label: fields.IDCARD,
    rules: [{
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "mail",
    label: fields.MAIL,
    rules: [{
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "mailPassword",
    label: fields.MAILPASSWORD,
    rules: [{
      validator: function validator(_, value) {
        return checkRule(value);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input.Password, {
    autoComplete: "nope",
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "opState",
    label: fields.OPSTATE,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "remark",
    label: staffUser.fields.REMARK
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  })), /*#__PURE__*/React.createElement(Divider, null, login_info), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    name: "name",
    label: staffUser.fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: disabled1
  }))), /*#__PURE__*/React.createElement(Divider, null, staffUser.title2), selectedRows2 && /*#__PURE__*/React.createElement(Form, _extends({
    name: "property",
    layout: "inline"
  }, layout), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    label: fields.NO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.NO,
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    label: fields.NAME,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.NAME,
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    label: fields.TEL,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.TEL,
    disabled: true
  })), /*#__PURE__*/React.createElement(Item, {
    className: "spaceBetween",
    label: fields.MANAGER,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    value: selectedRows2.MANAGER,
    disabled: true
  }))));
};

export default connect()(PropertyForm);