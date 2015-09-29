$(document).ready(function() {


    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();


        var target = $(this.hash);


        $('html, body').stop().animate({
            'scrollTop': target.offset().top
        }, 900, 'swing');
    });

  $(window).scroll( function(){



    $('.fadein').each( function(i) {

    	var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

   if( bottom_of_window > bottom_of_object ){
                
        $(this).animate({'opacity':'1'},700);
                    
      	}
    });

  });




});
