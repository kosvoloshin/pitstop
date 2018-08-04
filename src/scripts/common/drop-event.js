const $ = require('jquery');

$(document).ready(function() {
    if($('.drop-down').length) {
        
        $('.menu__item').mousemove(function(){
            $(this).addClass('active');
            $('.drop-down', this).css('left', '0');
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
})