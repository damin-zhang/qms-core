function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 输入，输出
 */
import React, { useState } from 'react';
import { Button, message } from 'antd';
import { FolderOutlined, ProfileOutlined } from '@ant-design/icons';
import Table from '../../common/table/ParseTable';
import language from '@/locale/language';
import { querySingleModel } from '../../../service/metaApi';
import { showConfirm, judgeModel } from '../../../utils/utils';
import DragModal from '../../../component/common/drag/DragModal';
import Engine from '../Engine';
var _language$input = language.input,
    fields = _language$input.fields,
    buttons = _language$input.buttons;
var columns = [{
  title: fields.NAME,
  dataIndex: 'NAME',
  width: 300
}, {
  title: fields.NO,
  dataIndex: 'NO',
  width: 300,
  render: function render(text, record) {
    return /*#__PURE__*/React.createElement("span", null, record.PID === '0' ? /*#__PURE__*/React.createElement(FolderOutlined, {
      style: {
        fontSize: 18,
        color: '#faad14'
      }
    }) : /*#__PURE__*/React.createElement(ProfileOutlined, {
      style: {
        fontSize: 18,
        color: '#1890ff'
      }
    }), ' ', text);
  }
}, {
  title: fields.ctime,
  dataIndex: 'CTIME',
  width: 100
}];
export default (function (engine) {
  return function (WrappedComponent) {
    var Cmp = function Cmp(_ref) {
      var _ref$model = _ref.model,
          model = _ref$model === void 0 ? {} : _ref$model,
          dispatch = _ref.dispatch;

      var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          visible = _useState2[0],
          setVisible = _useState2[1];

      var _useState3 = useState(Button),
          _useState4 = _slicedToArray(_useState3, 2),
          ModalData = _useState4[0],
          setModalData = _useState4[1];

      var dataList = model.dataList,
          selectedRowKeys = model.selectedRowKeys,
          selectedRows = model.selectedRows,
          namespace = model.namespace,
          objectAData = model.objectAData,
          objectA = model.objectA;
      var TSTATE = objectAData.TSTATE,
          LEADER = objectAData.LEADER,
          EXECUTOR = objectAData.EXECUTOR,
          cuser = objectAData.cuser;
      var rType = engine.rType; // let disabled1 = true
      // let disabled2 = true

      var disabled1 = false;
      var disabled2 = false;
      var userAccount = localStorage.getItem('userName');
      var userName = localStorage.getItem('employeeName');

      if (rType === 'input' && (TSTATE === 'A' || TSTATE === 'E') && (userName === 'admin' || userName === LEADER)) {
        disabled1 = false;
        disabled2 = false;
      } else if (rType === 'output') {
        if (TSTATE === 'C' && userName === EXECUTOR) disabled2 = false;
        if (TSTATE === 'A' && (userName === LEADER || userName === cuser)) disabled1 = false;
      }

      var rowSelection = {
        type: 'checkbox',
        onChange: function onChange(selectedRowKeys, selectedRows) {
          dispatch({
            type: "".concat(namespace, "/packet"),
            payload: {
              selectedRowKeys: selectedRowKeys,
              selectedRows: selectedRows
            }
          });
        },
        selectedRowKeys: selectedRowKeys
      };

      var addObject = function addObject() {
        dispatch({
          type: 'selectData/query',
          payload: {
            type: 'process',
            condition: 'TYPE in (0,1)',
            onSelect: function onSelect(rows) {
              rows.forEach(function (item) {
                item.FIELDNAME = item.OBJECTNO;
                item.TYPE = 'OBJECT';
              });
              var values = {
                objectNo: rType === 'input' ? 'TASK_INPUT' : 'TASK_OUTPUT',
                objectA: objectA,
                objectAData: objectAData,
                hData: rows,
                relevanceNo: 'notnull',
                implclass: rType === 'input' ? 'task.AddTaskInputObjectsEvent' : 'task.AddTaskOutputObjectsEvent'
              };
              dispatch({
                type: 'common/save',
                payload: {
                  values: values,
                  namespace: namespace
                }
              });
            }
          }
        });
      };

      var addFileData = function addFileData() {
        dispatch({
          type: 'selectData/queryModalData',
          payload: {
            tableName: selectedRows[0] && selectedRows[0].TABLENAME,
            oOBJECTbjectGridNo: 'default',
            condition: rType === 'output' ? "cuser = '".concat(userAccount, ":").concat(userName, "'") : '',
            onSelect: function onSelect(rows) {
              var row = [];
              rows.forEach(function (item) {
                var FIELDNAME = item.FIELDNAME,
                    ID = item.ID;
                item.PID = selectedRows[0].ID;
                item.OBJECTID = ID;
                row.push(_objectSpread(_objectSpread({
                  TABLENAME: selectedRows[0].TABLENAME,
                  PID: selectedRows[0].ID,
                  OBJECTID: ID,
                  FIELDNAME: FIELDNAME
                }, item), {}, {
                  TYPE: 'DATA'
                }));
              });
              var values = {
                objectNo: rType === 'input' ? 'TASK_INPUT' : 'TASK_OUTPUT',
                objectA: objectA,
                objectAData: objectAData,
                hData: row,
                relevanceNo: 'notnull',
                implclass: rType === 'input' ? 'task.AddTaskInputObjectsEvent' : 'task.AddTaskOutputObjectsEvent'
              };
              dispatch({
                type: 'common/save',
                payload: {
                  values: values,
                  namespace: namespace
                }
              });
            }
          }
        });
      };

      var delFile = function delFile() {
        if (selectedRows && selectedRows[0]) {
          showConfirm(function () {
            var values = {
              objectNo: rType === 'input' ? 'TASK_INPUT' : 'TASK_OUTPUT',
              objectA: objectA,
              objectAData: objectAData,
              hData: selectedRows,
              relevanceNo: 'notnull',
              implclass: rType === 'input' ? 'task.RemoveTaskInputObjectEvent' : 'task.RemoveTaskOutputObjectEvent'
            };
            dispatch({
              type: 'common/save',
              payload: {
                values: values,
                namespace: namespace
              }
            });
          });
        } else {
          message.warning('请选择表对象!');
        }
      };

      var viewData = function viewData() {
        // const { dispatch, model } = this.props
        var _selectedRows$ = selectedRows[0],
            OBJECTNO = _selectedRows$.OBJECTNO,
            OBJECTID = _selectedRows$.OBJECTID,
            PID = _selectedRows$.PID,
            ID = _selectedRows$.ID;
        var params = {
          objectNo: OBJECTNO,
          objectGridNo: 'default',
          objectRelationPageNo: 'default',
          FACETYPE: 1
        };
        querySingleModel(params).then(function (res) {
          if (res) {
            var modalEngine = res;

            var _namespace = OBJECTNO + '-viewData';

            modalEngine.namespace = _namespace;
            modalEngine.FACETYPE = 2;
            judgeModel(_namespace);
            var _params = {
              namespace: _namespace,
              objectNo: OBJECTNO,
              tableName: OBJECTNO,
              objectGridNo: 'default',
              page: 1,
              implclass: 'cn.hkdt.infinity.application.query.QuerySingleObjectData',
              condition: PID !== '0' ? "ID = '".concat(OBJECTID, "'") : "del=0 AND EXISTS(SELECT 1 FROM ".concat(engine.rType === 'input' ? 'TASK_INPUT' : 'TASK_OUTPUT', " A WHERE A.del=0 AND A.pid='").concat(ID, "' AND A.objectid=").concat(OBJECTNO, ".id)")
            };
            dispatch({
              type: 'common/querySingleData',
              payload: _params
            });
            dispatch({
              type: "namespace/packet",
              payload: {
                namespace: _namespace
              }
            });

            var _Cmp = Engine(modalEngine);

            setModalData(_Cmp);
            setVisible(true);
          }
        });
      };

      var onClose = function onClose() {
        return setVisible(false);
      };

      return /*#__PURE__*/React.createElement("div", {
        className: "flex-y"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
        onClick: addObject,
        type: "primary",
        disabled: disabled1
      }, buttons.add_object), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: addFileData,
        disabled: !(selectedRows[0] && selectedRows[0].PID === '0')
      }, buttons.add_data), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: delFile,
        disabled: !selectedRows.length
      }, buttons.remove), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: viewData,
        disabled: !(selectedRows[0] && selectedRows[0].PID === '0')
      }, buttons.view_data)), /*#__PURE__*/React.createElement("div", {
        className: "flex-grow-y"
      }, /*#__PURE__*/React.createElement(Table, {
        dataList: dataList,
        columns: columns,
        isTree: true,
        rowSelection: rowSelection
      })), /*#__PURE__*/React.createElement(WrappedComponent, null), /*#__PURE__*/React.createElement(DragModal, {
        width: "80%",
        title: buttons.view_data,
        visible: visible,
        footer: null,
        onCancel: onClose
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 550
        }
      }, /*#__PURE__*/React.createElement(ModalData, null))));
    };

    return Cmp;
  };
});