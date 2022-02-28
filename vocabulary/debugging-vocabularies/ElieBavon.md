# DEBUGGING VOCABULARY

### Reference by Value in javascript

The difference between the two is that passing by value happens when assigning primitives while passing by reference when assigning objects.
## VALUE
Values are made of bits, they play different roles. Every value has a type that determines its role. Some values are numbers, some values are pieces of text, some values are functions,
let x= 1,
let y= a,
y+1,

The first statement let x = 1 defines a variable a initialized with the number 1.

The second statement let y = a defines another variable b and initializes it with the value of a variable — which is passing by value. Simpler, a copy of the number 1 is assigned to b.

## REFERENCE
 we can talk about references its when creating an object you're given a reference to that object. If 2 variables hold the same reference, then changing the object reflects in both variables.

The first statement let x = [1] creates an array, defines a variable x, and initializes the variable with a reference to the created array.

Then let y = x defines a variable y, and initializes y with the reference stored in x variable. This is a pass by reference.
## for the Comparison
Understanding the difference between values and references is important when you want to compare objects.

When using the strict comparison operator ===, 2 variables having values are equal if they have the same value. All of the below comparisons are equal: