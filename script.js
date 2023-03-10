//regex expression per verificare i campi del form
const alphabeticEx = /^[A-Za-z]+$/;
const mailEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const telEx = /^[0-9]+$/;

//verifica il campo nome

let nameValidation = document.querySelector('#firstName');


function nameCheck () {
    if (nameValidation.value.match(alphabeticEx)) {
        nameValidation.setAttribute('class', 'valid');
    } else if (nameValidation.value.length === 0) {
        nameValidation.removeAttribute('class', 'valid')
    } else {
        nameValidation.setAttribute('class', 'error');
    }
}

nameValidation.addEventListener("focusout", nameCheck);

//verifica il campo cognome

let surnameValidation = document.querySelector('#secondName');


function surnameCheck () {
    if (surnameValidation.value.match(alphabeticEx)) {
        surnameValidation.setAttribute('class', 'valid');
    } else if (nameValidation.value.length === 0) {
        surnameValidation.removeAttribute('class', 'valid')
    } else {
        surnameValidation.setAttribute('class', 'error');
    }
}

surnameValidation.addEventListener("focusout", surnameCheck);

//verifica il campo mail

let mailValidation = document.querySelector('#mail');


function mailCheck () {
    if (mailValidation.value.toLowerCase().match(mailEx)) {
        mailValidation.setAttribute('class', 'valid');
    } else if (mailValidation.value.length === 0) {
        mailValidation.removeAttribute('class', 'valid')
    }
    else {
        mailValidation.setAttribute('class', 'error');
    }
}

mailValidation.addEventListener("focusout", mailCheck);

//verifica il campo telefono

let telValidation = document.querySelector('#telephone');


function telCheck () {
    if (telValidation.value.match(telEx)) {
        telValidation.setAttribute('class', 'valid');
    } else if (telValidation.value.length === 0) {
        telValidation.removeAttribute('class', 'valid',)
    }
    else {
        telValidation.setAttribute('class', 'error');
    }
}

telValidation.addEventListener("focusout", telCheck);

//verifica i campi password 

let pwValidation = document.querySelector('#pw');
let cpwValidation = document.querySelector('#cpw');

function pwCheck () {
    if (pwValidation.value.length === 0 || cpwValidation.value.length === 0 ) {
        pwValidation.removeAttribute('class', 'valid',);
        cpwValidation.removeAttribute('class', 'valid',);
    } else if (pwValidation.value === cpwValidation.value) {
        pwValidation.setAttribute('class', 'valid');
        cpwValidation.setAttribute('class', 'valid');

    } else {
        pwValidation.setAttribute('class', 'error',);
        cpwValidation.setAttribute('class', 'error',);      
    }
}

pwValidation.addEventListener("focusout", pwCheck);
cpwValidation.addEventListener("focusout", pwCheck);

