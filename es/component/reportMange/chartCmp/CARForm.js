function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// car关闭率表单组件
import React, { useState, useEffect } from 'react';
import { Form, Button, Select, DatePicker, Input, AutoComplete, Tooltip } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { carSub } from '../../../service/reportApi';
var Option = Select.Option;

function CARForm(_ref) {
  var onFinish = _ref.onFinish,
      back = _ref.back,
      form = _ref.form,
      supplierOptions = _ref.supplierOptions,
      gategoryOptions = _ref.gategoryOptions,
      model = _ref.model,
      isPerf = _ref.isPerf,
      FREQUENCY = _ref.FREQUENCY,
      pageType = _ref.pageType;

  var _useState = useState('YYYY'),
      _useState2 = _slicedToArray(_useState, 2),
      dateFormat = _useState2[0],
      setDateFormat = _useState2[1];

  var _useState3 = useState('月'),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      subclassOptions = _useState6[0],
      setSubclassOptions = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      gategoryTip = _useState8[0],
      setGategoryTip = _useState8[1];

  var Option = Select.Option;
  var RangePicker = DatePicker.RangePicker;
  var perfDateFormat = 'YYYY-MM-DD';
  useEffect(function () {
    setType(FREQUENCY);
  }, [FREQUENCY]);

  var choice = function choice(val) {
    setType(val);
    if (val === '周') setDateFormat('YYYY-MM');
    if (val === '月') setDateFormat('YYYY');
  };

  var formFinish = function formFinish(value) {
    onFinish(value, dateFormat);
  };

  var gategoryChange = function gategoryChange(value) {
    setGategoryTip(value);

    if (value) {
      carSub(value).then(function (data) {
        if (data) {
          var subList = [];
          subList = data.dataList && data.dataList.filter(function (item) {
            return item !== null && item;
          }).map(function (item, index) {
            return {
              key: index,
              value: item.MATERIAL_SUBCLASS_NAME
            };
          });
          setSubclassOptions(subList);
        }
      });
    }
  };

  var gategoryLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u7269\u6599\u5927\u7C7B:");
  var subclassLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u7269\u6599\u5C0F\u7C7B:");
  var supplierLabel = /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: '15px'
    }
  }, "\u4F9B\u5E94\u5546:");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'right'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    name: "property",
    onFinish: formFinish,
    form: form,
    layout: "inline",
    className: "periodicity",
    style: {
      display: 'flex',
      justifyContent: 'right'
    }
  }, pageType !== 'sqe' && pageType !== 'material' && pageType !== 'spcSqe' && pageType !== 'spcMaterial' && /*#__PURE__*/React.createElement(LeftCircleOutlined, {
    style: {
      margin: '8px 5px',
      fontSize: '25px',
      color: '#fff'
    },
    onClick: back
  }), isPerf ? /*#__PURE__*/React.createElement(Form.Item, {
    name: "TIME",
    format: perfDateFormat,
    rules: [{
      required: true
    }],
    style: {
      width: '28%'
    }
  }, /*#__PURE__*/React.createElement(RangePicker, {
    format: perfDateFormat,
    showTime: {
      hideDisabledOptions: true
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
    title: gategoryTip
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: gategoryLabel,
    name: "MATERIAL_CATEGORY_NAME",
    style: {
      width: '18%'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    allowClear: true,
    onChange: gategoryChange,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, gategoryOptions && gategoryOptions.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item
    }, item));
  })))), /*#__PURE__*/React.createElement(Form.Item, {
    label: subclassLabel,
    name: "MATERIAL_SUBCLASS_NAME",
    style: {
      width: '18%'
    }
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    options: subclassOptions,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  })), /*#__PURE__*/React.createElement(Form.Item, {
    label: supplierLabel,
    name: "SUPPLIER_NAME",
    style: {
      width: '27%'
    }
  }, /*#__PURE__*/React.createElement(AutoComplete, {
    allowClear: true,
    filterOption: function filterOption(input, option) {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, supplierOptions && supplierOptions.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Option, {
      key: index,
      value: item
    }, /*#__PURE__*/React.createElement(Tooltip, {
      title: item
    }, item));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      color: '#fff',
      width: '28%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      margin: '10px 0 10px 10px'
    }
  }, "\u65F6\u95F4\uFF1A"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "FREQUENCY",
    key: 0,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    style: {
      width: '80px'
    },
    placeholder: "\u9009\u62E9",
    onChange: choice
  }, /*#__PURE__*/React.createElement(Option, {
    key: '周'
  }, "\u5468"), /*#__PURE__*/React.createElement(Option, {
    key: '月'
  }, "\u6708"), /*#__PURE__*/React.createElement(Option, {
    key: '年'
  }, "\u5E74"))), type !== '年' && /*#__PURE__*/React.createElement(Form.Item, {
    name: "QUERY_TIME",
    key: 1,
    rules: [{
      required: true
    }]
  }, /*#__PURE__*/React.createElement(DatePicker, {
    picker: type === '周' || type === 'week' ? 'month' : 'year',
    format: type === '周' || type === 'week' ? 'YYYY-MM' : 'YYYY'
  }))))), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return form.submit();
    },
    style: {
      height: '32px',
      margin: '5px'
    }
  }, "\u67E5\u8BE2"));
}

export default CARForm;