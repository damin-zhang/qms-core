"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * @Description:
 * 更新标识可直接复制对应图标方可使用
 * 🐞 Bug 修复
 * 🤖 TypeScript 修复
 * 💄 样式更新/less 变量更新
 * 🆕 新增特性
 * 🔥 极其值得关注的新增特性
 * 🌐国际化改动，注意这里直接用对应国家/地区的旗帜。
 * 📖 文档或网站改进
 * ✅ 新增或更新测试用例
 * 🛎 更新警告/提示信息
 * 🗑 废弃或移除
 * 🛠 重构或工具链优化
 * ⚡️ 性能提升
 * 需要文字颜色可直接添加color字段
 * 需要字体加粗直接添加fontWeight字段
 * 作者字段名：username
 */

/*
 * @Description:
 * 支持的转义字符：
 * \n 换行
 * \t 缩进两个字
 *
 * 图标直接复制：
 * 🐞 🚀 💄 🆕 🤖 🛠 🚮 🗑 🌐 🌎 🎉 ⚒️ 🔥 ⌨️ ⚡️ 📦 🛎 ⚠️ 🌟 🏆 🙅
 * eg: 新增 🆕
 *
 * 支持html标签以及style样式，eg:
 * <span style="font-weight: bold">加粗</span>
 * <span style="font-size: 20px">设置字体为20px</span>
 * <span style="color: red">设置字体颜色为红色</span>
 *
 * 颜色，加粗，字体大小简写
 * 注意设置颜色和字体时，必须在颜色值和字体值后面添加一个空格
 * 设置字体颜色 [*c=red 字体颜色red*]
 * 设置字体加粗 [*b字体加粗*]
 * 设置字体大小 [*f=20 字体大小20*]
 * 
 * 
 * 示例
 * {
     
      content: `🆕[*c=red 新[*f=20 增*]头部导*]航\n
      \t导航菜单[*f=20 配置扩展*]，非导航组新增“置顶”参数项，勾选“置顶”参数后，该导航菜单默认放置在系统顶部区域，且在左侧导航栏下默认隐藏\n
      \t左侧导航工[*b具栏添*]加“置顶/收起”切换按钮，默认[*b“置顶”*]，切换“收起”时将置顶导航菜单收回左侧导航菜单\n
      \t置顶导航菜单默认每间隔20s查询统计数量，并以徽标数样式展示（同在线人数），收起状态则取消轮询统计\n`
    }
 */
var _default = {
  // 关于我们版本更新🚀
  VersionTitle: '版本更新日志',
  Version: [{
    VersionNumber: 'v2.1.7.24.584',
    date: '2022-08-19',
    content: "<ul class='version-line'>\n        <li>\uD83D\uDEE0 <code>ProTable</code> \u5DE5\u5177\u680F\u9ED8\u8BA4\u663E\u793A\u3002</li>\n        <li>\uD83D\uDEE0 <code>PropertyForm</code> \u8868\u5355\u4F18\u5316\u4E86TextBox \u548CTextArea\u7F16\u8F91\u5668\u8F93\u5165\u65F6\u7684\u7A7A\u683C\u9650\u5236\u3002</li>\n        <li>\uD83D\uDEE0 <code>ProTable</code> \u5DE5\u5177\u680F\u8868\u683C\u5217\u8BBE\u7F6E\u652F\u6301\u4E86\u524D\u7AEF\u7F13\u5B58\u3002</li>\n        <li>\uD83D\uDC1E \u4FEE\u590D\u4E86\u5F00\u53D1\u73AF\u5883\u7F3A\u5C11 ESLint \u4EE3\u7801\u68C0\u6D4B\u529F\u80FD\u3002</li>\n        <li>\uD83C\uDD95 \u5BFC\u822A\u83DC\u5355\u9875\u9762\u7C7B\u578B\u65B0\u589E \u201C\u62A5\u8868\u7BA1\u7406\u201D \u9875\u9762\u3002</li>\n        <li>\uD83D\uDC1E \u56DE\u6EDA\u4E86DB\u503C\u5217\u8868\u9009\u62E9\u5668, \u591A\u9009\u529F\u80FD\u5B58\u5728BUG, \u6682\u4E0D\u652F\u6301\u591A\u9009\u3002</li>\n        <li>\u2705 \u8D28\u68C0\u5F55\u5165\u6A21\u677F\u529F\u80FD\u914D\u7F6E\u5347\u7EA7</li>\n        <li>\uD83C\uDD95 \u6620\u5C04\u503C\u5217\u8868\u3001\u56FA\u5B9A\u503C\u5217\u8868\u3001\u5355\u9009\u7F16\u8F91\u5668\u3001\u591A\u9009\u7F16\u8F91\u5668\u663E\u793A\u503C\u548C\u56FE\u6807\u652F\u6301\u5B9A\u4E49\u989C\u8272\u3002</li>\n        </ul>\n      "
  }, {
    VersionNumber: 'v2.1.7.24.541',
    date: '2022-08-12',
    content: "<ul class='version-line'>\n          <li>\uD83D\uDC1E \u66F4\u65B0 ant-design \u4F9D\u8D56\u7248\u672C\u4ECE <code>antd@4.19.5</code> \u5347\u7EA7\u5230 <code>antd@4.22.4</code> \u3002 \u4FEE\u6B63\u4E86 Dropdown \u4E0D\u80FD\u6B63\u786E\u6E32\u67D3 Menu \u548C <code>autoFocus</code> \u629B\u51FA\u5F02\u5E38\u7684\u95EE\u9898\u3002</li>\n          <li>\u2705 \u964D\u4F4EBpmn.js \u63D2\u4EF6\u7248\u672C, \u6D41\u7A0B\u652F\u6301\u62D6\u52A8\u5408\u653E\u5927, \u6D41\u7A0B\u56FE\u8282\u70B9\u4FE1\u606F\u53EF\u67E5\u770B\u3002</li>\n          <li>\uD83D\uDC1E \u4FEE\u590D\u4E86\u591A\u80BD\u5B57\u6BB5\u6E32\u67D3\u5B50\u5B57\u6BB5\u663E\u793A\u4F4D\u7F6E\u5F02\u5E38\u7684\u95EE\u9898\u3002</li>\n          <li>\uD83C\uDD95 \u65B0\u589E\u5B57\u6BB5\u7F16\u8F91\u5668\u4E3A\u6587\u672C\u57DF\u65F6\u652F\u6301\u9009\u62E9\u5B57\u6BB5\u7C7B\u578B\u4E3A'\u5B57\u7B26\u4E32'\u3002</li>\n          <li>\uD83D\uDC1E \u4FEE\u590D\u5F85\u529E\u4EFB\u52A1\u529E\u7406\u5B8C\u6210\u540E\u6570\u636E\u66F4\u65B0\u95EE\u9898\u3002</li>\n          <li>\uD83D\uDC1E \u4FEE\u590D\u8868\u683C\u64CD\u4F5C\u680F\u4E2D\u6587\u6A21\u5F0F\u4E0B\u6309\u94AE\u6587\u5B57\u4E0D\u5B8C\u6574\u663E\u793A\u95EE\u9898\u3002</li>\n          <li>\uD83C\uDD95 \u5BFC\u822A\u65B0\u589E\u6D41\u7A0B\u9875\u9762, \u6D41\u7A0B\u9875\u9762\u652F\u6301\u4E1A\u52A1\u5B57\u6BB5, \u6D41\u7A0B\u5B57\u6BB5\u5B9A\u4E49, \u652F\u6301\u6392\u5E8F\u3002</li>\n          <li>\uD83C\uDD95 \u65B0\u589EJS\u811A\u672C\u6267\u884C\u5F02\u5E38\u6355\u83B7\u3002</li>\n          <li>\uD83C\uDD95 \u8D28\u68C0\u5F55\u5165\u5C55\u793A\u5217\u9009\u62E9\u6539\u4E3A\u6C14\u6CE1\u5361\u7247, \u652F\u6301\u5217\u8BB0\u5F55\u3002</li>\n          <li>\uD83D\uDEE0 \u4F18\u5316\u4E86\u88C5\u914D\u5C5E\u6027\u9875\u8868\u5355, \u5FC5\u586B\u5B57\u6BB5\u53BB\u9664\u524D\u540E\u7A7A\u683C\u5E76\u9A8C\u8BC1\u3002</li>\n          <li>\uD83D\uDEE0 \u6D41\u7A0B\u4F18\u5316, \u6D41\u7A0B\u4E1A\u52A1\u6570\u636E\u5EFA\u6A21\u5BF9\u8C61\u5728\u6D41\u7A0B\u5B9E\u4F8B\u4E0A\u914D\u7F6E\u3002\u8FDB\u5165\u6D41\u7A0B\u529E\u7406\u754C\u9762\u6EDA\u52A8\u5230\u5F53\u524D\u529E\u7406\u8282\u70B9\u3002</li>\n        </ul>\n      "
  }, {
    VersionNumber: 'v2.1.7.24.279',
    date: '2022-07-18',
    content: "\uD83C\uDD95[*c=green [*b\u65B0\u589E*]*]\n\n          \t\uD83D\uDE80\u5EFA\u6A21\u5C5E\u6027\u8868\u5355\u652F\u6301\u52A8\u6001\u9009\u62E9\n\n          \t\uD83D\uDE80\u6DFB\u52A0\u5934\u90E8logo\u70B9\u51FB\u663E\u793A\u5173\u4E8E\u6211\u4EEC\u5F39\u7A97\n\n          \t\uD83D\uDE80\u5EFA\u6A21\u65B0\u589E\u5F39\u7A97\u7C7B\u578B\uFF1A\u56FE\u7247\u9884\u89C8\uFF0C\u56FE\u7247\u9884\u89C8\u652F\u6301\u5355\u4E2A\u4E0B\u8F7D\u53CA\u5168\u90E8\u4E0B\u8F7D\n\n          \t\uD83D\uDE80\u8D28\u68C0\u5F55\u5165\u68C0\u9A8C\u9879\u76EE\u65B0\u589E\u96F6\u4EF6\u53F7\u8BBE\u7F6E\n\n          \t\uD83D\uDE80\u589E\u52A0\u811A\u672C\u4EE3\u7801\u7F16\u8F91\u5668\uFF08ace\uFF09\n\n          \t\uD83D\uDE80\u65B0\u589E\u5F00\u5173\u7F16\u8F91\u5668\u7C7B\u578B\n\n          \t\uD83D\uDE80\u8D28\u68C0\u5F55\u5165\u65B0\u589Ebody\u5217\u7684\u663E\u793A\u9690\u85CF\n\n          \t\uD83D\uDE80\u5F15\u7528\u5BF9\u8C61\u7F16\u8F91\u5668\u3001DB\u503C\u5217\u8868\uFF08\u591A\u9009\uFF09\u7F16\u8F91\u5668\uFF0C\u589E\u52A0\u591A\u884C\u6570\u636E\u5B57\u6BB5\u6620\u5C04\n\n          \t\uD83D\uDE80\u8D28\u68C0\u5F55\u5165footer\u589E\u52A0\u4E0D\u826F\u9879\u548C\u4E0D\u826F\u6570\u8BA1\u7B97\n\n          \t\uD83D\uDE80\u5206\u533A\u5B57\u6BB5\u9ED8\u8BA4\u8D4B\u503C\u589E\u52A0\u5224\u65AD\n\n      \uD83D\uDC84[*b\u4F18\u5316*]\n\n          \t\uD83D\uDC84\u6D41\u7A0B\u5B9E\u4F8B\u5BF9\u8C61\u7ED1\u5B9A\u8282\u70B9\u5B9A\u4E49\u6392\u5E8F\n\n          \t\uD83D\uDC84\u591A\u80BD\u8868\u5355paddign\u8FB9\u8DDD\u8C03\u6574\n\n          \t\uD83D\uDC84\u5EFA\u6A21\u5C5E\u6027\u8868\u5355\uFF0C \u5173\u8054\u9875\u6298\u53E0\u9762\u677F\u6837\u5F0F\u8C03\u6574\n\n          \t\uD83D\uDC84\u5B8C\u5584\u6D41\u7A0B\u4E8B\u4EF6\u5B9A\u4E49\u8868\u5355\n\n          \t\uD83D\uDC84Antd\u56FE\u7247\u4E0A\u4F20\u548C\u5176\u4ED6\u5730\u65B9\u67E5\u770B\u56FE\u7247\uFF0C \u4F7F\u7528rc - viewer\u63D2\u4EF6\u5B9E\u73B0\n\n          \t\uD83D\uDC84\u589E\u52A0\u56FE\u7247\u7F16\u8F91\u5668\u56DE\u5199\u7684\u65F6\u5019loading\u72B6\u6001\n\n          \t\uD83D\uDC84\u4FEE\u6539\u96F6\u4EF6\u53F7\u56DE\u8F66\u4F20\u53C2\n\n          \t\uD83D\uDC84\u5173\u8054\u9875\u6D41\u7A0B\u660E\u7EC6\u8868\u5934\u5C45\u4E2D\n\n          \t\uD83D\uDC84\u5EFA\u6A21\u8868\u5355\u8FC7\u6EE4\u7A7A\u5B57\u7B26\u4E32\n\n          \t\uD83D\uDC84\u767B\u5F55\u9875logo\u4FEE\u6539\n\n          \t\uD83D\uDC84\u4F9B\u5E94\u5546\u9000\u8D27\u6539\u4E3A\u6599\u5E9F\n\n          \t\uD83D\uDC84\u8D28\u68C0\u5F55\u5165\u62A5\u5E9F\u65B9\u5F0F: \u6599\u5E9F\u6539\u4E3A\u4F9B\u5E94\u5546\u9000\u8D27\n\n          \t\uD83D\uDC84\u767B\u5F55\u9875\u754C\u9762\u8C03\u6574\n\n          \t\uD83D\uDC84\u4FEE\u6539\u52A8\u6001\u5217\u5C55\u793A\u9ED8\u8BA4\u6E32\u67D3\n\n          \t\uD83D\uDC84\u4FEE\u6539\u8D28\u68C0\u5F55\u5165footer\u6837\u5F0F\n\n          \t\uD83D\uDC84\u8D28\u68C0\u5F55\u5165\u6837\u5F0F\u9875\u9762\u6837\u5F0F\u653E\u5230\u6837\u5F0F\u8868\n\n          \t\uD83D\uDC84\u91CD\u5199\u4E86\u5C5E\u6027\u8868\u5355\u591A\u80BD\u5B57\u6BB5\u6E32\u67D3\u89C4\u5219\n\n          \t\uD83D\uDC84\u8D28\u68C0\u5F55\u5165\u68C0\u9A8C\u9879\u76EE\u5217\u6A2A\u5411\u62D6\u52A8\u56FA\u5B9A\n\n          \t\uD83D\uDC84\u591A\u80BD\u5B57\u6BB5\u6539\u53D8\u6E05\u7A7A\u4E4B\u524D\u5B57\u6BB5\n\n          \t\uD83D\uDC84\u91CD\u5199\u4E86\u591A\u80BD\u5B57\u6BB5\u6E32\u67D3\u65B9\u5F0F\n\n          \t\uD83D\uDC84\u5206\u533A\u9875\u9762\u65B0\u5EFA\u6570\u636E\u9ED8\u8BA4\u8D4B\u503C\u5206\u533A\u5B57\u6BB5\n\n      \uD83E\uDD16[*b\u4FEE\u590D*]\n\n          \t\uD83E\uDD16\u4FEE\u590D\u5F15\u7528\u5BF9\u8C61\u7F16\u8F91\u5668\u652F\u6301\u53EF\u8F93\u5165\n\n          \t\uD83E\uDD16\u4FEE\u590D\u90E8\u95E8\u9009\u62E9\u62A5\u9519\uFF08 \u4FEE\u6539\u6570\u636E\u683C\u5F0F\uFF09\n\n          \t\uD83E\uDD16\u4FEE\u590D\u8D28\u68C0\u5F55\u5165\u9ED8\u8BA4\u503C\u56DE\u5199\u5F02\u5E38\n\n          \t\uD83E\uDD16\u4FEE\u590D\u8D28\u68C0\u5F55\u5165footer\u4E0D\u826F\u8BA1\u7B97\u5728\u68C0\u9A8C\u8BA1\u5212\u4E4B\u524D\n\n          \t\uD83E\uDD16\u4FEE\u590D\u533A\u5206\u9875\u9762\u63A7\u5236\u53F0\u8B66\u544A\n\n          \t\uD83E\uDD16\u4FEE\u590D\u9875\u9762\u83DC\u5355\u5206\u533A\u5B57\u6BB5\u62A5\u9519\n"
  }]
};
exports.default = _default;