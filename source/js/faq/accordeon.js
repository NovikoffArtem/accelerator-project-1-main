const accordList = document.querySelectorAll('.faq__tabpanel-list button');
const openAccordeonClass = 'faq__tab-text-open';


const varyAccordeon = (e) => {
  const currentButton = e.currentTarget;
  const currentAccord = e.currentTarget.previousElementSibling;
  currentAccord.classList.toggle(openAccordeonClass);

  if(currentAccord.classList.contains(openAccordeonClass)) {
    currentButton.setAttribute('aria-expanded', 'true');
    currentAccord.setAttribute('aria-hidden', 'false');
  }else {
    currentButton.setAttribute('aria-expanded', 'false');
    currentAccord.setAttribute('aria-hidden', 'true');
  }
};

export const changeAccordeon = () => {
  accordList.forEach((e) => e.addEventListener('click', varyAccordeon));
};
