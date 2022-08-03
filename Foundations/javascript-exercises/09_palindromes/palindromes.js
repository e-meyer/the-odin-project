const palindromes = function (string) {
    let normalString = string.toLowerCase().replace(/[^0-9a-z]/gi, '')
    let reversedString = normalString.split('').reverse().join('')

    return normalString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
