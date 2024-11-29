import { setupJurySwiper } from './swiper/jury';
import { setupReviewsSwiper } from './swiper/reviews';
import { validateForm } from './form/form-validation';
import { playVideo } from './video-load/lazyload-video';
import { changePrice } from './price/price';
import { changeTab } from './faq/tabs';
import { changeAccordeon } from './faq/accordeon';


document.addEventListener('DOMContentLoaded', () => {
  setupJurySwiper();
  setupReviewsSwiper();
  validateForm();
  playVideo();
  changePrice();
  changeTab();
  changeAccordeon();
});
