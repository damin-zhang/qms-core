"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _dva = require("dva");

var _jsBase = require("js-base64");

var _SearchInput = _interopRequireDefault(require("../../common/search/SearchInput"));

var _mapParams = require("../../../utils/mapParams");

var _utils = require("../../../utils/utils");

var _metaApi = require("../../../service/metaApi");

var _api = require("../../../service/api");

var _LocaleNameForm = _interopRequireDefault(require("../common/LocaleNameForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _SortFields = _interopRequireDefault(require("../common/SortFields"));

var _CalendarViewParams = _interopRequireDefault(require("./CalendarViewParams"));

var _QualityInputParams = _interopRequireDefault(require("./QualityInputParams"));

var _queryTabConfigRelationApi = require("../../../utils/queryTabConfigRelationApi");

var _excluded = ["record", "dispatch", "ID", "namespace", "form", "selectedRows"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var fields = _language.default.configPlatform.navMenu.fields,
    configure_report = _language.default.message.report.configure_report;
var Option = _antd.Select.Option;
var Item = _antd.Form.Item;
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

var ParameterRight = function ParameterRight(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      dispatch = _ref.dispatch,
      ID = _ref.ID,
      namespace = _ref.namespace,
      form = _ref.form,
      selectedRows = _ref.selectedRows,
      restProp = _objectWithoutProperties(_ref, _excluded);

  // const [form] = Form.useForm()
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      FACETYPE = _useState2[0],
      setFACETYPE = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      gridList = _useState4[0],
      setGridList = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      relationList = _useState6[0],
      setRelationList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      viewList = _useState8[0],
      setViewList = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      reportList = _useState10[0],
      setReportList = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      objectNo = _useState12[0],
      setObjectNo = _useState12[1];

  var _useState13 = (0, _react.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      reportConfig = _useState14[0],
      setReportConfig = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = _slicedToArray(_useState15, 2),
      bddpReportConfig = _useState16[0],
      setBddpReportConfig = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      fieldList = _useState18[0],
      setFieldList = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isClass = _useState20[0],
      setIsClass = _useState20[1];

  var _useState21 = (0, _react.useState)(true),
      _useState22 = _slicedToArray(_useState21, 2),
      flag = _useState22[0],
      setFlag = _useState22[1];

  (0, _react.useEffect)(function () {
    if (flag) {
      getReportConfig('allReportFile');
      getReportConfig('bddpReportFile');
      setFlag(false);
    }

    var ID = record.ID,
        FACETYPE = record.FACETYPE;

    if (ID) {
      setFACETYPE(FACETYPE);
      var _record$PARAMS = record.PARAMS,
          tableName = _record$PARAMS.tableName,
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

      if (tableName) {
        getFieldList(tableName);
        getMNOList(tableName, FACETYPE);
      }

      if (FACETYPE === 5) getViewList();

      if (record.PARAMS) {
        form.setFieldsValue({
          PARAMS: record.PARAMS.reportName ? record.PARAMS : _objectSpread(_objectSpread({}, record.PARAMS), {}, {
            reportName: null
          })
        });
      }

      isBddpChange({
        target: {
          checked: isBddp
        }
      });
    } else {
      // setFACETYPE('')
      setIsClass(false);
      isBddpChange({
        target: {
          checked: false
        }
      });
      form.setFieldsValue({
        INITDATA: true
      });
    }
  }, [record, form]);
  (0, _react.useEffect)(function () {
    var ID = record.ID;

    if (ID) {
      var _record$PARAMS$isBddp2 = record.PARAMS.isBddp,
          isBddp = _record$PARAMS$isBddp2 === void 0 ? false : _record$PARAMS$isBddp2;
      isBddpChange({
        target: {
          checked: isBddp
        }
      });
    } else {
      isBddpChange({
        target: {
          checked: false
        }
      });
    }
  }, [reportConfig, bddpReportConfig]);

  var onFinish = function onFinish(values) {
    // values.PID = record.PID || ID || '0'
    if (values.PARAMS) {
      values.PARAMS.classNodeObjectNo = values.PARAMS.classNodeTableName;
      values.PARAMS.classObjectNo = values.PARAMS.classTableName;
      values.PARAMS.objectNo = values.PARAMS.tableName;
    }

    dispatch({
      type: 'navMenu/editParams',
      payload: {
        values: values,
        record: record,
        namespace: namespace
      }
    });
  };

  var onValuesChange = function onValuesChange(_ref2) {
    var FACETYPE = _ref2.FACETYPE;

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
      }); // "????????????"??????????????????

      if (FACETYPE === 7) form.setFieldsValue({
        PARAMS: {
          statisticsField: true
        }
      });
    }
  };

  var selectObjectNo = function selectObjectNo(no) {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'objectNo',
          condition: no === 'classTableName' ? "JSON_VALUE(B.META,'$.TYPE') = 3" : "JSON_VALUE(B.META,'$.TYPE') IN (0,1,4)",
          onSelect: function onSelect(rows) {
            var TABLENAME = rows[0].TABLENAME;
            var PARAMS = form.getFieldValue('PARAMS') || {};
            PARAMS[no] = TABLENAME;

            if (no === 'classTableName') {
              PARAMS.tableName = TABLENAME.slice(TABLENAME.indexOf('_') + 1, TABLENAME.lastIndexOf('_'));
              getFieldList(PARAMS.tableName);
              getMNOList(PARAMS.tableName, FACETYPE);
            } // ???????????????form item????????????????????????form.resetFields()????????????


            form.resetFields(['PARAMS']);
            form.setFieldsValue({
              PARAMS: PARAMS
            });

            if (no === 'tableName') {
              getFieldList(TABLENAME);
              getMNOList(TABLENAME, FACETYPE);
            }
          }
        }
      });
    };
  };

  var getMNOList = function getMNOList(tableName, FACETYPE) {
    setObjectNo(tableName);
    (0, _metaApi.queryItemPGR)({
      tn: (0, _queryTabConfigRelationApi.queryModelMap)(FACETYPE === 22 ? 'META_OBJECT_FORM' : 'META_OBJECT_GRID'),
      tableName: tableName
    }).then(function (res) {
      if (res) setGridList((0, _utils.parseMeta)(res.dataList));
    });

    if (FACETYPE === 2 || FACETYPE === 3 || FACETYPE === 4 || FACETYPE === 5 || FACETYPE === 7 || FACETYPE === 22) {
      (0, _metaApi.queryItemPGR)({
        tn: (0, _queryTabConfigRelationApi.queryModelMap)('META_OBJECT_RELATION_INFO'),
        tableName: tableName
      }).then(function (res) {
        if (res) setRelationList((0, _utils.parseMeta)(res.dataList));
      });
    }
  };

  var getFieldList = function getFieldList(tableName) {
    (0, _metaApi.queryItemPGR)({
      tn: 11,
      tableName: tableName
    }).then(function (res) {
      if (res && res.dataList) setFieldList((0, _utils.parseMeta)(res.dataList));
    });
  };

  var getViewList = function getViewList() {
    (0, _metaApi.queryObject)({
      tn: 4
    }).then(function (res) {
      if (res) setViewList((0, _utils.parseMeta)(res.dataList));
    });
  }; // ??????????????????


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
  }; // ??????????????????????????????


  var isBddpChange = function isBddpChange(_ref3) {
    var checked = _ref3.target.checked;
    var reportIp = checked ? bddpReportConfig.CONFIG_VALUE : reportConfig.CONFIG_VALUE;
    reportIp && (0, _api.queryReport)(reportIp).then(function (data) {
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

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%',
      position: 'relative',
      padding: '8px 8px 0'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: "navMenu",
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout, restProp, {
    onValuesChange: onValuesChange
  }), FACETYPE !== 6 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, FACETYPE === 4 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'classNodeTableName'],
    label: fields.classNodeObjectNo,
    rules: [{
      required: true
    }],
    onClick: selectObjectNo('classNodeTableName')
  }), /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'classTableName'],
    label: fields.classObjectNo,
    rules: [{
      required: true
    }],
    onClick: selectObjectNo('classTableName')
  })), FACETYPE === 5 && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'viewNo'],
    label: fields.viewNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    onSelect: onViewNoSelect
  }, viewList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: index,
      OBJECTNO: item.OBJECTNO
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: ['PARAMS', 'tableName'],
    label: fields.tableName,
    rules: [{
      required: true
    }],
    onClick: FACETYPE !== 5 && FACETYPE !== 4 ? selectObjectNo('tableName') : null,
    disabled: FACETYPE === 5
  }), FACETYPE === 22 ? /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'objectPropertyNo'],
    label: fields.objectPropertyPageNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, gridList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: index
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))) : FACETYPE !== 7 && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'objectGridNo'],
    label: fields.objectGridNo,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, gridList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: index
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), FACETYPE !== 1 && FACETYPE !== 22 && FACETYPE !== 7 && /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'objectRelationPageNo'],
    label: fields.objectRelationPageNo,
    rules: [{
      required: FACETYPE === 2
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, relationList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.NO,
      key: index
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), (FACETYPE === 1 || FACETYPE === 2 || FACETYPE === 3 || FACETYPE === 7 || FACETYPE === 21) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'isClass'],
    label: fields.isClass,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: isClassChange
  })), isClass && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'dataClassField'],
    label: fields.dataClassField,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, (fieldList.filter(function (item) {
    return item.EDITOR === 'ValueList' || item.EDITOR === 'MapValueList';
  }) || []).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.META.FIELDNAME,
      key: item.META.FIELDNAME
    }, _utils.isEnglish ? item.ENNAME : item.NAME);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'classTabPosition'],
    label: fields.classTabPosition,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, null, _mapParams.classTabPositionMap.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: item.value
    }, item.name);
  })))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'systemSubarea'],
    label: fields.systemSubarea,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, null))), FACETYPE === 7 && /*#__PURE__*/_react.default.createElement(_CalendarViewParams.default, {
    form: form,
    objectNo: objectNo
  }), FACETYPE === 21 && /*#__PURE__*/_react.default.createElement(_QualityInputParams.default, {
    form: form,
    objectNo: objectNo
  }), FACETYPE !== 22 && /*#__PURE__*/_react.default.createElement(Item, _extends({
    name: ['PARAMS', 'condition'],
    className: "whole-line",
    label: fields.condition
  }, layout2), FACETYPE === 7 ? /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, null) : /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, null))), FACETYPE === 6 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'isBddp'],
    label: fields.isBddp,
    valuePropName: "checked"
  }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
    onChange: isBddpChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ant-form-inline",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'reportName'],
    label: fields.reportName,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
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
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: item.uuid,
      value: item.name
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: ['PARAMS', 'reportId'],
    label: fields.reportId,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: true
  })))), FACETYPE > 0 && FACETYPE !== 6 && FACETYPE !== 7 && FACETYPE !== 22 && /*#__PURE__*/_react.default.createElement(_SortFields.default, {
    objectNo: objectNo,
    id: ID
  }), /*#__PURE__*/_react.default.createElement(_LocaleNameForm.default, null)));
};

var _default = (0, _dva.connect)()(ParameterRight);

exports.default = _default;