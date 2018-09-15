const $ = require('jquery');

$(document).ready(function() {
    if($('.advantage').length){
      $("document").ready(function($){       

        $('.advantage').on('click', function(event) {
            $(this).toggleClass('active');
        });
      });
    }
});