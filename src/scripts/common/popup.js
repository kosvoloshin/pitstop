const $ = require('jquery');

$(document).ready(function() {
    if($('.popup').length){
      $("document").ready(function($){       

        // попап перезвоните мне
        $('#popup-two').on('click', function(event) {
            event.preventDefault();
            $('.popup--two').toggleClass('active');

            if ($('.popup--two').hasClass('active')) {
                $('.bg-popup').addClass('active');
            } else {
                $('.bg-popup').removeClass('active');
            }
        });

        $('.bg-popup').on('click', function(event) {
            $('.popup').removeClass('active');
            $('.bg-popup').removeClass('active');
        });

        $('.popup-close').on('click', function(event) {
            event.preventDefault();
            $('.popup').removeClass('active');
            $('.bg-popup').removeClass('active');
        });

        // попап задать вопрос
        $('#popup-one').on('click', function(event) {
            event.preventDefault();
            $('.popup--one').toggleClass('active');

            if ($('.popup--one').hasClass('active')) {
                $('.bg-popup').addClass('active');
            } else {
                $('.bg-popup').removeClass('active');
            }
        });

        $('.header__letter').on('click', function(event) {
            event.preventDefault();
            $('.popup--one').toggleClass('active');

            if ($('.popup--one').hasClass('active')) {
                $('.bg-popup').addClass('active');
            } else {
                $('.bg-popup').removeClass('active');
            }
        });
      });
    }
});