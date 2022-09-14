/*
 * @Description: 定制页面名称/标识/路径
 */
import language from '@/locale/language'; // import { reportIP } from '../service/config'

var commonNavigation = language.commonNavigation,
    _language$configPlatf = language.configPlatform,
    title = _language$configPlatf.title,
    tableConfig = _language$configPlatf.tableConfig,
    navMenu = _language$configPlatf.navMenu,
    relationship = _language$configPlatf.relationship,
    inspectionModal = _language$configPlatf.inspectionModal,
    queryView = _language$configPlatf.queryView,
    autoClass = _language$configPlatf.autoClass,
    mqAffair = _language$configPlatf.mqAffair,
    mqLines = _language$configPlatf.mqLines,
    sheetTemplate = _language$configPlatf.sheetTemplate,
    apiDocument = _language$configPlatf.apiDocument,
    druidMonitor = _language$configPlatf.druidMonitor,
    reportManagement = _language$configPlatf.reportManagement,
    gridReport = _language$configPlatf.gridReport,
    largeScreenReport = _language$configPlatf.largeScreenReport,
    reportDataSorce = _language$configPlatf.reportDataSorce,
    databaseQuery = _language$configPlatf.databaseQuery,
    globalTable = _language$configPlatf.globalTable,
    other = _language$configPlatf.other,
    staffManage = language.userManage.staffManage,
    _language$activiti = language.activiti,
    Online_design = _language$activiti.Online_design,
    Process_management = _language$activiti.Process_management,
    In_operation = _language$activiti.In_operation,
    Task_ended = _language$activiti.Task_ended,
    Workflow_tasks = _language$activiti.Workflow_tasks,
    Completed_tasks = _language$activiti.Completed_tasks,
    My_application = _language$activiti.My_application,
    Workflow_tasks2 = _language$activiti.Workflow_tasks2,
    _language$systemPlatf = language.systemPlatform,
    Coding_specification = _language$systemPlatf.Coding_specification,
    system_log = _language$systemPlatf.system_log,
    operation_log = _language$systemPlatf.operation_log,
    fiel_log = _language$systemPlatf.fiel_log,
    service_log = _language$systemPlatf.service_log,
    others = _language$systemPlatf.others,
    ServiceConfig = _language$systemPlatf.ServiceConfig,
    report = _language$systemPlatf.report,
    _language$qualityGate = language.qualityGate,
    Quality_gate = _language$qualityGate.Quality_gate,
    Data_panel = _language$qualityGate.Data_panel,
    tasks = _language$qualityGate.tasks,
    Role_management = _language$qualityGate.Role_management,
    viewFields = language.viewFields,
    JsScriptFields = language.JsScriptFields,
    dataDictionary = language.dataDictionary;
export var customPage = [{
  NO: 'tableConfig',
  CAPTION: tableConfig.title,
  ICON: 'edit',
  COMPONENT: require('../pages/configPlatform/tableConfig').default
}, {
  NO: 'navMenu',
  CAPTION: navMenu.title,
  ICON: 'edit',
  COMPONENT: require('../pages/configPlatform/navMenu').default
}, {
  NO: 'relationship',
  CAPTION: relationship.title,
  ICON: 'edit',
  COMPONENT: require('../pages/configPlatform/relationship').default
}, {
  NO: 'jsScriptLibrary',
  CAPTION: JsScriptFields.JsScriptLibrary,
  ICON: 'profile',
  COMPONENT: require('../pages/configPlatform/jsScriptLibrary').default
}, {
  NO: 'inspectionModel',
  CAPTION: inspectionModal.title,
  ICON: 'profile',
  COMPONENT: require('../pages/configPlatform/inspectionModel').default
}, {
  NO: 'reportModel',
  CAPTION: inspectionModal.reportTitle,
  ICON: 'profile',
  COMPONENT: require('../pages/configPlatform/reportModel').default
}, {
  NO: 'queryView',
  CAPTION: queryView.title,
  ICON: 'edit',
  COMPONENT: require('../pages/configPlatform/queryView').default
}, {
  NO: 'autoClass',
  CAPTION: autoClass.title,
  ICON: 'edit',
  COMPONENT: require('../pages/configPlatform/autoClass').default
}, {
  NO: 'mqAffair',
  CAPTION: mqAffair.title,
  ICON: 'read',
  COMPONENT: require('../pages/configPlatform/mqAffair').default
}, {
  NO: 'mqLines',
  CAPTION: mqLines.title,
  ICON: 'read',
  COMPONENT: require('../pages/configPlatform/mqLines').default
}, {
  NO: 'sheetTemplate',
  CAPTION: sheetTemplate.title,
  ICON: 'table',
  COMPONENT: require('../pages/configPlatform/sheetTemplate').default
}, // 数据字典
// {
//   NO: 'DataDictionary',
//   CAPTION: dataDictionary.title,
//   ICON: 'table',
//   COMPONENT: require('../pages/systemPlatform/DataDictionary').default,
// },
// {
//   NO: 'ProcessDesign',
//   CAPTION: Model_management,
//   ICON: 'project',
//   COMPONENT: require('../pages/activiti/modelManage/ActModel').default,
// },
{
  NO: 'ProcessInstance',
  CAPTION: Process_management,
  ICON: 'sync',
  COMPONENT: require('../pages/activiti/modelManage/ActProcdef').default
}, {
  NO: 'RunningProcess',
  CAPTION: In_operation,
  ICON: 'setting',
  COMPONENT: require('../pages/activiti/ProcessManage/ActRunProcess').default
}, {
  NO: 'EndProcess',
  CAPTION: Task_ended,
  ICON: 'setting',
  COMPONENT: require('../pages/activiti/ProcessManage/ActEndProcess').default
}, {
  NO: 'TodoProcess',
  CAPTION: Workflow_tasks,
  ICON: 'setting',
  COMPONENT: require('../pages/activiti/personalTask/ActTaskToDo').default
}, {
  NO: 'DoneProcess',
  CAPTION: Completed_tasks,
  ICON: 'setting',
  COMPONENT: require('../pages/activiti/personalTask/ActTaskDone').default
}, {
  NO: 'MyProcess',
  CAPTION: My_application,
  ICON: 'setting',
  COMPONENT: require('../pages/activiti/personalTask/ActMyProcess').default
}, {
  NO: 'workflowTaskManagement',
  CAPTION: Workflow_tasks2,
  ICON: 'setting',
  COMPONENT: require('../pages/activiti/activitiCommon/WorkflowTaskManagement').default
}, {
  NO: 'CodeStandard',
  CAPTION: Coding_specification,
  ICON: 'setting',
  COMPONENT: require('../pages/systemPlatform/codeStandard').default
}, // {  已修改到服务配置
//   NO: 'systemLog',
//   CAPTION: system_log,
//   ICON: 'setting',
//   COMPONENT: require('../pages/systemPlatform/systemLog').default
// },
{
  NO: 'ServiceConfig',
  CAPTION: ServiceConfig.title,
  COMPONENT: require('../pages/systemPlatform/serviceConfig').default
}, {
  NO: 'SystemLog',
  CAPTION: system_log,
  ICON: 'setting',
  COMPONENT: require('../pages/systemPlatform/SystemLogs').default
}, {
  NO: 'OperationLog',
  CAPTION: operation_log,
  ICON: 'setting',
  COMPONENT: require('../pages/systemPlatform/operationLog').default
}, {
  NO: 'FielLog',
  CAPTION: fiel_log,
  ICON: 'setting',
  COMPONENT: require('../pages/systemPlatform/fielLog').default
}, {
  NO: 'ServiceLog',
  CAPTION: service_log,
  ICON: 'setting',
  COMPONENT: require('../pages/systemPlatform/serviceLog').default
}, {
  NO: 'Other',
  CAPTION: others,
  ICON: 'setting',
  COMPONENT: require('../pages/systemPlatform/others').default
}, {
  NO: 'QUALITY_GATE_FL',
  CAPTION: Quality_gate,
  ICON: 'setting',
  COMPONENT: require('../pages/qualityGate/qualityGate').default
}, {
  NO: 'DataPanel',
  CAPTION: Data_panel,
  ICON: 'setting',
  COMPONENT: require('../pages/fineReport/DataStats').default
}, {
  NO: 'UpcomingTasks',
  CAPTION: tasks,
  ICON: 'setting',
  COMPONENT: require('../pages/notice/TodoTaskCommon').default
}, {
  NO: 'StaffManage',
  CAPTION: staffManage.title2,
  COMPONENT: require('../pages/userManage/staffManage').default
}, {
  NO: 'RoleManage',
  CAPTION: Role_management,
  COMPONENT: require('../pages/userManage/roleManage').default
}, {
  NO: 'DepartmentManage',
  CAPTION: staffManage.title1,
  COMPONENT: require('../pages/userManage/departmentManage').default
}, {
  NO: 'databaseQuery',
  CAPTION: databaseQuery.title,
  COMPONENT: require('../pages/configPlatform/databaseQuery').default
}, {
  NO: 'globalTable',
  CAPTION: globalTable.title,
  ICON: 'table',
  COMPONENT: require('../pages/configPlatform/globalTable').default
}, {
  NO: 'apiDocument',
  CAPTION: apiDocument.title,
  ICON: 'api',
  COMPONENT: require('../pages/configPlatform/apiDocument').default
}, {
  NO: 'druidMonitor',
  CAPTION: druidMonitor.title,
  ICON: 'desktop',
  COMPONENT: require('../pages/configPlatform/druidMonitor').default
}, {
  NO: 'onlineDesign',
  CAPTION: Online_design,
  COMPONENT: require('../pages/activiti/modelManage/OnlineDesign').default
}, {
  NO: 'ReportManagement',
  CAPTION: report,
  COMPONENT: require('../pages/systemPlatform/reportManagement').default
}, // 检验及时完成率
{
  NO: 'timelinessReport',
  CAPTION: viewFields.InspectionTimeliness,
  COMPONENT: require('../pages/reportManage/Timeliness').default
}, {
  NO: 'badnessReport',
  CAPTION: viewFields.rejectRatio,
  COMPONENT: require('../pages/reportManage/Badness').default
}, {
  NO: 'supplierDPPM',
  CAPTION: viewFields.dppm,
  COMPONENT: require('../pages/reportManage/supplierDPPM').default
}, {
  NO: 'sample',
  CAPTION: viewFields.sample,
  COMPONENT: require('../pages/reportManage/Sample').default
}, {
  NO: 'inspectionReport',
  CAPTION: viewFields.inspection,
  COMPONENT: require('../pages/reportManage/Inspection').default
}, {
  NO: 'inspectionNumReport',
  CAPTION: viewFields.inspectionNum,
  COMPONENT: require('../pages/reportManage/InspectionNum').default
}, {
  NO: 'supplierRateReport',
  CAPTION: viewFields.supplierRate,
  COMPONENT: require('../pages/reportManage/SupplierRate').default
}, // {
//   NO: 'supplierPerf',
//   CAPTION: '供应商绩效管理',
//   COMPONENT: require('../pages/reportManage/PerfManage/supplierPerf').default
// },
// {
//   NO: 'supplierSearch',
//   CAPTION: '供应商查询',
//   COMPONENT: require('../pages/reportManage/PerfManage/supplierSearch').default
// },
{
  NO: 'eChartsTest',
  CAPTION: 'eChartsTest',
  COMPONENT: require('../pages/reportManage/echarts').default
}, // 质量追溯
{
  NO: 'RawMaterialQT',
  CAPTION: '原材料追溯',
  COMPONENT: require('../pages/qualityTracing/rawMaterialQT').default
}, {
  NO: 'ProductTrace',
  CAPTION: '光伏产品追溯',
  COMPONENT: require('../pages/qualityTracing/ProductTrace').default
}, {
  NO: 'PolySiliconTrace',
  CAPTION: '多晶硅产品追溯',
  COMPONENT: require('../pages/qualityTracing/PolySiliconTrace').default
}, {
  NO: 'PrintTrace',
  CAPTION: '样片批次追溯',
  COMPONENT: require('../pages/qualityTracing/PrintTrace').default
}, {
  NO: 'CutRoundBarTrace',
  CAPTION: '反截短圆棒信息追溯',
  COMPONENT: require('../pages/qualityTracing/CutRoundBarTrace').default
}, {
  NO: 'RoundBarTrace',
  CAPTION: '短圆棒信息追溯',
  COMPONENT: require('../pages/qualityTracing/RoundBarTrace').default
}, {
  NO: 'SketchyBarTrace',
  CAPTION: '毛棒信息追溯',
  COMPONENT: require('../pages/qualityTracing/SketchyBarTrace').default
}, {
  NO: 'SquareBarTrace',
  CAPTION: '方棒信息追溯',
  COMPONENT: require('../pages/qualityTracing/SquareBarTrace').default
}, {
  NO: 'BatchNodeTraceability',
  CAPTION: '产品追溯链',
  COMPONENT: require('../pages/qualityTracing/BatchNodeTraceability').default
}, {
  NO: 'NewEnergyBatchNodeTrace',
  CAPTION: '多晶硅产品追溯链',
  COMPONENT: require('../pages/qualityTracing/NewEnergyBatchNodeTrace').default
}, {
  NO: 'RecycleMaterial',
  CAPTION: '回收料追溯',
  COMPONENT: require('../pages/qualityTracing/RecycleMaterial').default
}, {
  NO: 'Flygt',
  COMPONENT: require('../pages/LSD_Custom/flygt').default
}, {
  NO: 'Ozone',
  COMPONENT: require('../pages/LSD_Custom/ozone').default
}, {
  NO: 'AC',
  COMPONENT: require('../pages/LSD_Custom/ac').default
}]; // 常用导航 CommonNavigation

export var commonNavigationList = {
  CAPTION: commonNavigation.title,
  ICON: 'heart',
  NO: 'CommonNavigation',
  ID: 'collect',
  PID: 0,
  META: {
    ICON: 'heart',
    ENNAME: 'Common Navigation'
  }
}; // 配置平台导航配置

export var configPlatform = [// 配置平台
{
  CAPTION: title,
  NO: 'ConfigPlatform',
  ID: 'config',
  PID: 0,
  META: {
    ICON: 'pic-right',
    ENNAME: 'Config Platform'
  }
}, // 业务对象
{
  CAPTION: tableConfig.title,
  NO: 'tableConfig',
  ID: 'tableConfig',
  PID: 'config',
  META: {
    ICON: 'project',
    ENNAME: 'Business Object'
  }
}, // 导航菜单
{
  CAPTION: navMenu.title,
  NO: 'navMenu',
  ID: 'navMenu',
  PID: 'config',
  META: {
    ICON: 'bars',
    ENNAME: 'Navigation Menu'
  }
}, // 关联关系
{
  CAPTION: relationship.title,
  NO: 'relationship',
  ID: 'relationship',
  PID: 'config',
  META: {
    ICON: 'api',
    ENNAME: 'Relationship'
  }
}, // JS脚本库
{
  CAPTION: 'JS脚本库',
  NO: 'jsScriptLibrary',
  ID: 'jsScriptLibrary',
  PID: 'other',
  META: {
    ICON: 'profile',
    ENNAME: 'JS Script Library'
  }
}, // 检验模板
{
  CAPTION: inspectionModal.title,
  NO: 'inspectionModel',
  ID: 'inspectionModel',
  PID: 'other',
  META: {
    ICON: 'profile',
    ENNAME: 'Inspection Template'
  }
}, // 报告模板
{
  CAPTION: inspectionModal.reportTitle,
  NO: 'reportModel',
  ID: 'reportModel',
  PID: 'other',
  META: {
    ICON: 'fund',
    ENNAME: 'Report Template'
  }
}, // 查询视图
{
  CAPTION: queryView.title,
  NO: 'queryView',
  ID: 'queryView',
  PID: 'config',
  META: {
    ICON: 'file-search',
    ENNAME: 'Query View'
  }
}, // 自动分类视图
{
  CAPTION: autoClass.title,
  NO: 'autoClass',
  ID: 'autoClass',
  PID: 'config',
  META: {
    ICON: 'read',
    ENNAME: 'Auto Class View'
  }
}, // // 其他-全局表格
// { CAPTION: globalTable.title, ICON: 'table', NO: 'globalTable', ID: 'globalTable', PID: 'other' },
// // 其他-消息事务
// { CAPTION: mqAffair.title, ICON: 'read', NO: 'mqAffair', ID: 'mqAffair', PID: 'other' },
// // 其他-信息总线
// { CAPTION: mqLines.title, ICON: 'table', NO: 'mqLines', ID: 'mqLines', PID: 'other' },
// // 报表管理
// {
//   CAPTION: reportManagement,
//   ICON: 'area-chart',
//   NO: 'reportList',
//   ID: 'reportList',
//   PID: 'config'
// },
// // 报表管理-网格报表
// {
//   CAPTION: gridReport,
//   ICON: '',
//   NO: 'gridReportList',
//   ID: 'gridReportList',
//   PID: 'reportList',
//   FACETYPE: 6,
//   ISCUSTOMPAGE: true,
//   PARAMS: JSON.stringify({ url: `RDP-SERVER/modules/rdp/list.html` })
// },
// // 报表管理-大屏报表
// {
//   CAPTION: largeScreenReport,
//   ICON: '',
//   NO: 'screenReportList',
//   ID: 'screenReportList',
//   PID: 'reportList',
//   FACETYPE: 6,
//   ISCUSTOMPAGE: true,
//   PARAMS: JSON.stringify({ url: `RDP-SERVER/modules/bddp/home.html` })
// },
// // 报表管理-数据源配置
// {
//   CAPTION: reportDataSorce,
//   ICON: '',
//   NO: 'reportDataSorce',
//   ID: 'reportDataSorce',
//   PID: 'reportList',
//   FACETYPE: 6,
//   ISCUSTOMPAGE: true,
//   PARAMS: JSON.stringify({ url: `RDP-SERVER/modules/ser/config/rdpDataConfig.html` })
// },
// 其他-数据库查询
{
  CAPTION: databaseQuery.title,
  ICON: 'database',
  NO: 'databaseQuery',
  ID: 'databaseQuery',
  PID: 'other'
}, // // 其他
{
  CAPTION: sheetTemplate.title,
  NO: 'sheetTemplate',
  ID: 'sheetTemplate',
  PID: 'other',
  META: {
    ICON: 'table',
    ENNAME: 'Sheet Template'
  }
}, {
  CAPTION: other,
  NO: 'other',
  ID: 'other',
  PID: 'config',
  META: {
    ICON: 'database',
    ENNAME: 'Other'
  }
}, // API文档
{
  CAPTION: apiDocument.title,
  NO: 'apiDocument',
  ID: 'apiDocument',
  PID: 'other',
  META: {
    ICON: 'api',
    ENNAME: 'Api Document'
  }
}, // Druid监控
{
  CAPTION: druidMonitor.title,
  NO: 'druidMonitor',
  ID: 'druidMonitor',
  PID: 'other',
  META: {
    ICON: 'desktop',
    ENNAME: 'Druid Monitor'
  }
}];