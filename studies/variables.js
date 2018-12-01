/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName; // declares a variable called "myName". You declare variables using the keywords: "var", "let", "const"
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
myVariable = "someString";
console.log(myVariable); // prints "someString";
//4. let //
let bigBoi = "johnathanial"; 
// declares a block scoped variable named "johnathanial"
console.log(bigBoi);

//5. const //
const smolBoi = "jon"; 
//decares a variable named "jon" that isn't block scoped but can't be changed
console.log(smolBoi);

//6. Hoisting//
var example;
console.log(example); //returns undefined
example = 5;
console.log(example);
//Hoisting is moving all declarations to the top of the current scope (block or function).