"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wtypeMap = exports.todoTaskTabs = exports.stateMap = exports.state = exports.reqParamMap4 = exports.reqParamMap3 = exports.reqParamMap2 = exports.reqParamMap1 = exports.reqParamMap = exports.relatedEventsMap = exports.rTypeMap = exports.objTypeMap = exports.objImplclassMap = exports.mqMtypeMap = exports.mTypeMap = exports.libraryMTYPEMap = exports.languageMap = exports.implclassMap = exports.gridTypeMap = exports.gTypeMap = exports.ftypeMap = exports.formatMap = exports.facetypeMap = exports.eventTypeMap = exports.editorMap = exports.colorMap = exports.alignMap = exports.IMPLTYPEMap = exports.EnCodeTypeMap = void 0;

/*
 * @Description: 映射参数集合
 */
var languageMap = [{
  value: 'zh-CN',
  name: '中文'
}, {
  value: 'en-US',
  name: 'English'
}];
exports.languageMap = languageMap;
var stateMap = {
  0: 'New',
  1: 'Synced',
  2: 'Changing',
  3: 'Authorization',
  4: 'Historical state',
  5: 'invalid'
};
exports.stateMap = stateMap;
var state = [{
  value: 0,
  name: 'Under maintenance'
}, {
  value: 1,
  name: 'Authorization'
}, {
  value: 2,
  name: 'Closed'
}, {
  value: 3,
  name: 'Checkout'
}, {
  value: 4,
  name: 'Delete'
}];
exports.state = state;
var objTypeMap = ['Common Object', 'File Object', 'Related Object', 'Class Object', 'DB View'];
exports.objTypeMap = objTypeMap;
var colorMap = ['#B8E986', '#F86F80', '#F8E71C', '#75EFD3', '#79B5FC'];
exports.colorMap = colorMap;
var objImplclassMap = ['GeneralObject', 'file.FileObject', 'relation.RelationShipObject', 'relation.ClassRelationShipObject'];
exports.objImplclassMap = objImplclassMap;
var editorMap = [{
  value: 'TextBox',
  name: '文本框'
}, {
  value: 'TextArea',
  name: '文本域'
}, {
  value: 'RichText',
  name: '富文本'
}, {
  value: 'DateTime',
  name: '时间选择器'
}, {
  value: 'CheckBox',
  name: '复选框'
}, {
  value: 'ValueList',
  name: '固定值列表'
}, {
  value: 'ValueListDynamic',
  name: '动态值列表'
}, {
  value: 'MapValueList',
  name: '映射值列表'
}, {
  value: 'DBValueList',
  name: 'DB值列表(单列)'
}, {
  value: 'DBValueListMultiple',
  name: 'DB值列表(多列)'
}, {
  value: 'RadioEditor',
  name: '单选编辑器'
}, {
  value: 'CheckEditor',
  name: '多选编辑器'
}, {
  value: 'ObjectSelector',
  name: '引用对象编辑器'
}, {
  value: 'ViewSelector',
  name: '引用视图编辑器'
}, {
  value: 'UserSelector',
  name: '单用户选择器'
}, {
  value: 'UsersSelector',
  name: '多用户选择器'
}, {
  value: 'DeptSelector',
  name: '部门选择器'
}, {
  value: 'FileSelector',
  name: '文件选择器'
}, {
  value: 'OnSelector',
  name: '编码生成器'
}, {
  value: 'Password',
  name: '密码框'
}, {
  value: 'Slider',
  name: '进度条'
}, {
  value: 'Rate',
  name: '评分/等级'
}, {
  value: 'ObjectNoSelector',
  name: '对象标识选择器'
}, {
  value: 'ImageEditor',
  name: '图片编辑器'
}, {
  value: 'JSONEditor',
  name: 'JSON编辑器'
}, {
  value: 'Switch',
  name: '开关编辑器'
}];
exports.editorMap = editorMap;
var ftypeMap = [{
  value: 'VARCHAR',
  name: 'VARCHAR'
}, {
  value: 'INT',
  name: 'INT'
}, {
  value: 'DATETIME',
  name: 'Data & Time'
}, {
  value: 'DOUBLE',
  name: 'Double'
}, {
  value: 'FLOAT',
  name: 'Float'
}, {
  value: 'BOOLEAN',
  name: 'Boolean type(O)'
}, {
  value: 'NUMERIC',
  name: 'Numeric'
}, {
  value: 'LONGTEXT',
  name: 'Long Text'
}, {
  value: 'BLOB',
  name: 'BLOB'
}, {
  value: 'BIGINT',
  name: 'Big INT'
}];
exports.ftypeMap = ftypeMap;
var formatMap = [{
  value: 'YYYY',
  name: '年'
}, {
  value: 'YYYY-MM',
  name: '年-月'
}, {
  value: 'YYYY-MM-DD',
  name: '年-月-日'
}, {
  value: 'YYYY-MM-DD HH',
  name: '年-月-日 时'
}, {
  value: 'YYYY-MM-DD HH:mm',
  name: '年-月-日 时:分'
}, {
  value: 'YYYY-MM-DD HH:mm:ss',
  name: '年-月-日 时:分:秒'
}];
exports.formatMap = formatMap;
var eventTypeMap = [{
  value: 0,
  name: '菜单项'
}, {
  value: 1,
  name: '菜单组'
}];
exports.eventTypeMap = eventTypeMap;
var wtypeMap = [{
  name: '确认框',
  value: 'comfirm'
}, {
  name: '对象form表单',
  value: 'objectPropertyPage'
}, {
  name: '其他对象form表单',
  value: 'otherObjectPropertyPage'
}, // { name: '节点对象form表单', value: 'classNodeObjectPropertyNo' },
{
  name: '对象关联form表单',
  value: 'objectRelationPage'
}, {
  name: '查询对象视图form表单',
  value: 'queryObjectView'
}, {
  name: '分类对象视图form表单',
  value: 'classObjectView'
}, {
  name: '批量维护',
  value: 'batchMaintain'
}, {
  name: '质检录入',
  value: 'QualityInspectionEntry'
}, // { name: '批量新增', value: 'batchAdd' },
// { name: '批量修改', value: 'batchEdit' },
{
  name: '报表',
  value: 'report'
}, {
  name: '下载',
  value: 'downLoad'
}, {
  name: '数据导入',
  value: 'dataImport'
}, {
  name: '文件浏览',
  value: 'browseFiles'
}, {
  name: '查看图片',
  value: 'viewImage'
}, {
  name: '直接请求后台',
  value: 'directRequest'
}, {
  name: '流程实例列表',
  value: 'processInstanceList'
}];
exports.wtypeMap = wtypeMap;
var reqParamMap = [{
  label: '主对象参数:',
  disabled: true,
  value: '主对象参数'
}, {
  label: '对象标识',
  value: 'objectNo'
}, {
  label: 'form表单标识',
  value: 'objectPropertyPageNo'
}, {
  label: '表格标识',
  value: 'objectGridNo'
}, {
  label: '选中数据(多选)',
  value: 'hData'
}, {
  label: '选中数据(单选)',
  value: 'hSingleData'
}, {
  label: '输入值',
  value: 'data'
}, {
  label: '输入值(多行)',
  value: 'datas'
}, {
  label: '当前页码',
  value: 'page'
}, {
  label: '表格数据',
  value: 'rData'
}, {
  label: '关联关系标识',
  value: 'relationShipNo'
}, {
  label: '父对象参数:',
  disabled: true,
  value: '父对象参数'
}, {
  label: '父对象标识',
  value: 'objectA'
}, {
  label: '父对象选中数据',
  value: 'objectAData'
}, {
  label: '父id',
  value: 'pId'
}, {
  label: '分类页面参数:',
  disabled: true,
  value: '分类页面参数'
}, {
  label: '分类节点对象标识',
  value: 'classNodeObjectNo'
}, {
  label: '分类业务对象标识',
  value: 'classBusinessObjectNo'
}, {
  label: '分类对象标识',
  value: 'classObjectNo'
}, {
  label: '分类节点属性页标识',
  value: 'classNodeObjectPropertyNo'
}, {
  label: '分类节点数据',
  value: 'classNodeData'
}, {
  label: '其他参数:',
  disabled: true,
  value: '其他参数'
}, {
  label: '映射字段',
  value: 'mapFields'
}, {
  label: '其他参数',
  value: 'otherParam'
}];
exports.reqParamMap = reqParamMap;
var reqParamMap1 = [{
  label: '对象标识',
  value: 'objectNo'
}, {
  label: 'form表单标识',
  value: 'objectPropertyPageNo'
}, {
  label: '表格标识',
  value: 'objectGridNo'
}, {
  label: '选中数据(多选)',
  value: 'hData'
}, {
  label: '选中数据(单选)',
  value: 'hSingleData'
}, {
  label: '输入值',
  value: 'data'
}, {
  label: '输入值(多行)',
  value: 'datas'
}, {
  label: '当前页码',
  value: 'page'
}, {
  label: '表格数据',
  value: 'rData'
}, {
  label: '关联关系标识',
  value: 'relationShipNo'
}];
exports.reqParamMap1 = reqParamMap1;
var reqParamMap2 = [{
  label: '父对象标识',
  value: 'objectA'
}, {
  label: '父对象选中数据',
  value: 'objectAData'
}, {
  label: '父id',
  value: 'pId'
}];
exports.reqParamMap2 = reqParamMap2;
var reqParamMap3 = [{
  label: '分类节点对象标识',
  value: 'classNodeObjectNo'
}, {
  label: '分类业务对象标识',
  value: 'classBusinessObjectNo'
}, {
  label: '分类对象标识',
  value: 'classObjectNo'
}, {
  label: '分类节点属性页标识',
  value: 'classNodeObjectPropertyNo'
}, {
  label: '分类节点数据',
  value: 'classNodeData'
}];
exports.reqParamMap3 = reqParamMap3;
var reqParamMap4 = [{
  label: '映射字段',
  value: 'mapFields'
}, {
  label: '其他参数',
  value: 'otherParam'
}];
exports.reqParamMap4 = reqParamMap4;
var gridTypeMap = [{
  value: 0,
  name: '树表'
}, {
  value: 1,
  name: '普通表'
}, {
  value: 2,
  name: '嵌套表'
}];
exports.gridTypeMap = gridTypeMap;
var alignMap = [{
  value: 'left',
  name: '居左'
}, {
  value: 'center',
  name: '居中'
}, {
  value: 'right',
  name: '居右'
}];
exports.alignMap = alignMap;
var mTypeMap = [{
  value: 1,
  name: '业务菜单'
}, {
  value: 2,
  name: '系统菜单'
}];
exports.mTypeMap = mTypeMap;
var libraryMTYPEMap = [{
  value: 0,
  name: '页面菜单'
}, {
  value: 1,
  name: '对象菜单'
}, {
  value: 2,
  name: '关系菜单'
}];
exports.libraryMTYPEMap = libraryMTYPEMap;
var mqMtypeMap = [{
  value: 1,
  name: 'SQL脚本'
}, {
  value: 2,
  name: '存储过程'
}, {
  value: 3,
  name: 'Java实现类'
}, {
  value: 4,
  name: 'JS脚本'
}];
exports.mqMtypeMap = mqMtypeMap;
var rTypeMap = [{
  name: '关联属性页',
  value: 'relationproperty'
}, {
  name: '关联关系页',
  value: 'relationpage'
}, {
  name: '关联查询页',
  value: 'relationqueryview'
}, {
  name: '流程明细',
  value: 'processDetail'
}, {
  name: '关联分类视图',
  value: 'relationclassview'
}, {
  name: '变更历史',
  value: 'changeHistory'
}, {
  name: '输入',
  value: 'input'
}, {
  name: '输出',
  value: 'output'
}, {
  name: '动态关联页',
  value: 'dynamicRelationPage'
}];
exports.rTypeMap = rTypeMap;
var facetypeMap = [{
  value: -1,
  name: '导航组'
}, {
  value: 0,
  name: '定制页面'
}, {
  value: 1,
  name: '普通页面',
  color: '#B8E986'
}, {
  value: 2,
  name: '上下关联页面',
  color: '#F86F80'
}, {
  value: 3,
  name: '三级关联页面',
  color: '#F8E71C'
}, {
  value: 4,
  name: '分类关联页面',
  color: '#75EFD3'
}, {
  value: 5,
  name: '自动分类页面',
  color: '#79B5FC'
}, {
  value: 6,
  name: '报表页面',
  color: '#F5A623'
}, {
  value: 7,
  name: '日历视图',
  color: '#F5A623'
}, {
  value: 21,
  name: '质检录入页面',
  color: '#DB51F6'
}, {
  value: 22,
  name: '自定义模板',
  color: '#CE9178'
}];
exports.facetypeMap = facetypeMap;
var IMPLTYPEMap = [{
  value: 1,
  name: '实现类'
}, {
  value: 2,
  name: '存储过程'
}, {
  value: 3,
  name: 'restful'
}, {
  value: 4,
  name: '信息总线'
}];
exports.IMPLTYPEMap = IMPLTYPEMap;
var relatedEventsMap = [{
  value: 'D',
  name: '删除'
}, {
  value: 'C',
  name: '复制'
}, {
  value: 'U',
  name: '变更'
}];
exports.relatedEventsMap = relatedEventsMap;
var gTypeMap = [{
  value: 0,
  name: '常规字段'
}, {
  value: 1,
  name: '序号字段'
}, {
  value: 2,
  name: '脚本字段'
}, {
  value: 3,
  name: 'URL字段'
}];
exports.gTypeMap = gTypeMap;
var EnCodeTypeMap = [{
  value: 0,
  name: 'Block code'
}, {
  value: 1,
  name: 'Classification code'
}, {
  value: 2,
  name: 'Stream code'
}];
exports.EnCodeTypeMap = EnCodeTypeMap;
var todoTaskTabs = [{
  value: 0,
  name: '未开始',
  color: '#B8E986'
}, {
  value: 1,
  name: '进行中',
  color: '#F86F80'
}, {
  value: 2,
  name: '已完成',
  color: '#F8E71C'
}];
exports.todoTaskTabs = todoTaskTabs;
var implclassMap = {
  querySingleData: 'cn.hkdt.infinity.application.query.QuerySingleObjectData',
  querySubpageData: {
    relationpage: 'cn.hkdt.infinity.application.query.QueryObjectRelationPageData',
    relationqueryview: 'cn.hkdt.infinity.application.query.QueryObjectRelationQueryViewData',
    changeHistory: 'cn.hkdt.infinity.application.sys.log.QueryChangeHistoryData',
    relationclassview: 'cn.hkdt.infinity.application.view.RealtionClassViewGetNodeData',
    input: 'task.query.GetTaskInOrOutputData',
    output: 'task.query.GetTaskInOrOutputData',
    authority: 'auth.QueryFunctionalPermissionsData'
  },
  queryClassNodeData: 'cn.hkdt.infinity.application.query.QueryClassNodeData',
  queryClassObjectData: 'cn.hkdt.infinity.application.query.QueryClassObjectData',
  queryContextMenu: 'mate.MenuEnableAuthEvent',
  queryAutoClassData: 'cn.hkdt.infinity.application.view.ClassViewGetNodeData',
  queryRelationAutoClassData: 'cn.hkdt.infinity.application.view.RealtionClassViewGetNodeData',
  queryObjectViewData: 'cn.hkdt.infinity.application.query.QueryAddRelationObjectData',
  queryObjectSelector: 'editor.ObjectSelector',
  queryViewData: 'cn.hkdt.infinity.application.query.view.GainQueryViewData',
  acquisitionCodeAction: 'editor.codegor.AcquisitionCodeEvent',
  queryUserSelector: 'editor.SelectUserEditor',
  // 查询日历视图所有数据
  queryCalendarViewAllData: 'calendar.GainCalendarAllDataEvent',
  advancedSearch: 'cn.hkdt.infinity.application.query.search.AdvancedSearchObjEvent',
  searchSingleData: 'cn.hkdt.infinity.application.query.search.SearchSingleObjectEvent',
  searchRelationPageData: 'cn.hkdt.infinity.application.query.search.SearchRelationPageEvent',
  searchClassRelationPageData: 'cn.hkdt.infinity.application.query.search.SearchClassObjectEvent',
  setAuthorize: 'auth.AuthorizeEvent',
  queryDBSelector: 'editor.DBList',
  queryDeptSelector: 'editor.SelectDeptEditor',
  moveNode: 'ClassNodeMigrationEvent',
  moveNodeData: 'ClassNodeObjectDataMigrationEvent',
  createDepart: 'cn.hkdt.infinity.application.sys.common.SingleTableCreate',
  createUser: 'cn.hkdt.infinity.application.sys.user.CreateUser',
  updateDepart: 'cn.hkdt.infinity.application.sys.common.SingleTableUpdate',
  queryDepart: 'cn.hkdt.infinity.application.sys.common.SingleTableQuery',
  deleteDepart1: 'cn.hkdt.infinity.application.sys.dept.DeptDelete',
  deleteStaff: 'cn.hkdt.infinity.application.sys.spersonnel.SpersonnelDelete',
  deleteStaffUser: 'cn.hkdt.infinity.application.sys.user.UserDelete',
  createUserEnv: 'cn.hkdt.infinity.application.us.user.CreateUserWKEvnEvent',
  assignModelAuth: 'cn.hkdt.infinity.application.sys.user.AllowModelEvent',
  queryRole: 'cn.hkdt.infinity.application.sys.role.RoleQuery',
  deleteRole: 'cn.hkdt.infinity.application.sys.role.RoleDelete',
  queryRoleUser: 'cn.hkdt.infinity.application.sys.user.QueryUsersByRoleId',
  addRelationShipObj: 'AddRelationShipObjEvent',
  removeRelationShipObj: 'cn.hkdt.infinity.application.sys.role.RemoveUser',
  refreshAutoClassTree: 'cn.hkdt.infinity.application.view.RefreshClassViewTreeNodeData',
  // 员工管理迁移数据
  moveNodeDataStaffManage: 'cn.hkdt.infinity.application.sys.common.MutilSingleTableUpdate',
  searchAllStaffData: 'cn.hkdt.infinity.application.us.user.SearchAllUserEvent',

  /**
   * 待办任务
   */
  // 待办任务-查询单对象数据
  querySingleDataTodo: 'cn.hkdt.infinity.application.ims.todo.query.QueryTaskTodoObjectData',
  // 查询待办任务建模
  queryTodoPageModelData: 'cn.hkdt.infinity.application.ims.todo.query.md.GainPageModelDataEvent',
  // 查询待办任务数据
  queryTodoData: 'cn.hkdt.infinity.application.ims.todo.query.QueryTaskTodoDataByStatus',
  // 待办任务-开始执行
  startTodoAction: 'cn.hkdt.infinity.application.ims.todo.event.StartTodoEvent',
  // 待办任务-任务完成
  finishTodoAction: 'cn.hkdt.infinity.application.ims.todo.event.FinishTodoEvent'
};
exports.implclassMap = implclassMap;