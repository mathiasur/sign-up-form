const $pass = document.querySelector('#password');
const $confirm = document.querySelector('#confirmPw');
const $error = document.querySelector('.error-message');

$confirm.addEventListener('change', () => {

    if($confirm.value !== $pass.value) {
        $error.textContent = '*Passwords do not match';
    } else {
        $error.textContent = '';
    }

});