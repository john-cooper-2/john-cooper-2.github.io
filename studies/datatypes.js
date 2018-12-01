//6. Numbers //
var number1 = 1;
// numbers are numbers.... what more info do you need? (Includes intergers and decimals)

//7. String //
var string = "im a string"; 
/* a string is anything inside a pair of "quotation marks" this includes words, numbers,
and booleans */

// 8. Booleans //
var one = 1;
var two = 2;
console.log(one <= two); 
// this will return a boolean. Booleans = True/False.

//9. Arrays //
var shoppingList = ["Big Bois", "Smol Bois", "Average Bois", "Dat Boi"]; 
/* Arrays are a list of strings, numbers, and booleans separated by commas
and held inside square brackets [ ] */

//10. Objects //
var thisIsAnObject = {
    key1: "boi",
    key2: "booi",
    key3: "boi"
}
//Objects are variables containing key-value pairs. Each key and value are
//separated by a colon " : " and can hold any datatype

//11. Function //
function doSomething(a, b) {
    return a + b;
}
//Functions are blocks of code that are made to do a specific task/tasks
//(The best datatype everrrr!!!)

//12. Undefined //
function undefined1(a, b) {
    return iliketrains;
}
//iliketrains is not defined. To define variables you need "var" or it needs
//to be a parameter

//13. Null //
var trains = null;
//Null is the intentional absense of any value. Null is a primitive value (string, number, boolean, null, undefined, symbol)

//14. NaN //
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log(sanitise('1')); // expected output: "1"
console.log(sanitise('NotANumber')); // expected output: NaN
//NaN = Not A Number,

//15. Infinity and -Infinity //
var bigNumbers = Math.pow(1, 10000) //10,000 is the max [positive] number
 if (bigNumbers === Infinity) {
     return "Dasa big number :O";
 } else {
     return false;
 }
 //Infinity represents the number infinity or infinite on a positive scale, and -Infinity is the same but on a negative scale
 
 /* Primitive daatatypes are datatypes that arent an object and has no methods
    they include booleans, numbers, strings, null, undefined, and symbols.
    
    Simple Datatypes include strings, booleans, null, undefined, and numbers.
    
    The only complex datatype in javascript is Objects. Objects has all 5 simple
    datatypes and is mutable(can be changed). */
    
//Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.