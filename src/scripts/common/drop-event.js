const $ = require('jquery');

$(document).ready(function() {
    if($('.drop-down').length) {
        $('.menu__item').mousemove(function(){
            $(this).addClass('active');
        });

        $('.menu__item').mouseout(function(){
            $(this).removeClass('active');
        });
    }
})