let passwd1 = document.querySelector('#passwd');
let passwd2 = document.querySelector('#passwdConf');
let form = document.querySelector('.formRegistro');
let submit = document.querySelector('button');
let error = document.querySelector('.passwdError');

submit.addEventListener('click', () => {
    if (passwd1.value == passwd2.value && passwd1.value != '') {
        form.submit();
    } else {
        error.removeAttribute('hidden');
    }
})