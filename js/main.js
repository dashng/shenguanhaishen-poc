/**
 * requirejs config
 */

requirejs.config({
	"baseUrl": "./",
	
	"paths": {
		'jquery': 'bower_components/jquery/dist/jquery',
		'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
		'bx_slider': 'bower_components/bxSlider/dist/jquery.bxslider.min'
	},
	
	"shim": {
		'bootstrap': ['jquery'],
		'bx_slider': ['bootstrap'] 
	}
});

require(['jquery', 'bx_slider', 'bootstrap'], function($, bs){
	function get_tmpl(urls){
		$.each(urls, function(i, url){
			$.ajax({
		    	'url': url.url,
		    	'type': 'GET',
		    	'dataType': 'html',
		    	'success': function(res){
		    		url.wrapper[0]?url.wrapper.html(res):'';
		    	} 
		    })
		});
	};
	$(function(){
		get_tmpl([
	              {'url': './header.html', 'wrapper': $('#navbar-wrapper')},
	              {'url': './footer.html', 'wrapper': $('#footer_wrapper')}
	    ]);
		$.fn.bxSlider?$('.bxslider').bxSlider({
	        auto: true
	    }):null;
	    $('.menu > li > a').on('click', function(){
	    	$(this).closest('li').find('ul').slideToggle('slow');
	    });
		$('body').animate({
			'opacity': 1.0
		}, 800);
		
	});
});