const fibonacci = function(n) {
    if(n < 0) return 'OOPS'
    
    let a = 0, b = 1, c = 1
    
    while(n > 1)
    {
        c = a + b
        a = b
        b = c

        n--
    }
    return c
};


// Do not edit below this line
module.exports = fibonacci;
