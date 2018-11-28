const $ = require('jquery');

// кнопка которая открывает весь список на галерее при мобильном разрешении
$(document).ready(function() {
    if($('.more--gallery').length){
      $("document").ready(function($){       

        $('.more--gallery').on('click', function(event) {
            event.preventDefault();
            $('.tools__item').removeClass('tools__item--hide-xs');
            $('.more--gallery').addClass('visuallyhidden');
        });
      });
    }
});