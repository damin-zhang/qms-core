import React from 'react';
import { connect } from 'dva';
import AssignRoleCmp from '../../component/systemPlatform/AssignRoleCmp';

var AssignRole = function AssignRole(_ref) {
  var dispatch = _ref.dispatch,
      assignRole = _ref.assignRole;
  var visible = assignRole.visible,
      _assignRole$rolesList = assignRole.rolesList,
      rolesList = _assignRole$rolesList === void 0 ? [] : _assignRole$rolesList,
      _assignRole$userHasRo = assignRole.userHasRolesList,
      userHasRolesList = _assignRole$userHasRo === void 0 ? [] : _assignRole$userHasRo,
      _assignRole$rolesIdLi = assignRole.rolesIdList,
      rolesIdList = _assignRole$rolesIdLi === void 0 ? [] : _assignRole$rolesIdLi,
      userId = assignRole.userId; //角色分配modal的关闭

  function cancel() {
    dispatch({
      type: 'assignRole/cancel'
    });
  }

  var props = {
    dispatch: dispatch,
    visible: visible,
    cancel: cancel,
    rolesList: rolesList,
    userHasRolesList: userHasRolesList,
    rolesIdList: rolesIdList,
    userId: userId
  };
  return /*#__PURE__*/React.createElement(AssignRoleCmp, props);
}; //将nva-model中state转为props


function mapStateToProps(_ref2) {
  var assignRole = _ref2.assignRole;
  return {
    assignRole: assignRole
  };
} //将nva-model关联到当前组件上


export default connect(mapStateToProps)(AssignRole);