const $ = require('jquery');

$(document).ready(function() {
    if($('.gallery').length){
        $('.controls').on('click', function(event) {
            $('.gallery--visible').toggleClass('hide ');
            $('.gallery--hide').toggleClass('visible');
        });
    };
});