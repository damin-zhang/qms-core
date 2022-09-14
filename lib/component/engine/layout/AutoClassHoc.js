"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DragCmp = _interopRequireDefault(require("../../common/drag/DragCmp"));

var _antd = require("antd");

var _Search = _interopRequireDefault(require("../../common/search/Search"));

var _utils = require("../../../utils/utils");

var _icons = require("@ant-design/icons");

var _VirtualTree = _interopRequireDefault(require("../../common/tree/VirtualTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TreeNode = _antd.Tree.TreeNode;

var getParentKey = function getParentKey(key, tree) {
  var parentKey;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.children) {
      if (node.children.some(function (item) {
        return item.treeNodeId === key;
      })) {
        parentKey = node.treeNodeId;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};

var _default = function _default(engine) {
  return function (WrappedComponent) {
    var namespace = engine.namespace,
        relevanceNo = engine.relevanceNo,
        objectA = engine.objectA,
        pageId = engine.pageId;
    return function (props) {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          searchVal = _useState2[0],
          setSearchVal = _useState2[1];

      var _useState3 = (0, _react.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          expandedKeys = _useState4[0],
          setExpandedKeys = _useState4[1];

      var _useState5 = (0, _react.useState)(true),
          _useState6 = _slicedToArray(_useState5, 2),
          autoExpandParent = _useState6[0],
          setExpandedParent = _useState6[1];

      var model = props.model,
          dispatch = props.dispatch;
      var treeData = model.treeData,
          _model$params = model.params,
          params = _model$params === void 0 ? {} : _model$params,
          selectedNodeKeys = model.selectedNodeKeys;
      var viewNo = params.viewNo,
          tableName = params.tableName,
          objectNo = params.objectNo;

      var onSelect = function onSelect(selectedKeys, e) {
        var selectedNode = JSON.parse(JSON.stringify(e.node.dataRef));
        var loadDataSet = selectedNode.loadDataSet,
            children = selectedNode.children;
        if (children) delete selectedNode.children;
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            selectedNodeKeys: [selectedNode.treeNodeId],
            selectedNode: [selectedNode],
            selectedRowKeys: [],
            selectedRows: [],
            dataList: [],
            showTab: false
          }
        });
        if (!loadDataSet) return;
        dispatch({
          type: 'common/queryAutoClassData',
          payload: _objectSpread({
            classViewNodeData: selectedNode,
            relevanceNo: !objectA ? viewNo : relevanceNo,
            namespace: namespace
          }, params)
        });
      };

      var onRightClick = function onRightClick(_ref) {
        var event = _ref.event;
        event.preventDefault();
      };

      var refresh = function refresh() {
        dispatch({
          type: 'common/refreshAutoClassTree',
          payload: {
            viewNo: viewNo,
            tableName: tableName,
            objectNo: objectNo,
            namespace: namespace
          }
        });
      };

      var loop = function loop(data) {
        return data.map(function (item) {
          var _item$treeNodeData = item.treeNodeData,
              treeNodeData = _item$treeNodeData === void 0 ? '' : _item$treeNodeData,
              nodeDataTotal = item.nodeDataTotal,
              summary = item.summary,
              treeNodeId = item.treeNodeId,
              _item$no = item.no,
              no = _item$no === void 0 ? '' : _item$no;
          var TreePRO = localStorage.getItem('AcceptLanguage') === 'en-US' ? no || treeNodeData : treeNodeData || no;
          var index = TreePRO.indexOf(searchVal);
          var beforeStr = TreePRO.substr(0, index);
          var afterStr = TreePRO.substr(index + searchVal.length);
          var title = index > -1 ? /*#__PURE__*/_react.default.createElement("span", null, beforeStr, /*#__PURE__*/_react.default.createElement("span", {
            style: {
              color: '#f50'
            }
          }, searchVal), afterStr) : /*#__PURE__*/_react.default.createElement("span", null, TreePRO);
          if (summary && nodeDataTotal) title = /*#__PURE__*/_react.default.createElement("span", {
            style: {
              display: 'flex'
            }
          }, title, /*#__PURE__*/_react.default.createElement(_antd.Tag, {
            color: "green",
            style: {
              marginLeft: '5px'
            }
          }, nodeDataTotal));
          var props = {
            key: treeNodeId,
            title: title,
            dataRef: item
          };

          if (item.children) {
            return /*#__PURE__*/_react.default.createElement(TreeNode, props, loop(item.children));
          }

          return /*#__PURE__*/_react.default.createElement(TreeNode, props);
        });
      };

      var onSearch = function onSearch(value) {
        if (!model.INITDATA) {
          treeData = model.modelData.classViewNodeList;
          dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              treeData: model.modelData.classViewNodeList,
              dataList: []
            }
          });
        }

        var expandedKeys = treeData && treeData.map(function (item) {
          if (item.treeNodeData.indexOf(value) > -1) {
            var list = (0, _utils.systemErgodicRoot)(treeData, '0', 'treeNodePid', 'treeNodeId');
            return getParentKey(item.treeNodeId, list);
          }

          return null;
        }).filter(function (item, i, self) {
          return item && self.indexOf(item) === i;
        });
        setSearchVal(value);
        setExpandedKeys(expandedKeys);
        setExpandedParent(true);
      };

      var onExpand = function onExpand(expandedKeys) {
        setExpandedKeys(expandedKeys);
        setExpandedParent(false);
      };

      var onExpandAllNodes = function onExpandAllNodes(expand) {
        expand ? setExpandedKeys((treeData || []).map(function (i) {
          return i.treeNodeId;
        })) : setExpandedKeys([]);
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-x"
      }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
        enable: {
          right: true
        },
        showTab: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-y"
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react.default.createElement(_Search.default, {
        onSearch: onSearch
      }), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: "refresh"
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        onClick: refresh,
        style: {
          marginLeft: '5px'
        },
        type: "primary",
        icon: /*#__PURE__*/_react.default.createElement(_icons.SyncOutlined, null)
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-y"
      }, /*#__PURE__*/_react.default.createElement(_VirtualTree.default, {
        onSelect: onSelect,
        onRightClick: onRightClick,
        selectedKeys: selectedNodeKeys,
        onExpand: onExpand,
        expandedKeys: expandedKeys,
        autoExpandParent: autoExpandParent,
        onExpandAllNodes: onExpandAllNodes,
        data: loop((0, _utils.systemErgodicRoot)(treeData || [], '0', 'treeNodePid', 'treeNodeId'))
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-x"
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props)));
    };
  };
};

exports.default = _default;