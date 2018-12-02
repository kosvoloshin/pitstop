const $ = require('jquery');
    // уменьшение размера изображений для ретина( на главной странице интро блок с сервисами, на странице type-service табы с машинами)
    $(document).ready(function() {

        if ('devicePixelRatio' in window && window.devicePixelRatio > 1) {
            if($('.service__list').length){
                var images = $('.service__item img.service__image-ret');
                images.each(function(i) {
                    $(this).width($(this).width() / 2);
                });
            };
        }
        
        if($('.service-tabs__list').length){
            var images2 = $('.service-tabs__item img');
            images2.each(function(i) {
                $(this).width($(this).width() / 2);
            });
        };
    });