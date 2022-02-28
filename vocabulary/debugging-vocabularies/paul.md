# Execution of programs in JavaScript
JavaScript is a synchronous (Moves to the next line only when the execution of the current line is completed) and single-threaded (Executes one command at a time in a specific order one after another serially) language. To know behind the scene of how JavaScript code gets executed internally, we have to know something called Execution Context and its role in the execution of JavaScript code.

## Execution Context :
Everything in JavaScript is wrapped inside Execution Context, which is an abstract concept (can be treated as a container) that holds the whole information about the environment within which the current JavaScript code is being executed.

Now, an Execution Context has two components and JavaScript code gets executed in two phases.

* ## Memory Allocation Phase: 
In this phase, all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In the case of a function, JavaScript copied the whole function into the memory block but in the case of variables, it assigns undefined as a placeholder.

* ## Code Execution Phase: 
In this phase, the JavaScript code is executed one line at a time inside the Code Component (also known as the Thread of execution) of Execution Context.

For example,

var number = 2;
function Square (n) {
    var res = n * n;
    return res;
}
var newNumber = Square(3);

In the above JavaScript code, there are two variables named number and newNumber and one function named Square which is returning the square of the number. So when we run this program, Global Execution Context is created.

