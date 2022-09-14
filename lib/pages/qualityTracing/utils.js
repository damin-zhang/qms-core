"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toXNYTrackPage = exports.toGFTrackPage = void 0;

var _umi = require("umi");

/* 跳转光伏追溯链 */
var toGFTrackPage = function toGFTrackPage(record, type) {
  var dva = (0, _umi.getDvaApp)();

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


exports.toGFTrackPage = toGFTrackPage;

var toXNYTrackPage = function toXNYTrackPage(record, type) {
  var dva = (0, _umi.getDvaApp)();

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

exports.toXNYTrackPage = toXNYTrackPage;