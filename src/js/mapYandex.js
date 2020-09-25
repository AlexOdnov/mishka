const mapYandex = () => {
  const mapContainer = document.querySelector('#map');
  const windowHeight = document.documentElement.clientHeight;

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

  const mapInitializer = () => {
    const mapCoord = mapContainer.getBoundingClientRect().top;
    if (mapCoord <= windowHeight * 2) {
      const mapScript = document.createElement('script');

      mapScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      document.body.append(mapScript);

      mapScript.onload = () => {
        ymaps.ready(init);
      };

      window.removeEventListener('scroll', mapInitializer);
    }
  };

  window.addEventListener('scroll', mapInitializer);
};

export default mapYandex;
