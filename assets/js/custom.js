$(document).ready(function() {
    'use strict';
    //Intialize Slider
    var slider = new Swiper('#hero', {
        pagination: '.swiper-pagination',
        paginationClickable: false,
        noSwiping: true,
        slidesPerView: 1,
        loop: false,
        parallax: true,
        speed:200,
    });

    var testimonials_slider = new Swiper('#testimonials_slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 1000
    });

    var deadline = '2016/11/18 16:00:00';

    $('.day').countdown(deadline).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime('%D'));
    });

    $('.hour').countdown(deadline).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime('%H'));
    });

    $('.minutes').countdown(deadline).on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime('%M'));
    });

});
