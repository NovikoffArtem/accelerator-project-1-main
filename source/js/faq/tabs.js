
const tabButtonsFaq = document.querySelectorAll('.faq__tab-button');
const tabPanelsFaq = document.querySelectorAll('.faq__tabpanel');
const currentButtonClassName = 'faq__tab-button--current';

let currenTabButtonFaq = document.querySelector(`.${currentButtonClassName}`);


const selectTab = (el) => {
  if(el.target.closest('button')) {
    const current = el.target;
    currenTabButtonFaq.classList.remove(currentButtonClassName);
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

export const changeTab = () => {
  tabButtonsFaq.forEach((e) => {
    e.addEventListener('click', selectTab);
  }
  );
};
