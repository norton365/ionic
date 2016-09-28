define(['jquery', 'underscore'], function($, _) {
	return {
		logKey: function(key,value) {
			return console.log(key+'：'+value);
		},
		log:function(txt){
			return console.log((new Date().getTime())+''+txt)
		}
	}
})