"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _utils = require("../../utils/utils");

var _icons = require("@ant-design/icons");

var _index = _interopRequireDefault(require("./index.less"));

var _language = _interopRequireDefault(require("../../locale/language"));

var _excluded = ["dataSource", "targetKeys"],
    _excluded2 = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _language$common = _language.default.common,
    expandAllNodes = _language$common.expandAllNodes,
    collapseAllNodes = _language$common.collapseAllNodes,
    cancels = _language$common.cancel,
    ok = _language$common.ok;
var TreeNode = _antd.Tree.TreeNode;
var Search = _antd.Input.Search;

var getParentKey = function getParentKey(key, tree) {
  var parentKey;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];

    if (node.children) {
      if (node.children.some(function (item) {
        return item.id === key;
      })) {
        parentKey = node.id;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};

var getOpenKeys = function getOpenKeys(keys, tree) {
  var key = '';
  var pid = '';
  var openKeys = [];

  if (keys.length) {
    keys.forEach(function (item) {
      key = item;
      openKeys.push(key);

      while (pid !== '0') {
        for (var i = 0; i < tree.length; i++) {
          var node = tree[i];

          if (node.id === key) {
            pid = node.pid;
            key = node.pid;

            if (pid !== '0') {
              openKeys.indexOf('pid') < 0 && openKeys.push(pid);
            }

            break;
          }
        }
      }
    });
  }

  return openKeys;
};

var isChecked = function isChecked(selectedKeys, eventKey) {
  return selectedKeys.indexOf(eventKey) !== -1;
};

var TreeTransfer = function TreeTransfer(_ref) {
  var dataSource = _ref.dataSource,
      targetKeys = _ref.targetKeys,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchVal = _useState2[0],
      setSearchVal = _useState2[1];

  var _useState3 = (0, _react.useState)(['1']),
      _useState4 = _slicedToArray(_useState3, 2),
      expandedKeys = _useState4[0],
      setExpandedKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      autoExpandParent = _useState6[0],
      setExpandedParent = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      down = _useState8[0],
      setDown = _useState8[1];

  var generateTree = function generateTree() {
    var treeNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var checkedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    treeNodes.map(function (item) {
      var name = item.name;
      var index = name.indexOf(searchVal);
      var beforeStr = name.substr(0, index);
      var afterStr = name.substr(index + searchVal.length);
      var title = index > -1 ? /*#__PURE__*/_react.default.createElement("span", null, beforeStr, /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#f50'
        }
      }, searchVal), afterStr) : /*#__PURE__*/_react.default.createElement("span", null, name);
      item.title = title;
    });
    return treeNodes.map(function (_ref2) {
      var children = _ref2.children,
          props = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/_react.default.createElement(TreeNode, _extends({}, props, {
        disabled: checkedKeys.includes(props.id) || !Number(props.type),
        key: props.id
      }), generateTree(children, checkedKeys));
    });
  };

  var transferDataSource = [];

  function flatten() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (item) {
      transferDataSource.push(item);
      flatten(item.children);
    });
  }

  flatten(dataSource);

  var onExpand = function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
    setExpandedParent(false);
  };

  var onSearch = function onSearch(value) {
    if (!value) return;
    var openKeys1 = [];
    var selectedKeys = [];
    var newList = (0, _utils.systemErgodicRoot)(dataSource);
    var parentKey = dataSource.map(function (item) {
      if (item.name.indexOf(value) >= 0) {
        selectedKeys.push(item.id);
        return getParentKey(item.id, newList);
      }

      return null;
    }).filter(function (item, i, self) {
      return item && self.indexOf(item) === i;
    }).slice(',');
    openKeys1 = getOpenKeys(parentKey, newList);
    setExpandedKeys(openKeys1);
    setSearchVal(value);
  };

  var onExpandAllNodes = function onExpandAllNodes(expand) {
    expand ? setExpandedKeys((dataSource || []).map(function (i) {
      return i.id;
    })) : setExpandedKeys(['1']);
  };

  var onClick = function onClick() {
    onExpandAllNodes(!down);
    setDown(!down);
  };

  return /*#__PURE__*/_react.default.createElement(_antd.Transfer, _extends({
    listStyle: {
      width: 300
    }
  }, restProps, {
    targetKeys: targetKeys,
    dataSource: transferDataSource,
    render: function render(item) {
      return item.name;
    },
    showSelectAll: true,
    rowKey: function rowKey(record) {
      return record.id;
    }
  }), function (_ref3) {
    var direction = _ref3.direction,
        onItemSelect = _ref3.onItemSelect,
        selectedKeys = _ref3.selectedKeys;

    if (direction === 'left') {
      var checkedKeys = [].concat(_toConsumableArray(selectedKeys), _toConsumableArray(targetKeys));
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react.default.createElement(Search, {
        style: {
          marginBottom: 8
        },
        placeholder: "\u641C\u7D22",
        onSearch: onSearch
      }), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: !down ? expandAllNodes : collapseAllNodes
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        onClick: onClick,
        type: "link",
        icon: !down ? /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.UpOutlined, null)
      }))), /*#__PURE__*/_react.default.createElement(_antd.Tree, {
        onExpand: onExpand,
        blockNode: true,
        checkable: true,
        checkStrictly: true // defaultExpandAll
        ,
        expandedKeys: expandedKeys,
        autoExpandParent: autoExpandParent,
        checkedKeys: checkedKeys,
        onCheck: function onCheck(_, _ref4) {
          var eventKey = _ref4.node.props.eventKey;
          onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
        },
        onSelect: function onSelect(_, _ref5) {
          var eventKey = _ref5.node.props.eventKey;
          onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
        }
      }, generateTree((0, _utils.systemErgodicRoot)(dataSource), targetKeys)));
    }
  });
};

var AssignRoleCmp = function AssignRoleCmp(_ref6) {
  var dispatch = _ref6.dispatch,
      visible = _ref6.visible,
      cancel = _ref6.cancel,
      rolesList = _ref6.rolesList,
      rolesIdList = _ref6.rolesIdList,
      userHasRolesList = _ref6.userHasRolesList,
      userId = _ref6.userId;

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      targetKeys = _useState10[0],
      setTargetKeys = _useState10[1];

  (0, _react.useEffect)(function () {
    setTargetKeys(rolesIdList.filter(function (id) {
      return userHasRolesList.map(function (user) {
        return user.id;
      }).indexOf(id) !== -1;
    }));
  }, [rolesList, rolesIdList, userHasRolesList]);

  var onOk = function onOk() {
    //修改后的角色id数组以及原有的角色数组传到后台对比做相应增删
    dispatch({
      type: 'assignRole/saveAndUpdate',
      payload: {
        targetKeys: targetKeys,
        userHasRolesList: userHasRolesList,
        userId: userId
      }
    });
  };

  var onChange = function onChange(targetKeys) {
    setTargetKeys(targetKeys);
  };

  return /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    width: 700,
    title: "\u5206\u914D\u89D2\u8272",
    visible: visible,
    onClose: cancel,
    footer: [/*#__PURE__*/_react.default.createElement("div", {
      style: {
        float: 'right'
      }
    }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: cancel
    }, cancels), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      onClick: targetKeys.length > 0 ? onOk : function () {
        return (0, _utils.showConfirm)(function () {
          return onOk();
        }, '此用户还未设置角色是否继续？');
      }
    }, ok))],
    mask: false,
    maskClosable: false
  }, visible && /*#__PURE__*/_react.default.createElement(TreeTransfer, {
    className: _index.default.transfer,
    dataSource: rolesList,
    targetKeys: targetKeys,
    onChange: onChange
  }));
};

var _default = AssignRoleCmp;
exports.default = _default;