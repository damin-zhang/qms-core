function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ExternalFileCmp from './ExternalFileCmp';

var ExternalFile = function ExternalFile(engine) {
  return function (WrappedComponent) {
    return function (props) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WrappedComponent, props), /*#__PURE__*/React.createElement(ExternalFileCmp, _extends({
        engine: engine
      }, props)));
    };
  };
};

export default ExternalFile;