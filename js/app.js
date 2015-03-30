var klifeApp = angular.module('klifeApp', []);

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
		"plistID": "xip9s6kelulvuhu",
		"ipaID": "hyrapx6gypzi9zf",
	}];
});