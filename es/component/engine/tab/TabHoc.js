var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
 * @Description: Tab高阶组件
 */
import React, { useEffect, useState } from 'react';
import { Tabs, Badge } from 'antd';
import classNames from 'classnames';
import styled, { css, keyframes } from 'styled-components';
import styles from './index.less';
import ProcessInstanceList from '../../activiti/modelManage/ProcessIntanceList';
var TabPane = Tabs.TabPane;
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
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
        var bgAnimation = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        from {\n          background-color: ", ";\n          opacity: 1;\n          color: #fff;\n        }\n        to {\n          background-color: ", ";\n          opacity: 1;\n          color: #000;\n        }\n      "])), backgroundColor, backgroundColor);
        if (!showAnimation) bgAnimation = keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""]))); // const Wrapper = styled.div`
        //   background-color: ${backgroundColor};
        //   animation: ${bgAnimation} 0.8s infinite alternate;
        // `;
        // return (
        //   <Badge size="small" count={item.total}>
        //     <Wrapper key={index} >{item.name}</Wrapper>
        //   </Badge>
        // );

        var wrapCss = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        background-color: ", ";\n        animation: ", " 0.8s infinite alternate;\n      "])), backgroundColor, bgAnimation);
        return wrapCss;
      };

      var getTabClassName = function getTabClassName(classTabPosition) {
        var classNameArr = [];

        if (classTabPosition === 'top' || classTabPosition === 'bottom') {
          classNameArr.push(styles.tabHocHorizontal);
          classNameArr.push(styles.tabHocTop);
        } else {
          classNameArr.push(styles.tabHocVertical);
        }

        return classNameArr;
      };

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "flex-y",
        style: {
          height: '100%'
        }
      }, isShowTab && tabs.length ? /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: getFLexDirection()
        }
      }, /*#__PURE__*/React.createElement(Tabs, {
        tabPosition: params.classTabPosition,
        activeKey: tabActiveKey === '' ? dataClassField.editor === 'ValueList' ? '0' : tabs[0].key : tabActiveKey,
        animated: false,
        tabBarGutter: 18,
        onChange: onChangeTab,
        className: classNames(getTabClassName(params.classTabPosition))
      }, tabCountData.length && tabCountData.map(function (item, index) {
        return /*#__PURE__*/React.createElement(TabPane, {
          key: dataClassField.editor === 'ValueList' ? item.name : item.key,
          style: {
            display: 'flex'
          } // tab={renderTab(item, index)}
          ,
          tab: /*#__PURE__*/React.createElement(Badge, {
            size: "small",
            count: item.total
          }, /*#__PURE__*/React.createElement(Wrapper, {
            key: index,
            styleInfo: renderTab(item, index)
          }, item.name))
        });
      })), /*#__PURE__*/React.createElement(WrappedComponent, props)) : /*#__PURE__*/React.createElement(WrappedComponent, props)), /*#__PURE__*/React.createElement(ProcessInstanceList, null));
    };
  };
};

export default TabHoc;