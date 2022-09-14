"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _utils = require("../../../utils/utils");

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _ViewStructureForm = _interopRequireDefault(require("./ViewStructureForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 自动分类视图-视图结构树
 */
var common = _language.default.common,
    buttons = _language.default.configPlatform.buttons;
var TreeNode = _antd.Tree.TreeNode;

var renderTreeNodes = function renderTreeNodes(data) {
  return data.map(function (item) {
    if (item.children) {
      return /*#__PURE__*/_react.default.createElement(TreeNode, {
        title: item.NAME,
        key: item.ID,
        dataRef: item
      }, renderTreeNodes(item.children));
    }

    return /*#__PURE__*/_react.default.createElement(TreeNode, {
      key: item.ID,
      title: item.NAME,
      dataRef: item
    });
  });
};

var ViewStructureCmp = function ViewStructureCmp(_ref) {
  var viewStructure = _ref.viewStructure,
      dispatch = _ref.dispatch;
  var selectedRowKeys = viewStructure.selectedRowKeys,
      dataList = viewStructure.dataList,
      selectedRows = viewStructure.selectedRows,
      namespace = viewStructure.namespace,
      PID = viewStructure.PID,
      enable = viewStructure.enable;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID,
      PID2 = _ref2.PID;

  var onSelect = function onSelect(selectedKeys, e) {
    var selectedNode = JSON.parse(JSON.stringify(e.node.dataRef));
    if (selectedNode.children) delete selectedNode.children;
    dispatch({
      type: 'viewStructure/packet',
      payload: {
        selectedRowKeys: selectedKeys,
        selectedRows: [selectedNode]
      }
    });
  };

  var createNode = function createNode() {
    var values = {
      NO: 'default',
      NAME: '节点'
    };
    dispatch({
      type: 'commonConfig/editItem',
      payload: {
        values: values,
        OBJECTID: PID,
        PID: selectedRows[0].ID,
        STATE: dataList[0].STATE,
        namespace: namespace,
        record: {}
      }
    });
  };

  var del = function del(rows) {
    return function () {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: function onOk() {
          dispatch({
            type: 'commonConfig/delItem',
            payload: {
              rows: rows,
              namespace: namespace,
              PID: PID
            }
          });
        }
      });
    };
  };

  var formProps = {
    namespace: namespace,
    record: selectedRows[0] || {},
    enable: enable && ID,
    PID: PID
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      right: true
    },
    showTab: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "full"
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(enable && ID),
    onClick: createNode
  }, buttons.create), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    disabled: !(enable && ID && PID2 !== '0'),
    onClick: del(selectedRows)
  }, buttons.delete), /*#__PURE__*/_react.default.createElement(_antd.Tree, {
    onSelect: onSelect,
    selectedKeys: selectedRowKeys
  }, renderTreeNodes((0, _utils.systemErgodicRoot)(dataList, '0', 'PID', 'ID'))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-x"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "full"
  }, /*#__PURE__*/_react.default.createElement(_ViewStructureForm.default, formProps))));
};

function mapStateToProps(_ref3) {
  var viewStructure = _ref3.viewStructure,
      isModeling = _ref3.user.isModeling;
  return {
    viewStructure: viewStructure,
    isModeling: isModeling
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(ViewStructureCmp);

exports.default = _default;