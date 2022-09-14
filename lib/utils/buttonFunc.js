"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmBtn = exports.clickBtn = void 0;

var _antd = require("antd");

var _umi = require("umi");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clickBtn = function clickBtn(object, engine, model, callback) {
  var selectedRows = model.selectedRows,
      dataList = model.dataList,
      _model$params = model.params,
      params = _model$params === void 0 ? {} : _model$params,
      objectANamespace = model.namespace,
      objectAData = model.objectAData,
      objectA = model.objectA,
      relevanceNo = model.relevanceNo;
  if (object) object.objectNo = object.objectNo || object.tableName || engine.objectNo || engine.objectB;
  var objectNo = object.objectNo,
      _object$reqParam = object.reqParam,
      reqParam = _object$reqParam === void 0 ? '' : _object$reqParam,
      wType = object.wType,
      id = object.id,
      mNo = object.mNo,
      implclass = object.implclass,
      caption = object.caption,
      enName = object.enName,
      name = object.name;
  caption = caption ? caption : _utils.isEnglish ? enName || name : name || enName;
  var _engine$objectGrid = engine.objectGrid,
      objectGrid = _engine$objectGrid === void 0 ? {} : _engine$objectGrid,
      pageId = engine.pageId;
  var classNodeObjectNo = params.classNodeObjectNo,
      classObjectNo = params.classObjectNo; // 提前取得所有的参数

  var newObjectAData = JSON.parse(JSON.stringify(objectAData || {}));
  var newSelectedRows = JSON.parse(JSON.stringify(selectedRows || []));
  delete newObjectAData.IMAGE64;
  newSelectedRows.map(function (item) {
    return delete item.IMAGE64;
  });
  object.values = {
    objectNo: objectNo,
    hData: newSelectedRows,
    objectAData: newObjectAData,
    relationShipNo: relevanceNo,
    rData: dataList,
    objectGridNo: objectGrid.no,
    pId: newSelectedRows[0] ? newSelectedRows[0].ID : '0',
    objectA: objectA,
    classNodeObjectNo: classNodeObjectNo,
    classObjectNo: classObjectNo,
    classNodeData: newSelectedRows[0],
    hSingleData: newSelectedRows,
    data: object.data
  };

  if ((engine.tableName || engine.objectB || engine.objectNo) !== object.objectNo && wType === 'objectPropertyPage') {
    object.wType = 'classNodeObjectPropertyNo';
    wType = 'classNodeObjectPropertyNo';
  }

  var payload = {
    wType: wType,
    menuId: id,
    objectANamespace: objectANamespace,
    objectNo: objectNo,
    mNo: mNo,
    clickedMenu: object,
    objectAData: objectAData,
    pageId: pageId
  };
  reqParam = (reqParam || '').split(';');

  if (wType !== 'queryObjectView' && wType !== 'batchAdd') {
    if (reqParam.indexOf('hData') !== -1 && selectedRows.length === 0) {
      _antd.message.warn('请选择要操作的行！');

      return;
    } else if (reqParam.indexOf('hSingleData') !== -1 && selectedRows.length !== 1) {
      _antd.message.warn('请选择单条数据');

      return;
    }
  }

  var dva = (0, _umi.getDvaApp)();

  if (implclass === 'demo.zc.ActStartProcess') {
    dva._store.dispatch({
      type: 'actStartProcess/query',
      payload: {
        selectedRows: selectedRows ? selectedRows : [],
        objectNo: objectNo
      }
    });

    return;
  } else if (implclass === 'assignRole') {
    dva._store.dispatch({
      type: "".concat(implclass, "/query"),
      payload: {
        selectedRows: model && model.selectedRows ? model.selectedRows : []
      }
    });

    return;
  } else {
    switch (wType) {
      case 'objectPropertyPage':
      case 'batchMaintain':
      case 'batchEdit':
      case 'detailForm':
        payload.objectGrid = objectGrid;

        if (reqParam.indexOf('pId') !== -1 && reqParam.indexOf('isMap') === -1) {
          delete payload.record;
        } else if (reqParam.indexOf('hData') !== -1 || reqParam.indexOf('hSingleData') !== -1) {
          payload.record = selectedRows;
        }

        break;

      case 'otherObjectPropertyPage':
        payload.clickedMenu.engine = engine;
        break;

      case 'classNodeObjectPropertyNo':
        break;

      case 'objectRelationPage':
        break;

      case 'queryObjectView':
        payload.record = selectedRows;
        payload.rData = dataList;
        break;

      default:
    }

    if (wType === 'browseFiles') {
      if (!selectedRows[0].FLOCATION) {
        var msg = _utils.isEnglish ? "There are currently no files to preview" : "\u5F53\u524D\u6CA1\u6709\u53EF\u9884\u89C8\u7684\u6587\u4EF6";

        _antd.message.warn(msg);

        return;
      } // let namespace = `${id}-${selectedRows[0].ID}`
      // judgeModel(namespace)
      // dva._store.dispatch({ type: `${namespace}/packet`, payload: { record: selectedRows[0] } })
      // confirmBtn({ values: object.values }, object, namespace, JSON.parse(JSON.stringify(engine)))


      dva._store.dispatch({
        type: "popup/loadPopup",
        payload: payload
      });
    } else if (wType === 'downLoad') {
      if (!selectedRows[0].FLOCATION) {
        var _msg = _utils.isEnglish ? "There are currently no files available for download" : "\u5F53\u524D\u6CA1\u6709\u53EF\u4E0B\u8F7D\u7684\u6587\u4EF6";

        _antd.message.warn(_msg);

        return;
      }

      var namespace = "".concat(id, "-").concat(selectedRows[0].ID);
      (0, _utils.judgeModel)(namespace);

      dva._store.dispatch({
        type: "".concat(namespace, "/packet"),
        payload: {
          record: selectedRows[0]
        }
      });

      confirmBtn({
        values: object.values
      }, object, namespace, JSON.parse(JSON.stringify(engine)));
    } else if (wType === 'viewImage') {
      confirmBtn({
        values: object.values
      }, object, objectANamespace, function (data) {
        var url = data.url;
        var img = new Image();
        img.src = url;
        img.style = 'max-width: 100%';
        var newWin = window.open('', '_blank');
        newWin.document.write(img.outerHTML);
        newWin.document.title = caption;
        newWin.document.close();
      });
    } else if (wType === 'directRequest') {
      confirmBtn({
        values: object.values
      }, object, objectANamespace, callback);
    } else if (wType === 'processInstanceList' || wType === 'PLMfileDownload') {
      confirmBtn({
        values: object.values
      }, object, objectANamespace, callback);
    } else dva._store.dispatch({
      type: "popup/loadPopup",
      payload: payload
    });
  }
};

exports.clickBtn = clickBtn;

var confirmBtn = function confirmBtn(_ref, clickedMenu, namespace, pageId, tabCountData, callback, dataTotal) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      file = _ref.file;
  var reqParam = clickedMenu.reqParam,
      mNo = clickedMenu.mNo,
      id = clickedMenu.id,
      implClass = clickedMenu.implClass,
      implType = clickedMenu.implType,
      wType = clickedMenu.wType,
      objectNo = clickedMenu.objectNo,
      params = clickedMenu.params,
      caption = clickedMenu.caption,
      name = clickedMenu.name,
      enName = clickedMenu.enName;
  caption = caption ? caption : _utils.isEnglish ? enName || name : name || enName;
  reqParam = reqParam && reqParam.split(';') || [];
  var newValues = {
    mNo: mNo,
    menuId: id,
    implClass: implClass,
    file: file,
    implType: implType,
    params: params,
    wType: wType
  };
  reqParam.forEach(function (object) {
    if (object === 'classBusinessObjectNo') {
      newValues.objectNo = values[object] || values.objectNo;
    } else if (object === 'rData') {
      newValues.hData = values.hData;
    } else if (object === 'mapFields') {
      newValues.otherParam = values[object];
    } else if (object === 'relationShipNo') {
      newValues.relevanceNo = values[object];
    } else if (object === 'hSingleData') {
      newValues.hData = values[object];
    } else if (object === 'pid') {
      newValues.pId = values.pId;
    } else {
      newValues[object] = values[object];
    }
  });

  if (wType === 'batchEdit') {
    newValues.otherParam = values.otherParam;
  } else if (wType === 'dataImport') {
    newValues.objectNo = values.objectNo || objectNo;
    newValues.file = file;
  } else if (wType === 'classNodeObjectPropertyNo') {// newValues.itemNo = itemNo
    // newValues.file = file
  } else if (wType === 'otherObjectPropertyPage') {
    var _params = JSON.parse(newValues.params);

    newValues.objectNo = _params.objectNo;
    newValues.params = JSON.stringify({
      storeRelation: _params.RELEVANCE,
      storeRelationship: _params.RELEVANCENO
    }); // 处理类型为otherItemPropertyPage的映射（目标字段不存在）
    // 获取映射关系

    var mapFields = JSON.parse(clickedMenu.params).mapFields; // 源对象

    var classNodeData = values.classNodeData; // 根据映射关系赋值

    mapFields && mapFields.forEach(function (item) {
      if (!(item.tfield in newValues.data)) {
        newValues.data[item.tfield] = classNodeData[item.sfield];
      }
    });
  }

  var dva = (0, _umi.getDvaApp)(); // wType:browseFiles 文件预览

  if (wType === 'browseFiles') {
    var path = 'api/api/application/hkdt/event';

    if (implType === 3) {
      path = 'api/' + implClass; // path = `api/file/base/browsePDF`
      // 将文件对象FLOCATION添加到PathList

      var newPathList = localStorage['pathList'] ? JSON.parse(localStorage['pathList']) : [];
      newPathList.push({
        ID: newValues.hData[0].ID,
        pathname: newValues.hData[0].FLOCATION
      });
      localStorage['pathList'] = JSON.stringify(newPathList);
    }

    var formData = new FormData();
    formData.append('values', JSON.stringify(newValues));
    var objectMenus = callback.objectMenus;
    var menus = (objectMenus || []).filter(function (item) {
      return item.wType === 'downLoad';
    });

    dva._store.dispatch({
      type: 'tab/addTab',
      payload: {
        modelData: _objectSpread(_objectSpread({}, callback), {}, {
          supQuery: 0,
          objectType: null,
          pageMenus: menus,
          namespace: namespace,
          faceType: 'browseFiles',
          newValues: newValues
        }),
        namespace: namespace,
        record: {
          CAPTION: caption,
          FACETYPE: 'browseFiles',
          ICON: 'eye',
          ID: newValues.hData[0].ID
        }
      }
    }); // showLoading()


    fetch(path, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: sessionStorage.getItem('token'),
        UserName: localStorage.getItem('userName')
      }
    }).then(function (res) {
      // const ResultType = res.headers.get('ResultType')
      // /**
      //  * 根据 ResultType 处理数据
      //  * json：报错
      //  * stream：正常
      //  */
      // if (ResultType === 'json') {
      //   res.json().then(data => {
      //     dva._store.dispatch({ type: `${namespace}/packet`, payload: { errorInfo: data.info } })
      //   })
      // } else {
      //   return res.blob()
      // }
      return res.blob();
    }).then(function (blob) {
      var r = new FileReader();
      r.readAsDataURL(blob);

      r.onload = function (e) {
        dva._store.dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            file: e.target.result
          }
        });
      };

      return r;
    }).catch(function (err) {
      (0, _utils.hideLoading)();
      console.log(err);
    });
  } else if (wType === 'processInstanceList') {
    newValues.processRow = {};
    newValues.page = 1;
    newValues.pageSize = 20;

    dva._store.dispatch({
      type: 'common/save',
      payload: {
        values: newValues,
        namespace: namespace,
        engine: clickedMenu.engine,
        dataTotal: dataTotal
      },
      callback: callback
    });
  } else if (wType === 'PLMfileDownload') {
    dva._store.dispatch({
      type: 'PlmFileDownload/query',
      payload: {
        values: newValues,
        objectAData: values.objectAData
      },
      callback: callback
    });
  } else if (wType === 'QualityInspectionReport') {
    newValues.rData = values.rData;
    newValues.hData = values.hData;

    dva._store.dispatch({
      type: 'PlmFileDownload/qualityInspectionReport',
      payload: {
        values: newValues,
        objectAData: values.objectAData,
        objectANamespace: namespace
      }
    });
  } else if (wType === 'QualityInspectionEntry') {// dva._store.dispatch({
    //   type: 'common/queryInspectionItem',
    //   payload: { hData: selectedRows}
    // })
  } else if (wType === 'EmbedThreePartyPage') {
    dva._store.dispatch({
      type: 'common/embedThreePartyPage',
      payload: {
        values: newValues,
        namespace: namespace,
        pageId: pageId,
        tabCountData: tabCountData,
        engine: clickedMenu.engine,
        wType: wType,
        dataTotal: dataTotal
      },
      callback: callback
    });
  } else {
    dva._store.dispatch({
      type: 'common/save',
      payload: {
        values: newValues,
        namespace: namespace,
        pageId: pageId,
        tabCountData: tabCountData,
        engine: clickedMenu.engine,
        wType: wType,
        dataTotal: dataTotal
      },
      callback: callback
    });
  }
};

exports.confirmBtn = confirmBtn;