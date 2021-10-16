console.log("var variable", varVar); // o/p : var variable undefined
// console.log("const variable", constVar);// Reference error
// console.log("let variable", letVar);// Reference Error
console.log("var variable", varVar); // undefined
const constVar = "I am const variable";
let letVar = "I am let variable";
var varVar = "I am var variable";

console.log("var variable", varVar); // o/p : var variable I am var variable
console.log("const variable", constVar); // const variable I am const
console.log("let variable", letVar); // let variable I am let variable
/**
 * @desc i used variable before Declaration they got an error,
 * var is undefined
 * let and const Reference error
 * bcz javascript use hoisting.
 */
//**  Only Deceleration are hoisted
// It got an error bcz num is initialize
//console.log(num); // Throws ReferenceError exception
//num = 6; // Initialization

console.log(num2); // undefined
var num2 = 9;
