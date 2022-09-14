"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../../utils/utils");

var _ParseTable = _interopRequireDefault(require("../../common/table/ParseTable"));

var _FileView = _interopRequireDefault(require("../relationPage/FileView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 表格高阶组件
 */
var TableHoc = function TableHoc(engine) {
  return function (WrappedComponent) {
    return function (props) {
      var model = props.model,
          dispatch = props.dispatch;
      var switchFileFormat = model.switchFileFormat,
          selectedRowKeys = model.selectedRowKeys,
          dataTotal = model.dataTotal,
          panes = model.panes;
      var height = engine.height,
          objectType = engine.objectType,
          rType = engine.rType;
      var faceType = engine.faceType,
          objectNo = engine.objectNo,
          tableName = engine.tableName,
          namespace = engine.namespace,
          objectRelationPage = engine.objectRelationPage,
          relationMenuList = engine.relationMenuList,
          objectB = engine.objectB,
          pageMenus = engine.pageMenus,
          pageNo = engine.pageNo;
      var TILED = panes && panes.length && panes[0].TILED;
      var showSubPage = null;
      var isLodPage = false;

      if (faceType > 1 && objectRelationPage && objectRelationPage.length > 0) {
        showSubPage = function showSubPage(_selectedRows) {
          isLodPage = true;
          dispatch({
            type: 'popup/loadSubpage',
            payload: {
              objectRelationPage: objectRelationPage,
              objectANamespace: namespace,
              objectAData: _selectedRows[0],
              objectA: objectNo || tableName || objectB,
              pageNo: pageNo
            }
          });
        };
      }

      var rowSelection = {
        onChange: function onChange(selectedRowKeys, selectedRows, rightClick) {
          var payload = {
            selectedRowKeys: selectedRowKeys,
            selectedRows: selectedRows
          };
          if (!selectedRows || selectedRows.length !== 1 || rightClick && !model.showTab) payload.showTab = false;

          if (namespace === 'NoticeModalCmp') {
            dispatch({
              type: 'notice/packet',
              payload: payload
            });
          }

          dispatch({
            type: "".concat(namespace, "/packet"),
            payload: payload
          }); // if (faceType > 1 && objectRelationPage && objectRelationPage.length > 0 && payload.showTab !== false) {
          //   dispatch({
          //     type: 'popup/loadSubpage',
          //     payload: {
          //       objectRelationPage,
          //       objectANamespace: namespace,
          //       objectAData: selectedRows[0],
          //       objectA: objectNo || tableName || objectB
          //     }
          //   })
          // }

          /* 暂时禁用主对象菜单验证 */

          /* if (faceType > 1 && objectB) {
            let { relevanceNo, objectNo, objectA, objectAData } = model
            if (!isLodPage && relationMenuList && relationMenuList.length > 0) {
              // 验证关联页菜单disabled
              dispatch({
                type: 'common/verifyPageDisabled',
                payload: {
                  namespace,
                  objectNo,
                  objectA: objectA || objectB,
                  objectAData,
                  hData: selectedRows,
                  relevanceNo,
                  otherParam: relationMenuList
                }
              })
            }
          } else {
            if (pageMenus && pageMenus.length > 0) {
              // 验证主对象菜单disabled
              dispatch({
                type: 'common/verifyPageDisabled',
                payload: {
                  namespace,
                  objectNo: objectNo || tableName,
                  hData: selectedRows,
                  otherParam: pageMenus
                }
              })
            }
          } */

          /* 主对象菜单验证 */
        },
        selectedRowKeys: selectedRowKeys
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-y",
        style: rType && rType !== 'processDetail' && TILED ? {
          minHeight: dataTotal >= 15 ? "".concat(102 + 39 * 15, "px") : dataTotal > 0 && dataTotal < 15 ? "".concat(102 + Number(39 * dataTotal), "px") : 279
        } : null
      }, /*#__PURE__*/_react.default.createElement(WrappedComponent, props), height ? /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: height
        }
      }, /*#__PURE__*/_react.default.createElement(_ParseTable.default, {
        rowSelection: rowSelection,
        engine: engine,
        model: model,
        showSubPage: showSubPage
      })) : /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-grow-y"
      }, switchFileFormat && objectType === 1 ? /*#__PURE__*/_react.default.createElement(_FileView.default, {
        engine: engine,
        model: model,
        rowSelection: rowSelection
      }) : /*#__PURE__*/_react.default.createElement(_ParseTable.default, {
        rowSelection: rowSelection,
        engine: engine,
        model: model,
        showSubPage: showSubPage
      })));
    };
  };
};

var _default = TableHoc;
exports.default = _default;