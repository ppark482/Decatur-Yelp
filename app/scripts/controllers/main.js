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
	  .controller('MainCtrl', ['$scope', 'YelpApi', '$window', '$rootScope',
	  	function ($scope, YelpApi, $window, $rootScope) {

	  		// $scope.restaurants = [];

	  		// YelpApi.retrieveYelp('', function (data) {
	  		// 	$scope.restaurants = data.businesses;
	  		// 	console.log($scope.restaurants);
	  		// });

	  	$rootScope.$on('back-home', function () {
	  		console.log($scope.restaurants);
	  	});

	  	YelpApi.retrieveYelp('', function (data) {
	  		$window.restaurants = data.businesses;
	  		$scope.restaurants = $window.restaurants;
	  		console.log($scope.restaurants);
	  	});

	  	}

	  ]); // end controller

}()); // end iife