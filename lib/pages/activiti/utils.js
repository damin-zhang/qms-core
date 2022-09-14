"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProcessColumns = void 0;

var _react = _interopRequireDefault(require("react"));

var _language = _interopRequireDefault(require("@/locale/language"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var common = _language.default.common;

var getProcessColumns = function getProcessColumns(page, pageNumber, fun, pageNo) {
  var operation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var _localStorage = localStorage,
      menuData = _localStorage.menuData;

  try {
    menuData = JSON.parse(menuData || '[]');
  } catch (err) {
    menuData = [];
  }

  var TodoPage = menuData.filter(function (item) {
    return item.META && item.META.NO === pageNo;
  })[0] || {};
  var _TodoPage$META = TodoPage.META,
      _TodoPage$META$busine = _TodoPage$META.businessField,
      businessField = _TodoPage$META$busine === void 0 ? [] : _TodoPage$META$busine,
      _TodoPage$META$proces = _TodoPage$META.processField,
      processField = _TodoPage$META$proces === void 0 ? [] : _TodoPage$META$proces;
  var colField = [].concat(_toConsumableArray(businessField), _toConsumableArray(processField));
  var columns = [];
  columns = colField.map(function (item) {
    var name = item.name,
        enName = item.enName,
        fieldName = item.fieldName,
        colWidth = item.colWidth;

    if (fieldName === 'title') {
      return {
        title: _utils.isEnglish ? enName || fieldName : name,
        dataIndex: fieldName,
        width: colWidth || 100,
        render: function render(text, record) {
          return /*#__PURE__*/_react.default.createElement("div", {
            style: {
              padding: '0 6px',
              borderRadius: '2px',
              color: '#1890ff',
              cursor: 'pointer'
            },
            onClick: function onClick() {
              return fun(record);
            }
          }, text);
        }
      };
    } else {
      return {
        title: _utils.isEnglish ? enName || fieldName : name,
        dataIndex: fieldName,
        width: colWidth || 100
      };
    }
  });
  return [{
    title: common.index,
    dataIndex: 'index',
    align: 'left',
    width: 50,
    render: function render(text) {
      return text + 1 + (page - 1) * pageNumber;
    }
  }].concat(_toConsumableArray(columns), _toConsumableArray(operation));
};

exports.getProcessColumns = getProcessColumns;