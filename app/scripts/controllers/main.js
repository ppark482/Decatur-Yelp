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
	  .controller('MainCtrl', ['$scope', 'YelpApi', '$window',
	  	function ($scope, YelpApi, $window) {

	  		// $scope.restaurants = [];

	  		// YelpApi.retrieveYelp('', function (data) {
	  		// 	$scope.restaurants = data.businesses;
	  		// 	console.log($scope.restaurants);
	  		// });

	  	$scope.restaurants = $window.restaurants;

	  	YelpApi.retrieveYelp('', function (data) {
	  		$window.restaurants = data.businesses;
	  		console.log($window.restaurants);
	  		$scope.restaurants = $window.restaurants;
	  	})

	  	}
	  ]); // end controller

}()); // end iife