import mobileMenu from './mobileMenu';
import { Swiper, Navigation } from 'swiper';
import modal from './modal';
import mapYandex from './mapYandex';

Swiper.use(Navigation);

const swiperFeedback = new Swiper('.slider-feedback', {
  loop: true,
  navigation: {
    nextEl: '.slider-feedback__next',
    prevEl: '.slider-feedback__prev',
  },
});

mobileMenu();
modal('order');
mapYandex();
