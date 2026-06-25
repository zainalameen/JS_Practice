function isPositive(number){
    if (typeof number === 'number')
    {
        return (number>0)? true : false; 
    }
}

function isNegative(number){
    if (typeof number === 'number')
    {
        return (number<0)? true : false;
    }
}

function isZero(number){
    if(typeof number === 'number' && number === 0)
        return true;
    else 
        return false;
}

function isEven(number){
    if(typeof number){
        return (number%2 == 0)? true : false; 
    }
}

function describeNumber(number){
    let obj = {
        positive: isPositive(number),
        negative: isNegative(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number),
    }

    return obj;
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));