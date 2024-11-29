import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


export const setupJurySwiper = () => {
  if(document.querySelector('.jury__swiper')){
    new Swiper ('.jury__swiper', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      modules: [Navigation],
    });
  }
};
