var _excluded = ["dispatch", "preview"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect } from 'react';
import DragModal from '../../../common/drag/DragModal';
import { connect } from 'dva';
import TableWithBtn from '../../../common/table/TableWithBtn';
import language from '@/locale/language';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.tableConfig.objectGrid,
    fields = _language$configPlatf2.fields,
    title = _language$configPlatf2.title;

var GridPreview = function GridPreview(_ref) {
  var dispatch = _ref.dispatch,
      preview = _ref.preview,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: buttons.preview + title
  }, restProps, {
    footer: true,
    onCancel: preview
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(TableWithBtn, restProps)));
};

export default connect()(GridPreview);