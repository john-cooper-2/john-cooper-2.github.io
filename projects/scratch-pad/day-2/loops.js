// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
    function printArrayValues(array) {
 // YOUR CODE BELOW HERE //
    for (var i in array) {
    console.log(array[i]);
}

 
 
 
 // YOUR CODE ABOVE HERE //
}

/**
* Given an input Array, loop backwards over the Array and print its values
* using console.log().
*/
    function printArrayValuesInReverse(array) {
 // YOUR CODE BELOW HERE //
    for (var i = array.length - 1; i > -1; i--) {
      console.log(array[i]);
}

 
 
 // YOUR CODE ABOVE HERE //
}

/**
* Given an input Object, loop over the Object and print its values
* using console.log().
*/

    function printObjectValues(object) {
 // YOUR CODE BELOW HERE //
      for (var i in object) {
        console.log(object[i]);
}
 
 
 
 // YOUR CODE ABOVE HERE //
}

/**
* Given an input Object, return an Array containing the Object keys.
*/

    function getObjectKeys(object) {
 // YOUR CODE BELOW HERE //
      var keys = [];
        for (var key in object) {
          keys.push(key);
    }
 
    return keys;
 
 // YOUR CODE ABOVE HERE //
}
/**
* Given an input Object, loop over the Object and print its keys
* using console.log().
*/
    function printObjectKeys(object) {
      for (var key in object) {
        console.log(key);
}
 
 
}

/**
* Given an input Object, return the length of its key/value pairs
*/
    function getObjectLength(object) {
 // YOUR CODE BELOW HERE //
      var size = Object.keys(object).length;
        return size;
 
 
 // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
  function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var reverse = [];
  for (var key in object){
      reverse.push(object[key]);
    }
  for(var i = reverse.length -1; i > -1; i--){
      console.log(reverse[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}