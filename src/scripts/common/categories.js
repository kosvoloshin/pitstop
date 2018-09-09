const $ = require('jquery');

$(document).ready(function() {
  if($('.categories').length){
    $("document").ready(function($){
  
        var fix = $('.categories');
        var scroll = $('.works');
       
        $(window).scroll(function () {
          if ($(this).scrollTop() > 245 ) {
            fix.addClass("fixed");
            scroll.addClass("scroll");
          } else {
            fix.removeClass("fixed");
            scroll.removeClass("scroll");
          }
        });
    });
  }
});