const telRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const userTelInput = document.querySelector('.booking__form-item--tel input');
const userCheckboxInput = document.querySelector('.booking__checkbox input');
const bookingButton = document.getElementById('booking-button');

const userTelHandler = () => {

  if (!telRegexp.test(userTelInput.value)) {
    userTelInput.setCustomValidity(`- номер телефона состоит из 11 цифр;
    - в номере телефона не может быть букв`);
  } else {
    userTelInput.setCustomValidity('');
  }
  userTelInput.reportValidity();
};

const userCheckboxHandler = () => {
  if (userCheckboxInput.checked !== true) {
    bookingButton.disabled = true;
  } else {
    bookingButton.disabled = false;
  }
};

export {userTelHandler, userCheckboxHandler};
