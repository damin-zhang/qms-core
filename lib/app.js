"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dva = void 0;
var dva = {
  config: {
    onError: function onError(e) {
      e.preventDefault();
      console.error(e.message);
    }
  }
};
exports.dva = dva;