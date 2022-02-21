'use strict';

function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log('value of greaterTahn10: ',greaterThan10);
// expected log of the variable greaterThan10:  m => m > n
// because of the way functions work in javascript, we have a "closure" that wraps and saves in scope, the value of n, where n = 10 (becasue of the function call on line 6).
//  in other words, not only is the functional logic assigned to the greaterThan10 variable, but so is the closure and scope where n = 10.

// admittedly 'm' and 'n' are HORRIBLE variable names and don't help us understand what is happening in code.  Perhaps firstNumber and secondNumber would be better...

//the value assigned to greaterThan10 could be written another way and it would look more normal
const someFunciton = (secondNumber) => secondNumber > 10;

let someFunctionResult = someFunciton(11);
console.log('someFunctionResult:', someFunctionResult);

let greaterThan10Result = greaterThan10(11)
console.log('greaterThan10Result:', greaterThan10Result);

// expected output → true

// this could also be written as
let anotherCurriedResult = greaterThan(10)(11);
// expected output → true
console.log('anotherCurriedResult:', anotherCurriedResult);


const curriedFunction = (a) => {
  console.log('a: ', a);
  return (b)  => {
     console.log('b: ', b);
    return (c) => {
       console.log('c: ', c);
      return a + b + c;
    }
  }
}

let curriedFunctionResult = curriedFunction(4)(5)(6);
console.log(curriedFunctionResult);
