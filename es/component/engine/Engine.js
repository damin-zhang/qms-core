import React from "react";

/*
 * @Description: 根据faceType, 返回不同的页面
 */
import { connect } from 'dva';
import ButtonHoc from './button/ButtonHoc';
import TableHoc from './table/TableHoc';
import TabHoc from './tab/TabHoc';
import SingleHoc from './layout/SingleHoc';
import UpAndDownHoc from './layout/UpAndDownHoc';
import LeftAndRightHoc from './layout/LeftAndRightHoc';
import ClassRelationHoc from './layout/ClassRelationHoc';
import AutoClassHoc from './layout/AutoClassHoc';
import BrowseFiles from './relationPage/BrowseFiles';
import CustomTemplate from './layout/CustomTemplate';
import CalendarHoc from './calendar/CalendarHoc';
import ProcessDetailHoc from './relationPage/ProcessDetailHoc';
import EmbedThreePartyPage from './relationPage/EmbedThreePartyPage';
export default (function (engine) {
  var namespace = engine.namespace,
      faceType = engine.faceType;

  var Cmp = function Cmp() {
    return /*#__PURE__*/React.createElement("div", null);
  };

  if (faceType !== 4 && faceType !== 7 && faceType !== 'processDetail' && faceType !== 'embedThreePartyPage') {
    // 包裹按钮和搜索框
    Cmp = ButtonHoc(engine)(Cmp);
    if (faceType !== 'browseFiles' && faceType !== 22) // 包裹表格
      Cmp = TableHoc(engine)(Cmp);
  } // 根据faceType布局


  switch (faceType) {
    case 1:
      Cmp = SingleHoc(Cmp);
      break;

    case 2:
    case 21:
      Cmp = UpAndDownHoc(engine)(Cmp);
      break;

    case 3:
      Cmp = LeftAndRightHoc(Cmp);
      break;

    case 4:
      Cmp = ClassRelationHoc(engine)(Cmp);
      break;

    case 5:
      Cmp = UpAndDownHoc(engine)(Cmp);
      Cmp = AutoClassHoc(engine)(Cmp);
      break;

    case 7:
      Cmp = CalendarHoc(engine)(Cmp);
      break;

    case 22:
      Cmp = CustomTemplate(engine)(Cmp);
      break;

    case 'browseFiles':
      Cmp = BrowseFiles(engine)(Cmp);
      break;

    case 'processDetail':
      Cmp = ProcessDetailHoc(engine)(Cmp);
      break;

    case 'embedThreePartyPage':
      Cmp = EmbedThreePartyPage(engine)(Cmp);
      break;

    default:
      Cmp = SingleHoc(Cmp);
  } // 分区tab


  if (faceType === 1 || faceType === 2 || faceType === 3 || faceType === 7 || faceType === 21) {
    Cmp = TabHoc(engine)(Cmp);
  }

  function mapStateToProps(state) {
    return {
      model: state[namespace]
    };
  }

  return connect(mapStateToProps)(Cmp);
});