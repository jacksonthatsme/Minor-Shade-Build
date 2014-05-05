$('#add-to-cart').click(function(){
  function removeAnimation(){
    $('#cart-count').removeClass('bounce');
  }
  $('#cart-count').addClass('bounce');
  /* $('#cart-count').delay(5000).removeClass('bounce'); */
  setTimeout(function() {
    $('#cart-count').removeClass('bounce');
  }, 1200);
});



var model = new HeadImage("model");
model.setImageDirection();


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");