const $ = require('jquery');

var accordion = document.getElementById("accordion");
var i;
    
accordion.addEventListener("click", function(e) {
  var items = accordion.getElementsByClassName("accordion__item"),
    contents = accordion.getElementsByClassName("accordion__content");
  if (e.target.classList.contains("accordion__trigger")) {
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

      //$(".accordion2").css("transform", two);
      
    } else { // активный
      // удаляем класс active для текущего li
      item.classList.remove("active");
      
      // закрываем текущий блок с контентом
      content.style.height = null;
    }
  }
});

// общие переменные должны отличаться названиями от первого аккордеона
// переменные внутри обработчика событий могут быть такими же
var accordion2 = document.getElementById("accordion2"),
    items2 = accordion2.getElementsByClassName("accordion__item"),
    contents2 = accordion2.getElementsByClassName("accordion__content"),
    i;

accordion2.addEventListener("click", function(e) {
  if (e.target.classList.contains("accordion__trigger")) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;

    if (!item.classList.contains("active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items2.length; i++) {
        items2[i].classList.remove("active");
      }
      // добавляем active для текущего li
      item.classList.add("active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents2.length; i++) {
        contents2[i].style.height = null;
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

// общие переменные должны отличаться названиями от первого аккордеона
// переменные внутри обработчика событий могут быть такими же
var accordion3 = document.getElementById("accordion3"),
    items3 = accordion3.getElementsByClassName("accordion__item"),
    contents3 = accordion3.getElementsByClassName("accordion__content"),
    i;

accordion3.addEventListener("click", function(e) {
  if (e.target.classList.contains("accordion__trigger")) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;

    if (!item.classList.contains("active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items3.length; i++) {
        items3[i].classList.remove("active");
      }
      // добавляем active для текущего li
      item.classList.add("active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents3.length; i++) {
        contents3[i].style.height = null;
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

// общие переменные должны отличаться названиями от первого аккордеона
// переменные внутри обработчика событий могут быть такими же
var accordion4 = document.getElementById("accordion4"),
    items4 = accordion4.getElementsByClassName("accordion__item"),
    contents4 = accordion4.getElementsByClassName("accordion__content"),
    i;

accordion4.addEventListener("click", function(e) {
  if (e.target.classList.contains("accordion__trigger")) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
    var item = trigger.parentNode;

    if (!item.classList.contains("active")) { // не активный
      // удаляем active для всех li
      for (i = 0; i < items4.length; i++) {
        items4[i].classList.remove("active");
      }
      // добавляем active для текущего li
      item.classList.add("active");

      // закрываем все блоки с контентом
      for (i = 0; i < contents4.length; i++) {
        contents4[i].style.height = null;
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

