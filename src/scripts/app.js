const $ = require('jquery');

import preloader from './common/preloader';

$(document).ready(() => {
  preloader();
})

require('./common/retina');

require('./common/map');

require('./common/price');

const slider = require('./common/slider');

slider(); // инициализируем слайдер 0

const slider1 = require('./common/slider-reviews');

slider1(); // инициализируем слайдер 1

require('./common/hamburger');

require('./common/simple-slider');

require('./common/gallery');

require('./common/type-service2');

require('./common/popup');

if(document.documentElement.clientWidth > 1259) {
  require('./common/faq');
};