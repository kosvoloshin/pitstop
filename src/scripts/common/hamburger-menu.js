const $ = require('jquery');

$(document).ready(function() {
    if($('#openFull').length){
      $("document").ready(function($){       

        $('#openFull').on('click', function(event) {
            $('#openFull').toggleClass('active');

            if ($('#openFull').hasClass('active')) {
                $('.header__mob-menu').addClass('active');
            } else {
                $('.header__mob-menu').removeClass('active');
                $('.header__mob-menu').removeClass('active-drop');
                $('.dropdown').removeClass('active');
            }
        });

        $('#openDrop').on('click', function(event) {
            event.preventDefault();
            $('.dropdown').toggleClass('active');
            $('.header__mob-menu').toggleClass('active-drop');
        });

      });
    }
});

