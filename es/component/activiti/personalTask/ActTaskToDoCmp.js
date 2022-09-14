import React from 'react';
import TableWithBtn from '../../common/table/TableWithBtn';
import ProcessActivityPng from '../../../pages/activiti/activitiCommon/ProcessActivityPng';
import ProcessActinst from '../../../pages/activiti/activitiCommon/ProcessActinst';
import language from '@/locale/language';
var buttons = language.activiti.processState.buttons;

var ActTaskToDoCmp = function ActTaskToDoCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      rowSelection = _ref.rowSelection,
      onSearch = _ref.onSearch,
      visibleToDoPro = _ref.visibleToDoPro,
      closeToDoPro = _ref.closeToDoPro,
      paging = _ref.paging;
  var tableProp = {
    columns: columns,
    dataList: list,
    rowSelection: rowSelection,
    onSearch: onSearch,
    paging: paging
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), /*#__PURE__*/React.createElement(ProcessActinst, null), visibleToDoPro && /*#__PURE__*/React.createElement(ProcessActivityPng, {
    visible: visibleToDoPro,
    onCancel: closeToDoPro
  }));
};

export default ActTaskToDoCmp;