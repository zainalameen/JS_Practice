function cleanText(text){
    return text.trim();
}

function capitalize(text){
    return text[0].toUpperCase()+text.slice(1).toLowerCase();
}

function formatDisplayName(firstName, lastName){
    return capitalize(cleanText(firstName)) + ' ' + capitalize(cleanText(lastName));
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));

