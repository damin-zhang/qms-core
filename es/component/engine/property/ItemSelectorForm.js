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
 * @Description: 动态表单-引用对象编辑器表单
 */
import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import Search from '../../common/search/Search';
import Table from '../../common/table/ParseTable';
import { setColumn } from '../../../utils/columnUtil';
import { commonApi } from '../../../service/applicationApi';
import { implclassMap } from '../../../utils/mapParams';

var replaceDBSql = function replaceDBSql(form) {
  var sql = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var objectAData = arguments.length > 2 ? arguments[2] : undefined;
  return sql.split('${').map(function (item) {
    var replaceArray = item.split("}");

    if (replaceArray[0].indexOf('OBJECTA.') === 0) {
      replaceArray.splice(0, 1, objectAData[replaceArray[0].slice(6)]);
    } else {
      var value = form.getFieldValue(replaceArray[0]);

      if (value) {
        replaceArray.splice(0, 1, value);
      }
    }

    return replaceArray.join('');
  }).reduce(function (total, value) {
    return total += value;
  });
};

var ItemSelectorForm = function ItemSelectorForm(_ref, ref) {
  var editParams = _ref.editParams,
      form = _ref.form,
      objectAData = _ref.objectAData,
      no = _ref.no;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      keys = _useState2[0],
      setKeys = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      rows = _useState4[0],
      setRows = _useState4[1];

  var _useState5 = useState({
    dataList: [],
    gridFieldList: [],
    objectName: ''
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      modelData = _useState6[0],
      setModelData = _useState6[1];

  var _useState7 = useState(1),
      _useState8 = _slicedToArray(_useState7, 2),
      page = _useState8[0],
      setPage = _useState8[1];

  var selectChange = function selectChange(keys, rows) {
    setKeys(keys);
    setRows(rows);
  };

  useEffect(function () {
    if (editParams) {
      var objectNo = editParams.objectNo,
          sql = editParams.sql;
      commonApi({
        objectNo: objectNo,
        condition: replaceDBSql(form, sql, objectAData),
        page: page
      }).then(function (res) {
        if (res) {
          var dataList = res.dataList,
              gridFieldList = res.gridFieldList,
              objectName = res.objectName;
          var modelDataList = modelData.dataList.concat(dataList);
          setModelData({
            dataList: modelDataList,
            gridFieldList: gridFieldList,
            objectName: objectName
          });
          setKeys([]);
          setRows([]);
        }
      });
    } else {
      setModelData({
        dataList: [],
        gridFieldList: [],
        objectName: ''
      });
    }
  }, [editParams, form, objectAData, page]);

  var requestData = function requestData(page) {
    setPage(page);
  };

  useImperativeHandle(ref, function () {
    return {
      Ok: function Ok() {
        var result = {};

        if (rows.length > 0) {
          if (editParams.canMultipleChoice) {
            var rowFieldData = '';
            rows.forEach(function (row, index) {
              if (index > 0) {
                rowFieldData += ',';
              }

              rowFieldData += row[editParams.mapFields[0].sfield];
            });
            result[no] = rowFieldData;
          } else {
            editParams.mapFields.forEach(function (item) {
              result[item.tfield] = rows[0][item.sfield];
            });
          }
        }

        return result;
      }
    };
  });

  var onSearch = function onSearch(queryWord) {
    var objectNo = editParams.objectNo,
        sql = editParams.sql;
    commonApi({
      queryWord: queryWord,
      objectNo: objectNo,
      condition: replaceDBSql(form, sql, objectAData),
      page: 1
    }).then(function (res) {
      if (res) {
        setModelData(_objectSpread(_objectSpread({}, modelData), {}, {
          dataList: res.dataList
        }));
      }
    });
  };

  var model = {
    requestData: requestData,
    page: page,
    dataList: modelData.dataList
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Search, {
    onSearch: onSearch,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '560px',
      marginTop: '5px'
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: setColumn(modelData.gridFieldList),
    rowSelection: {
      type: editParams.canMultipleChoice ? 'checkbox' : 'radio',
      onChange: selectChange,
      selectedRowKeys: keys
    },
    model: model
  })));
};

export default forwardRef(ItemSelectorForm);