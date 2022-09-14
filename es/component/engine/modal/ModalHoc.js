function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Description: 弹窗高阶组件
 */
import React, { useRef, useEffect, useState } from 'react'; // import Modal from '../../common/drag/DragModal'

import { message, Button } from 'antd';
import Modal from '../../common/drag/DragModal';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import language from '@/locale/language';
import { confirmBtn, clickBtn } from '../../../utils/buttonFunc';
import styles from '../button/index.css';
import { isEnglish } from '../../../utils/utils';
var _language$common = language.common,
    ok = _language$common.ok,
    cancel = _language$common.cancel,
    save_error = _language$common.save_error,
    close = _language$common.close;

var ModalHoc = function ModalHoc(engine) {
  return function (WrappedComponent) {
    var ChildCmp = function ChildCmp(props) {
      var childRef = useRef();
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
      caption = caption ? caption : isEnglish ? enName : name || 'undefined';
      var model = props.model,
          dispatch = props.dispatch;

      var _ref = clickedMenu.params || {},
          _ref$otherMenus = _ref.otherMenus,
          otherMenus = _ref$otherMenus === void 0 ? [] : _ref$otherMenus;

      var clientHeight = document.documentElement.clientHeight;

      var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          isFull = _useState2[0],
          setFull = _useState2[1];

      var _useState3 = useState(''),
          _useState4 = _slicedToArray(_useState3, 2),
          modalWrapperTransformOld = _useState4[0],
          setModalWrapperTransformOld = _useState4[1];

      var _useState5 = useState(false),
          _useState6 = _slicedToArray(_useState5, 2),
          okDisabled = _useState6[0],
          setOkDisabled = _useState6[1];

      useEffect(function () {
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
              confirmBtn({
                values: clickedMenu.values
              }, clickedMenu, objectANamespace, onCancel);
            } else {
              message.warning(save_error);
            }

            break;

          case 'batchEdit':
            if (batchEditHasError) {
              message.warning(save_error);
            } else {
              childRef.current.Ok();
            }

            break;

          case 'downLoad':
            confirmBtn({
              values: clickedMenu.values
            }, clickedMenu, namespace);
            onCancel();
            break;

          default:
            confirmBtn({
              values: clickedMenu.values
            }, clickedMenu, namespace, pageId, tabCountData, onCancel);
        }
      };

      var footer = [];

      if (otherMenus && otherMenus.length > 0) {
        footer = otherMenus.map(function (item, index) {
          return /*#__PURE__*/React.createElement(Button, {
            onClick: function onClick() {
              var caption = item.NAME,
                  wType = item.WTYPE,
                  objectNo = item.OBJECTNO,
                  mNo = item.MNO,
                  implType = item.IMPLTYPE,
                  params = item.PARAMS,
                  reqParam = item.REQPARAM,
                  id = item.ID;
              clickBtn({
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
        footer.push( /*#__PURE__*/React.createElement(Button, {
          type: "primary",
          onClick: onCancel
        }, close));
      } else {
        if (wType === 'objectColumnPage' || wType === 'browseFiles' || wType === 'detailForm' || wType === 'spcControlChart' || wType === 'imagePreview') {
          footer = null;
        } else {
          footer.push( /*#__PURE__*/React.createElement(Button, {
            onClick: onCancel
          }, cancel), /*#__PURE__*/React.createElement(Button, {
            type: "primary",
            onClick: onOk,
            disabled: okDisabled
          }, ok));
        }
      }

      return /*#__PURE__*/React.createElement(Modal, {
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
      }, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: fullInput,
        className: styles.fullButton,
        icon: isFull ? /*#__PURE__*/React.createElement(FullscreenExitOutlined, null) : /*#__PURE__*/React.createElement(FullscreenOutlined, null)
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          minHeight: isFull ? clientHeight - 138 : height,
          height: height
        }
      }, wType === 'objectPropertyPage' || wType === 'otherObjectPropertyPage' || wType === 'batchEdit' || wType === 'dataImport' || wType === 'batchMaintain' || wType === 'classNodeObjectPropertyNo' ? /*#__PURE__*/React.createElement(WrappedComponent, _extends({
        ref: childRef
      }, props, {
        onCancel: onCancel
      })) : /*#__PURE__*/React.createElement(WrappedComponent, props)));
    };

    return ChildCmp;
  };
};

export default ModalHoc;