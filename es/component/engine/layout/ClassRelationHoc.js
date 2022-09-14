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
 * @Description: 分类视图页面 faceType: 4
 */
import React, { useState } from 'react';
import DragCmp from '../../common/drag/DragCmp';
import { Tree, Button, Tooltip, Alert } from 'antd';
import Search from '../../common/search/Search';
import { ergodicRoot, generatorTableKey } from '../../../utils/utils';
import { SyncOutlined, NodeIndexOutlined } from '@ant-design/icons';
import { showContextMenu } from '../../../utils/contextMenuFunc';
import MoveNodeForm from '../property/MoveNodeForm';
import language from '../../../locale/language';
import VirtualTree from '../../common/tree/VirtualTree';
var _language$common = language.common,
    refresh = _language$common.refresh,
    move_node = _language$common.move_node,
    classification_object = _language$common.classification_object;
var TreeNode = Tree.TreeNode;

var getParentKey = function getParentKey(key, tree) {
  var parentKey;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.children) {
      if (node.children.some(function (item) {
        return item.ID === key;
      })) {
        parentKey = node.ID;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};

export default (function (engine) {
  return function (WrappedComponent) {
    var CAPTION = engine.CAPTION,
        objectMeta = engine.objectMeta,
        namespace = engine.namespace,
        classNodeMeta = engine.classNodeMeta;
    var rootNode = {
      NO: '0',
      DEL: 0,
      PID: '0',
      ID: '0',
      STATE: 1,
      HKDT_OBJECT: 'SYS_CLASSNODE',
      OBJECTNO: objectMeta.objectNo,
      NAME: "".concat(CAPTION).concat(classification_object)
    };
    return function (props) {
      var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1];

      var _useState3 = useState(''),
          _useState4 = _slicedToArray(_useState3, 2),
          searchVal = _useState4[0],
          setSearchVal = _useState4[1];

      var _useState5 = useState(['0']),
          _useState6 = _slicedToArray(_useState5, 2),
          expandedKeys = _useState6[0],
          setExpandedKeys = _useState6[1];

      var _useState7 = useState(false),
          _useState8 = _slicedToArray(_useState7, 2),
          autoExpandParent = _useState8[0],
          setExpandedParent = _useState8[1];

      var _useState9 = useState(null),
          _useState10 = _slicedToArray(_useState9, 2),
          nodeData = _useState10[0],
          setNodeData = _useState10[1];

      var model = props.model,
          dispatch = props.dispatch;
      var dataList = model.dataList,
          panes = model.panes,
          selectedRowKeys = model.selectedRowKeys,
          _model$params = model.params,
          params = _model$params === void 0 ? {} : _model$params,
          selectedRows = model.selectedRows;
      var classObjectNo = params.classObjectNo,
          objectNo = params.objectNo,
          classNodeObjectNo = params.classNodeObjectNo,
          sortFields = params.sortFields; // let subNamespace = `${objectMeta.objectID}`

      var subNamespace = namespace + "-0";

      var onSelect = function onSelect(selectedKeys, e) {
        var selectedNode = JSON.parse(JSON.stringify(e.node.dataRef));
        if (selectedNode.children) delete selectedNode.children;
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            selectedRowKeys: [selectedNode.ID],
            selectedRows: [selectedNode]
          }
        });
        dispatch({
          type: "".concat(subNamespace, "/packet"),
          payload: {
            selectedRowKeys: [],
            selectedRows: [],
            showTab: false
          }
        }); // if (!selectedNode.ID) return

        dispatch({
          type: 'common/queryClassObjectData',
          payload: {
            classObjectNo: classObjectNo,
            objectNo: objectNo,
            classNodeObjectNo: classNodeObjectNo,
            sortFields: sortFields,
            classNodeData: selectedNode,
            namespace: subNamespace,
            moveNodeData: moveNodeData
          }
        });
      };

      var onRightClick = function onRightClick(_ref) {
        var event = _ref.event,
            node = _ref.node;
        var _node$props = node.props,
            dataRef = _node$props.dataRef,
            eventKey = _node$props.eventKey; // if (eventKey === '0') return

        var pageX = event.pageX,
            pageY = event.pageY;
        var selectedNode = JSON.parse(JSON.stringify(dataRef));

        if (selectedRowKeys[0] !== eventKey) {
          onSelect([eventKey], {
            node: node
          });
          if (selectedNode.children) delete selectedNode.children;
          model.selectedRows = [selectedNode];
          model.selectedRowKeys = [eventKey];
        }

        showContextMenu({
          left: pageX,
          top: pageY,
          model: model,
          engine: classNodeMeta,
          objectNo: objectNo,
          hData: [selectedNode]
        });
      };

      var loop = function loop(data) {
        return data.map(function (item) {
          var NAME = item.NAME,
              ID = item.ID,
              ENAME = item.ENAME;

          if (NAME || ENAME) {
            var NAMEPRO = localStorage.getItem('AcceptLanguage') === 'en-US' ? ENAME || NAME : NAME || ENAME;
            var index = NAMEPRO.indexOf(searchVal);
            var beforeStr = NAMEPRO.substr(0, index);
            var afterStr = NAMEPRO.substr(index + searchVal.length);
            var title = index > -1 ? /*#__PURE__*/React.createElement("span", null, beforeStr, /*#__PURE__*/React.createElement("span", {
              style: {
                color: '#f50'
              }
            }, searchVal), afterStr) : /*#__PURE__*/React.createElement("span", null, NAMEPRO);
            var _props = {
              key: ID,
              title: title,
              dataRef: item
            };

            if (item.children) {
              return /*#__PURE__*/React.createElement(TreeNode, _props, loop(item.children));
            }

            return /*#__PURE__*/React.createElement(TreeNode, _props);
          }
        });
      };

      var onSearch = function onSearch(value) {
        if (!model.INITDATA) {
          var data = _objectSpread({}, model);

          data.objectNo = classNodeObjectNo;
          dispatch({
            type: 'common/queryClassNodeData',
            payload: {
              objectNo: objectNo,
              namespace: namespace,
              classNodeObjectNo: classNodeObjectNo
            }
          });

          if (model.modelData.objectMeta) {
            data.objectBNameSpace = namespace + "-0";
            dispatch({
              type: 'popup/loadSubpage',
              payload: {
                objectRelationPage: [{
                  relationPageSign: _objectSpread(_objectSpread({}, model.modelData.objectMeta), {}, {
                    params: params
                  }),
                  rType: 'classRelationpage',
                  id: model.modelData.objectMeta.objectID,
                  supQuery: model.modelData.supQuery,
                  objectNo: objectNo
                }],
                objectANamespace: namespace,
                objectA: objectNo
              }
            });
          }

          dispatch({
            type: "".concat(namespace, "/packet"),
            payload: data
          });
        }

        var expandedKeys = dataList && dataList.map(function (item) {
          if (item.NAME == null) {
            return null;
          } else if (item.NAME.indexOf(value) > -1) {
            var list = ergodicRoot(dataList);
            return getParentKey(item.ID, list);
          }

          return null;
        }).filter(function (item, i, self) {
          return item && self.indexOf(item) === i;
        });
        setSearchVal(value);
        setExpandedParent(true);
        setExpandedKeys(expandedKeys);
      };

      var onExpand = function onExpand(expandedKeys) {
        setExpandedKeys(expandedKeys);
        setExpandedParent(false);
      };

      var moveNodeData = function moveNodeData(rows) {
        setNodeData(rows);
        setVisible(true);
      };

      var moveNode = function moveNode() {
        setNodeData(null);
        setVisible(true);
      };

      var onExpandAllNodes = function onExpandAllNodes(expand) {
        expand ? setExpandedKeys((dataList || []).concat([rootNode]).map(function (i) {
          return i.ID;
        })) : setExpandedKeys([]);
      };

      return /*#__PURE__*/React.createElement("div", {
        className: "flex-x"
      }, /*#__PURE__*/React.createElement(DragCmp, {
        enable: {
          right: true
        },
        showTab: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex-y"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/React.createElement(Search, {
        onSearch: onSearch
      }), /*#__PURE__*/React.createElement(Tooltip, {
        title: move_node
      }, /*#__PURE__*/React.createElement(Button, {
        onClick: moveNode,
        disabled: !selectedRowKeys[0] || selectedRowKeys[0] === '0',
        style: {
          marginLeft: '5px'
        },
        type: "primary",
        icon: /*#__PURE__*/React.createElement(NodeIndexOutlined, null)
      })), /*#__PURE__*/React.createElement(Tooltip, {
        title: refresh
      }, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        icon: /*#__PURE__*/React.createElement(SyncOutlined, null)
      }))), /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-y"
      }, /*#__PURE__*/React.createElement(VirtualTree, {
        onSelect: onSelect,
        onRightClick: onRightClick,
        selectedKeys: selectedRowKeys,
        onExpand: onExpand,
        expandedKeys: [].concat(_toConsumableArray(expandedKeys), ['0']),
        autoExpandParent: autoExpandParent,
        data: loop([_objectSpread(_objectSpread({}, rootNode), {}, {
          children: ergodicRoot(generatorTableKey(dataList || []))
        })]),
        onExpandAllNodes: onExpandAllNodes
      })))), panes[0] && /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-x"
      }, panes[0].Cmp), /*#__PURE__*/React.createElement(WrappedComponent, props), /*#__PURE__*/React.createElement(MoveNodeForm, {
        visible: visible,
        dataList: dataList,
        rootNode: rootNode,
        onCancel: function onCancel() {
          return setVisible(false);
        },
        selectedRows: selectedRows,
        namespace: namespace,
        nodeData: nodeData,
        subNamespace: subNamespace,
        params: params
      }));
    };
  };
});