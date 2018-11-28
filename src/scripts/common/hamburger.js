const $ = require('jquery');

$(document).ready(function() {
    //открытие мобильного меню
    if($('#openFull').length){
      $("document").ready(function($){       

        $('#openFull').on('click', function(event) {
            $('#openFull').toggleClass('active');

            if ($('#openFull').hasClass('active')) {
                $('.sidebar').addClass('active');
                $('.bg').addClass('active');
            } else {
                $('.sidebar').removeClass('active');
                $('.bg').removeClass('active');
            }
        });
        // закрытие моб меню по клику на затемненный фон
        $('.bg').on('click', function(event) {
            $('#openFull').removeClass('active');
            $('.sidebar').removeClass('active');
            $('.bg').removeClass('active');
        });

        // ссылки с выпадающими меню prevent по клику
        $('#accordion .menu__link').on('click', function(event) {
            event.preventDefault();
        });

      });
    }
});
// аккордеон в моб меню при разрешении меньше 640px
if(document.documentElement.clientWidth < 640) {
    var accordion = document.getElementById("accordion"),
    items = accordion.getElementsByClassName("menu__item"),
    contents = accordion.getElementsByClassName("sub-menu"),
    i;

    accordion.addEventListener("click", function(e) {
        if (e.target.classList.contains("menu__link")) {
            var trigger = e.target;
            var content = trigger.nextElementSibling;
            var item = trigger.parentNode;

            if (!item.classList.contains("active")) { // не активный
                // удаляем active для всех li
                for (i = 0; i < items.length; i++) {
                    items[i].classList.remove("active");
                }
                // добавляем active для текущего li
                item.classList.add("active");

                // закрываем все блоки с контентом
                for (i = 0; i < contents.length; i++) {
                    contents[i].style.height = null;
                }
                // открываем текущий блок с контентом
                content.style.height = content.scrollHeight + "px";
                
                } else { // активный
                // удаляем класс active для текущего li
                item.classList.remove("active");
                
                // закрываем текущий блок с контентом
                content.style.height = null;
            }
        }
    });
};