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
			"day": "10"
		},
		"version": "--",
		"chanegeLog": "--",
		"plistID": "18183877",
	},
	];
});