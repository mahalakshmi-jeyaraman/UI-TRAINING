const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const contactnumber = document.getElementById('contact-number');
const pincode = document.getElementById('pincode');
const cardnumber = document.getElementById('card-number');
const cardexpiry = document.getElementById('card-expiry');
const cvv = document.getElementById('cvv');


form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) && email.length <= 50;
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const contactnumberValue = contactnumber.value.trim();
    const pincodeValue = pincode.value.trim();
    const cardnumberValue = cardnumber.value.trim();
    const cardexpiryValue = cardexpiry.value.trim();
    const cvvValue = cvv.value.trim();
    const year =  new Date();

    if(firstnameValue === '') {
        setError(firstname, 'Firstname is required');
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Lastname is required');
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(contactnumberValue === '') {
        setError(contactnumber, 'Contact number is required');
    }else if(contactnumberValue.length > 10 || contactnumberValue.length < 10 ) {
        setError(contactnumber, 'Contact Number is not valid')
    }
    else {
        setSuccess(contactnumber);
    }

    if(pincodeValue === '') {
        setError(pincode, 'PIN Code is required');
    } else if (pincodeValue.length < 6 || pincodeValue.length >6) {
        setError(pincode, "PIN Code is not valid");
    } else {
        setSuccess(pincode);
    }
    if(cardnumberValue === '') {
        setError(cardnumber, 'Card Number is required');
    } else if (cardnumberValue.length <16 || cardnumberValue.length >16) {
        setError(cardnumber, "Card Number is not valid");
    } else {
        setSuccess(cardnumber);
    }
    if(cardexpiryValue === '') {
        setError(cardexpiry, 'Card Expiry is required');
    } else if (cardexpiryValue >= year.getFullYear() && (cardexpiryValue.length <4 || cardexpiryValue.length > 4) ) {
        setError(cardexpiry, "Card Expiry is not valid");
    } else {
        setSuccess(cardexpiry);
    }
    if(cvvValue === '') {
        setError(cvv, 'CVV is required');
    } else if (cvvValue.length < 3 || cvvValue.length > 4) {
        setError(cvv, "CVV is not valid");
    } else {
        setSuccess(cvv);
    }
};