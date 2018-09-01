const $ = require('jquery');

$(document).ready(function() {
    if($('#slider').length) {
        $('.controls').on('click', function(event) {
            $('.flipper').toggleClass('active');
        });
    };
});