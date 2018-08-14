const $ = require('jquery');

$(document).ready(function() {
    if($('.drop-down').length) {
        
        $('.drop-down').width($(window).width());

        var menuOffset = $('.header__r').offset().left; 

        if(document.documentElement.clientWidth > 769) {
            $('.menu__item').mousemove(function(){
                $(this).addClass('active');
                $('.drop-down', this).css('left', -menuOffset);
                $('.drop-down', this).css('z-index', '1');

                if($(window).scroll(function(){
                    $('.menu__item').removeClass('active');
                    $('.drop-down').css('left', '9999px');
                    $('.drop-down').css('z-index', '-1');
                }));
            });

            $('.menu__item').mouseout(function(){
                $(this).removeClass('active');
                $('.drop-down', this).css('left', '9999px');
                $('.drop-down', this).css('z-index', '-1');
            });
        }
    }
})