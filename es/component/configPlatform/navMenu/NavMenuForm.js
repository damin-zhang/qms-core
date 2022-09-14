var _excluded = ["record", "dispatch", "ID", "namespace", "selectedRows"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 导航菜单表单
 */
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Checkbox, Divider, InputNumber, Button, message } from 'antd';
import { connect } from 'dva';
import { Base64 } from 'js-base64';
import { SketchPicker } from 'react-color';
import DragModal from '../../common/drag/DragModal';
import SearchInput from '../../common/search/SearchInput';
import { facetypeMap, classTabPositionMap } from '../../../utils/mapParams';
import { queryReport, queryReportConfig } from '../../../service/api';
import { queryItem, queryItemPGR, queryObject, queryObjFields } from '../../../service/metaApi';
import LocaleNameForm from '../common/LocaleNameForm';
import language from '@/locale/language';
import SortFields from '../common/SortFields';
import CalendarViewParams from './CalendarViewParams';
import QualityInputParams from './QualityInputParams';
import { isEnglish, parseMeta } from '../../../utils/utils';
import { queryModelMap, queryRelationPropertyQueryApi } from '../../../utils/queryTabConfigRelationApi';
import ProcessPageField from './ProcessPageField';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.navMenu,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Option = Select.Option;
var Item = Form.Item;
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var layout2 = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 20
  }
};

var NavMenuForm = function NavMenuForm(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      dispatch = _ref.dispatch,
      ID = _ref.ID,
      namespace = _ref.namespace,
      selectedRows = _ref.selectedRows,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      FACETYPE = _useState2[0],
      setFACETYPE = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      gridList = _useState4[0],
      setGridList = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      relationList = _useState6[0],
      setRelationList = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      viewList = _useState8[0],
      setViewList = _useState8[1];

  var _useState9 = useState([]),
      _useState10 = _slicedToArray(_useState9, 2),
      reportList = _useState10[0],
      setReportList = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      tableName = _useState12[0],
      setTableName = _useState12[1];

  var _useState13 = useState({}),
      _useState14 = _slicedToArray(_useState13, 2),
      reportConfig = _useState14[0],
      setReportConfig = _useState14[1];

  var _useState15 = useState({}),
      _useState16 = _slicedToArray(_useState15, 2),
      bddpReportConfig = _useState16[0],
      setBddpReportConfig = _useState16[1];

  var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      fieldList = _useState18[0],
      setFieldList = _useState18[1];

  var _useState19 = useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isClass = _useState20[0],
      setIsClass = _useState20[1];

  var _useState21 = useState(true),
      _useState22 = _slicedToArray(_useState21, 2),
      flag = _useState22[0],
      setFlag = _useState22[1];

  var _useState23 = useState('#fff'),
      _useState24 = _slicedToArray(_useState23, 2),
      bgColor = _useState24[0],
      setBgColor = _useState24[1];

  var _useState25 = useState({}),
      _useState26 = _slicedToArray(_useState25, 2),
      formData = _useState26[0],
      setFormData = _useState26[1];

  var _useState27 = useState(false),
      _useState28 = _slicedToArray(_useState27, 2),
      colorVisible = _useState28[0],
      setColorVisible = _useState28[1];

  var _useState29 = useState({}),
      _useState30 = _slicedToArray(_useState29, 2),
      itemName = _useState30[0],
      setItemName = _useState30[1];

  var _useState31 = useState([]),
      _useState32 = _slicedToArray(_useState31, 2),
      businessFieldList = _useState32[0],
      setBusinessFieldList = _useState32[1];

  var _useState33 = useState([]),
      _useState34 = _slicedToArray(_useState33, 2),
      processFieldList = _useState34[0],
      setProcessFieldList = _useState34[1];

  useEffect(function () {
    setFormData(record);
    var ID = record.ID,
        FACETYPE = record.FACETYPE;

    if (flag) {
      getReportConfig('allReportFile');
      getReportConfig('bddpReportFile');
      setFlag(false);
    }

    if (ID) {
      if (FACETYPE === 8) {
        setBusinessFieldList(record.businessField);
        setProcessFieldList(record.processField);
      }

      setFACETYPE(FACETYPE);
      var _record$PARAMS = record.PARAMS,
          _tableName = _record$PARAMS.tableName,
          _isClass = _record$PARAMS.isClass,
          _record$PARAMS$isBddp = _record$PARAMS.isBddp,
          isBddp = _record$PARAMS$isBddp === void 0 ? false : _record$PARAMS$isBddp;
      setIsClass(_isClass ? true : false);

      if (_isClass) {
        form.setFieldsValue({
          PARAMS: {
            classTabPosition: 'bottom'
          }
        });
      }

      if (_tableName) {
        getFieldList(_tableName);
        getMNOList(_tableName, FACETYPE);
      }

      if (FACETYPE === 5) getViewList();

      if (record.PARAMS) {
        form.setFieldsValue({
          PARAMS: record.PARAMS
        });
      }

      isBddpChange({
        target: {
          checked: isBddp
        }
      });
    } else {
      setFACETYPE('');
      setIsClass(false);
      isBddpChange({
        target: {
          checked: false
        }
      });
      form.setFieldsValue({
        INITDATA: true,
        SUPQUERY: true
      });
    }

    return function () {
      setBusinessFieldList([]);
      setProcessFieldList([]);
      form.resetFields();
    };
  }, [record, form]);

  var onFinish = function onFinish(values) {
    var PID = record.PID || ID || '0';
    /* 部分旧数据的 objectNo 和 tableName 不一致, 获取参数用的是 tableName, 此处需要为相应参数赋值 */

    if (values.PARAMS) {
      values.PARAMS.classNodeTableName = values.PARAMS.classNodeObjectNo;
      values.PARAMS.classTableName = values.PARAMS.classObjectNo;
      values.PARAMS.objectNo = values.PARAMS.tableName;
    }

    dispatch({
      type: 'navMenu/edit',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        PID: PID
      }
    });
  };

  var onValuesChange = function onValuesChange(_ref2) {
    var FACETYPE = _ref2.FACETYPE,
        businessField = _ref2.businessField,
        processField = _ref2.processField;
    if (businessField) setBusinessFieldList(form.getFieldValue('businessField').filter(function (item) {
      return item;
    }));
    if (processField) setProcessFieldList(form.getFieldValue('processField').filter(function (item) {
      return item;
    }));

    if (FACETYPE || FACETYPE === 0) {
      setFACETYPE(FACETYPE);
      form.setFieldsValue({
        PARAMS: {}
      });

      if (FACETYPE === 4) {
        var PARAMS = form.getFieldValue('PARAMS') || {};
        PARAMS.classNodeObjectNo = 'SYS_CLASSNODE';
      }

      if (FACETYPE === 5) getViewList();
      if (FACETYPE === 6) isBddpChange({
        target: {
          checked: false
        }
      }); // "是否统计"字段默认选中

      if (FACETYPE === 7) form.setFieldsValue({
        PARAMS: {
          statisticsField: true
        }
      });
    }
  };

  var selectItemNo = function selectItemNo(no) {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'objectNo',
          condition: no === 'classObjectNo' ? "JSON_VALUE(B.META,'$.TYPE') = 3" : "JSON_VALUE(B.META,'$.TYPE') IN (0,1,4)",
          onSelect: function onSelect(rows) {
            var TABLENAME = rows[0].TABLENAME;
            var PARAMS = form.getFieldValue('PARAMS') || {};
            PARAMS[no] = TABLENAME;

            if (no === 'classObjectNo') {
              PARAMS.tableName = TABLENAME.slice(TABLENAME.indexOf('_') + 1, TABLENAME.lastIndexOf('_'));
              getFieldList(PARAMS.tableName);
              getMNOList(PARAMS.tableName, FACETYPE);
            } // 动态生成的form item没有渲染值，需要form.resetFields()刷新一下


            form.resetFields(['PARAMS']);
            form.setFieldsValue({
              PARAMS: PARAMS
            });

            if (no === 'tableName') {
              form.setFieldsValue({
                NAME: rows[0].NAME,
                ENNAME: rows[0].ENNAME
              });
              getFieldList(TABLENAME);
              getMNOList(TABLENAME, FACETYPE);
            }
          }
        }
      });
    };
  };

  var getMNOList = function getMNOList(tableName, FACETYPE) {
    setTableName(tableName);
    var tn = queryModelMap(FACETYPE === 22 ? 'META_OBJECT_FORM' : 'META_OBJECT_GRID');
    queryItemPGR({
      tn: tn,
      tableName: tableName
    }).then(function (res) {
      if (res) setGridList(parseMeta(res.dataList));
    });

    if (FACETYPE === 2 || FACETYPE === 3 || FACETYPE === 4 || FACETYPE === 5 || FACETYPE === 7 || FACETYPE === 22) {
      tn = queryModelMap('META_OBJECT_RELATION_INFO');
      queryItemPGR({
        tn: tn,
        tableName: tableName
      }).then(function (res) {
        if (res) setRelationList(parseMeta(res.dataList));
      });
    }
  };

  var getFieldList = function getFieldList(tableName) {
    var tn = 11;
    queryItemPGR({
      tn: tn,
      tableName: tableName,
      objectId: ID
    }).then(function (res) {
      if (res && res.dataList) setFieldList(parseMeta(res.dataList));
    });
  };

  var getViewList = function getViewList() {
    queryObject({
      tn: 4
    }).then(function (res) {
      if (res) {
        setViewList(parseMeta(res.dataList));
      }
    });
  }; // 获取报表配置


  var getReportConfig = function getReportConfig(configNo) {// queryReportConfig(configNo).then(res => {
    //   if (res) {
    //     let config = JSON.parse(Base64.decode(res.dataList))
    //     if (!config.CONFIG_VALUE) {
    //       message.warn(configure_report)
    //     }
    //     configNo === 'allReportFile'
    //       ? setReportConfig(JSON.parse(Base64.decode(res.dataList)))
    //       : setBddpReportConfig(JSON.parse(Base64.decode(res.dataList)))
    //   }
    // })
  }; // 【大屏报表】改变调用


  var isBddpChange = function isBddpChange(_ref3) {
    var checked = _ref3.target.checked;
    var reportIp = checked ? bddpReportConfig.CONFIG_VALUE : reportConfig.CONFIG_VALUE;
    reportIp && queryReport(reportIp).then(function (data) {
      if (data) {
        if (checked) {
          var res = data.res;
          res = res && res.map(function (item) {
            return {
              name: item.bdname,
              uuid: item.name
            };
          });
          setReportList(res);
        } else {
          var list = data.page.list; // let { list } = data

          setReportList(list);
        }
      }
    });
  };

  var isClassChange = function isClassChange(_ref4) {
    var checked = _ref4.target.checked;
    setIsClass(checked);

    if (checked) {
      form.setFieldsValue({
        PARAMS: {
          classTabPosition: 'bottom'
        }
      });
    }
  };

  var selectIcon = function selectIcon() {
    dispatch({
      type: 'selectData/packet',
      payload: {
        type: 'icon',
        visible: true,
        onSelect: function onSelect(ICON) {
          form.setFieldsValue({
            ICON: ICON
          });
        }
      }
    });
  };

  var selectBanner = function selectBanner() {
    dispatch({
      type: 'selectData/packet',
      payload: {
        type: 'banner',
        visible: true,
        onSelect: function onSelect(BANNER) {
          form.setFieldsValue({
            BANNER: BANNER
          });
        }
      }
    });
  }; //打开颜色选择器的弹窗  fieldName:输入框的name


  var openColorPicker = function openColorPicker(fieldName) {
    return function () {
      setColorVisible(true);
      setItemName({
        fieldName: fieldName
      }); //拿到输入框的name
    };
  }; //颜色选择器中选中的颜色


  var handleChangeComplete = function handleChangeComplete(color) {
    setBgColor(color.hex);
  }; //选完颜色后，将颜色的值设为输入框的值


  var chooseColor = function chooseColor() {
    form.setFieldsValue(_defineProperty({}, itemName.fieldName, bgColor));
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, itemName.fieldName, bgColor)));
    setColorVisible(false);
  }; //未选中颜色则默认白色


  var closeDragModel = function closeDragModel() {
    setColorVisible(false);
    setBgColor('#fff');
  };

  var onViewNoSelect = function onViewNoSelect(value, option) {
    var OBJECTNO = option.OBJECTNO;
    var PARAMS = form.getFieldValue('PARAMS') || {};
    PARAMS.tableName = OBJECTNO;
    form.resetFields(['PARAMS']);
    form.setFieldsValue({
      PARAMS: PARAMS
    });
    getMNOList(OBJECTNO, FACETYPE);
  };

  var processPageProps = {
    form: form,
    businessFieldList: businessFieldList,
    processFieldList: processFieldList,
    setBusinessFieldList: setBusinessFieldList,
    setProcessFieldList: setProcessFieldList,
    fieldsMap: fields
  };
  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    width: 1100,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "navMenu",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout, {
    onValuesChange: onValuesChange
  }), /*#__PURE__*/React.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }, {
      type: 'string',
      max: 30
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(Item, {
    name: "FACETYPE",
    label: fields.FACETYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: record && record.children && record.children.length > 0 ? true : false
  }, facetypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(SearchInput, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), FACETYPE === -1 && (record.PID === '0' || !record.PID) && /*#__PURE__*/React.createElement(SearchInput, {
    name: "BANNER",
    label: fields.banner,
    onClick: selectBanner
  }), /*#__PURE__*/React.createElement(Item, {
    name: "ICON_COLOR",
    label: fields.ICON_COLOR
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      backgroundColor: formData['ICON_COLOR'],
      opacity: '0.7'
    },
    onClick: openColorPicker('ICON_COLOR')
  })), /*#__PURE__*/React.createElement(Item, {
    name: "BG_COLOR",
    label: fields.BG_COLOR
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      backgroundColor: formData['BG_COLOR'],
      opacity: '0.7'
    },
    onClick: openColorPicker('BG_COLOR')
  })), /*#__PURE__*/React.createElement(Item, {
    name: "FONT_COLOR",
    label: fields.FONT_COLOR
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      backgroundColor: formData['FONT_COLOR'],
      opacity: '0.7'
    },
    onClick: openColorPicker('FONT_COLOR')
  })), FACETYPE >= 0 && /*#__PURE__*/React.createElement(Item, {
    name: "INITDATA",
    label: fields.INITDATA,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), (FACETYPE === 1 || FACETYPE === 2 || FACETYPE === 3 || FACETYPE === 7 || FACETYPE === 8 || FACETYPE === 0) && /*#__PURE__*/React.createElement(Item, {
    name: "isStatistics",
    label: fields.isStatistics,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), FACETYPE === 8 && /*#__PURE__*/React.createElement(ProcessPageField, processPageProps), FACETYPE > 0 && FACETYPE !== 6 && FACETYPE !== 8 && /*#__PURE__*/React.createElement(React.Fragment, null, FACETYPE !== 22 && /*#__PURE__*/React.createElement(Item, {
    name: "SUPQUERY",
    label: fields.SUPQUERY,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Divider, null, fields.PARAMS), FACETYPE === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'classNodeObjectNo'],
    label: fields.classNodeObjectNo,
    rules: [{
      required: true
    }],
    onClick: selectItemNo('classNodeObjectNo')
  }), /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'classObjectNo'],
    label: fields.classObjectNo,
    rules: [{
      required: true
    }],
    onClick: selectItemNo('classObjectNo')
  })), FACETYPE === 5 && /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'viewNo'],
    label: fields.viewNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    onSelect: onViewNoSelect
  }, viewList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index,
      OBJECTNO: item.OBJECTNO
    }, isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'tableName'],
    label: fields.tableName,
    rules: [{
      required: true
    }],
    onClick: FACETYPE !== 5 && FACETYPE !== 4 ? selectItemNo('tableName') : null,
    disabled: FACETYPE === 5
  }), FACETYPE === 22 ? /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'objectPropertyNo'],
    label: fields.objectPropertyPageNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, gridList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))) : FACETYPE !== 7 && /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'objectGridNo'],
    label: fields.objectGridNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, gridList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), FACETYPE !== 1 && FACETYPE !== 22 && FACETYPE !== 7 && /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'objectRelationPageNo'],
    label: fields.objectRelationPageNo,
    rules: [{
      required: FACETYPE === 2
    }]
  }, /*#__PURE__*/React.createElement(Select, null, relationList.length && relationList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), (FACETYPE === 1 || FACETYPE === 2 || FACETYPE === 3 || FACETYPE === 7 || FACETYPE === 21) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'isClass'],
    label: fields.isClass,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: isClassChange
  })), isClass && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'dataClassField'],
    label: fields.dataClassField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'ValueList' || item.EDITOR === 'MapValueList';
  }) || []).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'classTabPosition'],
    label: fields.classTabPosition,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, classTabPositionMap.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: item.value
    }, item.name);
  })))), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'systemSubarea'],
    label: fields.systemSubarea,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null))), FACETYPE === 7 && /*#__PURE__*/React.createElement(CalendarViewParams, {
    form: form,
    objectNo: tableName,
    ID: ID
  }), FACETYPE === 21 && /*#__PURE__*/React.createElement(QualityInputParams, {
    form: form,
    objectNo: tableName
  }), FACETYPE !== 22 && /*#__PURE__*/React.createElement(Item, _extends({
    name: ['PARAMS', 'condition'],
    className: "whole-line",
    label: fields.condition
  }, layout2), FACETYPE === 7 ? /*#__PURE__*/React.createElement(Input.TextArea, null) : /*#__PURE__*/React.createElement(Input, null))), FACETYPE === 6 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null, fields.PARAMS), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'isBddp'],
    label: fields.isBddp,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: isBddpChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "ant-form-inline",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'reportName'],
    label: fields.reportName,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    onChange: function onChange(val, item) {
      form.setFieldsValue({
        PARAMS: {
          reportId: item.key
        }
      });
    },
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, reportList.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      key: item.uuid,
      value: item.name
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'reportId'],
    label: fields.reportId,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })))), FACETYPE > 0 && FACETYPE !== 8 && FACETYPE !== 6 && FACETYPE !== 7 && FACETYPE !== 22 && /*#__PURE__*/React.createElement(SortFields, {
    objectNo: tableName,
    id: ID
  }), /*#__PURE__*/React.createElement(LocaleNameForm, null), /*#__PURE__*/React.createElement(DragModal, {
    width: "auto",
    visible: colorVisible,
    onCancel: closeDragModel,
    onOk: chooseColor,
    title: "\u9009\u62E9\u989C\u8272"
  }, /*#__PURE__*/React.createElement(SketchPicker, {
    onChangeComplete: handleChangeComplete,
    color: bgColor,
    width: 300
  }))));
};

export default connect()(NavMenuForm);