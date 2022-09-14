// 关联页流程明细
import React from 'react';
import ProcessDetail from './ProcessDetail';
export default (function (engine) {
  return function (customRelationPage) {
    var Cmp = function Cmp(_ref) {
      var _ref$model = _ref.model,
          model = _ref$model === void 0 ? {} : _ref$model;
      var dataList = model.dataList;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProcessDetail, {
        dataList: dataList
      }));
    };

    return Cmp;
  };
});