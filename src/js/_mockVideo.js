const mockVideo = () => {
  const videoContainer = document.querySelector('.video');
  const playBtn = videoContainer.querySelector('.play-btn');

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const width = videoContainer.offsetWidth;
    const height = videoContainer.offsetHeight;

    const iframe = document.createElement('iframe');

    iframe.width = width;
    iframe.height = height;
    iframe.src =
      'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&iv_load_policy=3';
    iframe.frameborder = '0';
    iframe.allow = 'autoplay;';
    iframe.allowfullscreen = '';

    videoContainer.append(iframe);

    playBtn.style.display = 'none';
  });
};

export default mockVideo;
