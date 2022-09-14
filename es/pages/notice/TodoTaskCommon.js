function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { connect } from 'dva';
import TodoTaskCommonCmp from '../../component/notice/TodoTaskCommonCmp';
import { generatorTableKey } from '../../utils/utils';

var TodoTaskCommon = function TodoTaskCommon(_ref) {
  var dispatch = _ref.dispatch,
      UpcomingTasks = _ref.UpcomingTasks;
  var _UpcomingTasks$notice = UpcomingTasks.noticeList,
      noticeList = _UpcomingTasks$notice === void 0 ? [] : _UpcomingTasks$notice,
      _UpcomingTasks$select = UpcomingTasks.selectedRowKey,
      selectedRowKey = _UpcomingTasks$select === void 0 ? [] : _UpcomingTasks$select,
      _UpcomingTasks$relati = UpcomingTasks.relationTabs,
      relationTabs = _UpcomingTasks$relati === void 0 ? [] : _UpcomingTasks$relati,
      _UpcomingTasks$showTa = UpcomingTasks.showTab,
      showTab = _UpcomingTasks$showTa === void 0 ? false : _UpcomingTasks$showTa;

  if (noticeList.length > 0) {
    noticeList = generatorTableKey(noticeList);
  }

  var onSelectChange = function onSelectChange(selectedRowKey, selectedRows) {
    dispatch({
      type: 'UpcomingTasks/update',
      payload: {
        selectedRowKey: selectedRowKey,
        selectedRows: selectedRows,
        showTab: true
      }
    });

    if (selectedRows && selectedRows.length) {
      dispatch({
        type: 'UpcomingTasks/getModel',
        payload: {
          selectedRows: selectedRows
        }
      });
    } else {
      dispatch({
        type: 'UpcomingTasks/update',
        payload: {
          selectedRowKey: [],
          selectedRows: [],
          showTab: false
        }
      });
    }
  }; //页面前面的选框


  var rowSelection = {
    type: 'checkbox',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKey
  };

  var props = _objectSpread({
    dispatch: dispatch,
    rowSelection: rowSelection,
    noticeList: noticeList,
    onSelectChange: onSelectChange,
    selectedRowKey: selectedRowKey,
    relationTabs: relationTabs
  }, UpcomingTasks);

  return /*#__PURE__*/React.createElement(TodoTaskCommonCmp, props);
}; //将model中state转为props


function mapStateToProps(_ref2) {
  var UpcomingTasks = _ref2.UpcomingTasks;
  return {
    UpcomingTasks: UpcomingTasks
  };
}

export default connect(mapStateToProps)(TodoTaskCommon);