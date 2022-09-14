"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _GlobalFieldForm = _interopRequireDefault(require("./GlobalFieldForm"));

var _utils = require("../../../utils/utils");

var _mapParams = require("../../../utils/mapParams");

var _language = _interopRequireDefault(require("@/locale/language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.globalTable.globalField,
    fields = _language$configPlatf2.fields,
    buttons1 = _language$configPlatf2.buttons;
var columns = [{
  title: 'index',
  dataIndex: 'index',
  width: 50,
  render: function render(text) {
    return text + 1;
  }
}, {
  title: fields.NO,
  dataIndex: 'NO',
  width: 150
}, {
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 150
}, {
  title: fields.WIDTH,
  dataIndex: 'WIDTH',
  width: 100
}, {
  title: fields.ALIGN,
  dataIndex: 'ALIGN',
  width: 100,
  render: function render(text) {
    var fType = _mapParams.alignMap.find(function (item) {
      return item.value === text;
    });

    return fType ? fType.name : text;
  }
}, {
  title: fields.GTYPE,
  dataIndex: 'GTYPE',
  width: 100,
  render: function render(text) {
    var fType = _mapParams.gTypeMap.find(function (item) {
      return item.value === text;
    });

    return fType ? fType.name : text;
  }
}];

var Grid = function Grid(_ref) {
  var dispatch = _ref.dispatch,
      globalField = _ref.globalField;
  var visible = globalField.visible,
      record = globalField.record,
      selectedRows = globalField.selectedRows,
      selectedRowKeys = globalField.selectedRowKeys,
      dataList = globalField.dataList,
      namespace = globalField.namespace,
      PID = globalField.PID,
      enable = globalField.enable;

  var _ref2 = selectedRows[0] || {},
      ID = _ref2.ID;

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var PARAMS = record.PARAMS,
        GTYPE = record.GTYPE;
    dispatch({
      type: 'globalField/packet',
      payload: {
        record: _objectSpread(_objectSpread({}, record), {}, {
          PARAMS: GTYPE === 2 ? JSON.parse(PARAMS || '{}') : null
        }),
        visible: !visible
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'commonConfig/delItem',
        payload: {
          rows: rows,
          namespace: namespace,
          PID: PID
        }
      });
    };
  };

  var btns = [{
    name: buttons.create,
    disabled: !enable,
    btns: [{
      name: buttons1.add_normal_field,
      func: function func() {
        toogleModal({
          GTYPE: 0,
          EDITABLE: 1,
          WIDTH: 100,
          ALIGN: 'left'
        });
      }
    }, {
      name: buttons1.add_index_field,
      func: function func() {
        toogleModal({
          NO: '{INDEX}',
          NAME: '序号',
          ENNAME: 'index',
          EDITABLE: 1,
          WIDTH: 40,
          ALIGN: 'left',
          GTYPE: 1
        });
      }
    }, {
      name: buttons1.add_script_field,
      func: function func() {
        toogleModal({
          EDITABLE: 1,
          WIDTH: 100,
          ALIGN: 'left',
          GTYPE: 2,
          PARAMS: JSON.stringify({
            valueScript: '//参数: record(当前行数据), userName(用户名) \n//示例\n return record.NO',
            colorScript: "//\u53C2\u6570: record(\u5F53\u524D\u884C\u6570\u636E), userName(\u7528\u6237\u540D) \n//\u793A\u4F8B\n\n                let color = 'red'\n                if(userName === 'hjh') color = 'green'\n                return color"
          })
        });
      }
    }]
  }, {
    name: buttons.update,
    disabled: !(enable && ID),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !(enable && ID),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }];

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'globalField/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    type: 'radio',
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var props = {
    columns: columns,
    dataList: dataList,
    rowSelection: rowSelection,
    btns: btns
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    PID: PID,
    dataList: dataList
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, props), /*#__PURE__*/_react.default.createElement(_GlobalFieldForm.default, formProps));
};

function mapStateToProps(_ref3) {
  var globalField = _ref3.globalField;
  return {
    globalField: globalField
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Grid);

exports.default = _default;