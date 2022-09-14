"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squareBarTraceCols = exports.sketchyBarTraceCols = exports.roundBarTraceCols = exports.recycleMaterialCols = exports.rawMaterialCols = exports.productTraceCols = exports.printTraceCols = exports.polySiliconTraceCols = exports.cutRoundBarTraceCols = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 原材料主表
var rawMaterialCols = [{
  title: '原材料批次',
  dataIndex: 'FLOT',
  align: 'center',
  width: 143,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '组织名称',
  dataIndex: 'BASEUNIT',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '物料编码',
  dataIndex: 'FNUMBER',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, text));
  }
}, {
  title: '物料名称',
  dataIndex: 'FNAME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, text));
  }
}, {
  title: '规格型号',
  dataIndex: 'FMODEL',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库数量',
  dataIndex: 'FQTY',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '单位',
  dataIndex: 'FUNITID',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '供应商名称',
  dataIndex: 'SUPPLIERNAME',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '供应商编码',
  dataIndex: 'SUPPLIERNUM',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库单号',
  dataIndex: 'WAREHSBILLNUM',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库时间',
  dataIndex: 'WAREHSTIME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '车牌号',
  dataIndex: 'CFCARNUM',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}]; // 光伏产品

exports.rawMaterialCols = rawMaterialCols;
var productTraceCols = [{
  title: '组织',
  dataIndex: 'BASEUNITNAME',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '单据编号',
  dataIndex: 'FNUMBER',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '客户编号',
  dataIndex: 'CUSTOMERNUM',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '客户名称',
  dataIndex: 'CUSTOMERNAME',
  align: 'center',
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '发货时间',
  dataIndex: 'FAUDITTIME',
  align: 'center',
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '发货数量',
  dataIndex: 'FQTY',
  align: 'center',
  width: 85,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '发货单位',
  dataIndex: 'FUNITID',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '发运地点',
  dataIndex: 'FSTORAGEORGUNITID',
  align: 'center',
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '批次',
  dataIndex: 'FLOT',
  align: 'center',
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '销售合同单号',
  dataIndex: 'CFTXTCONTRACTNO',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '物料名称',
  dataIndex: 'MATERIALINAME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '规格型号',
  dataIndex: 'MATERIALIMODEL',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '物料编码',
  dataIndex: 'MATERIALINUM',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}]; // 多晶硅产品

exports.productTraceCols = productTraceCols;
var polySiliconTraceCols = [{
  title: '入库ID',
  dataIndex: 'ID',
  align: 'center',
  width: 150,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库单号',
  dataIndex: 'BILL_NO',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库人',
  dataIndex: 'INBOUND_PEOPLE_NAME',
  align: 'center',
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库时间',
  dataIndex: 'INBOUND_TIME',
  align: 'center',
  width: 150,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '生产批次',
  dataIndex: 'CFMANUFACTUREBATCH',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '接收人',
  dataIndex: 'RECEIVE_PEOPLE_NAME',
  align: 'center',
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '事务类型',
  dataIndex: 'TRANS_TYPE',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '三氯氢硅物料批次号',
  dataIndex: 'FLOT',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '三氯氢硅加入时间',
  dataIndex: 'CFSECONDPLAN',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '硅粉物料批号',
  dataIndex: 'FLOT_SI',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '硅粉加入时间',
  dataIndex: 'CFSECONDPLAN_SI',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '备注信息',
  dataIndex: 'REMARK',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}]; // 样片

exports.polySiliconTraceCols = polySiliconTraceCols;
var printTraceCols = [{
  title: '样片批次',
  dataIndex: 'PICINO',
  align: 'center',
  width: 142,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '组织',
  dataIndex: 'ORGANIZATION',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '氧含量',
  dataIndex: 'OXYGENDATA',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '碳含量',
  dataIndex: 'CARBONDATA',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '厚度',
  dataIndex: 'THICKNESS',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '检测人',
  dataIndex: 'CHECKUSER',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测时间',
  dataIndex: 'CKECKTIME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}]; // 反截短圆棒

exports.printTraceCols = printTraceCols;
var cutRoundBarTraceCols = [{
  title: '反截棒批次',
  dataIndex: 'PICINO',
  align: 'center',
  width: 143,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '反截短圆棒长度',
  dataIndex: 'LENGH',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '反截人员',
  dataIndex: 'REVERSETRUNUSER',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '反截设备号',
  dataIndex: 'EQUIPMENTNUM',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '组织',
  dataIndex: 'ORGANIZATION',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}]; // 毛棒

exports.cutRoundBarTraceCols = cutRoundBarTraceCols;
var sketchyBarTraceCols = [{
  title: '毛棒编码',
  dataIndex: 'CODE',
  align: 'center',
  width: 142,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '等径长度',
  dataIndex: 'EQUALDIAMETERLENGTH',
  align: 'center',
  width: 85,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '无位错长度',
  dataIndex: 'DISLOCATIONFREELENGTH',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '规格型号',
  dataIndex: 'MODEL',
  align: 'center',
  width: 85,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '出棒时间',
  dataIndex: 'OUTTIME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '毛棒检测人',
  dataIndex: 'CHECKUSER',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '检测时间',
  dataIndex: 'CHECKTIME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}]; // 短圆棒

exports.sketchyBarTraceCols = sketchyBarTraceCols;
var roundBarTraceCols = [{
  title: '短圆棒批次',
  dataIndex: 'PICINO',
  align: 'center',
  width: 142,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测日期',
  dataIndex: 'CHECKTIME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测人',
  dataIndex: 'CHECKUSER',
  align: 'center',
  width: 95,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '短圆棒长度',
  dataIndex: 'LENGH',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '头部电阻',
  dataIndex: 'HEADERRESISTANCE',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '头部少子',
  dataIndex: 'HEADERMINORITYSUB',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '尾部电阻',
  dataIndex: 'BOTTOMRESISTANCE',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '尾部少子',
  dataIndex: 'BOTTOMMINORITYSUB',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '重量',
  dataIndex: 'WEIGHT',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '晶裂长度',
  dataIndex: 'CRACKLENGH',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}]; // 方棒

exports.roundBarTraceCols = roundBarTraceCols;
var squareBarTraceCols = [{
  title: '方棒批次',
  dataIndex: 'PICINO',
  align: 'center',
  width: 142,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '组织',
  dataIndex: 'ORGANIZATION',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '规格型号',
  dataIndex: 'MODEL',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '方棒编号',
  dataIndex: 'CODE',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '方棒长度',
  dataIndex: 'LENGH',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '出库托号',
  dataIndex: 'PALLET',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '批次生产时间',
  dataIndex: 'PICINOTIME',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}]; // 回收料

exports.squareBarTraceCols = squareBarTraceCols;
var recycleMaterialCols = [{
  title: '回收料编码',
  dataIndex: 'RECYCLEMATERIALCODE',
  align: 'center',
  width: 142,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '组织',
  dataIndex: 'ORGANIZATION',
  align: 'center',
  width: 160,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '类型',
  dataIndex: 'RECYCLEMATERIALTYPE',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, " ", text, " ");
  }
}, {
  title: '托号',
  dataIndex: 'HOLDNO',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text, " ");
  }
}, {
  title: '导电类型',
  dataIndex: 'CONDUCTIONTYPE',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '电阻率',
  dataIndex: 'RESISTANCE',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '少子',
  dataIndex: 'MINORITYSUB',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
      title: text
    }, text);
  }
}];
exports.recycleMaterialCols = recycleMaterialCols;