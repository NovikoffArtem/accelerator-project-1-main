const video = document.querySelector('.video');
const videoPreview = video.querySelector('.video__preview');
const playButton = video.querySelector('.video__button');


const generateUrl = (id) => {
  const request = '?autoplay=1&mute=1';
  return `https://www.youtube.com/embed/${ id }${request}`;
};

const videoSrc = video.dataset.video;
const deletedString = 'https://youtu.be/'.length;
const videoId = videoSrc.substring(deletedString, videoSrc.length);

const createIframe = (id) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl(id));
  return iframe;
};

export const playVideo = () => {
  playButton.addEventListener('click', () =>{
    const iframe = createIframe(videoId);
    video.appendChild(iframe);
    videoPreview.remove();
  });
};
