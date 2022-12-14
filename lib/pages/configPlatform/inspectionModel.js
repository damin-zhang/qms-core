"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _InspectionModelCmp = _interopRequireDefault(require("../../component/configPlatform/inspectionModel/InspectionModelCmp"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    buttons = _language$configPlatf.buttons,
    fields = _language$configPlatf.tableConfig.fields,
    inspection = _language.default.enterInput.inspection;
var tab_namespace = ['headerModel', 'bodyModel', 'footerModel'];

var InspectionModel = function InspectionModel(_ref) {
  var dispatch = _ref.dispatch,
      inspectionModel = _ref.inspectionModel;
  var dataList = inspectionModel.dataList,
      visible = inspectionModel.visible,
      record = inspectionModel.record,
      _inspectionModel$sele = inspectionModel.selectedRows,
      selectedRows = _inspectionModel$sele === void 0 ? [] : _inspectionModel$sele,
      _inspectionModel$sele2 = inspectionModel.selectedRowKeys,
      selectedRowKeys = _inspectionModel$sele2 === void 0 ? [] : _inspectionModel$sele2,
      namespace = inspectionModel.namespace,
      _inspectionModel$acti = inspectionModel.activeKey,
      activeKey = _inspectionModel$acti === void 0 ? '0' : _inspectionModel$acti,
      showTab = inspectionModel.showTab,
      noFooter = inspectionModel.noFooter;
  var columns = [{
    title: inspection.templateID,
    dataIndex: 'NO',
    width: 200
  }, {
    title: inspection.templateName,
    dataIndex: 'NAME',
    width: 200
  }, {
    title: inspection.templateType,
    dataIndex: 'TYPE',
    width: 100,
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("span", null, text ? inspection.reportTemplate : inspection.inspectionTemplate);
    }
  }, {
    title: inspection.isTakeEffect,
    dataIndex: 'ENABLE',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.ENABLE,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'ENABLE'
        })
      });
    }
  }, {
    title: inspection.COUNTTYPECANINPUT,
    dataIndex: 'COUNTTYPECANINPUT',
    width: 80,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.COUNTTYPECANINPUT,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'COUNTTYPECANINPUT'
        })
      });
    }
  }, {
    title: inspection.PNCANINPUT,
    dataIndex: 'PNCANINPUT',
    width: 80,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.PNCANINPUT,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'PNCANINPUT'
        })
      });
    }
  }, {
    title: inspection.inspectionOrderCalculator,
    dataIndex: 'TABLEA',
    width: 200
  }, {
    title: inspection.inspectionProjectCalculator,
    dataIndex: 'TABLEB',
    width: 200
  }, {
    title: inspection.testResultCalculator,
    dataIndex: 'TABLEC',
    width: 200
  }, {
    title: inspection.tableNO,
    dataIndex: 'TABLE_NO',
    width: 200
  }, {
    title: inspection.revision,
    dataIndex: 'REVISE_VAR',
    width: 200
  }, {
    title: fields.OPERATION,
    dataIndex: 'OPERATION',
    width: 120,
    align: 'center',
    frozen: 'right',
    fixed: 'right',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        size: "small",
        type: "primary",
        style: {
          display: 'inline-block',
          padding: '0 7px',
          borderRadius: '2px',
          color: '#fff',
          backgroundColor: '#1890ff',
          marginRight: '5px',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return showDrawer(record);
        }
      }, common.definition), /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
        overlay: operationMenu,
        placement: "bottomLeft",
        trigger: ['click']
      }, /*#__PURE__*/_react.default.createElement("span", {
        style: {
          display: 'inline-block',
          padding: '0 7px',
          borderRadius: '2px',
          color: '#1890ff',
          backgroundColor: 'rgb(231 238 239)',
          cursor: 'pointer'
        },
        className: "ant-dropdown-link",
        onClick: function onClick(e) {
          return e.preventDefault();
        }
      }, fields.OPERATION, " ", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null))));
    }
  }];

  var eidtRow = function eidtRow(_ref2) {
    var text = _ref2.text,
        record = _ref2.record,
        field = _ref2.field;
    return function () {
      var values = record;
      values[field] = !text;
      dispatch({
        type: 'qualityInspectionTemplate/edit',
        payload: {
          values: values,
          namespace: namespace,
          record: record,
          type: 'update'
        }
      });
    };
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;

    if (!record.ID) {
      record.TABLEA = 'SLM_IQC';
      record.TABLEB = 'SLM_IQC_ITEMS';
      record.TABLEC = 'SLM_IQC_ITEMSV';
      record.ENABLE = true;
      record.TYPE = 0;
      record.PNCANINPUT = false;
      record.COUNTTYPECANINPUT = false;
    }

    dispatch({
      type: 'inspectionModel/packet',
      payload: {
        record: _objectSpread({}, record),
        visible: !visible,
        noFooter: noFooter
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'qualityInspectionTemplate/edit',
        payload: {
          values: rows[0],
          namespace: namespace,
          type: 'delete'
        }
      });
    };
  };

  var closeTab = function closeTab() {
    dispatch({
      type: 'inspectionModel/packet',
      payload: {
        showTab: false
      }
    });
  };

  var showDrawer = function showDrawer(record) {
    dispatch({
      type: 'inspectionModel/packet',
      payload: {
        showTab: true
      }
    });
    changePane('0', record);
  };

  var changePane = function changePane(activeKey) {
    var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectedRows[0];
    dispatch({
      type: 'inspectionModel/packet',
      payload: {
        activeKey: activeKey
      }
    });
    dispatch({
      type: 'qualityInspectionTemplate/queryItem',
      payload: {
        activeKey: activeKey,
        namespace: tab_namespace[activeKey],
        objectId: rows.ID
      }
    });
  }; //????????????


  var operationMenu = /*#__PURE__*/_react.default.createElement(_antd.Menu, null, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return toogleModal(selectedRows[0]);
    }
  }, buttons.update)), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, null, /*#__PURE__*/_react.default.createElement("a", {
    onClick: function onClick() {
      return (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, buttons.delete)));

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'inspectionModel/packet',
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
  var btns = [{
    name: inspection.creatTemplate,
    func: function func() {
      toogleModal();
    }
  }];

  var onSearch = function onSearch() {};

  var props = {
    tableProp: {
      dataList: dataList,
      columns: columns,
      btns: btns,
      rowSelection: rowSelection,
      onSearch: onSearch,
      rightClick: toogleModal
    },
    formProps: {
      record: record,
      visible: visible,
      onCancel: toogleModal,
      namespace: namespace,
      noFooter: noFooter
    },
    activeKey: activeKey,
    changePane: changePane,
    closeTab: closeTab,
    showTab: showTab,
    selectedRows: selectedRows
  };
  return /*#__PURE__*/_react.default.createElement(_InspectionModelCmp.default, props);
};

function mapStateToProps(_ref3) {
  var inspectionModel = _ref3.inspectionModel;
  return {
    inspectionModel: inspectionModel
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(InspectionModel);

exports.default = _default;