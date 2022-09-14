function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * @Description: 根据传参判断渲染弹窗属性页还是关联属性页
 */
import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import PropertyForm from './PropertyForm';
import BatchEdit from '../batchEdit/BatchEdit';
import dayjs from 'dayjs';
import BraftEditor from 'braft-editor';

var isNumber = function isNumber(type) {
  return type === 'INT' || type === 'DOUBLE' || type === 'FLOAT' || type === 'NUMERIC' || type === 'BOOLEAN';
};

var PropertyHoc = function PropertyHoc(engine) {
  return function (WrappedComponent) {
    var ChildCmp = function ChildCmp(props, ref) {
      var childRef = useRef();
      var _props$model = props.model,
          _props$model$record = _props$model.record,
          record = _props$model$record === void 0 ? {} : _props$model$record,
          namespace = _props$model.namespace,
          selectedRows = _props$model.selectedRows,
          objectBNameSpace = _props$model.objectBNameSpace,
          _props$model$objectAD = _props$model.objectAData,
          objectAData = _props$model$objectAD === void 0 ? {} : _props$model$objectAD,
          _props$model$clickedM = _props$model.clickedMenu,
          clickedMenu = _props$model$clickedM === void 0 ? {} : _props$model$clickedM,
          dataTotal = _props$model.dataTotal,
          _props$model$modelDat = _props$model.modelData,
          modelData = _props$model$modelDat === void 0 ? {} : _props$model$modelDat,
          tabActiveKey = _props$model.tabActiveKey;

      var _ref = modelData || {},
          dataClassField = _ref.dataClassField,
          pageId = _ref.pageId;

      var allFieldList = engine.allFieldList,
          pageFieldList = engine.pageFieldList,
          rType = engine.rType,
          menuId = engine.menuId,
          peptide = engine.peptide,
          peptidePageList = engine.peptidePageList,
          columns = engine.columns,
          list = engine.list,
          tiled = engine.tiled,
          formLayout = engine.formLayout,
          changeControl = engine.changeControl;

      if (clickedMenu && clickedMenu.wType === 'objectColumnPage') {
        pageFieldList = pageFieldList && pageFieldList.filter(function (item) {
          return item.fieldName !== '{INDEX}';
        });
        allFieldList = pageFieldList;
      }

      useImperativeHandle(ref, function () {
        return {
          Ok: function Ok() {
            childRef.current.Ok();
          }
        };
      });
      if (rType) record = JSON.parse(JSON.stringify(selectedRows));
      var initVal = {};
      var batchEdit = false;
      var isUpdate = record.hasOwnProperty('ID') ? true : false;

      if (record instanceof Array) {
        if (record.length > 1) batchEdit = true;
        if (record.length > 0) isUpdate = true;

        if (peptide) {
          peptidePageList.forEach(function (p) {
            p.pageFieldList.forEach(function (a) {
              var key = a.fieldName;
              record.forEach(function (item, index) {
                initVal[key] = index === 0 ? item[key] : initVal[key] === item[key] ? initVal[key] : null;
              });
            });
          });
        } else {
          pageFieldList.forEach(function (a) {
            var key = a.fieldName;
            record.forEach(function (item, index) {
              initVal[key] = index === 0 ? item[key] : initVal[key] === item[key] ? initVal[key] : null;
            });
          });
        }
      }

      var _ref2 = clickedMenu.params || {},
          defaultVList = _ref2.defaultVList,
          mapParentFields = _ref2.mapParentFields;

      if (defaultVList && defaultVList.length > 0) {
        defaultVList.forEach(function (item) {
          var field = item.field,
              value = item.value;
          initVal[field] = value || null;
        });
      }

      if (mapParentFields && mapParentFields.length > 0) {
        mapParentFields.forEach(function (item) {
          var sfield = item.sfield,
              tfield = item.tfield;
          initVal[tfield] = objectAData[sfield];
        });
      }

      var getInitVal = function getInitVal(list) {
        list.forEach(function (item) {
          var editor = item.editor,
              fieldName = item.fieldName,
              defaultV = item.defaultV,
              fType = item.fType,
              editParams = item.editParams;
          if (isNumber(fType) && defaultV) defaultV = Number(defaultV);

          if (isUpdate) {
            if (editor === 'MapValueList') {
              initVal[fieldName] = initVal[fieldName] === 0 ? initVal[fieldName] : initVal[fieldName] ? initVal[fieldName] : defaultV === 0 ? defaultV : defaultV || undefined;
            }
          } else {
            initVal[fieldName] = initVal[fieldName] === 0 ? initVal[fieldName] : initVal[fieldName] ? initVal[fieldName] : defaultV === 0 ? defaultV : defaultV || undefined;
          }

          var val = initVal[fieldName] || undefined;

          if (val) {
            if (editor === 'DateTime') {
              initVal[fieldName] = dayjs(val); // } else if (editor === 'UsersSelector' || editor === 'CheckEditor') {
            } else if (editor === 'CheckEditor') {
              initVal[fieldName] = typeof val === 'string' ? val.split(',') : undefined;
            } else if (editor === 'DBValueList' || editor === 'ValueList' || editor === 'MapValueList') {
              var _ref3 = editParams || {},
                  multiple = _ref3.multiple;

              if (multiple) {
                initVal[fieldName] = typeof val === 'string' ? val.split(',') : undefined;
              }
            } else if (editor === 'Slider') {
              initVal[fieldName] = Number(val);
            } else if (editor === 'RichText') {
              initVal[fieldName] = BraftEditor.createEditorState(val);
            } else if (editor === 'ValueListDynamic') {
              var arr = val.split(/,|;|，|；/);
              editParams.values = arr.filter(function (item) {
                return item !== '' && item !== undefined;
              });
            }
          }

          if (editor === 'CheckBox') {
            initVal[fieldName] = val ? true : false;
          }
        });
      };

      if (peptide) {
        peptidePageList.forEach(function (item) {
          return getInitVal(item.pageFieldList);
        });
      } else {
        getInitVal(pageFieldList);
      }

      var labelLen = (engine.width || 700) / columns * 0.4 - 20;
      var formProps = {
        allFieldList: allFieldList,
        pageFieldList: pageFieldList,
        menuId: menuId,
        peptide: peptide,
        tiled: tiled,
        formLayout: formLayout,
        peptidePageList: peptidePageList,
        columns: columns,
        initVal: initVal,
        visible: props.model[menuId],
        rType: rType,
        wType: clickedMenu.wType,
        batchEdit: batchEdit,
        labelLen: labelLen,
        objectAData: objectAData,
        dataTotal: dataTotal,
        record: record,
        dataClassField: dataClassField,
        tabActiveKey: tabActiveKey,
        pageId: pageId,
        changeControl: changeControl
      };
      return /*#__PURE__*/React.createElement("div", {
        className: "hide-full"
      }, clickedMenu.wType !== 'batchMaintain' ? rType ? /*#__PURE__*/React.createElement("div", {
        className: "full"
      }, /*#__PURE__*/React.createElement(PropertyForm, formProps)) : /*#__PURE__*/React.createElement(PropertyForm, _extends({
        clickedMenu: clickedMenu,
        onCancel: props.onCancel,
        namespace: namespace,
        objectBNameSpace: objectBNameSpace,
        ref: childRef
      }, formProps, {
        list: list
      })) : /*#__PURE__*/React.createElement(BatchEdit, _extends({
        clickedMenu: clickedMenu,
        onCancel: props.onCancel,
        namespace: namespace,
        objectBNameSpace: objectBNameSpace,
        ref: childRef
      }, formProps, {
        list: list
      })), /*#__PURE__*/React.createElement(WrappedComponent, null));
    };

    return forwardRef(ChildCmp);
  };
};

export default PropertyHoc;