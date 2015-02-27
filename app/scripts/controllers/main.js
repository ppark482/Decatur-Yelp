(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name decaturApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the decaturApp
	 */
	angular.module('decaturApp')
	  .controller('MainCtrl', ['$scope', 'YelpApi', '$window', '$rootScope', '$http', 'AjcFeed',
	  	function ($scope, YelpApi, $window, $rootScope, $http, AjcFeed) {

	  		// $scope.restaurants = [];

	  		// YelpApi.retrieveYelp('', function (data) {
	  		// 	$scope.restaurants = data.businesses;
	  		// 	console.log($scope.restaurants);
	  		// });

	  	// $rootScope.$on('back-home', function () {
	  	// 	console.log($scope.restaurants);
	  	// });

	  	// var ajcUrl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.ajc.com/flist/entertainment/restaurants/restaurant-review/fmn/rss/';
	  	// var config = { headers: 
	  	// 	{
	  	// 		'Authorization'									: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==',
	  	// 		'type'													: 'all',
	  	// 		'Access-Control-Allow-Origin' 	: 'http://localhost:9000',
	  	// 		'Access-Control-Allow-Methods'	: 'all',
	  	// 		'Access-Control-Allow-Headers'	: 'X-Requested-With', 
	  	// 		'X-Testing'											: 'testing',
	  	// 		'Content-Type'									: 'contentType',
	  	// 		'dataType'											: 'jsonp'
	  	// 	}			
	  	// };

	  	// $scope.getAJC = function () {
	  	// 	$http.get(ajcUrl, config).then(function (results) {
	  	// 		console.log(results);
	  	// 	}); // end get request
	  	// };

	  	// $scope.getAJC();

	  	AjcFeed.loadFeed().then(function (results) {
	  		console.log(results.feed.entries);
	  		$scope.ajc = results.feed.entries;
	  	});

	  	YelpApi.retrieveYelp('', function (data) {
	  		$window.restaurants = data.businesses;
	  		$scope.restaurants = $window.restaurants;
	  		// console.log($scope.restaurants);
	  	});

	  	} // end function block

	  ]); // end controller

}()); // end iife