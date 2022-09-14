/*
 * @Description: 报表高阶组件
 */
import React from 'react';
import { message } from 'antd'; // import { reportIP } from '../../../service/config'

import language from '@/locale/language';
var no_data_selected = language.message.report.no_data_selected;
export default (function (engine) {
  return function (_ref) {
    var _ref$model = _ref.model,
        model = _ref$model === void 0 ? {} : _ref$model;
    var title = engine.title,
        reportId = engine.reportId,
        isDynamic = engine.isDynamic,
        _engine$values = engine.values,
        values = _engine$values === void 0 ? [] : _engine$values;
    var _model$selectedRows = model.selectedRows,
        selectedRows = _model$selectedRows === void 0 ? [] : _model$selectedRows;
    var reportConfig = engine.reportConfig;
    var src = reportConfig.CONFIG_VALUE;

    if (reportId) {
      src += reportId;
    }

    if (values[0]) {
      values.forEach(function (item, index) {
        var name = item.name,
            key = item.key;

        if (isDynamic) {
          if (!selectedRows[0]) {
            message.warn(no_data_selected);
          } else {
            key = selectedRows[0][name];
          }
        }

        src += index ? "&".concat(name, "=").concat(key) : "?".concat(name, "=").concat(key);
      });
    }

    return /*#__PURE__*/React.createElement("iframe", {
      width: "100%",
      height: "100%",
      title: title,
      src: src
    });
  };
});