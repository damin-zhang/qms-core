import React from 'react';
import { Table, Button } from 'antd';
import ProcessActinst from '../../../pages/activiti/activitiCommon/ProcessActinst';
import ProcessActivityPng from '../../../pages/activiti/activitiCommon/ProcessActivityPng';
import ProcessOpinion from '../../../pages/activiti/activitiCommon/ProcessOpinion';
import TableWithBtn from '../../common/table/TableWithBtn';
import language from '@/locale/language';
var buttons = language.activiti.processState.buttons;

var ActRunProcessCmp = function ActRunProcessCmp(_ref) {
  var list = _ref.list,
      columns = _ref.columns,
      paging = _ref.paging,
      visibleRunPro = _ref.visibleRunPro,
      closeRunPro = _ref.closeRunPro,
      visibleCancellation = _ref.visibleCancellation,
      cancellationModel = _ref.cancellationModel,
      onSearch = _ref.onSearch,
      visibleDetails = _ref.visibleDetails,
      dispatch = _ref.dispatch,
      PBList = _ref.PBList,
      PNList = _ref.PNList;
  var propTable = {
    columns: columns,
    dataList: list,
    paging: paging,
    onSearch: onSearch
  };
  var detailProps = {
    hData: list,
    visible: visibleDetails,
    PBList: PBList,
    PNList: PNList,
    dispatch: dispatch
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement(TableWithBtn, propTable), visibleRunPro && /*#__PURE__*/React.createElement(ProcessActivityPng, {
    visible: visibleRunPro,
    onCancel: closeRunPro
  }), /*#__PURE__*/React.createElement(ProcessOpinion, {
    visible: visibleCancellation,
    cancel: cancellationModel
  }));
};

export default ActRunProcessCmp;