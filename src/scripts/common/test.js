const $ = require('jquery');

$(document).ready(function() {
    $('.tools__item').on('click', function(e) {
        $(this).toggleClass('active');
    });
});


const slides2 = document.querySelectorAll('.tools__list .tools__item');
const next2 = document.getElementById('test-next');
const previous2 = document.getElementById('test-prev');
const controls2 = document.querySelectorAll('.test-controls');

let currentSlide = index;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides2[currentSlide].className = 'tools__item';
    currentSlide = (n+slides2.length)%slides2.length; // остаток от деления
    slides2[currentSlide].className = 'tools__item active';
}


// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next2.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous2.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
function showButtons(){
    for(var i=0; i<controls2.length; i++){
        controls2[i].style.display = 'flex';
    }
}

// инициализация слайдера
function sliderInit(){
    if (slides2.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}


module.exports = sliderInit;