(function($j){
	$j.fn.shkcountSlider = function(){

			$j(this).each(function(i, obj){
    			var current = $j(this);
				var last_limit = $j(this).attr('value');
				val = $j(this).data('start');
				function myFunction() {
   				  var interval = setInterval(function($j){
					 	val= val + 1;
					 	current.text(val);
							if (val >= last_limit) {
						 clearInterval(interval);
						 current.text(last_limit);
						 
						 }
						 
					 
					 }, 100);
				}
			

				myFunction();

			
    		});


}
})(jQuery);