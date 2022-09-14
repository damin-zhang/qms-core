import React from 'react';
import ReactEcharts from 'echarts-for-react';

var LineCmp = function LineCmp() {
  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    // visualMap: {
    //     top: 100,
    //     right: 10,
    //     pieces: [
    //       {
    //         gt: 0,
    //         lte: 50,
    //         color: '#FBDB0F'
    //       },
    //       {
    //         gt: 50,
    //         lte: 100,
    //         color: '#FBDB0F'
    //       },
    //       {
    //         gt: 100,
    //         lte: 200,
    //         color: '#FC7D02'
    //       },
    //       {
    //         gt: 200,
    //         lte: 300,
    //         color: '#AA069F'
    //       },
    //       {
    //         gt: 300,
    //         color: '#AC3B2A'
    //       }
    //     ],
    //     outOfRange: {
    //       color: '#999'
    //     }
    //   },
    series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      markArea: {
        data: [[{
          name: '好',
          yAxis: '300',
          itemStyle: {
            color: 'green'
          },
          label: {
            show: true,
            offset: [0, 100],
            color: 'red',
            fontSize: 9,
            zIndex: 10
          }
        }, {
          yAxis: '200'
        }], [{
          name: '较好',
          yAxis: '200',
          itemStyle: {
            color: '#a1c387'
          },
          label: {
            show: true,
            offset: [100, 200],
            color: 'red',
            fontSize: 9,
            zIndex: 10
          }
        }, {
          yAxis: '100'
        }], [{
          name: '正常',
          yAxis: '100',
          itemStyle: {
            color: '#bdedce'
          },
          label: {
            show: true,
            offset: [200, 300],
            color: 'red',
            fontSize: 9,
            zIndex: 10
          }
        }, {
          yAxis: '0'
        }]]
      }
    }]
  };

  var click = function click(value) {
    console.log(value);
  };

  var onEvents = {
    click: click
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "\u6D4B\u8BD5\u56FE\u8868", /*#__PURE__*/React.createElement(ReactEcharts, {
    option: option,
    onEvents: onEvents
  })));
};

export default LineCmp;