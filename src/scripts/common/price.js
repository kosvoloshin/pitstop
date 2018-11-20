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
    
          
        var fixCat = $('.tabs');
            var scroll = $('.price__heading');
            var head = $('.header').height();
            var size10 = $('.price').css('padding-top');
            var size11 = $('.price__heading').css('height');
            var size13 = $('.tabs__list').css('padding-top');

            var sizeSum3 = parseInt(head) + parseInt(size10) + parseInt(size11) + parseInt(size13);
           
            $(window).scroll(function () {
              if ($(this).scrollTop() > sizeSum3 ) {
                fixCat.addClass("fixed");
                scroll.addClass("scroll");
              } else {
                fixCat.removeClass("fixed");
                scroll.removeClass("scroll");
              }
        });
    };

    if($('.price').length){
        var fix = $('.more--desktop');
        var head = $('.header').height();
        var size10 = $('.price').css('padding-top');
        var size11 = $('.price__heading').css('height');
        var size12 = $('.tabs').css('height');
        var sizeSum1 = parseInt(head) + parseInt(size10) + parseInt(size11) + parseInt(size12);

        $(window).scroll(function () {
            if ($(this).scrollTop() > sizeSum1 ) {
                fix.addClass("fixed");
            } else {
                fix.removeClass("fixed");
            }
        });
    };

    if($('.type-service__buttons').length){
        var fix2 = $('.type-service__buttons');
        var head = $('.header').css('height'); 
        var size0 = $('.type-service__wrap').css('padding-top');
        var size1 = $('.title').css('height');
        var size2 = $('.type-service__col').css('height');
        var size3 = $('.description').css('height');
        var size4 = $('.type-service__table').css('padding-top');

        var sizeSum2 = parseInt(head) + parseInt(size0) + parseInt(size1) + parseInt(size2) + parseInt(size3) + parseInt(size4);

        $(window).scroll(function () {
            if ($(this).scrollTop() > sizeSum2 ) {
                fix2.addClass("fixed");
            } else {
                fix2.removeClass("fixed");
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
    };

    if($('.tabs').length){
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('a[href^="#"].tabs__link').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
            
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
        
        function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('.tabs a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.tabs ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }
    };
});