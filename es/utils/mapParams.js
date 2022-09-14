/*
 * @Description: 映射参数集合
 */
export var languageMap = [{
  value: 'zh-CN',
  name: '中文'
}, {
  value: 'en-US',
  name: 'English'
}];
export var stateMap = {
  0: '新增',
  // C
  1: '已同步',
  // F
  2: '变更中',
  // U
  3: '签审状态',
  // S
  4: '历史状态',
  // H
  5: '已作废' // HS

}; //系统【状态】字段

export var state = [{
  value: 0,
  name: '维护中'
}, {
  value: 1,
  name: '签审中'
}, {
  value: 2,
  name: '已归档'
}, {
  value: 3,
  name: '检出'
}, {
  value: 4,
  name: '删除'
}];
export var objTypeMap = ['普通对象', '文件对象', '关联对象', '分类对象', '数据库视图'];
export var colorMap = ['#B8E986', '#F86F80', '#F8E71C', '#75EFD3', '#79B5FC'];
export var objImplclassMap = ['GeneralObject', 'file.FileObject', 'relation.RelationShipObject', 'relation.ClassRelationShipObject'];
export var editorMap = [{
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
export var ftypeMap = [{
  value: 'VARCHAR',
  name: '字符串'
}, {
  value: 'INT',
  name: '整型'
}, {
  value: 'DATETIME',
  name: '时间类型'
}, {
  value: 'DOUBLE',
  name: '双精度浮点型'
}, {
  value: 'FLOAT',
  name: '单精度浮点型'
}, {
  value: 'BOOLEAN',
  name: '布尔型'
}, {
  value: 'NUMERIC',
  name: '数值类型'
}, {
  value: 'LONGTEXT',
  name: '长文本类型'
}, {
  value: 'BLOB',
  name: '二进制'
}, {
  value: 'JSON',
  name: 'JSON类型'
}, {
  value: 'BIGINT',
  name: '长整型'
}];
export var formatMap = [{
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
export var eventTypeMap = [{
  value: 0,
  name: '事件项'
}, {
  value: 1,
  name: '事件组'
}];
export var wtypeMap = [{
  name: '确认框',
  value: 'comfirm'
}, {
  name: '对象form表单',
  value: 'objectPropertyPage'
}, {
  name: '其他对象form表单',
  value: 'otherObjectPropertyPage'
}, {
  name: '节点对象form表单',
  value: 'classNodeObjectPropertyNo'
}, {
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
  name: '装配质检录入',
  value: 'LoadQualityInspectionEntry'
}, {
  name: '质检录入',
  value: 'QualityInspectionEntry'
}, {
  name: '质检报告',
  value: 'QualityInspectionReport'
}, // { name: '批量新增', value: 'batchAdd' },
// { name: '批量修改', value: 'batchEdit' },
{
  name: '报表',
  value: 'report'
}, {
  name: '下载',
  value: 'downLoad'
}, {
  name: 'PLM文件下载',
  value: 'PLMfileDownload'
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
}, {
  name: '定制弹窗',
  value: 'customWindow'
}, {
  name: '明细Form表单',
  value: 'detailForm'
}, {
  name: '明细关联页',
  value: 'detailRelationPage'
}, {
  name: 'SPC控制图',
  value: 'spcControlChart'
}, {
  name: '图片预览',
  value: 'imagePreview'
}, {
  name: '内嵌三方页面',
  value: 'EmbedThreePartyPage'
}];
export var reqParamMap = [{
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
export var reqParamMap1 = [{
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
}];
export var reqParamMap2 = [{
  label: '父对象标识',
  value: 'objectA'
}, {
  label: '父对象选中数据',
  value: 'objectAData'
}, {
  label: '关联关系标识',
  value: 'relationShipNo'
}];
export var reqParamMap3 = [{
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
export var reqParamMap4 = [{
  label: '映射字段',
  value: 'mapFields'
}, {
  label: '其他参数',
  value: 'otherParam'
}];
export var reqParamMap5 = [{
  label: '父级ID',
  value: 'pId'
}, {
  label: '是否映射',
  value: 'isMap'
}];
export var gridTypeMap = [{
  value: 0,
  name: '树表'
}, {
  value: 1,
  name: '普通表'
}, {
  value: 2,
  name: '嵌套表'
}];
export var alignMap = [{
  value: 'left',
  name: '居左'
}, {
  value: 'center',
  name: '居中'
}, {
  value: 'right',
  name: '居右'
}];
export var mTypeMap = [{
  value: 1,
  name: '业务菜单'
}, {
  value: 2,
  name: '系统菜单'
}];
export var libraryMTYPEMap = [{
  value: 0,
  name: '页面菜单'
}, {
  value: 1,
  name: '对象菜单'
}, {
  value: 2,
  name: '关系菜单'
}];
export var mqMtypeMap = [{
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
export var rTypeMap = [{
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
export var facetypeMap = [{
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
}, {
  value: 8,
  name: '流程页面',
  color: '#F88960'
}];
export var IMPLTYPEMap = [{
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
export var relatedEventsMap = [{
  value: 'D',
  name: '删除'
}, {
  value: 'C',
  name: '复制'
}, {
  value: 'U',
  name: '变更'
}];
export var gTypeMap = [{
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
}, {
  value: 4,
  name: '字段组'
}];
export var codeTypeMap = [{
  value: 0,
  name: '分组码'
}, {
  value: 1,
  name: '分类码'
}, {
  value: 2,
  name: '流水码'
}];
export var todoTaskTabs = [{
  value: 0,
  name: '未开始',
  color: 'red'
}, // { value: 1, name: '进行中', color: '#F8E71C' },
{
  value: 2,
  name: '已完成',
  color: 'green'
}];
export var classTabPositionMap = [{
  value: 'top',
  name: '上'
}, {
  value: 'bottom',
  name: '下'
}, {
  value: 'left',
  name: '左'
}, {
  value: 'right',
  name: '右'
}];
export var gridOperation = [{
  value: 0,
  name: '明细'
}, {
  value: 1,
  name: '关联'
}, {
  value: 2,
  name: '流程历史'
}];
export var implclassMap = {
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
  acquisitionCodeEvent: 'editor.codegor.AcquisitionCodeEvent',
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
  disableUser: 'cn.hkdt.infinity.application.us.user.DisableUserEvent',
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
  startTodoEvent: 'cn.hkdt.infinity.application.ims.todo.event.StartTodoEvent',
  // 待办任务-任务完成
  finishTodoEvent: 'cn.hkdt.infinity.application.ims.todo.event.FinishTodoEvent',

  /**
   * 头部导航
   */
  queryTotalAnyPageDataRows: 'cn.hkdt.infinity.application.query.total.QueryTotalAnyPageDataRows',
  // 查看表格全部数据
  queryAllData: 'cn.hkdt.infinity.application.query.QueryAllData'
};