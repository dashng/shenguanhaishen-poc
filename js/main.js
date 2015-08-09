/**
 * requirejs config
 */

requirejs.config({
	"baseUrl": "./",
	
	"paths": {
		'jquery': 'bower_components/jquery/dist/jquery.min',
		'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'bx_slider': 'bower_components/bxSlider/dist/jquery.bxslider.min'
	},
	
	"shim": {
		'bootstrap': ['jquery'],
		'bx_slider': ['bootstrap'] 
	}
});

require(['jquery', 'bx_slider', 'bootstrap'], function($, bs){
	$(function(){
		$.fn.bxSlider?$('.bxslider').bxSlider({
	        auto: true
	    }):null;
	    $.ajax({
	    	'url': '../header.html',
	    	'type': 'GET',
	    	'dataType': 'html',
	    	'success': function(res){
	    		console.log(res);
	    	} 
	    })
		$('body').animate({
			'opacity': 1.0
		}, 800);
		
	});
});