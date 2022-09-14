"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryRelationPropertySecondPath = exports.queryRelationPropertyQueryApi = exports.queryModelMap = exports.metaObjectParameters = void 0;

/*
 * @Description: 查询业务对象增删改查接口
 */
// 返回表名映射
var queryModelMap = function queryModelMap(tableName) {
  var tn = null;

  switch (tableName) {
    case 'META_NAVIGATION':
      return tn = 0;

    case 'META_OBJECT':
      return tn = 1;

    case 'META_RELATIONSHIP':
      return tn = 2;

    case 'META_QUERYVIEW':
      return tn = 3;

    case 'META_CLASSVIEW':
      return tn = 4;

    case 'META_MENU_LIBRARY':
      return tn = 5;

    case 'META_OBJECT_FIELD_COMMON':
      return tn = 8;

    case 'META_GLOBAL_GRID':
      return tn = 9;

    case 'META_OBJECT_FIELD':
      return tn = 11;

    case 'META_OBJECT_FORM':
      return tn = 12;

    case 'META_OBJECT_GRID':
      return tn = 13;

    case 'META_OBJECT_RELATION_INFO':
      return tn = 14;

    case 'META_OBJECT_MENU':
      return tn = 15;

    case 'META_OBJECT_EVENT_MENU':
      return tn = 151;

    case 'META_OBJECT_RELATION_EVENT':
      return tn = 16;

    case 'META_CLASSVIEW_NODE':
      return tn = 41;

    case 'META_OBJECT_FORM_DATA':
      return tn = 121;

    case 'META_OBJECT_RELATION_INFO_TAB':
      return tn = 141;

    case 'META_OBJECT_GRID_FIELD':
      return tn = 131;

    default:
      break;
  }

  return tn;
}; // 通过表明映射返回业务对象关联属性查询接口


exports.queryModelMap = queryModelMap;

var queryRelationPropertyQueryApi = function queryRelationPropertyQueryApi(tableNameMap, objectType) {
  var path = null;

  switch (tableNameMap) {
    case 0:
      return path = objectType === 'workObject' ? '' : '';

    case 1:
      return path = objectType === 'workObject' ? '' : '';

    case 2:
      return path = objectType === 'workObject' ? '' : '';

    case 3:
      return path = objectType === 'workObject' ? '' : '';

    case 4:
      return path = objectType === 'workObject' ? '' : '';

    case 5:
      return path = objectType === 'workObject' ? '/metaMenuLibrary/getMetaMenuLibrary' : '/metaMenuLibrary/getMetaMenuLibrary';

    case 8:
      return path = objectType === 'workObject' ? '/metaObjectField/getCommonField' : '/metaObjectField/getCommonField';

    case 9:
      return path = objectType === 'workObject' ? '' : '';

    case 11:
      return path = objectType === 'workObject' ? '/metaObjectField/getWorkMetaObjectFiled' : '/metaObjectField/getMetaObjectFiled';

    case 12:
      return path = objectType === 'workObject' ? '/metaObjectForm/getWorkMetaObjectForm' : '/metaObjectForm/getMetaObjectForm';

    case 13:
      return path = objectType === 'workObject' ? '/metaObjectGrid/getWorkMetaObjectGrid' : '/metaObjectGrid/getMetaObjectGrid';

    case 14:
      return path = objectType === 'workObject' ? '/metaObjectRelationInfo/getWorkMetaRelationInfo' : '/metaObjectRelationInfo/getMetaRelationInfo';

    case 15:
      return path = objectType === 'workObject' ? '/metaObjectMenu/getWorkMetaObjectMenu' : '/metaObjectMenu/getMetaObjectMenu';

    case 151:
      return path = objectType === 'workObject' ? '/metaObjectShortcutsMenu/getWorkMetaObjectShortcutsMenu' : '/metaObjectShortcutsMenu/getMetaObjectShortcutsMenu';

    case 16:
      return path = objectType === 'workObject' ? '/metaObjectRelationEvent/getWorkMetaObjectRelationEvent' : '/metaObjectRelationEvent/getMetaObjectRelationEvent';

    case 41:
      return path = objectType === 'workObject' ? '/metaClassView/getWorkMetaClassViewNode' : '/metaClassView/getMetaClassViewNode';

    case 121:
      return path = objectType === 'workObject' ? '/metaObjectFormData/getWorkMetaObjectFormData' : '/metaObjectFormData/getMetaObjectFormData';

    case 131:
      return path = objectType === 'workObject' ? '/metaObjectGridField/getWorkMetaObjectGridField' : '/metaObjectGridField/getMetaObjectGridField';

    case 141:
      return path = objectType === 'workObject' ? '/metaObjectRelationTab/getWorkMetaObjectRelationTab' : '/metaObjectRelationTab/getMetaObjectRelationTab';

    default:
      break;
  }

  if (!path) {// console.log('查询请求接口', tableNameMap, objectType)
  }

  return path;
}; // 查询业务对象关联数据增/删/改接口二级路径


exports.queryRelationPropertyQueryApi = queryRelationPropertyQueryApi;

var queryRelationPropertySecondPath = function queryRelationPropertySecondPath(tableNameMap) {
  var path = null;

  switch (tableNameMap) {
    case 0:
      return path = "/metaNavigation";

    case 1:
      return path = "/metaObject";

    case 2:
      return path = "/metaObjectRelation";

    case 3:
      return path = "/queryView";

    case 4:
      return path = "/metaClassView";

    case 5:
      return path = "/metaMenuLibrary";

    case 8:
      return path = "/metaObjectField";

    case 9:
      return path = "";

    case 11:
      return path = "/metaObjectField";

    case 12:
      return path = "/metaObjectForm";

    case 13:
      return path = "/metaObjectGrid";

    case 14:
      return path = "/metaObjectRelationInfo";

    case 15:
      return path = "/metaObjectMenu";

    case 151:
      return path = "/metaObjectShortcutsMenu";

    case 16:
      return path = "/metaObjectRelationEvent";

    case 41:
      return path = "/metaClassView";

    case 121:
      return path = "/metaObjectFormData";

    case 131:
      return path = "/metaObjectGridField";

    case 141:
      return path = "/metaObjectRelationTab";

    default:
      break;
  }

  return path;
}; // 业务对象关联数据增/删/改接口请求参数

/*
 * tableNameMap: 表明映射
 * 第二个参数 {} 传入的payload参数
 * type: create || update || delete || others
 */


exports.queryRelationPropertySecondPath = queryRelationPropertySecondPath;

var metaObjectParameters = function metaObjectParameters(tableNameMap, _ref, type) {
  var values = _ref.values,
      record = _ref.record,
      PID = _ref.PID,
      OBJECTID = _ref.OBJECTID,
      rootId = _ref.rootId,
      parentState = _ref.parentState,
      tableName = _ref.tableName,
      rows = _ref.rows,
      namespace = _ref.namespace,
      STATE = _ref.STATE,
      rootPid = _ref.rootPid;
  var parmeters = null;

  switch (tableNameMap) {
    case 0:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 1:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 2:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 3:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 4:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 5:
      switch (type) {
        case 'create':
          return parmeters = {
            mType: values.MTYPE,
            wType: values.WTYPE,
            meta: values
          };

        case 'update':
          return parmeters = {
            menuId: record.ID,
            meta: values
          };

        case 'delete':
          parmeters = [];
          rows.forEach(function (obj) {
            parmeters.push({
              menuId: obj.ID
            });
          });
          return parmeters;

        default:
          break;
      }

      break;

    case 8:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 9:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'update':
          return parmeters = {};

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 11:
      switch (type) {
        case 'create':
          return parmeters = {
            id: PID,
            meta: values[0]
          };

        case 'update':
          return parmeters = {
            fieldId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          parmeters = [];
          rows.forEach(function (field) {
            parmeters.push({
              fieldId: field.ID,
              state: field.STATE
            });
          });
          return parmeters;

        case 'createCommonField':
          return parmeters = {
            id: PID,
            metas: values
          };

        default:
          break;
      }

      break;

    case 12:
      switch (type) {
        case 'create':
          return parmeters = {
            id: PID,
            meta: values[0]
          };

        case 'update':
          return parmeters = {
            formId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          return parmeters = {
            formId: rows[0].ID,
            state: rows[0].STATE
          };

        default:
          break;
      }

      break;

    case 13:
      switch (type) {
        case 'createSingle':
          return parmeters = {
            id: PID,
            meta: values[0]
          };

        case 'update':
          return parmeters = {
            gridId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          return parmeters = {
            gridId: rows[0].ID,
            state: rows[0].STATE
          };

        default:
          break;
      }

      break;

    case 14:
      switch (type) {
        case 'createRelationInfo':
          return parmeters = {
            id: PID,
            meta: values[0]
          };

        case 'updateRelationInfo':
          return parmeters = {
            infoId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'deleteRelationInfo':
          return parmeters = {
            infoId: rows[0].ID,
            state: rows[0].STATE
          };

        default:
          break;
      }

      break;

    case 15:
      switch (type) {
        case 'createNavigationMenu':
        case 'create':
          return parmeters = {
            id: PID,
            mType: values[0].MTYPE,
            abType: values[0].ABTYPE,
            wType: values[0].WTYPE,
            menuId: values[0].PID || 0,
            meta: values[0]
          };

        case 'updateNavigationMenu':
        case 'update':
          return parmeters = {
            menuId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'deleteNavigationMenu':
        case 'delete':
          parmeters = [];
          rows.forEach(function (row) {
            parmeters.push({
              menuId: row.ID,
              state: row.STATE
            });
          });
          return parmeters;
        // return parmeters = {
        //     menuId: rows[0].ID,
        //     state: rows[0].STATE
        // }

        default:
          break;
      }

      break;

    case 151:
      switch (type) {
        case 'create':
          return parmeters = {
            id: PID,
            mType: values[0].MTYPE,
            abType: values[0].ABTYPE,
            wType: values[0].WTYPE,
            menuId: values[0].PID || 0,
            meta: values[0]
          };

        case 'update':
          return parmeters = {
            menuId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          parmeters = [];
          rows.forEach(function (row) {
            parmeters.push({
              menuId: row.ID,
              state: row.STATE
            });
          });
          return parmeters;
        // return parmeters = {
        //     menuId: rows[0].ID,
        //     state: rows[0].STATE
        // }

        default:
          break;
      }

      break;

    case 16:
      switch (type) {
        case 'create':
          return parmeters = {};

        case 'updateRelationShip':
          return parmeters = {
            eventId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          return parmeters = {};

        default:
          break;
      }

      break;

    case 41:
      switch (type) {
        case 'createNode':
          return parmeters = {
            classViewId: OBJECTID,
            classViewNodeId: PID,
            meta: values[0],
            state: STATE
          };

        case 'updateMetaClassViewNode':
          return parmeters = {
            id: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'deleteNode':
          return parmeters = {
            classViewNodeId: rows[0].ID,
            state: rows[0].STATE
          };

        default:
          break;
      }

      break;

    case 121:
      switch (type) {
        case 'create':
          if (values.PID) {
            parmeters = [{
              formDataId: values.PID,
              formId: rootId,
              id: values.OBJECTID,
              meta: values
            }];
          } else {
            parmeters = [];
            values.forEach(function (field, index) {
              parmeters.push({
                formDataId: field.PID,
                formId: rootId,
                id: field.OBJECTID,
                fieldId: field.fieldId,
                meta: field
              });
              delete parmeters[index].meta.fieldId;
            });
          }

          return parmeters;

        case 'update':
          return parmeters = {
            formDataId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          parmeters = [];
          rows.forEach(function (field) {
            parmeters.push({
              formDataId: field.ID,
              state: field.STATE
            });
          });
          return parmeters;

        default:
          break;
      }

      break;

    case 131:
      switch (type) {
        case 'createSingle':
          parmeters = [];

          if (values instanceof Array) {
            values.forEach(function (field, index) {
              parmeters.push({
                fieldId: field.fieldId,
                gridId: rootId,
                id: field.OBJECTID,
                gType: field.GTYPE,
                meta: field,
                pid: rootPid
              });
              delete parmeters[index].meta.fieldId;
            });
          } else {
            parmeters.push({
              gridId: rootId,
              id: PID,
              gType: values.GTYPE,
              meta: values,
              pid: rootPid
            });
          }

          return parmeters;

        case 'update':
          return parmeters = {
            gridFieldId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'delete':
          parmeters = [];
          rows.forEach(function (field) {
            parmeters.push({
              gridFieldId: field.ID,
              state: field.STATE
            });
          });
          return parmeters;

        default:
          break;
      }

      break;

    case 141:
      switch (type) {
        case 'createMetaObjectRelationTab':
          return parmeters = {
            id: record.OBJECTID,
            infoId: rootId,
            meta: values[0] ? values[0] : values
          };

        case 'updateMetaObjectRelationTab':
          return parmeters = {
            tabId: record.ID,
            meta: values,
            state: record.STATE
          };

        case 'deleteMetaObjectRelationTab':
          parmeters = [];
          rows.forEach(function (info) {
            parmeters.push({
              tabId: info.ID,
              state: info.STATE
            });
          });
          return parmeters;

        default:
          break;
      }

      break;

    default:
      break;
  }

  return parmeters;
};

exports.metaObjectParameters = metaObjectParameters;