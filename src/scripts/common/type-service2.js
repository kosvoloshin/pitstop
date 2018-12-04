const $ = require('jquery');

$(document).ready(function() {
    if($('.type-service__wrap--two').length){
        // фиксация табов с категориями
            var fixCat = $('.tabs');
            var fix2 = $('#tsb2');
            var scroll = $('.description');
            var head = $('.header').height();
            var size10 = $('.section-wrap').css('padding-top');
            var size11 = $('.title').css('height');
            var size12 = $('.type-service__col').css('height');
            var size13 = $('.description').css('height');

            var sizeSum3 = parseInt(head) + parseInt(size10) + parseInt(size11) + parseInt(size12) + parseInt(size13);
           
            $(window).scroll(function () {
                if ($(this).scrollTop() > sizeSum3 ) {
                    fixCat.addClass("fixed");
                    scroll.addClass("scroll");
                } else {
                    fixCat.removeClass("fixed");
                    scroll.removeClass("scroll");
                }
            });

            var total = $('.type-service__wrap--two').height();

            $(window).scroll(function () {
                if ($(this).scrollTop() > (total * 0.95) ) {
                    fixCat.addClass("hide");
                    fix2.addClass("hide");
                } else {
                    fixCat.removeClass("hide");
                    fix2.removeClass("hide");
                }
            });

        // фиксация кнопки "скачать прайс"
        if($('#tsb2').length){
            var fix2 = $('#tsb2');
            var head = $('.header').css('height'); 
            var size0 = $('.section-wrap').css('padding-top');
            var size1 = $('.title').css('height');
            var size2 = $('.type-service__col').css('height');
            var size3 = $('.description').css('height');
            var size4 = $('.tabs').css('height');
            
            var sizeSum2 = parseInt(head) + parseInt(size0) + parseInt(size1) + parseInt(size2) + parseInt(size3) + parseInt(size4);

            $(window).scroll(function () {
                if ($(this).scrollTop() > sizeSum2 ) {
                    fix2.addClass("fixed");
                } else {
                    fix2.removeClass("fixed");
                }
            });
        };
    };
});