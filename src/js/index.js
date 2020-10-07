import mobileMenu from './mobileMenu';
import { Swiper, Navigation } from 'swiper';
import modal from './modal';
import mapYandex from './mapYandex';
import mockVideo from './mockVideo';

Swiper.use(Navigation);

if (document.querySelector('.slider-feedback')) {
  const swiperFeedback = new Swiper('.slider-feedback', {
    loop: true,
    navigation: {
      nextEl: '.slider-feedback__next',
      prevEl: '.slider-feedback__prev',
    },
  });
}

mobileMenu();
if (document.querySelector('.modal')) {
  modal('order');
}
if (document.querySelector('#map')) {
  mapYandex();
}
if (document.querySelector('.video')) {
  mockVideo();
}
