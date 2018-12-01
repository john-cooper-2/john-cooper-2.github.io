/* String Methods

The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

There are 3 methods for extracting a part of a string:

slice(start, end) slice() extracts a part of a string and returns the extracted part in a new string.
substring(start, end)substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.
substr(start, length) substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

The replace() method replaces a specified value with another value in a string

A string is converted to upper case with toUpperCase()
A string is converted to lower case with toLowerCase()

concat() joins two or more strings
The concat() method can be used instead of the plus operator
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

String.trim() removes whitespace from both sides of a string
var str = "       Hello World!        ";
alert(str.trim());

The charAt() method returns the character at a specified index (position) in a string
var str = "HELLO WORLD";
str.charAt(0);            // returns H

The charCodeAt() method returns the unicode of the character at a specified index in a string
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

A string can be converted to an array with the split() method
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

*/