var flickr = angular.module('flickr', ['ui.router'])


.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('form', {
		url: '/',
		templateUrl: './js/modules/form/form.html',
		controller: 'formCtrl'
	})
	.state('result', {
		url: '/result',
		templateUrl: './js/modules/result/result.html',
		controller: 'resultCtrl'
	});

}])
	
