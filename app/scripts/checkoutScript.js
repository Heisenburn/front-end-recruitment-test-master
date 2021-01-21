let validateErrors = 0; // state containing errors quantity  => if 0 then send form

const setInvalidInput = (elementInDOM, errorCommunication) => { // DRY
  validateErrors += 1; // updating state
  elementInDOM.value = '';
  elementInDOM.placeholder = errorCommunication;
  elementInDOM.classList.add('invalidInput');
};


document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault();


  document.querySelectorAll('input').forEach((item)=>{
    if (item.value === '') {
      setInvalidInput(item, 'Cannot be empty!');
    }
  });


  const emailInput = document.querySelector('#email');

  if (emailInput.value.includes('@') === false ) {
    setInvalidInput(emailInput, 'Not a valid email address!');
  }


  const postCodeInput = document.querySelector('#postalCode');

  if (postCodeInput.value.length !== 5) {
    setInvalidInput(postCodeInput, 'Not a valid postal code');
  }

  const phoneNumberInput = document.querySelector('#phoneNumber');

  if (phoneNumberInput.value.length !== 10) {
    setInvalidInput(phoneNumberInput, 'Not a valid phone number');
  }

  const creditCardInput = document.querySelector('#creditCardNumber');

  if (creditCardInput.value.length !== 19 || [...creditCardInput.value].reduce((n, x) => n + (x === '-'), 0) !== 3 ) { // counting occurences of "-" in credit card number
    setInvalidInput(creditCardInput, 'Not a valid credit card number');
  }


  const securityCodeInput = document.querySelector('#securityCode');

  if (securityCodeInput.value.length !== 3) {
    setInvalidInput(securityCodeInput, 'Not a valid security code');
  }

  const expirationDateInput = document.querySelector('#expirationDate');

  if (expirationDateInput.value.length !== 5 || expirationDateInput.value.includes('/') === false) {
    setInvalidInput(expirationDateInput, 'Not a valid expiration date');
  }


  if (validateErrors === 0) {
    alert('gitara siema');
  }
});


