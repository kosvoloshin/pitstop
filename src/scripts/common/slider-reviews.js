const $ = require('jquery');

const slides1 = document.querySelectorAll('.reviews__list .reviews__item');
const next1 = document.getElementById('next');
const previous1 = document.getElementById('prev');
const controls1 = document.querySelectorAll('.controls--reviews');


let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides1[currentSlide].className = 'reviews__item';
    currentSlide = (n+slides1.length)%slides1.length; // остаток от деления
    slides1[currentSlide].className = 'reviews__item visible';
    
    $('.count-reviews').html((currentSlide + 1) + '/' + slides1.length);
    $('.progress-complete-reviews').css('width',((currentSlide + 1)/slides1.length)*100+'%');
}

$('.progress-complete-reviews').css('width',((currentSlide + 1)/slides1.length)*100+'%');
$('.count-reviews').html((currentSlide + 1) + '/' + slides1.length);


// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next1.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous1.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
function showButtons(){
    for(var i=0; i<controls1.length; i++){
        controls1[i].style.display = 'flex';
    }
}

// инициализация слайдера
function slider1Init(){
    if (slides1.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}

setInterval(function(){
    jQuery('#next').trigger('click')
}, 7000)


module.exports = slider1Init;