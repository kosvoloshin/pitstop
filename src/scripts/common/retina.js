const $ = require('jquery');

$(document).ready(function() {
    var images = $('.service__item img');
    images.each(function(i) {
        $(this).width($(this).width() / 2);
    });
});