"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _SearchInput = _interopRequireDefault(require("../../common/search/SearchInput"));

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var edit = _language.default.common.edit,
    _language$systemPlatf = _language.default.systemPlatform,
    PollingTransact = _language$systemPlatf.PollingTransact,
    _language$systemPlatf2 = _language$systemPlatf.PollingTransact,
    buttons = _language$systemPlatf2.buttons,
    fields = _language$systemPlatf2.fields;
var Item = _antd.Form.Item,
    List = _antd.Form.List;
var Option = _antd.Select.Option;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var pollTime = [{
  name: '5秒',
  value: '*/5 * * * * ?'
}, {
  name: '10秒',
  value: '*/10 * * * * ?'
}, {
  name: '30秒',
  value: '*/30 * * * * ?'
}, {
  name: '60秒',
  value: '*/60 * * * * ?'
}, {
  name: '1分',
  value: '1 * * * ?'
}, {
  name: '每天0点',
  value: '0 0 0 * * ?'
}, {
  name: '每天整点',
  value: '0 0 0/1 * * ?'
}];

var PropertyForm = function PropertyForm(_ref) {
  var dispatch = _ref.dispatch,
      record = _ref.record,
      visible = _ref.visible;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  (0, _react.useEffect)(function () {
    if (record && record.id) {
      setType(record.type);

      if (record.type === 'storeProcess') {
        var parm = record.arg.procedureName ? record.arg : JSON.parse(record.arg);
        record.procedureName = parm.procedureName;

        if (parm.parameters) {
          record.parameters = parm.parameters;
        }
      } else {
        var _parm = record.arg && record.arg.params ? record.arg : record.arg ? JSON.parse(record.arg) : {};

        var obj = _parm.params || {};
        record.params = [];

        for (var key in obj) {
          var el = obj[key];
          record.params.push({
            key: key,
            value: el
          });
        }
      }

      form.setFieldsValue(record);
    } else setType(null);
  }, [record, visible]);

  var onSearchValueList = function onSearchValueList(val) {
    if (val) form.setFieldsValue({
      pollTime: val
    });
  };

  var toogleModal = function toogleModal() {
    dispatch({
      type: 'serviceConfig/packet',
      payload: {
        visible3: !visible
      }
    });
  };

  var onFinish = function onFinish(values) {
    var taskParam = {
      type: values.type
    };
    var params = values.params || [];

    if (values.type === 'implclass') {
      var param = {};
      params.forEach(function (element) {
        if (element.key && element.key.length > 0 && element.value && element.value.length > 0) {
          param[element.key] = element.value;
        }
      });
      taskParam.params = param;
    } else {
      taskParam.procedureName = values.procedureName;
      taskParam.parameters = values.parameters;
      delete values.procedureName;
      delete values.parameters;
    }

    values.arg = taskParam;
    dispatch({
      type: 'serviceConfig/editPollTast',
      payload: {
        values: values,
        record: record
      }
    });
  };

  var onValuesChange = function onValuesChange(arg) {
    setType(arg);

    if (arg === 'storeProcess') {
      form.setFieldsValue({
        implClass: "abstaract.PollCallStoredProcedureTask"
      });
    } else form.setFieldsValue({
      implClass: ''
    });
  };

  var selectProcedures = function selectProcedures() {
    return function () {
      dispatch({
        type: 'selectData/query',
        payload: {
          type: 'procedures',
          onSelect: function onSelect(rows) {
            var Name = rows[0].Name;
            form.setFieldsValue({
              procedureName: Name
            });
          }
        }
      });
    };
  };

  return /*#__PURE__*/_react.default.createElement(_DragModal.default, {
    width: 740,
    title: edit + ' ' + PollingTransact.title,
    form: form,
    visible: visible,
    onCancel: toogleModal,
    onOk: function onOk() {
      return form.submit();
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, _extends({
    name: PollingTransact.title,
    onFinish: onFinish,
    form: form,
    layout: "inline",
    initialValues: record
  }, layout), /*#__PURE__*/_react.default.createElement(Item, {
    name: "name",
    label: fields.TASKNAME,
    rules: [{
      required: true
    }],
    className: "whole-line"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "implClass",
    label: fields.TASKREALIZATION,
    rules: [{
      required: true
    }],
    className: "whole-line"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    disabled: type === 'storeProcess' ? true : false
  })), /*#__PURE__*/_react.default.createElement(Item, {
    name: "pollTime",
    label: fields.POLLINGTIME,
    rules: [{
      required: true
    }],
    className: "whole-line",
    validateStatus: "success"
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    showSearch: true,
    onSearch: onSearchValueList,
    allowClear: true
  }, pollTime.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.value,
      key: index
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement(Item, {
    name: "outTime",
    label: fields.OUTTIME,
    className: "whole-line"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, null)), /*#__PURE__*/_react.default.createElement(Item, {
    name: "selfStart",
    label: fields.DEFAULTSTART,
    className: "whole-line"
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    defaultValue: "\u5426"
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: true
  }, "\u662F"), /*#__PURE__*/_react.default.createElement(Option, {
    value: false
  }, "\u5426"))), /*#__PURE__*/_react.default.createElement(_antd.Divider, null, fields.taskParm), /*#__PURE__*/_react.default.createElement(Item, {
    name: "type",
    label: fields.POLLINGPARAMETERS,
    rules: [{
      required: true
    }],
    className: "whole-line"
  }, /*#__PURE__*/_react.default.createElement(_antd.Select, {
    onSelect: onValuesChange
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: 'implclass',
    key: '0'
  }, fields.implclass), /*#__PURE__*/_react.default.createElement(Option, {
    value: 'storeProcess',
    key: '1'
  }, fields.storeProcess))), type === 'implclass' && /*#__PURE__*/_react.default.createElement(List, {
    name: 'params',
    style: {
      width: '100%'
    }
  }, function (fields, _ref2) {
    var add = _ref2.add,
        remove = _ref2.remove;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: '100%'
      }
    }, fields.map(function (field, index) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap'
        },
        key: field.key
      }, /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: '50%',
          marginBottom: '8px'
        },
        label: '参数名',
        rules: [{
          required: true
        }],
        name: [field.name, 'key'],
        fieldKey: [field.fieldKey, '参数名']
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
        style: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      })), /*#__PURE__*/_react.default.createElement(Item, {
        style: {
          width: '50%',
          marginBottom: '8px'
        },
        label: '参数值',
        rules: [{
          required: true
        }],
        name: [field.name, 'value'],
        fieldKey: [field.fieldKey, '参数值']
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
        style: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      })), index >= 0 && /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, {
        style: {
          position: 'absolute',
          left: '100%',
          marginTop: '8px'
        },
        onClick: function onClick() {
          remove(field.name);
        }
      }));
    }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "dashed",
      style: {
        marginLeft: '25%'
      },
      onClick: function onClick() {
        add();
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.PlusOutlined, null), "add"));
  }), type === 'storeProcess' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Item, {
    style: {
      width: '50%',
      marginBottom: '8px'
    },
    label: fields.procedureName,
    rules: [{
      required: true
    }],
    name: 'procedureName'
  }, /*#__PURE__*/_react.default.createElement(_SearchInput.default, {
    name: 'procedureName',
    onClick: selectProcedures('disabledEvent'),
    className: "whole-line"
  })), /*#__PURE__*/_react.default.createElement(Item, {
    style: {
      width: '50%',
      marginBottom: '8px'
    },
    label: fields.parameters,
    name: 'parameters'
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  })))));
};

var _default = (0, _dva.connect)()(PropertyForm);

exports.default = _default;