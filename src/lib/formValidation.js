
 export function validateEmail(email) {
    const emailRegEx = /\S+@\S+\.\S+/;
    return emailRegEx.test(email);

}

export function validateTwoPassword(password, confirmPass) {
    if (password === confirmPass && password.length < 16 && password.length > 8) {
        return true;
    }
    return false;

}

export function validatePassword(password) {
    if (password.length < 16 && password.length > 5) {
        return true;
    }
    return false;

}

export function validateName(name) {
    if (typeof (name) === 'string' && name.length < 10 && name.length > 1) {
        return true;
    }
    return false;

}

export function validatePhone(num) {
    num = parseInt(num);
    const phoneNumTemplate = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneNumTemplate.test(num);

}

export function validateBio(bio){
    if(bio.length > 0 && bio.length < 100) return true;
    return false;
}
export function validateSignup(req) {
    console.log(req);
    const { firstName, lastName, email, password, passwordVerif, phoneNum, bio } = req.body;
    console.log(validateEmail(email), validatePassword(password, passwordVerif) , validateName(firstName) , validateName(lastName) , validatePhone(phoneNum) , validateBio(bio));
    if (validateEmail(email) && validatePassword(password, passwordVerif) && validateName(firstName) && validateName(lastName) && validatePhone(phoneNum) && validateBio(bio)) {
        return true;
    }
    return false;
}

