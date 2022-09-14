/*
 * @Description: 根据用户选择输出对应语言文件
 */
import chinese from './zh-CN';
import english from './en-US';
/* 首次进入页面设置语言 */

if (!localStorage.getItem('AcceptLanguage')) {
  localStorage['AcceptLanguage'] = navigator.language.slice(0, 2) || navigator.userLanguage.slice(0, 2);
}

export default localStorage.getItem('AcceptLanguage') === 'en' ? english : chinese;