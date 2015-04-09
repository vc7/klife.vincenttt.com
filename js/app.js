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