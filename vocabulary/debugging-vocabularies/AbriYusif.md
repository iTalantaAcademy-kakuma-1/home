# Watch () method

The watch function watches any property of an object for changes. This also includes the first assignment of value to the property.
The watch function includes a handler which has access to the old value and the new value of the watched property of the object.
## syntax
obj.watch(“name given to the value”, function (oldValue, newValue)
 {
console.log(`Value of "name given to the value" changed from ${oldValue} to ${newValue}`);
});

If the given property, on which the watcher is set, is deleted, the watch doesn’t disappear, rather it remains intact. If the property is recreated in the future, the watch continues functioning in the same way. In order to remove the watcher, one has to call the unwatch() function.

## Syntax when combining with unwatch() method
obj.watch(“name given to the value”, function (oldValue, newValue) {
console.log(`Value of “name given to the value” changed from ${oldValue} to ${newValue}`);
});
obj.“name given to the value” = “I have changed.”;

obj.“name given to the value” = “I have changed again.”;

delete obj.“name given to the value”;

obj.“name given to the value” = “I am back from dead!”;

obj.unwatch(‘foo’);

obj.“name given to the value” = “Finally, I am no one.”


# Call() Method
The JavaScript Function call() method is used to call a function contains this value and an argument provided individually. 

## Syntax
function.call(thisArg, arg1,arg2,....,argn)  

it has parameters and return keyword

### Parameter
thisArg - It is optional. The this value is given for the call to function.

arg1,arg2,...,argn - It is optional. It represents the arguments for the function.

### Return Value
It returns the result of the calling function along provided this value and arguments.

# Example of call() method

unction Emp(id,name) {  
  this.id = id;   
  this.name = name;  
}  
function PermanentEmp(id,name) {  
 Emp.call(this,id,name);  
}  
document.writeln(new PermanentEmp(101,"John Martin").name);  

# Call stack
A call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function.

When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.

When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.
# Example
function greeting() {

   // [1] Some code here
   sayHi();

   // [2] Some code here
}

function sayHi() {
   return "Hi!";
}

// Invoke the `greeting` function

greeting();

// [3] Some code here

# Scope 
Scope refers to the current context of code, which determines the accessibility of variables to JavaScript. 

## types of Scope 
### 1. Local
### 2. Global

### 1. Global variables 
are those declared outside of a block

### 2. Local variables 
are those declared inside of a block

# Example

// Initialize a global variable
var species = "human";
 
function transform() {

  // Initialize a local, function-scoped variable

  var species = "werewolf";

  console.log(species);

}

// Log the global and local variable

console.log(species);

transform();

console.log(species);
