"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _DragModal = _interopRequireDefault(require("../../common/drag/DragModal"));

var _icons = require("@ant-design/icons");

var _language = _interopRequireDefault(require("@/locale/language"));

var _buttonFunc = require("../../../utils/buttonFunc");

var _index = _interopRequireDefault(require("../button/index.css"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _language$common = _language.default.common,
    ok = _language$common.ok,
    cancel = _language$common.cancel,
    save_error = _language$common.save_error,
    close = _language$common.close;

var ModalHoc = function ModalHoc(engine) {
  return function (WrappedComponent) {
    var ChildCmp = function ChildCmp(props) {
      var childRef = (0, _react.useRef)();
      var width = engine.width,
          height = engine.height,
          name = engine.name,
          enName = engine.enName,
          namespace = engine.namespace,
          menuId = engine.menuId,
          wType = engine.wType,
          objectANamespace = engine.objectANamespace,
          _engine$clickedMenu = engine.clickedMenu,
          clickedMenu = _engine$clickedMenu === void 0 ? {} : _engine$clickedMenu,
          tiled = engine.tiled,
          peptide = engine.peptide;
      var caption = engine.caption;
      caption = caption ? caption : _utils.isEnglish ? enName : name || 'undefined';
      var model = props.model,
          dispatch = props.dispatch;

      var _ref = clickedMenu.params || {},
          _ref$otherMenus = _ref.otherMenus,
          otherMenus = _ref$otherMenus === void 0 ? [] : _ref$otherMenus;

      var clientHeight = document.documentElement.clientHeight;

      var _useState = (0, _react.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          isFull = _useState2[0],
          setFull = _useState2[1];

      var _useState3 = (0, _react.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          modalWrapperTransformOld = _useState4[0],
          setModalWrapperTransformOld = _useState4[1];

      var _useState5 = (0, _react.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          okDisabled = _useState6[0],
          setOkDisabled = _useState6[1];

      (0, _react.useEffect)(function () {
        if (model[menuId]) {
          setFull(false);
        }
      }, [model, menuId]);

      var fullInput = function fullInput() {
        setFull(!isFull);
      };

      var onCancel = function onCancel() {
        var payload = _defineProperty({}, menuId, false);

        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: payload
        });
      };

      var onOk = function onOk() {
        setOkDisabled(true);
        setTimeout(function () {
          setOkDisabled(false);
        }, 3000);
        var clickedMenu = model.clickedMenu,
            namespace = model.namespace,
            selectedRows = model.selectedRows,
            batchEditHasError = model.batchEditHasError,
            tabCountData = model.tabCountData;
        var pageId = engine.pageId;

        switch (wType) {
          case 'objectPropertyPage':
          case 'otherObjectPropertyPage':
          case 'classNodeObjectPropertyNo':
          case 'batchMaintain':
          case 'dataImport':
            childRef.current.Ok();
            break;

          case 'queryObjectView':
            if (selectedRows.length > 0) {
              clickedMenu.values.hData = selectedRows;
              (0, _buttonFunc.confirmBtn)({
                values: clickedMenu.values
              }, clickedMenu, objectANamespace, onCancel);
            } else {
              _antd.message.warning(save_error);
            }

            break;

          case 'batchEdit':
            if (batchEditHasError) {
              _antd.message.warning(save_error);
            } else {
              childRef.current.Ok();
            }

            break;

          case 'downLoad':
            (0, _buttonFunc.confirmBtn)({
              values: clickedMenu.values
            }, clickedMenu, namespace);
            onCancel();
            break;

          default:
            (0, _buttonFunc.confirmBtn)({
              values: clickedMenu.values
            }, clickedMenu, namespace, pageId, tabCountData, onCancel);
        }
      };

      var footer = [];

      if (otherMenus && otherMenus.length > 0) {
        footer = otherMenus.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement(_antd.Button, {
            onClick: function onClick() {
              var caption = item.NAME,
                  wType = item.WTYPE,
                  objectNo = item.OBJECTNO,
                  mNo = item.MNO,
                  implType = item.IMPLTYPE,
                  params = item.PARAMS,
                  reqParam = item.REQPARAM,
                  id = item.ID;
              (0, _buttonFunc.clickBtn)({
                id: id,
                caption: caption,
                wType: wType,
                objectNo: objectNo,
                mNo: mNo,
                implType: implType,
                params: params,
                reqParam: reqParam
              }, engine, model);
            },
            key: index
          }, item.NAME);
        });
      }

      if (wType === 'linkPage' || wType === 'report' || wType === 'objectRelationPage' || wType === 'ExternalFile' || wType === 'detailRelationPage') {
        footer.push( /*#__PURE__*/_react.default.createElement(_antd.Button, {
          type: "primary",
          onClick: onCancel
        }, close));
      } else {
        if (wType === 'objectColumnPage' || wType === 'browseFiles' || wType === 'detailForm' || wType === 'spcControlChart' || wType === 'imagePreview') {
          footer = null;
        } else {
          footer.push( /*#__PURE__*/_react.default.createElement(_antd.Button, {
            onClick: onCancel
          }, cancel), /*#__PURE__*/_react.default.createElement(_antd.Button, {
            type: "primary",
            onClick: onOk,
            disabled: okDisabled
          }, ok));
        }
      }

      return /*#__PURE__*/_react.default.createElement(_DragModal.default, {
        namespace: namespace,
        destroyOnClose: true,
        centered: true,
        maskClosable: false,
        onCancel: onCancel,
        title: caption,
        visible: model[menuId],
        width: isFull ? '100%' : width || 1000,
        saveDistance: 200,
        mask: wType === 'linkPage' || wType === 'queryobjectView' || wType === 'browseFiles' ? false : true,
        footer: footer,
        noFooter: !footer,
        peptideFormPadding: peptide && !tiled ? true : false
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        type: "primary",
        onClick: fullInput,
        className: _index.default.fullButton,
        icon: isFull ? /*#__PURE__*/_react.default.createElement(_icons.FullscreenExitOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.FullscreenOutlined, null)
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          minHeight: isFull ? clientHeight - 138 : height,
          height: height
        }
      }, wType === 'objectPropertyPage' || wType === 'otherObjectPropertyPage' || wType === 'batchEdit' || wType === 'dataImport' || wType === 'batchMaintain' || wType === 'classNodeObjectPropertyNo' ? /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
        ref: childRef
      }, props, {
        onCancel: onCancel
      })) : /*#__PURE__*/_react.default.createElement(WrappedComponent, props)));
    };

    return ChildCmp;
  };
};

var _default = ModalHoc;
exports.default = _default;