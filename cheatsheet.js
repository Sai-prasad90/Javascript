// JavaScript Basics

// Set of JavaScript basic syntax to add, execute, and write basic programming paradigms in JavaScript

// On Page Script

// Adding internal JavaScript to HTML
<script type="text/javascript">
  // JS code goes here
</script>

// External JS File

// Adding external JavaScript to HTML
<script src="filename.js"></script>

// Functions

// JavaScript Function syntax
function nameOfFunction() {
  // function body
}

// DOM Element

// Changing content of a DOM Element
document.getElementById("elementID").innerHTML = "Hello World!";

// Output

// This will print the value of a in JavaScript console
console.log(a);

// Conditional Statements

// Conditional statements are used to perform operations based on some conditions.

// If Statement

// The block of code to be executed when the condition specified is true.
if (condition) {
  // block of code to be executed if the condition is true
}

// If-else Statement

// If the condition for the if block is false, then the else block will be executed.
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}

// Else-if Statement
// A basic if-else ladder
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is
} else {
  // block of code to be executed if the condition1 is false and condition2 is
}

// Switch Statement

// Switch case statement in JavaScript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

// Iterative Statements (Loops)

// Iterative statement facilitates a programmer to execute any block of code lines repeatedly and can be controlled as per conditions added by the programmer.

// For Loop

// For loop syntax in JavaScript
for (statement1; statement2; statement3) {
  // code block to be executed
}

// While Loop

// Runs the code till the specified condition is true
while (condition) {
  // code block to be executed
}

// Do While Loop

// A do while loop is executed at least once despite the condition being true or false
do {
  // run this code in block
  i++;
} while (condition);

// Strings

// The string is a sequence of characters that is used for storing and managing text data.

// charAt method

// Returns the character from the specified index.
str.charAt(3);

// concat method

// Joins two or more strings together.
str1.concat(str2);

// index of method

// Returns the index of the first occurrence of the specified character from the string else -1 if not found.
str.indexOf('substr');

// match method

// Searches a string for a match against a regular expression.
str.match(/(chapter \d+(\.\d)*)/i;);

// replace method

// Searches a string for a match against a specified string or char and returns a new string by replacing the specified values.
str1.replace(str2);

// search method

// Searches a string against a specified value.
str.search('term');

// split method

// Splits a string into an array consisting of substrings.
str.split('\n');

// substring method

// Returns a substring of a string containing characters from the specified indices.
str.substring(0, 5);

// Arrays

// The array is a collection of data items of the same type. In simple terms, it is a variable that contains multiple values.

// variable

// Containers for storing data.
var fruit = ["element1", "element2", "element3"];

// concat method

// Joins two or more arrays together.
concat();

// indexOf method

// Returns the index of the specified item from the array.
indexOf();

// join method

// Converts the array elements to a string.
join();

// pop method

// Deletes the last element of the array.
pop();

// reverse method

// This method reverses the order of the array elements.
reverse();

// sort method

// Sorts the array elements in a specified manner.
sort();

// toString method

// Converts the array elements to a string.
toString();

// valueOf method

// Returns the relevant Number Object holding the value of the argument passed.
valueOf();

// Number Methods

// JS math and number objects provide several constant and methods to perform mathematical operations.

// toExponential method

// Converts a number to its exponential form.
toExponential();

// toPrecision method

// Formats a number into a specified length.
toPrecision();

// toString method

// Converts an object to a string.
toString();

// valueOf method

// Returns the primitive value of a number.
valueOf();

// Maths Methods

// ceil method

// Rounds a number upwards to the nearest integer, and returns the result
ceil(x);

// exp method

// Returns the value of E^x.
exp(x);

// log method

// Returns the logarithmic value of x.
log(x);

// pow method

// Returns the value of x to the power y.
pow(x, y);

// random method

// Returns a random number between 0 and 1.
random();

// sqrt method

// Returns the square root of a number x
sqrt(x);

// Dates

// Date object is used to get the year, month and day. It has methods to get and set day, month, year, hour, minute, and seconds.

// Pulling Date from the Date object

// Returns the date from the date object
getDate();

// Pulling Day from the Date object

// Returns the day from the date object
getDay();

// Pulling Hours from the Date object

// Returns the hours from the date object
getHours();

// Pulling Minutes from the Date object

// Returns the minutes from the date object
getMinutes();

// Pulling Seconds from the Date object

// Returns the seconds from the date object
getSeconds();

// Pulling Time from the Date object

// Returns the time from the date object
getTime();

// Mouse Events

// Any change in the state of an object is referred to as an Event. With the help of JS, you can handle events, i.e., how any specific HTML tag will work when the user does something.

// click

// Fired when an element is clicked
element.addEventListener('click', () => {
  // Code to be executed when the event is fired
});

// oncontextmenu

// Fired when an element is right-clicked
element.addEventListener('contextmenu', () => {
  // Code to be executed when the event is fired
});

// dblclick

// Fired when an element is double-clicked
element.addEventListener('dblclick', () => {
  // Code to be executed when the event is fired
});

// mouseenter

// Fired when an element is entered by the mouse arrow
element.addEventListener('mouseenter', () => {
  // Code to be executed when the event is fired
});

// mouseleave

// Fired when an element is exited by the mouse arrow
element.addEventListener('mouseleave', () => {
  // Code to be executed when the event is fired
