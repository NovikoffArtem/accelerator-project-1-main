// import '../js/vendror/swiper.js';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // slidesPerView: 4,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation, Pagination],
});


const tabButtonsArr = Array.from(document.querySelectorAll('.price__tab-button'));

let currentCount = document.querySelector('.price__tab-button--active');

const changeTab = (evt) => {
  if (evt.target.closest('button')){
    evt.preventDefault();

    const current = evt.target.closest('button');
    currentCount.classList.remove('price__tab-button--active');
    currentCount.setAttribute('aria-selected', 'false');
    current.classList.add('price__tab-button--active');
    current.setAttribute('aria-selected', 'true');
    currentCount = current;

    const countOfMonths = Number(current.dataset.count);

    const arr = Array.from(document.querySelectorAll('.price-card__count'));
    arr.forEach((e) => {
      const num = e.dataset.count * countOfMonths;
      e.innerHTML = num;
      e.dataset.price = num;
    });
  }
};
tabButtonsArr.forEach((e) => e.addEventListener('click', changeTab));
