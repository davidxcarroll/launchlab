<script type="text/javascript">

	$(document).ready(function(){
	  $(".nav-mobile .button").click(function(){
	    $(".nav .nav-item").toggle();
	    $(".nav-mobile-icon-menu").toggle();
	    $(".nav-mobile-icon-close").toggle();
	    $(".nav-logo").toggle();
	    $(".nav-button-home").toggle();
	    if($('.nav .inner li div').hasClass('nav-button-home')){
		  	$('.nav .inner li div').removeClass('nav-button-home')
			} else if ($('.nav .inner li div').addClass('nav-button-home'))
	    console.log("menu");
	  });
	});

</script>