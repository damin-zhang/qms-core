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
 * @Description: ????????????????????????
 */
var rootPath = 'api/query';
/**
 * @description: ?????????????????????
 */

function querySubPageModel(params) {
  return (0, _request.default)("api/query/relation/query", {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????
 */


function queryMBNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromHairStick/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????
 */


function queryYpNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromSample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????????????????
 */


function queryYclNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromRawMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????????????????
 */


function queryDybNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromShortRod/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????
 */


function queryFbNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromSquareBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????
 */


function queryXsdhNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromXiaoShouNumber/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????????????????
 */


function queryFjdybNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromRTRBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????????????????
 */


function queryCpNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromChengPin/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????????????????
 */


function queryThNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/fromTuoHao/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ????????????????????????????????????
 */


function queryYpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/yxTraceabilityChain/hairStickQuerySample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????????????????
 */


function queryDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromDJG/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????????????????????????????
 */


function queryYclToDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromDJGRawMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ???????????????????????????????????????????????????
 */


function queryRkdToDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromRuku/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ?????????????????????????????????????????????
 */


function queryThToDjgCpInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/XNY/fromTuoHao/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????????????????
 */


function queryFjdybInfoNodeData(params) {
  return (0, _request.default)("".concat(rootPath, "/yxTraceabilityChain/shortRodQueryFanjie/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description: ??????????????????????????????????????????
 */


function queryFjdybDetailQuery(_ref) {
  var value = _ref.value;
  return (0, _request.default)("".concat(rootPath, "/yxTraceabilityChain/fanjieDetailsQuery/query"), {
    method: 'POST',
    body: JSON.stringify(value)
  });
}
/**
 * @description:?????????????????????
 */


function materialQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/material/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function receivingQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/details/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:???????????????????????????
 */


function searchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/search/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????
 */


function productQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/product/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????????????????
 */


function productDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/productDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????????????????
 */


function productSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/productSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:??????????????????
 */


function sampleQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/sample/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????????????????
 */


function sampleSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/sampleSearch/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function shortRodQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/shortRod/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function shortRodSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/shortRodSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:??????????????????
 */


function hairStickQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/hairStick/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????????????????
 */


function hairStickDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/hairStickDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????????????????
 */


function hairStickFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/hairStick/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function yxtraceStorageQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/yxtraceStorage/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:???????????????????????????
 */


function yxtraceStorageDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/yxtraceStorageDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function yxtraceStorageFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/yxtraceStorage/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:???????????????????????????
 */


function reverseTruncatedRoundBarQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/reverseTruncatedRoundBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????????????????
 */


function reverseTruncatedRoundBarDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/reverseTruncatedRoundBarDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:???????????????????????????
 */


function cutRoundBarDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/reverseTruncatedRoundBarSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:??????????????????
 */


function squareBarQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/squareBar/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:????????????????????????
 */


function squareBarDetailsQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/squareBarDetails/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:??????????????????
 */


function squareBarSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/squareBarSearch/fields"), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function recycleMateriaQuery(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/recycleMaterial/query"), {
    method: 'POST',
    body: JSON.stringify(params)
  });
}
/**
 * @description:?????????????????????
 */


function recycleMaterialSearchFields(params) {
  return (0, _request.default)("".concat(rootPath, "/yx/recycleMaterialSearch/fields "), {
    method: 'GET',
    body: JSON.stringify(params)
  });
}