function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import { Upload, Form, Input, message, Select, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { confirm } from '../../../utils/utils';
var definitionColumns = [{
  title: '序号',
  dataIndex: 'index',
  width: 50,
  render: function render(text, record, index) {
    return index + 1;
  }
}, {
  title: '报告上传时间',
  dataIndex: 'FMTIME',
  width: 130,
  align: 'center',
  render: function render(text) {
    return text;
  }
}, {
  title: '单号',
  dataIndex: 'NO',
  width: 100,
  align: 'center'
}, {
  title: '物料编码',
  dataIndex: 'MATERIAL_CODE',
  width: 100,
  align: 'center'
}, {
  title: '物料描述',
  dataIndex: 'MATERIAL_DESCRIBE',
  width: 100,
  align: 'center'
}, {
  title: '分类名称',
  dataIndex: 'MATERIAL_SUBCLASS_NAME',
  width: 100,
  align: 'center'
}, {
  title: '供应商名称',
  dataIndex: 'SUPPLIER_NAME',
  width: 100,
  align: 'center'
}, {
  title: '供应商品牌',
  dataIndex: 'SUPPLIER_BRAND',
  width: 100,
  align: 'center'
}, {
  title: 'SQE',
  dataIndex: 'SQE',
  width: 130,
  align: 'center'
}, {
  title: '供应商风险等级',
  dataIndex: 'SUPPLIER_RISK_LEVEL',
  align: 'center',
  width: 120
}, {
  title: '物料风险等级',
  dataIndex: 'MATERIAL_RISK_LEVEL',
  align: 'center',
  width: 120
}, {
  title: '综合风险判定',
  dataIndex: 'COMPREHENSIVE_RISK_DETERMINATION',
  align: 'center',
  width: 120
}, {
  title: '抽样频率',
  dataIndex: 'SAMPLING_FREQUENCY',
  align: 'center',
  width: 100
}, {
  title: '测试报告',
  dataIndex: 'FNAME',
  align: 'center',
  width: 100
}, {
  title: '测试结果Test result（以下为参考标准ppm）ROHS',
  children: [{
    title: 'Cd',
    children: [{
      title: 100,
      dataIndex: 'Cd',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'Pb',
    children: [{
      title: 1000,
      dataIndex: 'Pb',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'Hg',
    children: [{
      title: 1000,
      dataIndex: 'Hg',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'Cr6+',
    children: [{
      title: 1000,
      dataIndex: 'Cr6+',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'PBB',
    children: [{
      title: 1000,
      dataIndex: 'PBB',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'PBDE',
    children: [{
      title: 1000,
      dataIndex: 'PBDE',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'DEHP',
    children: [{
      title: 1000,
      dataIndex: 'DEHP',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'BBP',
    children: [{
      title: 1000,
      dataIndex: 'BBP',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'DBP',
    children: [{
      title: 1000,
      dataIndex: 'DBP',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'DIBP',
    children: [{
      title: 1000,
      dataIndex: 'DIBP',
      width: 100,
      input: 'input'
    }]
  }]
}, {
  title: '测试结果',
  dataIndex: 'TR',
  align: 'center',
  width: 130
}];
var reportColumns = [{
  title: '序号',
  dataIndex: 'index',
  width: 50,
  render: function render(text, record, index) {
    return index + 1;
  }
}, {
  title: '测试结果',
  dataIndex: 'TEST_CONCLUSION',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/React.createElement("div", {
      className: text === 'OK' ? 'green' : 'red'
    }, text);
  }
}, {
  title: '报告上传时间',
  dataIndex: 'FMTIME',
  width: 130,
  align: 'center'
}, {
  title: '单号',
  dataIndex: 'NO',
  width: 100,
  align: 'center'
}, {
  title: '物料编码',
  dataIndex: 'MATERIAL_CODE',
  width: 100,
  align: 'center'
}, {
  title: '物料名称',
  dataIndex: 'MATERIAL_NAME',
  width: 100,
  align: 'center'
}, {
  title: '分类名称',
  dataIndex: 'MATERIAL_SUBCLASS_NAME',
  width: 100,
  align: 'center'
}, {
  title: '供应商名称',
  dataIndex: 'SUPPLIER_NAME',
  width: 100,
  align: 'center'
}, {
  title: '供应商品牌',
  dataIndex: 'SUPPLIER_BRAND',
  width: 100,
  align: 'center'
}, {
  title: 'SQE',
  dataIndex: 'SQE',
  width: 100,
  align: 'center'
}, {
  title: '供应商风险等级',
  dataIndex: 'SUPPLIER_RISK_LEVEL',
  align: 'center',
  width: 120
}, {
  title: '物料风险等级',
  dataIndex: 'MATERIAL_RISK_LEVEL',
  align: 'center',
  width: 120
}, {
  title: '综合风险判定',
  dataIndex: 'COMPREHENSIVE_RISK_DETERMINATION',
  align: 'center',
  width: 120
}, {
  title: '抽样频率',
  dataIndex: 'SAMPLING_FREQUENCY',
  align: 'center',
  width: 100
}, {
  title: '测试报告',
  dataIndex: 'FNAME',
  align: 'center',
  width: 100
}, {
  title: '测试结果Test result（以下为参考标准ppm）ROHS',
  children: [{
    title: 'Cd',
    children: [{
      title: 100,
      dataIndex: 'Cd',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'Pb',
    children: [{
      title: 1000,
      dataIndex: 'Pb',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'Hg',
    children: [{
      title: 1000,
      dataIndex: 'Hg',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'Cr6+',
    children: [{
      title: 1000,
      dataIndex: 'Cr6+',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'PBB',
    children: [{
      title: 1000,
      dataIndex: 'PBB',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'PBDE',
    children: [{
      title: 1000,
      dataIndex: 'PBDE',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'DEHP',
    children: [{
      title: 1000,
      dataIndex: 'DEHP',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'BBP',
    children: [{
      title: 1000,
      dataIndex: 'BBP',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'DBP',
    children: [{
      title: 1000,
      dataIndex: 'DBP',
      width: 100,
      input: 'input'
    }]
  }, {
    title: 'DIBP',
    children: [{
      title: 1000,
      dataIndex: 'DIBP',
      width: 100,
      input: 'input'
    }]
  }]
}, {
  title: '测试结果',
  dataIndex: 'TEST_CONCLUSION',
  align: 'center',
  width: 130,
  render: function render(text) {
    return /*#__PURE__*/React.createElement("div", {
      className: text === 'OK' ? 'green' : 'red'
    }, text);
  }
}, {
  title: '操作',
  dataIndex: 'operation',
  width: 100,
  align: 'center',
  frozen: 'right',
  fixed: 'right'
}];

var setInspectionColumns = function setInspectionColumns(_ref) {
  var onInputPressEnter = _ref.onInputPressEnter,
      ResultEvent = _ref.ResultEvent,
      _beforeUpload = _ref.beforeUpload;
  var columns = [];
  columns = definitionColumns.map(function (item) {
    if (item.children) {
      return _objectSpread(_objectSpread({}, item), {}, {
        children: item.children.map(function (f) {
          if (f.children) {
            return _objectSpread(_objectSpread({}, f), {}, {
              align: 'center',
              children: f.children.map(function (i) {
                return _objectSpread(_objectSpread({
                  align: 'center'
                }, i), {}, {
                  render: i.render ? i.render : i.input ? function (text, record, index) {
                    var TVClass = '';

                    if (record.Items) {
                      var s = record.Items.filter(function (item) {
                        return item.NAME === i.dataIndex;
                      }) || [];

                      if (f.title === 'Cd' && s.length && s[0].NAME === 'Cd') {
                        !isNaN(Number(s[0].TV)) && Number(s[0].TV) > 100 ? TVClass = 'red' : TVClass = '';
                      } else {
                        !isNaN(Number(s.length && s[0].TV)) && Number(s.length && s[0].TV) > 1000 ? TVClass = 'red' : TVClass = '';
                      }
                    }

                    return /*#__PURE__*/React.createElement(Form.Item, {
                      name: [record.ID, i.dataIndex],
                      key: record.ID
                    }, /*#__PURE__*/React.createElement(Input, {
                      type: "text",
                      autoComplete: "off",
                      className: TVClass,
                      onPressEnter: function onPressEnter() {
                        return onInputPressEnter(record, [record.ID, i.dataIndex], index);
                      }
                    }));
                  } : function (text, record) {
                    return /*#__PURE__*/React.createElement("div", null, text);
                  }
                });
              })
            });
          }
        })
      });
    } else {
      return _objectSpread(_objectSpread({
        align: 'center'
      }, item), {}, {
        width: item.width || 100,
        render: item.render ? item.render : item.dataIndex === 'FNAME' ? function (text, record, index) {
          return /*#__PURE__*/React.createElement(Upload, {
            beforeUpload: function beforeUpload(file) {
              return _beforeUpload(file, [record], index);
            },
            showUploadList: false,
            itemRender: function itemRender() {
              return /*#__PURE__*/React.createElement(React.Fragment, null);
            },
            maxCount: 1,
            key: record.ID
          }, /*#__PURE__*/React.createElement(Button, {
            icon: /*#__PURE__*/React.createElement(UploadOutlined, null)
          }, "\u4E0A\u4F20\u62A5\u544A"));
        } : item.dataIndex === 'TR' ? function (text, record, index) {
          return /*#__PURE__*/React.createElement(Form.Item, {
            name: [record.ID, 'TR'],
            key: record.ID
          }, /*#__PURE__*/React.createElement(Select, {
            disabled: record.FMTIME ? false : true,
            onChange: function onChange(val) {
              return ResultEvent(val, index);
            }
          }, /*#__PURE__*/React.createElement(Select.Option, {
            value: "OK",
            key: "1"
          }, "OK"), /*#__PURE__*/React.createElement(Select.Option, {
            value: "NG",
            key: "2"
          }, "NG")));
        } : function (text) {
          return text;
        }
      });
    }
  });
  return columns;
};

var setReportColumns = function setReportColumns(_ref2) {
  var lookOrDownload = _ref2.lookOrDownload,
      form = _ref2.form,
      selectedRowKeys = _ref2.selectedRowKeys;
  var columns = [];
  columns = reportColumns.map(function (item) {
    if (item.children) {
      return _objectSpread(_objectSpread({}, item), {}, {
        children: item.children.map(function (f) {
          if (f.children) {
            return _objectSpread(_objectSpread({}, f), {}, {
              align: 'center',
              children: f.children.map(function (i) {
                return _objectSpread(_objectSpread({
                  align: 'center'
                }, i), {}, {
                  render: i.render ? i.render : i.input ? function (text, record, index) {
                    var TVClass = '';

                    if (i.dataIndex === 'Cd' && text) {
                      !isNaN(Number(text)) && Number(text) > 100 ? TVClass = 'red' : TVClass = '';
                    } else if (text) {
                      !isNaN(Number(text)) && Number(text) > 1000 ? TVClass = 'red' : TVClass = '';
                    }

                    return /*#__PURE__*/React.createElement("div", {
                      className: TVClass
                    }, text);
                  } : function (text, record) {
                    return /*#__PURE__*/React.createElement("div", null, text);
                  }
                });
              })
            });
          }
        })
      });
    } else {
      return _objectSpread(_objectSpread({
        align: 'center'
      }, item), {}, {
        width: item.width || 100,
        render: item.dataIndex === 'FNAME' ? function (text, record, index) {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
            onClick: function onClick() {
              return lookOrDownload('look');
            }
          }, "\u67E5\u770B"), /*#__PURE__*/React.createElement(Button, {
            onClick: function onClick() {
              return lookOrDownload('download');
            }
          }, "\u4E0B\u8F7D"));
        } : item.dataIndex === 'operation' ? function (text, record, index) {
          return /*#__PURE__*/React.createElement(Button, {
            type: "primary",
            onClick: function onClick() {
              return confirm({
                title: '确定启动流程吗？',
                onOk: function onOk() {
                  return form.submit();
                }
              });
            },
            disabled: record.TEST_CONCLUSION === 'NG' ? false : true
          }, "\u63D0\u4EA4");
        } : item.render ? item.render : function (text) {
          return text;
        }
      });
    }
  });
  return columns;
};

export { setInspectionColumns, setReportColumns };