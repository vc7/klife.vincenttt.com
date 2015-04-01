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
	$scope.builds = [{
		"date": {
			"year": "2015",
			"month": "03",
			"day": "30"
		},
		"version": "0.1.1",
		"chanegeLog": "",
		"plistID": "knuf1l8o4q1l360",
		"ipaID": "hyrapx6gypzi9zf",
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
	}];
});