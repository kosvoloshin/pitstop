const $ = require('jquery');

const slides3 = document.querySelectorAll('.thank .thank__item');
const next3 = document.getElementById('next-thank');
const previous3 = document.getElementById('prev-thank');
const controls3 = document.querySelectorAll('.controls--thank');


let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides3[currentSlide].className = 'thank__item';
    currentSlide = (n+slides3.length)%slides3.length; // остаток от деления
    slides3[currentSlide].className = 'thank__item visible';
    
    $('.count-thank').html((currentSlide + 1) + '/' + slides3.length);
    $('.progress-complete-thank').css('width',((currentSlide + 1)/slides3.length)*100+'%');
}

$('.progress-complete-thank').css('width',((currentSlide + 1)/slides3.length)*100+'%');
$('.count-thank').html((currentSlide + 1) + '/' + slides3.length);


// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next3.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous3.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
function showButtons(){
    for(var i=0; i<controls3.length; i++){
        controls3[i].style.display = 'flex';
    }
}

// инициализация слайдера
function slider3Init(){
    if (slides3.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}

module.exports = slider3Init;