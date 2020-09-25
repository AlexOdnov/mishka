import mobileMenu from './mobileMenu';
import { Swiper, Navigation } from 'swiper';
import modal from './modal';

Swiper.use(Navigation);

const swiperFeedback = new Swiper('.slider-feedback', {
  loop: true,
  navigation: {
    nextEl: '.slider-feedback__next',
    prevEl: '.slider-feedback__prev',
  },
});

const init = () => {
  const myMap = new ymaps.Map('map', {
    center: [59.93944115603922, 30.32302403991186],
    zoom: 16,
  });

  const placemark = new ymaps.Placemark(
    [59.938633647616214, 30.32304549758399],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/backgrounds/map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101],
    }
  );

  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(placemark);
};

mobileMenu();
modal('order');
ymaps.ready(init);
