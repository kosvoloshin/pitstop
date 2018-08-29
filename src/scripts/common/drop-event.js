const $ = require('jquery');

$(document).ready(function() {
    if($('.drop-down').length) {
        
        $('.drop-down').width($(window).width());

        var menuOffset = $('.header__r').offset().left; 
        var menuOffset2 = $('.header__l').offset().left;

        if(document.documentElement.clientWidth > 769) {
            $('.drop-down').css('left', -menuOffset);

            if(document.documentElement.clientWidth > 769) {
                $('.menu__item').mousemove(function(){
                    $(this).addClass('active');
                    $('.drop-down', this).css('display', 'block');
    
                    if($(window).scroll(function(){
                        $('.menu__item').removeClass('active');
                        $('.drop-down').css('display', 'none');
                    }));
                });
    
                $('.menu__item').mouseout(function(){
                    $(this).removeClass('active');
                    $('.drop-down', this).css('display', 'none');
                });
            }
        }

        if(document.documentElement.clientWidth < 769) {
            $('.drop-menu__col').removeClass('visuallyhidden');
            var windowWidth = $(window).width();

            $('.menu').width($(window).width());
            $('.menu').css('left', -menuOffset);
            $('.drop-down').css('right', windowWidth);

            $('.menu__link--drop').on('click', function(event) {
                event.preventDefault();
                $(this).next('.drop-down').toggleClass('active');
                $(this).next('.drop-down').css('right', -menuOffset2);
            });

            $('.drop-menu__btn').on('click', function(){
                $('.drop-down').removeClass('active');
                $('.drop-down').css('right', windowWidth);
            })
        }
    }
})