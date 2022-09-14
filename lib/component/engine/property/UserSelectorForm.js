"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactSvg = require("react-svg");

var _Search = _interopRequireDefault(require("../../common/search/Search"));

var _applicationApi = require("../../../service/applicationApi");

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

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

var svgDir = require.context('../../../assets/icon/');

var Item = _antd.Menu.Item,
    SubMenu = _antd.Menu.SubMenu;

var UserSelectorForm = function UserSelectorForm(_ref, ref) {
  var editParams = _ref.editParams,
      no = _ref.no,
      editor = _ref.editor,
      item = _ref.item;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      rowKeys = _useState2[0],
      setRowKeys = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dataList = _useState6[0],
      setDataList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      expandKeys = _useState8[0],
      setExpandKeys = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      pid = _useState10[0],
      setPid = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var tableName = item.tableName,
      fieldName = item.fieldName,
      batchIndex = item.batchIndex;
  (0, _react.useEffect)(function () {
    if (editParams) {
      var sql = editParams.sql;
      (0, _applicationApi.queryEditorData)({
        tableName: tableName,
        fieldName: fieldName,
        editor: editor,
        condition: sql
      }).then(function (res) {
        if (res) {
          setLoading(true);
          var len = res.dataList;
          var _expandKeys = [];

          _expandKeys.push(len.filter(function (item) {
            return item.PID === '0';
          })[0].ID);

          setPid(_expandKeys);
          setExpandKeys(_expandKeys);
          setDataList(res.dataList);
          setRows([]);
        }
      });
    }
  }, [editParams, tableName, fieldName]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      Ok: function Ok() {
        var result = {};

        if (rows.length > 0) {
          if (editor === 'UserSelector') {
            var selectMap = editParams.selectMap,
                tfield = editParams.tfield;

            if (selectMap === 1) {
              var mapList = dataList.filter(function (i) {
                return i.ID === rows[0].PID;
              })[0];
              result[tfield] = mapList.NAME;
            }

            result[fieldName] = rows[0].NAME.substr(rows[0].NAME.indexOf(':') + 1);
            result['userFieldValue'] = rows[0].NAME;
            result['userFieldName'] = fieldName;
          } else {
            var arr = rows.map(function (item, index) {
              return item.NAME.substr(rows[index].NAME.indexOf(':') + 1);
            });
            result[fieldName] = arr.join(',');
            result['userFieldValue'] = rows.map(function (item) {
              return item.NAME;
            }).join(',');
            result['userFieldName'] = fieldName;
          }
        }

        return batchIndex >= 0 ? _objectSpread({
          batchIndex: batchIndex
        }, result) : result;
      }
    };
  });

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

  var onSelectData = function onSelectData(item) {
    var rows = [];
    var keys = [];

    if (editor === 'UserSelector') {
      rows = dataList.filter(function (i) {
        return i.NAME.indexOf(':') > -1 && item.key === i.ID;
      }) || [];
      rows[0] && keys.push(item.key);
    } else {
      item.selectedKeys.forEach(function (key) {
        dataList.forEach(function (i) {
          if (i.ID === key && i.NAME.indexOf(':') > -1) {
            rows.push(i);
            keys.push(key);
          }
        });
      });
    }

    setRows(rows);
    setRowKeys(keys);
  };

  var onDeselect = function onDeselect(item) {
    var rows = [];
    var keys = [];
    item.selectedKeys.forEach(function (key) {
      dataList.forEach(function (i) {
        if (i.ID === key && i.NAME.indexOf(':') > -1) {
          rows.push(i);
          keys.push(key);
        }
      });
    });
    setRows(rows);
    setRowKeys(keys);
  };

  var onSearch = function onSearch(value) {
    dataList.forEach(function (item) {
      item.colorStyle = '';
    });
    var expandedKeys = dataList.map(function (item) {
      if (item.NAME && item.NAME.indexOf(value) > -1) {
        item.colorStyle = 'red';
        var list = (0, _utils.ergodicRoot)(dataList);
        return getParentKey(item.ID, list);
      }

      return null;
    }).filter(function (item, i, self) {
      return item && self.indexOf(item) === i;
    });

    for (var i = 0; i < 10; i++) {
      if (expandedKeys.length && expandedKeys.indexOf('PID') < 0) {
        dataList.map(function (item) {
          expandedKeys.map(function (item1) {
            if (item.ID === item1) {
              !expandedKeys.includes(item.PID) && expandedKeys.push(item.PID);
            }
          });
        });
      }
    }

    setExpandKeys([pid[0], dataList[0].ID].concat(_toConsumableArray(expandedKeys))); // 滚动第一个搜索项到视野中

    setTimeout(function () {
      var searchItemDom = document.getElementsByClassName('searchItem');

      if (searchItemDom && searchItemDom.length) {
        searchItemDom[0].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }, 500);
  };

  var onOpenChange = function onOpenChange(openKeys) {
    setExpandKeys(openKeys);
  };

  var getMenus = function getMenus(data) {
    return data.map(function (item) {
      var children = item.children,
          ID = item.ID,
          NAME = item.NAME,
          ICON = item.ICON,
          colorStyle = item.colorStyle;
      var newIcon = null;
      var IconView = null;

      if (ICON) {
        if (ICON.indexOf('third-') != -1) {
          //筛选第三方图标库的icons
          newIcon = ICON.substring(6); //将第三方图标库标识去掉
        } else {
          ICON.substring(0, 1).toUpperCase() + ICON.substring(1, ICON.length), _readOnlyError("ICON");
          IconView = Icon["".concat(ICON, "Outlined")];
        }
      }

      var title = /*#__PURE__*/_react.default.createElement("div", {
        style: {
          margin: '0px'
        }
      }, ICON && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
        className: "layoutThirdIcons",
        src: svgDir("./".concat(newIcon, ".svg"))
      }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null)), /*#__PURE__*/_react.default.createElement("span", null, NAME));

      return children ? /*#__PURE__*/_react.default.createElement(SubMenu, {
        className: "spacing",
        key: ID,
        title: /*#__PURE__*/_react.default.createElement("span", null, title),
        selectable: item.STATE ? 1 : 0,
        style: {
          margin: '0px'
        }
      }, getMenus(children)) : /*#__PURE__*/_react.default.createElement(Item, {
        key: ID,
        disabled: item.STATE ? true : false,
        style: {
          margin: '0px'
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: colorStyle ? 'searchItem' : '',
        style: {
          color: colorStyle ? colorStyle : ''
        }
      }, title));
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: '5px',
      overflow: 'auto',
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Menu, {
    style: {
      margin: '0px'
    },
    mode: 'inline',
    multiple: true,
    onSelect: onSelectData,
    onDeselect: onDeselect,
    openKeys: expandKeys,
    onOpenChange: onOpenChange,
    selectedKeys: rowKeys
  }, loading ? getMenus((0, _utils.ergodicRoot)(dataList)) : /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    delay: 100,
    style: {
      lineHeight: '400px',
      marginLeft: '200px'
    }
  }))), /*#__PURE__*/_react.default.createElement(_Search.default, {
    onSearch: onSearch,
    style: {
      position: 'absolute',
      bottom: '15px',
      left: '20px',
      width: '50%'
    }
  }));
};

var _default = (0, _react.forwardRef)(UserSelectorForm);

exports.default = _default;