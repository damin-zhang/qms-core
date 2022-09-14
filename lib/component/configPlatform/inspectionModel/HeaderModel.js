"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _TableWithBtn = _interopRequireDefault(require("../../common/table/TableWithBtn"));

var _FieldList = _interopRequireDefault(require("./FieldList"));

var _utils = require("../../../utils/utils");

var _mapParams = require("../../../utils/mapParams");

var _EnMapParams = require("../../../utils/EnMapParams");

var _metaApi = require("../../../service/metaApi");

var _DragSortForm = _interopRequireDefault(require("../common/DragSortForm"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _HeaderFrom = _interopRequireDefault(require("./HeaderFrom"));

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

var Field = function Field(_ref) {
  var dispatch = _ref.dispatch,
      _ref$objectRows = _ref.objectRows,
      objectRows = _ref$objectRows === void 0 ? [] : _ref$objectRows,
      headerModel = _ref.headerModel;
  var selectedRows = headerModel.selectedRows,
      selectedRowKeys = headerModel.selectedRowKeys,
      dataList = headerModel.dataList,
      dragSortFormVisible = headerModel.dragSortFormVisible,
      namespace = headerModel.namespace,
      fieldSelectedRowKeys = headerModel.fieldSelectedRowKeys,
      fieldSelectedRows = headerModel.fieldSelectedRows,
      sortList = headerModel.sortList,
      headerVisible = headerModel.headerVisible,
      record = headerModel.record;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fieldList = _useState2[0],
      setFieldList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fieldVisible = _useState4[0],
      setFieldVisible = _useState4[1];

  var _ref2 = objectRows[0] || {},
      ID = _ref2.ID,
      TABLEA = _ref2.TABLEA;

  var _ref3 = selectedRows[0] || {},
      PID = _ref3.PID,
      TID = _ref3.ID;

  var columns = [{
    title: index,
    dataIndex: 'rowkey',
    align: 'left',
    width: 120
  }, {
    title: fields.FIELDNAME,
    dataIndex: 'FIELDNAME',
    width: 200
  }, {
    title: fields.NAME,
    dataIndex: _utils.isEnglish ? 'ENNAME' : 'NAME',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: record.TYPE ? 'blue' : '#F86F80'
      }, text);
    }
  }, {
    title: fields.ENNAME,
    dataIndex: 'ENNAME',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Tag, {
        color: record.TYPE ? 'blue' : '#F86F80'
      }, text);
    }
  }, {
    title: fields.FTYPE,
    dataIndex: 'FTYPE',
    width: 100,
    render: function render(text) {
      var fType = _utils.isEnglish ? _EnMapParams.ftypeMap.find(function (item) {
        return item.value === text;
      }) : _mapParams.ftypeMap.find(function (item) {
        return item.value === text;
      });
      return fType ? /*#__PURE__*/_react.default.createElement(_antd.Tooltip, null, fType.name) : /*#__PURE__*/_react.default.createElement(_antd.Tooltip, null, text);
    }
  }, {
    title: '标题列数',
    dataIndex: 'TITLE_COLSPAN',
    width: 80
  }, {
    title: '内容列数',
    dataIndex: 'CONTENT_COLSPAN',
    width: 80
  }, {
    title: '是否生效',
    dataIndex: 'ENABLE',
    width: 200,
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        checked: record.ENABLE,
        onChange: function onChange() {
          return eidtRow({
            text: text,
            record: record.META,
            id: record.ID,
            field: 'ENABLE',
            ENABLE: !text
          });
        }
      });
    }
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
    }
  }, {
    title: '方向',
    dataIndex: 'DIRECTION',
    width: 80,
    render: function render(text, record) {
      return record.PID === '0' && /*#__PURE__*/_react.default.createElement("span", null, text ? '横向' : '纵向');
    }
  }];

  var eidtRow = function eidtRow(_ref4) {
    var text = _ref4.text,
        record = _ref4.record,
        id = _ref4.id,
        field = _ref4.field,
        ENABLE = _ref4.ENABLE;

    if (field !== 'ENABLE') {
      record = _objectSpread(_objectSpread({}, record), {}, _defineProperty({}, field, text));
      record[field] = !text;
    }

    var params = {
      meta: record,
      id: id,
      type: 'update',
      objectId: ID,
      namespace: namespace,
      activeKey: '0',
      ENABLE: ENABLE
    };
    dispatch({
      type: 'qualityInspectionTemplate/editItem',
      payload: params
    });
  };

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    dispatch({
      type: 'headerModel/packet',
      payload: {
        record: _objectSpread({}, record.META),
        headerVisible: !headerVisible
      }
    });
  };

  var toogleModalDragSort = function toogleModalDragSort() {
    dispatch({
      type: 'headerModel/packet',
      payload: {
        dragSortFormVisible: !dragSortFormVisible,
        sortList: dataList
      }
    });
  };

  var del = function del(rows) {
    return function () {
      dispatch({
        type: 'qualityInspectionTemplate/editItem',
        payload: {
          rows: rows,
          namespace: namespace,
          objectId: ID,
          type: 'delete',
          activeKey: '0'
        }
      });
    };
  };

  var sort = function sort(list) {
    list = list.map(function (item, index) {
      return {
        SORT: (index + 1) * 10,
        ID: item.ID
      };
    });
    dispatch({
      type: 'qualityInspectionTemplate/sort',
      payload: {
        meta: list,
        namespace: namespace,
        objectId: ID,
        activeKey: '0',
        tableName: 'header'
      }
    });
  };

  var onOk = function onOk() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return function () {
      if (!rows.length) {
        _antd.message.warn('请先选择数据');

        return;
      }

      var flag = false;

      if (dataList.length) {
        rows.map(function (item) {
          dataList.some(function (el) {
            if (item.FIELDNAME === el.FIELDNAME) {
              flag = true;
              return _antd.message.warn("\u4E0D\u80FD\u91CD\u590D\u6DFB\u52A0\u5B57\u6BB5\uFF1A".concat(item.FIELDNAME));
            }
          });
        });
      }

      if (flag) return;
      var meta = [];
      meta = rows.map(function (item) {
        return _objectSpread({}, item.META);
      });
      dispatch({
        type: 'qualityInspectionTemplate/editItem',
        payload: {
          meta: meta,
          objectId: ID,
          type: 'create',
          namespace: namespace,
          activeKey: '0',
          PID: TID,
          onCancel: function onCancel() {
            return setFieldVisible(false);
          }
        }
      });
    };
  };

  var btns = [{
    name: '添加',
    btns: [{
      name: '添加行',
      func: function func() {
        var len = dataList.filter(function (item) {
          return item.PID === '0';
        }) || [];
        var meta = [{
          NAME: "\u7B2C".concat(len.length + 1, "\u884C"),
          DIRECTION: 1
        }];
        dispatch({
          type: 'qualityInspectionTemplate/editItem',
          payload: {
            meta: meta,
            objectId: ID,
            type: 'create',
            namespace: namespace,
            activeKey: '0',
            PID: 0
          }
        });
      }
    }, {
      name: '添加字段',
      disabled: !(selectedRows[0] && PID === '0'),
      func: function func() {
        (0, _utils.showLoading)();
        (0, _metaApi.queryItemPGR)({
          tn: 11,
          tableName: TABLEA
        }).then(function (res) {
          if (res && res.flag) {
            setFieldList((0, _utils.parseMeta)(res.dataList));
            setFieldVisible(true);
            dispatch({
              type: "".concat(namespace, "/packet"),
              payload: {
                fieldSelectedRowKeys: [],
                fieldSelectedRows: []
              }
            });
          }

          (0, _utils.hideLoading)();
        });
      }
    }]
  }, {
    name: buttons.update,
    disabled: !(selectedRows.length === 1),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete,
    disabled: !selectedRows.length,
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: '排序',
    disabled: !dataList.length,
    func: function func() {
      toogleModalDragSort();
    }
  }, {
    name: '复制',
    disabled: !selectedRows.length,
    func: function func() {
      copyData(JSON.stringify(selectedRows));
    }
  }, {
    name: '粘贴',
    disabled: !(selectedRows && PID === '0'),
    func: function func() {
      var text = document.getElementById('textarea');

      if (text && text.value) {
        var meta = [];
        meta = JSON.parse(text.value).map(function (item) {
          return _objectSpread({}, item.META);
        });
        dispatch({
          type: 'qualityInspectionTemplate/editItem',
          payload: {
            meta: meta,
            objectId: ID,
            type: 'create',
            namespace: namespace,
            activeKey: '0',
            PID: TID
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
      document.body.appendChild(textareaDom);
      textareaDom.select();
      document.execCommand('Copy');
      textareaDom.setAttribute('id', 'textarea');
      textareaDom.style.display = 'none';

      _antd.message.success('复制成功', 1);
    }
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    dispatch({
      type: 'headerModel/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows
      }
    });
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };
  var tableProps = {
    columns: columns,
    btns: btns,
    dataList: dataList,
    rowSelection: rowSelection,
    isTree: true,
    expandIconColumnIndex: 3
  };
  var fieldProps = {
    visible: fieldVisible,
    fieldList: fieldList,
    namespace: namespace,
    fieldSelectedRowKeys: fieldSelectedRowKeys,
    fieldSelectedRows: fieldSelectedRows,
    onCancel: function onCancel() {
      return setFieldVisible(false);
    },
    onOk: onOk
  };
  var dragProps = {
    visible: dragSortFormVisible,
    dataList: sortList,
    namespace: namespace,
    inspectionSort: sort,
    columns: columns,
    onClose: toogleModalDragSort,
    isTree: true
  };
  var fromProps = {
    visible: headerVisible,
    record: record,
    onCancel: toogleModal,
    objectId: ID,
    id: selectedRows[0] && selectedRows[0].ID,
    namespace: namespace,
    PID: PID
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hide-full"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProps), /*#__PURE__*/_react.default.createElement(_FieldList.default, fieldProps), /*#__PURE__*/_react.default.createElement(_DragSortForm.default, dragProps), /*#__PURE__*/_react.default.createElement(_HeaderFrom.default, fromProps));
};

function mapStateToProps(_ref5) {
  var headerModel = _ref5.headerModel;
  return {
    headerModel: headerModel
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(Field);

exports.default = _default;