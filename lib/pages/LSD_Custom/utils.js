"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flygtColumns = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flygtColumns = [{
  title: '序号',
  dataIndex: 'key',
  align: 'center',
  width: 80,
  render: function render(text, record, index) {
    return index + 1;
  }
}, {
  title: '订单号',
  dataIndex: 'ORDER_NUMBER',
  align: 'center'
}, {
  title: '物料号',
  dataIndex: 'MATERIAL_CODE',
  align: 'center'
}, {
  title: '物料描述',
  dataIndex: 'MATERIAL_DESCRIPTION',
  align: 'center'
}, {
  title: '供应商代码',
  dataIndex: 'SUPPLIER_CODE',
  align: 'center'
}, {
  title: '供应商名称',
  dataIndex: 'SUPPLIER_NAME',
  align: 'center'
}, {
  title: '报检数量',
  dataIndex: 'QOI',
  align: 'center',
  width: 140
}, {
  title: 'IQC',
  dataIndex: 'IQC',
  align: 'center',
  width: 140
}, {
  title: '报检时间',
  dataIndex: 'INSPECTION_TIME',
  align: 'center'
}, {
  title: '计划完成时间',
  dataIndex: 'EC_TIME',
  align: 'center'
}, {
  title: '紧急程度',
  dataIndex: 'EMERGENCY_L',
  align: 'center',
  width: 140,
  render: function render(text) {
    var Cmp = text;

    switch (text) {
      case 9:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "magenta"
        }, text);
        break;

      case 8:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "red"
        }, text);
        break;

      case 7:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "volcano"
        }, text);
        break;

      case 6:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "orange"
        }, text);
        break;

      case 5:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "gold"
        }, text);
        break;

      case 4:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "lime"
        }, text);
        break;

      case 3:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "green"
        }, text);
        break;

      case 2:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "cyan"
        }, text);
        break;

      case 1:
        Cmp = /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "blue"
        }, text);
        break;

      default:
        /*#__PURE__*/
        _react.default.createElement(_antd.Tag, {
          style: {
            fontSize: 24,
            width: '70%',
            padding: '5px 0'
          },
          color: "blue"
        }, text);

        break;
    }

    return Cmp;
  }
}];
exports.flygtColumns = flygtColumns;