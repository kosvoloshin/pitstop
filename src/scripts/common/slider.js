const $ = require('jquery');

const slides = document.querySelectorAll('.promo__list .promo__item');
const next = document.getElementById('nextSlide');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');

let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'promo__item';
    currentSlide = (n+slides.length)%slides.length; // остаток от деления
    slides[currentSlide].className = 'promo__item visible';
    
    $('.count').html((currentSlide + 1) + '/' + slides.length);
    $('.progress-complete').css('width',((currentSlide + 1)/slides.length)*100+'%');
}

$('.progress-complete').css('width',((currentSlide + 1)/slides.length)*100+'%');
$('.count').html((currentSlide + 1) + '/' + slides.length);


// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
function showButtons(){
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'flex';
    }
}

// инициализация слайдера
function sliderInit(){
    if (slides.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}

setInterval(function(){
    jQuery('#nextSlide').trigger('click')
}, 7000)


module.exports = sliderInit;