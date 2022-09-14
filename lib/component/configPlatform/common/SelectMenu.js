"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _dva = require("dva");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _BusinessMenuForm = _interopRequireDefault(require("./BusinessMenuForm"));

var _MqAffairMenuForm = _interopRequireDefault(require("./MqAffairMenuForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    buttons = _language.default.configPlatform.buttons;

var SelectMenu = function SelectMenu(_ref) {
  var dispatch = _ref.dispatch,
      selectMenu = _ref.selectMenu;
  var onSelect = selectMenu.onSelect,
      selectedRowKeys = selectMenu.selectedRowKeys,
      selectedRows = selectMenu.selectedRows,
      dataList = selectMenu.dataList,
      visible = selectMenu.visible,
      columns = selectMenu.columns,
      type = selectMenu.type,
      objectVisible = selectMenu.objectVisible,
      record = selectMenu.record;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var toogleModal = function toogleModal() {
    dispatch({
      type: 'selectMenu/packet',
      payload: {
        visible: !visible,
        selectedRowKeys: [],
        selectedRows: []
      }
    });
  };

  var Ok = function Ok() {
    if (selectedRows[0]) onSelect(selectedRows);
    toogleModal();
  };

  var onSearch = function onSearch(queryWord) {
    dispatch({
      type: 'selectMenu/search',
      payload: {
        queryWord: queryWord
      }
    });
  };

  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      dispatch({
        type: 'selectMenu/packet',
        payload: {
          selectedRowKeys: selectedRowKeys,
          selectedRows: selectedRows
        }
      });
    },
    selectedRowKeys: selectedRowKeys
  };

  var toogleEdit = function toogleEdit() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'selectMenu/packet',
      payload: {
        objectVisible: !objectVisible,
        record: _objectSpread(_objectSpread({}, record), {}, {
          REQPARAM: (record.REQPARAM || '').split(';'),
          PARAMS: JSON.parse(record.PARAMS || '{}')
        })
      }
    });
  };

  var del = function del(rows) {
    dispatch({
      type: 'selectMenu/del',
      payload: {
        rows: rows
      }
    });
  };

  var btns = [{
    name: buttons.create,
    func: function func() {
      toogleEdit();
    }
  }, {
    name: buttons.update,
    disabled: !ID,
    func: function func() {
      toogleEdit(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !ID,
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: function onOk() {
          return del(selectedRows);
        }
      });
    }
  }];
  var props = {
    dataList: dataList,
    columns: columns,
    rowSelection: rowSelection,
    onSearch: onSearch,
    btns: btns
  };
  var formProps = {
    visible: objectVisible,
    record: record,
    onCancel: toogleEdit,
    dataList: dataList
  };
  return /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    title: common.select,
    visible: visible,
    onOk: Ok,
    onCancel: toogleModal,
    height: 500
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, props), type === 'menu' && /*#__PURE__*/_react.default.createElement(_BusinessMenuForm.default, formProps), type === 'mqAffair' && /*#__PURE__*/_react.default.createElement(_MqAffairMenuForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var selectMenu = _ref3.selectMenu;
  return {
    selectMenu: selectMenu
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(SelectMenu);

exports.default = _default;