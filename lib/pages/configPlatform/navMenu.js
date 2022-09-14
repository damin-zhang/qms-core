"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _NavMenuCmp = _interopRequireDefault(require("../../component/configPlatform/navMenu/NavMenuCmp"));

var _antd = require("antd");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _mapParams = require("../../utils/mapParams");

var _utils = require("../../utils/utils");

var _language = _interopRequireDefault(require("@/locale/language"));

var _reactSvg = require("react-svg");

require("./index.css");

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

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    index = _language$configPlatf.index,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.navMenu.fields;
var tab_namespace = ['menu'];

var svgDir = require.context('../../assets/icon/');

var NavMenu = function NavMenu(_ref) {
  var navMenu = _ref.navMenu,
      dispatch = _ref.dispatch,
      isModeling = _ref.isModeling,
      menu = _ref.menu;
  var dataList = navMenu.dataList,
      visible = navMenu.visible,
      _navMenu$moveNodeForm = navMenu.moveNodeFormVisible,
      moveNodeFormVisible = _navMenu$moveNodeForm === void 0 ? false : _navMenu$moveNodeForm,
      _navMenu$dragSortForm = navMenu.dragSortFormVisible,
      dragSortFormVisible = _navMenu$dragSortForm === void 0 ? false : _navMenu$dragSortForm,
      selectedRowKeys = navMenu.selectedRowKeys,
      selectedRows = navMenu.selectedRows,
      activeKey = navMenu.activeKey,
      _navMenu$openKeys = navMenu.openKeys,
      openKeys = _navMenu$openKeys === void 0 ? [] : _navMenu$openKeys,
      namespace = navMenu.namespace,
      showTab = navMenu.showTab,
      record = navMenu.record,
      noFooter = navMenu.noFooter;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearValue = _useState2[1];

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var enable = isModeling && ID; // 处理导航新建是否为导航组

  var isNavigation = isModeling === true && selectedRows.length > 0 && selectedRows[0].FACETYPE === -1 || isModeling === true && selectedRows[0] && selectedRows[0].NO === 'sys' ? false : true;
  (0, _react.useEffect)(function () {
    if (selectedRowKeys && selectedRowKeys.length) {
      setTimeout(function () {
        var selectedFirstDom = document.getElementsByClassName('ant-menu-item-selected')[0];
        selectedFirstDom && selectedFirstDom.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, [selectedRowKeys]); // useEffect(() => {
  //   dispatch({
  //     type: 'commonConfig/queryItem',
  //     payload: {
  //       PID: ID,
  //       namespace: tab_namespace[activeKey],
  //       enable: isModeling && ID,
  //       objectANamespace: 'navMenu',
  //       objectType: sessionStorage['tableConfigObjectType']
  //     }
  //   })
  // }, [isModeling])

  var operationMenu = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
    disabled: !isModeling,
    onClick: function onClick() {
      return toogleModal(selectedRows[0]);
    }
  }, buttons.update), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
    disabled: !isModeling,
    onClick: function onClick() {
      return (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, buttons.delete));

  var operationColmun = /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    overlay: operationMenu,
    placement: "bottomLeft",
    trigger: ['click']
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      padding: '0 7px',
      borderRadius: '2px',
      backgroundColor: 'rgb(231 238 239)'
    },
    className: "ant-dropdown-link",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, fields.OPERATION, " ", /*#__PURE__*/_react.default.createElement(Icon.DownOutlined, null)));

  var renders = function renders(text, record, index) {
    if (searchValue === null || text.toUpperCase().indexOf(searchValue.toUpperCase()) < 0) {
      return /*#__PURE__*/_react.default.createElement("span", null, text);
    }

    var i = text.toUpperCase().indexOf(searchValue.toUpperCase());
    var beforeStr = text.substr(0, i);
    var center = text.substr(i, searchValue.length);
    var afterStr = text.substr(i + searchValue.length);
    return /*#__PURE__*/_react.default.createElement("span", null, beforeStr, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: '#FA2A45',
        fontWeight: 800
      }
    }, center), afterStr);
  };

  var eidtRow = function eidtRow(_ref3) {
    var text = _ref3.text,
        record = _ref3.record,
        field = _ref3.field;
    return function () {
      if (!isModeling) {
        _antd.message.warn('没有开启建模');

        return;
      }

      var values = record.META;
      values[field] = !text;

      if (values.PARAMS) {
        values.PARAMS.classNodeTableName = values.PARAMS.classNodeObjectNo;
        values.PARAMS.classTableName = values.PARAMS.classObjectNo;
        values.PARAMS.objectNo = values.PARAMS.tableName;
      }

      dispatch({
        type: 'navMenu/edit',
        payload: {
          values: values,
          record: record,
          namespace: namespace,
          PID: record.PID
        }
      });
    };
  };

  var columns = [{
    title: index,
    dataIndex: 'rowkey',
    align: 'left',
    width: 120
  }, {
    title: _utils.isEnglish ? fields.ENNAME : fields.NAME,
    dataIndex: _utils.isEnglish ? 'ENNAME' : 'NAME',
    width: 250,
    render: function render(text, record, index) {
      text = text || record.NO;
      return renders(text, record, index);
    }
  }, {
    title: fields.NO,
    dataIndex: 'NO',
    width: 150,
    render: function render(text, record, index) {
      return renders(text, record, index);
    }
  }, {
    title: fields.FACETYPE,
    dataIndex: 'FACETYPE',
    width: 150,
    render: function render(text) {
      var fType = _mapParams.facetypeMap.find(function (item) {
        return item.value === text;
      });

      return fType ? text >= 0 ? /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: fType.color
      }, fType.name) : fType.name : text;
    }
  }, {
    title: fields.ICON,
    dataIndex: 'ICON',
    width: 100,
    render: function render(text) {
      //区分antd图标库和第三方图标库，根据不同的图标库分别渲染
      if (text.indexOf('third-') != -1) {
        //当选中第三方图标库时
        var newIcon = text.substring(6);
        return /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
          type: newIcon,
          className: "icons",
          src: svgDir("./".concat(newIcon, ".svg"))
        });
      } else {
        text = text.substring(0, 1).toUpperCase() + text.substring(1, text.length);
        var IconView = Icon["".concat(text, "Outlined")];
        return IconView && /*#__PURE__*/_react.default.createElement(IconView, {
          style: {
            color: '#1890ff'
          }
        });
      }
    }
  }, {
    title: fields.SUPQUERY,
    dataIndex: 'SUPQUERY',
    width: 80,
    align: 'center',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.SUPQUERY,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'SUPQUERY'
        })
      });
    }
  }, // {
  //   title: fields.appDisplay,
  //   dataIndex: 'APPDISPLAY',
  //   align: 'center',
  //   render: text => <Checkbox checked={text} />
  // },
  // { title: fields.PARAMS, dataIndex: 'PARAMS', width: 150, render: text => <Tooltip title={text}>{text}</Tooltip> },
  // { title: fields.CUSER, dataIndex: 'USERNAME' }
  {
    title: common.definition,
    align: 'center',
    frozen: 'right',
    fixed: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, record.META.FACETYPE > 0 && record.META.FACETYPE !== 8 && /*#__PURE__*/_react.default.createElement(_antd.Button, {
        size: "small",
        type: "primary",
        onClick: showDrawer.bind(showDrawer, record)
      }, common.definition));
    }
  }];

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    var PARAMS = record.PARAMS || {};
    var sortFields = PARAMS.sortFields && PARAMS.sortFields === '' ? [] : PARAMS.sortFields;
    dispatch({
      type: 'navMenu/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          PARAMS: _objectSpread(_objectSpread({}, record.PARAMS || {}), {}, {
            sortFields: sortFields
          })
        }),
        visible: !visible,
        noFooter: noFooter
      }
    });
  }; // 展开搜索


  var onSearchOpen = function onSearchOpen(value) {
    var selectedKeys = [];
    var openKeys = [];

    if (!value) {
      setSearValue(null);
      dispatch({
        type: 'navMenu/packet',
        payload: {
          openKeys: openKeys,
          selectedKeys: selectedKeys
        }
      });
      return;
    }

    setSearValue(value);
    var parentKey = dataList.map(function (item) {
      var cp = item.NO.toUpperCase().indexOf(value.toUpperCase()) > -1 || (_utils.isEnglish ? item.ENNAME && item.ENNAME.toUpperCase().indexOf(value.toUpperCase()) > -1 : item.NAME.toUpperCase().indexOf(value.toUpperCase()) > -1);

      if (cp) {
        selectedKeys.push(item.ID);
        return getParentKey(item.ID, menu);
      }

      return null;
    }).filter(function (item, i, self) {
      return item && self.indexOf(item) === i;
    });
    openKeys = getOpenKeys(parentKey, dataList);
    dispatch({
      type: 'navMenu/packet',
      payload: {
        openKeys: openKeys,
        selectedKeys: selectedKeys,
        parentKey: parentKey
      }
    });

    _antd.message.info('Total : ' + selectedKeys.length);
  };

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

  var getOpenKeys = function getOpenKeys(keys, tree) {
    var openKeys = [];

    if (keys.length) {
      keys.forEach(function (key) {
        openKeys.push(key);
        var PID = 1;

        while (PID > 0) {
          for (var i = 0; i < tree.length; i++) {
            var node = tree[i];

            if (node.ID === key) {
              PID = node.PID;
              key = node.PID;

              if (PID > 1) {
                var pidString = PID;
                openKeys.indexOf('PID') < 0 && !openKeys.includes(pidString) && openKeys.push(pidString);
              }

              break;
            }
          }
        }
      });
    }

    return openKeys;
  };

  var toogleMoveNodeModal = function toogleMoveNodeModal() {
    dispatch({
      type: 'navMenu/packet',
      payload: {
        moveNodeFormVisible: true
      }
    });
  };

  var cancelMoveNodeModal = function cancelMoveNodeModal() {
    dispatch({
      type: 'navMenu/packet',
      payload: {
        moveNodeFormVisible: false
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'navMenu/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible
      }
    });
  };

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    var FACETYPE = rows.FACETYPE,
        PARAMS = rows.PARAMS,
        ID = rows.ID;

    var _ref4 = PARAMS || {},
        objectNo = _ref4.objectNo,
        classNodeObjectNo = _ref4.classNodeObjectNo;

    dispatch({
      type: 'navMenu/packet',
      payload: {
        activeKey: activeKey
      }
    });
    dispatch({
      type: 'commonConfig/queryItem',
      payload: {
        PID: ID,
        namespace: tab_namespace[activeKey],
        enable: isModeling && ID,
        other: {
          selectedRows: [],
          OBJECTNO: FACETYPE === 4 ? classNodeObjectNo : objectNo
        },
        objectANamespace: 'navMenu',
        objectType: sessionStorage['tableConfigObjectType']
      }
    });
  };

  var toogleRight = function toogleRight() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'navMenu/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          PARAMS: record.PARAMS || {}
        })
      }
    });
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    var _selectedRows$ = selectedRows[0],
        FACETYPE = _selectedRows$.FACETYPE,
        ID = _selectedRows$.ID;
    var record = selectedRows[0];
    var PARAMS = record.PARAMS || {};
    var sortFields = PARAMS.sortFields && PARAMS.sortFields === '' ? PARAMS.sortFields : [];
    var openKey = [];
    openKey = ID === 1 ? [] : getOpenKeys(selectedRowKeys, dataList);
    dispatch({
      type: 'navMenu/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        // showTab: FACETYPE > 0 ? true : false,
        openKeys: openKey,
        record: _objectSpread(_objectSpread({}, record), {}, {
          PARAMS: _objectSpread(_objectSpread({}, record.PARAMS || {}), {}, {
            sortFields: sortFields
          })
        })
      }
    }); // FACETYPE > 0 && changePane(activeKey, selectedRows[0])

    FACETYPE > 0 && toogleRight(selectedRows[0]);
  };

  var showDrawer = function showDrawer(row) {
    dispatch({
      type: 'navMenu/packet',
      payload: {
        showTab: true
      }
    });
    changePane(activeKey, row);
  };

  var rowSelection = {
    type: 'radio',
    lodding: true,
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'navMenu/packet',
      payload: {
        showTab: false
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'navMenu/del',
        payload: {
          rows: rows,
          namespace: namespace
        }
      });
    };
  };

  var synchro = function synchro(row) {
    return function () {
      dispatch({
        type: 'navMenu/synchro',
        payload: {
          row: row,
          namespace: namespace
        }
      });
    };
  };

  var reorder = function reorder() {
    dispatch({
      type: 'navMenu/reorder',
      payload: {
        hData: dataList,
        namespace: namespace
      }
    });
  };

  var onExpandedRowsChange = function onExpandedRowsChange(openKeys) {
    dispatch({
      type: 'navMenu/packet',
      payload: {
        openKeys: openKeys
      }
    });
  };

  var btns = [{
    name: buttons.create,
    disabled: selectedRows.length ? isNavigation : !isModeling,
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.creatingRootNode,
    disabled: !isModeling,
    func: function func() {
      toogleModal({
        PID: '0'
      });
    }
  }, {
    name: buttons.update,
    disabled: !enable,
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !enable,
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: buttons.synchro_model,
    disabled: !enable,
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.synchro_model,
        onOk: synchro(selectedRows[0])
      });
    }
  }, {
    name: buttons.move_node,
    disabled: !enable,
    func: function func() {
      toogleMoveNodeModal();
    }
  }, {
    name: buttons.reorder,
    disabled: !isModeling,
    func: function func() {
      toogleModalDragSort();
    }
  }];
  var navMenuColumns = [{
    title: index,
    dataIndex: 'rowkey',
    align: 'left',
    width: 100
  }, {
    title: _utils.isEnglish ? fields.ENNAME : fields.NAME,
    dataIndex: _utils.isEnglish ? 'ENNAME' : 'NAME',
    width: 250,
    render: function render(text, record) {
      text = text || record.NO;
      return renders(text);
    }
  }, {
    title: fields.NO,
    dataIndex: 'NO',
    width: 150
  }, {
    title: fields.FACETYPE,
    dataIndex: 'FACETYPE',
    width: 150,
    render: function render(text) {
      var fType = _mapParams.facetypeMap.find(function (item) {
        return item.value === text;
      });

      return fType ? text >= 0 ? /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: fType.color
      }, fType.name) : fType.name : text;
    }
  }, {
    title: fields.ICON,
    dataIndex: 'ICON',
    width: 100
  }, {
    title: fields.SUPQUERY,
    dataIndex: 'SUPQUERY',
    width: 80,
    align: 'center',
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: text
      });
    }
  }, {
    title: fields.appDisplay,
    dataIndex: 'APPDISPLAY',
    align: 'center',
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: text
      });
    }
  }];
  var props = {
    tableProp: {
      operationColmun: operationColmun,
      dataList: dataList,
      columns: columns,
      btns: btns,
      rowSelection: rowSelection,
      isTree: true,
      expandedRowKeys: [1].concat(_toConsumableArray(openKeys)),
      defaultExpandedRowKeys: [1],
      canDrag: isModeling,
      namespace: namespace,
      record: record,
      onExpandedRowsChange: onExpandedRowsChange,
      onSearchOpen: onSearchOpen,
      rightClick: toogleModal,
      afterDragFunc: function afterDragFunc() {
        dispatch({
          type: 'navMenu/query',
          payload: {
            namespace: 'navMenu'
          }
        });
      },
      expandIconColumnIndex: 3
    },
    formProps: {
      record: record,
      visible: visible,
      onCancel: toogleModal,
      namespace: namespace,
      ID: ID,
      noFooter: noFooter
    },
    moveNodeFormProps: {
      namespace: namespace,
      visible: moveNodeFormVisible,
      dataList: dataList,
      selectedRows: selectedRows,
      type: 'navMenu',
      rootNode: _objectSpread(_objectSpread({}, dataList.length && dataList[0]), {}, {
        ID: 0,
        NAME: '导航'
      }),
      onCancel: cancelMoveNodeModal
    },
    dragProps: {
      namespace: namespace,
      visible: dragSortFormVisible,
      dataList: dataList,
      isTree: true,
      defaultExpandedRowKeys: [1],
      dragSortFormVisible: dragSortFormVisible,
      isWho: 'navMenu',
      columns: navMenuColumns,
      onClose: toogleModalDragSort
    },
    changePane: changePane,
    closeTab: closeTab,
    isModeling: isModeling,
    showTab: showTab,
    activeKey: activeKey
  };
  return /*#__PURE__*/_react.default.createElement(_NavMenuCmp.default, props);
};

function mapStateToProps(_ref5) {
  var navMenu = _ref5.navMenu,
      _ref5$user = _ref5.user,
      isModeling = _ref5$user.isModeling,
      menu = _ref5$user.menu;
  return {
    navMenu: navMenu,
    isModeling: isModeling,
    menu: menu
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(NavMenu);

exports.default = _default;