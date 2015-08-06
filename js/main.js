/**
 * requirejs config
 */

requirejs.config({
	"baseUrl": "../",
	
	"paths": {
		'jquery': 'bower_components/jquery/dist/jquery.min',
		'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min'
	},
	
	"shim": {
		'bootstrap': ['jquery']
	}
});

require(['jquery', 'bootstrap'], function($){
	$(function(){
		console.log('loaded!');
	});
});