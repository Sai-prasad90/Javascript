// program 0
// Create an array 'names' with five elements.
let names = ["sai", "chetan", "mand", "apurva", "laxmikant"];
// Copy the reference of 'names' array to 'names2'.
names2 = names;
// Modify the first element of 'names2'.
names2[0] = "shreya";
// Output the original 'names' array.
console.log(names);
// Output the modified 'names2' array (since it references the same array as 'names').
console.log(names2);

// program 1
// Create an array 'numbers' with seven elements.
let numbers = [11, 22, 33, 44, 55, 66, 77];
// Define a function 'addThree' that takes three parameters and prints their sum.
function addThree(a, b, c) {
   console.log(a + b + c);
}
// Spread the 'numbers' array elements as arguments to the 'addThree' function.
addThree(...numbers);

// program 2
// Create an array 'cities' with three elements.
let cities = ["pune", "mumbai", "kolkata"];
// Copy the elements of 'cities' array to a new array 'cities2'.
let cities2 = [...cities];
// Modify the first element of 'cities2'.
cities2[0] = "warora";
// Output the modified 'cities2' array.
console.log(cities2);
// Output the original 'cities' array (unchanged since it was spread into 'cities2').
console.log(cities);

// program 3
// Create two arrays 'a' and 'b'.
let a = [11, 22, 33];
let b = [44, 55, 66];
// Concatenate 'a' and 'b' into a new array 'c'.
let c = a.concat(b);
// Output the concatenated array 'c'.
console.log(c);
// Output the original arrays 'a' and 'b'.
console.log(a);
console.log(b);
// Use the spread operator to concatenate 'a', 5, and 'b' into a new array 'd'.
let d = [...a, 5, ...b];
// Output the concatenated array 'd'.
console.log(d);

// program 4
// Create two objects 'obj1' and 'obj2'.
let obj1 = { name: 'manish', age: 12 };
let obj2 = { city: 'dubai', country: 'uae' };
// Use the spread operator to merge 'obj1' and 'obj2' into a new object 'obj3'.
let obj3 = { ...obj1, ...obj2 };
// Output the merged object 'obj3'.
console.log(obj3);

// program 5
// Define a function 'addAll' that takes a variable number of arguments using the rest parameter.
function addAll(...eles) {
    console.log(eles);
    // Use the reduce function to sum up all elements in the array.
    return eles.reduce(function (acc, el, index, arr) {
        return acc + el;
    }, 0);
}
// Call 'addAll' with various numbers and output the result.
let q1 = addAll(11, 22, 33, 44, 55, 66, 77, 88, 8, 9, 0, 5, 7);
console.log(q1);

// program 6
// Create an array 'numberD' with five elements.
let numberD = [22, 33, 44, 55, 66];
// Destructure the array into variables 'a1', 'b1', 'c1', and 'd1'.
let [a1, b1, c1, ...d1] = numberD;
// Output the elements of the destructured array.
console.log(d1);
console.log(a1);
console.log(b1);
console.log(c1);

// program 6 (corrected)
// Create an object 'obj1a' with three properties.
let obj1a = { firstName: "sai", lastName: "wate", middleName: 'baba' };
// Destructure the object, extracting 'firstName', and the rest into 'restInfo'.
let { firstName, ...restInfo } = obj1a;
// Output the original object 'obj1a'.
console.log(obj1a);
// Output the destructured properties.
console.log(firstName);
console.log(restInfo);
