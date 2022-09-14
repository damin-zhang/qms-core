"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cutRoundBarDetailsQuery = cutRoundBarDetailsQuery;
exports.hairStickDetailsQuery = hairStickDetailsQuery;
exports.hairStickFields = hairStickFields;
exports.hairStickQuery = hairStickQuery;
exports.materialQuery = materialQuery;
exports.productDetailsQuery = productDetailsQuery;
exports.productQuery = productQuery;
exports.productSearchFields = productSearchFields;
exports.queryCpNodeData = queryCpNodeData;
exports.queryDjgCpInfoNodeData = queryDjgCpInfoNodeData;
exports.queryDybNodeData = queryDybNodeData;
exports.queryFbNodeData = queryFbNodeData;
exports.queryFjdybDetailQuery = queryFjdybDetailQuery;
exports.queryFjdybInfoNodeData = queryFjdybInfoNodeData;
exports.queryFjdybNodeData = queryFjdybNodeData;
exports.queryMBNodeData = queryMBNodeData;
exports.queryRkdToDjgCpInfoNodeData = queryRkdToDjgCpInfoNodeData;
exports.querySubPageModel = querySubPageModel;
exports.queryThNodeData = queryThNodeData;
exports.queryThToDjgCpInfoNodeData = queryThToDjgCpInfoNodeData;
exports.queryXsdhNodeData = queryXsdhNodeData;
exports.queryYclNodeData = queryYclNodeData;
exports.queryYclToDjgCpInfoNodeData = queryYclToDjgCpInfoNodeData;
exports.queryYpInfoNodeData = queryYpInfoNodeData;
exports.queryYpNodeData = queryYpNodeData;
exports.receivingQuery = receivingQuery;
exports.recycleMateriaQuery = recycleMateriaQuery;
exports.recycleMaterialSearchFields = recycleMaterialSearchFields;
exports.reverseTruncatedRoundBarDetailsQuery = reverseTruncatedRoundBarDetailsQuery;
exports.reverseTruncatedRoundBarQuery = reverseTruncatedRoundBarQuery;
exports.sampleQuery = sampleQuery;
exports.sampleSearchFields = sampleSearchFields;
exports.searchFields = searchFields;
exports.shortRodQuery = shortRodQuery;
exports.shortRodSearchFields = shortRodSearchFields;
exports.squareBarDetailsQuery = squareBarDetailsQuery;
exports.squareBarQuery = squareBarQuery;
exports.squareBarSearchFields = squareBarSearchFields;
exports.yxtraceStorageDetailsQuery = yxtraceStorageDetailsQuery;
exports.yxtraceStorageFields = yxtraceStorageFields;
exports.yxtraceStorageQuery = yxtraceStorageQuery;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 质量追溯相关接口
 */
var rootPath = 'api/query';
/**
 * @description: 查询子页面数据
 */

function querySubPageModel(params) {
  return (0, _request.default)("api/query/relation/query", {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从毛棒查询所有节点数据
 */


function queryMBNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromHairStick/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从样片查询所有节点数据
 */


function queryYpNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromSample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从原材料查询所有节点数据
 */


function queryYclNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromRawMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从短圆棒查询所有节点数据
 */


function queryDybNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromShortRod/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从方棒查询所有节点数据
 */


function queryFbNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromSquareBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从销售单号查询所有节点数据
 */


function queryXsdhNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromXiaoShouNumber/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从反截短圆棒查询所有节点数据
 */


function queryFjdybNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromRTRBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从成品单据号查询所有节点数据
 */


function queryCpNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromChengPin/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过托号查询所有节点数据
 */


function queryThNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromTuoHao/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过毛棒编码查询样片信息
 */


function queryYpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/yxTraceabilityChain/hairStickQuerySample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 从多晶硅成品查询新能源所有节点数据
 */


function queryDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromDJG/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过原材料编码查询新能源所有节点数据
 */


function queryYclToDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromDJGRawMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过入库单号查询新能源所有节点数据
 */


function queryRkdToDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromRuku/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过托号查询新能源所有节点数据
 */


function queryThToDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromTuoHao/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过短圆棒查询反截短圆棒批次
 */


function queryFjdybInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/yxTraceabilityChain/shortRodQueryFanjie/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: 通过短圆棒查询反截短圆棒批次
 */


function queryFjdybDetailQuery(_ref) {
  var value = _ref.value;
  return (0, _request.default)("".concat(rootPath, "/yxTraceabilityChain/fanjieDetailsQuery/query"), {
    method: 'POST',
    body: JSON.stringify(value)
  });
}
/**
 * @description:原材料批次查询
 */


function materialQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/material/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:原材料批次明细
 */


function receivingQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/details/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:原材料追溯字段查询
 */


function searchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/search/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:产品追溯
 */


function productQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/product/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:产品追溯详情查询
 */


function productDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/productDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:产品追溯字段查询
 */


function productSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/productSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:样片批次查询
 */


function sampleQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/sample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:样片批次字段查询
 */


function sampleSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/sampleSearch/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:短圆棒批次查询
 */


function shortRodQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/shortRod/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:短圆棒字段查询
 */


function shortRodSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/shortRodSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:毛棒批次查询
 */


function hairStickQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/hairStick/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:毛棒批次明细查询
 */


function hairStickDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/hairStickDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:毛棒批次字段查询
 */


function hairStickFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/hairStick/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:多晶硅批次查询
 */


function yxtraceStorageQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/yxtraceStorage/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:多晶硅批次明细查询
 */


function yxtraceStorageDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/yxtraceStorageDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:多晶硅字段查询
 */


function yxtraceStorageFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/yxtraceStorage/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:反截短圆棒批次查询
 */


function reverseTruncatedRoundBarQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/reverseTruncatedRoundBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:反截短圆棒批次明细查询
 */


function reverseTruncatedRoundBarDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/reverseTruncatedRoundBarDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:反截短圆棒字段查询
 */


function cutRoundBarDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/reverseTruncatedRoundBarSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:方棒批次查询
 */


function squareBarQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/squareBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:方棒批次明细查询
 */


function squareBarDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/squareBarDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:方棒字段查询
 */


function squareBarSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/squareBarSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:回收料批次查询
 */


function recycleMateriaQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/recycleMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:回收料字段查询
 */


function recycleMaterialSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/recycleMaterialSearch/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}