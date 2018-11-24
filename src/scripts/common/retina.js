const $ = require('jquery');

function retina() {
    $(document).ready(function() {
        if($('.service__list').length){
            var images = $('.service__item img');
            images.each(function(i) {
                $(this).width($(this).width() / 2);
            });
        };
        
        if($('.service-tabs__list').length){
            var images2 = $('.service-tabs__item img');
            images2.each(function(i) {
                $(this).width($(this).width() / 2);
            });
        };
    });
};

window.onload = retina;