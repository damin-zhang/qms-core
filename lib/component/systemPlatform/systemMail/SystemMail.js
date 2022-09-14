"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _SystemMailForm = _interopRequireDefault(require("./SystemMailForm"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$systemPlatf = _language.default.systemPlatform.systemMailbox,
    button = _language$systemPlatf.button,
    fields = _language$systemPlatf.fields;
var columns = [{
  title: fields.MAILLNAME,
  dataIndex: 'mailName',
  width: 100,
  align: 'center'
}, {
  title: fields.MAILADDRESS,
  dataIndex: 'mailAddress',
  width: 120,
  align: 'center'
}, {
  title: fields.MAILHOST,
  dataIndex: 'mailHost',
  width: 100,
  align: 'center'
}, {
  title: fields.PortNum,
  dataIndex: 'mailPort',
  width: 100,
  align: 'center'
}, {
  title: fields.Agreement,
  dataIndex: 'mailPact',
  width: 100,
  align: 'center'
}, {
  title: fields.CUSER,
  dataIndex: 'cuser',
  align: 'center'
}, {
  title: fields.CTIME,
  dataIndex: 'ctime',
  width: 100,
  align: 'center'
}];

var Index = function Index(_ref) {
  var dataList2 = _ref.dataList2,
      dispatch = _ref.dispatch,
      _ref$selectedRows = _ref.selectedRows2,
      selectedRows2 = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      selectedRowKeys2 = _ref.selectedRowKeys2,
      namespace = _ref.namespace,
      visible2 = _ref.visible2,
      record = _ref.record;

  var _ref2 = selectedRows2[0] || {},
      id = _ref2.id;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        record: record,
        visible2: !visible2
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys2, selectedRows2) {
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        selectedRowKeys2: selectedRowKeys2,
        selectedRows2: selectedRows2
      }
    });
  };

  var del = function del(mails) {
    return function () {
      dispatch({
        type: 'serviceConfig/delMail',
        payload: {
          mails: mails
        }
      });
    };
  };

  var btns = [{
    name: button.create,
    func: function func() {
      toogleModal();
    }
  }, {
    name: button.update,
    disabled: !(id && selectedRows2.length === 1),
    func: function func() {
      toogleModal(selectedRows2[0]);
    }
  }, {
    name: button.del,
    disabled: !id,
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + button.del,
        onOk: del(selectedRows2)
      });
    }
  }];
  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys2
  };
  var tableProp = {
    dataList: dataList2,
    columns: columns,
    btns: btns,
    rowKey: 'id',
    rowSelection: rowSelection
  };
  var formProps = {
    record: record,
    visible: visible2,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), /*#__PURE__*/_react.default.createElement(_SystemMailForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var serviceConfig = _ref3.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;