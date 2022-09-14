function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
 * @Descripttion: 回车录入相关组件
 */
import React from 'react';
import { Button, Input, message, Form, Dropdown, Menu, Switch, Tooltip, Upload, Tag } from 'antd';
import { InboxOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import lodash from 'lodash';
import { commonApi } from '../../../service/applicationApi';
import { showLoading, formatFillString, confirm, generatorTableKey, isEnglish } from '../../../utils/utils';
import DragModal from '../../common/drag/DragModal';
import styles from './enterInput.less';
import language from '@/locale/language';
var _language$enterInput = language.enterInput,
    _language$enterInput$ = _language$enterInput.message,
    arabic_numerals_message = _language$enterInput$.arabic_numerals_message,
    start_input_message = _language$enterInput$.start_input_message,
    inspection_completed_message = _language$enterInput$.inspection_completed_message,
    input_complete_message = _language$enterInput$.input_complete_message,
    select_file_prompt1 = _language$enterInput$.select_file_prompt1,
    select_file_prompt2 = _language$enterInput$.select_file_prompt2,
    please_complete_the_entry = _language$enterInput$.please_complete_the_entry,
    cleared_successfully = _language$enterInput$.cleared_successfully,
    sampling_number_of_inspection_objects = _language$enterInput$.sampling_number_of_inspection_objects,
    _language$enterInput$2 = _language$enterInput.button,
    clear_menu = _language$enterInput$2.clear_menu,
    clear_all = _language$enterInput$2.clear_all,
    clear_selection = _language$enterInput$2.clear_selection,
    batch_menu = _language$enterInput$2.batch_menu,
    batch_input_ok = _language$enterInput$2.batch_input_ok,
    batch_input_ng = _language$enterInput$2.batch_input_ng,
    import_cache = _language$enterInput$2.import_cache,
    switch_horizontal = _language$enterInput$2.switch_horizontal,
    switch_vertical = _language$enterInput$2.switch_vertical,
    start_input = _language$enterInput$2.start_input,
    refresh_cache = _language$enterInput$2.refresh_cache,
    save_input = _language$enterInput$2.save_input,
    _language$enterInput$3 = _language$enterInput.tooltip,
    collapse_selected_row = _language$enterInput$3.collapse_selected_row,
    expand_selected_row = _language$enterInput$3.expand_selected_row,
    scroll_to_top = _language$enterInput$3.scroll_to_top,
    scroll_to_bottom = _language$enterInput$3.scroll_to_bottom,
    no_control_sample_number = _language$enterInput$3.no_control_sample_number,
    the_number_of_qualified = _language$enterInput$3.the_number_of_qualified,
    unqualified_number = _language$enterInput$3.unqualified_number,
    total_number_of_samples = _language$enterInput$3.total_number_of_samples,
    _language$enterInput$4 = _language$enterInput.confirm,
    prompt = _language$enterInput$4.prompt,
    re_input_all = _language$enterInput$4.re_input_all,
    re_input_object = _language$enterInput$4.re_input_object,
    continue_input_next = _language$enterInput$4.continue_input_next,
    input_next = _language$enterInput$4.input_next,
    _language$enterInput$5 = _language$enterInput.placeholder,
    sample_sn = _language$enterInput$5.sample_sn,
    detection_value = _language$enterInput$5.detection_value,
    import_cache_title = _language$enterInput.modal.import_cache_title,
    inspectObjectFields = _language$enterInput.inspectObjectFields,
    inspectObjectTip = _language$enterInput.inspectObjectTip;
var Dragger = Upload.Dragger;

function isNumber(val) {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数

  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数

  if (regPos.test(val) || regNeg.test(val)) return true;
  return false;
}

function subFloat(a, b) {
  if (a == b) return '';
  var r1, r2, m;

  try {
    r1 = a.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = b.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2) + 1);
  var num = (a * m - b * m) / m;
  var numStr = num.toString();

  if (numStr.includes('.') && numStr.split('.')[1].length >= 6) {
    num = parseFloat(num.toFixed(6));
  }

  return '：' + num;
}

var calculation = function calculation(value, max, min, upper, lower) {
  var RESULTREMARK = null;

  if (isNumber(max) && isNumber(min) && upper && lower) {
    if (isNumber(lodash.toNumber(value))) {
      if (upper === '<' || upper === '<=') {
        if (upper === '<') {
          if (lower === '>') {
            RESULTREMARK = value >= max ? "\u5927\u4E8E\u4E0A\u9650".concat(subFloat(value, max)) : value <= min ? "\u5C0F\u4E8E\u4E0B\u9650".concat(subFloat(min, value)) : 'OK';
          } else {
            RESULTREMARK = value >= max ? "\u5927\u4E8E\u4E0A\u9650".concat(subFloat(value, max)) : value < min ? "\u5C0F\u4E8E\u4E0B\u9650".concat(subFloat(min, value)) : 'OK';
          }
        } else {
          if (lower === '>') {
            RESULTREMARK = value > max ? "\u5927\u4E8E\u4E0A\u9650".concat(subFloat(value, max)) : value <= min ? "\u5C0F\u4E8E\u4E0B\u9650".concat(subFloat(min, value)) : 'OK';
          } else {
            RESULTREMARK = value > max ? "\u5927\u4E8E\u4E0A\u9650".concat(subFloat(value, max)) : value < min ? "\u5C0F\u4E8E\u4E0B\u9650".concat(subFloat(min, value)) : 'OK';
          }
        }
      } else {
        if (lower === '>') {
          RESULTREMARK = value > max ? "\u5927\u4E8E\u4E0A\u9650".concat(subFloat(value, max)) : value < min ? "\u5C0F\u4E8E\u4E0B\u9650".concat(subFloat(min, value)) : 'OK';
        } else {
          RESULTREMARK = value > max ? "\u5927\u4E8E\u4E0A\u9650".concat(subFloat(value, max)) : value < min ? "\u5C0F\u4E8E\u4E0B\u9650".concat(subFloat(min, value)) : 'OK';
        }
      }
    } else {
      message.warn(arabic_numerals_message);
    }
  } else {
    if (value === '合格' || value.toUpperCase() == 'OK') {
      RESULTREMARK = 'OK';
    } else {
      RESULTREMARK = 'NG';
    }
  }

  return RESULTREMARK;
};

var EnterInput = /*#__PURE__*/function (_React$Component) {
  _inherits(EnterInput, _React$Component);

  var _super = _createSuper(EnterInput);

  function EnterInput(props) {
    var _this;

    _classCallCheck(this, EnterInput);

    _this = _super.call(this, props);

    _this.getPositionY = function (x) {
      var data = _this.state.data;
      var y = 0;

      for (var i = 0; i < data[x].length; i++) {
        var item = data[x][i];

        if (item.INSRESULT === '') {
          y = i;
          break;
        }
      }

      return y;
    };

    _this.onPressEnter = function (e) {
      var value = e.target.value.trim();
      var x = _this.x;
      var y = _this.y;
      var _this$state = _this.state,
          data = _this$state.data,
          clickSubmit = _this$state.clickSubmit,
          sampleSn = _this$state.sampleSn,
          horizontalEntryChecked = _this$state.horizontalEntryChecked;

      if (clickSubmit) {
        message.warn(inspection_completed_message);
        return;
      }

      if (!data || data.length === 0) {
        message.warn(start_input_message);
        return;
      }

      if (value) {
        var colLen = data[x].length;
        var _this$inspectObjects$ = _this.inspectObjects[x],
            MAXVAL = _this$inspectObjects$.MAXVAL,
            MINVAL = _this$inspectObjects$.MINVAL,
            UPPERLIMITCOMPARISON = _this$inspectObjects$.UPPERLIMITCOMPARISON,
            LOWERLIMITCOMPARISON = _this$inspectObjects$.LOWERLIMITCOMPARISON,
            SAMPLNUM = _this$inspectObjects$.SAMPLNUM,
            NAME = _this$inspectObjects$.NAME,
            IS_DR = _this$inspectObjects$.IS_DR,
            TARVALUE = _this$inspectObjects$.TARVALUE;
        var IS_DPD = _this.inspectObjects[x].IS_DPD;
        var RESULTREMARK;

        if (IS_DPD === null) {
          IS_DPD = 0;
        }

        if (IS_DPD === 1) {
          RESULTREMARK = '';
        } else {
          RESULTREMARK = calculation(value, MAXVAL, MINVAL, UPPERLIMITCOMPARISON, LOWERLIMITCOMPARISON);
        }

        var valueNumber = lodash.toNumber(value);

        if (typeof valueNumber === 'number' && !Number.isNaN(valueNumber)) {
          value = valueNumber;
        }
        /**
         * IS_DR为1，允许无限输入
         * IS_DR为0，SAMPLNUM抽样数量>0，按照抽样数量渲染
         */


        if (IS_DR && IS_DR === 1) {
          // 流水号格式化
          var SAMPLE_NUMBER = formatFillString(y + 1, 3);
          data[x][y] = {
            SAMPLE_NUMBER: SAMPLE_NUMBER,
            NAME: NAME,
            INSPECTION_OBJECT_NAME: NAME,
            INSRESULT: value,
            SAMPLESN: sampleSn,
            RESULTREMARK: RESULTREMARK,
            JMRESULT: RESULTREMARK === '合格' || RESULTREMARK === 'OK' ? 'Y' : RESULTREMARK ? 'N' : IS_DPD === 1 ? 'I' : 'W'
          };

          _this.props.params.mapFields.forEach(function (f) {
            var sfield = f.sfield,
                tfield = f.tfield;
            data[x][y][tfield] = _this.inspectObjects[x][sfield];
          });

          if (horizontalEntryChecked) {
            if (x !== data.length - 1) {
              _this.x++;
              _this.y = _this.getPositionY(_this.x);
            } else {
              // 录入到最后一项的时候
              confirm({
                title: prompt,
                content: continue_input_next,
                onOk: function onOk() {
                  _this.x = 0; // 获取第一项的this.y

                  _this.y = _this.getPositionY(0);
                  setTimeout(function () {
                    _this["div".concat(_this.x)].scrollIntoView({
                      behavior: 'smooth',
                      block: 'end'
                    });
                  }, 100);

                  _this.forceUpdate();
                }
              });
            }
          } else {
            _this.y++;
          }
        } else {
          if (SAMPLNUM > 0) {
            // 流水号格式化
            var _SAMPLE_NUMBER = formatFillString(y + 1, 3);

            data[x][y] = {
              SAMPLE_NUMBER: _SAMPLE_NUMBER,
              NAME: data[x][y].INSPECTION_OBJECT_NAME,
              INSPECTION_OBJECT_NAME: data[x][y].INSPECTION_OBJECT_NAME,
              INSRESULT: value,
              SAMPLESN: sampleSn,
              RESULTREMARK: RESULTREMARK,
              JMRESULT: RESULTREMARK === '合格' || RESULTREMARK === 'OK' ? 'Y' : RESULTREMARK ? 'N' : IS_DPD === 1 ? 'I' : 'W'
            };

            _this.props.params.mapFields.forEach(function (f) {
              var sfield = f.sfield,
                  tfield = f.tfield;
              data[x][y][tfield] = _this.inspectObjects[x][sfield];
            });

            if (data[x].every(function (item) {
              return item.RESULTREMARK;
            })) {
              _this.inspectObjects[x].finish = true;
            }

            if (y < colLen - 1) {
              if (horizontalEntryChecked) {
                if (x !== data.length - 1) {
                  _this.x++;
                  _this.y = _this.getPositionY(_this.x);
                } else {
                  confirm({
                    title: prompt,
                    content: continue_input_next,
                    onOk: function onOk() {
                      _this.x = 0; // 获取第一项的this.y

                      _this.y = _this.getPositionY(0);
                      setTimeout(function () {
                        _this["div".concat(_this.x)].scrollIntoView({
                          behavior: 'smooth',
                          block: 'end'
                        });
                      }, 100);

                      _this.forceUpdate();
                    }
                  });
                }
              } else {
                _this.y++;
              }
            } else if (x < _this.rowLen - 1) {
              if (horizontalEntryChecked) {
                if (x !== data.length - 1) {
                  _this.x++;
                  _this.y = _this.getPositionY(_this.x);
                } else {
                  confirm({
                    title: prompt,
                    content: continue_input_next,
                    onOk: function onOk() {
                      _this.x = 0; // 获取第一项的this.y

                      _this.y = _this.getPositionY(0);
                      setTimeout(function () {
                        _this["div".concat(_this.x)].scrollIntoView({
                          behavior: 'smooth',
                          block: 'end'
                        });
                      }, 100);

                      _this.forceUpdate();
                    }
                  });
                }
              }

              if (!horizontalEntryChecked) {
                // 输入未完成时，才能跳到下一项
                if (_this.judgeInputCompleteNumber(data) !== _this.inspectObjects.length) {
                  _this.y = 0;
                  _this.x++;
                }
              }
            }
          }
        }

        if (_this["div".concat(_this.x)] && _this.container) {
          _this["div".concat(_this.x)].scrollTop = _this.y * 30 - 30;

          _this["div".concat(_this.x)].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

        if (_this.judgeInputCompleteNumber(data) === _this.inspectObjects.length) {
          message.warn(input_complete_message);
        }

        _this.setState({
          data: data,
          value: horizontalEntryChecked || isNumber(TARVALUE) ? '' : value,
          sampleSn: ''
        });

        _this.cacheData(data);

        _this.inputSampleSn.focus();
      }
    };

    _this.judgeInputCompleteNumber = function (data) {
      var number = 0;
      var unfinishedInspectObjects = [];
      data.forEach(function (item, index) {
        if (_this.getEnteredDataNumber(item) >= _this.inspectObjects[index].SAMPLNUM) {
          number++;
        } else {
          unfinishedInspectObjects.push(index);
        }
      });
      return number;
    };

    _this.cacheData = function (data) {
      var _this$props = _this.props,
          selectedRows = _this$props.selectedRows,
          objectNo = _this$props.objectNo,
          _this$props$params = _this$props.params,
          checkResultObjectNo = _this$props$params.checkResultObjectNo,
          checkResultRelationShipNo = _this$props$params.checkResultRelationShipNo;
      var params = {
        otherParam: {
          data: data,
          checkResultObjectNo: checkResultObjectNo,
          checkResultRelationShipNo: checkResultRelationShipNo
        },
        hData: selectedRows,
        objectNo: objectNo,
        implclass: 'ins.CacheInspectionResultEvent'
      }; // 缓存录入数据

      commonApi(params).catch(function (err) {// console.log(err)
      });
    };

    _this.onChange = function (e, key) {
      _this.setState(_defineProperty({}, key, e.target.value));
    };

    _this.onChangeSwitch = function (checked) {
      // 如果为选中,禁用样本SN输入框
      var disabledSampleSnInput = _this.state.disabledSampleSnInput;
      disabledSampleSnInput = !checked;

      _this.setState({
        disabledSampleSnInput: disabledSampleSnInput
      });
    };

    _this.onSubmit = function () {
      var number = 0;
      var unfinishedInspectObjects = [];

      _this.state.data.forEach(function (item, index) {
        if (_this.getEnteredDataNumber(item) >= _this.inspectObjects[index].SAMPLNUM) {
          number++;
        } else {
          unfinishedInspectObjects.push(index);
        }
      });

      if (number === _this.inspectObjects.length) {
        var _this$props2 = _this.props,
            selectedRows = _this$props2.selectedRows,
            objectNo = _this$props2.objectNo,
            dispatch = _this$props2.dispatch,
            engine = _this$props2.engine,
            _this$props2$params = _this$props2.params,
            checkResultObjectNo = _this$props2$params.checkResultObjectNo,
            checkResultRelationShipNo = _this$props2$params.checkResultRelationShipNo,
            model = _this$props2.model;
        var params = {
          otherParam: {
            data: _this.state.data,
            checkResultObjectNo: checkResultObjectNo,
            checkResultRelationShipNo: checkResultRelationShipNo
          },
          hData: model.selectedRows && model.selectedRows.length ? model.selectedRows : selectedRows,
          objectNo: objectNo,
          implclass: 'ins.SaveInspectionResultEvent'
        };
        showLoading();
        commonApi(params).then(function (res) {
          if (res) {
            message.info(res.hint);

            _this.setState({
              clickSubmit: true
            });

            var faceType = engine.faceType,
                _objectNo = engine.objectNo,
                tableName = engine.tableName,
                namespace = engine.namespace,
                objectRelationPage = engine.objectRelationPage;

            if (faceType > 1 && objectRelationPage && objectRelationPage.length > 0) {
              dispatch({
                type: 'popup/loadSubpage',
                payload: {
                  objectRelationPage: objectRelationPage,
                  objectANamespace: namespace,
                  objectAData: selectedRows[0],
                  objectA: _objectNo || tableName
                }
              });
            }

            var dataList = model.dataList;
            dataList = generatorTableKey(dataList);
            var sign = res.sign;

            if (sign === 'M' && res.dataList) {
              dataList[selectedRows[0].index] = res.dataList[0];
              confirm({
                title: prompt,
                content: input_next,
                onOk: function onOk() {
                  // 录入下一个
                  if (selectedRows[0].index < dataList.length - 1) {
                    var selectedRow = dataList[selectedRows[0].index + 1];
                    var _faceType = engine.faceType,
                        _objectNo2 = engine.objectNo,
                        _tableName = engine.tableName,
                        _namespace = engine.namespace,
                        _objectRelationPage = engine.objectRelationPage;

                    if (_faceType > 1 && _objectRelationPage && _objectRelationPage.length > 0) {
                      dispatch({
                        type: 'popup/loadSubpage',
                        payload: {
                          objectRelationPage: _objectRelationPage,
                          objectANamespace: _namespace,
                          objectAData: selectedRow,
                          objectA: _objectNo2 || _tableName
                        }
                      });
                    }

                    dispatch({
                      type: "".concat(_namespace, "/packet"),
                      payload: {
                        dataList: dataList,
                        selectedRows: [selectedRow],
                        selectedRowKeys: [selectedRow.key]
                      }
                    }); // 更新

                    _this.current = 0;
                    _this.total = 0;

                    _this.setState({
                      value: '',
                      sampleSn: '',
                      isFirst: true,
                      clickSubmit: false,
                      disabledStartInput: selectedRow.TSTATE === 0 || selectedRow.TSTATE === 1 ? false : true
                    });

                    _this.forceUpdate();

                    _this.startInput([selectedRow]);
                  } else {
                    dispatch({
                      type: "".concat(namespace, "/packet"),
                      payload: {
                        dataList: dataList,
                        selectedRows: res.dataList
                      }
                    });
                  }
                },
                onCancel: function onCancel() {
                  selectedRows = res.dataList;
                  dispatch({
                    type: "".concat(namespace, "/packet"),
                    payload: {
                      dataList: dataList,
                      selectedRows: selectedRows
                    }
                  });
                }
              });
            }
          }
        }).catch(function (err) {// console.log(err)
        });
      } else {
        _this.x = unfinishedInspectObjects[0];
        var data = _this.state.data[_this.x];

        for (var y = 0; y < data.length; y++) {
          if (data[y].INSRESULT === '') {
            _this.y = y;
            break;
          }
        }

        if (_this["div".concat(_this.x)] && _this.container) {
          _this["div".concat(_this.x)].scrollTop = _this.y * 30 - 30;

          _this["div".concat(_this.x)].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

        _this.forceUpdate();

        message.warn(please_complete_the_entry);
      }
    };

    _this.startInput = function (hData) {
      showLoading();
      var _this$props3 = _this.props,
          selectedRows = _this$props3.selectedRows,
          dispatch = _this$props3.dispatch,
          engine = _this$props3.engine,
          model = _this$props3.model,
          _this$props3$params = _this$props3.params,
          objectNo = _this$props3$params.objectNo,
          checkProObjectNo = _this$props3$params.checkProObjectNo,
          checkProRelationShipNo = _this$props3$params.checkProRelationShipNo,
          _this$props3$params$m = _this$props3$params.mapFields,
          mapFields = _this$props3$params$m === void 0 ? [] : _this$props3$params$m;
      var namespace = engine.namespace;
      var params = {
        objectNo: objectNo,
        otherParam: {
          checkProObjectNo: checkProObjectNo,
          checkProRelationShipNo: checkProRelationShipNo
        },
        hData: hData && hData.length ? hData : selectedRows,
        implclass: 'ins.InspectStartEntryEvent'
      };
      commonApi(params).then(function (res) {
        if (res) {
          // 状态为待检中，更新数据
          // if (selectedRows[0].TSTATE === 0) {
          //   selectedRows.forEach((item, index) => {
          //     model.dataList[item.index] = res.newDataList[index]
          //     selectedRowKeys[index] = res.newDataList[index].ID
          //     selectedRows[index] = {
          //       ...res.newDataList[index],
          //       key: res.newDataList[index].ID,
          //       index: item.index
          //     }
          //   })
          //   dispatch({
          //     type: `${namespace}/packet`,
          //     payload: { dataList: generatorTableKey(dataList), selectedRowKeys, selectedRows, showTab }
          //   })
          // }
          var inspectObjects = res.inspectObjects,
              cacheData = res.data;
          _this.rowLen = inspectObjects.length;
          _this.x = 0;
          _this.y = 0;
          _this.total = 0;
          _this.current = 0;
          var data = [];
          inspectObjects.forEach(function (item, j) {
            var SAMPLNUM = item.SAMPLNUM,
                UPPERLIMITCOMPARISON = item.UPPERLIMITCOMPARISON,
                LOWERLIMITCOMPARISON = item.LOWERLIMITCOMPARISON,
                IS_DR = item.IS_DR;
            var IS_DPD = item.IS_DPD; // 去掉检验 记录-检验项目名称首尾换行

            var NAME = item.NAME.replace(/^\s+|\s+$/g, '');
            item.NAME = NAME;

            if (item.IS_DPD === null) {
              // message.warn('检验项目判定状态异常')
              IS_DPD = 0;
            }

            var max = '';
            var min = '';
            var upper = '';
            var lower = ''; // cacheDataItem, 缓存项

            var cacheDataObject = null;

            if (cacheData !== null && JSON.stringify(cacheData) !== '{}' && cacheData[NAME]) {
              cacheDataObject = cacheData[NAME];

              if (cacheDataObject.length) {
                // 如果缓存有（MAXVAL、MINVAL、UPPERLIMITCOMPARISON、LOWERLIMITCOMPARISON），就用缓存的
                max = cacheDataObject[0].UPPER_LIMIT_OF_THE_TARGET || item.MAXVAL;
                min = cacheDataObject[0].TARGET_THE_LOWER_LIMIT || item.MINVAL;
                upper = cacheDataObject[0].UPPERLIMITCOMPARISON || item.UPPERLIMITCOMPARISON;
                lower = cacheDataObject[0].LOWERLIMITCOMPARISON || item.LOWERLIMITCOMPARISON;
                cacheDataObject[0].UPPER_LIMIT_OF_THE_TARGET && (item.MAXVAL = cacheDataObject[0].UPPER_LIMIT_OF_THE_TARGET);
                cacheDataObject[0].TARGET_THE_LOWER_LIMIT && (item.MINVAL = cacheDataObject[0].TARGET_THE_LOWER_LIMIT);
                cacheDataObject[0].UPPERLIMITCOMPARISON && (item.UPPERLIMITCOMPARISON = cacheDataObject[0].UPPERLIMITCOMPARISON);
                cacheDataObject[0].LOWERLIMITCOMPARISON && (item.LOWERLIMITCOMPARISON = cacheDataObject[0].LOWERLIMITCOMPARISON);
              }
            }

            var snumberArr = [];
            /**
             * IS_DR为1，允许无限输入
             * IS_DR为0，SAMPLNUM抽样数量>0，按照抽样数量渲染
             */

            if (SAMPLNUM <= 0) {
              message.error('【' + NAME + '】' + sampling_number_of_inspection_objects);
            }

            if (IS_DR && IS_DR === 1) {
              if (cacheDataObject !== null) {
                cacheDataObject.forEach(function (result, index) {
                  if (IS_DPD === 0 && (!result.RESULTREMARK || result.RESULTREMARK == null || result.RESULTREMARK === '')) {
                    result.RESULTREMARK = calculation(result.INSRESULT, max, min, upper, lower);
                  }

                  if (result && result.NAME === NAME) {
                    if (result.INSRESULT && result.INSRESULT !== '') {
                      _this.current++;
                    }
                  }

                  var valueNumber = lodash.toNumber(result.INSRESULT);
                  snumberArr[index] = {
                    SAMPLE_NUMBER: formatFillString(index + 1, 3),
                    INSRESULT: typeof valueNumber === 'number' && !Number.isNaN(valueNumber) ? valueNumber : result.INSRESULT,
                    SAMPLESN: result.SAMPLESN,
                    NAME: NAME,
                    INSPECTION_OBJECT_NAME: result.INSPECTION_OBJECT_NAME,
                    JMRESULT: result.RESULTREMARK === '合格' || result.RESULTREMARK === 'OK' ? 'Y' : result.RESULTREMARK ? 'N' : IS_DPD === 1 ? 'I' : 'W',
                    RESULTREMARK: IS_DPD === 1 ? '' : result.RESULTREMARK,
                    UPPERLIMITCOMPARISON: result.UPPERLIMITCOMPARISON,
                    LOWERLIMITCOMPARISO: result.LOWERLIMITCOMPARISO
                  };
                  mapFields.forEach(function (f) {
                    var sfield = f.sfield,
                        tfield = f.tfield;
                    snumberArr[index][tfield] = item[sfield];
                  });
                });
                _this.total += cacheDataObject.length;
              }

              data.push(snumberArr);
            } else {
              if (SAMPLNUM > 0) {
                var len = SAMPLNUM;
                var finish = false;
                var cacheLength = 0;

                if (cacheDataObject !== null) {
                  cacheLength = cacheDataObject.length;
                  cacheDataObject.forEach(function (result, index) {
                    if (index < len) {
                      if (IS_DPD === 0 && (!result.RESULTREMARK || result.RESULTREMARK == null || result.RESULTREMARK === '')) {
                        result.RESULTREMARK = calculation(result.INSRESULT, max, min, upper, lower);
                      }

                      if (result && result.NAME === NAME) {
                        if (result.INSRESULT && result.INSRESULT !== '') {
                          _this.current++;
                          finish = true;
                        } else {
                          finish = false;
                        }
                      } else {
                        finish = false;
                      }

                      var valueNumber = lodash.toNumber(result.INSRESULT);
                      snumberArr[index] = {
                        SAMPLE_NUMBER: formatFillString(index + 1, 3),
                        INSRESULT: typeof valueNumber === 'number' && !Number.isNaN(valueNumber) ? valueNumber : result.INSRESULT,
                        SAMPLESN: result.SAMPLESN,
                        NAME: NAME,
                        INSPECTION_OBJECT_NAME: result.INSPECTION_OBJECT_NAME,
                        JMRESULT: result.RESULTREMARK === '合格' || result.RESULTREMARK === 'OK' ? 'Y' : result.RESULTREMARK ? 'N' : IS_DPD === 1 ? 'I' : 'W',
                        RESULTREMARK: result.RESULTREMARK,
                        UPPERLIMITCOMPARISON: result.UPPERLIMITCOMPARISON,
                        LOWERLIMITCOMPARISO: result.LOWERLIMITCOMPARISO
                      };
                      mapFields.forEach(function (f) {
                        var sfield = f.sfield,
                            tfield = f.tfield;
                        snumberArr[index][tfield] = item[sfield];
                      });
                    }
                  });
                }

                for (var i = len; i > cacheLength; i--) {
                  snumberArr[i - 1] = {
                    SAMPLE_NUMBER: '',
                    INSRESULT: '',
                    SAMPLESN: '',
                    NAME: NAME,
                    INSPECTION_OBJECT_NAME: NAME,
                    UPPERLIMITCOMPARISON: UPPERLIMITCOMPARISON,
                    LOWERLIMITCOMPARISON: LOWERLIMITCOMPARISON
                  };
                }

                item.finish = finish;
                _this.total += len;
                data.push(snumberArr);
              }
            }
          });
          _this.inspectObjects = inspectObjects;

          _this.setState({
            data: data,
            isFirst: false
          });
        } else {
          _this.total = 0;
          _this.current = 0;

          _this.setState({
            data: []
          });
        }
      }).catch(function (err) {// console.log(err)
      });
    };

    _this.clearAllCache = function () {
      _this.clearItemCache(true);
    };

    _this.clickListItem = function (i, j, value, sampleSn) {
      return function () {
        _this.x = i;
        _this.y = j;

        if (_this.state.disabledSampleSnInput) {
          _this.input.focus();
        } else {
          _this.inputSampleSn.focus();
        }

        _this.forceUpdate();

        _this.setState({
          value: value,
          sampleSn: sampleSn
        });
      };
    };

    _this.batchInput = function (val) {
      return function () {
        var data = _this.state.data;
        var x = _this.x;
        data[x].forEach(function (item, j) {
          data[x][j] = _objectSpread(_objectSpread({}, data[x][j]), {}, {
            SAMPLE_NUMBER: formatFillString(j + 1, 3),
            SAMPLESN: '',
            INSRESULT: val,
            RESULTREMARK: val,
            JMRESULT: val === 'OK' ? 'Y' : val ? 'N' : 'W'
          });

          if (data[x][j].INSRESULT === '') {
            _this.current++;
          }

          _this.props.params.mapFields.forEach(function (f) {
            var sfield = f.sfield,
                tfield = f.tfield;
            data[x][j][tfield] = _this.inspectObjects[x][sfield];
          });
        });
        _this.inspectObjects[x].finish = true;

        _this.cacheData(data);

        _this.forceUpdate();
      };
    };

    _this.dataImport = function () {
      var _this$state2 = _this.state,
          fileList = _this$state2.fileList,
          dataImportModalVisible = _this$state2.dataImportModalVisible;

      if (fileList.length) {
        var _this$props4 = _this.props,
            selectedRows = _this$props4.selectedRows,
            objectNo = _this$props4.objectNo;
        var params = {
          file: fileList,
          hData: selectedRows,
          objectNo: objectNo,
          implclass: 'ins.InspectResultExcelImportEvent'
        };
        showLoading();
        commonApi(params).then(function (res) {
          if (res) {
            _this.setState({
              dataImportModalVisible: false,
              isFirst: true
            });

            _this.startInput();
          }
        }).catch(function (err) {// console.log(err)
        });
      }
    };

    _this.judegeClearBtnDisabled = function (data, type) {
      var disabled = true;

      if (data && data.length) {
        if (type === 1) {
          disabled = data[_this.x].every(function (item) {
            return item.INSRESULT === '';
          });
        } else {
          var number = 0;
          data.forEach(function (item) {
            number += _this.getEnteredDataNumber(item);
          });
          number === 0 ? disabled = true : disabled = false;
        }
      }

      return disabled;
    };

    _this.clearMenu = function (data) {
      return /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
        onClick: _this.clearAllCache,
        disabled: _this.judegeClearBtnDisabled(data, 0)
      }, clear_all), /*#__PURE__*/React.createElement("a", {
        onClick: _this.clearItemCache,
        disabled: _this.judegeClearBtnDisabled(data, 1)
      }, clear_selection)));
    };

    _this.batchMenu = function (data, MAXVAL, MINVAL) {
      return /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Menu.Item, null, /*#__PURE__*/React.createElement("a", {
        onClick: _this.batchInput('OK'),
        disabled: !(data && data[0]) || typeof MAXVAL === 'number' && typeof MINVAL === 'number'
      }, batch_input_ok), /*#__PURE__*/React.createElement("a", {
        onClick: _this.batchInput('NG'),
        disabled: !(data && data[0]) || typeof MAXVAL === 'number' && typeof MINVAL === 'number'
      }, batch_input_ng), /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return _this.setState({
            dataImportModalVisible: true
          });
        }
      }, import_cache)));
    };

    _this.getEnteredDataNumber = function (data) {
      var i = 0;
      data.forEach(function (item) {
        if (item.INSRESULT !== '') {
          i++;
        }
      });
      return i;
    };

    _this.getEnteredOkDataNumber = function (data) {
      var i = 0;
      data.forEach(function (item) {
        if (item.RESULTREMARK === '合格' || item.RESULTREMARK === 'OK') {
          i++;
        }
      });
      return i;
    };

    _this.clearItemCache = function (clearCache) {
      confirm({
        title: prompt,
        content: clearCache && clearCache == true ? re_input_all : re_input_object,
        onOk: function onOk() {
          var _this$props5 = _this.props,
              selectedRows = _this$props5.selectedRows,
              objectNo = _this$props5.params.objectNo;
          var otherParam = {};

          if (clearCache && clearCache == true) {
            otherParam.clearCache = clearCache;
          }

          var params = {
            objectNo: objectNo,
            data: _objectSpread({}, _this.state.data[_this.x][_this.y]),
            hData: selectedRows,
            otherParam: otherParam,
            implclass: 'ins.DeleteInspetionObjectCacheEvent'
          };
          commonApi(params).then(function (res) {
            if (res.flag) {
              message.info(cleared_successfully);

              _this.startInput();
            }
          }).catch(function (err) {// console.log(err)
          });
        }
      });
    };

    _this.getCellData = function (objectField, selectedRow) {
      var showTooltip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var text = selectedRow[objectField.fieldName];
      var editor = objectField.editor;

      if (objectField.fieldName === '{INDEX}') {
        text = selectedRow['index'] + 1;
      }

      if (editor === 'MapValueList' || editor === 'ValueList' || editor === 'RadioEditor' || editor === 'CheckEditor') {
        var num = -1;

        var _ref = objectField.editParams || {},
            _ref$values = _ref.values,
            values = _ref$values === void 0 ? [] : _ref$values;

        if (editor === 'MapValueList') {
          num = values.findIndex(function (item) {
            return item.key === text;
          });
        } else {
          num = values.findIndex(function (item) {
            return item.name === text;
          });
        }

        if (num !== -1) {
          var _values$num = values[num],
              color = _values$num.color,
              name = _values$num.name;
          return color && !showTooltip ? /*#__PURE__*/React.createElement(Tag, {
            style: {
              position: 'relative',
              top: 5
            },
            color: color
          }, name) : name;
        } else {
          return text;
        }
      }

      return text;
    };

    _this.getInspectItemBorderStyle = function (data, j) {
      var borderStyle = '1px solid #f0f0f0';

      var number = _this.getEnteredDataNumber(data);

      if (number > 0) {
        // IS_DPD:0必须，IS_DPD:1非必须
        if (_this.inspectObjects[j].IS_DPD === 1) {
          borderStyle = '3px solid #e0e006';
        } else {
          if (_this.getEnteredDataNumber(data) - _this.getEnteredOkDataNumber(data) > 0) {
            borderStyle = '3px solid red';
          } else {
            borderStyle = '3px solid green';
          }
        }
      }

      return borderStyle;
    };

    _this.onChangeEntryType = function (checked) {
      _this.setState({
        horizontalEntryChecked: checked
      });
    };

    _this.scrollContainer = function (direction) {
      if (direction === 'top') {
        _this['div0'].scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      }

      if (direction === 'bottom') {
        _this["div".concat(_this.state.data.length - 1)].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    };

    _this.showScrollIcon = function (data, isFirst, disabledSampleSnInput) {
      if (isFirst) {
        return false;
      } else {
        var offsetHeight = document.body.offsetHeight;
        var dataLen = data.length;
        var dataRows = parseInt((offsetHeight - 150) / 216);

        if (disabledSampleSnInput) {
          return dataLen > dataRows * 3;
        } else {
          return dataLen > dataRows * 2;
        }
      }
    };

    _this.state = {
      value: '',
      sampleSn: '',
      data: [],
      isFirst: true,
      clickSubmit: false,
      disabledSampleSnInput: true,
      // 根据检验状态判断开始录入是否禁用
      disabledStartInput: _this.props.selectedRows[0].TSTATE === 0 || _this.props.selectedRows[0].TSTATE === 1 ? false : true,
      // 导入缓存弹窗是否显示
      dataImportModalVisible: false,
      fileList: [],
      // 是否显示主表选中数据
      visibleSelectedRow: false,
      // true-横向，false-纵向
      horizontalEntryChecked: false
    };
    return _this;
  }

  _createClass(EnterInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selectedRows = prevProps.selectedRows;

      if (selectedRows !== this.props.selectedRows) {
        this.current = 0;
        this.total = 0;
        this.setState({
          value: '',
          sampleSn: '',
          data: [],
          isFirst: true,
          clickSubmit: false,
          disabledStartInput: this.props.selectedRows[0].TSTATE === 0 || this.props.selectedRows[0].TSTATE === 1 ? false : true,
          visibleSelectedRow: false,
          horizontalEntryChecked: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var Item = Form.Item;
      var _this$state3 = this.state,
          value = _this$state3.value,
          sampleSn = _this$state3.sampleSn,
          data = _this$state3.data,
          isFirst = _this$state3.isFirst,
          clickSubmit = _this$state3.clickSubmit,
          disabledStartInput = _this$state3.disabledStartInput,
          disabledSampleSnInput = _this$state3.disabledSampleSnInput,
          dataImportModalVisible = _this$state3.dataImportModalVisible,
          visibleSelectedRow = _this$state3.visibleSelectedRow,
          horizontalEntryChecked = _this$state3.horizontalEntryChecked;
      var inspectObjects = this.inspectObjects,
          x = this.x,
          y = this.y;

      var _ref2 = inspectObjects ? inspectObjects[x] : {},
          NAME = _ref2.NAME,
          MAXVAL = _ref2.MAXVAL,
          MINVAL = _ref2.MINVAL,
          TARVALUE = _ref2.TARVALUE,
          UPPERLIMITCOMPARISON = _ref2.UPPERLIMITCOMPARISON,
          LOWERLIMITCOMPARISON = _ref2.LOWERLIMITCOMPARISON,
          IS_DPD = _ref2.IS_DPD,
          INSPEC_INSTRUMENT = _ref2.INSPEC_INSTRUMENT;

      var gridFieldList = this.props.engine.objectGrid.gridFieldList;
      var selectedRows = this.props.model.selectedRows;
      return /*#__PURE__*/React.createElement("div", {
        className: styles.main
      }, selectedRows && selectedRows.length && visibleSelectedRow && /*#__PURE__*/React.createElement("ul", {
        className: styles.selectedRow
      }, gridFieldList.map(function (objectField, index) {
        return /*#__PURE__*/React.createElement("li", {
          key: index
        }, isEnglish ? objectField.enName : objectField.name, "\uFF1A", /*#__PURE__*/React.createElement(Tooltip, {
          title: _this2.getCellData(objectField, selectedRows[0], true)
        }, _this2.getCellData(objectField, selectedRows[0])));
      })), visibleSelectedRow ? /*#__PURE__*/React.createElement(Tooltip, {
        title: collapse_selected_row
      }, /*#__PURE__*/React.createElement(CaretUpOutlined, {
        onClick: function onClick() {
          return _this2.setState({
            visibleSelectedRow: false
          });
        },
        className: styles.shrinkIcon
      })) : /*#__PURE__*/React.createElement(Tooltip, {
        title: expand_selected_row
      }, /*#__PURE__*/React.createElement(CaretDownOutlined, {
        onClick: function onClick() {
          return _this2.setState({
            visibleSelectedRow: true
          });
        },
        className: styles.expandIcon
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          height: visibleSelectedRow ? 'calc(100% - 150px)' : '100%'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '85%',
          position: 'relative'
        }
      }, this.showScrollIcon(data, isFirst, disabledSampleSnInput) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
        title: scroll_to_top
      }, /*#__PURE__*/React.createElement(CaretUpOutlined, {
        onClick: function onClick() {
          return _this2.scrollContainer('top');
        },
        className: styles.scrollTopIcon
      })), /*#__PURE__*/React.createElement(Tooltip, {
        title: scroll_to_bottom
      }, /*#__PURE__*/React.createElement(CaretDownOutlined, {
        onClick: function onClick() {
          return _this2.scrollContainer('bottom');
        },
        className: styles.scrollBottomIcon
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          display: 'flex',
          height: '32px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flex: 1
        }
      }, /*#__PURE__*/React.createElement(Switch, {
        style: {
          margin: '5px 8px 0 0'
        },
        checked: horizontalEntryChecked,
        checkedChildren: switch_horizontal,
        unCheckedChildren: switch_vertical,
        onChange: this.onChangeEntryType
      }), /*#__PURE__*/React.createElement(Input, {
        value: sampleSn,
        onPressEnter: function onPressEnter() {
          return _this2.input.focus();
        },
        onChange: function onChange(e) {
          return _this2.onChange(e, 'sampleSn');
        },
        style: {
          flex: 1,
          flexGrow: 1,
          marginRight: '8px'
        },
        placeholder: sample_sn,
        ref: function ref(ele) {
          _this2.inputSampleSn = ele;
        },
        disabled: disabledSampleSnInput,
        suffix: /*#__PURE__*/React.createElement(Switch, {
          onChange: this.onChangeSwitch
        })
      }), /*#__PURE__*/React.createElement(Input, {
        onPressEnter: this.onPressEnter,
        onChange: function onChange(e) {
          return _this2.onChange(e, 'value');
        },
        value: value,
        style: {
          flex: 1,
          flexGrow: 1,
          marginRight: '8px'
        },
        placeholder: detection_value,
        ref: function ref(ele) {
          _this2.input = ele;
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        onClick: this.startInput,
        disabled: disabledStartInput || clickSubmit
      }, isFirst ? start_input : refresh_cache), /*#__PURE__*/React.createElement(Button, {
        type: "primary",
        style: {
          marginRight: '-100px'
        },
        onClick: this.onSubmit,
        disabled: clickSubmit || !(data && data.length > 0)
      }, save_input), /*#__PURE__*/React.createElement(Dropdown, {
        overlay: this.clearMenu(data),
        placement: "bottomCenter"
      }, /*#__PURE__*/React.createElement(Button, null, clear_menu)), /*#__PURE__*/React.createElement(Dropdown, {
        overlay: this.batchMenu(data, MAXVAL, MINVAL),
        placement: "bottomCenter"
      }, /*#__PURE__*/React.createElement(Button, null, batch_menu)))), /*#__PURE__*/React.createElement("div", {
        className: styles.inspectItemsWrapper,
        ref: function ref(ele) {
          _this2.container = ele;
        }
      }, data && data.map(function (i, j) {
        return /*#__PURE__*/React.createElement("div", {
          key: j,
          className: styles.inspectItem,
          style: {
            width: disabledSampleSnInput ? '32.3%' : '49%',
            border: x === j ? '3px solid #1890ff' : _this2.getInspectItemBorderStyle(i, j)
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.inspectItemHeader
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            cursor: inspectObjects[j].IS_DR === 1 ? 'pointer' : 'inherit',
            padding: '0 10px'
          },
          onClick: inspectObjects[j].IS_DR === 1 ? _this2.clickListItem(j, 0, '', '') : null
        }, /*#__PURE__*/React.createElement("div", {
          className: styles.inspectItemName
        }, /*#__PURE__*/React.createElement(Tooltip, {
          title: inspectObjects && inspectObjects[j].NAME
        }, /*#__PURE__*/React.createElement("span", null, inspectObjects && inspectObjects[j].NAME), inspectObjects && inspectObjects[j].IS_DR === 1 && /*#__PURE__*/React.createElement("span", null, "(", no_control_sample_number, ")"))), /*#__PURE__*/React.createElement(Tooltip, {
          title: the_number_of_qualified + '_' + (inspectObjects[j].IS_DPD === 0 ? _this2.getEnteredOkDataNumber(i) : _this2.getEnteredDataNumber(i)) + '/' + unqualified_number + '_' + (inspectObjects[j].IS_DPD === 0 ? _this2.getEnteredDataNumber(i) - _this2.getEnteredOkDataNumber(i) : '0') + ' (' + total_number_of_samples + '_' + inspectObjects[j].SAMPLNUM + ')'
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: '30%',
            textAlign: 'right'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'green'
          }
        }, inspectObjects[j].IS_DPD === 0 ? _this2.getEnteredOkDataNumber(i) : _this2.getEnteredDataNumber(i)), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'red'
          }
        }, inspectObjects[j].IS_DPD === 0 ? _this2.getEnteredDataNumber(i) - _this2.getEnteredOkDataNumber(i) : '0'), "\xA0", /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'green'
          }
        }, "(", inspectObjects[j].SAMPLNUM, ")"))))), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1
          }
        }, inspectObjectFields.SAMPLE_NUMBER), disabledSampleSnInput ? '' : /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 2
          }
        }, inspectObjectFields.SAMPLESN), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1
          }
        }, inspectObjectFields.INSRESULT), /*#__PURE__*/React.createElement("span", {
          style: {
            flex: 1,
            textAlign: 'right'
          }
        }, inspectObjectFields.RESULTREMARK)), /*#__PURE__*/React.createElement("div", {
          style: {
            flexGrow: 1,
            overflowY: 'auto'
          },
          ref: function ref(ele) {
            _this2["div".concat(j)] = ele;
          }
        }, i.map(function (item, index) {
          return /*#__PURE__*/React.createElement("div", _defineProperty({
            onClick: _this2.clickListItem(j, index, item.INSRESULT, item.SAMPLESN),
            style: {
              background: j === x && index === y ? '#baefe1' : '',
              height: '30px',
              borderBottom: index === i.length - 1 ? 'none' : '1px solid #f0f0f0',
              display: 'flex',
              overflowX: 'auto'
            },
            key: index,
            ref: function ref(ele) {
              _this2["div".concat(j).concat(index)] = ele;
            }
          }, "key", index), /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1
            }
          }, item.SAMPLE_NUMBER), disabledSampleSnInput ? '' : /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 2
            }
          }, item.SAMPLESN), /*#__PURE__*/React.createElement("span", {
            style: {
              flex: 1
            }
          }, item.INSRESULT), /*#__PURE__*/React.createElement("span", {
            style: {
              textAlign: 'right',
              color: item.RESULTREMARK === '合格' || item.RESULTREMARK === 'OK' ? 'green' : 'red',
              whiteSpace: 'nowrap',
              flex: 1
            }
          }, item.RESULTREMARK));
        })));
      }))), data && data[0] && /*#__PURE__*/React.createElement("div", {
        className: styles.tipWrapper
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
        style: {
          color: 'red'
        }
      }, '当前操作：' + NAME + ', 第' + (y + 1) + '行'), /*#__PURE__*/React.createElement("p", null, inspectObjectTip.inspection_equipment, INSPEC_INSTRUMENT), /*#__PURE__*/React.createElement("p", null, inspectObjectTip.upper_limit, isNumber(TARVALUE) && (MAXVAL && UPPERLIMITCOMPARISON !== null ? UPPERLIMITCOMPARISON + MAXVAL : inspectObjectTip.missing_upper_limit_or_calculator)), /*#__PURE__*/React.createElement("p", null, inspectObjectTip.target_value, TARVALUE && TARVALUE), /*#__PURE__*/React.createElement("p", null, inspectObjectTip.lower_limit, isNumber(TARVALUE) && (MAXVAL && LOWERLIMITCOMPARISON !== null ? LOWERLIMITCOMPARISON + MINVAL : inspectObjectTip.missing_lower_limit_or_calculator)), /*#__PURE__*/React.createElement("p", null, inspectObjectTip.determination, IS_DPD === 0 ? '必须' : '非必须')), /*#__PURE__*/React.createElement("div", {
        style: {
          whiteSpace: 'pre-line'
        }
      }, inspectObjectTip.color_box_desc))), /*#__PURE__*/React.createElement(DragModal, {
        namespace: "dataImportModal",
        width: 700,
        minHeight: 160,
        title: import_cache_title,
        visible: dataImportModalVisible,
        mask: true,
        onOk: this.dataImport,
        onCancel: function onCancel() {
          return _this2.setState({
            dataImportModalVisible: false
          });
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dragger, {
        accept: ".csv,.xlsm,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
        beforeUpload: function beforeUpload(file) {
          var fileList = _this2.state.fileList;

          _this2.setState({
            fileList: [].concat(_toConsumableArray(fileList), [file])
          });

          return false;
        },
        onRemove: function onRemove(file) {
          var fileList = _this2.state.fileList;
          var index = fileList.indexOf(file);
          var newFileList = fileList.slice();
          newFileList.splice(index, 1);

          _this2.setState({
            fileList: newFileList
          });
        }
      }, /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-drag-icon"
      }, /*#__PURE__*/React.createElement(InboxOutlined, null)), /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-text"
      }, select_file_prompt1), /*#__PURE__*/React.createElement("p", {
        className: "ant-upload-hint"
      }, select_file_prompt2)))));
    }
  }]);

  return EnterInput;
}(React.Component);

export default connect()(EnterInput);