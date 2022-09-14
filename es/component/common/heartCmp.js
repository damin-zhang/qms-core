import React from 'react';
import { HeartFilled } from '@ant-design/icons';

var Heart = function Heart(_ref) {
  var item = _ref.item,
      toogleCollect = _ref.toogleCollect;
  return /*#__PURE__*/React.createElement(HeartFilled, {
    style: {
      marginRight: '5px',
      color: 'red'
    },
    onClick: function onClick(e) {
      return toogleCollect(e, item);
    }
  });
};

export default Heart;