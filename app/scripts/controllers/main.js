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
	  .controller('MainCtrl', ['$scope', 'YelpApi',
	  	function ($scope, YelpApi) {

	  		$scope.restaurants = [];

	  		YelpApi.retrieveYelp('', function (data) {
	  			$scope.restaurants = data.businesses;
	  			console.log($scope.restaurants);
	  		});

	  	}
	  ]); // end controller

}()); // end iife