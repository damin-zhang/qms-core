"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _contextMenuFunc = require("../../../utils/contextMenuFunc");

var _index = _interopRequireDefault(require("../button/index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 变更历史
 */
var _default = function _default(_ref) {
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
      (0, _contextMenuFunc.showContextMenu)({
        left: clientX,
        top: clientY,
        model: model,
        engine: engine,
        hData: model.selectedRows
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _index.default.cardContainer
  }, dataList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: item.ID,
      className: _index.default.fileCard,
      onContextMenu: function onContextMenu(e) {
        return _onContextMenu(e, item);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _index.default.cardLeft
    }, item.IMAGE64 ? /*#__PURE__*/_react.default.createElement("img", {
      alt: item.FNAME,
      className: _index.default.fileImg,
      src: "data:image/*;base64,".concat(item.IMAGE64),
      onClick: openImg("data:image/*;base64,".concat(item.IMAGE64), item.FNAME)
    }) : /*#__PURE__*/_react.default.createElement(_antd.Empty, {
      image: _antd.Empty.PRESENTED_IMAGE_SIMPLE
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: _index.default.cardRight
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: _index.default.fileTitle
    }, item.FNAME), /*#__PURE__*/_react.default.createElement("div", {
      className: _index.default.fileRemark
    }, item.REMARK)));
  }));
};

exports.default = _default;