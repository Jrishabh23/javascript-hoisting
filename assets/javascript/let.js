console.log("let js started");
/**
 * @desc The let statement declares a block-scoped local variable, optionally initializing it to a value.
 */

let x = 1;
{
    let x = 2;
    console.log("x inside block", x);
}

console.log("x outside block", x);

console.log("let js End");
//** In let and const, Redeclaring the same variable within the same function or block scope raises a SyntaxError.
// let a = 10;
// let a = 5; //o/p: Uncaught SyntaxError: Identifier 'a' has already been declared
// const a = 10;
// const a = 5; //o/p: Uncaught SyntaxError: Identifier 'a' has already been declared
var a = 10; //working no error get
var a = 5;

//** you also got an error If you use let in switch lop if
var x1 = 0;
switch (
    x1
    // case 0:
    //     let foo;
    //     break;
    // case 1:
    //     let foo; // Uncaught SyntaxError: Identifier 'foo' has already been declared
    //     break;
) {
}
//** Bcz you wrote foo variable in same block; now you use like this
switch (x1) {
    case 0: {
        let foo;
        break;
    }
    case 1: {
        let foo; // Uncaught SyntaxError: Identifier 'foo' has already been declared
        break;
    }
}
