const mockVideo = () => {
  const videoContainer = document.querySelector('.video');
  const playBtn = videoContainer.querySelector('.play-btn');

  const startVideo = (e) => {
    e.preventDefault();

    const width = videoContainer.offsetWidth;
    const height = videoContainer.offsetHeight;
    const iframe = document.createElement('iframe');

    iframe.width = width;
    iframe.height = height;
    iframe.src =
      'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&iv_load_policy=3';
    iframe.frameBorder = '0';
    iframe.allowfullscreen = '';
    iframe.allow = 'autoplay';
    iframe.classList = 'video-iframe';

    videoContainer.append(iframe);

    playBtn.style.display = 'none';
    playBtn.removeEventListener('click', startVideo);
    window.addEventListener('resize', updateVideo);
  };

  const updateVideo = () => {
    const videoContainer = document.querySelector('.video');
    const width = videoContainer.offsetWidth;
    const height = videoContainer.offsetHeight;
    const video = videoContainer.querySelector('.video-iframe');

    video.width = width;
    video.height = height;
  };

  playBtn.addEventListener('click', startVideo);
};

export default mockVideo;

// ширина iframe не будет обновляться если videoContainer является grid-item с шириной заданной в fr. Ширину необходимо задавать в % либо minmax(1px, 1fr)
