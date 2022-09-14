// export const reportIP = 'http://121.199.59.1:18080'
// export const reportIP = 'http://192.168.2.84:18080'
//process.env.NODE_ENV === 'development' ? 'http://192.168.2.84:8899' : 'http://192.168.2.10:8077'

/*
 * 锐捷
 * 测试服务器:  http://192.168.85.123
 * 正式环境:    http://192.168.158.58
 */

/* 永祥 */

/* 测试服务器：http://10.16.0.82 */

/* 正式服务器：http://10.16.1.12 */
export var requestIP = process.env.NODE_ENV === 'development' ? 'http://192.168.85.123' : 'http://192.168.85.123';
export var config = {
  version: 'v1.1',
  website: 'www.infinityqs.cn'
};