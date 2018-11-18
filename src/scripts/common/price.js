const $ = require('jquery');

$(document).ready(function() {

    if($('.price').length){
        $('.price__check').on('change', function(){
            if($('.price__check--our').prop('checked')){
                $('#our').addClass('active');
                $('#table-our').addClass('active');
            } else {
                $('#our').removeClass('active');
                $('#table-our').removeClass('active');
            }
    
            if($('.price__check--import').prop('checked')){
                $('#import').addClass('active');
                $('#table-import').addClass('active');
            } else {
                $('#import').removeClass('active');
                $('#table-import').removeClass('active');
            }
        });
    
        var fixTop = $('.top');
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500 ) {
                fixTop.addClass("fixed");
            } else {
                fixTop.removeClass("fixed");
            }
        });
    
          
        var fix = $('.more--desktop');
        var head = $('.header').height();
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > head + 315 ) {
                fix.addClass("fixed");
            } else {
                fix.removeClass("fixed");
            }
        });
    
        var fixCat = $('.tabs');
            var scroll = $('.price__heading');
           
            $(window).scroll(function () {
              if ($(this).scrollTop() > head + 131 ) {
                fixCat.addClass("fixed");
                scroll.addClass("scroll");
              } else {
                fixCat.removeClass("fixed");
                scroll.removeClass("scroll");
              }
        });
    };

    if($('.top').length){
        $('a.top[href^="#"]').on('click', function(event) {
            event.preventDefault();
            
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            
            $('html, body').animate({scrollTop: dn}, 1000);
            
        });
    }
});