function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 分类视图移动节点
 */
import React, { useState, useEffect } from 'react';
import Modal from '../../common/drag/DragModal';
import { Tree, message, Button } from 'antd';
import { ergodicRoot, systemErgodicRoot } from '../../../utils/utils';
import { getDvaApp } from 'umi';
import language from '../../../locale/language';
var _language$common = language.common,
    move_node = _language$common.move_node,
    move_node_data = _language$common.move_node_data,
    please_select_node = _language$common.please_select_node,
    cannot_select_root_node = _language$common.cannot_select_root_node,
    cancel = _language$common.cancel,
    transfer = _language$common.transfer;
var TreeNode = Tree.TreeNode;

var loop = function loop(data) {
  return data.map(function (item) {
    if (item.children) {
      return /*#__PURE__*/React.createElement(TreeNode, {
        key: item.ID || item.id,
        title: item.NAME || item.name,
        dataRef: item
      }, loop(item.children));
    }

    return /*#__PURE__*/React.createElement(TreeNode, {
      key: item.ID || item.id,
      title: item.NAME || item.name,
      dataRef: item
    });
  });
};

export default (function (_ref) {
  var visible = _ref.visible,
      _ref$dataList = _ref.dataList,
      dataList = _ref$dataList === void 0 ? [] : _ref$dataList,
      onCancel = _ref.onCancel,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      _ref$selectedRows2 = _ref.selectedRows1,
      selectedRows1 = _ref$selectedRows2 === void 0 ? [] : _ref$selectedRows2,
      namespace = _ref.namespace,
      nodeData = _ref.nodeData,
      subNamespace = _ref.subNamespace,
      params = _ref.params,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      keys = _useState4[0],
      setKeys = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      rows = _useState6[0],
      setRows = _useState6[1];

  var _useState7 = useState(['1', '297EDFF872DA192F0172DA1E2AB00004']),
      _useState8 = _slicedToArray(_useState7, 2),
      expandedKeys = _useState8[0],
      setExpandedKeys = _useState8[1];

  useEffect(function () {
    if (visible) {
      setKeys([]);
      setRows([]);
      var newDataList = dataList;

      if (!nodeData) {
        if (type === 'navMenu') {
          newDataList = dataList.filter(function (item) {
            return item.FACETYPE === -1 && item.ID !== selectedRows[0].ID;
          });
        } else newDataList = dataList.filter(function (item) {
          return item.ID !== selectedRows[0].ID;
        });
      }

      if (type === 'departmentManage' || type === 'staffManage') {
        newDataList = dataList.filter(function (item) {
          return item.id !== selectedRows[0].id;
        });
      }

      setList(newDataList);
      if (selectedRows[0].children) delete selectedRows[0].children;
    }
  }, [visible, dataList, selectedRows, nodeData, type]);

  var onSelect = function onSelect(selectedKeys, e) {
    var selectedNode = JSON.parse(JSON.stringify(e.node.dataRef));

    if (type === 'departmentManage' || type === 'staffManage') {
      if (selectedNode.id === selectedRows[0].pid) {
        message.warning(cannot_select_root_node);
        return;
      }
    } else if (selectedNode.ID === selectedRows[0].PID) {
      message.warning(cannot_select_root_node);
      return;
    }

    if (selectedNode.children) delete selectedNode.children;
    setKeys(selectedKeys);
    setRows([selectedNode]);
  };

  var onExpand = function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
  };

  var onOk = function onOk() {
    if (keys.length === 0) {
      message.warning(please_select_node);
      return;
    }

    var dva = getDvaApp();

    if (type === 'navMenu') {
      dva._store.dispatch({
        type: "navMenu/moveNodeData",
        payload: {
          namespace: namespace,
          tableName: 'META_NAVIGATION',
          data: selectedRows[0],
          pid: Number(keys[0]),
          onCancel: onCancel,
          selectedRows: selectedRows
        }
      });

      visible = true;

      dva._store.dispatch({
        type: 'navMenu/query',
        payload: {
          namespace: namespace
        }
      });
    } else if (type === 'departmentManage') {
      dva._store.dispatch({
        type: "DepartmentManage/moveNodeData",
        payload: {
          hData: selectedRows[0],
          pid: keys[0],
          onCancel: onCancel
        }
      });
    } else if (type === 'staffManage') {
      dva._store.dispatch({
        type: "StaffManage/moveNodeData",
        payload: {
          hData: rows[0],
          users: selectedRows1,
          onCancel: onCancel,
          selectedRows: selectedRows
        }
      });
    } else {
      if (nodeData) {
        var classNodeObjectNo = params.classNodeObjectNo,
            classObjectNo = params.classObjectNo,
            objectNo = params.objectNo;

        dva._store.dispatch({
          type: "common/moveNodeData",
          payload: {
            namespace: subNamespace,
            objectNo: objectNo,
            hData: nodeData,
            classObjectNo: classObjectNo,
            classNodeObjectNo: classNodeObjectNo,
            classNodeData: rows[0],
            onCancel: onCancel
          }
        });
      } else {
        dva._store.dispatch({
          type: "common/moveNode",
          payload: {
            namespace: namespace,
            objectNo: 'SYS_CLASSNODE',
            hData: selectedRows,
            data: {
              PID: keys[0]
            },
            dataList: dataList,
            onCancel: onCancel
          }
        });
      }
    }
  };

  var getTitle = function getTitle(type, nodeData, selectedRows) {
    var title = '';
    title = type === 'staffManage' ? move_node_data : nodeData ? move_node_data : move_node;

    if (type !== 'staffManage') {
      if (selectedRows.length && selectedRows[0]) {
        title += ':';
        title += selectedRows[0].NAME || selectedRows[0].name;
      }
    }

    return title;
  };

  return /*#__PURE__*/React.createElement(Modal, {
    visible: visible,
    onCancel: onCancel,
    title: getTitle(type, nodeData, selectedRows),
    width: 450,
    height: 430,
    footer: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: onCancel
    }, cancel), /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      onClick: onOk
    }, transfer))]
  }, /*#__PURE__*/React.createElement(Tree, {
    onSelect: onSelect,
    onExpand: onExpand,
    selectedKeys: keys,
    expandedKeys: [].concat(_toConsumableArray(expandedKeys), ['1', '297EDFF872DA192F0172DA1E2AB00004'])
  }, type === 'departmentManage' || type === 'staffManage' ? loop(systemErgodicRoot(list || [])) : loop(ergodicRoot(list || []))));
});