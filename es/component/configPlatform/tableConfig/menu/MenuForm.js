var _excluded = ["dispatch", "record", "namespace", "PID", "dataList", "OBJECTA", "visible2", "selectedRow", "objectANamespace", "pCONTROLAUTH", "objectNO"],
    _excluded2 = ["otherMenus"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
 * @Description: 菜单表单
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox, Button, Divider, Typography } from 'antd';
import SearchInput from '../../../common/search/SearchInput';
import DragModal from '../../../common/drag/DragModal';
import LocaleNameForm from '../../common/LocaleNameForm';
import { connect } from 'dva';
import { queryItem, queryItemPGR } from '../../../../service/metaApi';
import { SketchPicker } from 'react-color';
import { eventTypeMap, wtypeMap, IMPLTYPEMap, reqParamMap1, reqParamMap2, reqParamMap3, reqParamMap4, reqParamMap5 } from '../../../../utils/mapParams';
import { eventTypeMap as enMenuTypeMap, wtypeMap as enWtypeMap, IMPLTYPEMap as enIMPLTYPEMap, reqParamMap1 as enReqParamMap1, reqParamMap2 as enReqParamMap2, reqParamMap3 as enReqParamMap3, reqParamMap4 as enReqParamMap4, reqParamMap5 as enReqParamMap5 } from '../../../../utils/mapParams';
import language from '@/locale/language';
import AddMapParams from './AddMapParams';
import ReportParams from './ReportParams';
import QualityInputParams from '../../navMenu/QualityInputParams';
import LoadQualityInputParams from '../../navMenu/LoadQualityInputParams';
import { checkRepeat, isEnglish, parseMeta } from '../../../../utils/utils';
import SelectMenu from '../../common/SelectMenu';
import PropertyParams from './PropertyParams';
import OtherPropertyParams from './OtherPropertyParams';
import { queryModelMap, queryRelationPropertyQueryApi } from '../../../../utils/queryTabConfigRelationApi';
var _language$common = language.common,
    edit = _language$common.edit,
    add_from_store = _language$common.add_from_store,
    _language$configPlatf = language.configPlatform.tableConfig.objectMenu,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Option = Select.Option;
var Item = Form.Item;
var Text = Typography.Text;
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
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';
var conditionMap = {
  tableConfig: 'MTYPE=1',
  navMenu: 'MTYPE in (0,1)',
  relationship: 'MTYPE=2'
};
var relationshipObjectParams = ['objectA', 'objectAData', 'relationShipNo'];

var MenuForm = function MenuForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      namespace = _ref.namespace,
      PID = _ref.PID,
      dataList = _ref.dataList,
      OBJECTA = _ref.OBJECTA,
      visible2 = _ref.visible2,
      selectedRow = _ref.selectedRow,
      objectANamespace = _ref.objectANamespace,
      pCONTROLAUTH = _ref.pCONTROLAUTH,
      objectNO = _ref.objectNO,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      MNOList = _useState2[0],
      setMNOList = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      WTYPE = _useState4[0],
      setWTYPE = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      DTYPE = _useState6[0],
      setDTYPE = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      OBJECTNO = _useState8[0],
      setObject = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      PARAMS = _useState10[0],
      setPARAMS = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      IMPLTYPE = _useState12[0],
      setIMPLTYPE = _useState12[1];

  var _useState13 = useState(''),
      _useState14 = _slicedToArray(_useState13, 2),
      MNO = _useState14[0],
      setMNO = _useState14[1];

  var _useState15 = useState('#fff'),
      _useState16 = _slicedToArray(_useState15, 2),
      bgColor = _useState16[0],
      setBgColor = _useState16[1];

  var _useState17 = useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isDynamic = _useState18[0],
      setIsDynamic = _useState18[1];

  var _useState19 = useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      colorVisible = _useState20[0],
      setColorVisible = _useState20[1];

  useEffect(function () {
    if (record.META) record = _objectSpread(_objectSpread({}, record), record.META);
    var _record = record,
        ID = _record.ID,
        OBJECTNO = _record.OBJECTNO,
        TABLENAME = _record.TABLENAME,
        WTYPE = _record.WTYPE,
        DTYPE = _record.DTYPE,
        PARAMS = _record.PARAMS,
        IMPLTYPE = _record.IMPLTYPE,
        MNO = _record.MNO,
        CONTROLAUTH = _record.CONTROLAUTH,
        REQPARAM = _record.REQPARAM,
        IS_DYNAMIC = _record.IS_DYNAMIC;
    setPARAMS(PARAMS);
    setIMPLTYPE(IMPLTYPE);
    setMNO(MNO);
    setIsDynamic(IS_DYNAMIC);
    setDTYPE(DTYPE || 0);
    form.setFieldsValue({
      TABLENAME: OBJECTNO || objectNO
    });

    if (ID) {
      form.setFieldsValue({
        TABLENAME: TABLENAME
      });
      getMNOList(WTYPE, TABLENAME, IS_DYNAMIC);
    } else {
      setWTYPE('');
    } // if (objectANamespace === 'relationship') {
    //   const reqparams = REQPARAM ? [...REQPARAM, ...relationshipObjectParams] : relationshipObjectParams
    //   form.setFieldsValue({ REQPARAM: reqparams })
    // }

  }, [form, record]);

  var onFinish = function onFinish(values) {
    for (var key in values) {
      values[key] = values[key] === '' ? undefined : values[key];
    }

    var REQPARAM = values.REQPARAM,
        PARAMS = values.PARAMS;
    values.REQPARAM = REQPARAM ? REQPARAM.join(';') : null;
    values.PID = record.PID || '0';
    values.ABTYPE = record.ABTYPE;
    values.PARAMS = PARAMS;
    values.TABLENAME = values.TABLENAME || OBJECTNO;
    if (IMPLTYPE === 2) values.IMPLCLASS = 'proce.CallDataBaseProcedureEvent';

    if (visible2) {
      var _PARAMS = selectedRow.PARAMS || {};

      var _ref2 = _PARAMS || {},
          _ref2$otherMenus = _ref2.otherMenus,
          otherMenus = _ref2$otherMenus === void 0 ? [] : _ref2$otherMenus,
          rest = _objectWithoutProperties(_ref2, _excluded2);

      if (record.ID) {
        var index = otherMenus.findIndex(function (item) {
          return item.ID === record.ID;
        });
        otherMenus[index] = _objectSpread(_objectSpread({}, values), {}, {
          ID: record.ID
        });
      } else {
        values.ID = "".concat(selectedRow.ID, "-").concat(otherMenus.length);
        otherMenus.push(values);
      }

      dispatch({
        type: 'commonConfig/editItem',
        payload: {
          values: {
            PARAMS: JSON.stringify(_objectSpread(_objectSpread({}, rest), {}, {
              otherMenus: otherMenus
            }))
          },
          record: selectedRow,
          namespace: namespace,
          objectANamespace: objectANamespace,
          PID: PID
        }
      });
    } else {
      dispatch({
        type: 'commonConfig/editItem',
        payload: {
          values: values,
          record: record,
          selectedRow: selectedRow,
          namespace: namespace,
          objectANamespace: objectANamespace,
          PID: PID
        }
      });
    }
  };

  var getMNOList = function getMNOList(WTYPE, TABLENAME, checked) {
    setWTYPE(WTYPE);
    setObject(TABLENAME);
    var tableName;

    if (WTYPE === 'objectRelationPage' || WTYPE === 'otherObjectPropertyPage' || WTYPE === 'objectPropertyPage' || WTYPE === 'LoadQualityInspectionEntry' || WTYPE === 'detailForm' || WTYPE === 'detailRelationPage') {
      tableName = WTYPE === 'objectRelationPage' || WTYPE === 'detailRelationPage' ? 'META_OBJECT_RELATION_INFO' : 'META_OBJECT_FORM';
      var tn = queryModelMap(tableName);
      queryItemPGR({
        tn: checked ? 11 : tn,
        tableName: TABLENAME
      }).then(function (res) {
        if (res) {
          var list = parseMeta(res.dataList);
          if (checked) list = list.filter(function (item) {
            return item.EDITOR === 'MapValueList' || item.EDITOR === 'ValueList';
          });
          setMNOList(list);
        }
      });
    }
  };

  var selectItemTableName = function selectItemTableName() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        onSelect: function onSelect(rows) {
          var TABLENAME = rows[0].TABLENAME;
          form.setFieldsValue({
            TABLENAME: TABLENAME
          });
          getMNOList(WTYPE, TABLENAME);
        }
      }
    });
  };

  var selectMenu = function selectMenu() {
    dispatch({
      type: 'selectMenu/query',
      payload: {
        type: 'menu',
        condition: conditionMap[objectANamespace],
        onSelect: function onSelect(rows) {
          var _rows$ = rows[0],
              WTYPE = _rows$.WTYPE,
              REQPARAM = _rows$.REQPARAM,
              NO = _rows$.NO,
              ICON = _rows$.ICON,
              IMPLTYPE = _rows$.IMPLTYPE,
              IMPLCLASS = _rows$.IMPLCLASS,
              PARAMS = _rows$.PARAMS,
              NAME = _rows$.NAME,
              ENNAME = _rows$.ENNAME;
          REQPARAM = REQPARAM ? REQPARAM.split(';') : null;

          if (objectANamespace === 'relationship') {
            REQPARAM = Array.from(new Set([].concat(_toConsumableArray(REQPARAM), relationshipObjectParams)));
          }

          form.setFieldsValue({
            WTYPE: WTYPE,
            REQPARAM: REQPARAM,
            NO: NO,
            ICON: ICON,
            IMPLTYPE: IMPLTYPE,
            IMPLCLASS: IMPLCLASS,
            PARAMS: PARAMS,
            NAME: NAME,
            ENNAME: ENNAME
          });
          getMNOList(WTYPE, form.getFieldValue('TABLENAME') || objectNO);
          setIMPLTYPE(IMPLTYPE);
        }
      }
    });
  };

  var selectProcedures = function selectProcedures(no) {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'procedures',
          onSelect: function onSelect(rows) {
            var _rows$2 = rows[0],
                Name = _rows$2.Name,
                NAME = _rows$2.NAME;
            form.setFieldsValue({
              PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, _defineProperty({}, no, Name || NAME))
            });
          }
        }
      });
    };
  };

  var selectScript = function selectScript(value) {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'script',
        onSelect: function onSelect(rows) {
          var _rows$3 = rows[0],
              no = _rows$3.no,
              scriptValue = _rows$3.scriptValue;
          form.setFieldsValue({
            PARAMS: _objectSpread(_objectSpread({}, form.getFieldValue('PARAMS')), {}, {
              scriptNo: no,
              scriptValue: scriptValue
            })
          });
        }
      }
    });
  };

  var onValuesChange = function onValuesChange(_ref3) {
    var WTYPE = _ref3.WTYPE,
        IMPLTYPE = _ref3.IMPLTYPE,
        MNO = _ref3.MNO,
        CONTROLAUTH = _ref3.CONTROLAUTH,
        DTYPE = _ref3.DTYPE;
    if (DTYPE !== undefined) setDTYPE(DTYPE);

    if (WTYPE) {
      form.setFieldsValue({
        MNO: '',
        IS_DYNAMIC: ''
      });
      getMNOList(WTYPE, form.getFieldValue('TABLENAME') || objectNO);
    }

    if (IMPLTYPE) {
      setIMPLTYPE(IMPLTYPE);
    }

    if (MNO) setMNO(MNO);
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

  var selectAUTHCODE = function selectAUTHCODE() {
    dispatch({
      type: 'selectData/queryAuthcode',
      payload: {
        type: 'authCode',
        onSelect: function onSelect(rows) {
          form.setFieldsValue({
            AUTHCODE: rows[0].NO
          });
        }
      }
    });
  };

  var onChangeDynamic = function onChangeDynamic(_ref4) {
    var checked = _ref4.target.checked;
    setIsDynamic(checked);
    form.setFieldsValue({
      MNO: ''
    });
    getMNOList(WTYPE, form.getFieldValue('TABLENAME') || objectNO, checked);
  };

  var openColorPicker = function openColorPicker() {
    setColorVisible(true);
  };

  var handleChangeComplete = function handleChangeComplete(color) {
    setBgColor(color.hex);
  };

  var chooseColor = function chooseColor() {
    form.setFieldsValue({
      bg_color: bgColor
    });
    setColorVisible(false);
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "menu",
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
      validator: function validator(_, value) {
        return checkRepeat(value, 'NO', dataList, record.ID);
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: record.ABTYPE && record.MTYPE === 1
  })), record.MTYPE === 0 && /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    style: {
      marginLeft: '20px'
    },
    onClick: selectMenu
  }, add_from_store), !record.ABTYPE && /*#__PURE__*/React.createElement(SearchInput, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), /*#__PURE__*/React.createElement(Item, {
    name: "MTYPE",
    label: fields.MTYPE
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: true
  }, isEnglish ? enMenuTypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : eventTypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: "DTYPE",
    label: "\u63A7\u5236\u663E\u793A"
  }, /*#__PURE__*/React.createElement(Select, {
    allowClear: true
  }, /*#__PURE__*/React.createElement(Option, {
    value: 0,
    key: 0
  }, "\u63A5\u53E3\u7A0B\u5E8F"), /*#__PURE__*/React.createElement(Option, {
    value: 1,
    key: 1
  }, "JS\u811A\u672C"))), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && DTYPE === 0 && /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'disabledEvent'],
    label: fields.disabledAction,
    onClick: selectProcedures('disabledEvent'),
    allowClear: true // className="whole-line"
    // {...layout2}

  }), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && DTYPE === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'scriptNo'],
    label: "\u811A\u672C\u6807\u8BC6",
    onClick: selectScript,
    allowClear: true
  }), /*#__PURE__*/React.createElement(Item, _extends({
    name: ['PARAMS', 'scriptValue'],
    label: "\u811A\u672C\u5185\u5BB9",
    style: {
      width: '100%'
    }
  }, layout2), /*#__PURE__*/React.createElement(Input.TextArea, {
    allowClear: true
  }))), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && pCONTROLAUTH || objectANamespace === 'navMenu' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: 'AUTHCODE',
    label: fields.AUTHCODE,
    onClick: selectAUTHCODE,
    allowClear: true,
    form: form
  })) : null, /*#__PURE__*/React.createElement(Item, {
    label: '背景色配置',
    name: "bg_color"
  }, /*#__PURE__*/React.createElement(Input, {
    style: {
      backgroundColor: bgColor,
      opacity: '0.7'
    },
    onClick: openColorPicker
  })), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && record.MTYPE === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, !record.ABTYPE && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null, fields.modal_params), /*#__PURE__*/React.createElement(Item, {
    name: "WTYPE",
    label: fields.WTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, isEnglish ? enWtypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : wtypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), WTYPE !== 'processInstanceList' && /*#__PURE__*/React.createElement(SearchInput, {
    name: "TABLENAME",
    label: WTYPE === 'otherObjectPropertyPage' ? fields.STABLENAME : fields.TABLENAME,
    onClick: selectItemTableName,
    rules: [{
      required: true
    }]
  }), WTYPE === 'QualityInspectionEntry' && /*#__PURE__*/React.createElement(QualityInputParams, {
    form: form,
    objectNo: OBJECTNO
  }), WTYPE === 'LoadQualityInspectionEntry' && /*#__PURE__*/React.createElement(LoadQualityInputParams, {
    form: form,
    objectNo: OBJECTNO,
    TYPE: 0
  }), WTYPE === 'QualityInspectionReport' && /*#__PURE__*/React.createElement(LoadQualityInputParams, {
    form: form,
    objectNo: OBJECTNO,
    TYPE: 1
  }), WTYPE === 'dataImport' && /*#__PURE__*/React.createElement(Item, {
    name: ['PARAMS', 'BATCH'],
    label: fields.BATCH,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null))), (WTYPE === 'objectRelationPage' || WTYPE === 'objectPropertyPage' || WTYPE === 'detailForm' || WTYPE === 'detailRelationPage') && /*#__PURE__*/React.createElement(Item, {
    name: "MNO",
    label: fields.MNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (WTYPE === 'detailForm' || WTYPE === 'detailRelationPage' || WTYPE === 'objectPropertyPage') && isDynamic ? MNOList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.FIELDNAME,
      key: index
    }, item.NAME);
  }) : MNOList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), (WTYPE === 'detailForm' || WTYPE === 'detailRelationPage' || WTYPE === 'objectPropertyPage') && /*#__PURE__*/React.createElement(Item, {
    name: "IS_DYNAMIC",
    label: fields.IS_DYNAMIC,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    onChange: onChangeDynamic
  })), WTYPE === 'objectPropertyPage' &&
  /*#__PURE__*/
  // <SearchInput name='PROPERTYPARAM' label={fields.PROPERTYPARAM} />
  React.createElement(PropertyParams, {
    TABLENAME: OBJECTNO,
    MNO: MNO,
    OBJECTA: OBJECTA,
    record: record,
    namespace: namespace,
    PID: PID,
    form: form
  }), WTYPE === 'otherObjectPropertyPage' && /*#__PURE__*/React.createElement(OtherPropertyParams, {
    form: form,
    dispatch: dispatch,
    TABLENAME: OBJECTNO,
    MNO: MNO
  }), WTYPE === 'queryObjectView' && /*#__PURE__*/React.createElement(AddMapParams, {
    form: form,
    dispatch: dispatch,
    OBJECTNO: OBJECTNO
  }), /*#__PURE__*/React.createElement(Divider, null, fields.impl_params), WTYPE !== 'report' && /*#__PURE__*/React.createElement(React.Fragment, null, WTYPE !== 'detailForm' && WTYPE !== 'detailRelationPage' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: "IMPLTYPE",
    label: fields.IMPLTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, isEnglish ? enIMPLTYPEMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : IMPLTYPEMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), (IMPLTYPE === 1 || IMPLTYPE === 3) && /*#__PURE__*/React.createElement(Item, {
    name: "IMPLCLASS",
    label: IMPLTYPE === 3 ? fields.RESTFUL : fields.IMPLCLASS,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, null))), IMPLTYPE === 2 && /*#__PURE__*/React.createElement(SearchInput, {
    name: ['PARAMS', 'procedures'],
    rules: [{
      required: true
    }],
    label: fields.procedures,
    onClick: selectProcedures('procedures')
  }), !record.ABTYPE && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, _extends({
    name: "REQPARAM",
    label: fields.REQPARAM,
    className: "whole-line"
  }, layout2), /*#__PURE__*/React.createElement(Checkbox.Group, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.main_object_params, ":"), isEnglish ? enReqParamMap1.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : reqParamMap1.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.relationship_object_params, ":"), isEnglish ? enReqParamMap2.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value,
      disabled: objectANamespace === 'relationship' ? true : false
    }, item.label);
  }) : reqParamMap2.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value,
      disabled: objectANamespace === 'relationship' ? true : false
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.class_page_params, ":"), isEnglish ? enReqParamMap3.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : reqParamMap3.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.tree_table_object_param, ":"), isEnglish ? enReqParamMap5.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : reqParamMap5.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/React.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.other_params, ":"), isEnglish ? enReqParamMap4.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : reqParamMap4.map(function (item) {
    return /*#__PURE__*/React.createElement(Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }))), /*#__PURE__*/React.createElement(Item, _extends({
    name: ['PARAMS', 'customParam'],
    label: fields.customParam
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/React.createElement(Input, null)))), WTYPE === 'report' && /*#__PURE__*/React.createElement(ReportParams, {
    PARAMS: PARAMS,
    OBJECTNO: OBJECTNO,
    form: form
  })), /*#__PURE__*/React.createElement(LocaleNameForm, null)), /*#__PURE__*/React.createElement(SelectMenu, null), /*#__PURE__*/React.createElement(DragModal, {
    width: "auto",
    visible: colorVisible,
    onCancel: function onCancel() {
      return setColorVisible(false);
    },
    onOk: chooseColor,
    title: "\u9009\u62E9\u989C\u8272"
  }, /*#__PURE__*/React.createElement(SketchPicker, {
    onChangeComplete: handleChangeComplete,
    color: bgColor,
    width: 300
  })));
};

export default connect()(MenuForm);