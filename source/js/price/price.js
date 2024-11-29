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

export const changePrice = () => {
  tabButtonsPrice.forEach((e) => e.addEventListener('click', changeTab));
};
