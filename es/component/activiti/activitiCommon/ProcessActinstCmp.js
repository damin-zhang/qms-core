function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import { Table, Col, Row, Card, Button, Input } from 'antd';
import Engine from '../../engine/Engine';
import { judgeModel } from '../../../utils/utils';
import DragModal from '../../common/drag/DragModal';
var Search = Input.Search;

var ProcessActinstCmp = /*#__PURE__*/function (_Component) {
  _inherits(ProcessActinstCmp, _Component);

  var _super = _createSuper(ProcessActinstCmp);

  function ProcessActinstCmp() {
    _classCallCheck(this, ProcessActinstCmp);

    return _super.apply(this, arguments);
  }

  _createClass(ProcessActinstCmp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          onCancel = _this$props.onCancel,
          processColumns = _this$props.processColumns,
          engine = _this$props.engine,
          list = _this$props.list,
          processReverseList = _this$props.processReverseList,
          title = _this$props.title,
          isShowButtons = _this$props.isShowButtons,
          agree = _this$props.agree,
          reject = _this$props.reject,
          processInstanceId = _this$props.processInstanceId,
          showUsers = _this$props.showUsers,
          userVisible = _this$props.userVisible,
          toogleUser = _this$props.toogleUser,
          userTreeList = _this$props.userTreeList,
          selectChange = _this$props.selectChange,
          selectedRowKey = _this$props.selectedRowKey,
          onOk = _this$props.onOk,
          expandedRowKeys = _this$props.expandedRowKeys,
          onExpandedRowsChange = _this$props.onExpandedRowsChange,
          onSearchUser = _this$props.onSearchUser;
      var columns = [{
        title: '名称',
        dataIndex: 'NAME'
      }];
      var namespace = 'activiti';
      engine.condition = "dsno = ".concat(processInstanceId);
      engine.namespace = namespace;
      engine.facetype = engine.faceType;
      delete engine.faceType;
      judgeModel(namespace); // const model = generatorModel(namespace)
      // //判断是否已注册model
      // let result = window.g_app._models.some(model => model.namespace === namespace)
      // //没有注册，则注册model
      // if (!result) {
      //   window.g_app.model(model)
      //   console.log(window.g_app._models)
      // }

      this.props.dispatch({
        type: "".concat(namespace, "/packet"),
        payload: {
          dataList: list
        }
      });
      var Act = Engine(engine);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DragModal, {
        title: title // width={'80%'}
        ,
        onCancel: onCancel // destroyOnClose='true'
        ,
        visible: visible // footer={null}
        // centered={true}
        // mask={false}
        // maskClosable={false}
        // height={'calc(100vh - 92px)'}

      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Card, {
        title: "\u8BE6\u60C5",
        bordered: false
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 500
        }
      }, /*#__PURE__*/React.createElement(Act, null))))), isShowButtons ? /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        style: {
          marginLeft: 5,
          backgroundColor: '#3ca2e0',
          color: '#FFFFFF'
        },
        size: "large",
        onClick: function onClick() {
          return agree();
        }
      }, "\u529E\u7406"), /*#__PURE__*/React.createElement(Button, {
        style: {
          marginLeft: 5,
          backgroundColor: '#de6764',
          color: '#FFFFFF'
        },
        size: "large",
        onClick: function onClick() {
          return reject();
        }
      }, "\u9A73\u56DE"), /*#__PURE__*/React.createElement(Button, {
        style: {
          marginLeft: 5,
          backgroundColor: '#5BA276',
          color: '#FFFFFF'
        },
        size: "large",
        onClick: function onClick() {
          return showUsers();
        }
      }, "\u79FB\u4EA4")) : null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Card, {
        title: "\u6D41\u8F6C\u4FE1\u606F",
        bordered: false
      }, /*#__PURE__*/React.createElement(Table, {
        size: "small",
        columns: processColumns,
        bordered: true,
        dataSource: processReverseList
      })))))), /*#__PURE__*/React.createElement(DragModal, {
        title: '用户选择器',
        visible: userVisible,
        onCancel: toogleUser,
        okText: '转办',
        onOk: onOk // height={'calc(100vh - 92px)'}

      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: '34px'
        }
      }, /*#__PURE__*/React.createElement(Search, {
        width: "100%",
        onSearch: onSearchUser,
        enterButton: true
      })), /*#__PURE__*/React.createElement(Table, {
        size: "small",
        bordered: true,
        columns: columns,
        dataSource: userTreeList,
        pagination: false,
        style: {
          height: 400
        },
        scroll: {
          y: 350
        },
        expandedRowKeys: expandedRowKeys,
        onExpandedRowsChange: onExpandedRowsChange,
        rowSelection: {
          type: 'radio',
          onChange: selectChange,
          selectedRowKeys: selectedRowKey,
          getCheckboxProps: function getCheckboxProps(record) {
            return {
              disabled: !record.hasOwnProperty('PASSWORD'),
              name: record.name
            };
          }
        }
      })));
    }
  }]);

  return ProcessActinstCmp;
}(Component);

export default ProcessActinstCmp;