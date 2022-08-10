$(document).ready(function(){
    $('.Testimonial__slider').slick({
        autoplay:true
    });

    $('.brands__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.header__burger').click(function(event){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });
          