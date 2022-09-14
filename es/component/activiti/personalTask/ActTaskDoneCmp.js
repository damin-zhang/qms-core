import React from 'react';
import TableWithBtn from '../../common/table/TableWithBtn';
import ProcessActinst from '../../../pages/activiti/activitiCommon/ProcessActinst';
import language from '@/locale/language';
import ProcessActivityPng from '../../../pages/activiti/activitiCommon/ProcessActivityPng';
var buttons = language.activiti.processState.buttons;

var ActTaskDoneCmp = function ActTaskDoneCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      rowSelection = _ref.rowSelection,
      visibleDonePro = _ref.visibleDonePro,
      closeDonePro = _ref.closeDonePro,
      onSearch = _ref.onSearch,
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
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), visibleDonePro && /*#__PURE__*/React.createElement(ProcessActivityPng, {
    visible: visibleDonePro,
    onCancel: closeDonePro
  }), /*#__PURE__*/React.createElement(ProcessActinst, null));
};

export default ActTaskDoneCmp;