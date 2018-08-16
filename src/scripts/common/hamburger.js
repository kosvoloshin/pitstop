const $ = require('jquery');

$(document).ready(function() {
    if($('#openFull').length){
      $("document").ready(function($){
        var windowWidth = $(window).width();
        
        $('#openFull').on('click', function(event) {
            event.preventDefault();
            $('#openFull').toggleClass('active');
            $('.menu').toggleClass('active');
            $('.drop-down').removeClass('active');
            $('.drop-down').css('right', windowWidth);
        });
          
      });
    }
});