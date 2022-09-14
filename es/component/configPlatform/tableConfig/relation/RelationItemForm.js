var _excluded = ["dispatch", "record", "namespace", "rootId", "OBJECTNO", "pCONTROLAUTH"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Description: 属性页字段表单(右)
 */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Divider, Checkbox } from 'antd';
import DragModal from '../../../common/drag/DragModal';
import LocaleNameForm from '../../common/LocaleNameForm';
import { connect } from 'dva';
import language from '@/locale/language';
import { rTypeMap } from '../../../../utils/mapParams';
import SearchInput from '../../../common/search/SearchInput';
import { queryItemPGR } from '../../../../service/metaApi';
import { parseMeta } from '../../../../utils/utils';
import { queryModelMap } from '../../../../utils/queryTabConfigRelationApi';
var edit = language.common.edit,
    _language$configPlatf = language.configPlatform.tableConfig.objectRelationPage,
    fields = _language$configPlatf.fields,
    objectTitle = _language$configPlatf.objectTitle;
var Item = Form.Item;
var Option = Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var pattern = '^[a-zA-Z][a-zA-Z0-9_]*$';

var RelationItemForm = function RelationItemForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      namespace = _ref.namespace,
      rootId = _ref.rootId,
      OBJECTNO = _ref.OBJECTNO,
      pCONTROLAUTH = _ref.pCONTROLAUTH,
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
      RTYPE = _useState4[0],
      setRTYPE = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDynamic = _useState6[0],
      setIsDynamic = _useState6[1];

  useEffect(function () {
    var ID = record.ID,
        OBJECTNO = record.OBJECTNO,
        RTYPE = record.RTYPE,
        DYNAMIC = record.DYNAMIC;
    setIsDynamic(DYNAMIC);

    if (ID) {
      setRTYPE(RTYPE);
      getMNOList(RTYPE, OBJECTNO, DYNAMIC);
    } else {
      setRTYPE('');
    }
  }, [record]);

  var onFinish = function onFinish(values) {
    values.OBJECTID = record.OBJECTID;
    dispatch({
      type: 'commonConfig/editRootItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        rootId: rootId
      }
    });
  };

  var getMNOList = function getMNOList(RTYPE, objectNo, checked) {
    var tableName = RTYPE === 'relationproperty' ? 'META_OBJECT_FORM' : 'META_OBJECT_GRID';
    var tn = queryModelMap(tableName);
    RTYPE !== 'processDetail' && queryItemPGR({
      tn: checked ? 11 : tn,
      tableName: objectNo
    }).then(function (res) {
      if (res) {
        var list = parseMeta(res.dataList);
        if (checked) list = list.filter(function (item) {
          return item.EDITOR === 'MapValueList' || item.EDITOR === 'ValueList';
        });
        setMNOList(list);
      }
    });
  };

  var selectItemNo = function selectItemNo() {
    dispatch({
      type: 'selectData/query',
      payload: {
        type: 'objectNo',
        condition: "JSON_VALUE(B.META,'$.TYPE') IN (0,1)",
        onSelect: function onSelect(rows) {
          var _rows$ = rows[0],
              TABLENAME = _rows$.TABLENAME,
              NAME = _rows$.NAME,
              ENNAME = _rows$.ENNAME;
          form.setFieldsValue({
            OBJECTNO: TABLENAME,
            NAME: NAME,
            ENNAME: ENNAME
          });
          getMNOList(RTYPE, rows[0].TABLENAME);
        }
      }
    });
  };

  var onValuesChange = function onValuesChange(_ref2) {
    var RTYPE = _ref2.RTYPE;

    if (RTYPE) {
      setRTYPE(RTYPE);
      form.resetFields(['RELEVANCENO', 'RELEVANCENAME', 'OBJECTGRID', 'SUPQUERY']);

      if (RTYPE === 'relationproperty') {
        form.setFieldsValue({
          OBJECTNO: OBJECTNO
        });
        getMNOList(RTYPE, OBJECTNO);
      } else if (RTYPE) {
        form.resetFields(['OBJECTNO', 'NAME', 'ENNAME']);
      }
    }
  };

  var selectRELEVANCENO = function selectRELEVANCENO() {
    var OBJECTNO = form.getFieldValue('OBJECTNO');

    switch (RTYPE) {
      case 'relationpage':
        dispatch({
          type: 'selectData/query',
          payload: {
            type: 'relationship',
            condition: "A.objectB='".concat(OBJECTNO, "'"),
            onSelect: function onSelect(rows) {
              form.setFieldsValue({
                RELEVANCENO: rows[0].NO,
                RELEVANCENAME: rows[0].NAME
              });
            }
          }
        });
        break;

      case 'relationqueryview':
        dispatch({
          type: 'selectData/query',
          payload: {
            type: 'queryView',
            condition: "JSON_VALUE(B.META , '$.OBJECTNO') = '".concat(OBJECTNO, "'"),
            // tableName: RTYPE === 'relationqueryview' ? 'META_QUERYVIEW' : 'META_CLASSVIEW',
            onSelect: function onSelect(rows) {
              form.setFieldsValue({
                RELEVANCENO: rows[0].NO,
                RELEVANCENAME: rows[0].NAME
              });
            }
          }
        });
        break;
      // 流程明细

      case 'processDetail':
        break;

      case 'relationclassview':
        dispatch({
          type: 'selectData/query',
          payload: {
            type: 'classView',
            condition: "JSON_VALUE(B.META , '$.OBJECTNO') = '".concat(OBJECTNO, "'"),
            // tableName: RTYPE === 'relationqueryview' ? 'META_QUERYVIEW' : 'META_CLASSVIEW',
            onSelect: function onSelect(rows) {
              form.setFieldsValue({
                RELEVANCENO: rows[0].NO,
                RELEVANCENAME: rows[0].NAME
              });
            }
          }
        });
        break;

      default:
        console.log('wrong selectRtype');
    }
  };

  var RELEVANCENOChange = function RELEVANCENOChange(value, _ref3) {
    var key = _ref3.key;
    form.setFieldsValue({
      RELEVANCENO: value,
      RELEVANCENAME: key
    });
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
      RELEVANCENAME: '',
      RELEVANCENO: ''
    });
    getMNOList(RTYPE, OBJECTNO, checked);
  };

  return /*#__PURE__*/React.createElement(DragModal, _extends({
    title: edit + ' ' + objectTitle,
    form: form
  }, restProps, {
    onOk: function onOk() {
      return form.submit();
    }
  }), /*#__PURE__*/React.createElement(Form, _extends({
    name: "relationItem",
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
    }]
  }, /*#__PURE__*/React.createElement(Input, null)), /*#__PURE__*/React.createElement(SearchInput, {
    name: "ICON",
    label: fields.ICON,
    onClick: selectIcon
  }), /*#__PURE__*/React.createElement(Item, {
    name: "RTYPE",
    label: fields.RTYPE,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, rTypeMap.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/React.createElement(Item, {
    name: "EXPAND",
    label: fields.EXPAND,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), RTYPE === 'relationproperty' && /*#__PURE__*/React.createElement(Item, {
    name: "DYNAMIC",
    label: fields.DYNAMIC,
    valuePropName: "checked",
    onChange: onChangeDynamic
  }, /*#__PURE__*/React.createElement(Checkbox, null)), pCONTROLAUTH ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchInput, {
    name: 'AUTHCODE',
    label: fields.AUTHCODE,
    onClick: selectAUTHCODE,
    allowClear: true
  })) : null, RTYPE && RTYPE !== 'authority' && RTYPE !== 'changeHistory' && RTYPE !== 'input' && RTYPE !== 'output' && RTYPE !== 'processDetail' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null, fields.params), RTYPE === 'relationproperty' ? /*#__PURE__*/React.createElement(Item, {
    name: "OBJECTNO",
    label: fields.CURRENTOBJECTNO,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })) : /*#__PURE__*/React.createElement(SearchInput, {
    disabled: RTYPE === 'relationproperty',
    name: "OBJECTNO",
    label: fields.OBJECTNO,
    rules: [{
      required: true
    }],
    onClick: selectItemNo
  }), RTYPE === 'relationproperty' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: "RELEVANCENO",
    label: fields.RELEVANCENO1,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    onChange: RELEVANCENOChange
  }, isDynamic ? MNOList.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.FIELDNAME,
      key: item.NAME
    }, item.NAME);
  }) : MNOList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: item.NAME
    }, item.NAME);
  })))), RTYPE !== 'relationproperty' && RTYPE !== 'dynamicRelationPage' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Item, {
    name: "OBJECTGRID",
    label: fields.OBJECTGRID,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, null, MNOList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      value: item.NO,
      key: index
    }, item.NAME);
  }))), /*#__PURE__*/React.createElement(SearchInput, {
    name: "RELEVANCENO",
    label: RTYPE === 'relationpage' ? fields.RELEVANCENO2 : fields.RELEVANCENO3,
    rules: [{
      required: true
    }],
    onClick: selectRELEVANCENO
  })), RTYPE !== 'dynamicRelationPage' && /*#__PURE__*/React.createElement(Item, {
    name: "RELEVANCENAME",
    label: RTYPE === 'relationproperty' ? fields.RELEVANCENAME1 : RTYPE === 'relationpage' ? fields.RELEVANCENAME2 : fields.RELEVANCENAME3
  }, /*#__PURE__*/React.createElement(Input, {
    disabled: true
  })), RTYPE !== 'relationproperty' && /*#__PURE__*/React.createElement(Item, {
    name: "SUPQUERY",
    label: fields.SUPQUERY,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), RTYPE === 'relationpage' && /*#__PURE__*/React.createElement(Item, {
    name: "PROCESSCONTROL",
    label: fields.PROCESSCONTROL,
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null))), /*#__PURE__*/React.createElement(LocaleNameForm, null)));
};

export default connect()(RelationItemForm);