// 报表子组件
import React from 'react';
import TableCmp from '../chartCmp/tableCmp';
import LiquidCmp from '../chartCmp/LiquidCmp';
import UnlineDualAxesCmp from '../chartCmp/UnlineDualAxesCmp';
import '../index.css';
import { timeLineData, tabData } from './mock';
import language from '@/locale/language';
var viewFields = language.viewFields;

var ReportFormCmp = function ReportFormCmp(_ref) {
  var allData = _ref.allData,
      FREQUENCY = _ref.FREQUENCY,
      pageTitle = _ref.pageTitle,
      tableData = _ref.tableData,
      model = _ref.model,
      pageModel = _ref.pageModel,
      xField = _ref.xField;
  var ChartCmp = FREQUENCY === 'TIME' ? LiquidCmp : UnlineDualAxesCmp;
  var tooltipField = [{
    title: viewFields.materialBatchesTotal,
    valField: 'num'
  }, {
    title: viewFields.timelinessTotal,
    valField: 'qualified'
  }, {
    title: viewFields.InspectionTimeliness,
    valField: 'value'
  }];

  if (pageModel === 'badness') {
    tooltipField = [{
      title: viewFields.materialBatchesTotal,
      valField: 'num'
    }, {
      title: viewFields.badnessTotal,
      valField: 'qualified'
    }, {
      title: viewFields.rejectRatio,
      valField: 'value'
    }];
  }

  if (pageModel === 'DPPM') {
    tooltipField = [{
      title: viewFields.inspectionTotal,
      valField: 'num'
    }, {
      title: viewFields.badnessNum,
      valField: 'qualified'
    }, {
      title: 'DPPM',
      valField: 'value'
    }];
  }

  if (pageModel === 'sample') {
    tooltipField = [{
      title: viewFields.PlanTime,
      valField: 'plan'
    }, {
      title: viewFields.InspectionTime,
      valField: 'value'
    }];
  }

  if (pageModel === 'inspection') {
    tooltipField = [{
      title: viewFields.inspectionLotsTotal,
      valField: 'num'
    }, {
      title: viewFields.inspectionNormalTotal,
      valField: 'qualified'
    }, {
      title: viewFields.inspection,
      valField: 'value'
    }];
  }

  if (pageModel === 'inspectionNum') {
    tooltipField = [{
      title: viewFields.inspectionTotal,
      valField: 'num'
    }, {
      title: viewFields.samplingTotal,
      valField: 'qualified'
    }, {
      title: viewFields.inspectionNum,
      valField: 'value'
    }];
  }

  if (pageModel === 'supplierRate') {
    tooltipField = [{
      title: viewFields.supplierIncomingTotal,
      valField: 'num'
    }, {
      title: viewFields.supplierQualifiedTotal,
      valField: 'qualified'
    }, {
      title: viewFields.supplierRate,
      valField: 'value'
    }];
  }

  lineyField = ['num', 'value'];
  var lineyField = [];
  var lineData = {
    data: allData,
    xField: xField ? xField : FREQUENCY,
    yField: pageModel === 'sample' ? ['plan', 'value'] : ['num', 'value'],
    seriesField: 'larType',
    columnColor: ['#ffeb3b', '#D77BDD', '#4472C4', '#255E91'],
    lineColor: '#9DC3E6',
    tooltipField: tooltipField,
    model: model,
    pageModel: pageModel,
    pageTitle: pageTitle,
    config: {}
  };

  var getColumns = function getColumns() {
    var dataKey = [];

    if (tableData && tableData[0]) {
      for (var key in tableData[0]) {
        dataKey.push(key);
      }
    }

    var monthDataKey = [];

    for (var index = 1; index < 13; index++) {
      monthDataKey.push(["month".concat(index)]);
    }

    var columns = [{
      title: '',
      dataIndex: 'title',
      align: 'center',
      width: '9%',
      render: function render(text) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, text.substr(0, text.indexOf('|'))), /*#__PURE__*/React.createElement("div", null, text.substr(text.indexOf('|') + 1)));
      }
    }];

    if (dataKey.length) {
      for (var i = 0; i < dataKey.length; i++) {
        if (dataKey[i] !== 'title') {
          if (FREQUENCY === 'week') {
            columns.push({
              title: "".concat(viewFields.the, " ").concat(i, " ").concat(viewFields.week),
              dataIndex: dataKey[i],
              align: 'center',
              width: '9%'
            });
          } else if (FREQUENCY === 'month') {
            columns.push({
              title: "".concat(i + 1, " ").concat(viewFields.month),
              dataIndex: monthDataKey[i],
              align: 'center',
              width: '7%'
            });
          } else if (FREQUENCY === 'year') {
            columns.push({
              title: "".concat(dataKey[i].substring(4), " ").concat(viewFields.year),
              dataIndex: dataKey[i],
              align: 'center',
              width: '9%'
            });
          } else {
            columns.push({
              title: dataKey[i],
              dataIndex: dataKey[i],
              align: 'center',
              width: '6%'
            });
          }
        }
      }
    }

    return columns;
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100% - 47px)'
    },
    className: "tr-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tr-all-bg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 26,
      display: 'flex',
      justifyContent: 'center',
      gap: '30%',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      fontWeight: 600,
      letterSpacing: 4,
      color: '#ffeb3b'
    }
  }, pageTitle)), /*#__PURE__*/React.createElement("div", {
    className: "tr-column"
  }, allData && allData.length > 0 && /*#__PURE__*/React.createElement(ChartCmp, lineData))), /*#__PURE__*/React.createElement("div", {
    className: "tr-data-bg"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px'
    }
  }, viewFields.dataTable), /*#__PURE__*/React.createElement(TableCmp, {
    dataList: tableData,
    columns: getColumns()
  }))));
};

export default ReportFormCmp;