/*// Using if else construct, write the code which asks "What's the official name of JavaScript?"
// If the visitor enters "ECMASript", then output "Right!", otherwise - output:
// "You don't know? ECMAScript!"

let input;

if (input === "ECMASript") {
    console.log("Right!");
} else {
    console.log("You don't know? ECMAScript!");
}
*/

//=====================================
/*
// Assume that input is always number, if it is greater than 0 output - 1
// if it is less than 0 output - -1, else output - 0

let input;

if (input > 0) {
    console.log(1);
} else if (input < 0) {
    console.log(-1);
} else {
    console.log(0);
}
*/

//=====================================
/*
// Rewrite this if using conditional operator
 
let result;

if (a + b < 4) {
    result = "Below";
} else {
    result = "Over";
}

// Ternary solution below:

(a + b < 4) ? result = "Below" : result = "Over";
*/

//=====================================
/*
// Rewrite if else using multiple ternary operators '?'
// For readability, it's recommended to split the code into multiple lines

let message;

if (login == "Employee") {
    message = "Hello";
} else if (login == "Director") {
    message = "Greetings";
} else if (login == "") {
    message = "No login";
} else {
    message = "";
}

// Ternary solution below:

(login == "Employee") ? message = "Hello"
: (login == "Director") ? message = "Greetings"
: (login == "") ? message = "No login"
: message = "";
*/