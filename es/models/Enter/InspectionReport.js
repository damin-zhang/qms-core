function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { message } from 'antd';
import { commonApi } from '../../service/applicationApi';
export default {
  namespace: 'InspectionReport',
  state: {
    dataList: []
  },
  reducers: {
    packet: function packet(state, _ref) {
      var payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    initPacket: function initPacket(state, _ref2) {
      var _ref2$payload = _ref2.payload,
          dataList = _ref2$payload.dataList,
          newRowData = _ref2$payload.newRowData;
      var formInitValue = {};
      dataList = dataList.map(function (item) {
        var InspectionItemResult = [];
        var _InspectionItemResult = [];

        for (var i = 0; i < item.InspectionItem.SQ; i++) {
          InspectionItemResult[i] = null;
          _InspectionItemResult[i] = null;
        }

        item.InspectionItemResult.forEach(function (item) {
          if (!item) return;
          InspectionItemResult[item.NO - 1] = item;
          _InspectionItemResult[item.NO - 1] = item;
        });
        formInitValue[item.InspectionItem.ID] = {
          InspectionItem: _objectSpread(_objectSpread({}, item.InspectionItem), {}, {
            DEFECT_TYPE: item.InspectionItem.DEFECT_CODE
          }),
          InspectionItemResult: InspectionItemResult
        };
        return {
          InspectionItem: item.InspectionItem,
          InspectionItemResult: _InspectionItemResult
        };
      });
      var checklistTitle = {};
      var P_NUM_LIST = newRowData.P_NUM_LIST || '{}';
      P_NUM_LIST = JSON.parse(P_NUM_LIST);
      var maxInspectionQty = Math.max.apply(Math, dataList.map(function (item) {
        return !isNaN(Number(item.InspectionItem.TV)) && item.InspectionItem.SQ;
      }));

      for (var i = 0; i < maxInspectionQty; i++) {
        checklistTitle[i] = P_NUM_LIST[i] || i + 1;
      }

      var _payload = {
        dataList: dataList,
        newRowData: newRowData,
        checklistTitle: checklistTitle
      };
      return _objectSpread({}, _payload);
    }
  },
  effects: {}
};