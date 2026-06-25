function hasMinimumLength(password){
    return password.length>=8;
}

function hasNumber(password){
    for (const char of password){
        if (char >= '0' && char <='9')
            return true;
    }
    return false;
}

function hasUppercaseLetter(password){
    for (const char of password){
        if (char >= 'A' && char <='Z')
            return true;
    }
    return false;
}

function getFailedRules(password){
    let min = hasMinimumLength(password);
    let number = hasNumber(password);
    let hasUpper = hasUppercaseLetter(password);
    let failedRules = [];

    if(!min) failedRules.push('minimum length');
    if(!number) failedRules.push('number');
    if(!hasUpper) failedRules.push('uppercase letter');

    return failedRules;
}

function validatePassword(password){
    let failedRules = getFailedRules(password);
    let valid = (failedRules.length === 0)? true : false;
    return {valid, failedRules};
}

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));