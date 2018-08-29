const $ = require('jquery');

$(document).ready(function() {
    if($('.calendar__btn-event').length){
      $("document").ready(function($){
               
            $('.calendar__btn-event').on('click', function(event) {
                event.preventDefault();
                $('.calendar__btn-event').toggleClass('active');
                $('.calendar__row--hiden').toggleClass('active');
                $('.tooltip').removeClass('scale');
            });
        if(document.documentElement.clientWidth < 1200) { 
            $('.calendar__date.active').mousemove(function(){
                $('.tooltip--laptop').css('transform', 'scale(1)');
            });

            $('.calendar__date.active').mouseout(function(){
                $('.tooltip--laptop').css('transform', 'scale(0)');
            });
        };

        if(document.documentElement.clientWidth < 769) { 
            $('.tooltip').removeClass('tooltip--laptop');
            $('.calendar__date.active').on('click', function(){
                $('.tooltip').toggleClass('scale');
            });
        };

      });
    }
});