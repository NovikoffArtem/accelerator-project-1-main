import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

export const setupReviewsSwiper = () => {
  if(document.querySelector('.reviews__swiper')){
    new Swiper('.reviews__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 200,
      navigation: {
        nextEl: '.swiper-button--reviews-next',
        prevEl: '.swiper-button--reviews-prev',
      },
      modules: [Navigation],
    });
  }
};
