const $ = require('jquery');

if($('.faq').length){
    var jump = function (e) {
        if (e) {
            var target = $(this).attr("href");
    
        } else {
    
            var target = location.hash;
    
        }
        $('html,body').animate({
    
            scrollTop: $(target).offset().top
    
        }, 1000, function () {
    
            location.hash = target;
    
        });
    }
    
    $('html, body').hide();
    
    $(document).ready(function () {
        $('a[href*="#"].ques__text').bind("click", jump);
    
        if (location.hash) {
            setTimeout(function () {
    
                $('html, body').scrollTop(0).show()
                jump();
    
            }, 1000);
        } else {
    
            $('html, body').show();
    
        }
    });
};