/// <reference path="lib/require.js" />
/// <reference path="lib/jquery-2.1.0.js" />

require.config({
	baseUrl: 'js/lib/',
	paths: {
		'jquery': 'jquery.min',
		'underscore': 'underscore-min',
		'angular':'ionic-v1.3.1/js/angular/angular.min',
		'angular-route':'ionic-v1.3.1/js/angular-ui/angular-ui-router.min',
		'angular-animate':'ionic-v1.3.1/js/angular/angular-animate.min',
		'angular-resource':'ionic-v1.3.1/js/angular/angular-resource.min',
		'angular-sanitize':'ionic-v1.3.1/js/angular/angular-sanitize.min',		
		'domReady':'ionic-v1.3.1/js/angular/domReady.min',
		'ionic':'ionic-v1.3.1/js/ionic.min',
		'ionic-bundle': 'ionic-v1.3.1/js/ionic.bundle',
		'ionic-angular':'ionic-v1.3.1/js/ionic-angular.min',
		'common': '../common',
		'app': '../app',
	},
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route':{
        	deps:['angular'],
            exports:'angular-route'
        },
        'ionic-bundle':{
            exports:'ionic-bundle'
        },
    },
    deps:['app'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

//require(['jquery', 'ionicBundle', 'common'], function($, ionB, com) {
//	angular.module('myApp', []).controller('mycontroller', function($scope) {
//		com.log($scope);
//	})
//});