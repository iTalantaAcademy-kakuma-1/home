# Debugging Vocabularies
## This keywords<br>
#### What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.<br><br>
<strong>Note:</strong>
this is not a variable. It is a keyword. You cannot change the value of this.<br><br>
## Example of this keyword: 
<hr>
<strong>this in a Method:</strong>
When used in an object method, this refers to the object.<br>
<strong>this Alone:</strong>
When used alone, this refers to the global object.

Because this is running in the global scope


let x = this;
document.getElementById("demo").innerHTML = x;

results [object Window]
