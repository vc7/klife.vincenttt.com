var klifeApp = angular.module('klifeApp', [])
.config([
		'$compileProvider',
	    function( $compileProvider )
	    {   
	        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|itms-services):/);
	    }
	]);

klifeApp.controller('BuildListController', function ($scope, $http) {
	$scope.protocol = "itms-services";
	$scope.builds = [
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "27"
		},
		"version": "0.1.15",
		"chanegeLog": "修正正式機相關設定造成的 bugs, 修正 bugs (#41683, #41681)",
		"plistID": "lia72bjrw35a3kq",
		"ipaID": "59qeu4pjicaf3kc"
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "26"
		},
		"version": "0.1.14",
		"chanegeLog": "使用正式機，修正 bugs (#41646, #40187, #41597, #41670, #41614, #41615)",
		"plistID": "89b4tjn1dpm59oi",
		"ipaID": "rft3u67kwrtlkwa"
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "26"
		},
		"version": "0.1.13",
		"chanegeLog": "修正取得本地端 log 造成的問題 (#41605, #41617), 補上搜尋相關的 log",
		"plistID": "gx1yhtkxrr81rgs",
		"ipaID": "mg8i5efwec9dktc",
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "25"
		},
		"version": "0.1.12",
		"chanegeLog": "修正 bugs (#41525, #41045, #41276, #41595, #41503, #41544, #41609, #41463, #41506, #41564, #41465)",
		"plistID": "6eqrgjmtwdo2f7c",
		"ipaID": "9a47zmmdt006bt0",
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "25"
		},
		"version": "0.1.11",
		"chanegeLog": "加入 log 。 修正 bugs (#41516, #41580, #41528, #41507, #41527)",
		"plistID": "fal1tfda1rg95gk",
		"ipaID": "ltpthkisrjf4mh1",
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "22"
		},
		"version": "0.1.10",
		"chanegeLog": "導覽頁完成",
		"plistID": "yxja2r5ge66tq84",
		"ipaID": "o5ugzasvg3oc82p",
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "21"
		},
		"version": "0.1.9",
		"chanegeLog": "帳號登入，書櫃同步",
		"plistID": "cndpypeujjgeuxm",
		"ipaID": "fqfb0d2c61n4v53",
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "19"
		},
		"version": "0.1.8",
		"chanegeLog": "更新 app icon，包含 4/18 修的 bugs (#40249, #41466, #41468, #39324, #40163, #41232, #41470, #41273, #40246, #41233)",
		"plistID": "lkclnwfpqjc1xhk",
		"ipaID": "ugfomugcx53k01c",
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "14"
		},
		"version": "0.1.7",
		"chanegeLog": "通知列表，無網路提示",
		"plistID": "vb5ywk4brwkiu6m",
		"ipaID": "okr5duysevo6qwq",
	},
	{
		"date": {
			"year": "2015",
			"month": "04",
			"day": "24"
		},
		"version": "0.1.6",
		"chanegeLog": "完成 sprint 8, 仍有已知的 bug 需要後續處理",
		"plistID": "t0016a3rftzrhn4",
		"ipaID": "hm1v4f4w03d4lyy",
	},
	{
		"date": {
			"year": "2015",
			"month": "04",
			"day": "16"
		},
		"version": "0.1.5",
		"chanegeLog": "完成 sprint 7 除了通知以外所有項目、設定頁、問題回報、瀏覽相關書籍等。建構 Facebook Profile 暫存機制。建構 GA 基礎架構，試試紀錄一些基本的事件。部分頁面加入單元測試",
		"plistID": "06r3j4bu26s57mo",
		"ipaID": "7dp8g9lpcddtu96",
	},
	{
		"date": {
			"year": "2015",
			"month": "04",
			"day": "09"
		},
		"version": "0.1.4",
		"chanegeLog": "完成評等顯示及即時更新、書籍資訊頁可以載入歷作",
		"plistID": "42mpqhpvgn6evje",
		"ipaID": "5pbb49xsmz88wcn",
	},
	{
		"date": {
			"year": "2015",
			"month": "04",
			"day": "08"
		},
		"version": "0.1.3",
		"chanegeLog": "加入評等及評論功能、加入分享內部評論到 Facebook 的功能",
		"plistID": "a5lymfn7ohbxhd5",
		"ipaID": "hqrusjhs7s6rxcl",
	},
	{
		"date": {
			"year": "2015",
			"month": "04",
			"day": "01"
		},
		"version": "0.1.2",
		"chanegeLog": "(1) 整併內容簡介和目錄 (2) 新增評論呈現的 UI (3) 加入評等的 UI 及功能， server 資料待接",
		"plistID": "qy6z4tk76y5njen",
		"ipaID": "kp62qmeal9zjstz",
	},
	{
		"date": {
			"year": "2015",
			"month": "03",
			"day": "30"
		},
		"version": "0.1.1",
		"chanegeLog": "",
		"plistID": "knuf1l8o4q1l360",
		"ipaID": "hyrapx6gypzi9zf",
	}];
});