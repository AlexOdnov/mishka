import mobileMenu from './mobileMenu';
import { Swiper, Navigation } from 'swiper';

Swiper.use(Navigation);

const swiperFeedback = new Swiper('.slider-feedback', {
  loop: true,
  navigation: {
    nextEl: '.slider-feedback__next',
    prevEl: '.slider-feedback__prev',
  },
});

mobileMenu();
