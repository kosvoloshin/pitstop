const $ = require('jquery');

$(document).ready(function() {
    if($('#openFull').length){
      $("document").ready(function($){
        
        $('#openFull').on('click', function(event) {
            event.preventDefault();
            $('#openFull').toggleClass('active');
            $('.menu').toggleClass('active');
        });
          
      });
    }
});