let nameValidation = document.querySelector('#firstName');

function nameCheck () {
    if (nameValidation.value.length !== 0) {
        nameValidation.setAttribute('class', 'valid');
    } else {
        nameValidation.removeAttribute('class', 'valid')
    }
}

nameValidation.addEventListener("focusout", nameCheck);

