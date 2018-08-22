const $ = require('jquery');

function animate() {
        $('.header__l').addClass('animate');
        $('.header__r').addClass('animate');
        $('.slick-prev').addClass('animate');
        $('.slick-next').addClass('animate');
        $('.footer--abs').addClass('animate');
}
window.onload = animate;