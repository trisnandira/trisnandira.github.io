var scroll = new SmoothScroll('a[href*="#"]');

 $(document).ready(function () {

      $('.col-4-lg').hover(

        function () {
          $(this).animate({
            marginTop: "-=1%",
          },200);
        },

        function () {
          $(this).animate({
            marginTop: "0%"
          },200);
        }
      );
    });

 $(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
  });

   $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
  });