const reverseString = function(string) {

    let stringReversed = '';
    let length = string.length;

    for(let i=0;i<length;i++){
        stringReversed += string[string.length - 1];
        string = string.slice(0, -1)
    }

    return stringReversed;

    // return string.split('').reverse().join('');

    // found later on that this seems like a better solution
    // it seems to turn the string into an array, reverse it and then turn it into a string again, then it returns    
};

// Do not edit below this line
module.exports = reverseString;
