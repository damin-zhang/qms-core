"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _TableWithBtn = _interopRequireDefault(require("../../../common/table/TableWithBtn"));

var _MenuForm = _interopRequireDefault(require("./MenuForm"));

var _utils = require("../../../../utils/utils");

var _mapParams = require("../../../../utils/mapParams");

var _EnMapParams = require("../../../../utils/EnMapParams");

var _DragSortForm = _interopRequireDefault(require("../../common/DragSortForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _OtherMenus = _interopRequireDefault(require("./OtherMenus"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.tableConfig.objectMenu,
    fields = _language$configPlatf2.fields,
    menuBtns = _language$configPlatf2.buttons;

var Menu = function Menu(_ref) {
  var dispatch = _ref.dispatch,
      menu = _ref.menu,
      tabKey = _ref.tabKey,
      objectANamespace = _ref.objectANamespace,
      isModeling = _ref.isModeling,
      activeTab = _ref.activeTab,
      objectType = _ref.objectType;
  var visible = menu.visible,
      record = menu.record,
      selectedRows = menu.selectedRows,
      selectedRowKeys = menu.selectedRowKeys,
      dataList = menu.dataList,
      namespace = menu.namespace,
      PID = menu.PID,
      enable = menu.enable,
      OBJECTNO = menu.OBJECTNO,
      noFooter = menu.noFooter,
      OBJECTA = menu.OBJECTA,
      visible2 = menu.visible2,
      _menu$dragSortFormVis = menu.dragSortFormVisible,
      dragSortFormVisible = _menu$dragSortFormVis === void 0 ? false : _menu$dragSortFormVis,
      objectNO = menu.objectNO,
      pCONTROLAUTH = menu.pCONTROLAUTH;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID,
      MTYPE = _ref2.MTYPE,
      ABTYPE = _ref2.ABTYPE,
      children = _ref2.children;

  var hasBeforeAct = false;
  var hasAfterAct = false;

  if (children) {
    hasBeforeAct = children.some(function (item) {
      return item.ABTYPE === 'before';
    });
    hasAfterAct = children.some(function (item) {
      return item.ABTYPE === 'after';
    });
  }

  var columns = [{
    title: fields.NO,
    dataIndex: 'NO',
    width: 200
  }, {
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 200
  }, {
    title: fields.TYPE,
    dataIndex: 'MTYPE',
    width: 100,
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("span", null, _utils.isEnglish ? _EnMapParams.eventTypeMap[text].name : _mapParams.eventTypeMap[text].name);
    }
  }, {
    title: fields.AUTHCODE,
    dataIndex: 'AUTHCODE'
  }, {
    title: fields.PARAM,
    dataIndex: 'PARAMS',
    render: function render(text) {
      var _ref3 = text || {},
          otherMenus = _ref3.otherMenus;

      return otherMenus ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        title: JSON.stringify(otherMenus)
      }, JSON.stringify(otherMenus)) : '';
    }
  }];
  (0, _react.useEffect)(function () {
    if (selectedRows.length > 0) {
      var seletedRow = selectedRows[0];
      selectedRows[0].children = dataList.filter(function (row) {
        return row.PID === seletedRow.ID;
      });
    }
  }, [dataList]);

  var toogleModal = function toogleModal(record, noFooter) {
    dispatch({
      type: 'menu/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          REQPARAM: (record.REQPARAM || '').split(';'),
          PARAMS: record.PARAMS || {},
          PID: record.PID || ID || '0',
          ABTYPE: record.ABTYPE || ABTYPE
        }),
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var toogleModal2 = function toogleModal2() {
    dispatch({
      type: 'menu/packet',
      payload: {
        visible2: !visible2
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'menu/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/delItem',
        payload: {
          rows: rows,
          namespace: namespace,
          PID: PID,
          objectANamespace: objectANamespace
        }
      });
    };
  };

  var reorder = function reorder() {
    dispatch({
      type: 'commonConfig/reorderItem',
      payload: {
        hData: dataList,
        namespace: namespace,
        PID: PID
      }
    });
  };

  var btns = [{
    name: menuBtns.select_create_menu,
    btns: [{
      name: menuBtns.create_menu_object,
      disabled: !(enable && activeTab === '2' && MTYPE !== 0),
      func: function func() {
        toogleModal({
          MTYPE: 0,
          OBJECTNO: OBJECTNO,
          IMPLTYPE: 1
        });
      }
    }, {
      name: menuBtns.create_menu_group,
      disabled: !(enable && activeTab === '2' && MTYPE !== 0 && !ABTYPE),
      func: function func() {
        toogleModal({
          MTYPE: 1,
          OBJECTNO: OBJECTNO
        });
      }
    }]
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && ID && selectedRows.length === 1) || ABTYPE && activeTab !== '2' && MTYPE === 1 && selectedRows.length === 1,
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && activeTab === '2' && ID),
    func: function func() {
      var df = false;
      selectedRows.forEach(function (element) {
        if (element.MTYPE === 1 && element.children) df = true;
      });
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        content: df ? common.delTip : '',
        onOk: del(selectedRows)
      });
    }
  }, {
    name: menuBtns.other_button,
    disabled: !(enable && activeTab === '2' && ID && !ABTYPE && !MTYPE && selectedRows.length === 1),
    func: function func() {
      toogleModal2();
    }
  }, {
    name: menuBtns.create_pre_processing,
    disabled: !(enable && activeTab === '2' && MTYPE === 0 && !ABTYPE && !hasBeforeAct),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + menuBtns.create_pre_processing,
        onOk: function onOk() {
          dispatch({
            type: 'commonConfig/editItem',
            payload: {
              values: {
                MTYPE: 1,
                ABTYPE: 'before',
                NO: 'BeforeEvent',
                NAME: '前处理集合',
                PID: ID
              },
              record: record,
              namespace: namespace,
              objectANamespace: objectANamespace,
              PID: PID,
              selectedRows: selectedRows
            }
          });
        }
      });
    }
  }, {
    name: menuBtns.create_post_processing,
    disabled: !(enable && activeTab === '2' && MTYPE === 0 && !ABTYPE && !hasAfterAct),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + menuBtns.create_post_processing,
        onOk: function onOk() {
          dispatch({
            type: 'commonConfig/editItem',
            payload: {
              values: {
                MTYPE: 1,
                ABTYPE: 'after',
                NO: 'AfterEvent',
                NAME: '后处理集合',
                PID: ID
              },
              record: record,
              namespace: namespace,
              objectANamespace: objectANamespace,
              PID: PID,
              selectedRows: selectedRows
            }
          });
        }
      });
    }
  }, {
    name: buttons.reorder,
    disabled: !(isModeling && activeTab === '2' && dataList && dataList.length > 0),
    func: function func() {
      toogleModalDragSort();
    }
  }];
  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      dispatch({
        type: 'menu/packet',
        payload: {
          selectedRowKeys: selectedRowKeys,
          selectedRows: selectedRows
        }
      });
    },
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns,
    isTree: true,
    rightClick: toogleModal,
    namespace: namespace,
    canDrag: enable,
    afterDragFunc: function afterDragFunc() {
      dispatch({
        type: 'commonConfig/queryItem',
        payload: {
          PID: PID,
          namespace: namespace,
          enable: true,
          other: {
            OBJECTNO: OBJECTNO
          },
          objectANamespace: objectANamespace,
          objectType: sessionStorage['tableConfigObjectType']
        }
      });
    }
  };
  var formProps = {
    record: record,
    visible: objectANamespace === tabKey && visible,
    onCancel: toogleModal,
    namespace: namespace,
    PID: PID,
    dataList: dataList,
    noFooter: noFooter,
    OBJECTA: OBJECTA,
    visible2: visible2,
    selectedRow: selectedRows[0],
    objectANamespace: objectANamespace,
    pCONTROLAUTH: pCONTROLAUTH,
    objectNO: objectNO
  };
  var formProps2 = {
    dispatch: dispatch,
    selectedRow: selectedRows[0],
    visible: objectANamespace === tabKey && visible2,
    onCancel: toogleModal2,
    OBJECTNO: OBJECTNO,
    namespace: namespace,
    PID: PID
  };
  var formProps3 = {
    dataList: dataList,
    isTree: true,
    selectedRow: selectedRows[0],
    visible: objectANamespace === tabKey && dragSortFormVisible,
    objectANamespace: objectANamespace,
    OBJECTNO: OBJECTNO,
    namespace: namespace,
    PID: PID,
    isWho: 'menu',
    columns: columns,
    onClose: toogleModalDragSort,
    objectTypes: objectType
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps), /*#__PURE__*/_react.default.createElement(_OtherMenus.default, formProps2), /*#__PURE__*/_react.default.createElement(_MenuForm.default, _extends({}, formProps, {
    getContainer: document.getElementById('root')
  })), /*#__PURE__*/_react.default.createElement(_DragSortForm.default, formProps3));
};

function mapStateToProps(_ref4) {
  var menu = _ref4.menu,
      tab = _ref4.tab,
      isModeling = _ref4.user.isModeling;
  return {
    menu: menu,
    tabKey: tab.activeKey,
    isModeling: isModeling
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Menu);

exports.default = _default;