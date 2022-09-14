/*
 * @Description: 质量追溯相关接口
 */
import request from './request';
var rootPath = 'api/query';
/**
 * @description: 查询子页面数据
 */

export function querySubPageModel(params) {
  return request("api/query/relation/query", {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从毛棒查询所有节点数据
 */

export function queryMBNodeData(params) {
  return request("".concat(rootPath, "/fromHairStick/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从样片查询所有节点数据
 */

export function queryYpNodeData(params) {
  return request("".concat(rootPath, "/fromSample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从原材料查询所有节点数据
 */

export function queryYclNodeData(params) {
  return request("".concat(rootPath, "/fromRawMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从短圆棒查询所有节点数据
 */

export function queryDybNodeData(params) {
  return request("".concat(rootPath, "/fromShortRod/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从方棒查询所有节点数据
 */

export function queryFbNodeData(params) {
  return request("".concat(rootPath, "/fromSquareBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从销售单号查询所有节点数据
 */

export function queryXsdhNodeData(params) {
  return request("".concat(rootPath, "/fromXiaoShouNumber/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从反截短圆棒查询所有节点数据
 */

export function queryFjdybNodeData(params) {
  return request("".concat(rootPath, "/fromRTRBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从成品单据号查询所有节点数据
 */

export function queryCpNodeData(params) {
  return request("".concat(rootPath, "/fromChengPin/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过托号查询所有节点数据
 */

export function queryThNodeData(params) {
  return request("".concat(rootPath, "/fromTuoHao/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过毛棒编码查询样片信息
 */

export function queryYpInfoNodeData(params) {
  return request("".concat(rootPath, "/yxTraceabilityChain/hairStickQuerySample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从多晶硅成品查询新能源所有节点数据
 */

export function queryDjgCpInfoNodeData(params) {
  return request("".concat(rootPath, "/XNY/fromDJG/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过原材料编码查询新能源所有节点数据
 */

export function queryYclToDjgCpInfoNodeData(params) {
  return request("".concat(rootPath, "/XNY/fromDJGRawMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过入库单号查询新能源所有节点数据
 */

export function queryRkdToDjgCpInfoNodeData(params) {
  return request("".concat(rootPath, "/XNY/fromRuku/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过托号查询新能源所有节点数据
 */

export function queryThToDjgCpInfoNodeData(params) {
  return request("".concat(rootPath, "/XNY/fromTuoHao/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过短圆棒查询反截短圆棒批次
 */

export function queryFjdybInfoNodeData(params) {
  return request("".concat(rootPath, "/yxTraceabilityChain/shortRodQueryFanjie/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过短圆棒查询反截短圆棒批次
 */

export function queryFjdybDetailQuery(_ref) {
  var value = _ref.value;
  return request("".concat(rootPath, "/yxTraceabilityChain/fanjieDetailsQuery/query"), {
    method: 'POST',
    body: JSON.stringify(value)
  });
}
/**
 * @description:原材料批次查询
 */

export function materialQuery(params) {
  return request("".concat(rootPath, "/yx/material/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:原材料批次明细
 */

export function receivingQuery(params) {
  return request("".concat(rootPath, "/yx/details/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:原材料追溯字段查询
 */

export function searchFields(params) {
  return request("".concat(rootPath, "/yx/search/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:产品追溯
 */

export function productQuery(params) {
  return request("".concat(rootPath, "/yx/product/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:产品追溯详情查询
 */

export function productDetailsQuery(params) {
  return request("".concat(rootPath, "/yx/productDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:产品追溯字段查询
 */

export function productSearchFields(params) {
  return request("".concat(rootPath, "/yx/productSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:样片批次查询
 */

export function sampleQuery(params) {
  return request("".concat(rootPath, "/yx/sample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:样片批次字段查询
 */

export function sampleSearchFields(params) {
  return request("".concat(rootPath, "/yx/sampleSearch/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:短圆棒批次查询
 */

export function shortRodQuery(params) {
  return request("".concat(rootPath, "/yx/shortRod/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:短圆棒字段查询
 */

export function shortRodSearchFields(params) {
  return request("".concat(rootPath, "/yx/shortRodSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:毛棒批次查询
 */

export function hairStickQuery(params) {
  return request("".concat(rootPath, "/yx/hairStick/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:毛棒批次明细查询
 */

export function hairStickDetailsQuery(params) {
  return request("".concat(rootPath, "/yx/hairStickDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:毛棒批次字段查询
 */

export function hairStickFields(params) {
  return request("".concat(rootPath, "/yx/hairStick/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:多晶硅批次查询
 */

export function yxtraceStorageQuery(params) {
  return request("".concat(rootPath, "/yx/yxtraceStorage/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:多晶硅批次明细查询
 */

export function yxtraceStorageDetailsQuery(params) {
  return request("".concat(rootPath, "/yx/yxtraceStorageDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:多晶硅字段查询
 */

export function yxtraceStorageFields(params) {
  return request("".concat(rootPath, "/yx/yxtraceStorage/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:反截短圆棒批次查询
 */

export function reverseTruncatedRoundBarQuery(params) {
  return request("".concat(rootPath, "/yx/reverseTruncatedRoundBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:反截短圆棒批次明细查询
 */

export function reverseTruncatedRoundBarDetailsQuery(params) {
  return request("".concat(rootPath, "/yx/reverseTruncatedRoundBarDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:反截短圆棒字段查询
 */

export function cutRoundBarDetailsQuery(params) {
  return request("".concat(rootPath, "/yx/reverseTruncatedRoundBarSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:方棒批次查询
 */

export function squareBarQuery(params) {
  return request("".concat(rootPath, "/yx/squareBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:方棒批次明细查询
 */

export function squareBarDetailsQuery(params) {
  return request("".concat(rootPath, "/yx/squareBarDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:方棒字段查询
 */

export function squareBarSearchFields(params) {
  return request("".concat(rootPath, "/yx/squareBarSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:回收料批次查询
 */

export function recycleMateriaQuery(params) {
  return request("".concat(rootPath, "/yx/recycleMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:回收料字段查询
 */

export function recycleMaterialSearchFields(params) {
  return request("".concat(rootPath, "/yx/recycleMaterialSearch/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}