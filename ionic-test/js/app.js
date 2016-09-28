/// <reference path="lib/require.js" />
/// <reference path="lib/jquery-2.1.0.js" />

require.config({
	baseUrl:'js/lib/',
	paths: {
		jquery: 'jquery.min',
		ionicBundle: 'ionic-v1.3.1/js/ionic.bundle',
		underscore: 'underscore-min',
		common:'../common',
	}
});

require(['jquery','ionicBundle','common'], function($,ionB,com) {
	angular.module('myApp', []).controller('mycontroller', function($scope) {
		com.log($scope);
	})
});