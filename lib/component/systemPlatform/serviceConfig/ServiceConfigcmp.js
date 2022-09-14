"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _ServiceConfigForm = _interopRequireDefault(require("./ServiceConfigForm"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$systemPlatf = _language.default.systemPlatform.ServiceConfig,
    button = _language$systemPlatf.button,
    fields = _language$systemPlatf.fields;
var columns = [{
  title: fields.NO,
  dataIndex: 'no',
  width: 100
}, {
  title: fields.NAME,
  dataIndex: 'name',
  width: 100
}, {
  title: fields.CONFIG_VALUE,
  dataIndex: 'config_value',
  width: 150,
  align: 'center'
}, {
  title: fields.IS_DYNAMIC,
  dataIndex: 'is_dynamic',
  width: 80,
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Radio, {
      checked: text
    });
  }
}, {
  title: fields.CUSER,
  dataIndex: 'cuser',
  width: 80
}, {
  title: fields.CTIME,
  dataIndex: 'ctime',
  width: 100
}, {
  title: fields.MUSER,
  dataIndex: 'muser',
  width: 80
}, {
  title: fields.MTIME,
  dataIndex: 'mtime',
  width: 100
}];

var Index = function Index(_ref) {
  var dataList1 = _ref.dataList1,
      dispatch = _ref.dispatch,
      _ref$selectedRows = _ref.selectedRows1,
      selectedRows1 = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      selectedRowKeys1 = _ref.selectedRowKeys1,
      namespace = _ref.namespace,
      visible1 = _ref.visible1,
      record = _ref.record;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        record: record,
        visible1: !visible1
      }
    });
  };

  (0, _react.useEffect)(function () {
    dispatch({
      type: 'serviceConfig/queryItem',
      payload: {
        activeKey: '0'
      }
    });
  }, [1]);

  var onSelectChange = function onSelectChange(selectedRowKeys1, selectedRows1) {
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        selectedRowKeys1: selectedRowKeys1,
        selectedRows1: selectedRows1
      }
    });
  };

  var del = function del(systemConfigs) {
    return function () {
      dispatch({
        type: 'serviceConfig/delSystemconfig',
        payload: {
          systemConfigs: systemConfigs
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
    disabled: !(selectedRows1[0] && selectedRows1.length === 1),
    func: function func() {
      toogleModal(selectedRows1[0]);
    }
  }, {
    name: button.del,
    disabled: !selectedRows1[0],
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + button.del,
        onOk: del(selectedRows1)
      });
    }
  }];
  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys1
  };
  var tableProp = {
    dataList: dataList1,
    columns: columns,
    btns: btns,
    rowKey: 'id',
    rowSelection: rowSelection
  };
  var formProps = {
    record: record,
    visible: visible1,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), /*#__PURE__*/_react.default.createElement(_ServiceConfigForm.default, formProps));
};

function mapStateToProps(_ref2) {
  var serviceConfig = _ref2.serviceConfig;
  return _objectSpread({}, serviceConfig);
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;