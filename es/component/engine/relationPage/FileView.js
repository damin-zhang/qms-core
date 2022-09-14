import React from "react";

/*
 * @Description: 变更历史
 */
import { Empty } from 'antd';
import { showContextMenu } from '../../../utils/contextMenuFunc';
import styles from '../button/index.css';
export default (function (_ref) {
  var model = _ref.model,
      engine = _ref.engine,
      rowSelection = _ref.rowSelection;
  var _model$dataList = model.dataList,
      dataList = _model$dataList === void 0 ? [] : _model$dataList;

  var openImg = function openImg(url, name) {
    return function () {
      var img = new Image();
      img.src = url;
      img.style = 'max-width: 100%';
      var newWin = window.open('', '_blank');
      newWin.document.write(img.outerHTML);
      newWin.document.title = name;
      newWin.document.close();
    };
  };

  var _onContextMenu = function onContextMenu(e, item) {
    e.preventDefault();

    if (model && engine) {
      var clientX = e.clientX,
          clientY = e.clientY;
      var newRecord = JSON.parse(JSON.stringify(item));
      if (newRecord.children) delete newRecord.children;
      rowSelection.onChange([newRecord.key], [newRecord], true);
      model.selectedRows = [newRecord];
      model.selectedRowKeys = [newRecord.key];
      showContextMenu({
        left: clientX,
        top: clientY,
        model: model,
        engine: engine,
        hData: model.selectedRows
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.cardContainer
  }, dataList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.ID,
      className: styles.fileCard,
      onContextMenu: function onContextMenu(e) {
        return _onContextMenu(e, item);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.cardLeft
    }, item.IMAGE64 ? /*#__PURE__*/React.createElement("img", {
      alt: item.FNAME,
      className: styles.fileImg,
      src: "data:image/*;base64,".concat(item.IMAGE64),
      onClick: openImg("data:image/*;base64,".concat(item.IMAGE64), item.FNAME)
    }) : /*#__PURE__*/React.createElement(Empty, {
      image: Empty.PRESENTED_IMAGE_SIMPLE
    })), /*#__PURE__*/React.createElement("div", {
      className: styles.cardRight
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.fileTitle
    }, item.FNAME), /*#__PURE__*/React.createElement("div", {
      className: styles.fileRemark
    }, item.REMARK)));
  }));
});