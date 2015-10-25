$(document).ready(function() {

  $('.faded').hide().fadeIn(3000);


  $('td a').on("click", function(e){
    e.preventDefault();
    $(".right-img img").remove();
    $(".right-img").append($(this).html());
  });


  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html, body').stop().animate({'scrollTop': target.offset().top}, 900, 'swing');
  }); // end animated scroll

  $(window).scroll( function(){
    $('.fadein').each( function(i) {
       var bottom_of_object = $(this).offset().top + $(this).outerHeight();
       var bottom_of_window = $(window).scrollTop() + $(window).height();
       if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},700);
        }
    });
  }); // end window scroll

  $(window).scroll(function(){
    $('.top-nav').css("top", Math.max(0, 150 - $(this).scrollTop()));
});

  $(".menu").on("click", function(){
    $(".top-nav ul").toggleClass("active");

  });

  

}); //end doc ready
