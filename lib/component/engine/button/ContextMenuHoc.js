"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _umi = require("umi");

var Icon = _interopRequireWildcard(require("@ant-design/icons"));

var _reactSvg = require("react-svg");

var _buttonFunc = require("../../../utils/buttonFunc");

var _utils = require("../../../utils/utils");

var _applicationApi = require("../../../service/applicationApi");

var _dataToFormat = require("../../../utils/dataToFormat");

var _uploadApi = require("../../../service/uploadApi");

require("./index.css");

var _language = _interopRequireDefault(require("@/locale/language"));

var _queryDataApi = require("../../../service/queryDataApi");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var quality_inspection_entry = _language.default.menu.quality_inspection_entry,
    _language$table = _language.default.table,
    export_selected_data = _language$table.export_selected_data,
    export_table_data = _language$table.export_table_data,
    export_all_data = _language$table.export_all_data,
    copy_cell_data = _language$table.copy_cell_data,
    copy_select_data = _language$table.copy_select_data,
    copy_success = _language$table.copy_success,
    cell_data_null = _language$table.cell_data_null,
    confirm_export_data = _language$table.confirm_export_data,
    confirm_export_all_data = _language$table.confirm_export_all_data,
    table_menu = _language$table.table_menu,
    download_file = _language$table.download_file,
    export_failed = _language.default.message.menu.export_failed;

var svgDir = require.context('../../../assets/icon/');

var Item = _antd.Menu.Item,
    SubMenu = _antd.Menu.SubMenu,
    Divider = _antd.Menu.Divider;

var _default = function _default(_ref) {
  var menus = _ref.menus,
      model = _ref.model,
      engine = _ref.engine,
      canExportData = _ref.canExportData,
      isTable = _ref.isTable;
  var selectedRows = model.selectedRows;
  /* 判断是否有文件编辑器字段 */

  var hasFileField = false;
  var gridFieldList = engine.objectGrid.gridFieldList;
  gridFieldList.forEach(function (item) {
    if (item.editor === 'FileSelector') hasFileField = true;
  });
  return function () {
    var getMenus = function getMenus() {
      var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var parentId = arguments.length > 1 ? arguments[1] : undefined;
      var res = [];
      menus.forEach(function (item, index) {
        if (item.pId === parentId) {
          var id = item.id,
              _item$disabled = item.disabled,
              disabled = _item$disabled === void 0 ? false : _item$disabled,
              icon = item.icon,
              name = item.name,
              enName = item.enName,
              params = item.params,
              bg_color = item.bg_color;
          var caption = _utils.isEnglish ? enName : name;
          var newIcon = null;
          var IconView = null;

          if (icon) {
            if (icon.indexOf('third-') != -1) {
              //筛选第三方图标库的icons
              newIcon = icon.substring(6); //将第三方图标库标识去掉
            } else {
              icon.substring(0, 1).toUpperCase() + icon.substring(1, icon.length), _readOnlyError("icon");
              IconView = Icon["".concat(icon, "Outlined")];
            }
          }

          var title = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon && (newIcon ? /*#__PURE__*/_react.default.createElement(_reactSvg.ReactSVG, {
            className: "eventThirdIcons",
            src: svgDir("./".concat(newIcon, ".svg"))
          }) : IconView && /*#__PURE__*/_react.default.createElement(IconView, null)), /*#__PURE__*/_react.default.createElement("span", {
            style: {
              marginLeft: icon ? '8px' : 0
            }
          }, caption));

          if (item.mType === 1) {
            res.push( /*#__PURE__*/_react.default.createElement(SubMenu, {
              key: index,
              title: title,
              popupClassName: "contextSubMenu"
            }, getMenus(menus, id)));
          } else if (!disabled && params && params.scriptValue) {
            var value = false;

            try {
              value = eval("(record,selectedRows,userName,employeeName)=>{".concat(params.scriptValue, "}"))(selectedRows[0], selectedRows, localStorage.userName, localStorage.employeeName);
            } catch (error) {
              _antd.message.error("".concat(name, " \u811A\u672C\u8FD0\u884C\u5F02\u5E38\uFF01"));

              console.log("".concat(error.name, " ").concat(error.message));
            }

            value && res.push( /*#__PURE__*/_react.default.createElement(Item, {
              key: index,
              onClick: clickMenu(item),
              style: {
                background: bg_color,
                color: '#fff'
              }
            }, title));
          } else {
            !disabled && res.push( /*#__PURE__*/_react.default.createElement(Item, {
              key: index,
              onClick: clickMenu(item),
              style: {
                background: bg_color,
                color: '#fff'
              }
            }, title));
          }
        }
      });
      return res;
    };

    var clickMenu = function clickMenu(item) {
      return function () {
        (0, _buttonFunc.clickBtn)(item, engine, model);
      };
    };
    /**
     * @param {number} type 导出类型：0选中，1表格
     */


    var exportData = function exportData(type) {
      return function () {
        var selectedRows = model.selectedRows,
            tableName = model.tableName,
            dataList = model.dataList;
        var data = type ? dataList : selectedRows;
        var dataLen = data.length;
        (0, _utils.confirm)({
          title: confirm_export_data + dataLen,
          onOk: function onOk() {
            var gridFieldList = engine.objectGrid.gridFieldList;
            var fieldLen = gridFieldList.length;
            var noList = [];
            var dateLen = [];
            var result = '';

            for (var i = 0; i < fieldLen; i++) {
              var _gridFieldList$i = gridFieldList[i],
                  name = _gridFieldList$i.name,
                  enName = _gridFieldList$i.enName,
                  fieldName = _gridFieldList$i.fieldName,
                  editor = _gridFieldList$i.editor,
                  editParams = _gridFieldList$i.editParams;
              var caption = _utils.isEnglish ? enName : name;
              result += "\"".concat(caption, "\",");
              noList.push(fieldName);

              if (editor === 'DateTime') {
                var _JSON$parse = JSON.parse(JSON.stringify(editParams) || '{}'),
                    format = _JSON$parse.format;

                dateLen.push(format.length);
              } else {
                dateLen.push(false);
              }
            }

            result += "\n";

            for (var _i = 0; _i < dataLen; _i++) {
              var _loop = function _loop(j) {
                var item = '';

                if (noList[j] === '{INDEX}') {
                  item = _i + 1;
                } else {
                  item = data[_i][noList[j]];
                }

                var _gridFieldList$j = gridFieldList[j],
                    editor = _gridFieldList$j.editor,
                    editParams = _gridFieldList$j.editParams;

                var _ref2 = editParams || {},
                    _ref2$values = _ref2.values,
                    values = _ref2$values === void 0 ? [] : _ref2$values;

                if (editor === 'MapValueList') {
                  if (item && values.length) {
                    var vItem = values.find(function (value) {
                      return value.key === item;
                    }) || {};
                    item = vItem.name;
                  }
                }

                if (!dateLen[j]) {
                  var str = item ? item + '' : '';
                  str && (str = str.replace(/[\r\n\t]/g, ''));
                  result += "\"".concat(str || '', "\",");
                } else {
                  var _str = (item || '').slice(0, dateLen[j]) + '';

                  _str && (_str = _str.replace(/[\r\n\t]/g, ''));
                  result += "\"".concat(_str, "\",");
                }
              };

              for (var j = 0; j < fieldLen; j++) {
                _loop(j);
              }

              result += "\n";
            }

            var blob = new Blob([result], {
              type: 'text/plain;charset=utf-8'
            }); //解决中文乱码问题

            blob = new Blob([String.fromCharCode(0xfeff), blob], {
              type: blob.type
            });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "".concat(tableName, "_").concat((0, _dataToFormat.dateToFormat)(new Date()), ".csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        });
      };
    }; // 导出全部数据


    var exportAllData = function exportAllData() {
      (0, _utils.confirm)({
        title: confirm_export_all_data,
        onOk: function onOk() {
          var objectNo = model.objectNo,
              tableName = model.tableName,
              queryWord = model.queryWord,
              sortFields = model.sortFields,
              _model$normalSearch = model.normalSearch,
              normalSearch = _model$normalSearch === void 0 ? true : _model$normalSearch,
              relevanceNo = model.relevanceNo,
              objectA = model.objectA,
              objectAData = model.objectAData,
              searchFields = model.searchFields,
              condition = model.condition;
          var objectGrid = engine.objectGrid;
          var params = {
            condition: condition,
            page: 1,
            objectGridNo: objectGrid.no,
            objectNo: objectNo || tableName,
            tableName: tableName,
            queryWord: queryWord,
            sortFields: sortFields,
            searchFields: searchFields,
            normalSearch: normalSearch
          };

          if (relevanceNo) {
            params.relevanceNo = relevanceNo;
            params.objectA = objectA;
            params.objectAData = objectAData;
          }

          (0, _utils.showLoading)();
          (0, _applicationApi.commonExportData)(params).then(function (res) {
            if (res && res.flag === false) {
              _antd.message.warn(export_failed);
            }
          }).catch(function (err) {});
        }
      });
    }; // 复制单元格数据


    var copyCellData = function copyCellData() {
      var selectedCellData = model.selectedCellData;
      copyData(selectedCellData);
    }; // 复制选中行数据


    var copySelectData = function copySelectData() {
      var selectedRowsData = model.selectedRowsData;
      copyData(selectedRowsData);
    }; // 复制内容到粘贴板


    var copyData = function copyData(data) {
      if (data === '') {
        _antd.message.error(cell_data_null, 1);
      } else {
        var textareaDom = document.createElement('textarea');
        textareaDom.value = data;
        document.body.appendChild(textareaDom);
        textareaDom.select();
        document.execCommand('Copy');
        document.body.removeChild(textareaDom);

        _antd.message.success(copy_success, 1);
      }
    }; // 查看全部数据


    var showAllData = function showAllData() {
      var objectNo = model.objectNo,
          queryWord = model.queryWord,
          relevanceNo = model.relevanceNo,
          objectA = model.objectA,
          objectAData = model.objectAData,
          _model$condition = model.condition,
          condition = _model$condition === void 0 ? '' : _model$condition;
      var params = {
        condition: condition,
        queryWord: queryWord,
        tableName: objectNo // page: 1,
        // pageSize: 20,
        // implclass: implclassMap.queryAllData

      };

      if (relevanceNo) {
        params = _objectSpread(_objectSpread({}, params), {}, {
          objectA: objectA,
          objectAData: objectAData,
          relevanceNo: relevanceNo
        });
      }

      (0, _queryDataApi.commonSingleQueryNoPaging)(params).then(function (res) {
        _antd.message.info('行记录总数：' + res.dataList.length);

        var dva = (0, _umi.getDvaApp)();
        var namespace = model.namespace;

        dva._store.dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            dataList: res.dataList
          }
        });
      }).catch(function (err) {});
    }; // 下载文件


    var downloadFile = function downloadFile() {
      var objectNo = model.objectNo,
          selectedRows = model.selectedRows;
      var hData = [];
      selectedRows.forEach(function (item) {
        if (item.FLOCATION) hData.push(item);
      });

      if (hData.length === 0) {
        var msg = _utils.isEnglish ? "No files to download" : "\u6CA1\u6709\u53EF\u4E0B\u8F7D\u7684\u6587\u4EF6";

        _antd.message.warning(msg);

        return;
      }

      (0, _uploadApi.downloadFiles)({
        objectNo: objectNo,
        hData: hData
      });
    };

    var showEnterInputPage = function showEnterInputPage() {
      var dva = (0, _umi.getDvaApp)();
      var namespace = model.namespace;

      dva._store.dispatch({
        type: "".concat(namespace, "/packet"),
        payload: {
          visibleEnterInputPage: true
        }
      });
    };

    return /*#__PURE__*/_react.default.createElement(_antd.Menu, {
      className: "contextMenu",
      onContextMenu: function onContextMenu(event) {
        event.preventDefault();
        return false;
      }
    }, (model.tableName === 'ESSENTIAL_INFORMA' || model.tableName === 'OQC_CHECKLIST') && model.tabActiveKey === '1' && /*#__PURE__*/_react.default.createElement(Item, {
      onClick: showEnterInputPage
    }, quality_inspection_entry), getMenus(menus, 0));
  };
};

exports.default = _default;