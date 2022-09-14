function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { Card } from 'antd';
import Engine from '../engine/Engine';
import { judgeModel } from '../../utils/utils';

var TabsCard = /*#__PURE__*/function (_React$Component) {
  _inherits(TabsCard, _React$Component);

  var _super = _createSuper(TabsCard);

  function TabsCard() {
    var _this;

    _classCallCheck(this, TabsCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      noTitleKey: '',
      tabListNoTitle: [],
      contentListNoTitle: []
    };

    _this.onTabChange = function (key, type) {
      _this.setState(_defineProperty({}, type, key));
    };

    return _this;
  }

  _createClass(TabsCard, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var tabListNoTitle = [];
      var contentListNoTitle = {};
      nextProps.relationTabs.forEach(function (i) {
        var obj = {};
        obj.key = i.objectName;
        obj.tab = i.objectName;
        tabListNoTitle.push(obj);
        var engine = i;
        var namespace = i.objectNo + '_' + nextProps.selectedRowKey;
        engine.namespace = namespace;
        engine.menuId = nextProps.selectedRowKey;
        engine.facetype = engine.faceType;
        judgeModel(namespace);
        nextProps.dispatch({
          type: 'tabsCard/NoticeTabsCardPacket',
          payload: {
            namespace: namespace,
            selectedRowKey: nextProps.selectedRowKey,
            objectNo: i.objectNo
          } // type: `${namespace}/packet`,
          // payload: { dataList: [], selectedRowKeys: [], selectedRows: [] }

        });
        var Cmp = Engine(engine);
        contentListNoTitle[i.objectName] = /*#__PURE__*/React.createElement(Cmp, null);
      });
      this.setState({
        noTitleKey: tabListNoTitle[0] ? tabListNoTitle[0].key : ''
      });
      this.setState({
        tabListNoTitle: tabListNoTitle
      });
      this.setState({
        contentListNoTitle: contentListNoTitle
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/React.createElement(Card, {
        style: {
          width: '100%',
          height: '100%'
        },
        bodyStyle: {
          height: 'calc(100% - 42px)',
          boxSizing: 'border-box',
          padding: 0
        },
        tabList: this.state.tabListNoTitle,
        activeTabKey: this.state.noTitleKey,
        onTabChange: function onTabChange(key) {
          _this2.onTabChange(key, 'noTitleKey');
        }
      }, this.state.contentListNoTitle[this.state.noTitleKey]));
    }
  }]);

  return TabsCard;
}(React.Component);

export default TabsCard;