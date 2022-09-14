import React from 'react';
import TableWithBtn from '../../common/table/TableWithBtn';
import ProcessDetails from '../../../pages/activiti/activitiCommon/ProcessActinst';
import ProcessActivityPng from '../../../pages/activiti/activitiCommon/ProcessActivityPng';
import language from '@/locale/language';
var buttons = language.activiti.processState.buttons;

var ActMyProcessCmp = function ActMyProcessCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      rowSelection = _ref.rowSelection,
      visibleMyPro = _ref.visibleMyPro,
      closeMyPro = _ref.closeMyPro,
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
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), visibleMyPro && /*#__PURE__*/React.createElement(ProcessActivityPng, {
    visible: visibleMyPro,
    onCancel: closeMyPro
  }), /*#__PURE__*/React.createElement(ProcessDetails, null));
};

export default ActMyProcessCmp;