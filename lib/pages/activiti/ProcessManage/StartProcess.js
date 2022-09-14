"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _dataToFormat = require("../../../utils/dataToFormat");

var _StartProcessCmp = _interopRequireDefault(require("../../../component/activiti/processManage/StartProcessCmp"));

var _antd = require("antd");

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StartProcess = function StartProcess(_ref) {
  var dispatch = _ref.dispatch,
      startProcess = _ref.startProcess;
  var _startProcess$list = startProcess.list,
      list = _startProcess$list === void 0 ? [] : _startProcess$list,
      visible = startProcess.visible,
      pictureUrl = startProcess.pictureUrl;
  var columns = [{
    title: '流程标识',
    dataIndex: 'id'
  }, {
    title: '流程名称',
    dataIndex: 'NAME'
  }, {
    title: '流程版本',
    dataIndex: 'version',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement("span", null, "V:", record.version);
    }
  }, {
    title: '流程图',
    dataIndex: 'png',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        onClick: function onClick() {
          showPicture(record.id);
        },
        size: "small"
      }, record.png));
    }
  }, {
    title: '部署时间',
    dataIndex: 'deployTime'
  }, {
    title: '操作',
    render: function render(text, record) {
      return /*#__PURE__*/_react.default.createElement(_antd.Button, {
        style: {
          marginLeft: 5
        },
        size: "small",
        onClick: function onClick() {
          return openStartProcess(record.id);
        }
      }, "\u542F\u52A8");
    }
  }];
  list = (0, _utils.generatorTableKey)(list);
  list.map(function (item) {
    item.deployTime = (0, _dataToFormat.dateToFormat)(item.deployTime);
  }); //查看流程图

  var showPicture = function showPicture(id) {
    var url = "api/application/process/dynamicPng/".concat(id);
    changePicture(url);
  };

  var changePicture = function changePicture(pictureUrl) {
    dispatch({
      type: 'startProcess/dynamicPng',
      payload: {
        pictureUrl: pictureUrl
      }
    });
  }; //启动流程


  var openStartProcess = function openStartProcess(id) {
    dispatch({
      type: 'actProcess/show',
      payload: {
        procdefId: id
      }
    });
  }; //流程图modal的关闭


  function Cancel() {
    dispatch({
      type: 'startProcess/Cancel'
    });
  } //总条数


  var pagination = {
    showTotal: function showTotal(total) {
      return "\u5171 ".concat(total, " \u6761");
    },
    //每页条数
    pageSize: 10
  };
  var props = {
    list: list,
    pagination: pagination,
    columns: columns,
    visible: visible,
    pictureUrl: pictureUrl,
    changePicture: changePicture,
    Cancel: Cancel
  };
  return /*#__PURE__*/_react.default.createElement(_StartProcessCmp.default, props);
};

function mapStateToProps(_ref2) {
  var startProcess = _ref2.startProcess;
  return {
    startProcess: startProcess
  };
}

var _default = (0, _dva.connect)(mapStateToProps)(StartProcess);

exports.default = _default;