"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _ButtonHoc = _interopRequireDefault(require("./button/ButtonHoc"));

var _TableHoc = _interopRequireDefault(require("./table/TableHoc"));

var _TabHoc = _interopRequireDefault(require("./tab/TabHoc"));

var _SingleHoc = _interopRequireDefault(require("./layout/SingleHoc"));

var _UpAndDownHoc = _interopRequireDefault(require("./layout/UpAndDownHoc"));

var _LeftAndRightHoc = _interopRequireDefault(require("./layout/LeftAndRightHoc"));

var _ClassRelationHoc = _interopRequireDefault(require("./layout/ClassRelationHoc"));

var _AutoClassHoc = _interopRequireDefault(require("./layout/AutoClassHoc"));

var _BrowseFiles = _interopRequireDefault(require("./relationPage/BrowseFiles"));

var _CustomTemplate = _interopRequireDefault(require("./layout/CustomTemplate"));

var _CalendarHoc = _interopRequireDefault(require("./calendar/CalendarHoc"));

var _ProcessDetailHoc = _interopRequireDefault(require("./relationPage/ProcessDetailHoc"));

var _EmbedThreePartyPage = _interopRequireDefault(require("./relationPage/EmbedThreePartyPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Description: 根据faceType, 返回不同的页面
 */
var _default = function _default(engine) {
  var namespace = engine.namespace,
      faceType = engine.faceType;

  var Cmp = function Cmp() {
    return /*#__PURE__*/_react.default.createElement("div", null);
  };

  if (faceType !== 4 && faceType !== 7 && faceType !== 'processDetail' && faceType !== 'embedThreePartyPage') {
    // 包裹按钮和搜索框
    Cmp = (0, _ButtonHoc.default)(engine)(Cmp);
    if (faceType !== 'browseFiles' && faceType !== 22) // 包裹表格
      Cmp = (0, _TableHoc.default)(engine)(Cmp);
  } // 根据faceType布局


  switch (faceType) {
    case 1:
      Cmp = (0, _SingleHoc.default)(Cmp);
      break;

    case 2:
    case 21:
      Cmp = (0, _UpAndDownHoc.default)(engine)(Cmp);
      break;

    case 3:
      Cmp = (0, _LeftAndRightHoc.default)(Cmp);
      break;

    case 4:
      Cmp = (0, _ClassRelationHoc.default)(engine)(Cmp);
      break;

    case 5:
      Cmp = (0, _UpAndDownHoc.default)(engine)(Cmp);
      Cmp = (0, _AutoClassHoc.default)(engine)(Cmp);
      break;

    case 7:
      Cmp = (0, _CalendarHoc.default)(engine)(Cmp);
      break;

    case 22:
      Cmp = (0, _CustomTemplate.default)(engine)(Cmp);
      break;

    case 'browseFiles':
      Cmp = (0, _BrowseFiles.default)(engine)(Cmp);
      break;

    case 'processDetail':
      Cmp = (0, _ProcessDetailHoc.default)(engine)(Cmp);
      break;

    case 'embedThreePartyPage':
      Cmp = (0, _EmbedThreePartyPage.default)(engine)(Cmp);
      break;

    default:
      Cmp = (0, _SingleHoc.default)(Cmp);
  } // 分区tab


  if (faceType === 1 || faceType === 2 || faceType === 3 || faceType === 7 || faceType === 21) {
    Cmp = (0, _TabHoc.default)(engine)(Cmp);
  }

  function mapStateToProps(state) {
    return {
      model: state[namespace]
    };
  }

  return (0, _dva.connect)(mapStateToProps)(Cmp);
};

exports.default = _default;