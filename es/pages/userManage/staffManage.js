function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 员工管理
 */
import React, { useState } from 'react';
import { connect } from 'dva';
import { Tree, Upload, message, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import DragCmp from '../../component/common/drag/DragCmp';
import { systemErgodicRoot, generatorTableKey, showLoading } from '../../utils/utils';
import DepartmentForm from '../../component/userManage/staffManage/DepartmentForm';
import language from '../../locale/language';
import StaffManageCmp from '../../component/userManage/staffManage/StaffManageCmp';
import DragModal from '../../component/common/drag/DragModal';
import { commonApi } from '../../service/applicationApi';
import VirtualTree from '../../component/common/tree/VirtualTree';
import MoveNodeForm from '../../component/engine/property/MoveNodeForm';
import UserList from '../../component/userManage/staffManage/userListCmp';
import { ApartmentOutlined } from '@ant-design/icons';
var common = language.common;
var TreeNode = Tree.TreeNode;
var Dragger = Upload.Dragger;

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      dataList = _ref.dataList,
      dataList1 = _ref.dataList1,
      selectedRowKeys = _ref.selectedRowKeys,
      selectedRows = _ref.selectedRows,
      selectedRows1 = _ref.selectedRows1,
      namespace = _ref.namespace,
      visible = _ref.visible,
      _ref$moveNodeFormVisi = _ref.moveNodeFormVisible,
      moveNodeFormVisible = _ref$moveNodeFormVisi === void 0 ? false : _ref$moveNodeFormVisi,
      record = _ref.record,
      importType = _ref.importType;

  var _useState = useState(['0']),
      _useState2 = _slicedToArray(_useState, 2),
      expandedKeys = _useState2[0],
      setExpandedKeys = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      autoExpandParent = _useState4[0],
      setExpandedParent = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      dataImportModalVisible = _useState6[0],
      setsDataImportModalVisible = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      fileList = _useState8[0],
      setFileList = _useState8[1];

  if (dataList.length) {
    dataList.map(function (item) {
      if (item.pid === '0') {
        expandedKeys.unshift(item.id);
      }
    });
  }

  var onSelect = function onSelect(selectedKeys, e) {
    var selectedNode = JSON.parse(JSON.stringify(e.node.dataRef));
    if (selectedNode.children) delete selectedNode.children;
    dispatch({
      type: "".concat(namespace, "/packet"),
      payload: {
        selectedRowKeys: [selectedNode.id],
        selectedRows: [selectedNode],
        selectedRowKeys1: [],
        selectedRows1: [],
        showTab: false
      }
    });
    dispatch({
      type: "".concat(namespace, "/queryStaff"),
      payload: {
        deptId: selectedNode.pid === '0' ? 0 : selectedNode.id,
        page: 1,
        pageSize: 20
      }
    });
  };

  var loop = function loop(data) {
    if (!data || data.length === 0) return;
    return data.map(function (item) {
      var name = item.name,
          id = item.id,
          ename = item.ename;
      var NAMEPRO = localStorage.getItem('AcceptLanguage') === 'en-US' ? ename || name : name || ename;
      var title = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(ApartmentOutlined, {
        style: {
          margin: '0 10px'
        }
      }), NAMEPRO);
      var props = {
        key: id,
        title: title,
        dataRef: item
      };

      if (item.children) {
        return /*#__PURE__*/React.createElement(TreeNode, props, loop(item.children));
      }

      return /*#__PURE__*/React.createElement(TreeNode, props);
    });
  };

  var onExpand = function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
    setExpandedParent(false);
  };

  var onExpandAllNodes = function onExpandAllNodes(expand) {
    expand ? setExpandedKeys(generatorTableKey(dataList || []).map(function (i) {
      return i.id;
    })) : setExpandedKeys([]);
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      PID: selectedRows[0] ? selectedRows[0].id : '0'
    };
    return function () {
      dispatch({
        type: 'StaffManage/packet',
        payload: {
          visible: !visible,
          record: record
        }
      });
    };
  };

  var toogleMoveNodeModal = function toogleMoveNodeModal() {
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        moveNodeFormVisible: !moveNodeFormVisible
      }
    });
  };

  var updateStaffData = function updateStaffData() {
    toogleMoveNodeModal(); // const deptId = selectedRows && selectedRows.length && selectedRows[0].id
    // dispatch({ type: 'StaffManage/queryStaff', payload: { deptId: deptId, page: 1, pageSize: 20 } })
  };
  /**
   *
   * @param {string} importType 导入类型： department 为导入部门， staff 为导入员工
   */


  var openImportModal = function openImportModal(importType) {
    dispatch({
      type: 'StaffManage/packet',
      payload: {
        importType: importType
      }
    });
    setsDataImportModalVisible(true);
  }; // 点击导入弹窗ok


  var dataImport = function dataImport() {
    if (fileList.length) {
      var params = null;

      if (importType === 'staff') {
        params = {
          file: fileList,
          hData: selectedRows,
          objectNo: 'SDEPARTMENT',
          implclass: 'us.user.ImpotUserInfoMationEvent'
        };
      }

      showLoading();
      commonApi(params).then(function (res) {
        if (res) {
          message.info(res.hint);
          setsDataImportModalVisible(false); // 请求成功之后刷新页面

          dispatch({
            type: 'StaffManage/queryStaff',
            payload: {
              deptId: selectedRows[0].id,
              page: 1,
              pageSize: 20
            }
          });
        }
      }).catch(function (err) {// console.log(err)
      });
    }
  };

  var moveNodeFormProps = {
    namespace: namespace,
    visible: moveNodeFormVisible,
    dataList: dataList,
    selectedRows: selectedRows,
    selectedRows1: selectedRows1,
    type: 'staffManage',
    rootNode: _objectSpread(_objectSpread({}, dataList.length && dataList[0]), {}, {
      id: '0',
      name: '组织架构'
    }),
    onCancel: updateStaffData
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(DragCmp, {
    enable: {
      right: true
    },
    showTab: true,
    width: "25%"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-y",
    style: {
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/React.createElement(VirtualTree, {
    onSelect: onSelect,
    selectedKeys: selectedRowKeys,
    onExpand: onExpand,
    expandedKeys: _toConsumableArray(expandedKeys),
    autoExpandParent: autoExpandParent,
    onExpandAllNodes: onExpandAllNodes,
    data: loop(systemErgodicRoot(generatorTableKey(dataList || []), '0'), '0', 'treeNodePid', 'treeNodeId')
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow-x"
  }, selectedRows && /*#__PURE__*/React.createElement(UserList, {
    openImportModal: openImportModal,
    toogleMoveNodeModal: toogleMoveNodeModal
  })), record && record.id && /*#__PURE__*/React.createElement(DepartmentForm, {
    visible: visible,
    record: record,
    onCancel: toogleModal()
  }), /*#__PURE__*/React.createElement(MoveNodeForm, moveNodeFormProps), /*#__PURE__*/React.createElement(DragModal, {
    namespace: "dataImportModal",
    width: 700,
    minHeight: 160,
    title: importType === 'department' ? '导入部门' : '导入员工',
    visible: dataImportModalVisible,
    mask: true,
    onOk: dataImport,
    onCancel: function onCancel() {
      return setsDataImportModalVisible(false);
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dragger, {
    accept: ".xlsx,.xls,.xlsm",
    beforeUpload: function beforeUpload(file) {
      setFileList([].concat(_toConsumableArray(fileList), [file]));
      return false;
    },
    onRemove: function onRemove(file) {
      var index = fileList.indexOf(file);
      var newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ant-upload-drag-icon"
  }, /*#__PURE__*/React.createElement(InboxOutlined, null)), /*#__PURE__*/React.createElement("p", {
    className: "ant-upload-text"
  }, common.select_file_prompt1), /*#__PURE__*/React.createElement("p", {
    className: "ant-upload-hint"
  }, common.select_file_prompt2)))));
};

function mapStateToProps(_ref2) {
  var StaffManage = _ref2.StaffManage;
  return _objectSpread({}, StaffManage);
}

export default connect(mapStateToProps)(Index);