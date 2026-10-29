const subscribeForm = document.querySelector('#subscribeForm');

const emailInput = document.querySelector('.emailInput');

const warningTxt = document.querySelector('.warningTxt');

subscribeForm.addEventListener('submit', (event) => {
     event.preventDefault();
    if (!emailInput.checkValidity()) {
        warningTxt.classList.remove('hidden');
        emailInput.classList.add('error');
        emailInput.setAttribute('aria-invalid', 'true');
    } else {
        warningTxt.classList.add('hidden');
        emailInput.classList.remove('error');
        emailInput.setAttribute('aria-invalid', 'false');
    }
});
