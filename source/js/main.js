// import '../js/vendror/swiper.js';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

const jurySwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation, Pagination],
});


const reviewsSwiper = new Swiper('.reviews__swiper', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 1000,
  navigation: {
    nextEl: '.swiper-button--reviews-next',
    prevEl: '.swiper-button--reviews-prev',
  },
  modules: [Navigation, Pagination],
});


const tabButtonsArr = document.querySelectorAll('.price__tab-button');

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

// аккордеон
const accordList = document.querySelectorAll('.faq__tabpanel-list button');

const changeAccordeon = (e) => {
  const currentButton = e.currentTarget;
  const currentAccord = e.currentTarget.previousElementSibling;
  currentAccord.classList.toggle('faq__tab-text-open');

  if(currentAccord.classList.contains('faq__tab-text-open')) {
    currentButton.setAttribute('aria-expanded', 'true');
    currentAccord.setAttribute('aria-hidden', 'false');
  }else {
    currentButton.setAttribute('aria-expanded', 'false');
    currentAccord.setAttribute('aria-hidden', 'true');
  }

};

accordList.forEach((e) => e.addEventListener('click', changeAccordeon));
