/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

 //////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
  for(var i = 0; i < animals.length; i++){
    if(animals[i].name == name){
      return animals[i];
    }
  }
    return null;
}
 
 
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
 for(var i = 0; i < animals.length; i++){
    if(animals[i].name == name){
      animals[i] = replacement;
    }
  }
}
 
 
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(humans, name){
  for(var i = 0; i < humans.length; i++){
    if(humans[i].name == name){
      humans.splice(i, 1);
      break;
    }
  }
}
 
 
//////////////////////////////////////////////////////////////////////
// Step 4 - Add //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
  /* 
  for(var key in animal){
    if(animal[key].length <= 0){
    
      return null;
    }
  }
 
  */
  for(var i = 0; i < animals.length; i++){
    for(var key in animal){
       if(animal.name !== animals[i].name && animal[key] > 0){  
        return  animals.push(animal);
        }
    }
  }
}
 
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
