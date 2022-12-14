"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _antd = require("antd");

var _TableWithBtn = _interopRequireDefault(require("../../component/common/table/TableWithBtn"));

var _DepartmentForm = _interopRequireDefault(require("../../component/userManage/staffManage/DepartmentForm"));

var _MoveNodeForm = _interopRequireDefault(require("../../component/engine/property/MoveNodeForm"));

var _utils = require("../../utils/utils");

var _language = _interopRequireDefault(require("../../locale/language"));

var _DragCmp = _interopRequireDefault(require("../../component/common/drag/DragCmp"));

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var common = _language.default.common,
    _language$userManage$ = _language.default.userManage.staffManage,
    buttons = _language$userManage$.buttons,
    fields = _language$userManage$.fields;
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

var DepartmentManage = function DepartmentManage(_ref) {
  var dispatch = _ref.dispatch,
      namespace = _ref.namespace,
      dataList = _ref.dataList,
      selectedRows = _ref.selectedRows,
      selectedRowKeys = _ref.selectedRowKeys,
      _ref$openKeys = _ref.openKeys,
      openKeys = _ref$openKeys === void 0 ? [] : _ref$openKeys,
      visible = _ref.visible,
      viseble1 = _ref.viseble1,
      record = _ref.record,
      _ref$moveNodeFormVisi = _ref.moveNodeFormVisible,
      moveNodeFormVisible = _ref$moveNodeFormVisi === void 0 ? false : _ref$moveNodeFormVisi,
      showTab = _ref.showTab;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearValue = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      keyId = _useState4[0],
      setKeyId = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      isRoot = _useState6[0],
      setIsRoot = _useState6[1];

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var renders = function renders(text) {
    if (searchValue === null || text.toUpperCase().indexOf(searchValue.toUpperCase()) < 0) {
      return /*#__PURE__*/_react.default.createElement("span", null, text);
    }

    var i = text.toUpperCase().indexOf(searchValue.toUpperCase());
    var beforeStr = text.substr(0, i);
    var center = text.substr(i, searchValue.length);
    var afterStr = text.substr(i + searchValue.length);
    return /*#__PURE__*/_react.default.createElement("span", null, beforeStr, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: '#FA2A45',
        fontWeight: 800
      }
    }, center), afterStr);
  };

  var columns = [//   { title: index, dataIndex: 'rowkey', align: 'left', width: 120 },
  {
    title: fields.NAME,
    dataIndex: 'name',
    width: 220,
    render: function render(text) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          justifyItems: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement(_icons.ApartmentOutlined, null), " ", renders(text));
    }
  }, {
    title: fields.DNO,
    dataIndex: 'no',
    width: 220,
    render: function render(text) {
      return renders(text);
    }
  }, {
    title: fields.DENAME,
    dataIndex: 'ename',
    width: 220,
    render: function render(text) {
      return renders(text);
    }
  }, {
    title: fields.DTEL,
    dataIndex: 'tel',
    width: 150
  }, {
    title: fields.MANAGE,
    dataIndex: 'manager',
    width: 150
  }];
  var pageFieldList = [];
  columns.forEach(function (item) {
    pageFieldList.push({
      no: item.dataIndex,
      caption: item.title,
      editor: 'TextBox'
    });
  });

  var _ref2 = selectedRows[0] || [],
      pid = _ref2.pid,
      id = _ref2.id;

  (0, _react.useEffect)(function () {
    if (dataList && dataList.length) {
      setKeyId(dataList.filter(function (item) {
        return item.pid === '0';
      })[0].id);
    }
  }, [dataList]);
  (0, _react.useEffect)(function () {
    if (selectedRows.length === 1) {
      form.setFieldsValue(selectedRows[0]);
    }
  }, [form, selectedRows]);

  var toogleModal = function toogleModal() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    record.pid = record.pid || id || '0';
    dispatch({
      type: 'DepartmentManage/packet',
      payload: {
        record: record,
        visible: !visible
      }
    });
  };

  var toogleMoveNodeModal = function toogleMoveNodeModal() {
    dispatch({
      type: 'DepartmentManage/packet',
      payload: {
        moveNodeFormVisible: !moveNodeFormVisible
      }
    });
  };

  var updateStaffData = function updateStaffData() {
    toogleMoveNodeModal();
  };

  var onSelectChange = function onSelectChange(selectedRowKeys, selectedRows) {
    var openKey = [];
    openKey = pid === '0' ? [] : getOpenKeys(selectedRowKeys, dataList);

    if (selectedRows.length) {
      var data = selectedRows.filter(function (item) {
        return item.pid === '0';
      });
      setIsRoot(data);
    }

    dispatch({
      type: 'DepartmentManage/packet',
      payload: {
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        openKeys: openKey
      }
    });
  };

  var rowSelection = {
    onChange: onSelectChange,
    selectedRowKeys: selectedRowKeys
  };

  var del = function del(hData) {
    return function () {
      dispatch({
        type: 'DepartmentManage/del',
        payload: {
          hData: hData
        }
      });
    };
  }; // ??????????????????


  var exportDepart = function exportDepart(state) {
    var children = dataList.filter(function (ele) {
      return selectedRows.filter(function (x) {
        return x.id === ele.pid;
      }).length > 0;
    });
    (0, _utils.confirm)({
      title: state === 1 ? common.confirm + buttons.export_departmentUsers : buttons.export_Employee,
      onOk: function onOk() {
        return dispatch({
          type: 'DepartmentManage/exportDepart',
          payload: {
            hData: [].concat(_toConsumableArray(selectedRows), _toConsumableArray(children)),
            state: state
          }
        });
      }
    });
  }; // ??????????????????


  var exportOrganization = function exportOrganization() {
    (0, _utils.confirm)({
      title: common.confirm + '??????' + buttons.expoer_organization,
      onOk: function onOk() {
        return dispatch({
          type: 'DepartmentManage/exportOrganization'
        });
      }
    });
  };

  var onExpandedRowsChange = function onExpandedRowsChange(openKeys) {
    dispatch({
      type: 'DepartmentManage/packet',
      payload: {
        openKeys: openKeys
      }
    });
  };

  var onSearch = function onSearch(value) {
    var selectedKeys = [];
    var openKeys = [];

    if (!value) {
      setSearValue(null);
      dispatch({
        type: 'DepartmentManage/packet',
        payload: {
          openKeys: openKeys,
          selectedKeys: selectedKeys
        }
      });
      return;
    } else {
      setSearValue(value);
      var parentKey = dataList.map(function (item) {
        var cp = item.name.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.ename.toUpperCase().indexOf(value.toUpperCase()) >= 0 || item.no.toUpperCase().indexOf(value.toUpperCase()) >= 0;

        if (cp) {
          selectedKeys.push(item.id);
          return getParentKey(item.id, (0, _utils.systemErgodicRoot)(dataList));
        }

        return null;
      }).filter(function (item, i, self) {
        return item && self.indexOf(item) === i;
      });
      openKeys = getOpenKeys(parentKey, dataList);
      dispatch({
        type: 'DepartmentManage/packet',
        payload: {
          openKeys: openKeys,
          selectedKeys: selectedKeys,
          parentKey: parentKey
        }
      });
    }

    _antd.message.info('Total : ' + selectedKeys.length);
  };

  var getParentKey = function getParentKey(key, tree) {
    var parentKey;

    for (var i = 0; i < tree.length; i++) {
      var node = tree[i];

      if (node.children) {
        if (node.children.some(function (item) {
          return item.id === key;
        })) {
          parentKey = node.id;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }

    return parentKey;
  };

  var getOpenKeys = function getOpenKeys(keys, tree) {
    var openKeys = [];

    if (keys.length) {
      keys.forEach(function (key) {
        openKeys.push(key);
        var pid = '1';

        while (pid !== '0') {
          for (var i = 0; i < tree.length; i++) {
            var node = tree[i];

            if (node.id === key) {
              pid = node.pid;
              key = node.pid;

              if (pid !== '0') {
                var pidString = pid;
                openKeys.indexOf('pid') < 0 && !openKeys.includes(pidString) && openKeys.push(pidString);
              }

              break;
            }
          }
        }
      });
    }

    return openKeys;
  };

  var btns = [{
    name: buttons.create_department,
    disabled: !selectedRows[0],
    func: function func() {
      toogleModal({});
    }
  }, {
    name: buttons.update_department,
    disabled: !(selectedRows.length === 1),
    func: function func() {
      toogleModal(selectedRows[0]);
    }
  }, {
    name: buttons.delete_department,
    disabled: !(selectedRows[0] && isRoot.length === 0),
    func: function func() {
      (0, _utils.confirm)({
        title: common.confirm + buttons.delete_department,
        onOk: del(selectedRows)
      });
    }
  }, {
    name: buttons.reorganize,
    disabled: !(selectedRows[0] && selectedRows[0].pid !== '0'),
    func: function func() {
      toogleMoveNodeModal();
    }
  } // {
  //   name: buttons.import_department,
  //   disabled: true,
  //   func: () => {
  //     toogleModal(selectedRows[0])
  //   }
  // },
  // {
  //   name: buttons.export_department,
  //   btns: [
  //     {
  //       name: buttons.export_departmentUsers,
  //       disabled: !selectedRows[0],
  //       func: () => {
  //         exportDepart(0)
  //       }
  //     },
  //     {
  //       name: buttons.export_Employee,
  //       disabled: !selectedRows[0],
  //       func: () => {
  //         exportDepart(1)
  //       }
  //     },
  //     {
  //       name: buttons.expoer_organization,
  //       func: () => {
  //         exportOrganization()
  //       }
  //     }
  //   ]
  // }
  ];
  var tableProp = {
    dataList: dataList,
    columns: columns,
    btns: btns,
    isTree: true,
    onSearch: onSearch,
    rowSelection: rowSelection,
    expandedRowKeys: [keyId].concat(_toConsumableArray(openKeys)),
    onExpandedRowsChange: onExpandedRowsChange
  };
  var fromProp = {
    record: record,
    visible: visible,
    viseble1: viseble1,
    onCancel: toogleModal
  };
  var moveNodeFormProps = {
    namespace: namespace,
    visible: moveNodeFormVisible,
    dataList: dataList,
    selectedRows: selectedRows,
    type: 'departmentManage',
    rootNode: _objectSpread(_objectSpread({}, dataList.length && dataList[0]), {}, {
      ID: '0',
      NAME: '????????????'
    }),
    onCancel: updateStaffData
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-x",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_DragCmp.default, {
    enable: {
      right: true
    },
    showTab: selectedRows.length === 1 ? true : false,
    width: "60%"
  }, /*#__PURE__*/_react.default.createElement(_TableWithBtn.default, tableProp)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    name: 'property',
    layout: "block",
    form: form
  }, pageFieldList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Item, {
      className: "spaceBetween",
      name: item.no,
      label: item.caption,
      key: item.no
    }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
      style: {
        border: '0'
      }
    }));
  }))), /*#__PURE__*/_react.default.createElement(_DepartmentForm.default, fromProp), /*#__PURE__*/_react.default.createElement(_MoveNodeForm.default, moveNodeFormProps));
};

function mapStateToProps(_ref3) {
  var DepartmentManage = _ref3.DepartmentManage;
  return _objectSpread({}, DepartmentManage);
}

var _default = (0, _dva.connect)(mapStateToProps)(DepartmentManage);

exports.default = _default;