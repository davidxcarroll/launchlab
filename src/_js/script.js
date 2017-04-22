<script type="text/javascript">

  $(".nav-mobile-button .button").click(function(){
    $(".nav .nav-item").toggle();
    $(".nav-mobile-button-icon-menu").toggle();
    $(".nav-mobile-button-icon-close").toggle();
    $(".nav-logo").toggle();
    if($('.nav .inner li div').hasClass('nav-button-home')){
	  	$('.nav .inner li div').removeClass('nav-button-home')
		} else if ($('.nav .inner li div').addClass('nav-button-home'))
    console.log("menu");
  });

</script>