const $ = require('jquery');

$(document).ready(function() {
    var images = $('.service__item img');
    images.each(function(i) {
        $(this).width($(this).width() / 2);
    });

    var images2 = $('.service-tabs__item img');
    images2.each(function(i) {
        $(this).width($(this).width() / 2);
    });
});