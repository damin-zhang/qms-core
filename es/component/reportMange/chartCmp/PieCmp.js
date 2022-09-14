function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 饼图组件
import React from 'react';
import { Pie } from '@ant-design/charts';

var PieCmp = function PieCmp(_ref) {
  var data = _ref.data,
      pieColor = _ref.pieColor,
      angleField = _ref.angleField,
      colorField = _ref.colorField,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;

  if (data) {
    config = _objectSpread({
      appendPadding: 8,
      data: data,
      angleField: angleField,
      colorField: colorField,
      color: pieColor,
      radius: 0.8,
      label: {
        // spider
        type: 'spider',
        style: {
          fontSize: 12,
          textAlign: 'center',
          labelHeight: 28,
          fill: '#fff'
        },
        content: '{name}\n{percentage}'
      },
      tooltip: {
        customContent: function customContent(title, data) {
          if (data.length && data[0].data.NAME) {
            return "<div style='margin:10px'>\n                      ".concat(data[0].data.NAME ? "<div>".concat(data[0].data.NAME, "\uFF1A").concat(data[0].data.TOTAL, "</div>") : "<div>".concat(title, "</div>"), "\n                  </div>");
          } else if (data.length) {
            return "<div style='margin:10px'>\n                      <div>".concat(title, ":</div>\n                      <div style='margin:10px'>").concat(data[0].data.TOTAL, "</div>\n                  </div>");
          }
        }
      },
      interactions: [{
        type: 'element-selected'
      }],
      legend: {
        position: 'right',
        offsetX: -30
      }
    }, config);
  }

  var onReadyColumn = function onReadyColumn(plot) {
    plot.on('element:click', function (args) {
      console.log(args);
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pie, _extends({}, config, {
    onReady: onReadyColumn
  })));
};

export default PieCmp;