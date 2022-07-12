const sumAll = function(firstNumber, secondNumber) {
    if(firstNumber < 0 || secondNumber < 0) return 'ERROR'
    else if(isNaN(firstNumber) || isNaN(secondNumber)) return 'ERROR'
    else if(typeof firstNumber === 'string' || typeof secondNumber === 'string') return 'ERROR'


    let sum = 0;

    if(firstNumber > secondNumber){
        for(let i = secondNumber; i <= firstNumber; i++){
            sum += i
        }
    } else if(firstNumber < secondNumber){
        for(let i = firstNumber; i <= secondNumber; i++){ 
            sum += i
        }
    }
    else 
        return firstNumber

    return sum
};


// Do not edit below this line
module.exports = sumAll;
