(function(){

	'use strict';

	angular.module('decaturApp')
		.factory('AjcFeed', ['$http', '$window',
			function ($http, $window) {

		  	var feed = new google.feeds.Feed('http://www.accessatlanta.com/list/rss-mobile/entertainment/restaurants/featured-atlanta-restaurants/aMT5/');

		  	feed.setNumEntries(5);

				feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
				// feed.setResultFormat(google.feeds.Feed.XML_FORMAT);

				var loadFeed = function () {
					feed.load( function (result) {
						console.log(result.feed.entries);
					});
				};
				

				return {
					loadFeed 	: loadFeed
				};

			} // end function block

		]); // end factory

}()); // end iife