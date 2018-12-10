const $ = require('jquery');

const slides2 = document.querySelectorAll('.doc__list .doc__item');
const next2 = document.getElementById('next-doc');
const previous2 = document.getElementById('prev-doc');
const controls2 = document.querySelectorAll('.controls--doc');


let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides2[currentSlide].className = 'doc__item';
    currentSlide = (n+slides2.length)%slides2.length; // остаток от деления
    slides2[currentSlide].className = 'doc__item visible';
    
    $('.count-doc').html((currentSlide + 1) + '/' + slides2.length);
    $('.progress-complete-doc').css('width',((currentSlide + 1)/slides2.length)*100+'%');
}

$('.progress-complete-doc').css('width',((currentSlide + 1)/slides2.length)*100+'%');
$('.count-doc').html((currentSlide + 1) + '/' + slides2.length);


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
function slider2Init(){
    if (slides2.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}


module.exports = slider2Init;