import React from 'react';
import { Table } from 'antd';
import DragModal from '../../common/drag/DragModal';

var ActStartProcessCmp = function ActStartProcessCmp(_ref) {
  var actVisible = _ref.actVisible,
      actCancel = _ref.actCancel,
      list = _ref.list,
      columns = _ref.columns,
      pagination = _ref.pagination,
      changePicture = _ref.changePicture,
      visible = _ref.visible,
      pictureUrl = _ref.pictureUrl;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DragModal, {
    width: '1000',
    title: "\u9009\u62E9\u6D41\u7A0B",
    visible: actVisible,
    onCancel: actCancel
  }, /*#__PURE__*/React.createElement(Table, {
    bordered: true,
    dataSource: list,
    columns: columns,
    size: "small",
    pagination: pagination
  })), /*#__PURE__*/React.createElement(DragModal, {
    title: "\u6D41\u7A0B\u8BBE\u8BA1\u56FE",
    onCancel: changePicture,
    visible: visible
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "op",
    src: pictureUrl,
    frameBorder: "0",
    scrolling: "no",
    style: {
      width: '100%',
      height: 300,
      border: 0
    }
  })));
};

export default ActStartProcessCmp;