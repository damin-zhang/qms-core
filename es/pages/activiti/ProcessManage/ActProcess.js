import React from 'react';
import { connect } from 'dva';
import ActProcessCmp from '../../../component/activiti/processManage/ActProcessCmp';

var ActProcess = function ActProcess(_ref) {
  var dispatch = _ref.dispatch,
      actProcess = _ref.actProcess;
  var visible = actProcess.visible,
      procdefId = actProcess.procdefId,
      _actProcess$objectNoL = actProcess.objectNoList,
      objectNoList = _actProcess$objectNoL === void 0 ? [] : _actProcess$objectNoL,
      _actProcess$list = actProcess.list,
      list = _actProcess$list === void 0 ? [] : _actProcess$list,
      _actProcess$grid = actProcess.grid,
      grid = _actProcess$grid === void 0 ? [] : _actProcess$grid,
      _actProcess$menu = actProcess.menu,
      menu = _actProcess$menu === void 0 ? [] : _actProcess$menu,
      _actProcess$property = actProcess.property,
      property = _actProcess$property === void 0 ? [] : _actProcess$property,
      selectedRows = actProcess.selectedRows; //流程图modal的关闭

  function onCancel() {
    dispatch({
      type: 'actProcess/onCancel'
    });
  } //鼠标移入查询数据


  var onMouseEnter = function onMouseEnter() {
    dispatch({
      type: 'actProcess/getItemNoList'
    });
  }; //切换选择项触发


  var handleChange = function handleChange(value) {
    dispatch({
      type: 'actProcess/getObiList',
      payload: {
        objectNo: value.key
      }
    });
  }; //获取选中的数据并启动流程


  var onOk = function onOk() {// console.log(selectedRows)
  };

  var props = {
    visible: visible,
    onCancel: onCancel,
    procdefId: procdefId,
    onMouseEnter: onMouseEnter,
    objectNoList: objectNoList,
    handleChange: handleChange,
    list: list,
    grid: grid,
    menu: menu,
    property: property,
    onOk: onOk
  };
  return /*#__PURE__*/React.createElement(ActProcessCmp, props);
};

function mapStateToProps(_ref2) {
  var actProcess = _ref2.actProcess;
  return {
    actProcess: actProcess
  };
}

export default connect(mapStateToProps)(ActProcess);