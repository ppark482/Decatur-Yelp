(function () {

  'use strict';

  /**
   * @ngdoc overview
   * @name decaturApp
   * @description
   * # decaturApp
   *
   * Main module of the application.
   */
  angular
    .module('decaturApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}()); // end iife