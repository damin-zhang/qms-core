var _excluded = ["otherMenus"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 其他按钮
 */
import React, { Fragment } from 'react';
import TableWithBtn from '../../../common/table/TableWithBtn';
import Modal from '../../../common/drag/DragModal';
import { connect } from 'dva';
import { Button } from 'antd';
import language from '@/locale/language';
import { confirm } from '../../../../utils/utils';
var _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.tableConfig.objectMenu.fields;

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      _ref$selectedRow = _ref.selectedRow,
      selectedRow = _ref$selectedRow === void 0 ? {} : _ref$selectedRow,
      visible = _ref.visible,
      Ok = _ref.Ok,
      onCancel = _ref.onCancel,
      OBJECTNO = _ref.OBJECTNO,
      namespace = _ref.namespace,
      PID = _ref.PID;

  var _ref2 = selectedRow.PARAMS || {},
      _ref2$otherMenus = _ref2.otherMenus,
      otherMenus = _ref2$otherMenus === void 0 ? [] : _ref2$otherMenus,
      rest = _objectWithoutProperties(_ref2, _excluded);

  var columns = [{
    title: fields.NO,
    dataIndex: 'NO',
    width: 200
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 200
  }, {
    title: '',
    render: function render(text, record) {
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: function onClick() {
          toogleModal(record);
        }
      }, buttons.update), /*#__PURE__*/React.createElement(Button, {
        type: "danger",
        onClick: function onClick() {
          del(record.ID);
        }
      }, buttons.delete));
    }
  }];

  var toogleModal = function toogleModal(record) {
    dispatch({
      type: 'menu/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          REQPARAM: (record.REQPARAM || '').split(';'),
          PARAMS: record.PARAMS || {},
          PID: '0'
        }),
        visible: true
      }
    });
  };

  var del = function del(id) {
    confirm({
      onOk: function onOk() {
        var index = otherMenus.findIndex(function (item) {
          return item.ID === id;
        });
        otherMenus.splice(index, 1);
        dispatch({
          type: 'commonConfig/editItem',
          payload: {
            values: {
              PARAMS: JSON.stringify(_objectSpread(_objectSpread({}, rest), {}, {
                otherMenus: otherMenus
              }))
            },
            record: selectedRow,
            namespace: namespace,
            PID: PID
          }
        });
      }
    });
  };

  var btns = [{
    name: buttons.create,
    func: function func() {
      toogleModal({
        MTYPE: 0,
        OBJECTNO: OBJECTNO,
        IMPLTYPE: 1
      });
    }
  }];
  var props = {
    dataList: otherMenus,
    columns: columns,
    btns: btns,
    rowSelection: null
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: fields.PARAM,
    visible: visible,
    onOk: Ok,
    onCancel: onCancel,
    height: 500,
    zIndex: 999
  }, /*#__PURE__*/React.createElement(TableWithBtn, props));
};

function mapStateToProps(_ref3) {
  var menu = _extends({}, _ref3);

  return {
    menu: menu
  };
}

export default connect(mapStateToProps)(Index);