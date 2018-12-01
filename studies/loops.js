// While Loops//
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
/* While loops are loops that will continue to run as long as a code remains true
and will stop when false */

//For Loops//
var arr = [1, 2, 3, 4, 5];

for(i = 0; i <= arr.length; i++) {
    console.log(i); //Will print out 0 - 5 in order
}
//For loops are loops used to iterate through arrays and will continue until the conditional statement is false

//For in Loops//
var str = "";
var obj = {
    key1 : "dog",
    key2 : 2,
    key3 : true
}
for(var keys in obj) {
    console.log(str + obj[keys]);//Will print out all the values inside quotes
}

//Looping over an array backwards//
var arr1 = [1 ,2 ,3, 4, 5];

for(i = arr1.length; i >= 0; i--) {
    console.log(i);//Will print out 5-0 in order
}