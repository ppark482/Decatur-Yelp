(function(){

	'use strict';

	angular.module('decaturApp')
		.factory('AjcFeed', ['$http', '$window', '$q',
			function ($http, $window, $q) {

		  	// var feed = new google.feeds.Feed('http://www.accessatlanta.com/list/rss-mobile/entertainment/restaurants/featured-atlanta-restaurants/aMT5/');

		  	var feed = new google.feeds.Feed('http://www.ajc.com/flist/entertainment/restaurants/restaurant-review/fmn/rss/');

		  	feed.setNumEntries(5);

				feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
				// feed.setResultFormat(google.feeds.Feed.XML_FORMAT);

				var results = [];
				var loadFeed = function () {
					var deferred = $q.defer();

					feed.load( function (result) {
						// console.log(result.feed.entries);
						deferred.resolve(result);
						// results.push(result.feed.entries);
						// getResults();
					});

					return deferred.promise;
				};

				var getResults = function () {
					return results;
				};

				return {
					loadFeed 	: loadFeed
				};

			} // end function block

		]); // end factory

}()); // end iife