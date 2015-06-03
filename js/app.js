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
			"month": "06",
			"day": "03"
		},
		"version": "0.1.28",
		"chanegeLog": "最後一隻蟲！！！！",
		"plistID": "2nxw4cb124ck9of",
		"ipaID": "cenjbvcy7vqhicr",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "06",
			"day": "03"
		},
		"version": "0.1.27",
		"chanegeLog": "修正一些 UI 方便的 bugs",
		"plistID": "h8ynldbuw1cr9k2",
		"ipaID": "468v4mz26xtwbxr",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "06",
			"day": "03"
		},
		"version": "0.1.26",
		"chanegeLog": "修正從猜您喜歡開書評分不一致的問題，修正通知開啟書籍評論的問題",
		"plistID": "kn4si5a1ggq79me",
		"ipaID": "pesc3azeh7bxsmy",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "06",
			"day": "03"
		},
		"version": "0.1.25",
		"chanegeLog": "修改 bugs: #41900, #41923, #41899, #41894, #41892, #41450",
		"plistID": "3d72z4zozn2h81z",
		"ipaID": "i0avmbaakwk7ki3",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "06",
			"day": "02"
		},
		"version": "0.1.24",
		"chanegeLog": "修改 bugs: #41765, #41894, #41901, #41898, #41900, #41895, #41896, #41893, 移除 build warnings",
		"plistID": "10q9h7ag1ldkb9a",
		"ipaID": "rs1pmxz4tadn3x4",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "06",
			"day": "01"
		},
		"version": "0.1.23",
		"chanegeLog": "調整日期顯示，修改 bugs: #39144, #41750",
		"plistID": "wprz9z8k0qj7yzw",
		"ipaID": "l390iifisy6mg2v",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "06",
			"day": "01"
		},
		"version": "0.1.22",
		"chanegeLog": "修改 bugs: #41542, #41044, #41543, #41764",
		"plistID": "qs6jycfn830sw0y",
		"ipaID": "yhfqa9n86lrg9io",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "31"
		},
		"version": "0.1.21",
		"chanegeLog": "修改 bugs: #41770, #41765, #41763, #41762, #41505",
		"plistID": "dhpnwcalv669aa3",
		"ipaID": "70xouz6e49wwwnr",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "29"
		},
		"version": "0.1.20",
		"chanegeLog": "加上服務條款，調整通知取用的機制",
		"plistID": "rwgoncrw3l8n9hh",
		"ipaID": "8udhpeinyb7g8bv",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "29"
		},
		"version": "0.1.19",
		"chanegeLog": "修正 bugs (#41465, #41675, #41737, #39162, #41740, #41748, #41474) 。 log 相關 bug ，顯示無搜尋結果的訊息，調整通知畫面相關的 bugs 。",
		"plistID": "b5a3wdaq5rtl495",
		"ipaID": "zumd2b1fokygfw3",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "28"
		},
		"version": "0.1.18",
		"chanegeLog": "修正 bugs (#41729, #41730, #41615, #41731, #41727, #41735, #41474)",
		"plistID": "9oqxv4r37g5ssfj",
		"ipaID": "ppzx6yu96ac5v8h",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "28"
		},
		"version": "0.1.17",
		"chanegeLog": "完成 eventType 1 的 app 版本判斷及 log 機制。修正送 log 造成的 crash 。修正一些自己發現的 UI bugs 。修正 bugs (#41617)",
		"plistID": "dudb81zkim253n1",
		"ipaID": "jkx98chbxojrcgk",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "28"
		},
		"version": "0.1.16",
		"chanegeLog": "調整 UI 套圖，修正掃描相關問題，避免猜您喜歡無資料造成的 crash, 修正 bugs (#41686, #41689, #41449, #41609, #41677)",
		"plistID": "strdvb3rq7agjnp",
		"ipaID": "ih3gstpf5k9kuur",
		"isProduction": true,
	},
	{
		"date": {
			"year": "2015",
			"month": "05",
			"day": "27"
		},
		"version": "0.1.15",
		"chanegeLog": "修正正式機相關設定造成的 bugs, 修正 bugs (#41683, #41681)",
		"plistID": "lia72bjrw35a3kq",
		"ipaID": "59qeu4pjicaf3kc",
		"isProduction": true,
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
		"ipaID": "rft3u67kwrtlkwa",
		"isProduction": true,
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