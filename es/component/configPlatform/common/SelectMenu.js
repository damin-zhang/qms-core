function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 通用选择表单
 */
import React from 'react';
import TableWithBtn from '../../common/table/TableWithBtn';
import { connect } from 'dva';
import Modal from '../../common/drag/DragModal';
import BusinessMenuForm from './BusinessMenuForm';
import MqAffairMenuForm from './MqAffairMenuForm';
import language from '@/locale/language';
import { confirm } from '../../../utils/utils';
var common = language.common,
    buttons = language.configPlatform.buttons;

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
      confirm({
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
  return /*#__PURE__*/React.createElement(Modal, {
    title: common.select,
    visible: visible,
    onOk: Ok,
    onCancel: toogleModal,
    height: 500
  }, /*#__PURE__*/React.createElement(TableWithBtn, props), type === 'menu' && /*#__PURE__*/React.createElement(BusinessMenuForm, formProps), type === 'mqAffair' && /*#__PURE__*/React.createElement(MqAffairMenuForm, formProps));
};

function mapStateToProps(_ref3) {
  var selectMenu = _ref3.selectMenu;
  return {
    selectMenu: selectMenu
  };
}

export default connect(mapStateToProps)(SelectMenu);