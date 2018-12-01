//1. Assignment Operators //
var example = 93;
var example2 = 9;
/* Assignment Operators are operators that assign values to variables */

//2. Arithmetic Operators //
console.log(4 * 3 / 1 + 4943428);
/* Arithmetic Operators are operators that take multiple values and calculates
them, thus returning a single numerical value. The most common are ( + - * / ) */

//3. Comparison Operators //
var three = 3;
var four = 4;
//no function to use but just using for visual reference
if (three === four) {
    return true;
} else {
    return false;
}
/* Comparison Operators are operators that "compares" its operands and returns
a boolean (true/false) as a result */

//4. Logical Operators //
var this1 = 3;
if (this1 != 2 || this1 === 3) {
    return "yes";
}
/* Logical Operators are operators that can be applied to any datatype, logical operators
include "||" (OR) "&&" (AND) and "!" (NOT) */

//5. Unary Operators //
var str  = "this is a string";
typeof str; //Returns string
delete str; //Deletes str
/*A unary operation is an operation with only one operand. The most commonly used
unary operators are typeof and in but also include ones like delete and void */


//6. Ternary Operators //
function getFee(isMember) {
  return (isMember ? "$2.00" : "$10.00");
}
/*This is the only operation that takes three operands, its used in functions
and is a replacement for if statements */