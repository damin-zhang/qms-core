"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _dva = require("dva");

var _DragCmp = _interopRequireDefault(require("../../component/common/drag/DragCmp"));

var _antd = require("antd");

var _utils = require("../../utils/utils");

var _language = _interopRequireDefault(require("../../locale/language"));

var _TableWithBtn = _interopRequireDefault(require("../../component/common/table/TableWithBtn"));

var _RoleForm = _interopRequireDefault(require("../../component/userManage/roleManage/RoleForm"));

var _AuthorityCmp = _interopRequireDefault(require("../../component/userManage/roleManage/AuthorityCmp"));

var _RoleUserCmp = _interopRequireDefault(require("../../component/userManage/roleManage/RoleUserCmp"));

var _AuthCodeCmp = _interopRequireDefault(require("../../component/userManage/roleManage/AuthCodeCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$userManage$ = _language.default.userManage.roleManage,
    buttons = _language$userManage$.buttons,
    authority = _language$userManage$.authority,
    roleUser = _language$userManage$.roleUser,
    fields = _language$userManage$.fields,
    authCode = _language.default.configPlatform.authCode;
var TabPane = _antd.Tabs.TabPane;
var columns = [{
  title: fields.RNAME,
  dataIndex: 'name',
  width: 150,
  render: function render(text, record) {
    var icon = record.type === 0 ? /*#__PURE__*/_react.default.createElement(_icons.UsergroupAddOutlined, {
      style: {
        color: '#1890FF',
        fontSize: '18px'
      }
    }) : /*#__PURE__*/_react.default.createElement(_icons.UserAddOutlined, null);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon, text);
  }
}, {
  title: fields.REMARK,
  dataIndex: 'remark'
}];
var tabCmp = [{
  name: authority.title,
  cmp: /*#__PURE__*/_react.default.createElement(_AuthorityCmp.default, null)
}, {
  name: roleUser.title,
  cmp: /*#__PURE__*/_react.default.createElement(_RoleUserCmp.default, null)
}, {
  name: authCode.title,
  cmp: /*#__PURE__*/_react.default.createElement(_AuthCodeCmp.default, null)
}];

var Index = function Index(_ref) {
  var dispatch = _ref.dispatch,
      dataList = _ref.dataList,
      selectedRowKeys = _ref.selectedRowKeys,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      namespace = _ref.namespace,
      visible = _ref.visible,
      record = _ref.record,
      showTab = _ref.showTab,
      _ref$activeKey = _ref.activeKey,
      activeKey = _ref$activeKey === void 0 ? '0' : _ref$activeKey;

  var _ref2 = selectedRows[0] || {},
      id = _ref2.id,
      type = _ref2.type;

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    dispatch({
      type: 'RoleManage/queryItem',
      payload: {
        activeKey: activeKey,
        objectAData: rows
      }
    });
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'RoleManage/packet',
      payload: {
        showTab: false
      }
    });
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    record.pid = record.pid || id || '0';
    dispatch({
      type: 'RoleManage/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var del = function del(hData) {
    return function () {
      dispatch({
        type: 'RoleManage/del',
        payload: {
          hData: hData,
          namespace: namespace
        }
      });
    };
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    var type = selectedRows[0].type;
    var showTab = type === 1 ? true : false;
    dispatch({
      type: 'RoleManage/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        showTab: showTab,
        objectAData: selectedRows[0],
        selectedRowKeys2: [],
        selectedRows2: [],
        selectedRowKeys3: [],
        selectedRows3: []
      }
    });

    if (showTab) {
      if (selectedRows[0].id === '01_ROLE_SYSTEM_01') {
        changePane(activeKey = '1', selectedRows[0]);
      } else {
        changePane(activeKey, selectedRows[0]);
      }
    }
  };

  var btns = [{
    name: buttons.create,
    btns: [{
      name: buttons.create_role,
      disabled: type === 1,
      func: function func() {
        toogleModal({
          type: 1
        });
      }
    }, {
      name: buttons.create_roleGroup,
      disabled: type === 1,
      func: function func() {
        toogleModal({
          type: 0
        });
      }
    }]
  }, {
    name: buttons.update_role,
    disabled: !(id && id !== '01_ROLE_SYSTEM_01'),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete_role,
    disabled: !(id && id !== '01_ROLE_SYSTEM_01'),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete_role,
        onOk: del(selectedRows)
      });
    }
  }];
  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var tableProp = {
    dataList: dataList,
    columns: columns,
    btns: btns,
    rowSelection: rowSelection,
    isTree: true
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp), /*#__PURE__*/_react.default.createElement(_antd.Drawer, {
    title: '详情',
    width: "50%",
    visible: showTab,
    onClose: closeTab
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    onChange: changePane,
    activeKey: activeKey,
    tabBarExtraContent: /*#__PURE__*/_react.default.createElement(_antd.Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/_react.default.createElement(_icons.CloseOutlined, null),
      onClick: closeTab
    })
  }, selectedRows.length && selectedRows[0].id === '01_ROLE_SYSTEM_01' ? /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: roleUser.title,
    key: '1'
  }, tabCmp[1].cmp) : tabCmp.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(TabPane, {
      tab: item.name,
      key: "".concat(index)
    }, item.cmp);
  }))), /*#__PURE__*/_react.default.createElement(_RoleForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var RoleManage = _ref3.RoleManage;
  return _objectSpread({}, RoleManage);
}

var _default = (0, _dva.connect)(mapStateToProps)(Index);

exports.default = _default;