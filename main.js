const form = document.getElementById('form');

form.addEventListener('click', e => {
    e.preventDefault();
    // body
    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        addErrorTo('firstname', 'First name is required');
    }  else {
        removeErrorFrom('firstname');
    }

    if (lastName === '') {
        addErrorTo('lastname','Last name is required');
    } else {
        removeErrorFrom('lastname');
    }

    if (email === '') {
        addErrorTo('email', 'Email is required');
    }

    if (isValid(email === '')) {
        addErrorTo('email', 'Email cannot be empty');
    } else if (!isValid(email)) {
        addErrorTo('email', 'Email is not valid');
    } else {
         removeErrorFrom('email');
    }

    if (password === '') {
        addErrorTo('password', 'password cannot be empty');
    } else {
        removeErrorFrom('password');
    }
});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
    const small = form[field].parentNode.querySelector('small');
    small.style.opacity = '0';
  }

function isValid(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}