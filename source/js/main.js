// import '../js/vendror/swiper.js';
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

// свайпер с тренерами жюри
new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
});

// отзывы
new Swiper('.reviews__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 200,
  navigation: {
    nextEl: '.swiper-button--reviews-next',
    prevEl: '.swiper-button--reviews-prev',
  },
  modules: [Navigation],
});


// прайс в абониментах
const tabButtonsPrice = document.querySelectorAll('.price__tab-button');
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
tabButtonsPrice.forEach((e) => e.addEventListener('click', changeTab));

// аккордеон FAQ
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


// табы вопросы и ответы
const tabButtonsFaq = document.querySelectorAll('.faq__tab-button');
let currenTabButtonFaq = document.querySelector('.faq__tab-button--current');
const tabPanelsFaq = document.querySelectorAll('.faq__tabpanel');

const selectTab = (el) => {
  if(el.target.closest('button')) {
    const current = el.target;
    currenTabButtonFaq.classList.remove('faq__tab-button--current');
    currenTabButtonFaq.setAttribute('aria-selected', 'false');
    current.classList.add('faq__tab-button--current');
    current.setAttribute('aria-selected', 'true');
    currenTabButtonFaq = current;
    const id = current.id;

    tabPanelsFaq.forEach((e) => {
      e.hidden = true;
    });

    const currentPanel = Array.from(tabPanelsFaq).find((panel) => {
      if (panel.getAttribute('aria-labelledby') === id) {
        return true;
      }
    });
    currentPanel.hidden = false;
  }
};

tabButtonsFaq.forEach((e) => {
  e.addEventListener('click', selectTab);
});


// lazyLoad для ютуба
const video = document.querySelector('.video');
const videoPreview = video.querySelector('.video__preview');
const playButton = video.querySelector('.video__button');

const generateUrl = (id) => {
  const request = '?autoplay=1&mute=1';
  return `https://www.youtube.com/embed/${ id }${request}`;
};

const createIframe = (id) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl(id));
  return iframe;
};


const videoSrc = video.dataset.video;
const deletedString = 'https://youtu.be/'.length;
const videoId = videoSrc.substring(deletedString, videoSrc.length);

playButton.addEventListener('click', () =>{
  const iframe = createIframe(videoId);

  video.appendChild(iframe);
  videoPreview.remove();
});


// валидация формы
const form = document.querySelector('.form__main');
const inputName = form.querySelector('.form__field--name');
const inputPhone = form.querySelector('.form__field--phone');
const regInput = /^[A-Za-zА-Яа-яЁё\s]+$/;


const clearErrors = (input) => {
  const parent = input.parentNode;
  if(input.classList.contains('form__field--error')){

    if(parent.querySelector('.form__error').nextElementSibling) {
      parent.querySelector('.form__error').nextElementSibling.remove();
    }
    parent.querySelector('.form__error').remove();
    input.classList.remove('form__field--error');

  }
};

const createErrorStyle = (input, text) => {
  const parent = input.parentNode;
  const errorField = document.createElement('p');
  errorField.classList.add('form__error');
  parent.appendChild(errorField);

  input.classList.add('form__field--error');
  errorField.textContent = text;
};

const setupPhoneInput = () => {
  inputPhone.addEventListener('focus', () => {
    if(!/^\+\d*$/.test(inputPhone.value)) {
      inputPhone.value = '+';
    }
  });

  inputPhone.addEventListener('keypress', (e) => {
    if(!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });
};
setupPhoneInput();


const validationInputs = () => {

  let result = true;

  clearErrors(inputPhone);
  clearErrors(inputName);
  clearErrors(inputPhone);

  if(!regInput.test(inputName.value)){
    createErrorStyle(inputName, 'Только буквы и пробелы.');
    result = false;
  }

  if((inputName.value.length <= 1)) {
    createErrorStyle(inputName, 'Длина не менее 2 символов.');
    result = false;
  }

  if(!(inputPhone.value.length >= 12)) {
    createErrorStyle(inputPhone, 'Длина от 12 до 14 символов.');
    result = false;
  }

  // на случай отключения аттрибута required в html
  if(inputPhone.value === ''){
    createErrorStyle(inputPhone, 'Заполните поле');
    result = false;
  }

  return result;
};


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(validationInputs(form) === true) {
    inputName.value = '';
    inputPhone.value = '';
  }
});
