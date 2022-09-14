export var dva = {
  config: {
    onError: function onError(e) {
      e.preventDefault();
      console.error(e.message);
    }
  }
};