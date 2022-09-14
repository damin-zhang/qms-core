"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _enterInput = _interopRequireDefault(require("./enterInput.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProcessDetail = function ProcessDetail(_ref) {
  var dataList = _ref.dataList;
  var Item = _antd.Form.Item,
      List = _antd.Form.List;
  var TextArea = _antd.Input.TextArea;
  var columns = [{
    title: '序号',
    dataIndex: 'index',
    width: 30,
    align: 'center',
    render: function render(text, record, index) {
      return index + 1;
    }
  }, {
    title: '执行环节',
    dataIndex: 'NODENAME',
    width: 110,
    align: 'center'
  }, {
    title: '执行人',
    dataIndex: 'OPERATOR',
    width: 120,
    align: 'center',
    ellipsis: true
  }, {
    title: '结论',
    dataIndex: 'CONCLUSION',
    width: 120,
    align: 'center'
  }, {
    title: '意见',
    dataIndex: 'OPINION',
    width: 200,
    align: 'center'
  }, {
    title: '开始时间',
    dataIndex: 'OPERATION_TIME',
    width: 130,
    align: 'center'
  }, {
    title: '结束时间',
    dataIndex: 'OPERATION_E_TIME',
    width: 130,
    align: 'center'
  }, {
    title: '其他',
    dataIndex: 'OTHERCOMMENTS',
    width: 220,
    align: 'center',
    ellipsis: true,
    render: function render(text, record, index) {
      var strList = [];
      var str = text && JSON.parse(text);

      if (text) {
        for (var key in str) {
          strList.push(key);
        }
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, text ? strList.length && strList.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/_react.default.createElement(Item, {
          style: {
            width: 120
          },
          label: item
        }), /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
          title: str[item]
        }, /*#__PURE__*/_react.default.createElement(Item, {
          style: {
            width: '220px '
          },
          label: str[item],
          className: _enterInput.default.other
        })));
      }) : '');
    }
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Table, {
    columns: columns,
    dataSource: dataList,
    pagination: false,
    bordered: true,
    size: "middle",
    style: {
      overflow: 'scroll'
    },
    className: _enterInput.default.detailTab
  }));
};

var _default = ProcessDetail;
exports.default = _default;