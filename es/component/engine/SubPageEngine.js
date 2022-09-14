function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";

/*
 * @Description: 子页面渲染
 */
import { connect } from 'dva';
import PropertyHoc from './property/PropertyHoc';
import Engine from './Engine';
import ChangeHistoryHoc from './relationPage/ChangeHistoryHoc';
import InputHoc from './relationPage/InputHoc';
import customRelationPage from './relationPage/customRelationPage';
export default function (engine) {
  var namespace = engine.namespace,
      rType = engine.rType,
      params = engine.params,
      objectGrid = engine.objectGrid;

  var Cmp = function Cmp() {
    return /*#__PURE__*/React.createElement("div", null);
  };

  switch (rType) {
    case 'relationproperty':
      Cmp = PropertyHoc(engine)(Cmp);
      break;

    case 'relationpage':
    case 'classRelationpage':
      engine.faceType = 2;
      engine.relationType = 3;
      Cmp = Engine(engine);
      break;

    case 'relationqueryview':
      var _ref = params || {},
          _ref$outreach = _ref.outreach,
          outreach = _ref$outreach === void 0 ? [] : _ref$outreach;

      outreach.sort(function (a, b) {
        return a.index - b.index;
      });
      var gridFieldList = JSON.parse(JSON.stringify(objectGrid.gridFieldList));
      outreach.forEach(function (item) {
        item.isOutreach = true;
        gridFieldList.splice(item.index - 1, 0, item);
      });
      Cmp = Engine(_objectSpread(_objectSpread({}, engine), {}, {
        faceType: 2,
        objectGrid: _objectSpread(_objectSpread({}, objectGrid), {}, {
          gridFieldList: gridFieldList
        })
      }));
      break;

    case 'changeHistory':
      Cmp = ChangeHistoryHoc(Cmp);
      break;

    case 'input':
    case 'output':
      Cmp = InputHoc(engine)(Cmp);
      break;

    case 'processDetail':
      Cmp = customRelationPage(engine)(Cmp);
      break;

    default:
  }

  function mapStateToProps(state) {
    return {
      model: state[namespace]
    };
  }

  return connect(mapStateToProps)(Cmp);
}