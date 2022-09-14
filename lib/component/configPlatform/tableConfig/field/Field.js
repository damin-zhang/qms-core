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

var _TableWithBtn = _interopRequireDefault(require("../../../common/table/TableWithBtn"));

var _FieldForm = _interopRequireDefault(require("./FieldForm"));

var _utils = require("../../../../utils/utils");

var _mapParams = require("../../../../utils/mapParams");

var _EnMapParams = require("../../../../utils/EnMapParams");

var _language = _interopRequireDefault(require("@/locale/language"));

var _AddCommonField = _interopRequireDefault(require("./AddCommonField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    _language$configPlatf = _language.default.configPlatform,
    index = _language$configPlatf.index,
    buttons = _language$configPlatf.buttons,
    _language$configPlatf2 = _language$configPlatf.tableConfig.fieldsProperty,
    fields = _language$configPlatf2.fields,
    buttons1 = _language$configPlatf2.buttons;
var TabPane = _antd.Tabs.TabPane;

var Field = function Field(_ref) {
  var dispatch = _ref.dispatch,
      field = _ref.field,
      activeTab = _ref.activeTab;
  var visible = field.visible,
      record = field.record,
      selectedRows = field.selectedRows,
      selectedRowKeys = field.selectedRowKeys,
      dataList = field.dataList,
      _field$isRequest = field.isRequest,
      isRequest = _field$isRequest === void 0 ? true : _field$isRequest,
      namespace = field.namespace,
      PID = field.PID,
      enable = field.enable,
      noFooter = field.noFooter,
      parentState = field.parentState;

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _ref2 = selectedRows[0] || {},
      TYPE = _ref2.TYPE,
      STATE = _ref2.STATE;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      filterData = _useState2[0],
      setFilterData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      systemFieldData = _useState4[0],
      setSystemFieldData = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      businessFieldData = _useState6[0],
      setbusinessFieldData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      businessFieldData1 = _useState8[0],
      setbusinessFieldData1 = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      editingKey = _useState10[0],
      setEditingKey = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      editableKeys = _useState12[0],
      setEditableRowKeys = _useState12[1];

  var pattern = '^[A-Z][A-Z0-9_]*$';
  var searchInputRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (dataList && dataList.length) {
      if (isRequest === true) {
        setFilterData(dataList.map(function (item) {
          return _objectSpread(_objectSpread({}, item), item.META);
        }));
      }
    }
  }, [field]);
  (0, _react.useEffect)(function () {
    if (filterData && filterData.length) {
      if (isRequest === true) {
        setSystemFieldData(filterData.filter(function (item) {
          return item.META.TYPE === 0;
        }));
        setbusinessFieldData(filterData.filter(function (item) {
          return item.META.TYPE === 1;
        }));
        setbusinessFieldData1(filterData.filter(function (item) {
          return item.META.TYPE === 1;
        }));
      }
    }
  }, [filterData]);

  var filterDataList = function filterDataList(column, data) {
    var searchInputContent = searchInputRef.current.input.value.trim();

    if (searchInputContent !== '') {
      var list = (data.container._data.length < dataList.length ? dataList : data.container._data).filter(function (item) {
        return item[column.key].indexOf(searchInputContent) >= 0;
      });
      setFilterData(list);
    } else {
      setFilterData(dataList);
    }
  };

  var searchInput = function searchInput(data) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Input, {
      placeholder: "Search",
      ref: searchInputRef
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginTop: '5px',
        textAlign: 'right'
      }
    }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: function onClick() {
        return searchInputRef.current.setState({
          value: ''
        });
      },
      size: "small",
      style: {
        width: 60
      }
    }, "Reset"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: "primary",
      onClick: function onClick() {
        return filterDataList(data.column, data);
      },
      size: "small",
      style: {
        width: 60
      }
    }, "Search")));
  };

  var onSearchBusinessField = function onSearchBusinessField(value) {
    if (value) {
      var datas = businessFieldData1.filter(function (item) {
        return item.FIELDNAME.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.NAME.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.ENNAME && item.ENNAME.toUpperCase().indexOf(value.toUpperCase()) >= 0;
      });
      setbusinessFieldData(datas);
    } else {
      setbusinessFieldData(businessFieldData1);
    }
  };

  var getColumnSearchProps = {
    headerRenderer: function headerRenderer(data) {
      return /*#__PURE__*/_react.default.createElement("div", null, data.column.title, /*#__PURE__*/_react.default.createElement(_antd.Popconfirm, {
        overlayClassName: "searchInputPopConfirm",
        placement: "top",
        icon: null,
        title: searchInput(data)
      }, /*#__PURE__*/_react.default.createElement(_icons.SearchOutlined, {
        style: {
          color: '#1890ff'
        }
      })));
    }
  };
  var columns = [{
    title: index,
    dataIndex: 'index',
    width: 50,
    editable: false
  }, // { title: fields.NO, dataIndex: 'NO', width: 200, ...getColumnSearchProps },
  _objectSpread(_objectSpread({
    title: fields.FIELDNAME,
    dataIndex: 'FIELDNAME',
    width: 200,
    editable: STATE === 0
  }, getColumnSearchProps), {}, {
    formItemProps: function formItemProps() {
      return {
        rules: [{
          required: true,
          pattern: pattern
        }, {
          validator: function validator(_, value) {
            return (0, _utils.checkRepeat)(value, 'FIELDNAME', dataList, record.ID);
          }
        }]
      };
    }
  }), _objectSpread(_objectSpread({
    title: fields.NAME,
    dataIndex: 'NAME',
    width: 200
  }, getColumnSearchProps), {}, {
    editable: true,
    valueType: 'text',
    formItemProps: {
      rules: [{
        required: true
      }]
    },
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: record.TYPE ? 'blue' : '#F86F80'
      }, text);
    }
  }), _objectSpread(_objectSpread({
    title: fields.ENNAME,
    dataIndex: 'ENNAME',
    width: 200
  }, getColumnSearchProps), {}, {
    editable: true,
    valueType: 'text',
    formItemProps: {
      rules: [{
        required: true
      }]
    },
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: record.TYPE ? 'blue' : '#F86F80'
      }, text);
    }
  }), {
    title: fields.FTYPE,
    dataIndex: 'FTYPE',
    width: 100,
    editable: false,
    render: function render(text) {
      var fType = _utils.isEnglish ? _EnMapParams.ftypeMap.find(function (item) {
        return item.value === text;
      }) : _mapParams.ftypeMap.find(function (item) {
        return item.value === text;
      });
      return fType ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, null, fType.name) : /*#__PURE__*/_react.default.createElement(_antd.Tooltip, null, text);
    }
  }, {
    title: fields.FLENGTH,
    dataIndex: 'FLENGTH',
    width: 100,
    editable: true,
    valueType: 'digit'
  }, {
    title: fields.ACCURACY,
    dataIndex: 'ACCURACY',
    width: 50,
    editable: false
  }, {
    title: fields.ONLY,
    dataIndex: 'ONLY',
    width: 100,
    align: 'center',
    editable: false,
    render: function render(_, record) {
      var text = record.ONLY;
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.ONLY,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'ONLY'
        })
      });
    }
  }, {
    title: fields.ALLOWNULL,
    dataIndex: 'ALLOWNULL',
    width: 100,
    align: 'center',
    editable: false,
    valueType: 'radio',
    render: function render(_, record) {
      var text = record.ALLOWNULL;
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.ALLOWNULL,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'ALLOWNULL'
        })
      });
    }
  }, {
    title: fields.SUPQUERY,
    dataIndex: 'SUPQUERY',
    width: 100,
    align: 'center',
    editable: false,
    render: function render(_, record) {
      var text = record.SUPQUERY;
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.SUPQUERY,
        onChange: eidtRow({
          text: text,
          record: record,
          field: 'SUPQUERY'
        })
      });
    }
  }, {
    title: fields.DEFAULTV,
    dataIndex: 'DEFAULTV',
    width: 80,
    editable: false
  }, {
    title: fields.EDITOR,
    dataIndex: 'EDITOR',
    width: 150,
    render: function render(text) {
      var fType = _utils.isEnglish ? _EnMapParams.editorMap.find(function (item) {
        return item.value === text;
      }) : _mapParams.editorMap.find(function (item) {
        return item.value === text;
      });
      return fType ? fType.name : text;
    },
    editable: false
  }, {
    title: fields.operation,
    dataIndex: 'operation',
    width: 85,
    fixed: 'right',
    editable: false,
    align: 'center',
    render: function render(_, row, index, action) {
      return editingKey === row.key ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_antd.Typography.Link, {
        onClick: function onClick() {
          return onSave(row.key, row, action);
        },
        style: {
          marginRight: 8
        }
      }, fields.save), /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          action === null || action === void 0 ? void 0 : action.cancelEditable(row.key);
          setEditingKey('');
        }
      }, fields.cancel)) : /*#__PURE__*/_react.default.createElement(_antd.Typography.Link, {
        disabled: editingKey !== '' || activeTab !== '2',
        onClick: function onClick() {
          action === null || action === void 0 ? void 0 : action.startEditable(row.key);
          setEditingKey(row.key);
        }
      }, fields.edit);
    }
  } // {
  //   title: fields.EDITPARAMS,
  //   dataIndex: 'EDITPARAMS',
  //   width: 200,
  //   render: text => <Tooltip title={text}>{text}</Tooltip>
  // },
  // { title: fields.REMARK, dataIndex: 'REMARK' }
  ]; // //保存修改

  var onSave = function onSave(key, record, action) {
    var newValues = form.getFieldValue(key);
    setEditingKey('');
    action === null || action === void 0 ? void 0 : action.cancelEditable(key);

    if (activeTab !== '2') {
      _antd.message.warn('不是设计中的对象');

      return;
    }

    var values = _objectSpread(_objectSpread({}, record.META), newValues);

    dispatch({
      type: 'commonConfig/editItem',
      payload: {
        values: values,
        record: record,
        namespace: namespace,
        PID: PID,
        parentState: parentState
      }
    });
  };

  var eidtRow = function eidtRow(_ref3) {
    var text = _ref3.text,
        record = _ref3.record,
        field = _ref3.field;
    return function () {
      if (activeTab !== '2') {
        _antd.message.warn('不是设计中的对象');

        return;
      }

      var values = record.META;
      values[field] = !text;
      dispatch({
        type: 'commonConfig/editItem',
        payload: {
          values: values,
          record: record,
          namespace: namespace,
          PID: PID,
          parentState: parentState
        }
      });
    };
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      TYPE: 1
    };
    var noFooter = arguments.length > 1 ? arguments[1] : undefined;
    dispatch({
      type: 'field/packet',
      payload: {
        record: _objectSpread(_objectSpread({
          FTYPE: 'VARCHAR',
          EDITOR: 'TextBox',
          ONLY: false,
          ALLOWNULL: true,
          SUPQUERY: false,
          FLENGTH: 50,
          SUPCOPY: true
        }, record), {}, {
          EDITPARAMS: typeof record.EDITPARAMS === 'string' ? JSON.parse(record.EDITPARAMS || '{}') : record.EDITPARAMS || {},
          LINKPARAMS: typeof record.LINKPARAMS === 'string' ? JSON.parse(record.LINKPARAMS || '{}') : record.LINKPARAMS || {}
        }),
        visible: !visible,
        noFooter: noFooter
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
    disabled: !(enable && activeTab === '2'),
    func: function func() {
      toogleModal();
    }
  }, {
    name: buttons.update,
    disabled: !(enable && activeTab === '2' && TYPE === 1 && selectedRows.length === 1),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: STATE !== 1 ? buttons.delete : buttons.abolish,
    disabled: !(enable && activeTab === '2' && TYPE === 1 && STATE === 0) || editingKey,
    func: function func() {
      (0, _utils.confirm)({
        title: STATE !== 1 ? common.confirm + buttons.delete : common.confirm + buttons.abolish,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: buttons1.add_common_field,
    disabled: !(enable && activeTab === '2'),
    func: function func() {
      dispatch({
        type: 'addCommonField/query',
        payload: {
          modalVisible: true,
          selectedRowKeys: [],
          selectedRows: [],
          PID: PID
        }
      });
    }
  }, {
    name: buttons.copy,
    disabled: !(selectedRows.length === 1),
    func: function func() {
      copyData(selectedRows && JSON.stringify(selectedRows[0]));
    }
  }, {
    name: buttons.paste,
    disabled: !(enable && activeTab === '2'),
    func: function func() {
      var text = document.getElementById('textarea');

      if (text && text.value) {
        var values = JSON.parse(text.value).META || {};
        values.FIELDNAME = values.FIELDNAME + '_COPY';
        dispatch({
          type: 'commonConfig/editItem',
          payload: {
            values: values,
            record: {
              type: 1
            },
            namespace: namespace,
            PID: PID,
            parentState: parentState
          }
        });
      } else _antd.message.warn('请先复制');
    }
  }];

  var copyData = function copyData(data) {
    if (data === '') {
      _antd.message.error('单元格数据为空', 1);
    } else {
      var text = document.getElementById('textarea');

      if (text) {
        document.body.removeChild(text);
      }

      var textareaDom = document.createElement('textarea');
      textareaDom.value = data;
      textareaDom.setAttribute('id', 'textarea');
      textareaDom.style.display = 'none';
      document.body.appendChild(textareaDom);
      textareaDom.select();
      document.execCommand('Copy');

      _antd.message.success('复制成功', 1);
    }
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'field/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        isRequest: false
      }
    });
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var systemTableProps = {
    columns: columns,
    dataList: systemFieldData,
    rowSelection: rowSelection,
    rightClick: toogleModal
  };
  var businessTableProps = {
    columns: columns,
    dataList: businessFieldData,
    rowSelection: rowSelection,
    btns: btns,
    rightClick: toogleModal,
    onSearch: onSearchBusinessField,
    // 表格可编辑参数配置
    editable: {
      form: form,
      editableKeys: editableKeys,
      onSave: onSave,
      onChange: setEditableRowKeys,
      actionRender: function actionRender(row, config, dom) {
        return [dom.save, dom.cancel];
      }
    }
  };
  var formProps = {
    record: record,
    visible: visible,
    onCancel: toogleModal,
    namespace: namespace,
    fieldList: dataList,
    PID: PID,
    noFooter: noFooter,
    parentState: parentState
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, null, /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: fields.businessField,
    key: "1"
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    form: form,
    component: false
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, businessTableProps))), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: fields.systemField,
    key: "2"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, systemTableProps))), /*#__PURE__*/_react.default.createElement(_FieldForm.default, formProps), /*#__PURE__*/_react.default.createElement(_AddCommonField.default, {
    fieldList: dataList
  }));
};

function mapStateToProps(_ref4) {
  var field = _ref4.field;
  return {
    field: field
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Field);

exports.default = _default;