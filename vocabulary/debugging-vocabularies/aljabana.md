# Uncaught reference error
---

## Defination and meaning
* The JavaScript exception "variable is not defined" occurs when there is a non-existent variable referenced somewhere.

A variable needs to be available in the current context of execution. Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.

# Examples

## variable not decleared
foo.substring(1); // ReferenceError: foo is not defined

The "foo" variable isn't defined anywhere. It needs to be some string, so that the String.prototype.substring() method will work.


var foo = 'bar';
foo.substring(1); // "ar"

A variable needs to be available in the current context of execution. Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function

function numbers() {
  var num1 = 2,
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
