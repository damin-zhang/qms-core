"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactSvg = require("react-svg");

var _Search = _interopRequireDefault(require("../../common/search/Search"));

var _utils = require("../../../utils/utils");

var _VirtualTree = _interopRequireDefault(require("../../common/tree/VirtualTree"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TreeNode = _antd.Tree.TreeNode;

var svgDir = require.context('../../../assets/icon/');

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
  var pID = 0;
  var openKeys = [];

  if (keys.length) {
    keys.forEach(function (item) {
      var key = item;
      openKeys.push(key.toString());

      while (pID !== 0) {
        for (var i = 0; i < tree.length; i++) {
          var node = tree[i];

          if (node.id === key) {
            pID = node.pID;
            key = node.pID;

            if (pID !== 1) {
              openKeys.indexOf('pID') < 0 && openKeys.push(pID.toString());
            }

            break;
          }
        }
      }
    });
  }

  return openKeys;
};

var Cmp = function Cmp(_ref) {
  var dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      _ref$dataList = _ref.dataList1,
      dataList1 = _ref$dataList === void 0 ? [] : _ref$dataList,
      objectAData = _ref.objectAData;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchVal = _useState2[0],
      setSearchVal = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      expandedKeys = _useState4[0],
      setExpandedKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      autoExpandParent = _useState6[0],
      setExpandedParent = _useState6[1];

  var _useState7 = (0, _react.useState)(dataList1[1] ? dataList1[1].map(function (item) {
    return item.id;
  }) : []),
      _useState8 = _slicedToArray(_useState7, 2),
      checkedKeys = _useState8[0],
      setCheckedKeys = _useState8[1];

  (0, _react.useEffect)(function () {
    if (dataList1 && dataList1[1]) {
      var arr0 = dataList1[0];
      var arr1 = dataList1[1].map(function (item) {
        return item.id;
      });
      var newArr = [];
      var len = arr0.length;
      var pIdMap = {};

      for (var i = 0; i < len; i++) {
        var pId = arr0[i].pId;
        pIdMap[pId] = true;
      }

      pIdMap = Object.keys(pIdMap);
      newArr = arr1.filter(function (item) {
        return pIdMap.indexOf(item) === -1;
      });
      setCheckedKeys(newArr);
    }
  }, [dataList1]);

  var renderCollectIcon = function renderCollectIcon(item) {
    if (!(item.children && item.children.length) && checkedKeys.includes(item.id)) {
      return /*#__PURE__*/_react.default.createElement(Icon.HeartOutlined, {
        style: {
          marginLeft: '6px'
        }
      });
    }
  };

  var loop = function loop(data) {
    return data.map(function (item) {
      var caption = item.caption,
          id = item.id,
          icon = item.icon;
      var newIcon = null;
      var IconView = null;

      if (icon) {
        if (icon.indexOf('third-') != -1) {
          //筛选第三方图标库的icons
          newIcon = icon.substring(6); //将第三方图标库标识去掉
        } else {
          icon.substring(0, 1).toUpperCase() + icon.substring(1, icon.length), _readOnlyError("icon");
          IconView = Icon["".concat(icon, "Outlined")];
        }
      }

      var index = caption.indexOf(searchVal);
      var beforeStr = caption.substr(0, index);
      var afterStr = caption.substr(index + searchVal.length);
      var title = index > -1 ? /*#__PURE__*/_react.default.createElement("span", null, beforeStr, /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#f50'
        }
      }, searchVal), afterStr, renderCollectIcon(item)) : /*#__PURE__*/_react.default.createElement("span", null, caption, renderCollectIcon(item));
      var props = {
        key: id,
        title: title,
        dataRef: item
      };
      if (icon) props.icon = newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        className: "AuthorityThirdIcons",
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null);

      if (item.children) {
        return /*#__PURE__*/_react.default.createElement(TreeNode, props, loop(item.children));
      }

      return /*#__PURE__*/_react.default.createElement(TreeNode, props);
    });
  };

  var onSearch = function onSearch(value) {
    if (!value) return;
    var openKeys1 = [];
    var list = (0, _utils.ergodicRoot)(dataList1[0], 0, 'pID', 'id');
    var expandedKeys = dataList1[0].map(function (item) {
      var caption = item.caption ? item.caption : _utils.isEnglish ? item.enName : item.name;

      if (caption && caption.toUpperCase().indexOf(value.toUpperCase()) >= 0) {
        return getParentKey(item.id, list);
      }

      return null;
    }).filter(function (item, i, self) {
      return item && self.indexOf(item) === i;
    });
    openKeys1 = getOpenKeys(expandedKeys, list);
    setSearchVal(value);
    setExpandedKeys(openKeys1);
    setExpandedParent(true);
  };

  var onExpand = function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
    setExpandedParent(false);
  };

  var onCheck = function onCheck(checkedKeys, _ref2) {
    var halfCheckedKeys = _ref2.halfCheckedKeys;
    var rType = objectAData.type;
    var roleId = objectAData.id;
    dispatch({
      type: 'RoleManage/save',
      payload: {
        values: {
          hAuthArray: checkedKeys,
          hHalfAuthArray: halfCheckedKeys,
          objectAData: objectAData,
          rType: rType,
          roleId: roleId,
          objectA: 'SROLE',
          objectNo: 'RMAUTH',
          relevanceNo: 'rel_AUTHORIZED'
        },
        namespace: namespace
      },
      callback: function callback(data) {
        if (data.flag) {
          // setCheckedKeys(data.dataList[1].map(item => item.id))
          dispatch({
            type: 'RoleManage/packet',
            payload: {
              dataList1: data.dataList
            }
          }); // setAuthCodeList()
        }
      }
    });
  };

  var onExpandAllNodes = function onExpandAllNodes(expand) {
    expand ? setExpandedKeys((dataList1[0] || []).map(function (i) {
      return i.id.toString();
    })) : setExpandedKeys(['1']);
  }; // console.log(ergodicRoot(parseMeta(dataList1[0]), 0, 'pID', 'id'));


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-y"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: onSearch
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-grow-y",
    style: {
      display: 'flex'
    }
  }, dataList1[0] && /*#__PURE__*/_react.default.createElement(_VirtualTree.default, {
    checkable: true,
    onCheck: onCheck,
    showIcon: true,
    onExpand: onExpand,
    expandedKeys: expandedKeys,
    autoExpandParent: autoExpandParent,
    checkedKeys: checkedKeys,
    data: loop((0, _utils.ergodicRoot)(dataList1[0], 0, 'pID', 'id')),
    onExpandAllNodes: onExpandAllNodes
  })));
};

function mapStateToProps(_ref3) {
  var RoleManage = _ref3.RoleManage;
  return _objectSpread({}, RoleManage);
}

var _default = (0, _dva.connect)(mapStateToProps)(Cmp);

exports.default = _default;