/*
 * 此文件用于定义路由
 */
var routers = [{
  path: '/',
  title: false,
  component: '@/pages/index'
}, {
  path: '/login',
  title: false,
  component: '@/pages/login/login'
}, {
  path: '/loginForward',
  title: '跳转',
  component: '@/pages/loginForward/loginForward'
}];
export default routers;