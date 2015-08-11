requirejs.config({
	"baseUrl": "./",
	"paths": {
		'main': 'js/main',
		'jquery': 'bower_components/jquery/dist/jquery'
	}
});


require(['jquery', 'main'], function($){
  	$(function(){
  		$('div.classification .row').each(function(){
  			var $tr = $(this);
  			$(this).find('a').each(function(i){
  				var $a = $(this);
  				$(this).on('click', function(){
  					var index = i+1;
  					var list = $tr.find('.p_list');
  					list.filter(':not(.p'+index+'_list)').hide();
  					list.filter('.p'+index+'_list').toggle();
  					$tr.find('i').not($a.find('i')).removeClass('fa-chevron-circle-down fa-chevron-circle-up').addClass('fa-chevron-circle-up');
  					$a.find('i').toggleClass('fa-chevron-circle-down').toggleClass('fa-chevron-circle-up');
  					return false;
  				});
  			});
  		});
  	});
});