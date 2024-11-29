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

  return result;
};

export const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(validationInputs(form) === true) {
      inputName.value = '';
      inputPhone.value = '';
    }
  });
};
