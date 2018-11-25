const $ = require('jquery');

$(document).ready(function() {
    if($('#openFull').length){
      $("document").ready(function($){       

        $('#openFull').on('click', function(event) {
            $('#openFull').toggleClass('active');

            if ($('#openFull').hasClass('active')) {
                $('.sidebar').addClass('active');
                $('.bg').addClass('active');
            } else {
                $('.sidebar').removeClass('active');
                $('.bg').removeClass('active');
            }
        });

        $('.bg').on('click', function(event) {
            $('#openFull').removeClass('active');
            $('.sidebar').removeClass('active');
            $('.bg').removeClass('active');
        });

      });
    }
});