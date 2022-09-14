import { getDvaApp } from 'umi';
/* 跳转光伏追溯链 */

export var toGFTrackPage = function toGFTrackPage(record, type) {
  var dva = getDvaApp();

  dva._store.dispatch({
    type: 'tab/addTab',
    payload: {
      namespace: 'BatchNodeTraceability',
      record: {
        ENNAME: 'Batch Node Traceability',
        FACETYPE: 0,
        ICON: 'pull-request',
        ID: 2561090207854657,
        INITDATA: true,
        NAME: '单晶方棒产品追溯链',
        NO: 'BatchNodeTraceability',
        PID: 1322701760276428
      }
    }
  });
  /* 将批次信息传到节点追溯页面 */


  dva._store.dispatch({
    type: 'QualityNodeCmp/packet',
    payload: {
      queryItem: record,
      queryType: type
    }
  });
};
/* 跳转新能源追溯链 */

export var toXNYTrackPage = function toXNYTrackPage(record, type) {
  var dva = getDvaApp();

  dva._store.dispatch({
    type: 'tab/addTab',
    payload: {
      namespace: 'NewEnergyBatchNodeTrace',
      record: record
    }
  });
  /* 将批次信息传到节点追溯页面 */


  dva._store.dispatch({
    type: 'newEnergyQualityNodeCmp/packet',
    payload: {
      queryItem: record,
      queryType: type
    }
  });
};