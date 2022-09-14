"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _AssignRoleCmp = _interopRequireDefault(require("../../component/systemPlatform/AssignRoleCmp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return /*#__PURE__*/_react.default.createElement(_AssignRoleCmp.default, props);
}; //将nva-model中state转为props


function mapStateToProps(_ref2) {
  var assignRole = _ref2.assignRole;
  return {
    assignRole: assignRole
  };
} //将nva-model关联到当前组件上


var _default = (0, _dva.connect)(mapStateToProps)(AssignRole);

exports.default = _default;