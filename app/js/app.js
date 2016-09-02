var flickr = angular.module('flickr', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	'use strict';

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('search', {
		url: '/',
		templateUrl: './js/modules/form/search.html',
		controller: 'searchCtrl'
	})
	.state('results', {
		url: '/results',
		templateUrl: './js/modules/result/results.html',
		controller: 'resultsCtrl'
	});

}])
	
