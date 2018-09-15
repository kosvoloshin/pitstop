const $ = require('jquery');

$(document).ready(function() {
    if($('.gallery').length){
      $("document").ready(function($){       

        $('.gallery').on('click', function(event) {
            $(this).toggleClass('active');
        });
      });
    }
});