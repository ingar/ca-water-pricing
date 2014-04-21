'use strict';

// var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAutocomplete', 'ngStorage', 'leaflet-directive']);
var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngAutocomplete', 'ngStorage']);

app.config( function ($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('index', {
			// url: '/',
			url: '',
			templateUrl: 'views/templates/home.html', 
			controller: 'myModal'
		})

		.state('agency', {
			url: '/agency',
			templateUrl: 'views/templates/agency.html', 
			controller: 'agencyController'
		})

		.state('user', {
			url: '/user',
			templateUrl: 'views/templates/user.html', 
			controller: 'billsController'
		});


		// .state('test', {
		// 	url: '/test',
		// 	templateUrl: 'views/templates/test.html', 
		// 	controller: 'mapController'
		// });

	// if (window.history && window.history.pushState) {
 //  	$locationProvider.html5Mode(true).hashPrefix('!');
	// }

});