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

var _contextMenuFunc = require("../../../utils/contextMenuFunc");

var _MoveNodeForm = _interopRequireDefault(require("../property/MoveNodeForm"));

var _language = _interopRequireDefault(require("../../../locale/language"));

var _VirtualTree = _interopRequireDefault(require("../../common/tree/VirtualTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var _language$common = _language.default.common,
    refresh = _language$common.refresh,
    move_node = _language$common.move_node,
    classification_object = _language$common.classification_object;
var TreeNode = _antd.Tree.TreeNode;

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

var _default = function _default(engine) {
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
      var _useState = (0, _react.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1];

      var _useState3 = (0, _react.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          searchVal = _useState4[0],
          setSearchVal = _useState4[1];

      var _useState5 = (0, _react.useState)(['0']),
          _useState6 = _slicedToArray(_useState5, 2),
          expandedKeys = _useState6[0],
          setExpandedKeys = _useState6[1];

      var _useState7 = (0, _react.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          autoExpandParent = _useState8[0],
          setExpandedParent = _useState8[1];

      var _useState9 = (0, _react.useState)(null),
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

        (0, _contextMenuFunc.showContextMenu)({
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
            var title = index > -1 ? /*#__PURE__*/_react.default.createElement("span", null, beforeStr, /*#__PURE__*/_react.default.createElement("span", {
              style: {
                color: '#f50'
              }
            }, searchVal), afterStr) : /*#__PURE__*/_react.default.createElement("span", null, NAMEPRO);
            var _props = {
              key: ID,
              title: title,
              dataRef: item
            };

            if (item.children) {
              return /*#__PURE__*/_react.default.createElement(TreeNode, _props, loop(item.children));
            }

            return /*#__PURE__*/_react.default.createElement(TreeNode, _props);
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
            var list = (0, _utils.ergodicRoot)(dataList);
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
        title: move_node
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        onClick: moveNode,
        disabled: !selectedRowKeys[0] || selectedRowKeys[0] === '0',
        style: {
          marginLeft: '5px'
        },
        type: "primary",
        icon: /*#__PURE__*/_react.default.createElement(_icons.NodeIndexOutlined, null)
      })), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: refresh
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        icon: /*#__PURE__*/_react.default.createElement(_icons.SyncOutlined, null)
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-y"
      }, /*#__PURE__*/_react.default.createElement(_VirtualTree.default, {
        onSelect: onSelect,
        onRightClick: onRightClick,
        selectedKeys: selectedRowKeys,
        onExpand: onExpand,
        expandedKeys: [].concat(_toConsumableArray(expandedKeys), ['0']),
        autoExpandParent: autoExpandParent,
        data: loop([_objectSpread(_objectSpread({}, rootNode), {}, {
          children: (0, _utils.ergodicRoot)((0, _utils.generatorTableKey)(dataList || []))
        })]),
        onExpandAllNodes: onExpandAllNodes
      })))), panes[0] && /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-x"
      }, panes[0].Cmp), /*#__PURE__*/_react.default.createElement(WrappedComponent, props), /*#__PURE__*/_react.default.createElement(_MoveNodeForm.default, {
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
};

exports.default = _default;