import React from "react";
import { Tooltip, Tag } from 'antd'; // 原材料批次明细--检测追溯信息

export var checkingInfo = [{
  title: '编码',
  dataIndex: 'FNUMBER',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测项目编码',
  dataIndex: 'FQCITEMID',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测项目名称',
  dataIndex: 'FQCITEMNAME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检验值上限',
  dataIndex: 'FUPPER',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检验值下限',
  dataIndex: 'FLOWER',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检验结果',
  dataIndex: 'FCHECKRESULT',
  align: 'center',
  render: function render(text) {
    var color = '';

    switch (text) {
      case '合格':
        color = '#2DB7F5';
        break;

      case '不合格':
        color = '#F74A10';
        break;

      default:
        color = '#2DB7F5';
        break;
    }

    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, /*#__PURE__*/React.createElement(Tag, {
      color: "".concat(color),
      style: {
        display: 'inline-grid',
        margin: '0'
      }
    }, text));
  }
}, {
  title: '检验日期',
  dataIndex: 'FAUDITTIME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测人',
  dataIndex: 'FCHECKERID',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '报告结果',
  dataIndex: 'ITEMFCHECKRESULT',
  align: 'center',
  render: function render(text) {
    var color = '';

    switch (text) {
      case '合格':
        color = '#2DB7F5';
        break;

      case '不合格':
        color = '#F74A10';
        break;

      default:
        color = '#2DB7F5';
        break;
    }

    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, /*#__PURE__*/React.createElement(Tag, {
      color: "".concat(color),
      style: {
        display: 'inline-grid',
        margin: '0'
      }
    }, text));
  }
}]; // 原材料批次明细--供应商追溯信息

export var supplierInfo = [{
  title: '供应商名称',
  name: 'FNAME'
}, {
  title: '地址',
  name: 'FADDRESS'
}, {
  title: '供应商法人',
  name: 'FARTIFICIALPERSON'
}, {
  title: '工商注册号',
  name: 'FBIZREGISTERNO'
}, {
  title: '生产许可证',
  name: 'FBUSIEXEQUATUR'
}, {
  title: '营业执照',
  name: 'FBUSILICENCE'
}]; // 原材料批次明细--采购订单追溯信息

export var receivingInfo = [{
  title: '单据号',
  name: 'RECEIVINGNUM'
}, {
  title: '物料名称',
  name: 'FNAME'
}, {
  title: '物料编号',
  name: 'FNUMBER'
}, {
  title: '物料规格',
  name: 'FMODEL'
}, {
  title: '批次',
  name: 'FLOT'
}, {
  title: '数量',
  name: 'FQTY'
}, {
  title: '单位',
  name: 'FUNITID'
}, {
  title: '日期',
  name: 'FAUDITTIME'
}, {
  title: '净重',
  name: 'CFNETWEIGHT'
}, {
  title: '毛重',
  name: 'CFWEIGHT'
}, {
  title: '第一次过磅时间',
  name: 'CFFIRSTPLAN'
}, {
  title: '第二次过磅时间',
  name: 'CFSECONDPLAN'
}]; // 原材料批次明细--收货单追溯信息

export var purchaseInfo = [{
  title: '采购订单号',
  name: 'PURCHASENUM'
}, {
  title: '订单行号',
  name: 'FSEQ'
}, {
  title: '物料名称',
  name: 'FNAME'
}, {
  title: '物料编号',
  name: 'FNUMBER'
}, {
  title: '物料规格',
  name: 'FMODEL'
}, {
  title: '订货数量',
  name: 'FQTY'
}, {
  title: '单位',
  name: 'FUNITID'
}, {
  title: '税额',
  name: 'FTAX'
}, {
  title: '价税合计',
  name: 'FTAXAMOUNT'
}, {
  title: '采购合同',
  name: 'FPURCONTRACTID'
}]; // 光伏产品明细--入库追溯信息

export var warehousingInfo = [{
  title: '入库单号',
  dataIndex: 'FNUMBER',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库时间',
  dataIndex: 'FAUDITTIME',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '入库人',
  dataIndex: 'FAUDITORID',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '生产订单',
  dataIndex: 'FMANUBILLNUMBER',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '物料名称',
  dataIndex: 'MATERIALINAME',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '规格型号',
  dataIndex: 'MATERIALINUM',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '数量',
  dataIndex: 'FQTY',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '单位',
  dataIndex: 'FUNITID',
  align: 'center',
  ellipsis: true,
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '仓库',
  dataIndex: 'FWAREHOUSEID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '库位',
  dataIndex: 'FLOCATIONID',
  align: 'center',
  ellipsis: true,
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '生产批次',
  dataIndex: 'CFMANUFACTUREBATCH',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '包装批次',
  dataIndex: 'CFPACKAGEBATCHID',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '托号',
  dataIndex: 'CFPALLET',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '箱号',
  dataIndex: 'CFCARTONID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '毛重',
  dataIndex: 'CFGROSSWEIGHT',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '净重',
  dataIndex: 'CFNETWEIGHT',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '料况',
  dataIndex: 'CFMATERIALCASEID',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '质量等级',
  dataIndex: 'CFSALEGRADEID',
  align: 'center',
  ellipsis: true,
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 光伏产品明细--出库明细追溯信息

export var deliveryInfo = [{
  title: '单据编号',
  dataIndex: 'FNUMBER',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '出库时间',
  dataIndex: 'FBIZDATE',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '生产批号',
  dataIndex: 'CFMANUFACTUREBATCH',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '包装批号',
  dataIndex: 'CFPACKAGEBATCHID',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '托号',
  dataIndex: 'FPALLET',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '箱号',
  dataIndex: 'CFCARTONID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '净重',
  dataIndex: 'CFNETWEIGHT',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '单位',
  dataIndex: 'CFBASEUNIT',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '产品类别',
  dataIndex: 'CFPRODUCTCLASSID',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '质量等级',
  dataIndex: 'CFQUALITYGRADEID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '料况',
  dataIndex: 'CFMATERIALCASEID',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '备注',
  dataIndex: 'CFDESCRIPTION2',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '业务类型',
  dataIndex: 'CFBIZTYPEID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '客户编号',
  dataIndex: 'CUSTOMERNUM',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '客户名称',
  dataIndex: 'CUSTOMERNAME',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '仓库',
  dataIndex: 'CFWAREHOUSEID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '库位',
  dataIndex: 'CFLOCATIONID',
  align: 'center',
  ellipsis: true,
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 光伏产品明细--出货计划追溯信息

export var consignmentInfo = [{
  title: '单据编号',
  dataIndex: 'FNUMBER',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '出货时间',
  dataIndex: 'FAUDITTIME',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '销售合同号',
  dataIndex: 'CFTXTCONTRACTNO',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '数量',
  dataIndex: 'FQTY',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '单位',
  dataIndex: 'FUNITID',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '销售订单号',
  dataIndex: 'FSALEORDERNUMBER',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '销售订单分录号',
  dataIndex: 'FSALEORDERENTRYSEQ',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '送货日期',
  dataIndex: 'FSENDDATE',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '送货地址',
  dataIndex: 'FDELIVERYADDRESS',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '订货客户',
  dataIndex: 'FORDERCUSTOMERID',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '送货客户',
  dataIndex: 'FDELIVERYCUSTOMERID',
  align: 'center',
  ellipsis: true,
  width: 140,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '应收客户',
  dataIndex: 'FRECEIVECUSTOMERID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '收款客户',
  dataIndex: 'FPAYMENTCUSTOMERID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '料况',
  dataIndex: 'CFMATERIALCASEREMA',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '质量等级',
  dataIndex: 'CFQUALITYGRADEID',
  align: 'center',
  ellipsis: true,
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 多晶硅追溯明细页--后处理信息

export var aftercureInfo = [{
  title: '后处理信息ID',
  dataIndex: 'ID',
  align: 'center',
  ellipsis: true,
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '托号',
  dataIndex: 'PALLET_NO',
  align: 'center',
  ellipsis: true,
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '装托人',
  dataIndex: 'PALLET_PEOPLE_NAME',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '成托时间',
  dataIndex: 'PALLET_TIME',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '箱号',
  dataIndex: 'PACKAGE_NO',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '装箱人',
  dataIndex: 'PACKING_PEOPLE_NAME',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '装箱时间',
  dataIndex: 'PACKING_TIME',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '粒径',
  dataIndex: 'PARTICLE_SIZE',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '毛重',
  dataIndex: 'GROSS_WEIGHT',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '净重',
  dataIndex: 'NET_WEIGHT',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '料况',
  dataIndex: 'PRODUCTION_MATERIAL',
  align: 'center',
  ellipsis: true,
  width: 60,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '炉批号',
  dataIndex: 'BATCH_NO',
  align: 'center',
  ellipsis: true,
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '产品入库单ID',
  dataIndex: 'STORAGE_ID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 多晶硅追溯明细页--还原信息

export var restoreInfo = [{
  title: '还原追溯ID',
  dataIndex: 'ID',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '三氯氢硅物料批号',
  dataIndex: 'FLOT',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '三氯氢硅加入时间',
  dataIndex: 'CFSECONDPLAN',
  align: 'center',
  ellipsis: true,
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '炉批号',
  dataIndex: 'BATCH_NO',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '出炉时间',
  dataIndex: 'OUT_FURNACE_TIME',
  align: 'center',
  ellipsis: true,
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '炉室',
  dataIndex: 'FURNACE_ROOM',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '炉号',
  dataIndex: 'FURNACE_NO',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '生产线',
  dataIndex: 'PRODUCTION_LINE',
  align: 'center',
  ellipsis: true,
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '直径范围',
  dataIndex: 'DIAM_RANGE',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '出炉净重',
  dataIndex: 'NET_WEIGHT',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '后处理信息追溯ID',
  dataIndex: 'TRACE_AFTERCURE_ID',
  align: 'center',
  ellipsis: true,
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '硅粉物料批次号',
  dataIndex: 'FLOT_SI',
  align: 'center',
  ellipsis: true,
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '硅粉加入时间',
  dataIndex: 'CFSECONDPLAN_SI',
  align: 'center',
  ellipsis: true,
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '硅粉加入人',
  dataIndex: 'APPLICANT_SI',
  align: 'center',
  ellipsis: true,
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 多晶硅追溯明细页--材料领用信息

export var receiveInfo = [{
  title: '材料领用ID',
  name: 'ID'
}, {
  title: '领用人',
  name: 'FPICKERID'
}, {
  title: '领用时间',
  name: 'FPICKINGDATE'
}, {
  title: '领用量',
  name: 'FQTY'
}, {
  title: '物料批次号',
  name: 'FLOT'
}, {
  title: '物料名称',
  name: 'FNAME'
}]; // 多晶硅追溯明细页--原材料信息

export var rawMaterialInfo = [{
  title: '供应商编号',
  name: 'SUPPLIERNUM'
}, {
  title: '供应商名称',
  name: 'SUPPLIERNAM'
}, {
  title: '原辅料名称',
  name: 'FNAME'
}, {
  title: '规格/型号',
  name: 'FMODEL'
}, {
  title: '数量',
  name: 'FQTY'
}, {
  title: '到货时间',
  name: 'FAUDITTIME'
}, {
  title: '领用时间',
  name: 'FPICKINGDATE'
}, {
  title: '原辅料检测日期',
  name: 'FAUDITTIME'
}, {
  title: '编码',
  name: 'FNUMBER'
}, {
  title: '检测项目',
  name: 'FQCITEMNAME'
}, {
  title: '抽检数量',
  name: 'FCHECKQTY	'
}, {
  title: '检测结果',
  name: 'FCHECKRESULT'
}, {
  title: '检测人',
  name: 'FCHECKERID'
}]; // 反截短圆棒批次明细--反截短圆棒参数信息

export var RoundBarInfo = [{
  title: '头部电阻',
  name: 'HEADERRESISTANCE'
}, {
  title: '尾部电阻',
  name: 'BOTTOMRESISTANCE'
}, {
  title: '头部少子',
  name: 'HEADERMINORITYSUB'
}, {
  title: '尾部少子',
  name: 'BOTTOMMINORITYSUB'
}, {
  title: '长度',
  name: 'LENGH'
}, {
  title: '重量',
  name: 'WEIGHT'
}, {
  title: '检测时间',
  name: 'CHECKTIME'
}, {
  title: '检测人',
  name: 'CHECKUSER'
}]; // 反截短圆棒批次明细--样片信息

export var samplePieceInfo = [{
  title: '样片批次编码',
  name: 'PICINO'
}, {
  title: '样片类型',
  name: 'TYPE'
}, {
  title: '氧',
  name: 'OXYGEN'
}, {
  title: '碳',
  name: 'CARBON'
}, {
  title: '厚度',
  name: 'THICKNESS'
}, {
  title: '检测人',
  name: 'CHECKUSER'
}, {
  title: '检测时间',
  name: 'CHECKTIME'
}]; // 反截短圆棒批次明细--反截信息

export var cutInfo = [{
  title: '原圆棒批次编码',
  name: 'ORIGINALROUNDBARPICINO'
}, {
  title: '班次',
  name: 'SHIFT'
}, {
  title: '记录人',
  name: 'RECORDUSER'
}, {
  title: '日期/时间',
  name: 'DATETIME'
}, {
  title: '圆棒批次',
  name: 'ROUNDBARPICINO'
}, {
  title: '炉号',
  name: 'HEATNUM'
}, {
  title: '规格',
  name: 'SPECIFICATIONS'
}, {
  title: '导电性能',
  name: 'CONDUCTIVITY'
}, {
  title: '尺寸',
  name: 'SIZE'
}, {
  title: '头部电阻',
  name: 'HEADERRESISTANCE'
}, {
  title: '尾部电阻',
  name: 'BOTTOMRESISTANCE'
}, {
  title: '头部少子',
  name: 'HEADERMINORITYSUB'
}, {
  title: '尾部少子',
  name: 'BOTTOMMINORITYSUB'
}, {
  title: '位错',
  name: 'DISLOCATION'
}, {
  title: '晶裂',
  name: 'CRYSTALCRACK'
}, {
  title: '氧',
  name: 'OXYGEN'
}, {
  title: '碳',
  name: 'CARBON'
}, {
  title: '责任区域',
  name: 'DUTYAREA'
}, {
  title: '反截总长',
  name: 'REVERSECUTSUM'
}, {
  title: '圆棒直径',
  name: 'ROUNDBARDIAM'
}, {
  title: '反截前少子数据值',
  name: 'BEFORREVERSECUTMINORITYSUB'
}, {
  title: '反截前电阻率',
  name: 'BEFORREVERSECUTRESISTANCE'
}, {
  title: '反截前氧含量',
  name: 'BEFORREVERSECUTOXYGEN'
}, {
  title: '反截前碳含量',
  name: 'BEFORREVERSECUTCARBON'
}, {
  title: '反截次数',
  name: 'REVERSECUTNUM'
}, {
  title: '反截长度',
  name: 'REVERSECUTLENGH'
}, {
  title: '反截后少子数据值',
  name: 'AFTERREVERSECUTMINORITYSUB'
}, {
  title: '反截后电阻率',
  name: 'AFTERREVERSECUTRESISTANCE'
}, {
  title: '反截后氧含量',
  name: 'AFTERREVERSECUTOXYGEN'
}, {
  title: '反截后碳含量',
  name: 'AFTERREVERSECUTCARBON'
}]; // 毛棒批次追溯明细--原辅料信息

export var rawIngredientsInfo = [{
  title: '供应商编号',
  dataIndex: 'SUPPLIERCODE',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '供应商名称',
  dataIndex: 'SUPPLIERNAME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '原辅料名称',
  dataIndex: 'RAWMATERIALNAME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '规格/型号',
  dataIndex: 'MODEL',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '数量',
  dataIndex: 'NUM',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '到货时间',
  dataIndex: 'ARRIVALTIME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '领用时间',
  dataIndex: 'CLAIMTIME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '原辅料检测日期',
  dataIndex: 'CHECKTIME',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '编码',
  dataIndex: 'CODE',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测项目',
  dataIndex: 'CHECKPROJECT',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '抽检数量',
  dataIndex: 'CHECKNUM',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测结果',
  dataIndex: 'CHECKRESULT',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测人',
  dataIndex: 'CHECKUSER',
  align: 'center',
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 毛棒批次追溯明细--配料装料信息

export var loadingInfo = [{
  title: '晶棒编号（毛棒批次）',
  dataIndex: 'HAIRSTICKPICINO',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '原料名称',
  dataIndex: 'MATERIALNAME',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '原料批次号',
  dataIndex: 'MATERIALPICINO',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '原料重量',
  dataIndex: 'MATERIALWEIGHT',
  align: 'center',
  width: 90,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '原料厂家',
  dataIndex: 'MATERIALSUPPLIER',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '回制料批次号',
  dataIndex: 'RECYCLEDPICINO',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '回制料电阻',
  dataIndex: 'RECYCLEDRESISTANCE',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '回制料电阻信息检查确认',
  dataIndex: 'RECYCLEDCONFIRM',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '回制料重量',
  dataIndex: 'RECYCLEDWEIGHT',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '掺杂剂名称',
  dataIndex: 'DOPANTNAME',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '掺杂剂规格确认',
  dataIndex: 'DOPANTCONFIRM',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '掺杂剂厂家',
  dataIndex: 'DOPANTSUPPLIER',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '掺杂剂模拟量',
  dataIndex: 'DOPANTANALOGNUM',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '掺杂剂及称量',
  dataIndex: 'DOPANTNUM',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '是否投炉确认',
  dataIndex: 'LOADINGCONFIRM',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '投炉量确认',
  dataIndex: 'LOADINGNUMCONFIRM',
  align: 'center',
  width: 120,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '配料人',
  dataIndex: 'BATCHINGUSER',
  align: 'center',
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '装料人',
  dataIndex: 'LOADINGUSER',
  align: 'center',
  width: 65,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 毛棒批次追溯明细--过程拉晶指标

export var CrystalPullingInfo = [{
  title: '晶埚转速',
  name: 'CRUCIBLESPEED'
}, {
  title: '拉速',
  name: 'PULLINGSPEED'
}, {
  title: '炉压',
  name: 'FURNACEPRESSURE'
}, {
  title: '氩气流量',
  name: 'ARGONFLOW'
}, {
  title: '节流阀开度',
  name: 'THROTTLEOPENING'
}, {
  title: '引放时间',
  name: 'RELEASETIME'
}, {
  title: '单晶炉功率',
  name: 'MONOCRYSTALOVENRATE'
}, {
  title: '炉台泄露率',
  name: 'HEARTHLEAKAGERATE'
}, {
  title: '炉台真空率',
  name: 'HEARTHVACUUMRATE'
}, {
  title: '拉制时长',
  name: 'CONTROLTIMER'
}, {
  title: '操作人员',
  name: 'USER'
}, {
  title: '晶棒拉制长度',
  name: 'CRYSTALRODDRAWINGLENGH'
}, {
  title: '埚内剩料（KG）',
  name: 'POTRESIDUE'
}, {
  title: '收尾类型',
  name: 'FINISHTYPE'
}, {
  title: '提出时间',
  name: 'PROPOSETIME'
}]; // 毛棒批次追溯明细--检测指标

export var testIndexInfo = [{
  title: '导电类型',
  name: 'CONDUCTIVETYPE'
}, {
  title: '等径长度',
  name: 'ISODIAMETRICLENTH'
}, {
  title: '位错长度',
  name: 'DISLOCATIONLENGTH'
}, {
  title: '晶裂长度',
  name: 'CRYSTALCRACKLENGTH'
}, {
  title: '成晶重量',
  name: 'CRYSTALLIZATIONWEIGHT'
}, {
  title: '最大直径',
  name: 'DIAMETERMAX'
}, {
  title: '最小直径',
  name: 'DIAMETERMIN'
}, {
  title: '头部氧含量',
  name: 'HEADEROXYGEN'
}, {
  title: '尾部氧含量',
  name: 'BOTTOMOXYGEN'
}, {
  title: '头部碳含量',
  name: 'HEADERCARBON'
}, {
  title: '尾部碳含量',
  name: 'BOTTOMCARBON'
}, {
  title: '头部电阻率',
  name: 'HEADERRESISTIVITY'
}, {
  title: '尾部电阻率',
  name: 'BOTTOMRESISTIVITY'
}, {
  title: '头部少子值',
  name: 'HEADERMINORITYSUB'
}, {
  title: '尾部少子值',
  name: 'BOTTOMMINORITYSUB'
}]; // 方棒批次明细--方棒参数信息

export var parameterInfo = [{
  title: '边长(头)-开方',
  dataIndex: 'LENGTHHEADKAIFANG',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(中)-开方',
  dataIndex: 'LENGTHMIDKAIFANG',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(尾)-开方',
  dataIndex: 'LENGTHBOTTOMKAIFANG',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(头)-面1-磨倒',
  dataIndex: 'LENGTHHEADMIANONEMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(尾)-边长(头)-面2-磨倒',
  dataIndex: 'lengthHeadMianTwoMoDao',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(中)-面1-磨倒',
  dataIndex: 'LENGTHMIDMIANONEMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(中)-面2-磨倒',
  dataIndex: 'LENGTHMIDMIANTWOMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(尾)-面1-磨倒',
  dataIndex: 'LENGTBOTTOMMIANONEMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长(尾)-面2-磨倒',
  dataIndex: 'LENGTBOTTOMMIANTWOMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '对角线(头)-磨倒',
  dataIndex: 'DIAGONALHEADMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '对角线(尾)-磨倒',
  dataIndex: 'DIAGONALBOTTOMMODAO',
  align: 'center',
  width: 110,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长最大',
  dataIndex: 'MAXLENGTH',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '边长最小',
  dataIndex: 'MINLENGTH',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '对角线',
  dataIndex: 'DIAGONAL',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '倒角',
  dataIndex: 'CHAMFER',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '垂直度',
  dataIndex: 'VERTICALITY',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '崩边',
  dataIndex: 'CHIPPING',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '裂纹',
  dataIndex: 'CRACKLE',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '划痕',
  dataIndex: 'SCRATCH',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '水印',
  dataIndex: 'WATERMARK',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '脏污',
  dataIndex: 'DIRTY',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '硅落',
  dataIndex: 'SILICONDROP',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '色差',
  dataIndex: 'CHROMATICABERRATION',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '线痕',
  dataIndex: 'STRIA',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '孪晶',
  dataIndex: 'CRYSTALTWIN',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '磨痕',
  dataIndex: 'WEARMARK',
  align: 'center',
  width: 80,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测时间',
  dataIndex: 'CHECKTIME',
  align: 'center',
  width: 100,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}, {
  title: '检测人',
  dataIndex: 'CHECKUSER',
  align: 'center',
  width: 70,
  render: function render(text) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      title: text
    }, text);
  }
}]; // 方棒批次明细--样片信息

export var squareSamplePieceInfo = [{
  title: '样片批次编码',
  name: 'PICINO'
}, {
  title: '样片类型',
  name: 'TYPE'
}, {
  title: '碳',
  name: 'CARBON'
}, {
  title: '氧',
  name: 'OXYGEN'
}, {
  title: '厚度',
  name: 'THICKNESS'
}, {
  title: '检测人',
  name: 'CHECKUSER'
}, {
  title: '检测时间',
  name: 'CHECKTIME'
}]; // 方棒批次明细--反截信息

export var squareCutInfo = [{
  title: '原圆棒批次编码',
  name: 'ORIGINALROUNDBARPICINO'
}, {
  title: '时间',
  name: 'DATETIME'
}, {
  title: '检测人',
  name: 'CHECKUSER'
}, {
  title: '规格',
  name: 'MODEL'
}, {
  title: '编号',
  name: 'CODE'
}, {
  title: '返截原因',
  name: 'REVERSECUTREASON'
}, {
  title: '反截长度',
  name: 'REVERSECUTLENGH'
}, {
  title: '责任人',
  name: 'RESPONSIBILITYUSER'
}];