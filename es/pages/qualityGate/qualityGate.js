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

/*
 * @Description: 质量门
 */
import React, { Component } from 'react';
import { queryWaringData } from '../../service/api';
import styles from './index.css';
import classNames from 'classnames';

var qualityGate = /*#__PURE__*/function (_Component) {
  _inherits(qualityGate, _Component);

  var _super = _createSuper(qualityGate);

  function qualityGate() {
    var _this;

    _classCallCheck(this, qualityGate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      list: []
    };
    return _this;
  }

  _createClass(qualityGate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      queryWaringData().then(function (res) {
        if (res) {
          _this2.setState({
            list: res.dataList
          });
        }
      });
      this.timer = setInterval(function () {
        //   if (sessionStorage.getItem('isAuthenticated') === 'true') {
        queryWaringData().then(function (res) {
          if (res) {
            _this2.setState({
              list: res.dataList
            });
          }
        }); //   }
      }, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var list = this.state.list;
      return /*#__PURE__*/React.createElement("div", {
        className: styles.root
      }, list.map(function (item, index) {
        var _classNames;

        return /*#__PURE__*/React.createElement("div", {
          className: styles["item".concat(index + 1)]
        }, /*#__PURE__*/React.createElement("div", {
          key: index,
          className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(styles.btn), true), _defineProperty(_classNames, "".concat(styles.shanshuo), item.state === 'R'), _defineProperty(_classNames, "".concat(styles.warning), item.state === 'Y'), _defineProperty(_classNames, "".concat(styles.error), item.state === 'R'), _classNames))
        }, "M0", index + 1));
      }));
    }
  }]);

  return qualityGate;
}(Component);

export default qualityGate;