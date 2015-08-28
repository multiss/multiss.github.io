(function ($h) {
    $h(document).ready(function(){
        $h(".effect-st-portfolio").find(".la-style-portfolio-title").find(".la-style-portfolio-single").find("a.lasps_lightbox").click(function(){
        	 $h('.lavish_header').hide();
        });
        $h(".effect-st-portfolio-light-box-close").click(function(){
            $h('.lavish_header').show();
        });
    });

    

     $h('#myModal_portfolio').on('shown.bs.modal', function () {
  		$h('#myInput_portfolio').focus();
	});
    $h(window).load(function(){
    	$h('a.lasps_lightbox').on('click', function(){
    	var src = $h(this).data('imgsrc');
    	$h('.style_portfolio_large_image').attr("src", src);
    });

    });

})(jQuery);