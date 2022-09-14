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

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _utils = require("../../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform.authCode,
    fields = _language$configPlatf.fields,
    buttons = _language$configPlatf.buttons;
var columns = [{
  title: fields.NO,
  dataIndex: 'NO',
  width: 100
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 150
}, {
  title: fields.ETIME,
  dataIndex: 'ETIME',
  width: 150
}, {
  title: fields.REMARK,
  dataIndex: 'REMARK',
  width: 150
}];
var layout = {
  labelCol: {
    span: 5
  },
  wrapperCol: {
    span: 19
  }
};

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      dataList3 = _ref.dataList3,
      objectAData = _ref.objectAData,
      selectedRowKeys3 = _ref.selectedRowKeys3,
      selectedRows3 = _ref.selectedRows3;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      keys = _useState4[0],
      setKeys = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      rows = _useState6[0],
      setRows = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      dataList = _useState8[0],
      setDataList = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      visible2 = _useState10[0],
      setVisible2 = _useState10[1];

  var onSelectChange = function onSelectChange(selectedRowKeys3, selectedRows3) {
    dispatch({
      type: 'RoleManage/packet',
      payload: {
        selectedRowKeys3: selectedRowKeys3,
        selectedRows3: selectedRows3
      }
    });
  };

  var saveAuthCode = function saveAuthCode() {
    if (rows && rows.length > 0) {
      dispatch({
        type: 'RoleManage/addRoleAuthCode',
        payload: {
          objectAData: objectAData,
          hData: rows
        }
      }); //  dispatch({ type: 'RoleManage/queryItem', payload: { activeKey: '2', objectAData } })
    }

    setVisible(false);
  };

  var onFinish = function onFinish(value) {
    dispatch({
      type: 'RoleManage/updateAuthCode',
      payload: {
        value: value,
        hData: selectedRows3
      }
    });
    setVisible2(false);
  };

  var btns = [{
    name: buttons.add,
    func: function func() {
      dispatch({
        type: 'RoleManage/queryAllAuthCode',
        payload: {
          roleId: objectAData.id
        },
        callback: function callback(list) {
          setDataList(list);
          setVisible(true);
          setKeys([]);
          setRows([]);
        }
      });
    }
  }, {
    name: buttons.update,
    disabled: !(selectedRows3 && selectedRows3.length !== 0),
    func: function func() {
      setVisible2(true);
    }
  }, {
    name: buttons.remove,
    disabled: !(selectedRows3 && selectedRows3.length !== 0),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.remove,
        onOk: function onOk() {
          dispatch({
            type: 'RoleManage/delAuthCode',
            payload: {
              hData: selectedRows3
            }
          });
        }
      });
    }
  }];
  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys3
  };
  var tableProp = {
    dataList: dataList3,
    columns: columns,
    btns: btns,
    rowKey: 'ID',
    rowSelection: rowSelection
  };
  var tableProp2 = {
    dataList: dataList,
    columns: columns,
    rowSelection: {
      onChange: function onChange(keys, rows) {
        setKeys(keys);
        setRows(rows);
      },
      selectedRowKeys: keys
    },
    rowKey: 'ID'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: buttons.add,
    height: 600,
    visible: visible,
    onOk: saveAuthCode,
    onCancel: function onCancel() {
      return setVisible(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp2)), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: buttons.update,
    visible: visible2,
    onOk: function onOk() {
      return form.submit();
    },
    onCancel: function onCancel() {
      return setVisible2(false);
    },
    width: 500
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "authCode",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: selectedRows3 ? selectedRows3[0] : {}
  }, layout), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "ETIME",
    label: fields.ETIME,
    className: "whole-line"
  }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
    format: "YYYY-MM-DD"
  })))));
};

function mapStateToProps(_ref2) {
  var RoleManage = _ref2.RoleManage;
  return _objectSpread({}, RoleManage);
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;