function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Description: 角色管理
 */
import React from 'react';
import { CloseOutlined, UsergroupAddOutlined, UserAddOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import DragCmp from '../../component/common/drag/DragCmp';
import { Button, Tabs, Drawer } from 'antd';
import { confirm } from '../../utils/utils';
import language from '../../locale/language';
import TableWithBtn from '../../component/common/table/TableWithBtn';
import RoleForm from '../../component/userManage/roleManage/RoleForm';
import AuthorityCmp from '../../component/userManage/roleManage/AuthorityCmp';
import RoleUserCmp from '../../component/userManage/roleManage/RoleUserCmp';
import AuthCodeCmp from '../../component/userManage/roleManage/AuthCodeCmp';
var common = language.common,
    _language$userManage$ = language.userManage.roleManage,
    buttons = _language$userManage$.buttons,
    authority = _language$userManage$.authority,
    roleUser = _language$userManage$.roleUser,
    fields = _language$userManage$.fields,
    authCode = language.configPlatform.authCode;
var TabPane = Tabs.TabPane;
var columns = [{
  title: fields.RNAME,
  dataIndex: 'name',
  width: 150,
  render: function render(text, record) {
    var icon = record.type === 0 ? /*#__PURE__*/React.createElement(UsergroupAddOutlined, {
      style: {
        color: '#1890FF',
        fontSize: '18px'
      }
    }) : /*#__PURE__*/React.createElement(UserAddOutlined, null);
    return /*#__PURE__*/React.createElement(React.Fragment, null, icon, text);
  }
}, {
  title: fields.REMARK,
  dataIndex: 'remark'
}];
var tabCmp = [{
  name: authority.title,
  cmp: /*#__PURE__*/React.createElement(AuthorityCmp, null)
}, {
  name: roleUser.title,
  cmp: /*#__PURE__*/React.createElement(RoleUserCmp, null)
}, {
  name: authCode.title,
  cmp: /*#__PURE__*/React.createElement(AuthCodeCmp, null)
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
      confirm({
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
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/React.createElement(TableWithBtn, tableProp), /*#__PURE__*/React.createElement(Drawer, {
    title: '详情',
    width: "50%",
    visible: showTab,
    onClose: closeTab
  }, /*#__PURE__*/React.createElement(Tabs, {
    onChange: changePane,
    activeKey: activeKey,
    tabBarExtraContent: /*#__PURE__*/React.createElement(Button, {
      size: "small",
      className: "extra-btn",
      icon: /*#__PURE__*/React.createElement(CloseOutlined, null),
      onClick: closeTab
    })
  }, selectedRows.length && selectedRows[0].id === '01_ROLE_SYSTEM_01' ? /*#__PURE__*/React.createElement(TabPane, {
    tab: roleUser.title,
    key: '1'
  }, tabCmp[1].cmp) : tabCmp.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: item.name,
      key: "".concat(index)
    }, item.cmp);
  }))), /*#__PURE__*/React.createElement(RoleForm, formProps));
};

function mapStateToProps(_ref3) {
  var RoleManage = _ref3.RoleManage;
  return _objectSpread({}, RoleManage);
}

export default connect(mapStateToProps)(Index);