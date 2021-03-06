const $ = require('jquery');

$(document).ready(function() {
    // переключатель списков (отечественные/импортные) на странице price
    if($('.price').length){
        $('.price__check').on('change', function(){
            if($('.price__check--our').prop('checked')){
                $('#our').addClass('active');
                $('.tabs__xs--our').addClass('active');
                $('#table-our').addClass('active');
                $('.tabs__list--our').addClass('active');
            } else {
                $('#our').removeClass('active');
                $('.tabs__xs--our').removeClass('active');
                $('#table-our').removeClass('active');
                $('.tabs__list--our').removeClass('active');
            }
    
            if($('.price__check--import').prop('checked')){
                $('#import').addClass('active');
                $('.tabs__xs--import').addClass('active');
                $('#table-import').addClass('active');
                $('.tabs__list--import').addClass('active');
            } else {
                $('#import').removeClass('active');
                $('.tabs__xs--import').removeClass('active');
                $('#table-import').removeClass('active');
                $('.tabs__list--import').removeClass('active');
            }
        });
    
        // фиксация табов с категориями
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
    // фиксация кнопки "скачать прайс"
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
    // фиксация кнопки "скачать прайс"
    if($('#tsb').length){
        var fix2 = $('#tsb');
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
    // скрол по категориям на странице price
    $(window).scroll(function(){
        var sections = $('.table__block');
        sections.each(function(i,el){
            var top  = $(el).offset().top-230;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.tabs__link.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');

            };
        });
    });
     
    $(".tabs__list--our .tabs__item").on("click","a", function (event) {
        event.preventDefault();
    
        var id  = $(this).attr('href'),
    
            top = $(id).offset().top;
            top = top - 200;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $(".tabs__list--import .tabs__item").on("click","a", function (event) {
        event.preventDefault();
    
        var id  = $(this).attr('href'),
    
            top = $(id).offset().top;
            top = top - 200;
        $('body,html').animate({scrollTop: top}, 800);
    });

    if($('.top').length){
        // кнопка "вверх"
        var fixTop = $('.top');
            
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500 ) {
                fixTop.addClass("fixed");
            } else {
                fixTop.removeClass("fixed");
            }
        });

        var total2 = $('.section-wrap').innerHeight();

        $(window).scroll(function () {
            if ($(this).scrollTop() > (total2 * 0.9) ) {
                fixTop.addClass("hide");
            } else {
                fixTop.removeClass("hide");
            }
        });

        if(document.documentElement.clientWidth < 480) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > (total2 * 0.98) ) {
                    fixTop.addClass("hide");
                } else {
                    fixTop.removeClass("hide");
                }
            });
        };

        if($('.top').length){
            $('a[href*="#"].top').on('click', function(event) {
                event.preventDefault();
                
                var sc = $(this).attr("href"),
                    dn = $(sc).offset().top;
                
                $('html, body').animate({scrollTop: dn}, 1000);
                
            });
        };
    };

    // select с категориями на странице прайс и типовые услуги для мобильного разрешения
    function price_item(g_id) {
        var act = g_id;
        var act_div = '#' + g_id;
        jQuery('#table-our .table__block').show().not(act_div).hide();
    }

    $('input[name=list]').change(function() {
        var curr_item = jQuery('input[name=list]:checked').val();
        
        if (curr_item != "not_changed") {
            if (curr_item != "price0") {
                price_item(curr_item);
            };
        }
    });

    function price_item2(g_id) {
        var act = g_id;
        var act_div = '#' + g_id;
        jQuery('#table-import .table__block').show().not(act_div).hide();
    }

    $('input[name=list-import]').change(function() {
        var curr_item = jQuery('input[name=list-import]:checked').val();
        
        if (curr_item != "not_changed") {
            if (curr_item != "price0") {
                price_item2(curr_item);
            };
        }
    });
});