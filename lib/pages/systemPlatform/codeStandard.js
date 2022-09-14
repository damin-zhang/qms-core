"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _CodeStandardCmp = _interopRequireDefault(require("../../component/systemPlatform/codeStandard/CodeStandardCmp"));

var _antd = require("antd");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 业务代码 */
var _language$systemPlatf = _language.default.systemPlatform.codeStandard,
    msg1 = _language$systemPlatf.msg1,
    msg2 = _language$systemPlatf.msg2,
    msg6 = _language$systemPlatf.msg6,
    buttons = _language$systemPlatf.buttons;

var CodeStandard = function CodeStandard(_ref) {
  var dispatch = _ref.dispatch,
      CodeStandard = _ref.CodeStandard;
  var _CodeStandard$list = CodeStandard.list,
      list = _CodeStandard$list === void 0 ? [] : _CodeStandard$list,
      _CodeStandard$record = CodeStandard.record,
      record = _CodeStandard$record === void 0 ? {} : _CodeStandard$record,
      visible = CodeStandard.visible,
      _CodeStandard$createT = CodeStandard.createType,
      createType = _CodeStandard$createT === void 0 ? '' : _CodeStandard$createT,
      _CodeStandard$objectL = CodeStandard.objectList,
      objectList = _CodeStandard$objectL === void 0 ? [] : _CodeStandard$objectL,
      selectRow = CodeStandard.selectRow,
      parentKeyA = CodeStandard.parentKeyA;

  var showModel = function showModel(val) {
    if (val === 0) {
      dispatch({
        type: 'CodeStandard/showModal',
        payload: {
          record: {
            pid: '0'
          },
          createType: val
        }
      });
    } else if (val === 1) {
      if (selectRow && selectRow.dataType === 0 || selectRow && selectRow.dataType === 1) {
        dispatch({
          type: 'CodeStandard/showModal',
          payload: {
            record: {
              object: selectRow.object,
              pid: selectRow.id
            },
            createType: val
          }
        });
      } else {
        _antd.message.warning(msg1);
      }
    } else if (val === 2) {
      if (selectRow && selectRow.dataType === 1 || selectRow && selectRow.dataType === 0) {
        dispatch({
          type: 'CodeStandard/showModal',
          payload: {
            record: {
              object: selectRow.object,
              pid: selectRow.id
            },
            createType: val
          }
        });
      } else {
        _antd.message.warning(msg1);
      }
    }
  };

  var deleteCode = function deleteCode() {
    if (selectRow) {
      _antd.Modal.confirm({
        title: buttons.delete,
        icon: /*#__PURE__*/_react.default.createElement(ExclamationCircleOutlined, null),
        content: msg6,
        onOk: function onOk() {
          dispatch({
            type: 'CodeStandard/deleteCode',
            payload: {
              selectRow: selectRow
            }
          });
        }
      });
    } else {
      _antd.message.warning(msg2);
    }
  };

  var editModel = function editModel() {
    if (selectRow) {
      dispatch({
        type: 'CodeStandard/showModal',
        payload: {
          record: selectRow,
          selectRow: selectRow,
          createType: selectRow.dataType
        }
      });
    } else {
      _antd.message.warning(msg2);
    }
  };

  var onCancel = function onCancel() {
    dispatch({
      type: 'CodeStandard/cancel'
    });
  };

  var onSelect = function onSelect(selectedKeys, e) {
    if (selectedKeys.length === 0) return;
    var dataRef = e.node.props.dataRef;
    var parentKeys = getParentKey(selectedKeys[0], list);
    parentKeys = parentKeys.reverse();
    var str = '';
    parentKeys.forEach(function (item, index) {
      if (index < parentKeys.length - 1) {
        str += item.prefix + item.connector;
      } else {
        str += item.prefix == null ? item.startCode : item.prefix + item.connector + item.startCode;
      }
    });
    dispatch({
      type: 'CodeStandard/selectRow',
      payload: {
        selectRow: dataRef
      }
    });
    dispatch({
      type: 'CodeStandard/update',
      payload: {
        parentKeyA: str.replace('-null', '')
      }
    });
  };

  var getParentKey = function getParentKey(key, tree) {
    var parentKeys = [];
    var id2node = new Map();

    for (var i = 0; i < tree.length; i++) {
      id2node.set(tree[i].id, tree[i]);
    }

    var currentNode = id2node.get(key);
    parentKeys.push(currentNode);

    if (currentNode.pid) {
      while (currentNode.pid !== '0') {
        currentNode = id2node.get(currentNode.pid);
        parentKeys.push(currentNode);
      }
    }

    parentKeys.splice(parentKeys.length - 1, 1);
    return parentKeys;
  };

  var props = {
    list: list,
    visible: visible,
    record: record,
    showModel: showModel,
    deleteCode: deleteCode,
    editModel: editModel,
    onCancel: onCancel,
    createType: createType,
    objectList: objectList,
    onSelect: onSelect,
    selectRow: selectRow,
    parentKeyA: parentKeyA
  };
  return /*#__PURE__*/_react.default.createElement(_CodeStandardCmp.default, props);
};

function mapStateToProps(_ref2) {
  var CodeStandard = _ref2.CodeStandard;
  return {
    CodeStandard: CodeStandard
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(CodeStandard);

exports.default = _default;