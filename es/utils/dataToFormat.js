//装换时间
export function dateToFormat(time) {
  if (time != null) {
    var dateee = new Date(time).toJSON();
    var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, ''); // let d = new Date(time);
    // let times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return date;
  }

  return undefined;
} //将时间并格式化 yyyy-MM-dd hh:mm:ss

Date.prototype.Format = function (format) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
  };
  format = format.replace(/(y+)/, this.getFullYear().toString()); //format = format.replace(/S/, this.getMilliseconds().toString());

  for (var p in o) {
    var r = new RegExp('(' + p + ')');
    var v = o[p].toString(); // 匹配长度为1，原样输出；匹配长度为2，原长度为1的需要补0

    format = format.replace(r, RegExp.$1.length == 1 ? v : v.length == 2 ? v : '0' + v);
  }

  return format;
};