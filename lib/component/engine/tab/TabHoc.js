"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _index = _interopRequireDefault(require("./index.less"));

var _ProcessIntanceList = _interopRequireDefault(require("../../activiti/modelManage/ProcessIntanceList"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabPane = _antd.Tabs.TabPane;

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  return props.styleInfo;
});

var TabHoc = function TabHoc(engine) {
  return function (WrappedComponent) {
    return function (props) {
      var model = props.model,
          dispatch = props.dispatch;
      var params = model.params,
          tabActiveKey = model.tabActiveKey,
          modelData = model.modelData,
          tabCountData = model.tabCountData;
      var dataClassField = engine.dataClassField,
          bgcRandomTabs = engine.bgcRandomTabs,
          namespace = engine.namespace,
          pageId = engine.pageId;
      var isShowTab = params && params.isClass && dataClassField && dataClassField.editParams;
      var tabs = [];

      if (isShowTab) {
        var editParams = dataClassField.editParams;
        tabs = editParams.values ? editParams.values : [];
      }

      var tabCount = function tabCount() {
        dispatch({
          type: "tab/queryDataClassFieldTotal",
          payload: {
            namespace: namespace,
            pageId: pageId
          }
        });
      };

      var onChangeTab = function onChangeTab(activeKey) {
        tabCount();
        var tableName = engine.tableName,
            objectGrid = engine.objectGrid;
        var condition = model.condition,
            sortFields = model.sortFields;
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            dataList: [],
            dataTotal: 0
          }
        });
        dispatch({
          type: 'common/querySingleData',
          payload: {
            namespace: namespace,
            tableName: tableName,
            objectGridNo: objectGrid.no,
            condition: condition,
            sortFields: sortFields,
            tabActiveKey: activeKey,
            typeField: params.dataClassField
          }
        });
        dispatch({
          type: "".concat(namespace, "/packet"),
          payload: {
            tabActiveKey: activeKey,
            showTab: false,
            visibleEnterInputPage: false,
            queryName: 'common/querySingleData',
            queryParams: {
              namespace: namespace,
              tabActiveKey: activeKey,
              tableName: tableName,
              typeField: params.dataClassField
            }
          }
        });
      }; // 根据方向获取flex的direction


      var getFLexDirection = function getFLexDirection() {
        var flexDirection = '';

        switch (params.classTabPosition) {
          case 'top':
            flexDirection = 'column';
            break;

          case 'bottom':
            flexDirection = 'column-reverse';
            break;

          case 'left':
            flexDirection = 'row';
            break;

          case 'right':
            flexDirection = 'row-reverse';
            break;
        }

        return flexDirection;
      };

      var renderTab = function renderTab(item, index) {
        var backgroundColor = '';
        var showAnimation = false;

        if (dataClassField.editor === 'ValueList') {
          if ((tabActiveKey || tabs[0].name) === item.name) {
            showAnimation = true;
          }
        } else if (dataClassField.editor === 'MapValueList') {
          if ((tabActiveKey ? tabActiveKey : tabs[0].key) + '' === item.key + '') {
            showAnimation = true;
          }
        }

        item.color ? backgroundColor = item.color : backgroundColor = bgcRandomTabs[index];
        var bgAnimation = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        from {\n          background-color: ", ";\n          opacity: 1;\n          color: #fff;\n        }\n        to {\n          background-color: ", ";\n          opacity: 1;\n          color: #000;\n        }\n      "])), backgroundColor, backgroundColor);
        if (!showAnimation) bgAnimation = (0, _styledComponents.keyframes)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""]))); // const Wrapper = styled.div`
        //   background-color: ${backgroundColor};
        //   animation: ${bgAnimation} 0.8s infinite alternate;
        // `;
        // return (
        //   <Badge size="small" count={item.total}>
        //     <Wrapper key={index} >{item.name}</Wrapper>
        //   </Badge>
        // );

        var wrapCss = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        animation: ", " 0.8s infinite alternate;\n      "])), backgroundColor, bgAnimation);
        return wrapCss;
      };

      var getTabClassName = function getTabClassName(classTabPosition) {
        var classNameArr = [];

        if (classTabPosition === 'top' || classTabPosition === 'bottom') {
          classNameArr.push(_index.default.tabHocHorizontal);
          classNameArr.push(_index.default.tabHocTop);
        } else {
          classNameArr.push(_index.default.tabHocVertical);
        }

        return classNameArr;
      };

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "flex-y",
        style: {
          height: '100%'
        }
      }, isShowTab && tabs.length ? /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: getFLexDirection()
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
        tabPosition: params.classTabPosition,
        activeKey: tabActiveKey === '' ? dataClassField.editor === 'ValueList' ? '0' : tabs[0].key : tabActiveKey,
        animated: false,
        tabBarGutter: 18,
        onChange: onChangeTab,
        className: (0, _classnames.default)(getTabClassName(params.classTabPosition))
      }, tabCountData.length && tabCountData.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(TabPane, {
          key: dataClassField.editor === 'ValueList' ? item.name : item.key,
          style: {
            display: 'flex'
          } // tab={renderTab(item, index)}
          ,
          tab: /*#__PURE__*/_react.default.createElement(_antd.Badge, {
            size: "small",
            count: item.total
          }, /*#__PURE__*/_react.default.createElement(Wrapper, {
            key: index,
            styleInfo: renderTab(item, index)
          }, item.name))
        });
      })), /*#__PURE__*/_react.default.createElement(WrappedComponent, props)) : /*#__PURE__*/_react.default.createElement(WrappedComponent, props)), /*#__PURE__*/_react.default.createElement(_ProcessIntanceList.default, null));
    };
  };
};

var _default = TabHoc;
exports.default = _default;