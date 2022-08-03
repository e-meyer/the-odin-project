const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(args) {
  // let totalSum = 0

  // if(args.length > 0){
  //   for(let i = 0; i < args.length; i++) totalSum += parseInt(args[i])
  // }

  // return totalSum

  return args.reduce((totalSum, currentNumber) => totalSum + currentNumber, 0)

};

const multiply = function(args) {
  // let finalResult = args[0]

  // for(let i = 1; i < args.length; i++) {
  //   finalResult *= args[i]
  // }

  // return finalResult

  return args.length ? args.reduce((finalResult, currentNumber) => finalResult * currentNumber) : 0

};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let finalResult = 1

  if (a == 0) return finalResult

	for(let i = 1; i < a; i++) finalResult = finalResult * (i + 1)

  return finalResult
};

console.log(multiply([2,4]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
