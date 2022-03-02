## ARRAYS
Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. Maybe we've got a series of product items and their prices stored in an array, and we want to loop through them all and print them out on an invoice, while totaling all the prices together and printing out the total price at the bottom.

### How To Creat Array
Arrays consist of square brackets and items that are separated by commas.
Example:
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

### Type of Arrays
<strong>Using the JavaScript Keyword new</strong>
The following example also creates an Array, and assigns values to it:

Example
const cars = new Array("Saab", "Volvo", "BMW");

Arrays are Objects
Arrays are a special type of objects. The type of operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John:

Array:
const person = ["John", "Doe", 46];

Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:

The filter() method creates a new array filled with elements that pass a test provided by a function.

mapArray()method
map() creates a new array from calling a function for every array element.

everyArray()Method
The every() method executes a function for each array element.
returns true if the function returns true for all elements and it returns false if the function returns false for one element.

someArray()method
The some() method checks if any array elements pass a test (provided as a function).
this filemethod executes the function once for each array element and If the function returns true, some() returns true and stops. also If the function returns false, some() returns false and stops.

findArray()method
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method retuns undefined if no elements are found.