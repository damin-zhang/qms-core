/*
 * @Author: your name
 * @Date: 2022-02-08 14:56
 * @LastEditTime: 2022-02-08 14:56
 * @LastEditors: 初始化umi配置文件
 * @Description: 初始化umi配置文件
 * @FilePath: \qms-web\.umirc.ts
 */
import { defineConfig } from 'umi';
import { requestIP } from './src/service/config';
import routes from './src/routes';

export default defineConfig({
  hash: true,
  routes,
  nodeModulesTransform: {
    type: 'none',
  },
  alias: {
    '@': '/src/',
  },
  exportStatic: {},
  proxy: {
    '/api/': {
      target: requestIP,
      changeOrigin: true,
      pathRewrite: { '^/api/': '/api/' },
    },
    '/cs/': {
      target: requestIP,
      changeOrigin: true,
    },
    '/fileServer/': {
      target: requestIP,
      changeOrigin: true,
      pathRewrite: { '^/fileServer/': '/fileServer/' },
    },
    '/RDP-SERVER/': {
      target: 'http://192.168.2.84:18080',
      changeOrigin: true,
      pathRewrite: { '^/RDP-SERVER/': '/RDP-SERVER/' },
    },
  },
  // 暂时关闭dva的model校验，不然在model里面使用组件会报错
  dva: { skipModelValidate: true },
  chainWebpack(config) {
    // antd moment -> dayjs
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin');
  },
  fastRefresh: {},
});
