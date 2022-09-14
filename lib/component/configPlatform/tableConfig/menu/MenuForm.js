"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _SearchInput = _interopRequireDefault(require("../../../common/search/SearchInput"));

var _DragModal = _interopRequireDefault(require("../../../common/drag/DragModal"));

var _LocaleNameForm = _interopRequireDefault(require("../../common/LocaleNameForm"));

var _dva = require("dva");

var _metaApi = require("../../../../service/metaApi");

var _reactColor = require("react-color");

var _mapParams = require("../../../../utils/mapParams");

var _language = _interopRequireDefault(require("@/locale/language"));

var _AddMapParams = _interopRequireDefault(require("./AddMapParams"));

var _ReportParams = _interopRequireDefault(require("./ReportParams"));

var _QualityInputParams = _interopRequireDefault(require("../../navMenu/QualityInputParams"));

var _LoadQualityInputParams = _interopRequireDefault(require("../../navMenu/LoadQualityInputParams"));

var _utils = require("../../../../utils/utils");

var _SelectMenu = _interopRequireDefault(require("../../common/SelectMenu"));

var _PropertyParams = _interopRequireDefault(require("./PropertyParams"));

var _OtherPropertyParams = _interopRequireDefault(require("./OtherPropertyParams"));

var _queryTabConfigRelationApi = require("../../../../utils/queryTabConfigRelationApi");

var _excluded = ["dispatch", "record", "namespace", "PID", "dataList", "OBJECTA", "visible2", "selectedRow", "objectANamespace", "pCONTROLAUTH", "objectNO"],
    _excluded2 = ["otherMenus"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var _language$common = _language.default.common,
    edit = _language$common.edit,
    add_from_store = _language$common.add_from_store,
    _language$configPlatf = _language.default.configPlatform.tableConfig.objectMenu,
    fields = _language$configPlatf.fields,
    title = _language$configPlatf.title;
var Option = _antd.Select.Option;
var Item = _antd.Form.Item;
var Text = _antd.Typography.Text;
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

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      MNOList = _useState2[0],
      setMNOList = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      WTYPE = _useState4[0],
      setWTYPE = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      DTYPE = _useState6[0],
      setDTYPE = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      OBJECTNO = _useState8[0],
      setObject = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      PARAMS = _useState10[0],
      setPARAMS = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      IMPLTYPE = _useState12[0],
      setIMPLTYPE = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      MNO = _useState14[0],
      setMNO = _useState14[1];

  var _useState15 = (0, _react.useState)('#fff'),
      _useState16 = _slicedToArray(_useState15, 2),
      bgColor = _useState16[0],
      setBgColor = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isDynamic = _useState18[0],
      setIsDynamic = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      colorVisible = _useState20[0],
      setColorVisible = _useState20[1];

  (0, _react.useEffect)(function () {
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
      var tn = (0, _queryTabConfigRelationApi.queryModelMap)(tableName);
      (0, _metaApi.queryItemPGR)({
        tn: checked ? 11 : tn,
        tableName: TABLENAME
      }).then(function (res) {
        if (res) {
          var list = (0, _utils.parseMeta)(res.dataList);
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

  return /*#__PURE__*/_react.default.createElement(_DragModal.default, _extends({
    title: edit + ' ' + title,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "menu",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout, {
    onValuesChange: onValuesChange
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: "NO",
    label: fields.NO,
    rules: [{
      required: true,
      pattern: pattern
    }, {
      validator: function validator(_, value) {
        return (0, _utils.checkRepeat)(value, 'NO', dataList, record.ID);
      }
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: record.ABTYPE && record.MTYPE === 1
  })), record.MTYPE === 0 && /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    style: {
      marginLeft: '20px'
    },
    onClick: selectMenu
  }, add_from_store), !record.ABTYPE && /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), /*#__PURE__*/_react.default.createElement(Item, {
    name: "MTYPE",
    label: fields.MTYPE
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    disabled: true
  }, _utils.isEnglish ? _mapParams.eventTypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : _mapParams.eventTypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "DTYPE",
    label: "\u63A7\u5236\u663E\u793A"
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    allowClear: true
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 0,
    key: 0
  }, "\u63A5\u53E3\u7A0B\u5E8F"), /*#__PURE__*/_react.default.createElement(Option, {
    value: 1,
    key: 1
  }, "JS\u811A\u672C"))), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && DTYPE === 0 && /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'disabledEvent'],
    label: fields.disabledAction,
    onClick: selectProcedures('disabledEvent'),
    allowClear: true // className="whole-line"
    // {...layout2}

  }), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && DTYPE === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'scriptNo'],
    label: "\u811A\u672C\u6807\u8BC6",
    onClick: selectScript,
    allowClear: true
  }), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: ['PARAMS', 'scriptValue'],
    label: "\u811A\u672C\u5185\u5BB9",
    style: {
      width: '100%'
    }
  }, layout2), /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    allowClear: true
  }))), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && pCONTROLAUTH || objectANamespace === 'navMenu' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: 'AUTHCODE',
    label: fields.AUTHCODE,
    onClick: selectAUTHCODE,
    allowClear: true,
    form: form
  })) : null, /*#__PURE__*/_react.default.createElement(Item, {
    label: '背景色配置',
    name: "bg_color"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    style: {
      backgroundColor: bgColor,
      opacity: '0.7'
    },
    onClick: openColorPicker
  })), record.NO !== 'BeforeEvent' && record.NO !== 'AfterEvent' && record.MTYPE === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !record.ABTYPE && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.modal_params), /*#__PURE__*/_react.default.createElement(Item, {
    name: "WTYPE",
    label: fields.WTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, _utils.isEnglish ? _mapParams.wtypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : _mapParams.wtypeMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), WTYPE !== 'processInstanceList' && /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: "TABLENAME",
    label: WTYPE === 'otherObjectPropertyPage' ? fields.STABLENAME : fields.TABLENAME,
    onClick: selectItemTableName,
    rules: [{
      required: true
    }]
  }), WTYPE === 'QualityInspectionEntry' && /*#__PURE__*/_react.default.createElement(_QualityInputParams.default, {
    form: form,
    objectNo: OBJECTNO
  }), WTYPE === 'LoadQualityInspectionEntry' && /*#__PURE__*/_react.default.createElement(_LoadQualityInputParams.default, {
    form: form,
    objectNo: OBJECTNO,
    TYPE: 0
  }), WTYPE === 'QualityInspectionReport' && /*#__PURE__*/_react.default.createElement(_LoadQualityInputParams.default, {
    form: form,
    objectNo: OBJECTNO,
    TYPE: 1
  }), WTYPE === 'dataImport' && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'BATCH'],
    label: fields.BATCH,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null))), (WTYPE === 'objectRelationPage' || WTYPE === 'objectPropertyPage' || WTYPE === 'detailForm' || WTYPE === 'detailRelationPage') && /*#__PURE__*/_react.default.createElement(Item, {
    name: "MNO",
    label: fields.MNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (WTYPE === 'detailForm' || WTYPE === 'detailRelationPage' || WTYPE === 'objectPropertyPage') && isDynamic ? MNOList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.FIELDNAME,
      key: index
    }, item.NAME);
  }) : MNOList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), (WTYPE === 'detailForm' || WTYPE === 'detailRelationPage' || WTYPE === 'objectPropertyPage') && /*#__PURE__*/_react.default.createElement(Item, {
    name: "IS_DYNAMIC",
    label: fields.IS_DYNAMIC,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: onChangeDynamic
  })), WTYPE === 'objectPropertyPage' &&
  /*#__PURE__*/
  // <SearchInput name='PROPERTYPARAM' label={fields.PROPERTYPARAM} />
  _react.default.createElement(_PropertyParams.default, {
    TABLENAME: OBJECTNO,
    MNO: MNO,
    OBJECTA: OBJECTA,
    record: record,
    namespace: namespace,
    PID: PID,
    form: form
  }), WTYPE === 'otherObjectPropertyPage' && /*#__PURE__*/_react.default.createElement(_OtherPropertyParams.default, {
    form: form,
    dispatch: dispatch,
    TABLENAME: OBJECTNO,
    MNO: MNO
  }), WTYPE === 'queryObjectView' && /*#__PURE__*/_react.default.createElement(_AddMapParams.default, {
    form: form,
    dispatch: dispatch,
    OBJECTNO: OBJECTNO
  }), /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.impl_params), WTYPE !== 'report' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, WTYPE !== 'detailForm' && WTYPE !== 'detailRelationPage' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: "IMPLTYPE",
    label: fields.IMPLTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, _utils.isEnglish ? _mapParams.IMPLTYPEMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }) : _mapParams.IMPLTYPEMap.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), (IMPLTYPE === 1 || IMPLTYPE === 3) && /*#__PURE__*/_react.default.createElement(Item, {
    name: "IMPLCLASS",
    label: IMPLTYPE === 3 ? fields.RESTFUL : fields.IMPLCLASS,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null))), IMPLTYPE === 2 && /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'procedures'],
    rules: [{
      required: true
    }],
    label: fields.procedures,
    onClick: selectProcedures('procedures')
  }), !record.ABTYPE && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: "REQPARAM",
    label: fields.REQPARAM,
    className: "whole-line"
  }, layout2), /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.main_object_params, ":"), _utils.isEnglish ? _mapParams.reqParamMap1.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : _mapParams.reqParamMap1.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/_react.default.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.relationship_object_params, ":"), _utils.isEnglish ? _mapParams.reqParamMap2.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value,
      disabled: objectANamespace === 'relationship' ? true : false
    }, item.label);
  }) : _mapParams.reqParamMap2.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value,
      disabled: objectANamespace === 'relationship' ? true : false
    }, item.label);
  }), /*#__PURE__*/_react.default.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.class_page_params, ":"), _utils.isEnglish ? _mapParams.reqParamMap3.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : _mapParams.reqParamMap3.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/_react.default.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.tree_table_object_param, ":"), _utils.isEnglish ? _mapParams.reqParamMap5.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : _mapParams.reqParamMap5.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }), /*#__PURE__*/_react.default.createElement(Text, {
    strong: true,
    style: {
      display: 'block'
    }
  }, fields.other_params, ":"), _utils.isEnglish ? _mapParams.reqParamMap4.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }) : _mapParams.reqParamMap4.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
      value: item.value,
      key: item.value
    }, item.label);
  }))), /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: ['PARAMS', 'customParam'],
    label: fields.customParam
  }, layout2, {
    className: "whole-line"
  }), /*#__PURE__*/_react.default.createElement(_antd.Input, null)))), WTYPE === 'report' && /*#__PURE__*/_react.default.createElement(_ReportParams.default, {
    PARAMS: PARAMS,
    OBJECTNO: OBJECTNO,
    form: form
  })), /*#__PURE__*/_react.default.createElement(_LocaleNameForm.default, null)), /*#__PURE__*/_react.default.createElement(_SelectMenu.default, null), /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    width: "auto",
    visible: colorVisible,
    onCancel: function onCancel() {
      return setColorVisible(false);
    },
    onOk: chooseColor,
    title: "\u9009\u62E9\u989C\u8272"
  }, /*#__PURE__*/_react.default.createElement(_reactColor.SketchPicker, {
    onChangeComplete: handleChangeComplete,
    color: bgColor,
    width: 300
  })));
};

var _default = (0, _dva.connect)()(MenuForm);

exports.default = _default;