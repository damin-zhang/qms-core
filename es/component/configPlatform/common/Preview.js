function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 通用选择表单
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import Modal from '../../common/drag/DragModal';
import language from '@/locale/language';
import PropertyForm from '../../engine/property/PropertyForm';
import { ergodicRoot } from '../../../utils/utils';
var _language$configPlatf = language.configPlatform,
    buttons = _language$configPlatf.buttons,
    procedures = _language$configPlatf.navMenu.procedures;

var Preview = function Preview(_ref) {
  var dispatch = _ref.dispatch,
      selectData = _ref.selectData,
      _ref$previewFrom = _ref.previewFrom,
      previewFrom = _ref$previewFrom === void 0 ? {} : _ref$previewFrom;
  var onSelect = selectData.onSelect,
      selectedRows = selectData.selectedRows,
      previewVisible = selectData.previewVisible,
      type = selectData.type,
      dataList = selectData.dataList,
      record = selectData.record;
  var peptide = previewFrom.peptide;
  var pageFieldList = dataList;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      icon = _useState2[0],
      setIcon = _useState2[1];

  var peptidePageList = [];

  if (peptide) {
    var treeList = ergodicRoot(dataList, '0', 'PID', 'ID');
    peptidePageList = treeList.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        pageFieldList: item.children || []
      });
    });
    peptidePageList = peptidePageList.map(function (i) {
      if (i.children) delete i.children;
      return i;
    });
  }

  var toogleModal = function toogleModal() {
    dispatch({
      type: 'selectData/packet',
      payload: {
        previewVisible: !previewVisible,
        selectedRowKeys: [],
        selectedRows: []
      }
    });
  };

  var Ok = function Ok() {
    if (selectedRows[0]) onSelect(selectedRows);
    if (type === 'icon') onSelect(icon);
    toogleModal();
  };

  return /*#__PURE__*/React.createElement(Modal, {
    title: buttons.preview,
    visible: previewVisible,
    onOk: Ok,
    onCancel: toogleModal,
    zIndex: 1010,
    height: 500,
    footer: true
  }, /*#__PURE__*/React.createElement(PropertyForm, _extends({
    pageFieldList: pageFieldList,
    peptidePageList: peptidePageList,
    initVal: record,
    rType: "no"
  }, previewFrom)));
};

function mapStateToProps(_ref2) {
  var selectData = _ref2.selectData;
  return {
    selectData: selectData
  };
}

export default connect(mapStateToProps)(Preview);