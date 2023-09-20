// Problem 1 ============================================


// Rewrite the code changing for with while without altering its behaviour
// (th output should stay the same).

// for(let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// Problem 2 ====================================

// The following fuction returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm('Did parents allow you?');
//     }
// }
// console.log(checkAge(18));

// Rewrite the function using '?' or '||'

// function checkAge(age) {
//     (age > 18) ? console.log(true) 
//     : console.log(confirm('Did parents allow you?'));
// }
// console.log(checkAge(28));

// Problem 3 ====================================

// Function min(a,b) 
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance 
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// let a = 12, b = 6;
// function min(a,b) {
//     if (a >= b) {
//         return console.log(`min(${a}, ${b}) == ${b}`);
//     } else {
//         return console.log(`min(${a}, ${b}) == ${a}`);
//     }

    // Solution by writing it shorter
    // if (a >= b) return console.log(`min(${a}, ${b}) == ${b}`);
    // else return console.log(`min(${a}, ${b}) == ${a}`);

    // Solution by using ternary operator '?'
    // (a >= b) ? console.log(`min(${a}, ${b}) == ${b}`)
    // : console.log(`min(${a}, ${b}) == ${a}`);
// }
// console.log(min(a,b));

// Problem 4 ====================================

// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or in other words, 
// multiplies x by itself n times and returns its result.

// For instance 
// pow(3, 2) == 9
// pow(3, 3) == 27
// pow(1, 100) == 1

// let x = 1, n = 100;
// function pow(x,n) {
//     return x ** n;
// }
// console.log(pow(x,n));

// Solution with Arrow fuction
// let pow = (x,n) => {return x ** n};
// console.log(pow(x,n));

// Problem 5 ====================================

// Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     'Do you agree?',
//     function() {console.log('Yes')},
//     function() {console.log('No')}
// );

// replacing function expression with arrow function
// ask(
//     'Do you agree?',
//     () => {console.log('Yes')},
//     () => {console.log('No')}
// );

// Problem 6 ====================================
