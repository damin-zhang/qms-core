/*
 * @Description: 自动分类视图-视图结构树
 */
import React from 'react';
import { connect } from 'dva';
import { Button, Tree } from 'antd';
import { confirm, ergodicRoot, systemErgodicRoot } from '../../../utils/utils';
import DragCmp from '../../common/drag/DragCmp';
import ViewStructureForm from './ViewStructureForm';
import language from '@/locale/language';
var common = language.common,
    buttons = language.configPlatform.buttons;
var TreeNode = Tree.TreeNode;

var renderTreeNodes = function renderTreeNodes(data) {
  return data.map(function (item) {
    if (item.children) {
      return /*#__PURE__*/React.createElement(TreeNode, {
        title: item.NAME,
        key: item.ID,
        dataRef: item
      }, renderTreeNodes(item.children));
    }

    return /*#__PURE__*/React.createElement(TreeNode, {
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
      confirm({
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
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(DragCmp, {
    enable: {
      right: true
    },
    showTab: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: !(enable && ID),
    onClick: createNode
  }, buttons.create), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    disabled: !(enable && ID && PID2 !== '0'),
    onClick: del(selectedRows)
  }, buttons.delete), /*#__PURE__*/React.createElement(Tree, {
    onSelect: onSelect,
    selectedKeys: selectedRowKeys
  }, renderTreeNodes(systemErgodicRoot(dataList, '0', 'PID', 'ID'))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-x"
  }, /*#__PURE__*/React.createElement("div", {
    className: "full"
  }, /*#__PURE__*/React.createElement(ViewStructureForm, formProps))));
};

function mapStateToProps(_ref3) {
  var viewStructure = _ref3.viewStructure,
      isModeling = _ref3.user.isModeling;
  return {
    viewStructure: viewStructure,
    isModeling: isModeling
  };
}

export default connect(mapStateToProps)(ViewStructureCmp);