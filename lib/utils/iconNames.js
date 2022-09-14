"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var names1 = "StepBackward\nStepForward\nFastBackward\nFastForward\nShrink\nArrowsAlt\nDown\nUp\nLeft\nRight\nCaretUp\nCaretDown\nCaretLeft\nCaretRight\nUpCircle\nDownCircle\nLeftCircle\nRightCircle\nDoubleRight\nDoubleLeft\nVerticalLeft\nVerticalRight\nVerticalAlignTop\nVerticalAlignMiddle\nVerticalAlignBottom\nForward\nBackward\nRollback\nEnter\nRetweet\nSwap\nSwapLeft\nSwapRight\nArrowUp\nArrowDown\nArrowLeft\nArrowRight\nPlayCircle\nUpSquare\nDownSquare\nLeftSquare\nRightSquare\nLogin\nLogout\nMenuFold\nMenuUnfold\nBorderBottom\nBorderHorizontal\nBorderInner\nBorderOuter\nBorderLeft\nBorderRight\nBorderTop\nBorderVerticle\nPicCenter\nPicLeft\nPicRight\nRadiusBottomleft\nRadiusBottomright\nRadiusUpleft\nRadiusUpright\nFullscreen\nFullscreenExit"; // 提示建议性图标

var names2 = "Question\nQuestionCircle\nPlus\nPlusCircle\nPause\nPauseCircle\nMinus\nMinusCircle\nPlusSquare\nMinusSquare\nInfo\nInfoCircle\nExclamation\nExclamationCircle\nClose\nCloseCircle\nCloseSquare\nCheck\nCheckCircle\nCheckSquare\nClockCircle\nWarning\nIssuesClose\nStop"; // 编辑类图标

var names3 = "Edit\nForm\nCopy\nScissor\nDelete\nSnippets\nDiff\nHighlight\nAlignCenter\nAlignLeft\nAlignRight\nBgColors\nBold\nItalic\nUnderline\nStrikethrough\nRedo\nUndo\nZoomIn\nZoomOut\nFontColors\nFontSize\nLineHeight\nDash\nSmallDash\nSortAscending\nSortDescending\nDrag\nOrderedList\nUnorderedList\nRadiusSetting\nColumnWidth\nColumnHeight"; // 数据类图标

var names4 = "AreaChart\nPieChart\nBarChart\nDotChart\nLineChart\nRadarChart\nHeatMap\nFall\nRise\nStock\nBoxPlot\nFund\nSliders"; // 品牌和标识

var names5 = "Android\nApple\nWindows\nIe\nChrome\nGithub\nAliwangwang\nDingding\nWeiboSquare\nWeiboCircle\nTaobaoCircle\nHtml5\nWeibo\nTwitter\nWechat\nYoutube\nAlipayCircle\nTaobao\nSkype\nQq\nMediumWorkmark\nGitlab\nMedium\nLinkedin\nGooglePlus\nDropbox\nFacebook\nCodepen\nCodeSandbox\nAmazon\nGoogle\nCodepenCircle\nAlipay\nAntDesign\nAntCloud\nAliyun\nZhihu\nSlack\nSlackSquare\nBehance\nBehanceSquare\nDribbble\nDribbbleSquare\nInstagram\nYuque\nAlibaba\nYahoo\nReddit\nSketch"; // 网站通用图标

var names6 = "AccountBook\nAlert\nApi\nAppstore\nAudio\nBank\nBell\nBook\nBug\nBulb\nCalculator\nBuild\nCalendar\nCamera\nCar\nCarryOut\nCloud\nCode\nCompass\nContacts\nContainer\nControl\nCreditCard\nCrown\nCustomerService\nDashboard\nDatabase\nDislike\nEnvironment\nExperiment\nEyeInvisible\nEye\nFileAdd\nFileExcel\nFileExclamation\nFileImage\nFileMarkdown\nFilePdf\nFilePpt\nFileText\nFileUnknown\nFileWord\nFileZip\nFile\nFilter\nFire\nFlag\nFolderAdd\nFolder\nFolderOpen\nFrown\nFunction\nFundProjectionScreen\nFundView\nFunnelPlot\nGift\nHdd\nHeart\nHome\nHourglass\nIdcard\nInsurance\nInteraction\nLayout\nLike\nLock\nMail\nMedicineBox\nMeh\nMessage\nMobile\nMoneyCollect\nPayCircle\nNotification\nPhone\nPicture\nPlaySquare\nPrinter\nProfile\nProject\nPushpin\nPropertySafety\nRead\nReconciliation\nRedEnvelope\nRest\nRocket\nSafetyCertificate\nSave\nSchedule\nSecurityScan\nSetting\nShop\nShopping\nSkin\nSmile\nSound\nStar\nSwitcher\nTablet\nTag\nTags\nTool\nThunderbolt\nTrophy\nUnlock\nUsb\nVideoCamera\nWallet\nApartment\nAudit\nBarcode\nBars\nBlock\nBorder\nBranches\nCi\nCloudDownload\nCloudServer\nCloudSync\nCloudUpload\nCluster\nCoffee\nCopyright\nDeploymentUnit\nDesktop\nDisconnect\nDollar\nDownload\nEllipsis\nEuro\nException\nExport\nFileDone\nFileJpg\nFileProtect\nFileSync\nFileSearch\nFork\nGateway\nGlobal\nGold\nHistory\nImport\nInbox\nKey\nLaptop\nLink\nLine\nLoading3Quarters\nLoading\nMan\nMenu\nMonitor\nMore\nNumber\nPercentage\nPaperClip\nPound\nPoweroff\nPullRequest\nQrcode\nReload\nSafety\nRobot\nScan\nSearch\nSelect\nShake\nShareAlt\nShoppingCart\nSolution\nSync\nTable\nTeam\nToTop\nTrademark\nTransaction\nUpload\nUserAdd\nUserDelete\nUsergroupAdd\nUser\nUsergroupDelete\nWifi\nWoman"; //第三方图标库

var names7 = "third-browse\nthird-calendar\nthird-chart-bar\nthird-chart-pie\nthird-data-view\nthird-discount\nthird-edit\nthird-electronics\nthird-image-text\nthird-layers\nthird-lock\nthird-menu\nthird-modular\nthird-notification\nthird-task\nthird-time\nthird-unlock\nthird-upload\nthird-work";
var _default = [{
  title: '方向性图标',
  names: names1.split('\n')
}, {
  title: '提示建议性图标',
  names: names2.split('\n')
}, {
  title: '编辑类图标',
  names: names3.split('\n')
}, {
  title: '数据类图标',
  names: names4.split('\n')
}, {
  title: '品牌和标识',
  names: names5.split('\n')
}, {
  title: '网站通用图标',
  names: names6.split('\n')
}, {
  title: '第三方图标库',
  names: names7.split('\n')
}];
exports.default = _default;