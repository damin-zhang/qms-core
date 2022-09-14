import React from 'react';
import ProcessActinst from '../../../pages/activiti/activitiCommon/ProcessActinst';
import ProcessActivityPng from '../../../pages/activiti/activitiCommon/ProcessActivityPng';
import TableWithBtn from '../../common/table/TableWithBtn';
import language from '@/locale/language';
var buttons = language.activiti.processState.buttons;

var ActRunProcessCmp = function ActRunProcessCmp(_ref) {
  var list = _ref.list,
      paging = _ref.paging,
      columns = _ref.columns,
      visibleEndPro = _ref.visibleEndPro,
      closeEndPro = _ref.closeEndPro,
      onSearch = _ref.onSearch;
  var propTable = {
    columns: columns,
    dataList: list,
    paging: paging,
    onSearch: onSearch
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(TableWithBtn, propTable), visibleEndPro && /*#__PURE__*/React.createElement(ProcessActivityPng, {
    visible: visibleEndPro,
    onCancel: closeEndPro
  }), /*#__PURE__*/React.createElement(ProcessActinst, null));
};

export default ActRunProcessCmp;